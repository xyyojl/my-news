!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=168)}({0:function(e,t){var o=e.exports={version:"2.6.12"};"number"==typeof __e&&(__e=o)},1:function(e,t,o){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=function(e,t){var o=e[1]||"",r=e[3];if(!r)return o;if(t&&"function"==typeof btoa){var n=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[o].concat(i).concat([n]).join("\n")}var a;return[o].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o})).join("")},t.i=function(e,o){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},n=0;n<this.length;n++){var i=this[n][0];null!=i&&(r[i]=!0)}for(n=0;n<e.length;n++){var a=e[n];null!=a[0]&&r[a[0]]||(o&&!a[2]?a[2]=o:o&&(a[2]="("+a[2]+") and ("+o+")"),t.push(a))}},t}},168:function(e,t,o){"use strict";var r=l(o(33));o(39);var n=l(o(52)),i=l(o(169)),a=l(o(173)),s=o(5);function l(e){return e&&e.__esModule?e:{default:e}}!function(e){var t,o,l,c=document.querySelector("#app"),f=JSON.parse(localStorage.getItem("currentNews")),u=JSON.parse(localStorage.getItem("followedList")||"[]");function d(e){var t=JSON.parse(localStorage.getItem("followedList")||"[]");e?t.push(f):t=t.filter((function(e){return e.uniquekey!==f.uniquekey})),localStorage.setItem("followedList",(0,r.default)(t))}t=n.default.tpl({url:(0,s.getUrlQueryValue)("path"),title:"新闻详情",showLeftIcon:!0,showRightIcon:!1}),o=i.default.tpl(f.url),l=u.find((function(e){return e.uniquekey===f.uniquekey}))?a.default.follow():a.default.unfollow(),c.innerHTML+=t+o+l,a.default.bindEvent(d)}()},169:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=o(170),i=(r=n)&&r.__esModule?r:{default:r};o(171);var a=o(5);t.default={name:"NewFrame",tpl:function(e){return(0,a.tplReplace)(i.default,{url:e})}}},170:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='<iframe src="{{ url }}" frameborder="0" width="100%" height="100%" class="iframe"></iframe>';return __p}},171:function(e,t,o){var r=o(172);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(2)(r,n);r.locals&&(e.exports=r.locals)},172:function(e,t,o){(e.exports=o(1)(!1)).push([e.i,"iframe{margin-top:.44rem}\n",""])},173:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=o(174),i=(r=n)&&r.__esModule?r:{default:r};o(175);var a=o(5);t.default={name:"Follow",follow:function(){return(0,a.tplReplace)(i.default,{star:"star"})},unfollow:function(){return(0,a.tplReplace)(i.default,{star:"star-o"})},bindEvent:function(e){var t=document.querySelector(".follow");t.addEventListener("click",this._setFollow.bind(this,t,e))},_setFollow:function(e,t){var o=e.className;switch(e.className="follow iconfont icon-",o){case"follow iconfont icon-star":e.className+="star-o",t(!1);break;case"follow iconfont icon-star-o":e.className+="star",t(!0)}}}},174:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='<span class="follow iconfont icon-{{ star }}"></span>\r\n\x3c!-- 收藏状态 star => star 非收藏状态 star => star-0 --\x3e';return __p}},175:function(e,t,o){var r=o(176);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(2)(r,n);r.locals&&(e.exports=r.locals)},176:function(e,t,o){(e.exports=o(1)(!1)).push([e.i,".follow{position:fixed;top:.1rem;right:.15rem;z-index:3;font-size:.22rem}.follow.icon-star-o{color:#fff}.follow.icon-star{color:#FFD700}\n",""])},2:function(e,t,o){var r,n,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===n&&(n=r.apply(this,arguments)),n}),s=function(e,t){return t?t.querySelector(e):document.querySelector(e)},l=function(e){var t={};return function(e,o){if("function"==typeof e)return e();if(void 0===t[e]){var r=s.call(this,e,o);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),c=null,f=0,u=[],d=o(44);function p(e,t){for(var o=0;o<e.length;o++){var r=e[o],n=i[r.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](r.parts[a]);for(;a<r.parts.length;a++)n.parts.push(y(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(y(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function b(e,t){for(var o=[],r={},n=0;n<e.length;n++){var i=e[n],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):o.push(r[a]={id:a,parts:[s]})}return o}function h(e,t){var o=l(e.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?o.insertBefore(t,r.nextSibling):o.appendChild(t):o.insertBefore(t,o.firstChild),u.push(t);else if("bottom"===e.insertAt)o.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var n=l(e.insertAt.before,o);o.insertBefore(t,n)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function g(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return o.nc}();r&&(e.attrs.nonce=r)}return v(t,e.attrs),h(e,t),t}function v(e,t){Object.keys(t).forEach((function(o){e.setAttribute(o,t[o])}))}function y(e,t){var o,r,n,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var a=f++;o=c||(c=g(t)),r=k.bind(null,o,a,!1),n=k.bind(null,o,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(t,e.attrs),h(e,t),t}(t),r=E.bind(null,o,t),n=function(){m(o),o.href&&URL.revokeObjectURL(o.href)}):(o=g(t),r=A.bind(null,o),n=function(){m(o)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else n()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var o=b(e,t);return p(o,t),function(e){for(var r=[],n=0;n<o.length;n++){var a=o[n];(s=i[a.id]).refs--,r.push(s)}e&&p(b(e,t),t);for(n=0;n<r.length;n++){var s;if(0===(s=r[n]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var w,x=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")});function k(e,t,o,r){var n=o?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,n);else{var i=document.createTextNode(n),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function A(e,t){var o=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}function E(e,t,o){var r=o.css,n=o.sourceMap,i=void 0===t.convertToAbsoluteUrls&&n;(t.convertToAbsoluteUrls||i)&&(r=d(r)),n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}},20:function(e,t,o){e.exports=o.p+"img/iconfont-8ee1a30d93b4989f.eot"},32:function(e,t,o){"use strict";e.exports=function(e,t){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||t?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},33:function(e,t,o){e.exports={default:o(34),__esModule:!0}},34:function(e,t,o){var r=o(0),n=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return n.stringify.apply(n,arguments)}},39:function(e,t,o){"use strict";o(40),o(42),o(45),o(47)},40:function(e,t,o){"use strict";var r,n=o(41),i=(r=n)&&r.__esModule?r:{default:r};window.addEventListener("load",(function(){i.default.attach(document.body)}),!1),document.documentElement.addEventListener("touchmove",(function(e){e.touches.length>1&&e.preventDefault()})),document.documentElement.style.fontSize=document.documentElement.clientWidth/3.75+"px"},41:function(e,t,o){"use strict";function r(e,t){var o;if(t=t||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=t.touchBoundary||10,this.layer=e,this.tapDelay=t.tapDelay||200,this.tapTimeout=t.tapTimeout||700,!r.notNeeded(e)){for(var n=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],a=0,s=n.length;a<s;a++)this[n[a]]=l(this[n[a]],this);i&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,o,r){var n=Node.prototype.removeEventListener;"click"===t?n.call(e,t,o.hijacked||o,r):n.call(e,t,o,r)},e.addEventListener=function(t,o,r){var n=Node.prototype.addEventListener;"click"===t?n.call(e,t,o.hijacked||(o.hijacked=function(e){e.propagationStopped||o(e)}),r):n.call(e,t,o,r)}),"function"==typeof e.onclick&&(o=e.onclick,e.addEventListener("click",(function(e){o(e)}),!1),e.onclick=null)}function l(e,t){return function(){return e.apply(t,arguments)}}}Object.defineProperty(t,"__esModule",{value:!0});var n=navigator.userAgent.indexOf("Windows Phone")>=0,i=navigator.userAgent.indexOf("Android")>0&&!n,a=/iP(ad|hone|od)/.test(navigator.userAgent)&&!n,s=a&&/OS 4_\d(_\d)?/.test(navigator.userAgent),l=a&&/OS [6-7]_\d/.test(navigator.userAgent),c=navigator.userAgent.indexOf("BB10")>0;r.prototype.needsClick=function(e){switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(a&&"file"===e.type||e.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(e.className)},r.prototype.needsFocus=function(e){switch(e.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!i;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}},r.prototype.sendClick=function(e,t){var o,r;document.activeElement&&document.activeElement!==e&&document.activeElement.blur(),r=t.changedTouches[0],(o=document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(e),!0,!0,window,1,r.screenX,r.screenY,r.clientX,r.clientY,!1,!1,!1,!1,0,null),o.forwardedTouchEvent=!0,e.dispatchEvent(o)},r.prototype.determineEventType=function(e){return i&&"select"===e.tagName.toLowerCase()?"mousedown":"click"},r.prototype.focus=function(e){var t;a&&e.setSelectionRange&&0!==e.type.indexOf("date")&&"time"!==e.type&&"month"!==e.type&&"email"!==e.type?(t=e.value.length,e.setSelectionRange(t,t)):e.focus()},r.prototype.updateScrollParent=function(e){var t,o;if(!(t=e.fastClickScrollParent)||!t.contains(e)){o=e;do{if(o.scrollHeight>o.offsetHeight){t=o,e.fastClickScrollParent=o;break}o=o.parentElement}while(o)}t&&(t.fastClickLastScrollTop=t.scrollTop)},r.prototype.getTargetElementFromEventTarget=function(e){return e.nodeType===Node.TEXT_NODE?e.parentNode:e},r.prototype.onTouchStart=function(e){var t,o,r;if(e.targetTouches.length>1)return!0;if(t=this.getTargetElementFromEventTarget(e.target),o=e.targetTouches[0],a){if((r=window.getSelection()).rangeCount&&!r.isCollapsed)return!0;if(!s){if(o.identifier&&o.identifier===this.lastTouchIdentifier)return e.preventDefault(),!1;this.lastTouchIdentifier=o.identifier,this.updateScrollParent(t)}}return this.trackingClick=!0,this.trackingClickStart=e.timeStamp,this.targetElement=t,this.touchStartX=o.pageX,this.touchStartY=o.pageY,e.timeStamp-this.lastClickTime<this.tapDelay&&e.preventDefault(),!0},r.prototype.touchHasMoved=function(e){var t=e.changedTouches[0],o=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>o||Math.abs(t.pageY-this.touchStartY)>o},r.prototype.onTouchMove=function(e){return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e))&&(this.trackingClick=!1,this.targetElement=null),!0)},r.prototype.findControl=function(e){return void 0!==e.control?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},r.prototype.onTouchEnd=function(e){var t,o,r,n,c,f=this.targetElement;if(!this.trackingClick)return!0;if(e.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(e.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=e.timeStamp,o=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,l&&(c=e.changedTouches[0],(f=document.elementFromPoint(c.pageX-window.pageXOffset,c.pageY-window.pageYOffset)||f).fastClickScrollParent=this.targetElement.fastClickScrollParent),"label"===(r=f.tagName.toLowerCase())){if(t=this.findControl(f)){if(this.focus(f),i)return!1;f=t}}else if(this.needsFocus(f))return e.timeStamp-o>100||a&&window.top!==window&&"input"===r?(this.targetElement=null,!1):(this.focus(f),this.sendClick(f,e),a&&"select"===r||(this.targetElement=null,e.preventDefault()),!1);return!(!a||s||!(n=f.fastClickScrollParent)||n.fastClickLastScrollTop===n.scrollTop)||(this.needsClick(f)||(e.preventDefault(),this.sendClick(f,e)),!1)},r.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},r.prototype.onMouse=function(e){return!this.targetElement||(!!e.forwardedTouchEvent||(!e.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0,e.stopPropagation(),e.preventDefault(),!1))))},r.prototype.onClick=function(e){var t;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===e.target.type&&0===e.detail||((t=this.onMouse(e))||(this.targetElement=null),t)},r.prototype.destroy=function(){var e=this.layer;i&&(e.removeEventListener("mouseover",this.onMouse,!0),e.removeEventListener("mousedown",this.onMouse,!0),e.removeEventListener("mouseup",this.onMouse,!0)),e.removeEventListener("click",this.onClick,!0),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1),e.removeEventListener("touchcancel",this.onTouchCancel,!1)},r.notNeeded=function(e){var t,o,r;if(void 0===window.ontouchstart)return!0;if(o=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[void 0,0])[1]){if(!i)return!0;if(t=document.querySelector("meta[name=viewport]")){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(o>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(c&&(r=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1]>=10&&r[2]>=3&&(t=document.querySelector("meta[name=viewport]"))){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===e.style.msTouchAction||"manipulation"===e.style.touchAction||(!!(+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[void 0,0])[1]>=27&&(t=document.querySelector("meta[name=viewport]"))&&(-1!==t.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))||("none"===e.style.touchAction||"manipulation"===e.style.touchAction))},r.attach=function(e,t){return new r(e,t)},t.default=r},42:function(e,t,o){var r=o(43);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(2)(r,n);r.locals&&(e.exports=r.locals)},43:function(e,t,o){(e.exports=o(1)(!1)).push([e.i,'html{background-color:#f5f7f8;color:#000;font-size:12px}body,ul,ol,dl,dd,h1,h2,h3,h4,h5,h6,figure,form,fieldset,legend,input,textarea,button,p,blockquote,th,td,pre,xmp{margin:0;padding:0}body,input,textarea,button,select,pre,xmp,tt,code,kbd,samp{line-height:1.5;font-family:tahoma,arial,"Hiragino Sans GB",simsun,sans-serif}h1,h2,h3,h4,h5,h6,small,big,input,textarea,button,select{font-size:100%}h1,h2,h3,h4,h5,h6{font-family:tahoma,arial,"Hiragino Sans GB","微软雅黑",simsun,sans-serif}h1,h2,h3,h4,h5,h6,b,strong{font-weight:normal}address,cite,dfn,em,i,optgroup,var{font-style:normal}table{border-collapse:collapse;border-spacing:0;text-align:left}caption,th{text-align:inherit}ul,ol,menu{list-style:none}fieldset,img{border:0}img,object,input,textarea,button,select{vertical-align:middle}article,aside,footer,header,section,nav,figure,figcaption,hgroup,details,menu{display:block}audio,canvas,video{display:inline-block;*display:inline;*zoom:1}blockquote:before,blockquote:after,q:before,q:after{content:"\\0020"}textarea{overflow:auto;resize:vertical}input,textarea,button,select,a{outline:0 none;border:none;-webkit-box-sizing:border-box;box-sizing:border-box}button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}mark{background-color:transparent}a,ins,s,u,del{text-decoration:none}sup,sub{vertical-align:baseline}html{overflow-x:hidden;height:100%;font-size:50px;-webkit-tap-highlight-color:transparent}body{font-family:Arial, "Microsoft Yahei", "Helvetica Neue", Helvetica, sans-serif;color:#333;font-size:.28em;line-height:1;-webkit-text-size-adjust:none}hr{height:.02rem;margin:.1rem 0;border:medium none;border-top:.02rem solid #cacaca}a{color:#333;text-decoration:none}img{width:100%}html,body,#app{height:100%}\n',""])},44:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var o=t.protocol+"//"+t.host,r=o+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var n,i=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(n=0===i.indexOf("//")?i:0===i.indexOf("/")?o+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")}))}},45:function(e,t,o){var r=o(46);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(2)(r,n);r.locals&&(e.exports=r.locals)},46:function(e,t,o){(e.exports=o(1)(!1)).push([e.i,'.border,.border-top,.border-right,.border-bottom,.border-left,.border-topbottom,.border-rightleft,.border-topleft,.border-rightbottom,.border-topright,.border-bottomleft{position:relative}.border::before,.border-top::before,.border-right::before,.border-bottom::before,.border-left::before,.border-topbottom::before,.border-topbottom::after,.border-rightleft::before,.border-rightleft::after,.border-topleft::before,.border-topleft::after,.border-rightbottom::before,.border-rightbottom::after,.border-topright::before,.border-topright::after,.border-bottomleft::before,.border-bottomleft::after{content:"\\0020";overflow:hidden;position:absolute}.border::before{-webkit-box-sizing:border-box;box-sizing:border-box;top:0;left:0;height:100%;width:100%;border:1px solid #eaeaea;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}.border-top::before,.border-bottom::before,.border-topbottom::before,.border-topbottom::after,.border-topleft::before,.border-rightbottom::after,.border-topright::before,.border-bottomleft::before{left:0;width:100%;height:1px}.border-right::before,.border-left::before,.border-rightleft::before,.border-rightleft::after,.border-topleft::after,.border-rightbottom::before,.border-topright::after,.border-bottomleft::after{top:0;width:1px;height:100%}.border-top::before,.border-topbottom::before,.border-topleft::before,.border-topright::before{border-top:1px solid #eaeaea;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}.border-right::before,.border-rightbottom::before,.border-rightleft::before,.border-topright::after{border-right:1px solid #eaeaea;-webkit-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0}.border-bottom::before,.border-topbottom::after,.border-rightbottom::after,.border-bottomleft::before{border-bottom:1px solid #eaeaea;-webkit-transform-origin:0 100%;-ms-transform-origin:0 100%;transform-origin:0 100%}.border-left::before,.border-topleft::after,.border-rightleft::after,.border-bottomleft::after{border-left:1px solid #eaeaea;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}.border-top::before,.border-topbottom::before,.border-topleft::before,.border-topright::before{top:0}.border-right::before,.border-rightleft::after,.border-rightbottom::before,.border-topright::after{right:0}.border-bottom::before,.border-topbottom::after,.border-rightbottom::after,.border-bottomleft::after{bottom:0}.border-left::before,.border-rightleft::before,.border-topleft::after,.border-bottomleft::before{left:0}@media (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.4895833333333335), (-o-min-device-pixel-ratio: 3/2) and (-o-max-device-pixel-ratio: 239/96), (min-resolution: 144dpi) and (max-resolution: 239dpi), (-o-min-device-pixel-ratio: 3/2) and (-o-max-device-pixel-ratio: 249/100), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx){.border::before{width:200%;height:200%;-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5)}.border-top::before,.border-bottom::before,.border-topbottom::before,.border-topbottom::after,.border-topleft::before,.border-rightbottom::after,.border-topright::before,.border-bottomleft::before{-webkit-transform:scaleY(0.5);-ms-transform:scaleY(0.5);transform:scaleY(0.5)}.border-right::before,.border-left::before,.border-rightleft::before,.border-rightleft::after,.border-topleft::after,.border-rightbottom::before,.border-topright::after,.border-bottomleft::after{-webkit-transform:scaleX(0.5);-ms-transform:scaleX(0.5);transform:scaleX(0.5)}}@media (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5/2), (min-resolution: 240dpi), (min-resolution: 2.5dppx){.border::before{width:300%;height:300%;-webkit-transform:scale(0.33333);-ms-transform:scale(0.33333);transform:scale(0.33333)}.border-top::before,.border-bottom::before,.border-topbottom::before,.border-topbottom::after,.border-topleft::before,.border-rightbottom::after,.border-topright::before,.border-bottomleft::before{-webkit-transform:scaleY(0.33333);-ms-transform:scaleY(0.33333);transform:scaleY(0.33333)}.border-right::before,.border-left::before,.border-rightleft::before,.border-rightleft::after,.border-topleft::after,.border-rightbottom::before,.border-topright::after,.border-bottomleft::after{-webkit-transform:scaleX(0.33333);-ms-transform:scaleX(0.33333);transform:scaleX(0.33333)}}\n',""])},47:function(e,t,o){var r=o(48);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(2)(r,n);r.locals&&(e.exports=r.locals)},48:function(e,t,o){t=e.exports=o(1)(!1);var r=o(32),n=r(o(20)),i=r(o(20)+"#iefix"),a=r(o(49)),s=r(o(50)),l=r(o(51)+"#iconfont");t.push([e.i,'@font-face{font-family:"iconfont";src:url('+n+");src:url("+i+') format("embedded-opentype"),url("data:application/x-font-woff2;charset=utf-8;base64,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") format("woff2"),url('+a+') format("woff"),url('+s+') format("truetype"),url('+l+') format("svg")}.iconfont{font-family:"iconfont" !important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-star:before{content:"\\e61d"}.icon-star-o:before{content:"\\e613"}.icon-arrow-left:before{content:"\\e60d"}.icon-error:before{content:"\\e86e"}.icon-follow:before{content:"\\e606"}.icon-no-data:before{content:"\\e60b"}\n',""])},49:function(e,t,o){e.exports=o.p+"img/iconfont-abfea1293e08a3cf.woff"},5:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.tplReplace=function(e,t){return e().replace(/\{\{(.*?)\}\}/g,(function(e,o){return t[o.trim()]}))},t.scrollTop=function(){setTimeout((function(){window.scrollTo(0,0)}))},t.setPageData=function(e,t){for(var o=e.length,r=[],n=0;n<o;)r.push(e.slice(n,n+=t));return r},t.scrollToBottom=function(e){(function(){var e=0,t=0;document.body&&(e=document.body.scrollTop);document.documentElement&&(t=document.documentElement.scrollTop);return e-t>0?e:t})()+function(){var e=0;e="CSS1Compat"==document.compatMode?document.documentElement.clientHeight:document.body.clientHeight;return e}()>=function(){var e=0,t=0;document.body&&(e=document.body.scrollHeight);document.documentElement&&(t=document.documentElement.scrollHeight);return e-t>0?e:t}()-100&&e()},t.getItemNode=function(e){for(;e=e.parentNode;)if("news-item"===e.className.split(" ")[0])return e},t.getUrlQueryValue=function(e){var t=new RegExp("(^|$)"+e+"=([^$]*(&|$))","i"),o=window.location.search.substr(1).match(t);return null!==o?decodeURIComponent(o[2]):null}},50:function(e,t,o){e.exports=o.p+"img/iconfont-c7e42e6f52f45676.ttf"},51:function(e,t,o){e.exports=o.p+"img/iconfont-fad58920d7e23c5a.svg"},52:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=o(53),i=(r=n)&&r.__esModule?r:{default:r};o(54);var a=o(5);t.default={name:"Header",tpl:function(e){var t=e.url,o=e.title,r=e.showLeftIcon,n=e.showRightIcon;return(0,a.tplReplace)(i.default,{url:t,title:o,showLeftIcon:r?"block":"none",showRightIcon:n?"block":"none"})}}},53:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='<header class="header">\r\n    <div class="icon left">\r\n        <a href="{{ url }}" style="display: {{ showLeftIcon }};">\r\n            <span class="iconfont icon-arrow-left"></span>\r\n        </a>\r\n    </div>\r\n    <div class="title">\r\n        <h1>{{ title }}</h1>\r\n    </div>\r\n    <div class="icon right">\r\n        <a href="collections.html" style="display: {{ showRightIcon }};">\r\n            <span class="iconfont icon-follow"></span>\r\n        </a>\r\n    </div>\r\n</header>';return __p}},54:function(e,t,o){var r=o(55);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(2)(r,n);r.locals&&(e.exports=r.locals)},55:function(e,t,o){(e.exports=o(1)(!1)).push([e.i,".header{position:fixed;top:0;left:0;z-index:2;width:100%;height:.44rem;background:#cf5f55}.header .icon{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;top:0;width:.44rem;height:.44rem}.header .icon.left{left:0}.header .icon.left a{font-size:0}.header .icon.right{right:0}.header .icon.right .iconfont{vertical-align:.02rem}.header .icon .iconfont{color:#fff;font-size:.18rem}.header .title{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;color:#fff}.header .title h1{font-size:.18rem}\n",""])}});