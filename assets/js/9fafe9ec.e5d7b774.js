"use strict";(self.webpackChunkzjiaahui_github_io=self.webpackChunkzjiaahui_github_io||[]).push([[5320],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2063:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},Tbc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={slug:"Node-Mysql8-ER_NOT_SUPPORTED_AUTH_MODE",title:"Node.js Mysql8\u5ba2\u6237\u7aef\u4e0d\u652f\u6301\u8ba4\u8bc1\u534f\u8bae\u5f15\u53d1\u7684\u201cER_NOT_SUPPORTED_AUTH_MODE\u201d\u95ee\u9898",author:"zjiaahui",author_title:"\u81ea\u5b66web\u524d\u7aef\u7684\u5c0f\u767d",author_url:"https://github.com/zjiaahui",author_image_url:"https://avatars.githubusercontent.com/u/54567123?s=60&v=4",description:"Node.js Mysql8\u5ba2\u6237\u7aef\u4e0d\u652f\u6301\u8ba4\u8bc1\u534f\u8bae\u5f15\u53d1\u7684\u201cER_NOT_SUPPORTED_AUTH_MODE\u201d\u95ee\u9898",tags:["Nodejs","MySQL"]},c=void 0,s={permalink:"/blog/Node-Mysql8-ER_NOT_SUPPORTED_AUTH_MODE",source:"@site/blog\\2021-03-08-Node.js Mysql\u5ba2\u6237\u7aef\u4e0d\u652f\u6301\u8ba4\u8bc1\u534f\u8bae\u5f15\u53d1\u7684\u201cER_NOT_SUPPORTED_AUTH_MODE\u201d\u95ee\u9898.md",title:"Node.js Mysql8\u5ba2\u6237\u7aef\u4e0d\u652f\u6301\u8ba4\u8bc1\u534f\u8bae\u5f15\u53d1\u7684\u201cER_NOT_SUPPORTED_AUTH_MODE\u201d\u95ee\u9898",description:"Node.js Mysql8\u5ba2\u6237\u7aef\u4e0d\u652f\u6301\u8ba4\u8bc1\u534f\u8bae\u5f15\u53d1\u7684\u201cER_NOT_SUPPORTED_AUTH_MODE\u201d\u95ee\u9898",date:"2021-03-08T00:00:00.000Z",formattedDate:"2021\u5e743\u67088\u65e5",tags:[{label:"Nodejs",permalink:"/blog/tags/nodejs"},{label:"MySQL",permalink:"/blog/tags/my-sql"}],readingTime:.31,truncated:!0,prevItem:{title:"nodejs \u5b9e\u73b0\u56fe\u7247\u9a8c\u8bc1\u7801\uff08svg-captcha\uff09",permalink:"/blog/nodejs_svg-captcha"},nextItem:{title:"element-ui\u6846\u67b6\u7684el-dialog\u5f39\u51fa\u6846\u88ab\u906e\u7f69\u5c42\u6321\u4f4f\u4e86\u89e3\u51b3\u65b9\u6cd5",permalink:"/blog/element-ui-el-dialog-zindex"}},u=[{value:"1.\u5f53\u6211\u4eec\u518dNodejs\u4e2d\u8fde\u63a5Mysql8\u65f6\u51fa\u73b0\u5982\u4e0b\u9519\u8bef\u4fe1\u606f",id:"1\u5f53\u6211\u4eec\u518dnodejs\u4e2d\u8fde\u63a5mysql8\u65f6\u51fa\u73b0\u5982\u4e0b\u9519\u8bef\u4fe1\u606f",children:[]},{value:"2.\u539f\u56e0",id:"2\u539f\u56e0",children:[]},{value:"3.\u89e3\u51b3\u529e\u6cd5",id:"3\u89e3\u51b3\u529e\u6cd5",children:[]}],p=function(e){var t=e.children,n=e.color;return(0,a.kt)("span",{style:{color:n,fontWeight:700,borderRadius:"2px",padding:"0.2rem",margin:"0.2rem"}},t)},d={toc:u,Tbc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Node.js Mysql8\u5ba2\u6237\u7aef\u4e0d\u652f\u6301\u8ba4\u8bc1\u534f\u8bae\u5f15\u53d1\u7684",(0,a.kt)(p,{color:"red",mdxType:"Tbc"},"ER_NOT_SUPPORTED_AUTH_MODE"),"\u95ee\u9898"))),(0,a.kt)("h2",{id:"1\u5f53\u6211\u4eec\u518dnodejs\u4e2d\u8fde\u63a5mysql8\u65f6\u51fa\u73b0\u5982\u4e0b\u9519\u8bef\u4fe1\u606f"},"1.\u5f53\u6211\u4eec\u518dNodejs\u4e2d\u8fde\u63a5Mysql8\u65f6\u51fa\u73b0\u5982\u4e0b\u9519\u8bef\u4fe1\u606f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Client does not support authentication protocol requested by server; consider upgrading MySQL client\n")),(0,a.kt)("h2",{id:"2\u539f\u56e0"},"2.\u539f\u56e0"),(0,a.kt)("p",null,"\u5bfc\u81f4\u8fd9\u4e2a\u9519\u8bef\u7684\u539f\u56e0\u662f\uff0c\u76ee\u524d\uff0c\u6700\u65b0\u7684mysql\u6a21\u5757\u5e76\u672a\u5b8c\u5168\u652f\u6301MySQL 8\u7684\u201ccaching_sha2_password\u201d\u52a0\u5bc6\u65b9\u5f0f\uff0c\u800c\u201ccaching_sha2_password\u201d\u5728MySQL 8\u4e2d\u662f\u9ed8\u8ba4\u7684\u52a0\u5bc6\u65b9\u5f0f\u3002\u56e0\u6b64\uff0c\u4e0b\u9762\u7684\u65b9\u5f0f\u547d\u4ee4\u662f\u9ed8\u8ba4\u5df2\u7ecf\u4f7f\u7528\u4e86\u201ccaching_sha2_password\u201d\u52a0\u5bc6\u65b9\u5f0f\uff0c\u8be5\u8d26\u53f7\u3001\u5bc6\u7801\u65e0\u6cd5\u5728mysql\u6a21\u5757\u4e2d\u4f7f\u7528\u3002"),(0,a.kt)("h2",{id:"3\u89e3\u51b3\u529e\u6cd5"},"3.\u89e3\u51b3\u529e\u6cd5"),(0,a.kt)("p",null,"\u89e3\u51b3\u65b9\u6cd5\u662f\u4ece\u65b0\u4fee\u6539\u7528\u6237root\u7684\u5bc6\u7801\uff0c\u5e76\u6307\u5b9amysql\u6a21\u5757\u80fd\u591f\u652f\u6301\u7684\u52a0\u5bc6\u65b9\u5f0f\uff1a\u201cmysql_native_password\u201d\u52a0\u5bc6\u65b9\u5f0f\u3002\u8fd9\u79cd\u65b9\u5f0f\u662f\u5728mysql\u6a21\u5757\u80fd\u591f\u652f\u6301\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '\u4f60\u7684\u65b0\u5bc6\u7801';\n\n")))}m.isMDXComponent=!0}}]);