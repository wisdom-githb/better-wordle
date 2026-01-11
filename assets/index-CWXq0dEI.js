const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Game-B9w7Fq8d.js","assets/vendor-Du21Nf85.js","Game.css","assets/Profile-CQuqLSHt.js","Profile.css","assets/Leaderboard-DTkHwsdE.js","Leaderboard.css","assets/Faq-5Kk0CTd4.js","Faq.css"])))=>i.map(i=>d[i]);
var Bc=Object.defineProperty;var Wc=(n,e,t)=>e in n?Bc(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Fe=(n,e,t)=>Wc(n,typeof e!="symbol"?e+"":e,t);import{r as g,a as $c,g as zi,R as pe,u as Nn,L as $r,b as Hc,c as Vc,d as xe,N as zc,B as Gc}from"./vendor-Du21Nf85.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();var ua={exports:{}},ks={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qc=g,Kc=Symbol.for("react.element"),Yc=Symbol.for("react.fragment"),Qc=Object.prototype.hasOwnProperty,Jc=qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xc={key:!0,ref:!0,__self:!0,__source:!0};function da(n,e,t){var s,i={},r=null,o=null;t!==void 0&&(r=""+t),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(o=e.ref);for(s in e)Qc.call(e,s)&&!Xc.hasOwnProperty(s)&&(i[s]=e[s]);if(n&&n.defaultProps)for(s in e=n.defaultProps,e)i[s]===void 0&&(i[s]=e[s]);return{$$typeof:Kc,type:n,key:r,ref:o,props:i,_owner:Jc.current}}ks.Fragment=Yc;ks.jsx=da;ks.jsxs=da;ua.exports=ks;var d=ua.exports,yi={},Hr=$c;yi.createRoot=Hr.createRoot,yi.hydrateRoot=Hr.hydrateRoot;var Zc=typeof Element<"u",eu=typeof Map=="function",tu=typeof Set=="function",nu=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Qn(n,e){if(n===e)return!0;if(n&&e&&typeof n=="object"&&typeof e=="object"){if(n.constructor!==e.constructor)return!1;var t,s,i;if(Array.isArray(n)){if(t=n.length,t!=e.length)return!1;for(s=t;s--!==0;)if(!Qn(n[s],e[s]))return!1;return!0}var r;if(eu&&n instanceof Map&&e instanceof Map){if(n.size!==e.size)return!1;for(r=n.entries();!(s=r.next()).done;)if(!e.has(s.value[0]))return!1;for(r=n.entries();!(s=r.next()).done;)if(!Qn(s.value[1],e.get(s.value[0])))return!1;return!0}if(tu&&n instanceof Set&&e instanceof Set){if(n.size!==e.size)return!1;for(r=n.entries();!(s=r.next()).done;)if(!e.has(s.value[0]))return!1;return!0}if(nu&&ArrayBuffer.isView(n)&&ArrayBuffer.isView(e)){if(t=n.length,t!=e.length)return!1;for(s=t;s--!==0;)if(n[s]!==e[s])return!1;return!0}if(n.constructor===RegExp)return n.source===e.source&&n.flags===e.flags;if(n.valueOf!==Object.prototype.valueOf&&typeof n.valueOf=="function"&&typeof e.valueOf=="function")return n.valueOf()===e.valueOf();if(n.toString!==Object.prototype.toString&&typeof n.toString=="function"&&typeof e.toString=="function")return n.toString()===e.toString();if(i=Object.keys(n),t=i.length,t!==Object.keys(e).length)return!1;for(s=t;s--!==0;)if(!Object.prototype.hasOwnProperty.call(e,i[s]))return!1;if(Zc&&n instanceof Element)return!1;for(s=t;s--!==0;)if(!((i[s]==="_owner"||i[s]==="__v"||i[s]==="__o")&&n.$$typeof)&&!Qn(n[i[s]],e[i[s]]))return!1;return!0}return n!==n&&e!==e}var su=function(e,t){try{return Qn(e,t)}catch(s){if((s.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw s}};const iu=zi(su);var ru=function(n,e,t,s,i,r,o,a){if(!n){var l;if(e===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[t,s,i,r,o,a],u=0;l=new Error(e.replace(/%s/g,function(){return c[u++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},ou=ru;const Vr=zi(ou);var au=function(e,t,s,i){var r=s?s.call(i,e,t):void 0;if(r!==void 0)return!!r;if(e===t)return!0;if(typeof e!="object"||!e||typeof t!="object"||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),c=0;c<o.length;c++){var u=o[c];if(!l(u))return!1;var h=e[u],f=t[u];if(r=s?s.call(i,h,f,u):void 0,r===!1||r===void 0&&h!==f)return!1}return!0};const lu=zi(au);var ha=(n=>(n.BASE="base",n.BODY="body",n.HEAD="head",n.HTML="html",n.LINK="link",n.META="meta",n.NOSCRIPT="noscript",n.SCRIPT="script",n.STYLE="style",n.TITLE="title",n.FRAGMENT="Symbol(react.fragment)",n))(ha||{}),Qs={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},zr=Object.values(ha),Gi={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},cu=Object.entries(Gi).reduce((n,[e,t])=>(n[t]=e,n),{}),Re="data-rh",At={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Nt=(n,e)=>{for(let t=n.length-1;t>=0;t-=1){const s=n[t];if(Object.prototype.hasOwnProperty.call(s,e))return s[e]}return null},uu=n=>{let e=Nt(n,"title");const t=Nt(n,At.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),t&&e)return t.replace(/%s/g,()=>e);const s=Nt(n,At.DEFAULT_TITLE);return e||s||void 0},du=n=>Nt(n,At.ON_CHANGE_CLIENT_STATE)||(()=>{}),Js=(n,e)=>e.filter(t=>typeof t[n]<"u").map(t=>t[n]).reduce((t,s)=>({...t,...s}),{}),hu=(n,e)=>e.filter(t=>typeof t.base<"u").map(t=>t.base).reverse().reduce((t,s)=>{if(!t.length){const i=Object.keys(s);for(let r=0;r<i.length;r+=1){const a=i[r].toLowerCase();if(n.indexOf(a)!==-1&&s[a])return t.concat(s)}}return t},[]),fu=n=>console&&typeof console.warn=="function"&&console.warn(n),Xt=(n,e,t)=>{const s={};return t.filter(i=>Array.isArray(i[n])?!0:(typeof i[n]<"u"&&fu(`Helmet: ${n} should be of type "Array". Instead found type "${typeof i[n]}"`),!1)).map(i=>i[n]).reverse().reduce((i,r)=>{const o={};r.filter(l=>{let c;const u=Object.keys(l);for(let f=0;f<u.length;f+=1){const p=u[f],m=p.toLowerCase();e.indexOf(m)!==-1&&!(c==="rel"&&l[c].toLowerCase()==="canonical")&&!(m==="rel"&&l[m].toLowerCase()==="stylesheet")&&(c=m),e.indexOf(p)!==-1&&(p==="innerHTML"||p==="cssText"||p==="itemprop")&&(c=p)}if(!c||!l[c])return!1;const h=l[c].toLowerCase();return s[c]||(s[c]={}),o[c]||(o[c]={}),s[c][h]?!1:(o[c][h]=!0,!0)}).reverse().forEach(l=>i.push(l));const a=Object.keys(o);for(let l=0;l<a.length;l+=1){const c=a[l],u={...s[c],...o[c]};s[c]=u}return i},[]).reverse()},pu=(n,e)=>{if(Array.isArray(n)&&n.length){for(let t=0;t<n.length;t+=1)if(n[t][e])return!0}return!1},gu=n=>({baseTag:hu(["href"],n),bodyAttributes:Js("bodyAttributes",n),defer:Nt(n,At.DEFER),encode:Nt(n,At.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Js("htmlAttributes",n),linkTags:Xt("link",["rel","href"],n),metaTags:Xt("meta",["name","charset","http-equiv","property","itemprop"],n),noscriptTags:Xt("noscript",["innerHTML"],n),onChangeClientState:du(n),scriptTags:Xt("script",["src","innerHTML"],n),styleTags:Xt("style",["cssText"],n),title:uu(n),titleAttributes:Js("titleAttributes",n),prioritizeSeoTags:pu(n,At.PRIORITIZE_SEO_TAGS)}),fa=n=>Array.isArray(n)?n.join(""):n,mu=(n,e)=>{const t=Object.keys(n);for(let s=0;s<t.length;s+=1)if(e[t[s]]&&e[t[s]].includes(n[t[s]]))return!0;return!1},Xs=(n,e)=>Array.isArray(n)?n.reduce((t,s)=>(mu(s,e)?t.priority.push(s):t.default.push(s),t),{priority:[],default:[]}):{default:n,priority:[]},Gr=(n,e)=>({...n,[e]:void 0}),_u=["noscript","script","style"],vi=(n,e=!0)=>e===!1?String(n):String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),pa=n=>Object.keys(n).reduce((e,t)=>{const s=typeof n[t]<"u"?`${t}="${n[t]}"`:`${t}`;return e?`${e} ${s}`:s},""),yu=(n,e,t,s)=>{const i=pa(t),r=fa(e);return i?`<${n} ${Re}="true" ${i}>${vi(r,s)}</${n}>`:`<${n} ${Re}="true">${vi(r,s)}</${n}>`},vu=(n,e,t=!0)=>e.reduce((s,i)=>{const r=i,o=Object.keys(r).filter(c=>!(c==="innerHTML"||c==="cssText")).reduce((c,u)=>{const h=typeof r[u]>"u"?u:`${u}="${vi(r[u],t)}"`;return c?`${c} ${h}`:h},""),a=r.innerHTML||r.cssText||"",l=_u.indexOf(n)===-1;return`${s}<${n} ${Re}="true" ${o}${l?"/>":`>${a}</${n}>`}`},""),ga=(n,e={})=>Object.keys(n).reduce((t,s)=>{const i=Gi[s];return t[i||s]=n[s],t},e),wu=(n,e,t)=>{const s={key:e,[Re]:!0},i=ga(t,s);return[pe.createElement("title",i,e)]},Jn=(n,e)=>e.map((t,s)=>{const i={key:s,[Re]:!0};return Object.keys(t).forEach(r=>{const a=Gi[r]||r;if(a==="innerHTML"||a==="cssText"){const l=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:l}}else i[a]=t[r]}),pe.createElement(n,i)}),Ee=(n,e,t=!0)=>{switch(n){case"title":return{toComponent:()=>wu(n,e.title,e.titleAttributes),toString:()=>yu(n,e.title,e.titleAttributes,t)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>ga(e),toString:()=>pa(e)};default:return{toComponent:()=>Jn(n,e),toString:()=>vu(n,e,t)}}},bu=({metaTags:n,linkTags:e,scriptTags:t,encode:s})=>{const i=Xs(n,Qs.meta),r=Xs(e,Qs.link),o=Xs(t,Qs.script);return{priorityMethods:{toComponent:()=>[...Jn("meta",i.priority),...Jn("link",r.priority),...Jn("script",o.priority)],toString:()=>`${Ee("meta",i.priority,s)} ${Ee("link",r.priority,s)} ${Ee("script",o.priority,s)}`},metaTags:i.default,linkTags:r.default,scriptTags:o.default}},Eu=n=>{const{baseTag:e,bodyAttributes:t,encode:s=!0,htmlAttributes:i,noscriptTags:r,styleTags:o,title:a="",titleAttributes:l,prioritizeSeoTags:c}=n;let{linkTags:u,metaTags:h,scriptTags:f}=n,p={toComponent:()=>{},toString:()=>""};return c&&({priorityMethods:p,linkTags:u,metaTags:h,scriptTags:f}=bu(n)),{priority:p,base:Ee("base",e,s),bodyAttributes:Ee("bodyAttributes",t,s),htmlAttributes:Ee("htmlAttributes",i,s),link:Ee("link",u,s),meta:Ee("meta",h,s),noscript:Ee("noscript",r,s),script:Ee("script",f,s),style:Ee("style",o,s),title:Ee("title",{title:a,titleAttributes:l},s)}},wi=Eu,Gn=[],ma=!!(typeof window<"u"&&window.document&&window.document.createElement),bi=class{constructor(n,e){Fe(this,"instances",[]);Fe(this,"canUseDOM",ma);Fe(this,"context");Fe(this,"value",{setHelmet:n=>{this.context.helmet=n},helmetInstances:{get:()=>this.canUseDOM?Gn:this.instances,add:n=>{(this.canUseDOM?Gn:this.instances).push(n)},remove:n=>{const e=(this.canUseDOM?Gn:this.instances).indexOf(n);(this.canUseDOM?Gn:this.instances).splice(e,1)}}});this.context=n,this.canUseDOM=e||!1,e||(n.helmet=wi({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},Iu={},_a=pe.createContext(Iu),ft,ya=(ft=class extends g.Component{constructor(t){super(t);Fe(this,"helmetData");this.helmetData=new bi(this.props.context||{},ft.canUseDOM)}render(){return pe.createElement(_a.Provider,{value:this.helmetData.value},this.props.children)}},Fe(ft,"canUseDOM",ma),ft),Tt=(n,e)=>{const t=document.head||document.querySelector("head"),s=t.querySelectorAll(`${n}[${Re}]`),i=[].slice.call(s),r=[];let o;return e&&e.length&&e.forEach(a=>{const l=document.createElement(n);for(const c in a)if(Object.prototype.hasOwnProperty.call(a,c))if(c==="innerHTML")l.innerHTML=a.innerHTML;else if(c==="cssText")l.styleSheet?l.styleSheet.cssText=a.cssText:l.appendChild(document.createTextNode(a.cssText));else{const u=c,h=typeof a[u]>"u"?"":a[u];l.setAttribute(c,h)}l.setAttribute(Re,"true"),i.some((c,u)=>(o=u,l.isEqualNode(c)))?i.splice(o,1):r.push(l)}),i.forEach(a=>{var l;return(l=a.parentNode)==null?void 0:l.removeChild(a)}),r.forEach(a=>t.appendChild(a)),{oldTags:i,newTags:r}},Ei=(n,e)=>{const t=document.getElementsByTagName(n)[0];if(!t)return;const s=t.getAttribute(Re),i=s?s.split(","):[],r=[...i],o=Object.keys(e);for(const a of o){const l=e[a]||"";t.getAttribute(a)!==l&&t.setAttribute(a,l),i.indexOf(a)===-1&&i.push(a);const c=r.indexOf(a);c!==-1&&r.splice(c,1)}for(let a=r.length-1;a>=0;a-=1)t.removeAttribute(r[a]);i.length===r.length?t.removeAttribute(Re):t.getAttribute(Re)!==o.join(",")&&t.setAttribute(Re,o.join(","))},Cu=(n,e)=>{typeof n<"u"&&document.title!==n&&(document.title=fa(n)),Ei("title",e)},qr=(n,e)=>{const{baseTag:t,bodyAttributes:s,htmlAttributes:i,linkTags:r,metaTags:o,noscriptTags:a,onChangeClientState:l,scriptTags:c,styleTags:u,title:h,titleAttributes:f}=n;Ei("body",s),Ei("html",i),Cu(h,f);const p={baseTag:Tt("base",t),linkTags:Tt("link",r),metaTags:Tt("meta",o),noscriptTags:Tt("noscript",a),scriptTags:Tt("script",c),styleTags:Tt("style",u)},m={},b={};Object.keys(p).forEach(_=>{const{newTags:M,oldTags:H}=p[_];M.length&&(m[_]=M),H.length&&(b[_]=p[_].oldTags)}),e&&e(),l(n,m,b)},Zt=null,Tu=n=>{Zt&&cancelAnimationFrame(Zt),n.defer?Zt=requestAnimationFrame(()=>{qr(n,()=>{Zt=null})}):(qr(n),Zt=null)},Su=Tu,Kr=class extends g.Component{constructor(){super(...arguments);Fe(this,"rendered",!1)}shouldComponentUpdate(e){return!lu(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:t}=this.props.context;let s=null;const i=gu(e.get().map(r=>{const o={...r.props};return delete o.context,o}));ya.canUseDOM?Su(i):wi&&(s=wi(i)),t(s)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},_i,xu=(_i=class extends g.Component{shouldComponentUpdate(n){return!iu(Gr(this.props,"helmetData"),Gr(n,"helmetData"))}mapNestedChildrenToProps(n,e){if(!e)return null;switch(n.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${n.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(n,e,t,s){return{...e,[n.type]:[...e[n.type]||[],{...t,...this.mapNestedChildrenToProps(n,s)}]}}mapObjectTypeChildren(n,e,t,s){switch(n.type){case"title":return{...e,[n.type]:s,titleAttributes:{...t}};case"body":return{...e,bodyAttributes:{...t}};case"html":return{...e,htmlAttributes:{...t}};default:return{...e,[n.type]:{...t}}}}mapArrayTypeChildrenToProps(n,e){let t={...e};return Object.keys(n).forEach(s=>{t={...t,[s]:n[s]}}),t}warnOnInvalidChildren(n,e){return Vr(zr.some(t=>n.type===t),typeof n.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${zr.join(", ")} are allowed. Helmet does not support rendering <${n.type}> elements. Refer to our API for more information.`),Vr(!e||typeof e=="string"||Array.isArray(e)&&!e.some(t=>typeof t!="string"),`Helmet expects a string as a child of <${n.type}>. Did you forget to wrap your children in braces? ( <${n.type}>{\`\`}</${n.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(n,e){let t={};return pe.Children.forEach(n,s=>{if(!s||!s.props)return;const{children:i,...r}=s.props,o=Object.keys(r).reduce((l,c)=>(l[cu[c]||c]=r[c],l),{});let{type:a}=s;switch(typeof a=="symbol"?a=a.toString():this.warnOnInvalidChildren(s,i),a){case"Symbol(react.fragment)":e=this.mapChildrenToProps(i,e);break;case"link":case"meta":case"noscript":case"script":case"style":t=this.flattenArrayTypeChildren(s,t,o,i);break;default:e=this.mapObjectTypeChildren(s,e,o,i);break}}),this.mapArrayTypeChildrenToProps(t,e)}render(){const{children:n,...e}=this.props;let t={...e},{helmetData:s}=e;if(n&&(t=this.mapChildrenToProps(n,t)),s&&!(s instanceof bi)){const i=s;s=new bi(i.context,!0),delete t.helmetData}return s?pe.createElement(Kr,{...t,context:s.value}):pe.createElement(_a.Consumer,null,i=>pe.createElement(Kr,{...t,context:i}))}},Fe(_i,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),_i);const ku="modulepreload",Ru=function(n){return"/better-wordle/"+n},Yr={},Rs=function(e,t,s){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(t.map(l=>{if(l=Ru(l),l in Yr)return;Yr[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":ku,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((f,p)=>{h.addEventListener("load",f),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};class Pn{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}const Au=()=>{if(!(typeof localStorage>"u"))return{get:n=>Promise.resolve(localStorage.getItem(n)),set:(n,e)=>Promise.resolve(localStorage.setItem(n,e)),remove:n=>Promise.resolve(localStorage.removeItem(n))}},le={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:Au()},qi=n=>n?typeof n=="string"?{publicKey:n}:n.toString()==="[object Object]"?n:{}:{},Nu=(n,e="https://api.emailjs.com")=>{if(!n)return;const t=qi(n);le.publicKey=t.publicKey,le.blockHeadless=t.blockHeadless,le.storageProvider=t.storageProvider,le.blockList=t.blockList,le.limitRate=t.limitRate,le.origin=t.origin||e},va=async(n,e,t={})=>{const s=await fetch(le.origin+n,{method:"POST",headers:t,body:e}),i=await s.text(),r=new Pn(s.status,i);if(s.ok)return r;throw r},wa=(n,e,t)=>{if(!n||typeof n!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t||typeof t!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Pu=n=>{if(n&&n.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},ba=n=>n.webdriver||!n.languages||n.languages.length===0,Ea=()=>new Pn(451,"Unavailable For Headless Browser"),Ou=(n,e)=>{if(!Array.isArray(n))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},Du=n=>{var e;return!((e=n.list)!=null&&e.length)||!n.watchVariable},Mu=(n,e)=>n instanceof FormData?n.get(e):n[e],Ia=(n,e)=>{if(Du(n))return!1;Ou(n.list,n.watchVariable);const t=Mu(e,n.watchVariable);return typeof t!="string"?!1:n.list.includes(t)},Ca=()=>new Pn(403,"Forbidden"),Lu=(n,e)=>{if(typeof n!="number"||n<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},Fu=async(n,e,t)=>{const s=Number(await t.get(n)||0);return e-Date.now()+s},Ta=async(n,e,t)=>{if(!e.throttle||!t)return!1;Lu(e.throttle,e.id);const s=e.id||n;return await Fu(s,e.throttle,t)>0?!0:(await t.set(s,Date.now().toString()),!1)},Sa=()=>new Pn(429,"Too Many Requests"),ju=async(n,e,t,s)=>{const i=qi(s),r=i.publicKey||le.publicKey,o=i.blockHeadless||le.blockHeadless,a=i.storageProvider||le.storageProvider,l={...le.blockList,...i.blockList},c={...le.limitRate,...i.limitRate};return o&&ba(navigator)?Promise.reject(Ea()):(wa(r,n,e),Pu(t),t&&Ia(l,t)?Promise.reject(Ca()):await Ta(location.pathname,c,a)?Promise.reject(Sa()):va("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:r,service_id:n,template_id:e,template_params:t}),{"Content-type":"application/json"}))},Uu=n=>{if(!n||n.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},Bu=n=>typeof n=="string"?document.querySelector(n):n,Wu=async(n,e,t,s)=>{const i=qi(s),r=i.publicKey||le.publicKey,o=i.blockHeadless||le.blockHeadless,a=le.storageProvider||i.storageProvider,l={...le.blockList,...i.blockList},c={...le.limitRate,...i.limitRate};if(o&&ba(navigator))return Promise.reject(Ea());const u=Bu(t);wa(r,n,e),Uu(u);const h=new FormData(u);return Ia(l,h)?Promise.reject(Ca()):await Ta(location.pathname,c,a)?Promise.reject(Sa()):(h.append("lib_version","4.4.1"),h.append("service_id",n),h.append("template_id",e),h.append("user_id",r),va("/api/v1.0/email/send-form",h))},$u={init:Nu,send:ju,sendForm:Wu,EmailJSResponseStatus:Pn};function Qr(n){if(!n)return[];const e=["a[href]","button:not([disabled])","textarea:not([disabled])","input:not([disabled])","select:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(",");return Array.from(n.querySelectorAll(e))}function Oe({isOpen:n,titleId:e,onRequestClose:t,children:s,zIndex:i=2e3,disableAutoFocus:r=!1}){const o=g.useRef(null),a=g.useRef(null);return g.useEffect(()=>{if(!n)return;a.current=document.activeElement;const l=document.body.style.overflow;document.body.style.overflow="hidden";const c=()=>{var m;if(r)return;const f=document.activeElement;if(f&&o.current&&o.current.contains(f))return;const p=Qr(o.current);p.length>0?p[0].focus():(m=o.current)==null||m.focus()},u=window.setTimeout(c,0),h=f=>{if(f.key==="Escape"){f.preventDefault(),t==null||t();return}if(f.key!=="Tab")return;const p=Qr(o.current);if(p.length===0){f.preventDefault();return}const m=p[0],b=p[p.length-1],_=document.activeElement;f.shiftKey?(_===m||!o.current.contains(_))&&(f.preventDefault(),b.focus()):_===b&&(f.preventDefault(),m.focus())};return document.addEventListener("keydown",h,!0),()=>{window.clearTimeout(u),document.body.style.overflow=l,document.removeEventListener("keydown",h,!0),a.current&&typeof a.current.focus=="function"&&a.current.focus()}},[n]),n?d.jsx("div",{className:"modalOverlay",style:{zIndex:i},onMouseDown:t,children:d.jsx("div",{className:"modalPanel",role:"dialog","aria-modal":"true","aria-labelledby":e,ref:o,tabIndex:-1,onMouseDown:l=>l.stopPropagation(),children:s})}):null}const en={SERVICE_ID:"gmail-better-wordle",TEMPLATE_ID:"feedback_better_wordle",PUBLIC_KEY:"jIpS9TFRU6hC_kPiN",TO_EMAIL:"abhijeetsridhar14@gmail.com",SUBJECT:"feedback for better-wordle"};function Hu({isOpen:n,onRequestClose:e}){const[t,s]=g.useState(""),[i,r]=g.useState(!1),[o,a]=g.useState(null),l=async u=>{if(u.preventDefault(),!!t.trim()){r(!0),a(null);try{await $u.send(en.SERVICE_ID,en.TEMPLATE_ID,{message:t.trim(),to_email:en.TO_EMAIL,subject:en.SUBJECT},en.PUBLIC_KEY),a("success"),s(""),setTimeout(()=>{e(),a(null)},2e3)}catch(h){console.error("Error sending feedback:",h),a("error")}finally{r(!1)}}},c=()=>{s(""),a(null),e()};return d.jsx(Oe,{isOpen:n,onRequestClose:c,titleId:"feedback-title",children:d.jsxs("div",{style:{textAlign:"left"},children:[d.jsx("h2",{id:"feedback-title",style:{margin:"0 0 16px 0",fontSize:20,fontWeight:"bold",color:"#ffffff"},children:"Send Feedback"}),d.jsx("p",{style:{margin:"0 0 20px 0",fontSize:14,color:"#d7dadc",lineHeight:1.5},children:"Your feedback helps us improve Better Wordle. All feedback is anonymous."}),d.jsxs("form",{onSubmit:l,children:[d.jsx("textarea",{value:t,onChange:u=>s(u.target.value),placeholder:"Share your thoughts, suggestions, or report issues...",rows:6,maxLength:1e3,required:!0,disabled:i,style:{width:"100%",padding:"12px",borderRadius:8,border:"1px solid #3a3a3c",background:"#121213",color:"#ffffff",fontSize:14,outline:"none",resize:"vertical",fontFamily:"inherit",boxSizing:"border-box",marginBottom:"16px"}}),o==="success"&&d.jsx("div",{style:{padding:"12px",marginBottom:"16px",borderRadius:8,background:"#6aaa64",color:"#ffffff",fontSize:14,textAlign:"center"},children:"✓ Feedback sent successfully!"}),o==="error"&&d.jsx("div",{style:{padding:"12px",marginBottom:"16px",borderRadius:8,background:"#c45858",color:"#ffffff",fontSize:14,textAlign:"center"},children:"Error sending feedback. Please try again later."}),d.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end"},children:[d.jsx("button",{type:"button",className:"homeBtn homeBtnOutline homeBtnLg",onClick:c,disabled:i,style:{minWidth:110,opacity:i?.7:1,cursor:i?"not-allowed":"pointer"},children:"Cancel"}),d.jsx("button",{type:"submit",className:"homeBtn homeBtnGreen homeBtnLg"+(i||!t.trim()?" homeBtnNeutral":""),disabled:i||!t.trim(),style:{minWidth:150,cursor:i||!t.trim()?"not-allowed":"pointer",opacity:i||!t.trim()?.8:1},children:i?"Sending...":"Send Feedback"})]})]})]})})}var Jr={};/**
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
 */const xa={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const y=function(n,e){if(!n)throw Vt(e)},Vt=function(n){return new Error("Firebase Database ("+xa.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const ka=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Vu=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ki={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),s.push(t[u],t[h],t[f],t[p])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ka(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Vu(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new zu;const f=r<<2|a>>4;if(s.push(f),c!==64){const p=a<<4&240|c>>2;if(s.push(p),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class zu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ra=function(n){const e=ka(n);return Ki.encodeByteArray(e,!0)},ss=function(n){return Ra(n).replace(/\./g,"")},is=function(n){try{return Ki.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Gu(n){return Aa(void 0,n)}function Aa(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!qu(t)||(n[t]=Aa(n[t],e[t]));return n}function qu(n){return n!=="__proto__"}/**
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
 */function Ku(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Yu=()=>Ku().__FIREBASE_DEFAULTS__,Qu=()=>{if(typeof process>"u"||typeof Jr>"u")return;const n=Jr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ju=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&is(n[1]);return e&&JSON.parse(e)},Yi=()=>{try{return Yu()||Qu()||Ju()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Na=n=>{var e,t;return(t=(e=Yi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Xu=n=>{const e=Na(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Pa=()=>{var n;return(n=Yi())===null||n===void 0?void 0:n.config},Oa=n=>{var e;return(e=Yi())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class On{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Zu(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ss(JSON.stringify(t)),ss(JSON.stringify(o)),""].join(".")}/**
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
 */function fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qi(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fe())}function ed(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Da(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function td(){const n=fe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function nd(){return xa.NODE_ADMIN===!0}function sd(){try{return typeof indexedDB=="object"}catch{return!1}}function id(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const rd="FirebaseError";class at extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=rd,Object.setPrototypeOf(this,at.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Dn.prototype.create)}}class Dn{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?od(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new at(i,a,s)}}function od(n,e){return n.replace(ad,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ad=/\{\$([^}]+)}/g;/**
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
 */function yn(n){return JSON.parse(n)}function se(n){return JSON.stringify(n)}/**
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
 */const Ma=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=yn(is(r[0])||""),t=yn(is(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},ld=function(n){const e=Ma(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},cd=function(n){const e=Ma(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Le(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Lt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ii(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function rs(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function os(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Xr(r)&&Xr(o)){if(!os(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Xr(n){return n!==null&&typeof n=="object"}/**
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
 */function zt(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ln(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function cn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class ud{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)s[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function dd(n,e){const t=new hd(n,e);return t.subscribe.bind(t)}class hd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");fd(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=Zs),i.error===void 0&&(i.error=Zs),i.complete===void 0&&(i.complete=Zs);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Zs(){}function As(n,e){return`${n} failed: ${e} argument `}/**
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
 */const pd=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,y(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ns=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function ee(n){return n&&n._delegate?n._delegate:n}class gt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ut="[DEFAULT]";/**
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
 */class gd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new On;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_d(e))try{this.getOrInitializeService({instanceIdentifier:ut})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ut){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ut){return this.instances.has(e)}getOptions(e=ut){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:md(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ut){return this.component?this.component.multipleInstances?e:ut:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function md(n){return n===ut?void 0:n}function _d(n){return n.instantiationMode==="EAGER"}/**
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
 */class yd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new gd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var V;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(V||(V={}));const vd={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},wd=V.INFO,bd={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},Ed=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=bd[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ji{constructor(e){this.name=e,this._logLevel=wd,this._logHandler=Ed,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const Id=(n,e)=>e.some(t=>n instanceof t);let Zr,eo;function Cd(){return Zr||(Zr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Td(){return eo||(eo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const La=new WeakMap,Ci=new WeakMap,Fa=new WeakMap,ei=new WeakMap,Xi=new WeakMap;function Sd(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Ze(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&La.set(t,n)}).catch(()=>{}),Xi.set(e,n),e}function xd(n){if(Ci.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Ci.set(n,e)}let Ti={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ci.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Fa.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ze(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function kd(n){Ti=n(Ti)}function Rd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(ti(this),e,...t);return Fa.set(s,e.sort?e.sort():[e]),Ze(s)}:Td().includes(n)?function(...e){return n.apply(ti(this),e),Ze(La.get(this))}:function(...e){return Ze(n.apply(ti(this),e))}}function Ad(n){return typeof n=="function"?Rd(n):(n instanceof IDBTransaction&&xd(n),Id(n,Cd())?new Proxy(n,Ti):n)}function Ze(n){if(n instanceof IDBRequest)return Sd(n);if(ei.has(n))return ei.get(n);const e=Ad(n);return e!==n&&(ei.set(n,e),Xi.set(e,n)),e}const ti=n=>Xi.get(n);function Nd(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=Ze(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Ze(o.result),l.oldVersion,l.newVersion,Ze(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Pd=["get","getKey","getAll","getAllKeys","count"],Od=["put","add","delete","clear"],ni=new Map;function to(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ni.get(e))return ni.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Od.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Pd.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return ni.set(e,r),r}kd(n=>({...n,get:(e,t,s)=>to(e,t)||n.get(e,t,s),has:(e,t)=>!!to(e,t)||n.has(e,t)}));/**
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
 */class Dd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Md(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Md(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Si="@firebase/app",no="0.9.13";/**
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
 */const mt=new Ji("@firebase/app"),Ld="@firebase/app-compat",Fd="@firebase/analytics-compat",jd="@firebase/analytics",Ud="@firebase/app-check-compat",Bd="@firebase/app-check",Wd="@firebase/auth",$d="@firebase/auth-compat",Hd="@firebase/database",Vd="@firebase/database-compat",zd="@firebase/functions",Gd="@firebase/functions-compat",qd="@firebase/installations",Kd="@firebase/installations-compat",Yd="@firebase/messaging",Qd="@firebase/messaging-compat",Jd="@firebase/performance",Xd="@firebase/performance-compat",Zd="@firebase/remote-config",eh="@firebase/remote-config-compat",th="@firebase/storage",nh="@firebase/storage-compat",sh="@firebase/firestore",ih="@firebase/firestore-compat",rh="firebase",oh="9.23.0";/**
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
 */const xi="[DEFAULT]",ah={[Si]:"fire-core",[Ld]:"fire-core-compat",[jd]:"fire-analytics",[Fd]:"fire-analytics-compat",[Bd]:"fire-app-check",[Ud]:"fire-app-check-compat",[Wd]:"fire-auth",[$d]:"fire-auth-compat",[Hd]:"fire-rtdb",[Vd]:"fire-rtdb-compat",[zd]:"fire-fn",[Gd]:"fire-fn-compat",[qd]:"fire-iid",[Kd]:"fire-iid-compat",[Yd]:"fire-fcm",[Qd]:"fire-fcm-compat",[Jd]:"fire-perf",[Xd]:"fire-perf-compat",[Zd]:"fire-rc",[eh]:"fire-rc-compat",[th]:"fire-gcs",[nh]:"fire-gcs-compat",[sh]:"fire-fst",[ih]:"fire-fst-compat","fire-js":"fire-js",[rh]:"fire-js-all"};/**
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
 */const as=new Map,ki=new Map;function lh(n,e){try{n.container.addComponent(e)}catch(t){mt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ft(n){const e=n.name;if(ki.has(e))return mt.debug(`There were multiple attempts to register component ${e}.`),!1;ki.set(e,n);for(const t of as.values())lh(t,n);return!0}function Zi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const ch={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},et=new Dn("app","Firebase",ch);/**
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
 */class uh{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw et.create("app-deleted",{appName:this._name})}}/**
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
 */const Gt=oh;function ja(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:xi,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw et.create("bad-app-name",{appName:String(i)});if(t||(t=Pa()),!t)throw et.create("no-options");const r=as.get(i);if(r){if(os(t,r.options)&&os(s,r.config))return r;throw et.create("duplicate-app",{appName:i})}const o=new yd(i);for(const l of ki.values())o.addComponent(l);const a=new uh(t,s,o);return as.set(i,a),a}function Ua(n=xi){const e=as.get(n);if(!e&&n===xi&&Pa())return ja();if(!e)throw et.create("no-app",{appName:n});return e}function tt(n,e,t){var s;let i=(s=ah[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mt.warn(a.join(" "));return}Ft(new gt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const dh="firebase-heartbeat-database",hh=1,vn="firebase-heartbeat-store";let si=null;function Ba(){return si||(si=Nd(dh,hh,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(vn)}}}).catch(n=>{throw et.create("idb-open",{originalErrorMessage:n.message})})),si}async function fh(n){try{return await(await Ba()).transaction(vn).objectStore(vn).get(Wa(n))}catch(e){if(e instanceof at)mt.warn(e.message);else{const t=et.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mt.warn(t.message)}}}async function so(n,e){try{const s=(await Ba()).transaction(vn,"readwrite");await s.objectStore(vn).put(e,Wa(n)),await s.done}catch(t){if(t instanceof at)mt.warn(t.message);else{const s=et.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});mt.warn(s.message)}}}function Wa(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ph=1024,gh=30*24*60*60*1e3;class mh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new yh(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=io();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=gh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=io(),{heartbeatsToSend:t,unsentEntries:s}=_h(this._heartbeatsCache.heartbeats),i=ss(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function io(){return new Date().toISOString().substring(0,10)}function _h(n,e=ph){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ro(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),ro(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class yh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sd()?id().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await fh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return so(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return so(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ro(n){return ss(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function vh(n){Ft(new gt("platform-logger",e=>new Dd(e),"PRIVATE")),Ft(new gt("heartbeat",e=>new mh(e),"PRIVATE")),tt(Si,no,n),tt(Si,no,"esm2017"),tt("fire-js","")}vh("");function er(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(t[s[i]]=n[s[i]]);return t}function $a(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wh=$a,Ha=new Dn("auth","Firebase",$a());/**
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
 */const ls=new Ji("@firebase/auth");function bh(n,...e){ls.logLevel<=V.WARN&&ls.warn(`Auth (${Gt}): ${n}`,...e)}function Xn(n,...e){ls.logLevel<=V.ERROR&&ls.error(`Auth (${Gt}): ${n}`,...e)}/**
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
 */function Ce(n,...e){throw tr(n,...e)}function De(n,...e){return tr(n,...e)}function Va(n,e,t){const s=Object.assign(Object.assign({},wh()),{[e]:t});return new Dn("auth","Firebase",s).create(e,{appName:n.name})}function za(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ce(n,"argument-error"),Va(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function tr(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Ha.create(n,...e)}function N(n,e,...t){if(!n)throw tr(e,...t)}function Ue(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Xn(e),new Error(e)}function He(n,e){n||Ue(e)}/**
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
 */function cs(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ga(){return oo()==="http:"||oo()==="https:"}function oo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Eh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ga()||ed()||"connection"in navigator)?navigator.onLine:!0}function Ih(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Mn{constructor(e,t){this.shortDelay=e,this.longDelay=t,He(t>e,"Short delay should be less than long delay!"),this.isMobile=Qi()||Da()}get(){return Eh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function nr(n,e){He(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class qa{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ue("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ue("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ue("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ch={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Th=new Mn(3e4,6e4);function lt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ze(n,e,t,s,i={}){return Ka(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=zt(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),qa.fetch()(Ya(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Ka(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},Ch),e);try{const i=new Sh(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw qn(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw qn(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw qn(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw qn(n,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Va(n,u,c);Ce(n,u)}}catch(i){if(i instanceof at)throw i;Ce(n,"network-request-failed",{message:String(i)})}}async function Ln(n,e,t,s,i={}){const r=await ze(n,e,t,s,i);return"mfaPendingCredential"in r&&Ce(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Ya(n,e,t,s){const i=`${e}${t}?${s}`;return n.config.emulator?nr(n.config,i):`${n.config.apiScheme}://${i}`}class Sh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(De(this.auth,"network-request-failed")),Th.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function qn(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=De(n,e,s);return i.customData._tokenResponse=t,i}/**
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
 */async function xh(n,e){return ze(n,"POST","/v1/accounts:delete",e)}async function kh(n,e){return ze(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function dn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Rh(n,e=!1){const t=ee(n),s=await t.getIdToken(e),i=sr(s);N(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:dn(ii(i.auth_time)),issuedAtTime:dn(ii(i.iat)),expirationTime:dn(ii(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ii(n){return Number(n)*1e3}function sr(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Xn("JWT malformed, contained fewer than 3 sections"),null;try{const i=is(t);return i?JSON.parse(i):(Xn("Failed to decode base64 JWT payload"),null)}catch(i){return Xn("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ah(n){const e=sr(n);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function jt(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof at&&Nh(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Nh({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Ph{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Qa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=dn(this.lastLoginAt),this.creationTime=dn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function us(n){var e;const t=n.auth,s=await n.getIdToken(),i=await jt(n,kh(t,{idToken:s}));N(i==null?void 0:i.users.length,t,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Mh(r.providerUserInfo):[],a=Dh(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Qa(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function Oh(n){const e=ee(n);await us(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Dh(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Mh(n){return n.map(e=>{var{providerId:t}=e,s=er(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Lh(n,e){const t=await Ka(n,{},async()=>{const s=zt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=Ya(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",qa.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class wn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ah(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return N(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await Lh(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new wn;return s&&(N(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(N(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(N(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wn,this.toJSON())}_performRefresh(){return Ue("not implemented")}}/**
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
 */function qe(n,e){N(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class pt{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,r=er(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ph(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Qa(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await jt(this,this.stsTokenManager.getToken(this.auth,e));return N(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Rh(this,e)}reload(){return Oh(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new pt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await us(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await jt(this,xh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,r,o,a,l,c,u;const h=(s=t.displayName)!==null&&s!==void 0?s:void 0,f=(i=t.email)!==null&&i!==void 0?i:void 0,p=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=t.photoURL)!==null&&o!==void 0?o:void 0,b=(a=t.tenantId)!==null&&a!==void 0?a:void 0,_=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,M=(c=t.createdAt)!==null&&c!==void 0?c:void 0,H=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:J,emailVerified:de,isAnonymous:oe,providerData:w,stsTokenManager:x}=t;N(J&&x,e,"internal-error");const P=wn.fromJSON(this.name,x);N(typeof J=="string",e,"internal-error"),qe(h,e.name),qe(f,e.name),N(typeof de=="boolean",e,"internal-error"),N(typeof oe=="boolean",e,"internal-error"),qe(p,e.name),qe(m,e.name),qe(b,e.name),qe(_,e.name),qe(M,e.name),qe(H,e.name);const T=new pt({uid:J,auth:e,email:f,emailVerified:de,displayName:h,isAnonymous:oe,photoURL:m,phoneNumber:p,tenantId:b,stsTokenManager:P,createdAt:M,lastLoginAt:H});return w&&Array.isArray(w)&&(T.providerData=w.map(A=>Object.assign({},A))),_&&(T._redirectEventId=_),T}static async _fromIdTokenResponse(e,t,s=!1){const i=new wn;i.updateFromServerResponse(t);const r=new pt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await us(r),r}}/**
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
 */const ao=new Map;function Be(n){He(n instanceof Function,"Expected a class definition");let e=ao.get(n);return e?(He(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ao.set(n,e),e)}/**
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
 */class Ja{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ja.type="NONE";const lo=Ja;/**
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
 */function Zn(n,e,t){return`firebase:${n}:${e}:${t}`}class Pt{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Zn(this.userKey,i.apiKey,r),this.fullPersistenceKey=Zn("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Pt(Be(lo),e,s);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Be(lo);const o=Zn(s,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const h=pt._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Pt(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Pt(r,e,s))}}/**
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
 */function co(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(el(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xa(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nl(e))return"Blackberry";if(sl(e))return"Webos";if(ir(e))return"Safari";if((e.includes("chrome/")||Za(e))&&!e.includes("edge/"))return"Chrome";if(tl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Xa(n=fe()){return/firefox\//i.test(n)}function ir(n=fe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Za(n=fe()){return/crios\//i.test(n)}function el(n=fe()){return/iemobile/i.test(n)}function tl(n=fe()){return/android/i.test(n)}function nl(n=fe()){return/blackberry/i.test(n)}function sl(n=fe()){return/webos/i.test(n)}function Ps(n=fe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Fh(n=fe()){var e;return Ps(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jh(){return td()&&document.documentMode===10}function il(n=fe()){return Ps(n)||tl(n)||sl(n)||nl(n)||/windows phone/i.test(n)||el(n)}function Uh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function rl(n,e=[]){let t;switch(n){case"Browser":t=co(fe());break;case"Worker":t=`${co(fe())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Gt}/${s}`}async function ol(n,e){return ze(n,"GET","/v2/recaptchaConfig",lt(n,e))}function uo(n){return n!==void 0&&n.enterprise!==void 0}class al{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
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
 */function Bh(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function ll(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=De("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",Bh().appendChild(s)})}function Wh(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const $h="https://www.google.com/recaptcha/enterprise.js?render=",Hh="recaptcha-enterprise",Vh="NO_RECAPTCHA";class cl{constructor(e){this.type=Hh,this.auth=Et(e)}async verify(e="verify",t=!1){async function s(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{ol(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new al(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;uo(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(Vh)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!t&&uo(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}ll($h+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function ds(n,e,t,s=!1){const i=new cl(n);let r;try{r=await i.verify(t)}catch{r=await i.verify(t,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class zh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class Gh{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ho(this),this.idTokenSubscription=new ho(this),this.beforeStateQueue=new zh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ha,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Be(t)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Pt.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await us(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ih()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ee(e):null;return t&&N(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Be(e))})}async initializeRecaptchaConfig(){const e=await ol(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new al(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new cl(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Dn("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Be(e)||this._popupRedirectResolver;N(t,this,"argument-error"),this.redirectPersistenceManager=await Pt.create(this,[Be(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return N(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,s,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&bh(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Et(n){return ee(n)}class ho{constructor(e){this.auth=e,this.observer=null,this.addObserver=dd(t=>this.observer=t)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function qh(n,e){const t=Zi(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(os(r,e??{}))return i;Ce(i,"already-initialized")}return t.initialize({options:e})}function Kh(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Be);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Yh(n,e,t){const s=Et(n);N(s._canInitEmulator,s,"emulator-config-failed"),N(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=ul(e),{host:o,port:a}=Qh(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),Jh()}function ul(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Qh(n){const e=ul(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:fo(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:fo(o)}}}function fo(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Jh(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class rr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ue("not implemented")}_getIdTokenResponse(e){return Ue("not implemented")}_linkToIdToken(e,t){return Ue("not implemented")}_getReauthenticationResolver(e){return Ue("not implemented")}}async function Xh(n,e){return ze(n,"POST","/v1/accounts:update",e)}/**
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
 */async function ri(n,e){return Ln(n,"POST","/v1/accounts:signInWithPassword",lt(n,e))}async function Zh(n,e){return ze(n,"POST","/v1/accounts:sendOobCode",lt(n,e))}async function ef(n,e){return Zh(n,e)}/**
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
 */async function tf(n,e){return Ln(n,"POST","/v1/accounts:signInWithEmailLink",lt(n,e))}async function nf(n,e){return Ln(n,"POST","/v1/accounts:signInWithEmailLink",lt(n,e))}/**
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
 */class bn extends rr{constructor(e,t,s,i=null){super("password",s),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new bn(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new bn(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const i=await ds(e,s,"signInWithPassword");return ri(e,i)}else return ri(e,s).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await ds(e,s,"signInWithPassword");return ri(e,r)}else return Promise.reject(i)});case"emailLink":return tf(e,{email:this._email,oobCode:this._password});default:Ce(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Xh(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return nf(e,{idToken:t,email:this._email,oobCode:this._password});default:Ce(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ot(n,e){return Ln(n,"POST","/v1/accounts:signInWithIdp",lt(n,e))}/**
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
 */const sf="http://localhost";class _t extends rr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new _t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ce("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=t,r=er(t,["providerId","signInMethod"]);if(!s||!i)return null;const o=new _t(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ot(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Ot(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ot(e,t)}buildRequest(){const e={requestUri:sf,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=zt(t)}return e}}/**
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
 */function rf(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function of(n){const e=ln(cn(n)).link,t=e?ln(cn(e)).deep_link_id:null,s=ln(cn(n)).deep_link_id;return(s?ln(cn(s)).link:null)||s||t||e||n}class or{constructor(e){var t,s,i,r,o,a;const l=ln(cn(e)),c=(t=l.apiKey)!==null&&t!==void 0?t:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=rf((i=l.mode)!==null&&i!==void 0?i:null);N(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=of(e);try{return new or(t)}catch{return null}}}/**
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
 */class qt{constructor(){this.providerId=qt.PROVIDER_ID}static credential(e,t){return bn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=or.parseLink(t);return N(s,"argument-error"),bn._fromEmailAndCode(e,s.code,s.tenantId)}}qt.PROVIDER_ID="password";qt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Os{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fn extends Os{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ke extends Fn{constructor(){super("facebook.com")}static credential(e){return _t._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ke.credential(e.oauthAccessToken)}catch{return null}}}Ke.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ke.PROVIDER_ID="facebook.com";/**
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
 */class je extends Fn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return _t._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return je.credential(t,s)}catch{return null}}}je.GOOGLE_SIGN_IN_METHOD="google.com";je.PROVIDER_ID="google.com";/**
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
 */class Ye extends Fn{constructor(){super("github.com")}static credential(e){return _t._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ye.credential(e.oauthAccessToken)}catch{return null}}}Ye.GITHUB_SIGN_IN_METHOD="github.com";Ye.PROVIDER_ID="github.com";/**
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
 */class Qe extends Fn{constructor(){super("twitter.com")}static credential(e,t){return _t._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Qe.credential(t,s)}catch{return null}}}Qe.TWITTER_SIGN_IN_METHOD="twitter.com";Qe.PROVIDER_ID="twitter.com";/**
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
 */async function oi(n,e){return Ln(n,"POST","/v1/accounts:signUp",lt(n,e))}/**
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
 */class yt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await pt._fromIdTokenResponse(e,s,i),o=po(s);return new yt({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=po(s);return new yt({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function po(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class hs extends at{constructor(e,t,s,i){var r;super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,hs.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new hs(e,t,s,i)}}function dl(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?hs._fromErrorAndOperation(n,r,e,s):r})}async function af(n,e,t=!1){const s=await jt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return yt._forOperation(n,"link",s)}/**
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
 */async function lf(n,e,t=!1){const{auth:s}=n,i="reauthenticate";try{const r=await jt(n,dl(s,i,e,n),t);N(r.idToken,s,"internal-error");const o=sr(r.idToken);N(o,s,"internal-error");const{sub:a}=o;return N(n.uid===a,s,"user-mismatch"),yt._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ce(s,"user-mismatch"),r}}/**
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
 */async function hl(n,e,t=!1){const s="signIn",i=await dl(n,s,e),r=await yt._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}async function cf(n,e){return hl(Et(n),e)}async function uf(n,e,t){var s;const i=Et(n),r={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let o;if(!((s=i._getRecaptchaConfig())===null||s===void 0)&&s.emailPasswordEnabled){const c=await ds(i,r,"signUpPassword");o=oi(i,c)}else o=oi(i,r).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await ds(i,r,"signUpPassword");return oi(i,u)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await yt._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function df(n,e,t){return cf(ee(n),qt.credential(e,t))}/**
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
 */async function hf(n,e){return ze(n,"POST","/v1/accounts:createAuthUri",lt(n,e))}/**
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
 */async function ff(n,e){const t=Ga()?cs():"http://localhost",s={identifier:e,continueUri:t},{signinMethods:i}=await hf(ee(n),s);return i||[]}async function go(n,e){const t=ee(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:r}=await ef(t.auth,i);r!==n.email&&await n.reload()}/**
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
 */async function pf(n,e){return ze(n,"POST","/v1/accounts:update",e)}/**
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
 */async function mo(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=ee(n),r={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await jt(s,pf(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function gf(n,e,t,s){return ee(n).onIdTokenChanged(e,t,s)}function mf(n,e,t){return ee(n).beforeAuthStateChanged(e,t)}function _f(n,e,t,s){return ee(n).onAuthStateChanged(e,t,s)}function yf(n){return ee(n).signOut()}const fs="__sak";/**
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
 */class fl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(fs,"1"),this.storage.removeItem(fs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function vf(){const n=fe();return ir(n)||Ps(n)}const wf=1e3,bf=10;class pl extends fl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=vf()&&Uh(),this.fallbackToPolling=il(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);jh()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,bf):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},wf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}pl.type="LOCAL";const Ef=pl;/**
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
 */class gl extends fl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}gl.type="SESSION";const ml=gl;/**
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
 */function If(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ds{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new Ds(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await If(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ds.receivers=[];/**
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
 */function ar(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Cf{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=ar("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Me(){return window}function Tf(n){Me().location.href=n}/**
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
 */function _l(){return typeof Me().WorkerGlobalScope<"u"&&typeof Me().importScripts=="function"}async function Sf(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xf(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function kf(){return _l()?self:null}/**
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
 */const yl="firebaseLocalStorageDb",Rf=1,ps="firebaseLocalStorage",vl="fbase_key";class jn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ms(n,e){return n.transaction([ps],e?"readwrite":"readonly").objectStore(ps)}function Af(){const n=indexedDB.deleteDatabase(yl);return new jn(n).toPromise()}function Ri(){const n=indexedDB.open(yl,Rf);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(ps,{keyPath:vl})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(ps)?e(s):(s.close(),await Af(),e(await Ri()))})})}async function _o(n,e,t){const s=Ms(n,!0).put({[vl]:e,value:t});return new jn(s).toPromise()}async function Nf(n,e){const t=Ms(n,!1).get(e),s=await new jn(t).toPromise();return s===void 0?null:s.value}function yo(n,e){const t=Ms(n,!0).delete(e);return new jn(t).toPromise()}const Pf=800,Of=3;class wl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ri(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Of)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _l()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ds._getInstance(kf()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Sf(),!this.activeServiceWorker)return;this.sender=new Cf(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ri();return await _o(e,fs,"1"),await yo(e,fs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>_o(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Nf(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>yo(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Ms(i,!1).getAll();return new jn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wl.type="LOCAL";const Df=wl;new Mn(3e4,6e4);/**
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
 */function lr(n,e){return e?Be(e):(N(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class cr extends rr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ot(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ot(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ot(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Mf(n){return hl(n.auth,new cr(n),n.bypassAuthState)}function Lf(n){const{auth:e,user:t}=n;return N(t,e,"internal-error"),lf(t,new cr(n),n.bypassAuthState)}async function Ff(n){const{auth:e,user:t}=n;return N(t,e,"internal-error"),af(t,new cr(n),n.bypassAuthState)}/**
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
 */class bl{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Mf;case"linkViaPopup":case"linkViaRedirect":return Ff;case"reauthViaPopup":case"reauthViaRedirect":return Lf;default:Ce(this.auth,"internal-error")}}resolve(e){He(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){He(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const jf=new Mn(2e3,1e4);async function Uf(n,e,t){const s=Et(n);za(n,e,Os);const i=lr(s,t);return new Je(s,"signInViaPopup",e,i).executeNotNull()}async function Bf(n,e,t){const s=ee(n);za(s.auth,e,Os);const i=lr(s.auth,t);return new Je(s.auth,"linkViaPopup",e,i,s).executeNotNull()}class Je extends bl{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Je.currentPopupAction&&Je.currentPopupAction.cancel(),Je.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){He(this.filter.length===1,"Popup operations only handle one event");const e=ar();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(De(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(De(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Je.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(De(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jf.get())};e()}}Je.currentPopupAction=null;/**
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
 */const Wf="pendingRedirect",es=new Map;class $f extends bl{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=es.get(this.auth._key());if(!e){try{const s=await Hf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}es.set(this.auth._key(),e)}return this.bypassAuthState||es.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Hf(n,e){const t=Gf(e),s=zf(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function Vf(n,e){es.set(n._key(),e)}function zf(n){return Be(n._redirectPersistence)}function Gf(n){return Zn(Wf,n.config.apiKey,n.name)}async function qf(n,e,t=!1){const s=Et(n),i=lr(s,e),o=await new $f(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Kf=10*60*1e3;class Yf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Qf(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!El(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(De(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Kf&&this.cachedEventUids.clear(),this.cachedEventUids.has(vo(e))}saveEventToCache(e){this.cachedEventUids.add(vo(e)),this.lastProcessedEventTime=Date.now()}}function vo(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function El({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Qf(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return El(n);default:return!1}}/**
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
 */async function Jf(n,e={}){return ze(n,"GET","/v1/projects",e)}/**
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
 */const Xf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zf=/^https?/;async function ep(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Jf(n);for(const t of e)try{if(tp(t))return}catch{}Ce(n,"unauthorized-domain")}function tp(n){const e=cs(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!Zf.test(t))return!1;if(Xf.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const np=new Mn(3e4,6e4);function wo(){const n=Me().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function sp(n){return new Promise((e,t)=>{var s,i,r;function o(){wo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wo(),t(De(n,"network-request-failed"))},timeout:np.get()})}if(!((i=(s=Me().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Me().gapi)===null||r===void 0)&&r.load)o();else{const a=Wh("iframefcb");return Me()[a]=()=>{gapi.load?o():t(De(n,"network-request-failed"))},ll(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw ts=null,e})}let ts=null;function ip(n){return ts=ts||sp(n),ts}/**
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
 */const rp=new Mn(5e3,15e3),op="__/auth/iframe",ap="emulator/auth/iframe",lp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function up(n){const e=n.config;N(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?nr(e,ap):`https://${n.config.authDomain}/${op}`,s={apiKey:e.apiKey,appName:n.name,v:Gt},i=cp.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${zt(s).slice(1)}`}async function dp(n){const e=await ip(n),t=Me().gapi;return N(t,n,"internal-error"),e.open({where:document.body,url:up(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lp,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=De(n,"network-request-failed"),a=Me().setTimeout(()=>{r(o)},rp.get());function l(){Me().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const hp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fp=500,pp=600,gp="_blank",mp="http://localhost";class bo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _p(n,e,t,s=fp,i=pp){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},hp),{width:s.toString(),height:i.toString(),top:r,left:o}),c=fe().toLowerCase();t&&(a=Za(c)?gp:t),Xa(c)&&(e=e||mp,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[p,m])=>`${f}${p}=${m},`,"");if(Fh(c)&&a!=="_self")return yp(e||"",a),new bo(null);const h=window.open(e||"",a,u);N(h,n,"popup-blocked");try{h.focus()}catch{}return new bo(h)}function yp(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const vp="__/auth/handler",wp="emulator/auth/handler",bp=encodeURIComponent("fac");async function Eo(n,e,t,s,i,r){N(n.config.authDomain,n,"auth-domain-config-required"),N(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Gt,eventId:i};if(e instanceof Os){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ii(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof Fn){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await n._getAppCheckToken(),c=l?`#${bp}=${encodeURIComponent(l)}`:"";return`${Ep(n)}?${zt(a).slice(1)}${c}`}function Ep({config:n}){return n.emulator?nr(n,wp):`https://${n.authDomain}/${vp}`}/**
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
 */const ai="webStorageSupport";class Ip{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ml,this._completeRedirectFn=qf,this._overrideRedirectResult=Vf}async _openPopup(e,t,s,i){var r;He((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Eo(e,t,s,cs(),i);return _p(e,o,ar())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await Eo(e,t,s,cs(),i);return Tf(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(He(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await dp(e),s=new Yf(e);return t.register("authEvent",i=>(N(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ai,{type:ai},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[ai];o!==void 0&&t(!!o),Ce(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ep(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return il()||ir()||Ps()}}const Cp=Ip;var Io="@firebase/auth",Co="0.23.2";/**
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
 */class Tp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Sp(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function xp(n){Ft(new gt("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;N(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rl(n)},c=new Gh(s,i,r,l);return Kh(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Ft(new gt("auth-internal",e=>{const t=Et(e.getProvider("auth").getImmediate());return(s=>new Tp(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),tt(Io,Co,Sp(n)),tt(Io,Co,"esm2017")}/**
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
 */const kp=5*60,Rp=Oa("authIdTokenMaxAge")||kp;let To=null;const Ap=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Rp)return;const i=t==null?void 0:t.token;To!==i&&(To=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Np(n=Ua()){const e=Zi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=qh(n,{popupRedirectResolver:Cp,persistence:[Df,Ef,ml]}),s=Oa("authTokenSyncURL");if(s){const r=Ap(s);mf(t,r,()=>r(t.currentUser)),gf(t,o=>r(o))}const i=Na("auth");return i&&Yh(t,`http://${i}`),t}xp("Browser");var Pp="firebase",Op="9.23.0";/**
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
 */tt(Pp,Op,"app");var So={};const xo="@firebase/database",ko="0.14.4";/**
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
 */let Il="";function Dp(n){Il=n}/**
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
 */class Mp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),se(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:yn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Lp{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Le(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Cl=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Mp(e)}}catch{}return new Lp},ht=Cl("localStorage"),Fp=Cl("sessionStorage");/**
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
 */const Dt=new Ji("@firebase/database"),jp=function(){let n=1;return function(){return n++}}(),Tl=function(n){const e=pd(n),t=new ud;t.update(e);const s=t.digest();return Ki.encodeByteArray(s)},Un=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Un.apply(null,s):typeof s=="object"?e+=se(s):e+=s,e+=" "}return e};let hn=null,Ro=!0;const Up=function(n,e){y(!0,"Can't turn on custom loggers persistently."),Dt.logLevel=V.VERBOSE,hn=Dt.log.bind(Dt)},ce=function(...n){if(Ro===!0&&(Ro=!1,hn===null&&Fp.get("logging_enabled")===!0&&Up()),hn){const e=Un.apply(null,n);hn(e)}},Bn=function(n){return function(...e){ce(n,...e)}},Ai=function(...n){const e="FIREBASE INTERNAL ERROR: "+Un(...n);Dt.error(e)},Ve=function(...n){const e=`FIREBASE FATAL ERROR: ${Un(...n)}`;throw Dt.error(e),new Error(e)},me=function(...n){const e="FIREBASE WARNING: "+Un(...n);Dt.warn(e)},Bp=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&me("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ur=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Wp=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ut="[MIN_NAME]",vt="[MAX_NAME]",It=function(n,e){if(n===e)return 0;if(n===Ut||e===vt)return-1;if(e===Ut||n===vt)return 1;{const t=Ao(n),s=Ao(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},$p=function(n,e){return n===e?0:n<e?-1:1},tn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+se(e))},dr=function(n){if(typeof n!="object"||n===null)return se(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=se(e[s]),t+=":",t+=dr(n[e[s]]);return t+="}",t},Sl=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function ue(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const xl=function(n){y(!ur(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},Hp=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Vp=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function zp(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Gp=new RegExp("^-?(0*)\\d{1,10}$"),qp=-2147483648,Kp=2147483647,Ao=function(n){if(Gp.test(n)){const e=Number(n);if(e>=qp&&e<=Kp)return e}return null},Kt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw me("Exception was thrown by user callback.",t),e},Math.floor(0))}},Yp=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},fn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Qp{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){me(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Jp{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',me(e)}}class ns{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ns.OWNER="owner";/**
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
 */const hr="5",kl="v",Rl="s",Al="r",Nl="f",Pl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ol="ls",Dl="p",Ni="ac",Ml="websocket",Ll="long_polling";/**
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
 */class Fl{constructor(e,t,s,i,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ht.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ht.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Xp(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function jl(n,e,t){y(typeof e=="string","typeof type must == string"),y(typeof t=="object","typeof params must == object");let s;if(e===Ml)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Ll)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Xp(n)&&(t.ns=n.namespace);const i=[];return ue(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Zp{constructor(){this.counters_={}}incrementCounter(e,t=1){Le(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Gu(this.counters_)}}/**
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
 */const li={},ci={};function fr(n){const e=n.toString();return li[e]||(li[e]=new Zp),li[e]}function eg(n,e){const t=n.toString();return ci[t]||(ci[t]=e()),ci[t]}/**
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
 */class tg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Kt(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const No="start",ng="close",sg="pLPCommand",ig="pRTLPCB",Ul="id",Bl="pw",Wl="ser",rg="cb",og="seg",ag="ts",lg="d",cg="dframe",$l=1870,Hl=30,ug=$l-Hl,dg=25e3,hg=3e4;class Rt{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Bn(e),this.stats_=fr(t),this.urlFn=l=>(this.appCheckToken&&(l[Ni]=this.appCheckToken),jl(t,Ll,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new tg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(hg)),Wp(()=>{if(this.isClosed_)return;this.scriptTagHolder=new pr((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===No)this.id=a,this.password=l;else if(o===ng)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[No]="t",s[Wl]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[rg]=this.scriptTagHolder.uniqueCallbackIdentifier),s[kl]=hr,this.transportSessionId&&(s[Rl]=this.transportSessionId),this.lastSessionId&&(s[Ol]=this.lastSessionId),this.applicationId&&(s[Dl]=this.applicationId),this.appCheckToken&&(s[Ni]=this.appCheckToken),typeof location<"u"&&location.hostname&&Pl.test(location.hostname)&&(s[Al]=Nl);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Rt.forceAllow_=!0}static forceDisallow(){Rt.forceDisallow_=!0}static isAvailable(){return Rt.forceAllow_?!0:!Rt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Hp()&&!Vp()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=se(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ra(t),i=Sl(s,ug);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[cg]="t",s[Ul]=e,s[Bl]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=se(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class pr{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=jp(),window[sg+this.uniqueCallbackIdentifier]=e,window[ig+this.uniqueCallbackIdentifier]=t,this.myIFrame=pr.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ce("frame writing exception"),a.stack&&ce(a.stack),ce(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ce("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ul]=this.myID,e[Bl]=this.myPW,e[Wl]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Hl+s.length<=$l;){const o=this.pendingSegs.shift();s=s+"&"+og+i+"="+o.seg+"&"+ag+i+"="+o.ts+"&"+lg+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(dg)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const fg=16384,pg=45e3;let gs=null;typeof MozWebSocket<"u"?gs=MozWebSocket:typeof WebSocket<"u"&&(gs=WebSocket);class ke{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Bn(this.connId),this.stats_=fr(t),this.connURL=ke.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[kl]=hr,typeof location<"u"&&location.hostname&&Pl.test(location.hostname)&&(o[Al]=Nl),t&&(o[Rl]=t),s&&(o[Ol]=s),i&&(o[Ni]=i),r&&(o[Dl]=r),jl(e,Ml,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ht.set("previous_websocket_failure",!0);try{let s;nd(),this.mySock=new gs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ke.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&gs!==null&&!ke.forceDisallow_}static previouslyFailed(){return ht.isInMemoryStorage||ht.get("previous_websocket_failure")===!0}markConnectionHealthy(){ht.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=yn(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(y(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=se(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Sl(t,fg);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(pg))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ke.responsesRequiredToBeHealthy=2;ke.healthyTimeout=3e4;/**
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
 */class En{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Rt,ke]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ke&&ke.isAvailable();let s=t&&!ke.previouslyFailed();if(e.webSocketOnly&&(t||me("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ke];else{const i=this.transports_=[];for(const r of En.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);En.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}En.globalTransportInitialized_=!1;/**
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
 */const gg=6e4,mg=5e3,_g=10*1024,yg=100*1024,ui="t",Po="d",vg="s",Oo="r",wg="e",Do="o",Mo="a",Lo="n",Fo="p",bg="h";class Eg{constructor(e,t,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Bn("c:"+this.id+":"),this.transportManager_=new En(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=fn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>yg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>_g?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ui in e){const t=e[ui];t===Mo?this.upgradeIfSecondaryHealthy_():t===Oo?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Do&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=tn("t",e),s=tn("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Fo,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Mo,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Lo,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=tn("t",e),s=tn("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=tn(ui,e);if(Po in e){const s=e[Po];if(t===bg){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Lo){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===vg?this.onConnectionShutdown_(s):t===Oo?this.onReset_(s):t===wg?Ai("Server Error: "+s):t===Do?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ai("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),hr!==s&&me("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),fn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(gg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):fn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(mg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Fo,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ht.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Vl{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class zl{constructor(e){this.allowedEvents_=e,this.listeners_={},y(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){y(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class ms extends zl{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Qi()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ms}getInitialEvent(e){return y(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const jo=32,Uo=768;class z{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function $(){return new z("")}function F(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function it(n){return n.pieces_.length-n.pieceNum_}function q(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new z(n.pieces_,e)}function gr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Ig(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function In(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Gl(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new z(e,0)}function X(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof z)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new z(t,0)}function U(n){return n.pieceNum_>=n.pieces_.length}function ge(n,e){const t=F(n),s=F(e);if(t===null)return e;if(t===s)return ge(q(n),q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Cg(n,e){const t=In(n,0),s=In(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=It(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function mr(n,e){if(it(n)!==it(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Ie(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(it(n)>it(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Tg{constructor(e,t){this.errorPrefix_=t,this.parts_=In(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ns(this.parts_[s]);ql(this)}}function Sg(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ns(e),ql(n)}function xg(n){const e=n.parts_.pop();n.byteLength_-=Ns(e),n.parts_.length>0&&(n.byteLength_-=1)}function ql(n){if(n.byteLength_>Uo)throw new Error(n.errorPrefix_+"has a key path longer than "+Uo+" bytes ("+n.byteLength_+").");if(n.parts_.length>jo)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+jo+") or object contains a cycle "+dt(n))}function dt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class _r extends zl{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new _r}getInitialEvent(e){return y(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const nn=1e3,kg=60*5*1e3,Bo=30*1e3,Rg=1.3,Ag=3e4,Ng="server_kill",Wo=3;class $e extends Vl{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=$e.nextPersistentConnectionId_++,this.log_=Bn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=nn,this.maxReconnectDelay_=kg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");_r.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ms.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(se(r)),y(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new On,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),y(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;$e.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Le(e,"w")){const s=Lt(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();me(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||cd(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Bo)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=ld(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+se(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Ai("Unrecognized action received from server: "+se(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){y(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=nn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=nn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Ag&&(this.reconnectDelay_=nn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Rg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+$e.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){y(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ce("getToken() completed but was canceled"):(ce("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new Eg(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,p=>{me(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ng)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&me(h),l())}}}interrupt(e){ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ii(this.interruptReasons_)&&(this.reconnectDelay_=nn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>dr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new z(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){ce("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Wo&&(this.reconnectDelay_=Bo,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ce("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Wo&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Il.replace(/\./g,"-")]=1,Qi()?e["framework.cordova"]=1:Da()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ms.getInstance().currentlyOnline();return Ii(this.interruptReasons_)&&e}}$e.nextPersistentConnectionId_=0;$e.nextConnectionId_=0;/**
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
 */class j{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new j(e,t)}}/**
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
 */class Ls{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new j(Ut,e),i=new j(Ut,t);return this.compare(s,i)!==0}minPost(){return j.MIN}}/**
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
 */let Kn;class Kl extends Ls{static get __EMPTY_NODE(){return Kn}static set __EMPTY_NODE(e){Kn=e}compare(e,t){return It(e.name,t.name)}isDefinedOn(e){throw Vt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return j.MIN}maxPost(){return new j(vt,Kn)}makePost(e,t){return y(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,Kn)}toString(){return".key"}}const Mt=new Kl;/**
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
 */class Yn{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class re{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??re.RED,this.left=i??ve.EMPTY_NODE,this.right=r??ve.EMPTY_NODE}copy(e,t,s,i,r){return new re(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ve.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return ve.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}re.RED=!0;re.BLACK=!1;class Pg{copy(e,t,s,i,r){return this}insert(e,t,s){return new re(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ve{constructor(e,t=ve.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ve(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,re.BLACK,null,null))}remove(e){return new ve(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,re.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Yn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Yn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Yn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Yn(this.root_,null,this.comparator_,!0,e)}}ve.EMPTY_NODE=new Pg;/**
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
 */function Og(n,e){return It(n.name,e.name)}function yr(n,e){return It(n,e)}/**
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
 */let Pi;function Dg(n){Pi=n}const Yl=function(n){return typeof n=="number"?"number:"+xl(n):"string:"+n},Ql=function(n){if(n.isLeafNode()){const e=n.val();y(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Le(e,".sv"),"Priority must be a string or number.")}else y(n===Pi||n.isEmpty(),"priority of unexpected type.");y(n===Pi||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let $o;class ie{constructor(e,t=ie.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,y(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ql(this.priorityNode_)}static set __childrenNodeConstructor(e){$o=e}static get __childrenNodeConstructor(){return $o}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ie(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ie.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:F(e)===".priority"?this.priorityNode_:ie.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ie.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=F(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(y(s!==".priority"||it(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ie.__childrenNodeConstructor.EMPTY_NODE.updateChild(q(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Yl(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=xl(this.value_):e+=this.value_,this.lazyHash_=Tl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ie.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ie.__childrenNodeConstructor?-1:(y(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=ie.VALUE_TYPE_ORDER.indexOf(t),r=ie.VALUE_TYPE_ORDER.indexOf(s);return y(i>=0,"Unknown leaf type: "+t),y(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ie.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Jl,Xl;function Mg(n){Jl=n}function Lg(n){Xl=n}class Fg extends Ls{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?It(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return j.MIN}maxPost(){return new j(vt,new ie("[PRIORITY-POST]",Xl))}makePost(e,t){const s=Jl(e);return new j(t,new ie("[PRIORITY-POST]",s))}toString(){return".priority"}}const Z=new Fg;/**
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
 */const jg=Math.log(2);class Ug{constructor(e){const t=r=>parseInt(Math.log(r)/jg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const _s=function(n,e,t,s){n.sort(e);const i=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=n[l],f=t?t(h):h,new re(f,h.node,re.BLACK,null,null);{const p=parseInt(u/2,10)+l,m=i(l,p),b=i(p+1,c);return h=n[p],f=t?t(h):h,new re(f,h.node,re.BLACK,m,b)}},r=function(l){let c=null,u=null,h=n.length;const f=function(m,b){const _=h-m,M=h;h-=m;const H=i(_+1,M),J=n[_],de=t?t(J):J;p(new re(de,J.node,b,null,H))},p=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const b=l.nextBitIsOne(),_=Math.pow(2,l.count-(m+1));b?f(_,re.BLACK):(f(_,re.BLACK),f(_,re.RED))}return u},o=new Ug(n.length),a=r(o);return new ve(s||e,a)};/**
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
 */let di;const St={};class We{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return y(St&&Z,"ChildrenNode.ts has not been loaded"),di=di||new We({".priority":St},{".priority":Z}),di}get(e){const t=Lt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ve?t:null}hasIndex(e){return Le(this.indexSet_,e.toString())}addIndex(e,t){y(e!==Mt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(j.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=_s(s,e.getCompare()):a=St;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new We(u,c)}addToIndexes(e,t){const s=rs(this.indexes_,(i,r)=>{const o=Lt(this.indexSet_,r);if(y(o,"Missing index implementation for "+r),i===St)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(j.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),_s(a,o.getCompare())}else return St;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new j(e.name,a))),l.insert(e,e.node)}});return new We(s,this.indexSet_)}removeFromIndexes(e,t){const s=rs(this.indexes_,i=>{if(i===St)return i;{const r=t.get(e.name);return r?i.remove(new j(e.name,r)):i}});return new We(s,this.indexSet_)}}/**
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
 */let sn;class R{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Ql(this.priorityNode_),this.children_.isEmpty()&&y(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return sn||(sn=new R(new ve(yr),null,We.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||sn}updatePriority(e){return this.children_.isEmpty()?this:new R(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?sn:t}}getChild(e){const t=F(e);return t===null?this:this.getImmediateChild(t).getChild(q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(y(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new j(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?sn:this.priorityNode_;return new R(i,o,r)}}updateChild(e,t){const s=F(e);if(s===null)return t;{y(F(e)!==".priority"||it(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(q(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(Z,(o,a)=>{t[o]=a.val(e),s++,r&&R.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Yl(this.getPriority().val())+":"),this.forEachChild(Z,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Tl(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new j(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new j(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new j(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Wn?-1:0}withIndex(e){if(e===Mt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new R(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Mt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Z),i=t.getIterator(Z);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Mt?null:this.indexMap_.get(e.toString())}}R.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Bg extends R{constructor(){super(new ve(yr),R.EMPTY_NODE,We.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return R.EMPTY_NODE}isEmpty(){return!1}}const Wn=new Bg;Object.defineProperties(j,{MIN:{value:new j(Ut,R.EMPTY_NODE)},MAX:{value:new j(vt,Wn)}});Kl.__EMPTY_NODE=R.EMPTY_NODE;ie.__childrenNodeConstructor=R;Dg(Wn);Lg(Wn);/**
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
 */const Wg=!0;function ne(n,e=null){if(n===null)return R.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),y(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ie(t,ne(e))}if(!(n instanceof Array)&&Wg){const t=[];let s=!1;if(ue(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=ne(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new j(o,l)))}}),t.length===0)return R.EMPTY_NODE;const r=_s(t,Og,o=>o.name,yr);if(s){const o=_s(t,Z.getCompare());return new R(r,ne(e),new We({".priority":o},{".priority":Z}))}else return new R(r,ne(e),We.Default)}else{let t=R.EMPTY_NODE;return ue(n,(s,i)=>{if(Le(n,s)&&s.substring(0,1)!=="."){const r=ne(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(ne(e))}}Mg(ne);/**
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
 */class $g extends Ls{constructor(e){super(),this.indexPath_=e,y(!U(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?It(e.name,t.name):r}makePost(e,t){const s=ne(e),i=R.EMPTY_NODE.updateChild(this.indexPath_,s);return new j(t,i)}maxPost(){const e=R.EMPTY_NODE.updateChild(this.indexPath_,Wn);return new j(vt,e)}toString(){return In(this.indexPath_,0).join("/")}}/**
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
 */class Hg extends Ls{compare(e,t){const s=e.node.compareTo(t.node);return s===0?It(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,t){const s=ne(e);return new j(t,s)}toString(){return".value"}}const Vg=new Hg;/**
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
 */function Zl(n){return{type:"value",snapshotNode:n}}function Bt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Cn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Tn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function zg(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class vr{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){y(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Cn(t,a)):y(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Bt(t,s)):o.trackChildChange(Tn(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Z,(i,r)=>{t.hasChild(i)||s.trackChildChange(Cn(i,r))}),t.isLeafNode()||t.forEachChild(Z,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Tn(i,r,o))}else s.trackChildChange(Bt(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?R.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Sn{constructor(e){this.indexedFilter_=new vr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Sn.getStartPost_(e),this.endPost_=Sn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new j(t,s))||(s=R.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=R.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(R.EMPTY_NODE);const r=this;return t.forEachChild(Z,(o,a)=>{r.matches(new j(o,a))||(i=i.updateImmediateChild(o,R.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Gg{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Sn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new j(t,s))||(s=R.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=R.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=R.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(R.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,R.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,p)=>h(p,f)}else o=this.index_.getCompare();const a=e;y(a.numChildren()===this.limit_,"");const l=new j(t,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===t||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(u&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(Tn(t,s,h)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Cn(t,h));const b=a.updateImmediateChild(t,R.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Bt(f.name,f.node)),b.updateImmediateChild(f.name,f.node)):b}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Cn(c.name,c.node)),r.trackChildChange(Bt(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(c.name,R.EMPTY_NODE)):e}}/**
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
 */class wr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Z}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return y(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return y(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ut}hasEnd(){return this.endSet_}getIndexEndValue(){return y(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return y(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:vt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return y(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Z}copy(){const e=new wr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function qg(n){return n.loadsAllData()?new vr(n.getIndex()):n.hasLimit()?new Gg(n):new Sn(n)}function Kg(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="r",t}function Ho(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Z?t="$priority":n.index_===Vg?t="$value":n.index_===Mt?t="$key":(y(n.index_ instanceof $g,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=se(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=se(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+se(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=se(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+se(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Vo(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Z&&(e.i=n.index_.toString()),e}/**
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
 */class ys extends Vl{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Bn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(y(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ys.getListenId_(e,s),a={};this.listens_[o]=a;const l=Ho(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Lt(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,t){const s=ys.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Ho(e._queryParams),s=e._path.toString(),i=new On;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+zt(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=yn(a.responseText)}catch{me("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&me("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Yg{constructor(){this.rootNode_=R.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function vs(){return{value:null,children:new Map}}function ec(n,e,t){if(U(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=F(e);n.children.has(s)||n.children.set(s,vs());const i=n.children.get(s);e=q(e),ec(i,e,t)}}function Oi(n,e,t){n.value!==null?t(e,n.value):Qg(n,(s,i)=>{const r=new z(e.toString()+"/"+s);Oi(i,r,t)})}function Qg(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class Jg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ue(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const zo=10*1e3,Xg=30*1e3,Zg=5*60*1e3;class em{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Jg(e);const s=zo+(Xg-zo)*Math.random();fn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;ue(e,(i,r)=>{r>0&&Le(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),fn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Zg))}}/**
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
 */var Ae;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ae||(Ae={}));function br(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Er(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ir(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class ws{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Ae.ACK_USER_WRITE,this.source=br()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return y(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new z(e));return new ws($(),t,this.revert)}}else return y(F(this.path)===e,"operationForChild called for unrelated child."),new ws(q(this.path),this.affectedTree,this.revert)}}/**
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
 */class xn{constructor(e,t){this.source=e,this.path=t,this.type=Ae.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new xn(this.source,$()):new xn(this.source,q(this.path))}}/**
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
 */class wt{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Ae.OVERWRITE}operationForChild(e){return U(this.path)?new wt(this.source,$(),this.snap.getImmediateChild(e)):new wt(this.source,q(this.path),this.snap)}}/**
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
 */class Wt{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Ae.MERGE}operationForChild(e){if(U(this.path)){const t=this.children.subtree(new z(e));return t.isEmpty()?null:t.value?new wt(this.source,$(),t.value):new Wt(this.source,$(),t)}else return y(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Wt(this.source,q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class rt{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const t=F(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class tm{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function nm(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(zg(o.childName,o.snapshotNode))}),rn(n,i,"child_removed",e,s,t),rn(n,i,"child_added",e,s,t),rn(n,i,"child_moved",r,s,t),rn(n,i,"child_changed",e,s,t),rn(n,i,"value",e,s,t),i}function rn(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>im(n,a,l)),o.forEach(a=>{const l=sm(n,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function sm(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function im(n,e,t){if(e.childName==null||t.childName==null)throw Vt("Should only compare child_ events.");const s=new j(e.childName,e.snapshotNode),i=new j(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function Fs(n,e){return{eventCache:n,serverCache:e}}function pn(n,e,t,s){return Fs(new rt(e,t,s),n.serverCache)}function tc(n,e,t,s){return Fs(n.eventCache,new rt(e,t,s))}function bs(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function bt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let hi;const rm=()=>(hi||(hi=new ve($p)),hi);class G{constructor(e,t=rm()){this.value=e,this.children=t}static fromObject(e){let t=new G(null);return ue(e,(s,i)=>{t=t.set(new z(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:$(),value:this.value};if(U(e))return null;{const s=F(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(q(e),t);return r!=null?{path:X(new z(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const t=F(e),s=this.children.get(t);return s!==null?s.subtree(q(e)):new G(null)}}set(e,t){if(U(e))return new G(t,this.children);{const s=F(e),r=(this.children.get(s)||new G(null)).set(q(e),t),o=this.children.insert(s,r);return new G(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new G(null):new G(null,this.children);{const t=F(e),s=this.children.get(t);if(s){const i=s.remove(q(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new G(null):new G(this.value,r)}else return this}}get(e){if(U(e))return this.value;{const t=F(e),s=this.children.get(t);return s?s.get(q(e)):null}}setTree(e,t){if(U(e))return t;{const s=F(e),r=(this.children.get(s)||new G(null)).setTree(q(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new G(this.value,o)}}fold(e){return this.fold_($(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(X(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,$(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(U(e))return null;{const r=F(e),o=this.children.get(r);return o?o.findOnPath_(q(e),X(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,$(),t)}foreachOnPath_(e,t,s){if(U(e))return this;{this.value&&s(t,this.value);const i=F(e),r=this.children.get(i);return r?r.foreachOnPath_(q(e),X(t,i),s):new G(null)}}foreach(e){this.foreach_($(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(X(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class Ne{constructor(e){this.writeTree_=e}static empty(){return new Ne(new G(null))}}function gn(n,e,t){if(U(e))return new Ne(new G(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ge(i,e);return r=r.updateChild(o,t),new Ne(n.writeTree_.set(i,r))}else{const i=new G(t),r=n.writeTree_.setTree(e,i);return new Ne(r)}}}function Di(n,e,t){let s=n;return ue(t,(i,r)=>{s=gn(s,X(e,i),r)}),s}function Go(n,e){if(U(e))return Ne.empty();{const t=n.writeTree_.setTree(e,new G(null));return new Ne(t)}}function Mi(n,e){return Ct(n,e)!=null}function Ct(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ge(t.path,e)):null}function qo(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Z,(s,i)=>{e.push(new j(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new j(s,i.value))}),e}function nt(n,e){if(U(e))return n;{const t=Ct(n,e);return t!=null?new Ne(new G(t)):new Ne(n.writeTree_.subtree(e))}}function Li(n){return n.writeTree_.isEmpty()}function $t(n,e){return nc($(),n.writeTree_,e)}function nc(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(y(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=nc(X(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(X(n,".priority"),s)),t}}/**
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
 */function js(n,e){return oc(e,n)}function om(n,e,t,s,i){y(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=gn(n.visibleWrites,e,t)),n.lastWriteId=s}function am(n,e,t,s){y(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=Di(n.visibleWrites,e,t),n.lastWriteId=s}function lm(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function cm(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);y(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&um(a,s.path)?i=!1:Ie(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return dm(n),!0;if(s.snap)n.visibleWrites=Go(n.visibleWrites,s.path);else{const a=s.children;ue(a,l=>{n.visibleWrites=Go(n.visibleWrites,X(s.path,l))})}return!0}else return!1}function um(n,e){if(n.snap)return Ie(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Ie(X(n.path,t),e))return!0;return!1}function dm(n){n.visibleWrites=sc(n.allWrites,hm,$()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function hm(n){return n.visible}function sc(n,e,t){let s=Ne.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)Ie(t,o)?(a=ge(t,o),s=gn(s,a,r.snap)):Ie(o,t)&&(a=ge(o,t),s=gn(s,$(),r.snap.getChild(a)));else if(r.children){if(Ie(t,o))a=ge(t,o),s=Di(s,a,r.children);else if(Ie(o,t))if(a=ge(o,t),U(a))s=Di(s,$(),r.children);else{const l=Lt(r.children,F(a));if(l){const c=l.getChild(q(a));s=gn(s,$(),c)}}}else throw Vt("WriteRecord should have .snap or .children")}}return s}function ic(n,e,t,s,i){if(!s&&!i){const r=Ct(n.visibleWrites,e);if(r!=null)return r;{const o=nt(n.visibleWrites,e);if(Li(o))return t;if(t==null&&!Mi(o,$()))return null;{const a=t||R.EMPTY_NODE;return $t(o,a)}}}else{const r=nt(n.visibleWrites,e);if(!i&&Li(r))return t;if(!i&&t==null&&!Mi(r,$()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Ie(c.path,e)||Ie(e,c.path))},a=sc(n.allWrites,o,e),l=t||R.EMPTY_NODE;return $t(a,l)}}}function fm(n,e,t){let s=R.EMPTY_NODE;const i=Ct(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Z,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=nt(n.visibleWrites,e);return t.forEachChild(Z,(o,a)=>{const l=$t(nt(r,new z(o)),a);s=s.updateImmediateChild(o,l)}),qo(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=nt(n.visibleWrites,e);return qo(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function pm(n,e,t,s,i){y(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=X(e,t);if(Mi(n.visibleWrites,r))return null;{const o=nt(n.visibleWrites,r);return Li(o)?i.getChild(t):$t(o,i.getChild(t))}}function gm(n,e,t,s){const i=X(e,t),r=Ct(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=nt(n.visibleWrites,i);return $t(o,s.getNode().getImmediateChild(t))}else return null}function mm(n,e){return Ct(n.visibleWrites,e)}function _m(n,e,t,s,i,r,o){let a;const l=nt(n.visibleWrites,e),c=Ct(l,$());if(c!=null)a=c;else if(t!=null)a=$t(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=f.getNext();for(;p&&u.length<i;)h(p,s)!==0&&u.push(p),p=f.getNext();return u}else return[]}function ym(){return{visibleWrites:Ne.empty(),allWrites:[],lastWriteId:-1}}function Es(n,e,t,s){return ic(n.writeTree,n.treePath,e,t,s)}function Cr(n,e){return fm(n.writeTree,n.treePath,e)}function Ko(n,e,t,s){return pm(n.writeTree,n.treePath,e,t,s)}function Is(n,e){return mm(n.writeTree,X(n.treePath,e))}function vm(n,e,t,s,i,r){return _m(n.writeTree,n.treePath,e,t,s,i,r)}function Tr(n,e,t){return gm(n.writeTree,n.treePath,e,t)}function rc(n,e){return oc(X(n.treePath,e),n.writeTree)}function oc(n,e){return{treePath:n,writeTree:e}}/**
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
 */class wm{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;y(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),y(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Tn(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Cn(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Bt(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Tn(s,e.snapshotNode,i.oldSnap));else throw Vt("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class bm{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const ac=new bm;class Sr{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new rt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Tr(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:bt(this.viewCache_),r=vm(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function Em(n){return{filter:n}}function Im(n,e){y(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),y(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Cm(n,e,t,s,i){const r=new wm;let o,a;if(t.type===Ae.OVERWRITE){const c=t;c.source.fromUser?o=Fi(n,e,c.path,c.snap,s,i,r):(y(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!U(c.path),o=Cs(n,e,c.path,c.snap,s,i,a,r))}else if(t.type===Ae.MERGE){const c=t;c.source.fromUser?o=Sm(n,e,c.path,c.children,s,i,r):(y(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ji(n,e,c.path,c.children,s,i,a,r))}else if(t.type===Ae.ACK_USER_WRITE){const c=t;c.revert?o=Rm(n,e,c.path,s,i,r):o=xm(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===Ae.LISTEN_COMPLETE)o=km(n,e,t.path,s,r);else throw Vt("Unknown operation type: "+t.type);const l=r.getChanges();return Tm(e,o,l),{viewCache:o,changes:l}}function Tm(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=bs(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Zl(bs(e)))}}function lc(n,e,t,s,i,r){const o=e.eventCache;if(Is(s,t)!=null)return e;{let a,l;if(U(t))if(y(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=bt(e),u=c instanceof R?c:R.EMPTY_NODE,h=Cr(s,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Es(s,bt(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=F(t);if(c===".priority"){y(it(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Ko(s,t,u,l);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=q(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Ko(s,t,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Tr(s,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return pn(e,a,o.isFullyInitialized()||U(t),n.filter.filtersNodes())}}function Cs(n,e,t,s,i,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(U(t))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(t,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=F(t);if(!l.isCompleteForPath(t)&&it(t)>1)return e;const m=q(t),_=l.getNode().getImmediateChild(p).updateChild(m,s);p===".priority"?c=u.updatePriority(l.getNode(),_):c=u.updateChild(l.getNode(),p,_,m,ac,null)}const h=tc(e,c,l.isFullyInitialized()||U(t),u.filtersNodes()),f=new Sr(i,h,r);return lc(n,h,t,i,f,a)}function Fi(n,e,t,s,i,r,o){const a=e.eventCache;let l,c;const u=new Sr(i,e,r);if(U(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=pn(e,c,!0,n.filter.filtersNodes());else{const h=F(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),l=pn(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=q(t),p=a.getNode().getImmediateChild(h);let m;if(U(f))m=s;else{const b=u.getCompleteChild(h);b!=null?gr(f)===".priority"&&b.getChild(Gl(f)).isEmpty()?m=b:m=b.updateChild(f,s):m=R.EMPTY_NODE}if(p.equals(m))l=e;else{const b=n.filter.updateChild(a.getNode(),h,m,f,u,o);l=pn(e,b,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Yo(n,e){return n.eventCache.isCompleteForChild(e)}function Sm(n,e,t,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=X(t,l);Yo(e,F(u))&&(a=Fi(n,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=X(t,l);Yo(e,F(u))||(a=Fi(n,a,u,c,i,r,o))}),a}function Qo(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ji(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;U(t)?c=s:c=new G(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),m=Qo(n,p,f);l=Cs(n,l,new z(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,f)=>{const p=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!p){const m=e.serverCache.getNode().getImmediateChild(h),b=Qo(n,m,f);l=Cs(n,l,new z(h),b,i,r,o,a)}}),l}function xm(n,e,t,s,i,r,o){if(Is(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(U(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Cs(n,e,t,l.getNode().getChild(t),i,r,a,o);if(U(t)){let c=new G(null);return l.getNode().forEachChild(Mt,(u,h)=>{c=c.set(new z(u),h)}),ji(n,e,t,c,i,r,a,o)}else return e}else{let c=new G(null);return s.foreach((u,h)=>{const f=X(t,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),ji(n,e,t,c,i,r,a,o)}}function km(n,e,t,s,i){const r=e.serverCache,o=tc(e,r.getNode(),r.isFullyInitialized()||U(t),r.isFiltered());return lc(n,o,t,s,ac,i)}function Rm(n,e,t,s,i,r){let o;if(Is(s,t)!=null)return e;{const a=new Sr(s,e,i),l=e.eventCache.getNode();let c;if(U(t)||F(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Es(s,bt(e));else{const h=e.serverCache.getNode();y(h instanceof R,"serverChildren would be complete if leaf node"),u=Cr(s,h)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=F(t);let h=Tr(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=n.filter.updateChild(l,u,h,q(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,R.EMPTY_NODE,q(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Es(s,bt(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Is(s,$())!=null,pn(e,c,o,n.filter.filtersNodes())}}/**
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
 */class Am{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new vr(s.getIndex()),r=qg(s);this.processor_=Em(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(R.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(R.EMPTY_NODE,a.getNode(),null),u=new rt(l,o.isFullyInitialized(),i.filtersNodes()),h=new rt(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Fs(h,u),this.eventGenerator_=new tm(this.query_)}get query(){return this.query_}}function Nm(n){return n.viewCache_.serverCache.getNode()}function Pm(n){return bs(n.viewCache_)}function Om(n,e){const t=bt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!U(e)&&!t.getImmediateChild(F(e)).isEmpty())?t.getChild(e):null}function Jo(n){return n.eventRegistrations_.length===0}function Dm(n,e){n.eventRegistrations_.push(e)}function Xo(n,e,t){const s=[];if(t){y(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Zo(n,e,t,s){e.type===Ae.MERGE&&e.source.queryId!==null&&(y(bt(n.viewCache_),"We should always have a full cache before handling merges"),y(bs(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Cm(n.processor_,i,e,t,s);return Im(n.processor_,r.viewCache),y(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,cc(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Mm(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Z,(r,o)=>{s.push(Bt(r,o))}),t.isFullyInitialized()&&s.push(Zl(t.getNode())),cc(n,s,t.getNode(),e)}function cc(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return nm(n.eventGenerator_,e,t,i)}/**
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
 */let Ts;class uc{constructor(){this.views=new Map}}function Lm(n){y(!Ts,"__referenceConstructor has already been defined"),Ts=n}function Fm(){return y(Ts,"Reference.ts has not been loaded"),Ts}function jm(n){return n.views.size===0}function xr(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return y(r!=null,"SyncTree gave us an op for an invalid query."),Zo(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Zo(o,e,t,s));return r}}function dc(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Es(t,i?s:null),l=!1;a?l=!0:s instanceof R?(a=Cr(t,s),l=!1):(a=R.EMPTY_NODE,l=!1);const c=Fs(new rt(a,l,!1),new rt(s,i,!1));return new Am(e,c)}return o}function Um(n,e,t,s,i,r){const o=dc(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Dm(o,t),Mm(o,t)}function Bm(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=ot(n);if(i==="default")for(const[l,c]of n.views.entries())o=o.concat(Xo(c,t,s)),Jo(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(i);l&&(o=o.concat(Xo(l,t,s)),Jo(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!ot(n)&&r.push(new(Fm())(e._repo,e._path)),{removed:r,events:o}}function hc(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function st(n,e){let t=null;for(const s of n.views.values())t=t||Om(s,e);return t}function fc(n,e){if(e._queryParams.loadsAllData())return Us(n);{const s=e._queryIdentifier;return n.views.get(s)}}function pc(n,e){return fc(n,e)!=null}function ot(n){return Us(n)!=null}function Us(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ss;function Wm(n){y(!Ss,"__referenceConstructor has already been defined"),Ss=n}function $m(){return y(Ss,"Reference.ts has not been loaded"),Ss}let Hm=1;class ea{constructor(e){this.listenProvider_=e,this.syncPointTree_=new G(null),this.pendingWriteTree_=ym(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function gc(n,e,t,s,i){return om(n.pendingWriteTree_,e,t,s,i),i?Yt(n,new wt(br(),e,t)):[]}function Vm(n,e,t,s){am(n.pendingWriteTree_,e,t,s);const i=G.fromObject(t);return Yt(n,new Wt(br(),e,i))}function Xe(n,e,t=!1){const s=lm(n.pendingWriteTree_,e);if(cm(n.pendingWriteTree_,e)){let r=new G(null);return s.snap!=null?r=r.set($(),!0):ue(s.children,o=>{r=r.set(new z(o),!0)}),Yt(n,new ws(s.path,r,t))}else return[]}function $n(n,e,t){return Yt(n,new wt(Er(),e,t))}function zm(n,e,t){const s=G.fromObject(t);return Yt(n,new Wt(Er(),e,s))}function Gm(n,e){return Yt(n,new xn(Er(),e))}function qm(n,e,t){const s=Rr(n,t);if(s){const i=Ar(s),r=i.path,o=i.queryId,a=ge(r,e),l=new xn(Ir(o),a);return Nr(n,r,l)}else return[]}function xs(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||pc(o,e))){const l=Bm(o,e,t,s);jm(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(f,p)=>ot(p));if(u&&!h){const f=n.syncPointTree_.subtree(r);if(!f.isEmpty()){const p=Qm(f);for(let m=0;m<p.length;++m){const b=p[m],_=b.query,M=vc(n,b);n.listenProvider_.startListening(mn(_),kn(n,_),M.hashFn,M.onComplete)}}}!h&&c.length>0&&!s&&(u?n.listenProvider_.stopListening(mn(e),null):c.forEach(f=>{const p=n.queryToTagMap.get(Bs(f));n.listenProvider_.stopListening(mn(f),p)}))}Jm(n,c)}return a}function mc(n,e,t,s){const i=Rr(n,s);if(i!=null){const r=Ar(i),o=r.path,a=r.queryId,l=ge(o,e),c=new wt(Ir(a),l,t);return Nr(n,o,c)}else return[]}function Km(n,e,t,s){const i=Rr(n,s);if(i){const r=Ar(i),o=r.path,a=r.queryId,l=ge(o,e),c=G.fromObject(t),u=new Wt(Ir(a),l,c);return Nr(n,o,u)}else return[]}function Ui(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(f,p)=>{const m=ge(f,i);r=r||st(p,m),o=o||ot(p)});let a=n.syncPointTree_.get(i);a?(o=o||ot(a),r=r||st(a,$())):(a=new uc,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=R.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((p,m)=>{const b=st(m,$());b&&(r=r.updateImmediateChild(p,b))}));const c=pc(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=Bs(e);y(!n.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=Xm();n.queryToTagMap.set(f,p),n.tagToQueryMap.set(p,f)}const u=js(n.pendingWriteTree_,i);let h=Um(a,e,t,u,r,l);if(!c&&!o&&!s){const f=fc(a,e);h=h.concat(Zm(n,e,f))}return h}function kr(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=ge(o,e),c=st(a,l);if(c)return c});return ic(i,e,r,t,!0)}function Ym(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const h=ge(c,t);s=s||st(u,h)});let i=n.syncPointTree_.get(t);i?s=s||st(i,$()):(i=new uc,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new rt(s,!0,!1):null,a=js(n.pendingWriteTree_,e._path),l=dc(i,e,a,r?o.getNode():R.EMPTY_NODE,r);return Pm(l)}function Yt(n,e){return _c(e,n.syncPointTree_,null,js(n.pendingWriteTree_,$()))}function _c(n,e,t,s){if(U(n.path))return yc(n,e,t,s);{const i=e.get($());t==null&&i!=null&&(t=st(i,$()));let r=[];const o=F(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=rc(s,o);r=r.concat(_c(a,l,c,u))}return i&&(r=r.concat(xr(i,n,s,t))),r}}function yc(n,e,t,s){const i=e.get($());t==null&&i!=null&&(t=st(i,$()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=rc(s,o),u=n.operationForChild(o);u&&(r=r.concat(yc(u,a,l,c)))}),i&&(r=r.concat(xr(i,n,s,t))),r}function vc(n,e){const t=e.query,s=kn(n,t);return{hashFn:()=>(Nm(e)||R.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?qm(n,t._path,s):Gm(n,t._path);{const r=zp(i,t);return xs(n,t,null,r)}}}}function kn(n,e){const t=Bs(e);return n.queryToTagMap.get(t)}function Bs(n){return n._path.toString()+"$"+n._queryIdentifier}function Rr(n,e){return n.tagToQueryMap.get(e)}function Ar(n){const e=n.indexOf("$");return y(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new z(n.substr(0,e))}}function Nr(n,e,t){const s=n.syncPointTree_.get(e);y(s,"Missing sync point for query tag that we're tracking");const i=js(n.pendingWriteTree_,e);return xr(s,t,i,null)}function Qm(n){return n.fold((e,t,s)=>{if(t&&ot(t))return[Us(t)];{let i=[];return t&&(i=hc(t)),ue(s,(r,o)=>{i=i.concat(o)}),i}})}function mn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new($m())(n._repo,n._path):n}function Jm(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Bs(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Xm(){return Hm++}function Zm(n,e,t){const s=e._path,i=kn(n,e),r=vc(n,t),o=n.listenProvider_.startListening(mn(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)y(!ot(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!U(c)&&u&&ot(u))return[Us(u).query];{let f=[];return u&&(f=f.concat(hc(u).map(p=>p.query))),ue(h,(p,m)=>{f=f.concat(m)}),f}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(mn(u),kn(n,u))}}return o}/**
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
 */class Pr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Pr(t)}node(){return this.node_}}class Or{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=X(this.path_,e);return new Or(this.syncTree_,t)}node(){return kr(this.syncTree_,this.path_)}}const e_=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ta=function(n,e,t){if(!n||typeof n!="object")return n;if(y(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return t_(n[".sv"],e,t);if(typeof n[".sv"]=="object")return n_(n[".sv"],e);y(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},t_=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:y(!1,"Unexpected server value: "+n)}},n_=function(n,e,t){n.hasOwnProperty("increment")||y(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&y(!1,"Unexpected increment value: "+s);const i=e.node();if(y(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},wc=function(n,e,t,s){return Dr(e,new Or(t,n),s)},bc=function(n,e,t){return Dr(n,new Pr(e),t)};function Dr(n,e,t){const s=n.getPriority().val(),i=ta(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=ta(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new ie(a,ne(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ie(i))),o.forEachChild(Z,(a,l)=>{const c=Dr(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Mr{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Lr(n,e){let t=e instanceof z?e:new z(e),s=n,i=F(t);for(;i!==null;){const r=Lt(s.node.children,i)||{children:{},childCount:0};s=new Mr(i,s,r),t=q(t),i=F(t)}return s}function Qt(n){return n.node.value}function Ec(n,e){n.node.value=e,Bi(n)}function Ic(n){return n.node.childCount>0}function s_(n){return Qt(n)===void 0&&!Ic(n)}function Ws(n,e){ue(n.node.children,(t,s)=>{e(new Mr(t,n,s))})}function Cc(n,e,t,s){t&&e(n),Ws(n,i=>{Cc(i,e,!0)})}function i_(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Hn(n){return new z(n.parent===null?n.name:Hn(n.parent)+"/"+n.name)}function Bi(n){n.parent!==null&&r_(n.parent,n.name,n)}function r_(n,e,t){const s=s_(t),i=Le(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Bi(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Bi(n))}/**
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
 */const o_=/[\[\].#$\/\u0000-\u001F\u007F]/,a_=/[\[\].#$\u0000-\u001F\u007F]/,fi=10*1024*1024,Fr=function(n){return typeof n=="string"&&n.length!==0&&!o_.test(n)},Tc=function(n){return typeof n=="string"&&n.length!==0&&!a_.test(n)},l_=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Tc(n)},c_=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!ur(n)||n&&typeof n=="object"&&Le(n,".sv")},u_=function(n,e,t,s){$s(As(n,"value"),e,t)},$s=function(n,e,t){const s=t instanceof z?new Tg(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+dt(s));if(typeof e=="function")throw new Error(n+"contains a function "+dt(s)+" with contents = "+e.toString());if(ur(e))throw new Error(n+"contains "+e.toString()+" "+dt(s));if(typeof e=="string"&&e.length>fi/3&&Ns(e)>fi)throw new Error(n+"contains a string greater than "+fi+" utf8 bytes "+dt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ue(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Fr(o)))throw new Error(n+" contains an invalid key ("+o+") "+dt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Sg(s,o),$s(n,a,s),xg(s)}),i&&r)throw new Error(n+' contains ".value" child '+dt(s)+" in addition to actual children.")}},d_=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=In(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Fr(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Cg);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&Ie(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},h_=function(n,e,t,s){const i=As(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];ue(e,(o,a)=>{const l=new z(o);if($s(i,a,X(t,l)),gr(l)===".priority"&&!c_(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),d_(i,r)},Sc=function(n,e,t,s){if(!Tc(t))throw new Error(As(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},f_=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Sc(n,e,t)},xc=function(n,e){if(F(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},p_=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Fr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!l_(t))throw new Error(As(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class g_{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Hs(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!mr(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function kc(n,e,t){Hs(n,t),Rc(n,s=>mr(s,e))}function Te(n,e,t){Hs(n,t),Rc(n,s=>Ie(s,e)||Ie(e,s))}function Rc(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(m_(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function m_(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();hn&&ce("event: "+t.toString()),Kt(s)}}}/**
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
 */const __="repo_interrupt",y_=25;class v_{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new g_,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=vs(),this.transactionQueueTree_=new Mr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function w_(n,e,t){if(n.stats_=fr(n.repoInfo_),n.forceRestClient_||Yp())n.server_=new ys(n.repoInfo_,(s,i,r,o)=>{na(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>sa(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{se(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new $e(n.repoInfo_,e,(s,i,r,o)=>{na(n,s,i,r,o)},s=>{sa(n,s)},s=>{E_(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=eg(n.repoInfo_,()=>new em(n.stats_,n.server_)),n.infoData_=new Yg,n.infoSyncTree_=new ea({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=$n(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),jr(n,"connected",!1),n.serverSyncTree_=new ea({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Te(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function b_(n){const t=n.infoData_.getNode(new z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Vs(n){return e_({timestamp:b_(n)})}function na(n,e,t,s,i){n.dataUpdateCount++;const r=new z(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=rs(t,c=>ne(c));o=Km(n.serverSyncTree_,r,l,i)}else{const l=ne(t);o=mc(n.serverSyncTree_,r,l,i)}else if(s){const l=rs(t,c=>ne(c));o=zm(n.serverSyncTree_,r,l)}else{const l=ne(t);o=$n(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ht(n,r)),Te(n.eventQueue_,a,o)}function sa(n,e){jr(n,"connected",e),e===!1&&S_(n)}function E_(n,e){ue(e,(t,s)=>{jr(n,t,s)})}function jr(n,e,t){const s=new z("/.info/"+e),i=ne(t);n.infoData_.updateSnapshot(s,i);const r=$n(n.infoSyncTree_,s,i);Te(n.eventQueue_,s,r)}function Ur(n){return n.nextWriteId_++}function I_(n,e,t){const s=Ym(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=ne(i).withIndex(e._queryParams.getIndex());Ui(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=$n(n.serverSyncTree_,e._path,r);else{const a=kn(n.serverSyncTree_,e);o=mc(n.serverSyncTree_,e._path,r,a)}return Te(n.eventQueue_,e._path,o),xs(n.serverSyncTree_,e,t,null,!0),r},i=>(Vn(n,"get for query "+se(e)+" failed: "+i),Promise.reject(new Error(i))))}function C_(n,e,t,s,i){Vn(n,"set",{path:e.toString(),value:t,priority:s});const r=Vs(n),o=ne(t,s),a=kr(n.serverSyncTree_,e),l=bc(o,a,r),c=Ur(n),u=gc(n.serverSyncTree_,e,l,c,!0);Hs(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(f,p)=>{const m=f==="ok";m||me("set at "+e+" failed: "+f);const b=Xe(n.serverSyncTree_,c,!m);Te(n.eventQueue_,e,b),$i(n,i,f,p)});const h=Wr(n,e);Ht(n,h),Te(n.eventQueue_,h,[])}function T_(n,e,t,s){Vn(n,"update",{path:e.toString(),value:t});let i=!0;const r=Vs(n),o={};if(ue(t,(a,l)=>{i=!1,o[a]=wc(X(e,a),ne(l),n.serverSyncTree_,r)}),i)ce("update() called with empty data.  Don't do anything."),$i(n,s,"ok",void 0);else{const a=Ur(n),l=Vm(n.serverSyncTree_,e,o,a);Hs(n.eventQueue_,l),n.server_.merge(e.toString(),t,(c,u)=>{const h=c==="ok";h||me("update at "+e+" failed: "+c);const f=Xe(n.serverSyncTree_,a,!h),p=f.length>0?Ht(n,e):e;Te(n.eventQueue_,p,f),$i(n,s,c,u)}),ue(t,c=>{const u=Wr(n,X(e,c));Ht(n,u)}),Te(n.eventQueue_,e,[])}}function S_(n){Vn(n,"onDisconnectEvents");const e=Vs(n),t=vs();Oi(n.onDisconnect_,$(),(i,r)=>{const o=wc(i,r,n.serverSyncTree_,e);ec(t,i,o)});let s=[];Oi(t,$(),(i,r)=>{s=s.concat($n(n.serverSyncTree_,i,r));const o=Wr(n,i);Ht(n,o)}),n.onDisconnect_=vs(),Te(n.eventQueue_,$(),s)}function x_(n,e,t){let s;F(e._path)===".info"?s=Ui(n.infoSyncTree_,e,t):s=Ui(n.serverSyncTree_,e,t),kc(n.eventQueue_,e._path,s)}function Wi(n,e,t){let s;F(e._path)===".info"?s=xs(n.infoSyncTree_,e,t):s=xs(n.serverSyncTree_,e,t),kc(n.eventQueue_,e._path,s)}function k_(n){n.persistentConnection_&&n.persistentConnection_.interrupt(__)}function Vn(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ce(t,...e)}function $i(n,e,t,s){e&&Kt(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Ac(n,e,t){return kr(n.serverSyncTree_,e,t)||R.EMPTY_NODE}function Br(n,e=n.transactionQueueTree_){if(e||zs(n,e),Qt(e)){const t=Pc(n,e);y(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&R_(n,Hn(e),t)}else Ic(e)&&Ws(e,t=>{Br(n,t)})}function R_(n,e,t){const s=t.map(c=>c.currentWriteId),i=Ac(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];y(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=ge(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{Vn(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<t.length;f++)t[f].status=2,u=u.concat(Xe(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&h.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();zs(n,Lr(n.transactionQueueTree_,e)),Br(n,n.transactionQueueTree_),Te(n.eventQueue_,e,u);for(let f=0;f<h.length;f++)Kt(h[f])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{me("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}Ht(n,e)}},o)}function Ht(n,e){const t=Nc(n,e),s=Hn(t),i=Pc(n,t);return A_(n,i,s),s}function A_(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ge(t,l.path);let u=!1,h;if(y(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Xe(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=y_)u=!0,h="maxretry",i=i.concat(Xe(n.serverSyncTree_,l.currentWriteId,!0));else{const f=Ac(n,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){$s("transaction failed: Data returned ",p,l.path);let m=ne(p);typeof p=="object"&&p!=null&&Le(p,".priority")||(m=m.updatePriority(f.getPriority()));const _=l.currentWriteId,M=Vs(n),H=bc(m,f,M);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=H,l.currentWriteId=Ur(n),o.splice(o.indexOf(_),1),i=i.concat(gc(n.serverSyncTree_,l.path,H,l.currentWriteId,l.applyLocally)),i=i.concat(Xe(n.serverSyncTree_,_,!0))}else u=!0,h="nodata",i=i.concat(Xe(n.serverSyncTree_,l.currentWriteId,!0))}Te(n.eventQueue_,t,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}zs(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)Kt(s[a]);Br(n,n.transactionQueueTree_)}function Nc(n,e){let t,s=n.transactionQueueTree_;for(t=F(e);t!==null&&Qt(s)===void 0;)s=Lr(s,t),e=q(e),t=F(e);return s}function Pc(n,e){const t=[];return Oc(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Oc(n,e,t){const s=Qt(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Ws(e,i=>{Oc(n,i,t)})}function zs(n,e){const t=Qt(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Ec(e,t.length>0?t:void 0)}Ws(e,s=>{zs(n,s)})}function Wr(n,e){const t=Hn(Nc(n,e)),s=Lr(n.transactionQueueTree_,e);return i_(s,i=>{pi(n,i)}),pi(n,s),Cc(s,i=>{pi(n,i)}),t}function pi(n,e){const t=Qt(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(y(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(y(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Xe(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ec(e,void 0):t.length=r+1,Te(n.eventQueue_,Hn(e),i);for(let o=0;o<s.length;o++)Kt(s[o])}}/**
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
 */function N_(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function P_(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):me(`Invalid query segment '${t}' in query '${n}'`)}return e}const ia=function(n,e){const t=O_(n),s=t.namespace;t.domain==="firebase.com"&&Ve(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Ve("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Bp();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Fl(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new z(t.pathString)}},O_=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=N_(n.substring(u,h)));const f=P_(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),t=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class D_{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+se(this.snapshot.exportVal())}}class M_{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Dc{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return y(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Gs{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return U(this._path)?null:gr(this._path)}get ref(){return new Ge(this._repo,this._path)}get _queryIdentifier(){const e=Vo(this._queryParams),t=dr(e);return t==="{}"?"default":t}get _queryObject(){return Vo(this._queryParams)}isEqual(e){if(e=ee(e),!(e instanceof Gs))return!1;const t=this._repo===e._repo,s=mr(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ig(this._path)}}class Ge extends Gs{constructor(e,t){super(e,t,new wr,!1)}get parent(){const e=Gl(this._path);return e===null?null:new Ge(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Rn{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new z(e),s=Hi(this.ref,e);return new Rn(this._node.getChild(t),s,Z)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Rn(i,Hi(this.ref,s),Z)))}hasChild(e){const t=new z(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function B(n,e){return n=ee(n),n._checkNotDeleted("ref"),e!==void 0?Hi(n._root,e):n._root}function Hi(n,e){return n=ee(n),F(n._path)===null?f_("child","path",e):Sc("child","path",e),new Ge(n._repo,X(n._path,e))}function Pe(n){return xc("remove",n._path),_n(n,null)}function _n(n,e){n=ee(n),xc("set",n._path),u_("set",e,n._path);const t=new On;return C_(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function ae(n,e){h_("update",e,n._path);const t=new On;return T_(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function xt(n){n=ee(n);const e=new Dc(()=>{}),t=new qs(e);return I_(n._repo,n,t).then(s=>new Rn(s,new Ge(n._repo,n._path),n._queryParams.getIndex()))}class qs{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new D_("value",this,new Rn(e.snapshotNode,new Ge(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new M_(this,e,t):null}matches(e){return e instanceof qs?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function L_(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=t,c=(u,h)=>{Wi(n._repo,n,a),l(u,h)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new Dc(t,r||void 0),a=new qs(o);return x_(n._repo,n,a),()=>Wi(n._repo,n,a)}function ye(n,e,t,s){return L_(n,"value",e,t,s)}function ra(n,e,t){Wi(n._repo,n,null)}class F_{}class j_ extends F_{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Gs(e._repo,e._path,Kg(e._queryParams,this._limit),e._orderByCalled)}}function vy(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new j_(n)}function wy(n,...e){let t=ee(n);for(const s of e)t=s._apply(t);return t}Lm(Ge);Wm(Ge);/**
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
 */const U_="FIREBASE_DATABASE_EMULATOR_HOST",Vi={};let B_=!1;function W_(n,e,t,s){n.repoInfo_=new Fl(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function $_(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Ve("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ce("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=ia(r,i),a=o.repoInfo,l;typeof process<"u"&&So&&(l=So[U_]),l?(r=`http://${l}?ns=${a.namespace}`,o=ia(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new Jp(n.name,n.options,e);p_("Invalid Firebase Database URL",o),U(o.path)||Ve("Database URL must point to the root of a Firebase Database (not including a child path).");const u=V_(a,n,c,new Qp(n.name,t));return new z_(u,n)}function H_(n,e){const t=Vi[e];(!t||t[n.key]!==n)&&Ve(`Database ${e}(${n.repoInfo_}) has already been deleted.`),k_(n),delete t[n.key]}function V_(n,e,t,s){let i=Vi[e.name];i||(i={},Vi[e.name]=i);let r=i[n.toURLString()];return r&&Ve("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new v_(n,B_,t,s),i[n.toURLString()]=r,r}class z_{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(w_(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ge(this._repo,$())),this._rootInternal}_delete(){return this._rootInternal!==null&&(H_(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ve("Cannot call "+e+" on a deleted database.")}}function G_(n=Ua(),e){const t=Zi(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Xu("database");s&&q_(t,...s)}return t}function q_(n,e,t,s={}){n=ee(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Ve("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Ve('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new ns(ns.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Zu(s.mockUserToken,n.app.options.projectId);r=new ns(o)}W_(i,e,t,r)}/**
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
 */function K_(n){Dp(Gt),Ft(new gt("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return $_(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),tt(xo,ko,n),tt(xo,ko,"esm2017")}$e.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};$e.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};K_();const Y_={apiKey:"AIzaSyCr81IrmH5LQedoRSQHorEjK5-sWMdVf_k",authDomain:"better-wrodle.firebaseapp.com",projectId:"better-wrodle",storageBucket:"better-wrodle.firebasestorage.app",messagingSenderId:"445700190808",appId:"1:445700190808:web:c4da4d756ac143583f102d",databaseURL:"https://better-wrodle-default-rtdb.firebaseio.com"},Mc=ja(Y_),S=Np(Mc),W=G_(Mc),oa=new je;function zn(){const[n,e]=g.useState(null),[t,s]=g.useState(!0),[i,r]=g.useState(null),[o,a]=g.useState([]),[l,c]=g.useState([]),[u,h]=g.useState([]),[f,p]=g.useState([]);g.useEffect(()=>{let v=null,E=null,I=null,D=null;const L=_f(S,C=>{if(v&&(v(),v=null),E&&(E(),E=null),I&&(I(),I=null),e(C),C){const K=(C.providerData||[]).some(we=>we&&we.providerId==="password"),Y=!!C.displayName;if(K&&!Y){const ct=`better-wordle-player-${Math.floor(Math.random()*1e3).toString().padStart(3,"0")}`;mo(C,{displayName:ct}).then(()=>{e({...C,displayName:ct})}).catch(Jt=>{console.error("Failed to assign default username:",Jt)})}}if(C){if(!(C.emailVerified||(C.providerData||[]).some(he=>he.providerId==="google.com"))){a([]),c([]),h([]),p([]),s(!1),r(null);return}const Y=B(W,`users/${C.uid}/friends`);v=ye(Y,he=>{if(he.exists()){const Se=he.val(),be=Object.entries(Se).map(([_e,te])=>({id:_e,...te}));a(be)}else a([])});const we=B(W,`users/${C.uid}/friendRequests`);E=ye(we,he=>{if(he.exists()){const Se=he.val(),be=Object.entries(Se).map(([_e,te])=>({id:_e,...te}));c(be)}else c([])});const ct=B(W,`users/${C.uid}/challenges`);I=ye(ct,he=>{if(he.exists()){const Se=he.val(),be=Object.entries(Se).map(([_e,te])=>({id:_e,...te}));be.sort((_e,te)=>{const Ys=_e.createdAt||_e.sentAt||0;return(te.createdAt||te.sentAt||0)-Ys}),h(be)}else h([])});const Jt=B(W,`users/${C.uid}/sentChallenges`);D=ye(Jt,he=>{if(he.exists()){const Se=he.val(),be=Object.entries(Se).map(([_e,te])=>({id:_e,...te}));be.sort((_e,te)=>{const Ys=_e.createdAt||_e.sentAt||0;return(te.createdAt||te.sentAt||0)-Ys}),p(be)}else p([])}),s(!1),r(null)}else a([]),c([]),h([]),p([]),s(!1),r(null)});return()=>{v&&v(),E&&E(),I&&I(),D&&D(),L()}},[]);const m=g.useCallback(async()=>{var v;try{return r(null),s(!0),(await Uf(S,oa)).user}catch(E){if(E.code==="auth/account-exists-with-different-credential"){const I=((v=E.customData)==null?void 0:v.email)||E.email||null,D="An account with this email already exists. Please sign in with email and password, then link Google from your Profile.";try{if(I&&!(await ff(S,I)).includes("password"))throw r(E.message),E}catch(C){console.error("Error handling account-exists-with-different-credential:",C)}const L=new Error(D);throw L.code=E.code,I&&(L.email=I),r(L.message),L}throw r(E.message),E}finally{s(!1)}},[]),b=g.useCallback(async(v,E)=>{try{r(null),s(!0);const I=await uf(S,v,E);try{await go(I.user)}catch(D){console.error("Failed to send verification email:",D)}return I.user}catch(I){throw r(I.message),I}finally{s(!1)}},[]),_=g.useCallback(async(v,E)=>{try{return r(null),s(!0),(await df(S,v,E)).user}catch(I){throw r(I.message),I}finally{s(!1)}},[]),M=g.useCallback(async()=>{try{r(null),await yf(S)}catch(v){throw r(v.message),v}},[]),H=g.useCallback(async v=>{try{if(r(null),!S.currentUser)throw new Error("No user signed in");return await mo(S.currentUser,{displayName:v}),e({...S.currentUser,displayName:v}),!0}catch(E){throw r(E.message),E}},[]),J=g.useCallback(async(v,E)=>{try{if(r(null),!S.currentUser)throw new Error("No user signed in");if(!(S.currentUser.emailVerified||(S.currentUser.providerData||[]).some(L=>L.providerId==="google.com")))throw new Error("You must verify your email or sign in with Google to use friends.");const D=B(W,`users/${E}/friendRequests/${S.currentUser.uid}`);return await _n(D,{from:S.currentUser.uid,fromName:S.currentUser.displayName||"Unknown",sentAt:new Date().toISOString()}),!0}catch(I){throw console.error("sendFriendRequest error:",I),r(I.message),I}},[]),de=g.useCallback(async(v,E)=>{try{if(r(null),!S.currentUser)throw new Error("No user signed in");if(!(S.currentUser.emailVerified||(S.currentUser.providerData||[]).some(Y=>Y.providerId==="google.com")))throw new Error("You must verify your email or sign in with Google to use friends.");const D=new Date().toISOString(),L=B(W,`users/${S.currentUser.uid}/friends/${v}`);await _n(L,{name:E,addedAt:D});const C=B(W,`users/${v}/friends/${S.currentUser.uid}`);await _n(C,{name:S.currentUser.displayName||"Unknown",addedAt:D});const K=B(W,`users/${S.currentUser.uid}/friendRequests/${v}`);return await Pe(K),c(Y=>Y.filter(we=>we.id!==v)),a(Y=>Y.some(we=>we.id===v)?Y:[...Y,{id:v,name:E,addedAt:D}]),!0}catch(I){throw r(I.message),I}},[]),oe=g.useCallback(async(v,E=null,I=null)=>{try{if(r(null),!S.currentUser)throw new Error("No user signed in");if(!(S.currentUser.emailVerified||(S.currentUser.providerData||[]).some(C=>C.providerId==="google.com")))throw new Error("You must verify your email or sign in with Google to use friends.");const L=B(W,`users/${S.currentUser.uid}/friendRequests/${v}`);if(await Pe(L),E&&typeof I=="function")try{await I(E,"declined")}catch(C){console.error("Failed to update 1v1 friendRequestStatus:",C)}return!0}catch(D){throw r(D.message),D}},[]),w=g.useCallback(async v=>{try{if(r(null),!S.currentUser)throw new Error("No user signed in");if(!(S.currentUser.emailVerified||(S.currentUser.providerData||[]).some(L=>L.providerId==="google.com")))throw new Error("You must verify your email or sign in with Google to use friends.");const I=B(W,`users/${S.currentUser.uid}/friends/${v}`);await Pe(I);const D=B(W,`users/${v}/friends/${S.currentUser.uid}`);return await Pe(D),a(L=>L.filter(C=>C.id!==v)),!0}catch(E){throw r(E.message),E}},[]),x=g.useCallback(async(v,E,I,D,L)=>{try{if(r(null),!S.currentUser)throw new Error("No user signed in");if(!(S.currentUser.emailVerified||(S.currentUser.providerData||[]).some(be=>be.providerId==="google.com")))throw new Error("You must verify your email or sign in with Google to use friends.");const K=S.currentUser.uid,Y=S.currentUser.displayName||S.currentUser.email||"Unknown",we=B(W,`users/${K}/challenges`),ct=await xt(we);if(ct.exists()){const be=ct.val();if(Object.values(be).some(te=>te&&te.fromUserId===v&&(te.status==="pending"||te.status===void 0||te.status===null)))return!1}const Jt=Date.now(),he={fromUserId:K,fromUserName:Y,toUserId:v,toUserName:E,gameCode:I,boards:D,speedrun:!!L,status:"pending",createdAt:Jt},Se={};return Se[`users/${v}/challenges/${I}`]=he,Se[`users/${K}/sentChallenges/${I}`]=he,await ae(B(W),Se),!0}catch(C){throw console.error("sendChallenge error:",C),r(C.message),C}},[]),P=g.useCallback(async v=>{try{if(r(null),!S.currentUser)throw new Error("No user signed in");const E=B(W,`users/${S.currentUser.uid}/challenges/${v}`),I=await xt(E);if(!I.exists())throw new Error("Challenge not found");const D=I.val();return await Pe(E),D}catch(E){throw console.error("acceptChallenge error:",E),r(E.message),E}},[]),T=g.useCallback(async(v,E=null)=>{try{if(r(null),!S.currentUser)throw new Error("No user signed in");const I=B(W,`users/${S.currentUser.uid}/challenges/${v}`),D=await xt(I);let L=null,C=E||v;if(D.exists()){const K=D.val();L=K.fromUserId||null,C||(C=K.gameCode||v)}if(await Pe(I),L&&C)try{const K=B(W,`users/${L}/sentChallenges/${C}`);await Pe(K)}catch(K){console.error("Failed to remove challenge from sender's sentChallenges after dismiss:",K)}if(C)try{const K=B(W,`onevone/${C}`);if((await xt(K)).exists()){const we=S.currentUser.displayName||S.currentUser.email||"Your friend";await ae(K,{status:"cancelled",cancelledByName:we})}}catch(K){console.error("Failed to mark 1v1 game as cancelled after dismissing challenge:",K)}return!0}catch(I){throw console.error("dismissChallenge error:",I),r(I.message),I}},[]),A=g.useCallback(async v=>{try{if(r(null),!S.currentUser)throw new Error("No user signed in");const E=S.currentUser.uid,I=B(W,`users/${E}/sentChallenges/${v}`),D=await xt(I);let L=null;if(D.exists()){const C=D.val();L=C.toUserId||C.friendId||null}if(await Pe(I),L)try{const C=B(W,`users/${L}/challenges/${v}`);await Pe(C)}catch(C){console.error("Failed to remove incoming challenge after host cancelled sent challenge:",C)}try{const C=B(W,`onevone/${v}`);if((await xt(C)).exists()){const Y=S.currentUser.displayName||S.currentUser.email||"You";await ae(C,{status:"cancelled",cancelledByName:Y})}}catch(C){console.error("Failed to mark 1v1 game as cancelled after host cancelled sent challenge:",C)}return!0}catch(E){throw console.error("cancelSentChallenge error:",E),r(E.message),E}},[]),k=!!n&&(n.emailVerified||(n.providerData||[]).some(v=>v.providerId==="google.com")),O=g.useCallback(async()=>{try{if(r(null),!S.currentUser)throw new Error("No user signed in");return await go(S.currentUser),!0}catch(v){throw r(v.message),v}},[]),Q=g.useCallback(async()=>{try{if(r(null),!S.currentUser)throw new Error("No user signed in");return await Bf(S.currentUser,oa),e(S.currentUser),!0}catch(v){throw v.code==="auth/credential-already-in-use"||v.code==="auth/provider-already-linked"?r("Google account is already linked."):r(v.message),v}},[]);return{user:n,loading:t,error:i,friends:o,friendRequests:l,incomingChallenges:u,sentChallenges:f,isVerifiedUser:k,signInWithGoogle:m,signUpWithEmail:b,signInWithEmail:_,signOut:M,updateUsername:H,sendFriendRequest:J,acceptFriendRequest:de,declineFriendRequest:oe,removeFriend:w,sendChallenge:x,acceptChallenge:P,dismissChallenge:T,cancelSentChallenge:A,resendVerificationEmail:O,linkGoogleAccount:Q}}const Lc=pe.memo(function({isOpen:e,onRequestClose:t,onSignUpComplete:s}){const[i,r]=g.useState(!1),[o,a]=g.useState(""),[l,c]=g.useState(""),[u,h]=g.useState(""),{signInWithGoogle:f,signUpWithEmail:p,signInWithEmail:m,loading:b}=zn(),_=g.useCallback(async()=>{try{h(""),await f(),t()}catch(w){h(w.message||"Failed to sign in with Google")}},[f,t]),M=g.useCallback(async w=>{if(w.preventDefault(),h(""),!o||!l){h("Please enter both email and password");return}try{i?(await p(o,l),s&&s(o)):await m(o,l),t(),a(""),c("")}catch(x){h(x.message||`Failed to ${i?"sign up":"sign in"}`)}},[i,o,l,p,m,t,s]),H=g.useCallback(()=>{a(""),c(""),h(""),r(!1),t()},[t]),J=g.useCallback(()=>{r(w=>!w),h("")},[]),de=g.useCallback(w=>a(w.target.value),[]),oe=g.useCallback(w=>c(w.target.value),[]);return e?d.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.75)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e4,padding:"20px"},onClick:H,children:d.jsxs("div",{style:{backgroundColor:"#1a1a1b",borderRadius:"12px",padding:"32px",maxWidth:"400px",width:"100%",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.5)",position:"relative"},onClick:w=>w.stopPropagation(),children:[d.jsxs("div",{style:{marginBottom:"24px"},children:[d.jsx("h2",{style:{margin:0,marginBottom:"8px",fontSize:"24px",fontWeight:"bold",color:"#ffffff"},children:i?"Create Account":"Sign In"}),d.jsx("p",{style:{margin:0,fontSize:"14px",color:"#d7dadc"},children:i?"Create an account to sync your progress":"Sign in to access your account"})]}),u&&d.jsx("div",{style:{padding:"12px",marginBottom:"16px",backgroundColor:"#3a1f1f",border:"1px solid #8b3a3a",borderRadius:"6px",color:"#ff6b6b",fontSize:"14px"},children:u}),d.jsxs("button",{onClick:_,disabled:b,style:{width:"100%",padding:"12px",marginBottom:"16px",backgroundColor:"#4285f4",border:"none",borderRadius:"6px",color:"#ffffff",fontSize:"16px",fontWeight:"bold",cursor:b?"not-allowed":"pointer",opacity:b?.6:1,display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[d.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:[d.jsx("path",{d:"M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z",fill:"#4285F4"}),d.jsx("path",{d:"M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z",fill:"#34A853"}),d.jsx("path",{d:"M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957C.348 6.175 0 7.55 0 9s.348 2.825.957 4.039l3.007-2.332z",fill:"#FBBC05"}),d.jsx("path",{d:"M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 7.293C4.672 5.163 6.656 3.58 9 3.58z",fill:"#EA4335"})]}),b?"Signing in...":"Continue with Google"]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"16px"},children:[d.jsx("div",{style:{flex:1,height:"1px",backgroundColor:"#3a3a3c"}}),d.jsx("span",{style:{padding:"0 12px",color:"#818384",fontSize:"14px"},children:"or"}),d.jsx("div",{style:{flex:1,height:"1px",backgroundColor:"#3a3a3c"}})]}),d.jsxs("form",{onSubmit:M,children:[d.jsx("div",{style:{marginBottom:"16px"},children:d.jsx("input",{type:"email",placeholder:"Email",value:o,onChange:de,disabled:b,style:{width:"100%",padding:"12px",backgroundColor:"#121213",border:"1px solid #3a3a3c",borderRadius:"6px",color:"#ffffff",fontSize:"16px",boxSizing:"border-box"}})}),d.jsx("div",{style:{marginBottom:"20px"},children:d.jsx("input",{type:"password",placeholder:"Password",value:l,onChange:oe,disabled:b,style:{width:"100%",padding:"12px",backgroundColor:"#121213",border:"1px solid #3a3a3c",borderRadius:"6px",color:"#ffffff",fontSize:"16px",boxSizing:"border-box"}})}),d.jsx("button",{type:"submit",disabled:b,className:"homeBtn homeBtnGreen homeBtnLg"+(b?" homeBtnNeutral":""),style:{width:"100%",marginBottom:"12px",cursor:b?"not-allowed":"pointer",opacity:b?.8:1},children:b?"Please wait...":i?"Create Account":"Sign In"})]}),d.jsx("div",{style:{textAlign:"center"},children:d.jsx("button",{onClick:J,disabled:b,style:{background:"none",border:"none",color:"#6aaa64",cursor:b?"not-allowed":"pointer",fontSize:"14px",textDecoration:"underline"},children:i?"Already have an account? Sign in":"Don't have an account? Sign up"})}),d.jsx("button",{onClick:H,style:{position:"absolute",top:"16px",right:"16px",background:"none",border:"none",color:"#818384",fontSize:"24px",cursor:"pointer",padding:"0",width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center"},children:"×"})]})}):null}),Q_=Array.from({length:32},(n,e)=>e+1);function J_({isOpen:n,onRequestClose:e,showConfigFirst:t=!1,onConfigClose:s,onConfigOpen:i}){const r=Nn(),{user:o,isVerifiedUser:a}=zn(),[l,c]=g.useState(!1),[u,h]=g.useState(""),[f,p]=g.useState(""),[m,b]=g.useState(t),[_,M]=g.useState(1),[H,J]=g.useState(!1),de=g.useCallback(()=>{b(!0),i==null||i()},[i]),oe=g.useCallback(()=>{r(`/game?mode=1v1&host=true&speedrun=${H}&boards=${_}`),b(!1),s==null||s(),e()},[r,e,H,_,s]),w=g.useCallback(()=>{if(!u||u.length!==6){p("Please enter a valid 6-digit game code");return}r(`/game?mode=1v1&code=${u}`),e()},[u,r,e]);return o?a?d.jsxs(d.Fragment,{children:[d.jsx(Oe,{isOpen:n&&!m,onRequestClose:e,disableAutoFocus:!0,children:d.jsxs("div",{style:{padding:"24px"},children:[d.jsx("h2",{style:{margin:0,marginBottom:"24px",fontSize:20,fontWeight:"bold",color:"#ffffff"},children:"1v1 Mode"}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[d.jsxs("div",{children:[d.jsx("button",{onClick:de,className:"homeBtn homeBtnGreen homeBtnLg",style:{width:"100%"},children:"Host"}),d.jsx("p",{style:{fontSize:12,color:"#818384",marginTop:"8px",textAlign:"center"},children:"Create a new game and share the code with a friend"})]}),d.jsxs("div",{style:{borderTop:"1px solid #3a3a3c",paddingTop:"20px"},children:[d.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#d7dadc",fontSize:14},children:"Enter Game Code:"}),d.jsx("input",{type:"text",value:u,onChange:x=>{const P=x.target.value.replace(/\D/g,"").slice(0,6);h(P),p("")},placeholder:"000000",maxLength:6,style:{width:"100%",padding:"12px",borderRadius:6,border:`1px solid ${f?"#f06272":"#3a3a3c"}`,background:"#1a1a1b",color:"#ffffff",fontSize:18,textAlign:"center",letterSpacing:"4px",fontFamily:"monospace",marginBottom:"8px"}}),f&&d.jsx("div",{style:{color:"#f06272",fontSize:12,marginBottom:"12px",textAlign:"center"},children:f}),d.jsx("button",{onClick:w,disabled:u.length!==6,className:"homeBtn homeBtnLg "+(u.length===6?"homeBtnGold":"homeBtnNeutral"),style:{width:"100%",opacity:u.length===6?1:.75,cursor:u.length===6?"pointer":"not-allowed"},children:"Join"})]})]})]})}),d.jsx(Oe,{isOpen:n&&m,onRequestClose:()=>{b(!1),s==null||s()},children:d.jsxs("div",{style:{padding:"24px"},children:[d.jsx("h2",{style:{margin:0,marginBottom:"24px",fontSize:20,fontWeight:"bold",color:"#ffffff"},children:"1v1 Game Configuration"}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[d.jsxs("div",{children:[d.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#d7dadc",fontSize:14},children:"Number of Boards"}),d.jsx("select",{value:_,onChange:x=>M(parseInt(x.target.value,10)),style:{width:"100%",padding:"10px",borderRadius:6,border:"1px solid #3a3a3c",background:"#1a1a1b",color:"#ffffff",fontSize:14,cursor:"pointer"},children:Q_.map(x=>d.jsx("option",{value:x,children:x},x))})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[d.jsx("input",{type:"checkbox",id:"onevone-config-speedrun-host",checked:H,onChange:x=>J(x.target.checked),style:{cursor:"pointer",width:"18px",height:"18px"}}),d.jsx("label",{htmlFor:"onevone-config-speedrun-host",style:{color:"#d7dadc",fontSize:14,cursor:"pointer",margin:0},children:"Speedrun Mode (Unlimited guesses, timed)"})]}),d.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"12px"},children:[d.jsx("button",{onClick:()=>{b(!1),s==null||s()},className:"homeBtn homeBtnOutline homeBtnLg",style:{flex:1,textAlign:"center"},children:"Cancel"}),d.jsx("button",{onClick:oe,className:"homeBtn homeBtnGreen homeBtnLg",style:{flex:1,textAlign:"center"},children:"Continue"})]})]})]})})]}):d.jsx(Oe,{isOpen:n,onRequestClose:e,children:d.jsxs("div",{style:{padding:"24px"},children:[d.jsx("h2",{style:{margin:0,marginBottom:"16px",fontSize:20,fontWeight:"bold",color:"#ffffff"},children:"Verify your email"}),d.jsx("p",{style:{marginBottom:"20px",color:"#d7dadc",fontSize:14},children:"You must verify your email address or sign in with Google to play 1v1."}),d.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"12px"},children:[d.jsx("button",{onClick:e,className:"homeBtn homeBtnOutline homeBtnLg",style:{flex:1,textAlign:"center"},children:"Close"}),d.jsx("button",{onClick:()=>{e(),r("/profile")},className:"homeBtn homeBtnGreen homeBtnLg",style:{flex:1,textAlign:"center"},children:"Go to Profile"})]})]})}):d.jsxs(d.Fragment,{children:[d.jsx(Oe,{isOpen:n,onRequestClose:e,children:d.jsxs("div",{style:{padding:"24px"},children:[d.jsx("h2",{style:{margin:0,marginBottom:"16px",fontSize:20,fontWeight:"bold",color:"#ffffff"},children:"1v1 Mode"}),d.jsxs("div",{style:{textAlign:"center",padding:"20px 0"},children:[d.jsx("p",{style:{marginBottom:"20px",color:"#d7dadc"},children:"You need to sign in to play 1v1 mode."}),d.jsx("button",{onClick:()=>c(!0),className:"homeBtn homeBtnGreen homeBtnLg",style:{minWidth:140},children:"Sign In"})]})]})}),d.jsx(Lc,{isOpen:l,onRequestClose:()=>c(!1)})]})}function X_(){const[n,e]=g.useState("");return g.useEffect(()=>{const t=()=>{const i=new Date,r=new Date(i);r.setDate(r.getDate()+1),r.setHours(0,0,0,0);const o=r-i,a=Math.floor(o/(1e3*60*60)),l=Math.floor(o%(1e3*60*60)/(1e3*60)),c=Math.floor(o%(1e3*60)/1e3);a>0?e(`${a}h ${l}m`):l>0?e(`${l}m ${c}s`):e(`${c}s`)};t();const s=setInterval(t,1e3);return()=>clearInterval(s)},[]),n}function Z_(){return Math.floor(1e5+Math.random()*9e5).toString()}function ey(n=null,e=!1,t=!1){const[s,i]=g.useState(null),[r,o]=g.useState(null),[a,l]=g.useState(!1),c=g.useRef(null),u=S.currentUser;g.useEffect(()=>()=>{c.current&&(ra(c.current),c.current=null)},[]),g.useEffect(()=>{if(!n)return;const w=`onevone/${n}`,x=B(W,w);return c.current=x,l(!0),ye(x,P=>{const T=P.val();i(T),l(!1),o(null)},P=>{o(P.message),l(!1)}),()=>{ra(x)}},[n]);const h=g.useCallback(async(w={})=>{if(!u)throw new Error("User must be signed in to host a game");const x=Object.prototype.hasOwnProperty.call(w,"speedrun")?!!w.speedrun:!!t,P=Z_(),T=`onevone/${P}`,A={hostId:u.uid,hostName:u.displayName||u.email||"Player 1",hostReady:!1,guestId:null,guestName:null,guestReady:!1,status:"waiting",currentTurn:null,solution:null,hostGuesses:[],guestGuesses:[],hostColors:[],guestColors:[],winner:null,speedrun:x,hostTimeMs:null,guestTimeMs:null,hostStartTime:null,guestStartTime:null,hostRematch:!1,guestRematch:!1,createdAt:Date.now(),startedAt:null};try{return await _n(B(W,T),A),P}catch(k){throw o(k.message),k}},[u,t]),f=g.useCallback(async w=>{if(!u)throw new Error("User must be signed in to join a game");const x=`onevone/${w}`,P=B(W,x);try{const T=await new Promise((k,O)=>{ye(P,k,O,{onlyOnce:!0})});if(!T.exists())throw new Error("Game code not found");const A=T.val();if(A.hostId===u.uid||A.guestId===u.uid)return w;if(A.status!=="waiting")throw new Error("Game has already started");if(A.guestId&&A.guestId!==u.uid)throw new Error("Game is full");return await ae(P,{guestId:u.uid,guestName:u.displayName||u.email||"Player 2"}),w}catch(T){throw o(T.message),T}},[u]),p=g.useCallback(async(w,x=!0)=>{if(!u)throw new Error("User must be signed in");const P=`onevone/${w}`,T=B(W,P);try{const A=await new Promise((Q,v)=>{ye(T,Q,v,{onlyOnce:!0})});if(!A.exists())throw new Error("Game not found");const k=A.val();k.hostId===u.uid?await ae(T,{hostReady:x}):await ae(T,{guestReady:x}),x&&k.hostReady&&k.guestReady}catch(A){throw o(A.message),A}},[u]),m=g.useCallback(async(w,x,P={})=>{if(!u)throw new Error("User must be signed in");const T=`onevone/${w}`,A=B(W,T);try{const k=await new Promise((C,K)=>{ye(A,C,K,{onlyOnce:!0})});if(!k.exists())throw new Error("Game not found");const O=k.val();if(!(O.hostId===u.uid))throw new Error("Only host can start the game");if(!O.hostReady||!O.guestReady)throw new Error("Both players must be ready to start");const E=Object.prototype.hasOwnProperty.call(P,"speedrun")?!!P.speedrun:!!O.speedrun,I=Math.random()<.5?"host":"guest",D=Date.now(),L=Array.isArray(x)?x:[x];await ae(A,{status:"playing",solution:L[0],solutions:L,speedrun:E,currentTurn:E?null:I,startedAt:D,hostGuesses:[],guestGuesses:[],hostColors:[],guestColors:[],winner:null,hostTimeMs:null,guestTimeMs:null,hostStartTime:E?D:null,guestStartTime:E?D:null,hostRematch:!1,guestRematch:!1})}catch(k){throw o(k.message),k}},[u]),b=g.useCallback(async(w,x,P)=>{if(!u)throw new Error("User must be signed in");const T=`onevone/${w}`,A=B(W,T);try{const k=await new Promise((L,C)=>{ye(A,L,C,{onlyOnce:!0})});if(!k.exists())throw new Error("Game not found");const O=k.val(),Q=O.hostId===u.uid,v=O.speedrun||!1;if(!v&&!(O.currentTurn===(Q?"host":"guest")))throw new Error("Not your turn");const E=Date.now(),I=Array.isArray(O.solutions)&&O.solutions.length>0?O.solutions:O.solution?[O.solution]:[],D={};if(Q){const L=[...O.hostGuesses||[],x],C=[...O.hostColors||[],P];if(D.hostGuesses=L,D.hostColors=C,v||(D.currentTurn="guest"),v&&!O.hostTimeMs&&I.length>0&&I.every(Y=>L.includes(Y))){const Y=O.hostStartTime||O.startedAt||E;D.hostTimeMs=E-Y}}else{const L=[...O.guestGuesses||[],x],C=[...O.guestColors||[],P];if(D.guestGuesses=L,D.guestColors=C,v||(D.currentTurn="host"),v&&!O.guestTimeMs&&I.length>0&&I.every(Y=>L.includes(Y))){const Y=O.guestStartTime||O.startedAt||E;D.guestTimeMs=E-Y}}await ae(A,D)}catch(k){throw o(k.message),k}},[u]),_=g.useCallback(async w=>{if(!u)throw new Error("User must be signed in");const x=`onevone/${w}`,P=B(W,x);try{const T=await new Promise((Q,v)=>{ye(P,Q,v,{onlyOnce:!0})});if(!T.exists())throw new Error("Game not found");const A=T.val();if(A.speedrun)return;const k=A.hostId===u.uid;if(!(A.currentTurn===(k?"host":"guest")))throw new Error("Not your turn");k?await ae(P,{currentTurn:"guest"}):await ae(P,{currentTurn:"host"})}catch(T){throw o(T.message),T}},[u]),M=g.useCallback(async(w,x)=>{if(!u)throw new Error("User must be signed in");const P=`onevone/${w}`,T=B(W,P);try{await ae(T,{status:"finished",winner:x})}catch(A){throw o(A.message),A}},[u]),H=g.useCallback(async(w,x)=>{if(!u)throw new Error("User must be signed in");const P=`onevone/${w}`,T=B(W,P);try{const A=await new Promise((Q,v)=>{ye(T,Q,v,{onlyOnce:!0})});if(!A.exists())throw new Error("Game not found");const O=A.val().hostId===u.uid;if(x==="pending"){const Q={friendRequestStatus:"pending"};O?Q.hostFriendRequestSent=!0:Q.guestFriendRequestSent=!0,await ae(T,Q)}else x==="declined"?await ae(T,{friendRequestStatus:null,friendRequestFrom:null,hostFriendRequestSent:!1,guestFriendRequestSent:!1}):await ae(T,{friendRequestStatus:null,friendRequestFrom:null,hostFriendRequestSent:!1,guestFriendRequestSent:!1})}catch(A){throw o(A.message),A}},[u]),J=g.useCallback(async w=>{if(!u)throw new Error("User must be signed in");const x=`onevone/${w}`,P=B(W,x);try{const T=await new Promise((Q,v)=>{ye(P,Q,v,{onlyOnce:!0})});if(!T.exists())throw new Error("Game not found");const O=T.val().hostId===u.uid?{hostRematch:!0}:{guestRematch:!0};await ae(P,O)}catch(T){throw o(T.message),T}},[u]),de=g.useCallback(async w=>{if(!u)throw new Error("User must be signed in");const x=`onevone/${w}`,P=B(W,x);try{const T=await new Promise((k,O)=>{ye(P,k,O,{onlyOnce:!0})});if(!T.exists())throw new Error("Game not found");const A=T.val();await ae(P,{status:"waiting",hostReady:!1,guestReady:!1,solution:null,hostGuesses:[],guestGuesses:[],hostColors:[],guestColors:[],currentTurn:null,winner:null,startedAt:null,hostTimeMs:null,guestTimeMs:null,hostStartTime:null,guestStartTime:null,hostRematch:!1,guestRematch:!1})}catch(T){throw o(T.message),T}},[u]),oe=g.useCallback(async w=>{if(!n)return;const x=`onevone/${w}`,P=B(W,x);try{if(u){const T=await new Promise((A,k)=>{ye(P,A,k,{onlyOnce:!0})});if(T.exists()){const A=T.val();A.hostId===u.uid?await Pe(P):A.guestId===u.uid&&await ae(P,{guestId:null,guestName:null,guestReady:!1})}}}catch(T){o(T.message)}},[u,n]);return{gameState:s,error:r,loading:a,createGame:h,joinGame:f,setReady:p,startGame:m,submitGuess:b,switchTurn:_,setWinner:M,requestRematch:J,resetGame:de,leaveGame:oe,setFriendRequestStatus:H}}function ty(n=""){const[e,t]=g.useState(n),s=g.useRef(null),i=g.useCallback(()=>{s.current&&(clearTimeout(s.current),s.current=null)},[]),r=g.useCallback((o,a=5e3)=>{i(),t(o),s.current=setTimeout(()=>{t(""),s.current=null},a)},[i]);return g.useEffect(()=>()=>i(),[i]),{message:e,setMessage:t,setTimedMessage:r,clearMessageTimer:i}}function ny({message:n}){return n?d.jsx("div",{style:{position:"fixed",top:"20px",left:"50%",transform:"translateX(-50%)",backgroundColor:"#1a1a1b",color:"#f06272",padding:"12px 20px",borderRadius:8,fontSize:14,fontWeight:"bold",border:"1px solid #3a3a3c",boxShadow:"0 4px 12px rgba(0,0,0,0.5)",zIndex:3e3,pointerEvents:"none",maxWidth:"90vw",textAlign:"center"},children:n}):null}const sy=Array.from({length:32},(n,e)=>e+1);function iy({isOpen:n,onRequestClose:e}){const t=Nn(),{message:s,setTimedMessage:i}=ty(""),{user:r,friends:o,friendRequests:a,acceptFriendRequest:l,declineFriendRequest:c,removeFriend:u,isVerifiedUser:h,sendChallenge:f}=zn(),p=ey(null,!0,!1),[m,b]=pe.useState(null),[_,M]=pe.useState(1),[H,J]=pe.useState(!1),[de,oe]=pe.useState(!1);return h?d.jsxs(Oe,{isOpen:n,onRequestClose:e,children:[d.jsx(ny,{message:s}),d.jsxs("div",{style:{textAlign:"center",width:"100%",boxSizing:"border-box"},children:[d.jsx("h2",{style:{margin:"0 0 24px 0",fontSize:"24px",fontWeight:"bold"},children:"Friends & Requests"}),a&&a.length>0&&d.jsxs("div",{style:{marginBottom:"24px"},children:[d.jsxs("h3",{style:{margin:"0 0 12px 0",fontSize:"16px",fontWeight:"bold",color:"#d7dadc",textAlign:"left"},children:["Friend Requests (",a.length,")"]}),d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px",marginBottom:"16px",borderBottom:"1px solid #3a3a3c",paddingBottom:"16px"},children:a.map(w=>d.jsxs("div",{style:{padding:"12px 14px",background:"#2b2b2e",borderRadius:"8px",border:"1px solid #6aaa64",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"10px"},children:[d.jsxs("div",{style:{textAlign:"left",flex:1},children:[d.jsx("span",{style:{color:"#ffffff",fontWeight:"600"},children:w.fromName}),d.jsx("div",{style:{color:"#818384",fontSize:"11px",marginTop:"2px"},children:"wants to be friends"})]}),d.jsxs("div",{style:{display:"flex",gap:"6px"},children:[d.jsx("button",{onClick:()=>l(w.id,w.fromName),style:{padding:"6px 10px",borderRadius:"6px",border:"none",background:"#6aaa64",color:"#ffffff",fontWeight:"bold",fontSize:"11px",cursor:"pointer"},children:"Accept"}),d.jsx("button",{onClick:()=>c(w.id),style:{padding:"6px 10px",borderRadius:"6px",border:"1px solid #3a3a3c",background:"transparent",color:"#ffffff",fontWeight:"bold",fontSize:"11px",cursor:"pointer"},children:"Decline"})]})]},w.id))})]}),d.jsxs("div",{children:[d.jsxs("h3",{style:{margin:"0 0 12px 0",fontSize:"16px",fontWeight:"bold",color:"#d7dadc",textAlign:"left"},children:["Friends (",(o==null?void 0:o.length)||0,")"]}),o&&o.length>0?d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxHeight:"300px",overflowY:"auto",marginBottom:"20px"},children:o.map(w=>d.jsxs("div",{style:{padding:"14px 16px",background:"#2b2b2e",borderRadius:"8px",border:"1px solid #3a3a3c",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px"},children:[d.jsx("span",{style:{color:"#ffffff",fontWeight:"600"},children:w.name}),d.jsxs("div",{style:{display:"flex",gap:"6px"},children:[d.jsx("button",{onClick:()=>{b(w),M(1),J(!1),oe(!0)},style:{padding:"6px 10px",borderRadius:"6px",border:"none",background:"#6aaa64",color:"#ffffff",fontWeight:"bold",fontSize:"11px",cursor:"pointer"},children:"Challenge"}),d.jsx("button",{onClick:()=>u(w.id),style:{padding:"6px 10px",borderRadius:"6px",border:"1px solid #3a3a3c",background:"transparent",color:"#ffffff",fontWeight:"bold",fontSize:"11px",cursor:"pointer"},children:"Remove"})]})]},w.id))}):d.jsx("div",{style:{padding:"32px 16px",color:"#818384",fontSize:"14px",marginBottom:"20px"},children:"No friends yet. Send friend requests while playing 1v1 mode!"})]}),d.jsx("button",{onClick:e,style:{padding:"10px 16px",borderRadius:"8px",border:"none",background:"#6aaa64",color:"#ffffff",fontWeight:"bold",fontSize:"13px",cursor:"pointer",letterSpacing:"0.5px"},children:"Close"})]}),d.jsx(Oe,{isOpen:de&&!!m,onRequestClose:()=>oe(!1),children:d.jsxs("div",{style:{padding:"24px"},children:[d.jsx("h2",{style:{margin:0,marginBottom:"24px",fontSize:20,fontWeight:"bold",color:"#ffffff"},children:"1v1 Game Configuration"}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[d.jsxs("div",{children:[d.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#d7dadc",fontSize:14},children:"Number of Boards"}),d.jsx("select",{value:_,onChange:w=>M(parseInt(w.target.value,10)),style:{width:"100%",padding:"10px",borderRadius:6,border:"1px solid #3a3a3c",background:"#1a1a1b",color:"#ffffff",fontSize:14,cursor:"pointer"},children:sy.map(w=>d.jsx("option",{value:w,children:w},w))})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[d.jsx("input",{id:"challenge-speedrun-checkbox",type:"checkbox",checked:H,onChange:w=>J(w.target.checked),style:{width:18,height:18,cursor:"pointer"}}),d.jsx("label",{htmlFor:"challenge-speedrun-checkbox",style:{color:"#d7dadc",fontSize:14,cursor:"pointer"},children:"Speedrun Mode (Unlimited guesses, timed)"})]}),d.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"12px"},children:[d.jsx("button",{onClick:()=>oe(!1),style:{flex:1,padding:"12px",borderRadius:8,border:"1px solid #3a3a3c",background:"transparent",color:"#ffffff",fontSize:14,fontWeight:"bold",cursor:"pointer"},children:"Cancel"}),d.jsx("button",{onClick:async()=>{if(!(!m||!r))try{const w=await p.createGame({speedrun:H});if(!await f(m.id,m.name,w,_,H)){i("A challenge between you and this friend is already pending. Please accept or dismiss it before sending another.",5e3);return}oe(!1),e==null||e(),t(`/game?mode=1v1&code=${w}&host=true&speedrun=${H}&boards=${_}`)}catch(w){i((w==null?void 0:w.message)||"Failed to create challenge",5e3)}},style:{flex:1,padding:"12px",borderRadius:8,border:"none",background:"#6aaa64",color:"#ffffff",fontSize:14,fontWeight:"bold",cursor:"pointer"},children:"Challenge"})]})]})]})})]}):d.jsx(Oe,{isOpen:n,onRequestClose:e,children:d.jsxs("div",{style:{textAlign:"center",width:"100%",boxSizing:"border-box"},children:[d.jsx("h2",{style:{margin:"0 0 16px 0",fontSize:"22px",fontWeight:"bold"},children:"Verify your account"}),d.jsx("p",{style:{marginBottom:"16px",color:"#d7dadc",fontSize:"14px"},children:"Friends are only available for verified accounts. Please verify your email or sign in with Google to use this feature."}),d.jsx("button",{onClick:e,style:{padding:"10px 16px",borderRadius:"8px",border:"none",background:"#6aaa64",color:"#ffffff",fontWeight:"bold",fontSize:"13px",cursor:"pointer",letterSpacing:"0.5px"},children:"Close"})]})})}function ry({onOpenFeedback:n}){const e=Nn(),{user:t,friendRequests:s,incomingChallenges:i,sentChallenges:r,isVerifiedUser:o,acceptChallenge:a,dismissChallenge:l,cancelSentChallenge:c}=zn(),[u,h]=g.useState(!1),[f,p]=g.useState(!1),[m,b]=g.useState(!1);return d.jsxs(d.Fragment,{children:[d.jsxs("div",{style:{position:"relative"},children:[d.jsx("button",{className:"homeBtn homeBtnOutline",onClick:()=>h(!u),style:{padding:"4px 6px",fontSize:"18px",display:"flex",alignItems:"center",justifyContent:"center",border:"none",background:"transparent",color:"#ffffff",cursor:"pointer"},title:"Menu",children:"☰"}),u&&d.jsxs("div",{style:{position:"absolute",top:"calc(100% + 4px)",right:0,background:"#2b2b2e",border:"1px solid #3a3a3c",borderRadius:"8px",minWidth:"140px",zIndex:1e3,boxShadow:"0 4px 12px rgba(0, 0, 0, 0.5)"},children:[d.jsx("button",{onClick:()=>{e("/"),h(!1)},style:{width:"100%",padding:"10px 16px",background:"transparent",border:"none",color:"#ffffff",fontSize:"13px",textAlign:"left",cursor:"pointer",fontWeight:"600",letterSpacing:"0.3px",transition:"all 0.2s ease",borderBottom:"1px solid #3a3a3c"},onMouseEnter:_=>_.target.style.background="rgba(255, 255, 255, 0.1)",onMouseLeave:_=>_.target.style.background="transparent",children:"Home"}),t&&d.jsx("button",{onClick:()=>{e("/profile"),h(!1)},style:{width:"100%",padding:"10px 16px",background:"transparent",border:"none",color:"#ffffff",fontSize:"13px",textAlign:"left",cursor:"pointer",fontWeight:"600",letterSpacing:"0.3px",transition:"all 0.2s ease",borderBottom:"1px solid #3a3a3c"},onMouseEnter:_=>_.target.style.background="rgba(255, 255, 255, 0.1)",onMouseLeave:_=>_.target.style.background="transparent",children:"Profile"}),t&&d.jsxs("button",{onClick:()=>{if(!o){alert("Verify your email or sign in with Google to use friends."),h(!1);return}p(!0),h(!1)},style:{width:"100%",padding:"10px 16px",background:"transparent",border:"none",color:"#ffffff",fontSize:"13px",textAlign:"left",cursor:"pointer",fontWeight:"600",letterSpacing:"0.3px",transition:"all 0.2s ease",borderBottom:"1px solid #3a3a3c",position:"relative",display:"flex",alignItems:"center"},onMouseEnter:_=>_.target.style.background="rgba(255, 255, 255, 0.1)",onMouseLeave:_=>_.target.style.background="transparent",children:["Friends",s&&s.length>0&&d.jsx("div",{style:{marginLeft:"8px",width:"20px",height:"20px",borderRadius:"50%",background:"#ef5350",color:"#ffffff",fontSize:"11px",fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center"},children:s.length})]}),t&&d.jsxs("button",{onClick:()=>{if(!o){alert("Verify your email or sign in with Google to use challenges."),h(!1);return}b(!0),h(!1)},style:{width:"100%",padding:"10px 16px",background:"transparent",border:"none",color:"#ffffff",fontSize:"13px",textAlign:"left",cursor:"pointer",fontWeight:"600",letterSpacing:"0.3px",transition:"all 0.2s ease",borderBottom:"1px solid #3a3a3c",position:"relative",display:"flex",alignItems:"center"},onMouseEnter:_=>_.target.style.background="rgba(255, 255, 255, 0.1)",onMouseLeave:_=>_.target.style.background="transparent",children:["Challenges",i&&i.length>0&&d.jsx("div",{style:{marginLeft:"8px",width:"20px",height:"20px",borderRadius:"50%",background:"#c9b458",color:"#121213",fontSize:"11px",fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center"},children:i.length})]}),d.jsx("button",{onClick:()=>{n(),h(!1)},style:{width:"100%",padding:"10px 16px",background:"transparent",border:"none",color:"#ffffff",fontSize:"13px",textAlign:"left",cursor:"pointer",fontWeight:"600",letterSpacing:"0.3px",transition:"all 0.2s ease"},onMouseEnter:_=>_.target.style.background="rgba(255, 255, 255, 0.1)",onMouseLeave:_=>_.target.style.background="transparent",children:"Feedback"})]})]}),u&&d.jsx("div",{onClick:()=>h(!1),style:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:999}}),d.jsx(iy,{isOpen:f,onRequestClose:()=>p(!1)}),d.jsx(Oe,{isOpen:m,onRequestClose:()=>b(!1),children:d.jsxs("div",{style:{padding:"24px",width:"100%",boxSizing:"border-box"},children:[d.jsx("h2",{style:{margin:"0 0 16px 0",fontSize:20,fontWeight:"bold",color:"#ffffff"},children:"Challenges"}),(!r||r.length===0)&&(!i||i.length===0)?d.jsx("div",{style:{padding:"24px 8px 16px",color:"#818384",fontSize:14},children:"You have no challenges right now."}):d.jsxs(d.Fragment,{children:[d.jsx("h3",{style:{margin:"8px 0 8px",fontSize:14,fontWeight:"bold",color:"#d7dadc",textAlign:"left"},children:"Sent"}),!r||r.length===0?d.jsx("div",{style:{padding:"8px 0 12px",color:"#818384",fontSize:12},children:"You haven't sent any challenges yet."}):d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px",maxHeight:"160px",overflowY:"auto",marginBottom:"12px"},children:r.map(_=>d.jsxs("div",{style:{padding:"10px 12px",borderRadius:8,border:"1px solid #3a3a3c",background:"#2b2b2e",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"10px"},children:[d.jsxs("div",{style:{textAlign:"left",flex:1},children:[d.jsx("div",{style:{color:"#ffffff",fontWeight:600,marginBottom:2},children:_.toUserName||_.friendName||"Unknown friend"}),d.jsxs("div",{style:{color:"#d7dadc",fontSize:12},children:[_.boards||1," board",(_.boards||1)>1?"s":""," · ",_.speedrun?"Speedrun":"Standard"]})]}),d.jsx("div",{style:{display:"flex",gap:"6px"},children:d.jsx("button",{onClick:async()=>{try{await c(_.gameCode||_.id)}catch(M){alert((M==null?void 0:M.message)||"Failed to cancel challenge")}},className:"homeBtn homeBtnOutline",style:{padding:"6px 10px",fontSize:11,borderRadius:6},children:"Cancel"})})]},_.id))}),d.jsx("h3",{style:{margin:"8px 0 8px",fontSize:14,fontWeight:"bold",color:"#d7dadc",textAlign:"left"},children:"Received"}),!i||i.length===0?d.jsx("div",{style:{padding:"8px 0 12px",color:"#818384",fontSize:12},children:"You have no incoming challenges."}):d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px",maxHeight:"160px",overflowY:"auto",marginBottom:"16px"},children:i.map(_=>d.jsxs("div",{style:{padding:"10px 12px",borderRadius:8,border:"1px solid #3a3a3c",background:"#2b2b2e",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"10px"},children:[d.jsxs("div",{style:{textAlign:"left",flex:1},children:[d.jsx("div",{style:{color:"#ffffff",fontWeight:600,marginBottom:2},children:_.fromUserName||"Unknown"}),d.jsxs("div",{style:{color:"#d7dadc",fontSize:12},children:[_.boards||1," board",(_.boards||1)>1?"s":""," · ",_.speedrun?"Speedrun":"Standard"]})]}),d.jsxs("div",{style:{display:"flex",gap:"6px"},children:[d.jsx("button",{onClick:async()=>{try{const M=await a(_.id);b(!1);const H=M.boards||1,J=!!M.speedrun;e(`/game?mode=1v1&code=${M.gameCode}&speedrun=${J}&boards=${H}`)}catch(M){alert((M==null?void 0:M.message)||"Failed to accept challenge")}},className:"homeBtn homeBtnGreen",style:{padding:"6px 10px",fontSize:11,borderRadius:6},children:"Accept"}),d.jsx("button",{onClick:async()=>{try{await l(_.id,_.gameCode)}catch(M){alert((M==null?void 0:M.message)||"Failed to dismiss challenge")}},className:"homeBtn homeBtnOutline",style:{padding:"6px 10px",fontSize:11,borderRadius:6},children:"Dismiss"})]})]},_.id))})]}),d.jsx("button",{onClick:()=>b(!1),className:"homeBtn homeBtnGreen homeBtnLg",style:{marginTop:4},children:"Close"})]})})]})}function oy({onOpenFeedback:n,onSignUpComplete:e}){const t=Nn(),{user:s,signOut:i}=zn(),r=X_(),[o,a]=g.useState(!1),l=g.useCallback(()=>{a(!0)},[]),c=g.useCallback(()=>{a(!1)},[]),u=g.useCallback(()=>{t("/leaderboard")},[t]),h=g.useCallback(()=>{t("/")},[t]),f=g.useCallback(async()=>{try{await i()}catch(p){console.error("Failed to sign out",p)}},[i]);return d.jsxs(d.Fragment,{children:[d.jsxs("header",{style:{padding:"10px 16px 8px",borderBottom:"1px solid #3a3a3c",backgroundColor:"#121213",marginBottom:"12px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[d.jsx("button",{type:"button",onClick:h,"aria-label":"Home",style:{width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:4,border:"1px solid #3a3a3c",background:"transparent",cursor:"pointer",padding:0},children:d.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M4 10.5L12 3L20 10.5V20H14V14H10V20H4V10.5Z",stroke:"#ffffff",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})}),d.jsx("div",{style:{flex:1,textAlign:"center",fontWeight:"bold",letterSpacing:2,fontSize:18},children:"BETTER WORDLE"}),d.jsx("div",{style:{display:"flex",justifyContent:"flex-end",minWidth:32},children:d.jsx(ry,{onOpenFeedback:n||(()=>{})})})]}),d.jsxs("div",{style:{marginTop:8,display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,flexWrap:"wrap"},children:[d.jsxs("div",{style:{fontSize:12,color:"#d7dadc",whiteSpace:"nowrap"},children:["Reset in: ",r]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginLeft:"auto"},children:[d.jsx("button",{type:"button",className:"homeBtn homeBtnOutline",onClick:u,style:{padding:"4px 10px",fontSize:12,textTransform:"uppercase",letterSpacing:.5},children:"Leaderboard"}),s?d.jsx("button",{type:"button",className:"homeBtn homeBtnOutline",onClick:f,style:{padding:"4px 10px",fontSize:12,textTransform:"uppercase",letterSpacing:.5},children:"Sign Out"}):d.jsx("button",{type:"button",className:"homeBtn homeBtnOutline",onClick:l,style:{padding:"4px 10px",fontSize:12,textTransform:"uppercase",letterSpacing:.5},children:"Sign In"})]})]}),s&&d.jsxs("div",{style:{marginTop:6,fontSize:12,color:"#d7dadc",lineHeight:1.4},children:["Signed in as ",s.displayName||s.email||"Unknown user","."," ","(",d.jsx("button",{type:"button",onClick:()=>t("/profile"),style:{background:"none",border:"none",padding:0,margin:0,color:"#93c5fd",textDecoration:"underline",cursor:"pointer",fontSize:12},children:"Change username"}),")"]})]}),d.jsx(Lc,{isOpen:o,onRequestClose:c,onSignUpComplete:e})]})}function Ks(){const n=new Date,e=n.getFullYear(),t=String(n.getMonth()+1).padStart(2,"0"),s=String(n.getDate()).padStart(2,"0");return`${e}-${t}-${s}`}class Fc{constructor(e){this.seed=e%2147483647,this.seed<=0&&(this.seed+=2147483646)}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}}function jc(n,e=0,t="daily",s=!1,i=null,r=1){let o=0;const a=`${n}-${t}-${s}-${e}-${r}-${i||"none"}`;for(let l=0;l<a.length;l++){const c=a.charCodeAt(l);o=(o<<5)-o+c,o=o|0}return Math.abs(o)+e*1e6+r*1e4+(i||0)*1e5}function ay(n,e,t=0,s="daily",i=!1,r=null,o=1){if(!n||n.length===0)throw new Error("Word list is empty");const a=jc(e,t,s,i,r,o),l=new Fc(a),c=Math.floor(l.next()*n.length);return n[c]}function by(n,e,t="daily",s=!1,i=null){const r=Ks(),o=[],a=new Set;for(let l=0;l<e;l++){let c,u=0;const h=n.length;do{if(c=ay(n,r,l,t,s,i,e),u>0){const f=jc(r,l+u*1e3,t,s,i,e),p=new Fc(f),m=Math.floor(p.next()*n.length);c=n[m]}u++}while(a.has(c)&&u<h);a.add(c),o.push(c)}return o}const An="mw:";function aa(n,e=null){try{const t=window.localStorage.getItem(n);return t?JSON.parse(t):e}catch{return e}}function la(n,e){try{window.localStorage.setItem(n,JSON.stringify(e))}catch{}}function on(n){try{window.localStorage.removeItem(n)}catch{}}function ly(n,e,t=null){const s=t||Ks();return`${An}game:daily:${n}:${e?"speedrun":"standard"}:${s}`}function cy(n,e=null){const t=e||Ks();return`${An}game:marathon:${n?"speedrun":"standard"}:${t}`}function gi(n){return`${An}meta:marathon:${n?"speedrun":"standard"}`}function ca(n,e,t,s=null,i=null){const r=i||Ks();return n==="marathon"?`${An}solved:${n}:${e}:${t?"speedrun":"standard"}:${s}:${r}`:`${An}solved:${n}:${e}:${t?"speedrun":"standard"}:${r}`}const uy=Array.from({length:32},(n,e)=>e+1),an=pe.memo(function({title:e,desc:t,buttonText:s,onClick:i,variant:r="green",titleRight:o}){return d.jsxs("div",{className:"modeRow",children:[d.jsxs("div",{className:"modeRowText",children:[d.jsxs("div",{className:"modeRowTitle",children:[e,o?d.jsx("span",{className:"modeRowTitleRight",children:o}):null]}),d.jsx("div",{className:"modeRowDesc",children:t})]}),d.jsx("button",{className:`homeBtn ${r==="gold"?"homeBtnGold":"homeBtnGreen"}`,onClick:i,children:s})]})});function dy({dailyBoards:n,setDailyBoards:e,marathonLevels:t}){const s=Nn(),[i,r]=g.useState(!1),[o,a]=g.useState(!1),[l,c]=g.useState(!1),[u,h]=g.useState(!1),[f,p]=g.useState(""),[m,b]=g.useState(0),[_,M]=g.useState(0);g.useEffect(()=>{const k=aa(gi(!1),null),O=aa(gi(!0),null),Q=k&&typeof k.index=="number"?k.index:0,v=O&&typeof O.index=="number"?O.index:0;b(Q),M(v)},[]),g.useMemo(()=>t[t.length-1],[t]),g.useMemo(()=>t[m]||t[0],[t,m]),g.useMemo(()=>t[_]||t[0],[t,_]);const H=g.useCallback(()=>r(!1),[]),J=g.useCallback(()=>r(!0),[]),de=g.useCallback(()=>{la("mw:dailyBoards",n),s(`/game/daily/${n}`)},[n,s]),oe=g.useCallback(()=>{la("mw:dailyBoards",n),s(`/game/daily/${n}/speedrun`)},[n,s]),w=g.useCallback(()=>{[!1,!0].forEach(k=>{const O=ly(n,k),Q=ca("daily",n,k);on(O),on(Q)})},[n]),x=g.useCallback(()=>{s("/game/marathon")},[s]),P=g.useCallback(()=>{s("/game/marathon/speedrun")},[s]),T=g.useCallback(()=>{[!1,!0].forEach(k=>{const O=cy(k),Q=gi(k);on(O),on(Q),t.forEach((v,E)=>{const I=ca("marathon",v,k,E);on(I)})}),b(0),M(0)},[t]),A=g.useMemo(()=>`${n} board${n>1?"s":""}`,[n]);return d.jsxs(d.Fragment,{children:[d.jsxs(xu,{children:[d.jsx("title",{children:"Better Wordle"}),d.jsx("meta",{name:"description",content:"Better Wordle is a Wordle alternative with multi-board daily puzzles, marathon and speedrun modes, and 1v1 Wordle-style battles with friends."})]}),d.jsx("div",{className:"homeRoot",children:d.jsxs("div",{className:"homeInner",children:[d.jsx(oy,{onOpenFeedback:J,onSignUpComplete:k=>{p(k),h(!0)}}),d.jsx(Oe,{isOpen:u,onRequestClose:()=>h(!1),titleId:"verify-email-modal-title",children:d.jsxs("div",{style:{padding:"24px",textAlign:"left"},children:[d.jsx("h2",{id:"verify-email-modal-title",style:{margin:"0 0 16px 0",fontSize:20,fontWeight:"bold",color:"#ffffff"},children:"Verify your email"}),d.jsxs("p",{style:{margin:"0 0 12px 0",fontSize:14,color:"#d7dadc",lineHeight:1.5},children:["We've sent a verification link to"," ",d.jsx("span",{style:{fontWeight:"bold"},children:f||"your email address"}),"."]}),d.jsx("p",{style:{margin:"0 0 16px 0",fontSize:14,color:"#d7dadc",lineHeight:1.5},children:"Please open that email and click the link to verify your account. Once verified, you'll be able to play 1v1 and use friends. Check your Spam or Junk folder for the verification link."}),d.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:d.jsx("button",{type:"button",className:"homeBtn homeBtnGreen homeBtnLg",onClick:()=>h(!1),style:{minWidth:120},children:"Got it"})})]})}),d.jsx(Hu,{isOpen:i,onRequestClose:H}),d.jsx(J_,{isOpen:o,onRequestClose:()=>a(!1),showConfigFirst:l,onConfigClose:()=>c(!1),onConfigOpen:()=>c(!0)}),d.jsxs("main",{children:[d.jsxs("section",{className:"panel",children:[d.jsxs("div",{className:"panelTop",children:[d.jsxs("div",{children:[d.jsx("h2",{className:"panelTitle",children:"Daily Wordle-Style Puzzles"}),d.jsx("div",{className:"panelDesc",children:"Choose how many words you want to play simultaneously."})]}),d.jsxs("div",{className:"selector",children:[d.jsx("label",{className:"label",htmlFor:"dailyBoards",children:"Simultaneous words"}),d.jsx("select",{id:"dailyBoards",value:n,onChange:k=>e(parseInt(k.target.value,10)),className:"select",children:uy.map(k=>d.jsx("option",{value:k,children:k},k))})]})]}),d.jsxs("div",{className:"panelBody",children:[d.jsx(an,{title:"Daily (standard)",desc:"Limited turns. No timer. Good for casual play.",buttonText:"Play Daily",onClick:de,variant:"green",titleRight:A}),d.jsx(an,{title:"Daily (speedrun)",desc:"Unlimited guesses. Timer starts immediately.",buttonText:"Speedrun Daily",onClick:oe,variant:"green",titleRight:A}),d.jsx("button",{type:"button",className:"homeBtn homeBtnOutline",onClick:w,style:{marginTop:"12px"},children:"Reset today's daily guesses"})]})]}),d.jsxs("section",{className:"panel",children:[d.jsx("div",{className:"panelTop",children:d.jsxs("div",{children:[d.jsx("h2",{className:"panelTitle",children:"Marathon & Speedrun Modes"}),d.jsx("div",{className:"panelDesc",children:"Solve 1 word, then 2, then 3, ending at 4. Complete all stages to win."})]})}),d.jsxs("div",{className:"panelBody",children:[d.jsx(an,{title:"Marathon (standard)",desc:"Play standard marathon. Limited turns. No timer.",buttonText:"Play Marathon",onClick:x,variant:"gold",titleRight:`Stage ${m+1}/${t.length}`}),d.jsx(an,{title:"Marathon (speedrun)",desc:"Play speedrun marathon. Unlimited guesses, timed cumulative.",buttonText:"Speedrun Marathon",onClick:P,variant:"gold",titleRight:`Stage ${_+1}/${t.length}`}),d.jsx("button",{type:"button",className:"homeBtn homeBtnOutline",onClick:T,style:{marginTop:"12px"},children:"Reset today's marathon guesses"})]})]}),d.jsxs("section",{className:"panel",children:[d.jsx("div",{className:"panelTop",children:d.jsxs("div",{children:[d.jsx("h2",{className:"panelTitle",children:"1v1 Wordle Battles With Friends"}),d.jsx("div",{className:"panelDesc",children:"Challenge a friend to a head-to-head Wordle-style battle."})]})}),d.jsx("div",{className:"panelBody",children:d.jsx(an,{title:"1v1 Mode",desc:"Play against another player in real time.",buttonText:"Play 1v1",onClick:()=>a(!0),variant:"gold"})})]}),d.jsx("section",{className:"homeIntro",children:d.jsxs("details",{className:"homeIntroDetails",children:[d.jsx("summary",{className:"homeIntroSummary",children:"Click here to know more about Better Wordle."}),d.jsx("h1",{className:"homeTitle",children:"Better Wordle – Advanced Multi-Board & 1v1 Wordle-Style Game"}),d.jsx("p",{className:"homeIntroParagraph",children:"Better Wordle is a free, browser-based Wordle-style puzzle game that you can play on any device. No downloads or sign-in required to get started – just open the site and start solving."}),d.jsx("p",{className:"homeIntroParagraph",children:"Play up to 32 boards at once with daily multi-board puzzles, push yourself with marathon stages and speedrun timers, and challenge friends in head-to-head 1v1 Wordle-style battles. Your best speedrun times can appear on the global Better Wordle leaderboard."}),d.jsxs("p",{className:"homeIntroParagraph",children:["New to Better Wordle? Read the"," ",d.jsx($r,{to:"/faq",className:"homeLink",children:"Better Wordle FAQ"})," ","or jump straight to the"," ",d.jsx($r,{to:"/leaderboard",className:"homeLink",children:"global Better Wordle leaderboard"})," ","to see top players."]})]})})]})]})})]})}const kt=g.lazy(()=>Rs(()=>import("./Game-B9w7Fq8d.js"),__vite__mapDeps([0,1,2]))),hy=g.lazy(()=>Rs(()=>import("./Profile-CQuqLSHt.js"),__vite__mapDeps([3,1,4]))),fy=g.lazy(()=>Rs(()=>import("./Leaderboard-DTkHwsdE.js"),__vite__mapDeps([5,1,6]))),py=g.lazy(()=>Rs(()=>import("./Faq-5Kk0CTd4.js"),__vite__mapDeps([7,1,8]))),gy=[1,2,3,4];function my(){const n=Hc(),[e,t]=g.useState(1);g.useEffect(()=>{if(n.pathname==="/"){const i=window.location.pathname,r="/better-wordle/",o=r.endsWith("/")?r.slice(0,-1):r,a=o+"/";if(i===o){const l=a+window.location.search+window.location.hash;window.history.replaceState(null,"",l)}}},[n.pathname]),g.useEffect(()=>{(n.pathname==="/"||n.pathname.endsWith("/"))&&t(1)},[n.pathname]),g.useEffect(()=>{typeof window<"u"&&window.matchMedia&&window.matchMedia("(max-width: 768px)").matches&&window.scrollTo({top:0,left:0,behavior:"auto"})},[n.pathname]);const s=g.useMemo(()=>gy,[]);return d.jsx(g.Suspense,{fallback:d.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#121213",color:"#ffffff"},children:"Loading…"}),children:d.jsxs(Vc,{children:[d.jsx(xe,{path:"/",element:d.jsx(dy,{dailyBoards:e,setDailyBoards:t,marathonLevels:s})}),d.jsx(xe,{path:"/game",element:d.jsx(kt,{marathonLevels:s})}),d.jsx(xe,{path:"/game/:mode",element:d.jsx(kt,{marathonLevels:s})}),d.jsx(xe,{path:"/game/:mode/:boards",element:d.jsx(kt,{marathonLevels:s})}),d.jsx(xe,{path:"/game/:mode/:boards/:variant",element:d.jsx(kt,{marathonLevels:s})}),d.jsx(xe,{path:"/game/1v1/:code",element:d.jsx(kt,{marathonLevels:s})}),d.jsx(xe,{path:"/game/1v1/:code/:variant",element:d.jsx(kt,{marathonLevels:s})}),d.jsx(xe,{path:"/profile",element:d.jsx(hy,{})}),d.jsx(xe,{path:"/leaderboard",element:d.jsx(fy,{})}),d.jsx(xe,{path:"/faq",element:d.jsx(py,{})}),d.jsx(xe,{path:"*",element:d.jsx(zc,{to:"/",replace:!0})})]})})}const mi="/better-wordle/",un=mi.endsWith("/")?mi.slice(0,-1):mi;if(typeof window<"u"){const n=sessionStorage.getItem("_404_redirect");if(n){sessionStorage.removeItem("_404_redirect");const s=n.startsWith("/")?n:"/"+n;window.history.replaceState(null,"",un+s)}const e=window.location.pathname;(e===un||e===un+"/")&&window.history.replaceState(null,"",un+"/")}yi.createRoot(document.getElementById("root")).render(d.jsx(pe.StrictMode,{children:d.jsx(ya,{children:d.jsx(Gc,{basename:un,future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:d.jsx(my,{})})})}));export{Hu as F,ny as G,xu as H,Oe as M,Fc as S,oy as a,zn as b,ey as c,cy as d,ly as e,la as f,Ks as g,gi as h,W as i,d as j,vy as k,aa as l,ca as m,ye as o,wy as q,B as r,by as s,ty as u};
