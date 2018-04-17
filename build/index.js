!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e["norton\b\b\bWX"]={})}(this,function(e){"use strict";var n=function(e){return"[object Object]"===Object.prototype.toString.call(e)},t=function(e){return"string"==typeof e},o=function(e){return"function"==typeof e},r=function(e){return void 0===e},i=!!(wx&&Page&&App&&Component),c=function(){return i?"wxapp":n(window)&&window.location?"browser":n(global)&&global.setTimeout?"node":"unknown"},u=function(e){if(n(e)){var i=e.key,c=e.data,u=e.success,f=e.fail,a=(e.complete,e.sync);if(!t(i)&&!r(i))return!1;if(!t(c)||!n(c))return!1;if(!o(u)&&!a&&!r(f))return!1;if(!o(f)&&!a&&!r(f))return!1}return!1},f=(function(){function e(e){this.value=e}function n(n){var t,o;function r(t,o){try{var c=n[t](o),u=c.value;u instanceof e?Promise.resolve(u.value).then(function(e){r("next",e)},function(e){r("throw",e)}):i(c.done?"return":"normal",c.value)}catch(e){i("throw",e)}}function i(e,n){switch(e){case"return":t.resolve({value:n,done:!0});break;case"throw":t.reject(n);break;default:t.resolve({value:n,done:!1})}(t=t.next)?r(t.key,t.arg):o=null}this._invoke=function(e,n){return new Promise(function(i,c){var u={key:e,arg:n,resolve:i,reject:c,next:null};o?o=o.next=u:(t=o=u,r(e,n))})},"function"!=typeof n.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(n.prototype[Symbol.asyncIterator]=function(){return this}),n.prototype.next=function(e){return this._invoke("next",e)},n.prototype.throw=function(e){return this._invoke("throw",e)},n.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}),a=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),s=new(function(){function e(n){f(this,e),this.environment=c(),this.selector=n}return a(e,[{key:"querySelector",value:function(e){return this.selector=e,"browser"===this.environment&&(this.node=document.querySelector(e)),"wxapp"===this.environment&&(this.node=wx.createSelectorQuery().select(e)),this}},{key:"getBoundingClientRect",value:function(e){var n=this;return"browser"===this.environment?(o(e)&&e(this.node.getBoundingClientRect()),this.node.getBoundingClientRect()):"wxapp"===this.environment?new Promise(function(t,r){n.node.boundingClientRect().exec(function(n){var r=n[0],i=r.top,c=r.left,u=r.right,f=r.bottom;o(e)&&e({top:i,left:c,right:u,bottom:f}),t({top:i,left:c,right:u,bottom:f})})}):void 0}}]),e}()),l=function(){},g=function(){var e=getCurrentPages();return e[e.length-1].route},p=Object.prototype.hasOwnProperty,m=-1,v={},y={on:function(e,n,t){v[e]||(v[e]=[]);var o=config.nameSpace+"-uid-"+m++;return v[e].push({context:t,cb:n,token:o}),o},clearAll:function(){v={}},clear:function(e){v[e]&&delete v[e]},off:function(e){var n="string"==typeof e&&(p.call(v,e)||function(e){for(var n in v)if(p.call(v,n)&&0===n.indexOf(e))return!0;return!1}(e)),t=!n&&"string"==typeof e,o="function"==typeof e,r=null,i=!0,c=null;if(!n){for(r in v)if(p.call(v,r))for(var u=0,f=(c=v[r]).length;u<f;u++)t&&c[u].token===e?(c.splice(u,1),i=e):o&&c[u].cb===e&&(v[r].splice(u,1),i=!0);return i}y.clear(e)},once:function(e,n){v[e]||(v[e]=[]),v[e].push({context:this,cb:n,once:!0})},trigger:function(e,n,t){if(p.call(v,e))return!0===t?setTimeout(r,0):r(),!0;function o(e,n,t){function o(n){e.cb&&e.cb.call(e.context,n),e.once&&(e.cb=function(){})}if(!0===t)try{o(n)}catch(e){setTimeout((r=e,function(){throw r}),0)}var r;o(n)}function r(){if(p.call(v,e))for(var r=v[e],i=r.length,c=0;c<i;c++)o(r[c],n,t)}}},h={phoneNumber:/^[1][3,4,5,7,8][0-9]{9}$/,email:/^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/,qq:/^[0-9]{5,10}$/},w=y.on,d=y.off,b=y.trigger,x=y.once;e.isWxAppEnv=i,e.getEnv=c,e.isObject=n,e.isString=t,e.isFunction=o,e.isUndefined=r,e.isNumber=function(e){return"number"==typeof e},e.setItem=function(){if(u(itemInfo)){var e=itemInfo,n=e.key,t=e.data,o=(e.success,e.fail,e.complete,e.sync);try{return o?wx.setStorageSync(n,t):wx.setStorage(itemInfo)}catch(e){console.warn("请检查传入的参数是否正确"+itemInfo)}}console.warn("请检查传入的参数是否正确"+itemInfo)},e.getItem=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(u(e)){var n=e.key,t=(e.data,e.success,e.fail,e.complete,e.sync);try{return t?wx.getStorageSync(n):wx.getStorage(e)}catch(n){console.warn("请检查传入的参数是否正确"+e)}}console.warn("请检查传入的参数是否正确"+e)},e.removeAll=function(e){return e?wx.clearStorageSync():wx.clearStorage()},e.removeItem=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(u(e)){var n=info,t=n.key,o=(n.success,n.fail,n.complete,n.sync);try{o&&wx.removeStorageSync(t),wx.removeStorage(e)}catch(e){console.warn("请检查传入的参数是否正确"+info)}}console.warn("请检查传入的参数是否正确"+info)},e.getAll=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(u(e))try{return e.success,e.fail,e.complete,e.sync?wx.getStorageInfoSync():wx.getStorage(e)}catch(n){console.warn("请检查传入的参数是否正确"+e)}},e.isVaildItemParams=u,e.fetch=function(e){var n=e.url,t=e.method,o=e.data,r=e.header;return new Promise(function(e,i){return wx.request({url:n,data:o,method:t,header:r,success:e,fail:i,complete:l})})},e.getLoginCode=function(){return new Promise(function(e,n){return wx.login({success:e,fail:n,complete:l})})},e.getUserInfo=function(){return new Promise(function(e,n){return wx.getUserInfo({success:e,fail:n,complete:l})})},e.getJWD=function(){return new Promise(function(e,n){wx.getLocation({type:"wgs84",success:e,fail:n,complete:l})})},e.getSystemInfo=function(e){return new Promise(function(n,t){return wx["getSystemInfo"+(e?"Sync":"")]({success:n,fail:t})})},e.promisfy=function(e){return function(n){for(var t=arguments.length,o=Array(t>1?t-1:0),r=1;r<t;r++)o[r-1]=arguments[r];return new Promise(function(t,r){return e.apply(void 0,[Object.assign({},n,{success:t,fail:r})].concat(o))})}},e.getCurrentPageUrl=g,e.getCurrentPageUrlWithArgs=function(){var e=g(),n=currentPage.options,t=e+"?";for(var o in n)t+=o+"="+n[o]+"&";return t=t.substring(0,t.length-1)},e.$on=w,e.$off=d,e.$trigger=b,e.$once=x,e.regex=h,e.$log=function(e){return console.log(e)},e.App=App,e.wx=wx,e.Page=Page,e.Component=Component,e.dom=s,Object.defineProperty(e,"__esModule",{value:!0})});
