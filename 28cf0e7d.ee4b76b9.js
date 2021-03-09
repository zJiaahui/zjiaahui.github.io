(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{165:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return j}));var l=t(0),a=t.n(l);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},c=Object.keys(e);for(l=0;l<c.length;l++)t=c[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)t=c[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),i=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=i(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,c=e.originalType,r=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),p=i(t),d=l,j=p["".concat(r,".").concat(d)]||p[d]||u[d]||c;return t?a.a.createElement(j,o(o({ref:n},s),{},{components:t})):a.a.createElement(j,o({ref:n},s))}));function j(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var c=t.length,r=new Array(c);r[0]=d;var o={};for(var b in n)hasOwnProperty.call(n,b)&&(o[b]=n[b]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<c;s++)r[s]=t[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return r})),t.d(n,"toc",(function(){return o})),t.d(n,"Highlight",(function(){return b})),t.d(n,"default",(function(){return i}));var l=t(3),a=(t(0),t(165));const c={id:"01es6",title:"ES6",sidebar_label:"ES6",slug:"./01es6.html"},r={unversionedId:"notes/notes_es6/01es6",id:"notes/notes_es6/01es6",isDocsHomePage:!1,title:"ES6",description:"ES6\u7248\u672c\u53d8\u52a8\u5185\u5bb9\u6700\u591a\uff0c\u52a0\u5165\u4e86\u8bb8\u591a\u65b0\u7684\u8bed\u6cd5\u7279\u6027\uff0c\u7f16\u7a0b\u5b9e\u73b0\u8ddf\u7b80\u5355\u3001\u9ad8\u6548\uff1b\u662f\u524d\u7aef\u53d1\u5c55\u7684\u8d8b\u52bf\uff0cvue\u3001react\u7b49\u524d\u7aef\u6846\u67b6\u57fa\u672c\u4e0a\u90fd\u662f\u4f7f\u7528\u7684ES6\u7248\u672c\u8bed\u6cd5\uff0c\u76ee\u524d\u5df2\u57fa\u672c\u4e0d\u7528\u8003\u8651ES6\u517c\u5bb9\u6027\uff0c\u5e94\u4e3a\u540e\u9762\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7babel\u8fdb\u884c\u8f6c\u6362",source:"@site/docs\\notes\\notes_es6\\01.md",slug:"/notes/notes_es6/01es6.html",permalink:"/docs/notes/notes_es6/01es6.html",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/notes/notes_es6/01.md",version:"current",sidebar_label:"ES6",sidebar:"notes",previous:{title:"webpack5",permalink:"/docs/notes/notes_webpack/01webpack.html"}},o=[{value:"1\u3001\u65b0\u589e\u53d8\u91cf\u58f0\u660e\u5173\u952e\u5b57",id:"1\u3001\u65b0\u589e\u53d8\u91cf\u58f0\u660e\u5173\u952e\u5b57",children:[{value:"1.1\u3001<code>let</code>",id:"11\u3001let",children:[]},{value:"1.2\u3001<code>const</code>",id:"12\u3001const",children:[]},{value:"1.3\u3001<code>symbool</code>",id:"13\u3001symbool",children:[]}]},{value:"2\u3001\u89e3\u6784\u8d4b\u503c",id:"2\u3001\u89e3\u6784\u8d4b\u503c",children:[{value:"2.1\u3001\u6570\u7ec4\u89e3\u6784",id:"21\u3001\u6570\u7ec4\u89e3\u6784",children:[]},{value:"2.2\u3001\u5bf9\u8c61\u89e3\u6784",id:"22\u3001\u5bf9\u8c61\u89e3\u6784",children:[]}]},{value:"3\u3001\u6a21\u677f\u5b57\u7b26\u4e32",id:"3\u3001\u6a21\u677f\u5b57\u7b26\u4e32",children:[{value:"3.1\u3001\u53cd\u5f15\u53f7 ``\u5b9a\u4e49\u6a21\u677f\u5b57\u7b26\u4e32",id:"31\u3001\u53cd\u5f15\u53f7-\u5b9a\u4e49\u6a21\u677f\u5b57\u7b26\u4e32",children:[]}]},{value:"4\u3001\u5bf9\u8c61\u7b80\u5316\u5199\u6cd5",id:"4\u3001\u5bf9\u8c61\u7b80\u5316\u5199\u6cd5",children:[]},{value:"5\u3001\u7bad\u5934\u51fd\u6570",id:"5\u3001\u7bad\u5934\u51fd\u6570",children:[{value:"5.1\u3001\u7b80\u5316\u51fd\u6570\u5b9a\u4e49\u8bed\u6cd5",id:"51\u3001\u7b80\u5316\u51fd\u6570\u5b9a\u4e49\u8bed\u6cd5",children:[]},{value:"5.2\u3001\u7279\u6027",id:"52\u3001\u7279\u6027",children:[]}]},{value:"6\u3001\u53c2\u6570",id:"6\u3001\u53c2\u6570",children:[{value:"6.1\u3001\u51fd\u6570\u5f62\u53c2\u9ed8\u8ba4\u503c",id:"61\u3001\u51fd\u6570\u5f62\u53c2\u9ed8\u8ba4\u503c",children:[]},{value:"6.2\u3001\u51fd\u6570\u5269\u4f59\u53c2\u6570<code>...args</code>",id:"62\u3001\u51fd\u6570\u5269\u4f59\u53c2\u6570args",children:[]}]},{value:"7\u3001\u6269\u5c55\u8fd0\u7b97\u7b26<code>...</code>",id:"7\u3001\u6269\u5c55\u8fd0\u7b97\u7b26",children:[{value:"7.1\u3001\u62c6\u5206\u6570\u7ec4\u5e8f\u5217",id:"71\u3001\u62c6\u5206\u6570\u7ec4\u5e8f\u5217",children:[]},{value:"7.2\u3001\u5c06\u4e3a\u6570\u7ec4\u8f6c\u6362\u6210\u771f\u6570\u7ec4",id:"72\u3001\u5c06\u4e3a\u6570\u7ec4\u8f6c\u6362\u6210\u771f\u6570\u7ec4",children:[]}]},{value:"8\u3001\u8fed\u4ee3\u5668",id:"8\u3001\u8fed\u4ee3\u5668",children:[{value:"8.1\u3001<code>for... of...</code>",id:"81\u3001for-of",children:[]}]},{value:"9\u3001Promise",id:"9\u3001promise",children:[{value:"9.1\u3001\u5c06\u5f02\u6b65\u4efb\u52a1\u5957\u5728Promise\u6784\u9020\u51fd\u6570\u4e2d",id:"91\u3001\u5c06\u5f02\u6b65\u4efb\u52a1\u5957\u5728promise\u6784\u9020\u51fd\u6570\u4e2d",children:[]},{value:"9.2\u3001\u5c06\u666e\u901a\u51fd\u6570\u53d8\u6210\u5f02\u6b65\u51fd\u6570<code>async</code>",id:"92\u3001\u5c06\u666e\u901a\u51fd\u6570\u53d8\u6210\u5f02\u6b65\u51fd\u6570async",children:[]},{value:"9.3 Promise API",id:"93-promise-api",children:[]}]},{value:"10\u3001\u96c6\u5408<code>Set</code>",id:"10\u3001\u96c6\u5408set",children:[{value:"10.1\u3001\u58f0\u660e\u96c6\u5408<code>Set</code>",id:"101\u3001\u58f0\u660e\u96c6\u5408set",children:[]},{value:"10.2\u3001<code>Set</code>\u7684api",id:"102\u3001set\u7684api",children:[]},{value:"10.3\u3001",id:"103\u3001",children:[]}]},{value:"11\u3001\u952e\u503c\u5bf9\u96c6\u5408<code>Map</code>",id:"11\u3001\u952e\u503c\u5bf9\u96c6\u5408map",children:[{value:"11.1\u3001\u58f0\u660e\u4f7f\u7528",id:"111\u3001\u58f0\u660e\u4f7f\u7528",children:[]}]},{value:"12\u3001<code>class</code>\u521b\u5efa\u5bf9\u8c61",id:"12\u3001class\u521b\u5efa\u5bf9\u8c61",children:[{value:"12.1\u3001\u58f0\u660e\u521b\u5efa\u5bf9\u8c61",id:"121\u3001\u58f0\u660e\u521b\u5efa\u5bf9\u8c61",children:[]},{value:"12.2\u3001\u9759\u6001\u6210\u5458<code>static</code>",id:"122\u3001\u9759\u6001\u6210\u5458static",children:[]},{value:"12.3\u3001\u5bf9\u8c61\u7ee7\u627f",id:"123\u3001\u5bf9\u8c61\u7ee7\u627f",children:[]},{value:"12.4\u3001get\u548cset\u65b9\u6cd5",id:"124\u3001get\u548cset\u65b9\u6cd5",children:[]},{value:"12.5\u3001\u5bf9\u8c61\u65b9\u6cd5\u6269\u5c55",id:"125\u3001\u5bf9\u8c61\u65b9\u6cd5\u6269\u5c55",children:[]}]},{value:"13\u3001\u6a21\u5757\u5316<code>modules</code>",id:"13\u3001\u6a21\u5757\u5316modules",children:[{value:"13.1\u3001ES6\u4e4b\u524d\u7684\u6a21\u5757\u5316\u89c4\u8303",id:"131\u3001es6\u4e4b\u524d\u7684\u6a21\u5757\u5316\u89c4\u8303",children:[]},{value:"13.2\u3001ES6\u6a21\u5757\u5316\u89c4\u8303\uff08ES6 modules\uff09",id:"132\u3001es6\u6a21\u5757\u5316\u89c4\u8303\uff08es6-modules\uff09",children:[]}]}],b=({children:e,color:n})=>Object(a.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),s={toc:o,Highlight:b};function i({components:e,...n}){return Object(a.b)("wrapper",Object(l.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"ES6\u7248\u672c\u53d8\u52a8\u5185\u5bb9\u6700\u591a\uff0c\u52a0\u5165\u4e86\u8bb8\u591a\u65b0\u7684\u8bed\u6cd5\u7279\u6027\uff0c\u7f16\u7a0b\u5b9e\u73b0\u8ddf\u7b80\u5355\u3001\u9ad8\u6548\uff1b\u662f\u524d\u7aef\u53d1\u5c55\u7684\u8d8b\u52bf\uff0cvue\u3001react\u7b49\u524d\u7aef\u6846\u67b6\u57fa\u672c\u4e0a\u90fd\u662f\u4f7f\u7528\u7684ES6\u7248\u672c\u8bed\u6cd5\uff0c\u76ee\u524d\u5df2\u57fa\u672c\u4e0d\u7528\u8003\u8651ES6\u517c\u5bb9\u6027\uff0c\u5e94\u4e3a\u540e\u9762\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7babel\u8fdb\u884c\u8f6c\u6362"),Object(a.b)("h2",{id:"1\u3001\u65b0\u589e\u53d8\u91cf\u58f0\u660e\u5173\u952e\u5b57"},"1\u3001\u65b0\u589e\u53d8\u91cf\u58f0\u660e\u5173\u952e\u5b57"),Object(a.b)("h3",{id:"11\u3001let"},"1.1\u3001",Object(a.b)("inlineCode",{parentName:"h3"},"let")),Object(a.b)("p",null,"\uff081\uff09\u3001\u4f7f\u7528",Object(a.b)("inlineCode",{parentName:"p"},"let"),"\u5173\u952e\u5b57\u58f0\u660e\u53d8\u91cf"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'let age=18\nlet name="zjiaahui"\n')),Object(a.b)("blockquote",null,Object(a.b)(b,{color:"#25c2a0",mdxType:"Highlight"},"\u7279\u6027\uff1a"),Object(a.b)("br",null),"\u2460 \u5177\u6709\u5757\u7ea7\u4f5c\u7528\u57df",Object(a.b)("br",null),"\u2461 \u4e0d\u5b58\u5728\u53d8\u91cf\u63d0\u5347",Object(a.b)("br",null),"\u2462 \u4e0d\u80fd\u91cd\u590d\u58f0\u660e",Object(a.b)("br",null),"\u2463 \u4e0d\u5f71\u54cd\u4f5c\u7528\u57df\u94fe\u6548\u679c",Object(a.b)("br",null),"\u2464 \u4e14\u6709\u6682\u65f6\u6027\u6b7b\u533a\u7279\u6027\uff08\u5728\u8d4b\u503c\u4e4b\u524d\u4e0d\u53ef\u8bbf\u95ee\uff0c\u5982\u679c\u8bbf\u95ee\u4e86\u4f1a\u629b\u51faReferenceError\u9519\u8bef\uff09"),Object(a.b)("h3",{id:"12\u3001const"},"1.2\u3001",Object(a.b)("inlineCode",{parentName:"h3"},"const")),Object(a.b)("p",null,"\uff081\uff09\u3001\u4f7f\u7528",Object(a.b)("inlineCode",{parentName:"p"},"const"),"\u5173\u952e\u5b57\u58f0\u660e\u5e38\u91cf"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const AGE=18\n")),Object(a.b)("blockquote",null,Object(a.b)(b,{color:"#25c2a0",mdxType:"Highlight"},"\u7279\u6027\uff1a"),Object(a.b)("br",null),"\u2460 \u5177\u6709\u5757\u7ea7\u4f5c\u7528\u57df",Object(a.b)("br",null),"\u2461 \u5fc5\u987b\u8d4b\u521d\u59cb\u503c\u4e0d\u7136\u62a5\u9519",Object(a.b)("br",null),"\u2462 \u8d4b\u503c\u540e\uff0c\u4e0d\u80fd\u66f4\u6539\u8d4b\u503c\uff08\u503c\u6307\u7684\u662f\u6307\u5411\u7684\u5185\u5b58\u5730\u5740\u4e0d\u80fd\u6539\u53d8\uff0c\u5982\u679c\u662f\u5bf9\u8c61\u5219\u5bf9\u8c61\u6307\u5411\u7684\u5185\u5b58\u5730\u5740\u4e0d\u80fd\u6539\u53d8\u5bf9\u8c61/\u6570\u7ec4\u7684\u5c5e\u6027\u53ef\u4ee5\u6539\u53d8\uff09",Object(a.b)("br",null),"\u2463 \u4e0d\u5b58\u5728\u53d8\u91cf\u63d0\u5347",Object(a.b)("br",null)),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u7a0b\u5e8f\u4e2d\u4e0d\u6539\u53d8\u7684\u503c/\u58f0\u660e\u51fd\u6570\u5c3d\u91cf\u4f7f\u7528const\u5173\u952e\u5b57\u58f0\u660e\uff0cjavascript\u5f15\u64ce\u4e0d\u9700\u5b9e\u65f6\u76d1\u63a7\u6548\u7387\u7565\u9ad8")),Object(a.b)("h3",{id:"13\u3001symbool"},"1.3\u3001",Object(a.b)("inlineCode",{parentName:"h3"},"symbool")),Object(a.b)("p",null,"\uff081\uff09\u3001\u4f7f\u7528",Object(a.b)("inlineCode",{parentName:"p"},"symbool"),"\u5173\u952e\u5b57\u58f0\u660e\u539f\u59cb\u6570\u636e\u7c7b\u578b\uff0c\u8868\u793a\u72ec\u4e00\u65e0\u4e8c\u7684\u503c"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"let s=Symbol();//\u6b64\u65f6s\u62e5\u6709\u552f\u4e00\u503c\uff08\u6211\u4eec\u770b\u4e0d\u5230\u7684\u552f\u4e00\u503c\uff09\n\nlet s2=Symbol('zjiaahui')\nlet s3=Symbol('zjiaahui')\n//s2\u548cs3\u7684\u503c\u662f\u4e0d\u76f8\u7b49\u7684\u552f\u4e00\u503c\n\n\nlet s4=Symbol.for('zjiaahui')\nlet s5=Symbol.for('zjiaahui')\n//s4\u548cs5\u7684\u503c\u662f\u76f8\u7b49\u7684\u552f\u4e00\u503c\n")),Object(a.b)("blockquote",null,Object(a.b)(b,{color:"#25c2a0",mdxType:"Highlight"},"\u7279\u6027\uff1a"),Object(a.b)("br",null),"\u2460 \u4e0d\u80fd\u4e0e\u5176\u4ed6\u6570\u636e\u8fdb\u884c\u8fd0\u7b97",Object(a.b)("br",null),"\u2461 \u5b9a\u4e49\u7684\u5bf9\u8c61\u5c5e\u6027\u4e0d\u80fd\u4f7f\u7528for...in...\u5faa\u73af\u904d\u5386",Object(a.b)("br",null),"\u2462 \u53ef\u901a\u8fc7reflect.ownkeys\u83b7\u53d6\u5bf9\u8c61\u7684\u6240\u6709\u952e\u540d"),Object(a.b)("h2",{id:"2\u3001\u89e3\u6784\u8d4b\u503c"},"2\u3001\u89e3\u6784\u8d4b\u503c"),Object(a.b)("p",null,"\u901a\u8fc7\u4e00\u5b9a\u7684\u6a21\u5f0f\u548c\u4e00\u4e00\u5bf9\u5e94\u7684\u5173\u7cfb\u4ece ",Object(a.b)("strong",{parentName:"p"},"\u6570\u7ec4/\u5bf9\u8c61")," \u63d0\u53d6\u503c\uff0c\u5bf9\u53d8\u91cf\u8fdb\u884c\u8d4b\u503c"),Object(a.b)("h3",{id:"21\u3001\u6570\u7ec4\u89e3\u6784"},"2.1\u3001\u6570\u7ec4\u89e3\u6784"),Object(a.b)("p",null,"\uff081\uff09\u3001\u6309\u9700\u89e3\u6784\u6570\u7ec4\u4e0b\u6807\u5bf9\u5e94\u8d4b\u503c\u7ed9\u5de6\u8fb9\u4f2a\u6570\u7ec4\u4e2d\u7684\u53d8\u91cf\uff0c\u800c\u4e14\u4f2a\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u53d8\u91cf\u540d\u90fd\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u53d8\u91cf\u540d\u8bbf\u95ee"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"let userList=['\u5f20\u4e09','\u674e\u56db','\u738b\u4e94']\nlet [a,b,c]=userList //\u6309\u6570\u7ec4\u4e0b\u6807\u5bf9\u5e94\u8d4b\u503c\u7ed9\u5de6\u8fb9\nconsole.log(a)\nconsole.log(b)\nconsole.log(c)\n-------------------------------------\n=>\u5f20\u4e09\n=>\u674e\u56db\n=>\u738b\u4e94\n")),Object(a.b)("p",null,"\uff082\uff09\u3001\u5b9a\u4e49\u7684\u4e3a\u6570\u7ec4\u4e0d\u8db3\u9700\u7ed3\u6784\u6570\u7ec4\u65f6\u591a\u4f59\u7684\u4e0d\u8d4b\u503c"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"let userList=['\u5f20\u4e09','\u674e\u56db','\u738b\u4e94']\nlet [a,b]=userList\nconsole.log(a)\nconsole.log(b)\n-------------------------------------\n=>\u5f20\u4e09\n=>\u674e\u56db\n")),Object(a.b)("p",null,"\uff083\uff09\u3001\u8d85\u51fa\u9700\u89e3\u6784\u6570\u7ec4\u6570\u91cf\u65f6\u8d4bundefind"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"let userList=['\u5f20\u4e09','\u674e\u56db','\u738b\u4e94']\nlet [a,b,c,d,e]=userList\nconsole.log(a)\nconsole.log(b)\nconsole.log(c)\nconsole.log(d)\nconsole.log(e)\n-------------------------------------\n=>\u5f20\u4e09\n=>\u674e\u56db\n=>\u738b\u4e94\n=>undefined\n=>undefined\n")),Object(a.b)("h3",{id:"22\u3001\u5bf9\u8c61\u89e3\u6784"},"2.2\u3001\u5bf9\u8c61\u89e3\u6784"),Object(a.b)("p",null,"\u5141\u8bb8\u6211\u4eec\u4f7f\u7528\u53d8\u91cf\u7684\u540d\u5b57\u5339\u914d\u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u5339\u914d\u6210\u529f\u5219\u5c06\u5bf9\u8c61\u7684\u5c5e\u6027\u503c\u8d4b\u503c\u7ed9\u53d8\u91cf"),Object(a.b)("p",null,"\uff081\uff09\u3001\u76f4\u63a5\u4f7f\u7528\u5bf9\u8c61\u7684\u5c5e\u6027\u540d\u4f5c\u4e3a\u53d8\u91cf\u540d"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'let person={name:"\u5f20\u4e09",age:30,sex:"\u7537"}\nlet {name,age,sex}=person\nconsole.log(name)\nconsole.log(age)\nconsole.log(sex)\n-------------------------------------\n=>\u5f20\u4e09\n=>30\n=>\u7537\n')),Object(a.b)("p",null,"\uff082\uff09\u3001\u6307\u5b9a\u5176\u4ed6\u53d8\u91cf\u540d\u89e3\u6784"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'let person={name:"\u5f20\u4e09",age:30,sex:"\u7537"}\nlet {name:myname,age:myage,sex:mysex}=person\nconsole.log(myname)\nconsole.log(myage)\nconsole.log(mysex)\n-------------------------------------\n=>\u5f20\u4e09\n=>30\n=>\u7537\n')),Object(a.b)(b,{color:"red",mdxType:"Highlight"},"\u6ce8\u610f:"),Object(a.b)("p",null,"\u89e3\u6784\u6570\u7ec4\u65f6\u5b9a\u4e49\u53d8\u91cf\u4f7f\u7528\u6570\u7ec4\u62ec\u53f7",Object(a.b)("inlineCode",{parentName:"p"},"[]"),",\u89e3\u6784\u5bf9\u8c61\u65f6\u5b9a\u4e49\u53d8\u91cf\u4f7f\u7528\u5bf9\u8c61\u62ec\u53f7",Object(a.b)("inlineCode",{parentName:"p"},"{}")),Object(a.b)("h2",{id:"3\u3001\u6a21\u677f\u5b57\u7b26\u4e32"},"3\u3001\u6a21\u677f\u5b57\u7b26\u4e32"),Object(a.b)("h3",{id:"31\u3001\u53cd\u5f15\u53f7-\u5b9a\u4e49\u6a21\u677f\u5b57\u7b26\u4e32"},"3.1\u3001\u53cd\u5f15\u53f7 ``\u5b9a\u4e49\u6a21\u677f\u5b57\u7b26\u4e32"),Object(a.b)("p",null,"(1)\u3001\u901a\u8fc7\u53cd\u5f15\u53f7\u5305\u88f9\u5b57\u7b26\u4e32\u7684\u65b9\u5f0f\u58f0\u660e\u5b57\u7b26\u4e32"),Object(a.b)("blockquote",null,Object(a.b)(b,{color:"#25c2a0",mdxType:"Highlight"},"\u7279\u6027\uff1a"),Object(a.b)("br",null),"\u2460 \u6a21\u677f\u5b57\u7b26\u4e32\u5185\u5bb9\u4e2d\u53ef\u4ee5\u51fa\u73b0\u6362\u884c\u7b26",Object(a.b)("br",null),"\u2461 \u53ef\u4ee5\u53d8\u91cf\u62fc\u63a5",Object(a.b)("br",null)),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'let name="zjiaahui"\nlet text=`\u4f60\u8bf4\u6211\u662f\u8c01\uff1f\n\u6211\u662f${name}`\nconsole.log(text)\n-------------------------------------\n=>\u4f60\u8bf4\u6211\u662f\u8c01\uff1f\n\u6211\u662fzjiaahui\n')),Object(a.b)("h2",{id:"4\u3001\u5bf9\u8c61\u7b80\u5316\u5199\u6cd5"},"4\u3001\u5bf9\u8c61\u7b80\u5316\u5199\u6cd5"),Object(a.b)("p",null,"ES6\u4e2d\u5141\u8bb8\u5728\u5927\u62ec\u53f7\u91cc\u76f4\u63a5\u5199\u5165\u53d8\u91cf\u548c\u51fd\u6570\uff0c\u4f5c\u4e3a\u5bf9\u8c61\u7684\u5c5e\u6027\u548c\u65b9\u6cd5"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"/************ES5\u5199\u6cd5**************/ \n//const user={\n//    name:name,\n//    age:age,\n//    sayHi:function(){\n//        console.log('\u4f60\u597d')\n//    }\n//}\n/************ES6\u7b80\u5316\u5199\u6cd5**************/ \nconst user={\n    name,\n    age,\n    sayHi(){\n        console.log('\u4f60\u597d')\n    }\n}\n")),Object(a.b)("h2",{id:"5\u3001\u7bad\u5934\u51fd\u6570"},"5\u3001\u7bad\u5934\u51fd\u6570"),Object(a.b)("h3",{id:"51\u3001\u7b80\u5316\u51fd\u6570\u5b9a\u4e49\u8bed\u6cd5"},"5.1\u3001\u7b80\u5316\u51fd\u6570\u5b9a\u4e49\u8bed\u6cd5"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"/************ES5\u5199\u6cd5**************/ \nvar fn=function(){\n\n}\n/************ES6\u7b80\u5316\u5199\u6cd5(\u7bad\u5934\u51fd\u6570)**************/ \nconst fn=()=>{\n\n}\n")),Object(a.b)("h3",{id:"52\u3001\u7279\u6027"},"5.2\u3001\u7279\u6027"),Object(a.b)("p",null,"\uff081\uff09\u3001\u7bad\u5934\u51fd\u6570\u7684this\u662f\u9759\u6001\u7684\uff0c\u59cb\u7ec8\u6307\u5411\u7684\u662f\u7bad\u5934\u51fd\u6570\u58f0\u660e\u65f6\u6240\u5728\u7684\u4f5c\u7528\u57dfthis"),Object(a.b)("p",null,"\uff082\uff09\u3001\u4e0d\u80fd\u4f5c\u4e3a\u6784\u9020\u51fd\u6570\u5b9e\u4f8b\u5316\u5bf9\u8c61"),Object(a.b)("p",null,"\uff083\uff09\u3001\u4e0d\u80fd\u4f7f\u7528arguments\u53d8\u91cf"),Object(a.b)("p",null,"\uff084\uff09\u3001\u4e0d\u80fd\u4f7f\u7528call\u65b9\u6cd5\u4fee\u6539this\u7684\u6307\u5411"),Object(a.b)("p",null,"\uff085\uff09\u3001\u5982\u679c\u5f62\u53c2\u6709\u4e14\u53ea\u6709\u4e00\u4e2a\u53ef\u4ee5\u7701\u7565\u5c0f\u62ec\u53f7"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const fn=n=>{\n\n}\n")),Object(a.b)("p",null," \uff086\uff09\u3001\u5982\u679c\u51fd\u6570\u4f53\u53ea\u6709\u4e00\u53e5\u4ee3\u7801\uff0c\u4e14\u4ee3\u7801\u7684\u6267\u884c\u7ed3\u679c\u5c31\u662f\u8fd4\u56de\u503c\u65f6\u53ef\u4ee5\u7701\u7565\u5927\u62ec\u53f7\u548creturn\u5173\u952e\u5b57"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const fn=n=>n+1\nconsole.log(fn(1))\n------------------\n=>2\n")),Object(a.b)("h2",{id:"6\u3001\u53c2\u6570"},"6\u3001\u53c2\u6570"),Object(a.b)("h3",{id:"61\u3001\u51fd\u6570\u5f62\u53c2\u9ed8\u8ba4\u503c"},"6.1\u3001\u51fd\u6570\u5f62\u53c2\u9ed8\u8ba4\u503c"),Object(a.b)("p",null,"ES6\u5141\u8bb8\u7ed9\u51fd\u6570\u5f62\u5f0f\u53c2\u6570\u8d4b\u521d\u59cb\u503c\uff0c\u5177\u6709\u9ed8\u8ba4\u503c\u7684\u53c2\u6570\u8981\u9760\u6700\u540e"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"function add(a,b,c=15){\n    return a+b+c\n}\n\nconsole.log(add(1,2))\n-------------------------\n=> 18\n")),Object(a.b)("h3",{id:"62\u3001\u51fd\u6570\u5269\u4f59\u53c2\u6570args"},"6.2\u3001\u51fd\u6570\u5269\u4f59\u53c2\u6570",Object(a.b)("inlineCode",{parentName:"h3"},"...args")),Object(a.b)("p",null,"(1)\u3001\u5269\u4f59\u53c2\u6570",Object(a.b)("inlineCode",{parentName:"p"},"...args"),"\u4e00\u5b9a\u8981\u653e\u5728\u6700\u540e"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"function fn(a,b,...args){\n    console.log(a) \n    console.log(b) \n    console.log(args) \n}\nfn(1,2,3,4,5,6);\n--------------------------------\n=>1\n=>2\n=>[3,4,5,6]\n")),Object(a.b)("h2",{id:"7\u3001\u6269\u5c55\u8fd0\u7b97\u7b26"},"7\u3001\u6269\u5c55\u8fd0\u7b97\u7b26",Object(a.b)("inlineCode",{parentName:"h2"},"...")),Object(a.b)("h3",{id:"71\u3001\u62c6\u5206\u6570\u7ec4\u5e8f\u5217"},"7.1\u3001\u62c6\u5206\u6570\u7ec4\u5e8f\u5217"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"//\u62c6\u5206\u6570\u7ec4\u5e8f\u5217\nlet arg1=[1,2,3]\nlet arg2=[4,5,6]\nconsole.log(arg1)    -> [1,2,3]\nconsole.log(arg2)    -> [4,5,6]\n\nconsole.log(...arg1) -> 1,2,3\nconsole.log(...arg2) -> 4,5,6\n\nlet arg3=[...arg1,agr2]\nconsole.log(arg3)    ->[1,2,3,4,5,6]\n")),Object(a.b)("h3",{id:"72\u3001\u5c06\u4e3a\u6570\u7ec4\u8f6c\u6362\u6210\u771f\u6570\u7ec4"},"7.2\u3001\u5c06\u4e3a\u6570\u7ec4\u8f6c\u6362\u6210\u771f\u6570\u7ec4"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"let mydiv=document.getElementByTayName('div')\n\nlet arg=[...mudiv]\n\n")),Object(a.b)("h2",{id:"8\u3001\u8fed\u4ee3\u5668"},"8\u3001\u8fed\u4ee3\u5668"),Object(a.b)("h3",{id:"81\u3001for-of"},"8.1\u3001",Object(a.b)("inlineCode",{parentName:"h3"},"for... of...")),Object(a.b)("p",null,"for...in...\u83b7\u53d6\u7684\u662f\u952e\u540d\uff0cfor...of...\u83b7\u53d6\u7684\u662f\u952e\u503c"),Object(a.b)("h2",{id:"9\u3001promise"},"9\u3001Promise"),Object(a.b)("p",null,"\u5f02\u6b65\u7f16\u7a0b\u89e3\u51b3\u65b9\u6848,\u901a\u8fc7Promise\u53ef\u4ee5\u89e3\u51b3\u56de\u8c03\u5730\u72f1\u7684\u95ee\u9898"),Object(a.b)("h3",{id:"91\u3001\u5c06\u5f02\u6b65\u4efb\u52a1\u5957\u5728promise\u6784\u9020\u51fd\u6570\u4e2d"},"9.1\u3001\u5c06\u5f02\u6b65\u4efb\u52a1\u5957\u5728Promise\u6784\u9020\u51fd\u6570\u4e2d"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'let myPromise=new Promise((resolve,reject)=>{\n    \n    \u6b64\u5904\u5199\u5f02\u6b65\u4efb\u52a1\u4ee3\u7801\u5757\n    \n    \u5728\u5f02\u6b65\u4efb\u52a1\u4ee3\u7801\u7684\u56de\u8c03\u51fd\u6570\u4e2d\u5982\u679c\u6210\u529f \u5219\u8c03\u7528 resolve("\u8fd4\u56de\u503c") \n    \u5982\u679c\u5931\u8d25\u5219\u8c03\u7528 reject(err)\n    \u540e\u9762\u901a\u8fc7Promise\u5b9e\u4f8b\u7684 then()\u65b9\u6cd5\u548c catch()\u65b9\u6cd5\u5206\u522b\u5904\u7406\u4ee5\u4e0a\u8c03\u7528\u7684\u6210\u529f\u548c\u5931\u8d25\n\n})\nmyPromise.then(result=>{\n    \u4e0a\u9762Promise\u5bf9\u8c61\u6784\u9020\u51fd\u6570\u4e2d\u8c03\u7528\u4e86 resolve("\u8fd4\u56de\u503c") \u65b9\u6cd5\u65f6\u6b64\u5904\u4f1a\u83b7\u5f97\u8fd4\u56de\u503c \n}).catch(err=>{\n    \u4e0a\u9762Promise\u5bf9\u8c61\u6784\u9020\u51fd\u6570\u4e2d\u8c03\u7528\u4e86 reject(err) \u65b9\u6cd5\u65f6\u6b64\u5904\u4f1a\u83b7\u5f97err\u503c \n})\n\n')),Object(a.b)("h3",{id:"92\u3001\u5c06\u666e\u901a\u51fd\u6570\u53d8\u6210\u5f02\u6b65\u51fd\u6570async"},"9.2\u3001\u5c06\u666e\u901a\u51fd\u6570\u53d8\u6210\u5f02\u6b65\u51fd\u6570",Object(a.b)("inlineCode",{parentName:"h3"},"async")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"\u5728\u666e\u901a\u51fd\u6570\u524d\u52a0 async \u5173\u952e\u5b57\uff0c\u5c06\u666e\u901a\u51fd\u6570\u53d8\u6210\u5f02\u6b65\u51fd\u6570\n\nasync \u5173\u952e\u5b57\u7684\u5f02\u6b65\u51fd\u6570\u9ed8\u8ba4\u8fd4\u56de Promise \u5bf9\u8c61,\n\u4f46\u662f\u8981\u5728\u51fd\u6570\u4e2d\u4f7f\u7528 return \u6765\u4ee3\u66ff Promise \u5bf9\u8c61\u7684 resolve() \u65b9\u6cd5\n\u4f7f\u7528 throw \u6765\u4ee3\u66ff Promise \u5bf9\u8c61\u7684 reject() \u65b9\u6cd5\n\n\u6700\u540e\u8c03\u7528\u8be5\u51fd\u6570\u540e\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528 then()\u65b9\u6cd5\n\nasync \u51fd\u6570\u4e2d\u7684 await \u5173\u952e\u5b57\u53ea\u80fd\u51fa\u73b0\u5728\u5f02\u6b65\u51fd\u6570\u4e2d await \u540e\u9762\u53ea\u80fd\u5199 Promise \u5bf9\u8c61\nawait \u5173\u952e\u5b57\u53ea\u80fd\u9501\u4f4f\u5f02\u6b65\u51fd\u6570\u5411\u4e0b\u6267\u884c\u8fd4\u56de Promise \u7ed3\u679c \n\n")),Object(a.b)("h3",{id:"93-promise-api"},"9.3 Promise API"),Object(a.b)("p",null,"\uff081\uff09Promise.all() \u5b83\u7684reject\u56de\u8c03\u6267\u884c\u662f\uff0c\u53ea\u8981\u4efb\u4f55\u4e00\u4e2a\u8f93\u5165\u7684promise\u7684reject\u56de\u8c03\u6267\u884c\u6216\u8005\u8f93\u5165\u4e0d\u5408\u6cd5\u7684promise\u5c31\u4f1a\u7acb\u5373\u629b\u51fa\u9519\u8bef\uff0c\u5e76\u4e14reject\u7684\u662f\u7b2c\u4e00\u4e2a\u629b\u51fa\u7684\u9519\u8bef\u4fe1\u606f\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const promise1 = Promise.resolve(3);\nconst promise2 = 42;\nconst promise3 = new Promise((resolve, reject) => {\n  setTimeout(resolve, 100, 'foo');\n});\n\nPromise.all([promise1, promise2, promise3]).then((values) => {\n  console.log(values);\n});\n// expected output: Array [3, 42, \"foo\"]\n")),Object(a.b)("p",null,"(2)Promise.any() \u63a5\u6536\u4e00\u4e2aPromise\u53ef\u8fed\u4ee3\u5bf9\u8c61\uff0c\u53ea\u8981\u5176\u4e2d\u7684\u4e00\u4e2a promise \u6210\u529f\uff0c\u5c31\u8fd4\u56de\u90a3\u4e2a\u5df2\u7ecf\u6210\u529f\u7684 promise \u3002\u5982\u679c\u53ef\u8fed\u4ee3\u5bf9\u8c61\u4e2d\u6ca1\u6709\u4e00\u4e2a promise \u6210\u529f\uff08\u5373\u6240\u6709\u7684 promises \u90fd\u5931\u8d25/\u62d2\u7edd\uff09\uff0c\u5c31\u8fd4\u56de\u4e00\u4e2a\u5931\u8d25\u7684 promise "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'const pErr = new Promise((resolve, reject) => {\n  reject("\u603b\u662f\u5931\u8d25");\n});\n\nconst pSlow = new Promise((resolve, reject) => {\n  setTimeout(resolve, 500, "\u6700\u7ec8\u5b8c\u6210");\n});\n\nconst pFast = new Promise((resolve, reject) => {\n  setTimeout(resolve, 100, "\u5f88\u5feb\u5b8c\u6210");\n});\n\nPromise.any([pErr, pSlow, pFast]).then((value) => {\n  console.log(value);\n  // pFast fulfils first\n})\n// \u671f\u671b\u8f93\u51fa: "\u5f88\u5feb\u5b8c\u6210"\n\n')),Object(a.b)("p",null,"(3)\u3001Promise.race() \u51fd\u6570\u8fd4\u56de\u4e00\u4e2a Promise\uff0c\u5b83\u5c06\u4e0e\u7b2c\u4e00\u4e2a\u4f20\u9012\u7684 promise \u76f8\u540c\u7684\u5b8c\u6210\u65b9\u5f0f\u88ab\u5b8c\u6210\u3002\u5b83\u53ef\u4ee5\u662f\u5b8c\u6210\uff08 resolves\uff09\uff0c\u4e5f\u53ef\u4ee5\u662f\u5931\u8d25\uff08rejects\uff09\uff0c\u8fd9\u8981\u53d6\u51b3\u4e8e\u7b2c\u4e00\u4e2a\u5b8c\u6210\u7684\u65b9\u5f0f\u662f\u4e24\u4e2a\u4e2d\u7684\u54ea\u4e2a\u3002"),Object(a.b)("h2",{id:"10\u3001\u96c6\u5408set"},"10\u3001\u96c6\u5408",Object(a.b)("inlineCode",{parentName:"h2"},"Set")),Object(a.b)("h3",{id:"101\u3001\u58f0\u660e\u96c6\u5408set"},"10.1\u3001\u58f0\u660e\u96c6\u5408",Object(a.b)("inlineCode",{parentName:"h3"},"Set")),Object(a.b)("p",null,"\u4e0d\u5b58\u50a8\u91cd\u590d\u7684\u503c,\u5982\u6709\u91cd\u590d\u81ea\u52a8\u53bb\u9664"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"let s=new Set()\n\nlet s1=new Set(['a','b','c','d'])\n")),Object(a.b)("h3",{id:"102\u3001set\u7684api"},"10.2\u3001",Object(a.b)("inlineCode",{parentName:"h3"},"Set"),"\u7684api"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"let s=new Set(['a','a','a'])\ns                        => \u81ea\u52a8\u53bb\u91cd\u8fd4\u56de {\"a\"}\n\nlet s1=new Set(['a','b','c','d'])\n//\u5143\u7d20\u4e2a\u6570\ns1.size\n//\u6dfb\u52a0\u5143\u7d20\ns1.add('e')              =>  \u76f4\u63a5\u64cd\u4f5c\u539f\u96c6\u5408\u8fd4\u56de\xa0{\"a\", \"b\", \"c\", \"d\", \"e\"}  \n//\u5220\u9664\u5143\u7d20\ns1.delete('a')           =>  \u76f4\u63a5\u64cd\u4f5c\u539f\u96c6\u5408\u8fd4\u56de true/false \n//\u5224\u65ad\u662f\u5426\u5b58\u5728\u67d0\u4e2a\u5143\u7d20\ns1.has('b')              =>  \u76f4\u63a5\u64cd\u4f5c\u539f\u96c6\u5408\u8fd4\u56de true/false \n//\u6e05\u7a7a\u96c6\u5408\ns1.clear()               =>  \u76f4\u63a5\u64cd\u4f5c\u539f\u96c6\u5408\u8fd4\u56de {}\n")),Object(a.b)("h3",{id:"103\u3001"},"10.3\u3001"),Object(a.b)("p",null,"\u6570\u7ec4\u53bb\u91cd"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"let arr=[1,2,3,4,5,5,4,3,2,1]\nlet result=[...new Set(arr)]\n")),Object(a.b)("h2",{id:"11\u3001\u952e\u503c\u5bf9\u96c6\u5408map"},"11\u3001\u952e\u503c\u5bf9\u96c6\u5408",Object(a.b)("inlineCode",{parentName:"h2"},"Map")),Object(a.b)("h3",{id:"111\u3001\u58f0\u660e\u4f7f\u7528"},"11.1\u3001\u58f0\u660e\u4f7f\u7528"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'let myMap = new Map();\n\nlet keyObj = {};\nlet keyFunc = function() {};\nlet keyString = \'a string\';\n\n// \u6dfb\u52a0\u952e\nmyMap.set(keyString, "\u548c\u952e\'a string\'\u5173\u8054\u7684\u503c");\nmyMap.set(keyObj, "\u548c\u952ekeyObj\u5173\u8054\u7684\u503c");\nmyMap.set(keyFunc, "\u548c\u952ekeyFunc\u5173\u8054\u7684\u503c");\n\nmyMap.size; // 3\n\n// \u8bfb\u53d6\u503c\nmyMap.get(keyString);    // "\u548c\u952e\'a string\'\u5173\u8054\u7684\u503c"\nmyMap.get(keyObj);       // "\u548c\u952ekeyObj\u5173\u8054\u7684\u503c"\nmyMap.get(keyFunc);      // "\u548c\u952ekeyFunc\u5173\u8054\u7684\u503c"\n\nmyMap.get(\'a string\');   // "\u548c\u952e\'a string\'\u5173\u8054\u7684\u503c"\n                         // \u56e0\u4e3akeyString === \'a string\'\nmyMap.get({});           // undefined, \u56e0\u4e3akeyObj !== {}\nmyMap.get(function() {}); // undefined, \u56e0\u4e3akeyFunc !== function () {}\n\n')),Object(a.b)("h2",{id:"12\u3001class\u521b\u5efa\u5bf9\u8c61"},"12\u3001",Object(a.b)("inlineCode",{parentName:"h2"},"class"),"\u521b\u5efa\u5bf9\u8c61"),Object(a.b)("p",null,"\u901a\u8fc7class\u5173\u952e\u5b57\u5b9a\u4e49\u7c7b\u76f8\u5f53\u4e8eES5\u7684\u8bed\u6cd5\u7cd6\u5199\u6cd5"),Object(a.b)("p",null,"\uff081\uff09\u3001\u901a\u8fc7class\u58f0\u660e\u7c7b"),Object(a.b)("p",null,"\uff082\uff09\u3001constructor\u5b9a\u4e49\u6784\u9020\u51fd\u6570\u521d\u59cb\u5316"),Object(a.b)("p",null,"\uff083\uff09\u3001extends\u7ee7\u627f\u7236\u7c7b"),Object(a.b)("p",null,"\uff084\uff09\u3001super\u8c03\u7528\u7236\u7ea7\u6784\u9020\u51fd\u6570"),Object(a.b)("p",null,"\uff085\uff09\u3001static\u5b9a\u4e49\u9759\u6001\u65b9\u6cd5\u548c\u5c5e\u6027"),Object(a.b)("p",null,"\uff086\uff09\u3001\u7236\u7c7b\u65b9\u6cd5\u53ef\u4ee5\u91cd\u5199"),Object(a.b)("h3",{id:"121\u3001\u58f0\u660e\u521b\u5efa\u5bf9\u8c61"},"12.1\u3001\u58f0\u660e\u521b\u5efa\u5bf9\u8c61"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"/****************ES5\u5b9a\u4e49\u7c7b******************/\n/*\nfunction Phone(brand,price){\n    this.brand=brand\n    this.price=price\n}\nPhone.prototype.call=function(){\n    console.log(\"\u6253\u7535\u8bdd\")\n}\nlet myPhone=new Phone('\u534e\u4e3a',666666);\n*/\n\n/****************ES6\u5b9a\u4e49\u7c7b******************/\nclass Phone{\n    //\u6784\u9020\u65b9\u6cd5\uff08\u56fa\u5b9a\u7684\u540d\u5b57\u4e0d\u80fd\u4fee\u6539\u8be5\uff09\u5f53\u901a\u8fc7new\u5b9e\u4f8b\u5316\u5bf9\u8c61\u65f6\u4f1a\u81ea\u52a8\u6267\u884c\n    constructor(brand,price){\n        this.brand=brand\n        this.price=price\n    }\n    //\u65b9\u6cd5\n    //\u65b9\u6cd5\u5fc5\u987b\u4f7f\u7528\u8be5\u8bed\u6cd5\uff0c\u4e0d\u80fd\u4f7f\u7528ES5\u7684\u8bed\u6cd5\n    call(){\n        console.log(\"\u6253\u7535\u8bdd\");\n    }\n}\nlet myPhone=new Phone('\u534e\u4e3a',666666);\n")),Object(a.b)("h3",{id:"122\u3001\u9759\u6001\u6210\u5458static"},"12.2\u3001\u9759\u6001\u6210\u5458",Object(a.b)("inlineCode",{parentName:"h3"},"static")),Object(a.b)(b,{color:"red",mdxType:"Highlight"},"\u6ce8\u610f: ")," \u5728\u7c7b\u4e2d\u901a\u8fc7`static`\u5173\u952e\u5b57\u58f0\u660e\u7684\u5bf9\u8c61\u6216\u5c5e\u6027\uff0c\u5373\u4e3a\u9759\u6001\u6210\u5458\uff0c\u662f\u5c5e\u4e8e\u7c7b\u7684\u4e0d\u5c5e\u4e8e\u5b9e\u4f8b\u5316\u7684\u5bf9\u8c61\uff0c\u56e0\u6b64\u8be5\u7c7b\u7684\u5b9e\u4f8b\u5316\u5bf9\u8c61\u4e0d\u80fd\u8bbf\u95ee\u8be5\u7c7b\u7684\u9759\u6001\u6210\u5458;",Object(a.b)("br",null),Object(a.b)(b,{color:"#1877F2",mdxType:"Highlight"},"\u5b9e\u4f8b\u8bbf\u95ee\u9759\u6001\u5c5e\u6027\u8f93\u51faundefined "),"-",Object(a.b)(b,{color:"#1877F2",mdxType:"Highlight"},"\u8bbf\u95ee\u9759\u6001\u65b9\u6cd5\u8f93\u51fa TypeError "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'class Phone{\n    //\u6784\u9020\u65b9\u6cd5\uff08\u56fa\u5b9a\u7684\u540d\u5b57\u4e0d\u80fd\u4fee\u6539\u8be5\uff09\u5f53\u901a\u8fc7new\u5b9e\u4f8b\u5316\u5bf9\u8c61\u65f6\u4f1a\u81ea\u52a8\u6267\u884c\n    static name="huawei"\n    constructor(brand,price){\n        this.brand=brand\n        this.price=price\n    }\n    //\u65b9\u6cd5\n    //\u65b9\u6cd5\u5fc5\u987b\u4f7f\u7528\u8be5\u8bed\u6cd5\uff0c\u4e0d\u80fd\u4f7f\u7528ES5\u7684\u8bed\u6cd5\n    static call(){\n        console.log("\u6253\u7535\u8bdd");\n    }\n}\nlet myPhone=new Phone(\'\u534e\u4e3a\',666666);\nmyPhone.name                   =>undefined\nmyPhone.call()                 => TypeError: myPhone.call is not a function at <anonymous>:15:9\n')),Object(a.b)("h3",{id:"123\u3001\u5bf9\u8c61\u7ee7\u627f"},"12.3\u3001\u5bf9\u8c61\u7ee7\u627f"),Object(a.b)("p",null,"\u5b50\u7c7b\u7ee7\u627f\u7236\u7c7b\u540e\uff0c\u5b50\u7c7b\u5c06\u62e5\u6709\u7236\u7c7b\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u540c\u65f6\u5b50\u7c7b\u53ef\u4ee5\u5bf9\u7236\u7c7b\u7684\u65b9\u6cd5\u8fdb\u884c\u91cd\u5199"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"class Phone{\n    constructor(brand,price){\n        this.brand=brand\n        this.price=price\n    }\n    call(){\n        console.log('\u6253\u7535\u8bdd')\n    }\n    playGame(){\n         console.log('\u73a9\u5355\u673a\u6e38\u620f')\n    }\n} \n\nclass SmartPhone extends Phone{\n    constructor(brand,price,color){\n        super(brand,price)//\u8c03\u7528\u7236\u7c7b\u591f\u7740\u51fd\u6570\n        this.color=color\n    }\n    photo(){\n         console.log('\u62cd\u7167')\n    }\n    //\u91cd\u5199\u7236\u7c7b\u7684playGame\u65b9\u6cd5\n    playGame(){\n         console.log('\u73a9\u7f51\u7edc\u6e38\u620f')\n    }\n}\n\nlet mySmartPhone=new SmartPhone('\u534e\u4e3a',666666,\"red\")\nmySmartPhone.photo()//\u8c03\u7528\u81ea\u5df1\u7684\u6253\u7535\u8bdd\u65b9\u6cd5\nmySmartPhone.call()//\u8c03\u7528\u7236\u7c7b\u7684\u6253\u7535\u8bdd\u65b9\u6cd5\nmySmartPhone.playGame()//\u8c03\u7528\u5b50\u7c7b\u91cd\u5199\u7236\u7c7b\u7684\u65b9\u6cd5\n")),Object(a.b)("h3",{id:"124\u3001get\u548cset\u65b9\u6cd5"},"12.4\u3001get\u548cset\u65b9\u6cd5"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"class Phone{\n    get price(){\n        return \"1000\"\n    }\n\n    set price(newPrice){\n        \n    }\n}\nlet s=new Phone();\ns.price //\u4f1a\u89e6\u53d1get price \u65b9\u6cd5\nconsole.log(s.price)    => 1000\ns.price='free' //\u4f1a\u89e6\u53d1set price \u65b9\u6cd5\n")),Object(a.b)("h3",{id:"125\u3001\u5bf9\u8c61\u65b9\u6cd5\u6269\u5c55"},"12.5\u3001\u5bf9\u8c61\u65b9\u6cd5\u6269\u5c55"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"/*******\u5224\u65ad\u4e24\u4e2a\u503c\u5b8c\u5168\u76f8\u7b49***************/\nobject.is(18,18)     =\u300b\u8fd4\u56de true \u548c false \u76f8\u5f53\u4e8e===\n\n/*******\u5bf9\u8c61\u5408\u5e76***************/\nconst obj1={\n    n1:1,\n    n2:2\n}\nconst obj2={\n    n2:3,\n    n3:4,\n    n4:5\n}\nobject.assign(obj1,obj2)//\u5c06obj1\u548cobj2\u8fdb\u884c\u5408\u5e76\u4e14\u6709\u76f8\u540c\u7684\u65f6\u540e\u9762\u7684\u8986\u76d6\u524d\u9762\u7684\n\n")),Object(a.b)("h2",{id:"13\u3001\u6a21\u5757\u5316modules"},"13\u3001\u6a21\u5757\u5316",Object(a.b)("inlineCode",{parentName:"h2"},"modules")),Object(a.b)("p",null,"\u6a21\u5757\u5316\u662f\u6307\u5c06\u4e00\u4e2a\u5927\u7684\u7a0b\u5e8f\u6587\u4ef6\uff0c\u62c6\u5206\u6210\u8bb8\u591a\u5c0f\u7684\u6587\u4ef6\uff0c\u7136\u540e\u5c06\u5c0f\u6587\u4ef6\u7ec4\u5408\u8d77\u6765\uff0c\u6a21\u5757\u5316\u53ef\u4ee5\u6709\u9632\u6b62\u547d\u540d\u51b2\u7a81\uff0c\u4ee3\u7801\u590d\u7528\uff0c\u9ad8\u7ef4\u62a4\u6027\u7b49\u7279\u70b9"),Object(a.b)("h3",{id:"131\u3001es6\u4e4b\u524d\u7684\u6a21\u5757\u5316\u89c4\u8303"},"13.1\u3001ES6\u4e4b\u524d\u7684\u6a21\u5757\u5316\u89c4\u8303"),Object(a.b)("p",null,"commonJS \u6a21\u5757\u5316\u89c4\u8303 => NodeJS\u3001Browserify"),Object(a.b)("p",null,"AMD      \u6a21\u5757\u5316\u89c4\u8303 => requireJS"),Object(a.b)("p",null,"CMD      \u6a21\u5757\u5316\u89c4\u8303 => seaJS"),Object(a.b)("h3",{id:"132\u3001es6\u6a21\u5757\u5316\u89c4\u8303\uff08es6-modules\uff09"},"13.2\u3001ES6\u6a21\u5757\u5316\u89c4\u8303\uff08ES6 modules\uff09"),Object(a.b)("p",null,"\u6a21\u5757\u5316\u6838\u5fc3\u5c31\u662f\u5bfc\u5165",Object(a.b)("inlineCode",{parentName:"p"},"import"),"\u548c\u5bfc\u51fa",Object(a.b)("inlineCode",{parentName:"p"},"export")),Object(a.b)("p",null,"\uff081\uff09\u3001\u76f4\u63a5\u5bfc\u51fa"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'/*************a.js**************/ \nexport let name="\u5f20\u4e09"\n')),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"/*************b.js**************/ \nimport {name} from './a.js' \n")),Object(a.b)("p",null,"\uff082\uff09\u3001\u96c6\u4e2d\u5bfc\u51fa"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'/*************a.js**************/ \nlet name="\u5f20\u4e09"\nlet age=30\n\nexport {name,age}\n')),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"/*************b.js**************/ \nimport {name,age} from './a.js' \n")),Object(a.b)("p",null,"\uff083\uff09\u3001\u9ed8\u8ba4\u5bfc\u51fa"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"/*************a.js**************/ \nexport default function(){\n    console.log('\u9ed8\u8ba4\u5bfc\u51fa')\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"/*************b.js**************/ \nimport myfn from './a.js'  //\u5982\u679c\u662f\u9ed8\u8ba4\u5bfc\u51fa\uff0c\u5bfc\u5165\u65f6\u53ef\u4ee5\u81ea\u5b9a\u4e49\u540d\u79f0\u4e14\u4e0d\u7528\u5927\u62ec\u53f7\n")),Object(a.b)("p",null,"\uff084\uff09\u3001\u5168\u90e8\u9ed8\u8ba4\u5bfc\u5165"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'/*************a.js**************/ \nlet name="\u5f20\u4e09"\nlet age=30\n\nexport {name,age}\n')),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import * as a from './a.js' //\u8fd9\u6837\u5bfc\u5165\u53ef\u4ee5\u901a\u8fc7 a\u5373\u5bfc\u51fa\u7684\u540d\u79f0\u8fdb\u884c\u53d6\u503c\n\na.name\na.age\n")))}i.isMDXComponent=!0}}]);