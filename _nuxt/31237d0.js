(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{309:function(t,n,e){var content=e(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(46).default)("5bccbfad",content,!0,{sourceMap:!1})},320:function(t,n,e){"use strict";e(309)},321:function(t,n,e){var o=e(45)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n.token-button[data-v-ddc57df6]{\n  width:100%;\n  display:flex;\n  justify-content:flex-start;\n  visibility:visible;\n  align-items:center;\n  font-size:24px;\n  font-weight:500;\n  background-color:#fff;\n  color:#000;\n  border-radius:16px;\n  box-shadow:0 6px 10px rgba(0,0,0,.08);\n  outline:none;\n  cursor:pointer;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n      -ms-user-select:none;\n          user-select:none;\n  border:none;\n  height:2.4rem;\n  width:auto;\n  padding:0 8px;\n  justify-content:space-between;\n  margin-right:12px\n}\n.token-button[data-v-ddc57df6]:focus,.token-button[data-v-ddc57df6]:hover{\n  background-color:#edeef2\n}\n.token-button[data-v-ddc57df6]:active{\n  background-color:#cfd2dd\n}\n.token-button__text[data-v-ddc57df6]{\n  margin:0 .25rem;\n  font-size:18px\n}\n.token-button__text--inverted[data-v-ddc57df6]{\n  color:#fff\n}\n.token-button--unselected[data-v-ddc57df6]{\n  background-color:#e8006f;\n  color:#fff\n}\n.token-button--unselected[data-v-ddc57df6]:focus,.token-button--unselected[data-v-ddc57df6]:hover{\n  background-color:#cf0063\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},336:function(t,n,e){"use strict";e.r(n);e(297);var o=e(140),r=e(141),c=e(300),d=e(301),f=e(298),l=e(15),v=(e(49),e(299));function k(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,o=Object(f.a)(t);if(n){var r=Object(f.a)(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return Object(d.a)(this,e)}}var h=function(t,n,e,desc){var o,r=arguments.length,c=r<3?n:null===desc?desc=Object.getOwnPropertyDescriptor(n,e):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,n,e,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(n,e,c):o(n,e))||c);return r>3&&c&&Object.defineProperty(n,e,c),c},y=function(t){Object(c.a)(e,t);var n=k(e);function e(){return Object(o.a)(this,e),n.apply(this,arguments)}return Object(r.a)(e,[{key:"tokenName",get:function(){var t;return(null===(t=null==this?void 0:this.token)||void 0===t?void 0:t.symbol)||"Select a token"}},{key:"buttonClass",get:function(){return{"token-button--unselected":!this.token}}},{key:"caretColor",get:function(){return this.token?"#000":"#fff"}}]),e}(v.Vue);h([Object(v.Prop)({type:Object,required:!1})],y.prototype,"token",void 0);var x=y=h([v.Component],y),j=(e(320),e(18)),component=Object(j.a)(x,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"token-button",class:t.buttonClass},[e("Token-Button-Icon",{attrs:{token:t.token}}),t._v(" "),e("div",{staticClass:"token-button__text"},[t._v("\n    "+t._s(t.tokenName)+"\n  ")]),t._v(" "),e("Token-Caret-Down",{attrs:{color:t.caretColor}})],1)}),[],!1,null,"ddc57df6",null);n.default=component.exports}}]);