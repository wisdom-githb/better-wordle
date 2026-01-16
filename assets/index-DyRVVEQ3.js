const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FriendsModal-BKwxigYG.js","assets/vendor-CMRIJK_q.js","assets/useOneVOneGame-ptVklDsd.js","assets/GameToast-BgPhL8qo.js","assets/OpenRoomsModal-Blmu1mdz.js","assets/FeedbackModal-ZAHSnZK0.js","assets/OneVOneModal-BG0q9WQe.js","assets/Game-56fA5jAz.js","Game.css","assets/Profile-CrLC7LJ-.js","Profile.css","assets/Leaderboard-BccZH0D7.js","assets/useLeaderboard-D2UbEVW1.js","Leaderboard.css","assets/Faq-CpKJdRWI.js","Faq.css"])))=>i.map(i=>d[i]);
var Ac=Object.defineProperty;var Nc=(n,e,t)=>e in n?Ac(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Re=(n,e,t)=>Nc(n,typeof e!="symbol"?e+"":e,t);import{r as g,a as Pc,g as ji,R as ye,u as Wi,L as Ur,b as Oc,c as Dc,d as me,N as Mc,B as Lc}from"./vendor-CMRIJK_q.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();var oa={exports:{}},bs={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fc=g,Uc=Symbol.for("react.element"),jc=Symbol.for("react.fragment"),Wc=Object.prototype.hasOwnProperty,$c=Fc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bc={key:!0,ref:!0,__self:!0,__source:!0};function aa(n,e,t){var s,i={},r=null,o=null;t!==void 0&&(r=""+t),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(o=e.ref);for(s in e)Wc.call(e,s)&&!Bc.hasOwnProperty(s)&&(i[s]=e[s]);if(n&&n.defaultProps)for(s in e=n.defaultProps,e)i[s]===void 0&&(i[s]=e[s]);return{$$typeof:Uc,type:n,key:r,ref:o,props:i,_owner:$c.current}}bs.Fragment=jc;bs.jsx=aa;bs.jsxs=aa;oa.exports=bs;var h=oa.exports,fi={},jr=Pc;fi.createRoot=jr.createRoot,fi.hydrateRoot=jr.hydrateRoot;var Hc=typeof Element<"u",Vc=typeof Map=="function",zc=typeof Set=="function",Gc=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Vn(n,e){if(n===e)return!0;if(n&&e&&typeof n=="object"&&typeof e=="object"){if(n.constructor!==e.constructor)return!1;var t,s,i;if(Array.isArray(n)){if(t=n.length,t!=e.length)return!1;for(s=t;s--!==0;)if(!Vn(n[s],e[s]))return!1;return!0}var r;if(Vc&&n instanceof Map&&e instanceof Map){if(n.size!==e.size)return!1;for(r=n.entries();!(s=r.next()).done;)if(!e.has(s.value[0]))return!1;for(r=n.entries();!(s=r.next()).done;)if(!Vn(s.value[1],e.get(s.value[0])))return!1;return!0}if(zc&&n instanceof Set&&e instanceof Set){if(n.size!==e.size)return!1;for(r=n.entries();!(s=r.next()).done;)if(!e.has(s.value[0]))return!1;return!0}if(Gc&&ArrayBuffer.isView(n)&&ArrayBuffer.isView(e)){if(t=n.length,t!=e.length)return!1;for(s=t;s--!==0;)if(n[s]!==e[s])return!1;return!0}if(n.constructor===RegExp)return n.source===e.source&&n.flags===e.flags;if(n.valueOf!==Object.prototype.valueOf&&typeof n.valueOf=="function"&&typeof e.valueOf=="function")return n.valueOf()===e.valueOf();if(n.toString!==Object.prototype.toString&&typeof n.toString=="function"&&typeof e.toString=="function")return n.toString()===e.toString();if(i=Object.keys(n),t=i.length,t!==Object.keys(e).length)return!1;for(s=t;s--!==0;)if(!Object.prototype.hasOwnProperty.call(e,i[s]))return!1;if(Hc&&n instanceof Element)return!1;for(s=t;s--!==0;)if(!((i[s]==="_owner"||i[s]==="__v"||i[s]==="__o")&&n.$$typeof)&&!Vn(n[i[s]],e[i[s]]))return!1;return!0}return n!==n&&e!==e}var qc=function(e,t){try{return Vn(e,t)}catch(s){if((s.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw s}};const Kc=ji(qc);var Yc=function(n,e,t,s,i,r,o,a){if(!n){var l;if(e===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[t,s,i,r,o,a],d=0;l=new Error(e.replace(/%s/g,function(){return c[d++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},Qc=Yc;const Wr=ji(Qc);var Jc=function(e,t,s,i){var r=s?s.call(i,e,t):void 0;if(r!==void 0)return!!r;if(e===t)return!0;if(typeof e!="object"||!e||typeof t!="object"||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),c=0;c<o.length;c++){var d=o[c];if(!l(d))return!1;var u=e[d],f=t[d];if(r=s?s.call(i,u,f,d):void 0,r===!1||r===void 0&&u!==f)return!1}return!0};const Xc=ji(Jc);var la=(n=>(n.BASE="base",n.BODY="body",n.HEAD="head",n.HTML="html",n.LINK="link",n.META="meta",n.NOSCRIPT="noscript",n.SCRIPT="script",n.STYLE="style",n.TITLE="title",n.FRAGMENT="Symbol(react.fragment)",n))(la||{}),Vs={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},$r=Object.values(la),$i={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Zc=Object.entries($i).reduce((n,[e,t])=>(n[t]=e,n),{}),ve="data-rh",St={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Rt=(n,e)=>{for(let t=n.length-1;t>=0;t-=1){const s=n[t];if(Object.prototype.hasOwnProperty.call(s,e))return s[e]}return null},eu=n=>{let e=Rt(n,"title");const t=Rt(n,St.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),t&&e)return t.replace(/%s/g,()=>e);const s=Rt(n,St.DEFAULT_TITLE);return e||s||void 0},tu=n=>Rt(n,St.ON_CHANGE_CLIENT_STATE)||(()=>{}),zs=(n,e)=>e.filter(t=>typeof t[n]<"u").map(t=>t[n]).reduce((t,s)=>({...t,...s}),{}),nu=(n,e)=>e.filter(t=>typeof t.base<"u").map(t=>t.base).reverse().reduce((t,s)=>{if(!t.length){const i=Object.keys(s);for(let r=0;r<i.length;r+=1){const a=i[r].toLowerCase();if(n.indexOf(a)!==-1&&s[a])return t.concat(s)}}return t},[]),su=n=>console&&typeof console.warn=="function"&&console.warn(n),Yt=(n,e,t)=>{const s={};return t.filter(i=>Array.isArray(i[n])?!0:(typeof i[n]<"u"&&su(`Helmet: ${n} should be of type "Array". Instead found type "${typeof i[n]}"`),!1)).map(i=>i[n]).reverse().reduce((i,r)=>{const o={};r.filter(l=>{let c;const d=Object.keys(l);for(let f=0;f<d.length;f+=1){const p=d[f],_=p.toLowerCase();e.indexOf(_)!==-1&&!(c==="rel"&&l[c].toLowerCase()==="canonical")&&!(_==="rel"&&l[_].toLowerCase()==="stylesheet")&&(c=_),e.indexOf(p)!==-1&&(p==="innerHTML"||p==="cssText"||p==="itemprop")&&(c=p)}if(!c||!l[c])return!1;const u=l[c].toLowerCase();return s[c]||(s[c]={}),o[c]||(o[c]={}),s[c][u]?!1:(o[c][u]=!0,!0)}).reverse().forEach(l=>i.push(l));const a=Object.keys(o);for(let l=0;l<a.length;l+=1){const c=a[l],d={...s[c],...o[c]};s[c]=d}return i},[]).reverse()},iu=(n,e)=>{if(Array.isArray(n)&&n.length){for(let t=0;t<n.length;t+=1)if(n[t][e])return!0}return!1},ru=n=>({baseTag:nu(["href"],n),bodyAttributes:zs("bodyAttributes",n),defer:Rt(n,St.DEFER),encode:Rt(n,St.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:zs("htmlAttributes",n),linkTags:Yt("link",["rel","href"],n),metaTags:Yt("meta",["name","charset","http-equiv","property","itemprop"],n),noscriptTags:Yt("noscript",["innerHTML"],n),onChangeClientState:tu(n),scriptTags:Yt("script",["src","innerHTML"],n),styleTags:Yt("style",["cssText"],n),title:eu(n),titleAttributes:zs("titleAttributes",n),prioritizeSeoTags:iu(n,St.PRIORITIZE_SEO_TAGS)}),ca=n=>Array.isArray(n)?n.join(""):n,ou=(n,e)=>{const t=Object.keys(n);for(let s=0;s<t.length;s+=1)if(e[t[s]]&&e[t[s]].includes(n[t[s]]))return!0;return!1},Gs=(n,e)=>Array.isArray(n)?n.reduce((t,s)=>(ou(s,e)?t.priority.push(s):t.default.push(s),t),{priority:[],default:[]}):{default:n,priority:[]},Br=(n,e)=>({...n,[e]:void 0}),au=["noscript","script","style"],pi=(n,e=!0)=>e===!1?String(n):String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),ua=n=>Object.keys(n).reduce((e,t)=>{const s=typeof n[t]<"u"?`${t}="${n[t]}"`:`${t}`;return e?`${e} ${s}`:s},""),lu=(n,e,t,s)=>{const i=ua(t),r=ca(e);return i?`<${n} ${ve}="true" ${i}>${pi(r,s)}</${n}>`:`<${n} ${ve}="true">${pi(r,s)}</${n}>`},cu=(n,e,t=!0)=>e.reduce((s,i)=>{const r=i,o=Object.keys(r).filter(c=>!(c==="innerHTML"||c==="cssText")).reduce((c,d)=>{const u=typeof r[d]>"u"?d:`${d}="${pi(r[d],t)}"`;return c?`${c} ${u}`:u},""),a=r.innerHTML||r.cssText||"",l=au.indexOf(n)===-1;return`${s}<${n} ${ve}="true" ${o}${l?"/>":`>${a}</${n}>`}`},""),da=(n,e={})=>Object.keys(n).reduce((t,s)=>{const i=$i[s];return t[i||s]=n[s],t},e),uu=(n,e,t)=>{const s={key:e,[ve]:!0},i=da(t,s);return[ye.createElement("title",i,e)]},zn=(n,e)=>e.map((t,s)=>{const i={key:s,[ve]:!0};return Object.keys(t).forEach(r=>{const a=$i[r]||r;if(a==="innerHTML"||a==="cssText"){const l=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:l}}else i[a]=t[r]}),ye.createElement(n,i)}),de=(n,e,t=!0)=>{switch(n){case"title":return{toComponent:()=>uu(n,e.title,e.titleAttributes),toString:()=>lu(n,e.title,e.titleAttributes,t)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>da(e),toString:()=>ua(e)};default:return{toComponent:()=>zn(n,e),toString:()=>cu(n,e,t)}}},du=({metaTags:n,linkTags:e,scriptTags:t,encode:s})=>{const i=Gs(n,Vs.meta),r=Gs(e,Vs.link),o=Gs(t,Vs.script);return{priorityMethods:{toComponent:()=>[...zn("meta",i.priority),...zn("link",r.priority),...zn("script",o.priority)],toString:()=>`${de("meta",i.priority,s)} ${de("link",r.priority,s)} ${de("script",o.priority,s)}`},metaTags:i.default,linkTags:r.default,scriptTags:o.default}},hu=n=>{const{baseTag:e,bodyAttributes:t,encode:s=!0,htmlAttributes:i,noscriptTags:r,styleTags:o,title:a="",titleAttributes:l,prioritizeSeoTags:c}=n;let{linkTags:d,metaTags:u,scriptTags:f}=n,p={toComponent:()=>{},toString:()=>""};return c&&({priorityMethods:p,linkTags:d,metaTags:u,scriptTags:f}=du(n)),{priority:p,base:de("base",e,s),bodyAttributes:de("bodyAttributes",t,s),htmlAttributes:de("htmlAttributes",i,s),link:de("link",d,s),meta:de("meta",u,s),noscript:de("noscript",r,s),script:de("script",f,s),style:de("style",o,s),title:de("title",{title:a,titleAttributes:l},s)}},gi=hu,jn=[],ha=!!(typeof window<"u"&&window.document&&window.document.createElement),mi=class{constructor(n,e){Re(this,"instances",[]);Re(this,"canUseDOM",ha);Re(this,"context");Re(this,"value",{setHelmet:n=>{this.context.helmet=n},helmetInstances:{get:()=>this.canUseDOM?jn:this.instances,add:n=>{(this.canUseDOM?jn:this.instances).push(n)},remove:n=>{const e=(this.canUseDOM?jn:this.instances).indexOf(n);(this.canUseDOM?jn:this.instances).splice(e,1)}}});this.context=n,this.canUseDOM=e||!1,e||(n.helmet=gi({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},fu={},fa=ye.createContext(fu),lt,pa=(lt=class extends g.Component{constructor(t){super(t);Re(this,"helmetData");this.helmetData=new mi(this.props.context||{},lt.canUseDOM)}render(){return ye.createElement(fa.Provider,{value:this.helmetData.value},this.props.children)}},Re(lt,"canUseDOM",ha),lt),Et=(n,e)=>{const t=document.head||document.querySelector("head"),s=t.querySelectorAll(`${n}[${ve}]`),i=[].slice.call(s),r=[];let o;return e&&e.length&&e.forEach(a=>{const l=document.createElement(n);for(const c in a)if(Object.prototype.hasOwnProperty.call(a,c))if(c==="innerHTML")l.innerHTML=a.innerHTML;else if(c==="cssText")l.styleSheet?l.styleSheet.cssText=a.cssText:l.appendChild(document.createTextNode(a.cssText));else{const d=c,u=typeof a[d]>"u"?"":a[d];l.setAttribute(c,u)}l.setAttribute(ve,"true"),i.some((c,d)=>(o=d,l.isEqualNode(c)))?i.splice(o,1):r.push(l)}),i.forEach(a=>{var l;return(l=a.parentNode)==null?void 0:l.removeChild(a)}),r.forEach(a=>t.appendChild(a)),{oldTags:i,newTags:r}},_i=(n,e)=>{const t=document.getElementsByTagName(n)[0];if(!t)return;const s=t.getAttribute(ve),i=s?s.split(","):[],r=[...i],o=Object.keys(e);for(const a of o){const l=e[a]||"";t.getAttribute(a)!==l&&t.setAttribute(a,l),i.indexOf(a)===-1&&i.push(a);const c=r.indexOf(a);c!==-1&&r.splice(c,1)}for(let a=r.length-1;a>=0;a-=1)t.removeAttribute(r[a]);i.length===r.length?t.removeAttribute(ve):t.getAttribute(ve)!==o.join(",")&&t.setAttribute(ve,o.join(","))},pu=(n,e)=>{typeof n<"u"&&document.title!==n&&(document.title=ca(n)),_i("title",e)},Hr=(n,e)=>{const{baseTag:t,bodyAttributes:s,htmlAttributes:i,linkTags:r,metaTags:o,noscriptTags:a,onChangeClientState:l,scriptTags:c,styleTags:d,title:u,titleAttributes:f}=n;_i("body",s),_i("html",i),pu(u,f);const p={baseTag:Et("base",t),linkTags:Et("link",r),metaTags:Et("meta",o),noscriptTags:Et("noscript",a),scriptTags:Et("script",c),styleTags:Et("style",d)},_={},v={};Object.keys(p).forEach(R=>{const{newTags:j,oldTags:w}=p[R];j.length&&(_[R]=j),w.length&&(v[R]=p[R].oldTags)}),e&&e(),l(n,_,v)},Qt=null,gu=n=>{Qt&&cancelAnimationFrame(Qt),n.defer?Qt=requestAnimationFrame(()=>{Hr(n,()=>{Qt=null})}):(Hr(n),Qt=null)},mu=gu,Vr=class extends g.Component{constructor(){super(...arguments);Re(this,"rendered",!1)}shouldComponentUpdate(e){return!Xc(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:t}=this.props.context;let s=null;const i=ru(e.get().map(r=>{const o={...r.props};return delete o.context,o}));pa.canUseDOM?mu(i):gi&&(s=gi(i)),t(s)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},hi,_u=(hi=class extends g.Component{shouldComponentUpdate(n){return!Kc(Br(this.props,"helmetData"),Br(n,"helmetData"))}mapNestedChildrenToProps(n,e){if(!e)return null;switch(n.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${n.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(n,e,t,s){return{...e,[n.type]:[...e[n.type]||[],{...t,...this.mapNestedChildrenToProps(n,s)}]}}mapObjectTypeChildren(n,e,t,s){switch(n.type){case"title":return{...e,[n.type]:s,titleAttributes:{...t}};case"body":return{...e,bodyAttributes:{...t}};case"html":return{...e,htmlAttributes:{...t}};default:return{...e,[n.type]:{...t}}}}mapArrayTypeChildrenToProps(n,e){let t={...e};return Object.keys(n).forEach(s=>{t={...t,[s]:n[s]}}),t}warnOnInvalidChildren(n,e){return Wr($r.some(t=>n.type===t),typeof n.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${$r.join(", ")} are allowed. Helmet does not support rendering <${n.type}> elements. Refer to our API for more information.`),Wr(!e||typeof e=="string"||Array.isArray(e)&&!e.some(t=>typeof t!="string"),`Helmet expects a string as a child of <${n.type}>. Did you forget to wrap your children in braces? ( <${n.type}>{\`\`}</${n.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(n,e){let t={};return ye.Children.forEach(n,s=>{if(!s||!s.props)return;const{children:i,...r}=s.props,o=Object.keys(r).reduce((l,c)=>(l[Zc[c]||c]=r[c],l),{});let{type:a}=s;switch(typeof a=="symbol"?a=a.toString():this.warnOnInvalidChildren(s,i),a){case"Symbol(react.fragment)":e=this.mapChildrenToProps(i,e);break;case"link":case"meta":case"noscript":case"script":case"style":t=this.flattenArrayTypeChildren(s,t,o,i);break;default:e=this.mapObjectTypeChildren(s,e,o,i);break}}),this.mapArrayTypeChildrenToProps(t,e)}render(){const{children:n,...e}=this.props;let t={...e},{helmetData:s}=e;if(n&&(t=this.mapChildrenToProps(n,t)),s&&!(s instanceof mi)){const i=s;s=new mi(i.context,!0),delete t.helmetData}return s?ye.createElement(Vr,{...t,context:s.value}):ye.createElement(fa.Consumer,null,i=>ye.createElement(Vr,{...t,context:i}))}},Re(hi,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),hi);const yu="modulepreload",vu=function(n){return"/better-wordle/"+n},zr={},Ze=function(e,t,s){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(t.map(l=>{if(l=vu(l),l in zr)return;zr[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":yu,c||(u.as="script"),u.crossOrigin="",u.href=l,a&&u.setAttribute("nonce",a),document.head.appendChild(u),c)return new Promise((f,p)=>{u.addEventListener("load",f),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};function Gr(n){if(!n)return[];const e=["a[href]","button:not([disabled])","textarea:not([disabled])","input:not([disabled])","select:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(",");return Array.from(n.querySelectorAll(e))}function ga({isOpen:n,titleId:e,onRequestClose:t,children:s,zIndex:i=2e3,disableAutoFocus:r=!1}){const o=g.useRef(null),a=g.useRef(null);return g.useEffect(()=>{if(!n)return;a.current=document.activeElement;const l=document.body.style.overflow;document.body.style.overflow="hidden";const c=()=>{var _;if(r)return;const f=document.activeElement;if(f&&o.current&&o.current.contains(f))return;const p=Gr(o.current);p.length>0?p[0].focus():(_=o.current)==null||_.focus()},d=window.setTimeout(c,0),u=f=>{if(f.key==="Escape"){f.preventDefault(),t==null||t();return}if(f.key!=="Tab")return;const p=Gr(o.current);if(p.length===0){f.preventDefault();return}const _=p[0],v=p[p.length-1],R=document.activeElement;f.shiftKey?(R===_||!o.current.contains(R))&&(f.preventDefault(),v.focus()):R===v&&(f.preventDefault(),_.focus())};return document.addEventListener("keydown",u,!0),()=>{window.clearTimeout(d),document.body.style.overflow=l,document.removeEventListener("keydown",u,!0),a.current&&typeof a.current.focus=="function"&&a.current.focus()}},[n]),n?h.jsx("div",{className:"modalOverlay",style:{zIndex:i},onMouseDown:t,children:h.jsx("div",{className:"modalPanel",role:"dialog","aria-modal":"true","aria-labelledby":e,ref:o,tabIndex:-1,onMouseDown:l=>l.stopPropagation(),children:s})}):null}var qr={};/**
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
 */const ma={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const m=function(n,e){if(!n)throw Wt(e)},Wt=function(n){return new Error("Firebase Database ("+ma.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const _a=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},wu=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Bi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,d=r>>2,u=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),s.push(t[d],t[u],t[f],t[p])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(_a(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):wu(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const u=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||u==null)throw new Eu;const f=r<<2|a>>4;if(s.push(f),c!==64){const p=a<<4&240|c>>2;if(s.push(p),u!==64){const _=c<<6&192|u;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Eu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ya=function(n){const e=_a(n);return Bi.encodeByteArray(e,!0)},Xn=function(n){return ya(n).replace(/\./g,"")},Zn=function(n){try{return Bi.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Iu(n){return va(void 0,n)}function va(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!bu(t)||(n[t]=va(n[t],e[t]));return n}function bu(n){return n!=="__proto__"}/**
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
 */function Cu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Tu=()=>Cu().__FIREBASE_DEFAULTS__,Su=()=>{if(typeof process>"u"||typeof qr>"u")return;const n=qr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ru=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Zn(n[1]);return e&&JSON.parse(e)},Hi=()=>{try{return Tu()||Su()||Ru()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},wa=n=>{var e,t;return(t=(e=Hi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ku=n=>{const e=wa(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ea=()=>{var n;return(n=Hi())===null||n===void 0?void 0:n.config},Ia=n=>{var e;return(e=Hi())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Rn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function xu(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Xn(JSON.stringify(t)),Xn(JSON.stringify(o)),""].join(".")}/**
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
 */function se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vi(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(se())}function Au(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ba(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Nu(){const n=se();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Pu(){return ma.NODE_ADMIN===!0}function Ou(){try{return typeof indexedDB=="object"}catch{return!1}}function Du(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const Mu="FirebaseError";class et extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Mu,Object.setPrototypeOf(this,et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kn.prototype.create)}}class kn{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Lu(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new et(i,a,s)}}function Lu(n,e){return n.replace(Fu,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Fu=/\{\$([^}]+)}/g;/**
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
 */function fn(n){return JSON.parse(n)}function Q(n){return JSON.stringify(n)}/**
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
 */const Ca=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=fn(Zn(r[0])||""),t=fn(Zn(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},Uu=function(n){const e=Ca(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},ju=function(n){const e=Ca(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Te(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Pt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function yi(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function es(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function ts(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Kr(r)&&Kr(o)){if(!ts(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Kr(n){return n!==null&&typeof n=="object"}/**
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
 */function $t(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function sn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function rn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class Wu{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)s[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const f=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),d=1518500249):(c=r^o^a,d=1859775393):u<60?(c=r&o|a&(r|o),d=2400959708):(c=r^o^a,d=3395469782);const f=(i<<5|i>>>27)+c+l+d+s[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function $u(n,e){const t=new Bu(n,e);return t.subscribe.bind(t)}class Bu{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Hu(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=qs),i.error===void 0&&(i.error=qs),i.complete===void 0&&(i.complete=qs);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hu(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function qs(){}function Cs(n,e){return`${n} failed: ${e} argument `}/**
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
 */const Vu=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,m(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ts=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function H(n){return n&&n._delegate?n._delegate:n}class ut{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const rt="[DEFAULT]";/**
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
 */class zu{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Rn;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qu(e))try{this.getOrInitializeService({instanceIdentifier:rt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=rt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rt){return this.instances.has(e)}getOptions(e=rt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Gu(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=rt){return this.component?this.component.multipleInstances?e:rt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gu(n){return n===rt?void 0:n}function qu(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ku{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new zu(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var D;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(D||(D={}));const Yu={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},Qu=D.INFO,Ju={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},Xu=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Ju[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zi{constructor(e){this.name=e,this._logLevel=Qu,this._logHandler=Xu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in D))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...e),this._logHandler(this,D.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...e),this._logHandler(this,D.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,D.INFO,...e),this._logHandler(this,D.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,D.WARN,...e),this._logHandler(this,D.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...e),this._logHandler(this,D.ERROR,...e)}}const Zu=(n,e)=>e.some(t=>n instanceof t);let Yr,Qr;function ed(){return Yr||(Yr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function td(){return Qr||(Qr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ta=new WeakMap,vi=new WeakMap,Sa=new WeakMap,Ks=new WeakMap,Gi=new WeakMap;function nd(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(ze(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ta.set(t,n)}).catch(()=>{}),Gi.set(e,n),e}function sd(n){if(vi.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});vi.set(n,e)}let wi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return vi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Sa.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ze(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function id(n){wi=n(wi)}function rd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Ys(this),e,...t);return Sa.set(s,e.sort?e.sort():[e]),ze(s)}:td().includes(n)?function(...e){return n.apply(Ys(this),e),ze(Ta.get(this))}:function(...e){return ze(n.apply(Ys(this),e))}}function od(n){return typeof n=="function"?rd(n):(n instanceof IDBTransaction&&sd(n),Zu(n,ed())?new Proxy(n,wi):n)}function ze(n){if(n instanceof IDBRequest)return nd(n);if(Ks.has(n))return Ks.get(n);const e=od(n);return e!==n&&(Ks.set(n,e),Gi.set(e,n)),e}const Ys=n=>Gi.get(n);function ad(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=ze(o);return s&&o.addEventListener("upgradeneeded",l=>{s(ze(o.result),l.oldVersion,l.newVersion,ze(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const ld=["get","getKey","getAll","getAllKeys","count"],cd=["put","add","delete","clear"],Qs=new Map;function Jr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Qs.get(e))return Qs.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=cd.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ld.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return Qs.set(e,r),r}id(n=>({...n,get:(e,t,s)=>Jr(e,t)||n.get(e,t,s),has:(e,t)=>!!Jr(e,t)||n.has(e,t)}));/**
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
 */class ud{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(dd(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function dd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ei="@firebase/app",Xr="0.9.13";/**
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
 */const dt=new zi("@firebase/app"),hd="@firebase/app-compat",fd="@firebase/analytics-compat",pd="@firebase/analytics",gd="@firebase/app-check-compat",md="@firebase/app-check",_d="@firebase/auth",yd="@firebase/auth-compat",vd="@firebase/database",wd="@firebase/database-compat",Ed="@firebase/functions",Id="@firebase/functions-compat",bd="@firebase/installations",Cd="@firebase/installations-compat",Td="@firebase/messaging",Sd="@firebase/messaging-compat",Rd="@firebase/performance",kd="@firebase/performance-compat",xd="@firebase/remote-config",Ad="@firebase/remote-config-compat",Nd="@firebase/storage",Pd="@firebase/storage-compat",Od="@firebase/firestore",Dd="@firebase/firestore-compat",Md="firebase",Ld="9.23.0";/**
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
 */const Ii="[DEFAULT]",Fd={[Ei]:"fire-core",[hd]:"fire-core-compat",[pd]:"fire-analytics",[fd]:"fire-analytics-compat",[md]:"fire-app-check",[gd]:"fire-app-check-compat",[_d]:"fire-auth",[yd]:"fire-auth-compat",[vd]:"fire-rtdb",[wd]:"fire-rtdb-compat",[Ed]:"fire-fn",[Id]:"fire-fn-compat",[bd]:"fire-iid",[Cd]:"fire-iid-compat",[Td]:"fire-fcm",[Sd]:"fire-fcm-compat",[Rd]:"fire-perf",[kd]:"fire-perf-compat",[xd]:"fire-rc",[Ad]:"fire-rc-compat",[Nd]:"fire-gcs",[Pd]:"fire-gcs-compat",[Od]:"fire-fst",[Dd]:"fire-fst-compat","fire-js":"fire-js",[Md]:"fire-js-all"};/**
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
 */const ns=new Map,bi=new Map;function Ud(n,e){try{n.container.addComponent(e)}catch(t){dt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ot(n){const e=n.name;if(bi.has(e))return dt.debug(`There were multiple attempts to register component ${e}.`),!1;bi.set(e,n);for(const t of ns.values())Ud(t,n);return!0}function qi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const jd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ge=new kn("app","Firebase",jd);/**
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
 */class Wd{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ge.create("app-deleted",{appName:this._name})}}/**
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
 */const Bt=Ld;function Ra(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ii,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ge.create("bad-app-name",{appName:String(i)});if(t||(t=Ea()),!t)throw Ge.create("no-options");const r=ns.get(i);if(r){if(ts(t,r.options)&&ts(s,r.config))return r;throw Ge.create("duplicate-app",{appName:i})}const o=new Ku(i);for(const l of bi.values())o.addComponent(l);const a=new Wd(t,s,o);return ns.set(i,a),a}function ka(n=Ii){const e=ns.get(n);if(!e&&n===Ii&&Ea())return Ra();if(!e)throw Ge.create("no-app",{appName:n});return e}function qe(n,e,t){var s;let i=(s=Fd[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dt.warn(a.join(" "));return}Ot(new ut(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const $d="firebase-heartbeat-database",Bd=1,pn="firebase-heartbeat-store";let Js=null;function xa(){return Js||(Js=ad($d,Bd,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(pn)}}}).catch(n=>{throw Ge.create("idb-open",{originalErrorMessage:n.message})})),Js}async function Hd(n){try{return await(await xa()).transaction(pn).objectStore(pn).get(Aa(n))}catch(e){if(e instanceof et)dt.warn(e.message);else{const t=Ge.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dt.warn(t.message)}}}async function Zr(n,e){try{const s=(await xa()).transaction(pn,"readwrite");await s.objectStore(pn).put(e,Aa(n)),await s.done}catch(t){if(t instanceof et)dt.warn(t.message);else{const s=Ge.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});dt.warn(s.message)}}}function Aa(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Vd=1024,zd=30*24*60*60*1e3;class Gd{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Kd(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=eo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=zd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=eo(),{heartbeatsToSend:t,unsentEntries:s}=qd(this._heartbeatsCache.heartbeats),i=Xn(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function eo(){return new Date().toISOString().substring(0,10)}function qd(n,e=Vd){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),to(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),to(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Kd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ou()?Du().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Hd(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function to(n){return Xn(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Yd(n){Ot(new ut("platform-logger",e=>new ud(e),"PRIVATE")),Ot(new ut("heartbeat",e=>new Gd(e),"PRIVATE")),qe(Ei,Xr,n),qe(Ei,Xr,"esm2017"),qe("fire-js","")}Yd("");function Ki(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(t[s[i]]=n[s[i]]);return t}function Na(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qd=Na,Pa=new kn("auth","Firebase",Na());/**
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
 */const ss=new zi("@firebase/auth");function Jd(n,...e){ss.logLevel<=D.WARN&&ss.warn(`Auth (${Bt}): ${n}`,...e)}function Gn(n,...e){ss.logLevel<=D.ERROR&&ss.error(`Auth (${Bt}): ${n}`,...e)}/**
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
 */function fe(n,...e){throw Yi(n,...e)}function be(n,...e){return Yi(n,...e)}function Oa(n,e,t){const s=Object.assign(Object.assign({},Qd()),{[e]:t});return new kn("auth","Firebase",s).create(e,{appName:n.name})}function Da(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&fe(n,"argument-error"),Oa(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Yi(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Pa.create(n,...e)}function S(n,e,...t){if(!n)throw Yi(e,...t)}function Ae(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Gn(e),new Error(e)}function De(n,e){n||Ae(e)}/**
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
 */function is(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ma(){return no()==="http:"||no()==="https:"}function no(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Xd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ma()||Au()||"connection"in navigator)?navigator.onLine:!0}function Zd(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class xn{constructor(e,t){this.shortDelay=e,this.longDelay=t,De(t>e,"Short delay should be less than long delay!"),this.isMobile=Vi()||ba()}get(){return Xd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qi(n,e){De(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class La{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ae("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ae("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ae("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const eh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const th=new xn(3e4,6e4);function tt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Le(n,e,t,s,i={}){return Fa(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=$t(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),La.fetch()(Ua(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Fa(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},eh),e);try{const i=new nh(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Wn(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wn(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Wn(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Wn(n,"user-disabled",o);const d=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Oa(n,d,c);fe(n,d)}}catch(i){if(i instanceof et)throw i;fe(n,"network-request-failed",{message:String(i)})}}async function An(n,e,t,s,i={}){const r=await Le(n,e,t,s,i);return"mfaPendingCredential"in r&&fe(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Ua(n,e,t,s){const i=`${e}${t}?${s}`;return n.config.emulator?Qi(n.config,i):`${n.config.apiScheme}://${i}`}class nh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(be(this.auth,"network-request-failed")),th.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wn(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=be(n,e,s);return i.customData._tokenResponse=t,i}/**
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
 */async function sh(n,e){return Le(n,"POST","/v1/accounts:delete",e)}async function ih(n,e){return Le(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function an(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rh(n,e=!1){const t=H(n),s=await t.getIdToken(e),i=Ji(s);S(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:an(Xs(i.auth_time)),issuedAtTime:an(Xs(i.iat)),expirationTime:an(Xs(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Xs(n){return Number(n)*1e3}function Ji(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Gn("JWT malformed, contained fewer than 3 sections"),null;try{const i=Zn(t);return i?JSON.parse(i):(Gn("Failed to decode base64 JWT payload"),null)}catch(i){return Gn("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function oh(n){const e=Ji(n);return S(e,"internal-error"),S(typeof e.exp<"u","internal-error"),S(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Dt(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof et&&ah(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function ah({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class lh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ja{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=an(this.lastLoginAt),this.creationTime=an(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function rs(n){var e;const t=n.auth,s=await n.getIdToken(),i=await Dt(n,ih(t,{idToken:s}));S(i==null?void 0:i.users.length,t,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?dh(r.providerUserInfo):[],a=uh(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ja(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,u)}async function ch(n){const e=H(n);await rs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uh(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function dh(n){return n.map(e=>{var{providerId:t}=e,s=Ki(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function hh(n,e){const t=await Fa(n,{},async()=>{const s=$t({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=Ua(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",La.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class gn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S(typeof e.idToken<"u","internal-error"),S(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):oh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return S(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await hh(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new gn;return s&&(S(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(S(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(S(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gn,this.toJSON())}_performRefresh(){return Ae("not implemented")}}/**
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
 */function je(n,e){S(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ct{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,r=Ki(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ja(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Dt(this,this.stsTokenManager.getToken(this.auth,e));return S(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return rh(this,e)}reload(){return ch(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ct(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await rs(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Dt(this,sh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,r,o,a,l,c,d;const u=(s=t.displayName)!==null&&s!==void 0?s:void 0,f=(i=t.email)!==null&&i!==void 0?i:void 0,p=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=t.photoURL)!==null&&o!==void 0?o:void 0,v=(a=t.tenantId)!==null&&a!==void 0?a:void 0,R=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,j=(c=t.createdAt)!==null&&c!==void 0?c:void 0,w=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:P,emailVerified:ue,isAnonymous:Ie,providerData:q,stsTokenManager:Ue}=t;S(P&&Ue,e,"internal-error");const qt=gn.fromJSON(this.name,Ue);S(typeof P=="string",e,"internal-error"),je(u,e.name),je(f,e.name),S(typeof ue=="boolean",e,"internal-error"),S(typeof Ie=="boolean",e,"internal-error"),je(p,e.name),je(_,e.name),je(v,e.name),je(R,e.name),je(j,e.name),je(w,e.name);const nt=new ct({uid:P,auth:e,email:f,emailVerified:ue,displayName:u,isAnonymous:Ie,photoURL:_,phoneNumber:p,tenantId:v,stsTokenManager:qt,createdAt:j,lastLoginAt:w});return q&&Array.isArray(q)&&(nt.providerData=q.map(wt=>Object.assign({},wt))),R&&(nt._redirectEventId=R),nt}static async _fromIdTokenResponse(e,t,s=!1){const i=new gn;i.updateFromServerResponse(t);const r=new ct({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await rs(r),r}}/**
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
 */const so=new Map;function Ne(n){De(n instanceof Function,"Expected a class definition");let e=so.get(n);return e?(De(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,so.set(n,e),e)}/**
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
 */class Wa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Wa.type="NONE";const io=Wa;/**
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
 */function qn(n,e,t){return`firebase:${n}:${e}:${t}`}class kt{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=qn(this.userKey,i.apiKey,r),this.fullPersistenceKey=qn("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ct._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new kt(Ne(io),e,s);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Ne(io);const o=qn(s,e.config.apiKey,e.name);let a=null;for(const c of t)try{const d=await c._get(o);if(d){const u=ct._fromJSON(e,d);c!==r&&(a=u),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new kt(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new kt(r,e,s))}}/**
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
 */function ro(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ha(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($a(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(za(e))return"Blackberry";if(Ga(e))return"Webos";if(Xi(e))return"Safari";if((e.includes("chrome/")||Ba(e))&&!e.includes("edge/"))return"Chrome";if(Va(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function $a(n=se()){return/firefox\//i.test(n)}function Xi(n=se()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ba(n=se()){return/crios\//i.test(n)}function Ha(n=se()){return/iemobile/i.test(n)}function Va(n=se()){return/android/i.test(n)}function za(n=se()){return/blackberry/i.test(n)}function Ga(n=se()){return/webos/i.test(n)}function Ss(n=se()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function fh(n=se()){var e;return Ss(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ph(){return Nu()&&document.documentMode===10}function qa(n=se()){return Ss(n)||Va(n)||Ga(n)||za(n)||/windows phone/i.test(n)||Ha(n)}function gh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ka(n,e=[]){let t;switch(n){case"Browser":t=ro(se());break;case"Worker":t=`${ro(se())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Bt}/${s}`}async function Ya(n,e){return Le(n,"GET","/v2/recaptchaConfig",tt(n,e))}function oo(n){return n!==void 0&&n.enterprise!==void 0}class Qa{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
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
 */function mh(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Ja(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=be("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",mh().appendChild(s)})}function _h(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const yh="https://www.google.com/recaptcha/enterprise.js?render=",vh="recaptcha-enterprise",wh="NO_RECAPTCHA";class Xa{constructor(e){this.type=vh,this.auth=_t(e)}async verify(e="verify",t=!1){async function s(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Ya(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Qa(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;oo(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(wh)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!t&&oo(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ja(yh+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function os(n,e,t,s=!1){const i=new Xa(n);let r;try{r=await i.verify(t)}catch{r=await i.verify(t,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class Eh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class Ih{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ao(this),this.idTokenSubscription=new ao(this),this.beforeStateQueue=new Eh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pa,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ne(t)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await kt.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await rs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Zd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?H(e):null;return t&&S(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ne(e))})}async initializeRecaptchaConfig(){const e=await Ya(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Qa(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new Xa(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new kn("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ne(e)||this._popupRedirectResolver;S(t,this,"argument-error"),this.redirectPersistenceManager=await kt.create(this,[Ne(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return S(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,s,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ka(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Jd(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function _t(n){return H(n)}class ao{constructor(e){this.auth=e,this.observer=null,this.addObserver=$u(t=>this.observer=t)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function bh(n,e){const t=qi(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(ts(r,e??{}))return i;fe(i,"already-initialized")}return t.initialize({options:e})}function Ch(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Ne);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Th(n,e,t){const s=_t(n);S(s._canInitEmulator,s,"emulator-config-failed"),S(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Za(e),{host:o,port:a}=Sh(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),Rh()}function Za(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Sh(n){const e=Za(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:lo(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:lo(o)}}}function lo(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Rh(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Zi{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ae("not implemented")}_getIdTokenResponse(e){return Ae("not implemented")}_linkToIdToken(e,t){return Ae("not implemented")}_getReauthenticationResolver(e){return Ae("not implemented")}}async function kh(n,e){return Le(n,"POST","/v1/accounts:update",e)}/**
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
 */async function Zs(n,e){return An(n,"POST","/v1/accounts:signInWithPassword",tt(n,e))}async function xh(n,e){return Le(n,"POST","/v1/accounts:sendOobCode",tt(n,e))}async function Ah(n,e){return xh(n,e)}/**
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
 */async function Nh(n,e){return An(n,"POST","/v1/accounts:signInWithEmailLink",tt(n,e))}async function Ph(n,e){return An(n,"POST","/v1/accounts:signInWithEmailLink",tt(n,e))}/**
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
 */class mn extends Zi{constructor(e,t,s,i=null){super("password",s),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new mn(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new mn(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const i=await os(e,s,"signInWithPassword");return Zs(e,i)}else return Zs(e,s).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await os(e,s,"signInWithPassword");return Zs(e,r)}else return Promise.reject(i)});case"emailLink":return Nh(e,{email:this._email,oobCode:this._password});default:fe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return kh(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ph(e,{idToken:t,email:this._email,oobCode:this._password});default:fe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function xt(n,e){return An(n,"POST","/v1/accounts:signInWithIdp",tt(n,e))}/**
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
 */const Oh="http://localhost";class ht extends Zi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ht(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):fe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=t,r=Ki(t,["providerId","signInMethod"]);if(!s||!i)return null;const o=new ht(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return xt(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,xt(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xt(e,t)}buildRequest(){const e={requestUri:Oh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=$t(t)}return e}}/**
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
 */function Dh(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Mh(n){const e=sn(rn(n)).link,t=e?sn(rn(e)).deep_link_id:null,s=sn(rn(n)).deep_link_id;return(s?sn(rn(s)).link:null)||s||t||e||n}class er{constructor(e){var t,s,i,r,o,a;const l=sn(rn(e)),c=(t=l.apiKey)!==null&&t!==void 0?t:null,d=(s=l.oobCode)!==null&&s!==void 0?s:null,u=Dh((i=l.mode)!==null&&i!==void 0?i:null);S(c&&d&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=d,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Mh(e);try{return new er(t)}catch{return null}}}/**
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
 */class Ht{constructor(){this.providerId=Ht.PROVIDER_ID}static credential(e,t){return mn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=er.parseLink(t);return S(s,"argument-error"),mn._fromEmailAndCode(e,s.code,s.tenantId)}}Ht.PROVIDER_ID="password";Ht.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ht.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Rs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Nn extends Rs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class We extends Nn{constructor(){super("facebook.com")}static credential(e){return ht._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return We.credential(e.oauthAccessToken)}catch{return null}}}We.FACEBOOK_SIGN_IN_METHOD="facebook.com";We.PROVIDER_ID="facebook.com";/**
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
 */class xe extends Nn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ht._fromParams({providerId:xe.PROVIDER_ID,signInMethod:xe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return xe.credentialFromTaggedObject(e)}static credentialFromError(e){return xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return xe.credential(t,s)}catch{return null}}}xe.GOOGLE_SIGN_IN_METHOD="google.com";xe.PROVIDER_ID="google.com";/**
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
 */class $e extends Nn{constructor(){super("github.com")}static credential(e){return ht._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $e.credentialFromTaggedObject(e)}static credentialFromError(e){return $e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $e.credential(e.oauthAccessToken)}catch{return null}}}$e.GITHUB_SIGN_IN_METHOD="github.com";$e.PROVIDER_ID="github.com";/**
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
 */class Be extends Nn{constructor(){super("twitter.com")}static credential(e,t){return ht._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Be.credential(t,s)}catch{return null}}}Be.TWITTER_SIGN_IN_METHOD="twitter.com";Be.PROVIDER_ID="twitter.com";/**
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
 */async function ei(n,e){return An(n,"POST","/v1/accounts:signUp",tt(n,e))}/**
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
 */class ft{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await ct._fromIdTokenResponse(e,s,i),o=co(s);return new ft({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=co(s);return new ft({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function co(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class as extends et{constructor(e,t,s,i){var r;super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,as.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new as(e,t,s,i)}}function el(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?as._fromErrorAndOperation(n,r,e,s):r})}async function Lh(n,e,t=!1){const s=await Dt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ft._forOperation(n,"link",s)}/**
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
 */async function Fh(n,e,t=!1){const{auth:s}=n,i="reauthenticate";try{const r=await Dt(n,el(s,i,e,n),t);S(r.idToken,s,"internal-error");const o=Ji(r.idToken);S(o,s,"internal-error");const{sub:a}=o;return S(n.uid===a,s,"user-mismatch"),ft._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&fe(s,"user-mismatch"),r}}/**
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
 */async function tl(n,e,t=!1){const s="signIn",i=await el(n,s,e),r=await ft._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}async function Uh(n,e){return tl(_t(n),e)}async function jh(n,e,t){var s;const i=_t(n),r={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let o;if(!((s=i._getRecaptchaConfig())===null||s===void 0)&&s.emailPasswordEnabled){const c=await os(i,r,"signUpPassword");o=ei(i,c)}else o=ei(i,r).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const d=await os(i,r,"signUpPassword");return ei(i,d)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await ft._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function Wh(n,e,t){return Uh(H(n),Ht.credential(e,t))}/**
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
 */async function $h(n,e){return Le(n,"POST","/v1/accounts:createAuthUri",tt(n,e))}/**
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
 */async function Bh(n,e){const t=Ma()?is():"http://localhost",s={identifier:e,continueUri:t},{signinMethods:i}=await $h(H(n),s);return i||[]}async function uo(n,e){const t=H(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:r}=await Ah(t.auth,i);r!==n.email&&await n.reload()}/**
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
 */async function Hh(n,e){return Le(n,"POST","/v1/accounts:update",e)}/**
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
 */async function ho(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=H(n),r={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Dt(s,Hh(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function Vh(n,e,t,s){return H(n).onIdTokenChanged(e,t,s)}function zh(n,e,t){return H(n).beforeAuthStateChanged(e,t)}function Gh(n,e,t,s){return H(n).onAuthStateChanged(e,t,s)}function qh(n){return H(n).signOut()}const ls="__sak";/**
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
 */class nl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ls,"1"),this.storage.removeItem(ls),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Kh(){const n=se();return Xi(n)||Ss(n)}const Yh=1e3,Qh=10;class sl extends nl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Kh()&&gh(),this.fallbackToPolling=qa(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);ph()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Qh):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Yh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}sl.type="LOCAL";const Jh=sl;/**
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
 */class il extends nl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}il.type="SESSION";const rl=il;/**
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
 */function Xh(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ks{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new ks(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await Xh(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ks.receivers=[];/**
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
 */function tr(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Zh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=tr("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(u){const f=u;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(d),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ce(){return window}function ef(n){Ce().location.href=n}/**
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
 */function ol(){return typeof Ce().WorkerGlobalScope<"u"&&typeof Ce().importScripts=="function"}async function tf(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nf(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function sf(){return ol()?self:null}/**
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
 */const al="firebaseLocalStorageDb",rf=1,cs="firebaseLocalStorage",ll="fbase_key";class Pn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function xs(n,e){return n.transaction([cs],e?"readwrite":"readonly").objectStore(cs)}function of(){const n=indexedDB.deleteDatabase(al);return new Pn(n).toPromise()}function Ci(){const n=indexedDB.open(al,rf);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(cs,{keyPath:ll})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(cs)?e(s):(s.close(),await of(),e(await Ci()))})})}async function fo(n,e,t){const s=xs(n,!0).put({[ll]:e,value:t});return new Pn(s).toPromise()}async function af(n,e){const t=xs(n,!1).get(e),s=await new Pn(t).toPromise();return s===void 0?null:s.value}function po(n,e){const t=xs(n,!0).delete(e);return new Pn(t).toPromise()}const lf=800,cf=3;class cl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ci(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>cf)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ol()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ks._getInstance(sf()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await tf(),!this.activeServiceWorker)return;this.sender=new Zh(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ci();return await fo(e,ls,"1"),await po(e,ls),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>fo(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>af(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>po(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=xs(i,!1).getAll();return new Pn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cl.type="LOCAL";const uf=cl;new xn(3e4,6e4);/**
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
 */function nr(n,e){return e?Ne(e):(S(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class sr extends Zi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function df(n){return tl(n.auth,new sr(n),n.bypassAuthState)}function hf(n){const{auth:e,user:t}=n;return S(t,e,"internal-error"),Fh(t,new sr(n),n.bypassAuthState)}async function ff(n){const{auth:e,user:t}=n;return S(t,e,"internal-error"),Lh(t,new sr(n),n.bypassAuthState)}/**
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
 */class ul{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return df;case"linkViaPopup":case"linkViaRedirect":return ff;case"reauthViaPopup":case"reauthViaRedirect":return hf;default:fe(this.auth,"internal-error")}}resolve(e){De(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){De(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const pf=new xn(2e3,1e4);async function gf(n,e,t){const s=_t(n);Da(n,e,Rs);const i=nr(s,t);return new He(s,"signInViaPopup",e,i).executeNotNull()}async function mf(n,e,t){const s=H(n);Da(s.auth,e,Rs);const i=nr(s.auth,t);return new He(s.auth,"linkViaPopup",e,i,s).executeNotNull()}class He extends ul{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,He.currentPopupAction&&He.currentPopupAction.cancel(),He.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){De(this.filter.length===1,"Popup operations only handle one event");const e=tr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,He.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(be(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pf.get())};e()}}He.currentPopupAction=null;/**
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
 */const _f="pendingRedirect",Kn=new Map;class yf extends ul{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Kn.get(this.auth._key());if(!e){try{const s=await vf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Kn.set(this.auth._key(),e)}return this.bypassAuthState||Kn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vf(n,e){const t=If(e),s=Ef(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function wf(n,e){Kn.set(n._key(),e)}function Ef(n){return Ne(n._redirectPersistence)}function If(n){return qn(_f,n.config.apiKey,n.name)}async function bf(n,e,t=!1){const s=_t(n),i=nr(s,e),o=await new yf(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Cf=10*60*1e3;class Tf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Sf(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!dl(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(be(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Cf&&this.cachedEventUids.clear(),this.cachedEventUids.has(go(e))}saveEventToCache(e){this.cachedEventUids.add(go(e)),this.lastProcessedEventTime=Date.now()}}function go(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function dl({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Sf(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dl(n);default:return!1}}/**
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
 */async function Rf(n,e={}){return Le(n,"GET","/v1/projects",e)}/**
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
 */const kf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xf=/^https?/;async function Af(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Rf(n);for(const t of e)try{if(Nf(t))return}catch{}fe(n,"unauthorized-domain")}function Nf(n){const e=is(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!xf.test(t))return!1;if(kf.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Pf=new xn(3e4,6e4);function mo(){const n=Ce().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Of(n){return new Promise((e,t)=>{var s,i,r;function o(){mo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mo(),t(be(n,"network-request-failed"))},timeout:Pf.get()})}if(!((i=(s=Ce().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Ce().gapi)===null||r===void 0)&&r.load)o();else{const a=_h("iframefcb");return Ce()[a]=()=>{gapi.load?o():t(be(n,"network-request-failed"))},Ja(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Yn=null,e})}let Yn=null;function Df(n){return Yn=Yn||Of(n),Yn}/**
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
 */const Mf=new xn(5e3,15e3),Lf="__/auth/iframe",Ff="emulator/auth/iframe",Uf={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jf=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wf(n){const e=n.config;S(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Qi(e,Ff):`https://${n.config.authDomain}/${Lf}`,s={apiKey:e.apiKey,appName:n.name,v:Bt},i=jf.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${$t(s).slice(1)}`}async function $f(n){const e=await Df(n),t=Ce().gapi;return S(t,n,"internal-error"),e.open({where:document.body,url:Wf(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Uf,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=be(n,"network-request-failed"),a=Ce().setTimeout(()=>{r(o)},Mf.get());function l(){Ce().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Bf={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Hf=500,Vf=600,zf="_blank",Gf="http://localhost";class _o{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qf(n,e,t,s=Hf,i=Vf){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Bf),{width:s.toString(),height:i.toString(),top:r,left:o}),c=se().toLowerCase();t&&(a=Ba(c)?zf:t),$a(c)&&(e=e||Gf,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[p,_])=>`${f}${p}=${_},`,"");if(fh(c)&&a!=="_self")return Kf(e||"",a),new _o(null);const u=window.open(e||"",a,d);S(u,n,"popup-blocked");try{u.focus()}catch{}return new _o(u)}function Kf(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const Yf="__/auth/handler",Qf="emulator/auth/handler",Jf=encodeURIComponent("fac");async function yo(n,e,t,s,i,r){S(n.config.authDomain,n,"auth-domain-config-required"),S(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Bt,eventId:i};if(e instanceof Rs){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",yi(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries({}))o[d]=u}if(e instanceof Nn){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await n._getAppCheckToken(),c=l?`#${Jf}=${encodeURIComponent(l)}`:"";return`${Xf(n)}?${$t(a).slice(1)}${c}`}function Xf({config:n}){return n.emulator?Qi(n,Qf):`https://${n.authDomain}/${Yf}`}/**
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
 */const ti="webStorageSupport";class Zf{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rl,this._completeRedirectFn=bf,this._overrideRedirectResult=wf}async _openPopup(e,t,s,i){var r;De((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await yo(e,t,s,is(),i);return qf(e,o,tr())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await yo(e,t,s,is(),i);return ef(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(De(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await $f(e),s=new Tf(e);return t.register("authEvent",i=>(S(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ti,{type:ti},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[ti];o!==void 0&&t(!!o),fe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Af(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return qa()||Xi()||Ss()}}const ep=Zf;var vo="@firebase/auth",wo="0.23.2";/**
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
 */class tp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function np(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function sp(n){Ot(new ut("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;S(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ka(n)},c=new Ih(s,i,r,l);return Ch(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Ot(new ut("auth-internal",e=>{const t=_t(e.getProvider("auth").getImmediate());return(s=>new tp(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),qe(vo,wo,np(n)),qe(vo,wo,"esm2017")}/**
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
 */const ip=5*60,rp=Ia("authIdTokenMaxAge")||ip;let Eo=null;const op=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>rp)return;const i=t==null?void 0:t.token;Eo!==i&&(Eo=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ap(n=ka()){const e=qi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=bh(n,{popupRedirectResolver:ep,persistence:[uf,Jh,rl]}),s=Ia("authTokenSyncURL");if(s){const r=op(s);zh(t,r,()=>r(t.currentUser)),Vh(t,o=>r(o))}const i=wa("auth");return i&&Th(t,`http://${i}`),t}sp("Browser");var lp="firebase",cp="9.23.0";/**
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
 */qe(lp,cp,"app");var Io={};const bo="@firebase/database",Co="0.14.4";/**
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
 */let hl="";function up(n){hl=n}/**
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
 */class dp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Q(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:fn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class hp{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Te(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const fl=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new dp(e)}}catch{}return new hp},at=fl("localStorage"),fp=fl("sessionStorage");/**
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
 */const At=new zi("@firebase/database"),pp=function(){let n=1;return function(){return n++}}(),pl=function(n){const e=Vu(n),t=new Wu;t.update(e);const s=t.digest();return Bi.encodeByteArray(s)},On=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=On.apply(null,s):typeof s=="object"?e+=Q(s):e+=s,e+=" "}return e};let ln=null,To=!0;const gp=function(n,e){m(!0,"Can't turn on custom loggers persistently."),At.logLevel=D.VERBOSE,ln=At.log.bind(At)},Z=function(...n){if(To===!0&&(To=!1,ln===null&&fp.get("logging_enabled")===!0&&gp()),ln){const e=On.apply(null,n);ln(e)}},Dn=function(n){return function(...e){Z(n,...e)}},Ti=function(...n){const e="FIREBASE INTERNAL ERROR: "+On(...n);At.error(e)},Me=function(...n){const e=`FIREBASE FATAL ERROR: ${On(...n)}`;throw At.error(e),new Error(e)},re=function(...n){const e="FIREBASE WARNING: "+On(...n);At.warn(e)},mp=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&re("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ir=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},_p=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Mt="[MIN_NAME]",pt="[MAX_NAME]",yt=function(n,e){if(n===e)return 0;if(n===Mt||e===pt)return-1;if(e===Mt||n===pt)return 1;{const t=So(n),s=So(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},yp=function(n,e){return n===e?0:n<e?-1:1},Jt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Q(e))},rr=function(n){if(typeof n!="object"||n===null)return Q(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=Q(e[s]),t+=":",t+=rr(n[e[s]]);return t+="}",t},gl=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function ee(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const ml=function(n){m(!ir(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const d=c.join("");let u="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),u=u+f}return u.toLowerCase()},vp=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},wp=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Ep(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Ip=new RegExp("^-?(0*)\\d{1,10}$"),bp=-2147483648,Cp=2147483647,So=function(n){if(Ip.test(n)){const e=Number(n);if(e>=bp&&e<=Cp)return e}return null},Vt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw re("Exception was thrown by user callback.",t),e},Math.floor(0))}},Tp=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},cn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Sp{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){re(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Rp{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Z("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',re(e)}}class Qn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Qn.OWNER="owner";/**
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
 */const or="5",_l="v",yl="s",vl="r",wl="f",El=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Il="ls",bl="p",Si="ac",Cl="websocket",Tl="long_polling";/**
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
 */class Sl{constructor(e,t,s,i,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=at.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&at.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function kp(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Rl(n,e,t){m(typeof e=="string","typeof type must == string"),m(typeof t=="object","typeof params must == object");let s;if(e===Cl)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Tl)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);kp(n)&&(t.ns=n.namespace);const i=[];return ee(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class xp{constructor(){this.counters_={}}incrementCounter(e,t=1){Te(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Iu(this.counters_)}}/**
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
 */const ni={},si={};function ar(n){const e=n.toString();return ni[e]||(ni[e]=new xp),ni[e]}function Ap(n,e){const t=n.toString();return si[t]||(si[t]=e()),si[t]}/**
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
 */class Np{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Vt(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Ro="start",Pp="close",Op="pLPCommand",Dp="pRTLPCB",kl="id",xl="pw",Al="ser",Mp="cb",Lp="seg",Fp="ts",Up="d",jp="dframe",Nl=1870,Pl=30,Wp=Nl-Pl,$p=25e3,Bp=3e4;class Tt{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Dn(e),this.stats_=ar(t),this.urlFn=l=>(this.appCheckToken&&(l[Si]=this.appCheckToken),Rl(t,Tl,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Np(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Bp)),_p(()=>{if(this.isClosed_)return;this.scriptTagHolder=new lr((...r)=>{const[o,a,l,c,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ro)this.id=a,this.password=l;else if(o===Pp)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ro]="t",s[Al]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Mp]=this.scriptTagHolder.uniqueCallbackIdentifier),s[_l]=or,this.transportSessionId&&(s[yl]=this.transportSessionId),this.lastSessionId&&(s[Il]=this.lastSessionId),this.applicationId&&(s[bl]=this.applicationId),this.appCheckToken&&(s[Si]=this.appCheckToken),typeof location<"u"&&location.hostname&&El.test(location.hostname)&&(s[vl]=wl);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Tt.forceAllow_=!0}static forceDisallow(){Tt.forceDisallow_=!0}static isAvailable(){return Tt.forceAllow_?!0:!Tt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!vp()&&!wp()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Q(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=ya(t),i=gl(s,Wp);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[jp]="t",s[kl]=e,s[xl]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Q(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class lr{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=pp(),window[Op+this.uniqueCallbackIdentifier]=e,window[Dp+this.uniqueCallbackIdentifier]=t,this.myIFrame=lr.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Z("frame writing exception"),a.stack&&Z(a.stack),Z(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Z("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[kl]=this.myID,e[xl]=this.myPW,e[Al]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Pl+s.length<=Nl;){const o=this.pendingSegs.shift();s=s+"&"+Lp+i+"="+o.seg+"&"+Fp+i+"="+o.ts+"&"+Up+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor($p)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{Z("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Hp=16384,Vp=45e3;let us=null;typeof MozWebSocket<"u"?us=MozWebSocket:typeof WebSocket<"u"&&(us=WebSocket);class _e{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Dn(this.connId),this.stats_=ar(t),this.connURL=_e.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[_l]=or,typeof location<"u"&&location.hostname&&El.test(location.hostname)&&(o[vl]=wl),t&&(o[yl]=t),s&&(o[Il]=s),i&&(o[Si]=i),r&&(o[bl]=r),Rl(e,Cl,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,at.set("previous_websocket_failure",!0);try{let s;Pu(),this.mySock=new us(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){_e.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&us!==null&&!_e.forceDisallow_}static previouslyFailed(){return at.isInMemoryStorage||at.get("previous_websocket_failure")===!0}markConnectionHealthy(){at.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=fn(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=Q(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=gl(t,Hp);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Vp))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}_e.responsesRequiredToBeHealthy=2;_e.healthyTimeout=3e4;/**
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
 */class _n{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Tt,_e]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=_e&&_e.isAvailable();let s=t&&!_e.previouslyFailed();if(e.webSocketOnly&&(t||re("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[_e];else{const i=this.transports_=[];for(const r of _n.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);_n.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}_n.globalTransportInitialized_=!1;/**
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
 */const zp=6e4,Gp=5e3,qp=10*1024,Kp=100*1024,ii="t",ko="d",Yp="s",xo="r",Qp="e",Ao="o",No="a",Po="n",Oo="p",Jp="h";class Xp{constructor(e,t,s,i,r,o,a,l,c,d){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Dn("c:"+this.id+":"),this.transportManager_=new _n(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=cn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Kp?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>qp?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ii in e){const t=e[ii];t===No?this.upgradeIfSecondaryHealthy_():t===xo?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Ao&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Jt("t",e),s=Jt("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Oo,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:No,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Po,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Jt("t",e),s=Jt("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Jt(ii,e);if(ko in e){const s=e[ko];if(t===Jp){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Po){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Yp?this.onConnectionShutdown_(s):t===xo?this.onReset_(s):t===Qp?Ti("Server Error: "+s):t===Ao?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ti("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),or!==s&&re("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),cn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(zp))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):cn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Gp))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Oo,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(at.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Ol{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Dl{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class ds extends Dl{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Vi()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ds}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Do=32,Mo=768;class M{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function N(){return new M("")}function k(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Qe(n){return n.pieces_.length-n.pieceNum_}function U(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new M(n.pieces_,e)}function cr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Zp(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function yn(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Ml(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new M(e,0)}function W(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof M)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new M(t,0)}function A(n){return n.pieceNum_>=n.pieces_.length}function ie(n,e){const t=k(n),s=k(e);if(t===null)return e;if(t===s)return ie(U(n),U(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function eg(n,e){const t=yn(n,0),s=yn(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=yt(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function ur(n,e){if(Qe(n)!==Qe(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function he(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Qe(n)>Qe(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class tg{constructor(e,t){this.errorPrefix_=t,this.parts_=yn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ts(this.parts_[s]);Ll(this)}}function ng(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ts(e),Ll(n)}function sg(n){const e=n.parts_.pop();n.byteLength_-=Ts(e),n.parts_.length>0&&(n.byteLength_-=1)}function Ll(n){if(n.byteLength_>Mo)throw new Error(n.errorPrefix_+"has a key path longer than "+Mo+" bytes ("+n.byteLength_+").");if(n.parts_.length>Do)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Do+") or object contains a cycle "+ot(n))}function ot(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class dr extends Dl{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new dr}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Xt=1e3,ig=60*5*1e3,Lo=30*1e3,rg=1.3,og=3e4,ag="server_kill",Fo=3;class Oe extends Ol{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Oe.nextPersistentConnectionId_++,this.log_=Dn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Xt,this.maxReconnectDelay_=ig,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");dr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ds.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(Q(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new Rn,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Oe.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Te(e,"w")){const s=Pt(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();re(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ju(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Lo)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Uu(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Q(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Ti("Unrecognized action received from server: "+Q(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Xt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>og&&(this.reconnectDelay_=Xt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*rg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Oe.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(u){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Z("getToken() completed but was canceled"):(Z("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=f&&f.token,a=new Xp(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,p=>{re(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(ag)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&re(u),l())}}}interrupt(e){Z("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Z("Resuming connection for reason: "+e),delete this.interruptReasons_[e],yi(this.interruptReasons_)&&(this.reconnectDelay_=Xt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>rr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new M(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){Z("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Fo&&(this.reconnectDelay_=Lo,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Z("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Fo&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+hl.replace(/\./g,"-")]=1,Vi()?e["framework.cordova"]=1:ba()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ds.getInstance().currentlyOnline();return yi(this.interruptReasons_)&&e}}Oe.nextPersistentConnectionId_=0;Oe.nextConnectionId_=0;/**
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
 */class x{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new x(e,t)}}/**
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
 */class As{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new x(Mt,e),i=new x(Mt,t);return this.compare(s,i)!==0}minPost(){return x.MIN}}/**
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
 */let $n;class Fl extends As{static get __EMPTY_NODE(){return $n}static set __EMPTY_NODE(e){$n=e}compare(e,t){return yt(e.name,t.name)}isDefinedOn(e){throw Wt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return x.MIN}maxPost(){return new x(pt,$n)}makePost(e,t){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new x(e,$n)}toString(){return".key"}}const Nt=new Fl;/**
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
 */class Bn{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class X{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??X.RED,this.left=i??ae.EMPTY_NODE,this.right=r??ae.EMPTY_NODE}copy(e,t,s,i,r){return new X(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ae.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return ae.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,X.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,X.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}X.RED=!0;X.BLACK=!1;class lg{copy(e,t,s,i,r){return this}insert(e,t,s){return new X(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ae{constructor(e,t=ae.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ae(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,X.BLACK,null,null))}remove(e){return new ae(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,X.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Bn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Bn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Bn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Bn(this.root_,null,this.comparator_,!0,e)}}ae.EMPTY_NODE=new lg;/**
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
 */function cg(n,e){return yt(n.name,e.name)}function hr(n,e){return yt(n,e)}/**
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
 */let Ri;function ug(n){Ri=n}const Ul=function(n){return typeof n=="number"?"number:"+ml(n):"string:"+n},jl=function(n){if(n.isLeafNode()){const e=n.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Te(e,".sv"),"Priority must be a string or number.")}else m(n===Ri||n.isEmpty(),"priority of unexpected type.");m(n===Ri||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Uo;class J{constructor(e,t=J.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),jl(this.priorityNode_)}static set __childrenNodeConstructor(e){Uo=e}static get __childrenNodeConstructor(){return Uo}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new J(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:J.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return A(e)?this:k(e)===".priority"?this.priorityNode_:J.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:J.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=k(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(m(s!==".priority"||Qe(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,J.__childrenNodeConstructor.EMPTY_NODE.updateChild(U(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ul(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ml(this.value_):e+=this.value_,this.lazyHash_=pl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===J.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof J.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=J.VALUE_TYPE_ORDER.indexOf(t),r=J.VALUE_TYPE_ORDER.indexOf(s);return m(i>=0,"Unknown leaf type: "+t),m(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}J.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Wl,$l;function dg(n){Wl=n}function hg(n){$l=n}class fg extends As{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?yt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return x.MIN}maxPost(){return new x(pt,new J("[PRIORITY-POST]",$l))}makePost(e,t){const s=Wl(e);return new x(t,new J("[PRIORITY-POST]",s))}toString(){return".priority"}}const $=new fg;/**
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
 */const pg=Math.log(2);class gg{constructor(e){const t=r=>parseInt(Math.log(r)/pg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const hs=function(n,e,t,s){n.sort(e);const i=function(l,c){const d=c-l;let u,f;if(d===0)return null;if(d===1)return u=n[l],f=t?t(u):u,new X(f,u.node,X.BLACK,null,null);{const p=parseInt(d/2,10)+l,_=i(l,p),v=i(p+1,c);return u=n[p],f=t?t(u):u,new X(f,u.node,X.BLACK,_,v)}},r=function(l){let c=null,d=null,u=n.length;const f=function(_,v){const R=u-_,j=u;u-=_;const w=i(R+1,j),P=n[R],ue=t?t(P):P;p(new X(ue,P.node,v,null,w))},p=function(_){c?(c.left=_,c=_):(d=_,c=_)};for(let _=0;_<l.count;++_){const v=l.nextBitIsOne(),R=Math.pow(2,l.count-(_+1));v?f(R,X.BLACK):(f(R,X.BLACK),f(R,X.RED))}return d},o=new gg(n.length),a=r(o);return new ae(s||e,a)};/**
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
 */let ri;const It={};class Pe{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return m(It&&$,"ChildrenNode.ts has not been loaded"),ri=ri||new Pe({".priority":It},{".priority":$}),ri}get(e){const t=Pt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ae?t:null}hasIndex(e){return Te(this.indexSet_,e.toString())}addIndex(e,t){m(e!==Nt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(x.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=hs(s,e.getCompare()):a=It;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new Pe(d,c)}addToIndexes(e,t){const s=es(this.indexes_,(i,r)=>{const o=Pt(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),i===It)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(x.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),hs(a,o.getCompare())}else return It;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new x(e.name,a))),l.insert(e,e.node)}});return new Pe(s,this.indexSet_)}removeFromIndexes(e,t){const s=es(this.indexes_,i=>{if(i===It)return i;{const r=t.get(e.name);return r?i.remove(new x(e.name,r)):i}});return new Pe(s,this.indexSet_)}}/**
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
 */let Zt;class C{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&jl(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Zt||(Zt=new C(new ae(hr),null,Pe.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Zt}updatePriority(e){return this.children_.isEmpty()?this:new C(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Zt:t}}getChild(e){const t=k(e);return t===null?this:this.getImmediateChild(t).getChild(U(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(m(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new x(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Zt:this.priorityNode_;return new C(i,o,r)}}updateChild(e,t){const s=k(e);if(s===null)return t;{m(k(e)!==".priority"||Qe(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(U(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild($,(o,a)=>{t[o]=a.val(e),s++,r&&C.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ul(this.getPriority().val())+":"),this.forEachChild($,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":pl(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new x(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new x(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new x(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,x.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,x.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Mn?-1:0}withIndex(e){if(e===Nt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new C(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Nt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator($),i=t.getIterator($);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Nt?null:this.indexMap_.get(e.toString())}}C.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mg extends C{constructor(){super(new ae(hr),C.EMPTY_NODE,Pe.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return C.EMPTY_NODE}isEmpty(){return!1}}const Mn=new mg;Object.defineProperties(x,{MIN:{value:new x(Mt,C.EMPTY_NODE)},MAX:{value:new x(pt,Mn)}});Fl.__EMPTY_NODE=C.EMPTY_NODE;J.__childrenNodeConstructor=C;ug(Mn);hg(Mn);/**
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
 */const _g=!0;function Y(n,e=null){if(n===null)return C.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new J(t,Y(e))}if(!(n instanceof Array)&&_g){const t=[];let s=!1;if(ee(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=Y(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new x(o,l)))}}),t.length===0)return C.EMPTY_NODE;const r=hs(t,cg,o=>o.name,hr);if(s){const o=hs(t,$.getCompare());return new C(r,Y(e),new Pe({".priority":o},{".priority":$}))}else return new C(r,Y(e),Pe.Default)}else{let t=C.EMPTY_NODE;return ee(n,(s,i)=>{if(Te(n,s)&&s.substring(0,1)!=="."){const r=Y(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(Y(e))}}dg(Y);/**
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
 */class yg extends As{constructor(e){super(),this.indexPath_=e,m(!A(e)&&k(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?yt(e.name,t.name):r}makePost(e,t){const s=Y(e),i=C.EMPTY_NODE.updateChild(this.indexPath_,s);return new x(t,i)}maxPost(){const e=C.EMPTY_NODE.updateChild(this.indexPath_,Mn);return new x(pt,e)}toString(){return yn(this.indexPath_,0).join("/")}}/**
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
 */class vg extends As{compare(e,t){const s=e.node.compareTo(t.node);return s===0?yt(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return x.MIN}maxPost(){return x.MAX}makePost(e,t){const s=Y(e);return new x(t,s)}toString(){return".value"}}const wg=new vg;/**
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
 */function Bl(n){return{type:"value",snapshotNode:n}}function Lt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function vn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function wn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Eg(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class fr{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(vn(t,a)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Lt(t,s)):o.trackChildChange(wn(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild($,(i,r)=>{t.hasChild(i)||s.trackChildChange(vn(i,r))}),t.isLeafNode()||t.forEachChild($,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(wn(i,r,o))}else s.trackChildChange(Lt(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?C.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class En{constructor(e){this.indexedFilter_=new fr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=En.getStartPost_(e),this.endPost_=En.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new x(t,s))||(s=C.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=C.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(C.EMPTY_NODE);const r=this;return t.forEachChild($,(o,a)=>{r.matches(new x(o,a))||(i=i.updateImmediateChild(o,C.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Ig{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new En(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new x(t,s))||(s=C.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=C.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=C.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(C.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,C.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(f,p)=>u(p,f)}else o=this.index_.getCompare();const a=e;m(a.numChildren()===this.limit_,"");const l=new x(t,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(t)){const u=a.getImmediateChild(t);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===t||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(d&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(wn(t,s,u)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(vn(t,u));const v=a.updateImmediateChild(t,C.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Lt(f.name,f.node)),v.updateImmediateChild(f.name,f.node)):v}}else return s.isEmpty()?e:d&&o(c,l)>=0?(r!=null&&(r.trackChildChange(vn(c.name,c.node)),r.trackChildChange(Lt(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(c.name,C.EMPTY_NODE)):e}}/**
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
 */class pr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=$}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Mt}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:pt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===$}copy(){const e=new pr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function bg(n){return n.loadsAllData()?new fr(n.getIndex()):n.hasLimit()?new Ig(n):new En(n)}function Cg(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="r",t}function jo(n){const e={};if(n.isDefault())return e;let t;if(n.index_===$?t="$priority":n.index_===wg?t="$value":n.index_===Nt?t="$key":(m(n.index_ instanceof yg,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Q(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=Q(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+Q(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=Q(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+Q(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Wo(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==$&&(e.i=n.index_.toString()),e}/**
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
 */class fs extends Ol{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Dn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=fs.getListenId_(e,s),a={};this.listens_[o]=a;const l=jo(e._queryParams);this.restRequest_(r+".json",l,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,s),Pt(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,t){const s=fs.getListenId_(e,t);delete this.listens_[s]}get(e){const t=jo(e._queryParams),s=e._path.toString(),i=new Rn;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+$t(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=fn(a.responseText)}catch{re("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&re("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Tg{constructor(){this.rootNode_=C.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function ps(){return{value:null,children:new Map}}function Hl(n,e,t){if(A(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=k(e);n.children.has(s)||n.children.set(s,ps());const i=n.children.get(s);e=U(e),Hl(i,e,t)}}function ki(n,e,t){n.value!==null?t(e,n.value):Sg(n,(s,i)=>{const r=new M(e.toString()+"/"+s);ki(i,r,t)})}function Sg(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class Rg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ee(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const $o=10*1e3,kg=30*1e3,xg=5*60*1e3;class Ag{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Rg(e);const s=$o+(kg-$o)*Math.random();cn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;ee(e,(i,r)=>{r>0&&Te(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),cn(this.reportStats_.bind(this),Math.floor(Math.random()*2*xg))}}/**
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
 */var we;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(we||(we={}));function gr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function mr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function _r(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class gs{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=we.ACK_USER_WRITE,this.source=gr()}operationForChild(e){if(A(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new M(e));return new gs(N(),t,this.revert)}}else return m(k(this.path)===e,"operationForChild called for unrelated child."),new gs(U(this.path),this.affectedTree,this.revert)}}/**
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
 */class In{constructor(e,t){this.source=e,this.path=t,this.type=we.LISTEN_COMPLETE}operationForChild(e){return A(this.path)?new In(this.source,N()):new In(this.source,U(this.path))}}/**
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
 */class gt{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=we.OVERWRITE}operationForChild(e){return A(this.path)?new gt(this.source,N(),this.snap.getImmediateChild(e)):new gt(this.source,U(this.path),this.snap)}}/**
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
 */class Ft{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=we.MERGE}operationForChild(e){if(A(this.path)){const t=this.children.subtree(new M(e));return t.isEmpty()?null:t.value?new gt(this.source,N(),t.value):new Ft(this.source,N(),t)}else return m(k(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ft(this.source,U(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Je{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(A(e))return this.isFullyInitialized()&&!this.filtered_;const t=k(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Ng{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Pg(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Eg(o.childName,o.snapshotNode))}),en(n,i,"child_removed",e,s,t),en(n,i,"child_added",e,s,t),en(n,i,"child_moved",r,s,t),en(n,i,"child_changed",e,s,t),en(n,i,"value",e,s,t),i}function en(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>Dg(n,a,l)),o.forEach(a=>{const l=Og(n,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Og(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Dg(n,e,t){if(e.childName==null||t.childName==null)throw Wt("Should only compare child_ events.");const s=new x(e.childName,e.snapshotNode),i=new x(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function Ns(n,e){return{eventCache:n,serverCache:e}}function un(n,e,t,s){return Ns(new Je(e,t,s),n.serverCache)}function Vl(n,e,t,s){return Ns(n.eventCache,new Je(e,t,s))}function ms(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function mt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let oi;const Mg=()=>(oi||(oi=new ae(yp)),oi);class F{constructor(e,t=Mg()){this.value=e,this.children=t}static fromObject(e){let t=new F(null);return ee(e,(s,i)=>{t=t.set(new M(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:N(),value:this.value};if(A(e))return null;{const s=k(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(U(e),t);return r!=null?{path:W(new M(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(A(e))return this;{const t=k(e),s=this.children.get(t);return s!==null?s.subtree(U(e)):new F(null)}}set(e,t){if(A(e))return new F(t,this.children);{const s=k(e),r=(this.children.get(s)||new F(null)).set(U(e),t),o=this.children.insert(s,r);return new F(this.value,o)}}remove(e){if(A(e))return this.children.isEmpty()?new F(null):new F(null,this.children);{const t=k(e),s=this.children.get(t);if(s){const i=s.remove(U(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new F(null):new F(this.value,r)}else return this}}get(e){if(A(e))return this.value;{const t=k(e),s=this.children.get(t);return s?s.get(U(e)):null}}setTree(e,t){if(A(e))return t;{const s=k(e),r=(this.children.get(s)||new F(null)).setTree(U(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new F(this.value,o)}}fold(e){return this.fold_(N(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(W(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,N(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(A(e))return null;{const r=k(e),o=this.children.get(r);return o?o.findOnPath_(U(e),W(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,N(),t)}foreachOnPath_(e,t,s){if(A(e))return this;{this.value&&s(t,this.value);const i=k(e),r=this.children.get(i);return r?r.foreachOnPath_(U(e),W(t,i),s):new F(null)}}foreach(e){this.foreach_(N(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(W(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class Ee{constructor(e){this.writeTree_=e}static empty(){return new Ee(new F(null))}}function dn(n,e,t){if(A(e))return new Ee(new F(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ie(i,e);return r=r.updateChild(o,t),new Ee(n.writeTree_.set(i,r))}else{const i=new F(t),r=n.writeTree_.setTree(e,i);return new Ee(r)}}}function xi(n,e,t){let s=n;return ee(t,(i,r)=>{s=dn(s,W(e,i),r)}),s}function Bo(n,e){if(A(e))return Ee.empty();{const t=n.writeTree_.setTree(e,new F(null));return new Ee(t)}}function Ai(n,e){return vt(n,e)!=null}function vt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ie(t.path,e)):null}function Ho(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild($,(s,i)=>{e.push(new x(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new x(s,i.value))}),e}function Ke(n,e){if(A(e))return n;{const t=vt(n,e);return t!=null?new Ee(new F(t)):new Ee(n.writeTree_.subtree(e))}}function Ni(n){return n.writeTree_.isEmpty()}function Ut(n,e){return zl(N(),n.writeTree_,e)}function zl(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=zl(W(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(W(n,".priority"),s)),t}}/**
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
 */function Ps(n,e){return Yl(e,n)}function Lg(n,e,t,s,i){m(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=dn(n.visibleWrites,e,t)),n.lastWriteId=s}function Fg(n,e,t,s){m(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=xi(n.visibleWrites,e,t),n.lastWriteId=s}function Ug(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function jg(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);m(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Wg(a,s.path)?i=!1:he(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return $g(n),!0;if(s.snap)n.visibleWrites=Bo(n.visibleWrites,s.path);else{const a=s.children;ee(a,l=>{n.visibleWrites=Bo(n.visibleWrites,W(s.path,l))})}return!0}else return!1}function Wg(n,e){if(n.snap)return he(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&he(W(n.path,t),e))return!0;return!1}function $g(n){n.visibleWrites=Gl(n.allWrites,Bg,N()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Bg(n){return n.visible}function Gl(n,e,t){let s=Ee.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)he(t,o)?(a=ie(t,o),s=dn(s,a,r.snap)):he(o,t)&&(a=ie(o,t),s=dn(s,N(),r.snap.getChild(a)));else if(r.children){if(he(t,o))a=ie(t,o),s=xi(s,a,r.children);else if(he(o,t))if(a=ie(o,t),A(a))s=xi(s,N(),r.children);else{const l=Pt(r.children,k(a));if(l){const c=l.getChild(U(a));s=dn(s,N(),c)}}}else throw Wt("WriteRecord should have .snap or .children")}}return s}function ql(n,e,t,s,i){if(!s&&!i){const r=vt(n.visibleWrites,e);if(r!=null)return r;{const o=Ke(n.visibleWrites,e);if(Ni(o))return t;if(t==null&&!Ai(o,N()))return null;{const a=t||C.EMPTY_NODE;return Ut(o,a)}}}else{const r=Ke(n.visibleWrites,e);if(!i&&Ni(r))return t;if(!i&&t==null&&!Ai(r,N()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(he(c.path,e)||he(e,c.path))},a=Gl(n.allWrites,o,e),l=t||C.EMPTY_NODE;return Ut(a,l)}}}function Hg(n,e,t){let s=C.EMPTY_NODE;const i=vt(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild($,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Ke(n.visibleWrites,e);return t.forEachChild($,(o,a)=>{const l=Ut(Ke(r,new M(o)),a);s=s.updateImmediateChild(o,l)}),Ho(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ke(n.visibleWrites,e);return Ho(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Vg(n,e,t,s,i){m(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=W(e,t);if(Ai(n.visibleWrites,r))return null;{const o=Ke(n.visibleWrites,r);return Ni(o)?i.getChild(t):Ut(o,i.getChild(t))}}function zg(n,e,t,s){const i=W(e,t),r=vt(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Ke(n.visibleWrites,i);return Ut(o,s.getNode().getImmediateChild(t))}else return null}function Gg(n,e){return vt(n.visibleWrites,e)}function qg(n,e,t,s,i,r,o){let a;const l=Ke(n.visibleWrites,e),c=vt(l,N());if(c!=null)a=c;else if(t!=null)a=Ut(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=f.getNext();for(;p&&d.length<i;)u(p,s)!==0&&d.push(p),p=f.getNext();return d}else return[]}function Kg(){return{visibleWrites:Ee.empty(),allWrites:[],lastWriteId:-1}}function _s(n,e,t,s){return ql(n.writeTree,n.treePath,e,t,s)}function yr(n,e){return Hg(n.writeTree,n.treePath,e)}function Vo(n,e,t,s){return Vg(n.writeTree,n.treePath,e,t,s)}function ys(n,e){return Gg(n.writeTree,W(n.treePath,e))}function Yg(n,e,t,s,i,r){return qg(n.writeTree,n.treePath,e,t,s,i,r)}function vr(n,e,t){return zg(n.writeTree,n.treePath,e,t)}function Kl(n,e){return Yl(W(n.treePath,e),n.writeTree)}function Yl(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Qg{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;m(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),m(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,wn(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,vn(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Lt(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,wn(s,e.snapshotNode,i.oldSnap));else throw Wt("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Jg{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Ql=new Jg;class wr{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Je(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return vr(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:mt(this.viewCache_),r=Yg(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function Xg(n){return{filter:n}}function Zg(n,e){m(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function em(n,e,t,s,i){const r=new Qg;let o,a;if(t.type===we.OVERWRITE){const c=t;c.source.fromUser?o=Pi(n,e,c.path,c.snap,s,i,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!A(c.path),o=vs(n,e,c.path,c.snap,s,i,a,r))}else if(t.type===we.MERGE){const c=t;c.source.fromUser?o=nm(n,e,c.path,c.children,s,i,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Oi(n,e,c.path,c.children,s,i,a,r))}else if(t.type===we.ACK_USER_WRITE){const c=t;c.revert?o=rm(n,e,c.path,s,i,r):o=sm(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===we.LISTEN_COMPLETE)o=im(n,e,t.path,s,r);else throw Wt("Unknown operation type: "+t.type);const l=r.getChanges();return tm(e,o,l),{viewCache:o,changes:l}}function tm(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ms(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Bl(ms(e)))}}function Jl(n,e,t,s,i,r){const o=e.eventCache;if(ys(s,t)!=null)return e;{let a,l;if(A(t))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=mt(e),d=c instanceof C?c:C.EMPTY_NODE,u=yr(s,d);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=_s(s,mt(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=k(t);if(c===".priority"){m(Qe(t)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const u=Vo(s,t,d,l);u!=null?a=n.filter.updatePriority(d,u):a=o.getNode()}else{const d=U(t);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Vo(s,t,o.getNode(),l);f!=null?u=o.getNode().getImmediateChild(c).updateChild(d,f):u=o.getNode().getImmediateChild(c)}else u=vr(s,c,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),c,u,d,i,r):a=o.getNode()}}return un(e,a,o.isFullyInitialized()||A(t),n.filter.filtersNodes())}}function vs(n,e,t,s,i,r,o,a){const l=e.serverCache;let c;const d=o?n.filter:n.filter.getIndexedFilter();if(A(t))c=d.updateFullNode(l.getNode(),s,null);else if(d.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(t,s);c=d.updateFullNode(l.getNode(),p,null)}else{const p=k(t);if(!l.isCompleteForPath(t)&&Qe(t)>1)return e;const _=U(t),R=l.getNode().getImmediateChild(p).updateChild(_,s);p===".priority"?c=d.updatePriority(l.getNode(),R):c=d.updateChild(l.getNode(),p,R,_,Ql,null)}const u=Vl(e,c,l.isFullyInitialized()||A(t),d.filtersNodes()),f=new wr(i,u,r);return Jl(n,u,t,i,f,a)}function Pi(n,e,t,s,i,r,o){const a=e.eventCache;let l,c;const d=new wr(i,e,r);if(A(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=un(e,c,!0,n.filter.filtersNodes());else{const u=k(t);if(u===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),l=un(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=U(t),p=a.getNode().getImmediateChild(u);let _;if(A(f))_=s;else{const v=d.getCompleteChild(u);v!=null?cr(f)===".priority"&&v.getChild(Ml(f)).isEmpty()?_=v:_=v.updateChild(f,s):_=C.EMPTY_NODE}if(p.equals(_))l=e;else{const v=n.filter.updateChild(a.getNode(),u,_,f,d,o);l=un(e,v,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function zo(n,e){return n.eventCache.isCompleteForChild(e)}function nm(n,e,t,s,i,r,o){let a=e;return s.foreach((l,c)=>{const d=W(t,l);zo(e,k(d))&&(a=Pi(n,a,d,c,i,r,o))}),s.foreach((l,c)=>{const d=W(t,l);zo(e,k(d))||(a=Pi(n,a,d,c,i,r,o))}),a}function Go(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Oi(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;A(t)?c=s:c=new F(null).setTree(t,s);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,f)=>{if(d.hasChild(u)){const p=e.serverCache.getNode().getImmediateChild(u),_=Go(n,p,f);l=vs(n,l,new M(u),_,i,r,o,a)}}),c.children.inorderTraversal((u,f)=>{const p=!e.serverCache.isCompleteForChild(u)&&f.value===null;if(!d.hasChild(u)&&!p){const _=e.serverCache.getNode().getImmediateChild(u),v=Go(n,_,f);l=vs(n,l,new M(u),v,i,r,o,a)}}),l}function sm(n,e,t,s,i,r,o){if(ys(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(A(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return vs(n,e,t,l.getNode().getChild(t),i,r,a,o);if(A(t)){let c=new F(null);return l.getNode().forEachChild(Nt,(d,u)=>{c=c.set(new M(d),u)}),Oi(n,e,t,c,i,r,a,o)}else return e}else{let c=new F(null);return s.foreach((d,u)=>{const f=W(t,d);l.isCompleteForPath(f)&&(c=c.set(d,l.getNode().getChild(f)))}),Oi(n,e,t,c,i,r,a,o)}}function im(n,e,t,s,i){const r=e.serverCache,o=Vl(e,r.getNode(),r.isFullyInitialized()||A(t),r.isFiltered());return Jl(n,o,t,s,Ql,i)}function rm(n,e,t,s,i,r){let o;if(ys(s,t)!=null)return e;{const a=new wr(s,e,i),l=e.eventCache.getNode();let c;if(A(t)||k(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=_s(s,mt(e));else{const u=e.serverCache.getNode();m(u instanceof C,"serverChildren would be complete if leaf node"),d=yr(s,u)}d=d,c=n.filter.updateFullNode(l,d,r)}else{const d=k(t);let u=vr(s,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=l.getImmediateChild(d)),u!=null?c=n.filter.updateChild(l,d,u,U(t),a,r):e.eventCache.getNode().hasChild(d)?c=n.filter.updateChild(l,d,C.EMPTY_NODE,U(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=_s(s,mt(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ys(s,N())!=null,un(e,c,o,n.filter.filtersNodes())}}/**
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
 */class om{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new fr(s.getIndex()),r=bg(s);this.processor_=Xg(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(C.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(C.EMPTY_NODE,a.getNode(),null),d=new Je(l,o.isFullyInitialized(),i.filtersNodes()),u=new Je(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ns(u,d),this.eventGenerator_=new Ng(this.query_)}get query(){return this.query_}}function am(n){return n.viewCache_.serverCache.getNode()}function lm(n){return ms(n.viewCache_)}function cm(n,e){const t=mt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!A(e)&&!t.getImmediateChild(k(e)).isEmpty())?t.getChild(e):null}function qo(n){return n.eventRegistrations_.length===0}function um(n,e){n.eventRegistrations_.push(e)}function Ko(n,e,t){const s=[];if(t){m(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Yo(n,e,t,s){e.type===we.MERGE&&e.source.queryId!==null&&(m(mt(n.viewCache_),"We should always have a full cache before handling merges"),m(ms(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=em(n.processor_,i,e,t,s);return Zg(n.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Xl(n,r.changes,r.viewCache.eventCache.getNode(),null)}function dm(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild($,(r,o)=>{s.push(Lt(r,o))}),t.isFullyInitialized()&&s.push(Bl(t.getNode())),Xl(n,s,t.getNode(),e)}function Xl(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Pg(n.eventGenerator_,e,t,i)}/**
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
 */let ws;class Zl{constructor(){this.views=new Map}}function hm(n){m(!ws,"__referenceConstructor has already been defined"),ws=n}function fm(){return m(ws,"Reference.ts has not been loaded"),ws}function pm(n){return n.views.size===0}function Er(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return m(r!=null,"SyncTree gave us an op for an invalid query."),Yo(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Yo(o,e,t,s));return r}}function ec(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=_s(t,i?s:null),l=!1;a?l=!0:s instanceof C?(a=yr(t,s),l=!1):(a=C.EMPTY_NODE,l=!1);const c=Ns(new Je(a,l,!1),new Je(s,i,!1));return new om(e,c)}return o}function gm(n,e,t,s,i,r){const o=ec(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),um(o,t),dm(o,t)}function mm(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=Xe(n);if(i==="default")for(const[l,c]of n.views.entries())o=o.concat(Ko(c,t,s)),qo(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(i);l&&(o=o.concat(Ko(l,t,s)),qo(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Xe(n)&&r.push(new(fm())(e._repo,e._path)),{removed:r,events:o}}function tc(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ye(n,e){let t=null;for(const s of n.views.values())t=t||cm(s,e);return t}function nc(n,e){if(e._queryParams.loadsAllData())return Os(n);{const s=e._queryIdentifier;return n.views.get(s)}}function sc(n,e){return nc(n,e)!=null}function Xe(n){return Os(n)!=null}function Os(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Es;function _m(n){m(!Es,"__referenceConstructor has already been defined"),Es=n}function ym(){return m(Es,"Reference.ts has not been loaded"),Es}let vm=1;class Qo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new F(null),this.pendingWriteTree_=Kg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ic(n,e,t,s,i){return Lg(n.pendingWriteTree_,e,t,s,i),i?zt(n,new gt(gr(),e,t)):[]}function wm(n,e,t,s){Fg(n.pendingWriteTree_,e,t,s);const i=F.fromObject(t);return zt(n,new Ft(gr(),e,i))}function Ve(n,e,t=!1){const s=Ug(n.pendingWriteTree_,e);if(jg(n.pendingWriteTree_,e)){let r=new F(null);return s.snap!=null?r=r.set(N(),!0):ee(s.children,o=>{r=r.set(new M(o),!0)}),zt(n,new gs(s.path,r,t))}else return[]}function Ln(n,e,t){return zt(n,new gt(mr(),e,t))}function Em(n,e,t){const s=F.fromObject(t);return zt(n,new Ft(mr(),e,s))}function Im(n,e){return zt(n,new In(mr(),e))}function bm(n,e,t){const s=br(n,t);if(s){const i=Cr(s),r=i.path,o=i.queryId,a=ie(r,e),l=new In(_r(o),a);return Tr(n,r,l)}else return[]}function Is(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||sc(o,e))){const l=mm(o,e,t,s);pm(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const d=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(f,p)=>Xe(p));if(d&&!u){const f=n.syncPointTree_.subtree(r);if(!f.isEmpty()){const p=Sm(f);for(let _=0;_<p.length;++_){const v=p[_],R=v.query,j=lc(n,v);n.listenProvider_.startListening(hn(R),bn(n,R),j.hashFn,j.onComplete)}}}!u&&c.length>0&&!s&&(d?n.listenProvider_.stopListening(hn(e),null):c.forEach(f=>{const p=n.queryToTagMap.get(Ds(f));n.listenProvider_.stopListening(hn(f),p)}))}Rm(n,c)}return a}function rc(n,e,t,s){const i=br(n,s);if(i!=null){const r=Cr(i),o=r.path,a=r.queryId,l=ie(o,e),c=new gt(_r(a),l,t);return Tr(n,o,c)}else return[]}function Cm(n,e,t,s){const i=br(n,s);if(i){const r=Cr(i),o=r.path,a=r.queryId,l=ie(o,e),c=F.fromObject(t),d=new Ft(_r(a),l,c);return Tr(n,o,d)}else return[]}function Di(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(f,p)=>{const _=ie(f,i);r=r||Ye(p,_),o=o||Xe(p)});let a=n.syncPointTree_.get(i);a?(o=o||Xe(a),r=r||Ye(a,N())):(a=new Zl,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=C.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((p,_)=>{const v=Ye(_,N());v&&(r=r.updateImmediateChild(p,v))}));const c=sc(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=Ds(e);m(!n.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=km();n.queryToTagMap.set(f,p),n.tagToQueryMap.set(p,f)}const d=Ps(n.pendingWriteTree_,i);let u=gm(a,e,t,d,r,l);if(!c&&!o&&!s){const f=nc(a,e);u=u.concat(xm(n,e,f))}return u}function Ir(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=ie(o,e),c=Ye(a,l);if(c)return c});return ql(i,e,r,t,!0)}function Tm(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(c,d)=>{const u=ie(c,t);s=s||Ye(d,u)});let i=n.syncPointTree_.get(t);i?s=s||Ye(i,N()):(i=new Zl,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Je(s,!0,!1):null,a=Ps(n.pendingWriteTree_,e._path),l=ec(i,e,a,r?o.getNode():C.EMPTY_NODE,r);return lm(l)}function zt(n,e){return oc(e,n.syncPointTree_,null,Ps(n.pendingWriteTree_,N()))}function oc(n,e,t,s){if(A(n.path))return ac(n,e,t,s);{const i=e.get(N());t==null&&i!=null&&(t=Ye(i,N()));let r=[];const o=k(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,d=Kl(s,o);r=r.concat(oc(a,l,c,d))}return i&&(r=r.concat(Er(i,n,s,t))),r}}function ac(n,e,t,s){const i=e.get(N());t==null&&i!=null&&(t=Ye(i,N()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Kl(s,o),d=n.operationForChild(o);d&&(r=r.concat(ac(d,a,l,c)))}),i&&(r=r.concat(Er(i,n,s,t))),r}function lc(n,e){const t=e.query,s=bn(n,t);return{hashFn:()=>(am(e)||C.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?bm(n,t._path,s):Im(n,t._path);{const r=Ep(i,t);return Is(n,t,null,r)}}}}function bn(n,e){const t=Ds(e);return n.queryToTagMap.get(t)}function Ds(n){return n._path.toString()+"$"+n._queryIdentifier}function br(n,e){return n.tagToQueryMap.get(e)}function Cr(n){const e=n.indexOf("$");return m(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new M(n.substr(0,e))}}function Tr(n,e,t){const s=n.syncPointTree_.get(e);m(s,"Missing sync point for query tag that we're tracking");const i=Ps(n.pendingWriteTree_,e);return Er(s,t,i,null)}function Sm(n){return n.fold((e,t,s)=>{if(t&&Xe(t))return[Os(t)];{let i=[];return t&&(i=tc(t)),ee(s,(r,o)=>{i=i.concat(o)}),i}})}function hn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(ym())(n._repo,n._path):n}function Rm(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Ds(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function km(){return vm++}function xm(n,e,t){const s=e._path,i=bn(n,e),r=lc(n,t),o=n.listenProvider_.startListening(hn(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)m(!Xe(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,u)=>{if(!A(c)&&d&&Xe(d))return[Os(d).query];{let f=[];return d&&(f=f.concat(tc(d).map(p=>p.query))),ee(u,(p,_)=>{f=f.concat(_)}),f}});for(let c=0;c<l.length;++c){const d=l[c];n.listenProvider_.stopListening(hn(d),bn(n,d))}}return o}/**
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
 */class Sr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Sr(t)}node(){return this.node_}}class Rr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=W(this.path_,e);return new Rr(this.syncTree_,t)}node(){return Ir(this.syncTree_,this.path_)}}const Am=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Jo=function(n,e,t){if(!n||typeof n!="object")return n;if(m(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Nm(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Pm(n[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Nm=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:m(!1,"Unexpected server value: "+n)}},Pm=function(n,e,t){n.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&m(!1,"Unexpected increment value: "+s);const i=e.node();if(m(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},cc=function(n,e,t,s){return kr(e,new Rr(t,n),s)},uc=function(n,e,t){return kr(n,new Sr(e),t)};function kr(n,e,t){const s=n.getPriority().val(),i=Jo(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Jo(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new J(a,Y(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new J(i))),o.forEachChild($,(a,l)=>{const c=kr(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class xr{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Ar(n,e){let t=e instanceof M?e:new M(e),s=n,i=k(t);for(;i!==null;){const r=Pt(s.node.children,i)||{children:{},childCount:0};s=new xr(i,s,r),t=U(t),i=k(t)}return s}function Gt(n){return n.node.value}function dc(n,e){n.node.value=e,Mi(n)}function hc(n){return n.node.childCount>0}function Om(n){return Gt(n)===void 0&&!hc(n)}function Ms(n,e){ee(n.node.children,(t,s)=>{e(new xr(t,n,s))})}function fc(n,e,t,s){t&&e(n),Ms(n,i=>{fc(i,e,!0)})}function Dm(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Fn(n){return new M(n.parent===null?n.name:Fn(n.parent)+"/"+n.name)}function Mi(n){n.parent!==null&&Mm(n.parent,n.name,n)}function Mm(n,e,t){const s=Om(t),i=Te(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Mi(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Mi(n))}/**
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
 */const Lm=/[\[\].#$\/\u0000-\u001F\u007F]/,Fm=/[\[\].#$\u0000-\u001F\u007F]/,ai=10*1024*1024,Nr=function(n){return typeof n=="string"&&n.length!==0&&!Lm.test(n)},pc=function(n){return typeof n=="string"&&n.length!==0&&!Fm.test(n)},Um=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),pc(n)},jm=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!ir(n)||n&&typeof n=="object"&&Te(n,".sv")},gc=function(n,e,t,s){s&&e===void 0||Ls(Cs(n,"value"),e,t)},Ls=function(n,e,t){const s=t instanceof M?new tg(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ot(s));if(typeof e=="function")throw new Error(n+"contains a function "+ot(s)+" with contents = "+e.toString());if(ir(e))throw new Error(n+"contains "+e.toString()+" "+ot(s));if(typeof e=="string"&&e.length>ai/3&&Ts(e)>ai)throw new Error(n+"contains a string greater than "+ai+" utf8 bytes "+ot(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ee(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Nr(o)))throw new Error(n+" contains an invalid key ("+o+") "+ot(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ng(s,o),Ls(n,a,s),sg(s)}),i&&r)throw new Error(n+' contains ".value" child '+ot(s)+" in addition to actual children.")}},Wm=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=yn(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Nr(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(eg);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&he(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},$m=function(n,e,t,s){const i=Cs(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];ee(e,(o,a)=>{const l=new M(o);if(Ls(i,a,W(t,l)),cr(l)===".priority"&&!jm(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),Wm(i,r)},mc=function(n,e,t,s){if(!pc(t))throw new Error(Cs(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Bm=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),mc(n,e,t)},Pr=function(n,e){if(k(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Hm=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Nr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Um(t))throw new Error(Cs(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Vm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Fs(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!ur(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function _c(n,e,t){Fs(n,t),yc(n,s=>ur(s,e))}function pe(n,e,t){Fs(n,t),yc(n,s=>he(s,e)||he(e,s))}function yc(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(zm(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function zm(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();ln&&Z("event: "+t.toString()),Vt(s)}}}/**
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
 */const Gm="repo_interrupt",qm=25;class Km{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Vm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ps(),this.transactionQueueTree_=new xr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ym(n,e,t){if(n.stats_=ar(n.repoInfo_),n.forceRestClient_||Tp())n.server_=new fs(n.repoInfo_,(s,i,r,o)=>{Xo(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Zo(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Q(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Oe(n.repoInfo_,e,(s,i,r,o)=>{Xo(n,s,i,r,o)},s=>{Zo(n,s)},s=>{Qm(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Ap(n.repoInfo_,()=>new Ag(n.stats_,n.server_)),n.infoData_=new Tg,n.infoSyncTree_=new Qo({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=Ln(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Or(n,"connected",!1),n.serverSyncTree_=new Qo({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);pe(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function vc(n){const t=n.infoData_.getNode(new M(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Us(n){return Am({timestamp:vc(n)})}function Xo(n,e,t,s,i){n.dataUpdateCount++;const r=new M(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=es(t,c=>Y(c));o=Cm(n.serverSyncTree_,r,l,i)}else{const l=Y(t);o=rc(n.serverSyncTree_,r,l,i)}else if(s){const l=es(t,c=>Y(c));o=Em(n.serverSyncTree_,r,l)}else{const l=Y(t);o=Ln(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=jt(n,r)),pe(n.eventQueue_,a,o)}function Zo(n,e){Or(n,"connected",e),e===!1&&e_(n)}function Qm(n,e){ee(e,(t,s)=>{Or(n,t,s)})}function Or(n,e,t){const s=new M("/.info/"+e),i=Y(t);n.infoData_.updateSnapshot(s,i);const r=Ln(n.infoSyncTree_,s,i);pe(n.eventQueue_,s,r)}function Dr(n){return n.nextWriteId_++}function Jm(n,e,t){const s=Tm(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=Y(i).withIndex(e._queryParams.getIndex());Di(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Ln(n.serverSyncTree_,e._path,r);else{const a=bn(n.serverSyncTree_,e);o=rc(n.serverSyncTree_,e._path,r,a)}return pe(n.eventQueue_,e._path,o),Is(n.serverSyncTree_,e,t,null,!0),r},i=>(Un(n,"get for query "+Q(e)+" failed: "+i),Promise.reject(new Error(i))))}function Xm(n,e,t,s,i){Un(n,"set",{path:e.toString(),value:t,priority:s});const r=Us(n),o=Y(t,s),a=Ir(n.serverSyncTree_,e),l=uc(o,a,r),c=Dr(n),d=ic(n.serverSyncTree_,e,l,c,!0);Fs(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(f,p)=>{const _=f==="ok";_||re("set at "+e+" failed: "+f);const v=Ve(n.serverSyncTree_,c,!_);pe(n.eventQueue_,e,v),Fi(n,i,f,p)});const u=Lr(n,e);jt(n,u),pe(n.eventQueue_,u,[])}function Zm(n,e,t,s){Un(n,"update",{path:e.toString(),value:t});let i=!0;const r=Us(n),o={};if(ee(t,(a,l)=>{i=!1,o[a]=cc(W(e,a),Y(l),n.serverSyncTree_,r)}),i)Z("update() called with empty data.  Don't do anything."),Fi(n,s,"ok",void 0);else{const a=Dr(n),l=wm(n.serverSyncTree_,e,o,a);Fs(n.eventQueue_,l),n.server_.merge(e.toString(),t,(c,d)=>{const u=c==="ok";u||re("update at "+e+" failed: "+c);const f=Ve(n.serverSyncTree_,a,!u),p=f.length>0?jt(n,e):e;pe(n.eventQueue_,p,f),Fi(n,s,c,d)}),ee(t,c=>{const d=Lr(n,W(e,c));jt(n,d)}),pe(n.eventQueue_,e,[])}}function e_(n){Un(n,"onDisconnectEvents");const e=Us(n),t=ps();ki(n.onDisconnect_,N(),(i,r)=>{const o=cc(i,r,n.serverSyncTree_,e);Hl(t,i,o)});let s=[];ki(t,N(),(i,r)=>{s=s.concat(Ln(n.serverSyncTree_,i,r));const o=Lr(n,i);jt(n,o)}),n.onDisconnect_=ps(),pe(n.eventQueue_,N(),s)}function t_(n,e,t){let s;k(e._path)===".info"?s=Di(n.infoSyncTree_,e,t):s=Di(n.serverSyncTree_,e,t),_c(n.eventQueue_,e._path,s)}function Li(n,e,t){let s;k(e._path)===".info"?s=Is(n.infoSyncTree_,e,t):s=Is(n.serverSyncTree_,e,t),_c(n.eventQueue_,e._path,s)}function n_(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Gm)}function Un(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Z(t,...e)}function Fi(n,e,t,s){e&&Vt(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function wc(n,e,t){return Ir(n.serverSyncTree_,e,t)||C.EMPTY_NODE}function Mr(n,e=n.transactionQueueTree_){if(e||js(n,e),Gt(e)){const t=Ic(n,e);m(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&s_(n,Fn(e),t)}else hc(e)&&Ms(e,t=>{Mr(n,t)})}function s_(n,e,t){const s=t.map(c=>c.currentWriteId),i=wc(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const d=t[c];m(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=ie(e,d.path);r=r.updateChild(u,d.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{Un(n,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let f=0;f<t.length;f++)t[f].status=2,d=d.concat(Ve(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&u.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();js(n,Ar(n.transactionQueueTree_,e)),Mr(n,n.transactionQueueTree_),pe(n.eventQueue_,e,d);for(let f=0;f<u.length;f++)Vt(u[f])}else{if(c==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{re("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=c}jt(n,e)}},o)}function jt(n,e){const t=Ec(n,e),s=Fn(t),i=Ic(n,t);return i_(n,i,s),s}function i_(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ie(t,l.path);let d=!1,u;if(m(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,u=l.abortReason,i=i.concat(Ve(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=qm)d=!0,u="maxretry",i=i.concat(Ve(n.serverSyncTree_,l.currentWriteId,!0));else{const f=wc(n,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){Ls("transaction failed: Data returned ",p,l.path);let _=Y(p);typeof p=="object"&&p!=null&&Te(p,".priority")||(_=_.updatePriority(f.getPriority()));const R=l.currentWriteId,j=Us(n),w=uc(_,f,j);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=w,l.currentWriteId=Dr(n),o.splice(o.indexOf(R),1),i=i.concat(ic(n.serverSyncTree_,l.path,w,l.currentWriteId,l.applyLocally)),i=i.concat(Ve(n.serverSyncTree_,R,!0))}else d=!0,u="nodata",i=i.concat(Ve(n.serverSyncTree_,l.currentWriteId,!0))}pe(n.eventQueue_,t,i),i=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(u),!1,null))))}js(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)Vt(s[a]);Mr(n,n.transactionQueueTree_)}function Ec(n,e){let t,s=n.transactionQueueTree_;for(t=k(e);t!==null&&Gt(s)===void 0;)s=Ar(s,t),e=U(e),t=k(e);return s}function Ic(n,e){const t=[];return bc(n,e,t),t.sort((s,i)=>s.order-i.order),t}function bc(n,e,t){const s=Gt(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Ms(e,i=>{bc(n,i,t)})}function js(n,e){const t=Gt(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,dc(e,t.length>0?t:void 0)}Ms(e,s=>{js(n,s)})}function Lr(n,e){const t=Fn(Ec(n,e)),s=Ar(n.transactionQueueTree_,e);return Dm(s,i=>{li(n,i)}),li(n,s),fc(s,i=>{li(n,i)}),t}function li(n,e){const t=Gt(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(m(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Ve(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?dc(e,void 0):t.length=r+1,pe(n.eventQueue_,Fn(e),i);for(let o=0;o<s.length;o++)Vt(s[o])}}/**
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
 */function r_(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function o_(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):re(`Invalid query segment '${t}' in query '${n}'`)}return e}const ea=function(n,e){const t=a_(n),s=t.namespace;t.domain==="firebase.com"&&Me(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Me("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||mp();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Sl(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new M(t.pathString)}},a_=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let d=n.indexOf("/");d===-1&&(d=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(d,u)),d<u&&(i=r_(n.substring(d,u)));const f=o_(n.substring(Math.min(n.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),t=e.substring(_+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const ta="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",l_=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=ta.charAt(t%64),t=Math.floor(t/64);m(t===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=ta.charAt(e[i]);return m(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class c_{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Q(this.snapshot.exportVal())}}class u_{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Cc{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ws{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return A(this._path)?null:cr(this._path)}get ref(){return new Fe(this._repo,this._path)}get _queryIdentifier(){const e=Wo(this._queryParams),t=rr(e);return t==="{}"?"default":t}get _queryObject(){return Wo(this._queryParams)}isEqual(e){if(e=H(e),!(e instanceof Ws))return!1;const t=this._repo===e._repo,s=ur(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Zp(this._path)}}class Fe extends Ws{constructor(e,t){super(e,t,new pr,!1)}get parent(){const e=Ml(this._path);return e===null?null:new Fe(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Cn{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new M(e),s=Tn(this.ref,e);return new Cn(this._node.getChild(t),s,$)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Cn(i,Tn(this.ref,s),$)))}hasChild(e){const t=new M(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function z(n,e){return n=H(n),n._checkNotDeleted("ref"),e!==void 0?Tn(n._root,e):n._root}function Tn(n,e){return n=H(n),k(n._path)===null?Bm("child","path",e):mc("child","path",e),new Fe(n._repo,W(n._path,e))}function V_(n,e){n=H(n),Pr("push",n._path),gc("push",e,n._path,!0);const t=vc(n._repo),s=l_(t),i=Tn(n,s),r=Tn(n,s);let o;return o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function ke(n){return Pr("remove",n._path),Jn(n,null)}function Jn(n,e){n=H(n),Pr("set",n._path),gc("set",e,n._path,!1);const t=new Rn;return Xm(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function ci(n,e){$m("update",e,n._path);const t=new Rn;return Zm(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function bt(n){n=H(n);const e=new Cc(()=>{}),t=new $s(e);return Jm(n._repo,n,t).then(s=>new Cn(s,new Fe(n._repo,n._path),n._queryParams.getIndex()))}class $s{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new c_("value",this,new Cn(e.snapshotNode,new Fe(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new u_(this,e,t):null}matches(e){return e instanceof $s?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function d_(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=t,c=(d,u)=>{Li(n._repo,n,a),l(d,u)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new Cc(t,r||void 0),a=new $s(o);return t_(n._repo,n,a),()=>Li(n._repo,n,a)}function Hn(n,e,t,s){return d_(n,"value",e,t,s)}function z_(n,e,t){Li(n._repo,n,null)}class h_{}class f_ extends h_{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Ws(e._repo,e._path,Cg(e._queryParams,this._limit),e._orderByCalled)}}function G_(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new f_(n)}function q_(n,...e){let t=H(n);for(const s of e)t=s._apply(t);return t}hm(Fe);_m(Fe);/**
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
 */const p_="FIREBASE_DATABASE_EMULATOR_HOST",Ui={};let g_=!1;function m_(n,e,t,s){n.repoInfo_=new Sl(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function __(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Me("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Z("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=ea(r,i),a=o.repoInfo,l;typeof process<"u"&&Io&&(l=Io[p_]),l?(r=`http://${l}?ns=${a.namespace}`,o=ea(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new Rp(n.name,n.options,e);Hm("Invalid Firebase Database URL",o),A(o.path)||Me("Database URL must point to the root of a Firebase Database (not including a child path).");const d=v_(a,n,c,new Sp(n.name,t));return new w_(d,n)}function y_(n,e){const t=Ui[e];(!t||t[n.key]!==n)&&Me(`Database ${e}(${n.repoInfo_}) has already been deleted.`),n_(n),delete t[n.key]}function v_(n,e,t,s){let i=Ui[e.name];i||(i={},Ui[e.name]=i);let r=i[n.toURLString()];return r&&Me("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Km(n,g_,t,s),i[n.toURLString()]=r,r}class w_{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ym(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Fe(this._repo,N())),this._rootInternal}_delete(){return this._rootInternal!==null&&(y_(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Me("Cannot call "+e+" on a deleted database.")}}function E_(n=ka(),e){const t=qi(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=ku("database");s&&I_(t,...s)}return t}function I_(n,e,t,s={}){n=H(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Me("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Me('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Qn(Qn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:xu(s.mockUserToken,n.app.options.projectId);r=new Qn(o)}m_(i,e,t,r)}/**
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
 */function b_(n){up(Bt),Ot(new ut("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return __(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),qe(bo,Co,n),qe(bo,Co,"esm2017")}Oe.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Oe.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};b_();const C_={apiKey:"AIzaSyCr81IrmH5LQedoRSQHorEjK5-sWMdVf_k",authDomain:"better-wrodle.firebaseapp.com",projectId:"better-wrodle",storageBucket:"better-wrodle.firebasestorage.app",messagingSenderId:"445700190808",appId:"1:445700190808:web:c4da4d756ac143583f102d",databaseURL:"https://better-wrodle-default-rtdb.firebaseio.com"},Tc=Ra(C_),b=ap(Tc),G=E_(Tc),na=new xe;function Fr(){const[n,e]=g.useState(null),[t,s]=g.useState(!0),[i,r]=g.useState(null),[o,a]=g.useState([]),[l,c]=g.useState([]),[d,u]=g.useState([]),[f,p]=g.useState([]);g.useEffect(()=>{let y=null,E=null,I=null,O=null;const L=Gh(b,T=>{if(y&&(y(),y=null),E&&(E(),E=null),I&&(I(),I=null),e(T),T){const B=(T.providerData||[]).some(le=>le&&le.providerId==="password"),te=!!T.displayName;if(B&&!te){const it=`better-wordle-player-${Math.floor(Math.random()*1e3).toString().padStart(3,"0")}`;ho(T,{displayName:it}).then(()=>{e({...T,displayName:it})}).catch(Kt=>{console.error("Failed to assign default username:",Kt)})}}if(T){if(!(T.emailVerified||(T.providerData||[]).some(ne=>ne.providerId==="google.com"))){a([]),c([]),u([]),p([]),s(!1),r(null);return}const te=z(G,`users/${T.uid}/friends`);y=Hn(te,ne=>{if(ne.exists()){const ge=ne.val(),ce=Object.entries(ge).map(([oe,K])=>({id:oe,...K}));a(ce)}else a([])});const le=z(G,`users/${T.uid}/friendRequests`);E=Hn(le,ne=>{if(ne.exists()){const ge=ne.val(),ce=Object.entries(ge).map(([oe,K])=>({id:oe,...K}));c(ce)}else c([])});const it=z(G,`users/${T.uid}/challenges`);I=Hn(it,ne=>{if(ne.exists()){const ge=ne.val(),ce=Object.entries(ge).map(([oe,K])=>({id:oe,...K}));ce.sort((oe,K)=>{const Hs=oe.createdAt||oe.sentAt||0;return(K.createdAt||K.sentAt||0)-Hs}),u(ce)}else u([])});const Kt=z(G,`users/${T.uid}/sentChallenges`);O=Hn(Kt,ne=>{if(ne.exists()){const ge=ne.val(),ce=Object.entries(ge).map(([oe,K])=>({id:oe,...K}));ce.sort((oe,K)=>{const Hs=oe.createdAt||oe.sentAt||0;return(K.createdAt||K.sentAt||0)-Hs}),p(ce)}else p([])}),s(!1),r(null)}else a([]),c([]),u([]),p([]),s(!1),r(null)});return()=>{y&&y(),E&&E(),I&&I(),O&&O(),L()}},[]);const _=g.useCallback(async()=>{var y;try{return r(null),s(!0),(await gf(b,na)).user}catch(E){if(E.code==="auth/account-exists-with-different-credential"){const I=((y=E.customData)==null?void 0:y.email)||E.email||null,O="An account with this email already exists. Please sign in with email and password, then link Google from your Profile.";try{if(I&&!(await Bh(b,I)).includes("password"))throw r(E.message),E}catch(T){console.error("Error handling account-exists-with-different-credential:",T)}const L=new Error(O);throw L.code=E.code,I&&(L.email=I),r(L.message),L}throw r(E.message),E}finally{s(!1)}},[]),v=g.useCallback(async(y,E)=>{try{r(null),s(!0);const I=await jh(b,y,E);try{await uo(I.user)}catch(O){console.error("Failed to send verification email:",O)}return I.user}catch(I){throw r(I.message),I}finally{s(!1)}},[]),R=g.useCallback(async(y,E)=>{try{return r(null),s(!0),(await Wh(b,y,E)).user}catch(I){throw r(I.message),I}finally{s(!1)}},[]),j=g.useCallback(async()=>{try{r(null),await qh(b)}catch(y){throw r(y.message),y}},[]),w=g.useCallback(async y=>{try{if(r(null),!b.currentUser)throw new Error("No user signed in");return await ho(b.currentUser,{displayName:y}),e({...b.currentUser,displayName:y}),!0}catch(E){throw r(E.message),E}},[]),P=g.useCallback(async(y,E)=>{try{if(r(null),!b.currentUser)throw new Error("No user signed in");if(!(b.currentUser.emailVerified||(b.currentUser.providerData||[]).some(L=>L.providerId==="google.com")))throw new Error("You must verify your email or sign in with Google to use friends.");const O=z(G,`users/${E}/friendRequests/${b.currentUser.uid}`);return await Jn(O,{from:b.currentUser.uid,fromName:b.currentUser.displayName||"Unknown",sentAt:new Date().toISOString()}),!0}catch(I){throw console.error("sendFriendRequest error:",I),r(I.message),I}},[]),ue=g.useCallback(async(y,E)=>{try{if(r(null),!b.currentUser)throw new Error("No user signed in");if(!(b.currentUser.emailVerified||(b.currentUser.providerData||[]).some(te=>te.providerId==="google.com")))throw new Error("You must verify your email or sign in with Google to use friends.");const O=new Date().toISOString(),L=z(G,`users/${b.currentUser.uid}/friends/${y}`);await Jn(L,{name:E,addedAt:O});const T=z(G,`users/${y}/friends/${b.currentUser.uid}`);await Jn(T,{name:b.currentUser.displayName||"Unknown",addedAt:O});const B=z(G,`users/${b.currentUser.uid}/friendRequests/${y}`);return await ke(B),c(te=>te.filter(le=>le.id!==y)),a(te=>te.some(le=>le.id===y)?te:[...te,{id:y,name:E,addedAt:O}]),!0}catch(I){throw r(I.message),I}},[]),Ie=g.useCallback(async(y,E=null,I=null)=>{try{if(r(null),!b.currentUser)throw new Error("No user signed in");if(!(b.currentUser.emailVerified||(b.currentUser.providerData||[]).some(T=>T.providerId==="google.com")))throw new Error("You must verify your email or sign in with Google to use friends.");const L=z(G,`users/${b.currentUser.uid}/friendRequests/${y}`);if(await ke(L),E&&typeof I=="function")try{await I(E,"declined")}catch(T){console.error("Failed to update 1v1 friendRequestStatus:",T)}return!0}catch(O){throw r(O.message),O}},[]),q=g.useCallback(async y=>{try{if(r(null),!b.currentUser)throw new Error("No user signed in");if(!(b.currentUser.emailVerified||(b.currentUser.providerData||[]).some(L=>L.providerId==="google.com")))throw new Error("You must verify your email or sign in with Google to use friends.");const I=z(G,`users/${b.currentUser.uid}/friends/${y}`);await ke(I);const O=z(G,`users/${y}/friends/${b.currentUser.uid}`);return await ke(O),a(L=>L.filter(T=>T.id!==y)),!0}catch(E){throw r(E.message),E}},[]),Ue=g.useCallback(async(y,E,I,O,L)=>{try{if(r(null),!b.currentUser)throw new Error("No user signed in");if(!(b.currentUser.emailVerified||(b.currentUser.providerData||[]).some(ce=>ce.providerId==="google.com")))throw new Error("You must verify your email or sign in with Google to use friends.");const B=b.currentUser.uid,te=b.currentUser.displayName||b.currentUser.email||"Unknown",le=z(G,`users/${B}/challenges`),it=await bt(le);if(it.exists()){const ce=it.val();if(Object.values(ce).some(K=>K&&K.fromUserId===y&&(K.status==="pending"||K.status===void 0||K.status===null)))return!1}const Kt=Date.now(),ne={fromUserId:B,fromUserName:te,toUserId:y,toUserName:E,gameCode:I,boards:O,speedrun:!!L,status:"pending",createdAt:Kt},ge={};return ge[`users/${y}/challenges/${I}`]=ne,ge[`users/${B}/sentChallenges/${I}`]=ne,await ci(z(G),ge),!0}catch(T){throw console.error("sendChallenge error:",T),r(T.message),T}},[]),qt=g.useCallback(async y=>{try{if(r(null),!b.currentUser)throw new Error("No user signed in");const E=z(G,`users/${b.currentUser.uid}/challenges/${y}`),I=await bt(E);if(!I.exists())throw new Error("Challenge not found");const O=I.val();return await ke(E),O}catch(E){throw console.error("acceptChallenge error:",E),r(E.message),E}},[]),nt=g.useCallback(async(y,E=null)=>{try{if(r(null),!b.currentUser)throw new Error("No user signed in");const I=z(G,`users/${b.currentUser.uid}/challenges/${y}`),O=await bt(I);let L=null,T=E||y;if(O.exists()){const B=O.val();L=B.fromUserId||null,T||(T=B.gameCode||y)}if(await ke(I),L&&T)try{const B=z(G,`users/${L}/sentChallenges/${T}`);await ke(B)}catch(B){console.error("Failed to remove challenge from sender's sentChallenges after dismiss:",B)}if(T)try{const B=z(G,`onevone/${T}`);if((await bt(B)).exists()){const le=b.currentUser.displayName||b.currentUser.email||"Your friend";await ci(B,{status:"cancelled",cancelledByName:le})}}catch(B){console.error("Failed to mark 1v1 game as cancelled after dismissing challenge:",B)}return!0}catch(I){throw console.error("dismissChallenge error:",I),r(I.message),I}},[]),wt=g.useCallback(async y=>{try{if(r(null),!b.currentUser)throw new Error("No user signed in");const E=b.currentUser.uid,I=z(G,`users/${E}/sentChallenges/${y}`),O=await bt(I);let L=null;if(O.exists()){const T=O.val();L=T.toUserId||T.friendId||null}if(await ke(I),L)try{const T=z(G,`users/${L}/challenges/${y}`);await ke(T)}catch(T){console.error("Failed to remove incoming challenge after host cancelled sent challenge:",T)}try{const T=z(G,`onevone/${y}`);if((await bt(T)).exists()){const te=b.currentUser.displayName||b.currentUser.email||"You";await ci(T,{status:"cancelled",cancelledByName:te})}}catch(T){console.error("Failed to mark 1v1 game as cancelled after host cancelled sent challenge:",T)}return!0}catch(E){throw console.error("cancelSentChallenge error:",E),r(E.message),E}},[]),V=!!n&&(n.emailVerified||(n.providerData||[]).some(y=>y.providerId==="google.com")),Se=g.useCallback(async()=>{try{if(r(null),!b.currentUser)throw new Error("No user signed in");return await uo(b.currentUser),!0}catch(y){throw r(y.message),y}},[]),st=g.useCallback(async()=>{try{if(r(null),!b.currentUser)throw new Error("No user signed in");return await mf(b.currentUser,na),e(b.currentUser),!0}catch(y){throw y.code==="auth/credential-already-in-use"||y.code==="auth/provider-already-linked"?r("Google account is already linked."):r(y.message),y}},[]);return{user:n,loading:t,error:i,friends:o,friendRequests:l,incomingChallenges:d,sentChallenges:f,isVerifiedUser:V,signInWithGoogle:_,signUpWithEmail:v,signInWithEmail:R,signOut:j,updateUsername:w,sendFriendRequest:P,acceptFriendRequest:ue,declineFriendRequest:Ie,removeFriend:q,sendChallenge:Ue,acceptChallenge:qt,dismissChallenge:nt,cancelSentChallenge:wt,resendVerificationEmail:Se,linkGoogleAccount:st}}function T_(){const[n,e]=g.useState("");return g.useEffect(()=>{const t=()=>{const i=new Date,r=new Date(i);r.setDate(r.getDate()+1),r.setHours(0,0,0,0);const o=r-i,a=Math.floor(o/(1e3*60*60)),l=Math.floor(o%(1e3*60*60)/(1e3*60)),c=Math.floor(o%(1e3*60)/1e3);a>0?e(`${a}h ${l}m`):l>0?e(`${l}m ${c}s`):e(`${c}s`)};t();const s=setInterval(t,1e3);return()=>clearInterval(s)},[]),n}const Sc=ye.memo(function({isOpen:e,onRequestClose:t,onSignUpComplete:s}){const[i,r]=g.useState(!1),[o,a]=g.useState(""),[l,c]=g.useState(""),[d,u]=g.useState(""),{signInWithGoogle:f,signUpWithEmail:p,signInWithEmail:_,loading:v}=Fr(),R=g.useCallback(async()=>{try{u(""),await f(),t()}catch(q){u(q.message||"Failed to sign in with Google")}},[f,t]),j=g.useCallback(async q=>{if(q.preventDefault(),u(""),!o||!l){u("Please enter both email and password");return}try{i?(await p(o,l),s&&s(o)):await _(o,l),t(),a(""),c("")}catch(Ue){u(Ue.message||`Failed to ${i?"sign up":"sign in"}`)}},[i,o,l,p,_,t,s]),w=g.useCallback(()=>{a(""),c(""),u(""),r(!1),t()},[t]),P=g.useCallback(()=>{r(q=>!q),u("")},[]),ue=g.useCallback(q=>a(q.target.value),[]),Ie=g.useCallback(q=>c(q.target.value),[]);return e?h.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.75)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e4,padding:"20px"},onClick:w,children:h.jsxs("div",{style:{backgroundColor:"#1a1a1b",borderRadius:"12px",padding:"32px",maxWidth:"400px",width:"100%",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.5)",position:"relative"},onClick:q=>q.stopPropagation(),children:[h.jsxs("div",{style:{marginBottom:"24px"},children:[h.jsx("h2",{style:{margin:0,marginBottom:"8px",fontSize:"24px",fontWeight:"bold",color:"#ffffff"},children:i?"Create Account":"Sign In"}),h.jsx("p",{style:{margin:0,fontSize:"14px",color:"#d7dadc"},children:i?"Create an account to sync your progress":"Sign in to access your account"})]}),d&&h.jsx("div",{style:{padding:"12px",marginBottom:"16px",backgroundColor:"#3a1f1f",border:"1px solid #8b3a3a",borderRadius:"6px",color:"#ff6b6b",fontSize:"14px"},children:d}),h.jsxs("button",{onClick:R,disabled:v,style:{width:"100%",padding:"12px",marginBottom:"16px",backgroundColor:"#4285f4",border:"none",borderRadius:"6px",color:"#ffffff",fontSize:"16px",fontWeight:"bold",cursor:v?"not-allowed":"pointer",opacity:v?.6:1,display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[h.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:[h.jsx("path",{d:"M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z",fill:"#4285F4"}),h.jsx("path",{d:"M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z",fill:"#34A853"}),h.jsx("path",{d:"M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957C.348 6.175 0 7.55 0 9s.348 2.825.957 4.039l3.007-2.332z",fill:"#FBBC05"}),h.jsx("path",{d:"M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 7.293C4.672 5.163 6.656 3.58 9 3.58z",fill:"#EA4335"})]}),v?"Signing in...":"Continue with Google"]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"16px"},children:[h.jsx("div",{style:{flex:1,height:"1px",backgroundColor:"#3a3a3c"}}),h.jsx("span",{style:{padding:"0 12px",color:"#818384",fontSize:"14px"},children:"or"}),h.jsx("div",{style:{flex:1,height:"1px",backgroundColor:"#3a3a3c"}})]}),h.jsxs("form",{onSubmit:j,children:[h.jsx("div",{style:{marginBottom:"16px"},children:h.jsx("input",{type:"email",placeholder:"Email",value:o,onChange:ue,disabled:v,style:{width:"100%",padding:"12px",backgroundColor:"#121213",border:"1px solid #3a3a3c",borderRadius:"6px",color:"#ffffff",fontSize:"16px",boxSizing:"border-box"}})}),h.jsx("div",{style:{marginBottom:"20px"},children:h.jsx("input",{type:"password",placeholder:"Password",value:l,onChange:Ie,disabled:v,style:{width:"100%",padding:"12px",backgroundColor:"#121213",border:"1px solid #3a3a3c",borderRadius:"6px",color:"#ffffff",fontSize:"16px",boxSizing:"border-box"}})}),h.jsx("button",{type:"submit",disabled:v,className:"homeBtn homeBtnGreen homeBtnLg"+(v?" homeBtnNeutral":""),style:{width:"100%",marginBottom:"12px",cursor:v?"not-allowed":"pointer",opacity:v?.8:1},children:v?"Please wait...":i?"Create Account":"Sign In"})]}),h.jsx("div",{style:{textAlign:"center"},children:h.jsx("button",{onClick:P,disabled:v,style:{background:"none",border:"none",color:"#6aaa64",cursor:v?"not-allowed":"pointer",fontSize:"14px",textDecoration:"underline"},children:i?"Already have an account? Sign in":"Don't have an account? Sign up"})}),h.jsx("button",{onClick:w,style:{position:"absolute",top:"16px",right:"16px",background:"none",border:"none",color:"#818384",fontSize:"24px",cursor:"pointer",padding:"0",width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center"},children:"×"})]})}):null}),K_=Object.freeze(Object.defineProperty({__proto__:null,default:Sc},Symbol.toStringTag,{value:"Module"})),S_=g.lazy(()=>Ze(()=>import("./FriendsModal-BKwxigYG.js"),__vite__mapDeps([0,1,2,3]))),R_=g.lazy(()=>Ze(()=>import("./OpenRoomsModal-Blmu1mdz.js"),__vite__mapDeps([4,1])));function k_({onOpenFeedback:n}){const e=Wi(),{user:t,friendRequests:s,incomingChallenges:i,sentChallenges:r,isVerifiedUser:o,acceptChallenge:a,dismissChallenge:l,cancelSentChallenge:c}=Fr(),[d,u]=g.useState(!1),[f,p]=g.useState(!1),[_,v]=g.useState(!1),[R,j]=g.useState(!1);return h.jsxs(h.Fragment,{children:[h.jsxs("div",{style:{position:"relative"},children:[h.jsx("button",{className:"homeBtn homeBtnOutline",onClick:()=>u(!d),style:{padding:"4px 6px",fontSize:"18px",display:"flex",alignItems:"center",justifyContent:"center",border:"none",background:"transparent",color:"#ffffff",cursor:"pointer"},title:"Menu",children:"☰"}),d&&h.jsxs("div",{style:{position:"absolute",top:"calc(100% + 4px)",right:0,background:"#2b2b2e",border:"1px solid #3a3a3c",borderRadius:"8px",minWidth:"140px",zIndex:1e3,boxShadow:"0 4px 12px rgba(0, 0, 0, 0.5)"},children:[h.jsx("button",{onClick:()=>{e("/"),u(!1)},style:{width:"100%",padding:"10px 16px",background:"transparent",border:"none",color:"#ffffff",fontSize:"13px",textAlign:"left",cursor:"pointer",fontWeight:"600",letterSpacing:"0.3px",transition:"all 0.2s ease",borderBottom:"1px solid #3a3a3c"},onMouseEnter:w=>w.target.style.background="rgba(255, 255, 255, 0.1)",onMouseLeave:w=>w.target.style.background="transparent",children:"Home"}),t&&h.jsx("button",{onClick:()=>{e("/profile"),u(!1)},style:{width:"100%",padding:"10px 16px",background:"transparent",border:"none",color:"#ffffff",fontSize:"13px",textAlign:"left",cursor:"pointer",fontWeight:"600",letterSpacing:"0.3px",transition:"all 0.2s ease",borderBottom:"1px solid #3a3a3c"},onMouseEnter:w=>w.target.style.background="rgba(255, 255, 255, 0.1)",onMouseLeave:w=>w.target.style.background="transparent",children:"Profile"}),t&&h.jsxs("button",{onClick:()=>{if(!o){alert("Verify your email or sign in with Google to use friends."),u(!1);return}p(!0),u(!1)},style:{width:"100%",padding:"10px 16px",background:"transparent",border:"none",color:"#ffffff",fontSize:"13px",textAlign:"left",cursor:"pointer",fontWeight:"600",letterSpacing:"0.3px",transition:"all 0.2s ease",borderBottom:"1px solid #3a3a3c",position:"relative",display:"flex",alignItems:"center"},onMouseEnter:w=>w.target.style.background="rgba(255, 255, 255, 0.1)",onMouseLeave:w=>w.target.style.background="transparent",children:["Friends",s&&s.length>0&&h.jsx("div",{style:{marginLeft:"8px",width:"20px",height:"20px",borderRadius:"50%",background:"#ef5350",color:"#ffffff",fontSize:"11px",fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center"},children:s.length})]}),t&&h.jsxs("button",{onClick:()=>{if(!o){alert("Verify your email or sign in with Google to use challenges."),u(!1);return}v(!0),u(!1)},style:{width:"100%",padding:"10px 16px",background:"transparent",border:"none",color:"#ffffff",fontSize:"13px",textAlign:"left",cursor:"pointer",fontWeight:"600",letterSpacing:"0.3px",transition:"all 0.2s ease",borderBottom:"1px solid #3a3a3c",position:"relative",display:"flex",alignItems:"center"},onMouseEnter:w=>w.target.style.background="rgba(255, 255, 255, 0.1)",onMouseLeave:w=>w.target.style.background="transparent",children:["Challenges",i&&i.length>0&&h.jsx("div",{style:{marginLeft:"8px",width:"20px",height:"20px",borderRadius:"50%",background:"#c9b458",color:"#121213",fontSize:"11px",fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center"},children:i.length})]}),t&&h.jsx("button",{onClick:()=>{if(!o){alert("Verify your email or sign in with Google to browse open rooms."),u(!1);return}j(!0),u(!1)},style:{width:"100%",padding:"10px 16px",background:"transparent",border:"none",color:"#ffffff",fontSize:"13px",textAlign:"left",cursor:"pointer",fontWeight:"600",letterSpacing:"0.3px",transition:"all 0.2s ease",borderBottom:"1px solid #3a3a3c"},onMouseEnter:w=>w.target.style.background="rgba(255, 255, 255, 0.1)",onMouseLeave:w=>w.target.style.background="transparent",children:"Open Rooms"}),h.jsx("button",{onClick:()=>{n(),u(!1)},style:{width:"100%",padding:"10px 16px",background:"transparent",border:"none",color:"#ffffff",fontSize:"13px",textAlign:"left",cursor:"pointer",fontWeight:"600",letterSpacing:"0.3px",transition:"all 0.2s ease"},onMouseEnter:w=>w.target.style.background="rgba(255, 255, 255, 0.1)",onMouseLeave:w=>w.target.style.background="transparent",children:"Feedback"})]})]}),d&&h.jsx("div",{onClick:()=>u(!1),style:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:999}}),h.jsxs(g.Suspense,{fallback:null,children:[h.jsx(S_,{isOpen:f,onRequestClose:()=>p(!1)}),h.jsx(R_,{isOpen:R,onRequestClose:()=>j(!1)})]}),h.jsx(ga,{isOpen:_,onRequestClose:()=>v(!1),children:h.jsxs("div",{style:{padding:"24px",width:"100%",boxSizing:"border-box"},children:[h.jsx("h2",{style:{margin:"0 0 16px 0",fontSize:20,fontWeight:"bold",color:"#ffffff"},children:"Challenges"}),(!r||r.length===0)&&(!i||i.length===0)?h.jsx("div",{style:{padding:"24px 8px 16px",color:"#818384",fontSize:14},children:"You have no challenges right now."}):h.jsxs(h.Fragment,{children:[h.jsx("h3",{style:{margin:"8px 0 8px",fontSize:14,fontWeight:"bold",color:"#d7dadc",textAlign:"left"},children:"Sent"}),!r||r.length===0?h.jsx("div",{style:{padding:"8px 0 12px",color:"#818384",fontSize:12},children:"You haven't sent any challenges yet."}):h.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px",maxHeight:"160px",overflowY:"auto",marginBottom:"12px"},children:r.map(w=>h.jsxs("div",{style:{padding:"10px 12px",borderRadius:8,border:"1px solid #3a3a3c",background:"#2b2b2e",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"10px"},children:[h.jsxs("div",{style:{textAlign:"left",flex:1},children:[h.jsx("div",{style:{color:"#ffffff",fontWeight:600,marginBottom:2},children:w.toUserName||w.friendName||"Unknown friend"}),h.jsxs("div",{style:{color:"#d7dadc",fontSize:12},children:[w.boards||1," board",(w.boards||1)>1?"s":""," · ",w.speedrun?"Speedrun":"Standard"]})]}),h.jsx("div",{style:{display:"flex",gap:"6px"},children:h.jsx("button",{onClick:async()=>{try{await c(w.gameCode||w.id)}catch(P){alert((P==null?void 0:P.message)||"Failed to cancel challenge")}},className:"homeBtn homeBtnOutline",style:{padding:"6px 10px",fontSize:11,borderRadius:6},children:"Cancel"})})]},w.id))}),h.jsx("h3",{style:{margin:"8px 0 8px",fontSize:14,fontWeight:"bold",color:"#d7dadc",textAlign:"left"},children:"Received"}),!i||i.length===0?h.jsx("div",{style:{padding:"8px 0 12px",color:"#818384",fontSize:12},children:"You have no incoming challenges."}):h.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px",maxHeight:"160px",overflowY:"auto",marginBottom:"16px"},children:i.map(w=>h.jsxs("div",{style:{padding:"10px 12px",borderRadius:8,border:"1px solid #3a3a3c",background:"#2b2b2e",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"10px"},children:[h.jsxs("div",{style:{textAlign:"left",flex:1},children:[h.jsx("div",{style:{color:"#ffffff",fontWeight:600,marginBottom:2},children:w.fromUserName||"Unknown"}),h.jsxs("div",{style:{color:"#d7dadc",fontSize:12},children:[w.boards||1," board",(w.boards||1)>1?"s":""," · ",w.speedrun?"Speedrun":"Standard"]})]}),h.jsxs("div",{style:{display:"flex",gap:"6px"},children:[h.jsx("button",{onClick:async()=>{try{const P=await a(w.id);v(!1);const ue=P.boards||1,Ie=!!P.speedrun;e(`/game?mode=1v1&code=${P.gameCode}&speedrun=${Ie}&boards=${ue}`)}catch(P){alert((P==null?void 0:P.message)||"Failed to accept challenge")}},className:"homeBtn homeBtnGreen",style:{padding:"6px 10px",fontSize:11,borderRadius:6},children:"Accept"}),h.jsx("button",{onClick:async()=>{try{await l(w.id,w.gameCode)}catch(P){alert((P==null?void 0:P.message)||"Failed to dismiss challenge")}},className:"homeBtn homeBtnOutline",style:{padding:"6px 10px",fontSize:11,borderRadius:6},children:"Dismiss"})]})]},w.id))})]}),h.jsx("button",{onClick:()=>v(!1),className:"homeBtn homeBtnGreen homeBtnLg",style:{marginTop:4},children:"Close"})]})})]})}function x_({onOpenFeedback:n,onSignUpComplete:e}){const t=Wi(),{user:s,signOut:i}=Fr(),r=T_(),[o,a]=g.useState(!1),l=g.useCallback(()=>{a(!0)},[]),c=g.useCallback(()=>{a(!1)},[]),d=g.useCallback(()=>{t("/leaderboard")},[t]),u=g.useCallback(()=>{t("/")},[t]),f=g.useCallback(async()=>{try{await i()}catch(p){console.error("Failed to sign out",p)}},[i]);return h.jsxs(h.Fragment,{children:[h.jsxs("header",{style:{padding:"10px 16px 8px",borderBottom:"1px solid #3a3a3c",backgroundColor:"#121213",marginBottom:"12px"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[h.jsx("button",{type:"button",onClick:u,"aria-label":"Home",style:{width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:4,border:"1px solid #3a3a3c",background:"transparent",cursor:"pointer",padding:0},children:h.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M4 10.5L12 3L20 10.5V20H14V14H10V20H4V10.5Z",stroke:"#ffffff",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})}),h.jsx("div",{style:{flex:1,textAlign:"center",fontWeight:"bold",letterSpacing:2,fontSize:18},children:"BETTER WORDLE"}),h.jsx("div",{style:{display:"flex",justifyContent:"flex-end",minWidth:32},children:h.jsx(k_,{onOpenFeedback:n||(()=>{})})})]}),h.jsxs("div",{style:{marginTop:8,display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,flexWrap:"wrap"},children:[h.jsxs("div",{style:{fontSize:12,color:"#d7dadc",whiteSpace:"nowrap"},children:["Reset in: ",r]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginLeft:"auto"},children:[h.jsx("button",{type:"button",className:"homeBtn homeBtnOutline",onClick:d,style:{padding:"4px 10px",fontSize:12,textTransform:"uppercase",letterSpacing:.5},children:"Leaderboard"}),s?h.jsx("button",{type:"button",className:"homeBtn homeBtnOutline",onClick:f,style:{padding:"4px 10px",fontSize:12,textTransform:"uppercase",letterSpacing:.5},children:"Sign Out"}):h.jsx("button",{type:"button",className:"homeBtn homeBtnOutline",onClick:l,style:{padding:"4px 10px",fontSize:12,textTransform:"uppercase",letterSpacing:.5},children:"Sign In"})]})]}),s&&h.jsxs("div",{style:{marginTop:6,fontSize:12,color:"#d7dadc",lineHeight:1.4},children:["Signed in as ",s.displayName||s.email||"Unknown user","."," ","(",h.jsx("button",{type:"button",onClick:()=>t("/profile"),style:{background:"none",border:"none",padding:0,margin:0,color:"#93c5fd",textDecoration:"underline",cursor:"pointer",fontSize:12},children:"Change username"}),")"]})]}),h.jsx(Sc,{isOpen:o,onRequestClose:c,onSignUpComplete:e})]})}function Bs(){const n=new Date,e=n.getFullYear(),t=String(n.getMonth()+1).padStart(2,"0"),s=String(n.getDate()).padStart(2,"0");return`${e}-${t}-${s}`}class Rc{constructor(e){this.seed=e%2147483647,this.seed<=0&&(this.seed+=2147483646)}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}}function kc(n,e=0,t="daily",s=!1,i=null,r=1){let o=0;const a=`${n}-${t}-${s}-${e}-${r}-${i||"none"}`;for(let l=0;l<a.length;l++){const c=a.charCodeAt(l);o=(o<<5)-o+c,o=o|0}return Math.abs(o)+e*1e6+r*1e4+(i||0)*1e5}function A_(n,e,t=0,s="daily",i=!1,r=null,o=1){if(!n||n.length===0)throw new Error("Word list is empty");const a=kc(e,t,s,i,r,o),l=new Rc(a),c=Math.floor(l.next()*n.length);return n[c]}function Y_(n,e,t="daily",s=!1,i=null){const r=Bs(),o=[],a=new Set;for(let l=0;l<e;l++){let c,d=0;const u=n.length;do{if(c=A_(n,r,l,t,s,i,e),d>0){const f=kc(r,l+d*1e3,t,s,i,e),p=new Rc(f),_=Math.floor(p.next()*n.length);c=n[_]}d++}while(a.has(c)&&d<u);a.add(c),o.push(c)}return o}const Sn="mw:";function sa(n,e=null){try{const t=window.localStorage.getItem(n);return t?JSON.parse(t):e}catch{return e}}function ia(n,e){try{window.localStorage.setItem(n,JSON.stringify(e))}catch{}}function tn(n){try{window.localStorage.removeItem(n)}catch{}}function N_(n,e,t=null){const s=t||Bs();return`${Sn}game:daily:${n}:${e?"speedrun":"standard"}:${s}`}function P_(n,e=null){const t=e||Bs();return`${Sn}game:marathon:${n?"speedrun":"standard"}:${t}`}function ui(n){return`${Sn}meta:marathon:${n?"speedrun":"standard"}`}function ra(n,e,t,s=null,i=null){const r=i||Bs();return n==="marathon"?`${Sn}solved:${n}:${e}:${t?"speedrun":"standard"}:${s}:${r}`:`${Sn}solved:${n}:${e}:${t?"speedrun":"standard"}:${r}`}const O_=g.lazy(()=>Ze(()=>import("./FeedbackModal-ZAHSnZK0.js"),__vite__mapDeps([5,1]))),D_=g.lazy(()=>Ze(()=>import("./OneVOneModal-BG0q9WQe.js"),__vite__mapDeps([6,1]))),M_=Array.from({length:32},(n,e)=>e+1),nn=ye.memo(function({title:e,desc:t,buttonText:s,onClick:i,variant:r="green",titleRight:o,modeVariant:a="daily"}){const l=c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),i&&i())};return h.jsx("div",{className:`modeRow modeRow--${a}`,role:"button",tabIndex:0,"aria-label":s||e,onClick:i,onKeyDown:l,children:h.jsxs("div",{className:"modeRowText",children:[h.jsxs("div",{className:"modeRowTitle",children:[e,o?h.jsx("span",{className:"modeRowTitleRight",children:o}):null]}),h.jsx("div",{className:"modeRowDesc",children:t})]})})});function L_({dailyBoards:n,setDailyBoards:e,marathonLevels:t}){const s=Wi(),[i,r]=g.useState(!1),[o,a]=g.useState(!1),[l,c]=g.useState(!1),[d,u]=g.useState(!1),[f,p]=g.useState(""),[_,v]=g.useState(0),[R,j]=g.useState(0);g.useEffect(()=>{const V=sa(ui(!1),null),Se=sa(ui(!0),null),st=V&&typeof V.index=="number"?V.index:0,y=Se&&typeof Se.index=="number"?Se.index:0;v(st),j(y)},[]),g.useMemo(()=>t[t.length-1],[t]),g.useMemo(()=>t[_]||t[0],[t,_]),g.useMemo(()=>t[R]||t[0],[t,R]);const w=g.useCallback(()=>r(!1),[]),P=g.useCallback(()=>r(!0),[]),ue=g.useCallback(()=>{ia("mw:dailyBoards",n),s(`/game/daily/${n}`)},[n,s]),Ie=g.useCallback(()=>{ia("mw:dailyBoards",n),s(`/game/daily/${n}/speedrun`)},[n,s]),q=g.useCallback(()=>{[!1,!0].forEach(V=>{const Se=N_(n,V),st=ra("daily",n,V);tn(Se),tn(st)})},[n]),Ue=g.useCallback(()=>{s("/game/marathon")},[s]),qt=g.useCallback(()=>{s("/game?mode=marathon&speedrun=true")},[s]),nt=g.useCallback(()=>{[!1,!0].forEach(V=>{const Se=P_(V),st=ui(V);tn(Se),tn(st),t.forEach((y,E)=>{const I=ra("marathon",y,V,E);tn(I)})}),v(0),j(0)},[t]),wt=g.useMemo(()=>`${n} board${n>1?"s":""}`,[n]);return h.jsxs(h.Fragment,{children:[h.jsxs(_u,{children:[h.jsx("title",{children:"Better Wordle"}),h.jsx("meta",{name:"description",content:"Better Wordle is a Wordle alternative with multi-board daily puzzles, marathon and speedrun modes, and 1v1 Wordle-style battles with friends."})]}),h.jsx("div",{className:"homeRoot",children:h.jsxs("div",{className:"homeInner",children:[h.jsx(x_,{onOpenFeedback:P,onSignUpComplete:V=>{p(V),u(!0)}}),h.jsx(ga,{isOpen:d,onRequestClose:()=>u(!1),titleId:"verify-email-modal-title",children:h.jsxs("div",{style:{padding:"24px",textAlign:"left"},children:[h.jsx("h2",{id:"verify-email-modal-title",style:{margin:"0 0 16px 0",fontSize:20,fontWeight:"bold",color:"#ffffff"},children:"Verify your email"}),h.jsxs("p",{style:{margin:"0 0 12px 0",fontSize:14,color:"#d7dadc",lineHeight:1.5},children:["We've sent a verification link to"," ",h.jsx("span",{style:{fontWeight:"bold"},children:f||"your email address"}),"."]}),h.jsx("p",{style:{margin:"0 0 16px 0",fontSize:14,color:"#d7dadc",lineHeight:1.5},children:"Please open that email and click the link to verify your account. Once verified, you'll be able to play 1v1 and use friends. Check your Spam or Junk folder for the verification link."}),h.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:h.jsx("button",{type:"button",className:"homeBtn homeBtnGreen homeBtnLg",onClick:()=>u(!1),style:{minWidth:120},children:"Got it"})})]})}),h.jsx(g.Suspense,{fallback:null,children:h.jsx(O_,{isOpen:i,onRequestClose:w})}),h.jsx(g.Suspense,{fallback:null,children:h.jsx(D_,{isOpen:o,onRequestClose:()=>a(!1),showConfigFirst:l,onConfigClose:()=>c(!1),onConfigOpen:()=>c(!0)})}),h.jsxs("main",{children:[h.jsxs("section",{className:"panel",children:[h.jsxs("div",{className:"panelTop",children:[h.jsxs("div",{children:[h.jsx("h2",{className:"panelTitle",children:"Daily Puzzles"}),h.jsx("div",{className:"panelDesc",children:"Choose how many words you want to play simultaneously."})]}),h.jsxs("div",{className:"selector",children:[h.jsx("label",{className:"label",htmlFor:"dailyBoards",children:"Simultaneous words"}),h.jsx("select",{id:"dailyBoards",value:n,onChange:V=>e(parseInt(V.target.value,10)),className:"select",children:M_.map(V=>h.jsx("option",{value:V,children:V},V))})]})]}),h.jsxs("div",{className:"panelBody",children:[h.jsx(nn,{title:"Daily (standard)",desc:"Limited turns. No timer. Good for casual play.",buttonText:"Play Daily",onClick:ue,variant:"green",modeVariant:"daily",titleRight:wt}),h.jsx(nn,{title:"Daily (speedrun)",desc:"Unlimited guesses. Timer starts immediately.",buttonText:"Speedrun Daily",onClick:Ie,variant:"green",modeVariant:"daily",titleRight:wt}),h.jsx("button",{type:"button",className:"homeBtn homeBtnOutline",onClick:q,style:{marginTop:"12px"},children:"Reset today's daily guesses"})]})]}),h.jsxs("section",{className:"panel",children:[h.jsx("div",{className:"panelTop",children:h.jsxs("div",{children:[h.jsx("h2",{className:"panelTitle",children:"Marathon Puzzles"}),h.jsx("div",{className:"panelDesc",children:"Solve 1 word, then 2, then 3, ending at 4. Complete all stages to win."})]})}),h.jsxs("div",{className:"panelBody",children:[h.jsx(nn,{title:"Marathon (standard)",desc:"Play standard marathon. Limited turns. No timer.",buttonText:"Play Marathon",onClick:Ue,variant:"gold",modeVariant:"marathon",titleRight:`Stage ${_+1}/${t.length}`}),h.jsx(nn,{title:"Marathon (speedrun)",desc:"Play speedrun marathon. Unlimited guesses, timed cumulative.",buttonText:"Speedrun Marathon",onClick:qt,variant:"gold",modeVariant:"marathon",titleRight:`Stage ${R+1}/${t.length}`}),h.jsx("button",{type:"button",className:"homeBtn homeBtnOutline",onClick:nt,style:{marginTop:"12px"},children:"Reset today's marathon guesses"})]})]}),h.jsxs("section",{className:"panel",children:[h.jsx("div",{className:"panelTop",children:h.jsxs("div",{children:[h.jsx("h2",{className:"panelTitle",children:"Multiplayer Wordle Rooms"}),h.jsx("div",{className:"panelDesc",children:"Host or join live rooms with friends and other players."})]})}),h.jsx("div",{className:"panelBody",children:h.jsx(nn,{title:"Multiplayer Mode",desc:"Create a room or join by code and play together in real time.",buttonText:"Open Multiplayer",onClick:()=>a(!0),variant:"gold",modeVariant:"pvp"})})]}),h.jsx("section",{className:"homeIntro",children:h.jsxs("details",{className:"homeIntroDetails",children:[h.jsx("summary",{className:"homeIntroSummary",children:"Click here to know more about Better Wordle."}),h.jsx("h1",{className:"homeTitle",children:"Better Wordle – Advanced Multi-Board & 1v1 Wordle-Style Game"}),h.jsx("p",{className:"homeIntroParagraph",children:"Better Wordle is a free, browser-based Wordle-style puzzle game that you can play on any device. No downloads or sign-in required to get started – just open the site and start solving."}),h.jsx("p",{className:"homeIntroParagraph",children:"Play up to 32 boards at once with daily multi-board puzzles, push yourself with marathon stages and speedrun timers, and challenge friends in head-to-head 1v1 Wordle-style battles. Your best speedrun times can appear on the global Better Wordle leaderboard."}),h.jsxs("p",{className:"homeIntroParagraph",children:["New to Better Wordle? Read the"," ",h.jsx(Ur,{to:"/faq",className:"homeLink",children:"Better Wordle FAQ"})," ","or jump straight to the"," ",h.jsx(Ur,{to:"/leaderboard",className:"homeLink",children:"global Better Wordle leaderboard"})," ","to see top players."]})]})})]})]})})]})}const Ct=g.lazy(()=>Ze(()=>import("./Game-56fA5jAz.js"),__vite__mapDeps([7,1,8]))),F_=g.lazy(()=>Ze(()=>import("./Profile-CrLC7LJ-.js"),__vite__mapDeps([9,1,10]))),U_=g.lazy(()=>Ze(()=>import("./Leaderboard-BccZH0D7.js"),__vite__mapDeps([11,1,12,13]))),j_=g.lazy(()=>Ze(()=>import("./Faq-CpKJdRWI.js"),__vite__mapDeps([14,1,5,15]))),W_=[1,2,3,4];function $_(){const n=Oc(),[e,t]=g.useState(1);g.useEffect(()=>{if(n.pathname==="/"){const i=window.location.pathname,r="/better-wordle/",o=r.endsWith("/")?r.slice(0,-1):r,a=o+"/";if(i===o){const l=a+window.location.search+window.location.hash;window.history.replaceState(null,"",l)}}},[n.pathname]),g.useEffect(()=>{(n.pathname==="/"||n.pathname.endsWith("/"))&&t(1)},[n.pathname]),g.useEffect(()=>{typeof window<"u"&&window.matchMedia&&window.matchMedia("(max-width: 768px)").matches&&window.scrollTo({top:0,left:0,behavior:"auto"})},[n.pathname]);const s=g.useMemo(()=>W_,[]);return h.jsx(g.Suspense,{fallback:h.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#121213",color:"#ffffff"},children:"Loading…"}),children:h.jsxs(Dc,{children:[h.jsx(me,{path:"/",element:h.jsx(L_,{dailyBoards:e,setDailyBoards:t,marathonLevels:s})}),h.jsx(me,{path:"/game",element:h.jsx(Ct,{marathonLevels:s})}),h.jsx(me,{path:"/game/:mode",element:h.jsx(Ct,{marathonLevels:s})}),h.jsx(me,{path:"/game/:mode/:boards",element:h.jsx(Ct,{marathonLevels:s})}),h.jsx(me,{path:"/game/:mode/:boards/:variant",element:h.jsx(Ct,{marathonLevels:s})}),h.jsx(me,{path:"/game/1v1/:code",element:h.jsx(Ct,{marathonLevels:s})}),h.jsx(me,{path:"/game/1v1/:code/:variant",element:h.jsx(Ct,{marathonLevels:s})}),h.jsx(me,{path:"/profile",element:h.jsx(F_,{})}),h.jsx(me,{path:"/leaderboard",element:h.jsx(U_,{})}),h.jsx(me,{path:"/faq",element:h.jsx(j_,{})}),h.jsx(me,{path:"*",element:h.jsx(Mc,{to:"/",replace:!0})})]})})}const di="/better-wordle/",on=di.endsWith("/")?di.slice(0,-1):di;if(typeof window<"u"){const n=sessionStorage.getItem("_404_redirect");if(n){sessionStorage.removeItem("_404_redirect");const s=n.startsWith("/")?n:"/"+n;window.history.replaceState(null,"",on+s)}const e=window.location.pathname;(e===on||e===on+"/")&&window.history.replaceState(null,"",on+"/")}fi.createRoot(document.getElementById("root")).render(h.jsx(ye.StrictMode,{children:h.jsx(pa,{children:h.jsx(Lc,{basename:on,future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:h.jsx($_,{})})})}));export{Sc as A,_u as H,ga as M,x_ as S,Ze as _,z_ as a,Rc as b,b as c,G as d,ci as e,ke as f,bt as g,Bs as h,Y_ as i,h as j,P_ as k,sa as l,ra as m,N_ as n,Hn as o,V_ as p,ia as q,z as r,Jn as s,ui as t,Fr as u,q_ as v,G_ as w,K_ as x};
