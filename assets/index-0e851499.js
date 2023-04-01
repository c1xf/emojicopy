(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const u of t)if(u.type==="childList")for(const r of u.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const u={};return t.integrity&&(u.integrity=t.integrity),t.referrerPolicy&&(u.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?u.credentials="include":t.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function n(t){if(t.ep)return;t.ep=!0;const u=i(t);fetch(t.href,u)}})();function Rd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ie={},bd={get exports(){return Ie},set exports(e){Ie=e}},Ut={},yl={},jd={get exports(){return yl},set exports(e){yl=e}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pn=Symbol.for("react.element"),Ld=Symbol.for("react.portal"),$d=Symbol.for("react.fragment"),Id=Symbol.for("react.strict_mode"),Md=Symbol.for("react.profiler"),Ud=Symbol.for("react.provider"),Vd=Symbol.for("react.context"),Hd=Symbol.for("react.forward_ref"),Wd=Symbol.for("react.suspense"),Qd=Symbol.for("react.memo"),Gd=Symbol.for("react.lazy"),Wa=Symbol.iterator;function Kd(e){return e===null||typeof e!="object"?null:(e=Wa&&e[Wa]||e["@@iterator"],typeof e=="function"?e:null)}var pf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ff=Object.assign,mf={};function ji(e,l,i){this.props=e,this.context=l,this.refs=mf,this.updater=i||pf}ji.prototype.isReactComponent={};ji.prototype.setState=function(e,l){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,l,"setState")};ji.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hf(){}hf.prototype=ji.prototype;function Hr(e,l,i){this.props=e,this.context=l,this.refs=mf,this.updater=i||pf}var Wr=Hr.prototype=new hf;Wr.constructor=Hr;Ff(Wr,ji.prototype);Wr.isPureReactComponent=!0;var Qa=Array.isArray,gf=Object.prototype.hasOwnProperty,Qr={current:null},qf={key:!0,ref:!0,__self:!0,__source:!0};function vf(e,l,i){var n,t={},u=null,r=null;if(l!=null)for(n in l.ref!==void 0&&(r=l.ref),l.key!==void 0&&(u=""+l.key),l)gf.call(l,n)&&!qf.hasOwnProperty(n)&&(t[n]=l[n]);var a=arguments.length-2;if(a===1)t.children=i;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];t.children=o}if(e&&e.defaultProps)for(n in a=e.defaultProps,a)t[n]===void 0&&(t[n]=a[n]);return{$$typeof:Pn,type:e,key:u,ref:r,props:t,_owner:Qr.current}}function Yd(e,l){return{$$typeof:Pn,type:e.type,key:l,ref:e.ref,props:e.props,_owner:e._owner}}function Gr(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pn}function Xd(e){var l={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(i){return l[i]})}var Ga=/\/+/g;function mu(e,l){return typeof e=="object"&&e!==null&&e.key!=null?Xd(""+e.key):l.toString(36)}function tt(e,l,i,n,t){var u=typeof e;(u==="undefined"||u==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(u){case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Pn:case Ld:r=!0}}if(r)return r=e,t=t(r),e=n===""?"."+mu(r,0):n,Qa(t)?(i="",e!=null&&(i=e.replace(Ga,"$&/")+"/"),tt(t,l,i,"",function(s){return s})):t!=null&&(Gr(t)&&(t=Yd(t,i+(!t.key||r&&r.key===t.key?"":(""+t.key).replace(Ga,"$&/")+"/")+e)),l.push(t)),1;if(r=0,n=n===""?".":n+":",Qa(e))for(var a=0;a<e.length;a++){u=e[a];var o=n+mu(u,a);r+=tt(u,l,i,o,t)}else if(o=Kd(e),typeof o=="function")for(e=o.call(e),a=0;!(u=e.next()).done;)u=u.value,o=n+mu(u,a++),r+=tt(u,l,i,o,t);else if(u==="object")throw l=String(e),Error("Objects are not valid as a React child (found: "+(l==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":l)+"). If you meant to render a collection of children, use an array instead.");return r}function Ln(e,l,i){if(e==null)return e;var n=[],t=0;return tt(e,n,"","",function(u){return l.call(i,u,t++)}),n}function Jd(e){if(e._status===-1){var l=e._result;l=l(),l.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i)},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i)}),e._status===-1&&(e._status=0,e._result=l)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},ut={transition:null},Zd={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:ut,ReactCurrentOwner:Qr};L.Children={map:Ln,forEach:function(e,l,i){Ln(e,function(){l.apply(this,arguments)},i)},count:function(e){var l=0;return Ln(e,function(){l++}),l},toArray:function(e){return Ln(e,function(l){return l})||[]},only:function(e){if(!Gr(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=ji;L.Fragment=$d;L.Profiler=Md;L.PureComponent=Hr;L.StrictMode=Id;L.Suspense=Wd;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zd;L.cloneElement=function(e,l,i){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Ff({},e.props),t=e.key,u=e.ref,r=e._owner;if(l!=null){if(l.ref!==void 0&&(u=l.ref,r=Qr.current),l.key!==void 0&&(t=""+l.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(o in l)gf.call(l,o)&&!qf.hasOwnProperty(o)&&(n[o]=l[o]===void 0&&a!==void 0?a[o]:l[o])}var o=arguments.length-2;if(o===1)n.children=i;else if(1<o){a=Array(o);for(var s=0;s<o;s++)a[s]=arguments[s+2];n.children=a}return{$$typeof:Pn,type:e.type,key:t,ref:u,props:n,_owner:r}};L.createContext=function(e){return e={$$typeof:Vd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ud,_context:e},e.Consumer=e};L.createElement=vf;L.createFactory=function(e){var l=vf.bind(null,e);return l.type=e,l};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Hd,render:e}};L.isValidElement=Gr;L.lazy=function(e){return{$$typeof:Gd,_payload:{_status:-1,_result:e},_init:Jd}};L.memo=function(e,l){return{$$typeof:Qd,type:e,compare:l===void 0?null:l}};L.startTransition=function(e){var l=ut.transition;ut.transition={};try{e()}finally{ut.transition=l}};L.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};L.useCallback=function(e,l){return Pe.current.useCallback(e,l)};L.useContext=function(e){return Pe.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};L.useEffect=function(e,l){return Pe.current.useEffect(e,l)};L.useId=function(){return Pe.current.useId()};L.useImperativeHandle=function(e,l,i){return Pe.current.useImperativeHandle(e,l,i)};L.useInsertionEffect=function(e,l){return Pe.current.useInsertionEffect(e,l)};L.useLayoutEffect=function(e,l){return Pe.current.useLayoutEffect(e,l)};L.useMemo=function(e,l){return Pe.current.useMemo(e,l)};L.useReducer=function(e,l,i){return Pe.current.useReducer(e,l,i)};L.useRef=function(e){return Pe.current.useRef(e)};L.useState=function(e){return Pe.current.useState(e)};L.useSyncExternalStore=function(e,l,i){return Pe.current.useSyncExternalStore(e,l,i)};L.useTransition=function(){return Pe.current.useTransition()};L.version="18.2.0";(function(e){e.exports=L})(jd);const Nn=Rd(yl);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0=yl,l0=Symbol.for("react.element"),i0=Symbol.for("react.fragment"),n0=Object.prototype.hasOwnProperty,t0=e0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u0={key:!0,ref:!0,__self:!0,__source:!0};function wf(e,l,i){var n,t={},u=null,r=null;i!==void 0&&(u=""+i),l.key!==void 0&&(u=""+l.key),l.ref!==void 0&&(r=l.ref);for(n in l)n0.call(l,n)&&!u0.hasOwnProperty(n)&&(t[n]=l[n]);if(e&&e.defaultProps)for(n in l=e.defaultProps,l)t[n]===void 0&&(t[n]=l[n]);return{$$typeof:l0,type:e,key:u,ref:r,props:t,_owner:t0.current}}Ut.Fragment=i0;Ut.jsx=wf;Ut.jsxs=wf;(function(e){e.exports=Ut})(bd);var Hu={},Wu={},r0={get exports(){return Wu},set exports(e){Wu=e}},He={},Qu={},a0={get exports(){return Qu},set exports(e){Qu=e}},kf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function l(k,z){var T=k.length;k.push(z);e:for(;0<T;){var K=T-1>>>1,C=k[K];if(0<t(C,z))k[K]=z,k[T]=C,T=K;else break e}}function i(k){return k.length===0?null:k[0]}function n(k){if(k.length===0)return null;var z=k[0],T=k.pop();if(T!==z){k[0]=T;e:for(var K=0,C=k.length,S=C>>>1;K<S;){var _=2*(K+1)-1,O=k[_],F=_+1,$=k[F];if(0>t(O,T))F<C&&0>t($,O)?(k[K]=$,k[F]=T,K=F):(k[K]=O,k[_]=T,K=_);else if(F<C&&0>t($,T))k[K]=$,k[F]=T,K=F;else break e}}return z}function t(k,z){var T=k.sortIndex-z.sortIndex;return T!==0?T:k.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var r=Date,a=r.now();e.unstable_now=function(){return r.now()-a}}var o=[],s=[],E=1,y=null,p=3,v=!1,h=!1,g=!1,N=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function c(k){for(var z=i(s);z!==null;){if(z.callback===null)n(s);else if(z.startTime<=k)n(s),z.sortIndex=z.expirationTime,l(o,z);else break;z=i(s)}}function m(k){if(g=!1,c(k),!h)if(i(o)!==null)h=!0,El(w);else{var z=i(s);z!==null&&xe(m,z.startTime-k)}}function w(k,z){h=!1,g&&(g=!1,d(x),x=-1),v=!0;var T=p;try{for(c(z),y=i(o);y!==null&&(!(y.expirationTime>z)||k&&!de());){var K=y.callback;if(typeof K=="function"){y.callback=null,p=y.priorityLevel;var C=K(y.expirationTime<=z);z=e.unstable_now(),typeof C=="function"?y.callback=C:y===i(o)&&n(o),c(z)}else n(o);y=i(o)}if(y!==null)var S=!0;else{var _=i(s);_!==null&&xe(m,_.startTime-z),S=!1}return S}finally{y=null,p=T,v=!1}}var A=!1,P=null,x=-1,M=5,R=-1;function de(){return!(e.unstable_now()-R<M)}function oe(){if(P!==null){var k=e.unstable_now();R=k;var z=!0;try{z=P(!0,k)}finally{z?pe():(A=!1,P=null)}}else A=!1}var pe;if(typeof f=="function")pe=function(){f(oe)};else if(typeof MessageChannel<"u"){var Le=new MessageChannel,we=Le.port2;Le.port1.onmessage=oe,pe=function(){we.postMessage(null)}}else pe=function(){N(oe,0)};function El(k){P=k,A||(A=!0,pe())}function xe(k,z){x=N(function(){k(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){h||v||(h=!0,El(w))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return i(o)},e.unstable_next=function(k){switch(p){case 1:case 2:case 3:var z=3;break;default:z=p}var T=p;p=z;try{return k()}finally{p=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,z){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var T=p;p=k;try{return z()}finally{p=T}},e.unstable_scheduleCallback=function(k,z,T){var K=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?K+T:K):T=K,k){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=T+C,k={id:E++,callback:z,priorityLevel:k,startTime:T,expirationTime:C,sortIndex:-1},T>K?(k.sortIndex=T,l(s,k),i(o)===null&&k===i(s)&&(g?(d(x),x=-1):g=!0,xe(m,T-K))):(k.sortIndex=C,l(o,k),h||v||(h=!0,El(w))),k},e.unstable_shouldYield=de,e.unstable_wrapCallback=function(k){var z=p;return function(){var T=p;p=z;try{return k.apply(this,arguments)}finally{p=T}}}})(kf);(function(e){e.exports=kf})(a0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Df=yl,Ve=Qu;function q(e){for(var l="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)l+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cf=new Set,cn={};function ai(e,l){_i(e,l),_i(e+"Capture",l)}function _i(e,l){for(cn[e]=l,e=0;e<l.length;e++)Cf.add(l[e])}var wl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gu=Object.prototype.hasOwnProperty,o0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ka={},Ya={};function f0(e){return Gu.call(Ya,e)?!0:Gu.call(Ka,e)?!1:o0.test(e)?Ya[e]=!0:(Ka[e]=!0,!1)}function s0(e,l,i,n){if(i!==null&&i.type===0)return!1;switch(typeof l){case"function":case"symbol":return!0;case"boolean":return n?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function d0(e,l,i,n){if(l===null||typeof l>"u"||s0(e,l,i,n))return!0;if(n)return!1;if(i!==null)switch(i.type){case 3:return!l;case 4:return l===!1;case 5:return isNaN(l);case 6:return isNaN(l)||1>l}return!1}function Ne(e,l,i,n,t,u,r){this.acceptsBooleans=l===2||l===3||l===4,this.attributeName=n,this.attributeNamespace=t,this.mustUseProperty=i,this.propertyName=e,this.type=l,this.sanitizeURL=u,this.removeEmptyString=r}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ve[e]=new Ne(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var l=e[0];ve[l]=new Ne(l,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ve[e]=new Ne(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ve[e]=new Ne(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ve[e]=new Ne(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ve[e]=new Ne(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ve[e]=new Ne(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ve[e]=new Ne(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ve[e]=new Ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var Kr=/[\-:]([a-z])/g;function Yr(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var l=e.replace(Kr,Yr);ve[l]=new Ne(l,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var l=e.replace(Kr,Yr);ve[l]=new Ne(l,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var l=e.replace(Kr,Yr);ve[l]=new Ne(l,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ve[e]=new Ne(e,1,!1,e.toLowerCase(),null,!1,!1)});ve.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ve[e]=new Ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xr(e,l,i,n){var t=ve.hasOwnProperty(l)?ve[l]:null;(t!==null?t.type!==0:n||!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(d0(l,i,t,n)&&(i=null),n||t===null?f0(l)&&(i===null?e.removeAttribute(l):e.setAttribute(l,""+i)):t.mustUseProperty?e[t.propertyName]=i===null?t.type===3?!1:"":i:(l=t.attributeName,n=t.attributeNamespace,i===null?e.removeAttribute(l):(t=t.type,i=t===3||t===4&&i===!0?"":""+i,n?e.setAttributeNS(n,l,i):e.setAttribute(l,i))))}var Sl=Df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$n=Symbol.for("react.element"),si=Symbol.for("react.portal"),di=Symbol.for("react.fragment"),Jr=Symbol.for("react.strict_mode"),Ku=Symbol.for("react.profiler"),Sf=Symbol.for("react.provider"),Af=Symbol.for("react.context"),Zr=Symbol.for("react.forward_ref"),Yu=Symbol.for("react.suspense"),Xu=Symbol.for("react.suspense_list"),ea=Symbol.for("react.memo"),_l=Symbol.for("react.lazy"),xf=Symbol.for("react.offscreen"),Xa=Symbol.iterator;function Ui(e){return e===null||typeof e!="object"?null:(e=Xa&&e[Xa]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,hu;function Xi(e){if(hu===void 0)try{throw Error()}catch(i){var l=i.stack.trim().match(/\n( *(at )?)/);hu=l&&l[1]||""}return`
`+hu+e}var gu=!1;function qu(e,l){if(!e||gu)return"";gu=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(l)if(l=function(){throw Error()},Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(s){var n=s}Reflect.construct(e,[],l)}else{try{l.call()}catch(s){n=s}e.call(l.prototype)}else{try{throw Error()}catch(s){n=s}e()}}catch(s){if(s&&n&&typeof s.stack=="string"){for(var t=s.stack.split(`
`),u=n.stack.split(`
`),r=t.length-1,a=u.length-1;1<=r&&0<=a&&t[r]!==u[a];)a--;for(;1<=r&&0<=a;r--,a--)if(t[r]!==u[a]){if(r!==1||a!==1)do if(r--,a--,0>a||t[r]!==u[a]){var o=`
`+t[r].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=r&&0<=a);break}}}finally{gu=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?Xi(e):""}function c0(e){switch(e.tag){case 5:return Xi(e.type);case 16:return Xi("Lazy");case 13:return Xi("Suspense");case 19:return Xi("SuspenseList");case 0:case 2:case 15:return e=qu(e.type,!1),e;case 11:return e=qu(e.type.render,!1),e;case 1:return e=qu(e.type,!0),e;default:return""}}function Ju(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case di:return"Fragment";case si:return"Portal";case Ku:return"Profiler";case Jr:return"StrictMode";case Yu:return"Suspense";case Xu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Af:return(e.displayName||"Context")+".Consumer";case Sf:return(e._context.displayName||"Context")+".Provider";case Zr:var l=e.render;return e=e.displayName,e||(e=l.displayName||l.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ea:return l=e.displayName||null,l!==null?l:Ju(e.type)||"Memo";case _l:l=e._payload,e=e._init;try{return Ju(e(l))}catch{}}return null}function y0(e){var l=e.type;switch(e.tag){case 24:return"Cache";case 9:return(l.displayName||"Context")+".Consumer";case 10:return(l._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=l.render,e=e.displayName||e.name||"",l.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return l;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ju(l);case 8:return l===Jr?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof l=="function")return l.displayName||l.name||null;if(typeof l=="string")return l}return null}function Vl(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _f(e){var l=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function E0(e){var l=_f(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,l),n=""+e[l];if(!e.hasOwnProperty(l)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var t=i.get,u=i.set;return Object.defineProperty(e,l,{configurable:!0,get:function(){return t.call(this)},set:function(r){n=""+r,u.call(this,r)}}),Object.defineProperty(e,l,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[l]}}}}function In(e){e._valueTracker||(e._valueTracker=E0(e))}function Bf(e){if(!e)return!1;var l=e._valueTracker;if(!l)return!0;var i=l.getValue(),n="";return e&&(n=_f(e)?e.checked?"true":"false":e.value),e=n,e!==i?(l.setValue(e),!0):!1}function mt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zu(e,l){var i=l.checked;return ie({},l,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Ja(e,l){var i=l.defaultValue==null?"":l.defaultValue,n=l.checked!=null?l.checked:l.defaultChecked;i=Vl(l.value!=null?l.value:i),e._wrapperState={initialChecked:n,initialValue:i,controlled:l.type==="checkbox"||l.type==="radio"?l.checked!=null:l.value!=null}}function Pf(e,l){l=l.checked,l!=null&&Xr(e,"checked",l,!1)}function er(e,l){Pf(e,l);var i=Vl(l.value),n=l.type;if(i!=null)n==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}l.hasOwnProperty("value")?lr(e,l.type,i):l.hasOwnProperty("defaultValue")&&lr(e,l.type,Vl(l.defaultValue)),l.checked==null&&l.defaultChecked!=null&&(e.defaultChecked=!!l.defaultChecked)}function Za(e,l,i){if(l.hasOwnProperty("value")||l.hasOwnProperty("defaultValue")){var n=l.type;if(!(n!=="submit"&&n!=="reset"||l.value!==void 0&&l.value!==null))return;l=""+e._wrapperState.initialValue,i||l===e.value||(e.value=l),e.defaultValue=l}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function lr(e,l,i){(l!=="number"||mt(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var Ji=Array.isArray;function ki(e,l,i,n){if(e=e.options,l){l={};for(var t=0;t<i.length;t++)l["$"+i[t]]=!0;for(i=0;i<e.length;i++)t=l.hasOwnProperty("$"+e[i].value),e[i].selected!==t&&(e[i].selected=t),t&&n&&(e[i].defaultSelected=!0)}else{for(i=""+Vl(i),l=null,t=0;t<e.length;t++){if(e[t].value===i){e[t].selected=!0,n&&(e[t].defaultSelected=!0);return}l!==null||e[t].disabled||(l=e[t])}l!==null&&(l.selected=!0)}}function ir(e,l){if(l.dangerouslySetInnerHTML!=null)throw Error(q(91));return ie({},l,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function eo(e,l){var i=l.value;if(i==null){if(i=l.children,l=l.defaultValue,i!=null){if(l!=null)throw Error(q(92));if(Ji(i)){if(1<i.length)throw Error(q(93));i=i[0]}l=i}l==null&&(l=""),i=l}e._wrapperState={initialValue:Vl(i)}}function Nf(e,l){var i=Vl(l.value),n=Vl(l.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),l.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),n!=null&&(e.defaultValue=""+n)}function lo(e){var l=e.textContent;l===e._wrapperState.initialValue&&l!==""&&l!==null&&(e.value=l)}function zf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nr(e,l){return e==null||e==="http://www.w3.org/1999/xhtml"?zf(l):e==="http://www.w3.org/2000/svg"&&l==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mn,Tf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(l,i,n,t){MSApp.execUnsafeLocalFunction(function(){return e(l,i,n,t)})}:e}(function(e,l){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=l;else{for(Mn=Mn||document.createElement("div"),Mn.innerHTML="<svg>"+l.valueOf().toString()+"</svg>",l=Mn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;l.firstChild;)e.appendChild(l.firstChild)}});function yn(e,l){if(l){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=l;return}}e.textContent=l}var ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},p0=["Webkit","ms","Moz","O"];Object.keys(ln).forEach(function(e){p0.forEach(function(l){l=l+e.charAt(0).toUpperCase()+e.substring(1),ln[l]=ln[e]})});function Of(e,l,i){return l==null||typeof l=="boolean"||l===""?"":i||typeof l!="number"||l===0||ln.hasOwnProperty(e)&&ln[e]?(""+l).trim():l+"px"}function Rf(e,l){e=e.style;for(var i in l)if(l.hasOwnProperty(i)){var n=i.indexOf("--")===0,t=Of(i,l[i],n);i==="float"&&(i="cssFloat"),n?e.setProperty(i,t):e[i]=t}}var F0=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tr(e,l){if(l){if(F0[e]&&(l.children!=null||l.dangerouslySetInnerHTML!=null))throw Error(q(137,e));if(l.dangerouslySetInnerHTML!=null){if(l.children!=null)throw Error(q(60));if(typeof l.dangerouslySetInnerHTML!="object"||!("__html"in l.dangerouslySetInnerHTML))throw Error(q(61))}if(l.style!=null&&typeof l.style!="object")throw Error(q(62))}}function ur(e,l){if(e.indexOf("-")===-1)return typeof l.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rr=null;function la(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ar=null,Di=null,Ci=null;function io(e){if(e=On(e)){if(typeof ar!="function")throw Error(q(280));var l=e.stateNode;l&&(l=Gt(l),ar(e.stateNode,e.type,l))}}function bf(e){Di?Ci?Ci.push(e):Ci=[e]:Di=e}function jf(){if(Di){var e=Di,l=Ci;if(Ci=Di=null,io(e),l)for(e=0;e<l.length;e++)io(l[e])}}function Lf(e,l){return e(l)}function $f(){}var vu=!1;function If(e,l,i){if(vu)return e(l,i);vu=!0;try{return Lf(e,l,i)}finally{vu=!1,(Di!==null||Ci!==null)&&($f(),jf())}}function En(e,l){var i=e.stateNode;if(i===null)return null;var n=Gt(i);if(n===null)return null;i=n[l];e:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(q(231,l,typeof i));return i}var or=!1;if(wl)try{var Vi={};Object.defineProperty(Vi,"passive",{get:function(){or=!0}}),window.addEventListener("test",Vi,Vi),window.removeEventListener("test",Vi,Vi)}catch{or=!1}function m0(e,l,i,n,t,u,r,a,o){var s=Array.prototype.slice.call(arguments,3);try{l.apply(i,s)}catch(E){this.onError(E)}}var nn=!1,ht=null,gt=!1,fr=null,h0={onError:function(e){nn=!0,ht=e}};function g0(e,l,i,n,t,u,r,a,o){nn=!1,ht=null,m0.apply(h0,arguments)}function q0(e,l,i,n,t,u,r,a,o){if(g0.apply(this,arguments),nn){if(nn){var s=ht;nn=!1,ht=null}else throw Error(q(198));gt||(gt=!0,fr=s)}}function oi(e){var l=e,i=e;if(e.alternate)for(;l.return;)l=l.return;else{e=l;do l=e,l.flags&4098&&(i=l.return),e=l.return;while(e)}return l.tag===3?i:null}function Mf(e){if(e.tag===13){var l=e.memoizedState;if(l===null&&(e=e.alternate,e!==null&&(l=e.memoizedState)),l!==null)return l.dehydrated}return null}function no(e){if(oi(e)!==e)throw Error(q(188))}function v0(e){var l=e.alternate;if(!l){if(l=oi(e),l===null)throw Error(q(188));return l!==e?null:e}for(var i=e,n=l;;){var t=i.return;if(t===null)break;var u=t.alternate;if(u===null){if(n=t.return,n!==null){i=n;continue}break}if(t.child===u.child){for(u=t.child;u;){if(u===i)return no(t),e;if(u===n)return no(t),l;u=u.sibling}throw Error(q(188))}if(i.return!==n.return)i=t,n=u;else{for(var r=!1,a=t.child;a;){if(a===i){r=!0,i=t,n=u;break}if(a===n){r=!0,n=t,i=u;break}a=a.sibling}if(!r){for(a=u.child;a;){if(a===i){r=!0,i=u,n=t;break}if(a===n){r=!0,n=u,i=t;break}a=a.sibling}if(!r)throw Error(q(189))}}if(i.alternate!==n)throw Error(q(190))}if(i.tag!==3)throw Error(q(188));return i.stateNode.current===i?e:l}function Uf(e){return e=v0(e),e!==null?Vf(e):null}function Vf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var l=Vf(e);if(l!==null)return l;e=e.sibling}return null}var Hf=Ve.unstable_scheduleCallback,to=Ve.unstable_cancelCallback,w0=Ve.unstable_shouldYield,k0=Ve.unstable_requestPaint,re=Ve.unstable_now,D0=Ve.unstable_getCurrentPriorityLevel,ia=Ve.unstable_ImmediatePriority,Wf=Ve.unstable_UserBlockingPriority,qt=Ve.unstable_NormalPriority,C0=Ve.unstable_LowPriority,Qf=Ve.unstable_IdlePriority,Vt=null,dl=null;function S0(e){if(dl&&typeof dl.onCommitFiberRoot=="function")try{dl.onCommitFiberRoot(Vt,e,void 0,(e.current.flags&128)===128)}catch{}}var ul=Math.clz32?Math.clz32:_0,A0=Math.log,x0=Math.LN2;function _0(e){return e>>>=0,e===0?32:31-(A0(e)/x0|0)|0}var Un=64,Vn=4194304;function Zi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vt(e,l){var i=e.pendingLanes;if(i===0)return 0;var n=0,t=e.suspendedLanes,u=e.pingedLanes,r=i&268435455;if(r!==0){var a=r&~t;a!==0?n=Zi(a):(u&=r,u!==0&&(n=Zi(u)))}else r=i&~t,r!==0?n=Zi(r):u!==0&&(n=Zi(u));if(n===0)return 0;if(l!==0&&l!==n&&!(l&t)&&(t=n&-n,u=l&-l,t>=u||t===16&&(u&4194240)!==0))return l;if(n&4&&(n|=i&16),l=e.entangledLanes,l!==0)for(e=e.entanglements,l&=n;0<l;)i=31-ul(l),t=1<<i,n|=e[i],l&=~t;return n}function B0(e,l){switch(e){case 1:case 2:case 4:return l+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function P0(e,l){for(var i=e.suspendedLanes,n=e.pingedLanes,t=e.expirationTimes,u=e.pendingLanes;0<u;){var r=31-ul(u),a=1<<r,o=t[r];o===-1?(!(a&i)||a&n)&&(t[r]=B0(a,l)):o<=l&&(e.expiredLanes|=a),u&=~a}}function sr(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Gf(){var e=Un;return Un<<=1,!(Un&4194240)&&(Un=64),e}function wu(e){for(var l=[],i=0;31>i;i++)l.push(e);return l}function zn(e,l,i){e.pendingLanes|=l,l!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,l=31-ul(l),e[l]=i}function N0(e,l){var i=e.pendingLanes&~l;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=l,e.mutableReadLanes&=l,e.entangledLanes&=l,l=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<i;){var t=31-ul(i),u=1<<t;l[t]=0,n[t]=-1,e[t]=-1,i&=~u}}function na(e,l){var i=e.entangledLanes|=l;for(e=e.entanglements;i;){var n=31-ul(i),t=1<<n;t&l|e[n]&l&&(e[n]|=l),i&=~t}}var Q=0;function Kf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Yf,ta,Xf,Jf,Zf,dr=!1,Hn=[],Ol=null,Rl=null,bl=null,pn=new Map,Fn=new Map,Pl=[],z0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uo(e,l){switch(e){case"focusin":case"focusout":Ol=null;break;case"dragenter":case"dragleave":Rl=null;break;case"mouseover":case"mouseout":bl=null;break;case"pointerover":case"pointerout":pn.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fn.delete(l.pointerId)}}function Hi(e,l,i,n,t,u){return e===null||e.nativeEvent!==u?(e={blockedOn:l,domEventName:i,eventSystemFlags:n,nativeEvent:u,targetContainers:[t]},l!==null&&(l=On(l),l!==null&&ta(l)),e):(e.eventSystemFlags|=n,l=e.targetContainers,t!==null&&l.indexOf(t)===-1&&l.push(t),e)}function T0(e,l,i,n,t){switch(l){case"focusin":return Ol=Hi(Ol,e,l,i,n,t),!0;case"dragenter":return Rl=Hi(Rl,e,l,i,n,t),!0;case"mouseover":return bl=Hi(bl,e,l,i,n,t),!0;case"pointerover":var u=t.pointerId;return pn.set(u,Hi(pn.get(u)||null,e,l,i,n,t)),!0;case"gotpointercapture":return u=t.pointerId,Fn.set(u,Hi(Fn.get(u)||null,e,l,i,n,t)),!0}return!1}function es(e){var l=Xl(e.target);if(l!==null){var i=oi(l);if(i!==null){if(l=i.tag,l===13){if(l=Mf(i),l!==null){e.blockedOn=l,Zf(e.priority,function(){Xf(i)});return}}else if(l===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rt(e){if(e.blockedOn!==null)return!1;for(var l=e.targetContainers;0<l.length;){var i=cr(e.domEventName,e.eventSystemFlags,l[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var n=new i.constructor(i.type,i);rr=n,i.target.dispatchEvent(n),rr=null}else return l=On(i),l!==null&&ta(l),e.blockedOn=i,!1;l.shift()}return!0}function ro(e,l,i){rt(e)&&i.delete(l)}function O0(){dr=!1,Ol!==null&&rt(Ol)&&(Ol=null),Rl!==null&&rt(Rl)&&(Rl=null),bl!==null&&rt(bl)&&(bl=null),pn.forEach(ro),Fn.forEach(ro)}function Wi(e,l){e.blockedOn===l&&(e.blockedOn=null,dr||(dr=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,O0)))}function mn(e){function l(t){return Wi(t,e)}if(0<Hn.length){Wi(Hn[0],e);for(var i=1;i<Hn.length;i++){var n=Hn[i];n.blockedOn===e&&(n.blockedOn=null)}}for(Ol!==null&&Wi(Ol,e),Rl!==null&&Wi(Rl,e),bl!==null&&Wi(bl,e),pn.forEach(l),Fn.forEach(l),i=0;i<Pl.length;i++)n=Pl[i],n.blockedOn===e&&(n.blockedOn=null);for(;0<Pl.length&&(i=Pl[0],i.blockedOn===null);)es(i),i.blockedOn===null&&Pl.shift()}var Si=Sl.ReactCurrentBatchConfig,wt=!0;function R0(e,l,i,n){var t=Q,u=Si.transition;Si.transition=null;try{Q=1,ua(e,l,i,n)}finally{Q=t,Si.transition=u}}function b0(e,l,i,n){var t=Q,u=Si.transition;Si.transition=null;try{Q=4,ua(e,l,i,n)}finally{Q=t,Si.transition=u}}function ua(e,l,i,n){if(wt){var t=cr(e,l,i,n);if(t===null)Nu(e,l,n,kt,i),uo(e,n);else if(T0(t,e,l,i,n))n.stopPropagation();else if(uo(e,n),l&4&&-1<z0.indexOf(e)){for(;t!==null;){var u=On(t);if(u!==null&&Yf(u),u=cr(e,l,i,n),u===null&&Nu(e,l,n,kt,i),u===t)break;t=u}t!==null&&n.stopPropagation()}else Nu(e,l,n,null,i)}}var kt=null;function cr(e,l,i,n){if(kt=null,e=la(n),e=Xl(e),e!==null)if(l=oi(e),l===null)e=null;else if(i=l.tag,i===13){if(e=Mf(l),e!==null)return e;e=null}else if(i===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;e=null}else l!==e&&(e=null);return kt=e,null}function ls(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(D0()){case ia:return 1;case Wf:return 4;case qt:case C0:return 16;case Qf:return 536870912;default:return 16}default:return 16}}var zl=null,ra=null,at=null;function is(){if(at)return at;var e,l=ra,i=l.length,n,t="value"in zl?zl.value:zl.textContent,u=t.length;for(e=0;e<i&&l[e]===t[e];e++);var r=i-e;for(n=1;n<=r&&l[i-n]===t[u-n];n++);return at=t.slice(e,1<n?1-n:void 0)}function ot(e){var l=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&l===13&&(e=13)):e=l,e===10&&(e=13),32<=e||e===13?e:0}function Wn(){return!0}function ao(){return!1}function We(e){function l(i,n,t,u,r){this._reactName=i,this._targetInst=t,this.type=n,this.nativeEvent=u,this.target=r,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(i=e[a],this[a]=i?i(u):u[a]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Wn:ao,this.isPropagationStopped=ao,this}return ie(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),l}var Li={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},aa=We(Li),Tn=ie({},Li,{view:0,detail:0}),j0=We(Tn),ku,Du,Qi,Ht=ie({},Tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qi&&(Qi&&e.type==="mousemove"?(ku=e.screenX-Qi.screenX,Du=e.screenY-Qi.screenY):Du=ku=0,Qi=e),ku)},movementY:function(e){return"movementY"in e?e.movementY:Du}}),oo=We(Ht),L0=ie({},Ht,{dataTransfer:0}),$0=We(L0),I0=ie({},Tn,{relatedTarget:0}),Cu=We(I0),M0=ie({},Li,{animationName:0,elapsedTime:0,pseudoElement:0}),U0=We(M0),V0=ie({},Li,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),H0=We(V0),W0=ie({},Li,{data:0}),fo=We(W0),Q0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y0(e){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(e):(e=K0[e])?!!l[e]:!1}function oa(){return Y0}var X0=ie({},Tn,{key:function(e){if(e.key){var l=Q0[e.key]||e.key;if(l!=="Unidentified")return l}return e.type==="keypress"?(e=ot(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?G0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oa,charCode:function(e){return e.type==="keypress"?ot(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ot(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),J0=We(X0),Z0=ie({},Ht,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),so=We(Z0),ec=ie({},Tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oa}),lc=We(ec),ic=ie({},Li,{propertyName:0,elapsedTime:0,pseudoElement:0}),nc=We(ic),tc=ie({},Ht,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uc=We(tc),rc=[9,13,27,32],fa=wl&&"CompositionEvent"in window,tn=null;wl&&"documentMode"in document&&(tn=document.documentMode);var ac=wl&&"TextEvent"in window&&!tn,ns=wl&&(!fa||tn&&8<tn&&11>=tn),co=String.fromCharCode(32),yo=!1;function ts(e,l){switch(e){case"keyup":return rc.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function us(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ci=!1;function oc(e,l){switch(e){case"compositionend":return us(l);case"keypress":return l.which!==32?null:(yo=!0,co);case"textInput":return e=l.data,e===co&&yo?null:e;default:return null}}function fc(e,l){if(ci)return e==="compositionend"||!fa&&ts(e,l)?(e=is(),at=ra=zl=null,ci=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return ns&&l.locale!=="ko"?null:l.data;default:return null}}var sc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eo(e){var l=e&&e.nodeName&&e.nodeName.toLowerCase();return l==="input"?!!sc[e.type]:l==="textarea"}function rs(e,l,i,n){bf(n),l=Dt(l,"onChange"),0<l.length&&(i=new aa("onChange","change",null,i,n),e.push({event:i,listeners:l}))}var un=null,hn=null;function dc(e){ms(e,0)}function Wt(e){var l=pi(e);if(Bf(l))return e}function cc(e,l){if(e==="change")return l}var as=!1;if(wl){var Su;if(wl){var Au="oninput"in document;if(!Au){var po=document.createElement("div");po.setAttribute("oninput","return;"),Au=typeof po.oninput=="function"}Su=Au}else Su=!1;as=Su&&(!document.documentMode||9<document.documentMode)}function Fo(){un&&(un.detachEvent("onpropertychange",os),hn=un=null)}function os(e){if(e.propertyName==="value"&&Wt(hn)){var l=[];rs(l,hn,e,la(e)),If(dc,l)}}function yc(e,l,i){e==="focusin"?(Fo(),un=l,hn=i,un.attachEvent("onpropertychange",os)):e==="focusout"&&Fo()}function Ec(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wt(hn)}function pc(e,l){if(e==="click")return Wt(l)}function Fc(e,l){if(e==="input"||e==="change")return Wt(l)}function mc(e,l){return e===l&&(e!==0||1/e===1/l)||e!==e&&l!==l}var al=typeof Object.is=="function"?Object.is:mc;function gn(e,l){if(al(e,l))return!0;if(typeof e!="object"||e===null||typeof l!="object"||l===null)return!1;var i=Object.keys(e),n=Object.keys(l);if(i.length!==n.length)return!1;for(n=0;n<i.length;n++){var t=i[n];if(!Gu.call(l,t)||!al(e[t],l[t]))return!1}return!0}function mo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ho(e,l){var i=mo(e);e=0;for(var n;i;){if(i.nodeType===3){if(n=e+i.textContent.length,e<=l&&n>=l)return{node:i,offset:l-e};e=n}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=mo(i)}}function fs(e,l){return e&&l?e===l?!0:e&&e.nodeType===3?!1:l&&l.nodeType===3?fs(e,l.parentNode):"contains"in e?e.contains(l):e.compareDocumentPosition?!!(e.compareDocumentPosition(l)&16):!1:!1}function ss(){for(var e=window,l=mt();l instanceof e.HTMLIFrameElement;){try{var i=typeof l.contentWindow.location.href=="string"}catch{i=!1}if(i)e=l.contentWindow;else break;l=mt(e.document)}return l}function sa(e){var l=e&&e.nodeName&&e.nodeName.toLowerCase();return l&&(l==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||l==="textarea"||e.contentEditable==="true")}function hc(e){var l=ss(),i=e.focusedElem,n=e.selectionRange;if(l!==i&&i&&i.ownerDocument&&fs(i.ownerDocument.documentElement,i)){if(n!==null&&sa(i)){if(l=n.start,e=n.end,e===void 0&&(e=l),"selectionStart"in i)i.selectionStart=l,i.selectionEnd=Math.min(e,i.value.length);else if(e=(l=i.ownerDocument||document)&&l.defaultView||window,e.getSelection){e=e.getSelection();var t=i.textContent.length,u=Math.min(n.start,t);n=n.end===void 0?u:Math.min(n.end,t),!e.extend&&u>n&&(t=n,n=u,u=t),t=ho(i,u);var r=ho(i,n);t&&r&&(e.rangeCount!==1||e.anchorNode!==t.node||e.anchorOffset!==t.offset||e.focusNode!==r.node||e.focusOffset!==r.offset)&&(l=l.createRange(),l.setStart(t.node,t.offset),e.removeAllRanges(),u>n?(e.addRange(l),e.extend(r.node,r.offset)):(l.setEnd(r.node,r.offset),e.addRange(l)))}}for(l=[],e=i;e=e.parentNode;)e.nodeType===1&&l.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<l.length;i++)e=l[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gc=wl&&"documentMode"in document&&11>=document.documentMode,yi=null,yr=null,rn=null,Er=!1;function go(e,l,i){var n=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Er||yi==null||yi!==mt(n)||(n=yi,"selectionStart"in n&&sa(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),rn&&gn(rn,n)||(rn=n,n=Dt(yr,"onSelect"),0<n.length&&(l=new aa("onSelect","select",null,l,i),e.push({event:l,listeners:n}),l.target=yi)))}function Qn(e,l){var i={};return i[e.toLowerCase()]=l.toLowerCase(),i["Webkit"+e]="webkit"+l,i["Moz"+e]="moz"+l,i}var Ei={animationend:Qn("Animation","AnimationEnd"),animationiteration:Qn("Animation","AnimationIteration"),animationstart:Qn("Animation","AnimationStart"),transitionend:Qn("Transition","TransitionEnd")},xu={},ds={};wl&&(ds=document.createElement("div").style,"AnimationEvent"in window||(delete Ei.animationend.animation,delete Ei.animationiteration.animation,delete Ei.animationstart.animation),"TransitionEvent"in window||delete Ei.transitionend.transition);function Qt(e){if(xu[e])return xu[e];if(!Ei[e])return e;var l=Ei[e],i;for(i in l)if(l.hasOwnProperty(i)&&i in ds)return xu[e]=l[i];return e}var cs=Qt("animationend"),ys=Qt("animationiteration"),Es=Qt("animationstart"),ps=Qt("transitionend"),Fs=new Map,qo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wl(e,l){Fs.set(e,l),ai(l,[e])}for(var _u=0;_u<qo.length;_u++){var Bu=qo[_u],qc=Bu.toLowerCase(),vc=Bu[0].toUpperCase()+Bu.slice(1);Wl(qc,"on"+vc)}Wl(cs,"onAnimationEnd");Wl(ys,"onAnimationIteration");Wl(Es,"onAnimationStart");Wl("dblclick","onDoubleClick");Wl("focusin","onFocus");Wl("focusout","onBlur");Wl(ps,"onTransitionEnd");_i("onMouseEnter",["mouseout","mouseover"]);_i("onMouseLeave",["mouseout","mouseover"]);_i("onPointerEnter",["pointerout","pointerover"]);_i("onPointerLeave",["pointerout","pointerover"]);ai("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ai("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ai("onBeforeInput",["compositionend","keypress","textInput","paste"]);ai("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ai("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ai("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var en="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wc=new Set("cancel close invalid load scroll toggle".split(" ").concat(en));function vo(e,l,i){var n=e.type||"unknown-event";e.currentTarget=i,q0(n,l,void 0,e),e.currentTarget=null}function ms(e,l){l=(l&4)!==0;for(var i=0;i<e.length;i++){var n=e[i],t=n.event;n=n.listeners;e:{var u=void 0;if(l)for(var r=n.length-1;0<=r;r--){var a=n[r],o=a.instance,s=a.currentTarget;if(a=a.listener,o!==u&&t.isPropagationStopped())break e;vo(t,a,s),u=o}else for(r=0;r<n.length;r++){if(a=n[r],o=a.instance,s=a.currentTarget,a=a.listener,o!==u&&t.isPropagationStopped())break e;vo(t,a,s),u=o}}}if(gt)throw e=fr,gt=!1,fr=null,e}function X(e,l){var i=l[gr];i===void 0&&(i=l[gr]=new Set);var n=e+"__bubble";i.has(n)||(hs(l,e,2,!1),i.add(n))}function Pu(e,l,i){var n=0;l&&(n|=4),hs(i,e,n,l)}var Gn="_reactListening"+Math.random().toString(36).slice(2);function qn(e){if(!e[Gn]){e[Gn]=!0,Cf.forEach(function(i){i!=="selectionchange"&&(wc.has(i)||Pu(i,!1,e),Pu(i,!0,e))});var l=e.nodeType===9?e:e.ownerDocument;l===null||l[Gn]||(l[Gn]=!0,Pu("selectionchange",!1,l))}}function hs(e,l,i,n){switch(ls(l)){case 1:var t=R0;break;case 4:t=b0;break;default:t=ua}i=t.bind(null,l,i,e),t=void 0,!or||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(t=!0),n?t!==void 0?e.addEventListener(l,i,{capture:!0,passive:t}):e.addEventListener(l,i,!0):t!==void 0?e.addEventListener(l,i,{passive:t}):e.addEventListener(l,i,!1)}function Nu(e,l,i,n,t){var u=n;if(!(l&1)&&!(l&2)&&n!==null)e:for(;;){if(n===null)return;var r=n.tag;if(r===3||r===4){var a=n.stateNode.containerInfo;if(a===t||a.nodeType===8&&a.parentNode===t)break;if(r===4)for(r=n.return;r!==null;){var o=r.tag;if((o===3||o===4)&&(o=r.stateNode.containerInfo,o===t||o.nodeType===8&&o.parentNode===t))return;r=r.return}for(;a!==null;){if(r=Xl(a),r===null)return;if(o=r.tag,o===5||o===6){n=u=r;continue e}a=a.parentNode}}n=n.return}If(function(){var s=u,E=la(i),y=[];e:{var p=Fs.get(e);if(p!==void 0){var v=aa,h=e;switch(e){case"keypress":if(ot(i)===0)break e;case"keydown":case"keyup":v=J0;break;case"focusin":h="focus",v=Cu;break;case"focusout":h="blur",v=Cu;break;case"beforeblur":case"afterblur":v=Cu;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=oo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=$0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=lc;break;case cs:case ys:case Es:v=U0;break;case ps:v=nc;break;case"scroll":v=j0;break;case"wheel":v=uc;break;case"copy":case"cut":case"paste":v=H0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=so}var g=(l&4)!==0,N=!g&&e==="scroll",d=g?p!==null?p+"Capture":null:p;g=[];for(var f=s,c;f!==null;){c=f;var m=c.stateNode;if(c.tag===5&&m!==null&&(c=m,d!==null&&(m=En(f,d),m!=null&&g.push(vn(f,m,c)))),N)break;f=f.return}0<g.length&&(p=new v(p,h,null,i,E),y.push({event:p,listeners:g}))}}if(!(l&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&i!==rr&&(h=i.relatedTarget||i.fromElement)&&(Xl(h)||h[kl]))break e;if((v||p)&&(p=E.window===E?E:(p=E.ownerDocument)?p.defaultView||p.parentWindow:window,v?(h=i.relatedTarget||i.toElement,v=s,h=h?Xl(h):null,h!==null&&(N=oi(h),h!==N||h.tag!==5&&h.tag!==6)&&(h=null)):(v=null,h=s),v!==h)){if(g=oo,m="onMouseLeave",d="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(g=so,m="onPointerLeave",d="onPointerEnter",f="pointer"),N=v==null?p:pi(v),c=h==null?p:pi(h),p=new g(m,f+"leave",v,i,E),p.target=N,p.relatedTarget=c,m=null,Xl(E)===s&&(g=new g(d,f+"enter",h,i,E),g.target=c,g.relatedTarget=N,m=g),N=m,v&&h)l:{for(g=v,d=h,f=0,c=g;c;c=fi(c))f++;for(c=0,m=d;m;m=fi(m))c++;for(;0<f-c;)g=fi(g),f--;for(;0<c-f;)d=fi(d),c--;for(;f--;){if(g===d||d!==null&&g===d.alternate)break l;g=fi(g),d=fi(d)}g=null}else g=null;v!==null&&wo(y,p,v,g,!1),h!==null&&N!==null&&wo(y,N,h,g,!0)}}e:{if(p=s?pi(s):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var w=cc;else if(Eo(p))if(as)w=Fc;else{w=Ec;var A=yc}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(w=pc);if(w&&(w=w(e,s))){rs(y,w,i,E);break e}A&&A(e,p,s),e==="focusout"&&(A=p._wrapperState)&&A.controlled&&p.type==="number"&&lr(p,"number",p.value)}switch(A=s?pi(s):window,e){case"focusin":(Eo(A)||A.contentEditable==="true")&&(yi=A,yr=s,rn=null);break;case"focusout":rn=yr=yi=null;break;case"mousedown":Er=!0;break;case"contextmenu":case"mouseup":case"dragend":Er=!1,go(y,i,E);break;case"selectionchange":if(gc)break;case"keydown":case"keyup":go(y,i,E)}var P;if(fa)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else ci?ts(e,i)&&(x="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(x="onCompositionStart");x&&(ns&&i.locale!=="ko"&&(ci||x!=="onCompositionStart"?x==="onCompositionEnd"&&ci&&(P=is()):(zl=E,ra="value"in zl?zl.value:zl.textContent,ci=!0)),A=Dt(s,x),0<A.length&&(x=new fo(x,e,null,i,E),y.push({event:x,listeners:A}),P?x.data=P:(P=us(i),P!==null&&(x.data=P)))),(P=ac?oc(e,i):fc(e,i))&&(s=Dt(s,"onBeforeInput"),0<s.length&&(E=new fo("onBeforeInput","beforeinput",null,i,E),y.push({event:E,listeners:s}),E.data=P))}ms(y,l)})}function vn(e,l,i){return{instance:e,listener:l,currentTarget:i}}function Dt(e,l){for(var i=l+"Capture",n=[];e!==null;){var t=e,u=t.stateNode;t.tag===5&&u!==null&&(t=u,u=En(e,i),u!=null&&n.unshift(vn(e,u,t)),u=En(e,l),u!=null&&n.push(vn(e,u,t))),e=e.return}return n}function fi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wo(e,l,i,n,t){for(var u=l._reactName,r=[];i!==null&&i!==n;){var a=i,o=a.alternate,s=a.stateNode;if(o!==null&&o===n)break;a.tag===5&&s!==null&&(a=s,t?(o=En(i,u),o!=null&&r.unshift(vn(i,o,a))):t||(o=En(i,u),o!=null&&r.push(vn(i,o,a)))),i=i.return}r.length!==0&&e.push({event:l,listeners:r})}var kc=/\r\n?/g,Dc=/\u0000|\uFFFD/g;function ko(e){return(typeof e=="string"?e:""+e).replace(kc,`
`).replace(Dc,"")}function Kn(e,l,i){if(l=ko(l),ko(e)!==l&&i)throw Error(q(425))}function Ct(){}var pr=null,Fr=null;function mr(e,l){return e==="textarea"||e==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var hr=typeof setTimeout=="function"?setTimeout:void 0,Cc=typeof clearTimeout=="function"?clearTimeout:void 0,Do=typeof Promise=="function"?Promise:void 0,Sc=typeof queueMicrotask=="function"?queueMicrotask:typeof Do<"u"?function(e){return Do.resolve(null).then(e).catch(Ac)}:hr;function Ac(e){setTimeout(function(){throw e})}function zu(e,l){var i=l,n=0;do{var t=i.nextSibling;if(e.removeChild(i),t&&t.nodeType===8)if(i=t.data,i==="/$"){if(n===0){e.removeChild(t),mn(l);return}n--}else i!=="$"&&i!=="$?"&&i!=="$!"||n++;i=t}while(i);mn(l)}function jl(e){for(;e!=null;e=e.nextSibling){var l=e.nodeType;if(l===1||l===3)break;if(l===8){if(l=e.data,l==="$"||l==="$!"||l==="$?")break;if(l==="/$")return null}}return e}function Co(e){e=e.previousSibling;for(var l=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(l===0)return e;l--}else i==="/$"&&l++}e=e.previousSibling}return null}var $i=Math.random().toString(36).slice(2),sl="__reactFiber$"+$i,wn="__reactProps$"+$i,kl="__reactContainer$"+$i,gr="__reactEvents$"+$i,xc="__reactListeners$"+$i,_c="__reactHandles$"+$i;function Xl(e){var l=e[sl];if(l)return l;for(var i=e.parentNode;i;){if(l=i[kl]||i[sl]){if(i=l.alternate,l.child!==null||i!==null&&i.child!==null)for(e=Co(e);e!==null;){if(i=e[sl])return i;e=Co(e)}return l}e=i,i=e.parentNode}return null}function On(e){return e=e[sl]||e[kl],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(q(33))}function Gt(e){return e[wn]||null}var qr=[],Fi=-1;function Ql(e){return{current:e}}function J(e){0>Fi||(e.current=qr[Fi],qr[Fi]=null,Fi--)}function Y(e,l){Fi++,qr[Fi]=e.current,e.current=l}var Hl={},Ae=Ql(Hl),Re=Ql(!1),ii=Hl;function Bi(e,l){var i=e.type.contextTypes;if(!i)return Hl;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===l)return n.__reactInternalMemoizedMaskedChildContext;var t={},u;for(u in i)t[u]=l[u];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=t),t}function be(e){return e=e.childContextTypes,e!=null}function St(){J(Re),J(Ae)}function So(e,l,i){if(Ae.current!==Hl)throw Error(q(168));Y(Ae,l),Y(Re,i)}function gs(e,l,i){var n=e.stateNode;if(l=l.childContextTypes,typeof n.getChildContext!="function")return i;n=n.getChildContext();for(var t in n)if(!(t in l))throw Error(q(108,y0(e)||"Unknown",t));return ie({},i,n)}function At(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hl,ii=Ae.current,Y(Ae,e),Y(Re,Re.current),!0}function Ao(e,l,i){var n=e.stateNode;if(!n)throw Error(q(169));i?(e=gs(e,l,ii),n.__reactInternalMemoizedMergedChildContext=e,J(Re),J(Ae),Y(Ae,e)):J(Re),Y(Re,i)}var ml=null,Kt=!1,Tu=!1;function qs(e){ml===null?ml=[e]:ml.push(e)}function Bc(e){Kt=!0,qs(e)}function Gl(){if(!Tu&&ml!==null){Tu=!0;var e=0,l=Q;try{var i=ml;for(Q=1;e<i.length;e++){var n=i[e];do n=n(!0);while(n!==null)}ml=null,Kt=!1}catch(t){throw ml!==null&&(ml=ml.slice(e+1)),Hf(ia,Gl),t}finally{Q=l,Tu=!1}}return null}var mi=[],hi=0,xt=null,_t=0,Ge=[],Ke=0,ni=null,hl=1,gl="";function Kl(e,l){mi[hi++]=_t,mi[hi++]=xt,xt=e,_t=l}function vs(e,l,i){Ge[Ke++]=hl,Ge[Ke++]=gl,Ge[Ke++]=ni,ni=e;var n=hl;e=gl;var t=32-ul(n)-1;n&=~(1<<t),i+=1;var u=32-ul(l)+t;if(30<u){var r=t-t%5;u=(n&(1<<r)-1).toString(32),n>>=r,t-=r,hl=1<<32-ul(l)+t|i<<t|n,gl=u+e}else hl=1<<u|i<<t|n,gl=e}function da(e){e.return!==null&&(Kl(e,1),vs(e,1,0))}function ca(e){for(;e===xt;)xt=mi[--hi],mi[hi]=null,_t=mi[--hi],mi[hi]=null;for(;e===ni;)ni=Ge[--Ke],Ge[Ke]=null,gl=Ge[--Ke],Ge[Ke]=null,hl=Ge[--Ke],Ge[Ke]=null}var Ue=null,Me=null,Z=!1,tl=null;function ws(e,l){var i=Ye(5,null,null,0);i.elementType="DELETED",i.stateNode=l,i.return=e,l=e.deletions,l===null?(e.deletions=[i],e.flags|=16):l.push(i)}function xo(e,l){switch(e.tag){case 5:var i=e.type;return l=l.nodeType!==1||i.toLowerCase()!==l.nodeName.toLowerCase()?null:l,l!==null?(e.stateNode=l,Ue=e,Me=jl(l.firstChild),!0):!1;case 6:return l=e.pendingProps===""||l.nodeType!==3?null:l,l!==null?(e.stateNode=l,Ue=e,Me=null,!0):!1;case 13:return l=l.nodeType!==8?null:l,l!==null?(i=ni!==null?{id:hl,overflow:gl}:null,e.memoizedState={dehydrated:l,treeContext:i,retryLane:1073741824},i=Ye(18,null,null,0),i.stateNode=l,i.return=e,e.child=i,Ue=e,Me=null,!0):!1;default:return!1}}function vr(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wr(e){if(Z){var l=Me;if(l){var i=l;if(!xo(e,l)){if(vr(e))throw Error(q(418));l=jl(i.nextSibling);var n=Ue;l&&xo(e,l)?ws(n,i):(e.flags=e.flags&-4097|2,Z=!1,Ue=e)}}else{if(vr(e))throw Error(q(418));e.flags=e.flags&-4097|2,Z=!1,Ue=e}}}function _o(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ue=e}function Yn(e){if(e!==Ue)return!1;if(!Z)return _o(e),Z=!0,!1;var l;if((l=e.tag!==3)&&!(l=e.tag!==5)&&(l=e.type,l=l!=="head"&&l!=="body"&&!mr(e.type,e.memoizedProps)),l&&(l=Me)){if(vr(e))throw ks(),Error(q(418));for(;l;)ws(e,l),l=jl(l.nextSibling)}if(_o(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(317));e:{for(e=e.nextSibling,l=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(l===0){Me=jl(e.nextSibling);break e}l--}else i!=="$"&&i!=="$!"&&i!=="$?"||l++}e=e.nextSibling}Me=null}}else Me=Ue?jl(e.stateNode.nextSibling):null;return!0}function ks(){for(var e=Me;e;)e=jl(e.nextSibling)}function Pi(){Me=Ue=null,Z=!1}function ya(e){tl===null?tl=[e]:tl.push(e)}var Pc=Sl.ReactCurrentBatchConfig;function il(e,l){if(e&&e.defaultProps){l=ie({},l),e=e.defaultProps;for(var i in e)l[i]===void 0&&(l[i]=e[i]);return l}return l}var Bt=Ql(null),Pt=null,gi=null,Ea=null;function pa(){Ea=gi=Pt=null}function Fa(e){var l=Bt.current;J(Bt),e._currentValue=l}function kr(e,l,i){for(;e!==null;){var n=e.alternate;if((e.childLanes&l)!==l?(e.childLanes|=l,n!==null&&(n.childLanes|=l)):n!==null&&(n.childLanes&l)!==l&&(n.childLanes|=l),e===i)break;e=e.return}}function Ai(e,l){Pt=e,Ea=gi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&l&&(Oe=!0),e.firstContext=null)}function Je(e){var l=e._currentValue;if(Ea!==e)if(e={context:e,memoizedValue:l,next:null},gi===null){if(Pt===null)throw Error(q(308));gi=e,Pt.dependencies={lanes:0,firstContext:e}}else gi=gi.next=e;return l}var Jl=null;function ma(e){Jl===null?Jl=[e]:Jl.push(e)}function Ds(e,l,i,n){var t=l.interleaved;return t===null?(i.next=i,ma(l)):(i.next=t.next,t.next=i),l.interleaved=i,Dl(e,n)}function Dl(e,l){e.lanes|=l;var i=e.alternate;for(i!==null&&(i.lanes|=l),i=e,e=e.return;e!==null;)e.childLanes|=l,i=e.alternate,i!==null&&(i.childLanes|=l),i=e,e=e.return;return i.tag===3?i.stateNode:null}var Bl=!1;function ha(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cs(e,l){e=e.updateQueue,l.updateQueue===e&&(l.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vl(e,l){return{eventTime:e,lane:l,tag:0,payload:null,callback:null,next:null}}function Ll(e,l,i){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,I&2){var t=n.pending;return t===null?l.next=l:(l.next=t.next,t.next=l),n.pending=l,Dl(e,i)}return t=n.interleaved,t===null?(l.next=l,ma(n)):(l.next=t.next,t.next=l),n.interleaved=l,Dl(e,i)}function ft(e,l,i){if(l=l.updateQueue,l!==null&&(l=l.shared,(i&4194240)!==0)){var n=l.lanes;n&=e.pendingLanes,i|=n,l.lanes=i,na(e,i)}}function Bo(e,l){var i=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,i===n)){var t=null,u=null;if(i=i.firstBaseUpdate,i!==null){do{var r={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};u===null?t=u=r:u=u.next=r,i=i.next}while(i!==null);u===null?t=u=l:u=u.next=l}else t=u=l;i={baseState:n.baseState,firstBaseUpdate:t,lastBaseUpdate:u,shared:n.shared,effects:n.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=l:e.next=l,i.lastBaseUpdate=l}function Nt(e,l,i,n){var t=e.updateQueue;Bl=!1;var u=t.firstBaseUpdate,r=t.lastBaseUpdate,a=t.shared.pending;if(a!==null){t.shared.pending=null;var o=a,s=o.next;o.next=null,r===null?u=s:r.next=s,r=o;var E=e.alternate;E!==null&&(E=E.updateQueue,a=E.lastBaseUpdate,a!==r&&(a===null?E.firstBaseUpdate=s:a.next=s,E.lastBaseUpdate=o))}if(u!==null){var y=t.baseState;r=0,E=s=o=null,a=u;do{var p=a.lane,v=a.eventTime;if((n&p)===p){E!==null&&(E=E.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var h=e,g=a;switch(p=l,v=i,g.tag){case 1:if(h=g.payload,typeof h=="function"){y=h.call(v,y,p);break e}y=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,p=typeof h=="function"?h.call(v,y,p):h,p==null)break e;y=ie({},y,p);break e;case 2:Bl=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=t.effects,p===null?t.effects=[a]:p.push(a))}else v={eventTime:v,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},E===null?(s=E=v,o=y):E=E.next=v,r|=p;if(a=a.next,a===null){if(a=t.shared.pending,a===null)break;p=a,a=p.next,p.next=null,t.lastBaseUpdate=p,t.shared.pending=null}}while(1);if(E===null&&(o=y),t.baseState=o,t.firstBaseUpdate=s,t.lastBaseUpdate=E,l=t.shared.interleaved,l!==null){t=l;do r|=t.lane,t=t.next;while(t!==l)}else u===null&&(t.shared.lanes=0);ui|=r,e.lanes=r,e.memoizedState=y}}function Po(e,l,i){if(e=l.effects,l.effects=null,e!==null)for(l=0;l<e.length;l++){var n=e[l],t=n.callback;if(t!==null){if(n.callback=null,n=i,typeof t!="function")throw Error(q(191,t));t.call(n)}}}var Ss=new Df.Component().refs;function Dr(e,l,i,n){l=e.memoizedState,i=i(n,l),i=i==null?l:ie({},l,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Yt={isMounted:function(e){return(e=e._reactInternals)?oi(e)===e:!1},enqueueSetState:function(e,l,i){e=e._reactInternals;var n=Be(),t=Il(e),u=vl(n,t);u.payload=l,i!=null&&(u.callback=i),l=Ll(e,u,t),l!==null&&(rl(l,e,t,n),ft(l,e,t))},enqueueReplaceState:function(e,l,i){e=e._reactInternals;var n=Be(),t=Il(e),u=vl(n,t);u.tag=1,u.payload=l,i!=null&&(u.callback=i),l=Ll(e,u,t),l!==null&&(rl(l,e,t,n),ft(l,e,t))},enqueueForceUpdate:function(e,l){e=e._reactInternals;var i=Be(),n=Il(e),t=vl(i,n);t.tag=2,l!=null&&(t.callback=l),l=Ll(e,t,n),l!==null&&(rl(l,e,n,i),ft(l,e,n))}};function No(e,l,i,n,t,u,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,u,r):l.prototype&&l.prototype.isPureReactComponent?!gn(i,n)||!gn(t,u):!0}function As(e,l,i){var n=!1,t=Hl,u=l.contextType;return typeof u=="object"&&u!==null?u=Je(u):(t=be(l)?ii:Ae.current,n=l.contextTypes,u=(n=n!=null)?Bi(e,t):Hl),l=new l(i,u),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Yt,e.stateNode=l,l._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=u),l}function zo(e,l,i,n){e=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(i,n),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(i,n),l.state!==e&&Yt.enqueueReplaceState(l,l.state,null)}function Cr(e,l,i,n){var t=e.stateNode;t.props=i,t.state=e.memoizedState,t.refs=Ss,ha(e);var u=l.contextType;typeof u=="object"&&u!==null?t.context=Je(u):(u=be(l)?ii:Ae.current,t.context=Bi(e,u)),t.state=e.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(Dr(e,l,u,i),t.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof t.getSnapshotBeforeUpdate=="function"||typeof t.UNSAFE_componentWillMount!="function"&&typeof t.componentWillMount!="function"||(l=t.state,typeof t.componentWillMount=="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount=="function"&&t.UNSAFE_componentWillMount(),l!==t.state&&Yt.enqueueReplaceState(t,t.state,null),Nt(e,i,t,n),t.state=e.memoizedState),typeof t.componentDidMount=="function"&&(e.flags|=4194308)}function Gi(e,l,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(q(309));var n=i.stateNode}if(!n)throw Error(q(147,e));var t=n,u=""+e;return l!==null&&l.ref!==null&&typeof l.ref=="function"&&l.ref._stringRef===u?l.ref:(l=function(r){var a=t.refs;a===Ss&&(a=t.refs={}),r===null?delete a[u]:a[u]=r},l._stringRef=u,l)}if(typeof e!="string")throw Error(q(284));if(!i._owner)throw Error(q(290,e))}return e}function Xn(e,l){throw e=Object.prototype.toString.call(l),Error(q(31,e==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":e))}function To(e){var l=e._init;return l(e._payload)}function xs(e){function l(d,f){if(e){var c=d.deletions;c===null?(d.deletions=[f],d.flags|=16):c.push(f)}}function i(d,f){if(!e)return null;for(;f!==null;)l(d,f),f=f.sibling;return null}function n(d,f){for(d=new Map;f!==null;)f.key!==null?d.set(f.key,f):d.set(f.index,f),f=f.sibling;return d}function t(d,f){return d=Ml(d,f),d.index=0,d.sibling=null,d}function u(d,f,c){return d.index=c,e?(c=d.alternate,c!==null?(c=c.index,c<f?(d.flags|=2,f):c):(d.flags|=2,f)):(d.flags|=1048576,f)}function r(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,f,c,m){return f===null||f.tag!==6?(f=Iu(c,d.mode,m),f.return=d,f):(f=t(f,c),f.return=d,f)}function o(d,f,c,m){var w=c.type;return w===di?E(d,f,c.props.children,m,c.key):f!==null&&(f.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===_l&&To(w)===f.type)?(m=t(f,c.props),m.ref=Gi(d,f,c),m.return=d,m):(m=pt(c.type,c.key,c.props,null,d.mode,m),m.ref=Gi(d,f,c),m.return=d,m)}function s(d,f,c,m){return f===null||f.tag!==4||f.stateNode.containerInfo!==c.containerInfo||f.stateNode.implementation!==c.implementation?(f=Mu(c,d.mode,m),f.return=d,f):(f=t(f,c.children||[]),f.return=d,f)}function E(d,f,c,m,w){return f===null||f.tag!==7?(f=li(c,d.mode,m,w),f.return=d,f):(f=t(f,c),f.return=d,f)}function y(d,f,c){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Iu(""+f,d.mode,c),f.return=d,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case $n:return c=pt(f.type,f.key,f.props,null,d.mode,c),c.ref=Gi(d,null,f),c.return=d,c;case si:return f=Mu(f,d.mode,c),f.return=d,f;case _l:var m=f._init;return y(d,m(f._payload),c)}if(Ji(f)||Ui(f))return f=li(f,d.mode,c,null),f.return=d,f;Xn(d,f)}return null}function p(d,f,c,m){var w=f!==null?f.key:null;if(typeof c=="string"&&c!==""||typeof c=="number")return w!==null?null:a(d,f,""+c,m);if(typeof c=="object"&&c!==null){switch(c.$$typeof){case $n:return c.key===w?o(d,f,c,m):null;case si:return c.key===w?s(d,f,c,m):null;case _l:return w=c._init,p(d,f,w(c._payload),m)}if(Ji(c)||Ui(c))return w!==null?null:E(d,f,c,m,null);Xn(d,c)}return null}function v(d,f,c,m,w){if(typeof m=="string"&&m!==""||typeof m=="number")return d=d.get(c)||null,a(f,d,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case $n:return d=d.get(m.key===null?c:m.key)||null,o(f,d,m,w);case si:return d=d.get(m.key===null?c:m.key)||null,s(f,d,m,w);case _l:var A=m._init;return v(d,f,c,A(m._payload),w)}if(Ji(m)||Ui(m))return d=d.get(c)||null,E(f,d,m,w,null);Xn(f,m)}return null}function h(d,f,c,m){for(var w=null,A=null,P=f,x=f=0,M=null;P!==null&&x<c.length;x++){P.index>x?(M=P,P=null):M=P.sibling;var R=p(d,P,c[x],m);if(R===null){P===null&&(P=M);break}e&&P&&R.alternate===null&&l(d,P),f=u(R,f,x),A===null?w=R:A.sibling=R,A=R,P=M}if(x===c.length)return i(d,P),Z&&Kl(d,x),w;if(P===null){for(;x<c.length;x++)P=y(d,c[x],m),P!==null&&(f=u(P,f,x),A===null?w=P:A.sibling=P,A=P);return Z&&Kl(d,x),w}for(P=n(d,P);x<c.length;x++)M=v(P,d,x,c[x],m),M!==null&&(e&&M.alternate!==null&&P.delete(M.key===null?x:M.key),f=u(M,f,x),A===null?w=M:A.sibling=M,A=M);return e&&P.forEach(function(de){return l(d,de)}),Z&&Kl(d,x),w}function g(d,f,c,m){var w=Ui(c);if(typeof w!="function")throw Error(q(150));if(c=w.call(c),c==null)throw Error(q(151));for(var A=w=null,P=f,x=f=0,M=null,R=c.next();P!==null&&!R.done;x++,R=c.next()){P.index>x?(M=P,P=null):M=P.sibling;var de=p(d,P,R.value,m);if(de===null){P===null&&(P=M);break}e&&P&&de.alternate===null&&l(d,P),f=u(de,f,x),A===null?w=de:A.sibling=de,A=de,P=M}if(R.done)return i(d,P),Z&&Kl(d,x),w;if(P===null){for(;!R.done;x++,R=c.next())R=y(d,R.value,m),R!==null&&(f=u(R,f,x),A===null?w=R:A.sibling=R,A=R);return Z&&Kl(d,x),w}for(P=n(d,P);!R.done;x++,R=c.next())R=v(P,d,x,R.value,m),R!==null&&(e&&R.alternate!==null&&P.delete(R.key===null?x:R.key),f=u(R,f,x),A===null?w=R:A.sibling=R,A=R);return e&&P.forEach(function(oe){return l(d,oe)}),Z&&Kl(d,x),w}function N(d,f,c,m){if(typeof c=="object"&&c!==null&&c.type===di&&c.key===null&&(c=c.props.children),typeof c=="object"&&c!==null){switch(c.$$typeof){case $n:e:{for(var w=c.key,A=f;A!==null;){if(A.key===w){if(w=c.type,w===di){if(A.tag===7){i(d,A.sibling),f=t(A,c.props.children),f.return=d,d=f;break e}}else if(A.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===_l&&To(w)===A.type){i(d,A.sibling),f=t(A,c.props),f.ref=Gi(d,A,c),f.return=d,d=f;break e}i(d,A);break}else l(d,A);A=A.sibling}c.type===di?(f=li(c.props.children,d.mode,m,c.key),f.return=d,d=f):(m=pt(c.type,c.key,c.props,null,d.mode,m),m.ref=Gi(d,f,c),m.return=d,d=m)}return r(d);case si:e:{for(A=c.key;f!==null;){if(f.key===A)if(f.tag===4&&f.stateNode.containerInfo===c.containerInfo&&f.stateNode.implementation===c.implementation){i(d,f.sibling),f=t(f,c.children||[]),f.return=d,d=f;break e}else{i(d,f);break}else l(d,f);f=f.sibling}f=Mu(c,d.mode,m),f.return=d,d=f}return r(d);case _l:return A=c._init,N(d,f,A(c._payload),m)}if(Ji(c))return h(d,f,c,m);if(Ui(c))return g(d,f,c,m);Xn(d,c)}return typeof c=="string"&&c!==""||typeof c=="number"?(c=""+c,f!==null&&f.tag===6?(i(d,f.sibling),f=t(f,c),f.return=d,d=f):(i(d,f),f=Iu(c,d.mode,m),f.return=d,d=f),r(d)):i(d,f)}return N}var Ni=xs(!0),_s=xs(!1),Rn={},cl=Ql(Rn),kn=Ql(Rn),Dn=Ql(Rn);function Zl(e){if(e===Rn)throw Error(q(174));return e}function ga(e,l){switch(Y(Dn,l),Y(kn,e),Y(cl,Rn),e=l.nodeType,e){case 9:case 11:l=(l=l.documentElement)?l.namespaceURI:nr(null,"");break;default:e=e===8?l.parentNode:l,l=e.namespaceURI||null,e=e.tagName,l=nr(l,e)}J(cl),Y(cl,l)}function zi(){J(cl),J(kn),J(Dn)}function Bs(e){Zl(Dn.current);var l=Zl(cl.current),i=nr(l,e.type);l!==i&&(Y(kn,e),Y(cl,i))}function qa(e){kn.current===e&&(J(cl),J(kn))}var ee=Ql(0);function zt(e){for(var l=e;l!==null;){if(l.tag===13){var i=l.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return l}else if(l.tag===19&&l.memoizedProps.revealOrder!==void 0){if(l.flags&128)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break;for(;l.sibling===null;){if(l.return===null||l.return===e)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var Ou=[];function va(){for(var e=0;e<Ou.length;e++)Ou[e]._workInProgressVersionPrimary=null;Ou.length=0}var st=Sl.ReactCurrentDispatcher,Ru=Sl.ReactCurrentBatchConfig,ti=0,le=null,fe=null,ce=null,Tt=!1,an=!1,Cn=0,Nc=0;function De(){throw Error(q(321))}function wa(e,l){if(l===null)return!1;for(var i=0;i<l.length&&i<e.length;i++)if(!al(e[i],l[i]))return!1;return!0}function ka(e,l,i,n,t,u){if(ti=u,le=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,st.current=e===null||e.memoizedState===null?Rc:bc,e=i(n,t),an){u=0;do{if(an=!1,Cn=0,25<=u)throw Error(q(301));u+=1,ce=fe=null,l.updateQueue=null,st.current=jc,e=i(n,t)}while(an)}if(st.current=Ot,l=fe!==null&&fe.next!==null,ti=0,ce=fe=le=null,Tt=!1,l)throw Error(q(300));return e}function Da(){var e=Cn!==0;return Cn=0,e}function fl(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?le.memoizedState=ce=e:ce=ce.next=e,ce}function Ze(){if(fe===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var l=ce===null?le.memoizedState:ce.next;if(l!==null)ce=l,fe=e;else{if(e===null)throw Error(q(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},ce===null?le.memoizedState=ce=e:ce=ce.next=e}return ce}function Sn(e,l){return typeof l=="function"?l(e):l}function bu(e){var l=Ze(),i=l.queue;if(i===null)throw Error(q(311));i.lastRenderedReducer=e;var n=fe,t=n.baseQueue,u=i.pending;if(u!==null){if(t!==null){var r=t.next;t.next=u.next,u.next=r}n.baseQueue=t=u,i.pending=null}if(t!==null){u=t.next,n=n.baseState;var a=r=null,o=null,s=u;do{var E=s.lane;if((ti&E)===E)o!==null&&(o=o.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),n=s.hasEagerState?s.eagerState:e(n,s.action);else{var y={lane:E,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};o===null?(a=o=y,r=n):o=o.next=y,le.lanes|=E,ui|=E}s=s.next}while(s!==null&&s!==u);o===null?r=n:o.next=a,al(n,l.memoizedState)||(Oe=!0),l.memoizedState=n,l.baseState=r,l.baseQueue=o,i.lastRenderedState=n}if(e=i.interleaved,e!==null){t=e;do u=t.lane,le.lanes|=u,ui|=u,t=t.next;while(t!==e)}else t===null&&(i.lanes=0);return[l.memoizedState,i.dispatch]}function ju(e){var l=Ze(),i=l.queue;if(i===null)throw Error(q(311));i.lastRenderedReducer=e;var n=i.dispatch,t=i.pending,u=l.memoizedState;if(t!==null){i.pending=null;var r=t=t.next;do u=e(u,r.action),r=r.next;while(r!==t);al(u,l.memoizedState)||(Oe=!0),l.memoizedState=u,l.baseQueue===null&&(l.baseState=u),i.lastRenderedState=u}return[u,n]}function Ps(){}function Ns(e,l){var i=le,n=Ze(),t=l(),u=!al(n.memoizedState,t);if(u&&(n.memoizedState=t,Oe=!0),n=n.queue,Ca(Os.bind(null,i,n,e),[e]),n.getSnapshot!==l||u||ce!==null&&ce.memoizedState.tag&1){if(i.flags|=2048,An(9,Ts.bind(null,i,n,t,l),void 0,null),ye===null)throw Error(q(349));ti&30||zs(i,l,t)}return t}function zs(e,l,i){e.flags|=16384,e={getSnapshot:l,value:i},l=le.updateQueue,l===null?(l={lastEffect:null,stores:null},le.updateQueue=l,l.stores=[e]):(i=l.stores,i===null?l.stores=[e]:i.push(e))}function Ts(e,l,i,n){l.value=i,l.getSnapshot=n,Rs(l)&&bs(e)}function Os(e,l,i){return i(function(){Rs(l)&&bs(e)})}function Rs(e){var l=e.getSnapshot;e=e.value;try{var i=l();return!al(e,i)}catch{return!0}}function bs(e){var l=Dl(e,1);l!==null&&rl(l,e,1,-1)}function Oo(e){var l=fl();return typeof e=="function"&&(e=e()),l.memoizedState=l.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:e},l.queue=e,e=e.dispatch=Oc.bind(null,le,e),[l.memoizedState,e]}function An(e,l,i,n){return e={tag:e,create:l,destroy:i,deps:n,next:null},l=le.updateQueue,l===null?(l={lastEffect:null,stores:null},le.updateQueue=l,l.lastEffect=e.next=e):(i=l.lastEffect,i===null?l.lastEffect=e.next=e:(n=i.next,i.next=e,e.next=n,l.lastEffect=e)),e}function js(){return Ze().memoizedState}function dt(e,l,i,n){var t=fl();le.flags|=e,t.memoizedState=An(1|l,i,void 0,n===void 0?null:n)}function Xt(e,l,i,n){var t=Ze();n=n===void 0?null:n;var u=void 0;if(fe!==null){var r=fe.memoizedState;if(u=r.destroy,n!==null&&wa(n,r.deps)){t.memoizedState=An(l,i,u,n);return}}le.flags|=e,t.memoizedState=An(1|l,i,u,n)}function Ro(e,l){return dt(8390656,8,e,l)}function Ca(e,l){return Xt(2048,8,e,l)}function Ls(e,l){return Xt(4,2,e,l)}function $s(e,l){return Xt(4,4,e,l)}function Is(e,l){if(typeof l=="function")return e=e(),l(e),function(){l(null)};if(l!=null)return e=e(),l.current=e,function(){l.current=null}}function Ms(e,l,i){return i=i!=null?i.concat([e]):null,Xt(4,4,Is.bind(null,l,e),i)}function Sa(){}function Us(e,l){var i=Ze();l=l===void 0?null:l;var n=i.memoizedState;return n!==null&&l!==null&&wa(l,n[1])?n[0]:(i.memoizedState=[e,l],e)}function Vs(e,l){var i=Ze();l=l===void 0?null:l;var n=i.memoizedState;return n!==null&&l!==null&&wa(l,n[1])?n[0]:(e=e(),i.memoizedState=[e,l],e)}function Hs(e,l,i){return ti&21?(al(i,l)||(i=Gf(),le.lanes|=i,ui|=i,e.baseState=!0),l):(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=i)}function zc(e,l){var i=Q;Q=i!==0&&4>i?i:4,e(!0);var n=Ru.transition;Ru.transition={};try{e(!1),l()}finally{Q=i,Ru.transition=n}}function Ws(){return Ze().memoizedState}function Tc(e,l,i){var n=Il(e);if(i={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null},Qs(e))Gs(l,i);else if(i=Ds(e,l,i,n),i!==null){var t=Be();rl(i,e,n,t),Ks(i,l,n)}}function Oc(e,l,i){var n=Il(e),t={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null};if(Qs(e))Gs(l,t);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=l.lastRenderedReducer,u!==null))try{var r=l.lastRenderedState,a=u(r,i);if(t.hasEagerState=!0,t.eagerState=a,al(a,r)){var o=l.interleaved;o===null?(t.next=t,ma(l)):(t.next=o.next,o.next=t),l.interleaved=t;return}}catch{}finally{}i=Ds(e,l,t,n),i!==null&&(t=Be(),rl(i,e,n,t),Ks(i,l,n))}}function Qs(e){var l=e.alternate;return e===le||l!==null&&l===le}function Gs(e,l){an=Tt=!0;var i=e.pending;i===null?l.next=l:(l.next=i.next,i.next=l),e.pending=l}function Ks(e,l,i){if(i&4194240){var n=l.lanes;n&=e.pendingLanes,i|=n,l.lanes=i,na(e,i)}}var Ot={readContext:Je,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},Rc={readContext:Je,useCallback:function(e,l){return fl().memoizedState=[e,l===void 0?null:l],e},useContext:Je,useEffect:Ro,useImperativeHandle:function(e,l,i){return i=i!=null?i.concat([e]):null,dt(4194308,4,Is.bind(null,l,e),i)},useLayoutEffect:function(e,l){return dt(4194308,4,e,l)},useInsertionEffect:function(e,l){return dt(4,2,e,l)},useMemo:function(e,l){var i=fl();return l=l===void 0?null:l,e=e(),i.memoizedState=[e,l],e},useReducer:function(e,l,i){var n=fl();return l=i!==void 0?i(l):l,n.memoizedState=n.baseState=l,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=Tc.bind(null,le,e),[n.memoizedState,e]},useRef:function(e){var l=fl();return e={current:e},l.memoizedState=e},useState:Oo,useDebugValue:Sa,useDeferredValue:function(e){return fl().memoizedState=e},useTransition:function(){var e=Oo(!1),l=e[0];return e=zc.bind(null,e[1]),fl().memoizedState=e,[l,e]},useMutableSource:function(){},useSyncExternalStore:function(e,l,i){var n=le,t=fl();if(Z){if(i===void 0)throw Error(q(407));i=i()}else{if(i=l(),ye===null)throw Error(q(349));ti&30||zs(n,l,i)}t.memoizedState=i;var u={value:i,getSnapshot:l};return t.queue=u,Ro(Os.bind(null,n,u,e),[e]),n.flags|=2048,An(9,Ts.bind(null,n,u,i,l),void 0,null),i},useId:function(){var e=fl(),l=ye.identifierPrefix;if(Z){var i=gl,n=hl;i=(n&~(1<<32-ul(n)-1)).toString(32)+i,l=":"+l+"R"+i,i=Cn++,0<i&&(l+="H"+i.toString(32)),l+=":"}else i=Nc++,l=":"+l+"r"+i.toString(32)+":";return e.memoizedState=l},unstable_isNewReconciler:!1},bc={readContext:Je,useCallback:Us,useContext:Je,useEffect:Ca,useImperativeHandle:Ms,useInsertionEffect:Ls,useLayoutEffect:$s,useMemo:Vs,useReducer:bu,useRef:js,useState:function(){return bu(Sn)},useDebugValue:Sa,useDeferredValue:function(e){var l=Ze();return Hs(l,fe.memoizedState,e)},useTransition:function(){var e=bu(Sn)[0],l=Ze().memoizedState;return[e,l]},useMutableSource:Ps,useSyncExternalStore:Ns,useId:Ws,unstable_isNewReconciler:!1},jc={readContext:Je,useCallback:Us,useContext:Je,useEffect:Ca,useImperativeHandle:Ms,useInsertionEffect:Ls,useLayoutEffect:$s,useMemo:Vs,useReducer:ju,useRef:js,useState:function(){return ju(Sn)},useDebugValue:Sa,useDeferredValue:function(e){var l=Ze();return fe===null?l.memoizedState=e:Hs(l,fe.memoizedState,e)},useTransition:function(){var e=ju(Sn)[0],l=Ze().memoizedState;return[e,l]},useMutableSource:Ps,useSyncExternalStore:Ns,useId:Ws,unstable_isNewReconciler:!1};function Ti(e,l){try{var i="",n=l;do i+=c0(n),n=n.return;while(n);var t=i}catch(u){t=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:l,stack:t,digest:null}}function Lu(e,l,i){return{value:e,source:null,stack:i??null,digest:l??null}}function Sr(e,l){try{console.error(l.value)}catch(i){setTimeout(function(){throw i})}}var Lc=typeof WeakMap=="function"?WeakMap:Map;function Ys(e,l,i){i=vl(-1,i),i.tag=3,i.payload={element:null};var n=l.value;return i.callback=function(){bt||(bt=!0,Rr=n),Sr(e,l)},i}function Xs(e,l,i){i=vl(-1,i),i.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var t=l.value;i.payload=function(){return n(t)},i.callback=function(){Sr(e,l)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(i.callback=function(){Sr(e,l),typeof n!="function"&&($l===null?$l=new Set([this]):$l.add(this));var r=l.stack;this.componentDidCatch(l.value,{componentStack:r!==null?r:""})}),i}function bo(e,l,i){var n=e.pingCache;if(n===null){n=e.pingCache=new Lc;var t=new Set;n.set(l,t)}else t=n.get(l),t===void 0&&(t=new Set,n.set(l,t));t.has(i)||(t.add(i),e=Zc.bind(null,e,l,i),l.then(e,e))}function jo(e){do{var l;if((l=e.tag===13)&&(l=e.memoizedState,l=l!==null?l.dehydrated!==null:!0),l)return e;e=e.return}while(e!==null);return null}function Lo(e,l,i,n,t){return e.mode&1?(e.flags|=65536,e.lanes=t,e):(e===l?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(l=vl(-1,1),l.tag=2,Ll(i,l,1))),i.lanes|=1),e)}var $c=Sl.ReactCurrentOwner,Oe=!1;function _e(e,l,i,n){l.child=e===null?_s(l,null,i,n):Ni(l,e.child,i,n)}function $o(e,l,i,n,t){i=i.render;var u=l.ref;return Ai(l,t),n=ka(e,l,i,n,u,t),i=Da(),e!==null&&!Oe?(l.updateQueue=e.updateQueue,l.flags&=-2053,e.lanes&=~t,Cl(e,l,t)):(Z&&i&&da(l),l.flags|=1,_e(e,l,n,t),l.child)}function Io(e,l,i,n,t){if(e===null){var u=i.type;return typeof u=="function"&&!Ta(u)&&u.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(l.tag=15,l.type=u,Js(e,l,u,n,t)):(e=pt(i.type,null,n,l,l.mode,t),e.ref=l.ref,e.return=l,l.child=e)}if(u=e.child,!(e.lanes&t)){var r=u.memoizedProps;if(i=i.compare,i=i!==null?i:gn,i(r,n)&&e.ref===l.ref)return Cl(e,l,t)}return l.flags|=1,e=Ml(u,n),e.ref=l.ref,e.return=l,l.child=e}function Js(e,l,i,n,t){if(e!==null){var u=e.memoizedProps;if(gn(u,n)&&e.ref===l.ref)if(Oe=!1,l.pendingProps=n=u,(e.lanes&t)!==0)e.flags&131072&&(Oe=!0);else return l.lanes=e.lanes,Cl(e,l,t)}return Ar(e,l,i,n,t)}function Zs(e,l,i){var n=l.pendingProps,t=n.children,u=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(l.mode&1))l.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(vi,$e),$e|=i;else{if(!(i&1073741824))return e=u!==null?u.baseLanes|i:i,l.lanes=l.childLanes=1073741824,l.memoizedState={baseLanes:e,cachePool:null,transitions:null},l.updateQueue=null,Y(vi,$e),$e|=e,null;l.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=u!==null?u.baseLanes:i,Y(vi,$e),$e|=n}else u!==null?(n=u.baseLanes|i,l.memoizedState=null):n=i,Y(vi,$e),$e|=n;return _e(e,l,t,i),l.child}function ed(e,l){var i=l.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(l.flags|=512,l.flags|=2097152)}function Ar(e,l,i,n,t){var u=be(i)?ii:Ae.current;return u=Bi(l,u),Ai(l,t),i=ka(e,l,i,n,u,t),n=Da(),e!==null&&!Oe?(l.updateQueue=e.updateQueue,l.flags&=-2053,e.lanes&=~t,Cl(e,l,t)):(Z&&n&&da(l),l.flags|=1,_e(e,l,i,t),l.child)}function Mo(e,l,i,n,t){if(be(i)){var u=!0;At(l)}else u=!1;if(Ai(l,t),l.stateNode===null)ct(e,l),As(l,i,n),Cr(l,i,n,t),n=!0;else if(e===null){var r=l.stateNode,a=l.memoizedProps;r.props=a;var o=r.context,s=i.contextType;typeof s=="object"&&s!==null?s=Je(s):(s=be(i)?ii:Ae.current,s=Bi(l,s));var E=i.getDerivedStateFromProps,y=typeof E=="function"||typeof r.getSnapshotBeforeUpdate=="function";y||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(a!==n||o!==s)&&zo(l,r,n,s),Bl=!1;var p=l.memoizedState;r.state=p,Nt(l,n,r,t),o=l.memoizedState,a!==n||p!==o||Re.current||Bl?(typeof E=="function"&&(Dr(l,i,E,n),o=l.memoizedState),(a=Bl||No(l,i,a,n,p,o,s))?(y||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(l.flags|=4194308)):(typeof r.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=n,l.memoizedState=o),r.props=n,r.state=o,r.context=s,n=a):(typeof r.componentDidMount=="function"&&(l.flags|=4194308),n=!1)}else{r=l.stateNode,Cs(e,l),a=l.memoizedProps,s=l.type===l.elementType?a:il(l.type,a),r.props=s,y=l.pendingProps,p=r.context,o=i.contextType,typeof o=="object"&&o!==null?o=Je(o):(o=be(i)?ii:Ae.current,o=Bi(l,o));var v=i.getDerivedStateFromProps;(E=typeof v=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(a!==y||p!==o)&&zo(l,r,n,o),Bl=!1,p=l.memoizedState,r.state=p,Nt(l,n,r,t);var h=l.memoizedState;a!==y||p!==h||Re.current||Bl?(typeof v=="function"&&(Dr(l,i,v,n),h=l.memoizedState),(s=Bl||No(l,i,s,n,p,h,o)||!1)?(E||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(n,h,o),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(n,h,o)),typeof r.componentDidUpdate=="function"&&(l.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof r.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(l.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(l.flags|=1024),l.memoizedProps=n,l.memoizedState=h),r.props=n,r.state=h,r.context=o,n=s):(typeof r.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(l.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(l.flags|=1024),n=!1)}return xr(e,l,i,n,u,t)}function xr(e,l,i,n,t,u){ed(e,l);var r=(l.flags&128)!==0;if(!n&&!r)return t&&Ao(l,i,!1),Cl(e,l,u);n=l.stateNode,$c.current=l;var a=r&&typeof i.getDerivedStateFromError!="function"?null:n.render();return l.flags|=1,e!==null&&r?(l.child=Ni(l,e.child,null,u),l.child=Ni(l,null,a,u)):_e(e,l,a,u),l.memoizedState=n.state,t&&Ao(l,i,!0),l.child}function ld(e){var l=e.stateNode;l.pendingContext?So(e,l.pendingContext,l.pendingContext!==l.context):l.context&&So(e,l.context,!1),ga(e,l.containerInfo)}function Uo(e,l,i,n,t){return Pi(),ya(t),l.flags|=256,_e(e,l,i,n),l.child}var _r={dehydrated:null,treeContext:null,retryLane:0};function Br(e){return{baseLanes:e,cachePool:null,transitions:null}}function id(e,l,i){var n=l.pendingProps,t=ee.current,u=!1,r=(l.flags&128)!==0,a;if((a=r)||(a=e!==null&&e.memoizedState===null?!1:(t&2)!==0),a?(u=!0,l.flags&=-129):(e===null||e.memoizedState!==null)&&(t|=1),Y(ee,t&1),e===null)return wr(l),e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(l.mode&1?e.data==="$!"?l.lanes=8:l.lanes=1073741824:l.lanes=1,null):(r=n.children,e=n.fallback,u?(n=l.mode,u=l.child,r={mode:"hidden",children:r},!(n&1)&&u!==null?(u.childLanes=0,u.pendingProps=r):u=eu(r,n,0,null),e=li(e,n,i,null),u.return=l,e.return=l,u.sibling=e,l.child=u,l.child.memoizedState=Br(i),l.memoizedState=_r,e):Aa(l,r));if(t=e.memoizedState,t!==null&&(a=t.dehydrated,a!==null))return Ic(e,l,r,n,a,t,i);if(u){u=n.fallback,r=l.mode,t=e.child,a=t.sibling;var o={mode:"hidden",children:n.children};return!(r&1)&&l.child!==t?(n=l.child,n.childLanes=0,n.pendingProps=o,l.deletions=null):(n=Ml(t,o),n.subtreeFlags=t.subtreeFlags&14680064),a!==null?u=Ml(a,u):(u=li(u,r,i,null),u.flags|=2),u.return=l,n.return=l,n.sibling=u,l.child=n,n=u,u=l.child,r=e.child.memoizedState,r=r===null?Br(i):{baseLanes:r.baseLanes|i,cachePool:null,transitions:r.transitions},u.memoizedState=r,u.childLanes=e.childLanes&~i,l.memoizedState=_r,n}return u=e.child,e=u.sibling,n=Ml(u,{mode:"visible",children:n.children}),!(l.mode&1)&&(n.lanes=i),n.return=l,n.sibling=null,e!==null&&(i=l.deletions,i===null?(l.deletions=[e],l.flags|=16):i.push(e)),l.child=n,l.memoizedState=null,n}function Aa(e,l){return l=eu({mode:"visible",children:l},e.mode,0,null),l.return=e,e.child=l}function Jn(e,l,i,n){return n!==null&&ya(n),Ni(l,e.child,null,i),e=Aa(l,l.pendingProps.children),e.flags|=2,l.memoizedState=null,e}function Ic(e,l,i,n,t,u,r){if(i)return l.flags&256?(l.flags&=-257,n=Lu(Error(q(422))),Jn(e,l,r,n)):l.memoizedState!==null?(l.child=e.child,l.flags|=128,null):(u=n.fallback,t=l.mode,n=eu({mode:"visible",children:n.children},t,0,null),u=li(u,t,r,null),u.flags|=2,n.return=l,u.return=l,n.sibling=u,l.child=n,l.mode&1&&Ni(l,e.child,null,r),l.child.memoizedState=Br(r),l.memoizedState=_r,u);if(!(l.mode&1))return Jn(e,l,r,null);if(t.data==="$!"){if(n=t.nextSibling&&t.nextSibling.dataset,n)var a=n.dgst;return n=a,u=Error(q(419)),n=Lu(u,n,void 0),Jn(e,l,r,n)}if(a=(r&e.childLanes)!==0,Oe||a){if(n=ye,n!==null){switch(r&-r){case 4:t=2;break;case 16:t=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:t=32;break;case 536870912:t=268435456;break;default:t=0}t=t&(n.suspendedLanes|r)?0:t,t!==0&&t!==u.retryLane&&(u.retryLane=t,Dl(e,t),rl(n,e,t,-1))}return za(),n=Lu(Error(q(421))),Jn(e,l,r,n)}return t.data==="$?"?(l.flags|=128,l.child=e.child,l=e1.bind(null,e),t._reactRetry=l,null):(e=u.treeContext,Me=jl(t.nextSibling),Ue=l,Z=!0,tl=null,e!==null&&(Ge[Ke++]=hl,Ge[Ke++]=gl,Ge[Ke++]=ni,hl=e.id,gl=e.overflow,ni=l),l=Aa(l,n.children),l.flags|=4096,l)}function Vo(e,l,i){e.lanes|=l;var n=e.alternate;n!==null&&(n.lanes|=l),kr(e.return,l,i)}function $u(e,l,i,n,t){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:n,tail:i,tailMode:t}:(u.isBackwards=l,u.rendering=null,u.renderingStartTime=0,u.last=n,u.tail=i,u.tailMode=t)}function nd(e,l,i){var n=l.pendingProps,t=n.revealOrder,u=n.tail;if(_e(e,l,n.children,i),n=ee.current,n&2)n=n&1|2,l.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=l.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vo(e,i,l);else if(e.tag===19)Vo(e,i,l);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===l)break e;for(;e.sibling===null;){if(e.return===null||e.return===l)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Y(ee,n),!(l.mode&1))l.memoizedState=null;else switch(t){case"forwards":for(i=l.child,t=null;i!==null;)e=i.alternate,e!==null&&zt(e)===null&&(t=i),i=i.sibling;i=t,i===null?(t=l.child,l.child=null):(t=i.sibling,i.sibling=null),$u(l,!1,t,i,u);break;case"backwards":for(i=null,t=l.child,l.child=null;t!==null;){if(e=t.alternate,e!==null&&zt(e)===null){l.child=t;break}e=t.sibling,t.sibling=i,i=t,t=e}$u(l,!0,i,null,u);break;case"together":$u(l,!1,null,null,void 0);break;default:l.memoizedState=null}return l.child}function ct(e,l){!(l.mode&1)&&e!==null&&(e.alternate=null,l.alternate=null,l.flags|=2)}function Cl(e,l,i){if(e!==null&&(l.dependencies=e.dependencies),ui|=l.lanes,!(i&l.childLanes))return null;if(e!==null&&l.child!==e.child)throw Error(q(153));if(l.child!==null){for(e=l.child,i=Ml(e,e.pendingProps),l.child=i,i.return=l;e.sibling!==null;)e=e.sibling,i=i.sibling=Ml(e,e.pendingProps),i.return=l;i.sibling=null}return l.child}function Mc(e,l,i){switch(l.tag){case 3:ld(l),Pi();break;case 5:Bs(l);break;case 1:be(l.type)&&At(l);break;case 4:ga(l,l.stateNode.containerInfo);break;case 10:var n=l.type._context,t=l.memoizedProps.value;Y(Bt,n._currentValue),n._currentValue=t;break;case 13:if(n=l.memoizedState,n!==null)return n.dehydrated!==null?(Y(ee,ee.current&1),l.flags|=128,null):i&l.child.childLanes?id(e,l,i):(Y(ee,ee.current&1),e=Cl(e,l,i),e!==null?e.sibling:null);Y(ee,ee.current&1);break;case 19:if(n=(i&l.childLanes)!==0,e.flags&128){if(n)return nd(e,l,i);l.flags|=128}if(t=l.memoizedState,t!==null&&(t.rendering=null,t.tail=null,t.lastEffect=null),Y(ee,ee.current),n)break;return null;case 22:case 23:return l.lanes=0,Zs(e,l,i)}return Cl(e,l,i)}var td,Pr,ud,rd;td=function(e,l){for(var i=l.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===l)break;for(;i.sibling===null;){if(i.return===null||i.return===l)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};Pr=function(){};ud=function(e,l,i,n){var t=e.memoizedProps;if(t!==n){e=l.stateNode,Zl(cl.current);var u=null;switch(i){case"input":t=Zu(e,t),n=Zu(e,n),u=[];break;case"select":t=ie({},t,{value:void 0}),n=ie({},n,{value:void 0}),u=[];break;case"textarea":t=ir(e,t),n=ir(e,n),u=[];break;default:typeof t.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Ct)}tr(i,n);var r;i=null;for(s in t)if(!n.hasOwnProperty(s)&&t.hasOwnProperty(s)&&t[s]!=null)if(s==="style"){var a=t[s];for(r in a)a.hasOwnProperty(r)&&(i||(i={}),i[r]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(cn.hasOwnProperty(s)?u||(u=[]):(u=u||[]).push(s,null));for(s in n){var o=n[s];if(a=t!=null?t[s]:void 0,n.hasOwnProperty(s)&&o!==a&&(o!=null||a!=null))if(s==="style")if(a){for(r in a)!a.hasOwnProperty(r)||o&&o.hasOwnProperty(r)||(i||(i={}),i[r]="");for(r in o)o.hasOwnProperty(r)&&a[r]!==o[r]&&(i||(i={}),i[r]=o[r])}else i||(u||(u=[]),u.push(s,i)),i=o;else s==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,a=a?a.__html:void 0,o!=null&&a!==o&&(u=u||[]).push(s,o)):s==="children"?typeof o!="string"&&typeof o!="number"||(u=u||[]).push(s,""+o):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(cn.hasOwnProperty(s)?(o!=null&&s==="onScroll"&&X("scroll",e),u||a===o||(u=[])):(u=u||[]).push(s,o))}i&&(u=u||[]).push("style",i);var s=u;(l.updateQueue=s)&&(l.flags|=4)}};rd=function(e,l,i,n){i!==n&&(l.flags|=4)};function Ki(e,l){if(!Z)switch(e.tailMode){case"hidden":l=e.tail;for(var i=null;l!==null;)l.alternate!==null&&(i=l),l=l.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var n=null;i!==null;)i.alternate!==null&&(n=i),i=i.sibling;n===null?l||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ce(e){var l=e.alternate!==null&&e.alternate.child===e.child,i=0,n=0;if(l)for(var t=e.child;t!==null;)i|=t.lanes|t.childLanes,n|=t.subtreeFlags&14680064,n|=t.flags&14680064,t.return=e,t=t.sibling;else for(t=e.child;t!==null;)i|=t.lanes|t.childLanes,n|=t.subtreeFlags,n|=t.flags,t.return=e,t=t.sibling;return e.subtreeFlags|=n,e.childLanes=i,l}function Uc(e,l,i){var n=l.pendingProps;switch(ca(l),l.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(l),null;case 1:return be(l.type)&&St(),Ce(l),null;case 3:return n=l.stateNode,zi(),J(Re),J(Ae),va(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Yn(l)?l.flags|=4:e===null||e.memoizedState.isDehydrated&&!(l.flags&256)||(l.flags|=1024,tl!==null&&(Lr(tl),tl=null))),Pr(e,l),Ce(l),null;case 5:qa(l);var t=Zl(Dn.current);if(i=l.type,e!==null&&l.stateNode!=null)ud(e,l,i,n,t),e.ref!==l.ref&&(l.flags|=512,l.flags|=2097152);else{if(!n){if(l.stateNode===null)throw Error(q(166));return Ce(l),null}if(e=Zl(cl.current),Yn(l)){n=l.stateNode,i=l.type;var u=l.memoizedProps;switch(n[sl]=l,n[wn]=u,e=(l.mode&1)!==0,i){case"dialog":X("cancel",n),X("close",n);break;case"iframe":case"object":case"embed":X("load",n);break;case"video":case"audio":for(t=0;t<en.length;t++)X(en[t],n);break;case"source":X("error",n);break;case"img":case"image":case"link":X("error",n),X("load",n);break;case"details":X("toggle",n);break;case"input":Ja(n,u),X("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!u.multiple},X("invalid",n);break;case"textarea":eo(n,u),X("invalid",n)}tr(i,u),t=null;for(var r in u)if(u.hasOwnProperty(r)){var a=u[r];r==="children"?typeof a=="string"?n.textContent!==a&&(u.suppressHydrationWarning!==!0&&Kn(n.textContent,a,e),t=["children",a]):typeof a=="number"&&n.textContent!==""+a&&(u.suppressHydrationWarning!==!0&&Kn(n.textContent,a,e),t=["children",""+a]):cn.hasOwnProperty(r)&&a!=null&&r==="onScroll"&&X("scroll",n)}switch(i){case"input":In(n),Za(n,u,!0);break;case"textarea":In(n),lo(n);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(n.onclick=Ct)}n=t,l.updateQueue=n,n!==null&&(l.flags|=4)}else{r=t.nodeType===9?t:t.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zf(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=r.createElement(i,{is:n.is}):(e=r.createElement(i),i==="select"&&(r=e,n.multiple?r.multiple=!0:n.size&&(r.size=n.size))):e=r.createElementNS(e,i),e[sl]=l,e[wn]=n,td(e,l,!1,!1),l.stateNode=e;e:{switch(r=ur(i,n),i){case"dialog":X("cancel",e),X("close",e),t=n;break;case"iframe":case"object":case"embed":X("load",e),t=n;break;case"video":case"audio":for(t=0;t<en.length;t++)X(en[t],e);t=n;break;case"source":X("error",e),t=n;break;case"img":case"image":case"link":X("error",e),X("load",e),t=n;break;case"details":X("toggle",e),t=n;break;case"input":Ja(e,n),t=Zu(e,n),X("invalid",e);break;case"option":t=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},t=ie({},n,{value:void 0}),X("invalid",e);break;case"textarea":eo(e,n),t=ir(e,n),X("invalid",e);break;default:t=n}tr(i,t),a=t;for(u in a)if(a.hasOwnProperty(u)){var o=a[u];u==="style"?Rf(e,o):u==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&Tf(e,o)):u==="children"?typeof o=="string"?(i!=="textarea"||o!=="")&&yn(e,o):typeof o=="number"&&yn(e,""+o):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(cn.hasOwnProperty(u)?o!=null&&u==="onScroll"&&X("scroll",e):o!=null&&Xr(e,u,o,r))}switch(i){case"input":In(e),Za(e,n,!1);break;case"textarea":In(e),lo(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Vl(n.value));break;case"select":e.multiple=!!n.multiple,u=n.value,u!=null?ki(e,!!n.multiple,u,!1):n.defaultValue!=null&&ki(e,!!n.multiple,n.defaultValue,!0);break;default:typeof t.onClick=="function"&&(e.onclick=Ct)}switch(i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(l.flags|=4)}l.ref!==null&&(l.flags|=512,l.flags|=2097152)}return Ce(l),null;case 6:if(e&&l.stateNode!=null)rd(e,l,e.memoizedProps,n);else{if(typeof n!="string"&&l.stateNode===null)throw Error(q(166));if(i=Zl(Dn.current),Zl(cl.current),Yn(l)){if(n=l.stateNode,i=l.memoizedProps,n[sl]=l,(u=n.nodeValue!==i)&&(e=Ue,e!==null))switch(e.tag){case 3:Kn(n.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Kn(n.nodeValue,i,(e.mode&1)!==0)}u&&(l.flags|=4)}else n=(i.nodeType===9?i:i.ownerDocument).createTextNode(n),n[sl]=l,l.stateNode=n}return Ce(l),null;case 13:if(J(ee),n=l.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Me!==null&&l.mode&1&&!(l.flags&128))ks(),Pi(),l.flags|=98560,u=!1;else if(u=Yn(l),n!==null&&n.dehydrated!==null){if(e===null){if(!u)throw Error(q(318));if(u=l.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(q(317));u[sl]=l}else Pi(),!(l.flags&128)&&(l.memoizedState=null),l.flags|=4;Ce(l),u=!1}else tl!==null&&(Lr(tl),tl=null),u=!0;if(!u)return l.flags&65536?l:null}return l.flags&128?(l.lanes=i,l):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(l.child.flags|=8192,l.mode&1&&(e===null||ee.current&1?se===0&&(se=3):za())),l.updateQueue!==null&&(l.flags|=4),Ce(l),null);case 4:return zi(),Pr(e,l),e===null&&qn(l.stateNode.containerInfo),Ce(l),null;case 10:return Fa(l.type._context),Ce(l),null;case 17:return be(l.type)&&St(),Ce(l),null;case 19:if(J(ee),u=l.memoizedState,u===null)return Ce(l),null;if(n=(l.flags&128)!==0,r=u.rendering,r===null)if(n)Ki(u,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=l.child;e!==null;){if(r=zt(e),r!==null){for(l.flags|=128,Ki(u,!1),n=r.updateQueue,n!==null&&(l.updateQueue=n,l.flags|=4),l.subtreeFlags=0,n=i,i=l.child;i!==null;)u=i,e=n,u.flags&=14680066,r=u.alternate,r===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=r.childLanes,u.lanes=r.lanes,u.child=r.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=r.memoizedProps,u.memoizedState=r.memoizedState,u.updateQueue=r.updateQueue,u.type=r.type,e=r.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Y(ee,ee.current&1|2),l.child}e=e.sibling}u.tail!==null&&re()>Oi&&(l.flags|=128,n=!0,Ki(u,!1),l.lanes=4194304)}else{if(!n)if(e=zt(r),e!==null){if(l.flags|=128,n=!0,i=e.updateQueue,i!==null&&(l.updateQueue=i,l.flags|=4),Ki(u,!0),u.tail===null&&u.tailMode==="hidden"&&!r.alternate&&!Z)return Ce(l),null}else 2*re()-u.renderingStartTime>Oi&&i!==1073741824&&(l.flags|=128,n=!0,Ki(u,!1),l.lanes=4194304);u.isBackwards?(r.sibling=l.child,l.child=r):(i=u.last,i!==null?i.sibling=r:l.child=r,u.last=r)}return u.tail!==null?(l=u.tail,u.rendering=l,u.tail=l.sibling,u.renderingStartTime=re(),l.sibling=null,i=ee.current,Y(ee,n?i&1|2:i&1),l):(Ce(l),null);case 22:case 23:return Na(),n=l.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(l.flags|=8192),n&&l.mode&1?$e&1073741824&&(Ce(l),l.subtreeFlags&6&&(l.flags|=8192)):Ce(l),null;case 24:return null;case 25:return null}throw Error(q(156,l.tag))}function Vc(e,l){switch(ca(l),l.tag){case 1:return be(l.type)&&St(),e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 3:return zi(),J(Re),J(Ae),va(),e=l.flags,e&65536&&!(e&128)?(l.flags=e&-65537|128,l):null;case 5:return qa(l),null;case 13:if(J(ee),e=l.memoizedState,e!==null&&e.dehydrated!==null){if(l.alternate===null)throw Error(q(340));Pi()}return e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 19:return J(ee),null;case 4:return zi(),null;case 10:return Fa(l.type._context),null;case 22:case 23:return Na(),null;case 24:return null;default:return null}}var Zn=!1,Se=!1,Hc=typeof WeakSet=="function"?WeakSet:Set,B=null;function qi(e,l){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(n){te(e,l,n)}else i.current=null}function Nr(e,l,i){try{i()}catch(n){te(e,l,n)}}var Ho=!1;function Wc(e,l){if(pr=wt,e=ss(),sa(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var n=i.getSelection&&i.getSelection();if(n&&n.rangeCount!==0){i=n.anchorNode;var t=n.anchorOffset,u=n.focusNode;n=n.focusOffset;try{i.nodeType,u.nodeType}catch{i=null;break e}var r=0,a=-1,o=-1,s=0,E=0,y=e,p=null;l:for(;;){for(var v;y!==i||t!==0&&y.nodeType!==3||(a=r+t),y!==u||n!==0&&y.nodeType!==3||(o=r+n),y.nodeType===3&&(r+=y.nodeValue.length),(v=y.firstChild)!==null;)p=y,y=v;for(;;){if(y===e)break l;if(p===i&&++s===t&&(a=r),p===u&&++E===n&&(o=r),(v=y.nextSibling)!==null)break;y=p,p=y.parentNode}y=v}i=a===-1||o===-1?null:{start:a,end:o}}else i=null}i=i||{start:0,end:0}}else i=null;for(Fr={focusedElem:e,selectionRange:i},wt=!1,B=l;B!==null;)if(l=B,e=l.child,(l.subtreeFlags&1028)!==0&&e!==null)e.return=l,B=e;else for(;B!==null;){l=B;try{var h=l.alternate;if(l.flags&1024)switch(l.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,N=h.memoizedState,d=l.stateNode,f=d.getSnapshotBeforeUpdate(l.elementType===l.type?g:il(l.type,g),N);d.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var c=l.stateNode.containerInfo;c.nodeType===1?c.textContent="":c.nodeType===9&&c.documentElement&&c.removeChild(c.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(m){te(l,l.return,m)}if(e=l.sibling,e!==null){e.return=l.return,B=e;break}B=l.return}return h=Ho,Ho=!1,h}function on(e,l,i){var n=l.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var u=t.destroy;t.destroy=void 0,u!==void 0&&Nr(l,i,u)}t=t.next}while(t!==n)}}function Jt(e,l){if(l=l.updateQueue,l=l!==null?l.lastEffect:null,l!==null){var i=l=l.next;do{if((i.tag&e)===e){var n=i.create;i.destroy=n()}i=i.next}while(i!==l)}}function zr(e){var l=e.ref;if(l!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof l=="function"?l(e):l.current=e}}function ad(e){var l=e.alternate;l!==null&&(e.alternate=null,ad(l)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(l=e.stateNode,l!==null&&(delete l[sl],delete l[wn],delete l[gr],delete l[xc],delete l[_c])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function od(e){return e.tag===5||e.tag===3||e.tag===4}function Wo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||od(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tr(e,l,i){var n=e.tag;if(n===5||n===6)e=e.stateNode,l?i.nodeType===8?i.parentNode.insertBefore(e,l):i.insertBefore(e,l):(i.nodeType===8?(l=i.parentNode,l.insertBefore(e,i)):(l=i,l.appendChild(e)),i=i._reactRootContainer,i!=null||l.onclick!==null||(l.onclick=Ct));else if(n!==4&&(e=e.child,e!==null))for(Tr(e,l,i),e=e.sibling;e!==null;)Tr(e,l,i),e=e.sibling}function Or(e,l,i){var n=e.tag;if(n===5||n===6)e=e.stateNode,l?i.insertBefore(e,l):i.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Or(e,l,i),e=e.sibling;e!==null;)Or(e,l,i),e=e.sibling}var ge=null,nl=!1;function xl(e,l,i){for(i=i.child;i!==null;)fd(e,l,i),i=i.sibling}function fd(e,l,i){if(dl&&typeof dl.onCommitFiberUnmount=="function")try{dl.onCommitFiberUnmount(Vt,i)}catch{}switch(i.tag){case 5:Se||qi(i,l);case 6:var n=ge,t=nl;ge=null,xl(e,l,i),ge=n,nl=t,ge!==null&&(nl?(e=ge,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):ge.removeChild(i.stateNode));break;case 18:ge!==null&&(nl?(e=ge,i=i.stateNode,e.nodeType===8?zu(e.parentNode,i):e.nodeType===1&&zu(e,i),mn(e)):zu(ge,i.stateNode));break;case 4:n=ge,t=nl,ge=i.stateNode.containerInfo,nl=!0,xl(e,l,i),ge=n,nl=t;break;case 0:case 11:case 14:case 15:if(!Se&&(n=i.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){t=n=n.next;do{var u=t,r=u.destroy;u=u.tag,r!==void 0&&(u&2||u&4)&&Nr(i,l,r),t=t.next}while(t!==n)}xl(e,l,i);break;case 1:if(!Se&&(qi(i,l),n=i.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=i.memoizedProps,n.state=i.memoizedState,n.componentWillUnmount()}catch(a){te(i,l,a)}xl(e,l,i);break;case 21:xl(e,l,i);break;case 22:i.mode&1?(Se=(n=Se)||i.memoizedState!==null,xl(e,l,i),Se=n):xl(e,l,i);break;default:xl(e,l,i)}}function Qo(e){var l=e.updateQueue;if(l!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new Hc),l.forEach(function(n){var t=l1.bind(null,e,n);i.has(n)||(i.add(n),n.then(t,t))})}}function ll(e,l){var i=l.deletions;if(i!==null)for(var n=0;n<i.length;n++){var t=i[n];try{var u=e,r=l,a=r;e:for(;a!==null;){switch(a.tag){case 5:ge=a.stateNode,nl=!1;break e;case 3:ge=a.stateNode.containerInfo,nl=!0;break e;case 4:ge=a.stateNode.containerInfo,nl=!0;break e}a=a.return}if(ge===null)throw Error(q(160));fd(u,r,t),ge=null,nl=!1;var o=t.alternate;o!==null&&(o.return=null),t.return=null}catch(s){te(t,l,s)}}if(l.subtreeFlags&12854)for(l=l.child;l!==null;)sd(l,e),l=l.sibling}function sd(e,l){var i=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ll(l,e),ol(e),n&4){try{on(3,e,e.return),Jt(3,e)}catch(g){te(e,e.return,g)}try{on(5,e,e.return)}catch(g){te(e,e.return,g)}}break;case 1:ll(l,e),ol(e),n&512&&i!==null&&qi(i,i.return);break;case 5:if(ll(l,e),ol(e),n&512&&i!==null&&qi(i,i.return),e.flags&32){var t=e.stateNode;try{yn(t,"")}catch(g){te(e,e.return,g)}}if(n&4&&(t=e.stateNode,t!=null)){var u=e.memoizedProps,r=i!==null?i.memoizedProps:u,a=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{a==="input"&&u.type==="radio"&&u.name!=null&&Pf(t,u),ur(a,r);var s=ur(a,u);for(r=0;r<o.length;r+=2){var E=o[r],y=o[r+1];E==="style"?Rf(t,y):E==="dangerouslySetInnerHTML"?Tf(t,y):E==="children"?yn(t,y):Xr(t,E,y,s)}switch(a){case"input":er(t,u);break;case"textarea":Nf(t,u);break;case"select":var p=t._wrapperState.wasMultiple;t._wrapperState.wasMultiple=!!u.multiple;var v=u.value;v!=null?ki(t,!!u.multiple,v,!1):p!==!!u.multiple&&(u.defaultValue!=null?ki(t,!!u.multiple,u.defaultValue,!0):ki(t,!!u.multiple,u.multiple?[]:"",!1))}t[wn]=u}catch(g){te(e,e.return,g)}}break;case 6:if(ll(l,e),ol(e),n&4){if(e.stateNode===null)throw Error(q(162));t=e.stateNode,u=e.memoizedProps;try{t.nodeValue=u}catch(g){te(e,e.return,g)}}break;case 3:if(ll(l,e),ol(e),n&4&&i!==null&&i.memoizedState.isDehydrated)try{mn(l.containerInfo)}catch(g){te(e,e.return,g)}break;case 4:ll(l,e),ol(e);break;case 13:ll(l,e),ol(e),t=e.child,t.flags&8192&&(u=t.memoizedState!==null,t.stateNode.isHidden=u,!u||t.alternate!==null&&t.alternate.memoizedState!==null||(Ba=re())),n&4&&Qo(e);break;case 22:if(E=i!==null&&i.memoizedState!==null,e.mode&1?(Se=(s=Se)||E,ll(l,e),Se=s):ll(l,e),ol(e),n&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!E&&e.mode&1)for(B=e,E=e.child;E!==null;){for(y=B=E;B!==null;){switch(p=B,v=p.child,p.tag){case 0:case 11:case 14:case 15:on(4,p,p.return);break;case 1:qi(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount=="function"){n=p,i=p.return;try{l=n,h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(g){te(n,i,g)}}break;case 5:qi(p,p.return);break;case 22:if(p.memoizedState!==null){Ko(y);continue}}v!==null?(v.return=p,B=v):Ko(y)}E=E.sibling}e:for(E=null,y=e;;){if(y.tag===5){if(E===null){E=y;try{t=y.stateNode,s?(u=t.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(a=y.stateNode,o=y.memoizedProps.style,r=o!=null&&o.hasOwnProperty("display")?o.display:null,a.style.display=Of("display",r))}catch(g){te(e,e.return,g)}}}else if(y.tag===6){if(E===null)try{y.stateNode.nodeValue=s?"":y.memoizedProps}catch(g){te(e,e.return,g)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;E===y&&(E=null),y=y.return}E===y&&(E=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:ll(l,e),ol(e),n&4&&Qo(e);break;case 21:break;default:ll(l,e),ol(e)}}function ol(e){var l=e.flags;if(l&2){try{e:{for(var i=e.return;i!==null;){if(od(i)){var n=i;break e}i=i.return}throw Error(q(160))}switch(n.tag){case 5:var t=n.stateNode;n.flags&32&&(yn(t,""),n.flags&=-33);var u=Wo(e);Or(e,u,t);break;case 3:case 4:var r=n.stateNode.containerInfo,a=Wo(e);Tr(e,a,r);break;default:throw Error(q(161))}}catch(o){te(e,e.return,o)}e.flags&=-3}l&4096&&(e.flags&=-4097)}function Qc(e,l,i){B=e,dd(e)}function dd(e,l,i){for(var n=(e.mode&1)!==0;B!==null;){var t=B,u=t.child;if(t.tag===22&&n){var r=t.memoizedState!==null||Zn;if(!r){var a=t.alternate,o=a!==null&&a.memoizedState!==null||Se;a=Zn;var s=Se;if(Zn=r,(Se=o)&&!s)for(B=t;B!==null;)r=B,o=r.child,r.tag===22&&r.memoizedState!==null?Yo(t):o!==null?(o.return=r,B=o):Yo(t);for(;u!==null;)B=u,dd(u),u=u.sibling;B=t,Zn=a,Se=s}Go(e)}else t.subtreeFlags&8772&&u!==null?(u.return=t,B=u):Go(e)}}function Go(e){for(;B!==null;){var l=B;if(l.flags&8772){var i=l.alternate;try{if(l.flags&8772)switch(l.tag){case 0:case 11:case 15:Se||Jt(5,l);break;case 1:var n=l.stateNode;if(l.flags&4&&!Se)if(i===null)n.componentDidMount();else{var t=l.elementType===l.type?i.memoizedProps:il(l.type,i.memoizedProps);n.componentDidUpdate(t,i.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var u=l.updateQueue;u!==null&&Po(l,u,n);break;case 3:var r=l.updateQueue;if(r!==null){if(i=null,l.child!==null)switch(l.child.tag){case 5:i=l.child.stateNode;break;case 1:i=l.child.stateNode}Po(l,r,i)}break;case 5:var a=l.stateNode;if(i===null&&l.flags&4){i=a;var o=l.memoizedProps;switch(l.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&i.focus();break;case"img":o.src&&(i.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(l.memoizedState===null){var s=l.alternate;if(s!==null){var E=s.memoizedState;if(E!==null){var y=E.dehydrated;y!==null&&mn(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(q(163))}Se||l.flags&512&&zr(l)}catch(p){te(l,l.return,p)}}if(l===e){B=null;break}if(i=l.sibling,i!==null){i.return=l.return,B=i;break}B=l.return}}function Ko(e){for(;B!==null;){var l=B;if(l===e){B=null;break}var i=l.sibling;if(i!==null){i.return=l.return,B=i;break}B=l.return}}function Yo(e){for(;B!==null;){var l=B;try{switch(l.tag){case 0:case 11:case 15:var i=l.return;try{Jt(4,l)}catch(o){te(l,i,o)}break;case 1:var n=l.stateNode;if(typeof n.componentDidMount=="function"){var t=l.return;try{n.componentDidMount()}catch(o){te(l,t,o)}}var u=l.return;try{zr(l)}catch(o){te(l,u,o)}break;case 5:var r=l.return;try{zr(l)}catch(o){te(l,r,o)}}}catch(o){te(l,l.return,o)}if(l===e){B=null;break}var a=l.sibling;if(a!==null){a.return=l.return,B=a;break}B=l.return}}var Gc=Math.ceil,Rt=Sl.ReactCurrentDispatcher,xa=Sl.ReactCurrentOwner,Xe=Sl.ReactCurrentBatchConfig,I=0,ye=null,ae=null,qe=0,$e=0,vi=Ql(0),se=0,xn=null,ui=0,Zt=0,_a=0,fn=null,Te=null,Ba=0,Oi=1/0,Fl=null,bt=!1,Rr=null,$l=null,et=!1,Tl=null,jt=0,sn=0,br=null,yt=-1,Et=0;function Be(){return I&6?re():yt!==-1?yt:yt=re()}function Il(e){return e.mode&1?I&2&&qe!==0?qe&-qe:Pc.transition!==null?(Et===0&&(Et=Gf()),Et):(e=Q,e!==0||(e=window.event,e=e===void 0?16:ls(e.type)),e):1}function rl(e,l,i,n){if(50<sn)throw sn=0,br=null,Error(q(185));zn(e,i,n),(!(I&2)||e!==ye)&&(e===ye&&(!(I&2)&&(Zt|=i),se===4&&Nl(e,qe)),je(e,n),i===1&&I===0&&!(l.mode&1)&&(Oi=re()+500,Kt&&Gl()))}function je(e,l){var i=e.callbackNode;P0(e,l);var n=vt(e,e===ye?qe:0);if(n===0)i!==null&&to(i),e.callbackNode=null,e.callbackPriority=0;else if(l=n&-n,e.callbackPriority!==l){if(i!=null&&to(i),l===1)e.tag===0?Bc(Xo.bind(null,e)):qs(Xo.bind(null,e)),Sc(function(){!(I&6)&&Gl()}),i=null;else{switch(Kf(n)){case 1:i=ia;break;case 4:i=Wf;break;case 16:i=qt;break;case 536870912:i=Qf;break;default:i=qt}i=gd(i,cd.bind(null,e))}e.callbackPriority=l,e.callbackNode=i}}function cd(e,l){if(yt=-1,Et=0,I&6)throw Error(q(327));var i=e.callbackNode;if(xi()&&e.callbackNode!==i)return null;var n=vt(e,e===ye?qe:0);if(n===0)return null;if(n&30||n&e.expiredLanes||l)l=Lt(e,n);else{l=n;var t=I;I|=2;var u=Ed();(ye!==e||qe!==l)&&(Fl=null,Oi=re()+500,ei(e,l));do try{Xc();break}catch(a){yd(e,a)}while(1);pa(),Rt.current=u,I=t,ae!==null?l=0:(ye=null,qe=0,l=se)}if(l!==0){if(l===2&&(t=sr(e),t!==0&&(n=t,l=jr(e,t))),l===1)throw i=xn,ei(e,0),Nl(e,n),je(e,re()),i;if(l===6)Nl(e,n);else{if(t=e.current.alternate,!(n&30)&&!Kc(t)&&(l=Lt(e,n),l===2&&(u=sr(e),u!==0&&(n=u,l=jr(e,u))),l===1))throw i=xn,ei(e,0),Nl(e,n),je(e,re()),i;switch(e.finishedWork=t,e.finishedLanes=n,l){case 0:case 1:throw Error(q(345));case 2:Yl(e,Te,Fl);break;case 3:if(Nl(e,n),(n&130023424)===n&&(l=Ba+500-re(),10<l)){if(vt(e,0)!==0)break;if(t=e.suspendedLanes,(t&n)!==n){Be(),e.pingedLanes|=e.suspendedLanes&t;break}e.timeoutHandle=hr(Yl.bind(null,e,Te,Fl),l);break}Yl(e,Te,Fl);break;case 4:if(Nl(e,n),(n&4194240)===n)break;for(l=e.eventTimes,t=-1;0<n;){var r=31-ul(n);u=1<<r,r=l[r],r>t&&(t=r),n&=~u}if(n=t,n=re()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Gc(n/1960))-n,10<n){e.timeoutHandle=hr(Yl.bind(null,e,Te,Fl),n);break}Yl(e,Te,Fl);break;case 5:Yl(e,Te,Fl);break;default:throw Error(q(329))}}}return je(e,re()),e.callbackNode===i?cd.bind(null,e):null}function jr(e,l){var i=fn;return e.current.memoizedState.isDehydrated&&(ei(e,l).flags|=256),e=Lt(e,l),e!==2&&(l=Te,Te=i,l!==null&&Lr(l)),e}function Lr(e){Te===null?Te=e:Te.push.apply(Te,e)}function Kc(e){for(var l=e;;){if(l.flags&16384){var i=l.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var n=0;n<i.length;n++){var t=i[n],u=t.getSnapshot;t=t.value;try{if(!al(u(),t))return!1}catch{return!1}}}if(i=l.child,l.subtreeFlags&16384&&i!==null)i.return=l,l=i;else{if(l===e)break;for(;l.sibling===null;){if(l.return===null||l.return===e)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function Nl(e,l){for(l&=~_a,l&=~Zt,e.suspendedLanes|=l,e.pingedLanes&=~l,e=e.expirationTimes;0<l;){var i=31-ul(l),n=1<<i;e[i]=-1,l&=~n}}function Xo(e){if(I&6)throw Error(q(327));xi();var l=vt(e,0);if(!(l&1))return je(e,re()),null;var i=Lt(e,l);if(e.tag!==0&&i===2){var n=sr(e);n!==0&&(l=n,i=jr(e,n))}if(i===1)throw i=xn,ei(e,0),Nl(e,l),je(e,re()),i;if(i===6)throw Error(q(345));return e.finishedWork=e.current.alternate,e.finishedLanes=l,Yl(e,Te,Fl),je(e,re()),null}function Pa(e,l){var i=I;I|=1;try{return e(l)}finally{I=i,I===0&&(Oi=re()+500,Kt&&Gl())}}function ri(e){Tl!==null&&Tl.tag===0&&!(I&6)&&xi();var l=I;I|=1;var i=Xe.transition,n=Q;try{if(Xe.transition=null,Q=1,e)return e()}finally{Q=n,Xe.transition=i,I=l,!(I&6)&&Gl()}}function Na(){$e=vi.current,J(vi)}function ei(e,l){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,Cc(i)),ae!==null)for(i=ae.return;i!==null;){var n=i;switch(ca(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&St();break;case 3:zi(),J(Re),J(Ae),va();break;case 5:qa(n);break;case 4:zi();break;case 13:J(ee);break;case 19:J(ee);break;case 10:Fa(n.type._context);break;case 22:case 23:Na()}i=i.return}if(ye=e,ae=e=Ml(e.current,null),qe=$e=l,se=0,xn=null,_a=Zt=ui=0,Te=fn=null,Jl!==null){for(l=0;l<Jl.length;l++)if(i=Jl[l],n=i.interleaved,n!==null){i.interleaved=null;var t=n.next,u=i.pending;if(u!==null){var r=u.next;u.next=t,n.next=r}i.pending=n}Jl=null}return e}function yd(e,l){do{var i=ae;try{if(pa(),st.current=Ot,Tt){for(var n=le.memoizedState;n!==null;){var t=n.queue;t!==null&&(t.pending=null),n=n.next}Tt=!1}if(ti=0,ce=fe=le=null,an=!1,Cn=0,xa.current=null,i===null||i.return===null){se=1,xn=l,ae=null;break}e:{var u=e,r=i.return,a=i,o=l;if(l=qe,a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var s=o,E=a,y=E.tag;if(!(E.mode&1)&&(y===0||y===11||y===15)){var p=E.alternate;p?(E.updateQueue=p.updateQueue,E.memoizedState=p.memoizedState,E.lanes=p.lanes):(E.updateQueue=null,E.memoizedState=null)}var v=jo(r);if(v!==null){v.flags&=-257,Lo(v,r,a,u,l),v.mode&1&&bo(u,s,l),l=v,o=s;var h=l.updateQueue;if(h===null){var g=new Set;g.add(o),l.updateQueue=g}else h.add(o);break e}else{if(!(l&1)){bo(u,s,l),za();break e}o=Error(q(426))}}else if(Z&&a.mode&1){var N=jo(r);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Lo(N,r,a,u,l),ya(Ti(o,a));break e}}u=o=Ti(o,a),se!==4&&(se=2),fn===null?fn=[u]:fn.push(u),u=r;do{switch(u.tag){case 3:u.flags|=65536,l&=-l,u.lanes|=l;var d=Ys(u,o,l);Bo(u,d);break e;case 1:a=o;var f=u.type,c=u.stateNode;if(!(u.flags&128)&&(typeof f.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&($l===null||!$l.has(c)))){u.flags|=65536,l&=-l,u.lanes|=l;var m=Xs(u,a,l);Bo(u,m);break e}}u=u.return}while(u!==null)}Fd(i)}catch(w){l=w,ae===i&&i!==null&&(ae=i=i.return);continue}break}while(1)}function Ed(){var e=Rt.current;return Rt.current=Ot,e===null?Ot:e}function za(){(se===0||se===3||se===2)&&(se=4),ye===null||!(ui&268435455)&&!(Zt&268435455)||Nl(ye,qe)}function Lt(e,l){var i=I;I|=2;var n=Ed();(ye!==e||qe!==l)&&(Fl=null,ei(e,l));do try{Yc();break}catch(t){yd(e,t)}while(1);if(pa(),I=i,Rt.current=n,ae!==null)throw Error(q(261));return ye=null,qe=0,se}function Yc(){for(;ae!==null;)pd(ae)}function Xc(){for(;ae!==null&&!w0();)pd(ae)}function pd(e){var l=hd(e.alternate,e,$e);e.memoizedProps=e.pendingProps,l===null?Fd(e):ae=l,xa.current=null}function Fd(e){var l=e;do{var i=l.alternate;if(e=l.return,l.flags&32768){if(i=Vc(i,l),i!==null){i.flags&=32767,ae=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,ae=null;return}}else if(i=Uc(i,l,$e),i!==null){ae=i;return}if(l=l.sibling,l!==null){ae=l;return}ae=l=e}while(l!==null);se===0&&(se=5)}function Yl(e,l,i){var n=Q,t=Xe.transition;try{Xe.transition=null,Q=1,Jc(e,l,i,n)}finally{Xe.transition=t,Q=n}return null}function Jc(e,l,i,n){do xi();while(Tl!==null);if(I&6)throw Error(q(327));i=e.finishedWork;var t=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(q(177));e.callbackNode=null,e.callbackPriority=0;var u=i.lanes|i.childLanes;if(N0(e,u),e===ye&&(ae=ye=null,qe=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||et||(et=!0,gd(qt,function(){return xi(),null})),u=(i.flags&15990)!==0,i.subtreeFlags&15990||u){u=Xe.transition,Xe.transition=null;var r=Q;Q=1;var a=I;I|=4,xa.current=null,Wc(e,i),sd(i,e),hc(Fr),wt=!!pr,Fr=pr=null,e.current=i,Qc(i),k0(),I=a,Q=r,Xe.transition=u}else e.current=i;if(et&&(et=!1,Tl=e,jt=t),u=e.pendingLanes,u===0&&($l=null),S0(i.stateNode),je(e,re()),l!==null)for(n=e.onRecoverableError,i=0;i<l.length;i++)t=l[i],n(t.value,{componentStack:t.stack,digest:t.digest});if(bt)throw bt=!1,e=Rr,Rr=null,e;return jt&1&&e.tag!==0&&xi(),u=e.pendingLanes,u&1?e===br?sn++:(sn=0,br=e):sn=0,Gl(),null}function xi(){if(Tl!==null){var e=Kf(jt),l=Xe.transition,i=Q;try{if(Xe.transition=null,Q=16>e?16:e,Tl===null)var n=!1;else{if(e=Tl,Tl=null,jt=0,I&6)throw Error(q(331));var t=I;for(I|=4,B=e.current;B!==null;){var u=B,r=u.child;if(B.flags&16){var a=u.deletions;if(a!==null){for(var o=0;o<a.length;o++){var s=a[o];for(B=s;B!==null;){var E=B;switch(E.tag){case 0:case 11:case 15:on(8,E,u)}var y=E.child;if(y!==null)y.return=E,B=y;else for(;B!==null;){E=B;var p=E.sibling,v=E.return;if(ad(E),E===s){B=null;break}if(p!==null){p.return=v,B=p;break}B=v}}}var h=u.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var N=g.sibling;g.sibling=null,g=N}while(g!==null)}}B=u}}if(u.subtreeFlags&2064&&r!==null)r.return=u,B=r;else e:for(;B!==null;){if(u=B,u.flags&2048)switch(u.tag){case 0:case 11:case 15:on(9,u,u.return)}var d=u.sibling;if(d!==null){d.return=u.return,B=d;break e}B=u.return}}var f=e.current;for(B=f;B!==null;){r=B;var c=r.child;if(r.subtreeFlags&2064&&c!==null)c.return=r,B=c;else e:for(r=f;B!==null;){if(a=B,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Jt(9,a)}}catch(w){te(a,a.return,w)}if(a===r){B=null;break e}var m=a.sibling;if(m!==null){m.return=a.return,B=m;break e}B=a.return}}if(I=t,Gl(),dl&&typeof dl.onPostCommitFiberRoot=="function")try{dl.onPostCommitFiberRoot(Vt,e)}catch{}n=!0}return n}finally{Q=i,Xe.transition=l}}return!1}function Jo(e,l,i){l=Ti(i,l),l=Ys(e,l,1),e=Ll(e,l,1),l=Be(),e!==null&&(zn(e,1,l),je(e,l))}function te(e,l,i){if(e.tag===3)Jo(e,e,i);else for(;l!==null;){if(l.tag===3){Jo(l,e,i);break}else if(l.tag===1){var n=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&($l===null||!$l.has(n))){e=Ti(i,e),e=Xs(l,e,1),l=Ll(l,e,1),e=Be(),l!==null&&(zn(l,1,e),je(l,e));break}}l=l.return}}function Zc(e,l,i){var n=e.pingCache;n!==null&&n.delete(l),l=Be(),e.pingedLanes|=e.suspendedLanes&i,ye===e&&(qe&i)===i&&(se===4||se===3&&(qe&130023424)===qe&&500>re()-Ba?ei(e,0):_a|=i),je(e,l)}function md(e,l){l===0&&(e.mode&1?(l=Vn,Vn<<=1,!(Vn&130023424)&&(Vn=4194304)):l=1);var i=Be();e=Dl(e,l),e!==null&&(zn(e,l,i),je(e,i))}function e1(e){var l=e.memoizedState,i=0;l!==null&&(i=l.retryLane),md(e,i)}function l1(e,l){var i=0;switch(e.tag){case 13:var n=e.stateNode,t=e.memoizedState;t!==null&&(i=t.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(q(314))}n!==null&&n.delete(l),md(e,i)}var hd;hd=function(e,l,i){if(e!==null)if(e.memoizedProps!==l.pendingProps||Re.current)Oe=!0;else{if(!(e.lanes&i)&&!(l.flags&128))return Oe=!1,Mc(e,l,i);Oe=!!(e.flags&131072)}else Oe=!1,Z&&l.flags&1048576&&vs(l,_t,l.index);switch(l.lanes=0,l.tag){case 2:var n=l.type;ct(e,l),e=l.pendingProps;var t=Bi(l,Ae.current);Ai(l,i),t=ka(null,l,n,e,t,i);var u=Da();return l.flags|=1,typeof t=="object"&&t!==null&&typeof t.render=="function"&&t.$$typeof===void 0?(l.tag=1,l.memoizedState=null,l.updateQueue=null,be(n)?(u=!0,At(l)):u=!1,l.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,ha(l),t.updater=Yt,l.stateNode=t,t._reactInternals=l,Cr(l,n,e,i),l=xr(null,l,n,!0,u,i)):(l.tag=0,Z&&u&&da(l),_e(null,l,t,i),l=l.child),l;case 16:n=l.elementType;e:{switch(ct(e,l),e=l.pendingProps,t=n._init,n=t(n._payload),l.type=n,t=l.tag=n1(n),e=il(n,e),t){case 0:l=Ar(null,l,n,e,i);break e;case 1:l=Mo(null,l,n,e,i);break e;case 11:l=$o(null,l,n,e,i);break e;case 14:l=Io(null,l,n,il(n.type,e),i);break e}throw Error(q(306,n,""))}return l;case 0:return n=l.type,t=l.pendingProps,t=l.elementType===n?t:il(n,t),Ar(e,l,n,t,i);case 1:return n=l.type,t=l.pendingProps,t=l.elementType===n?t:il(n,t),Mo(e,l,n,t,i);case 3:e:{if(ld(l),e===null)throw Error(q(387));n=l.pendingProps,u=l.memoizedState,t=u.element,Cs(e,l),Nt(l,n,null,i);var r=l.memoizedState;if(n=r.element,u.isDehydrated)if(u={element:n,isDehydrated:!1,cache:r.cache,pendingSuspenseBoundaries:r.pendingSuspenseBoundaries,transitions:r.transitions},l.updateQueue.baseState=u,l.memoizedState=u,l.flags&256){t=Ti(Error(q(423)),l),l=Uo(e,l,n,i,t);break e}else if(n!==t){t=Ti(Error(q(424)),l),l=Uo(e,l,n,i,t);break e}else for(Me=jl(l.stateNode.containerInfo.firstChild),Ue=l,Z=!0,tl=null,i=_s(l,null,n,i),l.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Pi(),n===t){l=Cl(e,l,i);break e}_e(e,l,n,i)}l=l.child}return l;case 5:return Bs(l),e===null&&wr(l),n=l.type,t=l.pendingProps,u=e!==null?e.memoizedProps:null,r=t.children,mr(n,t)?r=null:u!==null&&mr(n,u)&&(l.flags|=32),ed(e,l),_e(e,l,r,i),l.child;case 6:return e===null&&wr(l),null;case 13:return id(e,l,i);case 4:return ga(l,l.stateNode.containerInfo),n=l.pendingProps,e===null?l.child=Ni(l,null,n,i):_e(e,l,n,i),l.child;case 11:return n=l.type,t=l.pendingProps,t=l.elementType===n?t:il(n,t),$o(e,l,n,t,i);case 7:return _e(e,l,l.pendingProps,i),l.child;case 8:return _e(e,l,l.pendingProps.children,i),l.child;case 12:return _e(e,l,l.pendingProps.children,i),l.child;case 10:e:{if(n=l.type._context,t=l.pendingProps,u=l.memoizedProps,r=t.value,Y(Bt,n._currentValue),n._currentValue=r,u!==null)if(al(u.value,r)){if(u.children===t.children&&!Re.current){l=Cl(e,l,i);break e}}else for(u=l.child,u!==null&&(u.return=l);u!==null;){var a=u.dependencies;if(a!==null){r=u.child;for(var o=a.firstContext;o!==null;){if(o.context===n){if(u.tag===1){o=vl(-1,i&-i),o.tag=2;var s=u.updateQueue;if(s!==null){s=s.shared;var E=s.pending;E===null?o.next=o:(o.next=E.next,E.next=o),s.pending=o}}u.lanes|=i,o=u.alternate,o!==null&&(o.lanes|=i),kr(u.return,i,l),a.lanes|=i;break}o=o.next}}else if(u.tag===10)r=u.type===l.type?null:u.child;else if(u.tag===18){if(r=u.return,r===null)throw Error(q(341));r.lanes|=i,a=r.alternate,a!==null&&(a.lanes|=i),kr(r,i,l),r=u.sibling}else r=u.child;if(r!==null)r.return=u;else for(r=u;r!==null;){if(r===l){r=null;break}if(u=r.sibling,u!==null){u.return=r.return,r=u;break}r=r.return}u=r}_e(e,l,t.children,i),l=l.child}return l;case 9:return t=l.type,n=l.pendingProps.children,Ai(l,i),t=Je(t),n=n(t),l.flags|=1,_e(e,l,n,i),l.child;case 14:return n=l.type,t=il(n,l.pendingProps),t=il(n.type,t),Io(e,l,n,t,i);case 15:return Js(e,l,l.type,l.pendingProps,i);case 17:return n=l.type,t=l.pendingProps,t=l.elementType===n?t:il(n,t),ct(e,l),l.tag=1,be(n)?(e=!0,At(l)):e=!1,Ai(l,i),As(l,n,t),Cr(l,n,t,i),xr(null,l,n,!0,e,i);case 19:return nd(e,l,i);case 22:return Zs(e,l,i)}throw Error(q(156,l.tag))};function gd(e,l){return Hf(e,l)}function i1(e,l,i,n){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(e,l,i,n){return new i1(e,l,i,n)}function Ta(e){return e=e.prototype,!(!e||!e.isReactComponent)}function n1(e){if(typeof e=="function")return Ta(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Zr)return 11;if(e===ea)return 14}return 2}function Ml(e,l){var i=e.alternate;return i===null?(i=Ye(e.tag,l,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=l,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,l=e.dependencies,i.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function pt(e,l,i,n,t,u){var r=2;if(n=e,typeof e=="function")Ta(e)&&(r=1);else if(typeof e=="string")r=5;else e:switch(e){case di:return li(i.children,t,u,l);case Jr:r=8,t|=8;break;case Ku:return e=Ye(12,i,l,t|2),e.elementType=Ku,e.lanes=u,e;case Yu:return e=Ye(13,i,l,t),e.elementType=Yu,e.lanes=u,e;case Xu:return e=Ye(19,i,l,t),e.elementType=Xu,e.lanes=u,e;case xf:return eu(i,t,u,l);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Sf:r=10;break e;case Af:r=9;break e;case Zr:r=11;break e;case ea:r=14;break e;case _l:r=16,n=null;break e}throw Error(q(130,e==null?e:typeof e,""))}return l=Ye(r,i,l,t),l.elementType=e,l.type=n,l.lanes=u,l}function li(e,l,i,n){return e=Ye(7,e,n,l),e.lanes=i,e}function eu(e,l,i,n){return e=Ye(22,e,n,l),e.elementType=xf,e.lanes=i,e.stateNode={isHidden:!1},e}function Iu(e,l,i){return e=Ye(6,e,null,l),e.lanes=i,e}function Mu(e,l,i){return l=Ye(4,e.children!==null?e.children:[],e.key,l),l.lanes=i,l.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},l}function t1(e,l,i,n,t){this.tag=l,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wu(0),this.expirationTimes=wu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wu(0),this.identifierPrefix=n,this.onRecoverableError=t,this.mutableSourceEagerHydrationData=null}function Oa(e,l,i,n,t,u,r,a,o){return e=new t1(e,l,i,a,o),l===1?(l=1,u===!0&&(l|=8)):l=0,u=Ye(3,null,null,l),e.current=u,u.stateNode=e,u.memoizedState={element:n,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},ha(u),e}function u1(e,l,i){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:si,key:n==null?null:""+n,children:e,containerInfo:l,implementation:i}}function qd(e){if(!e)return Hl;e=e._reactInternals;e:{if(oi(e)!==e||e.tag!==1)throw Error(q(170));var l=e;do{switch(l.tag){case 3:l=l.stateNode.context;break e;case 1:if(be(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break e}}l=l.return}while(l!==null);throw Error(q(171))}if(e.tag===1){var i=e.type;if(be(i))return gs(e,i,l)}return l}function vd(e,l,i,n,t,u,r,a,o){return e=Oa(i,n,!0,e,t,u,r,a,o),e.context=qd(null),i=e.current,n=Be(),t=Il(i),u=vl(n,t),u.callback=l??null,Ll(i,u,t),e.current.lanes=t,zn(e,t,n),je(e,n),e}function lu(e,l,i,n){var t=l.current,u=Be(),r=Il(t);return i=qd(i),l.context===null?l.context=i:l.pendingContext=i,l=vl(u,r),l.payload={element:e},n=n===void 0?null:n,n!==null&&(l.callback=n),e=Ll(t,l,r),e!==null&&(rl(e,t,r,u),ft(e,t,r)),r}function $t(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Zo(e,l){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<l?i:l}}function Ra(e,l){Zo(e,l),(e=e.alternate)&&Zo(e,l)}function r1(){return null}var wd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ba(e){this._internalRoot=e}iu.prototype.render=ba.prototype.render=function(e){var l=this._internalRoot;if(l===null)throw Error(q(409));lu(e,l,null,null)};iu.prototype.unmount=ba.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var l=e.containerInfo;ri(function(){lu(null,e,null,null)}),l[kl]=null}};function iu(e){this._internalRoot=e}iu.prototype.unstable_scheduleHydration=function(e){if(e){var l=Jf();e={blockedOn:null,target:e,priority:l};for(var i=0;i<Pl.length&&l!==0&&l<Pl[i].priority;i++);Pl.splice(i,0,e),i===0&&es(e)}};function ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function nu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ef(){}function a1(e,l,i,n,t){if(t){if(typeof n=="function"){var u=n;n=function(){var s=$t(r);u.call(s)}}var r=vd(l,n,e,0,null,!1,!1,"",ef);return e._reactRootContainer=r,e[kl]=r.current,qn(e.nodeType===8?e.parentNode:e),ri(),r}for(;t=e.lastChild;)e.removeChild(t);if(typeof n=="function"){var a=n;n=function(){var s=$t(o);a.call(s)}}var o=Oa(e,0,!1,null,null,!1,!1,"",ef);return e._reactRootContainer=o,e[kl]=o.current,qn(e.nodeType===8?e.parentNode:e),ri(function(){lu(l,o,i,n)}),o}function tu(e,l,i,n,t){var u=i._reactRootContainer;if(u){var r=u;if(typeof t=="function"){var a=t;t=function(){var o=$t(r);a.call(o)}}lu(l,r,e,t)}else r=a1(i,l,e,t,n);return $t(r)}Yf=function(e){switch(e.tag){case 3:var l=e.stateNode;if(l.current.memoizedState.isDehydrated){var i=Zi(l.pendingLanes);i!==0&&(na(l,i|1),je(l,re()),!(I&6)&&(Oi=re()+500,Gl()))}break;case 13:ri(function(){var n=Dl(e,1);if(n!==null){var t=Be();rl(n,e,1,t)}}),Ra(e,1)}};ta=function(e){if(e.tag===13){var l=Dl(e,134217728);if(l!==null){var i=Be();rl(l,e,134217728,i)}Ra(e,134217728)}};Xf=function(e){if(e.tag===13){var l=Il(e),i=Dl(e,l);if(i!==null){var n=Be();rl(i,e,l,n)}Ra(e,l)}};Jf=function(){return Q};Zf=function(e,l){var i=Q;try{return Q=e,l()}finally{Q=i}};ar=function(e,l,i){switch(l){case"input":if(er(e,i),l=i.name,i.type==="radio"&&l!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+l)+'][type="radio"]'),l=0;l<i.length;l++){var n=i[l];if(n!==e&&n.form===e.form){var t=Gt(n);if(!t)throw Error(q(90));Bf(n),er(n,t)}}}break;case"textarea":Nf(e,i);break;case"select":l=i.value,l!=null&&ki(e,!!i.multiple,l,!1)}};Lf=Pa;$f=ri;var o1={usingClientEntryPoint:!1,Events:[On,pi,Gt,bf,jf,Pa]},Yi={findFiberByHostInstance:Xl,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},f1={bundleType:Yi.bundleType,version:Yi.version,rendererPackageName:Yi.rendererPackageName,rendererConfig:Yi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sl.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Uf(e),e===null?null:e.stateNode},findFiberByHostInstance:Yi.findFiberByHostInstance||r1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lt=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lt.isDisabled&&lt.supportsFiber)try{Vt=lt.inject(f1),dl=lt}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o1;He.createPortal=function(e,l){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ja(l))throw Error(q(200));return u1(e,l,null,i)};He.createRoot=function(e,l){if(!ja(e))throw Error(q(299));var i=!1,n="",t=wd;return l!=null&&(l.unstable_strictMode===!0&&(i=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onRecoverableError!==void 0&&(t=l.onRecoverableError)),l=Oa(e,1,!1,null,null,i,!1,n,t),e[kl]=l.current,qn(e.nodeType===8?e.parentNode:e),new ba(l)};He.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var l=e._reactInternals;if(l===void 0)throw typeof e.render=="function"?Error(q(188)):(e=Object.keys(e).join(","),Error(q(268,e)));return e=Uf(l),e=e===null?null:e.stateNode,e};He.flushSync=function(e){return ri(e)};He.hydrate=function(e,l,i){if(!nu(l))throw Error(q(200));return tu(null,e,l,!0,i)};He.hydrateRoot=function(e,l,i){if(!ja(e))throw Error(q(405));var n=i!=null&&i.hydratedSources||null,t=!1,u="",r=wd;if(i!=null&&(i.unstable_strictMode===!0&&(t=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(r=i.onRecoverableError)),l=vd(l,null,e,1,i??null,t,!1,u,r),e[kl]=l.current,qn(e),n)for(e=0;e<n.length;e++)i=n[e],t=i._getVersion,t=t(i._source),l.mutableSourceEagerHydrationData==null?l.mutableSourceEagerHydrationData=[i,t]:l.mutableSourceEagerHydrationData.push(i,t);return new iu(l)};He.render=function(e,l,i){if(!nu(l))throw Error(q(200));return tu(null,e,l,!1,i)};He.unmountComponentAtNode=function(e){if(!nu(e))throw Error(q(40));return e._reactRootContainer?(ri(function(){tu(null,null,e,!1,function(){e._reactRootContainer=null,e[kl]=null})}),!0):!1};He.unstable_batchedUpdates=Pa;He.unstable_renderSubtreeIntoContainer=function(e,l,i,n){if(!nu(i))throw Error(q(200));if(e==null||e._reactInternals===void 0)throw Error(q(38));return tu(e,l,i,!1,n)};He.version="18.2.0-next-9e3b772b8-20220608";(function(e){function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(i){console.error(i)}}l(),e.exports=He})(r0);var lf=Wu;Hu.createRoot=lf.createRoot,Hu.hydrateRoot=lf.hydrateRoot;var s1=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var l=document.activeElement,i=[],n=0;n<e.rangeCount;n++)i.push(e.getRangeAt(n));switch(l.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":l.blur();break;default:l=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||i.forEach(function(t){e.addRange(t)}),l&&l.focus()}},d1=s1,nf={"text/plain":"Text","text/html":"Url",default:"Text"},c1="Copy to clipboard: #{key}, Enter";function y1(e){var l=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,l)}function E1(e,l){var i,n,t,u,r,a,o=!1;l||(l={}),i=l.debug||!1;try{t=d1(),u=document.createRange(),r=document.getSelection(),a=document.createElement("span"),a.textContent=e,a.ariaHidden="true",a.style.all="unset",a.style.position="fixed",a.style.top=0,a.style.clip="rect(0, 0, 0, 0)",a.style.whiteSpace="pre",a.style.webkitUserSelect="text",a.style.MozUserSelect="text",a.style.msUserSelect="text",a.style.userSelect="text",a.addEventListener("copy",function(E){if(E.stopPropagation(),l.format)if(E.preventDefault(),typeof E.clipboardData>"u"){i&&console.warn("unable to use e.clipboardData"),i&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var y=nf[l.format]||nf.default;window.clipboardData.setData(y,e)}else E.clipboardData.clearData(),E.clipboardData.setData(l.format,e);l.onCopy&&(E.preventDefault(),l.onCopy(E.clipboardData))}),document.body.appendChild(a),u.selectNodeContents(a),r.addRange(u);var s=document.execCommand("copy");if(!s)throw new Error("copy command was unsuccessful");o=!0}catch(E){i&&console.error("unable to copy using execCommand: ",E),i&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(l.format||"text",e),l.onCopy&&l.onCopy(window.clipboardData),o=!0}catch(y){i&&console.error("unable to copy using clipboardData: ",y),i&&console.error("falling back to prompt"),n=y1("message"in l?l.message:c1),window.prompt(n,e)}}finally{r&&(typeof r.removeRange=="function"?r.removeRange(u):r.removeAllRanges()),a&&document.body.removeChild(a),t()}return o}var p1=E1,_n={},F1={get exports(){return _n},set exports(e){_n=e}},G={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ee=typeof Symbol=="function"&&Symbol.for,La=Ee?Symbol.for("react.element"):60103,$a=Ee?Symbol.for("react.portal"):60106,uu=Ee?Symbol.for("react.fragment"):60107,ru=Ee?Symbol.for("react.strict_mode"):60108,au=Ee?Symbol.for("react.profiler"):60114,ou=Ee?Symbol.for("react.provider"):60109,fu=Ee?Symbol.for("react.context"):60110,Ia=Ee?Symbol.for("react.async_mode"):60111,su=Ee?Symbol.for("react.concurrent_mode"):60111,du=Ee?Symbol.for("react.forward_ref"):60112,cu=Ee?Symbol.for("react.suspense"):60113,m1=Ee?Symbol.for("react.suspense_list"):60120,yu=Ee?Symbol.for("react.memo"):60115,Eu=Ee?Symbol.for("react.lazy"):60116,h1=Ee?Symbol.for("react.block"):60121,g1=Ee?Symbol.for("react.fundamental"):60117,q1=Ee?Symbol.for("react.responder"):60118,v1=Ee?Symbol.for("react.scope"):60119;function Qe(e){if(typeof e=="object"&&e!==null){var l=e.$$typeof;switch(l){case La:switch(e=e.type,e){case Ia:case su:case uu:case au:case ru:case cu:return e;default:switch(e=e&&e.$$typeof,e){case fu:case du:case Eu:case yu:case ou:return e;default:return l}}case $a:return l}}}function kd(e){return Qe(e)===su}G.AsyncMode=Ia;G.ConcurrentMode=su;G.ContextConsumer=fu;G.ContextProvider=ou;G.Element=La;G.ForwardRef=du;G.Fragment=uu;G.Lazy=Eu;G.Memo=yu;G.Portal=$a;G.Profiler=au;G.StrictMode=ru;G.Suspense=cu;G.isAsyncMode=function(e){return kd(e)||Qe(e)===Ia};G.isConcurrentMode=kd;G.isContextConsumer=function(e){return Qe(e)===fu};G.isContextProvider=function(e){return Qe(e)===ou};G.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===La};G.isForwardRef=function(e){return Qe(e)===du};G.isFragment=function(e){return Qe(e)===uu};G.isLazy=function(e){return Qe(e)===Eu};G.isMemo=function(e){return Qe(e)===yu};G.isPortal=function(e){return Qe(e)===$a};G.isProfiler=function(e){return Qe(e)===au};G.isStrictMode=function(e){return Qe(e)===ru};G.isSuspense=function(e){return Qe(e)===cu};G.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===uu||e===su||e===au||e===ru||e===cu||e===m1||typeof e=="object"&&e!==null&&(e.$$typeof===Eu||e.$$typeof===yu||e.$$typeof===ou||e.$$typeof===fu||e.$$typeof===du||e.$$typeof===g1||e.$$typeof===q1||e.$$typeof===v1||e.$$typeof===h1)};G.typeOf=Qe;(function(e){e.exports=G})(F1);function w1(e){function l(C,S,_,O,F){for(var $=0,D=0,ne=0,V=0,W,j,Fe=0,ze=0,U,ke=U=W=0,H=0,me=0,Ii=0,he=0,jn=_.length,Mi=jn-1,el,b="",ue="",pu="",Fu="",Al;H<jn;){if(j=_.charCodeAt(H),H===Mi&&D+V+ne+$!==0&&(D!==0&&(j=D===47?10:47),V=ne=$=0,jn++,Mi++),D+V+ne+$===0){if(H===Mi&&(0<me&&(b=b.replace(p,"")),0<b.trim().length)){switch(j){case 32:case 9:case 59:case 13:case 10:break;default:b+=_.charAt(H)}j=59}switch(j){case 123:for(b=b.trim(),W=b.charCodeAt(0),U=1,he=++H;H<jn;){switch(j=_.charCodeAt(H)){case 123:U++;break;case 125:U--;break;case 47:switch(j=_.charCodeAt(H+1)){case 42:case 47:e:{for(ke=H+1;ke<Mi;++ke)switch(_.charCodeAt(ke)){case 47:if(j===42&&_.charCodeAt(ke-1)===42&&H+2!==ke){H=ke+1;break e}break;case 10:if(j===47){H=ke+1;break e}}H=ke}}break;case 91:j++;case 40:j++;case 34:case 39:for(;H++<Mi&&_.charCodeAt(H)!==j;);}if(U===0)break;H++}switch(U=_.substring(he,H),W===0&&(W=(b=b.replace(y,"").trim()).charCodeAt(0)),W){case 64:switch(0<me&&(b=b.replace(p,"")),j=b.charCodeAt(1),j){case 100:case 109:case 115:case 45:me=S;break;default:me=El}if(U=l(S,me,U,j,F+1),he=U.length,0<k&&(me=i(El,b,Ii),Al=a(3,U,me,S,pe,oe,he,j,F,O),b=me.join(""),Al!==void 0&&(he=(U=Al.trim()).length)===0&&(j=0,U="")),0<he)switch(j){case 115:b=b.replace(A,r);case 100:case 109:case 45:U=b+"{"+U+"}";break;case 107:b=b.replace(f,"$1 $2"),U=b+"{"+U+"}",U=we===1||we===2&&u("@"+U,3)?"@-webkit-"+U+"@"+U:"@"+U;break;default:U=b+U,O===112&&(U=(ue+=U,""))}else U="";break;default:U=l(S,i(S,b,Ii),U,O,F+1)}pu+=U,U=Ii=me=ke=W=0,b="",j=_.charCodeAt(++H);break;case 125:case 59:if(b=(0<me?b.replace(p,""):b).trim(),1<(he=b.length))switch(ke===0&&(W=b.charCodeAt(0),W===45||96<W&&123>W)&&(he=(b=b.replace(" ",":")).length),0<k&&(Al=a(1,b,S,C,pe,oe,ue.length,O,F,O))!==void 0&&(he=(b=Al.trim()).length)===0&&(b="\0\0"),W=b.charCodeAt(0),j=b.charCodeAt(1),W){case 0:break;case 64:if(j===105||j===99){Fu+=b+_.charAt(H);break}default:b.charCodeAt(he-1)!==58&&(ue+=t(b,W,j,b.charCodeAt(2)))}Ii=me=ke=W=0,b="",j=_.charCodeAt(++H)}}switch(j){case 13:case 10:D===47?D=0:1+W===0&&O!==107&&0<b.length&&(me=1,b+="\0"),0<k*T&&a(0,b,S,C,pe,oe,ue.length,O,F,O),oe=1,pe++;break;case 59:case 125:if(D+V+ne+$===0){oe++;break}default:switch(oe++,el=_.charAt(H),j){case 9:case 32:if(V+$+D===0)switch(Fe){case 44:case 58:case 9:case 32:el="";break;default:j!==32&&(el=" ")}break;case 0:el="\\0";break;case 12:el="\\f";break;case 11:el="\\v";break;case 38:V+D+$===0&&(me=Ii=1,el="\f"+el);break;case 108:if(V+D+$+Le===0&&0<ke)switch(H-ke){case 2:Fe===112&&_.charCodeAt(H-3)===58&&(Le=Fe);case 8:ze===111&&(Le=ze)}break;case 58:V+D+$===0&&(ke=H);break;case 44:D+ne+V+$===0&&(me=1,el+="\r");break;case 34:case 39:D===0&&(V=V===j?0:V===0?j:V);break;case 91:V+D+ne===0&&$++;break;case 93:V+D+ne===0&&$--;break;case 41:V+D+$===0&&ne--;break;case 40:if(V+D+$===0){if(W===0)switch(2*Fe+3*ze){case 533:break;default:W=1}ne++}break;case 64:D+ne+V+$+ke+U===0&&(U=1);break;case 42:case 47:if(!(0<V+$+ne))switch(D){case 0:switch(2*j+3*_.charCodeAt(H+1)){case 235:D=47;break;case 220:he=H,D=42}break;case 42:j===47&&Fe===42&&he+2!==H&&(_.charCodeAt(he+2)===33&&(ue+=_.substring(he,H+1)),el="",D=0)}}D===0&&(b+=el)}ze=Fe,Fe=j,H++}if(he=ue.length,0<he){if(me=S,0<k&&(Al=a(2,ue,me,C,pe,oe,he,O,F,O),Al!==void 0&&(ue=Al).length===0))return Fu+ue+pu;if(ue=me.join(",")+"{"+ue+"}",we*Le!==0){switch(we!==2||u(ue,2)||(Le=0),Le){case 111:ue=ue.replace(m,":-moz-$1")+ue;break;case 112:ue=ue.replace(c,"::-webkit-input-$1")+ue.replace(c,"::-moz-$1")+ue.replace(c,":-ms-input-$1")+ue}Le=0}}return Fu+ue+pu}function i(C,S,_){var O=S.trim().split(N);S=O;var F=O.length,$=C.length;switch($){case 0:case 1:var D=0;for(C=$===0?"":C[0]+" ";D<F;++D)S[D]=n(C,S[D],_).trim();break;default:var ne=D=0;for(S=[];D<F;++D)for(var V=0;V<$;++V)S[ne++]=n(C[V]+" ",O[D],_).trim()}return S}function n(C,S,_){var O=S.charCodeAt(0);switch(33>O&&(O=(S=S.trim()).charCodeAt(0)),O){case 38:return S.replace(d,"$1"+C.trim());case 58:return C.trim()+S.replace(d,"$1"+C.trim());default:if(0<1*_&&0<S.indexOf("\f"))return S.replace(d,(C.charCodeAt(0)===58?"":"$1")+C.trim())}return C+S}function t(C,S,_,O){var F=C+";",$=2*S+3*_+4*O;if($===944){C=F.indexOf(":",9)+1;var D=F.substring(C,F.length-1).trim();return D=F.substring(0,C).trim()+D+";",we===1||we===2&&u(D,1)?"-webkit-"+D+D:D}if(we===0||we===2&&!u(F,1))return F;switch($){case 1015:return F.charCodeAt(10)===97?"-webkit-"+F+F:F;case 951:return F.charCodeAt(3)===116?"-webkit-"+F+F:F;case 963:return F.charCodeAt(5)===110?"-webkit-"+F+F:F;case 1009:if(F.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+F+F;case 978:return"-webkit-"+F+"-moz-"+F+F;case 1019:case 983:return"-webkit-"+F+"-moz-"+F+"-ms-"+F+F;case 883:if(F.charCodeAt(8)===45)return"-webkit-"+F+F;if(0<F.indexOf("image-set(",11))return F.replace(de,"$1-webkit-$2")+F;break;case 932:if(F.charCodeAt(4)===45)switch(F.charCodeAt(5)){case 103:return"-webkit-box-"+F.replace("-grow","")+"-webkit-"+F+"-ms-"+F.replace("grow","positive")+F;case 115:return"-webkit-"+F+"-ms-"+F.replace("shrink","negative")+F;case 98:return"-webkit-"+F+"-ms-"+F.replace("basis","preferred-size")+F}return"-webkit-"+F+"-ms-"+F+F;case 964:return"-webkit-"+F+"-ms-flex-"+F+F;case 1023:if(F.charCodeAt(8)!==99)break;return D=F.substring(F.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+D+"-webkit-"+F+"-ms-flex-pack"+D+F;case 1005:return h.test(F)?F.replace(v,":-webkit-")+F.replace(v,":-moz-")+F:F;case 1e3:switch(D=F.substring(13).trim(),S=D.indexOf("-")+1,D.charCodeAt(0)+D.charCodeAt(S)){case 226:D=F.replace(w,"tb");break;case 232:D=F.replace(w,"tb-rl");break;case 220:D=F.replace(w,"lr");break;default:return F}return"-webkit-"+F+"-ms-"+D+F;case 1017:if(F.indexOf("sticky",9)===-1)break;case 975:switch(S=(F=C).length-10,D=(F.charCodeAt(S)===33?F.substring(0,S):F).substring(C.indexOf(":",7)+1).trim(),$=D.charCodeAt(0)+(D.charCodeAt(7)|0)){case 203:if(111>D.charCodeAt(8))break;case 115:F=F.replace(D,"-webkit-"+D)+";"+F;break;case 207:case 102:F=F.replace(D,"-webkit-"+(102<$?"inline-":"")+"box")+";"+F.replace(D,"-webkit-"+D)+";"+F.replace(D,"-ms-"+D+"box")+";"+F}return F+";";case 938:if(F.charCodeAt(5)===45)switch(F.charCodeAt(6)){case 105:return D=F.replace("-items",""),"-webkit-"+F+"-webkit-box-"+D+"-ms-flex-"+D+F;case 115:return"-webkit-"+F+"-ms-flex-item-"+F.replace(x,"")+F;default:return"-webkit-"+F+"-ms-flex-line-pack"+F.replace("align-content","").replace(x,"")+F}break;case 973:case 989:if(F.charCodeAt(3)!==45||F.charCodeAt(4)===122)break;case 931:case 953:if(R.test(C)===!0)return(D=C.substring(C.indexOf(":")+1)).charCodeAt(0)===115?t(C.replace("stretch","fill-available"),S,_,O).replace(":fill-available",":stretch"):F.replace(D,"-webkit-"+D)+F.replace(D,"-moz-"+D.replace("fill-",""))+F;break;case 962:if(F="-webkit-"+F+(F.charCodeAt(5)===102?"-ms-"+F:"")+F,_+O===211&&F.charCodeAt(13)===105&&0<F.indexOf("transform",10))return F.substring(0,F.indexOf(";",27)+1).replace(g,"$1-webkit-$2")+F}return F}function u(C,S){var _=C.indexOf(S===1?":":"{"),O=C.substring(0,S!==3?_:10);return _=C.substring(_+1,C.length-1),z(S!==2?O:O.replace(M,"$1"),_,S)}function r(C,S){var _=t(S,S.charCodeAt(0),S.charCodeAt(1),S.charCodeAt(2));return _!==S+";"?_.replace(P," or ($1)").substring(4):"("+S+")"}function a(C,S,_,O,F,$,D,ne,V,W){for(var j=0,Fe=S,ze;j<k;++j)switch(ze=xe[j].call(E,C,Fe,_,O,F,$,D,ne,V,W)){case void 0:case!1:case!0:case null:break;default:Fe=ze}if(Fe!==S)return Fe}function o(C){switch(C){case void 0:case null:k=xe.length=0;break;default:if(typeof C=="function")xe[k++]=C;else if(typeof C=="object")for(var S=0,_=C.length;S<_;++S)o(C[S]);else T=!!C|0}return o}function s(C){return C=C.prefix,C!==void 0&&(z=null,C?typeof C!="function"?we=1:(we=2,z=C):we=0),s}function E(C,S){var _=C;if(33>_.charCodeAt(0)&&(_=_.trim()),K=_,_=[K],0<k){var O=a(-1,S,_,_,pe,oe,0,0,0,0);O!==void 0&&typeof O=="string"&&(S=O)}var F=l(El,_,S,0,0);return 0<k&&(O=a(-2,F,_,_,pe,oe,F.length,0,0,0),O!==void 0&&(F=O)),K="",Le=0,oe=pe=1,F}var y=/^\0+/g,p=/[\0\r\f]/g,v=/: */g,h=/zoo|gra/,g=/([,: ])(transform)/g,N=/,\r+?/g,d=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,c=/::(place)/g,m=/:(read-only)/g,w=/[svh]\w+-[tblr]{2}/,A=/\(\s*(.*)\s*\)/g,P=/([\s\S]*?);/g,x=/-self|flex-/g,M=/[^]*?(:[rp][el]a[\w-]+)[^]*/,R=/stretch|:\s*\w+\-(?:conte|avail)/,de=/([^-])(image-set\()/,oe=1,pe=1,Le=0,we=1,El=[],xe=[],k=0,z=null,T=0,K="";return E.use=o,E.set=s,e!==void 0&&s(e),E}var k1={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function D1(e){var l=Object.create(null);return function(i){return l[i]===void 0&&(l[i]=e(i)),l[i]}}var C1=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,tf=D1(function(e){return C1.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Ma=_n,S1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},A1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},x1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Dd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ua={};Ua[Ma.ForwardRef]=x1;Ua[Ma.Memo]=Dd;function uf(e){return Ma.isMemo(e)?Dd:Ua[e.$$typeof]||S1}var _1=Object.defineProperty,B1=Object.getOwnPropertyNames,rf=Object.getOwnPropertySymbols,P1=Object.getOwnPropertyDescriptor,N1=Object.getPrototypeOf,af=Object.prototype;function Cd(e,l,i){if(typeof l!="string"){if(af){var n=N1(l);n&&n!==af&&Cd(e,n,i)}var t=B1(l);rf&&(t=t.concat(rf(l)));for(var u=uf(e),r=uf(l),a=0;a<t.length;++a){var o=t[a];if(!A1[o]&&!(i&&i[o])&&!(r&&r[o])&&!(u&&u[o])){var s=P1(l,o);try{_1(e,o,s)}catch{}}}}return e}var z1=Cd;function ql(){return(ql=Object.assign||function(e){for(var l=1;l<arguments.length;l++){var i=arguments[l];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var of=function(e,l){for(var i=[e[0]],n=0,t=l.length;n<t;n+=1)i.push(l[n],e[n+1]);return i},$r=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!_n.typeOf(e)},It=Object.freeze([]),Ul=Object.freeze({});function Bn(e){return typeof e=="function"}function ff(e){return e.displayName||e.name||"Component"}function Va(e){return e&&typeof e.styledComponentId=="string"}var Ri=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Ha=typeof window<"u"&&"HTMLElement"in window,T1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function bn(e){for(var l=arguments.length,i=new Array(l>1?l-1:0),n=1;n<l;n++)i[n-1]=arguments[n];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(i.length>0?" Args: "+i.join(", "):""))}var O1=function(){function e(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}var l=e.prototype;return l.indexOfGroup=function(i){for(var n=0,t=0;t<i;t++)n+=this.groupSizes[t];return n},l.insertRules=function(i,n){if(i>=this.groupSizes.length){for(var t=this.groupSizes,u=t.length,r=u;i>=r;)(r<<=1)<0&&bn(16,""+i);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(var a=u;a<r;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(i+1),s=0,E=n.length;s<E;s++)this.tag.insertRule(o,n[s])&&(this.groupSizes[i]++,o++)},l.clearGroup=function(i){if(i<this.length){var n=this.groupSizes[i],t=this.indexOfGroup(i),u=t+n;this.groupSizes[i]=0;for(var r=t;r<u;r++)this.tag.deleteRule(t)}},l.getGroup=function(i){var n="";if(i>=this.length||this.groupSizes[i]===0)return n;for(var t=this.groupSizes[i],u=this.indexOfGroup(i),r=u+t,a=u;a<r;a++)n+=this.tag.getRule(a)+`/*!sc*/
`;return n},e}(),Ft=new Map,Mt=new Map,dn=1,it=function(e){if(Ft.has(e))return Ft.get(e);for(;Mt.has(dn);)dn++;var l=dn++;return Ft.set(e,l),Mt.set(l,e),l},R1=function(e){return Mt.get(e)},b1=function(e,l){l>=dn&&(dn=l+1),Ft.set(e,l),Mt.set(l,e)},j1="style["+Ri+'][data-styled-version="5.3.9"]',L1=new RegExp("^"+Ri+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),$1=function(e,l,i){for(var n,t=i.split(","),u=0,r=t.length;u<r;u++)(n=t[u])&&e.registerName(l,n)},I1=function(e,l){for(var i=(l.textContent||"").split(`/*!sc*/
`),n=[],t=0,u=i.length;t<u;t++){var r=i[t].trim();if(r){var a=r.match(L1);if(a){var o=0|parseInt(a[1],10),s=a[2];o!==0&&(b1(s,o),$1(e,s,a[3]),e.getTag().insertRules(o,n)),n.length=0}else n.push(r)}}},M1=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Sd=function(e){var l=document.head,i=e||l,n=document.createElement("style"),t=function(a){for(var o=a.childNodes,s=o.length;s>=0;s--){var E=o[s];if(E&&E.nodeType===1&&E.hasAttribute(Ri))return E}}(i),u=t!==void 0?t.nextSibling:null;n.setAttribute(Ri,"active"),n.setAttribute("data-styled-version","5.3.9");var r=M1();return r&&n.setAttribute("nonce",r),i.insertBefore(n,u),n},U1=function(){function e(i){var n=this.element=Sd(i);n.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var u=document.styleSheets,r=0,a=u.length;r<a;r++){var o=u[r];if(o.ownerNode===t)return o}bn(17)}(n),this.length=0}var l=e.prototype;return l.insertRule=function(i,n){try{return this.sheet.insertRule(n,i),this.length++,!0}catch{return!1}},l.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},l.getRule=function(i){var n=this.sheet.cssRules[i];return n!==void 0&&typeof n.cssText=="string"?n.cssText:""},e}(),V1=function(){function e(i){var n=this.element=Sd(i);this.nodes=n.childNodes,this.length=0}var l=e.prototype;return l.insertRule=function(i,n){if(i<=this.length&&i>=0){var t=document.createTextNode(n),u=this.nodes[i];return this.element.insertBefore(t,u||null),this.length++,!0}return!1},l.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},l.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},e}(),H1=function(){function e(i){this.rules=[],this.length=0}var l=e.prototype;return l.insertRule=function(i,n){return i<=this.length&&(this.rules.splice(i,0,n),this.length++,!0)},l.deleteRule=function(i){this.rules.splice(i,1),this.length--},l.getRule=function(i){return i<this.length?this.rules[i]:""},e}(),sf=Ha,W1={isServer:!Ha,useCSSOMInjection:!T1},Ad=function(){function e(i,n,t){i===void 0&&(i=Ul),n===void 0&&(n={}),this.options=ql({},W1,{},i),this.gs=n,this.names=new Map(t),this.server=!!i.isServer,!this.server&&Ha&&sf&&(sf=!1,function(u){for(var r=document.querySelectorAll(j1),a=0,o=r.length;a<o;a++){var s=r[a];s&&s.getAttribute(Ri)!=="active"&&(I1(u,s),s.parentNode&&s.parentNode.removeChild(s))}}(this))}e.registerId=function(i){return it(i)};var l=e.prototype;return l.reconstructWithOptions=function(i,n){return n===void 0&&(n=!0),new e(ql({},this.options,{},i),this.gs,n&&this.names||void 0)},l.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},l.getTag=function(){return this.tag||(this.tag=(t=(n=this.options).isServer,u=n.useCSSOMInjection,r=n.target,i=t?new H1(r):u?new U1(r):new V1(r),new O1(i)));var i,n,t,u,r},l.hasNameForId=function(i,n){return this.names.has(i)&&this.names.get(i).has(n)},l.registerName=function(i,n){if(it(i),this.names.has(i))this.names.get(i).add(n);else{var t=new Set;t.add(n),this.names.set(i,t)}},l.insertRules=function(i,n,t){this.registerName(i,n),this.getTag().insertRules(it(i),t)},l.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},l.clearRules=function(i){this.getTag().clearGroup(it(i)),this.clearNames(i)},l.clearTag=function(){this.tag=void 0},l.toString=function(){return function(i){for(var n=i.getTag(),t=n.length,u="",r=0;r<t;r++){var a=R1(r);if(a!==void 0){var o=i.names.get(a),s=n.getGroup(r);if(o&&s&&o.size){var E=Ri+".g"+r+'[id="'+a+'"]',y="";o!==void 0&&o.forEach(function(p){p.length>0&&(y+=p+",")}),u+=""+s+E+'{content:"'+y+`"}/*!sc*/
`}}}return u}(this)},e}(),Q1=/(a)(d)/gi,df=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ir(e){var l,i="";for(l=Math.abs(e);l>52;l=l/52|0)i=df(l%52)+i;return(df(l%52)+i).replace(Q1,"$1-$2")}var wi=function(e,l){for(var i=l.length;i;)e=33*e^l.charCodeAt(--i);return e},xd=function(e){return wi(5381,e)};function G1(e){for(var l=0;l<e.length;l+=1){var i=e[l];if(Bn(i)&&!Va(i))return!1}return!0}var K1=xd("5.3.9"),Y1=function(){function e(l,i,n){this.rules=l,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&G1(l),this.componentId=i,this.baseHash=wi(K1,i),this.baseStyle=n,Ad.registerId(i)}return e.prototype.generateAndInjectStyles=function(l,i,n){var t=this.componentId,u=[];if(this.baseStyle&&u.push(this.baseStyle.generateAndInjectStyles(l,i,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&i.hasNameForId(t,this.staticRulesId))u.push(this.staticRulesId);else{var r=bi(this.rules,l,i,n).join(""),a=Ir(wi(this.baseHash,r)>>>0);if(!i.hasNameForId(t,a)){var o=n(r,"."+a,void 0,t);i.insertRules(t,a,o)}u.push(a),this.staticRulesId=a}else{for(var s=this.rules.length,E=wi(this.baseHash,n.hash),y="",p=0;p<s;p++){var v=this.rules[p];if(typeof v=="string")y+=v;else if(v){var h=bi(v,l,i,n),g=Array.isArray(h)?h.join(""):h;E=wi(E,g+p),y+=g}}if(y){var N=Ir(E>>>0);if(!i.hasNameForId(t,N)){var d=n(y,"."+N,void 0,t);i.insertRules(t,N,d)}u.push(N)}}return u.join(" ")},e}(),X1=/^\s*\/\/.*$/gm,J1=[":","[",".","#"];function Z1(e){var l,i,n,t,u=e===void 0?Ul:e,r=u.options,a=r===void 0?Ul:r,o=u.plugins,s=o===void 0?It:o,E=new w1(a),y=[],p=function(g){function N(d){if(d)try{g(d+"}")}catch{}}return function(d,f,c,m,w,A,P,x,M,R){switch(d){case 1:if(M===0&&f.charCodeAt(0)===64)return g(f+";"),"";break;case 2:if(x===0)return f+"/*|*/";break;case 3:switch(x){case 102:case 112:return g(c[0]+f),"";default:return f+(R===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(N)}}}(function(g){y.push(g)}),v=function(g,N,d){return N===0&&J1.indexOf(d[i.length])!==-1||d.match(t)?g:"."+l};function h(g,N,d,f){f===void 0&&(f="&");var c=g.replace(X1,""),m=N&&d?d+" "+N+" { "+c+" }":c;return l=f,i=N,n=new RegExp("\\"+i+"\\b","g"),t=new RegExp("(\\"+i+"\\b){2,}"),E(d||!N?"":N,m)}return E.use([].concat(s,[function(g,N,d){g===2&&d.length&&d[0].lastIndexOf(i)>0&&(d[0]=d[0].replace(n,v))},p,function(g){if(g===-2){var N=y;return y=[],N}}])),h.hash=s.length?s.reduce(function(g,N){return N.name||bn(15),wi(g,N.name)},5381).toString():"",h}var _d=Nn.createContext();_d.Consumer;var Bd=Nn.createContext(),ey=(Bd.Consumer,new Ad),Mr=Z1();function ly(){return yl.useContext(_d)||ey}function iy(){return yl.useContext(Bd)||Mr}var ny=function(){function e(l,i){var n=this;this.inject=function(t,u){u===void 0&&(u=Mr);var r=n.name+u.hash;t.hasNameForId(n.id,r)||t.insertRules(n.id,r,u(n.rules,r,"@keyframes"))},this.toString=function(){return bn(12,String(n.name))},this.name=l,this.id="sc-keyframes-"+l,this.rules=i}return e.prototype.getName=function(l){return l===void 0&&(l=Mr),this.name+l.hash},e}(),ty=/([A-Z])/,uy=/([A-Z])/g,ry=/^ms-/,ay=function(e){return"-"+e.toLowerCase()};function cf(e){return ty.test(e)?e.replace(uy,ay).replace(ry,"-ms-"):e}var yf=function(e){return e==null||e===!1||e===""};function bi(e,l,i,n){if(Array.isArray(e)){for(var t,u=[],r=0,a=e.length;r<a;r+=1)(t=bi(e[r],l,i,n))!==""&&(Array.isArray(t)?u.push.apply(u,t):u.push(t));return u}if(yf(e))return"";if(Va(e))return"."+e.styledComponentId;if(Bn(e)){if(typeof(s=e)!="function"||s.prototype&&s.prototype.isReactComponent||!l)return e;var o=e(l);return bi(o,l,i,n)}var s;return e instanceof ny?i?(e.inject(i,n),e.getName(n)):e:$r(e)?function E(y,p){var v,h,g=[];for(var N in y)y.hasOwnProperty(N)&&!yf(y[N])&&(Array.isArray(y[N])&&y[N].isCss||Bn(y[N])?g.push(cf(N)+":",y[N],";"):$r(y[N])?g.push.apply(g,E(y[N],N)):g.push(cf(N)+": "+(v=N,(h=y[N])==null||typeof h=="boolean"||h===""?"":typeof h!="number"||h===0||v in k1?String(h).trim():h+"px")+";"));return p?[p+" {"].concat(g,["}"]):g}(e):e.toString()}var Ef=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function oy(e){for(var l=arguments.length,i=new Array(l>1?l-1:0),n=1;n<l;n++)i[n-1]=arguments[n];return Bn(e)||$r(e)?Ef(bi(of(It,[e].concat(i)))):i.length===0&&e.length===1&&typeof e[0]=="string"?e:Ef(bi(of(e,i)))}var fy=function(e,l,i){return i===void 0&&(i=Ul),e.theme!==i.theme&&e.theme||l||i.theme},sy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,dy=/(^-|-$)/g;function Uu(e){return e.replace(sy,"-").replace(dy,"")}var cy=function(e){return Ir(xd(e)>>>0)};function nt(e){return typeof e=="string"&&!0}var Ur=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},yy=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Ey(e,l,i){var n=e[i];Ur(l)&&Ur(n)?Pd(n,l):e[i]=l}function Pd(e){for(var l=arguments.length,i=new Array(l>1?l-1:0),n=1;n<l;n++)i[n-1]=arguments[n];for(var t=0,u=i;t<u.length;t++){var r=u[t];if(Ur(r))for(var a in r)yy(a)&&Ey(e,r[a],a)}return e}var Nd=Nn.createContext();Nd.Consumer;var Vu={};function zd(e,l,i){var n=Va(e),t=!nt(e),u=l.attrs,r=u===void 0?It:u,a=l.componentId,o=a===void 0?function(f,c){var m=typeof f!="string"?"sc":Uu(f);Vu[m]=(Vu[m]||0)+1;var w=m+"-"+cy("5.3.9"+m+Vu[m]);return c?c+"-"+w:w}(l.displayName,l.parentComponentId):a,s=l.displayName,E=s===void 0?function(f){return nt(f)?"styled."+f:"Styled("+ff(f)+")"}(e):s,y=l.displayName&&l.componentId?Uu(l.displayName)+"-"+l.componentId:l.componentId||o,p=n&&e.attrs?Array.prototype.concat(e.attrs,r).filter(Boolean):r,v=l.shouldForwardProp;n&&e.shouldForwardProp&&(v=l.shouldForwardProp?function(f,c,m){return e.shouldForwardProp(f,c,m)&&l.shouldForwardProp(f,c,m)}:e.shouldForwardProp);var h,g=new Y1(i,y,n?e.componentStyle:void 0),N=g.isStatic&&r.length===0,d=function(f,c){return function(m,w,A,P){var x=m.attrs,M=m.componentStyle,R=m.defaultProps,de=m.foldedComponentIds,oe=m.shouldForwardProp,pe=m.styledComponentId,Le=m.target,we=function(O,F,$){O===void 0&&(O=Ul);var D=ql({},F,{theme:O}),ne={};return $.forEach(function(V){var W,j,Fe,ze=V;for(W in Bn(ze)&&(ze=ze(D)),ze)D[W]=ne[W]=W==="className"?(j=ne[W],Fe=ze[W],j&&Fe?j+" "+Fe:j||Fe):ze[W]}),[D,ne]}(fy(w,yl.useContext(Nd),R)||Ul,w,x),El=we[0],xe=we[1],k=function(O,F,$,D){var ne=ly(),V=iy(),W=F?O.generateAndInjectStyles(Ul,ne,V):O.generateAndInjectStyles($,ne,V);return W}(M,P,El),z=A,T=xe.$as||w.$as||xe.as||w.as||Le,K=nt(T),C=xe!==w?ql({},w,{},xe):w,S={};for(var _ in C)_[0]!=="$"&&_!=="as"&&(_==="forwardedAs"?S.as=C[_]:(oe?oe(_,tf,T):!K||tf(_))&&(S[_]=C[_]));return w.style&&xe.style!==w.style&&(S.style=ql({},w.style,{},xe.style)),S.className=Array.prototype.concat(de,pe,k!==pe?k:null,w.className,xe.className).filter(Boolean).join(" "),S.ref=z,yl.createElement(T,S)}(h,f,c,N)};return d.displayName=E,(h=Nn.forwardRef(d)).attrs=p,h.componentStyle=g,h.displayName=E,h.shouldForwardProp=v,h.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):It,h.styledComponentId=y,h.target=n?e.target:e,h.withComponent=function(f){var c=l.componentId,m=function(A,P){if(A==null)return{};var x,M,R={},de=Object.keys(A);for(M=0;M<de.length;M++)x=de[M],P.indexOf(x)>=0||(R[x]=A[x]);return R}(l,["componentId"]),w=c&&c+"-"+(nt(f)?f:Uu(ff(f)));return zd(f,ql({},m,{attrs:p,componentId:w}),i)},Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=n?Pd({},e.defaultProps,f):f}}),Object.defineProperty(h,"toString",{value:function(){return"."+h.styledComponentId}}),t&&z1(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),h}var Vr=function(e){return function l(i,n,t){if(t===void 0&&(t=Ul),!_n.isValidElementType(n))return bn(1,String(n));var u=function(){return i(n,t,oy.apply(void 0,arguments))};return u.withConfig=function(r){return l(i,n,ql({},t,{},r))},u.attrs=function(r){return l(i,n,ql({},t,{attrs:Array.prototype.concat(t.attrs,r).filter(Boolean)}))},u}(zd,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Vr[e]=Vr(e)});const Td=Vr,py=Td.section`
  > .header {
    color: #b2b2b2;
    font-size: 16px;
  }
  > .content {
    display: grid;
    grid-template-columns: repeat(26, 1fr);
  }
`,Fy=Td.div`
  text-align: center;
  cursor: pointer;
  position: relative;
  padding: 4px 4px 20px 4px;

  &:hover {
    background: #f5f5f5;
  }
  > .emoji {
    font-size: 20px;

    &:hover {
      transform: scale(1.6);
      transition: all 0.2s;
      display: inline-block;
      text-align: center;
    }
  }
  > .copied {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
  }
`;function my({groupName:e,emojis:l,copy:i}){return Ie.jsxs(py,{children:[Ie.jsx("div",{className:"header",children:e}),Ie.jsx("div",{className:"content",children:l.map((n,t)=>Ie.jsx(hy,{emoji:n.emoji,name:n.name,copy:i},t))})]})}function hy({emoji:e,name:l,copy:i}){const[n,t]=yl.useState(!1),u=()=>{i(e),t(!0),setTimeout(()=>{t(!1)},1e3)};return Ie.jsxs(Fy,{title:l,onClick:u,children:[Ie.jsx("span",{className:"emoji",children:e}),n?Ie.jsx("span",{className:"copied",children:"copied"}):null]})}const gy=`1F600                                                  ; fully-qualified     # 😀 E1.0 grinning face
1F603                                                  ; fully-qualified     # 😃 E0.6 grinning face with big eyes
1F604                                                  ; fully-qualified     # 😄 E0.6 grinning face with smiling eyes
1F601                                                  ; fully-qualified     # 😁 E0.6 beaming face with smiling eyes
1F606                                                  ; fully-qualified     # 😆 E0.6 grinning squinting face
1F605                                                  ; fully-qualified     # 😅 E0.6 grinning face with sweat
1F923                                                  ; fully-qualified     # 🤣 E3.0 rolling on the floor laughing
1F602                                                  ; fully-qualified     # 😂 E0.6 face with tears of joy
1F642                                                  ; fully-qualified     # 🙂 E1.0 slightly smiling face
1F643                                                  ; fully-qualified     # 🙃 E1.0 upside-down face
1FAE0                                                  ; fully-qualified     # 🫠 E14.0 melting face
1F609                                                  ; fully-qualified     # 😉 E0.6 winking face
1F60A                                                  ; fully-qualified     # 😊 E0.6 smiling face with smiling eyes
1F607                                                  ; fully-qualified     # 😇 E1.0 smiling face with halo`,qy=`1F970                                                  ; fully-qualified     # 🥰 E11.0 smiling face with hearts
1F60D                                                  ; fully-qualified     # 😍 E0.6 smiling face with heart-eyes
1F929                                                  ; fully-qualified     # 🤩 E5.0 star-struck
1F618                                                  ; fully-qualified     # 😘 E0.6 face blowing a kiss
1F617                                                  ; fully-qualified     # 😗 E1.0 kissing face
263A FE0F                                              ; fully-qualified     # ☺️ E0.6 smiling face
263A                                                   ; unqualified         # ☺ E0.6 smiling face
1F61A                                                  ; fully-qualified     # 😚 E0.6 kissing face with closed eyes
1F619                                                  ; fully-qualified     # 😙 E1.0 kissing face with smiling eyes
1F972                                                  ; fully-qualified     # 🥲 E13.0 smiling face with tear`,vy=`1F60B                                                  ; fully-qualified     # 😋 E0.6 face savoring food
1F61B                                                  ; fully-qualified     # 😛 E1.0 face with tongue
1F61C                                                  ; fully-qualified     # 😜 E0.6 winking face with tongue
1F92A                                                  ; fully-qualified     # 🤪 E5.0 zany face
1F61D                                                  ; fully-qualified     # 😝 E0.6 squinting face with tongue
1F911                                                  ; fully-qualified     # 🤑 E1.0 money-mouth face`,wy=`1F917                                                  ; fully-qualified     # 🤗 E1.0 smiling face with open hands
1F92D                                                  ; fully-qualified     # 🤭 E5.0 face with hand over mouth
1FAE2                                                  ; fully-qualified     # 🫢 E14.0 face with open eyes and hand over mouth
1FAE3                                                  ; fully-qualified     # 🫣 E14.0 face with peeking eye
1F92B                                                  ; fully-qualified     # 🤫 E5.0 shushing face
1F914                                                  ; fully-qualified     # 🤔 E1.0 thinking face
1FAE1                                                  ; fully-qualified     # 🫡 E14.0 saluting face`,ky=`1F910                                                  ; fully-qualified     # 🤐 E1.0 zipper-mouth face
1F928                                                  ; fully-qualified     # 🤨 E5.0 face with raised eyebrow
1F610                                                  ; fully-qualified     # 😐 E0.7 neutral face
1F611                                                  ; fully-qualified     # 😑 E1.0 expressionless face
1F636                                                  ; fully-qualified     # 😶 E1.0 face without mouth
1FAE5                                                  ; fully-qualified     # 🫥 E14.0 dotted line face
1F636 200D 1F32B FE0F                                  ; fully-qualified     # 😶‍🌫️ E13.1 face in clouds
1F636 200D 1F32B                                       ; minimally-qualified # 😶‍🌫 E13.1 face in clouds
1F60F                                                  ; fully-qualified     # 😏 E0.6 smirking face
1F612                                                  ; fully-qualified     # 😒 E0.6 unamused face
1F644                                                  ; fully-qualified     # 🙄 E1.0 face with rolling eyes
1F62C                                                  ; fully-qualified     # 😬 E1.0 grimacing face
1F62E 200D 1F4A8                                       ; fully-qualified     # 😮‍💨 E13.1 face exhaling
1F925                                                  ; fully-qualified     # 🤥 E3.0 lying face
1FAE8                                                  ; fully-qualified     # 🫨 E15.0 shaking face`,Dy=`1F60C                                                  ; fully-qualified     # 😌 E0.6 relieved face
1F614                                                  ; fully-qualified     # 😔 E0.6 pensive face
1F62A                                                  ; fully-qualified     # 😪 E0.6 sleepy face
1F924                                                  ; fully-qualified     # 🤤 E3.0 drooling face
1F634                                                  ; fully-qualified     # 😴 E1.0 sleeping face`,Cy=`1F637                                                  ; fully-qualified     # 😷 E0.6 face with medical mask
1F912                                                  ; fully-qualified     # 🤒 E1.0 face with thermometer
1F915                                                  ; fully-qualified     # 🤕 E1.0 face with head-bandage
1F922                                                  ; fully-qualified     # 🤢 E3.0 nauseated face
1F92E                                                  ; fully-qualified     # 🤮 E5.0 face vomiting
1F927                                                  ; fully-qualified     # 🤧 E3.0 sneezing face
1F975                                                  ; fully-qualified     # 🥵 E11.0 hot face
1F976                                                  ; fully-qualified     # 🥶 E11.0 cold face
1F974                                                  ; fully-qualified     # 🥴 E11.0 woozy face
1F635                                                  ; fully-qualified     # 😵 E0.6 face with crossed-out eyes
1F635 200D 1F4AB                                       ; fully-qualified     # 😵‍💫 E13.1 face with spiral eyes
1F92F                                                  ; fully-qualified     # 🤯 E5.0 exploding head`,Sy=`1F920                                                  ; fully-qualified     # 🤠 E3.0 cowboy hat face
1F973                                                  ; fully-qualified     # 🥳 E11.0 partying face
1F978                                                  ; fully-qualified     # 🥸 E13.0 disguised face`,Ay=`1F60E                                                  ; fully-qualified     # 😎 E1.0 smiling face with sunglasses
1F913                                                  ; fully-qualified     # 🤓 E1.0 nerd face
1F9D0                                                  ; fully-qualified     # 🧐 E5.0 face with monocle`,xy=`1F615                                                  ; fully-qualified     # 😕 E1.0 confused face
1FAE4                                                  ; fully-qualified     # 🫤 E14.0 face with diagonal mouth
1F61F                                                  ; fully-qualified     # 😟 E1.0 worried face
1F641                                                  ; fully-qualified     # 🙁 E1.0 slightly frowning face
2639 FE0F                                              ; fully-qualified     # ☹️ E0.7 frowning face
2639                                                   ; unqualified         # ☹ E0.7 frowning face
1F62E                                                  ; fully-qualified     # 😮 E1.0 face with open mouth
1F62F                                                  ; fully-qualified     # 😯 E1.0 hushed face
1F632                                                  ; fully-qualified     # 😲 E0.6 astonished face
1F633                                                  ; fully-qualified     # 😳 E0.6 flushed face
1F97A                                                  ; fully-qualified     # 🥺 E11.0 pleading face
1F979                                                  ; fully-qualified     # 🥹 E14.0 face holding back tears
1F626                                                  ; fully-qualified     # 😦 E1.0 frowning face with open mouth
1F627                                                  ; fully-qualified     # 😧 E1.0 anguished face
1F628                                                  ; fully-qualified     # 😨 E0.6 fearful face
1F630                                                  ; fully-qualified     # 😰 E0.6 anxious face with sweat
1F625                                                  ; fully-qualified     # 😥 E0.6 sad but relieved face
1F622                                                  ; fully-qualified     # 😢 E0.6 crying face
1F62D                                                  ; fully-qualified     # 😭 E0.6 loudly crying face
1F631                                                  ; fully-qualified     # 😱 E0.6 face screaming in fear
1F616                                                  ; fully-qualified     # 😖 E0.6 confounded face
1F623                                                  ; fully-qualified     # 😣 E0.6 persevering face
1F61E                                                  ; fully-qualified     # 😞 E0.6 disappointed face
1F613                                                  ; fully-qualified     # 😓 E0.6 downcast face with sweat
1F629                                                  ; fully-qualified     # 😩 E0.6 weary face
1F62B                                                  ; fully-qualified     # 😫 E0.6 tired face
1F971                                                  ; fully-qualified     # 🥱 E12.0 yawning face`,_y=`1F624                                                  ; fully-qualified     # 😤 E0.6 face with steam from nose
1F621                                                  ; fully-qualified     # 😡 E0.6 enraged face
1F620                                                  ; fully-qualified     # 😠 E0.6 angry face
1F92C                                                  ; fully-qualified     # 🤬 E5.0 face with symbols on mouth
1F608                                                  ; fully-qualified     # 😈 E1.0 smiling face with horns
1F47F                                                  ; fully-qualified     # 👿 E0.6 angry face with horns
1F480                                                  ; fully-qualified     # 💀 E0.6 skull
2620 FE0F                                              ; fully-qualified     # ☠️ E1.0 skull and crossbones
2620                                                   ; unqualified         # ☠ E1.0 skull and crossbones`,By=`1F4A9                                                  ; fully-qualified     # 💩 E0.6 pile of poo
1F921                                                  ; fully-qualified     # 🤡 E3.0 clown face
1F479                                                  ; fully-qualified     # 👹 E0.6 ogre
1F47A                                                  ; fully-qualified     # 👺 E0.6 goblin
1F47B                                                  ; fully-qualified     # 👻 E0.6 ghost
1F47D                                                  ; fully-qualified     # 👽 E0.6 alien
1F47E                                                  ; fully-qualified     # 👾 E0.6 alien monster
1F916                                                  ; fully-qualified     # 🤖 E1.0 robot`,Py=`1F63A                                                  ; fully-qualified     # 😺 E0.6 grinning cat
1F638                                                  ; fully-qualified     # 😸 E0.6 grinning cat with smiling eyes
1F639                                                  ; fully-qualified     # 😹 E0.6 cat with tears of joy
1F63B                                                  ; fully-qualified     # 😻 E0.6 smiling cat with heart-eyes
1F63C                                                  ; fully-qualified     # 😼 E0.6 cat with wry smile
1F63D                                                  ; fully-qualified     # 😽 E0.6 kissing cat
1F640                                                  ; fully-qualified     # 🙀 E0.6 weary cat
1F63F                                                  ; fully-qualified     # 😿 E0.6 crying cat
1F63E                                                  ; fully-qualified     # 😾 E0.6 pouting cat`,Ny=`1F648                                                  ; fully-qualified     # 🙈 E0.6 see-no-evil monkey
1F649                                                  ; fully-qualified     # 🙉 E0.6 hear-no-evil monkey
1F64A                                                  ; fully-qualified     # 🙊 E0.6 speak-no-evil monkey`,zy=`1F48C                                                  ; fully-qualified     # 💌 E0.6 love letter
1F498                                                  ; fully-qualified     # 💘 E0.6 heart with arrow
1F49D                                                  ; fully-qualified     # 💝 E0.6 heart with ribbon
1F496                                                  ; fully-qualified     # 💖 E0.6 sparkling heart
1F497                                                  ; fully-qualified     # 💗 E0.6 growing heart
1F493                                                  ; fully-qualified     # 💓 E0.6 beating heart
1F49E                                                  ; fully-qualified     # 💞 E0.6 revolving hearts
1F495                                                  ; fully-qualified     # 💕 E0.6 two hearts
1F49F                                                  ; fully-qualified     # 💟 E0.6 heart decoration
2763 FE0F                                              ; fully-qualified     # ❣️ E1.0 heart exclamation
2763                                                   ; unqualified         # ❣ E1.0 heart exclamation
1F494                                                  ; fully-qualified     # 💔 E0.6 broken heart
2764 FE0F 200D 1F525                                   ; fully-qualified     # ❤️‍🔥 E13.1 heart on fire
2764 200D 1F525                                        ; unqualified         # ❤‍🔥 E13.1 heart on fire
2764 FE0F 200D 1FA79                                   ; fully-qualified     # ❤️‍🩹 E13.1 mending heart
2764 200D 1FA79                                        ; unqualified         # ❤‍🩹 E13.1 mending heart
2764 FE0F                                              ; fully-qualified     # ❤️ E0.6 red heart
2764                                                   ; unqualified         # ❤ E0.6 red heart
1FA77                                                  ; fully-qualified     # 🩷 E15.0 pink heart
1F9E1                                                  ; fully-qualified     # 🧡 E5.0 orange heart
1F49B                                                  ; fully-qualified     # 💛 E0.6 yellow heart
1F49A                                                  ; fully-qualified     # 💚 E0.6 green heart
1F499                                                  ; fully-qualified     # 💙 E0.6 blue heart
1FA75                                                  ; fully-qualified     # 🩵 E15.0 light blue heart
1F49C                                                  ; fully-qualified     # 💜 E0.6 purple heart
1F90E                                                  ; fully-qualified     # 🤎 E12.0 brown heart
1F5A4                                                  ; fully-qualified     # 🖤 E3.0 black heart
1FA76                                                  ; fully-qualified     # 🩶 E15.0 grey heart
1F90D                                                  ; fully-qualified     # 🤍 E12.0 white heart`,Ty=`1F48B                                                  ; fully-qualified     # 💋 E0.6 kiss mark
1F4AF                                                  ; fully-qualified     # 💯 E0.6 hundred points
1F4A2                                                  ; fully-qualified     # 💢 E0.6 anger symbol
1F4A5                                                  ; fully-qualified     # 💥 E0.6 collision
1F4AB                                                  ; fully-qualified     # 💫 E0.6 dizzy
1F4A6                                                  ; fully-qualified     # 💦 E0.6 sweat droplets
1F4A8                                                  ; fully-qualified     # 💨 E0.6 dashing away
1F573 FE0F                                             ; fully-qualified     # 🕳️ E0.7 hole
1F573                                                  ; unqualified         # 🕳 E0.7 hole
1F4AC                                                  ; fully-qualified     # 💬 E0.6 speech balloon
1F441 FE0F 200D 1F5E8 FE0F                             ; fully-qualified     # 👁️‍🗨️ E2.0 eye in speech bubble
1F441 200D 1F5E8 FE0F                                  ; unqualified         # 👁‍🗨️ E2.0 eye in speech bubble
1F441 FE0F 200D 1F5E8                                  ; minimally-qualified # 👁️‍🗨 E2.0 eye in speech bubble
1F441 200D 1F5E8                                       ; unqualified         # 👁‍🗨 E2.0 eye in speech bubble
1F5E8 FE0F                                             ; fully-qualified     # 🗨️ E2.0 left speech bubble
1F5E8                                                  ; unqualified         # 🗨 E2.0 left speech bubble
1F5EF FE0F                                             ; fully-qualified     # 🗯️ E0.7 right anger bubble
1F5EF                                                  ; unqualified         # 🗯 E0.7 right anger bubble
1F4AD                                                  ; fully-qualified     # 💭 E1.0 thought balloon
1F4A4                                                  ; fully-qualified     # 💤 E0.6 ZZZ`,Oy=Object.freeze(Object.defineProperty({__proto__:null,catFace:Py,emotion:Ty,faceAffection:qy,faceConcerned:xy,faceCostume:By,faceGlasses:Ay,faceHand:wy,faceHat:Sy,faceNegative:_y,faceNeutralSkeptical:ky,faceSleepy:Dy,faceSmiling:gy,faceTongue:vy,faceUnwell:Cy,heart:zy,monkeyFace:Ny},Symbol.toStringTag,{value:"Module"})),Ry=`1F44B                                                  ; fully-qualified     # 👋 E0.6 waving hand
1F91A                                                  ; fully-qualified     # 🤚 E3.0 raised back of hand
1F590 FE0F                                             ; fully-qualified     # 🖐️ E0.7 hand with fingers splayed
1F590                                                  ; unqualified         # 🖐 E0.7 hand with fingers splayed
270B                                                   ; fully-qualified     # ✋ E0.6 raised hand
1F596                                                  ; fully-qualified     # 🖖 E1.0 vulcan salute
1FAF1                                                  ; fully-qualified     # 🫱 E14.0 rightwards hand
1FAF2                                                  ; fully-qualified     # 🫲 E14.0 leftwards hand
1FAF3                                                  ; fully-qualified     # 🫳 E14.0 palm down hand
1FAF4                                                  ; fully-qualified     # 🫴 E14.0 palm up hand
1FAF7                                                  ; fully-qualified     # 🫷 E15.0 leftwards pushing hand
1FAF8                                                  ; fully-qualified     # 🫸 E15.0 rightwards pushing hand
`,by=`
1F44C                                                  ; fully-qualified     # 👌 E0.6 OK hand
1F90C                                                  ; fully-qualified     # 🤌 E13.0 pinched fingers
1F90F                                                  ; fully-qualified     # 🤏 E12.0 pinching hand
270C FE0F                                              ; fully-qualified     # ✌️ E0.6 victory hand
270C                                                   ; unqualified         # ✌ E0.6 victory hand
1F91E                                                  ; fully-qualified     # 🤞 E3.0 crossed fingers
1FAF0                                                  ; fully-qualified     # 🫰 E14.0 hand with index finger and thumb crossed
1F91F                                                  ; fully-qualified     # 🤟 E5.0 love-you gesture
1F918                                                  ; fully-qualified     # 🤘 E1.0 sign of the horns
1F919                                                  ; fully-qualified     # 🤙 E3.0 call me hand
`,jy=`
1F448                                                  ; fully-qualified     # 👈 E0.6 backhand index pointing left
1F449                                                  ; fully-qualified     # 👉 E0.6 backhand index pointing right
1F446                                                  ; fully-qualified     # 👆 E0.6 backhand index pointing up
1F595                                                  ; fully-qualified     # 🖕 E1.0 middle finger
1F447                                                  ; fully-qualified     # 👇 E0.6 backhand index pointing down
261D FE0F                                              ; fully-qualified     # ☝️ E0.6 index pointing up
261D                                                   ; unqualified         # ☝ E0.6 index pointing up
1FAF5                                                  ; fully-qualified     # 🫵 E14.0 index pointing at the viewer
`,Ly=`
1F44D                                                  ; fully-qualified     # 👍 E0.6 thumbs up
1F44E                                                  ; fully-qualified     # 👎 E0.6 thumbs down
270A                                                   ; fully-qualified     # ✊ E0.6 raised fist
1F44A                                                  ; fully-qualified     # 👊 E0.6 oncoming fist
1F91B                                                  ; fully-qualified     # 🤛 E3.0 left-facing fist
1F91C                                                  ; fully-qualified     # 🤜 E3.0 right-facing fist
`,$y=`
1F44F                                                  ; fully-qualified     # 👏 E0.6 clapping hands
1F64C                                                  ; fully-qualified     # 🙌 E0.6 raising hands
1FAF6                                                  ; fully-qualified     # 🫶 E14.0 heart hands
1F450                                                  ; fully-qualified     # 👐 E0.6 open hands
1F932                                                  ; fully-qualified     # 🤲 E5.0 palms up together
1F91D                                                  ; fully-qualified     # 🤝 E3.0 handshake
1F64F                                                  ; fully-qualified     # 🙏 E0.6 folded hands
`,Iy=`
270D FE0F                                              ; fully-qualified     # ✍️ E0.7 writing hand
270D                                                   ; unqualified         # ✍ E0.7 writing hand
1F485                                                  ; fully-qualified     # 💅 E0.6 nail polish
1F933                                                  ; fully-qualified     # 🤳 E3.0 selfie
`,My=`
1F4AA                                                  ; fully-qualified     # 💪 E0.6 flexed biceps
1F9BE                                                  ; fully-qualified     # 🦾 E12.0 mechanical arm
1F9BF                                                  ; fully-qualified     # 🦿 E12.0 mechanical leg
1F9B5                                                  ; fully-qualified     # 🦵 E11.0 leg
1F9B6                                                  ; fully-qualified     # 🦶 E11.0 foot
1F442                                                  ; fully-qualified     # 👂 E0.6 ear
1F9BB                                                  ; fully-qualified     # 🦻 E12.0 ear with hearing aid
1F443                                                  ; fully-qualified     # 👃 E0.6 nose
1F9E0                                                  ; fully-qualified     # 🧠 E5.0 brain
1FAC0                                                  ; fully-qualified     # 🫀 E13.0 anatomical heart
1FAC1                                                  ; fully-qualified     # 🫁 E13.0 lungs
1F9B7                                                  ; fully-qualified     # 🦷 E11.0 tooth
1F9B4                                                  ; fully-qualified     # 🦴 E11.0 bone
1F440                                                  ; fully-qualified     # 👀 E0.6 eyes
1F441 FE0F                                             ; fully-qualified     # 👁️ E0.7 eye
1F441                                                  ; unqualified         # 👁 E0.7 eye
1F445                                                  ; fully-qualified     # 👅 E0.6 tongue
1F444                                                  ; fully-qualified     # 👄 E0.6 mouth
1FAE6                                                  ; fully-qualified     # 🫦 E14.0 biting lip
`,Uy=`
1F476                                                  ; fully-qualified     # 👶 E0.6 baby
1F9D2                                                  ; fully-qualified     # 🧒 E5.0 child
1F466                                                  ; fully-qualified     # 👦 E0.6 boy
1F467                                                  ; fully-qualified     # 👧 E0.6 girl
1F9D1                                                  ; fully-qualified     # 🧑 E5.0 person
1F471                                                  ; fully-qualified     # 👱 E0.6 person: blond hair
1F468                                                  ; fully-qualified     # 👨 E0.6 man
1F9D4                                                  ; fully-qualified     # 🧔 E5.0 person: beard
1F468 200D 1F9B0                                       ; fully-qualified     # 👨‍🦰 E11.0 man: red hair
1F468 200D 1F9B1                                       ; fully-qualified     # 👨‍🦱 E11.0 man: curly hair
1F468 200D 1F9B3                                       ; fully-qualified     # 👨‍🦳 E11.0 man: white hair
1F468 200D 1F9B2                                       ; fully-qualified     # 👨‍🦲 E11.0 man: bald
1F469                                                  ; fully-qualified     # 👩 E0.6 woman
1F469 200D 1F9B0                                       ; fully-qualified     # 👩‍🦰 E11.0 woman: red hair
1F9D1 200D 1F9B0                                       ; fully-qualified     # 🧑‍🦰 E12.1 person: red hair
1F469 200D 1F9B1                                       ; fully-qualified     # 👩‍🦱 E11.0 woman: curly hair
1F9D1 200D 1F9B1                                       ; fully-qualified     # 🧑‍🦱 E12.1 person: curly hair
1F469 200D 1F9B3                                       ; fully-qualified     # 👩‍🦳 E11.0 woman: white hair
1F9D1 200D 1F9B3                                       ; fully-qualified     # 🧑‍🦳 E12.1 person: white hair
1F469 200D 1F9B2                                       ; fully-qualified     # 👩‍🦲 E11.0 woman: bald
1F9D1 200D 1F9B2                                       ; fully-qualified     # 🧑‍🦲 E12.1 person: bald
1F471 200D 2640 FE0F                                   ; fully-qualified     # 👱‍♀️ E4.0 woman: blond hair
1F471 200D 2640                                        ; minimally-qualified # 👱‍♀ E4.0 woman: blond hair
1F471 200D 2642 FE0F                                   ; fully-qualified     # 👱‍♂️ E4.0 man: blond hair
1F471 200D 2642                                        ; minimally-qualified # 👱‍♂ E4.0 man: blond hair
1F9D3                                                  ; fully-qualified     # 🧓 E5.0 older person
1F474                                                  ; fully-qualified     # 👴 E0.6 old man
1F475                                                  ; fully-qualified     # 👵 E0.6 old woman
`,Vy=`
1F64D                                                  ; fully-qualified     # 🙍 E0.6 person frowning
1F64D 200D 2642 FE0F                                   ; fully-qualified     # 🙍‍♂️ E4.0 man frowning
1F64D 200D 2642                                        ; minimally-qualified # 🙍‍♂ E4.0 man frowning
1F64D 200D 2640 FE0F                                   ; fully-qualified     # 🙍‍♀️ E4.0 woman frowning
1F64D 200D 2640                                        ; minimally-qualified # 🙍‍♀ E4.0 woman frowning
1F64E                                                  ; fully-qualified     # 🙎 E0.6 person pouting
1F64E 200D 2642 FE0F                                   ; fully-qualified     # 🙎‍♂️ E4.0 man pouting
1F64E 200D 2642                                        ; minimally-qualified # 🙎‍♂ E4.0 man pouting
1F64E 200D 2640 FE0F                                   ; fully-qualified     # 🙎‍♀️ E4.0 woman pouting
1F64E 200D 2640                                        ; minimally-qualified # 🙎‍♀ E4.0 woman pouting
1F645                                                  ; fully-qualified     # 🙅 E0.6 person gesturing NO
1F645 200D 2642 FE0F                                   ; fully-qualified     # 🙅‍♂️ E4.0 man gesturing NO
1F645 200D 2642                                        ; minimally-qualified # 🙅‍♂ E4.0 man gesturing NO
1F645 200D 2640 FE0F                                   ; fully-qualified     # 🙅‍♀️ E4.0 woman gesturing NO
1F645 200D 2640                                        ; minimally-qualified # 🙅‍♀ E4.0 woman gesturing NO
1F646                                                  ; fully-qualified     # 🙆 E0.6 person gesturing OK
1F646 200D 2642 FE0F                                   ; fully-qualified     # 🙆‍♂️ E4.0 man gesturing OK
1F646 200D 2642                                        ; minimally-qualified # 🙆‍♂ E4.0 man gesturing OK
1F646 200D 2640 FE0F                                   ; fully-qualified     # 🙆‍♀️ E4.0 woman gesturing OK
1F646 200D 2640                                        ; minimally-qualified # 🙆‍♀ E4.0 woman gesturing OK
1F481                                                  ; fully-qualified     # 💁 E0.6 person tipping hand
1F481 200D 2642 FE0F                                   ; fully-qualified     # 💁‍♂️ E4.0 man tipping hand
1F481 200D 2642                                        ; minimally-qualified # 💁‍♂ E4.0 man tipping hand
1F481 200D 2640 FE0F                                   ; fully-qualified     # 💁‍♀️ E4.0 woman tipping hand
1F481 200D 2640                                        ; minimally-qualified # 💁‍♀ E4.0 woman tipping hand
1F64B                                                  ; fully-qualified     # 🙋 E0.6 person raising hand
1F64B 200D 2642 FE0F                                   ; fully-qualified     # 🙋‍♂️ E4.0 man raising hand
1F64B 200D 2642                                        ; minimally-qualified # 🙋‍♂ E4.0 man raising hand
1F64B 200D 2640 FE0F                                   ; fully-qualified     # 🙋‍♀️ E4.0 woman raising hand
1F64B 200D 2640                                        ; minimally-qualified # 🙋‍♀ E4.0 woman raising hand
1F9CF                                                  ; fully-qualified     # 🧏 E12.0 deaf person
1F9CF 200D 2642 FE0F                                   ; fully-qualified     # 🧏‍♂️ E12.0 deaf man
1F9CF 200D 2642                                        ; minimally-qualified # 🧏‍♂ E12.0 deaf man
1F9CF 200D 2640 FE0F                                   ; fully-qualified     # 🧏‍♀️ E12.0 deaf woman
1F9CF 200D 2640                                        ; minimally-qualified # 🧏‍♀ E12.0 deaf woman
1F647                                                  ; fully-qualified     # 🙇 E0.6 person bowing
1F647 200D 2642 FE0F                                   ; fully-qualified     # 🙇‍♂️ E4.0 man bowing
1F647 200D 2642                                        ; minimally-qualified # 🙇‍♂ E4.0 man bowing
1F647 200D 2640 FE0F                                   ; fully-qualified     # 🙇‍♀️ E4.0 woman bowing
1F647 200D 2640                                        ; minimally-qualified # 🙇‍♀ E4.0 woman bowing
1F926                                                  ; fully-qualified     # 🤦 E3.0 person facepalming
1F926 200D 2642 FE0F                                   ; fully-qualified     # 🤦‍♂️ E4.0 man facepalming
1F926 200D 2642                                        ; minimally-qualified # 🤦‍♂ E4.0 man facepalming
1F926 200D 2640 FE0F                                   ; fully-qualified     # 🤦‍♀️ E4.0 woman facepalming
1F926 200D 2640                                        ; minimally-qualified # 🤦‍♀ E4.0 woman facepalming
1F937                                                  ; fully-qualified     # 🤷 E3.0 person shrugging
1F937 200D 2642 FE0F                                   ; fully-qualified     # 🤷‍♂️ E4.0 man shrugging
1F937 200D 2642                                        ; minimally-qualified # 🤷‍♂ E4.0 man shrugging
1F937 200D 2640 FE0F                                   ; fully-qualified     # 🤷‍♀️ E4.0 woman shrugging
1F937 200D 2640                                        ; minimally-qualified # 🤷‍♀ E4.0 woman shrugging

`,Hy=`
1F9D1 200D 2695 FE0F                                   ; fully-qualified     # 🧑‍⚕️ E12.1 health worker
1F9D1 200D 2695                                        ; minimally-qualified # 🧑‍⚕ E12.1 health worker
1F468 200D 2695 FE0F                                   ; fully-qualified     # 👨‍⚕️ E4.0 man health worker
1F468 200D 2695                                        ; minimally-qualified # 👨‍⚕ E4.0 man health worker
1F469 200D 2695 FE0F                                   ; fully-qualified     # 👩‍⚕️ E4.0 woman health worker
1F469 200D 2695                                        ; minimally-qualified # 👩‍⚕ E4.0 woman health worker
1F9D1 200D 1F393                                       ; fully-qualified     # 🧑‍🎓 E12.1 student
1F468 200D 1F393                                       ; fully-qualified     # 👨‍🎓 E4.0 man student
1F469 200D 1F393                                       ; fully-qualified     # 👩‍🎓 E4.0 woman student
1F9D1 200D 1F3EB                                       ; fully-qualified     # 🧑‍🏫 E12.1 teacher
1F468 200D 1F3EB                                       ; fully-qualified     # 👨‍🏫 E4.0 man teacher
1F469 200D 1F3EB                                       ; fully-qualified     # 👩‍🏫 E4.0 woman teacher
1F9D1 200D 2696 FE0F                                   ; fully-qualified     # 🧑‍⚖️ E12.1 judge
1F9D1 200D 2696                                        ; minimally-qualified # 🧑‍⚖ E12.1 judge
1F468 200D 2696 FE0F                                   ; fully-qualified     # 👨‍⚖️ E4.0 man judge
1F468 200D 2696                                        ; minimally-qualified # 👨‍⚖ E4.0 man judge
1F469 200D 2696 FE0F                                   ; fully-qualified     # 👩‍⚖️ E4.0 woman judge
1F469 200D 2696                                        ; minimally-qualified # 👩‍⚖ E4.0 woman judge
1F9D1 200D 1F33E                                       ; fully-qualified     # 🧑‍🌾 E12.1 farmer
1F468 200D 1F33E                                       ; fully-qualified     # 👨‍🌾 E4.0 man farmer
1F469 200D 1F33E                                       ; fully-qualified     # 👩‍🌾 E4.0 woman farmer
1F9D1 200D 1F373                                       ; fully-qualified     # 🧑‍🍳 E12.1 cook
1F468 200D 1F373                                       ; fully-qualified     # 👨‍🍳 E4.0 man cook
1F469 200D 1F373                                       ; fully-qualified     # 👩‍🍳 E4.0 woman cook
1F9D1 200D 1F527                                       ; fully-qualified     # 🧑‍🔧 E12.1 mechanic
1F468 200D 1F527                                       ; fully-qualified     # 👨‍🔧 E4.0 man mechanic
1F469 200D 1F527                                       ; fully-qualified     # 👩‍🔧 E4.0 woman mechanic
1F9D1 200D 1F3ED                                       ; fully-qualified     # 🧑‍🏭 E12.1 factory worker
1F468 200D 1F3ED                                       ; fully-qualified     # 👨‍🏭 E4.0 man factory worker
1F469 200D 1F3ED                                       ; fully-qualified     # 👩‍🏭 E4.0 woman factory worker
1F9D1 200D 1F4BC                                       ; fully-qualified     # 🧑‍💼 E12.1 office worker
1F468 200D 1F4BC                                       ; fully-qualified     # 👨‍💼 E4.0 man office worker
1F469 200D 1F4BC                                       ; fully-qualified     # 👩‍💼 E4.0 woman office worker
1F9D1 200D 1F52C                                       ; fully-qualified     # 🧑‍🔬 E12.1 scientist
1F468 200D 1F52C                                       ; fully-qualified     # 👨‍🔬 E4.0 man scientist
1F469 200D 1F52C                                       ; fully-qualified     # 👩‍🔬 E4.0 woman scientist
1F9D1 200D 1F4BB                                       ; fully-qualified     # 🧑‍💻 E12.1 technologist
1F468 200D 1F4BB                                       ; fully-qualified     # 👨‍💻 E4.0 man technologist
1F469 200D 1F4BB                                       ; fully-qualified     # 👩‍💻 E4.0 woman technologist
1F9D1 200D 1F3A4                                       ; fully-qualified     # 🧑‍🎤 E12.1 singer
1F468 200D 1F3A4                                       ; fully-qualified     # 👨‍🎤 E4.0 man singer
1F469 200D 1F3A4                                       ; fully-qualified     # 👩‍🎤 E4.0 woman singer
1F9D1 200D 1F3A8                                       ; fully-qualified     # 🧑‍🎨 E12.1 artist
1F468 200D 1F3A8                                       ; fully-qualified     # 👨‍🎨 E4.0 man artist
1F469 200D 1F3A8                                       ; fully-qualified     # 👩‍🎨 E4.0 woman artist
1F9D1 200D 2708 FE0F                                   ; fully-qualified     # 🧑‍✈️ E12.1 pilot
1F9D1 200D 2708                                        ; minimally-qualified # 🧑‍✈ E12.1 pilot
1F468 200D 2708 FE0F                                   ; fully-qualified     # 👨‍✈️ E4.0 man pilot
1F468 200D 2708                                        ; minimally-qualified # 👨‍✈ E4.0 man pilot
1F469 200D 2708 FE0F                                   ; fully-qualified     # 👩‍✈️ E4.0 woman pilot
1F469 200D 2708                                        ; minimally-qualified # 👩‍✈ E4.0 woman pilot
1F9D1 200D 1F680                                       ; fully-qualified     # 🧑‍🚀 E12.1 astronaut
1F468 200D 1F680                                       ; fully-qualified     # 👨‍🚀 E4.0 man astronaut
1F469 200D 1F680                                       ; fully-qualified     # 👩‍🚀 E4.0 woman astronaut
1F9D1 200D 1F692                                       ; fully-qualified     # 🧑‍🚒 E12.1 firefighter
1F468 200D 1F692                                       ; fully-qualified     # 👨‍🚒 E4.0 man firefighter
1F469 200D 1F692                                       ; fully-qualified     # 👩‍🚒 E4.0 woman firefighter
1F46E                                                  ; fully-qualified     # 👮 E0.6 police officer
1F46E 200D 2642 FE0F                                   ; fully-qualified     # 👮‍♂️ E4.0 man police officer
1F46E 200D 2642                                        ; minimally-qualified # 👮‍♂ E4.0 man police officer
1F46E 200D 2640 FE0F                                   ; fully-qualified     # 👮‍♀️ E4.0 woman police officer
1F46E 200D 2640                                        ; minimally-qualified # 👮‍♀ E4.0 woman police officer
1F575 FE0F                                             ; fully-qualified     # 🕵️ E0.7 detective
1F575                                                  ; unqualified         # 🕵 E0.7 detective
1F575 FE0F 200D 2642 FE0F                              ; fully-qualified     # 🕵️‍♂️ E4.0 man detective
1F575 200D 2642 FE0F                                   ; unqualified         # 🕵‍♂️ E4.0 man detective
1F575 FE0F 200D 2642                                   ; minimally-qualified # 🕵️‍♂ E4.0 man detective
1F575 200D 2642                                        ; unqualified         # 🕵‍♂ E4.0 man detective
1F575 FE0F 200D 2640 FE0F                              ; fully-qualified     # 🕵️‍♀️ E4.0 woman detective
1F575 200D 2640 FE0F                                   ; unqualified         # 🕵‍♀️ E4.0 woman detective
1F575 FE0F 200D 2640                                   ; minimally-qualified # 🕵️‍♀ E4.0 woman detective
1F575 200D 2640                                        ; unqualified         # 🕵‍♀ E4.0 woman detective
1F482                                                  ; fully-qualified     # 💂 E0.6 guard
1F482 200D 2642 FE0F                                   ; fully-qualified     # 💂‍♂️ E4.0 man guard
1F482 200D 2642                                        ; minimally-qualified # 💂‍♂ E4.0 man guard
1F482 200D 2640 FE0F                                   ; fully-qualified     # 💂‍♀️ E4.0 woman guard
1F482 200D 2640                                        ; minimally-qualified # 💂‍♀ E4.0 woman guard
1F977                                                  ; fully-qualified     # 🥷 E13.0 ninja
1F477                                                  ; fully-qualified     # 👷 E0.6 construction worker
1F477 200D 2642 FE0F                                   ; fully-qualified     # 👷‍♂️ E4.0 man construction worker
1F477 200D 2642                                        ; minimally-qualified # 👷‍♂ E4.0 man construction worker
1F477 200D 2640 FE0F                                   ; fully-qualified     # 👷‍♀️ E4.0 woman construction worker
1F477 200D 2640                                        ; minimally-qualified # 👷‍♀ E4.0 woman construction worker
1FAC5                                                  ; fully-qualified     # 🫅 E14.0 person with crown
1F934                                                  ; fully-qualified     # 🤴 E3.0 prince
1F478                                                  ; fully-qualified     # 👸 E0.6 princess
1F473                                                  ; fully-qualified     # 👳 E0.6 person wearing turban
1F473 200D 2642 FE0F                                   ; fully-qualified     # 👳‍♂️ E4.0 man wearing turban
1F473 200D 2642                                        ; minimally-qualified # 👳‍♂ E4.0 man wearing turban
1F473 200D 2640 FE0F                                   ; fully-qualified     # 👳‍♀️ E4.0 woman wearing turban
1F473 200D 2640                                        ; minimally-qualified # 👳‍♀ E4.0 woman wearing turban
1F472                                                  ; fully-qualified     # 👲 E0.6 person with skullcap
1F9D5                                                  ; fully-qualified     # 🧕 E5.0 woman with headscarf
1F935                                                  ; fully-qualified     # 🤵 E3.0 person in tuxedo
1F935 200D 2642 FE0F                                   ; fully-qualified     # 🤵‍♂️ E13.0 man in tuxedo
1F935 200D 2642                                        ; minimally-qualified # 🤵‍♂ E13.0 man in tuxedo
1F935 200D 2640 FE0F                                   ; fully-qualified     # 🤵‍♀️ E13.0 woman in tuxedo
1F935 200D 2640                                        ; minimally-qualified # 🤵‍♀ E13.0 woman in tuxedo
1F470                                                  ; fully-qualified     # 👰 E0.6 person with veil
1F470 200D 2642 FE0F                                   ; fully-qualified     # 👰‍♂️ E13.0 man with veil
1F470 200D 2642                                        ; minimally-qualified # 👰‍♂ E13.0 man with veil
1F470 200D 2640 FE0F                                   ; fully-qualified     # 👰‍♀️ E13.0 woman with veil
1F470 200D 2640                                        ; minimally-qualified # 👰‍♀ E13.0 woman with veil
1F930                                                  ; fully-qualified     # 🤰 E3.0 pregnant woman
1FAC3                                                  ; fully-qualified     # 🫃 E14.0 pregnant man
1FAC4                                                  ; fully-qualified     # 🫄 E14.0 pregnant person
1F931                                                  ; fully-qualified     # 🤱 E5.0 breast-feeding
1F469 200D 1F37C                                       ; fully-qualified     # 👩‍🍼 E13.0 woman feeding baby
1F468 200D 1F37C                                       ; fully-qualified     # 👨‍🍼 E13.0 man feeding baby
1F9D1 200D 1F37C                                       ; fully-qualified     # 🧑‍🍼 E13.0 person feeding baby

`,Wy=`
1F47C                                                  ; fully-qualified     # 👼 E0.6 baby angel
1F385                                                  ; fully-qualified     # 🎅 E0.6 Santa Claus
1F936                                                  ; fully-qualified     # 🤶 E3.0 Mrs. Claus
1F9D1 200D 1F384                                       ; fully-qualified     # 🧑‍🎄 E13.0 mx claus
1F9B8                                                  ; fully-qualified     # 🦸 E11.0 superhero
1F9B8 200D 2642 FE0F                                   ; fully-qualified     # 🦸‍♂️ E11.0 man superhero
1F9B8 200D 2642                                        ; minimally-qualified # 🦸‍♂ E11.0 man superhero
1F9B8 200D 2640 FE0F                                   ; fully-qualified     # 🦸‍♀️ E11.0 woman superhero
1F9B8 200D 2640                                        ; minimally-qualified # 🦸‍♀ E11.0 woman superhero
1F9B9                                                  ; fully-qualified     # 🦹 E11.0 supervillain
1F9B9 200D 2642 FE0F                                   ; fully-qualified     # 🦹‍♂️ E11.0 man supervillain
1F9B9 200D 2642                                        ; minimally-qualified # 🦹‍♂ E11.0 man supervillain
1F9B9 200D 2640 FE0F                                   ; fully-qualified     # 🦹‍♀️ E11.0 woman supervillain
1F9B9 200D 2640                                        ; minimally-qualified # 🦹‍♀ E11.0 woman supervillain
1F9D9                                                  ; fully-qualified     # 🧙 E5.0 mage
1F9D9 200D 2642 FE0F                                   ; fully-qualified     # 🧙‍♂️ E5.0 man mage
1F9D9 200D 2642                                        ; minimally-qualified # 🧙‍♂ E5.0 man mage
1F9D9 200D 2640 FE0F                                   ; fully-qualified     # 🧙‍♀️ E5.0 woman mage
1F9D9 200D 2640                                        ; minimally-qualified # 🧙‍♀ E5.0 woman mage
1F9DA                                                  ; fully-qualified     # 🧚 E5.0 fairy
1F9DA 200D 2642 FE0F                                   ; fully-qualified     # 🧚‍♂️ E5.0 man fairy
1F9DA 200D 2642                                        ; minimally-qualified # 🧚‍♂ E5.0 man fairy
1F9DA 200D 2640 FE0F                                   ; fully-qualified     # 🧚‍♀️ E5.0 woman fairy
1F9DA 200D 2640                                        ; minimally-qualified # 🧚‍♀ E5.0 woman fairy
1F9DB                                                  ; fully-qualified     # 🧛 E5.0 vampire
1F9DB 200D 2642 FE0F                                   ; fully-qualified     # 🧛‍♂️ E5.0 man vampire
1F9DB 200D 2642                                        ; minimally-qualified # 🧛‍♂ E5.0 man vampire
1F9DB 200D 2640 FE0F                                   ; fully-qualified     # 🧛‍♀️ E5.0 woman vampire
1F9DB 200D 2640                                        ; minimally-qualified # 🧛‍♀ E5.0 woman vampire
1F9DC                                                  ; fully-qualified     # 🧜 E5.0 merperson
1F9DC 200D 2642 FE0F                                   ; fully-qualified     # 🧜‍♂️ E5.0 merman
1F9DC 200D 2642                                        ; minimally-qualified # 🧜‍♂ E5.0 merman
1F9DC 200D 2640 FE0F                                   ; fully-qualified     # 🧜‍♀️ E5.0 mermaid
1F9DC 200D 2640                                        ; minimally-qualified # 🧜‍♀ E5.0 mermaid
1F9DD                                                  ; fully-qualified     # 🧝 E5.0 elf
1F9DD 200D 2642 FE0F                                   ; fully-qualified     # 🧝‍♂️ E5.0 man elf
1F9DD 200D 2642                                        ; minimally-qualified # 🧝‍♂ E5.0 man elf
1F9DD 200D 2640 FE0F                                   ; fully-qualified     # 🧝‍♀️ E5.0 woman elf
1F9DD 200D 2640                                        ; minimally-qualified # 🧝‍♀ E5.0 woman elf
1F9DE                                                  ; fully-qualified     # 🧞 E5.0 genie
1F9DE 200D 2642 FE0F                                   ; fully-qualified     # 🧞‍♂️ E5.0 man genie
1F9DE 200D 2642                                        ; minimally-qualified # 🧞‍♂ E5.0 man genie
1F9DE 200D 2640 FE0F                                   ; fully-qualified     # 🧞‍♀️ E5.0 woman genie
1F9DE 200D 2640                                        ; minimally-qualified # 🧞‍♀ E5.0 woman genie
1F9DF                                                  ; fully-qualified     # 🧟 E5.0 zombie
1F9DF 200D 2642 FE0F                                   ; fully-qualified     # 🧟‍♂️ E5.0 man zombie
1F9DF 200D 2642                                        ; minimally-qualified # 🧟‍♂ E5.0 man zombie
1F9DF 200D 2640 FE0F                                   ; fully-qualified     # 🧟‍♀️ E5.0 woman zombie
1F9DF 200D 2640                                        ; minimally-qualified # 🧟‍♀ E5.0 woman zombie
1F9CC                                                  ; fully-qualified     # 🧌 E14.0 troll

`,Qy=`
1F486                                                  ; fully-qualified     # 💆 E0.6 person getting massage
1F486 200D 2642 FE0F                                   ; fully-qualified     # 💆‍♂️ E4.0 man getting massage
1F486 200D 2642                                        ; minimally-qualified # 💆‍♂ E4.0 man getting massage
1F486 200D 2640 FE0F                                   ; fully-qualified     # 💆‍♀️ E4.0 woman getting massage
1F486 200D 2640                                        ; minimally-qualified # 💆‍♀ E4.0 woman getting massage
1F487                                                  ; fully-qualified     # 💇 E0.6 person getting haircut
1F487 200D 2642 FE0F                                   ; fully-qualified     # 💇‍♂️ E4.0 man getting haircut
1F487 200D 2642                                        ; minimally-qualified # 💇‍♂ E4.0 man getting haircut
1F487 200D 2640 FE0F                                   ; fully-qualified     # 💇‍♀️ E4.0 woman getting haircut
1F487 200D 2640                                        ; minimally-qualified # 💇‍♀ E4.0 woman getting haircut
1F6B6                                                  ; fully-qualified     # 🚶 E0.6 person walking
1F6B6 200D 2642 FE0F                                   ; fully-qualified     # 🚶‍♂️ E4.0 man walking
1F6B6 200D 2642                                        ; minimally-qualified # 🚶‍♂ E4.0 man walking
1F6B6 200D 2640 FE0F                                   ; fully-qualified     # 🚶‍♀️ E4.0 woman walking
1F6B6 200D 2640                                        ; minimally-qualified # 🚶‍♀ E4.0 woman walking
1F9CD                                                  ; fully-qualified     # 🧍 E12.0 person standing
1F9CD 200D 2642 FE0F                                   ; fully-qualified     # 🧍‍♂️ E12.0 man standing
1F9CD 200D 2642                                        ; minimally-qualified # 🧍‍♂ E12.0 man standing
1F9CD 200D 2640 FE0F                                   ; fully-qualified     # 🧍‍♀️ E12.0 woman standing
1F9CD 200D 2640                                        ; minimally-qualified # 🧍‍♀ E12.0 woman standing
1F9CE                                                  ; fully-qualified     # 🧎 E12.0 person kneeling
1F9CE 200D 2642 FE0F                                   ; fully-qualified     # 🧎‍♂️ E12.0 man kneeling
1F9CE 200D 2642                                        ; minimally-qualified # 🧎‍♂ E12.0 man kneeling
1F9CE 200D 2640 FE0F                                   ; fully-qualified     # 🧎‍♀️ E12.0 woman kneeling
1F9CE 200D 2640                                        ; minimally-qualified # 🧎‍♀ E12.0 woman kneeling
1F9D1 200D 1F9AF                                       ; fully-qualified     # 🧑‍🦯 E12.1 person with white cane
1F468 200D 1F9AF                                       ; fully-qualified     # 👨‍🦯 E12.0 man with white cane
1F469 200D 1F9AF                                       ; fully-qualified     # 👩‍🦯 E12.0 woman with white cane
1F9D1 200D 1F9BC                                       ; fully-qualified     # 🧑‍🦼 E12.1 person in motorized wheelchair
1F468 200D 1F9BC                                       ; fully-qualified     # 👨‍🦼 E12.0 man in motorized wheelchair
1F469 200D 1F9BC                                       ; fully-qualified     # 👩‍🦼 E12.0 woman in motorized wheelchair
1F9D1 200D 1F9BD                                       ; fully-qualified     # 🧑‍🦽 E12.1 person in manual wheelchair
1F468 200D 1F9BD                                       ; fully-qualified     # 👨‍🦽 E12.0 man in manual wheelchair
1F469 200D 1F9BD                                       ; fully-qualified     # 👩‍🦽 E12.0 woman in manual wheelchair
1F3C3                                                  ; fully-qualified     # 🏃 E0.6 person running
1F3C3 200D 2642 FE0F                                   ; fully-qualified     # 🏃‍♂️ E4.0 man running
1F3C3 200D 2642                                        ; minimally-qualified # 🏃‍♂ E4.0 man running
1F3C3 200D 2640 FE0F                                   ; fully-qualified     # 🏃‍♀️ E4.0 woman running
1F3C3 200D 2640                                        ; minimally-qualified # 🏃‍♀ E4.0 woman running
1F483                                                  ; fully-qualified     # 💃 E0.6 woman dancing
1F57A                                                  ; fully-qualified     # 🕺 E3.0 man dancing
1F574 FE0F                                             ; fully-qualified     # 🕴️ E0.7 person in suit levitating
1F574                                                  ; unqualified         # 🕴 E0.7 person in suit levitating
1F46F                                                  ; fully-qualified     # 👯 E0.6 people with bunny ears
1F46F 200D 2642 FE0F                                   ; fully-qualified     # 👯‍♂️ E4.0 men with bunny ears
1F46F 200D 2642                                        ; minimally-qualified # 👯‍♂ E4.0 men with bunny ears
1F46F 200D 2640 FE0F                                   ; fully-qualified     # 👯‍♀️ E4.0 women with bunny ears
1F46F 200D 2640                                        ; minimally-qualified # 👯‍♀ E4.0 women with bunny ears
1F9D6                                                  ; fully-qualified     # 🧖 E5.0 person in steamy room
1F9D6 200D 2642 FE0F                                   ; fully-qualified     # 🧖‍♂️ E5.0 man in steamy room
1F9D6 200D 2642                                        ; minimally-qualified # 🧖‍♂ E5.0 man in steamy room
1F9D6 200D 2640 FE0F                                   ; fully-qualified     # 🧖‍♀️ E5.0 woman in steamy room
1F9D6 200D 2640                                        ; minimally-qualified # 🧖‍♀ E5.0 woman in steamy room
1F9D7                                                  ; fully-qualified     # 🧗 E5.0 person climbing
1F9D7 200D 2642 FE0F                                   ; fully-qualified     # 🧗‍♂️ E5.0 man climbing
1F9D7 200D 2642                                        ; minimally-qualified # 🧗‍♂ E5.0 man climbing
1F9D7 200D 2640 FE0F                                   ; fully-qualified     # 🧗‍♀️ E5.0 woman climbing
1F9D7 200D 2640                                        ; minimally-qualified # 🧗‍♀ E5.0 woman climbing

`,Gy=`
1F93A                                                  ; fully-qualified     # 🤺 E3.0 person fencing
1F3C7                                                  ; fully-qualified     # 🏇 E1.0 horse racing
26F7 FE0F                                              ; fully-qualified     # ⛷️ E0.7 skier
26F7                                                   ; unqualified         # ⛷ E0.7 skier
1F3C2                                                  ; fully-qualified     # 🏂 E0.6 snowboarder
1F3CC FE0F                                             ; fully-qualified     # 🏌️ E0.7 person golfing
1F3CC                                                  ; unqualified         # 🏌 E0.7 person golfing
1F3CC FE0F 200D 2642 FE0F                              ; fully-qualified     # 🏌️‍♂️ E4.0 man golfing
1F3CC 200D 2642 FE0F                                   ; unqualified         # 🏌‍♂️ E4.0 man golfing
1F3CC FE0F 200D 2642                                   ; minimally-qualified # 🏌️‍♂ E4.0 man golfing
1F3CC 200D 2642                                        ; unqualified         # 🏌‍♂ E4.0 man golfing
1F3CC FE0F 200D 2640 FE0F                              ; fully-qualified     # 🏌️‍♀️ E4.0 woman golfing
1F3CC 200D 2640 FE0F                                   ; unqualified         # 🏌‍♀️ E4.0 woman golfing
1F3CC FE0F 200D 2640                                   ; minimally-qualified # 🏌️‍♀ E4.0 woman golfing
1F3CC 200D 2640                                        ; unqualified         # 🏌‍♀ E4.0 woman golfing
1F3C4                                                  ; fully-qualified     # 🏄 E0.6 person surfing
1F3C4 200D 2642 FE0F                                   ; fully-qualified     # 🏄‍♂️ E4.0 man surfing
1F3C4 200D 2642                                        ; minimally-qualified # 🏄‍♂ E4.0 man surfing
1F3C4 200D 2640 FE0F                                   ; fully-qualified     # 🏄‍♀️ E4.0 woman surfing
1F3C4 200D 2640                                        ; minimally-qualified # 🏄‍♀ E4.0 woman surfing
1F6A3                                                  ; fully-qualified     # 🚣 E1.0 person rowing boat
1F6A3 200D 2642 FE0F                                   ; fully-qualified     # 🚣‍♂️ E4.0 man rowing boat
1F6A3 200D 2642                                        ; minimally-qualified # 🚣‍♂ E4.0 man rowing boat
1F6A3 200D 2640 FE0F                                   ; fully-qualified     # 🚣‍♀️ E4.0 woman rowing boat
1F6A3 200D 2640                                        ; minimally-qualified # 🚣‍♀ E4.0 woman rowing boat
1F3CA                                                  ; fully-qualified     # 🏊 E0.6 person swimming
1F3CA 200D 2642 FE0F                                   ; fully-qualified     # 🏊‍♂️ E4.0 man swimming
1F3CA 200D 2642                                        ; minimally-qualified # 🏊‍♂ E4.0 man swimming
1F3CA 200D 2640 FE0F                                   ; fully-qualified     # 🏊‍♀️ E4.0 woman swimming
1F3CA 200D 2640                                        ; minimally-qualified # 🏊‍♀ E4.0 woman swimming
26F9 FE0F                                              ; fully-qualified     # ⛹️ E0.7 person bouncing ball
26F9                                                   ; unqualified         # ⛹ E0.7 person bouncing ball
26F9 FE0F 200D 2642 FE0F                               ; fully-qualified     # ⛹️‍♂️ E4.0 man bouncing ball
26F9 200D 2642 FE0F                                    ; unqualified         # ⛹‍♂️ E4.0 man bouncing ball
26F9 FE0F 200D 2642                                    ; minimally-qualified # ⛹️‍♂ E4.0 man bouncing ball
26F9 200D 2642                                         ; unqualified         # ⛹‍♂ E4.0 man bouncing ball
26F9 FE0F 200D 2640 FE0F                               ; fully-qualified     # ⛹️‍♀️ E4.0 woman bouncing ball
26F9 200D 2640 FE0F                                    ; unqualified         # ⛹‍♀️ E4.0 woman bouncing ball
26F9 FE0F 200D 2640                                    ; minimally-qualified # ⛹️‍♀ E4.0 woman bouncing ball
26F9 200D 2640                                         ; unqualified         # ⛹‍♀ E4.0 woman bouncing ball
1F3CB FE0F                                             ; fully-qualified     # 🏋️ E0.7 person lifting weights
1F3CB                                                  ; unqualified         # 🏋 E0.7 person lifting weights
1F3CB FE0F 200D 2642 FE0F                              ; fully-qualified     # 🏋️‍♂️ E4.0 man lifting weights
1F3CB 200D 2642 FE0F                                   ; unqualified         # 🏋‍♂️ E4.0 man lifting weights
1F3CB FE0F 200D 2642                                   ; minimally-qualified # 🏋️‍♂ E4.0 man lifting weights
1F3CB 200D 2642                                        ; unqualified         # 🏋‍♂ E4.0 man lifting weights
1F3CB FE0F 200D 2640 FE0F                              ; fully-qualified     # 🏋️‍♀️ E4.0 woman lifting weights
1F3CB 200D 2640 FE0F                                   ; unqualified         # 🏋‍♀️ E4.0 woman lifting weights
1F3CB FE0F 200D 2640                                   ; minimally-qualified # 🏋️‍♀ E4.0 woman lifting weights
1F3CB 200D 2640                                        ; unqualified         # 🏋‍♀ E4.0 woman lifting weights
1F6B4                                                  ; fully-qualified     # 🚴 E1.0 person biking
1F6B4 200D 2642 FE0F                                   ; fully-qualified     # 🚴‍♂️ E4.0 man biking
1F6B4 200D 2642                                        ; minimally-qualified # 🚴‍♂ E4.0 man biking
1F6B4 200D 2640 FE0F                                   ; fully-qualified     # 🚴‍♀️ E4.0 woman biking
1F6B4 200D 2640                                        ; minimally-qualified # 🚴‍♀ E4.0 woman biking
1F6B5                                                  ; fully-qualified     # 🚵 E1.0 person mountain biking
1F6B5 200D 2642 FE0F                                   ; fully-qualified     # 🚵‍♂️ E4.0 man mountain biking
1F6B5 200D 2642                                        ; minimally-qualified # 🚵‍♂ E4.0 man mountain biking
1F6B5 200D 2640 FE0F                                   ; fully-qualified     # 🚵‍♀️ E4.0 woman mountain biking
1F6B5 200D 2640                                        ; minimally-qualified # 🚵‍♀ E4.0 woman mountain biking
1F938                                                  ; fully-qualified     # 🤸 E3.0 person cartwheeling
1F938 200D 2642 FE0F                                   ; fully-qualified     # 🤸‍♂️ E4.0 man cartwheeling
1F938 200D 2642                                        ; minimally-qualified # 🤸‍♂ E4.0 man cartwheeling
1F938 200D 2640 FE0F                                   ; fully-qualified     # 🤸‍♀️ E4.0 woman cartwheeling
1F938 200D 2640                                        ; minimally-qualified # 🤸‍♀ E4.0 woman cartwheeling
1F93C                                                  ; fully-qualified     # 🤼 E3.0 people wrestling
1F93C 200D 2642 FE0F                                   ; fully-qualified     # 🤼‍♂️ E4.0 men wrestling
1F93C 200D 2642                                        ; minimally-qualified # 🤼‍♂ E4.0 men wrestling
1F93C 200D 2640 FE0F                                   ; fully-qualified     # 🤼‍♀️ E4.0 women wrestling
1F93C 200D 2640                                        ; minimally-qualified # 🤼‍♀ E4.0 women wrestling
1F93D                                                  ; fully-qualified     # 🤽 E3.0 person playing water polo
1F93D 200D 2642 FE0F                                   ; fully-qualified     # 🤽‍♂️ E4.0 man playing water polo
1F93D 200D 2642                                        ; minimally-qualified # 🤽‍♂ E4.0 man playing water polo
1F93D 200D 2640 FE0F                                   ; fully-qualified     # 🤽‍♀️ E4.0 woman playing water polo
1F93D 200D 2640                                        ; minimally-qualified # 🤽‍♀ E4.0 woman playing water polo
1F93E                                                  ; fully-qualified     # 🤾 E3.0 person playing handball
1F93E 200D 2642 FE0F                                   ; fully-qualified     # 🤾‍♂️ E4.0 man playing handball
1F93E 200D 2642                                        ; minimally-qualified # 🤾‍♂ E4.0 man playing handball
1F93E 200D 2640 FE0F                                   ; fully-qualified     # 🤾‍♀️ E4.0 woman playing handball
1F93E 200D 2640                                        ; minimally-qualified # 🤾‍♀ E4.0 woman playing handball
1F939                                                  ; fully-qualified     # 🤹 E3.0 person juggling
1F939 200D 2642 FE0F                                   ; fully-qualified     # 🤹‍♂️ E4.0 man juggling
1F939 200D 2642                                        ; minimally-qualified # 🤹‍♂ E4.0 man juggling
1F939 200D 2640 FE0F                                   ; fully-qualified     # 🤹‍♀️ E4.0 woman juggling
1F939 200D 2640                                        ; minimally-qualified # 🤹‍♀ E4.0 woman juggling

`,Ky=`
1F9D8                                                  ; fully-qualified     # 🧘 E5.0 person in lotus position
1F9D8 200D 2642 FE0F                                   ; fully-qualified     # 🧘‍♂️ E5.0 man in lotus position
1F9D8 200D 2642                                        ; minimally-qualified # 🧘‍♂ E5.0 man in lotus position
1F9D8 200D 2640 FE0F                                   ; fully-qualified     # 🧘‍♀️ E5.0 woman in lotus position
1F9D8 200D 2640                                        ; minimally-qualified # 🧘‍♀ E5.0 woman in lotus position
1F6C0                                                  ; fully-qualified     # 🛀 E0.6 person taking bath
1F6CC                                                  ; fully-qualified     # 🛌 E1.0 person in bed

`,Yy=`
1F5E3 FE0F                                             ; fully-qualified     # 🗣️ E0.7 speaking head
1F5E3                                                  ; unqualified         # 🗣 E0.7 speaking head
1F464                                                  ; fully-qualified     # 👤 E0.6 bust in silhouette
1F465                                                  ; fully-qualified     # 👥 E1.0 busts in silhouette
1FAC2                                                  ; fully-qualified     # 🫂 E13.0 people hugging
1F463                                                  ; fully-qualified     # 👣 E0.6 footprints`,Xy=Object.freeze(Object.defineProperty({__proto__:null,bodyParts:My,handFingersClosed:Ly,handFingersOpen:Ry,handFingersPartial:by,handProp:Iy,handSingleFinger:jy,hands:$y,person:Uy,personActivity:Qy,personFantasy:Wy,personGesture:Vy,personResting:Ky,personRole:Hy,personSport:Gy,personSymbol:Yy},Symbol.toStringTag,{value:"Module"})),Jy=`
1F435                                                  ; fully-qualified     # 🐵 E0.6 monkey face
1F412                                                  ; fully-qualified     # 🐒 E0.6 monkey
1F98D                                                  ; fully-qualified     # 🦍 E3.0 gorilla
1F9A7                                                  ; fully-qualified     # 🦧 E12.0 orangutan
1F436                                                  ; fully-qualified     # 🐶 E0.6 dog face
1F415                                                  ; fully-qualified     # 🐕 E0.7 dog
1F9AE                                                  ; fully-qualified     # 🦮 E12.0 guide dog
1F415 200D 1F9BA                                       ; fully-qualified     # 🐕‍🦺 E12.0 service dog
1F429                                                  ; fully-qualified     # 🐩 E0.6 poodle
1F43A                                                  ; fully-qualified     # 🐺 E0.6 wolf
1F98A                                                  ; fully-qualified     # 🦊 E3.0 fox
1F99D                                                  ; fully-qualified     # 🦝 E11.0 raccoon
1F431                                                  ; fully-qualified     # 🐱 E0.6 cat face
1F408                                                  ; fully-qualified     # 🐈 E0.7 cat
1F408 200D 2B1B                                        ; fully-qualified     # 🐈‍⬛ E13.0 black cat
1F981                                                  ; fully-qualified     # 🦁 E1.0 lion
1F42F                                                  ; fully-qualified     # 🐯 E0.6 tiger face
1F405                                                  ; fully-qualified     # 🐅 E1.0 tiger
1F406                                                  ; fully-qualified     # 🐆 E1.0 leopard
1F434                                                  ; fully-qualified     # 🐴 E0.6 horse face
1FACE                                                  ; fully-qualified     # 🫎 E15.0 moose
1FACF                                                  ; fully-qualified     # 🫏 E15.0 donkey
1F40E                                                  ; fully-qualified     # 🐎 E0.6 horse
1F984                                                  ; fully-qualified     # 🦄 E1.0 unicorn
1F993                                                  ; fully-qualified     # 🦓 E5.0 zebra
1F98C                                                  ; fully-qualified     # 🦌 E3.0 deer
1F9AC                                                  ; fully-qualified     # 🦬 E13.0 bison
1F42E                                                  ; fully-qualified     # 🐮 E0.6 cow face
1F402                                                  ; fully-qualified     # 🐂 E1.0 ox
1F403                                                  ; fully-qualified     # 🐃 E1.0 water buffalo
1F404                                                  ; fully-qualified     # 🐄 E1.0 cow
1F437                                                  ; fully-qualified     # 🐷 E0.6 pig face
1F416                                                  ; fully-qualified     # 🐖 E1.0 pig
1F417                                                  ; fully-qualified     # 🐗 E0.6 boar
1F43D                                                  ; fully-qualified     # 🐽 E0.6 pig nose
1F40F                                                  ; fully-qualified     # 🐏 E1.0 ram
1F411                                                  ; fully-qualified     # 🐑 E0.6 ewe
1F410                                                  ; fully-qualified     # 🐐 E1.0 goat
1F42A                                                  ; fully-qualified     # 🐪 E1.0 camel
1F42B                                                  ; fully-qualified     # 🐫 E0.6 two-hump camel
1F999                                                  ; fully-qualified     # 🦙 E11.0 llama
1F992                                                  ; fully-qualified     # 🦒 E5.0 giraffe
1F418                                                  ; fully-qualified     # 🐘 E0.6 elephant
1F9A3                                                  ; fully-qualified     # 🦣 E13.0 mammoth
1F98F                                                  ; fully-qualified     # 🦏 E3.0 rhinoceros
1F99B                                                  ; fully-qualified     # 🦛 E11.0 hippopotamus
1F42D                                                  ; fully-qualified     # 🐭 E0.6 mouse face
1F401                                                  ; fully-qualified     # 🐁 E1.0 mouse
1F400                                                  ; fully-qualified     # 🐀 E1.0 rat
1F439                                                  ; fully-qualified     # 🐹 E0.6 hamster
1F430                                                  ; fully-qualified     # 🐰 E0.6 rabbit face
1F407                                                  ; fully-qualified     # 🐇 E1.0 rabbit
1F43F FE0F                                             ; fully-qualified     # 🐿️ E0.7 chipmunk
1F43F                                                  ; unqualified         # 🐿 E0.7 chipmunk
1F9AB                                                  ; fully-qualified     # 🦫 E13.0 beaver
1F994                                                  ; fully-qualified     # 🦔 E5.0 hedgehog
1F987                                                  ; fully-qualified     # 🦇 E3.0 bat
1F43B                                                  ; fully-qualified     # 🐻 E0.6 bear
1F43B 200D 2744 FE0F                                   ; fully-qualified     # 🐻‍❄️ E13.0 polar bear
1F43B 200D 2744                                        ; minimally-qualified # 🐻‍❄ E13.0 polar bear
1F428                                                  ; fully-qualified     # 🐨 E0.6 koala
1F43C                                                  ; fully-qualified     # 🐼 E0.6 panda
1F9A5                                                  ; fully-qualified     # 🦥 E12.0 sloth
1F9A6                                                  ; fully-qualified     # 🦦 E12.0 otter
1F9A8                                                  ; fully-qualified     # 🦨 E12.0 skunk
1F998                                                  ; fully-qualified     # 🦘 E11.0 kangaroo
1F9A1                                                  ; fully-qualified     # 🦡 E11.0 badger
1F43E                                                  ; fully-qualified     # 🐾 E0.6 paw prints

`,Zy=`
1F983                                                  ; fully-qualified     # 🦃 E1.0 turkey
1F414                                                  ; fully-qualified     # 🐔 E0.6 chicken
1F413                                                  ; fully-qualified     # 🐓 E1.0 rooster
1F423                                                  ; fully-qualified     # 🐣 E0.6 hatching chick
1F424                                                  ; fully-qualified     # 🐤 E0.6 baby chick
1F425                                                  ; fully-qualified     # 🐥 E0.6 front-facing baby chick
1F426                                                  ; fully-qualified     # 🐦 E0.6 bird
1F427                                                  ; fully-qualified     # 🐧 E0.6 penguin
1F54A FE0F                                             ; fully-qualified     # 🕊️ E0.7 dove
1F54A                                                  ; unqualified         # 🕊 E0.7 dove
1F985                                                  ; fully-qualified     # 🦅 E3.0 eagle
1F986                                                  ; fully-qualified     # 🦆 E3.0 duck
1F9A2                                                  ; fully-qualified     # 🦢 E11.0 swan
1F989                                                  ; fully-qualified     # 🦉 E3.0 owl
1F9A4                                                  ; fully-qualified     # 🦤 E13.0 dodo
1FAB6                                                  ; fully-qualified     # 🪶 E13.0 feather
1F9A9                                                  ; fully-qualified     # 🦩 E12.0 flamingo
1F99A                                                  ; fully-qualified     # 🦚 E11.0 peacock
1F99C                                                  ; fully-qualified     # 🦜 E11.0 parrot
1FABD                                                  ; fully-qualified     # 🪽 E15.0 wing
1F426 200D 2B1B                                        ; fully-qualified     # 🐦‍⬛ E15.0 black bird
1FABF                                                  ; fully-qualified     # 🪿 E15.0 goose

`,eE=`
1F438                                                  ; fully-qualified     # 🐸 E0.6 frog

`,lE=`
1F40A                                                  ; fully-qualified     # 🐊 E1.0 crocodile
1F422                                                  ; fully-qualified     # 🐢 E0.6 turtle
1F98E                                                  ; fully-qualified     # 🦎 E3.0 lizard
1F40D                                                  ; fully-qualified     # 🐍 E0.6 snake
1F432                                                  ; fully-qualified     # 🐲 E0.6 dragon face
1F409                                                  ; fully-qualified     # 🐉 E1.0 dragon
1F995                                                  ; fully-qualified     # 🦕 E5.0 sauropod
1F996                                                  ; fully-qualified     # 🦖 E5.0 T-Rex

`,iE=`
1F433                                                  ; fully-qualified     # 🐳 E0.6 spouting whale
1F40B                                                  ; fully-qualified     # 🐋 E1.0 whale
1F42C                                                  ; fully-qualified     # 🐬 E0.6 dolphin
1F9AD                                                  ; fully-qualified     # 🦭 E13.0 seal
1F41F                                                  ; fully-qualified     # 🐟 E0.6 fish
1F420                                                  ; fully-qualified     # 🐠 E0.6 tropical fish
1F421                                                  ; fully-qualified     # 🐡 E0.6 blowfish
1F988                                                  ; fully-qualified     # 🦈 E3.0 shark
1F419                                                  ; fully-qualified     # 🐙 E0.6 octopus
1F41A                                                  ; fully-qualified     # 🐚 E0.6 spiral shell
1FAB8                                                  ; fully-qualified     # 🪸 E14.0 coral
1FABC                                                  ; fully-qualified     # 🪼 E15.0 jellyfish

`,nE=`
1F40C                                                  ; fully-qualified     # 🐌 E0.6 snail
1F98B                                                  ; fully-qualified     # 🦋 E3.0 butterfly
1F41B                                                  ; fully-qualified     # 🐛 E0.6 bug
1F41C                                                  ; fully-qualified     # 🐜 E0.6 ant
1F41D                                                  ; fully-qualified     # 🐝 E0.6 honeybee
1FAB2                                                  ; fully-qualified     # 🪲 E13.0 beetle
1F41E                                                  ; fully-qualified     # 🐞 E0.6 lady beetle
1F997                                                  ; fully-qualified     # 🦗 E5.0 cricket
1FAB3                                                  ; fully-qualified     # 🪳 E13.0 cockroach
1F577 FE0F                                             ; fully-qualified     # 🕷️ E0.7 spider
1F577                                                  ; unqualified         # 🕷 E0.7 spider
1F578 FE0F                                             ; fully-qualified     # 🕸️ E0.7 spider web
1F578                                                  ; unqualified         # 🕸 E0.7 spider web
1F982                                                  ; fully-qualified     # 🦂 E1.0 scorpion
1F99F                                                  ; fully-qualified     # 🦟 E11.0 mosquito
1FAB0                                                  ; fully-qualified     # 🪰 E13.0 fly
1FAB1                                                  ; fully-qualified     # 🪱 E13.0 worm
1F9A0                                                  ; fully-qualified     # 🦠 E11.0 microbe

`,tE=`
1F490                                                  ; fully-qualified     # 💐 E0.6 bouquet
1F338                                                  ; fully-qualified     # 🌸 E0.6 cherry blossom
1F4AE                                                  ; fully-qualified     # 💮 E0.6 white flower
1FAB7                                                  ; fully-qualified     # 🪷 E14.0 lotus
1F3F5 FE0F                                             ; fully-qualified     # 🏵️ E0.7 rosette
1F3F5                                                  ; unqualified         # 🏵 E0.7 rosette
1F339                                                  ; fully-qualified     # 🌹 E0.6 rose
1F940                                                  ; fully-qualified     # 🥀 E3.0 wilted flower
1F33A                                                  ; fully-qualified     # 🌺 E0.6 hibiscus
1F33B                                                  ; fully-qualified     # 🌻 E0.6 sunflower
1F33C                                                  ; fully-qualified     # 🌼 E0.6 blossom
1F337                                                  ; fully-qualified     # 🌷 E0.6 tulip
1FABB                                                  ; fully-qualified     # 🪻 E15.0 hyacinth

`,uE=`
1F331                                                  ; fully-qualified     # 🌱 E0.6 seedling
1FAB4                                                  ; fully-qualified     # 🪴 E13.0 potted plant
1F332                                                  ; fully-qualified     # 🌲 E1.0 evergreen tree
1F333                                                  ; fully-qualified     # 🌳 E1.0 deciduous tree
1F334                                                  ; fully-qualified     # 🌴 E0.6 palm tree
1F335                                                  ; fully-qualified     # 🌵 E0.6 cactus
1F33E                                                  ; fully-qualified     # 🌾 E0.6 sheaf of rice
1F33F                                                  ; fully-qualified     # 🌿 E0.6 herb
2618 FE0F                                              ; fully-qualified     # ☘️ E1.0 shamrock
2618                                                   ; unqualified         # ☘ E1.0 shamrock
1F340                                                  ; fully-qualified     # 🍀 E0.6 four leaf clover
1F341                                                  ; fully-qualified     # 🍁 E0.6 maple leaf
1F342                                                  ; fully-qualified     # 🍂 E0.6 fallen leaf
1F343                                                  ; fully-qualified     # 🍃 E0.6 leaf fluttering in wind
1FAB9                                                  ; fully-qualified     # 🪹 E14.0 empty nest
1FABA                                                  ; fully-qualified     # 🪺 E14.0 nest with eggs
1F344                                                  ; fully-qualified     # 🍄 E0.6 mushroom`,rE=Object.freeze(Object.defineProperty({__proto__:null,animalAmphibian:eE,animalBird:Zy,animalBug:nE,animalMammal:Jy,animalMarine:iE,animalReptile:lE,plantFlower:tE,plantOther:uE},Symbol.toStringTag,{value:"Module"})),aE=`
1F347                                                  ; fully-qualified     # 🍇 E0.6 grapes
1F348                                                  ; fully-qualified     # 🍈 E0.6 melon
1F349                                                  ; fully-qualified     # 🍉 E0.6 watermelon
1F34A                                                  ; fully-qualified     # 🍊 E0.6 tangerine
1F34B                                                  ; fully-qualified     # 🍋 E1.0 lemon
1F34C                                                  ; fully-qualified     # 🍌 E0.6 banana
1F34D                                                  ; fully-qualified     # 🍍 E0.6 pineapple
1F96D                                                  ; fully-qualified     # 🥭 E11.0 mango
1F34E                                                  ; fully-qualified     # 🍎 E0.6 red apple
1F34F                                                  ; fully-qualified     # 🍏 E0.6 green apple
1F350                                                  ; fully-qualified     # 🍐 E1.0 pear
1F351                                                  ; fully-qualified     # 🍑 E0.6 peach
1F352                                                  ; fully-qualified     # 🍒 E0.6 cherries
1F353                                                  ; fully-qualified     # 🍓 E0.6 strawberry
1FAD0                                                  ; fully-qualified     # 🫐 E13.0 blueberries
1F95D                                                  ; fully-qualified     # 🥝 E3.0 kiwi fruit
1F345                                                  ; fully-qualified     # 🍅 E0.6 tomato
1FAD2                                                  ; fully-qualified     # 🫒 E13.0 olive
1F965                                                  ; fully-qualified     # 🥥 E5.0 coconut

`,oE=`
1F951                                                  ; fully-qualified     # 🥑 E3.0 avocado
1F346                                                  ; fully-qualified     # 🍆 E0.6 eggplant
1F954                                                  ; fully-qualified     # 🥔 E3.0 potato
1F955                                                  ; fully-qualified     # 🥕 E3.0 carrot
1F33D                                                  ; fully-qualified     # 🌽 E0.6 ear of corn
1F336 FE0F                                             ; fully-qualified     # 🌶️ E0.7 hot pepper
1F336                                                  ; unqualified         # 🌶 E0.7 hot pepper
1FAD1                                                  ; fully-qualified     # 🫑 E13.0 bell pepper
1F952                                                  ; fully-qualified     # 🥒 E3.0 cucumber
1F96C                                                  ; fully-qualified     # 🥬 E11.0 leafy green
1F966                                                  ; fully-qualified     # 🥦 E5.0 broccoli
1F9C4                                                  ; fully-qualified     # 🧄 E12.0 garlic
1F9C5                                                  ; fully-qualified     # 🧅 E12.0 onion
1F95C                                                  ; fully-qualified     # 🥜 E3.0 peanuts
1FAD8                                                  ; fully-qualified     # 🫘 E14.0 beans
1F330                                                  ; fully-qualified     # 🌰 E0.6 chestnut
1FADA                                                  ; fully-qualified     # 🫚 E15.0 ginger root
1FADB                                                  ; fully-qualified     # 🫛 E15.0 pea pod

`,fE=`
1F35E                                                  ; fully-qualified     # 🍞 E0.6 bread
1F950                                                  ; fully-qualified     # 🥐 E3.0 croissant
1F956                                                  ; fully-qualified     # 🥖 E3.0 baguette bread
1FAD3                                                  ; fully-qualified     # 🫓 E13.0 flatbread
1F968                                                  ; fully-qualified     # 🥨 E5.0 pretzel
1F96F                                                  ; fully-qualified     # 🥯 E11.0 bagel
1F95E                                                  ; fully-qualified     # 🥞 E3.0 pancakes
1F9C7                                                  ; fully-qualified     # 🧇 E12.0 waffle
1F9C0                                                  ; fully-qualified     # 🧀 E1.0 cheese wedge
1F356                                                  ; fully-qualified     # 🍖 E0.6 meat on bone
1F357                                                  ; fully-qualified     # 🍗 E0.6 poultry leg
1F969                                                  ; fully-qualified     # 🥩 E5.0 cut of meat
1F953                                                  ; fully-qualified     # 🥓 E3.0 bacon
1F354                                                  ; fully-qualified     # 🍔 E0.6 hamburger
1F35F                                                  ; fully-qualified     # 🍟 E0.6 french fries
1F355                                                  ; fully-qualified     # 🍕 E0.6 pizza
1F32D                                                  ; fully-qualified     # 🌭 E1.0 hot dog
1F96A                                                  ; fully-qualified     # 🥪 E5.0 sandwich
1F32E                                                  ; fully-qualified     # 🌮 E1.0 taco
1F32F                                                  ; fully-qualified     # 🌯 E1.0 burrito
1FAD4                                                  ; fully-qualified     # 🫔 E13.0 tamale
1F959                                                  ; fully-qualified     # 🥙 E3.0 stuffed flatbread
1F9C6                                                  ; fully-qualified     # 🧆 E12.0 falafel
1F95A                                                  ; fully-qualified     # 🥚 E3.0 egg
1F373                                                  ; fully-qualified     # 🍳 E0.6 cooking
1F958                                                  ; fully-qualified     # 🥘 E3.0 shallow pan of food
1F372                                                  ; fully-qualified     # 🍲 E0.6 pot of food
1FAD5                                                  ; fully-qualified     # 🫕 E13.0 fondue
1F963                                                  ; fully-qualified     # 🥣 E5.0 bowl with spoon
1F957                                                  ; fully-qualified     # 🥗 E3.0 green salad
1F37F                                                  ; fully-qualified     # 🍿 E1.0 popcorn
1F9C8                                                  ; fully-qualified     # 🧈 E12.0 butter
1F9C2                                                  ; fully-qualified     # 🧂 E11.0 salt
1F96B                                                  ; fully-qualified     # 🥫 E5.0 canned food

`,sE=`
1F371                                                  ; fully-qualified     # 🍱 E0.6 bento box
1F358                                                  ; fully-qualified     # 🍘 E0.6 rice cracker
1F359                                                  ; fully-qualified     # 🍙 E0.6 rice ball
1F35A                                                  ; fully-qualified     # 🍚 E0.6 cooked rice
1F35B                                                  ; fully-qualified     # 🍛 E0.6 curry rice
1F35C                                                  ; fully-qualified     # 🍜 E0.6 steaming bowl
1F35D                                                  ; fully-qualified     # 🍝 E0.6 spaghetti
1F360                                                  ; fully-qualified     # 🍠 E0.6 roasted sweet potato
1F362                                                  ; fully-qualified     # 🍢 E0.6 oden
1F363                                                  ; fully-qualified     # 🍣 E0.6 sushi
1F364                                                  ; fully-qualified     # 🍤 E0.6 fried shrimp
1F365                                                  ; fully-qualified     # 🍥 E0.6 fish cake with swirl
1F96E                                                  ; fully-qualified     # 🥮 E11.0 moon cake
1F361                                                  ; fully-qualified     # 🍡 E0.6 dango
1F95F                                                  ; fully-qualified     # 🥟 E5.0 dumpling
1F960                                                  ; fully-qualified     # 🥠 E5.0 fortune cookie
1F961                                                  ; fully-qualified     # 🥡 E5.0 takeout box

`,dE=`
1F980                                                  ; fully-qualified     # 🦀 E1.0 crab
1F99E                                                  ; fully-qualified     # 🦞 E11.0 lobster
1F990                                                  ; fully-qualified     # 🦐 E3.0 shrimp
1F991                                                  ; fully-qualified     # 🦑 E3.0 squid
1F9AA                                                  ; fully-qualified     # 🦪 E12.0 oyster

`,cE=`
1F366                                                  ; fully-qualified     # 🍦 E0.6 soft ice cream
1F367                                                  ; fully-qualified     # 🍧 E0.6 shaved ice
1F368                                                  ; fully-qualified     # 🍨 E0.6 ice cream
1F369                                                  ; fully-qualified     # 🍩 E0.6 doughnut
1F36A                                                  ; fully-qualified     # 🍪 E0.6 cookie
1F382                                                  ; fully-qualified     # 🎂 E0.6 birthday cake
1F370                                                  ; fully-qualified     # 🍰 E0.6 shortcake
1F9C1                                                  ; fully-qualified     # 🧁 E11.0 cupcake
1F967                                                  ; fully-qualified     # 🥧 E5.0 pie
1F36B                                                  ; fully-qualified     # 🍫 E0.6 chocolate bar
1F36C                                                  ; fully-qualified     # 🍬 E0.6 candy
1F36D                                                  ; fully-qualified     # 🍭 E0.6 lollipop
1F36E                                                  ; fully-qualified     # 🍮 E0.6 custard
1F36F                                                  ; fully-qualified     # 🍯 E0.6 honey pot

`,yE=`
1F37C                                                  ; fully-qualified     # 🍼 E1.0 baby bottle
1F95B                                                  ; fully-qualified     # 🥛 E3.0 glass of milk
2615                                                   ; fully-qualified     # ☕ E0.6 hot beverage
1FAD6                                                  ; fully-qualified     # 🫖 E13.0 teapot
1F375                                                  ; fully-qualified     # 🍵 E0.6 teacup without handle
1F376                                                  ; fully-qualified     # 🍶 E0.6 sake
1F37E                                                  ; fully-qualified     # 🍾 E1.0 bottle with popping cork
1F377                                                  ; fully-qualified     # 🍷 E0.6 wine glass
1F378                                                  ; fully-qualified     # 🍸 E0.6 cocktail glass
1F379                                                  ; fully-qualified     # 🍹 E0.6 tropical drink
1F37A                                                  ; fully-qualified     # 🍺 E0.6 beer mug
1F37B                                                  ; fully-qualified     # 🍻 E0.6 clinking beer mugs
1F942                                                  ; fully-qualified     # 🥂 E3.0 clinking glasses
1F943                                                  ; fully-qualified     # 🥃 E3.0 tumbler glass
1FAD7                                                  ; fully-qualified     # 🫗 E14.0 pouring liquid
1F964                                                  ; fully-qualified     # 🥤 E5.0 cup with straw
1F9CB                                                  ; fully-qualified     # 🧋 E13.0 bubble tea
1F9C3                                                  ; fully-qualified     # 🧃 E12.0 beverage box
1F9C9                                                  ; fully-qualified     # 🧉 E12.0 mate
1F9CA                                                  ; fully-qualified     # 🧊 E12.0 ice

`,EE=`
1F962                                                  ; fully-qualified     # 🥢 E5.0 chopsticks
1F37D FE0F                                             ; fully-qualified     # 🍽️ E0.7 fork and knife with plate
1F37D                                                  ; unqualified         # 🍽 E0.7 fork and knife with plate
1F374                                                  ; fully-qualified     # 🍴 E0.6 fork and knife
1F944                                                  ; fully-qualified     # 🥄 E3.0 spoon
1F52A                                                  ; fully-qualified     # 🔪 E0.6 kitchen knife
1FAD9                                                  ; fully-qualified     # 🫙 E14.0 jar
1F3FA                                                  ; fully-qualified     # 🏺 E1.0 amphora`,pE=Object.freeze(Object.defineProperty({__proto__:null,dishware:EE,drink:yE,foodAsian:sE,foodFruit:aE,foodMarine:dE,foodPrepared:fE,foodSweet:cE,foodVegetable:oE},Symbol.toStringTag,{value:"Module"})),FE=`
1F30D                                                  ; fully-qualified     # 🌍 E0.7 globe showing Europe-Africa
1F30E                                                  ; fully-qualified     # 🌎 E0.7 globe showing Americas
1F30F                                                  ; fully-qualified     # 🌏 E0.6 globe showing Asia-Australia
1F310                                                  ; fully-qualified     # 🌐 E1.0 globe with meridians
1F5FA FE0F                                             ; fully-qualified     # 🗺️ E0.7 world map
1F5FA                                                  ; unqualified         # 🗺 E0.7 world map
1F5FE                                                  ; fully-qualified     # 🗾 E0.6 map of Japan
1F9ED                                                  ; fully-qualified     # 🧭 E11.0 compass

`,mE=`
1F3D4 FE0F                                             ; fully-qualified     # 🏔️ E0.7 snow-capped mountain
1F3D4                                                  ; unqualified         # 🏔 E0.7 snow-capped mountain
26F0 FE0F                                              ; fully-qualified     # ⛰️ E0.7 mountain
26F0                                                   ; unqualified         # ⛰ E0.7 mountain
1F30B                                                  ; fully-qualified     # 🌋 E0.6 volcano
1F5FB                                                  ; fully-qualified     # 🗻 E0.6 mount fuji
1F3D5 FE0F                                             ; fully-qualified     # 🏕️ E0.7 camping
1F3D5                                                  ; unqualified         # 🏕 E0.7 camping
1F3D6 FE0F                                             ; fully-qualified     # 🏖️ E0.7 beach with umbrella
1F3D6                                                  ; unqualified         # 🏖 E0.7 beach with umbrella
1F3DC FE0F                                             ; fully-qualified     # 🏜️ E0.7 desert
1F3DC                                                  ; unqualified         # 🏜 E0.7 desert
1F3DD FE0F                                             ; fully-qualified     # 🏝️ E0.7 desert island
1F3DD                                                  ; unqualified         # 🏝 E0.7 desert island
1F3DE FE0F                                             ; fully-qualified     # 🏞️ E0.7 national park
1F3DE                                                  ; unqualified         # 🏞 E0.7 national park

`,hE=`
1F3DF FE0F                                             ; fully-qualified     # 🏟️ E0.7 stadium
1F3DF                                                  ; unqualified         # 🏟 E0.7 stadium
1F3DB FE0F                                             ; fully-qualified     # 🏛️ E0.7 classical building
1F3DB                                                  ; unqualified         # 🏛 E0.7 classical building
1F3D7 FE0F                                             ; fully-qualified     # 🏗️ E0.7 building construction
1F3D7                                                  ; unqualified         # 🏗 E0.7 building construction
1F9F1                                                  ; fully-qualified     # 🧱 E11.0 brick
1FAA8                                                  ; fully-qualified     # 🪨 E13.0 rock
1FAB5                                                  ; fully-qualified     # 🪵 E13.0 wood
1F6D6                                                  ; fully-qualified     # 🛖 E13.0 hut
1F3D8 FE0F                                             ; fully-qualified     # 🏘️ E0.7 houses
1F3D8                                                  ; unqualified         # 🏘 E0.7 houses
1F3DA FE0F                                             ; fully-qualified     # 🏚️ E0.7 derelict house
1F3DA                                                  ; unqualified         # 🏚 E0.7 derelict house
1F3E0                                                  ; fully-qualified     # 🏠 E0.6 house
1F3E1                                                  ; fully-qualified     # 🏡 E0.6 house with garden
1F3E2                                                  ; fully-qualified     # 🏢 E0.6 office building
1F3E3                                                  ; fully-qualified     # 🏣 E0.6 Japanese post office
1F3E4                                                  ; fully-qualified     # 🏤 E1.0 post office
1F3E5                                                  ; fully-qualified     # 🏥 E0.6 hospital
1F3E6                                                  ; fully-qualified     # 🏦 E0.6 bank
1F3E8                                                  ; fully-qualified     # 🏨 E0.6 hotel
1F3E9                                                  ; fully-qualified     # 🏩 E0.6 love hotel
1F3EA                                                  ; fully-qualified     # 🏪 E0.6 convenience store
1F3EB                                                  ; fully-qualified     # 🏫 E0.6 school
1F3EC                                                  ; fully-qualified     # 🏬 E0.6 department store
1F3ED                                                  ; fully-qualified     # 🏭 E0.6 factory
1F3EF                                                  ; fully-qualified     # 🏯 E0.6 Japanese castle
1F3F0                                                  ; fully-qualified     # 🏰 E0.6 castle
1F492                                                  ; fully-qualified     # 💒 E0.6 wedding
1F5FC                                                  ; fully-qualified     # 🗼 E0.6 Tokyo tower
1F5FD                                                  ; fully-qualified     # 🗽 E0.6 Statue of Liberty

`,gE=`
26EA                                                   ; fully-qualified     # ⛪ E0.6 church
1F54C                                                  ; fully-qualified     # 🕌 E1.0 mosque
1F6D5                                                  ; fully-qualified     # 🛕 E12.0 hindu temple
1F54D                                                  ; fully-qualified     # 🕍 E1.0 synagogue
26E9 FE0F                                              ; fully-qualified     # ⛩️ E0.7 shinto shrine
26E9                                                   ; unqualified         # ⛩ E0.7 shinto shrine
1F54B                                                  ; fully-qualified     # 🕋 E1.0 kaaba

`,qE=`
26F2                                                   ; fully-qualified     # ⛲ E0.6 fountain
26FA                                                   ; fully-qualified     # ⛺ E0.6 tent
1F301                                                  ; fully-qualified     # 🌁 E0.6 foggy
1F303                                                  ; fully-qualified     # 🌃 E0.6 night with stars
1F3D9 FE0F                                             ; fully-qualified     # 🏙️ E0.7 cityscape
1F3D9                                                  ; unqualified         # 🏙 E0.7 cityscape
1F304                                                  ; fully-qualified     # 🌄 E0.6 sunrise over mountains
1F305                                                  ; fully-qualified     # 🌅 E0.6 sunrise
1F306                                                  ; fully-qualified     # 🌆 E0.6 cityscape at dusk
1F307                                                  ; fully-qualified     # 🌇 E0.6 sunset
1F309                                                  ; fully-qualified     # 🌉 E0.6 bridge at night
2668 FE0F                                              ; fully-qualified     # ♨️ E0.6 hot springs
2668                                                   ; unqualified         # ♨ E0.6 hot springs
1F3A0                                                  ; fully-qualified     # 🎠 E0.6 carousel horse
1F6DD                                                  ; fully-qualified     # 🛝 E14.0 playground slide
1F3A1                                                  ; fully-qualified     # 🎡 E0.6 ferris wheel
1F3A2                                                  ; fully-qualified     # 🎢 E0.6 roller coaster
1F488                                                  ; fully-qualified     # 💈 E0.6 barber pole
1F3AA                                                  ; fully-qualified     # 🎪 E0.6 circus tent

`,vE=`
1F682                                                  ; fully-qualified     # 🚂 E1.0 locomotive
1F683                                                  ; fully-qualified     # 🚃 E0.6 railway car
1F684                                                  ; fully-qualified     # 🚄 E0.6 high-speed train
1F685                                                  ; fully-qualified     # 🚅 E0.6 bullet train
1F686                                                  ; fully-qualified     # 🚆 E1.0 train
1F687                                                  ; fully-qualified     # 🚇 E0.6 metro
1F688                                                  ; fully-qualified     # 🚈 E1.0 light rail
1F689                                                  ; fully-qualified     # 🚉 E0.6 station
1F68A                                                  ; fully-qualified     # 🚊 E1.0 tram
1F69D                                                  ; fully-qualified     # 🚝 E1.0 monorail
1F69E                                                  ; fully-qualified     # 🚞 E1.0 mountain railway
1F68B                                                  ; fully-qualified     # 🚋 E1.0 tram car
1F68C                                                  ; fully-qualified     # 🚌 E0.6 bus
1F68D                                                  ; fully-qualified     # 🚍 E0.7 oncoming bus
1F68E                                                  ; fully-qualified     # 🚎 E1.0 trolleybus
1F690                                                  ; fully-qualified     # 🚐 E1.0 minibus
1F691                                                  ; fully-qualified     # 🚑 E0.6 ambulance
1F692                                                  ; fully-qualified     # 🚒 E0.6 fire engine
1F693                                                  ; fully-qualified     # 🚓 E0.6 police car
1F694                                                  ; fully-qualified     # 🚔 E0.7 oncoming police car
1F695                                                  ; fully-qualified     # 🚕 E0.6 taxi
1F696                                                  ; fully-qualified     # 🚖 E1.0 oncoming taxi
1F697                                                  ; fully-qualified     # 🚗 E0.6 automobile
1F698                                                  ; fully-qualified     # 🚘 E0.7 oncoming automobile
1F699                                                  ; fully-qualified     # 🚙 E0.6 sport utility vehicle
1F6FB                                                  ; fully-qualified     # 🛻 E13.0 pickup truck
1F69A                                                  ; fully-qualified     # 🚚 E0.6 delivery truck
1F69B                                                  ; fully-qualified     # 🚛 E1.0 articulated lorry
1F69C                                                  ; fully-qualified     # 🚜 E1.0 tractor
1F3CE FE0F                                             ; fully-qualified     # 🏎️ E0.7 racing car
1F3CE                                                  ; unqualified         # 🏎 E0.7 racing car
1F3CD FE0F                                             ; fully-qualified     # 🏍️ E0.7 motorcycle
1F3CD                                                  ; unqualified         # 🏍 E0.7 motorcycle
1F6F5                                                  ; fully-qualified     # 🛵 E3.0 motor scooter
1F9BD                                                  ; fully-qualified     # 🦽 E12.0 manual wheelchair
1F9BC                                                  ; fully-qualified     # 🦼 E12.0 motorized wheelchair
1F6FA                                                  ; fully-qualified     # 🛺 E12.0 auto rickshaw
1F6B2                                                  ; fully-qualified     # 🚲 E0.6 bicycle
1F6F4                                                  ; fully-qualified     # 🛴 E3.0 kick scooter
1F6F9                                                  ; fully-qualified     # 🛹 E11.0 skateboard
1F6FC                                                  ; fully-qualified     # 🛼 E13.0 roller skate
1F68F                                                  ; fully-qualified     # 🚏 E0.6 bus stop
1F6E3 FE0F                                             ; fully-qualified     # 🛣️ E0.7 motorway
1F6E3                                                  ; unqualified         # 🛣 E0.7 motorway
1F6E4 FE0F                                             ; fully-qualified     # 🛤️ E0.7 railway track
1F6E4                                                  ; unqualified         # 🛤 E0.7 railway track
1F6E2 FE0F                                             ; fully-qualified     # 🛢️ E0.7 oil drum
1F6E2                                                  ; unqualified         # 🛢 E0.7 oil drum
26FD                                                   ; fully-qualified     # ⛽ E0.6 fuel pump
1F6DE                                                  ; fully-qualified     # 🛞 E14.0 wheel
1F6A8                                                  ; fully-qualified     # 🚨 E0.6 police car light
1F6A5                                                  ; fully-qualified     # 🚥 E0.6 horizontal traffic light
1F6A6                                                  ; fully-qualified     # 🚦 E1.0 vertical traffic light
1F6D1                                                  ; fully-qualified     # 🛑 E3.0 stop sign
1F6A7                                                  ; fully-qualified     # 🚧 E0.6 construction

`,wE=`
2693                                                   ; fully-qualified     # ⚓ E0.6 anchor
1F6DF                                                  ; fully-qualified     # 🛟 E14.0 ring buoy
26F5                                                   ; fully-qualified     # ⛵ E0.6 sailboat
1F6F6                                                  ; fully-qualified     # 🛶 E3.0 canoe
1F6A4                                                  ; fully-qualified     # 🚤 E0.6 speedboat
1F6F3 FE0F                                             ; fully-qualified     # 🛳️ E0.7 passenger ship
1F6F3                                                  ; unqualified         # 🛳 E0.7 passenger ship
26F4 FE0F                                              ; fully-qualified     # ⛴️ E0.7 ferry
26F4                                                   ; unqualified         # ⛴ E0.7 ferry
1F6E5 FE0F                                             ; fully-qualified     # 🛥️ E0.7 motor boat
1F6E5                                                  ; unqualified         # 🛥 E0.7 motor boat
1F6A2                                                  ; fully-qualified     # 🚢 E0.6 ship

`,kE=`
2708 FE0F                                              ; fully-qualified     # ✈️ E0.6 airplane
2708                                                   ; unqualified         # ✈ E0.6 airplane
1F6E9 FE0F                                             ; fully-qualified     # 🛩️ E0.7 small airplane
1F6E9                                                  ; unqualified         # 🛩 E0.7 small airplane
1F6EB                                                  ; fully-qualified     # 🛫 E1.0 airplane departure
1F6EC                                                  ; fully-qualified     # 🛬 E1.0 airplane arrival
1FA82                                                  ; fully-qualified     # 🪂 E12.0 parachute
1F4BA                                                  ; fully-qualified     # 💺 E0.6 seat
1F681                                                  ; fully-qualified     # 🚁 E1.0 helicopter
1F69F                                                  ; fully-qualified     # 🚟 E1.0 suspension railway
1F6A0                                                  ; fully-qualified     # 🚠 E1.0 mountain cableway
1F6A1                                                  ; fully-qualified     # 🚡 E1.0 aerial tramway
1F6F0 FE0F                                             ; fully-qualified     # 🛰️ E0.7 satellite
1F6F0                                                  ; unqualified         # 🛰 E0.7 satellite
1F680                                                  ; fully-qualified     # 🚀 E0.6 rocket
1F6F8                                                  ; fully-qualified     # 🛸 E5.0 flying saucer

`,DE=`
1F6CE FE0F                                             ; fully-qualified     # 🛎️ E0.7 bellhop bell
1F6CE                                                  ; unqualified         # 🛎 E0.7 bellhop bell
1F9F3                                                  ; fully-qualified     # 🧳 E11.0 luggage

`,CE=`
231B                                                   ; fully-qualified     # ⌛ E0.6 hourglass done
23F3                                                   ; fully-qualified     # ⏳ E0.6 hourglass not done
231A                                                   ; fully-qualified     # ⌚ E0.6 watch
23F0                                                   ; fully-qualified     # ⏰ E0.6 alarm clock
23F1 FE0F                                              ; fully-qualified     # ⏱️ E1.0 stopwatch
23F1                                                   ; unqualified         # ⏱ E1.0 stopwatch
23F2 FE0F                                              ; fully-qualified     # ⏲️ E1.0 timer clock
23F2                                                   ; unqualified         # ⏲ E1.0 timer clock
1F570 FE0F                                             ; fully-qualified     # 🕰️ E0.7 mantelpiece clock
1F570                                                  ; unqualified         # 🕰 E0.7 mantelpiece clock
1F55B                                                  ; fully-qualified     # 🕛 E0.6 twelve o’clock
1F567                                                  ; fully-qualified     # 🕧 E0.7 twelve-thirty
1F550                                                  ; fully-qualified     # 🕐 E0.6 one o’clock
1F55C                                                  ; fully-qualified     # 🕜 E0.7 one-thirty
1F551                                                  ; fully-qualified     # 🕑 E0.6 two o’clock
1F55D                                                  ; fully-qualified     # 🕝 E0.7 two-thirty
1F552                                                  ; fully-qualified     # 🕒 E0.6 three o’clock
1F55E                                                  ; fully-qualified     # 🕞 E0.7 three-thirty
1F553                                                  ; fully-qualified     # 🕓 E0.6 four o’clock
1F55F                                                  ; fully-qualified     # 🕟 E0.7 four-thirty
1F554                                                  ; fully-qualified     # 🕔 E0.6 five o’clock
1F560                                                  ; fully-qualified     # 🕠 E0.7 five-thirty
1F555                                                  ; fully-qualified     # 🕕 E0.6 six o’clock
1F561                                                  ; fully-qualified     # 🕡 E0.7 six-thirty
1F556                                                  ; fully-qualified     # 🕖 E0.6 seven o’clock
1F562                                                  ; fully-qualified     # 🕢 E0.7 seven-thirty
1F557                                                  ; fully-qualified     # 🕗 E0.6 eight o’clock
1F563                                                  ; fully-qualified     # 🕣 E0.7 eight-thirty
1F558                                                  ; fully-qualified     # 🕘 E0.6 nine o’clock
1F564                                                  ; fully-qualified     # 🕤 E0.7 nine-thirty
1F559                                                  ; fully-qualified     # 🕙 E0.6 ten o’clock
1F565                                                  ; fully-qualified     # 🕥 E0.7 ten-thirty
1F55A                                                  ; fully-qualified     # 🕚 E0.6 eleven o’clock
1F566                                                  ; fully-qualified     # 🕦 E0.7 eleven-thirty

`,SE=`
1F311                                                  ; fully-qualified     # 🌑 E0.6 new moon
1F312                                                  ; fully-qualified     # 🌒 E1.0 waxing crescent moon
1F313                                                  ; fully-qualified     # 🌓 E0.6 first quarter moon
1F314                                                  ; fully-qualified     # 🌔 E0.6 waxing gibbous moon
1F315                                                  ; fully-qualified     # 🌕 E0.6 full moon
1F316                                                  ; fully-qualified     # 🌖 E1.0 waning gibbous moon
1F317                                                  ; fully-qualified     # 🌗 E1.0 last quarter moon
1F318                                                  ; fully-qualified     # 🌘 E1.0 waning crescent moon
1F319                                                  ; fully-qualified     # 🌙 E0.6 crescent moon
1F31A                                                  ; fully-qualified     # 🌚 E1.0 new moon face
1F31B                                                  ; fully-qualified     # 🌛 E0.6 first quarter moon face
1F31C                                                  ; fully-qualified     # 🌜 E0.7 last quarter moon face
1F321 FE0F                                             ; fully-qualified     # 🌡️ E0.7 thermometer
1F321                                                  ; unqualified         # 🌡 E0.7 thermometer
2600 FE0F                                              ; fully-qualified     # ☀️ E0.6 sun
2600                                                   ; unqualified         # ☀ E0.6 sun
1F31D                                                  ; fully-qualified     # 🌝 E1.0 full moon face
1F31E                                                  ; fully-qualified     # 🌞 E1.0 sun with face
1FA90                                                  ; fully-qualified     # 🪐 E12.0 ringed planet
2B50                                                   ; fully-qualified     # ⭐ E0.6 star
1F31F                                                  ; fully-qualified     # 🌟 E0.6 glowing star
1F320                                                  ; fully-qualified     # 🌠 E0.6 shooting star
1F30C                                                  ; fully-qualified     # 🌌 E0.6 milky way
2601 FE0F                                              ; fully-qualified     # ☁️ E0.6 cloud
2601                                                   ; unqualified         # ☁ E0.6 cloud
26C5                                                   ; fully-qualified     # ⛅ E0.6 sun behind cloud
26C8 FE0F                                              ; fully-qualified     # ⛈️ E0.7 cloud with lightning and rain
26C8                                                   ; unqualified         # ⛈ E0.7 cloud with lightning and rain
1F324 FE0F                                             ; fully-qualified     # 🌤️ E0.7 sun behind small cloud
1F324                                                  ; unqualified         # 🌤 E0.7 sun behind small cloud
1F325 FE0F                                             ; fully-qualified     # 🌥️ E0.7 sun behind large cloud
1F325                                                  ; unqualified         # 🌥 E0.7 sun behind large cloud
1F326 FE0F                                             ; fully-qualified     # 🌦️ E0.7 sun behind rain cloud
1F326                                                  ; unqualified         # 🌦 E0.7 sun behind rain cloud
1F327 FE0F                                             ; fully-qualified     # 🌧️ E0.7 cloud with rain
1F327                                                  ; unqualified         # 🌧 E0.7 cloud with rain
1F328 FE0F                                             ; fully-qualified     # 🌨️ E0.7 cloud with snow
1F328                                                  ; unqualified         # 🌨 E0.7 cloud with snow
1F329 FE0F                                             ; fully-qualified     # 🌩️ E0.7 cloud with lightning
1F329                                                  ; unqualified         # 🌩 E0.7 cloud with lightning
1F32A FE0F                                             ; fully-qualified     # 🌪️ E0.7 tornado
1F32A                                                  ; unqualified         # 🌪 E0.7 tornado
1F32B FE0F                                             ; fully-qualified     # 🌫️ E0.7 fog
1F32B                                                  ; unqualified         # 🌫 E0.7 fog
1F32C FE0F                                             ; fully-qualified     # 🌬️ E0.7 wind face
1F32C                                                  ; unqualified         # 🌬 E0.7 wind face
1F300                                                  ; fully-qualified     # 🌀 E0.6 cyclone
1F308                                                  ; fully-qualified     # 🌈 E0.6 rainbow
1F302                                                  ; fully-qualified     # 🌂 E0.6 closed umbrella
2602 FE0F                                              ; fully-qualified     # ☂️ E0.7 umbrella
2602                                                   ; unqualified         # ☂ E0.7 umbrella
2614                                                   ; fully-qualified     # ☔ E0.6 umbrella with rain drops
26F1 FE0F                                              ; fully-qualified     # ⛱️ E0.7 umbrella on ground
26F1                                                   ; unqualified         # ⛱ E0.7 umbrella on ground
26A1                                                   ; fully-qualified     # ⚡ E0.6 high voltage
2744 FE0F                                              ; fully-qualified     # ❄️ E0.6 snowflake
2744                                                   ; unqualified         # ❄ E0.6 snowflake
2603 FE0F                                              ; fully-qualified     # ☃️ E0.7 snowman
2603                                                   ; unqualified         # ☃ E0.7 snowman
26C4                                                   ; fully-qualified     # ⛄ E0.6 snowman without snow
2604 FE0F                                              ; fully-qualified     # ☄️ E1.0 comet
2604                                                   ; unqualified         # ☄ E1.0 comet
1F525                                                  ; fully-qualified     # 🔥 E0.6 fire
1F4A7                                                  ; fully-qualified     # 💧 E0.6 droplet
1F30A                                                  ; fully-qualified     # 🌊 E0.6 water wave`,AE=Object.freeze(Object.defineProperty({__proto__:null,hotel:DE,placeBuilding:hE,placeGeographic:mE,placeMap:FE,placeOther:qE,placeReligious:gE,skyWeather:SE,time:CE,transportAir:kE,transportGround:vE,transportWater:wE},Symbol.toStringTag,{value:"Module"})),xE=`
1F383                                                  ; fully-qualified     # 🎃 E0.6 jack-o-lantern
1F384                                                  ; fully-qualified     # 🎄 E0.6 Christmas tree
1F386                                                  ; fully-qualified     # 🎆 E0.6 fireworks
1F387                                                  ; fully-qualified     # 🎇 E0.6 sparkler
1F9E8                                                  ; fully-qualified     # 🧨 E11.0 firecracker
2728                                                   ; fully-qualified     # ✨ E0.6 sparkles
1F388                                                  ; fully-qualified     # 🎈 E0.6 balloon
1F389                                                  ; fully-qualified     # 🎉 E0.6 party popper
1F38A                                                  ; fully-qualified     # 🎊 E0.6 confetti ball
1F38B                                                  ; fully-qualified     # 🎋 E0.6 tanabata tree
1F38D                                                  ; fully-qualified     # 🎍 E0.6 pine decoration
1F38E                                                  ; fully-qualified     # 🎎 E0.6 Japanese dolls
1F38F                                                  ; fully-qualified     # 🎏 E0.6 carp streamer
1F390                                                  ; fully-qualified     # 🎐 E0.6 wind chime
1F391                                                  ; fully-qualified     # 🎑 E0.6 moon viewing ceremony
1F9E7                                                  ; fully-qualified     # 🧧 E11.0 red envelope
1F380                                                  ; fully-qualified     # 🎀 E0.6 ribbon
1F381                                                  ; fully-qualified     # 🎁 E0.6 wrapped gift
1F397 FE0F                                             ; fully-qualified     # 🎗️ E0.7 reminder ribbon
1F397                                                  ; unqualified         # 🎗 E0.7 reminder ribbon
1F39F FE0F                                             ; fully-qualified     # 🎟️ E0.7 admission tickets
1F39F                                                  ; unqualified         # 🎟 E0.7 admission tickets
1F3AB                                                  ; fully-qualified     # 🎫 E0.6 ticket

`,_E=`
1F396 FE0F                                             ; fully-qualified     # 🎖️ E0.7 military medal
1F396                                                  ; unqualified         # 🎖 E0.7 military medal
1F3C6                                                  ; fully-qualified     # 🏆 E0.6 trophy
1F3C5                                                  ; fully-qualified     # 🏅 E1.0 sports medal
1F947                                                  ; fully-qualified     # 🥇 E3.0 1st place medal
1F948                                                  ; fully-qualified     # 🥈 E3.0 2nd place medal
1F949                                                  ; fully-qualified     # 🥉 E3.0 3rd place medal

`,BE=`
26BD                                                   ; fully-qualified     # ⚽ E0.6 soccer ball
26BE                                                   ; fully-qualified     # ⚾ E0.6 baseball
1F94E                                                  ; fully-qualified     # 🥎 E11.0 softball
1F3C0                                                  ; fully-qualified     # 🏀 E0.6 basketball
1F3D0                                                  ; fully-qualified     # 🏐 E1.0 volleyball
1F3C8                                                  ; fully-qualified     # 🏈 E0.6 american football
1F3C9                                                  ; fully-qualified     # 🏉 E1.0 rugby football
1F3BE                                                  ; fully-qualified     # 🎾 E0.6 tennis
1F94F                                                  ; fully-qualified     # 🥏 E11.0 flying disc
1F3B3                                                  ; fully-qualified     # 🎳 E0.6 bowling
1F3CF                                                  ; fully-qualified     # 🏏 E1.0 cricket game
1F3D1                                                  ; fully-qualified     # 🏑 E1.0 field hockey
1F3D2                                                  ; fully-qualified     # 🏒 E1.0 ice hockey
1F94D                                                  ; fully-qualified     # 🥍 E11.0 lacrosse
1F3D3                                                  ; fully-qualified     # 🏓 E1.0 ping pong
1F3F8                                                  ; fully-qualified     # 🏸 E1.0 badminton
1F94A                                                  ; fully-qualified     # 🥊 E3.0 boxing glove
1F94B                                                  ; fully-qualified     # 🥋 E3.0 martial arts uniform
1F945                                                  ; fully-qualified     # 🥅 E3.0 goal net
26F3                                                   ; fully-qualified     # ⛳ E0.6 flag in hole
26F8 FE0F                                              ; fully-qualified     # ⛸️ E0.7 ice skate
26F8                                                   ; unqualified         # ⛸ E0.7 ice skate
1F3A3                                                  ; fully-qualified     # 🎣 E0.6 fishing pole
1F93F                                                  ; fully-qualified     # 🤿 E12.0 diving mask
1F3BD                                                  ; fully-qualified     # 🎽 E0.6 running shirt
1F3BF                                                  ; fully-qualified     # 🎿 E0.6 skis
1F6F7                                                  ; fully-qualified     # 🛷 E5.0 sled
1F94C                                                  ; fully-qualified     # 🥌 E5.0 curling stone

`,PE=`
1F3AF                                                  ; fully-qualified     # 🎯 E0.6 bullseye
1FA80                                                  ; fully-qualified     # 🪀 E12.0 yo-yo
1FA81                                                  ; fully-qualified     # 🪁 E12.0 kite
1F52B                                                  ; fully-qualified     # 🔫 E0.6 water pistol
1F3B1                                                  ; fully-qualified     # 🎱 E0.6 pool 8 ball
1F52E                                                  ; fully-qualified     # 🔮 E0.6 crystal ball
1FA84                                                  ; fully-qualified     # 🪄 E13.0 magic wand
1F3AE                                                  ; fully-qualified     # 🎮 E0.6 video game
1F579 FE0F                                             ; fully-qualified     # 🕹️ E0.7 joystick
1F579                                                  ; unqualified         # 🕹 E0.7 joystick
1F3B0                                                  ; fully-qualified     # 🎰 E0.6 slot machine
1F3B2                                                  ; fully-qualified     # 🎲 E0.6 game die
1F9E9                                                  ; fully-qualified     # 🧩 E11.0 puzzle piece
1F9F8                                                  ; fully-qualified     # 🧸 E11.0 teddy bear
1FA85                                                  ; fully-qualified     # 🪅 E13.0 piñata
1FAA9                                                  ; fully-qualified     # 🪩 E14.0 mirror ball
1FA86                                                  ; fully-qualified     # 🪆 E13.0 nesting dolls
2660 FE0F                                              ; fully-qualified     # ♠️ E0.6 spade suit
2660                                                   ; unqualified         # ♠ E0.6 spade suit
2665 FE0F                                              ; fully-qualified     # ♥️ E0.6 heart suit
2665                                                   ; unqualified         # ♥ E0.6 heart suit
2666 FE0F                                              ; fully-qualified     # ♦️ E0.6 diamond suit
2666                                                   ; unqualified         # ♦ E0.6 diamond suit
2663 FE0F                                              ; fully-qualified     # ♣️ E0.6 club suit
2663                                                   ; unqualified         # ♣ E0.6 club suit
265F FE0F                                              ; fully-qualified     # ♟️ E11.0 chess pawn
265F                                                   ; unqualified         # ♟ E11.0 chess pawn
1F0CF                                                  ; fully-qualified     # 🃏 E0.6 joker
1F004                                                  ; fully-qualified     # 🀄 E0.6 mahjong red dragon
1F3B4                                                  ; fully-qualified     # 🎴 E0.6 flower playing cards

`,NE=`
1F3AD                                                  ; fully-qualified     # 🎭 E0.6 performing arts
1F5BC FE0F                                             ; fully-qualified     # 🖼️ E0.7 framed picture
1F5BC                                                  ; unqualified         # 🖼 E0.7 framed picture
1F3A8                                                  ; fully-qualified     # 🎨 E0.6 artist palette
1F9F5                                                  ; fully-qualified     # 🧵 E11.0 thread
1FAA1                                                  ; fully-qualified     # 🪡 E13.0 sewing needle
1F9F6                                                  ; fully-qualified     # 🧶 E11.0 yarn
1FAA2                                                  ; fully-qualified     # 🪢 E13.0 knot`,zE=Object.freeze(Object.defineProperty({__proto__:null,artsCrafts:NE,awardMedal:_E,event:xE,game:PE,sport:BE},Symbol.toStringTag,{value:"Module"})),TE=`
1F453                                                  ; fully-qualified     # 👓 E0.6 glasses
1F576 FE0F                                             ; fully-qualified     # 🕶️ E0.7 sunglasses
1F576                                                  ; unqualified         # 🕶 E0.7 sunglasses
1F97D                                                  ; fully-qualified     # 🥽 E11.0 goggles
1F97C                                                  ; fully-qualified     # 🥼 E11.0 lab coat
1F9BA                                                  ; fully-qualified     # 🦺 E12.0 safety vest
1F454                                                  ; fully-qualified     # 👔 E0.6 necktie
1F455                                                  ; fully-qualified     # 👕 E0.6 t-shirt
1F456                                                  ; fully-qualified     # 👖 E0.6 jeans
1F9E3                                                  ; fully-qualified     # 🧣 E5.0 scarf
1F9E4                                                  ; fully-qualified     # 🧤 E5.0 gloves
1F9E5                                                  ; fully-qualified     # 🧥 E5.0 coat
1F9E6                                                  ; fully-qualified     # 🧦 E5.0 socks
1F457                                                  ; fully-qualified     # 👗 E0.6 dress
1F458                                                  ; fully-qualified     # 👘 E0.6 kimono
1F97B                                                  ; fully-qualified     # 🥻 E12.0 sari
1FA71                                                  ; fully-qualified     # 🩱 E12.0 one-piece swimsuit
1FA72                                                  ; fully-qualified     # 🩲 E12.0 briefs
1FA73                                                  ; fully-qualified     # 🩳 E12.0 shorts
1F459                                                  ; fully-qualified     # 👙 E0.6 bikini
1F45A                                                  ; fully-qualified     # 👚 E0.6 woman’s clothes
1FAAD                                                  ; fully-qualified     # 🪭 E15.0 folding hand fan
1F45B                                                  ; fully-qualified     # 👛 E0.6 purse
1F45C                                                  ; fully-qualified     # 👜 E0.6 handbag
1F45D                                                  ; fully-qualified     # 👝 E0.6 clutch bag
1F6CD FE0F                                             ; fully-qualified     # 🛍️ E0.7 shopping bags
1F6CD                                                  ; unqualified         # 🛍 E0.7 shopping bags
1F392                                                  ; fully-qualified     # 🎒 E0.6 backpack
1FA74                                                  ; fully-qualified     # 🩴 E13.0 thong sandal
1F45E                                                  ; fully-qualified     # 👞 E0.6 man’s shoe
1F45F                                                  ; fully-qualified     # 👟 E0.6 running shoe
1F97E                                                  ; fully-qualified     # 🥾 E11.0 hiking boot
1F97F                                                  ; fully-qualified     # 🥿 E11.0 flat shoe
1F460                                                  ; fully-qualified     # 👠 E0.6 high-heeled shoe
1F461                                                  ; fully-qualified     # 👡 E0.6 woman’s sandal
1FA70                                                  ; fully-qualified     # 🩰 E12.0 ballet shoes
1F462                                                  ; fully-qualified     # 👢 E0.6 woman’s boot
1FAAE                                                  ; fully-qualified     # 🪮 E15.0 hair pick
1F451                                                  ; fully-qualified     # 👑 E0.6 crown
1F452                                                  ; fully-qualified     # 👒 E0.6 woman’s hat
1F3A9                                                  ; fully-qualified     # 🎩 E0.6 top hat
1F393                                                  ; fully-qualified     # 🎓 E0.6 graduation cap
1F9E2                                                  ; fully-qualified     # 🧢 E5.0 billed cap
1FA96                                                  ; fully-qualified     # 🪖 E13.0 military helmet
26D1 FE0F                                              ; fully-qualified     # ⛑️ E0.7 rescue worker’s helmet
26D1                                                   ; unqualified         # ⛑ E0.7 rescue worker’s helmet
1F4FF                                                  ; fully-qualified     # 📿 E1.0 prayer beads
1F484                                                  ; fully-qualified     # 💄 E0.6 lipstick
1F48D                                                  ; fully-qualified     # 💍 E0.6 ring
1F48E                                                  ; fully-qualified     # 💎 E0.6 gem stone

`,OE=`
1F507                                                  ; fully-qualified     # 🔇 E1.0 muted speaker
1F508                                                  ; fully-qualified     # 🔈 E0.7 speaker low volume
1F509                                                  ; fully-qualified     # 🔉 E1.0 speaker medium volume
1F50A                                                  ; fully-qualified     # 🔊 E0.6 speaker high volume
1F4E2                                                  ; fully-qualified     # 📢 E0.6 loudspeaker
1F4E3                                                  ; fully-qualified     # 📣 E0.6 megaphone
1F4EF                                                  ; fully-qualified     # 📯 E1.0 postal horn
1F514                                                  ; fully-qualified     # 🔔 E0.6 bell
1F515                                                  ; fully-qualified     # 🔕 E1.0 bell with slash

`,RE=`
1F3BC                                                  ; fully-qualified     # 🎼 E0.6 musical score
1F3B5                                                  ; fully-qualified     # 🎵 E0.6 musical note
1F3B6                                                  ; fully-qualified     # 🎶 E0.6 musical notes
1F399 FE0F                                             ; fully-qualified     # 🎙️ E0.7 studio microphone
1F399                                                  ; unqualified         # 🎙 E0.7 studio microphone
1F39A FE0F                                             ; fully-qualified     # 🎚️ E0.7 level slider
1F39A                                                  ; unqualified         # 🎚 E0.7 level slider
1F39B FE0F                                             ; fully-qualified     # 🎛️ E0.7 control knobs
1F39B                                                  ; unqualified         # 🎛 E0.7 control knobs
1F3A4                                                  ; fully-qualified     # 🎤 E0.6 microphone
1F3A7                                                  ; fully-qualified     # 🎧 E0.6 headphone
1F4FB                                                  ; fully-qualified     # 📻 E0.6 radio

`,bE=`
1F3B7                                                  ; fully-qualified     # 🎷 E0.6 saxophone
1FA97                                                  ; fully-qualified     # 🪗 E13.0 accordion
1F3B8                                                  ; fully-qualified     # 🎸 E0.6 guitar
1F3B9                                                  ; fully-qualified     # 🎹 E0.6 musical keyboard
1F3BA                                                  ; fully-qualified     # 🎺 E0.6 trumpet
1F3BB                                                  ; fully-qualified     # 🎻 E0.6 violin
1FA95                                                  ; fully-qualified     # 🪕 E12.0 banjo
1F941                                                  ; fully-qualified     # 🥁 E3.0 drum
1FA98                                                  ; fully-qualified     # 🪘 E13.0 long drum
1FA87                                                  ; fully-qualified     # 🪇 E15.0 maracas
1FA88                                                  ; fully-qualified     # 🪈 E15.0 flute

`,jE=`
1F4F1                                                  ; fully-qualified     # 📱 E0.6 mobile phone
1F4F2                                                  ; fully-qualified     # 📲 E0.6 mobile phone with arrow
260E FE0F                                              ; fully-qualified     # ☎️ E0.6 telephone
260E                                                   ; unqualified         # ☎ E0.6 telephone
1F4DE                                                  ; fully-qualified     # 📞 E0.6 telephone receiver
1F4DF                                                  ; fully-qualified     # 📟 E0.6 pager
1F4E0                                                  ; fully-qualified     # 📠 E0.6 fax machine

`,LE=`
1F50B                                                  ; fully-qualified     # 🔋 E0.6 battery
1FAAB                                                  ; fully-qualified     # 🪫 E14.0 low battery
1F50C                                                  ; fully-qualified     # 🔌 E0.6 electric plug
1F4BB                                                  ; fully-qualified     # 💻 E0.6 laptop
1F5A5 FE0F                                             ; fully-qualified     # 🖥️ E0.7 desktop computer
1F5A5                                                  ; unqualified         # 🖥 E0.7 desktop computer
1F5A8 FE0F                                             ; fully-qualified     # 🖨️ E0.7 printer
1F5A8                                                  ; unqualified         # 🖨 E0.7 printer
2328 FE0F                                              ; fully-qualified     # ⌨️ E1.0 keyboard
2328                                                   ; unqualified         # ⌨ E1.0 keyboard
1F5B1 FE0F                                             ; fully-qualified     # 🖱️ E0.7 computer mouse
1F5B1                                                  ; unqualified         # 🖱 E0.7 computer mouse
1F5B2 FE0F                                             ; fully-qualified     # 🖲️ E0.7 trackball
1F5B2                                                  ; unqualified         # 🖲 E0.7 trackball
1F4BD                                                  ; fully-qualified     # 💽 E0.6 computer disk
1F4BE                                                  ; fully-qualified     # 💾 E0.6 floppy disk
1F4BF                                                  ; fully-qualified     # 💿 E0.6 optical disk
1F4C0                                                  ; fully-qualified     # 📀 E0.6 dvd
1F9EE                                                  ; fully-qualified     # 🧮 E11.0 abacus

`,$E=`
1F3A5                                                  ; fully-qualified     # 🎥 E0.6 movie camera
1F39E FE0F                                             ; fully-qualified     # 🎞️ E0.7 film frames
1F39E                                                  ; unqualified         # 🎞 E0.7 film frames
1F4FD FE0F                                             ; fully-qualified     # 📽️ E0.7 film projector
1F4FD                                                  ; unqualified         # 📽 E0.7 film projector
1F3AC                                                  ; fully-qualified     # 🎬 E0.6 clapper board
1F4FA                                                  ; fully-qualified     # 📺 E0.6 television
1F4F7                                                  ; fully-qualified     # 📷 E0.6 camera
1F4F8                                                  ; fully-qualified     # 📸 E1.0 camera with flash
1F4F9                                                  ; fully-qualified     # 📹 E0.6 video camera
1F4FC                                                  ; fully-qualified     # 📼 E0.6 videocassette
1F50D                                                  ; fully-qualified     # 🔍 E0.6 magnifying glass tilted left
1F50E                                                  ; fully-qualified     # 🔎 E0.6 magnifying glass tilted right
1F56F FE0F                                             ; fully-qualified     # 🕯️ E0.7 candle
1F56F                                                  ; unqualified         # 🕯 E0.7 candle
1F4A1                                                  ; fully-qualified     # 💡 E0.6 light bulb
1F526                                                  ; fully-qualified     # 🔦 E0.6 flashlight
1F3EE                                                  ; fully-qualified     # 🏮 E0.6 red paper lantern
1FA94                                                  ; fully-qualified     # 🪔 E12.0 diya lamp

`,IE=`
1F4D4                                                  ; fully-qualified     # 📔 E0.6 notebook with decorative cover
1F4D5                                                  ; fully-qualified     # 📕 E0.6 closed book
1F4D6                                                  ; fully-qualified     # 📖 E0.6 open book
1F4D7                                                  ; fully-qualified     # 📗 E0.6 green book
1F4D8                                                  ; fully-qualified     # 📘 E0.6 blue book
1F4D9                                                  ; fully-qualified     # 📙 E0.6 orange book
1F4DA                                                  ; fully-qualified     # 📚 E0.6 books
1F4D3                                                  ; fully-qualified     # 📓 E0.6 notebook
1F4D2                                                  ; fully-qualified     # 📒 E0.6 ledger
1F4C3                                                  ; fully-qualified     # 📃 E0.6 page with curl
1F4DC                                                  ; fully-qualified     # 📜 E0.6 scroll
1F4C4                                                  ; fully-qualified     # 📄 E0.6 page facing up
1F4F0                                                  ; fully-qualified     # 📰 E0.6 newspaper
1F5DE FE0F                                             ; fully-qualified     # 🗞️ E0.7 rolled-up newspaper
1F5DE                                                  ; unqualified         # 🗞 E0.7 rolled-up newspaper
1F4D1                                                  ; fully-qualified     # 📑 E0.6 bookmark tabs
1F516                                                  ; fully-qualified     # 🔖 E0.6 bookmark
1F3F7 FE0F                                             ; fully-qualified     # 🏷️ E0.7 label
1F3F7                                                  ; unqualified         # 🏷 E0.7 label

`,ME=`
1F4B0                                                  ; fully-qualified     # 💰 E0.6 money bag
1FA99                                                  ; fully-qualified     # 🪙 E13.0 coin
1F4B4                                                  ; fully-qualified     # 💴 E0.6 yen banknote
1F4B5                                                  ; fully-qualified     # 💵 E0.6 dollar banknote
1F4B6                                                  ; fully-qualified     # 💶 E1.0 euro banknote
1F4B7                                                  ; fully-qualified     # 💷 E1.0 pound banknote
1F4B8                                                  ; fully-qualified     # 💸 E0.6 money with wings
1F4B3                                                  ; fully-qualified     # 💳 E0.6 credit card
1F9FE                                                  ; fully-qualified     # 🧾 E11.0 receipt
1F4B9                                                  ; fully-qualified     # 💹 E0.6 chart increasing with yen

`,UE=`
2709 FE0F                                              ; fully-qualified     # ✉️ E0.6 envelope
2709                                                   ; unqualified         # ✉ E0.6 envelope
1F4E7                                                  ; fully-qualified     # 📧 E0.6 e-mail
1F4E8                                                  ; fully-qualified     # 📨 E0.6 incoming envelope
1F4E9                                                  ; fully-qualified     # 📩 E0.6 envelope with arrow
1F4E4                                                  ; fully-qualified     # 📤 E0.6 outbox tray
1F4E5                                                  ; fully-qualified     # 📥 E0.6 inbox tray
1F4E6                                                  ; fully-qualified     # 📦 E0.6 package
1F4EB                                                  ; fully-qualified     # 📫 E0.6 closed mailbox with raised flag
1F4EA                                                  ; fully-qualified     # 📪 E0.6 closed mailbox with lowered flag
1F4EC                                                  ; fully-qualified     # 📬 E0.7 open mailbox with raised flag
1F4ED                                                  ; fully-qualified     # 📭 E0.7 open mailbox with lowered flag
1F4EE                                                  ; fully-qualified     # 📮 E0.6 postbox
1F5F3 FE0F                                             ; fully-qualified     # 🗳️ E0.7 ballot box with ballot
1F5F3                                                  ; unqualified         # 🗳 E0.7 ballot box with ballot

`,VE=`
270F FE0F                                              ; fully-qualified     # ✏️ E0.6 pencil
270F                                                   ; unqualified         # ✏ E0.6 pencil
2712 FE0F                                              ; fully-qualified     # ✒️ E0.6 black nib
2712                                                   ; unqualified         # ✒ E0.6 black nib
1F58B FE0F                                             ; fully-qualified     # 🖋️ E0.7 fountain pen
1F58B                                                  ; unqualified         # 🖋 E0.7 fountain pen
1F58A FE0F                                             ; fully-qualified     # 🖊️ E0.7 pen
1F58A                                                  ; unqualified         # 🖊 E0.7 pen
1F58C FE0F                                             ; fully-qualified     # 🖌️ E0.7 paintbrush
1F58C                                                  ; unqualified         # 🖌 E0.7 paintbrush
1F58D FE0F                                             ; fully-qualified     # 🖍️ E0.7 crayon
1F58D                                                  ; unqualified         # 🖍 E0.7 crayon
1F4DD                                                  ; fully-qualified     # 📝 E0.6 memo

`,HE=`
1F4BC                                                  ; fully-qualified     # 💼 E0.6 briefcase
1F4C1                                                  ; fully-qualified     # 📁 E0.6 file folder
1F4C2                                                  ; fully-qualified     # 📂 E0.6 open file folder
1F5C2 FE0F                                             ; fully-qualified     # 🗂️ E0.7 card index dividers
1F5C2                                                  ; unqualified         # 🗂 E0.7 card index dividers
1F4C5                                                  ; fully-qualified     # 📅 E0.6 calendar
1F4C6                                                  ; fully-qualified     # 📆 E0.6 tear-off calendar
1F5D2 FE0F                                             ; fully-qualified     # 🗒️ E0.7 spiral notepad
1F5D2                                                  ; unqualified         # 🗒 E0.7 spiral notepad
1F5D3 FE0F                                             ; fully-qualified     # 🗓️ E0.7 spiral calendar
1F5D3                                                  ; unqualified         # 🗓 E0.7 spiral calendar
1F4C7                                                  ; fully-qualified     # 📇 E0.6 card index
1F4C8                                                  ; fully-qualified     # 📈 E0.6 chart increasing
1F4C9                                                  ; fully-qualified     # 📉 E0.6 chart decreasing
1F4CA                                                  ; fully-qualified     # 📊 E0.6 bar chart
1F4CB                                                  ; fully-qualified     # 📋 E0.6 clipboard
1F4CC                                                  ; fully-qualified     # 📌 E0.6 pushpin
1F4CD                                                  ; fully-qualified     # 📍 E0.6 round pushpin
1F4CE                                                  ; fully-qualified     # 📎 E0.6 paperclip
1F587 FE0F                                             ; fully-qualified     # 🖇️ E0.7 linked paperclips
1F587                                                  ; unqualified         # 🖇 E0.7 linked paperclips
1F4CF                                                  ; fully-qualified     # 📏 E0.6 straight ruler
1F4D0                                                  ; fully-qualified     # 📐 E0.6 triangular ruler
2702 FE0F                                              ; fully-qualified     # ✂️ E0.6 scissors
2702                                                   ; unqualified         # ✂ E0.6 scissors
1F5C3 FE0F                                             ; fully-qualified     # 🗃️ E0.7 card file box
1F5C3                                                  ; unqualified         # 🗃 E0.7 card file box
1F5C4 FE0F                                             ; fully-qualified     # 🗄️ E0.7 file cabinet
1F5C4                                                  ; unqualified         # 🗄 E0.7 file cabinet
1F5D1 FE0F                                             ; fully-qualified     # 🗑️ E0.7 wastebasket
1F5D1                                                  ; unqualified         # 🗑 E0.7 wastebasket

`,WE=`
1F512                                                  ; fully-qualified     # 🔒 E0.6 locked
1F513                                                  ; fully-qualified     # 🔓 E0.6 unlocked
1F50F                                                  ; fully-qualified     # 🔏 E0.6 locked with pen
1F510                                                  ; fully-qualified     # 🔐 E0.6 locked with key
1F511                                                  ; fully-qualified     # 🔑 E0.6 key
1F5DD FE0F                                             ; fully-qualified     # 🗝️ E0.7 old key
1F5DD                                                  ; unqualified         # 🗝 E0.7 old key

`,QE=`
1F528                                                  ; fully-qualified     # 🔨 E0.6 hammer
1FA93                                                  ; fully-qualified     # 🪓 E12.0 axe
26CF FE0F                                              ; fully-qualified     # ⛏️ E0.7 pick
26CF                                                   ; unqualified         # ⛏ E0.7 pick
2692 FE0F                                              ; fully-qualified     # ⚒️ E1.0 hammer and pick
2692                                                   ; unqualified         # ⚒ E1.0 hammer and pick
1F6E0 FE0F                                             ; fully-qualified     # 🛠️ E0.7 hammer and wrench
1F6E0                                                  ; unqualified         # 🛠 E0.7 hammer and wrench
1F5E1 FE0F                                             ; fully-qualified     # 🗡️ E0.7 dagger
1F5E1                                                  ; unqualified         # 🗡 E0.7 dagger
2694 FE0F                                              ; fully-qualified     # ⚔️ E1.0 crossed swords
2694                                                   ; unqualified         # ⚔ E1.0 crossed swords
1F4A3                                                  ; fully-qualified     # 💣 E0.6 bomb
1FA83                                                  ; fully-qualified     # 🪃 E13.0 boomerang
1F3F9                                                  ; fully-qualified     # 🏹 E1.0 bow and arrow
1F6E1 FE0F                                             ; fully-qualified     # 🛡️ E0.7 shield
1F6E1                                                  ; unqualified         # 🛡 E0.7 shield
1FA9A                                                  ; fully-qualified     # 🪚 E13.0 carpentry saw
1F527                                                  ; fully-qualified     # 🔧 E0.6 wrench
1FA9B                                                  ; fully-qualified     # 🪛 E13.0 screwdriver
1F529                                                  ; fully-qualified     # 🔩 E0.6 nut and bolt
2699 FE0F                                              ; fully-qualified     # ⚙️ E1.0 gear
2699                                                   ; unqualified         # ⚙ E1.0 gear
1F5DC FE0F                                             ; fully-qualified     # 🗜️ E0.7 clamp
1F5DC                                                  ; unqualified         # 🗜 E0.7 clamp
2696 FE0F                                              ; fully-qualified     # ⚖️ E1.0 balance scale
2696                                                   ; unqualified         # ⚖ E1.0 balance scale
1F9AF                                                  ; fully-qualified     # 🦯 E12.0 white cane
1F517                                                  ; fully-qualified     # 🔗 E0.6 link
26D3 FE0F                                              ; fully-qualified     # ⛓️ E0.7 chains
26D3                                                   ; unqualified         # ⛓ E0.7 chains
1FA9D                                                  ; fully-qualified     # 🪝 E13.0 hook
1F9F0                                                  ; fully-qualified     # 🧰 E11.0 toolbox
1F9F2                                                  ; fully-qualified     # 🧲 E11.0 magnet
1FA9C                                                  ; fully-qualified     # 🪜 E13.0 ladder

`,GE=`
2697 FE0F                                              ; fully-qualified     # ⚗️ E1.0 alembic
2697                                                   ; unqualified         # ⚗ E1.0 alembic
1F9EA                                                  ; fully-qualified     # 🧪 E11.0 test tube
1F9EB                                                  ; fully-qualified     # 🧫 E11.0 petri dish
1F9EC                                                  ; fully-qualified     # 🧬 E11.0 dna
1F52C                                                  ; fully-qualified     # 🔬 E1.0 microscope
1F52D                                                  ; fully-qualified     # 🔭 E1.0 telescope
1F4E1                                                  ; fully-qualified     # 📡 E0.6 satellite antenna

`,KE=`
1F489                                                  ; fully-qualified     # 💉 E0.6 syringe
1FA78                                                  ; fully-qualified     # 🩸 E12.0 drop of blood
1F48A                                                  ; fully-qualified     # 💊 E0.6 pill
1FA79                                                  ; fully-qualified     # 🩹 E12.0 adhesive bandage
1FA7C                                                  ; fully-qualified     # 🩼 E14.0 crutch
1FA7A                                                  ; fully-qualified     # 🩺 E12.0 stethoscope
1FA7B                                                  ; fully-qualified     # 🩻 E14.0 x-ray

`,YE=`
1F6AA                                                  ; fully-qualified     # 🚪 E0.6 door
1F6D7                                                  ; fully-qualified     # 🛗 E13.0 elevator
1FA9E                                                  ; fully-qualified     # 🪞 E13.0 mirror
1FA9F                                                  ; fully-qualified     # 🪟 E13.0 window
1F6CF FE0F                                             ; fully-qualified     # 🛏️ E0.7 bed
1F6CF                                                  ; unqualified         # 🛏 E0.7 bed
1F6CB FE0F                                             ; fully-qualified     # 🛋️ E0.7 couch and lamp
1F6CB                                                  ; unqualified         # 🛋 E0.7 couch and lamp
1FA91                                                  ; fully-qualified     # 🪑 E12.0 chair
1F6BD                                                  ; fully-qualified     # 🚽 E0.6 toilet
1FAA0                                                  ; fully-qualified     # 🪠 E13.0 plunger
1F6BF                                                  ; fully-qualified     # 🚿 E1.0 shower
1F6C1                                                  ; fully-qualified     # 🛁 E1.0 bathtub
1FAA4                                                  ; fully-qualified     # 🪤 E13.0 mouse trap
1FA92                                                  ; fully-qualified     # 🪒 E12.0 razor
1F9F4                                                  ; fully-qualified     # 🧴 E11.0 lotion bottle
1F9F7                                                  ; fully-qualified     # 🧷 E11.0 safety pin
1F9F9                                                  ; fully-qualified     # 🧹 E11.0 broom
1F9FA                                                  ; fully-qualified     # 🧺 E11.0 basket
1F9FB                                                  ; fully-qualified     # 🧻 E11.0 roll of paper
1FAA3                                                  ; fully-qualified     # 🪣 E13.0 bucket
1F9FC                                                  ; fully-qualified     # 🧼 E11.0 soap
1FAE7                                                  ; fully-qualified     # 🫧 E14.0 bubbles
1FAA5                                                  ; fully-qualified     # 🪥 E13.0 toothbrush
1F9FD                                                  ; fully-qualified     # 🧽 E11.0 sponge
1F9EF                                                  ; fully-qualified     # 🧯 E11.0 fire extinguisher
1F6D2                                                  ; fully-qualified     # 🛒 E3.0 shopping cart

`,XE=`
1F6AC                                                  ; fully-qualified     # 🚬 E0.6 cigarette
26B0 FE0F                                              ; fully-qualified     # ⚰️ E1.0 coffin
26B0                                                   ; unqualified         # ⚰ E1.0 coffin
1FAA6                                                  ; fully-qualified     # 🪦 E13.0 headstone
26B1 FE0F                                              ; fully-qualified     # ⚱️ E1.0 funeral urn
26B1                                                   ; unqualified         # ⚱ E1.0 funeral urn
1F9FF                                                  ; fully-qualified     # 🧿 E11.0 nazar amulet
1FAAC                                                  ; fully-qualified     # 🪬 E14.0 hamsa
1F5FF                                                  ; fully-qualified     # 🗿 E0.6 moai
1FAA7                                                  ; fully-qualified     # 🪧 E13.0 placard
1FAAA                                                  ; fully-qualified     # 🪪 E14.0 identification card`,JE=Object.freeze(Object.defineProperty({__proto__:null,bookPaper:IE,clothing:TE,computer:LE,household:YE,lightVideo:$E,lock:WE,mail:UE,medical:KE,money:ME,music:RE,musicalInstrument:bE,office:HE,otherObject:XE,phone:jE,science:GE,sound:OE,tool:QE,writing:VE},Symbol.toStringTag,{value:"Module"})),ZE=`
1F3E7                                                  ; fully-qualified     # 🏧 E0.6 ATM sign
1F6AE                                                  ; fully-qualified     # 🚮 E1.0 litter in bin sign
1F6B0                                                  ; fully-qualified     # 🚰 E1.0 potable water
267F                                                   ; fully-qualified     # ♿ E0.6 wheelchair symbol
1F6B9                                                  ; fully-qualified     # 🚹 E0.6 men’s room
1F6BA                                                  ; fully-qualified     # 🚺 E0.6 women’s room
1F6BB                                                  ; fully-qualified     # 🚻 E0.6 restroom
1F6BC                                                  ; fully-qualified     # 🚼 E0.6 baby symbol
1F6BE                                                  ; fully-qualified     # 🚾 E0.6 water closet
1F6C2                                                  ; fully-qualified     # 🛂 E1.0 passport control
1F6C3                                                  ; fully-qualified     # 🛃 E1.0 customs
1F6C4                                                  ; fully-qualified     # 🛄 E1.0 baggage claim
1F6C5                                                  ; fully-qualified     # 🛅 E1.0 left luggage

`,ep=`
26A0 FE0F                                              ; fully-qualified     # ⚠️ E0.6 warning
26A0                                                   ; unqualified         # ⚠ E0.6 warning
1F6B8                                                  ; fully-qualified     # 🚸 E1.0 children crossing
26D4                                                   ; fully-qualified     # ⛔ E0.6 no entry
1F6AB                                                  ; fully-qualified     # 🚫 E0.6 prohibited
1F6B3                                                  ; fully-qualified     # 🚳 E1.0 no bicycles
1F6AD                                                  ; fully-qualified     # 🚭 E0.6 no smoking
1F6AF                                                  ; fully-qualified     # 🚯 E1.0 no littering
1F6B1                                                  ; fully-qualified     # 🚱 E1.0 non-potable water
1F6B7                                                  ; fully-qualified     # 🚷 E1.0 no pedestrians
1F4F5                                                  ; fully-qualified     # 📵 E1.0 no mobile phones
1F51E                                                  ; fully-qualified     # 🔞 E0.6 no one under eighteen
2622 FE0F                                              ; fully-qualified     # ☢️ E1.0 radioactive
2622                                                   ; unqualified         # ☢ E1.0 radioactive
2623 FE0F                                              ; fully-qualified     # ☣️ E1.0 biohazard
2623                                                   ; unqualified         # ☣ E1.0 biohazard

`,lp=`
2B06 FE0F                                              ; fully-qualified     # ⬆️ E0.6 up arrow
2B06                                                   ; unqualified         # ⬆ E0.6 up arrow
2197 FE0F                                              ; fully-qualified     # ↗️ E0.6 up-right arrow
2197                                                   ; unqualified         # ↗ E0.6 up-right arrow
27A1 FE0F                                              ; fully-qualified     # ➡️ E0.6 right arrow
27A1                                                   ; unqualified         # ➡ E0.6 right arrow
2198 FE0F                                              ; fully-qualified     # ↘️ E0.6 down-right arrow
2198                                                   ; unqualified         # ↘ E0.6 down-right arrow
2B07 FE0F                                              ; fully-qualified     # ⬇️ E0.6 down arrow
2B07                                                   ; unqualified         # ⬇ E0.6 down arrow
2199 FE0F                                              ; fully-qualified     # ↙️ E0.6 down-left arrow
2199                                                   ; unqualified         # ↙ E0.6 down-left arrow
2B05 FE0F                                              ; fully-qualified     # ⬅️ E0.6 left arrow
2B05                                                   ; unqualified         # ⬅ E0.6 left arrow
2196 FE0F                                              ; fully-qualified     # ↖️ E0.6 up-left arrow
2196                                                   ; unqualified         # ↖ E0.6 up-left arrow
2195 FE0F                                              ; fully-qualified     # ↕️ E0.6 up-down arrow
2195                                                   ; unqualified         # ↕ E0.6 up-down arrow
2194 FE0F                                              ; fully-qualified     # ↔️ E0.6 left-right arrow
2194                                                   ; unqualified         # ↔ E0.6 left-right arrow
21A9 FE0F                                              ; fully-qualified     # ↩️ E0.6 right arrow curving left
21A9                                                   ; unqualified         # ↩ E0.6 right arrow curving left
21AA FE0F                                              ; fully-qualified     # ↪️ E0.6 left arrow curving right
21AA                                                   ; unqualified         # ↪ E0.6 left arrow curving right
2934 FE0F                                              ; fully-qualified     # ⤴️ E0.6 right arrow curving up
2934                                                   ; unqualified         # ⤴ E0.6 right arrow curving up
2935 FE0F                                              ; fully-qualified     # ⤵️ E0.6 right arrow curving down
2935                                                   ; unqualified         # ⤵ E0.6 right arrow curving down
1F503                                                  ; fully-qualified     # 🔃 E0.6 clockwise vertical arrows
1F504                                                  ; fully-qualified     # 🔄 E1.0 counterclockwise arrows button
1F519                                                  ; fully-qualified     # 🔙 E0.6 BACK arrow
1F51A                                                  ; fully-qualified     # 🔚 E0.6 END arrow
1F51B                                                  ; fully-qualified     # 🔛 E0.6 ON! arrow
1F51C                                                  ; fully-qualified     # 🔜 E0.6 SOON arrow
1F51D                                                  ; fully-qualified     # 🔝 E0.6 TOP arrow

`,ip=`
1F6D0                                                  ; fully-qualified     # 🛐 E1.0 place of worship
269B FE0F                                              ; fully-qualified     # ⚛️ E1.0 atom symbol
269B                                                   ; unqualified         # ⚛ E1.0 atom symbol
1F549 FE0F                                             ; fully-qualified     # 🕉️ E0.7 om
1F549                                                  ; unqualified         # 🕉 E0.7 om
2721 FE0F                                              ; fully-qualified     # ✡️ E0.7 star of David
2721                                                   ; unqualified         # ✡ E0.7 star of David
2638 FE0F                                              ; fully-qualified     # ☸️ E0.7 wheel of dharma
2638                                                   ; unqualified         # ☸ E0.7 wheel of dharma
262F FE0F                                              ; fully-qualified     # ☯️ E0.7 yin yang
262F                                                   ; unqualified         # ☯ E0.7 yin yang
271D FE0F                                              ; fully-qualified     # ✝️ E0.7 latin cross
271D                                                   ; unqualified         # ✝ E0.7 latin cross
2626 FE0F                                              ; fully-qualified     # ☦️ E1.0 orthodox cross
2626                                                   ; unqualified         # ☦ E1.0 orthodox cross
262A FE0F                                              ; fully-qualified     # ☪️ E0.7 star and crescent
262A                                                   ; unqualified         # ☪ E0.7 star and crescent
262E FE0F                                              ; fully-qualified     # ☮️ E1.0 peace symbol
262E                                                   ; unqualified         # ☮ E1.0 peace symbol
1F54E                                                  ; fully-qualified     # 🕎 E1.0 menorah
1F52F                                                  ; fully-qualified     # 🔯 E0.6 dotted six-pointed star
1FAAF                                                  ; fully-qualified     # 🪯 E15.0 khanda

`,np=`
2648                                                   ; fully-qualified     # ♈ E0.6 Aries
2649                                                   ; fully-qualified     # ♉ E0.6 Taurus
264A                                                   ; fully-qualified     # ♊ E0.6 Gemini
264B                                                   ; fully-qualified     # ♋ E0.6 Cancer
264C                                                   ; fully-qualified     # ♌ E0.6 Leo
264D                                                   ; fully-qualified     # ♍ E0.6 Virgo
264E                                                   ; fully-qualified     # ♎ E0.6 Libra
264F                                                   ; fully-qualified     # ♏ E0.6 Scorpio
2650                                                   ; fully-qualified     # ♐ E0.6 Sagittarius
2651                                                   ; fully-qualified     # ♑ E0.6 Capricorn
2652                                                   ; fully-qualified     # ♒ E0.6 Aquarius
2653                                                   ; fully-qualified     # ♓ E0.6 Pisces
26CE                                                   ; fully-qualified     # ⛎ E0.6 Ophiuchus

`,tp=`
1F500                                                  ; fully-qualified     # 🔀 E1.0 shuffle tracks button
1F501                                                  ; fully-qualified     # 🔁 E1.0 repeat button
1F502                                                  ; fully-qualified     # 🔂 E1.0 repeat single button
25B6 FE0F                                              ; fully-qualified     # ▶️ E0.6 play button
25B6                                                   ; unqualified         # ▶ E0.6 play button
23E9                                                   ; fully-qualified     # ⏩ E0.6 fast-forward button
23ED FE0F                                              ; fully-qualified     # ⏭️ E0.7 next track button
23ED                                                   ; unqualified         # ⏭ E0.7 next track button
23EF FE0F                                              ; fully-qualified     # ⏯️ E1.0 play or pause button
23EF                                                   ; unqualified         # ⏯ E1.0 play or pause button
25C0 FE0F                                              ; fully-qualified     # ◀️ E0.6 reverse button
25C0                                                   ; unqualified         # ◀ E0.6 reverse button
23EA                                                   ; fully-qualified     # ⏪ E0.6 fast reverse button
23EE FE0F                                              ; fully-qualified     # ⏮️ E0.7 last track button
23EE                                                   ; unqualified         # ⏮ E0.7 last track button
1F53C                                                  ; fully-qualified     # 🔼 E0.6 upwards button
23EB                                                   ; fully-qualified     # ⏫ E0.6 fast up button
1F53D                                                  ; fully-qualified     # 🔽 E0.6 downwards button
23EC                                                   ; fully-qualified     # ⏬ E0.6 fast down button
23F8 FE0F                                              ; fully-qualified     # ⏸️ E0.7 pause button
23F8                                                   ; unqualified         # ⏸ E0.7 pause button
23F9 FE0F                                              ; fully-qualified     # ⏹️ E0.7 stop button
23F9                                                   ; unqualified         # ⏹ E0.7 stop button
23FA FE0F                                              ; fully-qualified     # ⏺️ E0.7 record button
23FA                                                   ; unqualified         # ⏺ E0.7 record button
23CF FE0F                                              ; fully-qualified     # ⏏️ E1.0 eject button
23CF                                                   ; unqualified         # ⏏ E1.0 eject button
1F3A6                                                  ; fully-qualified     # 🎦 E0.6 cinema
1F505                                                  ; fully-qualified     # 🔅 E1.0 dim button
1F506                                                  ; fully-qualified     # 🔆 E1.0 bright button
1F4F6                                                  ; fully-qualified     # 📶 E0.6 antenna bars
1F6DC                                                  ; fully-qualified     # 🛜 E15.0 wireless
1F4F3                                                  ; fully-qualified     # 📳 E0.6 vibration mode
1F4F4                                                  ; fully-qualified     # 📴 E0.6 mobile phone off

`,up=`
2640 FE0F                                              ; fully-qualified     # ♀️ E4.0 female sign
2640                                                   ; unqualified         # ♀ E4.0 female sign
2642 FE0F                                              ; fully-qualified     # ♂️ E4.0 male sign
2642                                                   ; unqualified         # ♂ E4.0 male sign
26A7 FE0F                                              ; fully-qualified     # ⚧️ E13.0 transgender symbol
26A7                                                   ; unqualified         # ⚧ E13.0 transgender symbol

`,rp=`
2716 FE0F                                              ; fully-qualified     # ✖️ E0.6 multiply
2716                                                   ; unqualified         # ✖ E0.6 multiply
2795                                                   ; fully-qualified     # ➕ E0.6 plus
2796                                                   ; fully-qualified     # ➖ E0.6 minus
2797                                                   ; fully-qualified     # ➗ E0.6 divide
1F7F0                                                  ; fully-qualified     # 🟰 E14.0 heavy equals sign
267E FE0F                                              ; fully-qualified     # ♾️ E11.0 infinity
267E                                                   ; unqualified         # ♾ E11.0 infinity

`,ap=`
203C FE0F                                              ; fully-qualified     # ‼️ E0.6 double exclamation mark
203C                                                   ; unqualified         # ‼ E0.6 double exclamation mark
2049 FE0F                                              ; fully-qualified     # ⁉️ E0.6 exclamation question mark
2049                                                   ; unqualified         # ⁉ E0.6 exclamation question mark
2753                                                   ; fully-qualified     # ❓ E0.6 red question mark
2754                                                   ; fully-qualified     # ❔ E0.6 white question mark
2755                                                   ; fully-qualified     # ❕ E0.6 white exclamation mark
2757                                                   ; fully-qualified     # ❗ E0.6 red exclamation mark
3030 FE0F                                              ; fully-qualified     # 〰️ E0.6 wavy dash
3030                                                   ; unqualified         # 〰 E0.6 wavy dash

`,op=`
1F4B1                                                  ; fully-qualified     # 💱 E0.6 currency exchange
1F4B2                                                  ; fully-qualified     # 💲 E0.6 heavy dollar sign

`,fp=`
2695 FE0F                                              ; fully-qualified     # ⚕️ E4.0 medical symbol
2695                                                   ; unqualified         # ⚕ E4.0 medical symbol
267B FE0F                                              ; fully-qualified     # ♻️ E0.6 recycling symbol
267B                                                   ; unqualified         # ♻ E0.6 recycling symbol
269C FE0F                                              ; fully-qualified     # ⚜️ E1.0 fleur-de-lis
269C                                                   ; unqualified         # ⚜ E1.0 fleur-de-lis
1F531                                                  ; fully-qualified     # 🔱 E0.6 trident emblem
1F4DB                                                  ; fully-qualified     # 📛 E0.6 name badge
1F530                                                  ; fully-qualified     # 🔰 E0.6 Japanese symbol for beginner
2B55                                                   ; fully-qualified     # ⭕ E0.6 hollow red circle
2705                                                   ; fully-qualified     # ✅ E0.6 check mark button
2611 FE0F                                              ; fully-qualified     # ☑️ E0.6 check box with check
2611                                                   ; unqualified         # ☑ E0.6 check box with check
2714 FE0F                                              ; fully-qualified     # ✔️ E0.6 check mark
2714                                                   ; unqualified         # ✔ E0.6 check mark
274C                                                   ; fully-qualified     # ❌ E0.6 cross mark
274E                                                   ; fully-qualified     # ❎ E0.6 cross mark button
27B0                                                   ; fully-qualified     # ➰ E0.6 curly loop
27BF                                                   ; fully-qualified     # ➿ E1.0 double curly loop
303D FE0F                                              ; fully-qualified     # 〽️ E0.6 part alternation mark
303D                                                   ; unqualified         # 〽 E0.6 part alternation mark
2733 FE0F                                              ; fully-qualified     # ✳️ E0.6 eight-spoked asterisk
2733                                                   ; unqualified         # ✳ E0.6 eight-spoked asterisk
2734 FE0F                                              ; fully-qualified     # ✴️ E0.6 eight-pointed star
2734                                                   ; unqualified         # ✴ E0.6 eight-pointed star
2747 FE0F                                              ; fully-qualified     # ❇️ E0.6 sparkle
2747                                                   ; unqualified         # ❇ E0.6 sparkle
00A9 FE0F                                              ; fully-qualified     # ©️ E0.6 copyright
00A9                                                   ; unqualified         # © E0.6 copyright
00AE FE0F                                              ; fully-qualified     # ®️ E0.6 registered
00AE                                                   ; unqualified         # ® E0.6 registered
2122 FE0F                                              ; fully-qualified     # ™️ E0.6 trade mark
2122                                                   ; unqualified         # ™ E0.6 trade mark

`,sp=`
0023 FE0F 20E3                                         ; fully-qualified     # #️⃣ E0.6 keycap: #
0023 20E3                                              ; unqualified         # #⃣ E0.6 keycap: #
002A FE0F 20E3                                         ; fully-qualified     # *️⃣ E2.0 keycap: *
002A 20E3                                              ; unqualified         # *⃣ E2.0 keycap: *
0030 FE0F 20E3                                         ; fully-qualified     # 0️⃣ E0.6 keycap: 0
0030 20E3                                              ; unqualified         # 0⃣ E0.6 keycap: 0
0031 FE0F 20E3                                         ; fully-qualified     # 1️⃣ E0.6 keycap: 1
0031 20E3                                              ; unqualified         # 1⃣ E0.6 keycap: 1
0032 FE0F 20E3                                         ; fully-qualified     # 2️⃣ E0.6 keycap: 2
0032 20E3                                              ; unqualified         # 2⃣ E0.6 keycap: 2
0033 FE0F 20E3                                         ; fully-qualified     # 3️⃣ E0.6 keycap: 3
0033 20E3                                              ; unqualified         # 3⃣ E0.6 keycap: 3
0034 FE0F 20E3                                         ; fully-qualified     # 4️⃣ E0.6 keycap: 4
0034 20E3                                              ; unqualified         # 4⃣ E0.6 keycap: 4
0035 FE0F 20E3                                         ; fully-qualified     # 5️⃣ E0.6 keycap: 5
0035 20E3                                              ; unqualified         # 5⃣ E0.6 keycap: 5
0036 FE0F 20E3                                         ; fully-qualified     # 6️⃣ E0.6 keycap: 6
0036 20E3                                              ; unqualified         # 6⃣ E0.6 keycap: 6
0037 FE0F 20E3                                         ; fully-qualified     # 7️⃣ E0.6 keycap: 7
0037 20E3                                              ; unqualified         # 7⃣ E0.6 keycap: 7
0038 FE0F 20E3                                         ; fully-qualified     # 8️⃣ E0.6 keycap: 8
0038 20E3                                              ; unqualified         # 8⃣ E0.6 keycap: 8
0039 FE0F 20E3                                         ; fully-qualified     # 9️⃣ E0.6 keycap: 9
0039 20E3                                              ; unqualified         # 9⃣ E0.6 keycap: 9
1F51F                                                  ; fully-qualified     # 🔟 E0.6 keycap: 10

`,dp=`
1F520                                                  ; fully-qualified     # 🔠 E0.6 input latin uppercase
1F521                                                  ; fully-qualified     # 🔡 E0.6 input latin lowercase
1F522                                                  ; fully-qualified     # 🔢 E0.6 input numbers
1F523                                                  ; fully-qualified     # 🔣 E0.6 input symbols
1F524                                                  ; fully-qualified     # 🔤 E0.6 input latin letters
1F170 FE0F                                             ; fully-qualified     # 🅰️ E0.6 A button (blood type)
1F170                                                  ; unqualified         # 🅰 E0.6 A button (blood type)
1F18E                                                  ; fully-qualified     # 🆎 E0.6 AB button (blood type)
1F171 FE0F                                             ; fully-qualified     # 🅱️ E0.6 B button (blood type)
1F171                                                  ; unqualified         # 🅱 E0.6 B button (blood type)
1F191                                                  ; fully-qualified     # 🆑 E0.6 CL button
1F192                                                  ; fully-qualified     # 🆒 E0.6 COOL button
1F193                                                  ; fully-qualified     # 🆓 E0.6 FREE button
2139 FE0F                                              ; fully-qualified     # ℹ️ E0.6 information
2139                                                   ; unqualified         # ℹ E0.6 information
1F194                                                  ; fully-qualified     # 🆔 E0.6 ID button
24C2 FE0F                                              ; fully-qualified     # Ⓜ️ E0.6 circled M
24C2                                                   ; unqualified         # Ⓜ E0.6 circled M
1F195                                                  ; fully-qualified     # 🆕 E0.6 NEW button
1F196                                                  ; fully-qualified     # 🆖 E0.6 NG button
1F17E FE0F                                             ; fully-qualified     # 🅾️ E0.6 O button (blood type)
1F17E                                                  ; unqualified         # 🅾 E0.6 O button (blood type)
1F197                                                  ; fully-qualified     # 🆗 E0.6 OK button
1F17F FE0F                                             ; fully-qualified     # 🅿️ E0.6 P button
1F17F                                                  ; unqualified         # 🅿 E0.6 P button
1F198                                                  ; fully-qualified     # 🆘 E0.6 SOS button
1F199                                                  ; fully-qualified     # 🆙 E0.6 UP! button
1F19A                                                  ; fully-qualified     # 🆚 E0.6 VS button
1F201                                                  ; fully-qualified     # 🈁 E0.6 Japanese “here” button
1F202 FE0F                                             ; fully-qualified     # 🈂️ E0.6 Japanese “service charge” button
1F202                                                  ; unqualified         # 🈂 E0.6 Japanese “service charge” button
1F237 FE0F                                             ; fully-qualified     # 🈷️ E0.6 Japanese “monthly amount” button
1F237                                                  ; unqualified         # 🈷 E0.6 Japanese “monthly amount” button
1F236                                                  ; fully-qualified     # 🈶 E0.6 Japanese “not free of charge” button
1F22F                                                  ; fully-qualified     # 🈯 E0.6 Japanese “reserved” button
1F250                                                  ; fully-qualified     # 🉐 E0.6 Japanese “bargain” button
1F239                                                  ; fully-qualified     # 🈹 E0.6 Japanese “discount” button
1F21A                                                  ; fully-qualified     # 🈚 E0.6 Japanese “free of charge” button
1F232                                                  ; fully-qualified     # 🈲 E0.6 Japanese “prohibited” button
1F251                                                  ; fully-qualified     # 🉑 E0.6 Japanese “acceptable” button
1F238                                                  ; fully-qualified     # 🈸 E0.6 Japanese “application” button
1F234                                                  ; fully-qualified     # 🈴 E0.6 Japanese “passing grade” button
1F233                                                  ; fully-qualified     # 🈳 E0.6 Japanese “vacancy” button
3297 FE0F                                              ; fully-qualified     # ㊗️ E0.6 Japanese “congratulations” button
3297                                                   ; unqualified         # ㊗ E0.6 Japanese “congratulations” button
3299 FE0F                                              ; fully-qualified     # ㊙️ E0.6 Japanese “secret” button
3299                                                   ; unqualified         # ㊙ E0.6 Japanese “secret” button
1F23A                                                  ; fully-qualified     # 🈺 E0.6 Japanese “open for business” button
1F235                                                  ; fully-qualified     # 🈵 E0.6 Japanese “no vacancy” button

`,cp=`
1F534                                                  ; fully-qualified     # 🔴 E0.6 red circle
1F7E0                                                  ; fully-qualified     # 🟠 E12.0 orange circle
1F7E1                                                  ; fully-qualified     # 🟡 E12.0 yellow circle
1F7E2                                                  ; fully-qualified     # 🟢 E12.0 green circle
1F535                                                  ; fully-qualified     # 🔵 E0.6 blue circle
1F7E3                                                  ; fully-qualified     # 🟣 E12.0 purple circle
1F7E4                                                  ; fully-qualified     # 🟤 E12.0 brown circle
26AB                                                   ; fully-qualified     # ⚫ E0.6 black circle
26AA                                                   ; fully-qualified     # ⚪ E0.6 white circle
1F7E5                                                  ; fully-qualified     # 🟥 E12.0 red square
1F7E7                                                  ; fully-qualified     # 🟧 E12.0 orange square
1F7E8                                                  ; fully-qualified     # 🟨 E12.0 yellow square
1F7E9                                                  ; fully-qualified     # 🟩 E12.0 green square
1F7E6                                                  ; fully-qualified     # 🟦 E12.0 blue square
1F7EA                                                  ; fully-qualified     # 🟪 E12.0 purple square
1F7EB                                                  ; fully-qualified     # 🟫 E12.0 brown square
2B1B                                                   ; fully-qualified     # ⬛ E0.6 black large square
2B1C                                                   ; fully-qualified     # ⬜ E0.6 white large square
25FC FE0F                                              ; fully-qualified     # ◼️ E0.6 black medium square
25FC                                                   ; unqualified         # ◼ E0.6 black medium square
25FB FE0F                                              ; fully-qualified     # ◻️ E0.6 white medium square
25FB                                                   ; unqualified         # ◻ E0.6 white medium square
25FE                                                   ; fully-qualified     # ◾ E0.6 black medium-small square
25FD                                                   ; fully-qualified     # ◽ E0.6 white medium-small square
25AA FE0F                                              ; fully-qualified     # ▪️ E0.6 black small square
25AA                                                   ; unqualified         # ▪ E0.6 black small square
25AB FE0F                                              ; fully-qualified     # ▫️ E0.6 white small square
25AB                                                   ; unqualified         # ▫ E0.6 white small square
1F536                                                  ; fully-qualified     # 🔶 E0.6 large orange diamond
1F537                                                  ; fully-qualified     # 🔷 E0.6 large blue diamond
1F538                                                  ; fully-qualified     # 🔸 E0.6 small orange diamond
1F539                                                  ; fully-qualified     # 🔹 E0.6 small blue diamond
1F53A                                                  ; fully-qualified     # 🔺 E0.6 red triangle pointed up
1F53B                                                  ; fully-qualified     # 🔻 E0.6 red triangle pointed down
1F4A0                                                  ; fully-qualified     # 💠 E0.6 diamond with a dot
1F518                                                  ; fully-qualified     # 🔘 E0.6 radio button
1F533                                                  ; fully-qualified     # 🔳 E0.6 white square button
1F532                                                  ; fully-qualified     # 🔲 E0.6 black square button`,Od=Object.freeze(Object.defineProperty({__proto__:null,alphanum:dp,arrow:lp,avSymbol:tp,currency:op,gender:up,geometric:cp,keycap:sp,math:rp,otherSymbol:fp,punctuation:ap,religion:ip,transportSign:ZE,warning:ep,zodiac:np},Symbol.toStringTag,{value:"Module"})),yp=`
1F3C1                                                  ; fully-qualified     # 🏁 E0.6 chequered flag
1F6A9                                                  ; fully-qualified     # 🚩 E0.6 triangular flag
1F38C                                                  ; fully-qualified     # 🎌 E0.6 crossed flags
1F3F4                                                  ; fully-qualified     # 🏴 E1.0 black flag
1F3F3 FE0F                                             ; fully-qualified     # 🏳️ E0.7 white flag
1F3F3                                                  ; unqualified         # 🏳 E0.7 white flag
1F3F3 FE0F 200D 1F308                                  ; fully-qualified     # 🏳️‍🌈 E4.0 rainbow flag
1F3F3 200D 1F308                                       ; unqualified         # 🏳‍🌈 E4.0 rainbow flag
1F3F3 FE0F 200D 26A7 FE0F                              ; fully-qualified     # 🏳️‍⚧️ E13.0 transgender flag
1F3F3 200D 26A7 FE0F                                   ; unqualified         # 🏳‍⚧️ E13.0 transgender flag
1F3F3 FE0F 200D 26A7                                   ; minimally-qualified # 🏳️‍⚧ E13.0 transgender flag
1F3F3 200D 26A7                                        ; unqualified         # 🏳‍⚧ E13.0 transgender flag
1F3F4 200D 2620 FE0F                                   ; fully-qualified     # 🏴‍☠️ E11.0 pirate flag
1F3F4 200D 2620                                        ; minimally-qualified # 🏴‍☠ E11.0 pirate flag
`,Ep=Object.freeze(Object.defineProperty({__proto__:null,flag:yp},Symbol.toStringTag,{value:"Module"}));console.log(Od);const pp=pl(Oy).concat(pl(Xy)).concat(pl(rE)).concat(pl(pE)).concat(pl(AE)).concat(pl(zE)).concat(pl(JE)).concat(pl(Od)).concat(pl(Ep));function Fp(){return Ie.jsx("div",{className:"App",children:pp.map((e,l)=>Ie.jsx(my,{groupName:e.groupName,emojis:e.emojis,copy:p1},l))})}function mp(e){return e.trim().split(/\n/g).map(l=>{const i=l.split(/[;#]\s/)[2].trim(),n=/([^\s]+)\s([^\s]+)\s(.*)/.exec(i);return{emoji:n[1],name:n[3]}})}function pl(e){return Object.keys(e).map(l=>({groupName:l,emojis:mp(e[l])}))}Hu.createRoot(document.getElementById("root")).render(Ie.jsx(Nn.StrictMode,{children:Ie.jsx(Fp,{})}));
