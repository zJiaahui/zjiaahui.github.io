(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(3),a=(n(0),n(203));const c={id:"01css",title:"\u57fa\u7840\u5165\u95e8",slug:"./01css.html"},l={unversionedId:"notes/03-css/01css",id:"notes/03-css/01css",isDocsHomePage:!1,title:"\u57fa\u7840\u5165\u95e8",description:"1\u3001\u521b\u5efacss",source:"@site/docs\\notes\\03-css\\01-css.md",slug:"/notes/03-css/01css.html",permalink:"/docs/notes/03-css/01css.html",version:"current",sidebar:"notes",previous:{title:"\u5207\u56fe\u4ed4",permalink:"/docs/notes/01-development-process/01ps.html"},next:{title:"\u9009\u62e9\u5668",permalink:"/docs/notes/03-css/02css.html"}},i=[{value:"1\u3001\u521b\u5efacss",id:"1\u3001\u521b\u5efacss",children:[{value:"1.1\u3001CSS\u5185\u90e8\u6837\u5f0f\u548c\u5916\u90e8\u6837\u5f0f\u8bed\u6cd5",id:"11\u3001css\u5185\u90e8\u6837\u5f0f\u548c\u5916\u90e8\u6837\u5f0f\u8bed\u6cd5",children:[]},{value:"1.2\u3001CSS\u5185\u8054\u6837\u5f0f\u8bed\u6cd5",id:"12\u3001css\u5185\u8054\u6837\u5f0f\u8bed\u6cd5",children:[]}]},{value:"2\u3001HTML\u5f15\u5165css",id:"2\u3001html\u5f15\u5165css",children:[{value:"2.1\u3001\u5916\u90e8\u6837\u5f0f\u8868",id:"21\u3001\u5916\u90e8\u6837\u5f0f\u8868",children:[]},{value:"2.2\u3001\u5185\u90e8\u6837\u5f0f\u8868",id:"22\u3001\u5185\u90e8\u6837\u5f0f\u8868",children:[]},{value:"2.3\u3001\u5185\u8054\u6837\u5f0f",id:"23\u3001\u5185\u8054\u6837\u5f0f",children:[]},{value:"2.4\u3001\u6837\u5f0f\u4f18\u5148\u7ea7",id:"24\u3001\u6837\u5f0f\u4f18\u5148\u7ea7",children:[]}]}],b={toc:i};function s({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"1\u3001\u521b\u5efacss"},"1\u3001\u521b\u5efacss"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u4efb\u4f55 ",Object(a.b)("inlineCode",{parentName:"li"},"css")," \u5c5e\u6027\u5fc5\u987b\u5199\u5728",Object(a.b)("inlineCode",{parentName:"li"},"HTML"),"\u7684",Object(a.b)("inlineCode",{parentName:"li"},"<style>"),"\u6807\u7b7e\u5185",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"<style>"),"\u6807\u7b7e\u4e00\u822c\u5199\u5728\u6587\u7ae0\u5934\u90e8\u7684",Object(a.b)("inlineCode",{parentName:"li"},"<head>"),"\u6807\u7b7e\u4e2d\u79f0\u4e3a",Object(a.b)("inlineCode",{parentName:"li"},"\u5185\u90e8\u6837\u5f0f")),Object(a.b)("li",{parentName:"ul"},"\u6216\u8005\u901a\u8fc7link\u6807\u7b7e\u5f15\u5165",Object(a.b)("inlineCode",{parentName:"li"},"\u5916\u90e8\u6837\u5f0f")),Object(a.b)("li",{parentName:"ul"},"\u518d\u6216\u8005\u662f\u5143\u7d20\u884c\u5185\u6dfb\u52a0",Object(a.b)("inlineCode",{parentName:"li"},"style"),"\u5c5e\u6027\u5f15\u5165",Object(a.b)("inlineCode",{parentName:"li"},"\u884c\u5185\u6837\u5f0f"))))),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/20200310120438141.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjQ3MzEwOQ==,size_16,color_FFFFFF,t_70",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),Object(a.b)("h3",{id:"11\u3001css\u5185\u90e8\u6837\u5f0f\u548c\u5916\u90e8\u6837\u5f0f\u8bed\u6cd5"},"1.1\u3001CSS\u5185\u90e8\u6837\u5f0f\u548c\u5916\u90e8\u6837\u5f0f\u8bed\u6cd5"),Object(a.b)("p",null,"\u5728",Object(a.b)("inlineCode",{parentName:"p"},"<head>"),"\u4e2d\u901a\u8fc7\u4f7f\u7528",Object(a.b)("inlineCode",{parentName:"p"},"\u5916\u90e8\u6837\u5f0f"),"\u548c",Object(a.b)("inlineCode",{parentName:"p"},"\u5185\u90e8\u6837\u5f0f"),"\u6dfb\u52a0",Object(a.b)("inlineCode",{parentName:"p"},"css"),"\u65f6\u5fc5\u987b",Object(a.b)("inlineCode",{parentName:"p"},"\u901a\u8fc7css\u9009\u62e9\u5668"),"\u6765\u627e\u5230\u5bf9\u5e94\u7684HTML\u5143\u7d20\u5728\u9009\u62e9\u5668\u4e0b\u8bbe\u7f6e\u6837\u5f0f\uff0c\u8bed\u6cd5\u5982\u4e0b\uff1a\n",Object(a.b)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/20200310000917891.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjQ3MzEwOQ==,size_16,color_FFFFFF,t_70",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),"\n\u6ce8\u610f\uff1a\n",Object(a.b)("inlineCode",{parentName:"p"},"\u5916\u90e8\u6837\u5f0f"),"\u5c31\u662f\u76f8\u5f53\u4e8e\u628a",Object(a.b)("inlineCode",{parentName:"p"},"\u5185\u90e8\u6837\u5f0f"),"\u7684",Object(a.b)("inlineCode",{parentName:"p"},"<style></style>"),"\u4ee3\u7801\u5757\u62ff\u51fa\u5f00\u653e\u5230\u5916\u90e8\u7684",Object(a.b)("inlineCode",{parentName:"p"},".css"),"\u6587\u4ef6\u4e2d\u518d\u901a\u8fc7",Object(a.b)("inlineCode",{parentName:"p"},"<link>")," \u6807\u7b7e\u5f15\u5165 "),Object(a.b)("h3",{id:"12\u3001css\u5185\u8054\u6837\u5f0f\u8bed\u6cd5"},"1.2\u3001CSS\u5185\u8054\u6837\u5f0f\u8bed\u6cd5"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"\u5185\u8054\u6837\u5f0f"),"\u5219\u76f4\u63a5\u5728\u5143\u7d20\u5f00\u59cb\u6807\u7b7e\u5185\u6dfb\u52a0",Object(a.b)("inlineCode",{parentName:"p"},"style"),"\u5c5e\u6027\u4ee3\u7801\u5757\u5373\u53ef\uff0c\u8bed\u6cd5\u5982\u4e0b\uff1a",Object(a.b)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/20200310002143178.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjQ3MzEwOQ==,size_16,color_FFFFFF,t_70",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),Object(a.b)("h2",{id:"2\u3001html\u5f15\u5165css"},"2\u3001HTML\u5f15\u5165css"),Object(a.b)("h3",{id:"21\u3001\u5916\u90e8\u6837\u5f0f\u8868"},"2.1\u3001\u5916\u90e8\u6837\u5f0f\u8868"),Object(a.b)("p",null,"\u5f53\u6837\u5f0f\u9700\u8981\u5e94\u7528\u4e8e\u5f88\u591a\u9875\u9762\u65f6\uff0c\u5916\u90e8\u6837\u5f0f\u8868\u5c06\u662f\u7406\u60f3\u7684\u9009\u62e9\u3002\u5728\u4f7f\u7528\u5916\u90e8\u6837\u5f0f\u8868\u7684\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u6539\u53d8\u4e00\u4e2a\u6587\u4ef6\u6765\u6539\u53d8\u6574\u4e2a\u7ad9\u70b9\u7684\u5916\u89c2\u3002\u6bcf\u4e2a\u9875\u9762\u4f7f\u7528",Object(a.b)("inlineCode",{parentName:"p"},"<link>"),"\u6807\u7b7e\u94fe\u63a5\u5230\u6837\u5f0f\u8868\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<head>\n    <link rel="stylesheet" type="text/css" href="mystyle.css">\n</head>\n')),Object(a.b)("h3",{id:"22\u3001\u5185\u90e8\u6837\u5f0f\u8868"},"2.2\u3001\u5185\u90e8\u6837\u5f0f\u8868"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<head>\n<style>\n    hr {color:sienna;}\n    p {margin-left:20px;}\n    body {background-image:url("images/back40.gif");}\n</style>\n</head>\n')),Object(a.b)("h3",{id:"23\u3001\u5185\u8054\u6837\u5f0f"},"2.3\u3001\u5185\u8054\u6837\u5f0f"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<p style="color:sienna;margin-left:20px">\u8fd9\u662f\u4e00\u4e2a\u6bb5\u843d\u3002</p>\n')),Object(a.b)("h3",{id:"24\u3001\u6837\u5f0f\u4f18\u5148\u7ea7"},"2.4\u3001\u6837\u5f0f\u4f18\u5148\u7ea7"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"\u6837\u5f0f\u4f18\u5148\u7ea7"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"\u5185\u8054\u6837\u5f0f")," ",Object(a.b)("b",null,"  > "),Object(a.b)("inlineCode",{parentName:"td"},"\u5185\u90e8\u6837\u5f0f"),Object(a.b)("b",null,"  > "),Object(a.b)("inlineCode",{parentName:"td"},"\u5916\u90e8\u6837\u5f0f"),Object(a.b)("b",null,"  > ")," ",Object(a.b)("inlineCode",{parentName:"td"},"\u6d4f\u89c8\u5668\u9ed8\u8ba4\u6837\u5f0f"))))))}s.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),o=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=o(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),p=o(n),d=r,u=p["".concat(l,".").concat(d)]||p[d]||m[d]||c;return n?a.a.createElement(u,i(i({ref:t},s),{},{components:n})):a.a.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=d;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<c;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);