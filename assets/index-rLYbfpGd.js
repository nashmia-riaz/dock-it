var _E=Object.defineProperty;var yE=(t,e,n)=>e in t?_E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Uh=(t,e,n)=>yE(t,typeof e!="symbol"?e+"":e,n);function wE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Hg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var $g={exports:{}},fl={},Gg={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ro=Symbol.for("react.element"),EE=Symbol.for("react.portal"),CE=Symbol.for("react.fragment"),SE=Symbol.for("react.strict_mode"),IE=Symbol.for("react.profiler"),kE=Symbol.for("react.provider"),TE=Symbol.for("react.context"),NE=Symbol.for("react.forward_ref"),PE=Symbol.for("react.suspense"),xE=Symbol.for("react.memo"),RE=Symbol.for("react.lazy"),jh=Symbol.iterator;function bE(t){return t===null||typeof t!="object"?null:(t=jh&&t[jh]||t["@@iterator"],typeof t=="function"?t:null)}var Kg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yg=Object.assign,qg={};function xi(t,e,n){this.props=t,this.context=e,this.refs=qg,this.updater=n||Kg}xi.prototype.isReactComponent={};xi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Qg(){}Qg.prototype=xi.prototype;function Pd(t,e,n){this.props=t,this.context=e,this.refs=qg,this.updater=n||Kg}var xd=Pd.prototype=new Qg;xd.constructor=Pd;Yg(xd,xi.prototype);xd.isPureReactComponent=!0;var zh=Array.isArray,Xg=Object.prototype.hasOwnProperty,Rd={current:null},Jg={key:!0,ref:!0,__self:!0,__source:!0};function Zg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Xg.call(e,r)&&!Jg.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ro,type:t,key:s,ref:o,props:i,_owner:Rd.current}}function OE(t,e){return{$$typeof:ro,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ro}function AE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wh=/\/+/g;function Jl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?AE(""+t.key):e.toString(36)}function qo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ro:case EE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Jl(o,0):r,zh(i)?(n="",t!=null&&(n=t.replace(Wh,"$&/")+"/"),qo(i,e,n,"",function(u){return u})):i!=null&&(bd(i)&&(i=OE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Wh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",zh(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Jl(s,a);o+=qo(s,e,n,l,i)}else if(l=bE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Jl(s,a++),o+=qo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function No(t,e,n){if(t==null)return t;var r=[],i=0;return qo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function LE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Me={current:null},Qo={transition:null},DE={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:Qo,ReactCurrentOwner:Rd};function ev(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:No,forEach:function(t,e,n){No(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return No(t,function(){e++}),e},toArray:function(t){return No(t,function(e){return e})||[]},only:function(t){if(!bd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};V.Component=xi;V.Fragment=CE;V.Profiler=IE;V.PureComponent=Pd;V.StrictMode=SE;V.Suspense=PE;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=DE;V.act=ev;V.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Yg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Rd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Xg.call(e,l)&&!Jg.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ro,type:t.type,key:i,ref:s,props:r,_owner:o}};V.createContext=function(t){return t={$$typeof:TE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:kE,_context:t},t.Consumer=t};V.createElement=Zg;V.createFactory=function(t){var e=Zg.bind(null,t);return e.type=t,e};V.createRef=function(){return{current:null}};V.forwardRef=function(t){return{$$typeof:NE,render:t}};V.isValidElement=bd;V.lazy=function(t){return{$$typeof:RE,_payload:{_status:-1,_result:t},_init:LE}};V.memo=function(t,e){return{$$typeof:xE,type:t,compare:e===void 0?null:e}};V.startTransition=function(t){var e=Qo.transition;Qo.transition={};try{t()}finally{Qo.transition=e}};V.unstable_act=ev;V.useCallback=function(t,e){return Me.current.useCallback(t,e)};V.useContext=function(t){return Me.current.useContext(t)};V.useDebugValue=function(){};V.useDeferredValue=function(t){return Me.current.useDeferredValue(t)};V.useEffect=function(t,e){return Me.current.useEffect(t,e)};V.useId=function(){return Me.current.useId()};V.useImperativeHandle=function(t,e,n){return Me.current.useImperativeHandle(t,e,n)};V.useInsertionEffect=function(t,e){return Me.current.useInsertionEffect(t,e)};V.useLayoutEffect=function(t,e){return Me.current.useLayoutEffect(t,e)};V.useMemo=function(t,e){return Me.current.useMemo(t,e)};V.useReducer=function(t,e,n){return Me.current.useReducer(t,e,n)};V.useRef=function(t){return Me.current.useRef(t)};V.useState=function(t){return Me.current.useState(t)};V.useSyncExternalStore=function(t,e,n){return Me.current.useSyncExternalStore(t,e,n)};V.useTransition=function(){return Me.current.useTransition()};V.version="18.3.1";Gg.exports=V;var T=Gg.exports;const io=Hg(T),ME=wE({__proto__:null,default:io},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FE=T,UE=Symbol.for("react.element"),jE=Symbol.for("react.fragment"),zE=Object.prototype.hasOwnProperty,WE=FE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,BE={key:!0,ref:!0,__self:!0,__source:!0};function tv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)zE.call(e,r)&&!BE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:UE,type:t,key:s,ref:o,props:i,_owner:WE.current}}fl.Fragment=jE;fl.jsx=tv;fl.jsxs=tv;$g.exports=fl;var w=$g.exports,Gu={},nv={exports:{}},tt={},rv={exports:{}},iv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,F){var U=O.length;O.push(F);e:for(;0<U;){var de=U-1>>>1,_e=O[de];if(0<i(_e,F))O[de]=F,O[U]=_e,U=de;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var F=O[0],U=O.pop();if(U!==F){O[0]=U;e:for(var de=0,_e=O.length,ko=_e>>>1;de<ko;){var er=2*(de+1)-1,Xl=O[er],tr=er+1,To=O[tr];if(0>i(Xl,U))tr<_e&&0>i(To,Xl)?(O[de]=To,O[tr]=U,de=tr):(O[de]=Xl,O[er]=U,de=er);else if(tr<_e&&0>i(To,U))O[de]=To,O[tr]=U,de=tr;else break e}}return F}function i(O,F){var U=O.sortIndex-F.sortIndex;return U!==0?U:O.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,c=null,f=3,g=!1,v=!1,_=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(O){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=O)r(u),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(u)}}function y(O){if(_=!1,m(O),!v)if(n(l)!==null)v=!0,Mt(k);else{var F=n(u);F!==null&&Ql(y,F.startTime-O)}}function k(O,F){v=!1,_&&(_=!1,p(S),S=-1),g=!0;var U=f;try{for(m(F),c=n(l);c!==null&&(!(c.expirationTime>F)||O&&!L());){var de=c.callback;if(typeof de=="function"){c.callback=null,f=c.priorityLevel;var _e=de(c.expirationTime<=F);F=t.unstable_now(),typeof _e=="function"?c.callback=_e:c===n(l)&&r(l),m(F)}else r(l);c=n(l)}if(c!==null)var ko=!0;else{var er=n(u);er!==null&&Ql(y,er.startTime-F),ko=!1}return ko}finally{c=null,f=U,g=!1}}var R=!1,x=null,S=-1,C=5,P=-1;function L(){return!(t.unstable_now()-P<C)}function H(){if(x!==null){var O=t.unstable_now();P=O;var F=!0;try{F=x(!0,O)}finally{F?J():(R=!1,x=null)}}else R=!1}var J;if(typeof h=="function")J=function(){h(H)};else if(typeof MessageChannel<"u"){var Zn=new MessageChannel,je=Zn.port2;Zn.port1.onmessage=H,J=function(){je.postMessage(null)}}else J=function(){E(H,0)};function Mt(O){x=O,R||(R=!0,J())}function Ql(O,F){S=E(function(){O(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,Mt(k))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(f){case 1:case 2:case 3:var F=3;break;default:F=f}var U=f;f=F;try{return O()}finally{f=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,F){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var U=f;f=O;try{return F()}finally{f=U}},t.unstable_scheduleCallback=function(O,F,U){var de=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?de+U:de):U=de,O){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=U+_e,O={id:d++,callback:F,priorityLevel:O,startTime:U,expirationTime:_e,sortIndex:-1},U>de?(O.sortIndex=U,e(u,O),n(l)===null&&O===n(u)&&(_?(p(S),S=-1):_=!0,Ql(y,U-de))):(O.sortIndex=_e,e(l,O),v||g||(v=!0,Mt(k))),O},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(O){var F=f;return function(){var U=f;f=F;try{return O.apply(this,arguments)}finally{f=U}}}})(iv);rv.exports=iv;var VE=rv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HE=T,et=VE;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sv=new Set,ks={};function Ar(t,e){gi(t,e),gi(t+"Capture",e)}function gi(t,e){for(ks[t]=e,t=0;t<e.length;t++)sv.add(e[t])}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ku=Object.prototype.hasOwnProperty,$E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bh={},Vh={};function GE(t){return Ku.call(Vh,t)?!0:Ku.call(Bh,t)?!1:$E.test(t)?Vh[t]=!0:(Bh[t]=!0,!1)}function KE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function YE(t,e,n,r){if(e===null||typeof e>"u"||KE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Fe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ne[t]=new Fe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ne[e]=new Fe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ne[t]=new Fe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ne[t]=new Fe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ne[t]=new Fe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ne[t]=new Fe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ne[t]=new Fe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ne[t]=new Fe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ne[t]=new Fe(t,5,!1,t.toLowerCase(),null,!1,!1)});var Od=/[\-:]([a-z])/g;function Ad(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Od,Ad);Ne[e]=new Fe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Od,Ad);Ne[e]=new Fe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Od,Ad);Ne[e]=new Fe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ne[t]=new Fe(t,1,!1,t.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ne[t]=new Fe(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ld(t,e,n,r){var i=Ne.hasOwnProperty(e)?Ne[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(YE(e,n,i,r)&&(n=null),r||i===null?GE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var sn=HE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Po=Symbol.for("react.element"),Wr=Symbol.for("react.portal"),Br=Symbol.for("react.fragment"),Dd=Symbol.for("react.strict_mode"),Yu=Symbol.for("react.profiler"),ov=Symbol.for("react.provider"),av=Symbol.for("react.context"),Md=Symbol.for("react.forward_ref"),qu=Symbol.for("react.suspense"),Qu=Symbol.for("react.suspense_list"),Fd=Symbol.for("react.memo"),dn=Symbol.for("react.lazy"),lv=Symbol.for("react.offscreen"),Hh=Symbol.iterator;function Bi(t){return t===null||typeof t!="object"?null:(t=Hh&&t[Hh]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Object.assign,Zl;function es(t){if(Zl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zl=e&&e[1]||""}return`
`+Zl+t}var eu=!1;function tu(t,e){if(!t||eu)return"";eu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{eu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?es(t):""}function qE(t){switch(t.tag){case 5:return es(t.type);case 16:return es("Lazy");case 13:return es("Suspense");case 19:return es("SuspenseList");case 0:case 2:case 15:return t=tu(t.type,!1),t;case 11:return t=tu(t.type.render,!1),t;case 1:return t=tu(t.type,!0),t;default:return""}}function Xu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Br:return"Fragment";case Wr:return"Portal";case Yu:return"Profiler";case Dd:return"StrictMode";case qu:return"Suspense";case Qu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case av:return(t.displayName||"Context")+".Consumer";case ov:return(t._context.displayName||"Context")+".Provider";case Md:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Fd:return e=t.displayName||null,e!==null?e:Xu(t.type)||"Memo";case dn:e=t._payload,t=t._init;try{return Xu(t(e))}catch{}}return null}function QE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xu(e);case 8:return e===Dd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Un(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function uv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function XE(t){var e=uv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function xo(t){t._valueTracker||(t._valueTracker=XE(t))}function cv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=uv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ma(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ju(t,e){var n=e.checked;return ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $h(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Un(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function dv(t,e){e=e.checked,e!=null&&Ld(t,"checked",e,!1)}function Zu(t,e){dv(t,e);var n=Un(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ec(t,e.type,n):e.hasOwnProperty("defaultValue")&&ec(t,e.type,Un(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Gh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ec(t,e,n){(e!=="number"||ma(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ts=Array.isArray;function ri(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Un(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function tc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Kh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(ts(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Un(n)}}function fv(t,e){var n=Un(e.value),r=Un(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Yh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ro,pv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ro=Ro||document.createElement("div"),Ro.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ro.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ts(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ls={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},JE=["Webkit","ms","Moz","O"];Object.keys(ls).forEach(function(t){JE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ls[e]=ls[t]})});function mv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ls.hasOwnProperty(t)&&ls[t]?(""+e).trim():e+"px"}function gv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=mv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ZE=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rc(t,e){if(e){if(ZE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function ic(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sc=null;function Ud(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var oc=null,ii=null,si=null;function qh(t){if(t=ao(t)){if(typeof oc!="function")throw Error(I(280));var e=t.stateNode;e&&(e=vl(e),oc(t.stateNode,t.type,e))}}function vv(t){ii?si?si.push(t):si=[t]:ii=t}function _v(){if(ii){var t=ii,e=si;if(si=ii=null,qh(t),e)for(t=0;t<e.length;t++)qh(e[t])}}function yv(t,e){return t(e)}function wv(){}var nu=!1;function Ev(t,e,n){if(nu)return t(e,n);nu=!0;try{return yv(t,e,n)}finally{nu=!1,(ii!==null||si!==null)&&(wv(),_v())}}function Ns(t,e){var n=t.stateNode;if(n===null)return null;var r=vl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var ac=!1;if(qt)try{var Vi={};Object.defineProperty(Vi,"passive",{get:function(){ac=!0}}),window.addEventListener("test",Vi,Vi),window.removeEventListener("test",Vi,Vi)}catch{ac=!1}function e1(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var us=!1,ga=null,va=!1,lc=null,t1={onError:function(t){us=!0,ga=t}};function n1(t,e,n,r,i,s,o,a,l){us=!1,ga=null,e1.apply(t1,arguments)}function r1(t,e,n,r,i,s,o,a,l){if(n1.apply(this,arguments),us){if(us){var u=ga;us=!1,ga=null}else throw Error(I(198));va||(va=!0,lc=u)}}function Lr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Cv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Qh(t){if(Lr(t)!==t)throw Error(I(188))}function i1(t){var e=t.alternate;if(!e){if(e=Lr(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Qh(i),t;if(s===r)return Qh(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function Sv(t){return t=i1(t),t!==null?Iv(t):null}function Iv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Iv(t);if(e!==null)return e;t=t.sibling}return null}var kv=et.unstable_scheduleCallback,Xh=et.unstable_cancelCallback,s1=et.unstable_shouldYield,o1=et.unstable_requestPaint,fe=et.unstable_now,a1=et.unstable_getCurrentPriorityLevel,jd=et.unstable_ImmediatePriority,Tv=et.unstable_UserBlockingPriority,_a=et.unstable_NormalPriority,l1=et.unstable_LowPriority,Nv=et.unstable_IdlePriority,hl=null,Rt=null;function u1(t){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(hl,t,void 0,(t.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:f1,c1=Math.log,d1=Math.LN2;function f1(t){return t>>>=0,t===0?32:31-(c1(t)/d1|0)|0}var bo=64,Oo=4194304;function ns(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ya(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ns(a):(s&=o,s!==0&&(r=ns(s)))}else o=n&~i,o!==0?r=ns(o):s!==0&&(r=ns(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-_t(e),i=1<<n,r|=t[n],e&=~i;return r}function h1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function p1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-_t(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=h1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function uc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Pv(){var t=bo;return bo<<=1,!(bo&4194240)&&(bo=64),t}function ru(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function so(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-_t(e),t[e]=n}function m1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-_t(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function zd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-_t(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var K=0;function xv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Rv,Wd,bv,Ov,Av,cc=!1,Ao=[],In=null,kn=null,Tn=null,Ps=new Map,xs=new Map,hn=[],g1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jh(t,e){switch(t){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":Tn=null;break;case"pointerover":case"pointerout":Ps.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xs.delete(e.pointerId)}}function Hi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ao(e),e!==null&&Wd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function v1(t,e,n,r,i){switch(e){case"focusin":return In=Hi(In,t,e,n,r,i),!0;case"dragenter":return kn=Hi(kn,t,e,n,r,i),!0;case"mouseover":return Tn=Hi(Tn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ps.set(s,Hi(Ps.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,xs.set(s,Hi(xs.get(s)||null,t,e,n,r,i)),!0}return!1}function Lv(t){var e=ar(t.target);if(e!==null){var n=Lr(e);if(n!==null){if(e=n.tag,e===13){if(e=Cv(n),e!==null){t.blockedOn=e,Av(t.priority,function(){bv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=dc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);sc=r,n.target.dispatchEvent(r),sc=null}else return e=ao(n),e!==null&&Wd(e),t.blockedOn=n,!1;e.shift()}return!0}function Zh(t,e,n){Xo(t)&&n.delete(e)}function _1(){cc=!1,In!==null&&Xo(In)&&(In=null),kn!==null&&Xo(kn)&&(kn=null),Tn!==null&&Xo(Tn)&&(Tn=null),Ps.forEach(Zh),xs.forEach(Zh)}function $i(t,e){t.blockedOn===e&&(t.blockedOn=null,cc||(cc=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,_1)))}function Rs(t){function e(i){return $i(i,t)}if(0<Ao.length){$i(Ao[0],t);for(var n=1;n<Ao.length;n++){var r=Ao[n];r.blockedOn===t&&(r.blockedOn=null)}}for(In!==null&&$i(In,t),kn!==null&&$i(kn,t),Tn!==null&&$i(Tn,t),Ps.forEach(e),xs.forEach(e),n=0;n<hn.length;n++)r=hn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<hn.length&&(n=hn[0],n.blockedOn===null);)Lv(n),n.blockedOn===null&&hn.shift()}var oi=sn.ReactCurrentBatchConfig,wa=!0;function y1(t,e,n,r){var i=K,s=oi.transition;oi.transition=null;try{K=1,Bd(t,e,n,r)}finally{K=i,oi.transition=s}}function w1(t,e,n,r){var i=K,s=oi.transition;oi.transition=null;try{K=4,Bd(t,e,n,r)}finally{K=i,oi.transition=s}}function Bd(t,e,n,r){if(wa){var i=dc(t,e,n,r);if(i===null)hu(t,e,r,Ea,n),Jh(t,r);else if(v1(i,t,e,n,r))r.stopPropagation();else if(Jh(t,r),e&4&&-1<g1.indexOf(t)){for(;i!==null;){var s=ao(i);if(s!==null&&Rv(s),s=dc(t,e,n,r),s===null&&hu(t,e,r,Ea,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else hu(t,e,r,null,n)}}var Ea=null;function dc(t,e,n,r){if(Ea=null,t=Ud(r),t=ar(t),t!==null)if(e=Lr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Cv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ea=t,null}function Dv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(a1()){case jd:return 1;case Tv:return 4;case _a:case l1:return 16;case Nv:return 536870912;default:return 16}default:return 16}}var yn=null,Vd=null,Jo=null;function Mv(){if(Jo)return Jo;var t,e=Vd,n=e.length,r,i="value"in yn?yn.value:yn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Jo=i.slice(t,1<r?1-r:void 0)}function Zo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Lo(){return!0}function ep(){return!1}function nt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Lo:ep,this.isPropagationStopped=ep,this}return ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Lo)},persist:function(){},isPersistent:Lo}),e}var Ri={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hd=nt(Ri),oo=ue({},Ri,{view:0,detail:0}),E1=nt(oo),iu,su,Gi,pl=ue({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$d,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Gi&&(Gi&&t.type==="mousemove"?(iu=t.screenX-Gi.screenX,su=t.screenY-Gi.screenY):su=iu=0,Gi=t),iu)},movementY:function(t){return"movementY"in t?t.movementY:su}}),tp=nt(pl),C1=ue({},pl,{dataTransfer:0}),S1=nt(C1),I1=ue({},oo,{relatedTarget:0}),ou=nt(I1),k1=ue({},Ri,{animationName:0,elapsedTime:0,pseudoElement:0}),T1=nt(k1),N1=ue({},Ri,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),P1=nt(N1),x1=ue({},Ri,{data:0}),np=nt(x1),R1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},b1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},O1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function A1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=O1[t])?!!e[t]:!1}function $d(){return A1}var L1=ue({},oo,{key:function(t){if(t.key){var e=R1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?b1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$d,charCode:function(t){return t.type==="keypress"?Zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),D1=nt(L1),M1=ue({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rp=nt(M1),F1=ue({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$d}),U1=nt(F1),j1=ue({},Ri,{propertyName:0,elapsedTime:0,pseudoElement:0}),z1=nt(j1),W1=ue({},pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),B1=nt(W1),V1=[9,13,27,32],Gd=qt&&"CompositionEvent"in window,cs=null;qt&&"documentMode"in document&&(cs=document.documentMode);var H1=qt&&"TextEvent"in window&&!cs,Fv=qt&&(!Gd||cs&&8<cs&&11>=cs),ip=" ",sp=!1;function Uv(t,e){switch(t){case"keyup":return V1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vr=!1;function $1(t,e){switch(t){case"compositionend":return jv(e);case"keypress":return e.which!==32?null:(sp=!0,ip);case"textInput":return t=e.data,t===ip&&sp?null:t;default:return null}}function G1(t,e){if(Vr)return t==="compositionend"||!Gd&&Uv(t,e)?(t=Mv(),Jo=Vd=yn=null,Vr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Fv&&e.locale!=="ko"?null:e.data;default:return null}}var K1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function op(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!K1[t.type]:e==="textarea"}function zv(t,e,n,r){vv(r),e=Ca(e,"onChange"),0<e.length&&(n=new Hd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ds=null,bs=null;function Y1(t){Xv(t,0)}function ml(t){var e=Gr(t);if(cv(e))return t}function q1(t,e){if(t==="change")return e}var Wv=!1;if(qt){var au;if(qt){var lu="oninput"in document;if(!lu){var ap=document.createElement("div");ap.setAttribute("oninput","return;"),lu=typeof ap.oninput=="function"}au=lu}else au=!1;Wv=au&&(!document.documentMode||9<document.documentMode)}function lp(){ds&&(ds.detachEvent("onpropertychange",Bv),bs=ds=null)}function Bv(t){if(t.propertyName==="value"&&ml(bs)){var e=[];zv(e,bs,t,Ud(t)),Ev(Y1,e)}}function Q1(t,e,n){t==="focusin"?(lp(),ds=e,bs=n,ds.attachEvent("onpropertychange",Bv)):t==="focusout"&&lp()}function X1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ml(bs)}function J1(t,e){if(t==="click")return ml(e)}function Z1(t,e){if(t==="input"||t==="change")return ml(e)}function eC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Et=typeof Object.is=="function"?Object.is:eC;function Os(t,e){if(Et(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ku.call(e,i)||!Et(t[i],e[i]))return!1}return!0}function up(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cp(t,e){var n=up(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=up(n)}}function Vv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Vv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Hv(){for(var t=window,e=ma();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ma(t.document)}return e}function Kd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function tC(t){var e=Hv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Vv(n.ownerDocument.documentElement,n)){if(r!==null&&Kd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=cp(n,s);var o=cp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var nC=qt&&"documentMode"in document&&11>=document.documentMode,Hr=null,fc=null,fs=null,hc=!1;function dp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hc||Hr==null||Hr!==ma(r)||(r=Hr,"selectionStart"in r&&Kd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fs&&Os(fs,r)||(fs=r,r=Ca(fc,"onSelect"),0<r.length&&(e=new Hd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Hr)))}function Do(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $r={animationend:Do("Animation","AnimationEnd"),animationiteration:Do("Animation","AnimationIteration"),animationstart:Do("Animation","AnimationStart"),transitionend:Do("Transition","TransitionEnd")},uu={},$v={};qt&&($v=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function gl(t){if(uu[t])return uu[t];if(!$r[t])return t;var e=$r[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $v)return uu[t]=e[n];return t}var Gv=gl("animationend"),Kv=gl("animationiteration"),Yv=gl("animationstart"),qv=gl("transitionend"),Qv=new Map,fp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(t,e){Qv.set(t,e),Ar(e,[t])}for(var cu=0;cu<fp.length;cu++){var du=fp[cu],rC=du.toLowerCase(),iC=du[0].toUpperCase()+du.slice(1);Kn(rC,"on"+iC)}Kn(Gv,"onAnimationEnd");Kn(Kv,"onAnimationIteration");Kn(Yv,"onAnimationStart");Kn("dblclick","onDoubleClick");Kn("focusin","onFocus");Kn("focusout","onBlur");Kn(qv,"onTransitionEnd");gi("onMouseEnter",["mouseout","mouseover"]);gi("onMouseLeave",["mouseout","mouseover"]);gi("onPointerEnter",["pointerout","pointerover"]);gi("onPointerLeave",["pointerout","pointerover"]);Ar("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ar("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ar("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ar("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ar("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ar("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sC=new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));function hp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,r1(r,e,void 0,t),t.currentTarget=null}function Xv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;hp(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;hp(i,a,u),s=l}}}if(va)throw t=lc,va=!1,lc=null,t}function Z(t,e){var n=e[_c];n===void 0&&(n=e[_c]=new Set);var r=t+"__bubble";n.has(r)||(Jv(e,t,2,!1),n.add(r))}function fu(t,e,n){var r=0;e&&(r|=4),Jv(n,t,r,e)}var Mo="_reactListening"+Math.random().toString(36).slice(2);function As(t){if(!t[Mo]){t[Mo]=!0,sv.forEach(function(n){n!=="selectionchange"&&(sC.has(n)||fu(n,!1,t),fu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Mo]||(e[Mo]=!0,fu("selectionchange",!1,e))}}function Jv(t,e,n,r){switch(Dv(e)){case 1:var i=y1;break;case 4:i=w1;break;default:i=Bd}n=i.bind(null,e,n,t),i=void 0,!ac||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function hu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ar(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Ev(function(){var u=s,d=Ud(n),c=[];e:{var f=Qv.get(t);if(f!==void 0){var g=Hd,v=t;switch(t){case"keypress":if(Zo(n)===0)break e;case"keydown":case"keyup":g=D1;break;case"focusin":v="focus",g=ou;break;case"focusout":v="blur",g=ou;break;case"beforeblur":case"afterblur":g=ou;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=S1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=U1;break;case Gv:case Kv:case Yv:g=T1;break;case qv:g=z1;break;case"scroll":g=E1;break;case"wheel":g=B1;break;case"copy":case"cut":case"paste":g=P1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=rp}var _=(e&4)!==0,E=!_&&t==="scroll",p=_?f!==null?f+"Capture":null:f;_=[];for(var h=u,m;h!==null;){m=h;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=Ns(h,p),y!=null&&_.push(Ls(h,y,m)))),E)break;h=h.return}0<_.length&&(f=new g(f,v,null,n,d),c.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==sc&&(v=n.relatedTarget||n.fromElement)&&(ar(v)||v[Qt]))break e;if((g||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?ar(v):null,v!==null&&(E=Lr(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(_=tp,y="onMouseLeave",p="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(_=rp,y="onPointerLeave",p="onPointerEnter",h="pointer"),E=g==null?f:Gr(g),m=v==null?f:Gr(v),f=new _(y,h+"leave",g,n,d),f.target=E,f.relatedTarget=m,y=null,ar(d)===u&&(_=new _(p,h+"enter",v,n,d),_.target=m,_.relatedTarget=E,y=_),E=y,g&&v)t:{for(_=g,p=v,h=0,m=_;m;m=jr(m))h++;for(m=0,y=p;y;y=jr(y))m++;for(;0<h-m;)_=jr(_),h--;for(;0<m-h;)p=jr(p),m--;for(;h--;){if(_===p||p!==null&&_===p.alternate)break t;_=jr(_),p=jr(p)}_=null}else _=null;g!==null&&pp(c,f,g,_,!1),v!==null&&E!==null&&pp(c,E,v,_,!0)}}e:{if(f=u?Gr(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var k=q1;else if(op(f))if(Wv)k=Z1;else{k=X1;var R=Q1}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=J1);if(k&&(k=k(t,u))){zv(c,k,n,d);break e}R&&R(t,f,u),t==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&ec(f,"number",f.value)}switch(R=u?Gr(u):window,t){case"focusin":(op(R)||R.contentEditable==="true")&&(Hr=R,fc=u,fs=null);break;case"focusout":fs=fc=Hr=null;break;case"mousedown":hc=!0;break;case"contextmenu":case"mouseup":case"dragend":hc=!1,dp(c,n,d);break;case"selectionchange":if(nC)break;case"keydown":case"keyup":dp(c,n,d)}var x;if(Gd)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Vr?Uv(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Fv&&n.locale!=="ko"&&(Vr||S!=="onCompositionStart"?S==="onCompositionEnd"&&Vr&&(x=Mv()):(yn=d,Vd="value"in yn?yn.value:yn.textContent,Vr=!0)),R=Ca(u,S),0<R.length&&(S=new np(S,t,null,n,d),c.push({event:S,listeners:R}),x?S.data=x:(x=jv(n),x!==null&&(S.data=x)))),(x=H1?$1(t,n):G1(t,n))&&(u=Ca(u,"onBeforeInput"),0<u.length&&(d=new np("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=x))}Xv(c,e)})}function Ls(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ca(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ns(t,n),s!=null&&r.unshift(Ls(t,s,i)),s=Ns(t,e),s!=null&&r.push(Ls(t,s,i))),t=t.return}return r}function jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function pp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ns(n,s),l!=null&&o.unshift(Ls(n,l,a))):i||(l=Ns(n,s),l!=null&&o.push(Ls(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var oC=/\r\n?/g,aC=/\u0000|\uFFFD/g;function mp(t){return(typeof t=="string"?t:""+t).replace(oC,`
`).replace(aC,"")}function Fo(t,e,n){if(e=mp(e),mp(t)!==e&&n)throw Error(I(425))}function Sa(){}var pc=null,mc=null;function gc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vc=typeof setTimeout=="function"?setTimeout:void 0,lC=typeof clearTimeout=="function"?clearTimeout:void 0,gp=typeof Promise=="function"?Promise:void 0,uC=typeof queueMicrotask=="function"?queueMicrotask:typeof gp<"u"?function(t){return gp.resolve(null).then(t).catch(cC)}:vc;function cC(t){setTimeout(function(){throw t})}function pu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Rs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Rs(e)}function Nn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var bi=Math.random().toString(36).slice(2),Tt="__reactFiber$"+bi,Ds="__reactProps$"+bi,Qt="__reactContainer$"+bi,_c="__reactEvents$"+bi,dC="__reactListeners$"+bi,fC="__reactHandles$"+bi;function ar(t){var e=t[Tt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qt]||n[Tt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vp(t);t!==null;){if(n=t[Tt])return n;t=vp(t)}return e}t=n,n=t.parentNode}return null}function ao(t){return t=t[Tt]||t[Qt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function vl(t){return t[Ds]||null}var yc=[],Kr=-1;function Yn(t){return{current:t}}function te(t){0>Kr||(t.current=yc[Kr],yc[Kr]=null,Kr--)}function X(t,e){Kr++,yc[Kr]=t.current,t.current=e}var jn={},Oe=Yn(jn),He=Yn(!1),_r=jn;function vi(t,e){var n=t.type.contextTypes;if(!n)return jn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function $e(t){return t=t.childContextTypes,t!=null}function Ia(){te(He),te(Oe)}function _p(t,e,n){if(Oe.current!==jn)throw Error(I(168));X(Oe,e),X(He,n)}function Zv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,QE(t)||"Unknown",i));return ue({},n,r)}function ka(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||jn,_r=Oe.current,X(Oe,t),X(He,He.current),!0}function yp(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=Zv(t,e,_r),r.__reactInternalMemoizedMergedChildContext=t,te(He),te(Oe),X(Oe,t)):te(He),X(He,n)}var Ut=null,_l=!1,mu=!1;function e_(t){Ut===null?Ut=[t]:Ut.push(t)}function hC(t){_l=!0,e_(t)}function qn(){if(!mu&&Ut!==null){mu=!0;var t=0,e=K;try{var n=Ut;for(K=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ut=null,_l=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(t+1)),kv(jd,qn),i}finally{K=e,mu=!1}}return null}var Yr=[],qr=0,Ta=null,Na=0,st=[],ot=0,yr=null,jt=1,zt="";function nr(t,e){Yr[qr++]=Na,Yr[qr++]=Ta,Ta=t,Na=e}function t_(t,e,n){st[ot++]=jt,st[ot++]=zt,st[ot++]=yr,yr=t;var r=jt;t=zt;var i=32-_t(r)-1;r&=~(1<<i),n+=1;var s=32-_t(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,jt=1<<32-_t(e)+i|n<<i|r,zt=s+t}else jt=1<<s|n<<i|r,zt=t}function Yd(t){t.return!==null&&(nr(t,1),t_(t,1,0))}function qd(t){for(;t===Ta;)Ta=Yr[--qr],Yr[qr]=null,Na=Yr[--qr],Yr[qr]=null;for(;t===yr;)yr=st[--ot],st[ot]=null,zt=st[--ot],st[ot]=null,jt=st[--ot],st[ot]=null}var Xe=null,Qe=null,ie=!1,pt=null;function n_(t,e){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function wp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Xe=t,Qe=Nn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Xe=t,Qe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=yr!==null?{id:jt,overflow:zt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Xe=t,Qe=null,!0):!1;default:return!1}}function wc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ec(t){if(ie){var e=Qe;if(e){var n=e;if(!wp(t,e)){if(wc(t))throw Error(I(418));e=Nn(n.nextSibling);var r=Xe;e&&wp(t,e)?n_(r,n):(t.flags=t.flags&-4097|2,ie=!1,Xe=t)}}else{if(wc(t))throw Error(I(418));t.flags=t.flags&-4097|2,ie=!1,Xe=t}}}function Ep(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Xe=t}function Uo(t){if(t!==Xe)return!1;if(!ie)return Ep(t),ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!gc(t.type,t.memoizedProps)),e&&(e=Qe)){if(wc(t))throw r_(),Error(I(418));for(;e;)n_(t,e),e=Nn(e.nextSibling)}if(Ep(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Qe=Nn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Qe=null}}else Qe=Xe?Nn(t.stateNode.nextSibling):null;return!0}function r_(){for(var t=Qe;t;)t=Nn(t.nextSibling)}function _i(){Qe=Xe=null,ie=!1}function Qd(t){pt===null?pt=[t]:pt.push(t)}var pC=sn.ReactCurrentBatchConfig;function Ki(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function jo(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Cp(t){var e=t._init;return e(t._payload)}function i_(t){function e(p,h){if(t){var m=p.deletions;m===null?(p.deletions=[h],p.flags|=16):m.push(h)}}function n(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=bn(p,h),p.index=0,p.sibling=null,p}function s(p,h,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<h?(p.flags|=2,h):m):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,h,m,y){return h===null||h.tag!==6?(h=Cu(m,p.mode,y),h.return=p,h):(h=i(h,m),h.return=p,h)}function l(p,h,m,y){var k=m.type;return k===Br?d(p,h,m.props.children,y,m.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===dn&&Cp(k)===h.type)?(y=i(h,m.props),y.ref=Ki(p,h,m),y.return=p,y):(y=oa(m.type,m.key,m.props,null,p.mode,y),y.ref=Ki(p,h,m),y.return=p,y)}function u(p,h,m,y){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Su(m,p.mode,y),h.return=p,h):(h=i(h,m.children||[]),h.return=p,h)}function d(p,h,m,y,k){return h===null||h.tag!==7?(h=hr(m,p.mode,y,k),h.return=p,h):(h=i(h,m),h.return=p,h)}function c(p,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Cu(""+h,p.mode,m),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Po:return m=oa(h.type,h.key,h.props,null,p.mode,m),m.ref=Ki(p,null,h),m.return=p,m;case Wr:return h=Su(h,p.mode,m),h.return=p,h;case dn:var y=h._init;return c(p,y(h._payload),m)}if(ts(h)||Bi(h))return h=hr(h,p.mode,m,null),h.return=p,h;jo(p,h)}return null}function f(p,h,m,y){var k=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:a(p,h,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Po:return m.key===k?l(p,h,m,y):null;case Wr:return m.key===k?u(p,h,m,y):null;case dn:return k=m._init,f(p,h,k(m._payload),y)}if(ts(m)||Bi(m))return k!==null?null:d(p,h,m,y,null);jo(p,m)}return null}function g(p,h,m,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,a(h,p,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Po:return p=p.get(y.key===null?m:y.key)||null,l(h,p,y,k);case Wr:return p=p.get(y.key===null?m:y.key)||null,u(h,p,y,k);case dn:var R=y._init;return g(p,h,m,R(y._payload),k)}if(ts(y)||Bi(y))return p=p.get(m)||null,d(h,p,y,k,null);jo(h,y)}return null}function v(p,h,m,y){for(var k=null,R=null,x=h,S=h=0,C=null;x!==null&&S<m.length;S++){x.index>S?(C=x,x=null):C=x.sibling;var P=f(p,x,m[S],y);if(P===null){x===null&&(x=C);break}t&&x&&P.alternate===null&&e(p,x),h=s(P,h,S),R===null?k=P:R.sibling=P,R=P,x=C}if(S===m.length)return n(p,x),ie&&nr(p,S),k;if(x===null){for(;S<m.length;S++)x=c(p,m[S],y),x!==null&&(h=s(x,h,S),R===null?k=x:R.sibling=x,R=x);return ie&&nr(p,S),k}for(x=r(p,x);S<m.length;S++)C=g(x,p,S,m[S],y),C!==null&&(t&&C.alternate!==null&&x.delete(C.key===null?S:C.key),h=s(C,h,S),R===null?k=C:R.sibling=C,R=C);return t&&x.forEach(function(L){return e(p,L)}),ie&&nr(p,S),k}function _(p,h,m,y){var k=Bi(m);if(typeof k!="function")throw Error(I(150));if(m=k.call(m),m==null)throw Error(I(151));for(var R=k=null,x=h,S=h=0,C=null,P=m.next();x!==null&&!P.done;S++,P=m.next()){x.index>S?(C=x,x=null):C=x.sibling;var L=f(p,x,P.value,y);if(L===null){x===null&&(x=C);break}t&&x&&L.alternate===null&&e(p,x),h=s(L,h,S),R===null?k=L:R.sibling=L,R=L,x=C}if(P.done)return n(p,x),ie&&nr(p,S),k;if(x===null){for(;!P.done;S++,P=m.next())P=c(p,P.value,y),P!==null&&(h=s(P,h,S),R===null?k=P:R.sibling=P,R=P);return ie&&nr(p,S),k}for(x=r(p,x);!P.done;S++,P=m.next())P=g(x,p,S,P.value,y),P!==null&&(t&&P.alternate!==null&&x.delete(P.key===null?S:P.key),h=s(P,h,S),R===null?k=P:R.sibling=P,R=P);return t&&x.forEach(function(H){return e(p,H)}),ie&&nr(p,S),k}function E(p,h,m,y){if(typeof m=="object"&&m!==null&&m.type===Br&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Po:e:{for(var k=m.key,R=h;R!==null;){if(R.key===k){if(k=m.type,k===Br){if(R.tag===7){n(p,R.sibling),h=i(R,m.props.children),h.return=p,p=h;break e}}else if(R.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===dn&&Cp(k)===R.type){n(p,R.sibling),h=i(R,m.props),h.ref=Ki(p,R,m),h.return=p,p=h;break e}n(p,R);break}else e(p,R);R=R.sibling}m.type===Br?(h=hr(m.props.children,p.mode,y,m.key),h.return=p,p=h):(y=oa(m.type,m.key,m.props,null,p.mode,y),y.ref=Ki(p,h,m),y.return=p,p=y)}return o(p);case Wr:e:{for(R=m.key;h!==null;){if(h.key===R)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(p,h.sibling),h=i(h,m.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else e(p,h);h=h.sibling}h=Su(m,p.mode,y),h.return=p,p=h}return o(p);case dn:return R=m._init,E(p,h,R(m._payload),y)}if(ts(m))return v(p,h,m,y);if(Bi(m))return _(p,h,m,y);jo(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,m),h.return=p,p=h):(n(p,h),h=Cu(m,p.mode,y),h.return=p,p=h),o(p)):n(p,h)}return E}var yi=i_(!0),s_=i_(!1),Pa=Yn(null),xa=null,Qr=null,Xd=null;function Jd(){Xd=Qr=xa=null}function Zd(t){var e=Pa.current;te(Pa),t._currentValue=e}function Cc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ai(t,e){xa=t,Xd=Qr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(We=!0),t.firstContext=null)}function ut(t){var e=t._currentValue;if(Xd!==t)if(t={context:t,memoizedValue:e,next:null},Qr===null){if(xa===null)throw Error(I(308));Qr=t,xa.dependencies={lanes:0,firstContext:t}}else Qr=Qr.next=t;return e}var lr=null;function ef(t){lr===null?lr=[t]:lr.push(t)}function o_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ef(e)):(n.next=i.next,i.next=n),e.interleaved=n,Xt(t,r)}function Xt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var fn=!1;function tf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function a_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function $t(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Pn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Xt(t,n)}return i=r.interleaved,i===null?(e.next=e,ef(r)):(e.next=i.next,i.next=e),r.interleaved=e,Xt(t,n)}function ea(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zd(t,n)}}function Sp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ra(t,e,n,r){var i=t.updateQueue;fn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var c=i.baseState;o=0,d=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(f=e,g=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){c=v.call(g,c,f);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,f=typeof v=="function"?v.call(g,c,f):v,f==null)break e;c=ue({},c,f);break e;case 2:fn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,l=c):d=d.next=g,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Er|=o,t.lanes=o,t.memoizedState=c}}function Ip(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var lo={},bt=Yn(lo),Ms=Yn(lo),Fs=Yn(lo);function ur(t){if(t===lo)throw Error(I(174));return t}function nf(t,e){switch(X(Fs,e),X(Ms,t),X(bt,lo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:nc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=nc(e,t)}te(bt),X(bt,e)}function wi(){te(bt),te(Ms),te(Fs)}function l_(t){ur(Fs.current);var e=ur(bt.current),n=nc(e,t.type);e!==n&&(X(Ms,t),X(bt,n))}function rf(t){Ms.current===t&&(te(bt),te(Ms))}var oe=Yn(0);function ba(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gu=[];function sf(){for(var t=0;t<gu.length;t++)gu[t]._workInProgressVersionPrimary=null;gu.length=0}var ta=sn.ReactCurrentDispatcher,vu=sn.ReactCurrentBatchConfig,wr=0,le=null,me=null,we=null,Oa=!1,hs=!1,Us=0,mC=0;function Pe(){throw Error(I(321))}function of(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Et(t[n],e[n]))return!1;return!0}function af(t,e,n,r,i,s){if(wr=s,le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ta.current=t===null||t.memoizedState===null?yC:wC,t=n(r,i),hs){s=0;do{if(hs=!1,Us=0,25<=s)throw Error(I(301));s+=1,we=me=null,e.updateQueue=null,ta.current=EC,t=n(r,i)}while(hs)}if(ta.current=Aa,e=me!==null&&me.next!==null,wr=0,we=me=le=null,Oa=!1,e)throw Error(I(300));return t}function lf(){var t=Us!==0;return Us=0,t}function It(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?le.memoizedState=we=t:we=we.next=t,we}function ct(){if(me===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=me.next;var e=we===null?le.memoizedState:we.next;if(e!==null)we=e,me=t;else{if(t===null)throw Error(I(310));me=t,t={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},we===null?le.memoizedState=we=t:we=we.next=t}return we}function js(t,e){return typeof e=="function"?e(t):e}function _u(t){var e=ct(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((wr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=r):l=l.next=c,le.lanes|=d,Er|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Et(r,e.memoizedState)||(We=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,le.lanes|=s,Er|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function yu(t){var e=ct(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Et(s,e.memoizedState)||(We=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function u_(){}function c_(t,e){var n=le,r=ct(),i=e(),s=!Et(r.memoizedState,i);if(s&&(r.memoizedState=i,We=!0),r=r.queue,uf(h_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,zs(9,f_.bind(null,n,r,i,e),void 0,null),Se===null)throw Error(I(349));wr&30||d_(n,e,i)}return i}function d_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function f_(t,e,n,r){e.value=n,e.getSnapshot=r,p_(e)&&m_(t)}function h_(t,e,n){return n(function(){p_(e)&&m_(t)})}function p_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Et(t,n)}catch{return!0}}function m_(t){var e=Xt(t,1);e!==null&&yt(e,t,1,-1)}function kp(t){var e=It();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:js,lastRenderedState:t},e.queue=t,t=t.dispatch=_C.bind(null,le,t),[e.memoizedState,t]}function zs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function g_(){return ct().memoizedState}function na(t,e,n,r){var i=It();le.flags|=t,i.memoizedState=zs(1|e,n,void 0,r===void 0?null:r)}function yl(t,e,n,r){var i=ct();r=r===void 0?null:r;var s=void 0;if(me!==null){var o=me.memoizedState;if(s=o.destroy,r!==null&&of(r,o.deps)){i.memoizedState=zs(e,n,s,r);return}}le.flags|=t,i.memoizedState=zs(1|e,n,s,r)}function Tp(t,e){return na(8390656,8,t,e)}function uf(t,e){return yl(2048,8,t,e)}function v_(t,e){return yl(4,2,t,e)}function __(t,e){return yl(4,4,t,e)}function y_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function w_(t,e,n){return n=n!=null?n.concat([t]):null,yl(4,4,y_.bind(null,e,t),n)}function cf(){}function E_(t,e){var n=ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&of(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function C_(t,e){var n=ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&of(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function S_(t,e,n){return wr&21?(Et(n,e)||(n=Pv(),le.lanes|=n,Er|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,We=!0),t.memoizedState=n)}function gC(t,e){var n=K;K=n!==0&&4>n?n:4,t(!0);var r=vu.transition;vu.transition={};try{t(!1),e()}finally{K=n,vu.transition=r}}function I_(){return ct().memoizedState}function vC(t,e,n){var r=Rn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},k_(t))T_(e,n);else if(n=o_(t,e,n,r),n!==null){var i=De();yt(n,t,r,i),N_(n,e,r)}}function _C(t,e,n){var r=Rn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(k_(t))T_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Et(a,o)){var l=e.interleaved;l===null?(i.next=i,ef(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=o_(t,e,i,r),n!==null&&(i=De(),yt(n,t,r,i),N_(n,e,r))}}function k_(t){var e=t.alternate;return t===le||e!==null&&e===le}function T_(t,e){hs=Oa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function N_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zd(t,n)}}var Aa={readContext:ut,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},yC={readContext:ut,useCallback:function(t,e){return It().memoizedState=[t,e===void 0?null:e],t},useContext:ut,useEffect:Tp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,na(4194308,4,y_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return na(4194308,4,t,e)},useInsertionEffect:function(t,e){return na(4,2,t,e)},useMemo:function(t,e){var n=It();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=It();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=vC.bind(null,le,t),[r.memoizedState,t]},useRef:function(t){var e=It();return t={current:t},e.memoizedState=t},useState:kp,useDebugValue:cf,useDeferredValue:function(t){return It().memoizedState=t},useTransition:function(){var t=kp(!1),e=t[0];return t=gC.bind(null,t[1]),It().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=le,i=It();if(ie){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),Se===null)throw Error(I(349));wr&30||d_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Tp(h_.bind(null,r,s,t),[t]),r.flags|=2048,zs(9,f_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=It(),e=Se.identifierPrefix;if(ie){var n=zt,r=jt;n=(r&~(1<<32-_t(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Us++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=mC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},wC={readContext:ut,useCallback:E_,useContext:ut,useEffect:uf,useImperativeHandle:w_,useInsertionEffect:v_,useLayoutEffect:__,useMemo:C_,useReducer:_u,useRef:g_,useState:function(){return _u(js)},useDebugValue:cf,useDeferredValue:function(t){var e=ct();return S_(e,me.memoizedState,t)},useTransition:function(){var t=_u(js)[0],e=ct().memoizedState;return[t,e]},useMutableSource:u_,useSyncExternalStore:c_,useId:I_,unstable_isNewReconciler:!1},EC={readContext:ut,useCallback:E_,useContext:ut,useEffect:uf,useImperativeHandle:w_,useInsertionEffect:v_,useLayoutEffect:__,useMemo:C_,useReducer:yu,useRef:g_,useState:function(){return yu(js)},useDebugValue:cf,useDeferredValue:function(t){var e=ct();return me===null?e.memoizedState=t:S_(e,me.memoizedState,t)},useTransition:function(){var t=yu(js)[0],e=ct().memoizedState;return[t,e]},useMutableSource:u_,useSyncExternalStore:c_,useId:I_,unstable_isNewReconciler:!1};function ft(t,e){if(t&&t.defaultProps){e=ue({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Sc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ue({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wl={isMounted:function(t){return(t=t._reactInternals)?Lr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=De(),i=Rn(t),s=$t(r,i);s.payload=e,n!=null&&(s.callback=n),e=Pn(t,s,i),e!==null&&(yt(e,t,i,r),ea(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=De(),i=Rn(t),s=$t(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Pn(t,s,i),e!==null&&(yt(e,t,i,r),ea(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=De(),r=Rn(t),i=$t(n,r);i.tag=2,e!=null&&(i.callback=e),e=Pn(t,i,r),e!==null&&(yt(e,t,r,n),ea(e,t,r))}};function Np(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Os(n,r)||!Os(i,s):!0}function P_(t,e,n){var r=!1,i=jn,s=e.contextType;return typeof s=="object"&&s!==null?s=ut(s):(i=$e(e)?_r:Oe.current,r=e.contextTypes,s=(r=r!=null)?vi(t,i):jn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Pp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&wl.enqueueReplaceState(e,e.state,null)}function Ic(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},tf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ut(s):(s=$e(e)?_r:Oe.current,i.context=vi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Sc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&wl.enqueueReplaceState(i,i.state,null),Ra(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ei(t,e){try{var n="",r=e;do n+=qE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function wu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function kc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var CC=typeof WeakMap=="function"?WeakMap:Map;function x_(t,e,n){n=$t(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Da||(Da=!0,Dc=r),kc(t,e)},n}function R_(t,e,n){n=$t(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){kc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){kc(t,e),typeof r!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function xp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new CC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=MC.bind(null,t,e,n),e.then(t,t))}function Rp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function bp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=$t(-1,1),e.tag=2,Pn(n,e,1))),n.lanes|=1),t)}var SC=sn.ReactCurrentOwner,We=!1;function Le(t,e,n,r){e.child=t===null?s_(e,null,n,r):yi(e,t.child,n,r)}function Op(t,e,n,r,i){n=n.render;var s=e.ref;return ai(e,i),r=af(t,e,n,r,s,i),n=lf(),t!==null&&!We?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jt(t,e,i)):(ie&&n&&Yd(e),e.flags|=1,Le(t,e,r,i),e.child)}function Ap(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!_f(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,b_(t,e,s,r,i)):(t=oa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Os,n(o,r)&&t.ref===e.ref)return Jt(t,e,i)}return e.flags|=1,t=bn(s,r),t.ref=e.ref,t.return=e,e.child=t}function b_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Os(s,r)&&t.ref===e.ref)if(We=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(We=!0);else return e.lanes=t.lanes,Jt(t,e,i)}return Tc(t,e,n,r,i)}function O_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Jr,qe),qe|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,X(Jr,qe),qe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,X(Jr,qe),qe|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,X(Jr,qe),qe|=r;return Le(t,e,i,n),e.child}function A_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Tc(t,e,n,r,i){var s=$e(n)?_r:Oe.current;return s=vi(e,s),ai(e,i),n=af(t,e,n,r,s,i),r=lf(),t!==null&&!We?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jt(t,e,i)):(ie&&r&&Yd(e),e.flags|=1,Le(t,e,n,i),e.child)}function Lp(t,e,n,r,i){if($e(n)){var s=!0;ka(e)}else s=!1;if(ai(e,i),e.stateNode===null)ra(t,e),P_(e,n,r),Ic(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ut(u):(u=$e(n)?_r:Oe.current,u=vi(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Pp(e,o,r,u),fn=!1;var f=e.memoizedState;o.state=f,Ra(e,r,o,i),l=e.memoizedState,a!==r||f!==l||He.current||fn?(typeof d=="function"&&(Sc(e,n,d,r),l=e.memoizedState),(a=fn||Np(e,n,a,r,f,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,a_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:ft(e.type,a),o.props=u,c=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ut(l):(l=$e(n)?_r:Oe.current,l=vi(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||f!==l)&&Pp(e,o,r,l),fn=!1,f=e.memoizedState,o.state=f,Ra(e,r,o,i);var v=e.memoizedState;a!==c||f!==v||He.current||fn?(typeof g=="function"&&(Sc(e,n,g,r),v=e.memoizedState),(u=fn||Np(e,n,u,r,f,v,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Nc(t,e,n,r,s,i)}function Nc(t,e,n,r,i,s){A_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&yp(e,n,!1),Jt(t,e,s);r=e.stateNode,SC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=yi(e,t.child,null,s),e.child=yi(e,null,a,s)):Le(t,e,a,s),e.memoizedState=r.state,i&&yp(e,n,!0),e.child}function L_(t){var e=t.stateNode;e.pendingContext?_p(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_p(t,e.context,!1),nf(t,e.containerInfo)}function Dp(t,e,n,r,i){return _i(),Qd(i),e.flags|=256,Le(t,e,n,r),e.child}var Pc={dehydrated:null,treeContext:null,retryLane:0};function xc(t){return{baseLanes:t,cachePool:null,transitions:null}}function D_(t,e,n){var r=e.pendingProps,i=oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),X(oe,i&1),t===null)return Ec(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Sl(o,r,0,null),t=hr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=xc(n),e.memoizedState=Pc,t):df(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return IC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=bn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=bn(a,s):(s=hr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?xc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Pc,r}return s=t.child,t=s.sibling,r=bn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function df(t,e){return e=Sl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function zo(t,e,n,r){return r!==null&&Qd(r),yi(e,t.child,null,n),t=df(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function IC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=wu(Error(I(422))),zo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Sl({mode:"visible",children:r.children},i,0,null),s=hr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&yi(e,t.child,null,o),e.child.memoizedState=xc(o),e.memoizedState=Pc,s);if(!(e.mode&1))return zo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(I(419)),r=wu(s,r,void 0),zo(t,e,o,r)}if(a=(o&t.childLanes)!==0,We||a){if(r=Se,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Xt(t,i),yt(r,t,i,-1))}return vf(),r=wu(Error(I(421))),zo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=FC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Qe=Nn(i.nextSibling),Xe=e,ie=!0,pt=null,t!==null&&(st[ot++]=jt,st[ot++]=zt,st[ot++]=yr,jt=t.id,zt=t.overflow,yr=e),e=df(e,r.children),e.flags|=4096,e)}function Mp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Cc(t.return,e,n)}function Eu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function M_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Le(t,e,r.children,n),r=oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mp(t,n,e);else if(t.tag===19)Mp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(X(oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ba(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Eu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ba(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Eu(e,!0,n,null,s);break;case"together":Eu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ra(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Jt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Er|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=bn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=bn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function kC(t,e,n){switch(e.tag){case 3:L_(e),_i();break;case 5:l_(e);break;case 1:$e(e.type)&&ka(e);break;case 4:nf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;X(Pa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(X(oe,oe.current&1),e.flags|=128,null):n&e.child.childLanes?D_(t,e,n):(X(oe,oe.current&1),t=Jt(t,e,n),t!==null?t.sibling:null);X(oe,oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return M_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(oe,oe.current),r)break;return null;case 22:case 23:return e.lanes=0,O_(t,e,n)}return Jt(t,e,n)}var F_,Rc,U_,j_;F_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rc=function(){};U_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ur(bt.current);var s=null;switch(n){case"input":i=Ju(t,i),r=Ju(t,r),s=[];break;case"select":i=ue({},i,{value:void 0}),r=ue({},r,{value:void 0}),s=[];break;case"textarea":i=tc(t,i),r=tc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Sa)}rc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ks.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ks.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Z("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};j_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Yi(t,e){if(!ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function TC(t,e,n){var r=e.pendingProps;switch(qd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(e),null;case 1:return $e(e.type)&&Ia(),xe(e),null;case 3:return r=e.stateNode,wi(),te(He),te(Oe),sf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Uo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,pt!==null&&(Uc(pt),pt=null))),Rc(t,e),xe(e),null;case 5:rf(e);var i=ur(Fs.current);if(n=e.type,t!==null&&e.stateNode!=null)U_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return xe(e),null}if(t=ur(bt.current),Uo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Tt]=e,r[Ds]=s,t=(e.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(i=0;i<rs.length;i++)Z(rs[i],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":$h(r,s),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Z("invalid",r);break;case"textarea":Kh(r,s),Z("invalid",r)}rc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Fo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Fo(r.textContent,a,t),i=["children",""+a]):ks.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Z("scroll",r)}switch(n){case"input":xo(r),Gh(r,s,!0);break;case"textarea":xo(r),Yh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Sa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Tt]=e,t[Ds]=r,F_(t,e,!1,!1),e.stateNode=t;e:{switch(o=ic(n,r),n){case"dialog":Z("cancel",t),Z("close",t),i=r;break;case"iframe":case"object":case"embed":Z("load",t),i=r;break;case"video":case"audio":for(i=0;i<rs.length;i++)Z(rs[i],t);i=r;break;case"source":Z("error",t),i=r;break;case"img":case"image":case"link":Z("error",t),Z("load",t),i=r;break;case"details":Z("toggle",t),i=r;break;case"input":$h(t,r),i=Ju(t,r),Z("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ue({},r,{value:void 0}),Z("invalid",t);break;case"textarea":Kh(t,r),i=tc(t,r),Z("invalid",t);break;default:i=r}rc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?gv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&pv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ts(t,l):typeof l=="number"&&Ts(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ks.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Z("scroll",t):l!=null&&Ld(t,s,l,o))}switch(n){case"input":xo(t),Gh(t,r,!1);break;case"textarea":xo(t),Yh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Un(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ri(t,!!r.multiple,s,!1):r.defaultValue!=null&&ri(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Sa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xe(e),null;case 6:if(t&&e.stateNode!=null)j_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=ur(Fs.current),ur(bt.current),Uo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Tt]=e,(s=r.nodeValue!==n)&&(t=Xe,t!==null))switch(t.tag){case 3:Fo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Fo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tt]=e,e.stateNode=r}return xe(e),null;case 13:if(te(oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ie&&Qe!==null&&e.mode&1&&!(e.flags&128))r_(),_i(),e.flags|=98560,s=!1;else if(s=Uo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[Tt]=e}else _i(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;xe(e),s=!1}else pt!==null&&(Uc(pt),pt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||oe.current&1?ve===0&&(ve=3):vf())),e.updateQueue!==null&&(e.flags|=4),xe(e),null);case 4:return wi(),Rc(t,e),t===null&&As(e.stateNode.containerInfo),xe(e),null;case 10:return Zd(e.type._context),xe(e),null;case 17:return $e(e.type)&&Ia(),xe(e),null;case 19:if(te(oe),s=e.memoizedState,s===null)return xe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Yi(s,!1);else{if(ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ba(t),o!==null){for(e.flags|=128,Yi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return X(oe,oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&fe()>Ci&&(e.flags|=128,r=!0,Yi(s,!1),e.lanes=4194304)}else{if(!r)if(t=ba(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Yi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ie)return xe(e),null}else 2*fe()-s.renderingStartTime>Ci&&n!==1073741824&&(e.flags|=128,r=!0,Yi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=fe(),e.sibling=null,n=oe.current,X(oe,r?n&1|2:n&1),e):(xe(e),null);case 22:case 23:return gf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?qe&1073741824&&(xe(e),e.subtreeFlags&6&&(e.flags|=8192)):xe(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function NC(t,e){switch(qd(e),e.tag){case 1:return $e(e.type)&&Ia(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return wi(),te(He),te(Oe),sf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return rf(e),null;case 13:if(te(oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));_i()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return te(oe),null;case 4:return wi(),null;case 10:return Zd(e.type._context),null;case 22:case 23:return gf(),null;case 24:return null;default:return null}}var Wo=!1,Re=!1,PC=typeof WeakSet=="function"?WeakSet:Set,b=null;function Xr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(t,e,r)}else n.current=null}function bc(t,e,n){try{n()}catch(r){ce(t,e,r)}}var Fp=!1;function xC(t,e){if(pc=wa,t=Hv(),Kd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,c=t,f=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(a=o+i),c!==s||r!==0&&c.nodeType!==3||(l=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)f=c,c=g;for(;;){if(c===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++d===r&&(l=o),(g=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(mc={focusedElem:t,selectionRange:n},wa=!1,b=e;b!==null;)if(e=b,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,b=t;else for(;b!==null;){e=b;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,E=v.memoizedState,p=e.stateNode,h=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:ft(e.type,_),E);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(y){ce(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,b=t;break}b=e.return}return v=Fp,Fp=!1,v}function ps(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&bc(e,n,s)}i=i.next}while(i!==r)}}function El(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Oc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function z_(t){var e=t.alternate;e!==null&&(t.alternate=null,z_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Tt],delete e[Ds],delete e[_c],delete e[dC],delete e[fC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function W_(t){return t.tag===5||t.tag===3||t.tag===4}function Up(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||W_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ac(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sa));else if(r!==4&&(t=t.child,t!==null))for(Ac(t,e,n),t=t.sibling;t!==null;)Ac(t,e,n),t=t.sibling}function Lc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Lc(t,e,n),t=t.sibling;t!==null;)Lc(t,e,n),t=t.sibling}var Ie=null,ht=!1;function ln(t,e,n){for(n=n.child;n!==null;)B_(t,e,n),n=n.sibling}function B_(t,e,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(hl,n)}catch{}switch(n.tag){case 5:Re||Xr(n,e);case 6:var r=Ie,i=ht;Ie=null,ln(t,e,n),Ie=r,ht=i,Ie!==null&&(ht?(t=Ie,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(ht?(t=Ie,n=n.stateNode,t.nodeType===8?pu(t.parentNode,n):t.nodeType===1&&pu(t,n),Rs(t)):pu(Ie,n.stateNode));break;case 4:r=Ie,i=ht,Ie=n.stateNode.containerInfo,ht=!0,ln(t,e,n),Ie=r,ht=i;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&bc(n,e,o),i=i.next}while(i!==r)}ln(t,e,n);break;case 1:if(!Re&&(Xr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ce(n,e,a)}ln(t,e,n);break;case 21:ln(t,e,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,ln(t,e,n),Re=r):ln(t,e,n);break;default:ln(t,e,n)}}function jp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new PC),e.forEach(function(r){var i=UC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function dt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ie=a.stateNode,ht=!1;break e;case 3:Ie=a.stateNode.containerInfo,ht=!0;break e;case 4:Ie=a.stateNode.containerInfo,ht=!0;break e}a=a.return}if(Ie===null)throw Error(I(160));B_(s,o,i),Ie=null,ht=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ce(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)V_(e,t),e=e.sibling}function V_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(dt(e,t),St(t),r&4){try{ps(3,t,t.return),El(3,t)}catch(_){ce(t,t.return,_)}try{ps(5,t,t.return)}catch(_){ce(t,t.return,_)}}break;case 1:dt(e,t),St(t),r&512&&n!==null&&Xr(n,n.return);break;case 5:if(dt(e,t),St(t),r&512&&n!==null&&Xr(n,n.return),t.flags&32){var i=t.stateNode;try{Ts(i,"")}catch(_){ce(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&dv(i,s),ic(a,o);var u=ic(a,s);for(o=0;o<l.length;o+=2){var d=l[o],c=l[o+1];d==="style"?gv(i,c):d==="dangerouslySetInnerHTML"?pv(i,c):d==="children"?Ts(i,c):Ld(i,d,c,u)}switch(a){case"input":Zu(i,s);break;case"textarea":fv(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ri(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?ri(i,!!s.multiple,s.defaultValue,!0):ri(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ds]=s}catch(_){ce(t,t.return,_)}}break;case 6:if(dt(e,t),St(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){ce(t,t.return,_)}}break;case 3:if(dt(e,t),St(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Rs(e.containerInfo)}catch(_){ce(t,t.return,_)}break;case 4:dt(e,t),St(t);break;case 13:dt(e,t),St(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(pf=fe())),r&4&&jp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Re=(u=Re)||d,dt(e,t),Re=u):dt(e,t),St(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(b=t,d=t.child;d!==null;){for(c=b=d;b!==null;){switch(f=b,g=f.child,f.tag){case 0:case 11:case 14:case 15:ps(4,f,f.return);break;case 1:Xr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){ce(r,n,_)}}break;case 5:Xr(f,f.return);break;case 22:if(f.memoizedState!==null){Wp(c);continue}}g!==null?(g.return=f,b=g):Wp(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=mv("display",o))}catch(_){ce(t,t.return,_)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(_){ce(t,t.return,_)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:dt(e,t),St(t),r&4&&jp(t);break;case 21:break;default:dt(e,t),St(t)}}function St(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(W_(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ts(i,""),r.flags&=-33);var s=Up(t);Lc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Up(t);Ac(t,a,o);break;default:throw Error(I(161))}}catch(l){ce(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function RC(t,e,n){b=t,H_(t)}function H_(t,e,n){for(var r=(t.mode&1)!==0;b!==null;){var i=b,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Wo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Re;a=Wo;var u=Re;if(Wo=o,(Re=l)&&!u)for(b=i;b!==null;)o=b,l=o.child,o.tag===22&&o.memoizedState!==null?Bp(i):l!==null?(l.return=o,b=l):Bp(i);for(;s!==null;)b=s,H_(s),s=s.sibling;b=i,Wo=a,Re=u}zp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,b=s):zp(t)}}function zp(t){for(;b!==null;){var e=b;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Re||El(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Re)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ft(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ip(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ip(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Rs(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Re||e.flags&512&&Oc(e)}catch(f){ce(e,e.return,f)}}if(e===t){b=null;break}if(n=e.sibling,n!==null){n.return=e.return,b=n;break}b=e.return}}function Wp(t){for(;b!==null;){var e=b;if(e===t){b=null;break}var n=e.sibling;if(n!==null){n.return=e.return,b=n;break}b=e.return}}function Bp(t){for(;b!==null;){var e=b;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{El(4,e)}catch(l){ce(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ce(e,i,l)}}var s=e.return;try{Oc(e)}catch(l){ce(e,s,l)}break;case 5:var o=e.return;try{Oc(e)}catch(l){ce(e,o,l)}}}catch(l){ce(e,e.return,l)}if(e===t){b=null;break}var a=e.sibling;if(a!==null){a.return=e.return,b=a;break}b=e.return}}var bC=Math.ceil,La=sn.ReactCurrentDispatcher,ff=sn.ReactCurrentOwner,lt=sn.ReactCurrentBatchConfig,$=0,Se=null,he=null,Te=0,qe=0,Jr=Yn(0),ve=0,Ws=null,Er=0,Cl=0,hf=0,ms=null,ze=null,pf=0,Ci=1/0,Ft=null,Da=!1,Dc=null,xn=null,Bo=!1,wn=null,Ma=0,gs=0,Mc=null,ia=-1,sa=0;function De(){return $&6?fe():ia!==-1?ia:ia=fe()}function Rn(t){return t.mode&1?$&2&&Te!==0?Te&-Te:pC.transition!==null?(sa===0&&(sa=Pv()),sa):(t=K,t!==0||(t=window.event,t=t===void 0?16:Dv(t.type)),t):1}function yt(t,e,n,r){if(50<gs)throw gs=0,Mc=null,Error(I(185));so(t,n,r),(!($&2)||t!==Se)&&(t===Se&&(!($&2)&&(Cl|=n),ve===4&&pn(t,Te)),Ge(t,r),n===1&&$===0&&!(e.mode&1)&&(Ci=fe()+500,_l&&qn()))}function Ge(t,e){var n=t.callbackNode;p1(t,e);var r=ya(t,t===Se?Te:0);if(r===0)n!==null&&Xh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Xh(n),e===1)t.tag===0?hC(Vp.bind(null,t)):e_(Vp.bind(null,t)),uC(function(){!($&6)&&qn()}),n=null;else{switch(xv(r)){case 1:n=jd;break;case 4:n=Tv;break;case 16:n=_a;break;case 536870912:n=Nv;break;default:n=_a}n=J_(n,$_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $_(t,e){if(ia=-1,sa=0,$&6)throw Error(I(327));var n=t.callbackNode;if(li()&&t.callbackNode!==n)return null;var r=ya(t,t===Se?Te:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Fa(t,r);else{e=r;var i=$;$|=2;var s=K_();(Se!==t||Te!==e)&&(Ft=null,Ci=fe()+500,fr(t,e));do try{LC();break}catch(a){G_(t,a)}while(!0);Jd(),La.current=s,$=i,he!==null?e=0:(Se=null,Te=0,e=ve)}if(e!==0){if(e===2&&(i=uc(t),i!==0&&(r=i,e=Fc(t,i))),e===1)throw n=Ws,fr(t,0),pn(t,r),Ge(t,fe()),n;if(e===6)pn(t,r);else{if(i=t.current.alternate,!(r&30)&&!OC(i)&&(e=Fa(t,r),e===2&&(s=uc(t),s!==0&&(r=s,e=Fc(t,s))),e===1))throw n=Ws,fr(t,0),pn(t,r),Ge(t,fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:rr(t,ze,Ft);break;case 3:if(pn(t,r),(r&130023424)===r&&(e=pf+500-fe(),10<e)){if(ya(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){De(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=vc(rr.bind(null,t,ze,Ft),e);break}rr(t,ze,Ft);break;case 4:if(pn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-_t(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bC(r/1960))-r,10<r){t.timeoutHandle=vc(rr.bind(null,t,ze,Ft),r);break}rr(t,ze,Ft);break;case 5:rr(t,ze,Ft);break;default:throw Error(I(329))}}}return Ge(t,fe()),t.callbackNode===n?$_.bind(null,t):null}function Fc(t,e){var n=ms;return t.current.memoizedState.isDehydrated&&(fr(t,e).flags|=256),t=Fa(t,e),t!==2&&(e=ze,ze=n,e!==null&&Uc(e)),t}function Uc(t){ze===null?ze=t:ze.push.apply(ze,t)}function OC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Et(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pn(t,e){for(e&=~hf,e&=~Cl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-_t(e),r=1<<n;t[n]=-1,e&=~r}}function Vp(t){if($&6)throw Error(I(327));li();var e=ya(t,0);if(!(e&1))return Ge(t,fe()),null;var n=Fa(t,e);if(t.tag!==0&&n===2){var r=uc(t);r!==0&&(e=r,n=Fc(t,r))}if(n===1)throw n=Ws,fr(t,0),pn(t,e),Ge(t,fe()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,rr(t,ze,Ft),Ge(t,fe()),null}function mf(t,e){var n=$;$|=1;try{return t(e)}finally{$=n,$===0&&(Ci=fe()+500,_l&&qn())}}function Cr(t){wn!==null&&wn.tag===0&&!($&6)&&li();var e=$;$|=1;var n=lt.transition,r=K;try{if(lt.transition=null,K=1,t)return t()}finally{K=r,lt.transition=n,$=e,!($&6)&&qn()}}function gf(){qe=Jr.current,te(Jr)}function fr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,lC(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(qd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ia();break;case 3:wi(),te(He),te(Oe),sf();break;case 5:rf(r);break;case 4:wi();break;case 13:te(oe);break;case 19:te(oe);break;case 10:Zd(r.type._context);break;case 22:case 23:gf()}n=n.return}if(Se=t,he=t=bn(t.current,null),Te=qe=e,ve=0,Ws=null,hf=Cl=Er=0,ze=ms=null,lr!==null){for(e=0;e<lr.length;e++)if(n=lr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}lr=null}return t}function G_(t,e){do{var n=he;try{if(Jd(),ta.current=Aa,Oa){for(var r=le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Oa=!1}if(wr=0,we=me=le=null,hs=!1,Us=0,ff.current=null,n===null||n.return===null){ve=1,Ws=e,he=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Te,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Rp(o);if(g!==null){g.flags&=-257,bp(g,o,a,s,e),g.mode&1&&xp(s,u,e),e=g,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){xp(s,u,e),vf();break e}l=Error(I(426))}}else if(ie&&a.mode&1){var E=Rp(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),bp(E,o,a,s,e),Qd(Ei(l,a));break e}}s=l=Ei(l,a),ve!==4&&(ve=2),ms===null?ms=[s]:ms.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=x_(s,l,e);Sp(s,p);break e;case 1:a=l;var h=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(xn===null||!xn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=R_(s,a,e);Sp(s,y);break e}}s=s.return}while(s!==null)}q_(n)}catch(k){e=k,he===n&&n!==null&&(he=n=n.return);continue}break}while(!0)}function K_(){var t=La.current;return La.current=Aa,t===null?Aa:t}function vf(){(ve===0||ve===3||ve===2)&&(ve=4),Se===null||!(Er&268435455)&&!(Cl&268435455)||pn(Se,Te)}function Fa(t,e){var n=$;$|=2;var r=K_();(Se!==t||Te!==e)&&(Ft=null,fr(t,e));do try{AC();break}catch(i){G_(t,i)}while(!0);if(Jd(),$=n,La.current=r,he!==null)throw Error(I(261));return Se=null,Te=0,ve}function AC(){for(;he!==null;)Y_(he)}function LC(){for(;he!==null&&!s1();)Y_(he)}function Y_(t){var e=X_(t.alternate,t,qe);t.memoizedProps=t.pendingProps,e===null?q_(t):he=e,ff.current=null}function q_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=NC(n,e),n!==null){n.flags&=32767,he=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ve=6,he=null;return}}else if(n=TC(n,e,qe),n!==null){he=n;return}if(e=e.sibling,e!==null){he=e;return}he=e=t}while(e!==null);ve===0&&(ve=5)}function rr(t,e,n){var r=K,i=lt.transition;try{lt.transition=null,K=1,DC(t,e,n,r)}finally{lt.transition=i,K=r}return null}function DC(t,e,n,r){do li();while(wn!==null);if($&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(m1(t,s),t===Se&&(he=Se=null,Te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bo||(Bo=!0,J_(_a,function(){return li(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=lt.transition,lt.transition=null;var o=K;K=1;var a=$;$|=4,ff.current=null,xC(t,n),V_(n,t),tC(mc),wa=!!pc,mc=pc=null,t.current=n,RC(n),o1(),$=a,K=o,lt.transition=s}else t.current=n;if(Bo&&(Bo=!1,wn=t,Ma=i),s=t.pendingLanes,s===0&&(xn=null),u1(n.stateNode),Ge(t,fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Da)throw Da=!1,t=Dc,Dc=null,t;return Ma&1&&t.tag!==0&&li(),s=t.pendingLanes,s&1?t===Mc?gs++:(gs=0,Mc=t):gs=0,qn(),null}function li(){if(wn!==null){var t=xv(Ma),e=lt.transition,n=K;try{if(lt.transition=null,K=16>t?16:t,wn===null)var r=!1;else{if(t=wn,wn=null,Ma=0,$&6)throw Error(I(331));var i=$;for($|=4,b=t.current;b!==null;){var s=b,o=s.child;if(b.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(b=u;b!==null;){var d=b;switch(d.tag){case 0:case 11:case 15:ps(8,d,s)}var c=d.child;if(c!==null)c.return=d,b=c;else for(;b!==null;){d=b;var f=d.sibling,g=d.return;if(z_(d),d===u){b=null;break}if(f!==null){f.return=g,b=f;break}b=g}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var E=_.sibling;_.sibling=null,_=E}while(_!==null)}}b=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,b=o;else e:for(;b!==null;){if(s=b,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ps(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,b=p;break e}b=s.return}}var h=t.current;for(b=h;b!==null;){o=b;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,b=m;else e:for(o=h;b!==null;){if(a=b,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:El(9,a)}}catch(k){ce(a,a.return,k)}if(a===o){b=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,b=y;break e}b=a.return}}if($=i,qn(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(hl,t)}catch{}r=!0}return r}finally{K=n,lt.transition=e}}return!1}function Hp(t,e,n){e=Ei(n,e),e=x_(t,e,1),t=Pn(t,e,1),e=De(),t!==null&&(so(t,1,e),Ge(t,e))}function ce(t,e,n){if(t.tag===3)Hp(t,t,n);else for(;e!==null;){if(e.tag===3){Hp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xn===null||!xn.has(r))){t=Ei(n,t),t=R_(e,t,1),e=Pn(e,t,1),t=De(),e!==null&&(so(e,1,t),Ge(e,t));break}}e=e.return}}function MC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=De(),t.pingedLanes|=t.suspendedLanes&n,Se===t&&(Te&n)===n&&(ve===4||ve===3&&(Te&130023424)===Te&&500>fe()-pf?fr(t,0):hf|=n),Ge(t,e)}function Q_(t,e){e===0&&(t.mode&1?(e=Oo,Oo<<=1,!(Oo&130023424)&&(Oo=4194304)):e=1);var n=De();t=Xt(t,e),t!==null&&(so(t,e,n),Ge(t,n))}function FC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Q_(t,n)}function UC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),Q_(t,n)}var X_;X_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||He.current)We=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return We=!1,kC(t,e,n);We=!!(t.flags&131072)}else We=!1,ie&&e.flags&1048576&&t_(e,Na,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ra(t,e),t=e.pendingProps;var i=vi(e,Oe.current);ai(e,n),i=af(null,e,r,t,i,n);var s=lf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,$e(r)?(s=!0,ka(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,tf(e),i.updater=wl,e.stateNode=i,i._reactInternals=e,Ic(e,r,t,n),e=Nc(null,e,r,!0,s,n)):(e.tag=0,ie&&s&&Yd(e),Le(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ra(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=zC(r),t=ft(r,t),i){case 0:e=Tc(null,e,r,t,n);break e;case 1:e=Lp(null,e,r,t,n);break e;case 11:e=Op(null,e,r,t,n);break e;case 14:e=Ap(null,e,r,ft(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ft(r,i),Tc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ft(r,i),Lp(t,e,r,i,n);case 3:e:{if(L_(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,a_(t,e),Ra(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ei(Error(I(423)),e),e=Dp(t,e,r,n,i);break e}else if(r!==i){i=Ei(Error(I(424)),e),e=Dp(t,e,r,n,i);break e}else for(Qe=Nn(e.stateNode.containerInfo.firstChild),Xe=e,ie=!0,pt=null,n=s_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_i(),r===i){e=Jt(t,e,n);break e}Le(t,e,r,n)}e=e.child}return e;case 5:return l_(e),t===null&&Ec(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,gc(r,i)?o=null:s!==null&&gc(r,s)&&(e.flags|=32),A_(t,e),Le(t,e,o,n),e.child;case 6:return t===null&&Ec(e),null;case 13:return D_(t,e,n);case 4:return nf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=yi(e,null,r,n):Le(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ft(r,i),Op(t,e,r,i,n);case 7:return Le(t,e,e.pendingProps,n),e.child;case 8:return Le(t,e,e.pendingProps.children,n),e.child;case 12:return Le(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,X(Pa,r._currentValue),r._currentValue=o,s!==null)if(Et(s.value,o)){if(s.children===i.children&&!He.current){e=Jt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=$t(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Cc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Cc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Le(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ai(e,n),i=ut(i),r=r(i),e.flags|=1,Le(t,e,r,n),e.child;case 14:return r=e.type,i=ft(r,e.pendingProps),i=ft(r.type,i),Ap(t,e,r,i,n);case 15:return b_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ft(r,i),ra(t,e),e.tag=1,$e(r)?(t=!0,ka(e)):t=!1,ai(e,n),P_(e,r,i),Ic(e,r,i,n),Nc(null,e,r,!0,t,n);case 19:return M_(t,e,n);case 22:return O_(t,e,n)}throw Error(I(156,e.tag))};function J_(t,e){return kv(t,e)}function jC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(t,e,n,r){return new jC(t,e,n,r)}function _f(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zC(t){if(typeof t=="function")return _f(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Md)return 11;if(t===Fd)return 14}return 2}function bn(t,e){var n=t.alternate;return n===null?(n=at(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function oa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")_f(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Br:return hr(n.children,i,s,e);case Dd:o=8,i|=8;break;case Yu:return t=at(12,n,e,i|2),t.elementType=Yu,t.lanes=s,t;case qu:return t=at(13,n,e,i),t.elementType=qu,t.lanes=s,t;case Qu:return t=at(19,n,e,i),t.elementType=Qu,t.lanes=s,t;case lv:return Sl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ov:o=10;break e;case av:o=9;break e;case Md:o=11;break e;case Fd:o=14;break e;case dn:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=at(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function hr(t,e,n,r){return t=at(7,t,r,e),t.lanes=n,t}function Sl(t,e,n,r){return t=at(22,t,r,e),t.elementType=lv,t.lanes=n,t.stateNode={isHidden:!1},t}function Cu(t,e,n){return t=at(6,t,null,e),t.lanes=n,t}function Su(t,e,n){return e=at(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function WC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ru(0),this.expirationTimes=ru(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ru(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yf(t,e,n,r,i,s,o,a,l){return t=new WC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=at(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tf(s),t}function BC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Z_(t){if(!t)return jn;t=t._reactInternals;e:{if(Lr(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if($e(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if($e(n))return Zv(t,n,e)}return e}function ey(t,e,n,r,i,s,o,a,l){return t=yf(n,r,!0,t,i,s,o,a,l),t.context=Z_(null),n=t.current,r=De(),i=Rn(n),s=$t(r,i),s.callback=e??null,Pn(n,s,i),t.current.lanes=i,so(t,i,r),Ge(t,r),t}function Il(t,e,n,r){var i=e.current,s=De(),o=Rn(i);return n=Z_(n),e.context===null?e.context=n:e.pendingContext=n,e=$t(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Pn(i,e,o),t!==null&&(yt(t,i,o,s),ea(t,i,o)),o}function Ua(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $p(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wf(t,e){$p(t,e),(t=t.alternate)&&$p(t,e)}function VC(){return null}var ty=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ef(t){this._internalRoot=t}kl.prototype.render=Ef.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));Il(t,e,null,null)};kl.prototype.unmount=Ef.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Cr(function(){Il(null,t,null,null)}),e[Qt]=null}};function kl(t){this._internalRoot=t}kl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ov();t={blockedOn:null,target:t,priority:e};for(var n=0;n<hn.length&&e!==0&&e<hn[n].priority;n++);hn.splice(n,0,t),n===0&&Lv(t)}};function Cf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gp(){}function HC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ua(o);s.call(u)}}var o=ey(e,r,t,0,null,!1,!1,"",Gp);return t._reactRootContainer=o,t[Qt]=o.current,As(t.nodeType===8?t.parentNode:t),Cr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ua(l);a.call(u)}}var l=yf(t,0,!1,null,null,!1,!1,"",Gp);return t._reactRootContainer=l,t[Qt]=l.current,As(t.nodeType===8?t.parentNode:t),Cr(function(){Il(e,l,n,r)}),l}function Nl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ua(o);a.call(l)}}Il(e,o,t,i)}else o=HC(n,e,t,i,r);return Ua(o)}Rv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ns(e.pendingLanes);n!==0&&(zd(e,n|1),Ge(e,fe()),!($&6)&&(Ci=fe()+500,qn()))}break;case 13:Cr(function(){var r=Xt(t,1);if(r!==null){var i=De();yt(r,t,1,i)}}),wf(t,1)}};Wd=function(t){if(t.tag===13){var e=Xt(t,134217728);if(e!==null){var n=De();yt(e,t,134217728,n)}wf(t,134217728)}};bv=function(t){if(t.tag===13){var e=Rn(t),n=Xt(t,e);if(n!==null){var r=De();yt(n,t,e,r)}wf(t,e)}};Ov=function(){return K};Av=function(t,e){var n=K;try{return K=t,e()}finally{K=n}};oc=function(t,e,n){switch(e){case"input":if(Zu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=vl(r);if(!i)throw Error(I(90));cv(r),Zu(r,i)}}}break;case"textarea":fv(t,n);break;case"select":e=n.value,e!=null&&ri(t,!!n.multiple,e,!1)}};yv=mf;wv=Cr;var $C={usingClientEntryPoint:!1,Events:[ao,Gr,vl,vv,_v,mf]},qi={findFiberByHostInstance:ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},GC={bundleType:qi.bundleType,version:qi.version,rendererPackageName:qi.rendererPackageName,rendererConfig:qi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sv(t),t===null?null:t.stateNode},findFiberByHostInstance:qi.findFiberByHostInstance||VC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vo.isDisabled&&Vo.supportsFiber)try{hl=Vo.inject(GC),Rt=Vo}catch{}}tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$C;tt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cf(e))throw Error(I(200));return BC(t,e,null,n)};tt.createRoot=function(t,e){if(!Cf(t))throw Error(I(299));var n=!1,r="",i=ty;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=yf(t,1,!1,null,null,n,!1,r,i),t[Qt]=e.current,As(t.nodeType===8?t.parentNode:t),new Ef(e)};tt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=Sv(e),t=t===null?null:t.stateNode,t};tt.flushSync=function(t){return Cr(t)};tt.hydrate=function(t,e,n){if(!Tl(e))throw Error(I(200));return Nl(null,t,e,!0,n)};tt.hydrateRoot=function(t,e,n){if(!Cf(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ty;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ey(e,null,t,1,n??null,i,!1,s,o),t[Qt]=e.current,As(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new kl(e)};tt.render=function(t,e,n){if(!Tl(e))throw Error(I(200));return Nl(null,t,e,!1,n)};tt.unmountComponentAtNode=function(t){if(!Tl(t))throw Error(I(40));return t._reactRootContainer?(Cr(function(){Nl(null,null,t,!1,function(){t._reactRootContainer=null,t[Qt]=null})}),!0):!1};tt.unstable_batchedUpdates=mf;tt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Tl(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return Nl(t,e,n,!1,r)};tt.version="18.3.1-next-f1338f8080-20240426";function ny(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ny)}catch(t){console.error(t)}}ny(),nv.exports=tt;var KC=nv.exports,Kp=KC;Gu.createRoot=Kp.createRoot,Gu.hydrateRoot=Kp.hydrateRoot;var Yp={};/**
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
 */const ry={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const N=function(t,e){if(!t)throw Oi(e)},Oi=function(t){return new Error("Firebase Database ("+ry.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const iy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},YC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Sf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=s>>2,c=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(f=64)),r.push(n[d],n[c],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(iy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):YC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||c==null)throw new qC;const f=s<<2|a>>4;if(r.push(f),u!==64){const g=a<<4&240|u>>2;if(r.push(g),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sy=function(t){const e=iy(t);return Sf.encodeByteArray(e,!0)},ja=function(t){return sy(t).replace(/\./g,"")},za=function(t){try{return Sf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function QC(t){return oy(void 0,t)}function oy(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!XC(n)||(t[n]=oy(t[n],e[n]));return t}function XC(t){return t!=="__proto__"}/**
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
 */function JC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ZC=()=>JC().__FIREBASE_DEFAULTS__,eS=()=>{if(typeof process>"u"||typeof Yp>"u")return;const t=Yp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&za(t[1]);return e&&JSON.parse(e)},If=()=>{try{return ZC()||eS()||tS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ay=t=>{var e,n;return(n=(e=If())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},nS=t=>{const e=ay(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ly=()=>{var t;return(t=If())===null||t===void 0?void 0:t.config},uy=t=>{var e;return(e=If())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Pl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function rS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ja(JSON.stringify(n)),ja(JSON.stringify(o)),""].join(".")}/**
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
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function iS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sS(){const t=Ae();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dy(){return ry.NODE_ADMIN===!0}function oS(){try{return typeof indexedDB=="object"}catch{return!1}}function aS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const lS="FirebaseError";class Qn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=lS,Object.setPrototypeOf(this,Qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,uo.prototype.create)}}class uo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?uS(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Qn(i,a,r)}}function uS(t,e){return t.replace(cS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const cS=/\{\$([^}]+)}/g;/**
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
 */function Bs(t){return JSON.parse(t)}function Ce(t){return JSON.stringify(t)}/**
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
 */const fy=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Bs(za(s[0])||""),n=Bs(za(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},dS=function(t){const e=fy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},fS=function(t){const e=fy(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Dt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Si(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function jc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wa(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ba(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(qp(s)&&qp(o)){if(!Ba(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function qp(t){return t!==null&&typeof t=="object"}/**
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
 */function Ai(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function is(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ss(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class hS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const f=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=a^s&(o^a),d=1518500249):(u=s^o^a,d=1859775393):c<60?(u=s&o|a&(s|o),d=2400959708):(u=s^o^a,d=3395469782);const f=(i<<5|i>>>27)+u+l+d+r[c]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function pS(t,e){const n=new mS(t,e);return n.subscribe.bind(n)}class mS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");gS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Iu),i.error===void 0&&(i.error=Iu),i.complete===void 0&&(i.complete=Iu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Iu(){}function Tf(t,e){return`${t} failed: ${e} argument `}/**
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
 */const vS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,N(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},xl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ue(t){return t&&t._delegate?t._delegate:t}class Sr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ir="[DEFAULT]";/**
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
 */class _S{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Pl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wS(e))try{this.getOrInitializeService({instanceIdentifier:ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ir){return this.instances.has(e)}getOptions(e=ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ir){return this.component?this.component.multipleInstances?e:ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yS(t){return t===ir?void 0:t}function wS(t){return t.instantiationMode==="EAGER"}/**
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
 */class ES{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _S(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const CS={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},SS=Y.INFO,IS={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},kS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=IS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nf{constructor(e){this.name=e,this._logLevel=SS,this._logHandler=kS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const TS=(t,e)=>e.some(n=>t instanceof n);let Qp,Xp;function NS(){return Qp||(Qp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function PS(){return Xp||(Xp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hy=new WeakMap,zc=new WeakMap,py=new WeakMap,ku=new WeakMap,Pf=new WeakMap;function xS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(On(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hy.set(n,t)}).catch(()=>{}),Pf.set(e,t),e}function RS(t){if(zc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});zc.set(t,e)}let Wc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||py.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return On(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bS(t){Wc=t(Wc)}function OS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Tu(this),e,...n);return py.set(r,e.sort?e.sort():[e]),On(r)}:PS().includes(t)?function(...e){return t.apply(Tu(this),e),On(hy.get(this))}:function(...e){return On(t.apply(Tu(this),e))}}function AS(t){return typeof t=="function"?OS(t):(t instanceof IDBTransaction&&RS(t),TS(t,NS())?new Proxy(t,Wc):t)}function On(t){if(t instanceof IDBRequest)return xS(t);if(ku.has(t))return ku.get(t);const e=AS(t);return e!==t&&(ku.set(t,e),Pf.set(e,t)),e}const Tu=t=>Pf.get(t);function LS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=On(o);return r&&o.addEventListener("upgradeneeded",l=>{r(On(o.result),l.oldVersion,l.newVersion,On(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const DS=["get","getKey","getAll","getAllKeys","count"],MS=["put","add","delete","clear"],Nu=new Map;function Jp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Nu.get(e))return Nu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=MS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||DS.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Nu.set(e,s),s}bS(t=>({...t,get:(e,n,r)=>Jp(e,n)||t.get(e,n,r),has:(e,n)=>!!Jp(e,n)||t.has(e,n)}));/**
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
 */class FS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(US(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function US(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bc="@firebase/app",Zp="0.10.7";/**
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
 */const Ir=new Nf("@firebase/app"),jS="@firebase/app-compat",zS="@firebase/analytics-compat",WS="@firebase/analytics",BS="@firebase/app-check-compat",VS="@firebase/app-check",HS="@firebase/auth",$S="@firebase/auth-compat",GS="@firebase/database",KS="@firebase/database-compat",YS="@firebase/functions",qS="@firebase/functions-compat",QS="@firebase/installations",XS="@firebase/installations-compat",JS="@firebase/messaging",ZS="@firebase/messaging-compat",eI="@firebase/performance",tI="@firebase/performance-compat",nI="@firebase/remote-config",rI="@firebase/remote-config-compat",iI="@firebase/storage",sI="@firebase/storage-compat",oI="@firebase/firestore",aI="@firebase/vertexai-preview",lI="@firebase/firestore-compat",uI="firebase",cI="10.12.4";/**
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
 */const Vc="[DEFAULT]",dI={[Bc]:"fire-core",[jS]:"fire-core-compat",[WS]:"fire-analytics",[zS]:"fire-analytics-compat",[VS]:"fire-app-check",[BS]:"fire-app-check-compat",[HS]:"fire-auth",[$S]:"fire-auth-compat",[GS]:"fire-rtdb",[KS]:"fire-rtdb-compat",[YS]:"fire-fn",[qS]:"fire-fn-compat",[QS]:"fire-iid",[XS]:"fire-iid-compat",[JS]:"fire-fcm",[ZS]:"fire-fcm-compat",[eI]:"fire-perf",[tI]:"fire-perf-compat",[nI]:"fire-rc",[rI]:"fire-rc-compat",[iI]:"fire-gcs",[sI]:"fire-gcs-compat",[oI]:"fire-fst",[lI]:"fire-fst-compat",[aI]:"fire-vertex","fire-js":"fire-js",[uI]:"fire-js-all"};/**
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
 */const Va=new Map,fI=new Map,Hc=new Map;function em(t,e){try{t.container.addComponent(e)}catch(n){Ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ii(t){const e=t.name;if(Hc.has(e))return Ir.debug(`There were multiple attempts to register component ${e}.`),!1;Hc.set(e,t);for(const n of Va.values())em(n,t);for(const n of fI.values())em(n,t);return!0}function xf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Nt(t){return t.settings!==void 0}/**
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
 */const hI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},An=new uo("app","Firebase",hI);/**
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
 */class pI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw An.create("app-deleted",{appName:this._name})}}/**
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
 */const Li=cI;function my(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw An.create("bad-app-name",{appName:String(i)});if(n||(n=ly()),!n)throw An.create("no-options");const s=Va.get(i);if(s){if(Ba(n,s.options)&&Ba(r,s.config))return s;throw An.create("duplicate-app",{appName:i})}const o=new ES(i);for(const l of Hc.values())o.addComponent(l);const a=new pI(n,r,o);return Va.set(i,a),a}function gy(t=Vc){const e=Va.get(t);if(!e&&t===Vc&&ly())return my();if(!e)throw An.create("no-app",{appName:t});return e}function Ln(t,e,n){var r;let i=(r=dI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ir.warn(a.join(" "));return}Ii(new Sr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const mI="firebase-heartbeat-database",gI=1,Vs="firebase-heartbeat-store";let Pu=null;function vy(){return Pu||(Pu=LS(mI,gI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Vs)}catch(n){console.warn(n)}}}}).catch(t=>{throw An.create("idb-open",{originalErrorMessage:t.message})})),Pu}async function vI(t){try{const n=(await vy()).transaction(Vs),r=await n.objectStore(Vs).get(_y(t));return await n.done,r}catch(e){if(e instanceof Qn)Ir.warn(e.message);else{const n=An.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ir.warn(n.message)}}}async function tm(t,e){try{const r=(await vy()).transaction(Vs,"readwrite");await r.objectStore(Vs).put(e,_y(t)),await r.done}catch(n){if(n instanceof Qn)Ir.warn(n.message);else{const r=An.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ir.warn(r.message)}}}function _y(t){return`${t.name}!${t.options.appId}`}/**
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
 */const _I=1024,yI=30*24*60*60*1e3;class wI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new CI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nm();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=yI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=nm(),{heartbeatsToSend:r,unsentEntries:i}=EI(this._heartbeatsCache.heartbeats),s=ja(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function nm(){return new Date().toISOString().substring(0,10)}function EI(t,e=_I){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),rm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),rm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class CI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oS()?aS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await vI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function rm(t){return ja(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function SI(t){Ii(new Sr("platform-logger",e=>new FS(e),"PRIVATE")),Ii(new Sr("heartbeat",e=>new wI(e),"PRIVATE")),Ln(Bc,Zp,t),Ln(Bc,Zp,"esm2017"),Ln("fire-js","")}SI("");var II="firebase",kI="10.12.4";/**
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
 */Ln(II,kI,"app");function Rf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function yy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TI=yy,wy=new uo("auth","Firebase",yy());/**
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
 */const Ha=new Nf("@firebase/auth");function NI(t,...e){Ha.logLevel<=Y.WARN&&Ha.warn(`Auth (${Li}): ${t}`,...e)}function aa(t,...e){Ha.logLevel<=Y.ERROR&&Ha.error(`Auth (${Li}): ${t}`,...e)}/**
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
 */function Ct(t,...e){throw bf(t,...e)}function Ot(t,...e){return bf(t,...e)}function Ey(t,e,n){const r=Object.assign(Object.assign({},TI()),{[e]:n});return new uo("auth","Firebase",r).create(e,{appName:t.name})}function Gt(t){return Ey(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return wy.create(t,...e)}function D(t,e,...n){if(!t)throw bf(e,...n)}function Wt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw aa(e),new Error(e)}function Zt(t,e){t||Wt(e)}/**
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
 */function $c(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function PI(){return im()==="http:"||im()==="https:"}function im(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function xI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(PI()||iS()||"connection"in navigator)?navigator.onLine:!0}function RI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class co{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zt(n>e,"Short delay should be less than long delay!"),this.isMobile=kf()||cy()}get(){return xI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Of(t,e){Zt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Cy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const bI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const OI=new co(3e4,6e4);function Xn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Jn(t,e,n,r,i={}){return Sy(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ai(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Cy.fetch()(Iy(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Sy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},bI),e);try{const i=new LI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ho(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ho(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ho(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ho(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ey(t,d,u);Ct(t,d)}}catch(i){if(i instanceof Qn)throw i;Ct(t,"network-request-failed",{message:String(i)})}}async function fo(t,e,n,r,i={}){const s=await Jn(t,e,n,r,i);return"mfaPendingCredential"in s&&Ct(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Iy(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Of(t.config,i):`${t.config.apiScheme}://${i}`}function AI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class LI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ot(this.auth,"network-request-failed")),OI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ho(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ot(t,e,r);return i.customData._tokenResponse=n,i}function sm(t){return t!==void 0&&t.enterprise!==void 0}class DI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return AI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function MI(t,e){return Jn(t,"GET","/v2/recaptchaConfig",Xn(t,e))}/**
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
 */async function FI(t,e){return Jn(t,"POST","/v1/accounts:delete",e)}async function ky(t,e){return Jn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function vs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function UI(t,e=!1){const n=Ue(t),r=await n.getIdToken(e),i=Af(r);D(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:vs(xu(i.auth_time)),issuedAtTime:vs(xu(i.iat)),expirationTime:vs(xu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function xu(t){return Number(t)*1e3}function Af(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return aa("JWT malformed, contained fewer than 3 sections"),null;try{const i=za(n);return i?JSON.parse(i):(aa("Failed to decode base64 JWT payload"),null)}catch(i){return aa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function om(t){const e=Af(t);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Hs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Qn&&jI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function jI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class zI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Gc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vs(this.lastLoginAt),this.creationTime=vs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $a(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Hs(t,ky(n,{idToken:r}));D(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ty(s.providerUserInfo):[],a=BI(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Gc(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function WI(t){const e=Ue(t);await $a(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ty(t){return t.map(e=>{var{providerId:n}=e,r=Rf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function VI(t,e){const n=await Sy(t,{},async()=>{const r=Ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Iy(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Cy.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function HI(t,e){return Jn(t,"POST","/v2/accounts:revokeToken",Xn(t,e))}/**
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
 */class ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):om(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){D(e.length!==0,"internal-error");const n=om(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(D(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await VI(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ui;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(D(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ui,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
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
 */function un(t,e){D(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Rf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Gc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Hs(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return UI(this,e)}reload(){return WI(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $a(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nt(this.auth.app))return Promise.reject(Gt(this.auth));const e=await this.getIdToken();return await Hs(this,FI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:y,isAnonymous:k,providerData:R,stsTokenManager:x}=n;D(m&&x,e,"internal-error");const S=ui.fromJSON(this.name,x);D(typeof m=="string",e,"internal-error"),un(c,e.name),un(f,e.name),D(typeof y=="boolean",e,"internal-error"),D(typeof k=="boolean",e,"internal-error"),un(g,e.name),un(v,e.name),un(_,e.name),un(E,e.name),un(p,e.name),un(h,e.name);const C=new Bt({uid:m,auth:e,email:f,emailVerified:y,displayName:c,isAnonymous:k,photoURL:v,phoneNumber:g,tenantId:_,stsTokenManager:S,createdAt:p,lastLoginAt:h});return R&&Array.isArray(R)&&(C.providerData=R.map(P=>Object.assign({},P))),E&&(C._redirectEventId=E),C}static async _fromIdTokenResponse(e,n,r=!1){const i=new ui;i.updateFromServerResponse(n);const s=new Bt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await $a(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];D(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Ty(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ui;a.updateFromIdToken(r);const l=new Bt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Gc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const am=new Map;function Vt(t){Zt(t instanceof Function,"Expected a class definition");let e=am.get(t);return e?(Zt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,am.set(t,e),e)}/**
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
 */class Ny{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ny.type="NONE";const lm=Ny;/**
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
 */function la(t,e,n){return`firebase:${t}:${e}:${n}`}class ci{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=la(this.userKey,i.apiKey,s),this.fullPersistenceKey=la("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ci(Vt(lm),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Vt(lm);const o=la(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const c=Bt._fromJSON(e,d);u!==s&&(a=c),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ci(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ci(s,e,r))}}/**
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
 */function um(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ry(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Py(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Oy(e))return"Blackberry";if(Ay(e))return"Webos";if(Lf(e))return"Safari";if((e.includes("chrome/")||xy(e))&&!e.includes("edge/"))return"Chrome";if(by(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Py(t=Ae()){return/firefox\//i.test(t)}function Lf(t=Ae()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xy(t=Ae()){return/crios\//i.test(t)}function Ry(t=Ae()){return/iemobile/i.test(t)}function by(t=Ae()){return/android/i.test(t)}function Oy(t=Ae()){return/blackberry/i.test(t)}function Ay(t=Ae()){return/webos/i.test(t)}function Rl(t=Ae()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $I(t=Ae()){var e;return Rl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function GI(){return sS()&&document.documentMode===10}function Ly(t=Ae()){return Rl(t)||by(t)||Ay(t)||Oy(t)||/windows phone/i.test(t)||Ry(t)}function KI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Dy(t,e=[]){let n;switch(t){case"Browser":n=um(Ae());break;case"Worker":n=`${um(Ae())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Li}/${r}`}/**
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
 */class YI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function qI(t,e={}){return Jn(t,"GET","/v2/passwordPolicy",Xn(t,e))}/**
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
 */const QI=6;class XI{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:QI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class JI{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cm(this),this.idTokenSubscription=new cm(this),this.beforeStateQueue=new YI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ci.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ky(this,{idToken:e}),r=await Bt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Nt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $a(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=RI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Nt(this.app))return Promise.reject(Gt(this));const n=e?Ue(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Nt(this.app)?Promise.reject(Gt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Nt(this.app)?Promise.reject(Gt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qI(this),n=new XI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new uo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await HI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vt(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await ci.create(this,[Vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(D(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&NI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Dr(t){return Ue(t)}class cm{constructor(e){this.auth=e,this.observer=null,this.addObserver=pS(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let bl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ZI(t){bl=t}function My(t){return bl.loadJS(t)}function ek(){return bl.recaptchaEnterpriseScript}function tk(){return bl.gapiScript}function nk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const rk="recaptcha-enterprise",ik="NO_RECAPTCHA";class sk{constructor(e){this.type=rk,this.auth=Dr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{MI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new DI(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;sm(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(ik)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&sm(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=ek();l.length!==0&&(l+=a),My(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function dm(t,e,n,r=!1){const i=new sk(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Kc(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await dm(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await dm(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function ok(t,e){const n=xf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ba(s,e??{}))return i;Ct(i,"already-initialized")}return n.initialize({options:e})}function ak(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function lk(t,e,n){const r=Dr(t);D(r._canInitEmulator,r,"emulator-config-failed"),D(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Fy(e),{host:o,port:a}=uk(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),ck()}function Fy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function uk(t){const e=Fy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:fm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:fm(o)}}}function fm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ck(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Df{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wt("not implemented")}_getIdTokenResponse(e){return Wt("not implemented")}_linkToIdToken(e,n){return Wt("not implemented")}_getReauthenticationResolver(e){return Wt("not implemented")}}async function dk(t,e){return Jn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function fk(t,e){return fo(t,"POST","/v1/accounts:signInWithPassword",Xn(t,e))}/**
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
 */async function hk(t,e){return fo(t,"POST","/v1/accounts:signInWithEmailLink",Xn(t,e))}async function pk(t,e){return fo(t,"POST","/v1/accounts:signInWithEmailLink",Xn(t,e))}/**
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
 */class $s extends Df{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new $s(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new $s(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kc(e,n,"signInWithPassword",fk);case"emailLink":return hk(e,{email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kc(e,r,"signUpPassword",dk);case"emailLink":return pk(e,{idToken:n,email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function di(t,e){return fo(t,"POST","/v1/accounts:signInWithIdp",Xn(t,e))}/**
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
 */const mk="http://localhost";class kr extends Df{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new kr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Rf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new kr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return di(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,di(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,di(e,n)}buildRequest(){const e={requestUri:mk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ai(n)}return e}}/**
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
 */function gk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vk(t){const e=is(ss(t)).link,n=e?is(ss(e)).deep_link_id:null,r=is(ss(t)).deep_link_id;return(r?is(ss(r)).link:null)||r||n||e||t}class Mf{constructor(e){var n,r,i,s,o,a;const l=is(ss(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,c=gk((i=l.mode)!==null&&i!==void 0?i:null);D(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=vk(e);try{return new Mf(n)}catch{return null}}}/**
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
 */class Di{constructor(){this.providerId=Di.PROVIDER_ID}static credential(e,n){return $s._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Mf.parseLink(n);return D(r,"argument-error"),$s._fromEmailAndCode(e,r.code,r.tenantId)}}Di.PROVIDER_ID="password";Di.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Uy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ho extends Uy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class mn extends ho{constructor(){super("facebook.com")}static credential(e){return kr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";mn.PROVIDER_ID="facebook.com";/**
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
 */class gn extends ho{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return kr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return gn.credential(n,r)}catch{return null}}}gn.GOOGLE_SIGN_IN_METHOD="google.com";gn.PROVIDER_ID="google.com";/**
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
 */class vn extends ho{constructor(){super("github.com")}static credential(e){return kr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.GITHUB_SIGN_IN_METHOD="github.com";vn.PROVIDER_ID="github.com";/**
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
 */class _n extends ho{constructor(){super("twitter.com")}static credential(e,n){return kr._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return _n.credential(n,r)}catch{return null}}}_n.TWITTER_SIGN_IN_METHOD="twitter.com";_n.PROVIDER_ID="twitter.com";/**
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
 */async function _k(t,e){return fo(t,"POST","/v1/accounts:signUp",Xn(t,e))}/**
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
 */class Tr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Bt._fromIdTokenResponse(e,r,i),o=hm(r);return new Tr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=hm(r);return new Tr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function hm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ga extends Qn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ga.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ga(e,n,r,i)}}function jy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ga._fromErrorAndOperation(t,s,e,r):s})}async function yk(t,e,n=!1){const r=await Hs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Tr._forOperation(t,"link",r)}/**
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
 */async function wk(t,e,n=!1){const{auth:r}=t;if(Nt(r.app))return Promise.reject(Gt(r));const i="reauthenticate";try{const s=await Hs(t,jy(r,i,e,t),n);D(s.idToken,r,"internal-error");const o=Af(s.idToken);D(o,r,"internal-error");const{sub:a}=o;return D(t.uid===a,r,"user-mismatch"),Tr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ct(r,"user-mismatch"),s}}/**
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
 */async function zy(t,e,n=!1){if(Nt(t.app))return Promise.reject(Gt(t));const r="signIn",i=await jy(t,r,e),s=await Tr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Ek(t,e){return zy(Dr(t),e)}/**
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
 */async function Wy(t){const e=Dr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ck(t,e,n){if(Nt(t.app))return Promise.reject(Gt(t));const r=Dr(t),o=await Kc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_k).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Wy(t),l}),a=await Tr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Sk(t,e,n){return Nt(t.app)?Promise.reject(Gt(t)):Ek(Ue(t),Di.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Wy(t),r})}function Ik(t,e,n,r){return Ue(t).onIdTokenChanged(e,n,r)}function kk(t,e,n){return Ue(t).beforeAuthStateChanged(e,n)}function Tk(t){return Ue(t).signOut()}const Ka="__sak";/**
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
 */class By{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ka,"1"),this.storage.removeItem(Ka),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Nk(){const t=Ae();return Lf(t)||Rl(t)}const Pk=1e3,xk=10;class Vy extends By{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Nk()&&KI(),this.fallbackToPolling=Ly(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);GI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,xk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Pk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vy.type="LOCAL";const Hy=Vy;/**
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
 */class $y extends By{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$y.type="SESSION";const Gy=$y;/**
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
 */function Rk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ol{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ol(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await Rk(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ol.receivers=[];/**
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
 */function Ff(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class bk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Ff("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const f=c;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function At(){return window}function Ok(t){At().location.href=t}/**
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
 */function Ky(){return typeof At().WorkerGlobalScope<"u"&&typeof At().importScripts=="function"}async function Ak(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Lk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Dk(){return Ky()?self:null}/**
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
 */const Yy="firebaseLocalStorageDb",Mk=1,Ya="firebaseLocalStorage",qy="fbase_key";class po{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Al(t,e){return t.transaction([Ya],e?"readwrite":"readonly").objectStore(Ya)}function Fk(){const t=indexedDB.deleteDatabase(Yy);return new po(t).toPromise()}function Yc(){const t=indexedDB.open(Yy,Mk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ya,{keyPath:qy})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ya)?e(r):(r.close(),await Fk(),e(await Yc()))})})}async function pm(t,e,n){const r=Al(t,!0).put({[qy]:e,value:n});return new po(r).toPromise()}async function Uk(t,e){const n=Al(t,!1).get(e),r=await new po(n).toPromise();return r===void 0?null:r.value}function mm(t,e){const n=Al(t,!0).delete(e);return new po(n).toPromise()}const jk=800,zk=3;class Qy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>zk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ky()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ol._getInstance(Dk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ak(),!this.activeServiceWorker)return;this.sender=new bk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Lk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yc();return await pm(e,Ka,"1"),await mm(e,Ka),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>pm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Uk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>mm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Al(i,!1).getAll();return new po(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qy.type="LOCAL";const Wk=Qy;new co(3e4,6e4);/**
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
 */function Bk(t,e){return e?Vt(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Uf extends Df{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return di(e,this._buildIdpRequest())}_linkToIdToken(e,n){return di(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return di(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Vk(t){return zy(t.auth,new Uf(t),t.bypassAuthState)}function Hk(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),wk(n,new Uf(t),t.bypassAuthState)}async function $k(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),yk(n,new Uf(t),t.bypassAuthState)}/**
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
 */class Xy{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Vk;case"linkViaPopup":case"linkViaRedirect":return $k;case"reauthViaPopup":case"reauthViaRedirect":return Hk;default:Ct(this.auth,"internal-error")}}resolve(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Gk=new co(2e3,1e4);class Zr extends Xy{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Zr.currentPopupAction&&Zr.currentPopupAction.cancel(),Zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){Zt(this.filter.length===1,"Popup operations only handle one event");const e=Ff();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Gk.get())};e()}}Zr.currentPopupAction=null;/**
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
 */const Kk="pendingRedirect",ua=new Map;class Yk extends Xy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ua.get(this.auth._key());if(!e){try{const r=await qk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ua.set(this.auth._key(),e)}return this.bypassAuthState||ua.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qk(t,e){const n=Jk(e),r=Xk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Qk(t,e){ua.set(t._key(),e)}function Xk(t){return Vt(t._redirectPersistence)}function Jk(t){return la(Kk,t.config.apiKey,t.name)}async function Zk(t,e,n=!1){if(Nt(t.app))return Promise.reject(Gt(t));const r=Dr(t),i=Bk(r,e),o=await new Yk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const eT=10*60*1e3;class tT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Jy(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ot(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eT&&this.cachedEventUids.clear(),this.cachedEventUids.has(gm(e))}saveEventToCache(e){this.cachedEventUids.add(gm(e)),this.lastProcessedEventTime=Date.now()}}function gm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Jy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jy(t);default:return!1}}/**
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
 */async function rT(t,e={}){return Jn(t,"GET","/v1/projects",e)}/**
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
 */const iT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sT=/^https?/;async function oT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rT(t);for(const n of e)try{if(aT(n))return}catch{}Ct(t,"unauthorized-domain")}function aT(t){const e=$c(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!sT.test(n))return!1;if(iT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const lT=new co(3e4,6e4);function vm(){const t=At().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uT(t){return new Promise((e,n)=>{var r,i,s;function o(){vm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vm(),n(Ot(t,"network-request-failed"))},timeout:lT.get()})}if(!((i=(r=At().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=At().gapi)===null||s===void 0)&&s.load)o();else{const a=nk("iframefcb");return At()[a]=()=>{gapi.load?o():n(Ot(t,"network-request-failed"))},My(`${tk()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ca=null,e})}let ca=null;function cT(t){return ca=ca||uT(t),ca}/**
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
 */const dT=new co(5e3,15e3),fT="__/auth/iframe",hT="emulator/auth/iframe",pT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gT(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Of(e,hT):`https://${t.config.authDomain}/${fT}`,r={apiKey:e.apiKey,appName:t.name,v:Li},i=mT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ai(r).slice(1)}`}async function vT(t){const e=await cT(t),n=At().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:gT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ot(t,"network-request-failed"),a=At().setTimeout(()=>{s(o)},dT.get());function l(){At().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const _T={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yT=500,wT=600,ET="_blank",CT="http://localhost";class _m{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ST(t,e,n,r=yT,i=wT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},_T),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ae().toLowerCase();n&&(a=xy(u)?ET:n),Py(u)&&(e=e||CT,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[g,v])=>`${f}${g}=${v},`,"");if($I(u)&&a!=="_self")return IT(e||"",a),new _m(null);const c=window.open(e||"",a,d);D(c,t,"popup-blocked");try{c.focus()}catch{}return new _m(c)}function IT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const kT="__/auth/handler",TT="emulator/auth/handler",NT=encodeURIComponent("fac");async function ym(t,e,n,r,i,s){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Li,eventId:i};if(e instanceof Uy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",jc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries({}))o[d]=c}if(e instanceof ho){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${NT}=${encodeURIComponent(l)}`:"";return`${PT(t)}?${Ai(a).slice(1)}${u}`}function PT({config:t}){return t.emulator?Of(t,TT):`https://${t.authDomain}/${kT}`}/**
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
 */const Ru="webStorageSupport";class xT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gy,this._completeRedirectFn=Zk,this._overrideRedirectResult=Qk}async _openPopup(e,n,r,i){var s;Zt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ym(e,n,r,$c(),i);return ST(e,o,Ff())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ym(e,n,r,$c(),i);return Ok(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Zt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await vT(e),r=new tT(e);return n.register("authEvent",i=>(D(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ru,{type:Ru},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ru];o!==void 0&&n(!!o),Ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=oT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ly()||Lf()||Rl()}}const RT=xT;var wm="@firebase/auth",Em="1.7.5";/**
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
 */class bT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function OT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function AT(t){Ii(new Sr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;D(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dy(t)},u=new JI(r,i,s,l);return ak(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ii(new Sr("auth-internal",e=>{const n=Dr(e.getProvider("auth").getImmediate());return(r=>new bT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ln(wm,Em,OT(t)),Ln(wm,Em,"esm2017")}/**
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
 */const LT=5*60,DT=uy("authIdTokenMaxAge")||LT;let Cm=null;const MT=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>DT)return;const i=n==null?void 0:n.token;Cm!==i&&(Cm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function FT(t=gy()){const e=xf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ok(t,{popupRedirectResolver:RT,persistence:[Wk,Hy,Gy]}),r=uy("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=MT(s.toString());kk(n,o,()=>o(n.currentUser)),Ik(n,a=>o(a))}}const i=ay("auth");return i&&lk(n,`http://${i}`),n}function UT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}ZI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ot("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",UT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});AT("Browser");function jT(t){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let n="";for(let r=0;r<t;r++){const i=Math.floor(Math.random()*e.length);n+=e[i]}return n}const zT={baseURL:"/dock-it"},Kt={generateRandomString:jT,references:zT},WT={apiKey:"AIzaSyDVGWGzZzzK6CuIO_c53kKI5khsjc9E0IM",authDomain:"dock-it-1553b.firebaseapp.com",databaseURL:"https://dock-it-1553b-default-rtdb.firebaseio.com",projectId:"dock-it-1553b",storageBucket:"dock-it-1553b.appspot.com",messagingSenderId:"736775214430",appId:"1:736775214430:web:98b131a44ce34f2cee6bcf"},Zy=my(WT),jf=FT(Zy);jf.setPersistence(Hy);function BT(t){Tk(jf).then(()=>{t(Kt.references.baseURL)}).catch(e=>{console.log(e)})}function VT(t,e){e(t?Kt.references.baseURL+"/lists":Kt.references.baseURL)}const pr={app:Zy,auth:jf,SignOut:BT,RedirectLogin:VT},e0=""+new URL("Logo-BsIO_6s1.png",import.meta.url).href,HT=""+new URL("Planet-CHagPo_e.png",import.meta.url).href,$o=""+new URL("Star-1joJ2sKb.png",import.meta.url).href,$T=""+new URL("Marty-Astronaut-C-RGo0wM.png",import.meta.url).href,t0=""+new URL("Rocket-S2ugJm8i.png",import.meta.url).href;/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gs(){return Gs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Gs.apply(this,arguments)}var En;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(En||(En={}));const Sm="popstate";function GT(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return qc("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:qa(i)}return YT(e,n,null,t)}function pe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function n0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function KT(){return Math.random().toString(36).substr(2,8)}function Im(t,e){return{usr:t.state,key:t.key,idx:e}}function qc(t,e,n,r){return n===void 0&&(n=null),Gs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Mi(e):e,{state:n,key:e&&e.key||r||KT()})}function qa(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Mi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function YT(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=En.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(Gs({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){a=En.Pop;let E=d(),p=E==null?null:E-u;u=E,l&&l({action:a,location:_.location,delta:p})}function f(E,p){a=En.Push;let h=qc(_.location,E,p);u=d()+1;let m=Im(h,u),y=_.createHref(h);try{o.pushState(m,"",y)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(y)}s&&l&&l({action:a,location:_.location,delta:1})}function g(E,p){a=En.Replace;let h=qc(_.location,E,p);u=d();let m=Im(h,u),y=_.createHref(h);o.replaceState(m,"",y),s&&l&&l({action:a,location:_.location,delta:0})}function v(E){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof E=="string"?E:qa(E);return h=h.replace(/ $/,"%20"),pe(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let _={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Sm,c),l=E,()=>{i.removeEventListener(Sm,c),l=null}},createHref(E){return e(i,E)},createURL:v,encodeLocation(E){let p=v(E);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:g,go(E){return o.go(E)}};return _}var km;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(km||(km={}));function qT(t,e,n){return n===void 0&&(n="/"),QT(t,e,n,!1)}function QT(t,e,n,r){let i=typeof e=="string"?Mi(e):e,s=zf(i.pathname||"/",n);if(s==null)return null;let o=r0(t);XT(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=lN(s);a=oN(o[l],u,r)}return a}function r0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(pe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Dn([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(pe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),r0(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:iN(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of i0(s.path))i(s,o,l)}),e}function i0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=i0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function XT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:sN(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const JT=/^:[\w-]+$/,ZT=3,eN=2,tN=1,nN=10,rN=-2,Tm=t=>t==="*";function iN(t,e){let n=t.split("/"),r=n.length;return n.some(Tm)&&(r+=rN),e&&(r+=eN),n.filter(i=>!Tm(i)).reduce((i,s)=>i+(JT.test(s)?ZT:s===""?tN:nN),r)}function sN(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function oN(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",c=Nm({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),f=l.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=Nm({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!c)return null;Object.assign(i,c.params),o.push({params:i,pathname:Dn([s,c.pathname]),pathnameBase:fN(Dn([s,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(s=Dn([s,c.pathnameBase]))}return o}function Nm(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=aN(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:f,isOptional:g}=d;if(f==="*"){let _=a[c]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const v=a[c];return g&&!v?u[f]=void 0:u[f]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function aN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),n0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function lN(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return n0(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function zf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function uN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Mi(t):t;return{pathname:n?n.startsWith("/")?n:cN(n,e):e,search:hN(r),hash:pN(i)}}function cN(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function bu(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function dN(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function s0(t,e){let n=dN(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function o0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Mi(t):(i=Gs({},t),pe(!i.pathname||!i.pathname.includes("?"),bu("?","pathname","search",i)),pe(!i.pathname||!i.pathname.includes("#"),bu("#","pathname","hash",i)),pe(!i.search||!i.search.includes("#"),bu("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),c-=1;i.pathname=f.join("/")}a=c>=0?e[c]:"/"}let l=uN(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Dn=t=>t.join("/").replace(/\/\/+/g,"/"),fN=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),hN=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,pN=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function mN(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const a0=["post","put","patch","delete"];new Set(a0);const gN=["get",...a0];new Set(gN);/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ks(){return Ks=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ks.apply(this,arguments)}const Wf=T.createContext(null),vN=T.createContext(null),Mr=T.createContext(null),Ll=T.createContext(null),Fr=T.createContext({outlet:null,matches:[],isDataRoute:!1}),l0=T.createContext(null);function _N(t,e){let{relative:n}=e===void 0?{}:e;mo()||pe(!1);let{basename:r,navigator:i}=T.useContext(Mr),{hash:s,pathname:o,search:a}=c0(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Dn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function mo(){return T.useContext(Ll)!=null}function Dl(){return mo()||pe(!1),T.useContext(Ll).location}function u0(t){T.useContext(Mr).static||T.useLayoutEffect(t)}function go(){let{isDataRoute:t}=T.useContext(Fr);return t?bN():yN()}function yN(){mo()||pe(!1);let t=T.useContext(Wf),{basename:e,future:n,navigator:r}=T.useContext(Mr),{matches:i}=T.useContext(Fr),{pathname:s}=Dl(),o=JSON.stringify(s0(i,n.v7_relativeSplatPath)),a=T.useRef(!1);return u0(()=>{a.current=!0}),T.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=o0(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Dn([e,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[e,r,o,s,t])}function c0(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=T.useContext(Mr),{matches:i}=T.useContext(Fr),{pathname:s}=Dl(),o=JSON.stringify(s0(i,r.v7_relativeSplatPath));return T.useMemo(()=>o0(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function wN(t,e){return EN(t,e)}function EN(t,e,n,r){mo()||pe(!1);let{navigator:i}=T.useContext(Mr),{matches:s}=T.useContext(Fr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Dl(),d;if(e){var c;let E=typeof e=="string"?Mi(e):e;l==="/"||(c=E.pathname)!=null&&c.startsWith(l)||pe(!1),d=E}else d=u;let f=d.pathname||"/",g=f;if(l!=="/"){let E=l.replace(/^\//,"").split("/");g="/"+f.replace(/^\//,"").split("/").slice(E.length).join("/")}let v=qT(t,{pathname:g}),_=TN(v&&v.map(E=>Object.assign({},E,{params:Object.assign({},a,E.params),pathname:Dn([l,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?l:Dn([l,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),s,n,r);return e&&_?T.createElement(Ll.Provider,{value:{location:Ks({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:En.Pop}},_):_}function CN(){let t=RN(),e=mN(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},e),n?T.createElement("pre",{style:i},n):null,null)}const SN=T.createElement(CN,null);class IN extends T.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?T.createElement(Fr.Provider,{value:this.props.routeContext},T.createElement(l0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function kN(t){let{routeContext:e,match:n,children:r}=t,i=T.useContext(Wf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Fr.Provider,{value:e},r)}function TN(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id])!==void 0);d>=0||pe(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let c=o[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:f,errors:g}=n,v=c.route.loader&&f[c.route.id]===void 0&&(!g||g[c.route.id]===void 0);if(c.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,c,f)=>{let g,v=!1,_=null,E=null;n&&(g=a&&c.route.id?a[c.route.id]:void 0,_=c.route.errorElement||SN,l&&(u<0&&f===0?(v=!0,E=null):u===f&&(v=!0,E=c.route.hydrateFallbackElement||null)));let p=e.concat(o.slice(0,f+1)),h=()=>{let m;return g?m=_:v?m=E:c.route.Component?m=T.createElement(c.route.Component,null):c.route.element?m=c.route.element:m=d,T.createElement(kN,{match:c,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:m})};return n&&(c.route.ErrorBoundary||c.route.errorElement||f===0)?T.createElement(IN,{location:n.location,revalidation:n.revalidation,component:_,error:g,children:h(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):h()},null)}var d0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(d0||{}),Qa=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Qa||{});function NN(t){let e=T.useContext(Wf);return e||pe(!1),e}function PN(t){let e=T.useContext(vN);return e||pe(!1),e}function xN(t){let e=T.useContext(Fr);return e||pe(!1),e}function f0(t){let e=xN(),n=e.matches[e.matches.length-1];return n.route.id||pe(!1),n.route.id}function RN(){var t;let e=T.useContext(l0),n=PN(Qa.UseRouteError),r=f0(Qa.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function bN(){let{router:t}=NN(d0.UseNavigateStable),e=f0(Qa.UseNavigateStable),n=T.useRef(!1);return u0(()=>{n.current=!0}),T.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ks({fromRouteId:e},s)))},[t,e])}function da(t){pe(!1)}function ON(t){let{basename:e="/",children:n=null,location:r,navigationType:i=En.Pop,navigator:s,static:o=!1,future:a}=t;mo()&&pe(!1);let l=e.replace(/^\/*/,"/"),u=T.useMemo(()=>({basename:l,navigator:s,static:o,future:Ks({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Mi(r));let{pathname:d="/",search:c="",hash:f="",state:g=null,key:v="default"}=r,_=T.useMemo(()=>{let E=zf(d,l);return E==null?null:{location:{pathname:E,search:c,hash:f,state:g,key:v},navigationType:i}},[l,d,c,f,g,v,i]);return _==null?null:T.createElement(Mr.Provider,{value:u},T.createElement(Ll.Provider,{children:n,value:_}))}function AN(t){let{children:e,location:n}=t;return wN(Qc(e),n)}new Promise(()=>{});function Qc(t,e){e===void 0&&(e=[]);let n=[];return T.Children.forEach(t,(r,i)=>{if(!T.isValidElement(r))return;let s=[...e,i];if(r.type===T.Fragment){n.push.apply(n,Qc(r.props.children,s));return}r.type!==da&&pe(!1),!r.props.index||!r.props.children||pe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Qc(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xc(){return Xc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xc.apply(this,arguments)}function LN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function DN(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function MN(t,e){return t.button===0&&(!e||e==="_self")&&!DN(t)}const FN=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],UN="6";try{window.__reactRouterVersion=UN}catch{}const jN="startTransition",Pm=ME[jN];function zN(t){let{basename:e,children:n,future:r,window:i}=t,s=T.useRef();s.current==null&&(s.current=GT({window:i,v5Compat:!0}));let o=s.current,[a,l]=T.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=T.useCallback(c=>{u&&Pm?Pm(()=>l(c)):l(c)},[l,u]);return T.useLayoutEffect(()=>o.listen(d),[o,d]),T.createElement(ON,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const WN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",BN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,VN=T.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d,unstable_viewTransition:c}=e,f=LN(e,FN),{basename:g}=T.useContext(Mr),v,_=!1;if(typeof u=="string"&&BN.test(u)&&(v=u,WN))try{let m=new URL(window.location.href),y=u.startsWith("//")?new URL(m.protocol+u):new URL(u),k=zf(y.pathname,g);y.origin===m.origin&&k!=null?u=k+y.search+y.hash:_=!0}catch{}let E=_N(u,{relative:i}),p=HN(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:c});function h(m){r&&r(m),m.defaultPrevented||p(m)}return T.createElement("a",Xc({},f,{href:v||E,onClick:_||s?r:h,ref:n,target:l}))});var xm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(xm||(xm={}));var Rm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Rm||(Rm={}));function HN(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=go(),u=Dl(),d=c0(t,{relative:o});return T.useCallback(c=>{if(MN(c,n)){c.preventDefault();let f=r!==void 0?r:qa(u)===qa(d);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,d,r,i,n,t,s,o,a])}function $N(){return w.jsx("div",{id:"HomeGradient",children:w.jsx("div",{className:"HomeBackground",children:w.jsxs("div",{className:"HomeContainer",children:[w.jsxs("div",{id:"HomeTitle",children:[w.jsx("h3",{children:"WELCOME TO"}),w.jsx("img",{src:e0,alt:""})]}),w.jsxs("div",{id:"HomeInformation",children:[w.jsxs("div",{id:"HomeImages",children:[w.jsx("img",{src:$T,id:"HomeMarty",alt:""}),w.jsx("img",{src:HT,id:"HomePlanet",alt:""}),w.jsx("img",{src:$o,id:"HomeStar1",alt:""}),w.jsx("img",{src:$o,id:"HomeStar2",alt:""}),w.jsx("img",{src:$o,id:"HomeStar3",alt:""}),w.jsx("img",{src:$o,id:"HomeStar4",alt:""}),w.jsx("img",{src:t0,id:"HomeRocket",alt:""})]}),w.jsx("div",{id:"HomeSubtitle",children:"A minimal to-do list app that helps you focus on what needs to be done."})]}),w.jsx(VN,{to:"onboarding",id:"GetStartedButton",children:"GET STARTED"})]})})})}class h0 extends T.Component{constructor(){super(),this.state={loginData:{email:"",password:"",password2:""},error:{isVisible:!1,message:""}},this.error={visible:!1,message:"Error"},this.submitForm=this.submitForm.bind(this),this.handleSubmit=this.handleSubmit.bind(this),this.handleChange=this.handleChange.bind(this)}componentDidMount(){}componentWillUnmount(){}submitForm(){}handleSubmit(e){e.preventDefault(),this.submitForm()}handleChange(e){const{name:n,value:r}=e.target;this.setState(i=>({loginData:{...i.loginData,[n]:r}}))}render(){return w.jsxs("form",{onSubmit:this.handleSubmit,className:"OnboardingForm",children:[w.jsxs("div",{children:[w.jsx("label",{children:"EMAIL"}),w.jsx("input",{type:"email",name:"email",value:this.state.loginData.email,onChange:this.handleChange})]}),w.jsxs("div",{children:[w.jsx("label",{children:"PASSWORD"}),w.jsx("input",{type:"password",name:"password",value:this.state.loginData.password,onChange:this.handleChange})]}),w.jsxs("div",{children:[w.jsx("label",{children:"RETYPE PASSWORD"}),w.jsx("input",{type:"password",name:"password2",value:this.state.loginData.password2,onChange:this.handleChange})]}),w.jsx("div",{children:w.jsx("p",{className:"error",style:{visibility:this.state.error.visible?"visible":"hidden"},children:this.state.error.message})}),w.jsx("div",{children:w.jsx("button",{type:"submit",className:"OnboardingSubmitButton",children:this.buttonName})})]})}}function GN(t){return function(n){const r=go();return w.jsx(t,{...n,navigate:r})}}class KN extends h0{loginUserWithFirebase(e,n,r){if(n!==r){this.setState(()=>({error:{visible:!0,message:"Passwords do not match"}}));return}Sk(pr.auth,e,n).then(i=>{const s=i.user;console.log("Login successful "+s.email),this.props.navigate(Kt.references.baseURL+"/lists",{state:s.email})}).catch(i=>{const s=i.message;console.log(i),this.setState(()=>({error:{visible:!0,message:s}}))})}constructor(){super(),this.buttonName="LOGIN",this.loginUserWithFirebase=this.loginUserWithFirebase.bind(this)}submitForm(){this.loginUserWithFirebase(this.state.loginData.email,this.state.loginData.password,this.state.loginData.password2)}}const YN=GN(KN);function qN(t){return function(n){const r=go();return w.jsx(t,{...n,navigate:r})}}class QN extends h0{registerUserWithFirebase(e,n,r){if(n!==r){this.setState(()=>({error:{visible:!0,message:"Passwords do not match"}}));return}Ck(pr.auth,e,n).then(i=>{const s=i.user;this.props.navigate(Kt.references.baseURL+"/lists",{state:s.email})}).catch(i=>{const s=i.message;this.setState(()=>({error:{visible:!0,message:s}}))})}constructor(){super(),this.buttonName="REGISTER",this.registerUserWithFirebase=this.registerUserWithFirebase.bind(this)}submitForm(){this.registerUserWithFirebase(this.state.loginData.email,this.state.loginData.password,this.state.loginData.password2)}}const bm=qN(QN),XN=""+new URL("Marty-wave-CZLzA-3e.png",import.meta.url).href;function JN(){const[t,e]=T.useState("REGISTER");var n=w.jsx(bm,{});return t=="REGISTER"?n=w.jsx(bm,{}):t=="LOGIN"&&(n=w.jsx(YN,{})),w.jsxs("div",{className:"OnboardingContainer",children:[w.jsx("img",{className:"MartyWave",src:XN,alt:""}),w.jsx("img",{className:"Rocket",src:t0,alt:""}),w.jsx("button",{onClick:()=>e("REGISTER"),className:`onboard-button ${t=="REGISTER"?"active":"inactive"}`,children:w.jsx("h2",{children:"REGISTER"})}),w.jsx("button",{onClick:()=>e("LOGIN"),className:`onboard-button ${t=="LOGIN"?"active":"inactive"}`,children:w.jsx("h2",{children:"LOGIN"})}),n]})}var Om={};const Am="@firebase/database",Lm="1.0.6";/**
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
 */let p0="";function ZN(t){p0=t}/**
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
 */class eP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ce(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Bs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class tP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Dt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const m0=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new eP(e)}}catch{}return new tP},cr=m0("localStorage"),nP=m0("sessionStorage");/**
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
 */const fi=new Nf("@firebase/database"),rP=function(){let t=1;return function(){return t++}}(),g0=function(t){const e=vS(t),n=new hS;n.update(e);const r=n.digest();return Sf.encodeByteArray(r)},vo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=vo.apply(null,r):typeof r=="object"?e+=Ce(r):e+=r,e+=" "}return e};let _s=null,Dm=!0;const iP=function(t,e){N(!e,"Can't turn on custom loggers persistently."),fi.logLevel=Y.VERBOSE,_s=fi.log.bind(fi)},be=function(...t){if(Dm===!0&&(Dm=!1,_s===null&&nP.get("logging_enabled")===!0&&iP()),_s){const e=vo.apply(null,t);_s(e)}},_o=function(t){return function(...e){be(t,...e)}},Jc=function(...t){const e="FIREBASE INTERNAL ERROR: "+vo(...t);fi.error(e)},en=function(...t){const e=`FIREBASE FATAL ERROR: ${vo(...t)}`;throw fi.error(e),new Error(e)},Ke=function(...t){const e="FIREBASE WARNING: "+vo(...t);fi.warn(e)},sP=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Bf=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},oP=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Nr="[MIN_NAME]",zn="[MAX_NAME]",Fi=function(t,e){if(t===e)return 0;if(t===Nr||e===zn)return-1;if(e===Nr||t===zn)return 1;{const n=Mm(t),r=Mm(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},aP=function(t,e){return t===e?0:t<e?-1:1},Qi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ce(e))},Vf=function(t){if(typeof t!="object"||t===null)return Ce(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ce(e[r]),n+=":",n+=Vf(t[e[r]]);return n+="}",n},v0=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ye(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const _0=function(t){N(!Bf(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),c=c+f}return c.toLowerCase()},lP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},uP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function cP(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const dP=new RegExp("^-?(0*)\\d{1,10}$"),fP=-2147483648,hP=2147483647,Mm=function(t){if(dP.test(t)){const e=Number(t);if(e>=fP&&e<=hP)return e}return null},Ui=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},pP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ys=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class mP{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ke(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class gP{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(be("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ke(e)}}class fa{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}fa.OWNER="owner";/**
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
 */const Hf="5",y0="v",w0="s",E0="r",C0="f",S0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,I0="ls",k0="p",Zc="ac",T0="websocket",N0="long_polling";/**
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
 */class P0{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=cr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&cr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function vP(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function x0(t,e,n){N(typeof e=="string","typeof type must == string"),N(typeof n=="object","typeof params must == object");let r;if(e===T0)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===N0)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);vP(t)&&(n.ns=t.namespace);const i=[];return Ye(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class _P{constructor(){this.counters_={}}incrementCounter(e,n=1){Dt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return QC(this.counters_)}}/**
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
 */const Ou={},Au={};function $f(t){const e=t.toString();return Ou[e]||(Ou[e]=new _P),Ou[e]}function yP(t,e){const n=t.toString();return Au[n]||(Au[n]=e()),Au[n]}/**
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
 */class wP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ui(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Fm="start",EP="close",CP="pLPCommand",SP="pRTLPCB",R0="id",b0="pw",O0="ser",IP="cb",kP="seg",TP="ts",NP="d",PP="dframe",A0=1870,L0=30,xP=A0-L0,RP=25e3,bP=3e4;class ei{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_o(e),this.stats_=$f(n),this.urlFn=l=>(this.appCheckToken&&(l[Zc]=this.appCheckToken),x0(n,N0,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new wP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(bP)),oP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Gf((...s)=>{const[o,a,l,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Fm)this.id=a,this.password=l;else if(o===EP)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Fm]="t",r[O0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[IP]=this.scriptTagHolder.uniqueCallbackIdentifier),r[y0]=Hf,this.transportSessionId&&(r[w0]=this.transportSessionId),this.lastSessionId&&(r[I0]=this.lastSessionId),this.applicationId&&(r[k0]=this.applicationId),this.appCheckToken&&(r[Zc]=this.appCheckToken),typeof location<"u"&&location.hostname&&S0.test(location.hostname)&&(r[E0]=C0);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ei.forceAllow_=!0}static forceDisallow(){ei.forceDisallow_=!0}static isAvailable(){return ei.forceAllow_?!0:!ei.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!lP()&&!uP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=sy(n),i=v0(r,xP);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[PP]="t",r[R0]=e,r[b0]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ce(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Gf{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=rP(),window[CP+this.uniqueCallbackIdentifier]=e,window[SP+this.uniqueCallbackIdentifier]=n,this.myIFrame=Gf.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){be("frame writing exception"),a.stack&&be(a.stack),be(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||be("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[R0]=this.myID,e[b0]=this.myPW,e[O0]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+L0+r.length<=A0;){const o=this.pendingSegs.shift();r=r+"&"+kP+i+"="+o.seg+"&"+TP+i+"="+o.ts+"&"+NP+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(RP)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{be("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const OP=16384,AP=45e3;let Xa=null;typeof MozWebSocket<"u"?Xa=MozWebSocket:typeof WebSocket<"u"&&(Xa=WebSocket);class mt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_o(this.connId),this.stats_=$f(n),this.connURL=mt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[y0]=Hf,typeof location<"u"&&location.hostname&&S0.test(location.hostname)&&(o[E0]=C0),n&&(o[w0]=n),r&&(o[I0]=r),i&&(o[Zc]=i),s&&(o[k0]=s),x0(e,T0,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,cr.set("previous_websocket_failure",!0);try{let r;dy(),this.mySock=new Xa(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){mt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Xa!==null&&!mt.forceDisallow_}static previouslyFailed(){return cr.isInMemoryStorage||cr.get("previous_websocket_failure")===!0}markConnectionHealthy(){cr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Bs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(N(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=v0(n,OP);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(AP))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}mt.responsesRequiredToBeHealthy=2;mt.healthyTimeout=3e4;/**
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
 */class Ys{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ei,mt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=mt&&mt.isAvailable();let r=n&&!mt.previouslyFailed();if(e.webSocketOnly&&(n||Ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[mt];else{const i=this.transports_=[];for(const s of Ys.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ys.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ys.globalTransportInitialized_=!1;/**
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
 */const LP=6e4,DP=5e3,MP=10*1024,FP=100*1024,Lu="t",Um="d",UP="s",jm="r",jP="e",zm="o",Wm="a",Bm="n",Vm="p",zP="h";class WP{constructor(e,n,r,i,s,o,a,l,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_o("c:"+this.id+":"),this.transportManager_=new Ys(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ys(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>FP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>MP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Lu in e){const n=e[Lu];n===Wm?this.upgradeIfSecondaryHealthy_():n===jm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===zm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Qi("t",e),r=Qi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Vm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Wm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Bm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Qi("t",e),r=Qi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Qi(Lu,e);if(Um in e){const r=e[Um];if(n===zP){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Bm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===UP?this.onConnectionShutdown_(r):n===jm?this.onReset_(r):n===jP?Jc("Server Error: "+r):n===zm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Jc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Hf!==r&&Ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ys(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(LP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ys(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(DP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Vm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(cr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class D0{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class M0{constructor(e){this.allowedEvents_=e,this.listeners_={},N(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){N(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Ja extends M0{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!kf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ja}getInitialEvent(e){return N(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Hm=32,$m=768;class q{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function G(){return new q("")}function j(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Wn(t){return t.pieces_.length-t.pieceNum_}function Q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new q(t.pieces_,e)}function F0(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function BP(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function U0(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function j0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new q(e,0)}function ge(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof q)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new q(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function Be(t,e){const n=j(t),r=j(e);if(n===null)return e;if(n===r)return Be(Q(t),Q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Kf(t,e){if(Wn(t)!==Wn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function gt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Wn(t)>Wn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class VP{constructor(e,n){this.errorPrefix_=n,this.parts_=U0(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=xl(this.parts_[r]);z0(this)}}function HP(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=xl(e),z0(t)}function $P(t){const e=t.parts_.pop();t.byteLength_-=xl(e),t.parts_.length>0&&(t.byteLength_-=1)}function z0(t){if(t.byteLength_>$m)throw new Error(t.errorPrefix_+"has a key path longer than "+$m+" bytes ("+t.byteLength_+").");if(t.parts_.length>Hm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Hm+") or object contains a cycle "+sr(t))}function sr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Yf extends M0{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Yf}getInitialEvent(e){return N(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Xi=1e3,GP=60*5*1e3,Gm=30*1e3,KP=1.3,YP=3e4,qP="server_kill",Km=3;class Yt extends D0{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Yt.nextPersistentConnectionId_++,this.log_=_o("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Xi,this.maxReconnectDelay_=GP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!dy())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Yf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ja.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ce(s)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Pl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Yt.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Dt(e,"w")){const r=Si(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||fS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Gm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=dS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ce(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Jc("Unrecognized action received from server: "+Ce(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Xi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>YP&&(this.reconnectDelay_=Xi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*KP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Yt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(c){N(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(c)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?be("getToken() completed but was canceled"):(be("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=f&&f.token,a=new WP(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Ke(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(qP)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Ke(c),l())}}}interrupt(e){be("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){be("Resuming connection for reason: "+e),delete this.interruptReasons_[e],jc(this.interruptReasons_)&&(this.reconnectDelay_=Xi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Vf(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new q(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){be("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Km&&(this.reconnectDelay_=Gm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){be("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Km&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+p0.replace(/\./g,"-")]=1,kf()?e["framework.cordova"]=1:cy()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ja.getInstance().currentlyOnline();return jc(this.interruptReasons_)&&e}}Yt.nextPersistentConnectionId_=0;Yt.nextConnectionId_=0;/**
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
 */class W{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new W(e,n)}}/**
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
 */class Ml{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new W(Nr,e),i=new W(Nr,n);return this.compare(r,i)!==0}minPost(){return W.MIN}}/**
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
 */let Go;class W0 extends Ml{static get __EMPTY_NODE(){return Go}static set __EMPTY_NODE(e){Go=e}compare(e,n){return Fi(e.name,n.name)}isDefinedOn(e){throw Oi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return W.MIN}maxPost(){return new W(zn,Go)}makePost(e,n){return N(typeof e=="string","KeyIndex indexValue must always be a string."),new W(e,Go)}toString(){return".key"}}const mr=new W0;/**
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
 */class Ko{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ee{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ee.RED,this.left=i??Ve.EMPTY_NODE,this.right=s??Ve.EMPTY_NODE}copy(e,n,r,i,s){return new Ee(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ve.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ve.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ee.RED=!0;Ee.BLACK=!1;class QP{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ee(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ve{constructor(e,n=Ve.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ve(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ee.BLACK,null,null))}remove(e){return new Ve(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ee.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ko(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ko(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ko(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ko(this.root_,null,this.comparator_,!0,e)}}Ve.EMPTY_NODE=new QP;/**
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
 */function XP(t,e){return Fi(t.name,e.name)}function qf(t,e){return Fi(t,e)}/**
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
 */let ed;function JP(t){ed=t}const B0=function(t){return typeof t=="number"?"number:"+_0(t):"string:"+t},V0=function(t){if(t.isLeafNode()){const e=t.val();N(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Dt(e,".sv"),"Priority must be a string or number.")}else N(t===ed||t.isEmpty(),"priority of unexpected type.");N(t===ed||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Ym;class ye{constructor(e,n=ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),V0(this.priorityNode_)}static set __childrenNodeConstructor(e){Ym=e}static get __childrenNodeConstructor(){return Ym}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:j(e)===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=j(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(N(r!==".priority"||Wn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(Q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+B0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=_0(this.value_):e+=this.value_,this.lazyHash_=g0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ye.__childrenNodeConstructor?-1:(N(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ye.VALUE_TYPE_ORDER.indexOf(n),s=ye.VALUE_TYPE_ORDER.indexOf(r);return N(i>=0,"Unknown leaf type: "+n),N(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let H0,$0;function ZP(t){H0=t}function ex(t){$0=t}class tx extends Ml{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Fi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return W.MIN}maxPost(){return new W(zn,new ye("[PRIORITY-POST]",$0))}makePost(e,n){const r=H0(e);return new W(n,new ye("[PRIORITY-POST]",r))}toString(){return".priority"}}const ae=new tx;/**
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
 */const nx=Math.log(2);class rx{constructor(e){const n=s=>parseInt(Math.log(s)/nx,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Za=function(t,e,n,r){t.sort(e);const i=function(l,u){const d=u-l;let c,f;if(d===0)return null;if(d===1)return c=t[l],f=n?n(c):c,new Ee(f,c.node,Ee.BLACK,null,null);{const g=parseInt(d/2,10)+l,v=i(l,g),_=i(g+1,u);return c=t[g],f=n?n(c):c,new Ee(f,c.node,Ee.BLACK,v,_)}},s=function(l){let u=null,d=null,c=t.length;const f=function(v,_){const E=c-v,p=c;c-=v;const h=i(E+1,p),m=t[E],y=n?n(m):m;g(new Ee(y,m.node,_,null,h))},g=function(v){u?(u.left=v,u=v):(d=v,u=v)};for(let v=0;v<l.count;++v){const _=l.nextBitIsOne(),E=Math.pow(2,l.count-(v+1));_?f(E,Ee.BLACK):(f(E,Ee.BLACK),f(E,Ee.RED))}return d},o=new rx(t.length),a=s(o);return new Ve(r||e,a)};/**
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
 */let Du;const zr={};class Ht{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return N(zr&&ae,"ChildrenNode.ts has not been loaded"),Du=Du||new Ht({".priority":zr},{".priority":ae}),Du}get(e){const n=Si(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ve?n:null}hasIndex(e){return Dt(this.indexSet_,e.toString())}addIndex(e,n){N(e!==mr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(W.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Za(r,e.getCompare()):a=zr;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new Ht(d,u)}addToIndexes(e,n){const r=Wa(this.indexes_,(i,s)=>{const o=Si(this.indexSet_,s);if(N(o,"Missing index implementation for "+s),i===zr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(W.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Za(a,o.getCompare())}else return zr;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new W(e.name,a))),l.insert(e,e.node)}});return new Ht(r,this.indexSet_)}removeFromIndexes(e,n){const r=Wa(this.indexes_,i=>{if(i===zr)return i;{const s=n.get(e.name);return s?i.remove(new W(e.name,s)):i}});return new Ht(r,this.indexSet_)}}/**
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
 */let Ji;class M{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&V0(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ji||(Ji=new M(new Ve(qf),null,Ht.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ji}updatePriority(e){return this.children_.isEmpty()?this:new M(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ji:n}}getChild(e){const n=j(e);return n===null?this:this.getImmediateChild(n).getChild(Q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(N(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new W(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ji:this.priorityNode_;return new M(i,o,s)}}updateChild(e,n){const r=j(e);if(r===null)return n;{N(j(e)!==".priority"||Wn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Q(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ae,(o,a)=>{n[o]=a.val(e),r++,s&&M.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+B0(this.getPriority().val())+":"),this.forEachChild(ae,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":g0(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new W(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new W(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new W(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,W.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,W.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===yo?-1:0}withIndex(e){if(e===mr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new M(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===mr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ae),i=n.getIterator(ae);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===mr?null:this.indexMap_.get(e.toString())}}M.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ix extends M{constructor(){super(new Ve(qf),M.EMPTY_NODE,Ht.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return M.EMPTY_NODE}isEmpty(){return!1}}const yo=new ix;Object.defineProperties(W,{MIN:{value:new W(Nr,M.EMPTY_NODE)},MAX:{value:new W(zn,yo)}});W0.__EMPTY_NODE=M.EMPTY_NODE;ye.__childrenNodeConstructor=M;JP(yo);ex(yo);/**
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
 */const sx=!0;function ke(t,e=null){if(t===null)return M.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),N(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ye(n,ke(e))}if(!(t instanceof Array)&&sx){const n=[];let r=!1;if(Ye(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ke(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new W(o,l)))}}),n.length===0)return M.EMPTY_NODE;const s=Za(n,XP,o=>o.name,qf);if(r){const o=Za(n,ae.getCompare());return new M(s,ke(e),new Ht({".priority":o},{".priority":ae}))}else return new M(s,ke(e),Ht.Default)}else{let n=M.EMPTY_NODE;return Ye(t,(r,i)=>{if(Dt(t,r)&&r.substring(0,1)!=="."){const s=ke(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ke(e))}}ZP(ke);/**
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
 */class Qf extends Ml{constructor(e){super(),this.indexPath_=e,N(!z(e)&&j(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Fi(e.name,n.name):s}makePost(e,n){const r=ke(e),i=M.EMPTY_NODE.updateChild(this.indexPath_,r);return new W(n,i)}maxPost(){const e=M.EMPTY_NODE.updateChild(this.indexPath_,yo);return new W(zn,e)}toString(){return U0(this.indexPath_,0).join("/")}}/**
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
 */class ox extends Ml{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Fi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return W.MIN}maxPost(){return W.MAX}makePost(e,n){const r=ke(e);return new W(n,r)}toString(){return".value"}}const G0=new ox;/**
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
 */function K0(t){return{type:"value",snapshotNode:t}}function ki(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function qs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Qs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function ax(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Xf{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){N(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(qs(n,a)):N(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ki(n,r)):o.trackChildChange(Qs(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ae,(i,s)=>{n.hasChild(i)||r.trackChildChange(qs(i,s))}),n.isLeafNode()||n.forEachChild(ae,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Qs(i,s,o))}else r.trackChildChange(ki(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?M.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Xs{constructor(e){this.indexedFilter_=new Xf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Xs.getStartPost_(e),this.endPost_=Xs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new W(n,r))||(r=M.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=M.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(M.EMPTY_NODE);const s=this;return n.forEachChild(ae,(o,a)=>{s.matches(new W(o,a))||(i=i.updateImmediateChild(o,M.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class lx{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Xs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new W(n,r))||(r=M.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=M.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=M.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(M.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,M.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(f,g)=>c(g,f)}else o=this.index_.getCompare();const a=e;N(a.numChildren()===this.limit_,"");const l=new W(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const c=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,l);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(Qs(n,r,c)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(qs(n,c));const _=a.updateImmediateChild(n,M.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(ki(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?e:d&&o(u,l)>=0?(s!=null&&(s.trackChildChange(qs(u.name,u.node)),s.trackChildChange(ki(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,M.EMPTY_NODE)):e}}/**
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
 */class Jf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ae}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Nr}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:zn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ae}copy(){const e=new Jf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ux(t){return t.loadsAllData()?new Xf(t.getIndex()):t.hasLimit()?new lx(t):new Xs(t)}function cx(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function dx(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function fx(t,e){const n=t.copy();return n.index_=e,n}function qm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ae?n="$priority":t.index_===G0?n="$value":t.index_===mr?n="$key":(N(t.index_ instanceof Qf,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ce(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ce(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ce(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ce(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ce(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Qm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ae&&(e.i=t.index_.toString()),e}/**
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
 */class el extends D0{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=_o("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(N(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=el.getListenId_(e,r),a={};this.listens_[o]=a;const l=qm(e._queryParams);this.restRequest_(s+".json",l,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Si(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=el.getListenId_(e,n);delete this.listens_[r]}get(e){const n=qm(e._queryParams),r=e._path.toString(),i=new Pl;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ai(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Bs(a.responseText)}catch{Ke("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Ke("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class hx{constructor(){this.rootNode_=M.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function tl(){return{value:null,children:new Map}}function Y0(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=j(e);t.children.has(r)||t.children.set(r,tl());const i=t.children.get(r);e=Q(e),Y0(i,e,n)}}function td(t,e,n){t.value!==null?n(e,t.value):px(t,(r,i)=>{const s=new q(e.toString()+"/"+r);td(i,s,n)})}function px(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class mx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ye(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Xm=10*1e3,gx=30*1e3,vx=5*60*1e3;class _x{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new mx(e);const r=Xm+(gx-Xm)*Math.random();ys(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ye(e,(i,s)=>{s>0&&Dt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ys(this.reportStats_.bind(this),Math.floor(Math.random()*2*vx))}}/**
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
 */var vt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(vt||(vt={}));function q0(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Zf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function eh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class nl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=vt.ACK_USER_WRITE,this.source=q0()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new q(e));return new nl(G(),n,this.revert)}}else return N(j(this.path)===e,"operationForChild called for unrelated child."),new nl(Q(this.path),this.affectedTree,this.revert)}}/**
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
 */class Js{constructor(e,n){this.source=e,this.path=n,this.type=vt.LISTEN_COMPLETE}operationForChild(e){return z(this.path)?new Js(this.source,G()):new Js(this.source,Q(this.path))}}/**
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
 */class Pr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=vt.OVERWRITE}operationForChild(e){return z(this.path)?new Pr(this.source,G(),this.snap.getImmediateChild(e)):new Pr(this.source,Q(this.path),this.snap)}}/**
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
 */class Zs{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=vt.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new q(e));return n.isEmpty()?null:n.value?new Pr(this.source,G(),n.value):new Zs(this.source,G(),n)}else return N(j(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Zs(this.source,Q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class xr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=j(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class yx{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function wx(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(ax(o.childName,o.snapshotNode))}),Zi(t,i,"child_removed",e,r,n),Zi(t,i,"child_added",e,r,n),Zi(t,i,"child_moved",s,r,n),Zi(t,i,"child_changed",e,r,n),Zi(t,i,"value",e,r,n),i}function Zi(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>Cx(t,a,l)),o.forEach(a=>{const l=Ex(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function Ex(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Cx(t,e,n){if(e.childName==null||n.childName==null)throw Oi("Should only compare child_ events.");const r=new W(e.childName,e.snapshotNode),i=new W(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Fl(t,e){return{eventCache:t,serverCache:e}}function ws(t,e,n,r){return Fl(new xr(e,n,r),t.serverCache)}function Q0(t,e,n,r){return Fl(t.eventCache,new xr(e,n,r))}function nd(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Rr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Mu;const Sx=()=>(Mu||(Mu=new Ve(aP)),Mu);class ee{constructor(e,n=Sx()){this.value=e,this.children=n}static fromObject(e){let n=new ee(null);return Ye(e,(r,i)=>{n=n.set(new q(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:G(),value:this.value};if(z(e))return null;{const r=j(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Q(e),n);return s!=null?{path:ge(new q(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=j(e),r=this.children.get(n);return r!==null?r.subtree(Q(e)):new ee(null)}}set(e,n){if(z(e))return new ee(n,this.children);{const r=j(e),s=(this.children.get(r)||new ee(null)).set(Q(e),n),o=this.children.insert(r,s);return new ee(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new ee(null):new ee(null,this.children);{const n=j(e),r=this.children.get(n);if(r){const i=r.remove(Q(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ee(null):new ee(this.value,s)}else return this}}get(e){if(z(e))return this.value;{const n=j(e),r=this.children.get(n);return r?r.get(Q(e)):null}}setTree(e,n){if(z(e))return n;{const r=j(e),s=(this.children.get(r)||new ee(null)).setTree(Q(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ee(this.value,o)}}fold(e){return this.fold_(G(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ge(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,G(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(z(e))return null;{const s=j(e),o=this.children.get(s);return o?o.findOnPath_(Q(e),ge(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,G(),n)}foreachOnPath_(e,n,r){if(z(e))return this;{this.value&&r(n,this.value);const i=j(e),s=this.children.get(i);return s?s.foreachOnPath_(Q(e),ge(n,i),r):new ee(null)}}foreach(e){this.foreach_(G(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ge(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class wt{constructor(e){this.writeTree_=e}static empty(){return new wt(new ee(null))}}function Es(t,e,n){if(z(e))return new wt(new ee(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Be(i,e);return s=s.updateChild(o,n),new wt(t.writeTree_.set(i,s))}else{const i=new ee(n),s=t.writeTree_.setTree(e,i);return new wt(s)}}}function Jm(t,e,n){let r=t;return Ye(n,(i,s)=>{r=Es(r,ge(e,i),s)}),r}function Zm(t,e){if(z(e))return wt.empty();{const n=t.writeTree_.setTree(e,new ee(null));return new wt(n)}}function rd(t,e){return Ur(t,e)!=null}function Ur(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Be(n.path,e)):null}function eg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ae,(r,i)=>{e.push(new W(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new W(r,i.value))}),e}function Mn(t,e){if(z(e))return t;{const n=Ur(t,e);return n!=null?new wt(new ee(n)):new wt(t.writeTree_.subtree(e))}}function id(t){return t.writeTree_.isEmpty()}function Ti(t,e){return X0(G(),t.writeTree_,e)}function X0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(N(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=X0(ge(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ge(t,".priority"),r)),n}}/**
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
 */function th(t,e){return tw(e,t)}function Ix(t,e,n,r,i){N(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Es(t.visibleWrites,e,n)),t.lastWriteId=r}function kx(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Tx(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);N(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Nx(a,r.path)?i=!1:gt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return Px(t),!0;if(r.snap)t.visibleWrites=Zm(t.visibleWrites,r.path);else{const a=r.children;Ye(a,l=>{t.visibleWrites=Zm(t.visibleWrites,ge(r.path,l))})}return!0}else return!1}function Nx(t,e){if(t.snap)return gt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&gt(ge(t.path,n),e))return!0;return!1}function Px(t){t.visibleWrites=J0(t.allWrites,xx,G()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function xx(t){return t.visible}function J0(t,e,n){let r=wt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)gt(n,o)?(a=Be(n,o),r=Es(r,a,s.snap)):gt(o,n)&&(a=Be(o,n),r=Es(r,G(),s.snap.getChild(a)));else if(s.children){if(gt(n,o))a=Be(n,o),r=Jm(r,a,s.children);else if(gt(o,n))if(a=Be(o,n),z(a))r=Jm(r,G(),s.children);else{const l=Si(s.children,j(a));if(l){const u=l.getChild(Q(a));r=Es(r,G(),u)}}}else throw Oi("WriteRecord should have .snap or .children")}}return r}function Z0(t,e,n,r,i){if(!r&&!i){const s=Ur(t.visibleWrites,e);if(s!=null)return s;{const o=Mn(t.visibleWrites,e);if(id(o))return n;if(n==null&&!rd(o,G()))return null;{const a=n||M.EMPTY_NODE;return Ti(o,a)}}}else{const s=Mn(t.visibleWrites,e);if(!i&&id(s))return n;if(!i&&n==null&&!rd(s,G()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(gt(u.path,e)||gt(e,u.path))},a=J0(t.allWrites,o,e),l=n||M.EMPTY_NODE;return Ti(a,l)}}}function Rx(t,e,n){let r=M.EMPTY_NODE;const i=Ur(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ae,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Mn(t.visibleWrites,e);return n.forEachChild(ae,(o,a)=>{const l=Ti(Mn(s,new q(o)),a);r=r.updateImmediateChild(o,l)}),eg(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Mn(t.visibleWrites,e);return eg(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function bx(t,e,n,r,i){N(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ge(e,n);if(rd(t.visibleWrites,s))return null;{const o=Mn(t.visibleWrites,s);return id(o)?i.getChild(n):Ti(o,i.getChild(n))}}function Ox(t,e,n,r){const i=ge(e,n),s=Ur(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Mn(t.visibleWrites,i);return Ti(o,r.getNode().getImmediateChild(n))}else return null}function Ax(t,e){return Ur(t.visibleWrites,e)}function Lx(t,e,n,r,i,s,o){let a;const l=Mn(t.visibleWrites,e),u=Ur(l,G());if(u!=null)a=u;else if(n!=null)a=Ti(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],c=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=f.getNext();for(;g&&d.length<i;)c(g,r)!==0&&d.push(g),g=f.getNext();return d}else return[]}function Dx(){return{visibleWrites:wt.empty(),allWrites:[],lastWriteId:-1}}function rl(t,e,n,r){return Z0(t.writeTree,t.treePath,e,n,r)}function nh(t,e){return Rx(t.writeTree,t.treePath,e)}function tg(t,e,n,r){return bx(t.writeTree,t.treePath,e,n,r)}function il(t,e){return Ax(t.writeTree,ge(t.treePath,e))}function Mx(t,e,n,r,i,s){return Lx(t.writeTree,t.treePath,e,n,r,i,s)}function rh(t,e,n){return Ox(t.writeTree,t.treePath,e,n)}function ew(t,e){return tw(ge(t.treePath,e),t.writeTree)}function tw(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Fx{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;N(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),N(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Qs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,qs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ki(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Qs(r,e.snapshotNode,i.oldSnap));else throw Oi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Ux{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const nw=new Ux;class ih{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new xr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return rh(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Rr(this.viewCache_),s=Mx(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function jx(t){return{filter:t}}function zx(t,e){N(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),N(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Wx(t,e,n,r,i){const s=new Fx;let o,a;if(n.type===vt.OVERWRITE){const u=n;u.source.fromUser?o=sd(t,e,u.path,u.snap,r,i,s):(N(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!z(u.path),o=sl(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===vt.MERGE){const u=n;u.source.fromUser?o=Vx(t,e,u.path,u.children,r,i,s):(N(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=od(t,e,u.path,u.children,r,i,a,s))}else if(n.type===vt.ACK_USER_WRITE){const u=n;u.revert?o=Gx(t,e,u.path,r,i,s):o=Hx(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===vt.LISTEN_COMPLETE)o=$x(t,e,n.path,r,s);else throw Oi("Unknown operation type: "+n.type);const l=s.getChanges();return Bx(e,o,l),{viewCache:o,changes:l}}function Bx(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=nd(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(K0(nd(e)))}}function rw(t,e,n,r,i,s){const o=e.eventCache;if(il(r,n)!=null)return e;{let a,l;if(z(n))if(N(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Rr(e),d=u instanceof M?u:M.EMPTY_NODE,c=nh(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=rl(r,Rr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=j(n);if(u===".priority"){N(Wn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const c=tg(r,n,d,l);c!=null?a=t.filter.updatePriority(d,c):a=o.getNode()}else{const d=Q(n);let c;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=tg(r,n,o.getNode(),l);f!=null?c=o.getNode().getImmediateChild(u).updateChild(d,f):c=o.getNode().getImmediateChild(u)}else c=rh(r,u,e.serverCache);c!=null?a=t.filter.updateChild(o.getNode(),u,c,d,i,s):a=o.getNode()}}return ws(e,a,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function sl(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(z(n))u=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=d.updateFullNode(l.getNode(),g,null)}else{const g=j(n);if(!l.isCompleteForPath(n)&&Wn(n)>1)return e;const v=Q(n),E=l.getNode().getImmediateChild(g).updateChild(v,r);g===".priority"?u=d.updatePriority(l.getNode(),E):u=d.updateChild(l.getNode(),g,E,v,nw,null)}const c=Q0(e,u,l.isFullyInitialized()||z(n),d.filtersNodes()),f=new ih(i,c,s);return rw(t,c,n,i,f,a)}function sd(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const d=new ih(i,e,s);if(z(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=ws(e,u,!0,t.filter.filtersNodes());else{const c=j(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=ws(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=Q(n),g=a.getNode().getImmediateChild(c);let v;if(z(f))v=r;else{const _=d.getCompleteChild(c);_!=null?F0(f)===".priority"&&_.getChild(j0(f)).isEmpty()?v=_:v=_.updateChild(f,r):v=M.EMPTY_NODE}if(g.equals(v))l=e;else{const _=t.filter.updateChild(a.getNode(),c,v,f,d,o);l=ws(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function ng(t,e){return t.eventCache.isCompleteForChild(e)}function Vx(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const d=ge(n,l);ng(e,j(d))&&(a=sd(t,a,d,u,i,s,o))}),r.foreach((l,u)=>{const d=ge(n,l);ng(e,j(d))||(a=sd(t,a,d,u,i,s,o))}),a}function rg(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function od(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;z(n)?u=r:u=new ee(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,f)=>{if(d.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),v=rg(t,g,f);l=sl(t,l,new q(c),v,i,s,o,a)}}),u.children.inorderTraversal((c,f)=>{const g=!e.serverCache.isCompleteForChild(c)&&f.value===null;if(!d.hasChild(c)&&!g){const v=e.serverCache.getNode().getImmediateChild(c),_=rg(t,v,f);l=sl(t,l,new q(c),_,i,s,o,a)}}),l}function Hx(t,e,n,r,i,s,o){if(il(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(z(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return sl(t,e,n,l.getNode().getChild(n),i,s,a,o);if(z(n)){let u=new ee(null);return l.getNode().forEachChild(mr,(d,c)=>{u=u.set(new q(d),c)}),od(t,e,n,u,i,s,a,o)}else return e}else{let u=new ee(null);return r.foreach((d,c)=>{const f=ge(n,d);l.isCompleteForPath(f)&&(u=u.set(d,l.getNode().getChild(f)))}),od(t,e,n,u,i,s,a,o)}}function $x(t,e,n,r,i){const s=e.serverCache,o=Q0(e,s.getNode(),s.isFullyInitialized()||z(n),s.isFiltered());return rw(t,o,n,r,nw,i)}function Gx(t,e,n,r,i,s){let o;if(il(r,n)!=null)return e;{const a=new ih(r,e,i),l=e.eventCache.getNode();let u;if(z(n)||j(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=rl(r,Rr(e));else{const c=e.serverCache.getNode();N(c instanceof M,"serverChildren would be complete if leaf node"),d=nh(r,c)}d=d,u=t.filter.updateFullNode(l,d,s)}else{const d=j(n);let c=rh(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=l.getImmediateChild(d)),c!=null?u=t.filter.updateChild(l,d,c,Q(n),a,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(l,d,M.EMPTY_NODE,Q(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=rl(r,Rr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||il(r,G())!=null,ws(e,u,o,t.filter.filtersNodes())}}/**
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
 */class Kx{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Xf(r.getIndex()),s=ux(r);this.processor_=jx(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(M.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(M.EMPTY_NODE,a.getNode(),null),d=new xr(l,o.isFullyInitialized(),i.filtersNodes()),c=new xr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Fl(c,d),this.eventGenerator_=new yx(this.query_)}get query(){return this.query_}}function Yx(t){return t.viewCache_.serverCache.getNode()}function qx(t,e){const n=Rr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(j(e)).isEmpty())?n.getChild(e):null}function ig(t){return t.eventRegistrations_.length===0}function Qx(t,e){t.eventRegistrations_.push(e)}function sg(t,e,n){const r=[];if(n){N(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function og(t,e,n,r){e.type===vt.MERGE&&e.source.queryId!==null&&(N(Rr(t.viewCache_),"We should always have a full cache before handling merges"),N(nd(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=Wx(t.processor_,i,e,n,r);return zx(t.processor_,s.viewCache),N(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,iw(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Xx(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ae,(s,o)=>{r.push(ki(s,o))}),n.isFullyInitialized()&&r.push(K0(n.getNode())),iw(t,r,n.getNode(),e)}function iw(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return wx(t.eventGenerator_,e,n,i)}/**
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
 */let ol;class Jx{constructor(){this.views=new Map}}function Zx(t){N(!ol,"__referenceConstructor has already been defined"),ol=t}function eR(){return N(ol,"Reference.ts has not been loaded"),ol}function tR(t){return t.views.size===0}function sh(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return N(s!=null,"SyncTree gave us an op for an invalid query."),og(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(og(o,e,n,r));return s}}function nR(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=rl(n,i?r:null),l=!1;a?l=!0:r instanceof M?(a=nh(n,r),l=!1):(a=M.EMPTY_NODE,l=!1);const u=Fl(new xr(a,l,!1),new xr(r,i,!1));return new Kx(e,u)}return o}function rR(t,e,n,r,i,s){const o=nR(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Qx(o,n),Xx(o,n)}function iR(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Bn(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(sg(u,n,r)),ig(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(sg(l,n,r)),ig(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Bn(t)&&s.push(new(eR())(e._repo,e._path)),{removed:s,events:o}}function sw(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function hi(t,e){let n=null;for(const r of t.views.values())n=n||qx(r,e);return n}function ow(t,e){if(e._queryParams.loadsAllData())return Ul(t);{const r=e._queryIdentifier;return t.views.get(r)}}function aw(t,e){return ow(t,e)!=null}function Bn(t){return Ul(t)!=null}function Ul(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let al;function sR(t){N(!al,"__referenceConstructor has already been defined"),al=t}function oR(){return N(al,"Reference.ts has not been loaded"),al}let aR=1;class ag{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ee(null),this.pendingWriteTree_=Dx(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function lw(t,e,n,r,i){return Ix(t.pendingWriteTree_,e,n,r,i),i?wo(t,new Pr(q0(),e,n)):[]}function dr(t,e,n=!1){const r=kx(t.pendingWriteTree_,e);if(Tx(t.pendingWriteTree_,e)){let s=new ee(null);return r.snap!=null?s=s.set(G(),!0):Ye(r.children,o=>{s=s.set(new q(o),!0)}),wo(t,new nl(r.path,s,n))}else return[]}function jl(t,e,n){return wo(t,new Pr(Zf(),e,n))}function lR(t,e,n){const r=ee.fromObject(n);return wo(t,new Zs(Zf(),e,r))}function uR(t,e){return wo(t,new Js(Zf(),e))}function cR(t,e,n){const r=ah(t,n);if(r){const i=lh(r),s=i.path,o=i.queryId,a=Be(s,e),l=new Js(eh(o),a);return uh(t,s,l)}else return[]}function ad(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||aw(o,e))){const l=iR(o,e,n,r);tR(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const d=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(f,g)=>Bn(g));if(d&&!c){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const g=hR(f);for(let v=0;v<g.length;++v){const _=g[v],E=_.query,p=dw(t,_);t.listenProvider_.startListening(Cs(E),ll(t,E),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Cs(e),null):u.forEach(f=>{const g=t.queryToTagMap.get(zl(f));t.listenProvider_.stopListening(Cs(f),g)}))}pR(t,u)}return a}function dR(t,e,n,r){const i=ah(t,r);if(i!=null){const s=lh(i),o=s.path,a=s.queryId,l=Be(o,e),u=new Pr(eh(a),l,n);return uh(t,o,u)}else return[]}function fR(t,e,n,r){const i=ah(t,r);if(i){const s=lh(i),o=s.path,a=s.queryId,l=Be(o,e),u=ee.fromObject(n),d=new Zs(eh(a),l,u);return uh(t,o,d)}else return[]}function lg(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,g)=>{const v=Be(f,i);s=s||hi(g,v),o=o||Bn(g)});let a=t.syncPointTree_.get(i);a?(o=o||Bn(a),s=s||hi(a,G())):(a=new Jx,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=M.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,v)=>{const _=hi(v,G());_&&(s=s.updateImmediateChild(g,_))}));const u=aw(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=zl(e);N(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=mR();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const d=th(t.pendingWriteTree_,i);let c=rR(a,e,n,d,s,l);if(!u&&!o&&!r){const f=ow(a,e);c=c.concat(gR(t,e,f))}return c}function oh(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Be(o,e),u=hi(a,l);if(u)return u});return Z0(i,e,s,n,!0)}function wo(t,e){return uw(e,t.syncPointTree_,null,th(t.pendingWriteTree_,G()))}function uw(t,e,n,r){if(z(t.path))return cw(t,e,n,r);{const i=e.get(G());n==null&&i!=null&&(n=hi(i,G()));let s=[];const o=j(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,d=ew(r,o);s=s.concat(uw(a,l,u,d))}return i&&(s=s.concat(sh(i,t,r,n))),s}}function cw(t,e,n,r){const i=e.get(G());n==null&&i!=null&&(n=hi(i,G()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=ew(r,o),d=t.operationForChild(o);d&&(s=s.concat(cw(d,a,l,u)))}),i&&(s=s.concat(sh(i,t,r,n))),s}function dw(t,e){const n=e.query,r=ll(t,n);return{hashFn:()=>(Yx(e)||M.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?cR(t,n._path,r):uR(t,n._path);{const s=cP(i,n);return ad(t,n,null,s)}}}}function ll(t,e){const n=zl(e);return t.queryToTagMap.get(n)}function zl(t){return t._path.toString()+"$"+t._queryIdentifier}function ah(t,e){return t.tagToQueryMap.get(e)}function lh(t){const e=t.indexOf("$");return N(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new q(t.substr(0,e))}}function uh(t,e,n){const r=t.syncPointTree_.get(e);N(r,"Missing sync point for query tag that we're tracking");const i=th(t.pendingWriteTree_,e);return sh(r,n,i,null)}function hR(t){return t.fold((e,n,r)=>{if(n&&Bn(n))return[Ul(n)];{let i=[];return n&&(i=sw(n)),Ye(r,(s,o)=>{i=i.concat(o)}),i}})}function Cs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(oR())(t._repo,t._path):t}function pR(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=zl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function mR(){return aR++}function gR(t,e,n){const r=e._path,i=ll(t,e),s=dw(t,n),o=t.listenProvider_.startListening(Cs(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)N(!Bn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,d,c)=>{if(!z(u)&&d&&Bn(d))return[Ul(d).query];{let f=[];return d&&(f=f.concat(sw(d).map(g=>g.query))),Ye(c,(g,v)=>{f=f.concat(v)}),f}});for(let u=0;u<l.length;++u){const d=l[u];t.listenProvider_.stopListening(Cs(d),ll(t,d))}}return o}/**
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
 */class ch{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ch(n)}node(){return this.node_}}class dh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ge(this.path_,e);return new dh(this.syncTree_,n)}node(){return oh(this.syncTree_,this.path_)}}const vR=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ug=function(t,e,n){if(!t||typeof t!="object")return t;if(N(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return _R(t[".sv"],e,n);if(typeof t[".sv"]=="object")return yR(t[".sv"],e);N(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},_R=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:N(!1,"Unexpected server value: "+t)}},yR=function(t,e,n){t.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&N(!1,"Unexpected increment value: "+r);const i=e.node();if(N(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},wR=function(t,e,n,r){return fh(e,new dh(n,t),r)},fw=function(t,e,n){return fh(t,new ch(e),n)};function fh(t,e,n){const r=t.getPriority().val(),i=ug(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=ug(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ye(a,ke(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ye(i))),o.forEachChild(ae,(a,l)=>{const u=fh(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class hh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ph(t,e){let n=e instanceof q?e:new q(e),r=t,i=j(n);for(;i!==null;){const s=Si(r.node.children,i)||{children:{},childCount:0};r=new hh(i,r,s),n=Q(n),i=j(n)}return r}function ji(t){return t.node.value}function hw(t,e){t.node.value=e,ld(t)}function pw(t){return t.node.childCount>0}function ER(t){return ji(t)===void 0&&!pw(t)}function Wl(t,e){Ye(t.node.children,(n,r)=>{e(new hh(n,t,r))})}function mw(t,e,n,r){n&&!r&&e(t),Wl(t,i=>{mw(i,e,!0,r)}),n&&r&&e(t)}function CR(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Eo(t){return new q(t.parent===null?t.name:Eo(t.parent)+"/"+t.name)}function ld(t){t.parent!==null&&SR(t.parent,t.name,t)}function SR(t,e,n){const r=ER(n),i=Dt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,ld(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ld(t))}/**
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
 */const IR=/[\[\].#$\/\u0000-\u001F\u007F]/,kR=/[\[\].#$\u0000-\u001F\u007F]/,Fu=10*1024*1024,gw=function(t){return typeof t=="string"&&t.length!==0&&!IR.test(t)},vw=function(t){return typeof t=="string"&&t.length!==0&&!kR.test(t)},TR=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),vw(t)},cg=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Bf(t)||t&&typeof t=="object"&&Dt(t,".sv")},Co=function(t,e,n,r){r&&e===void 0||mh(Tf(t,"value"),e,n)},mh=function(t,e,n){const r=n instanceof q?new VP(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+sr(r));if(typeof e=="function")throw new Error(t+"contains a function "+sr(r)+" with contents = "+e.toString());if(Bf(e))throw new Error(t+"contains "+e.toString()+" "+sr(r));if(typeof e=="string"&&e.length>Fu/3&&xl(e)>Fu)throw new Error(t+"contains a string greater than "+Fu+" utf8 bytes "+sr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ye(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!gw(o)))throw new Error(t+" contains an invalid key ("+o+") "+sr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);HP(r,o),mh(t,a,r),$P(r)}),i&&s)throw new Error(t+' contains ".value" child '+sr(r)+" in addition to actual children.")}},gh=function(t,e,n,r){if(!vw(n))throw new Error(Tf(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},NR=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),gh(t,e,n)},vh=function(t,e){if(j(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},PR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!gw(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!TR(n))throw new Error(Tf(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class xR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function _h(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Kf(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function _w(t,e,n){_h(t,n),yw(t,r=>Kf(r,e))}function tn(t,e,n){_h(t,n),yw(t,r=>gt(r,e)||gt(e,r))}function yw(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(RR(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function RR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();_s&&be("event: "+n.toString()),Ui(r)}}}/**
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
 */const bR="repo_interrupt",OR=25;class AR{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new xR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=tl(),this.transactionQueueTree_=new hh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function LR(t,e,n){if(t.stats_=$f(t.repoInfo_),t.forceRestClient_||pP())t.server_=new el(t.repoInfo_,(r,i,s,o)=>{dg(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>fg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ce(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Yt(t.repoInfo_,e,(r,i,s,o)=>{dg(t,r,i,s,o)},r=>{fg(t,r)},r=>{DR(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=yP(t.repoInfo_,()=>new _x(t.stats_,t.server_)),t.infoData_=new hx,t.infoSyncTree_=new ag({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=jl(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),wh(t,"connected",!1),t.serverSyncTree_=new ag({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);tn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function ww(t){const n=t.infoData_.getNode(new q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function yh(t){return vR({timestamp:ww(t)})}function dg(t,e,n,r,i){t.dataUpdateCount++;const s=new q(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Wa(n,u=>ke(u));o=fR(t.serverSyncTree_,s,l,i)}else{const l=ke(n);o=dR(t.serverSyncTree_,s,l,i)}else if(r){const l=Wa(n,u=>ke(u));o=lR(t.serverSyncTree_,s,l)}else{const l=ke(n);o=jl(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Bl(t,s)),tn(t.eventQueue_,a,o)}function fg(t,e){wh(t,"connected",e),e===!1&&FR(t)}function DR(t,e){Ye(e,(n,r)=>{wh(t,n,r)})}function wh(t,e,n){const r=new q("/.info/"+e),i=ke(n);t.infoData_.updateSnapshot(r,i);const s=jl(t.infoSyncTree_,r,i);tn(t.eventQueue_,r,s)}function Ew(t){return t.nextWriteId_++}function MR(t,e,n,r,i){Eh(t,"set",{path:e.toString(),value:n,priority:r});const s=yh(t),o=ke(n,r),a=oh(t.serverSyncTree_,e),l=fw(o,a,s),u=Ew(t),d=lw(t.serverSyncTree_,e,l,u,!0);_h(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(f,g)=>{const v=f==="ok";v||Ke("set at "+e+" failed: "+f);const _=dr(t.serverSyncTree_,u,!v);tn(t.eventQueue_,e,_),WR(t,i,f,g)});const c=Tw(t,e);Bl(t,c),tn(t.eventQueue_,c,[])}function FR(t){Eh(t,"onDisconnectEvents");const e=yh(t),n=tl();td(t.onDisconnect_,G(),(i,s)=>{const o=wR(i,s,t.serverSyncTree_,e);Y0(n,i,o)});let r=[];td(n,G(),(i,s)=>{r=r.concat(jl(t.serverSyncTree_,i,s));const o=Tw(t,i);Bl(t,o)}),t.onDisconnect_=tl(),tn(t.eventQueue_,G(),r)}function UR(t,e,n){let r;j(e._path)===".info"?r=lg(t.infoSyncTree_,e,n):r=lg(t.serverSyncTree_,e,n),_w(t.eventQueue_,e._path,r)}function jR(t,e,n){let r;j(e._path)===".info"?r=ad(t.infoSyncTree_,e,n):r=ad(t.serverSyncTree_,e,n),_w(t.eventQueue_,e._path,r)}function zR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(bR)}function Eh(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),be(n,...e)}function WR(t,e,n,r){e&&Ui(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Cw(t,e,n){return oh(t.serverSyncTree_,e,n)||M.EMPTY_NODE}function Ch(t,e=t.transactionQueueTree_){if(e||Vl(t,e),ji(e)){const n=Iw(t,e);N(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&BR(t,Eo(e),n)}else pw(e)&&Wl(e,n=>{Ch(t,n)})}function BR(t,e,n){const r=n.map(u=>u.currentWriteId),i=Cw(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];N(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Be(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Eh(t,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(dr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&c.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Vl(t,ph(t.transactionQueueTree_,e)),Ch(t,t.transactionQueueTree_),tn(t.eventQueue_,e,d);for(let f=0;f<c.length;f++)Ui(c[f])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Ke("transaction at "+l.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Bl(t,e)}},o)}function Bl(t,e){const n=Sw(t,e),r=Eo(n),i=Iw(t,n);return VR(t,i,r),r}function VR(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Be(n,l.path);let d=!1,c;if(N(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,c=l.abortReason,i=i.concat(dr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=OR)d=!0,c="maxretry",i=i.concat(dr(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Cw(t,l.path,o);l.currentInputSnapshot=f;const g=e[a].update(f.val());if(g!==void 0){mh("transaction failed: Data returned ",g,l.path);let v=ke(g);typeof g=="object"&&g!=null&&Dt(g,".priority")||(v=v.updatePriority(f.getPriority()));const E=l.currentWriteId,p=yh(t),h=fw(v,f,p);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=h,l.currentWriteId=Ew(t),o.splice(o.indexOf(E),1),i=i.concat(lw(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(dr(t.serverSyncTree_,E,!0))}else d=!0,c="nodata",i=i.concat(dr(t.serverSyncTree_,l.currentWriteId,!0))}tn(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(c==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(c),!1,null))))}Vl(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ui(r[a]);Ch(t,t.transactionQueueTree_)}function Sw(t,e){let n,r=t.transactionQueueTree_;for(n=j(e);n!==null&&ji(r)===void 0;)r=ph(r,n),e=Q(e),n=j(e);return r}function Iw(t,e){const n=[];return kw(t,e,n),n.sort((r,i)=>r.order-i.order),n}function kw(t,e,n){const r=ji(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Wl(e,i=>{kw(t,i,n)})}function Vl(t,e){const n=ji(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,hw(e,n.length>0?n:void 0)}Wl(e,r=>{Vl(t,r)})}function Tw(t,e){const n=Eo(Sw(t,e)),r=ph(t.transactionQueueTree_,e);return CR(r,i=>{Uu(t,i)}),Uu(t,r),mw(r,i=>{Uu(t,i)}),n}function Uu(t,e){const n=ji(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(N(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(N(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(dr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?hw(e,void 0):n.length=s+1,tn(t.eventQueue_,Eo(e),i);for(let o=0;o<r.length;o++)Ui(r[o])}}/**
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
 */function HR(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function $R(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const hg=function(t,e){const n=GR(t),r=n.namespace;n.domain==="firebase.com"&&en(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&en("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||sP();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new P0(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new q(n.pathString)}},GR=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=HR(t.substring(d,c)));const f=$R(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */const pg="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",KR=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=pg.charAt(n%64),n=Math.floor(n/64);N(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=pg.charAt(e[i]);return N(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class Nw{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ce(this.snapshot.exportVal())}}class Pw{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class YR{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return N(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class zi{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return z(this._path)?null:F0(this._path)}get ref(){return new on(this._repo,this._path)}get _queryIdentifier(){const e=Qm(this._queryParams),n=Vf(e);return n==="{}"?"default":n}get _queryObject(){return Qm(this._queryParams)}isEqual(e){if(e=Ue(e),!(e instanceof zi))return!1;const n=this._repo===e._repo,r=Kf(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+BP(this._path)}}function qR(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Sh(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===mr){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==Nr)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==zn)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===ae){if(e!=null&&!cg(e)||n!=null&&!cg(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(N(t.getIndex()instanceof Qf||t.getIndex()===G0,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function xw(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class on extends zi{constructor(e,n){super(e,n,new Jf,!1)}get parent(){const e=j0(this._path);return e===null?null:new on(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class eo{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new q(e),r=Vn(this.ref,e);return new eo(this._node.getChild(n),r,ae)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new eo(i,Vn(this.ref,r),ae)))}hasChild(e){const n=new q(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function re(t,e){return t=Ue(t),t._checkNotDeleted("ref"),e!==void 0?Vn(t._root,e):t._root}function Vn(t,e){return t=Ue(t),j(t._path)===null?NR("child","path",e):gh("child","path",e),new on(t._repo,ge(t._path,e))}function Rw(t,e){t=Ue(t),vh("push",t._path),Co("push",e,t._path,!0);const n=ww(t._repo),r=KR(n),i=Vn(t,r),s=Vn(t,r);let o;return o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function pi(t){return vh("remove",t._path),Cn(t,null)}function Cn(t,e){t=Ue(t),vh("set",t._path),Co("set",e,t._path,!1);const n=new Pl;return MR(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Ih{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Nw("value",this,new eo(e.snapshotNode,new on(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Pw(this,e,n):null}matches(e){return e instanceof Ih?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class kh{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Pw(this,e,n):null}createEvent(e,n){N(e.childName!=null,"Child events should have a childName.");const r=Vn(new on(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Nw(e.type,this,new eo(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof kh?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Hl(t,e,n,r,i){const s=new YR(n,void 0),o=e==="value"?new Ih(s):new kh(e,s);return UR(t._repo,t,o),()=>jR(t._repo,t,o)}function ju(t,e,n,r){return Hl(t,"value",e)}function QR(t,e,n,r){return Hl(t,"child_added",e)}function ud(t,e,n,r){return Hl(t,"child_changed",e)}function bw(t,e,n,r){return Hl(t,"child_removed",e)}class $l{}class XR extends $l{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){Co("endAt",this._value,e._path,!0);const n=dx(e._queryParams,this._value,this._key);if(xw(n),Sh(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new zi(e._repo,e._path,n,e._orderByCalled)}}class JR extends $l{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){Co("startAt",this._value,e._path,!0);const n=cx(e._queryParams,this._value,this._key);if(xw(n),Sh(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new zi(e._repo,e._path,n,e._orderByCalled)}}class ZR extends $l{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){qR(e,"orderByChild");const n=new q(this._path);if(z(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new Qf(n),i=fx(e._queryParams,r);return Sh(i),new zi(e._repo,e._path,i,!0)}}function Ow(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return gh("orderByChild","path",t),new ZR(t)}class eb extends $l{constructor(e,n){super(),this._value=e,this._key=n,this.type="equalTo"}_apply(e){if(Co("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new XR(this._value,this._key)._apply(new JR(this._value,this._key)._apply(e))}}function tb(t,e){return new eb(t,e)}function Aw(t,...e){let n=Ue(t);for(const r of e)n=r._apply(n);return n}Zx(on);sR(on);/**
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
 */const nb="FIREBASE_DATABASE_EMULATOR_HOST",cd={};let rb=!1;function ib(t,e,n,r){t.repoInfo_=new P0(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function sb(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||en("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),be("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=hg(s,i),a=o.repoInfo,l;typeof process<"u"&&Om&&(l=Om[nb]),l?(s=`http://${l}?ns=${a.namespace}`,o=hg(s,i),a=o.repoInfo):o.repoInfo.secure;const u=new gP(t.name,t.options,e);PR("Invalid Firebase Database URL",o),z(o.path)||en("Database URL must point to the root of a Firebase Database (not including a child path).");const d=ab(a,t,u,new mP(t.name,n));return new lb(d,t)}function ob(t,e){const n=cd[e];(!n||n[t.key]!==t)&&en(`Database ${e}(${t.repoInfo_}) has already been deleted.`),zR(t),delete n[t.key]}function ab(t,e,n,r){let i=cd[e.name];i||(i={},cd[e.name]=i);let s=i[t.toURLString()];return s&&en("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new AR(t,rb,n,r),i[t.toURLString()]=s,s}class lb{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(LR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new on(this._repo,G())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ob(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&en("Cannot call "+e+" on a deleted database.")}}function ub(t=gy(),e){const n=xf(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=nS("database");r&&cb(n,...r)}return n}function cb(t,e,n,r={}){t=Ue(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&en("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&en('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new fa(fa.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:rS(r.mockUserToken,t.app.options.projectId);s=new fa(o)}ib(i,e,n,s)}/**
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
 */function db(t){ZN(Li),Ii(new Sr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return sb(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Ln(Am,Lm,t),Ln(Am,Lm,"esm2017")}Yt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Yt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};db();const mg=()=>{};let Th={},Lw={},Dw=null,Mw={mark:mg,measure:mg};try{typeof window<"u"&&(Th=window),typeof document<"u"&&(Lw=document),typeof MutationObserver<"u"&&(Dw=MutationObserver),typeof performance<"u"&&(Mw=performance)}catch{}const{userAgent:gg=""}=Th.navigator||{},Hn=Th,ne=Lw,vg=Dw,Yo=Mw;Hn.document;const an=!!ne.documentElement&&!!ne.head&&typeof ne.addEventListener=="function"&&typeof ne.createElement=="function",Fw=~gg.indexOf("MSIE")||~gg.indexOf("Trident/");var se="classic",Uw="duotone",Je="sharp",Ze="sharp-duotone",fb=[se,Uw,Je,Ze],hb={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},_g={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},pb=["kit"],mb=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,gb=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,vb={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},_b={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},yb={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},wb={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Eb={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Cb={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},jw={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Sb=["solid","regular","light","thin","duotone","brands"],zw=[1,2,3,4,5,6,7,8,9,10],Ib=zw.concat([11,12,13,14,15,16,17,18,19,20]),os={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},kb=[...Object.keys(wb),...Sb,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",os.GROUP,os.SWAP_OPACITY,os.PRIMARY,os.SECONDARY].concat(zw.map(t=>"".concat(t,"x"))).concat(Ib.map(t=>"w-".concat(t))),Tb={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Nb={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Pb={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},yg={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const nn="___FONT_AWESOME___",dd=16,Ww="fa",Bw="svg-inline--fa",br="data-fa-i2svg",fd="data-fa-pseudo-element",xb="data-fa-pseudo-element-pending",Nh="data-prefix",Ph="data-icon",wg="fontawesome-i2svg",Rb="async",bb=["HTML","HEAD","STYLE","SCRIPT"],Vw=(()=>{try{return!0}catch{return!1}})(),Hw=[se,Je,Ze];function So(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[se]}})}const $w={...jw};$w[se]={...jw[se],..._g.kit,..._g["kit-duotone"]};const gr=So($w),hd={...Cb};hd[se]={...hd[se],...yg.kit,...yg["kit-duotone"]};const to=So(hd),pd={...Eb};pd[se]={...pd[se],...Pb.kit};const vr=So(pd),md={...yb};md[se]={...md[se],...Nb.kit};const Ob=So(md),Ab=mb,Gw="fa-layers-text",Lb=gb,Db={...hb};So(Db);const Mb=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],zu=os,Ni=new Set;Object.keys(to[se]).map(Ni.add.bind(Ni));Object.keys(to[Je]).map(Ni.add.bind(Ni));Object.keys(to[Ze]).map(Ni.add.bind(Ni));const Fb=[...pb,...kb],Ss=Hn.FontAwesomeConfig||{};function Ub(t){var e=ne.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function jb(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}ne&&typeof ne.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=jb(Ub(n));i!=null&&(Ss[r]=i)});const Kw={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ww,replacementClass:Bw,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ss.familyPrefix&&(Ss.cssPrefix=Ss.familyPrefix);const Pi={...Kw,...Ss};Pi.autoReplaceSvg||(Pi.observeMutations=!1);const A={};Object.keys(Kw).forEach(t=>{Object.defineProperty(A,t,{enumerable:!0,set:function(e){Pi[t]=e,Is.forEach(n=>n(A))},get:function(){return Pi[t]}})});Object.defineProperty(A,"familyPrefix",{enumerable:!0,set:function(t){Pi.cssPrefix=t,Is.forEach(e=>e(A))},get:function(){return Pi.cssPrefix}});Hn.FontAwesomeConfig=A;const Is=[];function zb(t){return Is.push(t),()=>{Is.splice(Is.indexOf(t),1)}}const cn=dd,Pt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Wb(t){if(!t||!an)return;const e=ne.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=ne.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ne.head.insertBefore(e,r),t}const Bb="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function no(){let t=12,e="";for(;t-- >0;)e+=Bb[Math.random()*62|0];return e}function Wi(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function xh(t){return t.classList?Wi(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Yw(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Vb(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Yw(t[n]),'" '),"").trim()}function Gl(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Rh(t){return t.size!==Pt.size||t.x!==Pt.x||t.y!==Pt.y||t.rotate!==Pt.rotate||t.flipX||t.flipY}function Hb(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function $b(t){let{transform:e,width:n=dd,height:r=dd,startCentered:i=!1}=t,s="";return i&&Fw?s+="translate(".concat(e.x/cn-n/2,"em, ").concat(e.y/cn-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/cn,"em), calc(-50% + ").concat(e.y/cn,"em)) "):s+="translate(".concat(e.x/cn,"em, ").concat(e.y/cn,"em) "),s+="scale(".concat(e.size/cn*(e.flipX?-1:1),", ").concat(e.size/cn*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var Gb=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function qw(){const t=Ww,e=Bw,n=A.cssPrefix,r=A.replacementClass;let i=Gb;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}let Eg=!1;function Wu(){A.autoAddCss&&!Eg&&(Wb(qw()),Eg=!0)}var Kb={mixout(){return{dom:{css:qw,insertCss:Wu}}},hooks(){return{beforeDOMElementCreation(){Wu()},beforeI2svg(){Wu()}}}};const rn=Hn||{};rn[nn]||(rn[nn]={});rn[nn].styles||(rn[nn].styles={});rn[nn].hooks||(rn[nn].hooks={});rn[nn].shims||(rn[nn].shims=[]);var xt=rn[nn];const Qw=[],Xw=function(){ne.removeEventListener("DOMContentLoaded",Xw),ul=1,Qw.map(t=>t())};let ul=!1;an&&(ul=(ne.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ne.readyState),ul||ne.addEventListener("DOMContentLoaded",Xw));function Yb(t){an&&(ul?setTimeout(t,0):Qw.push(t))}function Io(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?Yw(t):"<".concat(e," ").concat(Vb(n),">").concat(r.map(Io).join(""),"</").concat(e,">")}function Cg(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Bu=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=n,l,u,d;for(r===void 0?(l=1,d=e[s[0]]):(l=0,d=r);l<o;l++)u=s[l],d=a(d,e[u],u,e);return d};function qb(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function gd(t){const e=qb(t);return e.length===1?e[0].toString(16):null}function Qb(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Sg(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function vd(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=Sg(e);typeof xt.hooks.addPack=="function"&&!r?xt.hooks.addPack(t,Sg(e)):xt.styles[t]={...xt.styles[t]||{},...i},t==="fas"&&vd("fa",e)}const{styles:or,shims:Xb}=xt,Jb={[se]:Object.values(vr[se]),[Je]:Object.values(vr[Je]),[Ze]:Object.values(vr[Ze])};let bh=null,Jw={},Zw={},eE={},tE={},nE={};const Zb={[se]:Object.keys(gr[se]),[Je]:Object.keys(gr[Je]),[Ze]:Object.keys(gr[Ze])};function eO(t){return~Fb.indexOf(t)}function tO(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!eO(i)?i:null}const rE=()=>{const t=r=>Bu(or,(i,s,o)=>(i[o]=Bu(s,r,{}),i),{});Jw=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=s}),r)),Zw=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=s}),r)),nE=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(a=>{r[a]=s}),r});const e="far"in or||A.autoFetchSvg,n=Bu(Xb,(r,i)=>{const s=i[0];let o=i[1];const a=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:a}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});eE=n.names,tE=n.unicodes,bh=Kl(A.styleDefault,{family:A.familyDefault})};zb(t=>{bh=Kl(t.styleDefault,{family:A.familyDefault})});rE();function Oh(t,e){return(Jw[t]||{})[e]}function nO(t,e){return(Zw[t]||{})[e]}function Sn(t,e){return(nE[t]||{})[e]}function iE(t){return eE[t]||{prefix:null,iconName:null}}function rO(t){const e=tE[t],n=Oh("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function $n(){return bh}const Ah=()=>({prefix:null,iconName:null,rest:[]});function Kl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=se}=e,r=gr[n][t],i=to[n][t]||to[n][r],s=t in xt.styles?t:null;return i||s||null}const iO={[se]:Object.keys(vr[se]),[Je]:Object.keys(vr[Je]),[Ze]:Object.keys(vr[Ze])};function Yl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[se]:"".concat(A.cssPrefix,"-").concat(se),[Je]:"".concat(A.cssPrefix,"-").concat(Je),[Ze]:"".concat(A.cssPrefix,"-").concat(Ze)};let i=null,s=se;const o=fb.filter(l=>l!==Uw);o.forEach(l=>{(t.includes(r[l])||t.some(u=>iO[l].includes(u)))&&(s=l)});const a=t.reduce((l,u)=>{const d=tO(A.cssPrefix,u);if(or[u]?(u=Jb[s].includes(u)?Ob[s][u]:u,i=u,l.prefix=u):Zb[s].indexOf(u)>-1?(i=u,l.prefix=Kl(u,{family:s})):d?l.iconName=d:u!==A.replacementClass&&!o.some(c=>u===r[c])&&l.rest.push(u),!n&&l.prefix&&l.iconName){const c=i==="fa"?iE(l.iconName):{},f=Sn(l.prefix,l.iconName);c.prefix&&(i=null),l.iconName=c.iconName||f||l.iconName,l.prefix=c.prefix||l.prefix,l.prefix==="far"&&!or.far&&or.fas&&!A.autoFetchSvg&&(l.prefix="fas")}return l},Ah());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&s===Je&&(or.fass||A.autoFetchSvg)&&(a.prefix="fass",a.iconName=Sn(a.prefix,a.iconName)||a.iconName),!a.prefix&&s===Ze&&(or.fasds||A.autoFetchSvg)&&(a.prefix="fasds",a.iconName=Sn(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||i==="fa")&&(a.prefix=$n()||"fas"),a}class sO{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...i[s]},vd(s,i[s]);const o=vr[se][s];o&&vd(o,i[s]),rE()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:a}=r[i],l=a[2];e[s]||(e[s]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(e[s][u]=a)}),e[s][o]=a}),e}}let Ig=[],ti={};const mi={},oO=Object.keys(mi);function aO(t,e){let{mixoutsTo:n}=e;return Ig=t,ti={},Object.keys(mi).forEach(r=>{oO.indexOf(r)===-1&&delete mi[r]}),Ig.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{ti[o]||(ti[o]=[]),ti[o].push(s[o])})}r.provides&&r.provides(mi)}),n}function _d(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(ti[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function Or(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(ti[t]||[]).forEach(s=>{s.apply(null,n)})}function Gn(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return mi[t]?mi[t].apply(null,e):void 0}function yd(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||$n();if(e)return e=Sn(n,e)||e,Cg(sE.definitions,n,e)||Cg(xt.styles,n,e)}const sE=new sO,lO=()=>{A.autoReplaceSvg=!1,A.observeMutations=!1,Or("noAuto")},uO={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return an?(Or("beforeI2svg",t),Gn("pseudoElements2svg",t),Gn("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;A.autoReplaceSvg===!1&&(A.autoReplaceSvg=!0),A.observeMutations=!0,Yb(()=>{dO({autoReplaceSvgRoot:e}),Or("watch",t)})}},cO={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Sn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Kl(t[0]);return{prefix:n,iconName:Sn(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(A.cssPrefix,"-"))>-1||t.match(Ab))){const e=Yl(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||$n(),iconName:Sn(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=$n();return{prefix:e,iconName:Sn(e,t)||t}}}},rt={noAuto:lO,config:A,dom:uO,parse:cO,library:sE,findIconDefinition:yd,toHtml:Io},dO=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=ne}=t;(Object.keys(xt.styles).length>0||A.autoFetchSvg)&&an&&A.autoReplaceSvg&&rt.dom.i2svg({node:e})};function ql(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Io(n))}}),Object.defineProperty(t,"node",{get:function(){if(!an)return;const n=ne.createElement("div");return n.innerHTML=t.html,n.children}}),t}function fO(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(Rh(o)&&n.found&&!r.found){const{width:a,height:l}=n,u={x:a/l/2,y:.5};i.style=Gl({...s,"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")})}return[{tag:"svg",attributes:i,children:e}]}function hO(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(A.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:o},children:r}]}]}function Lh(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:a,maskId:l,titleId:u,extra:d,watchable:c=!1}=t,{width:f,height:g}=n.found?n:e,v=r==="fak",_=[A.replacementClass,i?"".concat(A.cssPrefix,"-").concat(i):""].filter(k=>d.classes.indexOf(k)===-1).filter(k=>k!==""||!!k).concat(d.classes).join(" ");let E={children:[],attributes:{...d.attributes,"data-prefix":r,"data-icon":i,class:_,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(g)}};const p=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(f/g*16*.0625,"em")}:{};c&&(E.attributes[br]=""),a&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(u||no())},children:[a]}),delete E.attributes.title);const h={...E,prefix:r,iconName:i,main:e,mask:n,maskId:l,transform:s,symbol:o,styles:{...p,...d.styles}},{children:m,attributes:y}=n.found&&e.found?Gn("generateAbstractMask",h)||{children:[],attributes:{}}:Gn("generateAbstractIcon",h)||{children:[],attributes:{}};return h.children=m,h.attributes=y,o?hO(h):fO(h)}function kg(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:a=!1}=t,l={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};a&&(l[br]="");const u={...o.styles};Rh(i)&&(u.transform=$b({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const d=Gl(u);d.length>0&&(l.style=d);const c=[];return c.push({tag:"span",attributes:l,children:[e]}),s&&c.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),c}function pO(t){const{content:e,title:n,extra:r}=t,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},s=Gl(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Vu}=xt;function wd(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(A.cssPrefix,"-").concat(zu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(zu.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(zu.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const mO={found:!1,width:512,height:512};function gO(t,e){!Vw&&!A.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ed(t,e){let n=e;return e==="fa"&&A.styleDefault!==null&&(e=$n()),new Promise((r,i)=>{if(n==="fa"){const s=iE(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Vu[e]&&Vu[e][t]){const s=Vu[e][t];return r(wd(s))}gO(t,e),r({...mO,icon:A.showMissingIcons&&t?Gn("missingIconAbstract")||{}:{}})})}const Tg=()=>{},Cd=A.measurePerformance&&Yo&&Yo.mark&&Yo.measure?Yo:{mark:Tg,measure:Tg},as='FA "6.6.0"',vO=t=>(Cd.mark("".concat(as," ").concat(t," begins")),()=>oE(t)),oE=t=>{Cd.mark("".concat(as," ").concat(t," ends")),Cd.measure("".concat(as," ").concat(t),"".concat(as," ").concat(t," begins"),"".concat(as," ").concat(t," ends"))};var Dh={begin:vO,end:oE};const ha=()=>{};function Ng(t){return typeof(t.getAttribute?t.getAttribute(br):null)=="string"}function _O(t){const e=t.getAttribute?t.getAttribute(Nh):null,n=t.getAttribute?t.getAttribute(Ph):null;return e&&n}function yO(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(A.replacementClass)}function wO(){return A.autoReplaceSvg===!0?pa.replace:pa[A.autoReplaceSvg]||pa.replace}function EO(t){return ne.createElementNS("http://www.w3.org/2000/svg",t)}function CO(t){return ne.createElement(t)}function aE(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?EO:CO}=e;if(typeof t=="string")return ne.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(aE(s,{ceFn:n}))}),r}function SO(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const pa={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(aE(n),e)}),e.getAttribute(br)===null&&A.keepOriginalSource){let n=ne.createComment(SO(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~xh(e).indexOf(A.replacementClass))return pa.replace(t);const r=new RegExp("".concat(A.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,a)=>(a===A.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>Io(s)).join(`
`);e.setAttribute(br,""),e.innerHTML=i}};function Pg(t){t()}function lE(t,e){const n=typeof e=="function"?e:ha;if(t.length===0)n();else{let r=Pg;A.mutateApproach===Rb&&(r=Hn.requestAnimationFrame||Pg),r(()=>{const i=wO(),s=Dh.begin("mutate");t.map(i),s(),n()})}}let Mh=!1;function uE(){Mh=!0}function Sd(){Mh=!1}let cl=null;function xg(t){if(!vg||!A.observeMutations)return;const{treeCallback:e=ha,nodeCallback:n=ha,pseudoElementsCallback:r=ha,observeMutationsRoot:i=ne}=t;cl=new vg(s=>{if(Mh)return;const o=$n();Wi(s).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Ng(a.addedNodes[0])&&(A.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&A.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&Ng(a.target)&&~Mb.indexOf(a.attributeName))if(a.attributeName==="class"&&_O(a.target)){const{prefix:l,iconName:u}=Yl(xh(a.target));a.target.setAttribute(Nh,l||o),u&&a.target.setAttribute(Ph,u)}else yO(a.target)&&n(a.target)})}),an&&cl.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function IO(){cl&&cl.disconnect()}function kO(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function TO(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=Yl(xh(t));return i.prefix||(i.prefix=$n()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=nO(i.prefix,t.innerText)||Oh(i.prefix,gd(t.innerText))),!i.iconName&&A.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function NO(t){const e=Wi(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return A.autoA11y&&(n?e["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(r||no()):(e["aria-hidden"]="true",e.focusable="false")),e}function PO(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Pt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Rg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=TO(t),s=NO(t),o=_d("parseNodeAttributes",{},t);let a=e.styleParser?kO(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Pt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:s},...o}}const{styles:xO}=xt;function cE(t){const e=A.autoReplaceSvg==="nest"?Rg(t,{styleParser:!1}):Rg(t);return~e.extra.classes.indexOf(Gw)?Gn("generateLayersText",t,e):Gn("generateSvgReplacementMutation",t,e)}let Lt=new Set;Hw.map(t=>{Lt.add("fa-".concat(t))});Object.keys(gr[se]).map(Lt.add.bind(Lt));Object.keys(gr[Je]).map(Lt.add.bind(Lt));Object.keys(gr[Ze]).map(Lt.add.bind(Lt));Lt=[...Lt];function bg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!an)return Promise.resolve();const n=ne.documentElement.classList,r=d=>n.add("".concat(wg,"-").concat(d)),i=d=>n.remove("".concat(wg,"-").concat(d)),s=A.autoFetchSvg?Lt:Hw.map(d=>"fa-".concat(d)).concat(Object.keys(xO));s.includes("fa")||s.push("fa");const o=[".".concat(Gw,":not([").concat(br,"])")].concat(s.map(d=>".".concat(d,":not([").concat(br,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Wi(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();const l=Dh.begin("onTree"),u=a.reduce((d,c)=>{try{const f=cE(c);f&&d.push(f)}catch(f){Vw||f.name==="MissingIcon"&&console.error(f)}return d},[]);return new Promise((d,c)=>{Promise.all(u).then(f=>{lE(f,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),d()})}).catch(f=>{l(),c(f)})})}function RO(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;cE(t).then(n=>{n&&lE([n],e)})}function bO(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:yd(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:yd(i||{})),t(r,{...n,mask:i})}}const OO=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Pt,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:a=null,classes:l=[],attributes:u={},styles:d={}}=e;if(!t)return;const{prefix:c,iconName:f,icon:g}=t;return ql({type:"icon",...t},()=>(Or("beforeDOMElementCreation",{iconDefinition:t,params:e}),A.autoA11y&&(o?u["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(a||no()):(u["aria-hidden"]="true",u.focusable="false")),Lh({icons:{main:wd(g),mask:i?wd(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:c,iconName:f,transform:{...Pt,...n},symbol:r,title:o,maskId:s,titleId:a,extra:{attributes:u,styles:d,classes:l}})))};var AO={mixout(){return{icon:bO(OO)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=bg,t.nodeCallback=RO,t}}},provides(t){t.i2svg=function(e){const{node:n=ne,callback:r=()=>{}}=e;return bg(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:a,symbol:l,mask:u,maskId:d,extra:c}=n;return new Promise((f,g)=>{Promise.all([Ed(r,o),u.iconName?Ed(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(v=>{let[_,E]=v;f([e,Lh({icons:{main:_,mask:E},prefix:o,iconName:r,transform:a,symbol:l,maskId:d,title:i,titleId:s,extra:c,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const a=Gl(o);a.length>0&&(r.style=a);let l;return Rh(s)&&(l=Gn("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(l||i.icon),{children:n,attributes:r}}}},LO={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return ql({type:"layer"},()=>{Or("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(A.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},DO={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return ql({type:"counter",content:t},()=>(Or("beforeDOMElementCreation",{content:t,params:e}),pO({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(A.cssPrefix,"-layers-counter"),...r]}})))}}}},MO={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Pt,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return ql({type:"text",content:t},()=>(Or("beforeDOMElementCreation",{content:t,params:e}),kg({content:t,transform:{...Pt,...n},title:r,extra:{attributes:s,styles:o,classes:["".concat(A.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,a=null;if(Fw){const l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/l,a=u.height/l}return A.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,kg({content:e.innerHTML,width:o,height:a,transform:i,title:r,extra:s,watchable:!0})])}}};const FO=new RegExp('"',"ug"),Og=[1105920,1112319],Ag={FontAwesome:{normal:"fas",400:"fas"},..._b,...vb,...Tb},Id=Object.keys(Ag).reduce((t,e)=>(t[e.toLowerCase()]=Ag[e],t),{}),UO=Object.keys(Id).reduce((t,e)=>{const n=Id[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function jO(t){const e=t.replace(FO,""),n=Qb(e,0),r=n>=Og[0]&&n<=Og[1],i=e.length===2?e[0]===e[1]:!1;return{value:gd(i?e[0]:e),isSecondary:r||i}}function zO(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(Id[n]||{})[i]||UO[n]}function Lg(t,e){const n="".concat(xb).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=Wi(t.children).filter(f=>f.getAttribute(fd)===e)[0],a=Hn.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),u=l.match(Lb),d=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&c!=="none"&&c!==""){const f=a.getPropertyValue("content");let g=zO(l,d);const{value:v,isSecondary:_}=jO(f),E=u[0].startsWith("FontAwesome");let p=Oh(g,v),h=p;if(E){const m=rO(v);m.iconName&&m.prefix&&(p=m.iconName,g=m.prefix)}if(p&&!_&&(!o||o.getAttribute(Nh)!==g||o.getAttribute(Ph)!==h)){t.setAttribute(n,h),o&&t.removeChild(o);const m=PO(),{extra:y}=m;y.attributes[fd]=e,Ed(p,g).then(k=>{const R=Lh({...m,icons:{main:k,mask:Ah()},prefix:g,iconName:h,extra:y,watchable:!0}),x=ne.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(x,t.firstChild):t.appendChild(x),x.outerHTML=R.map(S=>Io(S)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function WO(t){return Promise.all([Lg(t,"::before"),Lg(t,"::after")])}function BO(t){return t.parentNode!==document.head&&!~bb.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(fd)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Dg(t){if(an)return new Promise((e,n)=>{const r=Wi(t.querySelectorAll("*")).filter(BO).map(WO),i=Dh.begin("searchPseudoElements");uE(),Promise.all(r).then(()=>{i(),Sd(),e()}).catch(()=>{i(),Sd(),n()})})}var VO={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Dg,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=ne}=e;A.searchPseudoElements&&Dg(n)}}};let Mg=!1;var HO={mixout(){return{dom:{unwatch(){uE(),Mg=!0}}}},hooks(){return{bootstrap(){xg(_d("mutationObserverCallbacks",{}))},noAuto(){IO()},watch(t){const{observeMutationsRoot:e}=t;Mg?Sd():xg(_d("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Fg=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var $O={mixout(){return{parse:{transform:t=>Fg(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Fg(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(a," ").concat(l," ").concat(u)},c={transform:"translate(".concat(s/2*-1," -256)")},f={outer:o,inner:d,path:c};return{tag:"g",attributes:{...f.outer},children:[{tag:"g",attributes:{...f.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...f.path}}]}]}}}};const Hu={x:0,y:0,width:"100%",height:"100%"};function Ug(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function GO(t){return t.tag==="g"?t.children:[t]}var KO={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Yl(n.split(" ").map(i=>i.trim())):Ah();return r.prefix||(r.prefix=$n()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:a}=e;const{width:l,icon:u}=i,{width:d,icon:c}=s,f=Hb({transform:a,containerWidth:d,iconWidth:l}),g={tag:"rect",attributes:{...Hu,fill:"white"}},v=u.children?{children:u.children.map(Ug)}:{},_={tag:"g",attributes:{...f.inner},children:[Ug({tag:u.tag,attributes:{...u.attributes,...f.path},...v})]},E={tag:"g",attributes:{...f.outer},children:[_]},p="mask-".concat(o||no()),h="clip-".concat(o||no()),m={tag:"mask",attributes:{...Hu,id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[g,E]},y={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:GO(c)},m]};return n.push(y,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(p,")"),...Hu}}),{children:n,attributes:r}}}},YO={provides(t){let e=!1;Hn.matchMedia&&(e=Hn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...i,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},qO={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},QO=[Kb,AO,LO,DO,MO,VO,HO,$O,KO,YO,qO];aO(QO,{mixoutsTo:rt});rt.noAuto;rt.config;rt.library;rt.dom;const kd=rt.parse;rt.findIconDefinition;rt.toHtml;const XO=rt.icon;rt.layer;rt.text;rt.counter;var dE={exports:{}},JO="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ZO=JO,eA=ZO;function fE(){}function hE(){}hE.resetWarningCache=fE;var tA=function(){function t(r,i,s,o,a,l){if(l!==eA){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:hE,resetWarningCache:fE};return n.PropTypes=n,n};dE.exports=tA();var nA=dE.exports;const B=Hg(nA);function jg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function kt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?jg(Object(n),!0).forEach(function(r){ni(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):jg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function dl(t){"@babel/helpers - typeof";return dl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},dl(t)}function ni(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function rA(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function iA(t,e){if(t==null)return{};var n=rA(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Td(t){return sA(t)||oA(t)||aA(t)||lA()}function sA(t){if(Array.isArray(t))return Nd(t)}function oA(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function aA(t,e){if(t){if(typeof t=="string")return Nd(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nd(t,e)}}function Nd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function lA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function uA(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,d=t.spinReverse,c=t.pulse,f=t.fixedWidth,g=t.inverse,v=t.border,_=t.listItem,E=t.flip,p=t.size,h=t.rotation,m=t.pull,y=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":d,"fa-spin-pulse":u,"fa-pulse":c,"fa-fw":f,"fa-inverse":g,"fa-border":v,"fa-li":_,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},ni(e,"fa-".concat(p),typeof p<"u"&&p!==null),ni(e,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),ni(e,"fa-pull-".concat(m),typeof m<"u"&&m!==null),ni(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(y).map(function(k){return y[k]?k:null}).filter(function(k){return k})}function cA(t){return t=t-0,t===t}function pE(t){return cA(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var dA=["style"];function fA(t){return t.charAt(0).toUpperCase()+t.slice(1)}function hA(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=pE(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[fA(i)]=s:e[i]=s,e},{})}function mE(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return mE(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.attrs.className=d,delete e.attributes.class;break;case"style":l.attrs.style=hA(d);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=d:l.attrs[pE(u)]=d}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=iA(n,dA);return i.attrs.style=kt(kt({},i.attrs.style),o),t.apply(void 0,[e.tag,kt(kt({},i.attrs),a)].concat(Td(r)))}var gE=!1;try{gE=!0}catch{}function pA(){if(!gE&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function zg(t){if(t&&dl(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(kd.icon)return kd.icon(t);if(t===null)return null;if(t&&dl(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function $u(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ni({},t,e):{}}var Wg={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Fn=io.forwardRef(function(t,e){var n=kt(kt({},Wg),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,l=n.titleId,u=n.maskId,d=zg(r),c=$u("classes",[].concat(Td(uA(n)),Td((o||"").split(" ")))),f=$u("transform",typeof n.transform=="string"?kd.transform(n.transform):n.transform),g=$u("mask",zg(i)),v=XO(d,kt(kt(kt(kt({},c),f),g),{},{symbol:s,title:a,titleId:l,maskId:u}));if(!v)return pA("Could not find icon",d),null;var _=v.abstract,E={ref:e};return Object.keys(n).forEach(function(p){Wg.hasOwnProperty(p)||(E[p]=n[p])}),mA(_[0],E)});Fn.displayName="FontAwesomeIcon";Fn.propTypes={beat:B.bool,border:B.bool,beatFade:B.bool,bounce:B.bool,className:B.string,fade:B.bool,flash:B.bool,mask:B.oneOfType([B.object,B.array,B.string]),maskId:B.string,fixedWidth:B.bool,inverse:B.bool,flip:B.oneOf([!0,!1,"horizontal","vertical","both"]),icon:B.oneOfType([B.object,B.array,B.string]),listItem:B.bool,pull:B.oneOf(["right","left"]),pulse:B.bool,rotation:B.oneOf([0,90,180,270]),shake:B.bool,size:B.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:B.bool,spinPulse:B.bool,spinReverse:B.bool,symbol:B.oneOfType([B.bool,B.string]),title:B.string,titleId:B.string,transform:B.oneOfType([B.string,B.object]),swapOpacity:B.bool};var mA=mE.bind(null,io.createElement);const gA={prefix:"far",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]},vA={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},_A={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]},yA={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},Bg={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm0 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 224c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},wA={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},EA={prefix:"fas",iconName:"ellipsis",icon:[448,512,["ellipsis-h"],"f141","M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"]},Vg={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]};class CA extends T.Component{constructor(n){super(n);Uh(this,"adjustTextareaHeight",()=>{const n=this.textAreaRef.current;n!=null&&(console.log("adjusting height"),n.style.height="auto",n.style.height=`${n.scrollHeight}px`)});this.item=null,this.textAreaRef=io.createRef(),n&&(this.item=n.data.item,this.SaveChanges=n.data.SaveChanges,this.OnPushItemTask=n.data.OnPushItemTask,this.OnChangeItemTask=n.data.OnChangeItemTask,this.OnToggleCheck=n.data.OnToggleCheck,this.OnDeleteItem=n.data.OnDeleteItem)}componentDidUpdate(){const n=this.textAreaRef.current;n!=null&&(n.style.height="1.4em",n.style.height=`${n.scrollHeight}px`)}render(){return this.item&&w.jsxs("div",{className:"listItem",children:[w.jsx(Fn,{onClick:()=>this.OnToggleCheck(this.item),className:(this.item.checkmark?"checked":"unchecked")+" itemCheckIcon",icon:this.item.checkmark?yA:gA}),w.jsx("textarea",{ref:this.textAreaRef,className:(this.item.checkmark?"itemNameCrossed":"")+" itemName",value:this.item.task,onKeyDown:this.SaveChanges,onBlur:()=>this.OnPushItemTask(this.item),onChange:n=>{this.OnChangeItemTask(this.item,n.target.value)}}),w.jsx(Fn,{className:"editItemButton",onClick:()=>this.OnDeleteItem(this.item),icon:wA})]},this.item.id)}}function SA(t){const[e,n]=T.useState([]),[r,i]=T.useState(""),[s,o]=T.useState(""),[a,l]=T.useState({saveIcon:null,message:"",state:!1});T.useEffect(()=>{t&&o(t.data.listID??"")},[t.data.listID]),T.useEffect(()=>{console.log(t.data)},[]),T.useEffect(()=>{s!==""&&s!==void 0&&(n([]),i(t.data.listName??""),QR(Aw(re(t.data.database,"Lists/"+t.data.listID+"/Items"),Ow("timestamp")),C=>m(C)),bw(re(t.data.database,"Lists/"+t.data.listID+"/Items"),C=>y(C)),ud(re(t.data.database,"Lists/"+t.data.listID+"/Items"),C=>k(C)),ud(re(t.data.database,"Lists/"+t.data.listID),C=>R(C)))},[s]);const u=(C,P)=>{n(L=>{const H=[...L];return H.forEach(J=>{J.id===C.id&&(J.task=P)}),H}),_(d,C),l({saveIcon:Vg,saveMessage:"Unsaved changes",state:!1})},d=C=>{t.data.database&&((C.timestamp==null||C.timestampe==null)&&(C.timestamp=-Date.now()),Cn(re(t.data.database,"Lists/"+s+"/Items/"+C.id),C).then(()=>{l({saveIcon:Bg,saveMessage:"Changes saved",state:!0,shouldFadeOut:!1})}).catch(P=>{console.log(P)}))},c=C=>{pi(re(t.data.database,"Lists/"+s+"/Items/"+C.id)).then(()=>{}).catch(P=>{console.log(P)})},f=(C,P)=>{_(g,C,P),i(P),l({saveIcon:Vg,saveMessage:"Unsaved changes",state:!1})},g=(C,P)=>{t.data.database&&Cn(re(t.data.database,"Lists/"+s+"/Name"),P).then(()=>{l({saveIcon:Bg,saveMessage:"Changes saved",state:!0})}).catch(L=>{console.log(L)})},v=T.useRef([]),_=(C,...P)=>{v.current.push({func:C,params:P})},E=C=>{C.key==="Enter"&&(v.current.forEach(({func:P,params:L})=>P(...L)),v.current=[])},p=C=>{C.checkmark=!C.checkmark,n(P=>{var L=[...P];return L.forEach(H=>{H.id===C.id&&(H.checkmark=C.checkmark)}),L=S(L),L}),d(C)},h=()=>{const C=Rw(Vn(re(t.data.database,"Lists/"+s+"/Items"),"Items")).key,P={id:C,checkmark:!1,task:"New Task",timestamp:-Date.now()};Cn(re(t.data.database,"Lists/"+s+"/Items/"+C),P).then(()=>{}).catch(L=>{console.log(L)})},m=C=>{const P={id:C.val().id,checkmark:C.val().checkmark,task:C.val().task,timestamp:C.val().timestamp};x(P)},y=C=>{n(P=>{var L=S([...P]);return L=L.filter(H=>H.id!==C.key),L})},k=C=>{const P={id:C.val().id,checkmark:C.val().checkmark,task:C.val().task,timestamp:C.val().timestamp};n(L=>{var H=[...L];return H.forEach(J=>{J.id===P.id&&(J.task=P.task,J.checkmark=P.checkmark)}),H=S(H),H})},R=C=>{C.key==="Name"&&C.ref.parent.key===s&&i(C.val())},x=C=>{n(P=>{var L=S([C,...P]);return L})},S=C=>{const P=[],L=[];C.forEach(je=>{je.checkmark?P.push(je):je.checkmark||L.push(je)});const H=[...P].sort((je,Mt)=>je.timestamp-Mt.timestamp);return[...[...L].sort((je,Mt)=>je.timestamp-Mt.timestamp),...H]};return w.jsxs("div",{className:"mainListView",children:[a.saveIcon&&w.jsx("div",{className:(a.state?"fadeOut":"fadeIn")+" saveProgressContainer",children:w.jsxs("div",{className:(a.state?"saved":"unsaved")+" saveProgress",children:[w.jsx(Fn,{className:"saveIcon",icon:a.saveIcon}),a.saveMessage]})}),w.jsx("div",{className:"listName",children:w.jsx("input",{value:r,onKeyDown:E,onChange:C=>f(s,C.target.value),onBlur:C=>g(s,C.target.value)})}),w.jsxs("div",{className:"listItems",children:[w.jsx("div",{className:"addListItem",onClick:h,children:"Create Task"}),e.map(C=>w.jsx(CA,{data:{item:C,OnToggleCheck:p,SaveChanges:E,OnPushItemTask:d,OnChangeItemTask:u,OnDeleteItem:c}},C.id))]})]})}class Fh extends T.Component{handleClickOutside(e){this.popupRef.current&&(this.isVisible&&!this.popupRef.current.contains(e.target)?(this.props.data.OnNo(),this.isVisible=!1):this.isVisible||(this.isVisible=!0))}constructor(e){super(e),this.isVisible=!1,this.props=e,this.popupRef=io.createRef(),this.handleClickOutside=this.handleClickOutside.bind(this)}componentDidMount(){document.addEventListener("click",this.handleClickOutside)}componentWillUnmount(){document.removeEventListener("click",this.handleClickOutside),this.isVisible=!1}render(){return w.jsx("div",{className:"PopupContainer",children:w.jsxs("div",{className:"PopupModal",ref:this.popupRef,children:[w.jsx("p",{children:this.props.data.Message}),w.jsx("button",{className:"PopupYesButton",onClick:this.props.data.OnYes,children:"Yes"}),w.jsx("button",{className:"PopupNoButton",onClick:this.props.data.OnNo,children:"No"})]})})}}class IA extends Fh{constructor(e){super(e)}render(){return w.jsx("div",{className:"PopupContainer",children:w.jsxs("div",{className:"PopupModal",ref:this.popupRef,children:[w.jsx("p",{children:this.props.data.Message}),w.jsx("span",{className:"ShareKeySpan",children:this.props.data.ShareKey}),w.jsx("button",{className:"PopupNoButton",onClick:this.props.data.OnNo,children:"Close"})]})})}}function kA(t,e,n){event.stopPropagation(),e.uid===n.obj.Owner&&pi(re(t,"Lists/"+n.id)).then(()=>{n.obj.UsersAccess&&Object.keys(n.obj.UsersAccess).map(r=>{pi(re(t,"Users/"+r+"/Lists/"+n.id)).then().catch(i=>console.log(i))}),pi(re(t,"Users/"+e.uid+"/Lists/"+n.id)).then().catch(r=>console.log(r))}).catch(r=>console.log(r))}function TA(t,e,n){pi(re(t,"Users/"+e.uid+"/Lists/"+n)).then(()=>{pi(re(t,"Lists/"+n+"/UsersAcces/"+e.uid)).then(()=>{}).catch(r=>console.log(r))}).catch(r=>{console.log(r)})}function vE(t){const e=T.useRef(null),[n,r]=T.useState(!1),[i,s]=T.useState({isVisible:!1,Message:"",OnYes:null,OnNo:null}),[o,a]=T.useState({isVisible:!1,Message:"",OnNo:null});T.useEffect(()=>{const c=f=>{e.current&&!e.current.contains(f.target)&&(r(!1),t.data.HideListOptions())};return document.addEventListener("click",c),()=>{document.removeEventListener("click",c)}},[]),T.useEffect(()=>{r(t.data.isVisible)},[t.data.isVisible]);const l=(c,f,g)=>{s({isVisible:!0,Message:"Are you sure you want to delete this list? This action cannot be undone.",OnYes:()=>{kA(c,f,g),s({isVisible:!1,Message:"",OnYes:null,OnNo:null})},OnNo:()=>{s({isVisible:!1,Message:"",OnYes:null,OnNo:null})}}),r(!1),t.data.HideListOptions()},u=(c,f,g)=>{s({isVisible:!0,Message:"Are you sure you want to remove this list from your library?",OnYes:()=>{TA(c,f,g),s({isVisible:!1,Message:"",OnYes:null,OnNo:null})},OnNo:()=>{s({isVisible:!1,Message:"",OnYes:null,OnNo:null})}}),r(!1),t.data.HideListOptions()},d=c=>{a({isVisible:!0,Message:"Use the code to share your list with a friend!",ShareKey:c,OnNo:()=>{a({isVisible:!1,Message:"",OnYes:null,OnNo:null})}}),r(!1),t.data.HideListOptions()};return w.jsxs("div",{children:[w.jsx("div",{ref:e,children:n&&w.jsxs("div",{className:"listOptions",style:{left:`${t.data.position.left}px`,top:`${t.data.position.top}px`},children:[t.data.list.userListObj.isOwner&&w.jsx("div",{className:"listOption",onClick:()=>{d(t.data.list.userListObj.shareKey)},children:"Share"}),t.data.list.userListObj.isOwner&&w.jsx("div",{className:"listOption",onClick:()=>{l(t.data.database,t.data.user,t.data.list)},children:"Delete"}),!t.data.list.userListObj.isOwner&&w.jsx("div",{className:"listOption",onClick:()=>{u(t.data.database,t.data.user,t.data.list.id)},children:"Remove"})]})}),i.isVisible&&w.jsx(Fh,{data:i}),o.isVisible&&w.jsx(IA,{data:o})]})}vE.displayName="ListOptions";class NA extends Fh{constructor(e){super(e)}OnChangeCode(e){this.code=e}render(){return w.jsx("div",{className:"PopupContainer",children:w.jsxs("div",{className:"PopupModal",ref:this.popupRef,children:[w.jsx("p",{children:this.props.data.Message}),w.jsx("input",{className:"importCodeInput",onChange:e=>this.OnChangeCode(e.target.value)}),w.jsx("button",{className:"PopupYesButton",onClick:()=>this.props.data.OnYes(this.code),children:"Import"}),w.jsx("button",{className:"PopupNoButton",onClick:this.props.data.OnNo,children:"Close"})]})})}}const PA=""+new URL("marty-sad-DTMU1ptt.png",import.meta.url).href;function xA(){return console.log("Showing empty"),w.jsxs("div",{className:"ListsEmptyContainer",children:[w.jsx("img",{src:PA}),w.jsx("p",{children:"You currently have no lists. Try creating a list using the sidebar."})]})}const it=ub();function RA(){const[t,e]=T.useState([]),[n,r]=T.useState(null),[i,s]=T.useState([]),[o,a]=T.useState({isVisible:!1}),[l,u]=T.useState(!1),d=go(),c=()=>{pr.SignOut(d)};T.useEffect(()=>{pr.auth.onAuthStateChanged(function(S){S?r(S):pr.RedirectLogin(null,d)}),n&&(bw(re(it,"Users/"+n.uid+"/Lists"),C=>v(C)),(async C=>{const P=re(it,"Users/"+C.uid+"/Lists");await ju(P,L=>{if(!L.val()||Object.keys(L.val()).length==0)u(!0);else{u(!1);const H=Object.keys(L.val()).map(J=>new Promise(Zn=>{const je=re(it,"Lists/"+J);ju(je,Mt=>{Zn({id:J,obj:Mt.val(),userListObj:L.val()[J]})})}));Promise.all(H).then(J=>{e(J),J.forEach(Zn=>{ud(re(it,"Lists/"+Zn.id),je=>g(je))}),J.length>0&&f(J[0].id,J[0].obj.Name)})}})})(n))},[n]);const f=(S,C)=>{s({id:S,name:C})},g=S=>{if(S.key==="Name"){console.log(S);const C=S.ref.parent.key;e(P=>{const L=[...P];return L.forEach(H=>{C===H.id&&(H.obj.Name=S.val())}),L})}},v=S=>{const C=S.key;e(P=>{const L=[];return P.forEach(H=>{H.id!==C&&L.push(H)}),L})},_=()=>{const S=Kt.generateRandomString(5),C=Rw(Vn(re(it,"Lists"),"Items")).key,P={Name:"New List",Owner:n.uid,ShareKey:S};Cn(re(it,"Lists/"+C),P).then(()=>{const L={isOwner:!0,shareKey:S};Cn(re(it,"Users/"+n.uid+"/Lists/"+C),L).then(()=>{}).catch(H=>console.log(H))}).catch(L=>{console.log(L)})},E=()=>{h({listID:"",isOwner:!1,isVisible:!1,position:{left:0,top:0}})},[p,h]=T.useState({list:null,isOwner:!1,isVisible:!1,position:{left:0,top:0},HideListOptions:E}),m=(S,C)=>{S.stopPropagation(),h({list:C,isVisible:!0,position:{left:S.clientX,top:S.clientY},HideListOptions:E,database:it,user:n})},y=()=>{a({isVisible:!0,Message:"Paste the code below to import a list from your friend!",OnYes:S=>{const C=Aw(re(it,"Lists"),Ow("ShareKey"),tb(S));ju(C,P=>{if(Object.keys(P.val()).length==1){const L=Object.keys(P.val())[0];Cn(re(it,"Lists/"+L+"/UsersAccess/"+n.uid),"").then(()=>{const H={isOwner:!1,shareKey:S};Cn(re(it,"Users/"+n.uid+"/Lists/"+L),H).then(()=>{}).catch(J=>console.log(J))}).catch(H=>{console.log(H)}),console.log(Object.keys(P.val())[0])}})},OnNo:()=>{a({isVisible:!1,Message:"",OnYes:null,OnNo:null})}})},[k,R]=T.useState(!1),x=(S,C)=>{S.stopPropagation(),R(C)};return w.jsxs("div",{children:[w.jsx("div",{className:"showMenuButton",children:w.jsx(Fn,{icon:vA,onClick:S=>x(S,!0)})}),w.jsxs("div",{className:(k?"showSidebar":"hideSidebar")+" lists-sidebar",children:[w.jsxs("div",{className:"app-details",children:[w.jsx("div",{className:"logo",children:w.jsx("img",{src:e0,alt:""})}),w.jsx("div",{className:"buymeacoffee"}),w.jsxs("div",{className:"userDetail",children:[w.jsx(Fn,{icon:_A}),n?n.email:""]},"user"),w.jsx("div",{className:"sidebarButton",children:w.jsx("button",{className:"logoutButton",onClick:c,children:"Logout"})})]}),w.jsx("hr",{className:"sidebarBreak"}),w.jsxs("div",{className:"listsButtonsSidebar",children:[w.jsxs("div",{className:"sidebarButton",children:[w.jsx("button",{className:"createListButton",onClick:_,children:"Create List"}),w.jsx("button",{className:"createListButton",onClick:y,children:"Import List"})]}),t.map(S=>w.jsxs("div",{className:(i.id==S.id?"listActive ":"listInactive ")+"listButton",onClick:()=>f(S.id,S.obj.Name),children:[w.jsx("p",{children:S.obj.Name}),w.jsx(Fn,{className:"listOptionsButton",onClick:C=>m(C,S),icon:EA})]},S.id))]})]}),i.id&&!l?w.jsx(SA,{data:{database:it,listID:i.id,listName:i.name}}):"",l==!0?w.jsx(xA,{}):"",w.jsx(vE,{className:"listOptions",data:p}),o.isVisible&&w.jsx(NA,{data:o}),k&&w.jsx("div",{onClick:S=>x(S,!1),className:(k?"showSidebar":"hideSidebar")+" sidebarBackground"})]})}function bA(){const t=go();return T.useEffect(()=>{console.log("Starting app"),pr.auth.onAuthStateChanged(function(e){e&&pr.RedirectLogin(e,t)})},[]),w.jsx("div",{className:"App",children:w.jsxs(AN,{children:[w.jsx(da,{path:Kt.references.baseURL,element:w.jsx($N,{})}),w.jsx(da,{path:Kt.references.baseURL+"/onboarding",element:w.jsx(JN,{})}),w.jsx(da,{path:Kt.references.baseURL+"/lists",element:w.jsx(RA,{})})]})})}Gu.createRoot(document.getElementById("root")).render(w.jsx(zN,{children:w.jsx(bA,{})}));
