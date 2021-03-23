(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"Highlight",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(202)),c={slug:"vue-copy",title:"Vue \u5b9e\u73b0\u590d\u5236\u5185\u5bb9\u5230\u526a\u8d34\u677f\u529f\u80fd",author:"zjiaahui",author_title:"\u81ea\u5b66web\u524d\u7aef\u7684\u5c0f\u767d",author_url:"https://github.com/zjiaahui",author_image_url:"https://avatars.githubusercontent.com/u/54567123?s=60&v=4",description:"VUE \u5b9e\u73b0\u590d\u5236\u5185\u5bb9\u5230\u526a\u8d34\u677f\u529f\u80fd",tags:["Vue"]},i={permalink:"/blog/vue-copy",source:"@site/blog\\2021-03-15-VUE \u5b9e\u73b0\u590d\u5236\u5185\u5bb9\u5230\u526a\u8d34\u677f\u529f\u80fd.md",description:"VUE \u5b9e\u73b0\u590d\u5236\u5185\u5bb9\u5230\u526a\u8d34\u677f\u529f\u80fd",date:"2021-03-15T00:00:00.000Z",tags:[{label:"Vue",permalink:"/blog/tags/vue"}],title:"Vue \u5b9e\u73b0\u590d\u5236\u5185\u5bb9\u5230\u526a\u8d34\u677f\u529f\u80fd",readingTime:.325,truncated:!0,nextItem:{title:"vue cli3.0 \u4e2d\u6709\u5173.env;.env.development,.env.production\u7684\u914d\u7f6e\u95ee\u9898",permalink:"/blog/vue-cli-prod-deve"}},l=[{value:"\u5b89\u88c5\u63d2\u4ef6",id:"\u5b89\u88c5\u63d2\u4ef6",children:[]},{value:"main.js\u4e2d\u5168\u5c40\u6ce8\u5165",id:"mainjs\u4e2d\u5168\u5c40\u6ce8\u5165",children:[]},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[]}],u=function(e){var t=e.children,n=e.color;return Object(o.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},p={toc:l,Highlight:u};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Vue\u901a\u8fc7",Object(o.b)(u,{color:"#FF7400",mdxType:"Highlight"},"vue-clipboard2"),"\u5b9e\u73b0",Object(o.b)(u,{color:"#FF7400",mdxType:"Highlight"},"\u4e00\u952e\u590d\u5236\u5185\u5bb9\u5230\u526a\u8d34\u677f"),"\u529f\u80fd"))),Object(o.b)("h2",{id:"\u5b89\u88c5\u63d2\u4ef6"},"\u5b89\u88c5\u63d2\u4ef6"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"npm install vue-clipboard2 --save\n")),Object(o.b)("h2",{id:"mainjs\u4e2d\u5168\u5c40\u6ce8\u5165"},"main.js\u4e2d\u5168\u5c40\u6ce8\u5165"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import VueClipboard from 'vue-clipboard2'\n\nVue.use(VueClipboard)\n")),Object(o.b)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<ul class="file-list">\n  <li v-for="(f, index) of files" :key="index">\n    <span>[\u6587\u4ef6{{index + 1}}] {{f}}</span>\n    <span v-clipboard:copy="\u8981\u590d\u5236\u7684\u5185\u5bb9" v-clipboard:success="onCopy" v-clipboard:error="onError">\u590d\u5236</span>\n  </li>\n</ul>\n')))}s.isMDXComponent=!0},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(c,".").concat(d)]||s[d]||b[d]||o;return n?a.a.createElement(m,i(i({ref:t},u),{},{components:n})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);