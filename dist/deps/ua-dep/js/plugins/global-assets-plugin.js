!function(n){function e(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return n[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var t={};return e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,i){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:i})},e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=266)}({21:function(n,e,t){"use strict";function i(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function n(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}();t(4);var u=function(){function n(e){i(this,n);var t=jQuery;this.megaOptions={closeOnClickInside:!1},e.megamenu&&e.quicklinks&&(this.$megaMenu=t(e.megamenu),this.$quickLinks=t(e.quicklinks),this.megaMenu=new Foundation.DropdownMenu(this.$megaMenu,this.megaOptions),this.mediaQuery(),this.quickLinks()),e.search&&(this.$searchSelector=t(e.search),this.search=new Foundation.OffCanvas(this.$searchSelector))}return r(n,[{key:"mediaQuery",value:function(){Foundation.MediaQuery._init(),"small"!==Foundation.MediaQuery.current&&"medium"!==Foundation.MediaQuery.current||this.$megaMenu.foundation("_destroy")}},{key:"quickLinks",value:function(){this.$quickLinks.foundation()}}]),n}();e["default"]=u,window.GlobalAssets=u},266:function(n,e,t){n.exports=t(21)},4:function(n,e,t){"use strict";Foundation.OffCanvas.defaults.transitionTime=".2s",Foundation.OffCanvas.defaults.transition="overlap"}});