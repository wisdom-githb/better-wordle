const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FriendsModal-BjjAQwqw.js","assets/vendor-CI3KyBTe.js","assets/useMultiplayerGame-BkDqvThQ.js","assets/multiplayerConfig-DRs-6HI9.js","assets/GameToast-ByspOb18.js","assets/OpenRoomsModal-yEq12faf.js","assets/FeedbackModal-BWO6vK_f.js","assets/MultiplayerModal-Cvxr6Sk9.js","assets/Game-D8_jSgNn.js","Game.css","assets/Profile-BMTDTbwR.js","Profile.css","assets/Leaderboard-BRCIY4cR.js","assets/useLeaderboard-DDDTkC6X.js","Leaderboard.css","assets/Faq-Bj3_fhvv.js","Faq.css","assets/MultiplayerWordleLanding-DvgtvuKV.js","assets/SeoLandingLayout-BWynCoA2.js","SeoLandingLayout.css","assets/MultiBoardWordleLanding-DnyUiC_d.js","assets/WordleSpeedrunLanding-CBmBlIJq.js","assets/WordleMarathonLanding-BDXsiGZk.js"])))=>i.map(i=>d[i]);
var Df=Object.defineProperty;var Mf=(t,e,n)=>e in t?Df(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ct=(t,e,n)=>Mf(t,typeof e!="symbol"?e+"":e,n);import{a as g,p as Lf,A as Ff,b as $f,c as uu,g as Mo,R as rt,u as Lo,L as fn,d as Uf,e as jf,f as Se,N as Bf}from"./vendor-CI3KyBTe.js";var du={exports:{}},Qs={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wf=g,Vf=Symbol.for("react.element"),Hf=Symbol.for("react.fragment"),zf=Object.prototype.hasOwnProperty,qf=Wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gf={key:!0,ref:!0,__self:!0,__source:!0};function hu(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)zf.call(e,r)&&!Gf.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Vf,type:t,key:i,ref:o,props:s,_owner:qf.current}}Qs.Fragment=Hf;Qs.jsx=hu;Qs.jsxs=hu;du.exports=Qs;var h=du.exports,Mn={};/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fu=g;function A(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ae=Object.prototype.hasOwnProperty,Kf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xa={},Za={};function pu(t){return Ae.call(Za,t)?!0:Ae.call(Xa,t)?!1:Kf.test(t)?Za[t]=!0:(Xa[t]=!0,!1)}function Te(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_e[t]=new Te(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];_e[e]=new Te(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){_e[t]=new Te(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_e[t]=new Te(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_e[t]=new Te(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){_e[t]=new Te(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){_e[t]=new Te(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){_e[t]=new Te(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){_e[t]=new Te(t,5,!1,t.toLowerCase(),null,!1,!1)});var Fo=/[\-:]([a-z])/g;function $o(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Fo,$o);_e[e]=new Te(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Fo,$o);_e[e]=new Te(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Fo,$o);_e[e]=new Te(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){_e[t]=new Te(t,1,!1,t.toLowerCase(),null,!1,!1)});_e.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){_e[t]=new Te(t,1,!1,t.toLowerCase(),null,!0,!0)});var Zr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yf=["Webkit","ms","Moz","O"];Object.keys(Zr).forEach(function(t){Yf.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Zr[e]=Zr[t]})});var Qf=/["'&<>]/;function Ce(t){if(typeof t=="boolean"||typeof t=="number")return""+t;t=""+t;var e=Qf.exec(t);if(e){var n="",r,s=0;for(r=e.index;r<t.length;r++){switch(t.charCodeAt(r)){case 34:e="&quot;";break;case 38:e="&amp;";break;case 39:e="&#x27;";break;case 60:e="&lt;";break;case 62:e="&gt;";break;default:continue}s!==r&&(n+=t.substring(s,r)),s=r+1,n+=e}t=s!==r?n+t.substring(s,r):n}return t}var Jf=/([A-Z])/g,Xf=/^ms-/,Zi=Array.isArray;function ut(t,e){return{insertionMode:t,selectedValue:e}}function Zf(t,e,n){switch(e){case"select":return ut(1,n.value!=null?n.value:n.defaultValue);case"svg":return ut(2,null);case"math":return ut(3,null);case"foreignObject":return ut(1,null);case"table":return ut(4,null);case"thead":case"tbody":case"tfoot":return ut(5,null);case"colgroup":return ut(7,null);case"tr":return ut(6,null)}return 4<=t.insertionMode||t.insertionMode===0?ut(1,null):t}var el=new Map;function mu(t,e,n){if(typeof n!="object")throw Error(A(62));e=!0;for(var r in n)if(Ae.call(n,r)){var s=n[r];if(s!=null&&typeof s!="boolean"&&s!==""){if(r.indexOf("--")===0){var i=Ce(r);s=Ce((""+s).trim())}else{i=r;var o=el.get(i);o!==void 0||(o=Ce(i.replace(Jf,"-$1").toLowerCase().replace(Xf,"-ms-")),el.set(i,o)),i=o,s=typeof s=="number"?s===0||Ae.call(Zr,r)?""+s:s+"px":Ce((""+s).trim())}e?(e=!1,t.push(' style="',i,":",s)):t.push(";",i,":",s)}}e||t.push('"')}function De(t,e,n,r){switch(n){case"style":mu(t,e,r);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N"){if(e=_e.hasOwnProperty(n)?_e[n]:null,e!==null){switch(typeof r){case"function":case"symbol":return;case"boolean":if(!e.acceptsBooleans)return}switch(n=e.attributeName,e.type){case 3:r&&t.push(" ",n,'=""');break;case 4:r===!0?t.push(" ",n,'=""'):r!==!1&&t.push(" ",n,'="',Ce(r),'"');break;case 5:isNaN(r)||t.push(" ",n,'="',Ce(r),'"');break;case 6:!isNaN(r)&&1<=r&&t.push(" ",n,'="',Ce(r),'"');break;default:e.sanitizeURL&&(r=""+r),t.push(" ",n,'="',Ce(r),'"')}}else if(pu(n)){switch(typeof r){case"function":case"symbol":return;case"boolean":if(e=n.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-")return}t.push(" ",n,'="',Ce(r),'"')}}}function es(t,e,n){if(e!=null){if(n!=null)throw Error(A(60));if(typeof e!="object"||!("__html"in e))throw Error(A(61));e=e.__html,e!=null&&t.push(""+e)}}function ep(t){var e="";return fu.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}function Ci(t,e,n,r){t.push(et(n));var s=n=null,i;for(i in e)if(Ae.call(e,i)){var o=e[i];if(o!=null)switch(i){case"children":n=o;break;case"dangerouslySetInnerHTML":s=o;break;default:De(t,r,i,o)}}return t.push(">"),es(t,s,n),typeof n=="string"?(t.push(Ce(n)),null):n}var tp=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,tl=new Map;function et(t){var e=tl.get(t);if(e===void 0){if(!tp.test(t))throw Error(A(65,t));e="<"+t,tl.set(t,e)}return e}function np(t,e,n,r,s){switch(e){case"select":t.push(et("select"));var i=null,o=null;for(u in n)if(Ae.call(n,u)){var a=n[u];if(a!=null)switch(u){case"children":i=a;break;case"dangerouslySetInnerHTML":o=a;break;case"defaultValue":case"value":break;default:De(t,r,u,a)}}return t.push(">"),es(t,o,i),i;case"option":o=s.selectedValue,t.push(et("option"));var l=a=null,c=null,u=null;for(i in n)if(Ae.call(n,i)){var d=n[i];if(d!=null)switch(i){case"children":a=d;break;case"selected":c=d;break;case"dangerouslySetInnerHTML":u=d;break;case"value":l=d;default:De(t,r,i,d)}}if(o!=null)if(n=l!==null?""+l:ep(a),Zi(o)){for(r=0;r<o.length;r++)if(""+o[r]===n){t.push(' selected=""');break}}else""+o===n&&t.push(' selected=""');else c&&t.push(' selected=""');return t.push(">"),es(t,u,a),a;case"textarea":t.push(et("textarea")),u=o=i=null;for(a in n)if(Ae.call(n,a)&&(l=n[a],l!=null))switch(a){case"children":u=l;break;case"value":i=l;break;case"defaultValue":o=l;break;case"dangerouslySetInnerHTML":throw Error(A(91));default:De(t,r,a,l)}if(i===null&&o!==null&&(i=o),t.push(">"),u!=null){if(i!=null)throw Error(A(92));if(Zi(u)&&1<u.length)throw Error(A(93));i=""+u}return typeof i=="string"&&i[0]===`
`&&t.push(`
`),i!==null&&t.push(Ce(""+i)),null;case"input":t.push(et("input")),l=u=a=i=null;for(o in n)if(Ae.call(n,o)&&(c=n[o],c!=null))switch(o){case"children":case"dangerouslySetInnerHTML":throw Error(A(399,"input"));case"defaultChecked":l=c;break;case"defaultValue":a=c;break;case"checked":u=c;break;case"value":i=c;break;default:De(t,r,o,c)}return u!==null?De(t,r,"checked",u):l!==null&&De(t,r,"checked",l),i!==null?De(t,r,"value",i):a!==null&&De(t,r,"value",a),t.push("/>"),null;case"menuitem":t.push(et("menuitem"));for(var f in n)if(Ae.call(n,f)&&(i=n[f],i!=null))switch(f){case"children":case"dangerouslySetInnerHTML":throw Error(A(400));default:De(t,r,f,i)}return t.push(">"),null;case"title":t.push(et("title")),i=null;for(d in n)if(Ae.call(n,d)&&(o=n[d],o!=null))switch(d){case"children":i=o;break;case"dangerouslySetInnerHTML":throw Error(A(434));default:De(t,r,d,o)}return t.push(">"),i;case"listing":case"pre":t.push(et(e)),o=i=null;for(l in n)if(Ae.call(n,l)&&(a=n[l],a!=null))switch(l){case"children":i=a;break;case"dangerouslySetInnerHTML":o=a;break;default:De(t,r,l,a)}if(t.push(">"),o!=null){if(i!=null)throw Error(A(60));if(typeof o!="object"||!("__html"in o))throw Error(A(61));n=o.__html,n!=null&&(typeof n=="string"&&0<n.length&&n[0]===`
`?t.push(`
`,n):t.push(""+n))}return typeof i=="string"&&i[0]===`
`&&t.push(`
`),i;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":t.push(et(e));for(var p in n)if(Ae.call(n,p)&&(i=n[p],i!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(A(399,e));default:De(t,r,p,i)}return t.push("/>"),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return Ci(t,n,e,r);case"html":return s.insertionMode===0&&t.push("<!DOCTYPE html>"),Ci(t,n,e,r);default:if(e.indexOf("-")===-1&&typeof n.is!="string")return Ci(t,n,e,r);t.push(et(e)),o=i=null;for(c in n)if(Ae.call(n,c)&&(a=n[c],a!=null))switch(c){case"children":i=a;break;case"dangerouslySetInnerHTML":o=a;break;case"style":mu(t,r,a);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:pu(c)&&typeof a!="function"&&typeof a!="symbol"&&t.push(" ",c,'="',Ce(a),'"')}return t.push(">"),es(t,o,i),i}}function nl(t,e,n){if(t.push('<!--$?--><template id="'),n===null)throw Error(A(395));return t.push(n),t.push('"></template>')}function rp(t,e,n,r){switch(n.insertionMode){case 0:case 1:return t.push('<div hidden id="'),t.push(e.segmentPrefix),e=r.toString(16),t.push(e),t.push('">');case 2:return t.push('<svg aria-hidden="true" style="display:none" id="'),t.push(e.segmentPrefix),e=r.toString(16),t.push(e),t.push('">');case 3:return t.push('<math aria-hidden="true" style="display:none" id="'),t.push(e.segmentPrefix),e=r.toString(16),t.push(e),t.push('">');case 4:return t.push('<table hidden id="'),t.push(e.segmentPrefix),e=r.toString(16),t.push(e),t.push('">');case 5:return t.push('<table hidden><tbody id="'),t.push(e.segmentPrefix),e=r.toString(16),t.push(e),t.push('">');case 6:return t.push('<table hidden><tr id="'),t.push(e.segmentPrefix),e=r.toString(16),t.push(e),t.push('">');case 7:return t.push('<table hidden><colgroup id="'),t.push(e.segmentPrefix),e=r.toString(16),t.push(e),t.push('">');default:throw Error(A(397))}}function sp(t,e){switch(e.insertionMode){case 0:case 1:return t.push("</div>");case 2:return t.push("</svg>");case 3:return t.push("</math>");case 4:return t.push("</table>");case 5:return t.push("</tbody></table>");case 6:return t.push("</tr></table>");case 7:return t.push("</colgroup></table>");default:throw Error(A(397))}}var ip=/[<\u2028\u2029]/g;function Ii(t){return JSON.stringify(t).replace(ip,function(e){switch(e){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}function op(t,e){return e=e===void 0?"":e,{bootstrapChunks:[],startInlineScript:"<script>",placeholderPrefix:e+"P:",segmentPrefix:e+"S:",boundaryPrefix:e+"B:",idPrefix:e,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1,generateStaticMarkup:t}}function rl(t,e,n,r){return n.generateStaticMarkup?(t.push(Ce(e)),!1):(e===""?t=r:(r&&t.push("<!-- -->"),t.push(Ce(e)),t=!0),t)}var sr=Object.assign,ap=Symbol.for("react.element"),gu=Symbol.for("react.portal"),_u=Symbol.for("react.fragment"),yu=Symbol.for("react.strict_mode"),vu=Symbol.for("react.profiler"),wu=Symbol.for("react.provider"),Eu=Symbol.for("react.context"),Su=Symbol.for("react.forward_ref"),Cu=Symbol.for("react.suspense"),Iu=Symbol.for("react.suspense_list"),bu=Symbol.for("react.memo"),Uo=Symbol.for("react.lazy"),lp=Symbol.for("react.scope"),cp=Symbol.for("react.debug_trace_mode"),up=Symbol.for("react.legacy_hidden"),dp=Symbol.for("react.default_value"),sl=Symbol.iterator;function eo(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _u:return"Fragment";case gu:return"Portal";case vu:return"Profiler";case yu:return"StrictMode";case Cu:return"Suspense";case Iu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Eu:return(t.displayName||"Context")+".Consumer";case wu:return(t._context.displayName||"Context")+".Provider";case Su:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bu:return e=t.displayName||null,e!==null?e:eo(t.type)||"Memo";case Uo:e=t._payload,t=t._init;try{return eo(t(e))}catch{}}return null}var Tu={};function il(t,e){if(t=t.contextTypes,!t)return Tu;var n={},r;for(r in t)n[r]=e[r];return n}var Jt=null;function Js(t,e){if(t!==e){t.context._currentValue2=t.parentValue,t=t.parent;var n=e.parent;if(t===null){if(n!==null)throw Error(A(401))}else{if(n===null)throw Error(A(401));Js(t,n)}e.context._currentValue2=e.value}}function xu(t){t.context._currentValue2=t.parentValue,t=t.parent,t!==null&&xu(t)}function ku(t){var e=t.parent;e!==null&&ku(e),t.context._currentValue2=t.value}function Ru(t,e){if(t.context._currentValue2=t.parentValue,t=t.parent,t===null)throw Error(A(402));t.depth===e.depth?Js(t,e):Ru(t,e)}function Au(t,e){var n=e.parent;if(n===null)throw Error(A(402));t.depth===n.depth?Js(t,n):Au(t,n),e.context._currentValue2=e.value}function gs(t){var e=Jt;e!==t&&(e===null?ku(t):t===null?xu(e):e.depth===t.depth?Js(e,t):e.depth>t.depth?Ru(e,t):Au(e,t),Jt=t)}var ol={isMounted:function(){return!1},enqueueSetState:function(t,e){t=t._reactInternals,t.queue!==null&&t.queue.push(e)},enqueueReplaceState:function(t,e){t=t._reactInternals,t.replace=!0,t.queue=[e]},enqueueForceUpdate:function(){}};function al(t,e,n,r){var s=t.state!==void 0?t.state:null;t.updater=ol,t.props=n,t.state=s;var i={queue:[],replace:!1};t._reactInternals=i;var o=e.contextType;if(t.context=typeof o=="object"&&o!==null?o._currentValue2:r,o=e.getDerivedStateFromProps,typeof o=="function"&&(o=o(n,s),s=o==null?s:sr({},s,o),t.state=s),typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function"&&(typeof t.UNSAFE_componentWillMount=="function"||typeof t.componentWillMount=="function"))if(e=t.state,typeof t.componentWillMount=="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount=="function"&&t.UNSAFE_componentWillMount(),e!==t.state&&ol.enqueueReplaceState(t,t.state,null),i.queue!==null&&0<i.queue.length)if(e=i.queue,o=i.replace,i.queue=null,i.replace=!1,o&&e.length===1)t.state=e[0];else{for(i=o?e[0]:t.state,s=!0,o=o?1:0;o<e.length;o++){var a=e[o];a=typeof a=="function"?a.call(t,i,n,r):a,a!=null&&(s?(s=!1,i=sr({},i,a)):sr(i,a))}t.state=i}else i.queue=null}var hp={id:1,overflow:""};function to(t,e,n){var r=t.id;t=t.overflow;var s=32-ts(r)-1;r&=~(1<<s),n+=1;var i=32-ts(e)+s;if(30<i){var o=s-s%5;return i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,{id:1<<32-ts(e)+s|n<<s|r,overflow:i+t}}return{id:1<<i|n<<s|r,overflow:t}}var ts=Math.clz32?Math.clz32:mp,fp=Math.log,pp=Math.LN2;function mp(t){return t>>>=0,t===0?32:31-(fp(t)/pp|0)|0}function gp(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _p=typeof Object.is=="function"?Object.is:gp,_t=null,jo=null,ns=null,K=null,Xn=!1,_s=!1,pr=0,Rt=null,Xs=0;function Kt(){if(_t===null)throw Error(A(321));return _t}function ll(){if(0<Xs)throw Error(A(312));return{memoizedState:null,queue:null,next:null}}function Bo(){return K===null?ns===null?(Xn=!1,ns=K=ll()):(Xn=!0,K=ns):K.next===null?(Xn=!1,K=K.next=ll()):(Xn=!0,K=K.next),K}function Wo(){jo=_t=null,_s=!1,ns=null,Xs=0,K=Rt=null}function Nu(t,e){return typeof e=="function"?e(t):e}function cl(t,e,n){if(_t=Kt(),K=Bo(),Xn){var r=K.queue;if(e=r.dispatch,Rt!==null&&(n=Rt.get(r),n!==void 0)){Rt.delete(r),r=K.memoizedState;do r=t(r,n.action),n=n.next;while(n!==null);return K.memoizedState=r,[r,e]}return[K.memoizedState,e]}return t=t===Nu?typeof e=="function"?e():e:n!==void 0?n(e):e,K.memoizedState=t,t=K.queue={last:null,dispatch:null},t=t.dispatch=yp.bind(null,_t,t),[K.memoizedState,t]}function ul(t,e){if(_t=Kt(),K=Bo(),e=e===void 0?null:e,K!==null){var n=K.memoizedState;if(n!==null&&e!==null){var r=n[1];e:if(r===null)r=!1;else{for(var s=0;s<r.length&&s<e.length;s++)if(!_p(e[s],r[s])){r=!1;break e}r=!0}if(r)return n[0]}}return t=t(),K.memoizedState=[t,e],t}function yp(t,e,n){if(25<=Xs)throw Error(A(301));if(t===_t)if(_s=!0,t={action:n,next:null},Rt===null&&(Rt=new Map),n=Rt.get(e),n===void 0)Rt.set(e,t);else{for(e=n;e.next!==null;)e=e.next;e.next=t}}function vp(){throw Error(A(394))}function Hr(){}var dl={readContext:function(t){return t._currentValue2},useContext:function(t){return Kt(),t._currentValue2},useMemo:ul,useReducer:cl,useRef:function(t){_t=Kt(),K=Bo();var e=K.memoizedState;return e===null?(t={current:t},K.memoizedState=t):e},useState:function(t){return cl(Nu,t)},useInsertionEffect:Hr,useLayoutEffect:function(){},useCallback:function(t,e){return ul(function(){return t},e)},useImperativeHandle:Hr,useEffect:Hr,useDebugValue:Hr,useDeferredValue:function(t){return Kt(),t},useTransition:function(){return Kt(),[!1,vp]},useId:function(){var t=jo.treeContext,e=t.overflow;t=t.id,t=(t&~(1<<32-ts(t)-1)).toString(32)+e;var n=rs;if(n===null)throw Error(A(404));return e=pr++,t=":"+n.idPrefix+"R"+t,0<e&&(t+="H"+e.toString(32)),t+":"},useMutableSource:function(t,e){return Kt(),e(t._source)},useSyncExternalStore:function(t,e,n){if(n===void 0)throw Error(A(407));return n()}},rs=null,bi=fu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function wp(t){return console.error(t),null}function Zn(){}function Ep(t,e,n,r,s,i,o,a,l){var c=[],u=new Set;return e={destination:null,responseState:e,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:u,pingedTasks:c,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:s===void 0?wp:s,onAllReady:Zn,onShellReady:o===void 0?Zn:o,onShellError:Zn,onFatalError:Zn},n=ys(e,0,null,n,!1,!1),n.parentFlushed=!0,t=Vo(e,t,null,n,u,Tu,null,hp),c.push(t),e}function Vo(t,e,n,r,s,i,o,a){t.allPendingTasks++,n===null?t.pendingRootTasks++:n.pendingTasks++;var l={node:e,ping:function(){var c=t.pingedTasks;c.push(l),c.length===1&&Du(t)},blockedBoundary:n,blockedSegment:r,abortSet:s,legacyContext:i,context:o,treeContext:a};return s.add(l),l}function ys(t,e,n,r,s,i){return{status:0,id:-1,index:e,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:n,lastPushedText:s,textEmbedded:i}}function mr(t,e){if(t=t.onError(e),t!=null&&typeof t!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof t+'" instead');return t}function vs(t,e){var n=t.onShellError;n(e),n=t.onFatalError,n(e),t.destination!==null?(t.status=2,t.destination.destroy(e)):(t.status=1,t.fatalError=e)}function hl(t,e,n,r,s){for(_t={},jo=e,pr=0,t=n(r,s);_s;)_s=!1,pr=0,Xs+=1,K=null,t=n(r,s);return Wo(),t}function fl(t,e,n,r){var s=n.render(),i=r.childContextTypes;if(i!=null){var o=e.legacyContext;if(typeof n.getChildContext!="function")r=o;else{n=n.getChildContext();for(var a in n)if(!(a in i))throw Error(A(108,eo(r)||"Unknown",a));r=sr({},o,n)}e.legacyContext=r,Le(t,e,s),e.legacyContext=o}else Le(t,e,s)}function pl(t,e){if(t&&t.defaultProps){e=sr({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function no(t,e,n,r,s){if(typeof n=="function")if(n.prototype&&n.prototype.isReactComponent){s=il(n,e.legacyContext);var i=n.contextType;i=new n(r,typeof i=="object"&&i!==null?i._currentValue2:s),al(i,n,r,s),fl(t,e,i,n)}else{i=il(n,e.legacyContext),s=hl(t,e,n,r,i);var o=pr!==0;if(typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0)al(s,n,r,i),fl(t,e,s,n);else if(o){r=e.treeContext,e.treeContext=to(r,1,0);try{Le(t,e,s)}finally{e.treeContext=r}}else Le(t,e,s)}else if(typeof n=="string"){switch(s=e.blockedSegment,i=np(s.chunks,n,r,t.responseState,s.formatContext),s.lastPushedText=!1,o=s.formatContext,s.formatContext=Zf(o,n,r),ro(t,e,i),s.formatContext=o,n){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:s.chunks.push("</",n,">")}s.lastPushedText=!1}else{switch(n){case up:case cp:case yu:case vu:case _u:Le(t,e,r.children);return;case Iu:Le(t,e,r.children);return;case lp:throw Error(A(343));case Cu:e:{n=e.blockedBoundary,s=e.blockedSegment,i=r.fallback,r=r.children,o=new Set;var a={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:o,errorDigest:null},l=ys(t,s.chunks.length,a,s.formatContext,!1,!1);s.children.push(l),s.lastPushedText=!1;var c=ys(t,0,null,s.formatContext,!1,!1);c.parentFlushed=!0,e.blockedBoundary=a,e.blockedSegment=c;try{if(ro(t,e,r),t.responseState.generateStaticMarkup||c.lastPushedText&&c.textEmbedded&&c.chunks.push("<!-- -->"),c.status=1,ws(a,c),a.pendingTasks===0)break e}catch(u){c.status=4,a.forceClientRender=!0,a.errorDigest=mr(t,u)}finally{e.blockedBoundary=n,e.blockedSegment=s}e=Vo(t,i,n,l,o,e.legacyContext,e.context,e.treeContext),t.pingedTasks.push(e)}return}if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Su:if(r=hl(t,e,n.render,r,s),pr!==0){n=e.treeContext,e.treeContext=to(n,1,0);try{Le(t,e,r)}finally{e.treeContext=n}}else Le(t,e,r);return;case bu:n=n.type,r=pl(n,r),no(t,e,n,r,s);return;case wu:if(s=r.children,n=n._context,r=r.value,i=n._currentValue2,n._currentValue2=r,o=Jt,Jt=r={parent:o,depth:o===null?0:o.depth+1,context:n,parentValue:i,value:r},e.context=r,Le(t,e,s),t=Jt,t===null)throw Error(A(403));r=t.parentValue,t.context._currentValue2=r===dp?t.context._defaultValue:r,t=Jt=t.parent,e.context=t;return;case Eu:r=r.children,r=r(n._currentValue2),Le(t,e,r);return;case Uo:s=n._init,n=s(n._payload),r=pl(n,r),no(t,e,n,r,void 0);return}throw Error(A(130,n==null?n:typeof n,""))}}function Le(t,e,n){if(e.node=n,typeof n=="object"&&n!==null){switch(n.$$typeof){case ap:no(t,e,n.type,n.props,n.ref);return;case gu:throw Error(A(257));case Uo:var r=n._init;n=r(n._payload),Le(t,e,n);return}if(Zi(n)){ml(t,e,n);return}if(n===null||typeof n!="object"?r=null:(r=sl&&n[sl]||n["@@iterator"],r=typeof r=="function"?r:null),r&&(r=r.call(n))){if(n=r.next(),!n.done){var s=[];do s.push(n.value),n=r.next();while(!n.done);ml(t,e,s)}return}throw t=Object.prototype.toString.call(n),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}typeof n=="string"?(r=e.blockedSegment,r.lastPushedText=rl(e.blockedSegment.chunks,n,t.responseState,r.lastPushedText)):typeof n=="number"&&(r=e.blockedSegment,r.lastPushedText=rl(e.blockedSegment.chunks,""+n,t.responseState,r.lastPushedText))}function ml(t,e,n){for(var r=n.length,s=0;s<r;s++){var i=e.treeContext;e.treeContext=to(i,r,s);try{ro(t,e,n[s])}finally{e.treeContext=i}}}function ro(t,e,n){var r=e.blockedSegment.formatContext,s=e.legacyContext,i=e.context;try{return Le(t,e,n)}catch(l){if(Wo(),typeof l=="object"&&l!==null&&typeof l.then=="function"){n=l;var o=e.blockedSegment,a=ys(t,o.chunks.length,null,o.formatContext,o.lastPushedText,!0);o.children.push(a),o.lastPushedText=!1,t=Vo(t,e.node,e.blockedBoundary,a,e.abortSet,e.legacyContext,e.context,e.treeContext).ping,n.then(t,t),e.blockedSegment.formatContext=r,e.legacyContext=s,e.context=i,gs(i)}else throw e.blockedSegment.formatContext=r,e.legacyContext=s,e.context=i,gs(i),l}}function Sp(t){var e=t.blockedBoundary;t=t.blockedSegment,t.status=3,Ou(this,e,t)}function Pu(t,e,n){var r=t.blockedBoundary;t.blockedSegment.status=3,r===null?(e.allPendingTasks--,e.status!==2&&(e.status=2,e.destination!==null&&e.destination.push(null))):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,t=n===void 0?Error(A(432)):n,r.errorDigest=e.onError(t),r.parentFlushed&&e.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach(function(s){return Pu(s,e,n)}),r.fallbackAbortableTasks.clear(),e.allPendingTasks--,e.allPendingTasks===0&&(r=e.onAllReady,r()))}function ws(t,e){if(e.chunks.length===0&&e.children.length===1&&e.children[0].boundary===null){var n=e.children[0];n.id=e.id,n.parentFlushed=!0,n.status===1&&ws(t,n)}else t.completedSegments.push(e)}function Ou(t,e,n){if(e===null){if(n.parentFlushed){if(t.completedRootSegment!==null)throw Error(A(389));t.completedRootSegment=n}t.pendingRootTasks--,t.pendingRootTasks===0&&(t.onShellError=Zn,e=t.onShellReady,e())}else e.pendingTasks--,e.forceClientRender||(e.pendingTasks===0?(n.parentFlushed&&n.status===1&&ws(e,n),e.parentFlushed&&t.completedBoundaries.push(e),e.fallbackAbortableTasks.forEach(Sp,t),e.fallbackAbortableTasks.clear()):n.parentFlushed&&n.status===1&&(ws(e,n),e.completedSegments.length===1&&e.parentFlushed&&t.partialBoundaries.push(e)));t.allPendingTasks--,t.allPendingTasks===0&&(t=t.onAllReady,t())}function Du(t){if(t.status!==2){var e=Jt,n=bi.current;bi.current=dl;var r=rs;rs=t.responseState;try{var s=t.pingedTasks,i;for(i=0;i<s.length;i++){var o=s[i],a=t,l=o.blockedSegment;if(l.status===0){gs(o.context);try{Le(a,o,o.node),a.responseState.generateStaticMarkup||l.lastPushedText&&l.textEmbedded&&l.chunks.push("<!-- -->"),o.abortSet.delete(o),l.status=1,Ou(a,o.blockedBoundary,l)}catch(m){if(Wo(),typeof m=="object"&&m!==null&&typeof m.then=="function"){var c=o.ping;m.then(c,c)}else{o.abortSet.delete(o),l.status=4;var u=o.blockedBoundary,d=m,f=mr(a,d);if(u===null?vs(a,d):(u.pendingTasks--,u.forceClientRender||(u.forceClientRender=!0,u.errorDigest=f,u.parentFlushed&&a.clientRenderedBoundaries.push(u))),a.allPendingTasks--,a.allPendingTasks===0){var p=a.onAllReady;p()}}}finally{}}}s.splice(0,i),t.destination!==null&&Ho(t,t.destination)}catch(m){mr(t,m),vs(t,m)}finally{rs=r,bi.current=n,n===dl&&gs(e)}}}function zr(t,e,n){switch(n.parentFlushed=!0,n.status){case 0:var r=n.id=t.nextSegmentId++;return n.lastPushedText=!1,n.textEmbedded=!1,t=t.responseState,e.push('<template id="'),e.push(t.placeholderPrefix),t=r.toString(16),e.push(t),e.push('"></template>');case 1:n.status=2;var s=!0;r=n.chunks;var i=0;n=n.children;for(var o=0;o<n.length;o++){for(s=n[o];i<s.index;i++)e.push(r[i]);s=Zs(t,e,s)}for(;i<r.length-1;i++)e.push(r[i]);return i<r.length&&(s=e.push(r[i])),s;default:throw Error(A(390))}}function Zs(t,e,n){var r=n.boundary;if(r===null)return zr(t,e,n);if(r.parentFlushed=!0,r.forceClientRender)return t.responseState.generateStaticMarkup||(r=r.errorDigest,e.push("<!--$!-->"),e.push("<template"),r&&(e.push(' data-dgst="'),r=Ce(r),e.push(r),e.push('"')),e.push("></template>")),zr(t,e,n),t=t.responseState.generateStaticMarkup?!0:e.push("<!--/$-->"),t;if(0<r.pendingTasks){r.rootSegmentID=t.nextSegmentId++,0<r.completedSegments.length&&t.partialBoundaries.push(r);var s=t.responseState,i=s.nextSuspenseID++;return s=s.boundaryPrefix+i.toString(16),r=r.id=s,nl(e,t.responseState,r),zr(t,e,n),e.push("<!--/$-->")}if(r.byteSize>t.progressiveChunkSize)return r.rootSegmentID=t.nextSegmentId++,t.completedBoundaries.push(r),nl(e,t.responseState,r.id),zr(t,e,n),e.push("<!--/$-->");if(t.responseState.generateStaticMarkup||e.push("<!--$-->"),n=r.completedSegments,n.length!==1)throw Error(A(391));return Zs(t,e,n[0]),t=t.responseState.generateStaticMarkup?!0:e.push("<!--/$-->"),t}function gl(t,e,n){return rp(e,t.responseState,n.formatContext,n.id),Zs(t,e,n),sp(e,n.formatContext)}function _l(t,e,n){for(var r=n.completedSegments,s=0;s<r.length;s++)Mu(t,e,n,r[s]);if(r.length=0,t=t.responseState,r=n.id,n=n.rootSegmentID,e.push(t.startInlineScript),t.sentCompleteBoundaryFunction?e.push('$RC("'):(t.sentCompleteBoundaryFunction=!0,e.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')),r===null)throw Error(A(395));return n=n.toString(16),e.push(r),e.push('","'),e.push(t.segmentPrefix),e.push(n),e.push('")<\/script>')}function Mu(t,e,n,r){if(r.status===2)return!0;var s=r.id;if(s===-1){if((r.id=n.rootSegmentID)===-1)throw Error(A(392));return gl(t,e,r)}return gl(t,e,r),t=t.responseState,e.push(t.startInlineScript),t.sentCompleteSegmentFunction?e.push('$RS("'):(t.sentCompleteSegmentFunction=!0,e.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')),e.push(t.segmentPrefix),s=s.toString(16),e.push(s),e.push('","'),e.push(t.placeholderPrefix),e.push(s),e.push('")<\/script>')}function Ho(t,e){try{var n=t.completedRootSegment;if(n!==null&&t.pendingRootTasks===0){Zs(t,e,n),t.completedRootSegment=null;var r=t.responseState.bootstrapChunks;for(n=0;n<r.length-1;n++)e.push(r[n]);n<r.length&&e.push(r[n])}var s=t.clientRenderedBoundaries,i;for(i=0;i<s.length;i++){var o=s[i];r=e;var a=t.responseState,l=o.id,c=o.errorDigest,u=o.errorMessage,d=o.errorComponentStack;if(r.push(a.startInlineScript),a.sentClientRenderFunction?r.push('$RX("'):(a.sentClientRenderFunction=!0,r.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')),l===null)throw Error(A(395));if(r.push(l),r.push('"'),c||u||d){r.push(",");var f=Ii(c||"");r.push(f)}if(u||d){r.push(",");var p=Ii(u||"");r.push(p)}if(d){r.push(",");var m=Ii(d);r.push(m)}if(!r.push(")<\/script>")){t.destination=null,i++,s.splice(0,i);return}}s.splice(0,i);var S=t.completedBoundaries;for(i=0;i<S.length;i++)if(!_l(t,e,S[i])){t.destination=null,i++,S.splice(0,i);return}S.splice(0,i);var k=t.partialBoundaries;for(i=0;i<k.length;i++){var W=k[i];e:{s=t,o=e;var M=W.completedSegments;for(a=0;a<M.length;a++)if(!Mu(s,o,W,M[a])){a++,M.splice(0,a);var oe=!1;break e}M.splice(0,a),oe=!0}if(!oe){t.destination=null,i++,k.splice(0,i);return}}k.splice(0,i);var E=t.completedBoundaries;for(i=0;i<E.length;i++)if(!_l(t,e,E[i])){t.destination=null,i++,E.splice(0,i);return}E.splice(0,i)}finally{t.allPendingTasks===0&&t.pingedTasks.length===0&&t.clientRenderedBoundaries.length===0&&t.completedBoundaries.length===0&&e.push(null)}}function Cp(t,e){try{var n=t.abortableTasks;n.forEach(function(r){return Pu(r,t,e)}),n.clear(),t.destination!==null&&Ho(t,t.destination)}catch(r){mr(t,r),vs(t,r)}}function Ip(){}function Lu(t,e,n,r){var s=!1,i=null,o="",a={push:function(c){return c!==null&&(o+=c),!0},destroy:function(c){s=!0,i=c}},l=!1;if(t=Ep(t,op(n,e?e.identifierPrefix:void 0),{insertionMode:1,selectedValue:null},1/0,Ip,void 0,function(){l=!0}),Du(t),Cp(t,r),t.status===1)t.status=2,a.destroy(t.fatalError);else if(t.status!==2&&t.destination===null){t.destination=a;try{Ho(t,a)}catch(c){mr(t,c),vs(t,c)}}if(s)throw i;if(!l)throw Error(A(426));return o}Mn.renderToNodeStream=function(){throw Error(A(207))};Mn.renderToStaticMarkup=function(t,e){return Lu(t,e,!0,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};Mn.renderToStaticNodeStream=function(){throw Error(A(208))};Mn.renderToString=function(t,e){return Lu(t,e,!1,'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};Mn.version="18.3.1";var zo={};/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fu=g;function N(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fe=null,$e=0;function I(t,e){if(e.length!==0)if(512<e.length)0<$e&&(t.enqueue(new Uint8Array(Fe.buffer,0,$e)),Fe=new Uint8Array(512),$e=0),t.enqueue(e);else{var n=Fe.length-$e;n<e.length&&(n===0?t.enqueue(Fe):(Fe.set(e.subarray(0,n),$e),t.enqueue(Fe),e=e.subarray(n)),Fe=new Uint8Array(512),$e=0),Fe.set(e,$e),$e+=e.length}}function J(t,e){return I(t,e),!0}function yl(t){Fe&&0<$e&&(t.enqueue(new Uint8Array(Fe.buffer,0,$e)),Fe=null,$e=0)}var $u=new TextEncoder;function O(t){return $u.encode(t)}function v(t){return $u.encode(t)}function Uu(t,e){typeof t.error=="function"?t.error(e):t.close()}var Ne=Object.prototype.hasOwnProperty,bp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vl={},wl={};function ju(t){return Ne.call(wl,t)?!0:Ne.call(vl,t)?!1:bp.test(t)?wl[t]=!0:(vl[t]=!0,!1)}function xe(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ye[t]=new xe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ye[e]=new xe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ye[t]=new xe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ye[t]=new xe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ye[t]=new xe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ye[t]=new xe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ye[t]=new xe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ye[t]=new xe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ye[t]=new xe(t,5,!1,t.toLowerCase(),null,!1,!1)});var qo=/[\-:]([a-z])/g;function Go(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(qo,Go);ye[e]=new xe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(qo,Go);ye[e]=new xe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(qo,Go);ye[e]=new xe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ye[t]=new xe(t,1,!1,t.toLowerCase(),null,!1,!1)});ye.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ye[t]=new xe(t,1,!1,t.toLowerCase(),null,!0,!0)});var ss={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tp=["Webkit","ms","Moz","O"];Object.keys(ss).forEach(function(t){Tp.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ss[e]=ss[t]})});var xp=/["'&<>]/;function ge(t){if(typeof t=="boolean"||typeof t=="number")return""+t;t=""+t;var e=xp.exec(t);if(e){var n="",r,s=0;for(r=e.index;r<t.length;r++){switch(t.charCodeAt(r)){case 34:e="&quot;";break;case 38:e="&amp;";break;case 39:e="&#x27;";break;case 60:e="&lt;";break;case 62:e="&gt;";break;default:continue}s!==r&&(n+=t.substring(s,r)),s=r+1,n+=e}t=s!==r?n+t.substring(s,r):n}return t}var kp=/([A-Z])/g,Rp=/^ms-/,so=Array.isArray,Ap=v("<script>"),Np=v("<\/script>"),Pp=v('<script src="'),Op=v('<script type="module" src="'),El=v('" async=""><\/script>'),Dp=/(<\/|<)(s)(cript)/gi;function Mp(t,e,n,r){return""+e+(n==="s"?"\\u0073":"\\u0053")+r}function Lp(t,e,n,r,s){t=t===void 0?"":t,e=e===void 0?Ap:v('<script nonce="'+ge(e)+'">');var i=[];if(n!==void 0&&i.push(e,O((""+n).replace(Dp,Mp)),Np),r!==void 0)for(n=0;n<r.length;n++)i.push(Pp,O(ge(r[n])),El);if(s!==void 0)for(r=0;r<s.length;r++)i.push(Op,O(ge(s[r])),El);return{bootstrapChunks:i,startInlineScript:e,placeholderPrefix:v(t+"P:"),segmentPrefix:v(t+"S:"),boundaryPrefix:t+"B:",idPrefix:t,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1}}function tt(t,e){return{insertionMode:t,selectedValue:e}}function Fp(t){return tt(t==="http://www.w3.org/2000/svg"?2:t==="http://www.w3.org/1998/Math/MathML"?3:0,null)}function $p(t,e,n){switch(e){case"select":return tt(1,n.value!=null?n.value:n.defaultValue);case"svg":return tt(2,null);case"math":return tt(3,null);case"foreignObject":return tt(1,null);case"table":return tt(4,null);case"thead":case"tbody":case"tfoot":return tt(5,null);case"colgroup":return tt(7,null);case"tr":return tt(6,null)}return 4<=t.insertionMode||t.insertionMode===0?tt(1,null):t}var Ko=v("<!-- -->");function Sl(t,e,n,r){return e===""?r:(r&&t.push(Ko),t.push(O(ge(e))),!0)}var Cl=new Map,Up=v(' style="'),Il=v(":"),jp=v(";");function Bu(t,e,n){if(typeof n!="object")throw Error(N(62));e=!0;for(var r in n)if(Ne.call(n,r)){var s=n[r];if(s!=null&&typeof s!="boolean"&&s!==""){if(r.indexOf("--")===0){var i=O(ge(r));s=O(ge((""+s).trim()))}else{i=r;var o=Cl.get(i);o!==void 0||(o=v(ge(i.replace(kp,"-$1").toLowerCase().replace(Rp,"-ms-"))),Cl.set(i,o)),i=o,s=typeof s=="number"?s===0||Ne.call(ss,r)?O(""+s):O(s+"px"):O(ge((""+s).trim()))}e?(e=!1,t.push(Up,i,Il,s)):t.push(jp,i,Il,s)}}e||t.push(Yt)}var It=v(" "),_n=v('="'),Yt=v('"'),bl=v('=""');function Me(t,e,n,r){switch(n){case"style":Bu(t,e,r);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N"){if(e=ye.hasOwnProperty(n)?ye[n]:null,e!==null){switch(typeof r){case"function":case"symbol":return;case"boolean":if(!e.acceptsBooleans)return}switch(n=O(e.attributeName),e.type){case 3:r&&t.push(It,n,bl);break;case 4:r===!0?t.push(It,n,bl):r!==!1&&t.push(It,n,_n,O(ge(r)),Yt);break;case 5:isNaN(r)||t.push(It,n,_n,O(ge(r)),Yt);break;case 6:!isNaN(r)&&1<=r&&t.push(It,n,_n,O(ge(r)),Yt);break;default:e.sanitizeURL&&(r=""+r),t.push(It,n,_n,O(ge(r)),Yt)}}else if(ju(n)){switch(typeof r){case"function":case"symbol":return;case"boolean":if(e=n.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-")return}t.push(It,O(n),_n,O(ge(r)),Yt)}}}var bt=v(">"),Tl=v("/>");function is(t,e,n){if(e!=null){if(n!=null)throw Error(N(60));if(typeof e!="object"||!("__html"in e))throw Error(N(61));e=e.__html,e!=null&&t.push(O(""+e))}}function Bp(t){var e="";return Fu.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}var Ti=v(' selected=""');function xi(t,e,n,r){t.push(nt(n));var s=n=null,i;for(i in e)if(Ne.call(e,i)){var o=e[i];if(o!=null)switch(i){case"children":n=o;break;case"dangerouslySetInnerHTML":s=o;break;default:Me(t,r,i,o)}}return t.push(bt),is(t,s,n),typeof n=="string"?(t.push(O(ge(n))),null):n}var ki=v(`
`),Wp=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,xl=new Map;function nt(t){var e=xl.get(t);if(e===void 0){if(!Wp.test(t))throw Error(N(65,t));e=v("<"+t),xl.set(t,e)}return e}var Vp=v("<!DOCTYPE html>");function Hp(t,e,n,r,s){switch(e){case"select":t.push(nt("select"));var i=null,o=null;for(u in n)if(Ne.call(n,u)){var a=n[u];if(a!=null)switch(u){case"children":i=a;break;case"dangerouslySetInnerHTML":o=a;break;case"defaultValue":case"value":break;default:Me(t,r,u,a)}}return t.push(bt),is(t,o,i),i;case"option":o=s.selectedValue,t.push(nt("option"));var l=a=null,c=null,u=null;for(i in n)if(Ne.call(n,i)){var d=n[i];if(d!=null)switch(i){case"children":a=d;break;case"selected":c=d;break;case"dangerouslySetInnerHTML":u=d;break;case"value":l=d;default:Me(t,r,i,d)}}if(o!=null)if(n=l!==null?""+l:Bp(a),so(o)){for(r=0;r<o.length;r++)if(""+o[r]===n){t.push(Ti);break}}else""+o===n&&t.push(Ti);else c&&t.push(Ti);return t.push(bt),is(t,u,a),a;case"textarea":t.push(nt("textarea")),u=o=i=null;for(a in n)if(Ne.call(n,a)&&(l=n[a],l!=null))switch(a){case"children":u=l;break;case"value":i=l;break;case"defaultValue":o=l;break;case"dangerouslySetInnerHTML":throw Error(N(91));default:Me(t,r,a,l)}if(i===null&&o!==null&&(i=o),t.push(bt),u!=null){if(i!=null)throw Error(N(92));if(so(u)&&1<u.length)throw Error(N(93));i=""+u}return typeof i=="string"&&i[0]===`
`&&t.push(ki),i!==null&&t.push(O(ge(""+i))),null;case"input":t.push(nt("input")),l=u=a=i=null;for(o in n)if(Ne.call(n,o)&&(c=n[o],c!=null))switch(o){case"children":case"dangerouslySetInnerHTML":throw Error(N(399,"input"));case"defaultChecked":l=c;break;case"defaultValue":a=c;break;case"checked":u=c;break;case"value":i=c;break;default:Me(t,r,o,c)}return u!==null?Me(t,r,"checked",u):l!==null&&Me(t,r,"checked",l),i!==null?Me(t,r,"value",i):a!==null&&Me(t,r,"value",a),t.push(Tl),null;case"menuitem":t.push(nt("menuitem"));for(var f in n)if(Ne.call(n,f)&&(i=n[f],i!=null))switch(f){case"children":case"dangerouslySetInnerHTML":throw Error(N(400));default:Me(t,r,f,i)}return t.push(bt),null;case"title":t.push(nt("title")),i=null;for(d in n)if(Ne.call(n,d)&&(o=n[d],o!=null))switch(d){case"children":i=o;break;case"dangerouslySetInnerHTML":throw Error(N(434));default:Me(t,r,d,o)}return t.push(bt),i;case"listing":case"pre":t.push(nt(e)),o=i=null;for(l in n)if(Ne.call(n,l)&&(a=n[l],a!=null))switch(l){case"children":i=a;break;case"dangerouslySetInnerHTML":o=a;break;default:Me(t,r,l,a)}if(t.push(bt),o!=null){if(i!=null)throw Error(N(60));if(typeof o!="object"||!("__html"in o))throw Error(N(61));n=o.__html,n!=null&&(typeof n=="string"&&0<n.length&&n[0]===`
`?t.push(ki,O(n)):t.push(O(""+n)))}return typeof i=="string"&&i[0]===`
`&&t.push(ki),i;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":t.push(nt(e));for(var p in n)if(Ne.call(n,p)&&(i=n[p],i!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(N(399,e));default:Me(t,r,p,i)}return t.push(Tl),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return xi(t,n,e,r);case"html":return s.insertionMode===0&&t.push(Vp),xi(t,n,e,r);default:if(e.indexOf("-")===-1&&typeof n.is!="string")return xi(t,n,e,r);t.push(nt(e)),o=i=null;for(c in n)if(Ne.call(n,c)&&(a=n[c],a!=null))switch(c){case"children":i=a;break;case"dangerouslySetInnerHTML":o=a;break;case"style":Bu(t,r,a);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:ju(c)&&typeof a!="function"&&typeof a!="symbol"&&t.push(It,O(c),_n,O(ge(a)),Yt)}return t.push(bt),is(t,o,i),i}}var zp=v("</"),qp=v(">"),Gp=v('<template id="'),Kp=v('"></template>'),Yp=v("<!--$-->"),Qp=v('<!--$?--><template id="'),Jp=v('"></template>'),Xp=v("<!--$!-->"),Zp=v("<!--/$-->"),em=v("<template"),tm=v('"'),nm=v(' data-dgst="');v(' data-msg="');v(' data-stck="');var rm=v("></template>");function kl(t,e,n){if(I(t,Qp),n===null)throw Error(N(395));return I(t,n),J(t,Jp)}var sm=v('<div hidden id="'),im=v('">'),om=v("</div>"),am=v('<svg aria-hidden="true" style="display:none" id="'),lm=v('">'),cm=v("</svg>"),um=v('<math aria-hidden="true" style="display:none" id="'),dm=v('">'),hm=v("</math>"),fm=v('<table hidden id="'),pm=v('">'),mm=v("</table>"),gm=v('<table hidden><tbody id="'),_m=v('">'),ym=v("</tbody></table>"),vm=v('<table hidden><tr id="'),wm=v('">'),Em=v("</tr></table>"),Sm=v('<table hidden><colgroup id="'),Cm=v('">'),Im=v("</colgroup></table>");function bm(t,e,n,r){switch(n.insertionMode){case 0:case 1:return I(t,sm),I(t,e.segmentPrefix),I(t,O(r.toString(16))),J(t,im);case 2:return I(t,am),I(t,e.segmentPrefix),I(t,O(r.toString(16))),J(t,lm);case 3:return I(t,um),I(t,e.segmentPrefix),I(t,O(r.toString(16))),J(t,dm);case 4:return I(t,fm),I(t,e.segmentPrefix),I(t,O(r.toString(16))),J(t,pm);case 5:return I(t,gm),I(t,e.segmentPrefix),I(t,O(r.toString(16))),J(t,_m);case 6:return I(t,vm),I(t,e.segmentPrefix),I(t,O(r.toString(16))),J(t,wm);case 7:return I(t,Sm),I(t,e.segmentPrefix),I(t,O(r.toString(16))),J(t,Cm);default:throw Error(N(397))}}function Tm(t,e){switch(e.insertionMode){case 0:case 1:return J(t,om);case 2:return J(t,cm);case 3:return J(t,hm);case 4:return J(t,mm);case 5:return J(t,ym);case 6:return J(t,Em);case 7:return J(t,Im);default:throw Error(N(397))}}var xm=v('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),km=v('$RS("'),Rm=v('","'),Am=v('")<\/script>'),Nm=v('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),Pm=v('$RC("'),Om=v('","'),Dm=v('")<\/script>'),Mm=v('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'),Lm=v('$RX("'),Fm=v('"'),$m=v(")<\/script>"),Ri=v(","),Um=/[<\u2028\u2029]/g;function Ai(t){return JSON.stringify(t).replace(Um,function(e){switch(e){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var ir=Object.assign,jm=Symbol.for("react.element"),Wu=Symbol.for("react.portal"),Vu=Symbol.for("react.fragment"),Hu=Symbol.for("react.strict_mode"),zu=Symbol.for("react.profiler"),qu=Symbol.for("react.provider"),Gu=Symbol.for("react.context"),Ku=Symbol.for("react.forward_ref"),Yu=Symbol.for("react.suspense"),Qu=Symbol.for("react.suspense_list"),Ju=Symbol.for("react.memo"),Yo=Symbol.for("react.lazy"),Bm=Symbol.for("react.scope"),Wm=Symbol.for("react.debug_trace_mode"),Vm=Symbol.for("react.legacy_hidden"),Hm=Symbol.for("react.default_value"),Rl=Symbol.iterator;function io(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vu:return"Fragment";case Wu:return"Portal";case zu:return"Profiler";case Hu:return"StrictMode";case Yu:return"Suspense";case Qu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Gu:return(t.displayName||"Context")+".Consumer";case qu:return(t._context.displayName||"Context")+".Provider";case Ku:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ju:return e=t.displayName||null,e!==null?e:io(t.type)||"Memo";case Yo:e=t._payload,t=t._init;try{return io(t(e))}catch{}}return null}var Xu={};function Al(t,e){if(t=t.contextTypes,!t)return Xu;var n={},r;for(r in t)n[r]=e[r];return n}var Xt=null;function ei(t,e){if(t!==e){t.context._currentValue=t.parentValue,t=t.parent;var n=e.parent;if(t===null){if(n!==null)throw Error(N(401))}else{if(n===null)throw Error(N(401));ei(t,n)}e.context._currentValue=e.value}}function Zu(t){t.context._currentValue=t.parentValue,t=t.parent,t!==null&&Zu(t)}function ed(t){var e=t.parent;e!==null&&ed(e),t.context._currentValue=t.value}function td(t,e){if(t.context._currentValue=t.parentValue,t=t.parent,t===null)throw Error(N(402));t.depth===e.depth?ei(t,e):td(t,e)}function nd(t,e){var n=e.parent;if(n===null)throw Error(N(402));t.depth===n.depth?ei(t,n):nd(t,n),e.context._currentValue=e.value}function Es(t){var e=Xt;e!==t&&(e===null?ed(t):t===null?Zu(e):e.depth===t.depth?ei(e,t):e.depth>t.depth?td(e,t):nd(e,t),Xt=t)}var Nl={isMounted:function(){return!1},enqueueSetState:function(t,e){t=t._reactInternals,t.queue!==null&&t.queue.push(e)},enqueueReplaceState:function(t,e){t=t._reactInternals,t.replace=!0,t.queue=[e]},enqueueForceUpdate:function(){}};function Pl(t,e,n,r){var s=t.state!==void 0?t.state:null;t.updater=Nl,t.props=n,t.state=s;var i={queue:[],replace:!1};t._reactInternals=i;var o=e.contextType;if(t.context=typeof o=="object"&&o!==null?o._currentValue:r,o=e.getDerivedStateFromProps,typeof o=="function"&&(o=o(n,s),s=o==null?s:ir({},s,o),t.state=s),typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function"&&(typeof t.UNSAFE_componentWillMount=="function"||typeof t.componentWillMount=="function"))if(e=t.state,typeof t.componentWillMount=="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount=="function"&&t.UNSAFE_componentWillMount(),e!==t.state&&Nl.enqueueReplaceState(t,t.state,null),i.queue!==null&&0<i.queue.length)if(e=i.queue,o=i.replace,i.queue=null,i.replace=!1,o&&e.length===1)t.state=e[0];else{for(i=o?e[0]:t.state,s=!0,o=o?1:0;o<e.length;o++){var a=e[o];a=typeof a=="function"?a.call(t,i,n,r):a,a!=null&&(s?(s=!1,i=ir({},i,a)):ir(i,a))}t.state=i}else i.queue=null}var zm={id:1,overflow:""};function oo(t,e,n){var r=t.id;t=t.overflow;var s=32-os(r)-1;r&=~(1<<s),n+=1;var i=32-os(e)+s;if(30<i){var o=s-s%5;return i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,{id:1<<32-os(e)+s|n<<s|r,overflow:i+t}}return{id:1<<i|n<<s|r,overflow:t}}var os=Math.clz32?Math.clz32:Km,qm=Math.log,Gm=Math.LN2;function Km(t){return t>>>=0,t===0?32:31-(qm(t)/Gm|0)|0}function Ym(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qm=typeof Object.is=="function"?Object.is:Ym,yt=null,Qo=null,as=null,Y=null,er=!1,Ss=!1,gr=0,At=null,ti=0;function Qt(){if(yt===null)throw Error(N(321));return yt}function Ol(){if(0<ti)throw Error(N(312));return{memoizedState:null,queue:null,next:null}}function Jo(){return Y===null?as===null?(er=!1,as=Y=Ol()):(er=!0,Y=as):Y.next===null?(er=!1,Y=Y.next=Ol()):(er=!0,Y=Y.next),Y}function Xo(){Qo=yt=null,Ss=!1,as=null,ti=0,Y=At=null}function rd(t,e){return typeof e=="function"?e(t):e}function Dl(t,e,n){if(yt=Qt(),Y=Jo(),er){var r=Y.queue;if(e=r.dispatch,At!==null&&(n=At.get(r),n!==void 0)){At.delete(r),r=Y.memoizedState;do r=t(r,n.action),n=n.next;while(n!==null);return Y.memoizedState=r,[r,e]}return[Y.memoizedState,e]}return t=t===rd?typeof e=="function"?e():e:n!==void 0?n(e):e,Y.memoizedState=t,t=Y.queue={last:null,dispatch:null},t=t.dispatch=Jm.bind(null,yt,t),[Y.memoizedState,t]}function Ml(t,e){if(yt=Qt(),Y=Jo(),e=e===void 0?null:e,Y!==null){var n=Y.memoizedState;if(n!==null&&e!==null){var r=n[1];e:if(r===null)r=!1;else{for(var s=0;s<r.length&&s<e.length;s++)if(!Qm(e[s],r[s])){r=!1;break e}r=!0}if(r)return n[0]}}return t=t(),Y.memoizedState=[t,e],t}function Jm(t,e,n){if(25<=ti)throw Error(N(301));if(t===yt)if(Ss=!0,t={action:n,next:null},At===null&&(At=new Map),n=At.get(e),n===void 0)At.set(e,t);else{for(e=n;e.next!==null;)e=e.next;e.next=t}}function Xm(){throw Error(N(394))}function qr(){}var Ll={readContext:function(t){return t._currentValue},useContext:function(t){return Qt(),t._currentValue},useMemo:Ml,useReducer:Dl,useRef:function(t){yt=Qt(),Y=Jo();var e=Y.memoizedState;return e===null?(t={current:t},Y.memoizedState=t):e},useState:function(t){return Dl(rd,t)},useInsertionEffect:qr,useLayoutEffect:function(){},useCallback:function(t,e){return Ml(function(){return t},e)},useImperativeHandle:qr,useEffect:qr,useDebugValue:qr,useDeferredValue:function(t){return Qt(),t},useTransition:function(){return Qt(),[!1,Xm]},useId:function(){var t=Qo.treeContext,e=t.overflow;t=t.id,t=(t&~(1<<32-os(t)-1)).toString(32)+e;var n=ls;if(n===null)throw Error(N(404));return e=gr++,t=":"+n.idPrefix+"R"+t,0<e&&(t+="H"+e.toString(32)),t+":"},useMutableSource:function(t,e){return Qt(),e(t._source)},useSyncExternalStore:function(t,e,n){if(n===void 0)throw Error(N(407));return n()}},ls=null,Ni=Fu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function Zm(t){return console.error(t),null}function tr(){}function eg(t,e,n,r,s,i,o,a,l){var c=[],u=new Set;return e={destination:null,responseState:e,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:u,pingedTasks:c,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:s===void 0?Zm:s,onAllReady:i===void 0?tr:i,onShellReady:o===void 0?tr:o,onShellError:a===void 0?tr:a,onFatalError:l===void 0?tr:l},n=Cs(e,0,null,n,!1,!1),n.parentFlushed=!0,t=Zo(e,t,null,n,u,Xu,null,zm),c.push(t),e}function Zo(t,e,n,r,s,i,o,a){t.allPendingTasks++,n===null?t.pendingRootTasks++:n.pendingTasks++;var l={node:e,ping:function(){var c=t.pingedTasks;c.push(l),c.length===1&&od(t)},blockedBoundary:n,blockedSegment:r,abortSet:s,legacyContext:i,context:o,treeContext:a};return s.add(l),l}function Cs(t,e,n,r,s,i){return{status:0,id:-1,index:e,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:n,lastPushedText:s,textEmbedded:i}}function _r(t,e){if(t=t.onError(e),t!=null&&typeof t!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof t+'" instead');return t}function Is(t,e){var n=t.onShellError;n(e),n=t.onFatalError,n(e),t.destination!==null?(t.status=2,Uu(t.destination,e)):(t.status=1,t.fatalError=e)}function Fl(t,e,n,r,s){for(yt={},Qo=e,gr=0,t=n(r,s);Ss;)Ss=!1,gr=0,ti+=1,Y=null,t=n(r,s);return Xo(),t}function $l(t,e,n,r){var s=n.render(),i=r.childContextTypes;if(i!=null){var o=e.legacyContext;if(typeof n.getChildContext!="function")r=o;else{n=n.getChildContext();for(var a in n)if(!(a in i))throw Error(N(108,io(r)||"Unknown",a));r=ir({},o,n)}e.legacyContext=r,Ue(t,e,s),e.legacyContext=o}else Ue(t,e,s)}function Ul(t,e){if(t&&t.defaultProps){e=ir({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ao(t,e,n,r,s){if(typeof n=="function")if(n.prototype&&n.prototype.isReactComponent){s=Al(n,e.legacyContext);var i=n.contextType;i=new n(r,typeof i=="object"&&i!==null?i._currentValue:s),Pl(i,n,r,s),$l(t,e,i,n)}else{i=Al(n,e.legacyContext),s=Fl(t,e,n,r,i);var o=gr!==0;if(typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0)Pl(s,n,r,i),$l(t,e,s,n);else if(o){r=e.treeContext,e.treeContext=oo(r,1,0);try{Ue(t,e,s)}finally{e.treeContext=r}}else Ue(t,e,s)}else if(typeof n=="string"){switch(s=e.blockedSegment,i=Hp(s.chunks,n,r,t.responseState,s.formatContext),s.lastPushedText=!1,o=s.formatContext,s.formatContext=$p(o,n,r),lo(t,e,i),s.formatContext=o,n){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:s.chunks.push(zp,O(n),qp)}s.lastPushedText=!1}else{switch(n){case Vm:case Wm:case Hu:case zu:case Vu:Ue(t,e,r.children);return;case Qu:Ue(t,e,r.children);return;case Bm:throw Error(N(343));case Yu:e:{n=e.blockedBoundary,s=e.blockedSegment,i=r.fallback,r=r.children,o=new Set;var a={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:o,errorDigest:null},l=Cs(t,s.chunks.length,a,s.formatContext,!1,!1);s.children.push(l),s.lastPushedText=!1;var c=Cs(t,0,null,s.formatContext,!1,!1);c.parentFlushed=!0,e.blockedBoundary=a,e.blockedSegment=c;try{if(lo(t,e,r),c.lastPushedText&&c.textEmbedded&&c.chunks.push(Ko),c.status=1,bs(a,c),a.pendingTasks===0)break e}catch(u){c.status=4,a.forceClientRender=!0,a.errorDigest=_r(t,u)}finally{e.blockedBoundary=n,e.blockedSegment=s}e=Zo(t,i,n,l,o,e.legacyContext,e.context,e.treeContext),t.pingedTasks.push(e)}return}if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Ku:if(r=Fl(t,e,n.render,r,s),gr!==0){n=e.treeContext,e.treeContext=oo(n,1,0);try{Ue(t,e,r)}finally{e.treeContext=n}}else Ue(t,e,r);return;case Ju:n=n.type,r=Ul(n,r),ao(t,e,n,r,s);return;case qu:if(s=r.children,n=n._context,r=r.value,i=n._currentValue,n._currentValue=r,o=Xt,Xt=r={parent:o,depth:o===null?0:o.depth+1,context:n,parentValue:i,value:r},e.context=r,Ue(t,e,s),t=Xt,t===null)throw Error(N(403));r=t.parentValue,t.context._currentValue=r===Hm?t.context._defaultValue:r,t=Xt=t.parent,e.context=t;return;case Gu:r=r.children,r=r(n._currentValue),Ue(t,e,r);return;case Yo:s=n._init,n=s(n._payload),r=Ul(n,r),ao(t,e,n,r,void 0);return}throw Error(N(130,n==null?n:typeof n,""))}}function Ue(t,e,n){if(e.node=n,typeof n=="object"&&n!==null){switch(n.$$typeof){case jm:ao(t,e,n.type,n.props,n.ref);return;case Wu:throw Error(N(257));case Yo:var r=n._init;n=r(n._payload),Ue(t,e,n);return}if(so(n)){jl(t,e,n);return}if(n===null||typeof n!="object"?r=null:(r=Rl&&n[Rl]||n["@@iterator"],r=typeof r=="function"?r:null),r&&(r=r.call(n))){if(n=r.next(),!n.done){var s=[];do s.push(n.value),n=r.next();while(!n.done);jl(t,e,s)}return}throw t=Object.prototype.toString.call(n),Error(N(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}typeof n=="string"?(r=e.blockedSegment,r.lastPushedText=Sl(e.blockedSegment.chunks,n,t.responseState,r.lastPushedText)):typeof n=="number"&&(r=e.blockedSegment,r.lastPushedText=Sl(e.blockedSegment.chunks,""+n,t.responseState,r.lastPushedText))}function jl(t,e,n){for(var r=n.length,s=0;s<r;s++){var i=e.treeContext;e.treeContext=oo(i,r,s);try{lo(t,e,n[s])}finally{e.treeContext=i}}}function lo(t,e,n){var r=e.blockedSegment.formatContext,s=e.legacyContext,i=e.context;try{return Ue(t,e,n)}catch(l){if(Xo(),typeof l=="object"&&l!==null&&typeof l.then=="function"){n=l;var o=e.blockedSegment,a=Cs(t,o.chunks.length,null,o.formatContext,o.lastPushedText,!0);o.children.push(a),o.lastPushedText=!1,t=Zo(t,e.node,e.blockedBoundary,a,e.abortSet,e.legacyContext,e.context,e.treeContext).ping,n.then(t,t),e.blockedSegment.formatContext=r,e.legacyContext=s,e.context=i,Es(i)}else throw e.blockedSegment.formatContext=r,e.legacyContext=s,e.context=i,Es(i),l}}function tg(t){var e=t.blockedBoundary;t=t.blockedSegment,t.status=3,id(this,e,t)}function sd(t,e,n){var r=t.blockedBoundary;t.blockedSegment.status=3,r===null?(e.allPendingTasks--,e.status!==2&&(e.status=2,e.destination!==null&&e.destination.close())):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,t=n===void 0?Error(N(432)):n,r.errorDigest=e.onError(t),r.parentFlushed&&e.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach(function(s){return sd(s,e,n)}),r.fallbackAbortableTasks.clear(),e.allPendingTasks--,e.allPendingTasks===0&&(r=e.onAllReady,r()))}function bs(t,e){if(e.chunks.length===0&&e.children.length===1&&e.children[0].boundary===null){var n=e.children[0];n.id=e.id,n.parentFlushed=!0,n.status===1&&bs(t,n)}else t.completedSegments.push(e)}function id(t,e,n){if(e===null){if(n.parentFlushed){if(t.completedRootSegment!==null)throw Error(N(389));t.completedRootSegment=n}t.pendingRootTasks--,t.pendingRootTasks===0&&(t.onShellError=tr,e=t.onShellReady,e())}else e.pendingTasks--,e.forceClientRender||(e.pendingTasks===0?(n.parentFlushed&&n.status===1&&bs(e,n),e.parentFlushed&&t.completedBoundaries.push(e),e.fallbackAbortableTasks.forEach(tg,t),e.fallbackAbortableTasks.clear()):n.parentFlushed&&n.status===1&&(bs(e,n),e.completedSegments.length===1&&e.parentFlushed&&t.partialBoundaries.push(e)));t.allPendingTasks--,t.allPendingTasks===0&&(t=t.onAllReady,t())}function od(t){if(t.status!==2){var e=Xt,n=Ni.current;Ni.current=Ll;var r=ls;ls=t.responseState;try{var s=t.pingedTasks,i;for(i=0;i<s.length;i++){var o=s[i],a=t,l=o.blockedSegment;if(l.status===0){Es(o.context);try{Ue(a,o,o.node),l.lastPushedText&&l.textEmbedded&&l.chunks.push(Ko),o.abortSet.delete(o),l.status=1,id(a,o.blockedBoundary,l)}catch(m){if(Xo(),typeof m=="object"&&m!==null&&typeof m.then=="function"){var c=o.ping;m.then(c,c)}else{o.abortSet.delete(o),l.status=4;var u=o.blockedBoundary,d=m,f=_r(a,d);if(u===null?Is(a,d):(u.pendingTasks--,u.forceClientRender||(u.forceClientRender=!0,u.errorDigest=f,u.parentFlushed&&a.clientRenderedBoundaries.push(u))),a.allPendingTasks--,a.allPendingTasks===0){var p=a.onAllReady;p()}}}finally{}}}s.splice(0,i),t.destination!==null&&ea(t,t.destination)}catch(m){_r(t,m),Is(t,m)}finally{ls=r,Ni.current=n,n===Ll&&Es(e)}}}function Gr(t,e,n){switch(n.parentFlushed=!0,n.status){case 0:var r=n.id=t.nextSegmentId++;return n.lastPushedText=!1,n.textEmbedded=!1,t=t.responseState,I(e,Gp),I(e,t.placeholderPrefix),t=O(r.toString(16)),I(e,t),J(e,Kp);case 1:n.status=2;var s=!0;r=n.chunks;var i=0;n=n.children;for(var o=0;o<n.length;o++){for(s=n[o];i<s.index;i++)I(e,r[i]);s=ni(t,e,s)}for(;i<r.length-1;i++)I(e,r[i]);return i<r.length&&(s=J(e,r[i])),s;default:throw Error(N(390))}}function ni(t,e,n){var r=n.boundary;if(r===null)return Gr(t,e,n);if(r.parentFlushed=!0,r.forceClientRender)r=r.errorDigest,J(e,Xp),I(e,em),r&&(I(e,nm),I(e,O(ge(r))),I(e,tm)),J(e,rm),Gr(t,e,n);else if(0<r.pendingTasks){r.rootSegmentID=t.nextSegmentId++,0<r.completedSegments.length&&t.partialBoundaries.push(r);var s=t.responseState,i=s.nextSuspenseID++;s=v(s.boundaryPrefix+i.toString(16)),r=r.id=s,kl(e,t.responseState,r),Gr(t,e,n)}else if(r.byteSize>t.progressiveChunkSize)r.rootSegmentID=t.nextSegmentId++,t.completedBoundaries.push(r),kl(e,t.responseState,r.id),Gr(t,e,n);else{if(J(e,Yp),n=r.completedSegments,n.length!==1)throw Error(N(391));ni(t,e,n[0])}return J(e,Zp)}function Bl(t,e,n){return bm(e,t.responseState,n.formatContext,n.id),ni(t,e,n),Tm(e,n.formatContext)}function Wl(t,e,n){for(var r=n.completedSegments,s=0;s<r.length;s++)ad(t,e,n,r[s]);if(r.length=0,t=t.responseState,r=n.id,n=n.rootSegmentID,I(e,t.startInlineScript),t.sentCompleteBoundaryFunction?I(e,Pm):(t.sentCompleteBoundaryFunction=!0,I(e,Nm)),r===null)throw Error(N(395));return n=O(n.toString(16)),I(e,r),I(e,Om),I(e,t.segmentPrefix),I(e,n),J(e,Dm)}function ad(t,e,n,r){if(r.status===2)return!0;var s=r.id;if(s===-1){if((r.id=n.rootSegmentID)===-1)throw Error(N(392));return Bl(t,e,r)}return Bl(t,e,r),t=t.responseState,I(e,t.startInlineScript),t.sentCompleteSegmentFunction?I(e,km):(t.sentCompleteSegmentFunction=!0,I(e,xm)),I(e,t.segmentPrefix),s=O(s.toString(16)),I(e,s),I(e,Rm),I(e,t.placeholderPrefix),I(e,s),J(e,Am)}function ea(t,e){Fe=new Uint8Array(512),$e=0;try{var n=t.completedRootSegment;if(n!==null&&t.pendingRootTasks===0){ni(t,e,n),t.completedRootSegment=null;var r=t.responseState.bootstrapChunks;for(n=0;n<r.length-1;n++)I(e,r[n]);n<r.length&&J(e,r[n])}var s=t.clientRenderedBoundaries,i;for(i=0;i<s.length;i++){var o=s[i];r=e;var a=t.responseState,l=o.id,c=o.errorDigest,u=o.errorMessage,d=o.errorComponentStack;if(I(r,a.startInlineScript),a.sentClientRenderFunction?I(r,Lm):(a.sentClientRenderFunction=!0,I(r,Mm)),l===null)throw Error(N(395));I(r,l),I(r,Fm),(c||u||d)&&(I(r,Ri),I(r,O(Ai(c||"")))),(u||d)&&(I(r,Ri),I(r,O(Ai(u||"")))),d&&(I(r,Ri),I(r,O(Ai(d)))),J(r,$m)}s.splice(0,i);var f=t.completedBoundaries;for(i=0;i<f.length;i++)Wl(t,e,f[i]);f.splice(0,i),yl(e),Fe=new Uint8Array(512),$e=0;var p=t.partialBoundaries;for(i=0;i<p.length;i++){var m=p[i];e:{s=t,o=e;var S=m.completedSegments;for(a=0;a<S.length;a++)if(!ad(s,o,m,S[a])){a++,S.splice(0,a);var k=!1;break e}S.splice(0,a),k=!0}if(!k){t.destination=null,i++,p.splice(0,i);return}}p.splice(0,i);var W=t.completedBoundaries;for(i=0;i<W.length;i++)Wl(t,e,W[i]);W.splice(0,i)}finally{yl(e),t.allPendingTasks===0&&t.pingedTasks.length===0&&t.clientRenderedBoundaries.length===0&&t.completedBoundaries.length===0&&e.close()}}function Vl(t,e){try{var n=t.abortableTasks;n.forEach(function(r){return sd(r,t,e)}),n.clear(),t.destination!==null&&ea(t,t.destination)}catch(r){_r(t,r),Is(t,r)}}zo.renderToReadableStream=function(t,e){return new Promise(function(n,r){var s,i,o=new Promise(function(u,d){i=u,s=d}),a=eg(t,Lp(e?e.identifierPrefix:void 0,e?e.nonce:void 0,e?e.bootstrapScriptContent:void 0,e?e.bootstrapScripts:void 0,e?e.bootstrapModules:void 0),Fp(e?e.namespaceURI:void 0),e?e.progressiveChunkSize:void 0,e?e.onError:void 0,i,function(){var u=new ReadableStream({type:"bytes",pull:function(d){if(a.status===1)a.status=2,Uu(d,a.fatalError);else if(a.status!==2&&a.destination===null){a.destination=d;try{ea(a,d)}catch(f){_r(a,f),Is(a,f)}}},cancel:function(){Vl(a)}},{highWaterMark:0});u.allReady=o,n(u)},function(u){o.catch(function(){}),r(u)},s);if(e&&e.signal){var l=e.signal,c=function(){Vl(a,l.reason),l.removeEventListener("abort",c)};l.addEventListener("abort",c)}od(a)})};zo.version="18.3.1";var Ln,ld;Ln=Mn,ld=zo;Ln.version;var ng=Ln.renderToString;Ln.renderToStaticMarkup;Ln.renderToNodeStream;Ln.renderToStaticNodeStream;ld.renderToReadableStream;function rg({basename:t,children:e,location:n="/",future:r}){typeof n=="string"&&(n=Lf(n));let s=Ff.Pop,i={pathname:n.pathname||"/",search:n.search||"",hash:n.hash||"",state:n.state!=null?n.state:null,key:n.key||"default"},o=sg();return g.createElement($f,{basename:t,children:e,location:i,navigationType:s,navigator:o,future:r,static:!0})}function sg(){return{createHref:ig,encodeLocation:og,push(t){throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(t)})\` somewhere in your app.`)},replace(t){throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(t)}, { replace: true })\` somewhere in your app.`)},go(t){throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${t})\` somewhere in your app.`)},back(){throw new Error("You cannot use navigator.back() on the server because it is a stateless environment.")},forward(){throw new Error("You cannot use navigator.forward() on the server because it is a stateless environment.")}}}function ig(t){return typeof t=="string"?t:uu(t)}function og(t){let e=typeof t=="string"?t:uu(t);e=e.replace(/ $/,"%20");let n=ag.test(e)?new URL(e):new URL(e,"http://localhost");return{pathname:n.pathname,search:n.search,hash:n.hash}}const ag=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;var lg=typeof Element<"u",cg=typeof Map=="function",ug=typeof Set=="function",dg=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function cs(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,s;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!cs(t[r],e[r]))return!1;return!0}var i;if(cg&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;for(i=t.entries();!(r=i.next()).done;)if(!cs(r.value[1],e.get(r.value[0])))return!1;return!0}if(ug&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(dg&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(s=Object.keys(t),n=s.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,s[r]))return!1;if(lg&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((s[r]==="_owner"||s[r]==="__v"||s[r]==="__o")&&t.$$typeof)&&!cs(t[s[r]],e[s[r]]))return!1;return!0}return t!==t&&e!==e}var hg=function(e,n){try{return cs(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const fg=Mo(hg);var pg=function(t,e,n,r,s,i,o,a){if(!t){var l;if(e===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,s,i,o,a],u=0;l=new Error(e.replace(/%s/g,function(){return c[u++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},mg=pg;const Hl=Mo(mg);var gg=function(e,n,r,s){var i=r?r.call(s,e,n):void 0;if(i!==void 0)return!!i;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var o=Object.keys(e),a=Object.keys(n);if(o.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),c=0;c<o.length;c++){var u=o[c];if(!l(u))return!1;var d=e[u],f=n[u];if(i=r?r.call(s,d,f,u):void 0,i===!1||i===void 0&&d!==f)return!1}return!0};const _g=Mo(gg);var cd=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(cd||{}),Pi={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},zl=Object.values(cd),ta={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},yg=Object.entries(ta).reduce((t,[e,n])=>(t[n]=e,t),{}),Qe="data-rh",vn={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},wn=(t,e)=>{for(let n=t.length-1;n>=0;n-=1){const r=t[n];if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}return null},vg=t=>{let e=wn(t,"title");const n=wn(t,vn.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),n&&e)return n.replace(/%s/g,()=>e);const r=wn(t,vn.DEFAULT_TITLE);return e||r||void 0},wg=t=>wn(t,vn.ON_CHANGE_CLIENT_STATE)||(()=>{}),Oi=(t,e)=>e.filter(n=>typeof n[t]<"u").map(n=>n[t]).reduce((n,r)=>({...n,...r}),{}),Eg=(t,e)=>e.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const s=Object.keys(r);for(let i=0;i<s.length;i+=1){const a=s[i].toLowerCase();if(t.indexOf(a)!==-1&&r[a])return n.concat(r)}}return n},[]),Sg=t=>console&&typeof console.warn=="function"&&console.warn(t),Hn=(t,e,n)=>{const r={};return n.filter(s=>Array.isArray(s[t])?!0:(typeof s[t]<"u"&&Sg(`Helmet: ${t} should be of type "Array". Instead found type "${typeof s[t]}"`),!1)).map(s=>s[t]).reverse().reduce((s,i)=>{const o={};i.filter(l=>{let c;const u=Object.keys(l);for(let f=0;f<u.length;f+=1){const p=u[f],m=p.toLowerCase();e.indexOf(m)!==-1&&!(c==="rel"&&l[c].toLowerCase()==="canonical")&&!(m==="rel"&&l[m].toLowerCase()==="stylesheet")&&(c=m),e.indexOf(p)!==-1&&(p==="innerHTML"||p==="cssText"||p==="itemprop")&&(c=p)}if(!c||!l[c])return!1;const d=l[c].toLowerCase();return r[c]||(r[c]={}),o[c]||(o[c]={}),r[c][d]?!1:(o[c][d]=!0,!0)}).reverse().forEach(l=>s.push(l));const a=Object.keys(o);for(let l=0;l<a.length;l+=1){const c=a[l],u={...r[c],...o[c]};r[c]=u}return s},[]).reverse()},Cg=(t,e)=>{if(Array.isArray(t)&&t.length){for(let n=0;n<t.length;n+=1)if(t[n][e])return!0}return!1},Ig=t=>({baseTag:Eg(["href"],t),bodyAttributes:Oi("bodyAttributes",t),defer:wn(t,vn.DEFER),encode:wn(t,vn.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Oi("htmlAttributes",t),linkTags:Hn("link",["rel","href"],t),metaTags:Hn("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:Hn("noscript",["innerHTML"],t),onChangeClientState:wg(t),scriptTags:Hn("script",["src","innerHTML"],t),styleTags:Hn("style",["cssText"],t),title:vg(t),titleAttributes:Oi("titleAttributes",t),prioritizeSeoTags:Cg(t,vn.PRIORITIZE_SEO_TAGS)}),ud=t=>Array.isArray(t)?t.join(""):t,bg=(t,e)=>{const n=Object.keys(t);for(let r=0;r<n.length;r+=1)if(e[n[r]]&&e[n[r]].includes(t[n[r]]))return!0;return!1},Di=(t,e)=>Array.isArray(t)?t.reduce((n,r)=>(bg(r,e)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:t,priority:[]},ql=(t,e)=>({...t,[e]:void 0}),Tg=["noscript","script","style"],co=(t,e=!0)=>e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),dd=t=>Object.keys(t).reduce((e,n)=>{const r=typeof t[n]<"u"?`${n}="${t[n]}"`:`${n}`;return e?`${e} ${r}`:r},""),xg=(t,e,n,r)=>{const s=dd(n),i=ud(e);return s?`<${t} ${Qe}="true" ${s}>${co(i,r)}</${t}>`:`<${t} ${Qe}="true">${co(i,r)}</${t}>`},kg=(t,e,n=!0)=>e.reduce((r,s)=>{const i=s,o=Object.keys(i).filter(c=>!(c==="innerHTML"||c==="cssText")).reduce((c,u)=>{const d=typeof i[u]>"u"?u:`${u}="${co(i[u],n)}"`;return c?`${c} ${d}`:d},""),a=i.innerHTML||i.cssText||"",l=Tg.indexOf(t)===-1;return`${r}<${t} ${Qe}="true" ${o}${l?"/>":`>${a}</${t}>`}`},""),hd=(t,e={})=>Object.keys(t).reduce((n,r)=>{const s=ta[r];return n[s||r]=t[r],n},e),Rg=(t,e,n)=>{const r={key:e,[Qe]:!0},s=hd(n,r);return[rt.createElement("title",s,e)]},us=(t,e)=>e.map((n,r)=>{const s={key:r,[Qe]:!0};return Object.keys(n).forEach(i=>{const a=ta[i]||i;if(a==="innerHTML"||a==="cssText"){const l=n.innerHTML||n.cssText;s.dangerouslySetInnerHTML={__html:l}}else s[a]=n[i]}),rt.createElement(t,s)}),Ve=(t,e,n=!0)=>{switch(t){case"title":return{toComponent:()=>Rg(t,e.title,e.titleAttributes),toString:()=>xg(t,e.title,e.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>hd(e),toString:()=>dd(e)};default:return{toComponent:()=>us(t,e),toString:()=>kg(t,e,n)}}},Ag=({metaTags:t,linkTags:e,scriptTags:n,encode:r})=>{const s=Di(t,Pi.meta),i=Di(e,Pi.link),o=Di(n,Pi.script);return{priorityMethods:{toComponent:()=>[...us("meta",s.priority),...us("link",i.priority),...us("script",o.priority)],toString:()=>`${Ve("meta",s.priority,r)} ${Ve("link",i.priority,r)} ${Ve("script",o.priority,r)}`},metaTags:s.default,linkTags:i.default,scriptTags:o.default}},Ng=t=>{const{baseTag:e,bodyAttributes:n,encode:r=!0,htmlAttributes:s,noscriptTags:i,styleTags:o,title:a="",titleAttributes:l,prioritizeSeoTags:c}=t;let{linkTags:u,metaTags:d,scriptTags:f}=t,p={toComponent:()=>{},toString:()=>""};return c&&({priorityMethods:p,linkTags:u,metaTags:d,scriptTags:f}=Ag(t)),{priority:p,base:Ve("base",e,r),bodyAttributes:Ve("bodyAttributes",n,r),htmlAttributes:Ve("htmlAttributes",s,r),link:Ve("link",u,r),meta:Ve("meta",d,r),noscript:Ve("noscript",i,r),script:Ve("script",f,r),style:Ve("style",o,r),title:Ve("title",{title:a,titleAttributes:l},r)}},uo=Ng,Kr=[],fd=!!(typeof window<"u"&&window.document&&window.document.createElement),ho=class{constructor(t,e){ct(this,"instances",[]);ct(this,"canUseDOM",fd);ct(this,"context");ct(this,"value",{setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?Kr:this.instances,add:t=>{(this.canUseDOM?Kr:this.instances).push(t)},remove:t=>{const e=(this.canUseDOM?Kr:this.instances).indexOf(t);(this.canUseDOM?Kr:this.instances).splice(e,1)}}});this.context=t,this.canUseDOM=e||!1,e||(t.helmet=uo({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},Pg={},pd=rt.createContext(Pg),en,md=(en=class extends g.Component{constructor(n){super(n);ct(this,"helmetData");this.helmetData=new ho(this.props.context||{},en.canUseDOM)}render(){return rt.createElement(pd.Provider,{value:this.helmetData.value},this.props.children)}},ct(en,"canUseDOM",fd),en),pn=(t,e)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${t}[${Qe}]`),s=[].slice.call(r),i=[];let o;return e&&e.length&&e.forEach(a=>{const l=document.createElement(t);for(const c in a)if(Object.prototype.hasOwnProperty.call(a,c))if(c==="innerHTML")l.innerHTML=a.innerHTML;else if(c==="cssText")l.styleSheet?l.styleSheet.cssText=a.cssText:l.appendChild(document.createTextNode(a.cssText));else{const u=c,d=typeof a[u]>"u"?"":a[u];l.setAttribute(c,d)}l.setAttribute(Qe,"true"),s.some((c,u)=>(o=u,l.isEqualNode(c)))?s.splice(o,1):i.push(l)}),s.forEach(a=>{var l;return(l=a.parentNode)==null?void 0:l.removeChild(a)}),i.forEach(a=>n.appendChild(a)),{oldTags:s,newTags:i}},fo=(t,e)=>{const n=document.getElementsByTagName(t)[0];if(!n)return;const r=n.getAttribute(Qe),s=r?r.split(","):[],i=[...s],o=Object.keys(e);for(const a of o){const l=e[a]||"";n.getAttribute(a)!==l&&n.setAttribute(a,l),s.indexOf(a)===-1&&s.push(a);const c=i.indexOf(a);c!==-1&&i.splice(c,1)}for(let a=i.length-1;a>=0;a-=1)n.removeAttribute(i[a]);s.length===i.length?n.removeAttribute(Qe):n.getAttribute(Qe)!==o.join(",")&&n.setAttribute(Qe,o.join(","))},Og=(t,e)=>{typeof t<"u"&&document.title!==t&&(document.title=ud(t)),fo("title",e)},Gl=(t,e)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:s,linkTags:i,metaTags:o,noscriptTags:a,onChangeClientState:l,scriptTags:c,styleTags:u,title:d,titleAttributes:f}=t;fo("body",r),fo("html",s),Og(d,f);const p={baseTag:pn("base",n),linkTags:pn("link",i),metaTags:pn("meta",o),noscriptTags:pn("noscript",a),scriptTags:pn("script",c),styleTags:pn("style",u)},m={},S={};Object.keys(p).forEach(k=>{const{newTags:W,oldTags:M}=p[k];W.length&&(m[k]=W),M.length&&(S[k]=p[k].oldTags)}),e&&e(),l(t,m,S)},zn=null,Dg=t=>{zn&&cancelAnimationFrame(zn),t.defer?zn=requestAnimationFrame(()=>{Gl(t,()=>{zn=null})}):(Gl(t),zn=null)},Mg=Dg,Kl=class extends g.Component{constructor(){super(...arguments);ct(this,"rendered",!1)}shouldComponentUpdate(e){return!_g(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:n}=this.props.context;let r=null;const s=Ig(e.get().map(i=>{const o={...i.props};return delete o.context,o}));md.canUseDOM?Mg(s):uo&&(r=uo(s)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},Xi,Lg=(Xi=class extends g.Component{shouldComponentUpdate(t){return!fg(ql(this.props,"helmetData"),ql(t,"helmetData"))}mapNestedChildrenToProps(t,e){if(!e)return null;switch(t.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,e,n,r){return{...e,[t.type]:[...e[t.type]||[],{...n,...this.mapNestedChildrenToProps(t,r)}]}}mapObjectTypeChildren(t,e,n,r){switch(t.type){case"title":return{...e,[t.type]:r,titleAttributes:{...n}};case"body":return{...e,bodyAttributes:{...n}};case"html":return{...e,htmlAttributes:{...n}};default:return{...e,[t.type]:{...n}}}}mapArrayTypeChildrenToProps(t,e){let n={...e};return Object.keys(t).forEach(r=>{n={...n,[r]:t[r]}}),n}warnOnInvalidChildren(t,e){return Hl(zl.some(n=>t.type===n),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${zl.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),Hl(!e||typeof e=="string"||Array.isArray(e)&&!e.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,e){let n={};return rt.Children.forEach(t,r=>{if(!r||!r.props)return;const{children:s,...i}=r.props,o=Object.keys(i).reduce((l,c)=>(l[yg[c]||c]=i[c],l),{});let{type:a}=r;switch(typeof a=="symbol"?a=a.toString():this.warnOnInvalidChildren(r,s),a){case"Symbol(react.fragment)":e=this.mapChildrenToProps(s,e);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,o,s);break;default:e=this.mapObjectTypeChildren(r,e,o,s);break}}),this.mapArrayTypeChildrenToProps(n,e)}render(){const{children:t,...e}=this.props;let n={...e},{helmetData:r}=e;if(t&&(n=this.mapChildrenToProps(t,n)),r&&!(r instanceof ho)){const s=r;r=new ho(s.context,!0),delete n.helmetData}return r?rt.createElement(Kl,{...n,context:r.value}):rt.createElement(pd.Consumer,null,s=>rt.createElement(Kl,{...n,context:s}))}},ct(Xi,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Xi);const Fg="modulepreload",$g=function(t){return"/better-wordle/"+t},Yl={},Ge=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0&&typeof window<"u"){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(l=>{if(l=$g(l),l in Yl)return;Yl[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":Fg,c||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),c)return new Promise((f,p)=>{d.addEventListener("load",f),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};function Ql(t){if(!t)return[];const e=["a[href]","button:not([disabled])","textarea:not([disabled])","input:not([disabled])","select:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(",");return Array.from(t.querySelectorAll(e))}function gd({isOpen:t,titleId:e,onRequestClose:n,children:r,zIndex:s=2e3,disableAutoFocus:i=!1}){const o=g.useRef(null),a=g.useRef(null);return g.useEffect(()=>{if(!t)return;a.current=document.activeElement;const l=document.body.style.overflow;document.body.style.overflow="hidden";const c=()=>{var m;if(i)return;const f=document.activeElement;if(f&&o.current&&o.current.contains(f))return;const p=Ql(o.current);p.length>0?p[0].focus():(m=o.current)==null||m.focus()},u=window.setTimeout(c,0),d=f=>{if(f.key==="Escape"){f.preventDefault(),n==null||n();return}if(f.key!=="Tab")return;const p=Ql(o.current);if(p.length===0){f.preventDefault();return}const m=p[0],S=p[p.length-1],k=document.activeElement;f.shiftKey?(k===m||!o.current.contains(k))&&(f.preventDefault(),S.focus()):k===S&&(f.preventDefault(),m.focus())};return document.addEventListener("keydown",d,!0),()=>{window.clearTimeout(u),document.body.style.overflow=l,document.removeEventListener("keydown",d,!0),a.current&&typeof a.current.focus=="function"&&a.current.focus()}},[t]),t?h.jsx("div",{className:"modalOverlay",style:{zIndex:s},onMouseDown:n,children:h.jsx("div",{className:"modalPanel",role:"dialog","aria-modal":"true","aria-labelledby":e,ref:o,tabIndex:-1,onMouseDown:l=>l.stopPropagation(),children:r})}):null}var Jl={};/**
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
 */const _d={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const _=function(t,e){if(!t)throw Fn(e)},Fn=function(t){return new Error("Firebase Database ("+_d.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const yd=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ug=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},na={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),r.push(n[u],n[d],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ug(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||d==null)throw new jg;const f=i<<2|a>>4;if(r.push(f),c!==64){const p=a<<4&240|c>>2;if(r.push(p),d!==64){const m=c<<6&192|d;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class jg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vd=function(t){const e=yd(t);return na.encodeByteArray(e,!0)},Ts=function(t){return vd(t).replace(/\./g,"")},xs=function(t){try{return na.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Bg(t){return wd(void 0,t)}function wd(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Wg(n)||(t[n]=wd(t[n],e[n]));return t}function Wg(t){return t!=="__proto__"}/**
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
 */function Vg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Hg=()=>Vg().__FIREBASE_DEFAULTS__,zg=()=>{if(typeof process>"u"||typeof Jl>"u")return;const t=Jl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&xs(t[1]);return e&&JSON.parse(e)},ra=()=>{try{return Hg()||zg()||qg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ed=t=>{var e,n;return(n=(e=ra())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Gg=t=>{const e=Ed(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Sd=()=>{var t;return(t=ra())===null||t===void 0?void 0:t.config},Cd=t=>{var e;return(e=ra())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Nr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Kg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ts(JSON.stringify(n)),Ts(JSON.stringify(o)),""].join(".")}/**
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
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function Yg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Id(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qg(){const t=we();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Jg(){return _d.NODE_ADMIN===!0}function Xg(){try{return typeof indexedDB=="object"}catch{return!1}}function Zg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const e_="FirebaseError";class Bt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=e_,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pr.prototype.create)}}class Pr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?t_(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Bt(s,a,r)}}function t_(t,e){return t.replace(n_,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const n_=/\{\$([^}]+)}/g;/**
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
 */function yr(t){return JSON.parse(t)}function de(t){return JSON.stringify(t)}/**
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
 */const bd=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=yr(xs(i[0])||""),n=yr(xs(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},r_=function(t){const e=bd(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},s_=function(t){const e=bd(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ot(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function bn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function po(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ks(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Rs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Xl(i)&&Xl(o)){if(!Rs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Xl(t){return t!==null&&typeof t=="object"}/**
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
 */function $n(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function nr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function rr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class i_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):d<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const f=(s<<5|s>>>27)+c+l+u+r[d]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function o_(t,e){const n=new a_(t,e);return n.subscribe.bind(n)}class a_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");l_(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Mi),s.error===void 0&&(s.error=Mi),s.complete===void 0&&(s.complete=Mi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function l_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Mi(){}function ri(t,e){return`${t} failed: ${e} argument `}/**
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
 */const c_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,_(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},si=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ne(t){return t&&t._delegate?t._delegate:t}class nn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const zt="[DEFAULT]";/**
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
 */class u_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Nr;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(h_(e))try{this.getOrInitializeService({instanceIdentifier:zt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=zt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zt){return this.instances.has(e)}getOptions(e=zt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:d_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zt){return this.component?this.component.multipleInstances?e:zt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function d_(t){return t===zt?void 0:t}function h_(t){return t.instantiationMode==="EAGER"}/**
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
 */class f_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new u_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const p_={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},m_=V.INFO,g_={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},__=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=g_[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ia{constructor(e){this.name=e,this._logLevel=m_,this._logHandler=__,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?p_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const y_=(t,e)=>e.some(n=>t instanceof n);let Zl,ec;function v_(){return Zl||(Zl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function w_(){return ec||(ec=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Td=new WeakMap,mo=new WeakMap,xd=new WeakMap,Li=new WeakMap,oa=new WeakMap;function E_(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ot(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Td.set(n,t)}).catch(()=>{}),oa.set(e,t),e}function S_(t){if(mo.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});mo.set(t,e)}let go={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ot(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function C_(t){go=t(go)}function I_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fi(this),e,...n);return xd.set(r,e.sort?e.sort():[e]),Ot(r)}:w_().includes(t)?function(...e){return t.apply(Fi(this),e),Ot(Td.get(this))}:function(...e){return Ot(t.apply(Fi(this),e))}}function b_(t){return typeof t=="function"?I_(t):(t instanceof IDBTransaction&&S_(t),y_(t,v_())?new Proxy(t,go):t)}function Ot(t){if(t instanceof IDBRequest)return E_(t);if(Li.has(t))return Li.get(t);const e=b_(t);return e!==t&&(Li.set(t,e),oa.set(e,t)),e}const Fi=t=>oa.get(t);function T_(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Ot(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ot(o.result),l.oldVersion,l.newVersion,Ot(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const x_=["get","getKey","getAll","getAllKeys","count"],k_=["put","add","delete","clear"],$i=new Map;function tc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($i.get(e))return $i.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=k_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||x_.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return $i.set(e,i),i}C_(t=>({...t,get:(e,n,r)=>tc(e,n)||t.get(e,n,r),has:(e,n)=>!!tc(e,n)||t.has(e,n)}));/**
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
 */class R_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(A_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function A_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _o="@firebase/app",nc="0.9.13";/**
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
 */const rn=new ia("@firebase/app"),N_="@firebase/app-compat",P_="@firebase/analytics-compat",O_="@firebase/analytics",D_="@firebase/app-check-compat",M_="@firebase/app-check",L_="@firebase/auth",F_="@firebase/auth-compat",$_="@firebase/database",U_="@firebase/database-compat",j_="@firebase/functions",B_="@firebase/functions-compat",W_="@firebase/installations",V_="@firebase/installations-compat",H_="@firebase/messaging",z_="@firebase/messaging-compat",q_="@firebase/performance",G_="@firebase/performance-compat",K_="@firebase/remote-config",Y_="@firebase/remote-config-compat",Q_="@firebase/storage",J_="@firebase/storage-compat",X_="@firebase/firestore",Z_="@firebase/firestore-compat",ey="firebase",ty="9.23.0";/**
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
 */const yo="[DEFAULT]",ny={[_o]:"fire-core",[N_]:"fire-core-compat",[O_]:"fire-analytics",[P_]:"fire-analytics-compat",[M_]:"fire-app-check",[D_]:"fire-app-check-compat",[L_]:"fire-auth",[F_]:"fire-auth-compat",[$_]:"fire-rtdb",[U_]:"fire-rtdb-compat",[j_]:"fire-fn",[B_]:"fire-fn-compat",[W_]:"fire-iid",[V_]:"fire-iid-compat",[H_]:"fire-fcm",[z_]:"fire-fcm-compat",[q_]:"fire-perf",[G_]:"fire-perf-compat",[K_]:"fire-rc",[Y_]:"fire-rc-compat",[Q_]:"fire-gcs",[J_]:"fire-gcs-compat",[X_]:"fire-fst",[Z_]:"fire-fst-compat","fire-js":"fire-js",[ey]:"fire-js-all"};/**
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
 */const As=new Map,vo=new Map;function ry(t,e){try{t.container.addComponent(e)}catch(n){rn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Tn(t){const e=t.name;if(vo.has(e))return rn.debug(`There were multiple attempts to register component ${e}.`),!1;vo.set(e,t);for(const n of As.values())ry(n,t);return!0}function aa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const sy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Dt=new Pr("app","Firebase",sy);/**
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
 */class iy{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
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
 */const Un=ty;function kd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:yo,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Dt.create("bad-app-name",{appName:String(s)});if(n||(n=Sd()),!n)throw Dt.create("no-options");const i=As.get(s);if(i){if(Rs(n,i.options)&&Rs(r,i.config))return i;throw Dt.create("duplicate-app",{appName:s})}const o=new f_(s);for(const l of vo.values())o.addComponent(l);const a=new iy(n,r,o);return As.set(s,a),a}function Rd(t=yo){const e=As.get(t);if(!e&&t===yo&&Sd())return kd();if(!e)throw Dt.create("no-app",{appName:t});return e}function Mt(t,e,n){var r;let s=(r=ny[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rn.warn(a.join(" "));return}Tn(new nn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const oy="firebase-heartbeat-database",ay=1,vr="firebase-heartbeat-store";let Ui=null;function Ad(){return Ui||(Ui=T_(oy,ay,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(vr)}}}).catch(t=>{throw Dt.create("idb-open",{originalErrorMessage:t.message})})),Ui}async function ly(t){try{return await(await Ad()).transaction(vr).objectStore(vr).get(Nd(t))}catch(e){if(e instanceof Bt)rn.warn(e.message);else{const n=Dt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rn.warn(n.message)}}}async function rc(t,e){try{const r=(await Ad()).transaction(vr,"readwrite");await r.objectStore(vr).put(e,Nd(t)),await r.done}catch(n){if(n instanceof Bt)rn.warn(n.message);else{const r=Dt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rn.warn(r.message)}}}function Nd(t){return`${t.name}!${t.options.appId}`}/**
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
 */const cy=1024,uy=30*24*60*60*1e3;class dy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fy(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=sc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=uy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=sc(),{heartbeatsToSend:n,unsentEntries:r}=hy(this._heartbeatsCache.heartbeats),s=Ts(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function sc(){return new Date().toISOString().substring(0,10)}function hy(t,e=cy){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ic(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ic(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xg()?Zg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ly(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return rc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return rc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ic(t){return Ts(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function py(t){Tn(new nn("platform-logger",e=>new R_(e),"PRIVATE")),Tn(new nn("heartbeat",e=>new dy(e),"PRIVATE")),Mt(_o,nc,t),Mt(_o,nc,"esm2017"),Mt("fire-js","")}py("");function la(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Pd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const my=Pd,Od=new Pr("auth","Firebase",Pd());/**
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
 */const Ns=new ia("@firebase/auth");function gy(t,...e){Ns.logLevel<=V.WARN&&Ns.warn(`Auth (${Un}): ${t}`,...e)}function ds(t,...e){Ns.logLevel<=V.ERROR&&Ns.error(`Auth (${Un}): ${t}`,...e)}/**
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
 */function ze(t,...e){throw ca(t,...e)}function st(t,...e){return ca(t,...e)}function Dd(t,e,n){const r=Object.assign(Object.assign({},my()),{[e]:n});return new Pr("auth","Firebase",r).create(e,{appName:t.name})}function Md(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ze(t,"argument-error"),Dd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ca(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Od.create(t,...e)}function R(t,e,...n){if(!t)throw ca(e,...n)}function ft(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ds(e),new Error(e)}function vt(t,e){t||ft(e)}/**
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
 */function Ps(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ld(){return oc()==="http:"||oc()==="https:"}function oc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function _y(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ld()||Yg()||"connection"in navigator)?navigator.onLine:!0}function yy(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Or{constructor(e,n){this.shortDelay=e,this.longDelay=n,vt(n>e,"Short delay should be less than long delay!"),this.isMobile=sa()||Id()}get(){return _y()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ua(t,e){vt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Fd{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const vy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const wy=new Or(3e4,6e4);function Wt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Et(t,e,n,r,s={}){return $d(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=$n(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Fd.fetch()(Ud(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function $d(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},vy),e);try{const s=new Ey(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Yr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Yr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Yr(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Dd(t,u,c);ze(t,u)}}catch(s){if(s instanceof Bt)throw s;ze(t,"network-request-failed",{message:String(s)})}}async function Dr(t,e,n,r,s={}){const i=await Et(t,e,n,r,s);return"mfaPendingCredential"in i&&ze(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ud(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ua(t.config,s):`${t.config.apiScheme}://${s}`}class Ey{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(st(this.auth,"network-request-failed")),wy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Yr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=st(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Sy(t,e){return Et(t,"POST","/v1/accounts:delete",e)}async function Cy(t,e){return Et(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function or(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Iy(t,e=!1){const n=ne(t),r=await n.getIdToken(e),s=da(r);R(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:or(ji(s.auth_time)),issuedAtTime:or(ji(s.iat)),expirationTime:or(ji(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ji(t){return Number(t)*1e3}function da(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ds("JWT malformed, contained fewer than 3 sections"),null;try{const s=xs(n);return s?JSON.parse(s):(ds("Failed to decode base64 JWT payload"),null)}catch(s){return ds("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function by(t){const e=da(t);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function xn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bt&&Ty(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ty({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class xy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class jd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=or(this.lastLoginAt),this.creationTime=or(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Os(t){var e;const n=t.auth,r=await t.getIdToken(),s=await xn(t,Cy(n,{idToken:r}));R(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ay(i.providerUserInfo):[],a=Ry(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new jd(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function ky(t){const e=ne(t);await Os(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ry(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ay(t){return t.map(e=>{var{providerId:n}=e,r=la(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Ny(t,e){const n=await $d(t,{},async()=>{const r=$n({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Ud(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Fd.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class wr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):by(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return R(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Ny(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new wr;return r&&(R(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(R(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(R(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wr,this.toJSON())}_performRefresh(){return ft("not implemented")}}/**
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
 */function Ct(t,e){R(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=la(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new jd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await xn(this,this.stsTokenManager.getToken(this.auth,e));return R(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Iy(this,e)}reload(){return ky(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Os(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await xn(this,Sy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,W=(c=n.createdAt)!==null&&c!==void 0?c:void 0,M=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:oe,emailVerified:E,isAnonymous:z,providerData:Ke,stsTokenManager:Ze}=n;R(oe&&Ze,e,"internal-error");const Ht=wr.fromJSON(this.name,Ze);R(typeof oe=="string",e,"internal-error"),Ct(d,e.name),Ct(f,e.name),R(typeof E=="boolean",e,"internal-error"),R(typeof z=="boolean",e,"internal-error"),Ct(p,e.name),Ct(m,e.name),Ct(S,e.name),Ct(k,e.name),Ct(W,e.name),Ct(M,e.name);const at=new tn({uid:oe,auth:e,email:f,emailVerified:E,displayName:d,isAnonymous:z,photoURL:m,phoneNumber:p,tenantId:S,stsTokenManager:Ht,createdAt:W,lastLoginAt:M});return Ke&&Array.isArray(Ke)&&(at.providerData=Ke.map(ae=>Object.assign({},ae))),k&&(at._redirectEventId=k),at}static async _fromIdTokenResponse(e,n,r=!1){const s=new wr;s.updateFromServerResponse(n);const i=new tn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Os(i),i}}/**
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
 */const ac=new Map;function pt(t){vt(t instanceof Function,"Expected a class definition");let e=ac.get(t);return e?(vt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ac.set(t,e),e)}/**
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
 */class Bd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Bd.type="NONE";const lc=Bd;/**
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
 */function hs(t,e,n){return`firebase:${t}:${e}:${n}`}class En{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=hs(this.userKey,s.apiKey,i),this.fullPersistenceKey=hs("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new En(pt(lc),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||pt(lc);const o=hs(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=tn._fromJSON(e,u);c!==i&&(a=d),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new En(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new En(i,e,r))}}/**
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
 */function cc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qd(e))return"Blackberry";if(Gd(e))return"Webos";if(ha(e))return"Safari";if((e.includes("chrome/")||Vd(e))&&!e.includes("edge/"))return"Chrome";if(zd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Wd(t=we()){return/firefox\//i.test(t)}function ha(t=we()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vd(t=we()){return/crios\//i.test(t)}function Hd(t=we()){return/iemobile/i.test(t)}function zd(t=we()){return/android/i.test(t)}function qd(t=we()){return/blackberry/i.test(t)}function Gd(t=we()){return/webos/i.test(t)}function ii(t=we()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Py(t=we()){var e;return ii(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Oy(){return Qg()&&document.documentMode===10}function Kd(t=we()){return ii(t)||zd(t)||Gd(t)||qd(t)||/windows phone/i.test(t)||Hd(t)}function Dy(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Yd(t,e=[]){let n;switch(t){case"Browser":n=cc(we());break;case"Worker":n=`${cc(we())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Un}/${r}`}async function Qd(t,e){return Et(t,"GET","/v2/recaptchaConfig",Wt(t,e))}function uc(t){return t!==void 0&&t.enterprise!==void 0}class Jd{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function My(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Xd(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=st("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",My().appendChild(r)})}function Ly(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Fy="https://www.google.com/recaptcha/enterprise.js?render=",$y="recaptcha-enterprise",Uy="NO_RECAPTCHA";class Zd{constructor(e){this.type=$y,this.auth=Vt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Qd(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Jd(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;uc(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(Uy)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&uc(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Xd(Fy+a).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function kn(t,e,n,r=!1){const s=new Zd(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class jy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class By{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dc(this),this.idTokenSubscription=new dc(this),this.beforeStateQueue=new jy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Od,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await En.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Os(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ne(e):null;return n&&R(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pt(e))})}async initializeRecaptchaConfig(){const e=await Qd(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Jd(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Zd(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pt(e)||this._popupRedirectResolver;R(n,this,"argument-error"),this.redirectPersistenceManager=await En.create(this,[pt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return R(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&gy(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vt(t){return ne(t)}class dc{constructor(e){this.auth=e,this.observer=null,this.addObserver=o_(n=>this.observer=n)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Wy(t,e){const n=aa(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Rs(i,e??{}))return s;ze(s,"already-initialized")}return n.initialize({options:e})}function Vy(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Hy(t,e,n){const r=Vt(t);R(r._canInitEmulator,r,"emulator-config-failed"),R(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=eh(e),{host:o,port:a}=zy(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),qy()}function eh(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zy(t){const e=eh(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:hc(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:hc(o)}}}function hc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qy(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class fa{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ft("not implemented")}_getIdTokenResponse(e){return ft("not implemented")}_linkToIdToken(e,n){return ft("not implemented")}_getReauthenticationResolver(e){return ft("not implemented")}}async function Gy(t,e){return Et(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Bi(t,e){return Dr(t,"POST","/v1/accounts:signInWithPassword",Wt(t,e))}async function th(t,e){return Et(t,"POST","/v1/accounts:sendOobCode",Wt(t,e))}async function Ky(t,e){return th(t,e)}async function Wi(t,e){return th(t,e)}/**
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
 */async function Yy(t,e){return Dr(t,"POST","/v1/accounts:signInWithEmailLink",Wt(t,e))}async function Qy(t,e){return Dr(t,"POST","/v1/accounts:signInWithEmailLink",Wt(t,e))}/**
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
 */class Er extends fa{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Er(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Er(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await kn(e,r,"signInWithPassword");return Bi(e,s)}else return Bi(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await kn(e,r,"signInWithPassword");return Bi(e,i)}else return Promise.reject(s)});case"emailLink":return Yy(e,{email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Gy(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Qy(e,{idToken:n,email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Sn(t,e){return Dr(t,"POST","/v1/accounts:signInWithIdp",Wt(t,e))}/**
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
 */const Jy="http://localhost";class sn extends fa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new sn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ze("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=la(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new sn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Sn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Sn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Sn(e,n)}buildRequest(){const e={requestUri:Jy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$n(n)}return e}}/**
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
 */function Xy(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Zy(t){const e=nr(rr(t)).link,n=e?nr(rr(e)).deep_link_id:null,r=nr(rr(t)).deep_link_id;return(r?nr(rr(r)).link:null)||r||n||e||t}class pa{constructor(e){var n,r,s,i,o,a;const l=nr(rr(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,d=Xy((s=l.mode)!==null&&s!==void 0?s:null);R(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Zy(e);try{return new pa(n)}catch{return null}}}/**
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
 */class jn{constructor(){this.providerId=jn.PROVIDER_ID}static credential(e,n){return Er._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=pa.parseLink(n);return R(r,"argument-error"),Er._fromEmailAndCode(e,r.code,r.tenantId)}}jn.PROVIDER_ID="password";jn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";jn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class oi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mr extends oi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Tt extends Mr{constructor(){super("facebook.com")}static credential(e){return sn._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch{return null}}}Tt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tt.PROVIDER_ID="facebook.com";/**
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
 */class ht extends Mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return sn._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ht.credential(n,r)}catch{return null}}}ht.GOOGLE_SIGN_IN_METHOD="google.com";ht.PROVIDER_ID="google.com";/**
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
 */class xt extends Mr{constructor(){super("github.com")}static credential(e){return sn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch{return null}}}xt.GITHUB_SIGN_IN_METHOD="github.com";xt.PROVIDER_ID="github.com";/**
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
 */class kt extends Mr{constructor(){super("twitter.com")}static credential(e,n){return sn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return kt.credential(n,r)}catch{return null}}}kt.TWITTER_SIGN_IN_METHOD="twitter.com";kt.PROVIDER_ID="twitter.com";/**
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
 */async function Vi(t,e){return Dr(t,"POST","/v1/accounts:signUp",Wt(t,e))}/**
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
 */class on{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await tn._fromIdTokenResponse(e,r,s),o=fc(r);return new on({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=fc(r);return new on({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function fc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ds extends Bt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ds.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ds(e,n,r,s)}}function nh(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ds._fromErrorAndOperation(t,i,e,r):i})}async function ev(t,e,n=!1){const r=await xn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return on._forOperation(t,"link",r)}/**
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
 */async function tv(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await xn(t,nh(r,s,e,t),n);R(i.idToken,r,"internal-error");const o=da(i.idToken);R(o,r,"internal-error");const{sub:a}=o;return R(t.uid===a,r,"user-mismatch"),on._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ze(r,"user-mismatch"),i}}/**
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
 */async function rh(t,e,n=!1){const r="signIn",s=await nh(t,r,e),i=await on._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function nv(t,e){return rh(Vt(t),e)}/**
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
 */async function rv(t,e,n){var r;const s=Vt(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await kn(s,i,"getOobCode",!0);await Wi(s,o)}else await Wi(s,i).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await kn(s,i,"getOobCode",!0);await Wi(s,a)}else return Promise.reject(o)})}async function sv(t,e,n){var r;const s=Vt(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const c=await kn(s,i,"signUpPassword");o=Vi(s,c)}else o=Vi(s,i).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await kn(s,i,"signUpPassword");return Vi(s,u)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await on._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(l.user),l}function iv(t,e,n){return nv(ne(t),jn.credential(e,n))}/**
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
 */async function ov(t,e){return Et(t,"POST","/v1/accounts:createAuthUri",Wt(t,e))}/**
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
 */async function av(t,e){const n=Ld()?Ps():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:s}=await ov(ne(t),r);return s||[]}async function pc(t,e){const n=ne(t),s={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:i}=await Ky(n.auth,s);i!==t.email&&await t.reload()}/**
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
 */async function lv(t,e){return Et(t,"POST","/v1/accounts:update",e)}/**
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
 */async function mc(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ne(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await xn(r,lv(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function cv(t,e,n,r){return ne(t).onIdTokenChanged(e,n,r)}function uv(t,e,n){return ne(t).beforeAuthStateChanged(e,n)}function dv(t,e,n,r){return ne(t).onAuthStateChanged(e,n,r)}function hv(t){return ne(t).signOut()}async function fv(t){return ne(t).delete()}const Ms="__sak";/**
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
 */class sh{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ms,"1"),this.storage.removeItem(Ms),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function pv(){const t=we();return ha(t)||ii(t)}const mv=1e3,gv=10;class ih extends sh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pv()&&Dy(),this.fallbackToPolling=Kd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Oy()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,gv):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ih.type="LOCAL";const _v=ih;/**
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
 */class oh extends sh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}oh.type="SESSION";const ah=oh;/**
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
 */function yv(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ai{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ai(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await yv(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ai.receivers=[];/**
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
 */function ma(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class vv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=ma("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function it(){return window}function wv(t){it().location.href=t}/**
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
 */function lh(){return typeof it().WorkerGlobalScope<"u"&&typeof it().importScripts=="function"}async function Ev(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Sv(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Cv(){return lh()?self:null}/**
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
 */const ch="firebaseLocalStorageDb",Iv=1,Ls="firebaseLocalStorage",uh="fbase_key";class Lr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function li(t,e){return t.transaction([Ls],e?"readwrite":"readonly").objectStore(Ls)}function bv(){const t=indexedDB.deleteDatabase(ch);return new Lr(t).toPromise()}function wo(){const t=indexedDB.open(ch,Iv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ls,{keyPath:uh})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ls)?e(r):(r.close(),await bv(),e(await wo()))})})}async function gc(t,e,n){const r=li(t,!0).put({[uh]:e,value:n});return new Lr(r).toPromise()}async function Tv(t,e){const n=li(t,!1).get(e),r=await new Lr(n).toPromise();return r===void 0?null:r.value}function _c(t,e){const n=li(t,!0).delete(e);return new Lr(n).toPromise()}const xv=800,kv=3;class dh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>kv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ai._getInstance(Cv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ev(),!this.activeServiceWorker)return;this.sender=new vv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Sv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wo();return await gc(e,Ms,"1"),await _c(e,Ms),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>gc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Tv(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_c(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=li(s,!1).getAll();return new Lr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dh.type="LOCAL";const Rv=dh;new Or(3e4,6e4);/**
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
 */function ga(t,e){return e?pt(e):(R(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class _a extends fa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Sn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Sn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Sn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Av(t){return rh(t.auth,new _a(t),t.bypassAuthState)}function Nv(t){const{auth:e,user:n}=t;return R(n,e,"internal-error"),tv(n,new _a(t),t.bypassAuthState)}async function Pv(t){const{auth:e,user:n}=t;return R(n,e,"internal-error"),ev(n,new _a(t),t.bypassAuthState)}/**
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
 */class hh{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Av;case"linkViaPopup":case"linkViaRedirect":return Pv;case"reauthViaPopup":case"reauthViaRedirect":return Nv;default:ze(this.auth,"internal-error")}}resolve(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ov=new Or(2e3,1e4);async function Dv(t,e,n){const r=Vt(t);Md(t,e,oi);const s=ga(r,n);return new Nt(r,"signInViaPopup",e,s).executeNotNull()}async function Mv(t,e,n){const r=ne(t);Md(r.auth,e,oi);const s=ga(r.auth,n);return new Nt(r.auth,"linkViaPopup",e,s,r).executeNotNull()}class Nt extends hh{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Nt.currentPopupAction&&Nt.currentPopupAction.cancel(),Nt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){vt(this.filter.length===1,"Popup operations only handle one event");const e=ma();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(st(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(st(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(st(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ov.get())};e()}}Nt.currentPopupAction=null;/**
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
 */const Lv="pendingRedirect",fs=new Map;class Fv extends hh{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fs.get(this.auth._key());if(!e){try{const r=await $v(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fs.set(this.auth._key(),e)}return this.bypassAuthState||fs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $v(t,e){const n=Bv(e),r=jv(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Uv(t,e){fs.set(t._key(),e)}function jv(t){return pt(t._redirectPersistence)}function Bv(t){return hs(Lv,t.config.apiKey,t.name)}async function Wv(t,e,n=!1){const r=Vt(t),s=ga(r,e),o=await new Fv(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Vv=10*60*1e3;class Hv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zv(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!fh(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(st(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Vv&&this.cachedEventUids.clear(),this.cachedEventUids.has(yc(e))}saveEventToCache(e){this.cachedEventUids.add(yc(e)),this.lastProcessedEventTime=Date.now()}}function yc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zv(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fh(t);default:return!1}}/**
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
 */async function qv(t,e={}){return Et(t,"GET","/v1/projects",e)}/**
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
 */const Gv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kv=/^https?/;async function Yv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qv(t);for(const n of e)try{if(Qv(n))return}catch{}ze(t,"unauthorized-domain")}function Qv(t){const e=Ps(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Kv.test(n))return!1;if(Gv.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Jv=new Or(3e4,6e4);function vc(){const t=it().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Xv(t){return new Promise((e,n)=>{var r,s,i;function o(){vc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vc(),n(st(t,"network-request-failed"))},timeout:Jv.get()})}if(!((s=(r=it().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=it().gapi)===null||i===void 0)&&i.load)o();else{const a=Ly("iframefcb");return it()[a]=()=>{gapi.load?o():n(st(t,"network-request-failed"))},Xd(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ps=null,e})}let ps=null;function Zv(t){return ps=ps||Xv(t),ps}/**
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
 */const ew=new Or(5e3,15e3),tw="__/auth/iframe",nw="emulator/auth/iframe",rw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iw(t){const e=t.config;R(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ua(e,nw):`https://${t.config.authDomain}/${tw}`,r={apiKey:e.apiKey,appName:t.name,v:Un},s=sw.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${$n(r).slice(1)}`}async function ow(t){const e=await Zv(t),n=it().gapi;return R(n,t,"internal-error"),e.open({where:document.body,url:iw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=st(t,"network-request-failed"),a=it().setTimeout(()=>{i(o)},ew.get());function l(){it().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const aw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lw=500,cw=600,uw="_blank",dw="http://localhost";class wc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hw(t,e,n,r=lw,s=cw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},aw),{width:r.toString(),height:s.toString(),top:i,left:o}),c=we().toLowerCase();n&&(a=Vd(c)?uw:n),Wd(c)&&(e=e||dw,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[p,m])=>`${f}${p}=${m},`,"");if(Py(c)&&a!=="_self")return fw(e||"",a),new wc(null);const d=window.open(e||"",a,u);R(d,t,"popup-blocked");try{d.focus()}catch{}return new wc(d)}function fw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const pw="__/auth/handler",mw="emulator/auth/handler",gw=encodeURIComponent("fac");async function Ec(t,e,n,r,s,i){R(t.config.authDomain,t,"auth-domain-config-required"),R(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Un,eventId:s};if(e instanceof oi){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",po(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof Mr){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${gw}=${encodeURIComponent(l)}`:"";return`${_w(t)}?${$n(a).slice(1)}${c}`}function _w({config:t}){return t.emulator?ua(t,mw):`https://${t.authDomain}/${pw}`}/**
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
 */const Hi="webStorageSupport";class yw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ah,this._completeRedirectFn=Wv,this._overrideRedirectResult=Uv}async _openPopup(e,n,r,s){var i;vt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ec(e,n,r,Ps(),s);return hw(e,o,ma())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ec(e,n,r,Ps(),s);return wv(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(vt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ow(e),r=new Hv(e);return n.register("authEvent",s=>(R(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hi,{type:Hi},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Hi];o!==void 0&&n(!!o),ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Yv(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Kd()||ha()||ii()}}const vw=yw;var Sc="@firebase/auth",Cc="0.23.2";/**
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
 */class ww{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ew(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Sw(t){Tn(new nn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;R(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yd(t)},c=new By(r,s,i,l);return Vy(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Tn(new nn("auth-internal",e=>{const n=Vt(e.getProvider("auth").getImmediate());return(r=>new ww(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mt(Sc,Cc,Ew(t)),Mt(Sc,Cc,"esm2017")}/**
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
 */const Cw=5*60,Iw=Cd("authIdTokenMaxAge")||Cw;let Ic=null;const bw=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Iw)return;const s=n==null?void 0:n.token;Ic!==s&&(Ic=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Tw(t=Rd()){const e=aa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Wy(t,{popupRedirectResolver:vw,persistence:[Rv,_v,ah]}),r=Cd("authTokenSyncURL");if(r){const i=bw(r);uv(n,i,()=>i(n.currentUser)),cv(n,o=>i(o))}const s=Ed("auth");return s&&Hy(n,`http://${s}`),n}Sw("Browser");var xw="firebase",kw="9.23.0";/**
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
 */Mt(xw,kw,"app");var bc={};const Tc="@firebase/database",xc="0.14.4";/**
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
 */let ph="";function Rw(t){ph=t}/**
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
 */class Aw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),de(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:yr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Nw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ot(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const mh=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Aw(e)}}catch{}return new Nw},Zt=mh("localStorage"),Pw=mh("sessionStorage");/**
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
 */const Cn=new ia("@firebase/database"),Ow=function(){let t=1;return function(){return t++}}(),gh=function(t){const e=c_(t),n=new i_;n.update(e);const r=n.digest();return na.encodeByteArray(r)},Fr=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Fr.apply(null,r):typeof r=="object"?e+=de(r):e+=r,e+=" "}return e};let ar=null,kc=!0;const Dw=function(t,e){_(!0,"Can't turn on custom loggers persistently."),Cn.logLevel=V.VERBOSE,ar=Cn.log.bind(Cn)},me=function(...t){if(kc===!0&&(kc=!1,ar===null&&Pw.get("logging_enabled")===!0&&Dw()),ar){const e=Fr.apply(null,t);ar(e)}},$r=function(t){return function(...e){me(t,...e)}},Eo=function(...t){const e="FIREBASE INTERNAL ERROR: "+Fr(...t);Cn.error(e)},wt=function(...t){const e=`FIREBASE FATAL ERROR: ${Fr(...t)}`;throw Cn.error(e),new Error(e)},be=function(...t){const e="FIREBASE WARNING: "+Fr(...t);Cn.warn(e)},Mw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&be("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ya=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Lw=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Rn="[MIN_NAME]",an="[MAX_NAME]",un=function(t,e){if(t===e)return 0;if(t===Rn||e===an)return-1;if(e===Rn||t===an)return 1;{const n=Rc(t),r=Rc(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Fw=function(t,e){return t===e?0:t<e?-1:1},qn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+de(e))},va=function(t){if(typeof t!="object"||t===null)return de(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=de(e[r]),n+=":",n+=va(t[e[r]]);return n+="}",n},_h=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function ve(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const yh=function(t){_(!ya(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},$w=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Uw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function jw(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const Bw=new RegExp("^-?(0*)\\d{1,10}$"),Ww=-2147483648,Vw=2147483647,Rc=function(t){if(Bw.test(t)){const e=Number(t);if(e>=Ww&&e<=Vw)return e}return null},Bn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw be("Exception was thrown by user callback.",n),e},Math.floor(0))}},Hw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},lr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class zw{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){be(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class qw{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(me("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',be(e)}}class ms{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ms.OWNER="owner";/**
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
 */const wa="5",vh="v",wh="s",Eh="r",Sh="f",Ch=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ih="ls",bh="p",So="ac",Th="websocket",xh="long_polling";/**
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
 */class kh{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Zt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Zt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Gw(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Rh(t,e,n){_(typeof e=="string","typeof type must == string"),_(typeof n=="object","typeof params must == object");let r;if(e===Th)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===xh)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Gw(t)&&(n.ns=t.namespace);const s=[];return ve(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
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
 */class Kw{constructor(){this.counters_={}}incrementCounter(e,n=1){ot(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Bg(this.counters_)}}/**
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
 */const zi={},qi={};function Ea(t){const e=t.toString();return zi[e]||(zi[e]=new Kw),zi[e]}function Yw(t,e){const n=t.toString();return qi[n]||(qi[n]=e()),qi[n]}/**
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
 */class Qw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Bn(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Ac="start",Jw="close",Xw="pLPCommand",Zw="pRTLPCB",Ah="id",Nh="pw",Ph="ser",eE="cb",tE="seg",nE="ts",rE="d",sE="dframe",Oh=1870,Dh=30,iE=Oh-Dh,oE=25e3,aE=3e4;class yn{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=$r(e),this.stats_=Ea(n),this.urlFn=l=>(this.appCheckToken&&(l[So]=this.appCheckToken),Rh(n,xh,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Qw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(aE)),Lw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Sa((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ac)this.id=a,this.password=l;else if(o===Jw)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Ac]="t",r[Ph]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[eE]=this.scriptTagHolder.uniqueCallbackIdentifier),r[vh]=wa,this.transportSessionId&&(r[wh]=this.transportSessionId),this.lastSessionId&&(r[Ih]=this.lastSessionId),this.applicationId&&(r[bh]=this.applicationId),this.appCheckToken&&(r[So]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ch.test(location.hostname)&&(r[Eh]=Sh);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){yn.forceAllow_=!0}static forceDisallow(){yn.forceDisallow_=!0}static isAvailable(){return yn.forceAllow_?!0:!yn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!$w()&&!Uw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=de(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=vd(n),s=_h(r,iE);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[sE]="t",r[Ah]=e,r[Nh]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=de(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Sa{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ow(),window[Xw+this.uniqueCallbackIdentifier]=e,window[Zw+this.uniqueCallbackIdentifier]=n,this.myIFrame=Sa.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){me("frame writing exception"),a.stack&&me(a.stack),me(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||me("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ah]=this.myID,e[Nh]=this.myPW,e[Ph]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Dh+r.length<=Oh;){const o=this.pendingSegs.shift();r=r+"&"+tE+s+"="+o.seg+"&"+nE+s+"="+o.ts+"&"+rE+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(oE)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{me("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const lE=16384,cE=45e3;let Fs=null;typeof MozWebSocket<"u"?Fs=MozWebSocket:typeof WebSocket<"u"&&(Fs=WebSocket);class Ye{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=$r(this.connId),this.stats_=Ea(n),this.connURL=Ye.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[vh]=wa,typeof location<"u"&&location.hostname&&Ch.test(location.hostname)&&(o[Eh]=Sh),n&&(o[wh]=n),r&&(o[Ih]=r),s&&(o[So]=s),i&&(o[bh]=i),Rh(e,Th,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Zt.set("previous_websocket_failure",!0);try{let r;Jg(),this.mySock=new Fs(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Ye.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Fs!==null&&!Ye.forceDisallow_}static previouslyFailed(){return Zt.isInMemoryStorage||Zt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Zt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=yr(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(_(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=de(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=_h(n,lE);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(cE))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ye.responsesRequiredToBeHealthy=2;Ye.healthyTimeout=3e4;/**
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
 */class Sr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[yn,Ye]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ye&&Ye.isAvailable();let r=n&&!Ye.previouslyFailed();if(e.webSocketOnly&&(n||be("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Ye];else{const s=this.transports_=[];for(const i of Sr.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Sr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Sr.globalTransportInitialized_=!1;/**
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
 */const uE=6e4,dE=5e3,hE=10*1024,fE=100*1024,Gi="t",Nc="d",pE="s",Pc="r",mE="e",Oc="o",Dc="a",Mc="n",Lc="p",gE="h";class _E{constructor(e,n,r,s,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=$r("c:"+this.id+":"),this.transportManager_=new Sr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=lr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>fE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>hE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Gi in e){const n=e[Gi];n===Dc?this.upgradeIfSecondaryHealthy_():n===Pc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Oc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=qn("t",e),r=qn("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Lc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Dc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Mc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=qn("t",e),r=qn("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=qn(Gi,e);if(Nc in e){const r=e[Nc];if(n===gE){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Mc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===pE?this.onConnectionShutdown_(r):n===Pc?this.onReset_(r):n===mE?Eo("Server Error: "+r):n===Oc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Eo("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),wa!==r&&be("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),lr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(uE))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):lr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(dE))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Lc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Zt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Mh{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Lh{constructor(e){this.allowedEvents_=e,this.listeners_={},_(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){_(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class $s extends Lh{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!sa()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new $s}getInitialEvent(e){return _(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Fc=32,$c=768;class H{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function B(){return new H("")}function P(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function $t(t){return t.pieces_.length-t.pieceNum_}function Q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new H(t.pieces_,e)}function Ca(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function yE(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Cr(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Fh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new H(e,0)}function ee(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof H)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new H(n,0)}function L(t){return t.pieceNum_>=t.pieces_.length}function Ie(t,e){const n=P(t),r=P(e);if(n===null)return e;if(n===r)return Ie(Q(t),Q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function vE(t,e){const n=Cr(t,0),r=Cr(e,0);for(let s=0;s<n.length&&s<r.length;s++){const i=un(n[s],r[s]);if(i!==0)return i}return n.length===r.length?0:n.length<r.length?-1:1}function Ia(t,e){if($t(t)!==$t(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function He(t,e){let n=t.pieceNum_,r=e.pieceNum_;if($t(t)>$t(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class wE{constructor(e,n){this.errorPrefix_=n,this.parts_=Cr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=si(this.parts_[r]);$h(this)}}function EE(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=si(e),$h(t)}function SE(t){const e=t.parts_.pop();t.byteLength_-=si(e),t.parts_.length>0&&(t.byteLength_-=1)}function $h(t){if(t.byteLength_>$c)throw new Error(t.errorPrefix_+"has a key path longer than "+$c+" bytes ("+t.byteLength_+").");if(t.parts_.length>Fc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Fc+") or object contains a cycle "+qt(t))}function qt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class ba extends Lh{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new ba}getInitialEvent(e){return _(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Gn=1e3,CE=60*5*1e3,Uc=30*1e3,IE=1.3,bE=3e4,TE="server_kill",jc=3;class gt extends Mh{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=gt.nextPersistentConnectionId_++,this.log_=$r("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Gn,this.maxReconnectDelay_=CE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ba.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&$s.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(de(i)),_(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new Nr,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),_(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;gt.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ot(e,"w")){const r=bn(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();be(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||s_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Uc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=r_(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+de(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Eo("Unrecognized action received from server: "+de(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){_(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Gn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Gn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>bE&&(this.reconnectDelay_=Gn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*IE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+gt.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){_(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?me("getToken() completed but was canceled"):(me("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new _E(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{be(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(TE)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&be(d),l())}}}interrupt(e){me("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){me("Resuming connection for reason: "+e),delete this.interruptReasons_[e],po(this.interruptReasons_)&&(this.reconnectDelay_=Gn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>va(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new H(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){me("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=jc&&(this.reconnectDelay_=Uc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){me("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=jc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ph.replace(/\./g,"-")]=1,sa()?e["framework.cordova"]=1:Id()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=$s.getInstance().currentlyOnline();return po(this.interruptReasons_)&&e}}gt.nextPersistentConnectionId_=0;gt.nextConnectionId_=0;/**
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
 */class D{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new D(e,n)}}/**
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
 */class ci{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new D(Rn,e),s=new D(Rn,n);return this.compare(r,s)!==0}minPost(){return D.MIN}}/**
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
 */let Qr;class Uh extends ci{static get __EMPTY_NODE(){return Qr}static set __EMPTY_NODE(e){Qr=e}compare(e,n){return un(e.name,n.name)}isDefinedOn(e){throw Fn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return D.MIN}maxPost(){return new D(an,Qr)}makePost(e,n){return _(typeof e=="string","KeyIndex indexValue must always be a string."),new D(e,Qr)}toString(){return".key"}}const In=new Uh;/**
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
 */class Jr{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class fe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??fe.RED,this.left=s??Pe.EMPTY_NODE,this.right=i??Pe.EMPTY_NODE}copy(e,n,r,s,i){return new fe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Pe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Pe.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}fe.RED=!0;fe.BLACK=!1;class xE{copy(e,n,r,s,i){return this}insert(e,n,r){return new fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Pe{constructor(e,n=Pe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Pe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,fe.BLACK,null,null))}remove(e){return new Pe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,fe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Jr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Jr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Jr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Jr(this.root_,null,this.comparator_,!0,e)}}Pe.EMPTY_NODE=new xE;/**
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
 */function kE(t,e){return un(t.name,e.name)}function Ta(t,e){return un(t,e)}/**
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
 */let Co;function RE(t){Co=t}const jh=function(t){return typeof t=="number"?"number:"+yh(t):"string:"+t},Bh=function(t){if(t.isLeafNode()){const e=t.val();_(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ot(e,".sv"),"Priority must be a string or number.")}else _(t===Co||t.isEmpty(),"priority of unexpected type.");_(t===Co||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Bc;class he{constructor(e,n=he.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,_(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Bh(this.priorityNode_)}static set __childrenNodeConstructor(e){Bc=e}static get __childrenNodeConstructor(){return Bc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new he(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:he.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return L(e)?this:P(e)===".priority"?this.priorityNode_:he.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:he.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=P(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(_(r!==".priority"||$t(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,he.__childrenNodeConstructor.EMPTY_NODE.updateChild(Q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+jh(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=yh(this.value_):e+=this.value_,this.lazyHash_=gh(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===he.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof he.__childrenNodeConstructor?-1:(_(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=he.VALUE_TYPE_ORDER.indexOf(n),i=he.VALUE_TYPE_ORDER.indexOf(r);return _(s>=0,"Unknown leaf type: "+n),_(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}he.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Wh,Vh;function AE(t){Wh=t}function NE(t){Vh=t}class PE extends ci{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?un(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return D.MIN}maxPost(){return new D(an,new he("[PRIORITY-POST]",Vh))}makePost(e,n){const r=Wh(e);return new D(n,new he("[PRIORITY-POST]",r))}toString(){return".priority"}}const te=new PE;/**
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
 */const OE=Math.log(2);class DE{constructor(e){const n=i=>parseInt(Math.log(i)/OE,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Us=function(t,e,n,r){t.sort(e);const s=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=t[l],f=n?n(d):d,new fe(f,d.node,fe.BLACK,null,null);{const p=parseInt(u/2,10)+l,m=s(l,p),S=s(p+1,c);return d=t[p],f=n?n(d):d,new fe(f,d.node,fe.BLACK,m,S)}},i=function(l){let c=null,u=null,d=t.length;const f=function(m,S){const k=d-m,W=d;d-=m;const M=s(k+1,W),oe=t[k],E=n?n(oe):oe;p(new fe(E,oe.node,S,null,M))},p=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const S=l.nextBitIsOne(),k=Math.pow(2,l.count-(m+1));S?f(k,fe.BLACK):(f(k,fe.BLACK),f(k,fe.RED))}return u},o=new DE(t.length),a=i(o);return new Pe(r||e,a)};/**
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
 */let Ki;const mn={};class mt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return _(mn&&te,"ChildrenNode.ts has not been loaded"),Ki=Ki||new mt({".priority":mn},{".priority":te}),Ki}get(e){const n=bn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Pe?n:null}hasIndex(e){return ot(this.indexSet_,e.toString())}addIndex(e,n){_(e!==In,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(D.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Us(r,e.getCompare()):a=mn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new mt(u,c)}addToIndexes(e,n){const r=ks(this.indexes_,(s,i)=>{const o=bn(this.indexSet_,i);if(_(o,"Missing index implementation for "+i),s===mn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(D.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Us(a,o.getCompare())}else return mn;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new D(e.name,a))),l.insert(e,e.node)}});return new mt(r,this.indexSet_)}removeFromIndexes(e,n){const r=ks(this.indexes_,s=>{if(s===mn)return s;{const i=n.get(e.name);return i?s.remove(new D(e.name,i)):s}});return new mt(r,this.indexSet_)}}/**
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
 */let Kn;class x{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Bh(this.priorityNode_),this.children_.isEmpty()&&_(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Kn||(Kn=new x(new Pe(Ta),null,mt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Kn}updatePriority(e){return this.children_.isEmpty()?this:new x(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Kn:n}}getChild(e){const n=P(e);return n===null?this:this.getImmediateChild(n).getChild(Q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(_(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new D(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Kn:this.priorityNode_;return new x(s,o,i)}}updateChild(e,n){const r=P(e);if(r===null)return n;{_(P(e)!==".priority"||$t(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Q(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(te,(o,a)=>{n[o]=a.val(e),r++,i&&x.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+jh(this.getPriority().val())+":"),this.forEachChild(te,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":gh(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new D(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new D(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new D(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,D.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,D.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ur?-1:0}withIndex(e){if(e===In||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new x(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===In||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(te),s=n.getIterator(te);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===In?null:this.indexMap_.get(e.toString())}}x.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ME extends x{constructor(){super(new Pe(Ta),x.EMPTY_NODE,mt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return x.EMPTY_NODE}isEmpty(){return!1}}const Ur=new ME;Object.defineProperties(D,{MIN:{value:new D(Rn,x.EMPTY_NODE)},MAX:{value:new D(an,Ur)}});Uh.__EMPTY_NODE=x.EMPTY_NODE;he.__childrenNodeConstructor=x;RE(Ur);NE(Ur);/**
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
 */const LE=!0;function ue(t,e=null){if(t===null)return x.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),_(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new he(n,ue(e))}if(!(t instanceof Array)&&LE){const n=[];let r=!1;if(ve(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ue(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new D(o,l)))}}),n.length===0)return x.EMPTY_NODE;const i=Us(n,kE,o=>o.name,Ta);if(r){const o=Us(n,te.getCompare());return new x(i,ue(e),new mt({".priority":o},{".priority":te}))}else return new x(i,ue(e),mt.Default)}else{let n=x.EMPTY_NODE;return ve(t,(r,s)=>{if(ot(t,r)&&r.substring(0,1)!=="."){const i=ue(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(ue(e))}}AE(ue);/**
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
 */class FE extends ci{constructor(e){super(),this.indexPath_=e,_(!L(e)&&P(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?un(e.name,n.name):i}makePost(e,n){const r=ue(e),s=x.EMPTY_NODE.updateChild(this.indexPath_,r);return new D(n,s)}maxPost(){const e=x.EMPTY_NODE.updateChild(this.indexPath_,Ur);return new D(an,e)}toString(){return Cr(this.indexPath_,0).join("/")}}/**
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
 */class $E extends ci{compare(e,n){const r=e.node.compareTo(n.node);return r===0?un(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return D.MIN}maxPost(){return D.MAX}makePost(e,n){const r=ue(e);return new D(n,r)}toString(){return".value"}}const UE=new $E;/**
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
 */function Hh(t){return{type:"value",snapshotNode:t}}function An(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ir(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function br(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function jE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class xa{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){_(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ir(n,a)):_(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(An(n,r)):o.trackChildChange(br(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(te,(s,i)=>{n.hasChild(s)||r.trackChildChange(Ir(s,i))}),n.isLeafNode()||n.forEachChild(te,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(br(s,i,o))}else r.trackChildChange(An(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?x.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Tr{constructor(e){this.indexedFilter_=new xa(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Tr.getStartPost_(e),this.endPost_=Tr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new D(n,r))||(r=x.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=x.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(x.EMPTY_NODE);const i=this;return n.forEachChild(te,(o,a)=>{i.matches(new D(o,a))||(s=s.updateImmediateChild(o,x.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class BE{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Tr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new D(n,r))||(r=x.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=x.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=x.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(x.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,x.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,p)=>d(p,f)}else o=this.index_.getCompare();const a=e;_(a.numChildren()===this.limit_,"");const l=new D(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=s.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(u&&!r.isEmpty()&&p>=0)return i!=null&&i.trackChildChange(br(n,r,d)),a.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(Ir(n,d));const S=a.updateImmediateChild(n,x.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(i!=null&&i.trackChildChange(An(f.name,f.node)),S.updateImmediateChild(f.name,f.node)):S}}else return r.isEmpty()?e:u&&o(c,l)>=0?(i!=null&&(i.trackChildChange(Ir(c.name,c.node)),i.trackChildChange(An(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,x.EMPTY_NODE)):e}}/**
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
 */class ka{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=te}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return _(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return _(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Rn}hasEnd(){return this.endSet_}getIndexEndValue(){return _(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return _(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:an}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return _(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===te}copy(){const e=new ka;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function WE(t){return t.loadsAllData()?new xa(t.getIndex()):t.hasLimit()?new BE(t):new Tr(t)}function VE(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function Wc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===te?n="$priority":t.index_===UE?n="$value":t.index_===In?n="$key":(_(t.index_ instanceof FE,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=de(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=de(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+de(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=de(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+de(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Vc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==te&&(e.i=t.index_.toString()),e}/**
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
 */class js extends Mh{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=$r("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(_(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=js.getListenId_(e,r),a={};this.listens_[o]=a;const l=Wc(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(i,d,!1,r),bn(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,n){const r=js.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Wc(e._queryParams),r=e._path.toString(),s=new Nr;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+$n(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=yr(a.responseText)}catch{be("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&be("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class HE{constructor(){this.rootNode_=x.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Bs(){return{value:null,children:new Map}}function zh(t,e,n){if(L(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=P(e);t.children.has(r)||t.children.set(r,Bs());const s=t.children.get(r);e=Q(e),zh(s,e,n)}}function Io(t,e,n){t.value!==null?n(e,t.value):zE(t,(r,s)=>{const i=new H(e.toString()+"/"+r);Io(s,i,n)})}function zE(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class qE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ve(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
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
 */const Hc=10*1e3,GE=30*1e3,KE=5*60*1e3;class YE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new qE(e);const r=Hc+(GE-Hc)*Math.random();lr(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ve(e,(s,i)=>{i>0&&ot(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),lr(this.reportStats_.bind(this),Math.floor(Math.random()*2*KE))}}/**
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
 */var Je;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Je||(Je={}));function Ra(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Aa(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Na(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ws{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Je.ACK_USER_WRITE,this.source=Ra()}operationForChild(e){if(L(this.path)){if(this.affectedTree.value!=null)return _(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new H(e));return new Ws(B(),n,this.revert)}}else return _(P(this.path)===e,"operationForChild called for unrelated child."),new Ws(Q(this.path),this.affectedTree,this.revert)}}/**
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
 */class xr{constructor(e,n){this.source=e,this.path=n,this.type=Je.LISTEN_COMPLETE}operationForChild(e){return L(this.path)?new xr(this.source,B()):new xr(this.source,Q(this.path))}}/**
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
 */class ln{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Je.OVERWRITE}operationForChild(e){return L(this.path)?new ln(this.source,B(),this.snap.getImmediateChild(e)):new ln(this.source,Q(this.path),this.snap)}}/**
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
 */class Nn{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Je.MERGE}operationForChild(e){if(L(this.path)){const n=this.children.subtree(new H(e));return n.isEmpty()?null:n.value?new ln(this.source,B(),n.value):new Nn(this.source,B(),n)}else return _(P(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Nn(this.source,Q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ut{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(L(e))return this.isFullyInitialized()&&!this.filtered_;const n=P(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class QE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function JE(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(jE(o.childName,o.snapshotNode))}),Yn(t,s,"child_removed",e,r,n),Yn(t,s,"child_added",e,r,n),Yn(t,s,"child_moved",i,r,n),Yn(t,s,"child_changed",e,r,n),Yn(t,s,"value",e,r,n),s}function Yn(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>ZE(t,a,l)),o.forEach(a=>{const l=XE(t,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function XE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function ZE(t,e,n){if(e.childName==null||n.childName==null)throw Fn("Should only compare child_ events.");const r=new D(e.childName,e.snapshotNode),s=new D(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
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
 */function ui(t,e){return{eventCache:t,serverCache:e}}function cr(t,e,n,r){return ui(new Ut(e,n,r),t.serverCache)}function qh(t,e,n,r){return ui(t.eventCache,new Ut(e,n,r))}function Vs(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function cn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Yi;const eS=()=>(Yi||(Yi=new Pe(Fw)),Yi);class G{constructor(e,n=eS()){this.value=e,this.children=n}static fromObject(e){let n=new G(null);return ve(e,(r,s)=>{n=n.set(new H(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:B(),value:this.value};if(L(e))return null;{const r=P(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Q(e),n);return i!=null?{path:ee(new H(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(L(e))return this;{const n=P(e),r=this.children.get(n);return r!==null?r.subtree(Q(e)):new G(null)}}set(e,n){if(L(e))return new G(n,this.children);{const r=P(e),i=(this.children.get(r)||new G(null)).set(Q(e),n),o=this.children.insert(r,i);return new G(this.value,o)}}remove(e){if(L(e))return this.children.isEmpty()?new G(null):new G(null,this.children);{const n=P(e),r=this.children.get(n);if(r){const s=r.remove(Q(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new G(null):new G(this.value,i)}else return this}}get(e){if(L(e))return this.value;{const n=P(e),r=this.children.get(n);return r?r.get(Q(e)):null}}setTree(e,n){if(L(e))return n;{const r=P(e),i=(this.children.get(r)||new G(null)).setTree(Q(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new G(this.value,o)}}fold(e){return this.fold_(B(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(ee(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,B(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(L(e))return null;{const i=P(e),o=this.children.get(i);return o?o.findOnPath_(Q(e),ee(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,B(),n)}foreachOnPath_(e,n,r){if(L(e))return this;{this.value&&r(n,this.value);const s=P(e),i=this.children.get(s);return i?i.foreachOnPath_(Q(e),ee(n,s),r):new G(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(ee(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Xe{constructor(e){this.writeTree_=e}static empty(){return new Xe(new G(null))}}function ur(t,e,n){if(L(e))return new Xe(new G(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=Ie(s,e);return i=i.updateChild(o,n),new Xe(t.writeTree_.set(s,i))}else{const s=new G(n),i=t.writeTree_.setTree(e,s);return new Xe(i)}}}function bo(t,e,n){let r=t;return ve(n,(s,i)=>{r=ur(r,ee(e,s),i)}),r}function zc(t,e){if(L(e))return Xe.empty();{const n=t.writeTree_.setTree(e,new G(null));return new Xe(n)}}function To(t,e){return dn(t,e)!=null}function dn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ie(n.path,e)):null}function qc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(te,(r,s)=>{e.push(new D(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new D(r,s.value))}),e}function Lt(t,e){if(L(e))return t;{const n=dn(t,e);return n!=null?new Xe(new G(n)):new Xe(t.writeTree_.subtree(e))}}function xo(t){return t.writeTree_.isEmpty()}function Pn(t,e){return Gh(B(),t.writeTree_,e)}function Gh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(_(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=Gh(ee(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ee(t,".priority"),r)),n}}/**
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
 */function di(t,e){return Jh(e,t)}function tS(t,e,n,r,s){_(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=ur(t.visibleWrites,e,n)),t.lastWriteId=r}function nS(t,e,n,r){_(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=bo(t.visibleWrites,e,n),t.lastWriteId=r}function rS(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function sS(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);_(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&iS(a,r.path)?s=!1:He(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return oS(t),!0;if(r.snap)t.visibleWrites=zc(t.visibleWrites,r.path);else{const a=r.children;ve(a,l=>{t.visibleWrites=zc(t.visibleWrites,ee(r.path,l))})}return!0}else return!1}function iS(t,e){if(t.snap)return He(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&He(ee(t.path,n),e))return!0;return!1}function oS(t){t.visibleWrites=Kh(t.allWrites,aS,B()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function aS(t){return t.visible}function Kh(t,e,n){let r=Xe.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)He(n,o)?(a=Ie(n,o),r=ur(r,a,i.snap)):He(o,n)&&(a=Ie(o,n),r=ur(r,B(),i.snap.getChild(a)));else if(i.children){if(He(n,o))a=Ie(n,o),r=bo(r,a,i.children);else if(He(o,n))if(a=Ie(o,n),L(a))r=bo(r,B(),i.children);else{const l=bn(i.children,P(a));if(l){const c=l.getChild(Q(a));r=ur(r,B(),c)}}}else throw Fn("WriteRecord should have .snap or .children")}}return r}function Yh(t,e,n,r,s){if(!r&&!s){const i=dn(t.visibleWrites,e);if(i!=null)return i;{const o=Lt(t.visibleWrites,e);if(xo(o))return n;if(n==null&&!To(o,B()))return null;{const a=n||x.EMPTY_NODE;return Pn(o,a)}}}else{const i=Lt(t.visibleWrites,e);if(!s&&xo(i))return n;if(!s&&n==null&&!To(i,B()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(He(c.path,e)||He(e,c.path))},a=Kh(t.allWrites,o,e),l=n||x.EMPTY_NODE;return Pn(a,l)}}}function lS(t,e,n){let r=x.EMPTY_NODE;const s=dn(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(te,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Lt(t.visibleWrites,e);return n.forEachChild(te,(o,a)=>{const l=Pn(Lt(i,new H(o)),a);r=r.updateImmediateChild(o,l)}),qc(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Lt(t.visibleWrites,e);return qc(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function cS(t,e,n,r,s){_(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=ee(e,n);if(To(t.visibleWrites,i))return null;{const o=Lt(t.visibleWrites,i);return xo(o)?s.getChild(n):Pn(o,s.getChild(n))}}function uS(t,e,n,r){const s=ee(e,n),i=dn(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Lt(t.visibleWrites,s);return Pn(o,r.getNode().getImmediateChild(n))}else return null}function dS(t,e){return dn(t.visibleWrites,e)}function hS(t,e,n,r,s,i,o){let a;const l=Lt(t.visibleWrites,e),c=dn(l,B());if(c!=null)a=c;else if(n!=null)a=Pn(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=f.getNext();for(;p&&u.length<s;)d(p,r)!==0&&u.push(p),p=f.getNext();return u}else return[]}function fS(){return{visibleWrites:Xe.empty(),allWrites:[],lastWriteId:-1}}function Hs(t,e,n,r){return Yh(t.writeTree,t.treePath,e,n,r)}function Pa(t,e){return lS(t.writeTree,t.treePath,e)}function Gc(t,e,n,r){return cS(t.writeTree,t.treePath,e,n,r)}function zs(t,e){return dS(t.writeTree,ee(t.treePath,e))}function pS(t,e,n,r,s,i){return hS(t.writeTree,t.treePath,e,n,r,s,i)}function Oa(t,e,n){return uS(t.writeTree,t.treePath,e,n)}function Qh(t,e){return Jh(ee(t.treePath,e),t.writeTree)}function Jh(t,e){return{treePath:t,writeTree:e}}/**
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
 */class mS{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;_(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),_(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,br(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,Ir(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,An(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,br(r,e.snapshotNode,s.oldSnap));else throw Fn("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class gS{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Xh=new gS;class Da{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ut(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Oa(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:cn(this.viewCache_),i=pS(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
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
 */function _S(t){return{filter:t}}function yS(t,e){_(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),_(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function vS(t,e,n,r,s){const i=new mS;let o,a;if(n.type===Je.OVERWRITE){const c=n;c.source.fromUser?o=ko(t,e,c.path,c.snap,r,s,i):(_(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!L(c.path),o=qs(t,e,c.path,c.snap,r,s,a,i))}else if(n.type===Je.MERGE){const c=n;c.source.fromUser?o=ES(t,e,c.path,c.children,r,s,i):(_(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ro(t,e,c.path,c.children,r,s,a,i))}else if(n.type===Je.ACK_USER_WRITE){const c=n;c.revert?o=IS(t,e,c.path,r,s,i):o=SS(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===Je.LISTEN_COMPLETE)o=CS(t,e,n.path,r,i);else throw Fn("Unknown operation type: "+n.type);const l=i.getChanges();return wS(e,o,l),{viewCache:o,changes:l}}function wS(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Vs(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(Hh(Vs(e)))}}function Zh(t,e,n,r,s,i){const o=e.eventCache;if(zs(r,n)!=null)return e;{let a,l;if(L(n))if(_(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=cn(e),u=c instanceof x?c:x.EMPTY_NODE,d=Pa(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const c=Hs(r,cn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=P(n);if(c===".priority"){_($t(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Gc(r,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=Q(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Gc(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=Oa(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,s,i):a=o.getNode()}}return cr(e,a,o.isFullyInitialized()||L(n),t.filter.filtersNodes())}}function qs(t,e,n,r,s,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(L(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),p,null)}else{const p=P(n);if(!l.isCompleteForPath(n)&&$t(n)>1)return e;const m=Q(n),k=l.getNode().getImmediateChild(p).updateChild(m,r);p===".priority"?c=u.updatePriority(l.getNode(),k):c=u.updateChild(l.getNode(),p,k,m,Xh,null)}const d=qh(e,c,l.isFullyInitialized()||L(n),u.filtersNodes()),f=new Da(s,d,i);return Zh(t,d,n,s,f,a)}function ko(t,e,n,r,s,i,o){const a=e.eventCache;let l,c;const u=new Da(s,e,i);if(L(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=cr(e,c,!0,t.filter.filtersNodes());else{const d=P(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=cr(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Q(n),p=a.getNode().getImmediateChild(d);let m;if(L(f))m=r;else{const S=u.getCompleteChild(d);S!=null?Ca(f)===".priority"&&S.getChild(Fh(f)).isEmpty()?m=S:m=S.updateChild(f,r):m=x.EMPTY_NODE}if(p.equals(m))l=e;else{const S=t.filter.updateChild(a.getNode(),d,m,f,u,o);l=cr(e,S,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Kc(t,e){return t.eventCache.isCompleteForChild(e)}function ES(t,e,n,r,s,i,o){let a=e;return r.foreach((l,c)=>{const u=ee(n,l);Kc(e,P(u))&&(a=ko(t,a,u,c,s,i,o))}),r.foreach((l,c)=>{const u=ee(n,l);Kc(e,P(u))||(a=ko(t,a,u,c,s,i,o))}),a}function Yc(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Ro(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;L(n)?c=r:c=new G(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),m=Yc(t,p,f);l=qs(t,l,new H(d),m,s,i,o,a)}}),c.children.inorderTraversal((d,f)=>{const p=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!p){const m=e.serverCache.getNode().getImmediateChild(d),S=Yc(t,m,f);l=qs(t,l,new H(d),S,s,i,o,a)}}),l}function SS(t,e,n,r,s,i,o){if(zs(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(L(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return qs(t,e,n,l.getNode().getChild(n),s,i,a,o);if(L(n)){let c=new G(null);return l.getNode().forEachChild(In,(u,d)=>{c=c.set(new H(u),d)}),Ro(t,e,n,c,s,i,a,o)}else return e}else{let c=new G(null);return r.foreach((u,d)=>{const f=ee(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Ro(t,e,n,c,s,i,a,o)}}function CS(t,e,n,r,s){const i=e.serverCache,o=qh(e,i.getNode(),i.isFullyInitialized()||L(n),i.isFiltered());return Zh(t,o,n,r,Xh,s)}function IS(t,e,n,r,s,i){let o;if(zs(r,n)!=null)return e;{const a=new Da(r,e,s),l=e.eventCache.getNode();let c;if(L(n)||P(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Hs(r,cn(e));else{const d=e.serverCache.getNode();_(d instanceof x,"serverChildren would be complete if leaf node"),u=Pa(r,d)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=P(n);let d=Oa(r,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,Q(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,x.EMPTY_NODE,Q(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Hs(r,cn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||zs(r,B())!=null,cr(e,c,o,t.filter.filtersNodes())}}/**
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
 */class bS{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new xa(r.getIndex()),i=WE(r);this.processor_=_S(i);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(x.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(x.EMPTY_NODE,a.getNode(),null),u=new Ut(l,o.isFullyInitialized(),s.filtersNodes()),d=new Ut(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=ui(d,u),this.eventGenerator_=new QE(this.query_)}get query(){return this.query_}}function TS(t){return t.viewCache_.serverCache.getNode()}function xS(t){return Vs(t.viewCache_)}function kS(t,e){const n=cn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!L(e)&&!n.getImmediateChild(P(e)).isEmpty())?n.getChild(e):null}function Qc(t){return t.eventRegistrations_.length===0}function RS(t,e){t.eventRegistrations_.push(e)}function Jc(t,e,n){const r=[];if(n){_(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function Xc(t,e,n,r){e.type===Je.MERGE&&e.source.queryId!==null&&(_(cn(t.viewCache_),"We should always have a full cache before handling merges"),_(Vs(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=vS(t.processor_,s,e,n,r);return yS(t.processor_,i.viewCache),_(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,ef(t,i.changes,i.viewCache.eventCache.getNode(),null)}function AS(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(te,(i,o)=>{r.push(An(i,o))}),n.isFullyInitialized()&&r.push(Hh(n.getNode())),ef(t,r,n.getNode(),e)}function ef(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return JE(t.eventGenerator_,e,n,s)}/**
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
 */let Gs;class tf{constructor(){this.views=new Map}}function NS(t){_(!Gs,"__referenceConstructor has already been defined"),Gs=t}function PS(){return _(Gs,"Reference.ts has not been loaded"),Gs}function OS(t){return t.views.size===0}function Ma(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return _(i!=null,"SyncTree gave us an op for an invalid query."),Xc(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(Xc(o,e,n,r));return i}}function nf(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=Hs(n,s?r:null),l=!1;a?l=!0:r instanceof x?(a=Pa(n,r),l=!1):(a=x.EMPTY_NODE,l=!1);const c=ui(new Ut(a,l,!1),new Ut(r,s,!1));return new bS(e,c)}return o}function DS(t,e,n,r,s,i){const o=nf(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),RS(o,n),AS(o,n)}function MS(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const a=jt(t);if(s==="default")for(const[l,c]of t.views.entries())o=o.concat(Jc(c,n,r)),Qc(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||i.push(c.query));else{const l=t.views.get(s);l&&(o=o.concat(Jc(l,n,r)),Qc(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!jt(t)&&i.push(new(PS())(e._repo,e._path)),{removed:i,events:o}}function rf(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ft(t,e){let n=null;for(const r of t.views.values())n=n||kS(r,e);return n}function sf(t,e){if(e._queryParams.loadsAllData())return hi(t);{const r=e._queryIdentifier;return t.views.get(r)}}function of(t,e){return sf(t,e)!=null}function jt(t){return hi(t)!=null}function hi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ks;function LS(t){_(!Ks,"__referenceConstructor has already been defined"),Ks=t}function FS(){return _(Ks,"Reference.ts has not been loaded"),Ks}let $S=1;class Zc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new G(null),this.pendingWriteTree_=fS(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function af(t,e,n,r,s){return tS(t.pendingWriteTree_,e,n,r,s),s?Wn(t,new ln(Ra(),e,n)):[]}function US(t,e,n,r){nS(t.pendingWriteTree_,e,n,r);const s=G.fromObject(n);return Wn(t,new Nn(Ra(),e,s))}function Pt(t,e,n=!1){const r=rS(t.pendingWriteTree_,e);if(sS(t.pendingWriteTree_,e)){let i=new G(null);return r.snap!=null?i=i.set(B(),!0):ve(r.children,o=>{i=i.set(new H(o),!0)}),Wn(t,new Ws(r.path,i,n))}else return[]}function jr(t,e,n){return Wn(t,new ln(Aa(),e,n))}function jS(t,e,n){const r=G.fromObject(n);return Wn(t,new Nn(Aa(),e,r))}function BS(t,e){return Wn(t,new xr(Aa(),e))}function WS(t,e,n){const r=Fa(t,n);if(r){const s=$a(r),i=s.path,o=s.queryId,a=Ie(i,e),l=new xr(Na(o),a);return Ua(t,i,l)}else return[]}function Ys(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||of(o,e))){const l=MS(o,e,n,r);OS(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=l.removed;if(a=l.events,!s){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(i,(f,p)=>jt(p));if(u&&!d){const f=t.syncPointTree_.subtree(i);if(!f.isEmpty()){const p=zS(f);for(let m=0;m<p.length;++m){const S=p[m],k=S.query,W=df(t,S);t.listenProvider_.startListening(dr(k),kr(t,k),W.hashFn,W.onComplete)}}}!d&&c.length>0&&!r&&(u?t.listenProvider_.stopListening(dr(e),null):c.forEach(f=>{const p=t.queryToTagMap.get(fi(f));t.listenProvider_.stopListening(dr(f),p)}))}qS(t,c)}return a}function lf(t,e,n,r){const s=Fa(t,r);if(s!=null){const i=$a(s),o=i.path,a=i.queryId,l=Ie(o,e),c=new ln(Na(a),l,n);return Ua(t,o,c)}else return[]}function VS(t,e,n,r){const s=Fa(t,r);if(s){const i=$a(s),o=i.path,a=i.queryId,l=Ie(o,e),c=G.fromObject(n),u=new Nn(Na(a),l,c);return Ua(t,o,u)}else return[]}function Ao(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(f,p)=>{const m=Ie(f,s);i=i||Ft(p,m),o=o||jt(p)});let a=t.syncPointTree_.get(s);a?(o=o||jt(a),i=i||Ft(a,B())):(a=new tf,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;i!=null?l=!0:(l=!1,i=x.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((p,m)=>{const S=Ft(m,B());S&&(i=i.updateImmediateChild(p,S))}));const c=of(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=fi(e);_(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=GS();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const u=di(t.pendingWriteTree_,s);let d=DS(a,e,n,u,i,l);if(!c&&!o&&!r){const f=sf(a,e);d=d.concat(KS(t,e,f))}return d}function La(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ie(o,e),c=Ft(a,l);if(c)return c});return Yh(s,e,i,n,!0)}function HS(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=Ie(c,n);r=r||Ft(u,d)});let s=t.syncPointTree_.get(n);s?r=r||Ft(s,B()):(s=new tf,t.syncPointTree_=t.syncPointTree_.set(n,s));const i=r!=null,o=i?new Ut(r,!0,!1):null,a=di(t.pendingWriteTree_,e._path),l=nf(s,e,a,i?o.getNode():x.EMPTY_NODE,i);return xS(l)}function Wn(t,e){return cf(e,t.syncPointTree_,null,di(t.pendingWriteTree_,B()))}function cf(t,e,n,r){if(L(t.path))return uf(t,e,n,r);{const s=e.get(B());n==null&&s!=null&&(n=Ft(s,B()));let i=[];const o=P(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Qh(r,o);i=i.concat(cf(a,l,c,u))}return s&&(i=i.concat(Ma(s,t,r,n))),i}}function uf(t,e,n,r){const s=e.get(B());n==null&&s!=null&&(n=Ft(s,B()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Qh(r,o),u=t.operationForChild(o);u&&(i=i.concat(uf(u,a,l,c)))}),s&&(i=i.concat(Ma(s,t,r,n))),i}function df(t,e){const n=e.query,r=kr(t,n);return{hashFn:()=>(TS(e)||x.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?WS(t,n._path,r):BS(t,n._path);{const i=jw(s,n);return Ys(t,n,null,i)}}}}function kr(t,e){const n=fi(e);return t.queryToTagMap.get(n)}function fi(t){return t._path.toString()+"$"+t._queryIdentifier}function Fa(t,e){return t.tagToQueryMap.get(e)}function $a(t){const e=t.indexOf("$");return _(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new H(t.substr(0,e))}}function Ua(t,e,n){const r=t.syncPointTree_.get(e);_(r,"Missing sync point for query tag that we're tracking");const s=di(t.pendingWriteTree_,e);return Ma(r,n,s,null)}function zS(t){return t.fold((e,n,r)=>{if(n&&jt(n))return[hi(n)];{let s=[];return n&&(s=rf(n)),ve(r,(i,o)=>{s=s.concat(o)}),s}})}function dr(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(FS())(t._repo,t._path):t}function qS(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=fi(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function GS(){return $S++}function KS(t,e,n){const r=e._path,s=kr(t,e),i=df(t,n),o=t.listenProvider_.startListening(dr(e),s,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(r);if(s)_(!jt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!L(c)&&u&&jt(u))return[hi(u).query];{let f=[];return u&&(f=f.concat(rf(u).map(p=>p.query))),ve(d,(p,m)=>{f=f.concat(m)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(dr(u),kr(t,u))}}return o}/**
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
 */class ja{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ja(n)}node(){return this.node_}}class Ba{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ee(this.path_,e);return new Ba(this.syncTree_,n)}node(){return La(this.syncTree_,this.path_)}}const YS=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},eu=function(t,e,n){if(!t||typeof t!="object")return t;if(_(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return QS(t[".sv"],e,n);if(typeof t[".sv"]=="object")return JS(t[".sv"],e);_(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},QS=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:_(!1,"Unexpected server value: "+t)}},JS=function(t,e,n){t.hasOwnProperty("increment")||_(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&_(!1,"Unexpected increment value: "+r);const s=e.node();if(_(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},hf=function(t,e,n,r){return Wa(e,new Ba(n,t),r)},ff=function(t,e,n){return Wa(t,new ja(e),n)};function Wa(t,e,n){const r=t.getPriority().val(),s=eu(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=eu(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new he(a,ue(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new he(s))),o.forEachChild(te,(a,l)=>{const c=Wa(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
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
 */class Va{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Ha(t,e){let n=e instanceof H?e:new H(e),r=t,s=P(n);for(;s!==null;){const i=bn(r.node.children,s)||{children:{},childCount:0};r=new Va(s,r,i),n=Q(n),s=P(n)}return r}function Vn(t){return t.node.value}function pf(t,e){t.node.value=e,No(t)}function mf(t){return t.node.childCount>0}function XS(t){return Vn(t)===void 0&&!mf(t)}function pi(t,e){ve(t.node.children,(n,r)=>{e(new Va(n,t,r))})}function gf(t,e,n,r){n&&e(t),pi(t,s=>{gf(s,e,!0)})}function ZS(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Br(t){return new H(t.parent===null?t.name:Br(t.parent)+"/"+t.name)}function No(t){t.parent!==null&&eC(t.parent,t.name,t)}function eC(t,e,n){const r=XS(n),s=ot(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,No(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,No(t))}/**
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
 */const tC=/[\[\].#$\/\u0000-\u001F\u007F]/,nC=/[\[\].#$\u0000-\u001F\u007F]/,Qi=10*1024*1024,za=function(t){return typeof t=="string"&&t.length!==0&&!tC.test(t)},_f=function(t){return typeof t=="string"&&t.length!==0&&!nC.test(t)},rC=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),_f(t)},sC=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!ya(t)||t&&typeof t=="object"&&ot(t,".sv")},yf=function(t,e,n,r){r&&e===void 0||mi(ri(t,"value"),e,n)},mi=function(t,e,n){const r=n instanceof H?new wE(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+qt(r));if(typeof e=="function")throw new Error(t+"contains a function "+qt(r)+" with contents = "+e.toString());if(ya(e))throw new Error(t+"contains "+e.toString()+" "+qt(r));if(typeof e=="string"&&e.length>Qi/3&&si(e)>Qi)throw new Error(t+"contains a string greater than "+Qi+" utf8 bytes "+qt(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(ve(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!za(o)))throw new Error(t+" contains an invalid key ("+o+") "+qt(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);EE(r,o),mi(t,a,r),SE(r)}),s&&i)throw new Error(t+' contains ".value" child '+qt(r)+" in addition to actual children.")}},iC=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const i=Cr(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!za(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(vE);let s=null;for(n=0;n<e.length;n++){if(r=e[n],s!==null&&He(s,r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},oC=function(t,e,n,r){const s=ri(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];ve(e,(o,a)=>{const l=new H(o);if(mi(s,a,ee(n,l)),Ca(l)===".priority"&&!sC(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(l)}),iC(s,i)},vf=function(t,e,n,r){if(!_f(n))throw new Error(ri(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},aC=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),vf(t,e,n)},qa=function(t,e){if(P(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},lC=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!za(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!rC(n))throw new Error(ri(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class cC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function gi(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!Ia(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function wf(t,e,n){gi(t,n),Ef(t,r=>Ia(r,e))}function qe(t,e,n){gi(t,n),Ef(t,r=>He(r,e)||He(e,r))}function Ef(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(uC(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function uC(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ar&&me("event: "+n.toString()),Bn(r)}}}/**
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
 */const dC="repo_interrupt",hC=25;class fC{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new cC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Bs(),this.transactionQueueTree_=new Va,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function pC(t,e,n){if(t.stats_=Ea(t.repoInfo_),t.forceRestClient_||Hw())t.server_=new js(t.repoInfo_,(r,s,i,o)=>{tu(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>nu(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{de(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new gt(t.repoInfo_,e,(r,s,i,o)=>{tu(t,r,s,i,o)},r=>{nu(t,r)},r=>{mC(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Yw(t.repoInfo_,()=>new YE(t.stats_,t.server_)),t.infoData_=new HE,t.infoSyncTree_=new Zc({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=jr(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ga(t,"connected",!1),t.serverSyncTree_=new Zc({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const c=o(a,l);qe(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function Sf(t){const n=t.infoData_.getNode(new H(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function _i(t){return YS({timestamp:Sf(t)})}function tu(t,e,n,r,s){t.dataUpdateCount++;const i=new H(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=ks(n,c=>ue(c));o=VS(t.serverSyncTree_,i,l,s)}else{const l=ue(n);o=lf(t.serverSyncTree_,i,l,s)}else if(r){const l=ks(n,c=>ue(c));o=jS(t.serverSyncTree_,i,l)}else{const l=ue(n);o=jr(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=On(t,i)),qe(t.eventQueue_,a,o)}function nu(t,e){Ga(t,"connected",e),e===!1&&vC(t)}function mC(t,e){ve(e,(n,r)=>{Ga(t,n,r)})}function Ga(t,e,n){const r=new H("/.info/"+e),s=ue(n);t.infoData_.updateSnapshot(r,s);const i=jr(t.infoSyncTree_,r,s);qe(t.eventQueue_,r,i)}function Ka(t){return t.nextWriteId_++}function gC(t,e,n){const r=HS(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(s=>{const i=ue(s).withIndex(e._queryParams.getIndex());Ao(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=jr(t.serverSyncTree_,e._path,i);else{const a=kr(t.serverSyncTree_,e);o=lf(t.serverSyncTree_,e._path,i,a)}return qe(t.eventQueue_,e._path,o),Ys(t.serverSyncTree_,e,n,null,!0),i},s=>(Wr(t,"get for query "+de(e)+" failed: "+s),Promise.reject(new Error(s))))}function _C(t,e,n,r,s){Wr(t,"set",{path:e.toString(),value:n,priority:r});const i=_i(t),o=ue(n,r),a=La(t.serverSyncTree_,e),l=ff(o,a,i),c=Ka(t),u=af(t.serverSyncTree_,e,l,c,!0);gi(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,p)=>{const m=f==="ok";m||be("set at "+e+" failed: "+f);const S=Pt(t.serverSyncTree_,c,!m);qe(t.eventQueue_,e,S),Oo(t,s,f,p)});const d=Qa(t,e);On(t,d),qe(t.eventQueue_,d,[])}function yC(t,e,n,r){Wr(t,"update",{path:e.toString(),value:n});let s=!0;const i=_i(t),o={};if(ve(n,(a,l)=>{s=!1,o[a]=hf(ee(e,a),ue(l),t.serverSyncTree_,i)}),s)me("update() called with empty data.  Don't do anything."),Oo(t,r,"ok",void 0);else{const a=Ka(t),l=US(t.serverSyncTree_,e,o,a);gi(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||be("update at "+e+" failed: "+c);const f=Pt(t.serverSyncTree_,a,!d),p=f.length>0?On(t,e):e;qe(t.eventQueue_,p,f),Oo(t,r,c,u)}),ve(n,c=>{const u=Qa(t,ee(e,c));On(t,u)}),qe(t.eventQueue_,e,[])}}function vC(t){Wr(t,"onDisconnectEvents");const e=_i(t),n=Bs();Io(t.onDisconnect_,B(),(s,i)=>{const o=hf(s,i,t.serverSyncTree_,e);zh(n,s,o)});let r=[];Io(n,B(),(s,i)=>{r=r.concat(jr(t.serverSyncTree_,s,i));const o=Qa(t,s);On(t,o)}),t.onDisconnect_=Bs(),qe(t.eventQueue_,B(),r)}function wC(t,e,n){let r;P(e._path)===".info"?r=Ao(t.infoSyncTree_,e,n):r=Ao(t.serverSyncTree_,e,n),wf(t.eventQueue_,e._path,r)}function Po(t,e,n){let r;P(e._path)===".info"?r=Ys(t.infoSyncTree_,e,n):r=Ys(t.serverSyncTree_,e,n),wf(t.eventQueue_,e._path,r)}function EC(t){t.persistentConnection_&&t.persistentConnection_.interrupt(dC)}function Wr(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),me(n,...e)}function Oo(t,e,n,r){e&&Bn(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function Cf(t,e,n){return La(t.serverSyncTree_,e,n)||x.EMPTY_NODE}function Ya(t,e=t.transactionQueueTree_){if(e||yi(t,e),Vn(e)){const n=bf(t,e);_(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&SC(t,Br(e),n)}else mf(e)&&pi(e,n=>{Ya(t,n)})}function SC(t,e,n){const r=n.map(c=>c.currentWriteId),s=Cf(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];_(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Ie(e,u.path);i=i.updateChild(d,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Wr(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Pt(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();yi(t,Ha(t.transactionQueueTree_,e)),Ya(t,t.transactionQueueTree_),qe(t.eventQueue_,e,u);for(let f=0;f<d.length;f++)Bn(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{be("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}On(t,e)}},o)}function On(t,e){const n=If(t,e),r=Br(n),s=bf(t,n);return CC(t,s,r),r}function CC(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ie(n,l.path);let u=!1,d;if(_(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,s=s.concat(Pt(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=hC)u=!0,d="maxretry",s=s.concat(Pt(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Cf(t,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){mi("transaction failed: Data returned ",p,l.path);let m=ue(p);typeof p=="object"&&p!=null&&ot(p,".priority")||(m=m.updatePriority(f.getPriority()));const k=l.currentWriteId,W=_i(t),M=ff(m,f,W);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=M,l.currentWriteId=Ka(t),o.splice(o.indexOf(k),1),s=s.concat(af(t.serverSyncTree_,l.path,M,l.currentWriteId,l.applyLocally)),s=s.concat(Pt(t.serverSyncTree_,k,!0))}else u=!0,d="nodata",s=s.concat(Pt(t.serverSyncTree_,l.currentWriteId,!0))}qe(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}yi(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Bn(r[a]);Ya(t,t.transactionQueueTree_)}function If(t,e){let n,r=t.transactionQueueTree_;for(n=P(e);n!==null&&Vn(r)===void 0;)r=Ha(r,n),e=Q(e),n=P(e);return r}function bf(t,e){const n=[];return Tf(t,e,n),n.sort((r,s)=>r.order-s.order),n}function Tf(t,e,n){const r=Vn(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);pi(e,s=>{Tf(t,s,n)})}function yi(t,e){const n=Vn(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,pf(e,n.length>0?n:void 0)}pi(e,r=>{yi(t,r)})}function Qa(t,e){const n=Br(If(t,e)),r=Ha(t.transactionQueueTree_,e);return ZS(r,s=>{Ji(t,s)}),Ji(t,r),gf(r,s=>{Ji(t,s)}),n}function Ji(t,e){const n=Vn(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(_(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(_(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Pt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?pf(e,void 0):n.length=i+1,qe(t.eventQueue_,Br(e),s);for(let o=0;o<r.length;o++)Bn(r[o])}}/**
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
 */function IC(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function bC(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):be(`Invalid query segment '${n}' in query '${t}'`)}return e}const ru=function(t,e){const n=TC(t),r=n.namespace;n.domain==="firebase.com"&&wt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&wt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Mw();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new kh(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new H(n.pathString)}},TC=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(s=IC(t.substring(u,d)));const f=bC(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const m=e.indexOf(".");r=e.substring(0,m).toLowerCase(),n=e.substring(m+1),i=r}"ns"in f&&(i=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
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
 */const su="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",xC=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=su.charAt(n%64),n=Math.floor(n/64);_(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=su.charAt(e[s]);return _(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class kC{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+de(this.snapshot.exportVal())}}class RC{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class xf{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return _(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class vi{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return L(this._path)?null:Ca(this._path)}get ref(){return new St(this._repo,this._path)}get _queryIdentifier(){const e=Vc(this._queryParams),n=va(e);return n==="{}"?"default":n}get _queryObject(){return Vc(this._queryParams)}isEqual(e){if(e=ne(e),!(e instanceof vi))return!1;const n=this._repo===e._repo,r=Ia(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+yE(this._path)}}class St extends vi{constructor(e,n){super(e,n,new ka,!1)}get parent(){const e=Fh(this._path);return e===null?null:new St(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Rr{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new H(e),r=Ar(this.ref,e);return new Rr(this._node.getChild(n),r,te)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Rr(s,Ar(this.ref,r),te)))}hasChild(e){const n=new H(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function U(t,e){return t=ne(t),t._checkNotDeleted("ref"),e!==void 0?Ar(t._root,e):t._root}function Ar(t,e){return t=ne(t),P(t._path)===null?aC("child","path",e):vf("child","path",e),new St(t._repo,ee(t._path,e))}function mI(t,e){t=ne(t),qa("push",t._path),yf("push",e,t._path,!0);const n=Sf(t._repo),r=xC(n),s=Ar(t,r),i=Ar(t,r);let o;return o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function We(t){return qa("remove",t._path),Gt(t,null)}function Gt(t,e){t=ne(t),qa("set",t._path),yf("set",e,t._path,!1);const n=new Nr;return _C(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function hr(t,e){oC("update",e,t._path);const n=new Nr;return yC(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function dt(t){t=ne(t);const e=new xf(()=>{}),n=new wi(e);return gC(t._repo,t,n).then(r=>new Rr(r,new St(t._repo,t._path),t._queryParams.getIndex()))}class wi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new kC("value",this,new Rr(e.snapshotNode,new St(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new RC(this,e,n):null}matches(e){return e instanceof wi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function AC(t,e,n,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const l=n,c=(u,d)=>{Po(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new xf(n,i||void 0),a=new wi(o);return wC(t._repo,t,a),()=>Po(t._repo,t,a)}function Xr(t,e,n,r){return AC(t,"value",e,n,r)}function gI(t,e,n){Po(t._repo,t,null)}class NC{}class PC extends NC{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new vi(e._repo,e._path,VE(e._queryParams,this._limit),e._orderByCalled)}}function _I(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new PC(t)}function yI(t,...e){let n=ne(t);for(const r of e)n=r._apply(n);return n}NS(St);LS(St);/**
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
 */const OC="FIREBASE_DATABASE_EMULATOR_HOST",Do={};let DC=!1;function MC(t,e,n,r){t.repoInfo_=new kh(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function LC(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||wt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),me("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ru(i,s),a=o.repoInfo,l;typeof process<"u"&&bc&&(l=bc[OC]),l?(i=`http://${l}?ns=${a.namespace}`,o=ru(i,s),a=o.repoInfo):o.repoInfo.secure;const c=new qw(t.name,t.options,e);lC("Invalid Firebase Database URL",o),L(o.path)||wt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=$C(a,t,c,new zw(t.name,n));return new UC(u,t)}function FC(t,e){const n=Do[e];(!n||n[t.key]!==t)&&wt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),EC(t),delete n[t.key]}function $C(t,e,n,r){let s=Do[e.name];s||(s={},Do[e.name]=s);let i=s[t.toURLString()];return i&&wt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new fC(t,DC,n,r),s[t.toURLString()]=i,i}class UC{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(pC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new St(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(FC(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&wt("Cannot call "+e+" on a deleted database.")}}function jC(t=Rd(),e){const n=aa(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Gg("database");r&&BC(n,...r)}return n}function BC(t,e,n,r={}){t=ne(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&wt("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let i;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&wt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new ms(ms.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Kg(r.mockUserToken,t.app.options.projectId);i=new ms(o)}MC(s,e,n,i)}/**
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
 */function WC(t){Rw(Un),Tn(new nn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return LC(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),Mt(Tc,xc,t),Mt(Tc,xc,"esm2017")}gt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};gt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};WC();const VC={apiKey:"AIzaSyCr81IrmH5LQedoRSQHorEjK5-sWMdVf_k",authDomain:"better-wrodle.firebaseapp.com",projectId:"better-wrodle",storageBucket:"better-wrodle.firebasestorage.app",messagingSenderId:"445700190808",appId:"1:445700190808:web:c4da4d756ac143583f102d",databaseURL:"https://better-wrodle-default-rtdb.firebaseio.com"},kf=kd(VC),C=Tw(kf),j=jC(kf),iu=new ht;function Ei(){const[t,e]=g.useState(null),[n,r]=g.useState(!0),[s,i]=g.useState(null),[o,a]=g.useState([]),[l,c]=g.useState([]),[u,d]=g.useState([]),[f,p]=g.useState([]);g.useEffect(()=>{let y=null,w=null,b=null,F=null;const $=dv(C,T=>{if(y&&(y(),y=null),w&&(w(),w=null),b&&(b(),b=null),e(T),T){const q=(T.providerData||[]).some(ie=>ie&&ie.providerId==="password"),re=!!T.displayName;if(q&&!re){const ke=`better-wordle-player-${Math.floor(Math.random()*1e3).toString().padStart(3,"0")}`;mc(T,{displayName:ke}).then(()=>{e({...T,displayName:ke})}).catch(Be=>{console.error("Failed to assign default username:",Be)})}(async()=>{try{const ie=U(j,`users/${T.uid}/profile`),ke=T.email||null,Be=T.displayName||null,le=new Date().toISOString();if(await Gt(ie,{uid:T.uid,email:ke,username:Be,updatedAt:le}),Be){const X=Be.trim().toLowerCase();X&&await Gt(U(j,`usernames/${X}`),{uid:T.uid})}if(ke){const X=ke.trim().toLowerCase().replace(/[.#$\[\]]/g,"_");X&&await Gt(U(j,`emails/${X}`),{uid:T.uid})}}catch(ie){console.error("Failed to update user profile indexes:",ie)}})()}if(T){if(!(T.emailVerified||(T.providerData||[]).some(le=>le.providerId==="google.com"))){a([]),c([]),d([]),p([]),r(!1),i(null);return}const re=U(j,`users/${T.uid}/friends`);y=Xr(re,le=>{if(le.exists()){const X=le.val(),Oe=Object.entries(X).map(([Re,ce])=>({id:Re,...ce}));a(Oe)}else a([])});const ie=U(j,`users/${T.uid}/friendRequests`);w=Xr(ie,le=>{if(le.exists()){const X=le.val(),Oe=Object.entries(X).map(([Re,ce])=>({id:Re,...ce}));c(Oe)}else c([])});const ke=U(j,`users/${T.uid}/challenges`);b=Xr(ke,le=>{if(le.exists()){const X=le.val(),Oe=Object.entries(X).map(([Re,ce])=>({id:Re,...ce}));Oe.sort((Re,ce)=>{const Si=Re.createdAt||Re.sentAt||0;return(ce.createdAt||ce.sentAt||0)-Si}),d(Oe)}else d([])});const Be=U(j,`users/${T.uid}/sentChallenges`);F=Xr(Be,le=>{if(le.exists()){const X=le.val(),Oe=Object.entries(X).map(([Re,ce])=>({id:Re,...ce}));Oe.sort((Re,ce)=>{const Si=Re.createdAt||Re.sentAt||0;return(ce.createdAt||ce.sentAt||0)-Si}),p(Oe)}else p([])}),r(!1),i(null)}else a([]),c([]),d([]),p([]),r(!1),i(null)});return()=>{y&&y(),w&&w(),b&&b(),F&&F(),$()}},[]);const m=g.useCallback(async()=>{var y;try{return i(null),r(!0),(await Dv(C,iu)).user}catch(w){if(w.code==="auth/account-exists-with-different-credential"){const b=((y=w.customData)==null?void 0:y.email)||w.email||null,F="An account with this email already exists. Please sign in with email and password, then link Google from your Profile.";try{if(b&&!(await av(C,b)).includes("password"))throw i(w.message),w}catch(T){console.error("Error handling account-exists-with-different-credential:",T)}const $=new Error(F);throw $.code=w.code,b&&($.email=b),i($.message),$}throw i(w.message),w}finally{r(!1)}},[]),S=g.useCallback(async(y,w)=>{try{i(null),r(!0);const b=await sv(C,y,w);try{await pc(b.user)}catch(F){console.error("Failed to send verification email:",F)}return b.user}catch(b){throw i(b.message),b}finally{r(!1)}},[]),k=g.useCallback(async(y,w)=>{try{return i(null),r(!0),(await iv(C,y,w)).user}catch(b){throw i(b.message),b}finally{r(!1)}},[]),W=g.useCallback(async y=>{try{if(i(null),r(!0),!y)throw new Error("Please enter your email address to reset your password.");return await rv(C,y),!0}catch(w){throw i(w.message),w}finally{r(!1)}},[]),M=g.useCallback(async()=>{try{i(null),await hv(C)}catch(y){throw i(y.message),y}},[]),oe=g.useCallback(async y=>{try{if(i(null),!C.currentUser)throw new Error("No user signed in");return await mc(C.currentUser,{displayName:y}),e({...C.currentUser,displayName:y}),!0}catch(w){throw i(w.message),w}},[]),E=g.useCallback(async()=>{try{if(i(null),!C.currentUser)throw new Error("No user signed in");const y=C.currentUser.uid,w=C.currentUser.email||null,b=C.currentUser.displayName||null;try{const F=U(j,`users/${y}`);if(await We(F),b){const $=b.trim().toLowerCase();$&&await We(U(j,`usernames/${$}`))}if(w){const $=w.trim().toLowerCase().replace(/[.#$\[\]]/g,"_");$&&await We(U(j,`emails/${$}`))}}catch(F){console.error("Failed to remove user social data before account deletion:",F)}return await fv(C.currentUser),!0}catch(y){throw i(y.message),y}},[]),z=g.useCallback(async(y,w)=>{try{if(i(null),!C.currentUser)throw new Error("No user signed in");if(!(C.currentUser.emailVerified||(C.currentUser.providerData||[]).some($=>$.providerId==="google.com")))throw new Error("You must verify your email or sign in with Google to use friends.");const F=U(j,`users/${w}/friendRequests/${C.currentUser.uid}`);return await Gt(F,{from:C.currentUser.uid,fromName:C.currentUser.displayName||"Unknown",sentAt:new Date().toISOString()}),!0}catch(b){throw console.error("sendFriendRequest error:",b),i(b.message),b}},[]),Ke=g.useCallback(async(y,w)=>{try{if(i(null),!C.currentUser)throw new Error("No user signed in");if(!(C.currentUser.emailVerified||(C.currentUser.providerData||[]).some(re=>re.providerId==="google.com")))throw new Error("You must verify your email or sign in with Google to use friends.");const F=new Date().toISOString(),$=U(j,`users/${C.currentUser.uid}/friends/${y}`);await Gt($,{name:w,addedAt:F});const T=U(j,`users/${y}/friends/${C.currentUser.uid}`);await Gt(T,{name:C.currentUser.displayName||"Unknown",addedAt:F});const q=U(j,`users/${C.currentUser.uid}/friendRequests/${y}`);return await We(q),c(re=>re.filter(ie=>ie.id!==y)),a(re=>re.some(ie=>ie.id===y)?re:[...re,{id:y,name:w,addedAt:F}]),!0}catch(b){throw i(b.message),b}},[]),Ze=g.useCallback(async(y,w=null,b=null)=>{try{if(i(null),!C.currentUser)throw new Error("No user signed in");if(!(C.currentUser.emailVerified||(C.currentUser.providerData||[]).some(T=>T.providerId==="google.com")))throw new Error("You must verify your email or sign in with Google to use friends.");const $=U(j,`users/${C.currentUser.uid}/friendRequests/${y}`);if(await We($),w&&typeof b=="function")try{await b(w,"declined")}catch(T){console.error("Failed to update 1v1 friendRequestStatus:",T)}return!0}catch(F){throw i(F.message),F}},[]),Ht=g.useCallback(async y=>{try{if(i(null),!C.currentUser)throw new Error("No user signed in");if(!(C.currentUser.emailVerified||(C.currentUser.providerData||[]).some($=>$.providerId==="google.com")))throw new Error("You must verify your email or sign in with Google to use friends.");const b=U(j,`users/${C.currentUser.uid}/friends/${y}`);await We(b);const F=U(j,`users/${y}/friends/${C.currentUser.uid}`);return await We(F),a($=>$.filter(T=>T.id!==y)),!0}catch(w){throw i(w.message),w}},[]),at=g.useCallback(async(y,w,b,F,$)=>{try{if(i(null),!C.currentUser)throw new Error("No user signed in");if(!(C.currentUser.emailVerified||(C.currentUser.providerData||[]).some(Oe=>Oe.providerId==="google.com")))throw new Error("You must verify your email or sign in with Google to use friends.");const q=C.currentUser.uid,re=C.currentUser.displayName||C.currentUser.email||"Unknown",ie=U(j,`users/${q}/challenges`),ke=await dt(ie);if(ke.exists()){const Oe=ke.val();if(Object.values(Oe).some(ce=>ce&&ce.fromUserId===y&&(ce.status==="pending"||ce.status===void 0||ce.status===null)))return!1}const Be=Date.now(),le={fromUserId:q,fromUserName:re,toUserId:y,toUserName:w,gameCode:b,boards:F,speedrun:!!$,status:"pending",createdAt:Be},X={};return X[`users/${y}/challenges/${b}`]=le,X[`users/${q}/sentChallenges/${b}`]=le,await hr(U(j),X),!0}catch(T){throw console.error("sendChallenge error:",T),i(T.message),T}},[]),ae=g.useCallback(async y=>{try{if(i(null),!C.currentUser)throw new Error("No user signed in");const w=U(j,`users/${C.currentUser.uid}/challenges/${y}`),b=await dt(w);if(!b.exists())throw new Error("Challenge not found");const F=b.val();return await We(w),F}catch(w){throw console.error("acceptChallenge error:",w),i(w.message),w}},[]),hn=g.useCallback(async(y,w=null)=>{try{if(i(null),!C.currentUser)throw new Error("No user signed in");const b=U(j,`users/${C.currentUser.uid}/challenges/${y}`),F=await dt(b);let $=null,T=w||y;if(F.exists()){const q=F.val();$=q.fromUserId||null,T||(T=q.gameCode||y)}if(await We(b),$&&T)try{const q=U(j,`users/${$}/sentChallenges/${T}`);await We(q)}catch(q){console.error("Failed to remove challenge from sender's sentChallenges after dismiss:",q)}if(T)try{const q=U(j,`onevone/${T}`);if((await dt(q)).exists()){const ie=C.currentUser.displayName||C.currentUser.email||"Your friend";await hr(q,{status:"cancelled",cancelledByName:ie})}}catch(q){console.error("Failed to mark 1v1 game as cancelled after dismissing challenge:",q)}return!0}catch(b){throw console.error("dismissChallenge error:",b),i(b.message),b}},[]),Z=g.useCallback(async y=>{try{if(i(null),!C.currentUser)throw new Error("No user signed in");const w=C.currentUser.uid,b=U(j,`users/${w}/sentChallenges/${y}`),F=await dt(b);let $=null;if(F.exists()){const T=F.val();$=T.toUserId||T.friendId||null}if(await We(b),$)try{const T=U(j,`users/${$}/challenges/${y}`);await We(T)}catch(T){console.error("Failed to remove incoming challenge after host cancelled sent challenge:",T)}try{const T=U(j,`onevone/${y}`);if((await dt(T)).exists()){const re=C.currentUser.displayName||C.currentUser.email||"You";await hr(T,{status:"cancelled",cancelledByName:re})}}catch(T){console.error("Failed to mark 1v1 game as cancelled after host cancelled sent challenge:",T)}return!0}catch(w){throw console.error("cancelSentChallenge error:",w),i(w.message),w}},[]),se=g.useCallback(async y=>{const w=(y||"").trim();if(!w)throw new Error("Please enter an email or username.");const b=w.includes("@"),F=w.toLowerCase();let $;if(b){const X=F.replace(/[.#$\[\]]/g,"_");$=U(j,`emails/${X}`)}else $=U(j,`usernames/${F}`);const T=await dt($);if(!T.exists())return null;const q=T.val(),re=typeof q=="string"?q:q==null?void 0:q.uid;if(!re)return null;if(C.currentUser&&C.currentUser.uid===re)throw new Error("You cannot add yourself as a friend.");const ie=await dt(U(j,`users/${re}/profile`));let ke=null,Be=null;if(ie.exists()){const X=ie.val()||{};ke=X.username||X.displayName||null,Be=X.email||null}return{uid:re,name:ke||Be||"Player"}},[]),pe=g.useCallback(async y=>{try{i(null);const w=await se(y);if(!w)throw new Error("No user found with that email or username.");return await z(w.name,w.uid),!0}catch(w){throw console.error("sendFriendRequestByIdentifier error:",w),i(w.message),w}},[se,z]),Ee=!!t&&(t.emailVerified||(t.providerData||[]).some(y=>y.providerId==="google.com")),je=g.useCallback(async()=>{try{if(i(null),!C.currentUser)throw new Error("No user signed in");return await pc(C.currentUser),!0}catch(y){throw i(y.message),y}},[]),lt=g.useCallback(async()=>{try{if(i(null),!C.currentUser)throw new Error("No user signed in");return await Mv(C.currentUser,iu),e(C.currentUser),!0}catch(y){throw y.code==="auth/credential-already-in-use"||y.code==="auth/provider-already-linked"?i("Google account is already linked."):i(y.message),y}},[]);return{user:t,loading:n,error:s,friends:o,friendRequests:l,incomingChallenges:u,sentChallenges:f,isVerifiedUser:Ee,signInWithGoogle:m,signUpWithEmail:S,signInWithEmail:k,resetPassword:W,signOut:M,updateUsername:oe,deleteAccount:E,sendFriendRequest:z,sendFriendRequestByIdentifier:pe,acceptFriendRequest:Ke,declineFriendRequest:Ze,removeFriend:Ht,sendChallenge:at,acceptChallenge:ae,dismissChallenge:hn,cancelSentChallenge:Z,resendVerificationEmail:je,linkGoogleAccount:lt}}function HC(){const[t,e]=g.useState("");return g.useEffect(()=>{const n=()=>{const s=new Date,i=new Date(s);i.setDate(i.getDate()+1),i.setHours(0,0,0,0);const o=i-s,a=Math.floor(o/(1e3*60*60)),l=Math.floor(o%(1e3*60*60)/(1e3*60)),c=Math.floor(o%(1e3*60)/1e3);a>0?e(`${a}h ${l}m`):l>0?e(`${l}m ${c}s`):e(`${c}s`)};n();const r=setInterval(n,1e3);return()=>clearInterval(r)},[]),t}const Rf=rt.memo(function({isOpen:e,onRequestClose:n,onSignUpComplete:r}){const[s,i]=g.useState(!1),[o,a]=g.useState(""),[l,c]=g.useState(""),[u,d]=g.useState(""),[f,p]=g.useState(""),{signInWithGoogle:m,signUpWithEmail:S,signInWithEmail:k,resetPassword:W,loading:M}=Ei(),oe=g.useCallback(async()=>{try{d(""),await m(),n()}catch(ae){d(ae.message||"Failed to sign in with Google")}},[m,n]),E=g.useCallback(async ae=>{if(ae.preventDefault(),d(""),p(""),!o||!l){d("Please enter both email and password");return}try{s?(await S(o,l),r&&r(o)):await k(o,l),n(),a(""),c("")}catch(hn){d(hn.message||`Failed to ${s?"sign up":"sign in"}`)}},[s,o,l,S,k,n,r]),z=g.useCallback(()=>{a(""),c(""),d(""),p(""),i(!1),n()},[n]),Ke=g.useCallback(()=>{i(ae=>!ae),d(""),p("")},[]),Ze=g.useCallback(async()=>{d(""),p("");try{if(!o){d("Please enter your email above first.");return}await W(o),p("Password reset email sent. Please check your inbox.")}catch(ae){d(ae.message||"Failed to send password reset email")}},[o,W]),Ht=g.useCallback(ae=>a(ae.target.value),[]),at=g.useCallback(ae=>c(ae.target.value),[]);return e?h.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.75)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e4,padding:"20px"},onClick:z,children:h.jsxs("div",{style:{backgroundColor:"#1a1a1b",borderRadius:"12px",padding:"32px",maxWidth:"400px",width:"100%",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.5)",position:"relative"},onClick:ae=>ae.stopPropagation(),children:[h.jsxs("div",{style:{marginBottom:"24px"},children:[h.jsx("h2",{style:{margin:0,marginBottom:"8px",fontSize:"24px",fontWeight:"bold",color:"#ffffff"},children:s?"Create Account":"Sign In"}),h.jsx("p",{style:{margin:0,fontSize:"14px",color:"#d7dadc"},children:s?"Create an account to sync your progress":"Sign in to access your account"})]}),u&&h.jsx("div",{style:{padding:"12px",marginBottom:"16px",backgroundColor:"#3a1f1f",border:"1px solid #8b3a3a",borderRadius:"6px",color:"#ff6b6b",fontSize:"14px"},children:u}),f&&h.jsx("div",{style:{padding:"12px",marginBottom:"16px",backgroundColor:"#1f3a2b",border:"1px solid #3c6e47",borderRadius:"6px",color:"#9ae6b4",fontSize:"14px"},children:f}),h.jsxs("button",{onClick:oe,disabled:M,style:{width:"100%",padding:"12px",marginBottom:"16px",backgroundColor:"#4285f4",border:"none",borderRadius:"6px",color:"#ffffff",fontSize:"16px",fontWeight:"bold",cursor:M?"not-allowed":"pointer",opacity:M?.6:1,display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[h.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:[h.jsx("path",{d:"M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z",fill:"#4285F4"}),h.jsx("path",{d:"M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z",fill:"#34A853"}),h.jsx("path",{d:"M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957C.348 6.175 0 7.55 0 9s.348 2.825.957 4.039l3.007-2.332z",fill:"#FBBC05"}),h.jsx("path",{d:"M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 7.293C4.672 5.163 6.656 3.58 9 3.58z",fill:"#EA4335"})]}),M?"Signing in...":"Continue with Google"]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"16px"},children:[h.jsx("div",{style:{flex:1,height:"1px",backgroundColor:"#3a3a3c"}}),h.jsx("span",{style:{padding:"0 12px",color:"#818384",fontSize:"14px"},children:"or"}),h.jsx("div",{style:{flex:1,height:"1px",backgroundColor:"#3a3a3c"}})]}),h.jsxs("form",{onSubmit:E,children:[h.jsx("div",{style:{marginBottom:"16px"},children:h.jsx("input",{type:"email",placeholder:"Email",value:o,onChange:Ht,disabled:M,style:{width:"100%",padding:"12px",backgroundColor:"#121213",border:"1px solid #3a3a3c",borderRadius:"6px",color:"#ffffff",fontSize:"16px",boxSizing:"border-box"}})}),h.jsx("div",{style:{marginBottom:"8px"},children:h.jsx("input",{type:"password",placeholder:"Password",value:l,onChange:at,disabled:M,style:{width:"100%",padding:"12px",backgroundColor:"#121213",border:"1px solid #3a3a3c",borderRadius:"6px",color:"#ffffff",fontSize:"16px",boxSizing:"border-box"}})}),!s&&h.jsx("div",{style:{marginBottom:"20px",textAlign:"right"},children:h.jsx("button",{type:"button",onClick:Ze,disabled:M,style:{background:"none",border:"none",color:"#6aaa64",cursor:M?"not-allowed":"pointer",fontSize:"13px",textDecoration:"underline",padding:0},children:"Forgot password?"})}),h.jsx("button",{type:"submit",disabled:M,className:"homeBtn homeBtnGreen homeBtnLg"+(M?" homeBtnNeutral":""),style:{width:"100%",marginBottom:"12px",cursor:M?"not-allowed":"pointer",opacity:M?.8:1},children:M?"Please wait...":s?"Create Account":"Sign In"})]}),h.jsx("div",{style:{textAlign:"center"},children:h.jsx("button",{onClick:Ke,disabled:M,style:{background:"none",border:"none",color:"#6aaa64",cursor:M?"not-allowed":"pointer",fontSize:"14px",textDecoration:"underline"},children:s?"Already have an account? Sign in":"Don't have an account? Sign up"})}),h.jsx("button",{onClick:z,style:{position:"absolute",top:"16px",right:"16px",background:"none",border:"none",color:"#818384",fontSize:"24px",cursor:"pointer",padding:"0",width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center"},children:"×"})]})}):null}),vI=Object.freeze(Object.defineProperty({__proto__:null,default:Rf},Symbol.toStringTag,{value:"Module"})),zC=g.lazy(()=>Ge(()=>import("./FriendsModal-BjjAQwqw.js"),__vite__mapDeps([0,1,2,3,4]))),ou=g.lazy(()=>Ge(()=>import("./OpenRoomsModal-yEq12faf.js"),__vite__mapDeps([5,1,3])));function qC({onOpenFeedback:t}){const e=Lo(),{user:n,friendRequests:r,incomingChallenges:s,sentChallenges:i,isVerifiedUser:o,acceptChallenge:a,dismissChallenge:l,cancelSentChallenge:c}=Ei(),[u,d]=g.useState(!1),[f,p]=g.useState(!1),[m,S]=g.useState(!1),[k,W]=g.useState(!1),[M,oe]=g.useState(!1);return h.jsxs(h.Fragment,{children:[h.jsxs("div",{style:{position:"relative"},children:[h.jsx("button",{className:"homeBtn homeBtnOutline",onClick:()=>d(!u),style:{padding:"4px 6px",fontSize:"18px",display:"flex",alignItems:"center",justifyContent:"center",border:"none",background:"transparent",color:"#ffffff",cursor:"pointer"},title:"Menu",children:"☰"}),u&&h.jsxs("div",{style:{position:"absolute",top:"calc(100% + 4px)",right:0,background:"#2b2b2e",border:"1px solid #3a3a3c",borderRadius:"8px",minWidth:"140px",zIndex:1e3,boxShadow:"0 4px 12px rgba(0, 0, 0, 0.5)"},children:[h.jsx("button",{onClick:()=>{e("/"),d(!1)},style:{width:"100%",padding:"10px 16px",background:"transparent",border:"none",color:"#ffffff",fontSize:"13px",textAlign:"left",cursor:"pointer",fontWeight:"600",letterSpacing:"0.3px",transition:"all 0.2s ease",borderBottom:"1px solid #3a3a3c"},onMouseEnter:E=>E.target.style.background="rgba(255, 255, 255, 0.1)",onMouseLeave:E=>E.target.style.background="transparent",children:"Home"}),n&&h.jsx("button",{onClick:()=>{e("/profile"),d(!1)},style:{width:"100%",padding:"10px 16px",background:"transparent",border:"none",color:"#ffffff",fontSize:"13px",textAlign:"left",cursor:"pointer",fontWeight:"600",letterSpacing:"0.3px",transition:"all 0.2s ease",borderBottom:"1px solid #3a3a3c"},onMouseEnter:E=>E.target.style.background="rgba(255, 255, 255, 0.1)",onMouseLeave:E=>E.target.style.background="transparent",children:"Profile"}),n&&h.jsxs("button",{onClick:()=>{if(!o){alert("Verify your email or sign in with Google to use friends."),d(!1);return}p(!0),d(!1)},style:{width:"100%",padding:"10px 16px",background:"transparent",border:"none",color:"#ffffff",fontSize:"13px",textAlign:"left",cursor:"pointer",fontWeight:"600",letterSpacing:"0.3px",transition:"all 0.2s ease",borderBottom:"1px solid #3a3a3c",position:"relative",display:"flex",alignItems:"center"},onMouseEnter:E=>E.target.style.background="rgba(255, 255, 255, 0.1)",onMouseLeave:E=>E.target.style.background="transparent",children:["Friends",r&&r.length>0&&h.jsx("div",{style:{marginLeft:"8px",width:"20px",height:"20px",borderRadius:"50%",background:"#ef5350",color:"#ffffff",fontSize:"11px",fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center"},children:r.length})]}),n&&h.jsxs("button",{onClick:()=>{if(!o){alert("Verify your email or sign in with Google to use challenges."),d(!1);return}S(!0),d(!1)},style:{width:"100%",padding:"10px 16px",background:"transparent",border:"none",color:"#ffffff",fontSize:"13px",textAlign:"left",cursor:"pointer",fontWeight:"600",letterSpacing:"0.3px",transition:"all 0.2s ease",borderBottom:"1px solid #3a3a3c",position:"relative",display:"flex",alignItems:"center"},onMouseEnter:E=>E.target.style.background="rgba(255, 255, 255, 0.1)",onMouseLeave:E=>E.target.style.background="transparent",children:["Challenges",s&&s.length>0&&h.jsx("div",{style:{marginLeft:"8px",width:"20px",height:"20px",borderRadius:"50%",background:"#c9b458",color:"#121213",fontSize:"11px",fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center"},children:s.length})]}),n&&h.jsx("button",{onClick:()=>{W(!0),d(!1)},style:{width:"100%",padding:"10px 16px",background:"transparent",border:"none",color:"#ffffff",fontSize:"13px",textAlign:"left",cursor:"pointer",fontWeight:"600",letterSpacing:"0.3px",transition:"all 0.2s ease",borderBottom:"1px solid #3a3a3c"},onMouseEnter:E=>E.target.style.background="rgba(255, 255, 255, 0.1)",onMouseLeave:E=>E.target.style.background="transparent",children:"Open Rooms"}),n&&n.email==="abhijeetsridhar14@gmail.com"&&h.jsx("button",{onClick:()=>{oe(!0),d(!1)},style:{width:"100%",padding:"10px 16px",background:"transparent",border:"none",color:"#ffffff",fontSize:"13px",textAlign:"left",cursor:"pointer",fontWeight:"600",letterSpacing:"0.3px",transition:"all 0.2s ease",borderBottom:"1px solid #3a3a3c"},onMouseEnter:E=>E.target.style.background="rgba(255, 255, 255, 0.1)",onMouseLeave:E=>E.target.style.background="transparent",children:"View all rooms"}),h.jsx("button",{onClick:()=>{t(),d(!1)},style:{width:"100%",padding:"10px 16px",background:"transparent",border:"none",color:"#ffffff",fontSize:"13px",textAlign:"left",cursor:"pointer",fontWeight:"600",letterSpacing:"0.3px",transition:"all 0.2s ease"},onMouseEnter:E=>E.target.style.background="rgba(255, 255, 255, 0.1)",onMouseLeave:E=>E.target.style.background="transparent",children:"Feedback"})]})]}),u&&h.jsx("div",{onClick:()=>d(!1),style:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:999}}),h.jsx(g.Suspense,{fallback:null,children:h.jsx(zC,{isOpen:f,onRequestClose:()=>p(!1)})}),h.jsx(g.Suspense,{fallback:null,children:h.jsx(ou,{isOpen:k,onRequestClose:()=>W(!1)})}),h.jsx(g.Suspense,{fallback:null,children:h.jsx(ou,{isOpen:M,onRequestClose:()=>oe(!1),adminMode:!0})}),h.jsx(gd,{isOpen:m,onRequestClose:()=>S(!1),children:h.jsxs("div",{style:{padding:"24px",width:"100%",boxSizing:"border-box"},children:[h.jsx("h2",{style:{margin:"0 0 16px 0",fontSize:20,fontWeight:"bold",color:"#ffffff"},children:"Challenges"}),(!i||i.length===0)&&(!s||s.length===0)?h.jsx("div",{style:{padding:"24px 8px 16px",color:"#818384",fontSize:14},children:"You have no challenges right now."}):h.jsxs(h.Fragment,{children:[h.jsx("h3",{style:{margin:"8px 0 8px",fontSize:14,fontWeight:"bold",color:"#d7dadc",textAlign:"left"},children:"Sent"}),!i||i.length===0?h.jsx("div",{style:{padding:"8px 0 12px",color:"#818384",fontSize:12},children:"You haven't sent any challenges yet."}):h.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px",maxHeight:"160px",overflowY:"auto",marginBottom:"12px"},children:i.map(E=>h.jsxs("div",{style:{padding:"10px 12px",borderRadius:8,border:"1px solid #3a3a3c",background:"#2b2b2e",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"10px"},children:[h.jsxs("div",{style:{textAlign:"left",flex:1},children:[h.jsx("div",{style:{color:"#ffffff",fontWeight:600,marginBottom:2},children:E.toUserName||E.friendName||"Unknown friend"}),h.jsxs("div",{style:{color:"#d7dadc",fontSize:12},children:[E.boards||1," board",(E.boards||1)>1?"s":""," · ",E.speedrun?"Speedrun":"Standard"]})]}),h.jsx("div",{style:{display:"flex",gap:"6px"},children:h.jsx("button",{onClick:async()=>{try{await c(E.gameCode||E.id)}catch(z){alert((z==null?void 0:z.message)||"Failed to cancel challenge")}},className:"homeBtn homeBtnOutline",style:{padding:"6px 10px",fontSize:11,borderRadius:6},children:"Cancel"})})]},E.id))}),h.jsx("h3",{style:{margin:"8px 0 8px",fontSize:14,fontWeight:"bold",color:"#d7dadc",textAlign:"left"},children:"Received"}),!s||s.length===0?h.jsx("div",{style:{padding:"8px 0 12px",color:"#818384",fontSize:12},children:"You have no incoming challenges."}):h.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px",maxHeight:"160px",overflowY:"auto",marginBottom:"16px"},children:s.map(E=>h.jsxs("div",{style:{padding:"10px 12px",borderRadius:8,border:"1px solid #3a3a3c",background:"#2b2b2e",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"10px"},children:[h.jsxs("div",{style:{textAlign:"left",flex:1},children:[h.jsx("div",{style:{color:"#ffffff",fontWeight:600,marginBottom:2},children:E.fromUserName||"Unknown"}),h.jsxs("div",{style:{color:"#d7dadc",fontSize:12},children:[E.boards||1," board",(E.boards||1)>1?"s":""," · ",E.speedrun?"Speedrun":"Standard"]})]}),h.jsxs("div",{style:{display:"flex",gap:"6px"},children:[h.jsx("button",{onClick:async()=>{try{const z=await a(E.id);S(!1);const Ke=z.boards||1,Ze=!!z.speedrun;e(`/game?mode=multiplayer&code=${z.gameCode}&speedrun=${Ze}&boards=${Ke}`)}catch(z){alert((z==null?void 0:z.message)||"Failed to accept challenge")}},className:"homeBtn homeBtnGreen",style:{padding:"6px 10px",fontSize:11,borderRadius:6},children:"Accept"}),h.jsx("button",{onClick:async()=>{try{await l(E.id,E.gameCode)}catch(z){alert((z==null?void 0:z.message)||"Failed to dismiss challenge")}},className:"homeBtn homeBtnOutline",style:{padding:"6px 10px",fontSize:11,borderRadius:6},children:"Dismiss"})]})]},E.id))})]}),h.jsx("button",{onClick:()=>S(!1),className:"homeBtn homeBtnGreen homeBtnLg",style:{marginTop:4},children:"Close"})]})})]})}function GC({onOpenFeedback:t,onSignUpComplete:e}){const n=Lo(),{user:r,signOut:s}=Ei(),i=HC(),[o,a]=g.useState(!1),l=g.useCallback(()=>{a(!0)},[]),c=g.useCallback(()=>{a(!1)},[]),u=g.useCallback(()=>{n("/leaderboard")},[n]),d=g.useCallback(()=>{n("/")},[n]),f=g.useCallback(async()=>{try{await s()}catch(p){console.error("Failed to sign out",p)}},[s]);return h.jsxs(h.Fragment,{children:[h.jsxs("header",{style:{padding:"10px 16px 8px",borderBottom:"1px solid #3a3a3c",backgroundColor:"#121213",marginBottom:"12px"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[h.jsx("button",{type:"button",onClick:d,"aria-label":"Home",style:{width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:4,border:"1px solid #3a3a3c",background:"transparent",cursor:"pointer",padding:0},children:h.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M4 10.5L12 3L20 10.5V20H14V14H10V20H4V10.5Z",stroke:"#ffffff",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})}),h.jsx("div",{style:{flex:1,textAlign:"center",fontWeight:"bold",letterSpacing:2,fontSize:18},children:"BETTER WORDLE"}),h.jsx("div",{style:{display:"flex",justifyContent:"flex-end",minWidth:32},children:h.jsx(qC,{onOpenFeedback:t||(()=>{})})})]}),h.jsxs("div",{style:{marginTop:8,display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,flexWrap:"wrap"},children:[h.jsxs("div",{style:{fontSize:12,color:"#d7dadc",whiteSpace:"nowrap"},children:["Reset in: ",i]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginLeft:"auto"},children:[h.jsx("button",{type:"button",className:"homeBtn homeBtnOutline",onClick:u,style:{padding:"4px 10px",fontSize:12,textTransform:"uppercase",letterSpacing:.5},children:"Leaderboard"}),r?h.jsx("button",{type:"button",className:"homeBtn homeBtnOutline",onClick:f,style:{padding:"4px 10px",fontSize:12,textTransform:"uppercase",letterSpacing:.5},children:"Sign Out"}):h.jsx("button",{type:"button",className:"homeBtn homeBtnOutline",onClick:l,style:{padding:"4px 10px",fontSize:12,textTransform:"uppercase",letterSpacing:.5},children:"Sign In"})]})]}),r&&h.jsxs("div",{style:{marginTop:6,fontSize:12,color:"#d7dadc",lineHeight:1.4},children:["Signed in as ",r.displayName||r.email||"Unknown user","."," ","(",h.jsx("button",{type:"button",onClick:()=>n("/profile"),style:{background:"none",border:"none",padding:0,margin:0,color:"#93c5fd",textDecoration:"underline",cursor:"pointer",fontSize:12},children:"Change username"}),")"]})]}),h.jsx(Rf,{isOpen:o,onRequestClose:c,onSignUpComplete:e})]})}function Vr(){const t=new Date,e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}-${n}-${r}`}class Af{constructor(e){this.seed=e%2147483647,this.seed<=0&&(this.seed+=2147483646)}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}}function Nf(t,e=0,n="daily",r=!1,s=null,i=1){let o=0;const a=`${t}-${n}-${r}-${e}-${i}-${s||"none"}`;for(let l=0;l<a.length;l++){const c=a.charCodeAt(l);o=(o<<5)-o+c,o=o|0}return Math.abs(o)+e*1e6+i*1e4+(s||0)*1e5}function KC(t,e,n=0,r="daily",s=!1,i=null,o=1){if(!t||t.length===0)throw new Error("Word list is empty");const a=Nf(e,n,r,s,i,o),l=new Af(a),c=Math.floor(l.next()*t.length);return t[c]}function wI(t,e,n="daily",r=!1,s=null){const i=Vr(),o=[],a=new Set;for(let l=0;l<e;l++){let c,u=0;const d=t.length;do{if(c=KC(t,i,l,n,r,s,e),u>0){const f=Nf(i,l+u*1e3,n,r,s,e),p=new Af(f),m=Math.floor(p.next()*t.length);c=t[m]}u++}while(a.has(c)&&u<d);a.add(c),o.push(c)}return o}const Dn="mw:";function Ja(t,e=null){try{const n=window.localStorage.getItem(t);return n?JSON.parse(n):e}catch{return e}}function fr(t,e){try{window.localStorage.setItem(t,JSON.stringify(e))}catch{}}function Qn(t){try{window.localStorage.removeItem(t)}catch{}}function YC(t,e,n=null){const r=n||Vr();return`${Dn}game:daily:${t}:${e?"speedrun":"standard"}:${r}`}function QC(t,e=null){const n=e||Vr();return`${Dn}game:marathon:${t?"speedrun":"standard"}:${n}`}function au(t){return`${Dn}meta:marathon:${t?"speedrun":"standard"}`}function lu(t,e,n,r=null,s=null){const i=s||Vr();return t==="marathon"?`${Dn}solved:${t}:${e}:${n?"speedrun":"standard"}:${r}:${i}`:`${Dn}solved:${t}:${e}:${n?"speedrun":"standard"}:${i}`}function Pf(t,e){return`${Dn}streak:${t}:${e?"speedrun":"standard"}`}function cu(t){if(!t)return null;const e=t.split("-");if(e.length!==3)return null;const[n,r,s]=e.map(o=>parseInt(o,10));if(!Number.isFinite(n)||!Number.isFinite(r)||!Number.isFinite(s))return null;const i=new Date(Date.UTC(n,r-1,s));return Number.isNaN(i.getTime())?null:i}function JC(t,e){const n=cu(t),r=cu(e);if(!n||!r)return!1;const s=24*60*60*1e3;return Math.round((r-n)/s)===1}function EI(t,e){const n=Pf(t,e),r=Ja(n,null);return r?{current:typeof r.current=="number"?r.current:0,best:typeof r.best=="number"?r.best:0,lastDate:r.lastDate||null}:{current:0,best:0,lastDate:null}}function SI(t,e,n=null){const r=n||Vr(),s=Pf(t,e),i=Ja(s,null);if(!i){const f={current:1,best:1,lastDate:r};return fr(s,f),f}const o=i.lastDate||null,a=typeof i.current=="number"?i.current:0,l=typeof i.best=="number"?i.best:0;if(o===r)return{current:a,best:l,lastDate:r};const c=o&&JC(o,r)?a+1:1,u=Math.max(l,c),d={current:c,best:u,lastDate:r};return fr(s,d),d}const XC=g.lazy(()=>Ge(()=>import("./FeedbackModal-BWO6vK_f.js"),__vite__mapDeps([6,1]))),ZC=g.lazy(()=>Ge(()=>import("./MultiplayerModal-Cvxr6Sk9.js"),__vite__mapDeps([7,1]))),eI=Array.from({length:32},(t,e)=>e+1),Jn=rt.memo(function({title:e,desc:n,buttonText:r,onClick:s,variant:i="green",titleRight:o,modeVariant:a="daily"}){const l=c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),s&&s())};return h.jsx("div",{className:`modeRow modeRow--${a}`,role:"button",tabIndex:0,"aria-label":r||e,onClick:s,onKeyDown:l,children:h.jsxs("div",{className:"modeRowText",children:[h.jsxs("div",{className:"modeRowTitle",children:[e,o?h.jsx("span",{className:"modeRowTitleRight",children:o}):null]}),h.jsx("div",{className:"modeRowDesc",children:n})]})})});function tI({dailyBoards:t,setDailyBoards:e,marathonLevels:n}){const r=Lo(),[s,i]=g.useState(!1),[o,a]=g.useState(!1),[l,c]=g.useState(!1),[u,d]=g.useState(!1),[f,p]=g.useState(""),{user:m}=Ei(),[S,k]=g.useState(0),[W,M]=g.useState(0);g.useEffect(()=>{let Z=!0;const se=async pe=>{const Ee=au(pe);let je=null;if(m)try{const lt=U(j,`users/${m.uid}/singlePlayer/meta/${Ee}`),y=await dt(lt);y.exists()&&(je=y.val()||null,je&&fr(Ee,je))}catch(lt){console.error("Failed to load remote marathon meta for home",lt)}return je||(je=Ja(Ee,null)),je};return(async()=>{const[pe,Ee]=await Promise.all([se(!1),se(!0)]);if(!Z)return;const je=pe&&typeof pe.index=="number"?pe.index:0,lt=Ee&&typeof Ee.index=="number"?Ee.index:0;k(je),M(lt)})(),()=>{Z=!1}},[m]),g.useMemo(()=>n[n.length-1],[n]),g.useMemo(()=>n[S]||n[0],[n,S]),g.useMemo(()=>n[W]||n[0],[n,W]);const oe=g.useCallback(()=>i(!1),[]),E=g.useCallback(()=>i(!0),[]),z=g.useCallback(()=>{fr("mw:dailyBoards",t),r(`/game/daily/${t}`)},[t,r]),Ke=g.useCallback(()=>{fr("mw:dailyBoards",t),r(`/game/daily/${t}/speedrun`)},[t,r]),Ze=g.useCallback(()=>{const Z={};if([!1,!0].forEach(se=>{const pe=YC(t,se),Ee=lu("daily",t,se);Qn(pe),Qn(Ee),m&&(Z[`users/${m.uid}/singlePlayer/gameStates/${pe}`]=null,Z[`users/${m.uid}/singlePlayer/solvedStates/${Ee}`]=null)}),m&&Object.keys(Z).length>0)try{const se=U(j);hr(se,Z).catch(pe=>{console.error("Failed to clear remote daily progress",pe)})}catch(se){console.error("Failed to queue remote daily progress reset",se)}},[t,m]),Ht=g.useCallback(()=>{r("/game/marathon")},[r]),at=g.useCallback(()=>{r("/game?mode=marathon&speedrun=true")},[r]),ae=g.useCallback(()=>{const Z={};if([!1,!0].forEach(se=>{const pe=QC(se),Ee=au(se);Qn(pe),Qn(Ee),m&&(Z[`users/${m.uid}/singlePlayer/gameStates/${pe}`]=null,Z[`users/${m.uid}/singlePlayer/meta/${Ee}`]=null),n.forEach((je,lt)=>{const y=lu("marathon",je,se,lt);Qn(y),m&&(Z[`users/${m.uid}/singlePlayer/solvedStates/${y}`]=null)})}),m&&Object.keys(Z).length>0)try{const se=U(j);hr(se,Z).catch(pe=>{console.error("Failed to clear remote marathon progress",pe)})}catch(se){console.error("Failed to queue remote marathon progress reset",se)}k(0),M(0)},[n,m]),hn=g.useMemo(()=>`${t} board${t>1?"s":""}`,[t]);return h.jsxs(h.Fragment,{children:[h.jsxs(Lg,{children:[h.jsx("title",{children:"Better Wordle"}),h.jsx("meta",{name:"description",content:"Better Wordle is a Wordle alternative with multi-board daily puzzles, marathon and speedrun modes, and Multiplayer Mode battles with friends."})]}),h.jsx("div",{className:"homeRoot",children:h.jsxs("div",{className:"homeInner",children:[h.jsx(GC,{onOpenFeedback:E,onSignUpComplete:Z=>{p(Z),d(!0)}}),h.jsx(gd,{isOpen:u,onRequestClose:()=>d(!1),titleId:"verify-email-modal-title",children:h.jsxs("div",{style:{padding:"24px",textAlign:"left"},children:[h.jsx("h2",{id:"verify-email-modal-title",style:{margin:"0 0 16px 0",fontSize:20,fontWeight:"bold",color:"#ffffff"},children:"Verify your email"}),h.jsxs("p",{style:{margin:"0 0 12px 0",fontSize:14,color:"#d7dadc",lineHeight:1.5},children:["We've sent a verification link to"," ",h.jsx("span",{style:{fontWeight:"bold"},children:f||"your email address"}),"."]}),h.jsx("p",{style:{margin:"0 0 16px 0",fontSize:14,color:"#d7dadc",lineHeight:1.5},children:"Please open that email and click the link to verify your account. Once verified, you'll be able to play Multiplayer Mode and use friends. Check your Spam or Junk folder for the verification link."}),h.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:h.jsx("button",{type:"button",className:"homeBtn homeBtnGreen homeBtnLg",onClick:()=>d(!1),style:{minWidth:120},children:"Got it"})})]})}),h.jsx(g.Suspense,{fallback:null,children:h.jsx(XC,{isOpen:s,onRequestClose:oe})}),h.jsx(g.Suspense,{fallback:null,children:h.jsx(ZC,{isOpen:o,onRequestClose:()=>a(!1),showConfigFirst:l,onConfigClose:()=>c(!1),onConfigOpen:()=>c(!0)})}),h.jsxs("main",{children:[h.jsxs("section",{className:"panel",children:[h.jsxs("div",{className:"panelTop",children:[h.jsxs("div",{children:[h.jsx("h2",{className:"panelTitle",children:"Daily Puzzles"}),h.jsx("div",{className:"panelDesc",children:"Choose how many words you want to play simultaneously."})]}),h.jsxs("div",{className:"selector",children:[h.jsx("label",{className:"label",htmlFor:"dailyBoards",children:"Simultaneous words"}),h.jsx("select",{id:"dailyBoards",value:t,onChange:Z=>e(parseInt(Z.target.value,10)),className:"select",children:eI.map(Z=>h.jsx("option",{value:Z,children:Z},Z))})]})]}),h.jsxs("div",{className:"panelBody",children:[h.jsx(Jn,{title:"Daily (standard)",desc:"Limited turns. No timer. Good for casual play.",buttonText:"Play Daily",onClick:z,variant:"green",modeVariant:"daily",titleRight:hn}),h.jsx(Jn,{title:"Daily (speedrun)",desc:"Unlimited guesses. Timer starts immediately.",buttonText:"Speedrun Daily",onClick:Ke,variant:"green",modeVariant:"daily",titleRight:hn}),h.jsx("button",{type:"button",className:"homeBtn homeBtnOutline",onClick:Ze,style:{marginTop:"12px"},children:"Reset today's daily guesses"})]})]}),h.jsxs("section",{className:"panel",children:[h.jsx("div",{className:"panelTop",children:h.jsxs("div",{children:[h.jsx("h2",{className:"panelTitle",children:"Marathon Puzzles"}),h.jsx("div",{className:"panelDesc",children:"Solve 1 word, then 2, then 3, ending at 4. Complete all stages to win."})]})}),h.jsxs("div",{className:"panelBody",children:[h.jsx(Jn,{title:"Marathon (standard)",desc:"Play standard marathon. Limited turns. No timer.",buttonText:"Play Marathon",onClick:Ht,variant:"gold",modeVariant:"marathon",titleRight:`Stage ${S+1}/${n.length}`}),h.jsx(Jn,{title:"Marathon (speedrun)",desc:"Play speedrun marathon. Unlimited guesses, timed cumulative.",buttonText:"Speedrun Marathon",onClick:at,variant:"gold",modeVariant:"marathon",titleRight:`Stage ${W+1}/${n.length}`}),h.jsx("button",{type:"button",className:"homeBtn homeBtnOutline",onClick:ae,style:{marginTop:"12px"},children:"Reset today's marathon guesses"})]})]}),h.jsxs("section",{className:"panel",children:[h.jsx("div",{className:"panelTop",children:h.jsxs("div",{children:[h.jsx("h2",{className:"panelTitle",children:"Multiplayer Wordle Battles With Friends"}),h.jsx("div",{className:"panelDesc",children:"Host or join real-time rooms with friends and play together."})]})}),h.jsx("div",{className:"panelBody",children:h.jsx(Jn,{title:"Multiplayer Mode",desc:"Create a room, invite friends, or join by code.",buttonText:"Play Multiplayer",onClick:()=>a(!0),variant:"gold",modeVariant:"pvp"})})]}),h.jsx("section",{className:"homeIntro",children:h.jsxs("details",{className:"homeIntroDetails",children:[h.jsx("summary",{className:"homeIntroSummary",children:"Click here to know more about Better Wordle."}),h.jsx("h1",{className:"homeTitle",children:"Better Wordle – Advanced Multi-Board & Multiplayer Wordle-Style Game"}),h.jsx("p",{className:"homeIntroParagraph",children:"Better Wordle is a free, browser-based Wordle-style puzzle game that you can play on any device. No downloads or sign-in required to get started – just open the site and start solving."}),h.jsx("p",{className:"homeIntroParagraph",children:"Play up to 32 boards at once with daily multi-board puzzles, push yourself with marathon stages and speedrun timers, and challenge friends in real-time Multiplayer Mode battles. Your best speedrun times can appear on the global Better Wordle leaderboard."}),h.jsxs("p",{className:"homeIntroParagraph",children:["New to Better Wordle? Read the"," ",h.jsx(fn,{to:"/faq",className:"homeLink",children:"Better Wordle FAQ"})," ","or jump straight to the"," ",h.jsx(fn,{to:"/leaderboard",className:"homeLink",children:"global Better Wordle leaderboard"})," ","to see top players. You can also explore specific modes: ",h.jsx(fn,{to:"/multiplayer-wordle",className:"homeLink",children:"multiplayer / 1v1 battles"}),","," ",h.jsx(fn,{to:"/multi-board-wordle",className:"homeLink",children:"multi-board Wordle"}),","," ",h.jsx(fn,{to:"/wordle-speedrun",className:"homeLink",children:"Wordle speedrun"}),", and"," ",h.jsx(fn,{to:"/wordle-marathon",className:"homeLink",children:"Wordle marathon"}),"."]})]})})]})]})})]})}const gn=g.lazy(()=>Ge(()=>import("./Game-D8_jSgNn.js"),__vite__mapDeps([8,1,9]))),nI=g.lazy(()=>Ge(()=>import("./Profile-BMTDTbwR.js"),__vite__mapDeps([10,1,11]))),rI=g.lazy(()=>Ge(()=>import("./Leaderboard-BRCIY4cR.js"),__vite__mapDeps([12,1,13,14]))),sI=g.lazy(()=>Ge(()=>import("./Faq-Bj3_fhvv.js"),__vite__mapDeps([15,1,6,16]))),iI=g.lazy(()=>Ge(()=>import("./MultiplayerWordleLanding-DvgtvuKV.js"),__vite__mapDeps([17,1,18,19]))),oI=g.lazy(()=>Ge(()=>import("./MultiBoardWordleLanding-DnyUiC_d.js"),__vite__mapDeps([20,1,18,19]))),aI=g.lazy(()=>Ge(()=>import("./WordleSpeedrunLanding-CBmBlIJq.js"),__vite__mapDeps([21,1,18,19]))),lI=g.lazy(()=>Ge(()=>import("./WordleMarathonLanding-BDXsiGZk.js"),__vite__mapDeps([22,1,18,19]))),cI=[1,2,3,4];function uI(){const t=Uf(),[e,n]=g.useState(1);g.useEffect(()=>{if(t.pathname==="/"){const s=window.location.pathname,i="/better-wordle/",o=i.endsWith("/")?i.slice(0,-1):i,a=o+"/";if(s===o){const l=a+window.location.search+window.location.hash;window.history.replaceState(null,"",l)}}},[t.pathname]),g.useEffect(()=>{(t.pathname==="/"||t.pathname.endsWith("/"))&&n(1)},[t.pathname]),g.useEffect(()=>{typeof window<"u"&&window.matchMedia&&window.matchMedia("(max-width: 768px)").matches&&window.scrollTo({top:0,left:0,behavior:"auto"})},[t.pathname]);const r=g.useMemo(()=>cI,[]);return h.jsx(g.Suspense,{fallback:h.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#121213",color:"#ffffff"},children:"Loading…"}),children:h.jsxs(jf,{children:[h.jsx(Se,{path:"/",element:h.jsx(tI,{dailyBoards:e,setDailyBoards:n,marathonLevels:r})}),h.jsx(Se,{path:"/game",element:h.jsx(gn,{marathonLevels:r})}),h.jsx(Se,{path:"/game/:mode",element:h.jsx(gn,{marathonLevels:r})}),h.jsx(Se,{path:"/game/:mode/:boards",element:h.jsx(gn,{marathonLevels:r})}),h.jsx(Se,{path:"/game/:mode/:boards/:variant",element:h.jsx(gn,{marathonLevels:r})}),h.jsx(Se,{path:"/game/multiplayer/:code",element:h.jsx(gn,{marathonLevels:r})}),h.jsx(Se,{path:"/game/multiplayer/:code/:variant",element:h.jsx(gn,{marathonLevels:r})}),h.jsx(Se,{path:"/profile",element:h.jsx(nI,{})}),h.jsx(Se,{path:"/leaderboard",element:h.jsx(rI,{})}),h.jsx(Se,{path:"/faq",element:h.jsx(sI,{})}),h.jsx(Se,{path:"/multiplayer-wordle",element:h.jsx(iI,{})}),h.jsx(Se,{path:"/multi-board-wordle",element:h.jsx(oI,{})}),h.jsx(Se,{path:"/wordle-speedrun",element:h.jsx(aI,{})}),h.jsx(Se,{path:"/wordle-marathon",element:h.jsx(lI,{})}),h.jsx(Se,{path:"*",element:h.jsx(Bf,{to:"/",replace:!0})})]})})}const dI=["/","/game","/leaderboard","/faq","/profile","/multiplayer-wordle","/multi-board-wordle","/wordle-speedrun","/wordle-marathon"];function hI(t){var n,r,s,i,o,a;const e=[...((r=(n=t==null?void 0:t.meta)==null?void 0:n.toComponent)==null?void 0:r.call(n))||[],...((i=(s=t==null?void 0:t.link)==null?void 0:s.toComponent)==null?void 0:i.call(s))||[],...((a=(o=t==null?void 0:t.script)==null?void 0:o.toComponent)==null?void 0:a.call(o))||[]].flat().filter(Boolean);return new Set(e.map(l=>({type:l.type,props:l.props})))}async function CI(t){var i,o;const e=(t==null?void 0:t.url)||"/",n={},r=ng(h.jsx(md,{context:n,children:h.jsx(rg,{location:e,basename:"/better-wordle",children:h.jsx(uI,{})})})),s=n.helmet;return{html:r,links:new Set(dI),head:{lang:"en",title:((o=(i=s==null?void 0:s.title)==null?void 0:i.toString)==null?void 0:o.call(i).replace(/<\/?title>/g,""))||"Better Wordle",elements:hI(s)}}}export{uI as A,yI as B,_I as C,vI as D,md as H,gd as M,GC as S,Ge as _,Lg as a,Rf as b,gI as c,j as d,C as e,We as f,dt as g,Af as h,hr as i,h as j,Vr as k,EI as l,lu as m,Ja as n,Xr as o,mI as p,CI as prerender,wI as q,U as r,Gt as s,Pf as t,Ei as u,fr as v,QC as w,YC as x,au as y,SI as z};