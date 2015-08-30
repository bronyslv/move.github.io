/* Zepto v1.1.6 - zepto event ajax form ie - zeptojs.com/license */
var Zepto=function(){function L(t){return null==t?String(t):j[S.call(t)]||"object"}function Z(t){return"function"==L(t)}function _(t){return null!=t&&t==t.window}function $(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function D(t){return"object"==L(t)}function M(t){return D(t)&&!_(t)&&Object.getPrototypeOf(t)==Object.prototype}function R(t){return"number"==typeof t.length}function k(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function F(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||c[F(t)]?e:e+"px"}function I(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function B(n,i,r){for(e in i)r&&(M(i[e])||A(i[e]))?(M(i[e])&&!M(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),B(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function U(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return Z(e)?e.call(t,n,i):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className||"",r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}function G(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},S=j.toString,T={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return T.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~T.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},T.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),M(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},T.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},T.isZ=function(t){return t instanceof T.Z},T.init=function(e,i){var r;if(!e)return T.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=T.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}else{if(Z(e))return n(a).ready(e);if(T.isZ(e))return e;if(A(e))r=k(e);else if(D(e))r=[e],e=null;else if(l.test(e))r=T.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}}return T.Z(r,e)},n=function(t,e){return T.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){B(t,n,e)}),t},T.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return $(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=a.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=L,n.isFunction=Z,n.isWindow=_,n.isArray=A,n.isPlainObject=M,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(R(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return z(i)},n.each=function(t,e){var n,i;if(R(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return Z(t)?this.not(this.not(t)):n(s.call(this,function(e){return T.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&T.matches(this[0],t)},not:function(e){var i=[];if(Z(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):R(e)&&Z(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!D(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(T.qsa(this[0],t)):this.map(function(){return T.qsa(this,t)}):n()},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:T.matches(i,t));)i=i!==e&&!$(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!$(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return U(e,t)},parent:function(t){return U(N(this.pluck("parentNode")),t)},children:function(t){return U(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=I(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=Z(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=Z(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=J(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(D(n))for(e in n)X(this,e,n[e]);else X(this,n,J(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){X(this,t)},this)})},prop:function(t,e){return t=P[t]||t,1 in arguments?this.each(function(n){this[t]=J(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(m,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?Y(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=J(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r,o=this[0];if(!o)return;if(r=getComputedStyle(o,""),"string"==typeof t)return o.style[C(t)]||r.getPropertyValue(t);if(A(t)){var s={};return n.each(t,function(t,e){s[e]=o.style[C(e)]||r.getPropertyValue(e)}),s}}var a="";if("string"==L(t))i||0===i?a=F(t)+":"+H(t,i):this.each(function(){this.style.removeProperty(F(t))});else for(e in t)t[e]||0===t[e]?a+=F(e)+":"+H(e,t[e])+";":this.each(function(){this.style.removeProperty(F(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var r=W(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?" ":"")+i.join(" "))}}):this},removeClass:function(e){return this.each(function(n){if("className"in this){if(e===t)return W(this,"");i=W(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")}),W(this,i.trim())}})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,W(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?_(s)?s["inner"+i]:$(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),"object"==t||"array"==t||null==e?e:T.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;var f=n.contains(a.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,u),f&&G(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),T.Z.prototype=n.fn,T.uniq=N,T.deserializeValue=Y,n.zepto=T,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function S(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var a=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return a._zid=l(e),a}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(S(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){e.type in f&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=S(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function h(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function p(t,e,i,r){return t.global?h(e||n,i,r):void 0}function d(e){e.global&&0===t.active++&&p(e,null,"ajaxStart")}function m(e){e.global&&!--t.active&&p(e,null,"ajaxStop")}function g(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||p(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void p(e,n,"ajaxSend",[t,e])}function v(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),p(n,r,"ajaxSuccess",[e,n,t]),x(o,e,n)}function y(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),p(i,o,"ajaxError",[n,i,t||e]),x(e,n,i)}function x(t,e,n){var i=n.context;n.complete.call(i,e,t),p(n,i,"ajaxComplete",[e,n]),m(n)}function b(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function E(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function j(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=E(e.url,e.data),e.data=void 0)}function S(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function C(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?C(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/,l=n.createElement("a");l.href=window.location.href,t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?v(f[0],l,i,r):y(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),g(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:b,success:b,error:b,complete:b,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var a,o=t.extend({},e||{}),s=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===o[i]&&(o[i]=t.ajaxSettings[i]);d(o),o.crossDomain||(a=n.createElement("a"),a.href=o.url,a.href=a.href,o.crossDomain=l.protocol+"//"+l.host!=a.protocol+"//"+a.host),o.url||(o.url=window.location.toString()),j(o);var u=o.dataType,f=/\?.+=\?/.test(o.url);if(f&&(u="jsonp"),o.cache!==!1&&(e&&e.cache===!0||"script"!=u&&"jsonp"!=u)||(o.url=E(o.url,"_="+Date.now())),"jsonp"==u)return f||(o.url=E(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===!1?"":"callback=?")),t.ajaxJSONP(o,s);var C,h=o.accepts[u],p={},m=function(t,e){p[t.toLowerCase()]=[t,e]},x=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,S=o.xhr(),T=S.setRequestHeader;if(s&&s.promise(S),o.crossDomain||m("X-Requested-With","XMLHttpRequest"),m("Accept",h||"*/*"),(h=o.mimeType||h)&&(h.indexOf(",")>-1&&(h=h.split(",",2)[0]),S.overrideMimeType&&S.overrideMimeType(h)),(o.contentType||o.contentType!==!1&&o.data&&"GET"!=o.type.toUpperCase())&&m("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers)for(r in o.headers)m(r,o.headers[r]);if(S.setRequestHeader=m,S.onreadystatechange=function(){if(4==S.readyState){S.onreadystatechange=b,clearTimeout(C);var e,n=!1;if(S.status>=200&&S.status<300||304==S.status||0==S.status&&"file:"==x){u=u||w(o.mimeType||S.getResponseHeader("content-type")),e=S.responseText;try{"script"==u?(1,eval)(e):"xml"==u?e=S.responseXML:"json"==u&&(e=c.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?y(n,"parsererror",S,o,s):v(e,S,o,s)}else y(S.statusText||null,S.status?"error":"abort",S,o,s)}},g(S,o)===!1)return S.abort(),y(null,"abort",S,o,s),S;if(o.xhrFields)for(r in o.xhrFields)S[r]=o.xhrFields[r];var N="async"in o?o.async:!0;S.open(o.type,o.url,N,o.username,o.password);for(r in p)T.apply(S,p[r]);return o.timeout>0&&(C=setTimeout(function(){S.onreadystatechange=b,S.abort(),y(null,"timeout",S,o,s)},o.timeout)),S.send(o.data?o.data:null),S},t.get=function(){return t.ajax(S.apply(null,arguments))},t.post=function(){var e=S.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=S.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=S(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var T=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(T(e)+"="+T(n))},C(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);
!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.returnExportsGlobal=b()}):"object"==typeof exports?module.exports=b():a.Formatter=b()}(this,function(){var a=function(){var a={},b=4,c=new RegExp("{{([^}]+)}}","g"),d=function(a){for(var b,d=[];b=c.exec(a);)d.push(b);return d};return a.parse=function(a){var c={inpts:{},chars:{}},e=d(a),f=a.length,g=0,h=0,i=0,j=function(a){for(var d=a.length,e=0;d>e;e++)c.inpts[h]=a.charAt(e),h++;g++,i+=a.length+b-1};for(i;f>i;i++)g<e.length&&i===e[g].index?j(e[g][1]):c.chars[i-g*b]=a.charAt(i);return c.mLength=i-g*b,c},a}(),b=function(){{var a={};"undefined"!=typeof navigator?navigator.userAgent:null}return a.extend=function(a){for(var b=1;b<arguments.length;b++)for(var c in arguments[b])a[c]=arguments[b][c];return a},a.addChars=function(a,b,c){return a.substr(0,c)+b+a.substr(c,a.length)},a.removeChars=function(a,b,c){return a.substr(0,b)+a.substr(c,a.length)},a.isBetween=function(a,b){return b.sort(function(a,b){return a-b}),a>b[0]&&a<b[1]},a.addListener=function(a,b,c){return"undefined"!=typeof a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)},a.preventDefault=function(a){return a.preventDefault?a.preventDefault():a.returnValue=!1},a.getClip=function(a){return a.clipboardData?a.clipboardData.getData("Text"):window.clipboardData?window.clipboardData.getData("Text"):void 0},a.getMatchingKey=function(a,b,c){for(var d in c){var e=c[d];if(a===e.which&&b===e.keyCode)return d}},a.isDelKeyDown=function(b,c){var d={backspace:{which:8,keyCode:8},"delete":{which:46,keyCode:46}};return a.getMatchingKey(b,c,d)},a.isDelKeyPress=function(b,c){var d={backspace:{which:8,keyCode:8,shiftKey:!1},"delete":{which:0,keyCode:46}};return a.getMatchingKey(b,c,d)},a.isSpecialKeyPress=function(b,c){var d={tab:{which:0,keyCode:9},enter:{which:13,keyCode:13},end:{which:0,keyCode:35},home:{which:0,keyCode:36},leftarrow:{which:0,keyCode:37},uparrow:{which:0,keyCode:38},rightarrow:{which:0,keyCode:39},downarrow:{which:0,keyCode:40},F5:{which:116,keyCode:116}};return a.getMatchingKey(b,c,d)},a.isModifier=function(a){return a.ctrlKey||a.altKey||a.metaKey},a.forEach=function(a,b,c){if(a.hasOwnProperty("length"))for(var d=0,e=a.length;e>d&&b.call(c,a[d],d,a)!==!1;d++);else for(var f in a)if(a.hasOwnProperty(f)&&b.call(c,a[f],f,a)===!1)break},a}(),c=function(a,b){function c(c){var e=[],f=[];b.forEach(c,function(c){b.forEach(c,function(b,c){var g=a.parse(b),h=d(c);return e.push(h),f.push(g),!1})});var g=function(a){var c;return b.forEach(e,function(b,d){return b.test(a)?(c=d,!1):void 0}),void 0===c?null:f[c]};return{getPattern:g,patterns:f,matchers:e}}var d=function(a){return"*"===a?/.*/:new RegExp(a)};return c}(a,b),d=function(){var a={};return a.get=function(a){if("number"==typeof a.selectionStart)return{begin:a.selectionStart,end:a.selectionEnd};var b=document.selection.createRange();if(b&&b.parentElement()===a){var c=a.createTextRange(),d=a.createTextRange(),e=a.value.length;return c.moveToBookmark(b.getBookmark()),d.collapse(!1),c.compareEndPoints("StartToEnd",d)>-1?{begin:e,end:e}:{begin:-c.moveStart("character",-e),end:-c.moveEnd("character",-e)}}return{begin:0,end:0}},a.set=function(a,b){if("object"!=typeof b&&(b={begin:b,end:b}),a.setSelectionRange)a.focus(),a.setSelectionRange(b.begin,b.end);else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0),c.moveEnd("character",b.end),c.moveStart("character",b.begin),c.select()}},a}(),e=function(a,b,c){function d(b,d){var f=this;if(f.el=b,!f.el)throw new TypeError("Must provide an existing element");if(f.opts=c.extend({},e,d),"undefined"!=typeof f.opts.pattern&&(f.opts.patterns=f._specFromSinglePattern(f.opts.pattern),delete f.opts.pattern),"undefined"==typeof f.opts.patterns)throw new TypeError("Must provide a pattern or array of patterns");f.patternMatcher=a(f.opts.patterns),f._updatePattern(),f.hldrs={},f.focus=0,c.addListener(f.el,"keydown",function(a){f._keyDown(a)}),c.addListener(f.el,"keypress",function(a){f._keyPress(a)}),c.addListener(f.el,"paste",function(a){f._paste(a)}),f.opts.persistent&&(f._processKey("",!1),f.el.blur(),c.addListener(f.el,"focus",function(a){f._focus(a)}),c.addListener(f.el,"click",function(a){f._focus(a)}),c.addListener(f.el,"touchstart",function(a){f._focus(a)}))}var e={persistent:!1,repeat:!1,placeholder:" "},f={9:/[0-9]/,a:/[A-Za-z]/,"*":/[A-Za-z0-9]/};return d.addInptType=function(a,b){f[a]=b},d.prototype.resetPattern=function(c){this.opts.patterns=c?this._specFromSinglePattern(c):this.opts.patterns,this.sel=b.get(this.el),this.val=this.el.value,this.delta=0,this._removeChars(),this.patternMatcher=a(this.opts.patterns);var d=this.patternMatcher.getPattern(this.val);this.mLength=d.mLength,this.chars=d.chars,this.inpts=d.inpts,this._processKey("",!1,!0)},d.prototype._updatePattern=function(){var a=this.patternMatcher.getPattern(this.val);a&&(this.mLength=a.mLength,this.chars=a.chars,this.inpts=a.inpts)},d.prototype._keyDown=function(a){var b=a.which||a.keyCode;return b&&c.isDelKeyDown(a.which,a.keyCode)?(this._processKey(null,b),c.preventDefault(a)):void 0},d.prototype._keyPress=function(a){var b,d;return b=a.which||a.keyCode,d=c.isSpecialKeyPress(a.which,a.keyCode),c.isDelKeyPress(a.which,a.keyCode)||d||c.isModifier(a)?void 0:(this._processKey(String.fromCharCode(b),!1),c.preventDefault(a))},d.prototype._paste=function(a){return this._processKey(c.getClip(a),!1),c.preventDefault(a)},d.prototype._focus=function(){var a=this;setTimeout(function(){var c=b.get(a.el),d=c.end>a.focus,e=0===c.end;(d||e)&&b.set(a.el,a.focus)},0)},d.prototype._processKey=function(a,d,e){if(this.sel=b.get(this.el),this.val=this.el.value,this.delta=0,this.sel.begin!==this.sel.end)this.delta=-1*Math.abs(this.sel.begin-this.sel.end),this.val=c.removeChars(this.val,this.sel.begin,this.sel.end);else if(d&&46===d)this._delete();else if(d&&this.sel.begin-1>=0)this.val=c.removeChars(this.val,this.sel.end-1,this.sel.end),this.delta-=1;else if(d)return!0;d||(this.val=c.addChars(this.val,a,this.sel.begin),this.delta+=a.length),this._formatValue(e)},d.prototype._delete=function(){for(;this.chars[this.sel.begin];)this._nextPos();this.sel.begin<this.val.length&&(this._nextPos(),this.val=c.removeChars(this.val,this.sel.end-1,this.sel.end),this.delta=-1)},d.prototype._nextPos=function(){this.sel.end++,this.sel.begin++},d.prototype._formatValue=function(a){this.newPos=this.sel.end+this.delta,this._removeChars(),this._updatePattern(),this._validateInpts(),this._addChars(),this.el.value=this.val.substr(0,this.mLength),("undefined"==typeof a||a===!1)&&b.set(this.el,this.newPos)},d.prototype._removeChars=function(){this.sel.end>this.focus&&(this.delta+=this.sel.end-this.focus);for(var a=0,b=0;b<=this.mLength;b++){var d,e=this.chars[b],f=this.hldrs[b],g=b+a;g=b>=this.sel.begin?g+this.delta:g,d=this.val.charAt(g),(e&&e===d||f&&f===d)&&(this.val=c.removeChars(this.val,g,g+1),a--)}this.hldrs={},this.focus=this.val.length},d.prototype._validateInpts=function(){for(var a=0;a<this.val.length;a++){var b=this.inpts[a],d=!f[b],e=!d&&!f[b].test(this.val.charAt(a)),g=this.inpts[a];(d||e)&&g&&(this.val=c.removeChars(this.val,a,a+1),this.focusStart--,this.newPos--,this.delta--,a--)}},d.prototype._addChars=function(){if(this.opts.persistent){for(var a=0;a<=this.mLength;a++)this.val.charAt(a)||(this.val=c.addChars(this.val,this.opts.placeholder,a),this.hldrs[a]=this.opts.placeholder),this._addChar(a);for(;this.chars[this.focus];)this.focus++}else for(var b=0;b<=this.val.length;b++){if(this.delta<=0&&b===this.focus)return!0;this._addChar(b)}},d.prototype._addChar=function(a){var b=this.chars[a];return b?(c.isBetween(a,[this.sel.begin-1,this.newPos+1])&&(this.newPos++,this.delta++),a<=this.focus&&this.focus++,this.hldrs[a]&&(delete this.hldrs[a],this.hldrs[a+1]=this.opts.placeholder),void(this.val=c.addChars(this.val,b,a))):!0},d.prototype._specFromSinglePattern=function(a){return[{"*":a}]},d}(c,d,b);return e});

(function () {
  'use strict'

  var $ = window.$
  var $form = $('#form')
  var $firstname = $('#firstname')
  var $lastname = $('#lastname')
  var $middlename = $('#middlename')
  var $mail = $('#mail')
  var $phone = $('#phone')
  var $code = $('#code')
  var $warnings = $('#warnings')
  var $warnings2 = $('#warnings2')
  var $btn = $('#form-0-act')

  window.state = 'init'

  function setCookie (cname, cvalue, exdays) {
    var d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    var expires = 'expires=' + d.toUTCString()
    document.cookie = cname + '=' + cvalue + '; ' + expires
  }

  function clean_phone (phone) {
    return phone.replace(/[^0-9]/g, '')
  }

  function setState (state, options) {
    if (!options) options = {}

    if (options.focusOn) {
      options.focus.focus()
    }

    if (options.error) {
      $warnings
        .text(options.error)
        .show(200)
    }

    switch (state) {
      case 'sms:wait':
        $btn.attr('disabled', 'disabled')
        break
    }

    window.state = state
  }

  function getSms (phone) {
    setState('sms:wait')
    $.get('https://shipment.herokuapp.com/api/v2/sms_code/?phone=' + clean_phone(phone),
      function (resp) {
        if (!resp.success) {
          setState('sms:fail', {
            error: resp.message,
            focusOn: $phone
          })
        } else {
          setState('sms:success')
          var btnText = ''
          if (resp.is_registered) {
            btnText = 'Войти'
          } else {
            btnText = 'Зарегистрироваться'
          }
          $btn
            .text(btnText)
            .removeAttr('disabled')
          $code
            .removeAttr('disabled')
            .focus()
            .parent()
            .css('opacity', '1')
        }
      })
  }

  function getToken (code, phone) {
    phone = clean_phone(phone)
    $btn.attr('disabled', 'disabled')

    setState('token:wait')
    $.get('https://shipment.herokuapp.com/api/v2/token/' +
      '?phone=' + phone + '&code=' + code,
      function (resp) {
        if (!resp.success) {
          setState('token:fail')
          $btn.removeAttr('disabled')
          $warnings
            .text(resp.message)
            .show(200)
          return
        }
        setState('token:success')
        $btn.removeAttr('disabled')
        window.token = resp.token
        if (resp.is_registered) {
          setCookie('userToken', resp.token, 14)
          window.location.href = '/#orders'
          window.location.reload()
        } else {
          $('#form-0').hide(200)
          $('#form-1').show(200)
          $warnings.hide(200)
        }
      }
    )
  }

  function register () {
    var data = {
      firstname: $firstname.val(),
      lastname: $lastname.val(),
      middlename: $middlename.val(),
      mail: $mail.val(),
      type_of_account:
        String($('.account-type__item--active').first().data('type')),
      phone: clean_phone($phone.val())
    }

    if (!data.mail || !data.phone) {
      $warnings2
        .show(200)
        .text('Заполните все поля')
      return
    }
    if (!data.firstname || !data.lastname || !data.middlename) {
      $warnings2
        .show(200)
        .text('Заполните все поля')
      return
    }

    $btn.attr('disabled', 'disabled')
    setCookie('userToken', window.token, 14)
    data.token = window.token
    setState('register:wait')
    $.post('https://shipment.herokuapp.com/api/v2/user/', data)
    .done(function (resp) {
      setState('register:done')
      window.location.href = '/#orders'
      window.location.reload()
    })
  }

  $(function () {

    var formatted = new Formatter($phone[0], {
      'pattern': '+7 ({{999}}) {{999}}-{{99}}-{{99}}'
    })
    $phone
    .on('focus', function (e) {
      var t = $(this).val()
      if (!t) {
        $(this).val('+7 ')
      }
    })
    .on('blur', function (e) {
      if ($(this).val() === '+7 ') {
        $(this).val('')
      }
    })
    .on('keyup', function (e) {
      if ($(this).val().length >= 18 && window.state === 'init') {
        $btn.removeAttr('disabled')
      }
      if (window.state !== 'init') {
        setState('init')
        $btn
          .text('Запросить код авторизации ')
          .attr('disabled', 'disabled')
        $code
          .attr('disabled', 'disabled')
          .parent()
          .css('opacity', '.4')
      }
    })

    $('.account-type__item').click(function () {
      $('.account-type__item img').each(function () {
        var src = $(this).attr('src')
        $(this).attr('src', src.replace('-active', ''))
      })
      $('.account-type__item').removeClass('account-type__item--active')
      $(this).addClass('account-type__item--active')
      var $img = $(this).find('img')
      var src = $img.attr('src')
      $img.attr('src', src.replace('.svg', '-active.svg'))
    })

    $code
      .on('keyup', function () {
        if ($(this).val().length >= 6 && window.state === 'sms:success') {
          $btn.removeAttr('disabled')
        }
      })

    $form.submit(function (e) {
      e.preventDefault()
      if ($code.val() && window.state === 'sms:success') {
        getToken($code.val(), $phone.val())
        return
      }
      if ($phone.val() && window.state === 'init') {
        getSms($phone.val())
        return
      }
      if (window.state === 'token:success') {
        register()
        return
      }
      $warnings
        .text('Введите телефон')
        .show(200)
      $phone.focus()

    })

    function setHash (hash) {
      hash = hash.replace(/^#/, '')
      var node = $('#' + hash)
      if (node.length) {
        node.attr('id', '')
      }
      document.location.hash = hash
      if (node.length) {
        node.attr('id', hash)
      }
      hash = hash.replace(/^#/, '')
      var fx
      node = $('#' + hash)
      if (node.length) {
        node.attr('id', '')
        fx = $('<div></div>')
        .css({
          position: 'absolute',
          visibility: 'hidden',
          top: $(document).scrollTop() + 'px'
        })
          .attr('id', hash)
          .appendTo(document.body)
      }
      document.location.hash = hash
      if (node.length) {
        fx.remove()
        node.attr('id', hash)
      }
    }

    $('a').click(function (e) {
      var href = $(this).attr('href')
      if (href[0] !== '#') {
        return true
      }
      e.preventDefault()
      $('body').animate({
        scrollTop: $(href).offset().top - 72
      }, 500, function () {
        setHash(href)
      })
      return false
    })
  })
}())
