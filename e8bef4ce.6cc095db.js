(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{157:function(e,n,c){"use strict";c.r(n),c.d(n,"frontMatter",(function(){return a})),c.d(n,"metadata",(function(){return p})),c.d(n,"toc",(function(){return r})),c.d(n,"Highlight",(function(){return l})),c.d(n,"default",(function(){return i}));var t=c(3),b=(c(0),c(171));const a={id:"webpack-config-base",title:"\u57fa\u672c\u4f7f\u7528",slug:"./webpack-config-base.html",keywords:["webpack\u57fa\u672c\u914d\u7f6e"],description:"webpack-config\u57fa\u672c\u914d\u7f6e"},p={unversionedId:"notes/notes_webpack/webpack-config-base",id:"notes/notes_webpack/webpack-config-base",isDocsHomePage:!1,title:"\u57fa\u672c\u4f7f\u7528",description:"webpack-config\u57fa\u672c\u914d\u7f6e",source:"@site/docs\\notes\\notes_webpack\\01-webpack-config-base.md",slug:"/notes/notes_webpack/webpack-config-base.html",permalink:"/docs/notes/notes_webpack/webpack-config-base.html",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/notes/notes_webpack/01-webpack-config-base.md",version:"current",sidebar:"notes",previous:{title:"Notes\u7b80\u4ecb",permalink:"/docs/notes/tutorial-notes"},next:{title:"\u901a\u7528\u914d\u7f6e",permalink:"/docs/notes/notes_webpack/webpack-config-common.html"}},r=[{value:"1\u3001\u9884\u5907",id:"1\u3001\u9884\u5907",children:[{value:"1.1\u3001\u73af\u5883\u53c2\u6570",id:"11\u3001\u73af\u5883\u53c2\u6570",children:[]},{value:"1.2\u3001\u9884\u5907\u6280\u80fd",id:"12\u3001\u9884\u5907\u6280\u80fd",children:[]}]},{value:"2\u3001WebPack\u4e94\u5927\u6838\u5fc3\u6982\u5ff5",id:"2\u3001webpack\u4e94\u5927\u6838\u5fc3\u6982\u5ff5",children:[]},{value:"3\u3001\u8d77\u6b65",id:"3\u3001\u8d77\u6b65",children:[{value:"3.1\u3001\u5b89\u88c5",id:"31\u3001\u5b89\u88c5",children:[]},{value:"3.2\u3001\u521b\u5efa\u76ee\u5f55\u7ed3\u6784",id:"32\u3001\u521b\u5efa\u76ee\u5f55\u7ed3\u6784",children:[]},{value:"3.3\u3001\u521b\u5efa\u4e00\u4e2abundle\uff08\u6253\u5305\uff09",id:"33\u3001\u521b\u5efa\u4e00\u4e2abundle\uff08\u6253\u5305\uff09",children:[]}]},{value:"4\u3001webpack\u914d\u7f6e\u6587\u4ef6",id:"4\u3001webpack\u914d\u7f6e\u6587\u4ef6",children:[{value:"4.1\u3001\u914d\u7f6e\u5165\u53e3\u8f93\u51fa\u548c\u6253\u5305\u6a21\u5f0f",id:"41\u3001\u914d\u7f6e\u5165\u53e3\u8f93\u51fa\u548c\u6253\u5305\u6a21\u5f0f",children:[]},{value:"4.2\u3001\u6839\u636e\u914d\u7f6e\u6587\u4ef6\u6253\u5305",id:"42\u3001\u6839\u636e\u914d\u7f6e\u6587\u4ef6\u6253\u5305",children:[]}]},{value:"5\u3001\u914d\u7f6enpm scripts\u811a\u672c\u6253\u5305",id:"5\u3001\u914d\u7f6enpm-scripts\u811a\u672c\u6253\u5305",children:[]}],l=({children:e,color:n})=>Object(b.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem",margin:"0.2rem"}},e),o={toc:r,Highlight:l};function i({components:e,...n}){return Object(b.b)("wrapper",Object(t.a)({},o,n,{components:e,mdxType:"MDXLayout"}),Object(b.b)("p",null,"webpack \u662f\u4e00\u4e2a\u7528\u4e8e\u73b0\u4ee3 JavaScript \u5e94\u7528\u7a0b\u5e8f\u7684",Object(b.b)("strong",{parentName:"p"},"\u9759\u6001\u6a21\u5757\u6253\u5305\u5de5\u5177"),"\u8ba9\u6211\u4eec\u53ef\u4ee5\u6a21\u5757\u5316\u5f00\u53d1\uff0c\u5e76\u5e2e\u6211\u4e48\u5904\u7406\u6a21\u5757\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb;"),Object(b.b)("h2",{id:"1\u3001\u9884\u5907"},"1\u3001\u9884\u5907"),Object(b.b)("h3",{id:"11\u3001\u73af\u5883\u53c2\u6570"},"1.1\u3001\u73af\u5883\u53c2\u6570"),Object(b.b)("p",null,"\uff081\uff09\u3001Nodejs\u7248\u672c10\u4ee5\u4e0a(webpack\u4f9d\u8d56nodejs\uff0c\u5b89\u88c5webpack\u4e4b\u524d\u5148\u5b89\u88c5nodejs\uff1bwebpack\u76f8\u5f53\u4e8enodejs\u7684\u7b2c\u4e09\u65b9\u6a21\u5757\uff0c\u4e5f\u9700\u8981\u901a\u8fc7nodejs\u7684npm\u5b89\u88c5)"),Object(b.b)("p",null,"\uff082\uff09\u3001Webpack\u7248\u672c4.26\u4ee5\u4e0a "),Object(b.b)("h3",{id:"12\u3001\u9884\u5907\u6280\u80fd"},"1.2\u3001\u9884\u5907\u6280\u80fd"),Object(b.b)("p",null,"\uff081\uff09\u3001\u57fa\u672c\u7684Nodejs\u77e5\u8bc6\n\uff082\uff09\u3001\u57fa\u672c\u7684npm\u6307\u4ee4\n\uff083\uff09\u3001\u719f\u6089ES6\u8bed\u6cd5"),Object(b.b)("h2",{id:"2\u3001webpack\u4e94\u5927\u6838\u5fc3\u6982\u5ff5"},"2\u3001WebPack\u4e94\u5927\u6838\u5fc3\u6982\u5ff5"),Object(b.b)(l,{color:"#1877F2",mdxType:"Highlight"},"\u5165\u53e3(entry) "),"\u6307\u793awebpack\u4ee5\u90a3\u4e2a\u6587\u4ef6\u4e3a\u5165\u53e3\u6587\u4ef6\u5f00\u59cb\u6253\u5305",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)(l,{color:"#1877F2",mdxType:"Highlight"},"\u8f93\u51fa(output)"),"\u6307\u793awebpack\u6253\u5305\u540e\u7684\u8d44\u6e90bundles\u8f93\u51fa\u4f4d\u7f6e\u53ca\u540d\u79f0",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)(l,{color:"#1877F2",mdxType:"Highlight"},"loader"),"\u4f7fwebpack\u80fd\u591f\u5904\u7406\u975ejs\u6587\u4ef6\uff08webpack \u53ea\u80fd\u7406\u89e3 JavaScript \u548c JSON \u6587\u4ef6\u6240\u4ee5\u9700\u8981\u501f\u52a9loader\uff09",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)(l,{color:"#1877F2",mdxType:"Highlight"},"\u63d2\u4ef6(plugin)"),"\u63d2\u4ef6\u53ef\u4ee5\u4f7fwebpack\u6267\u884c\u8303\u56f4\u66f4\u5e7f\u7684\u4efb\u52a1\uff0c\u6253\u5305\u4f18\u5316\u538b\u7f29\u7b49",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)(l,{color:"#1877F2",mdxType:"Highlight"},"\u6a21\u5f0f(mode)"),"\u901a\u8fc7\u9009\u62e9 development, production \u6216 none \u4e4b\u4e2d\u7684\u4e00\u4e2a\uff0c\u6765\u8bbe\u7f6e mode \u53c2\u6570\uff0c\u4f60\u53ef\u4ee5\u542f\u7528 webpack \u5185\u7f6e\u5728\u76f8\u5e94\u73af\u5883\u4e0b\u7684\u4f18\u5316\u3002\u5176\u9ed8\u8ba4\u503c\u4e3a production\u3002",Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u5728 webpack \u51fa\u73b0\u4e4b\u524d\uff0c\u524d\u7aef\u5f00\u53d1\u4eba\u5458\u4f1a\u4f7f\u7528 grunt \u548c gulp \u7b49\u5de5\u5177\u6765\u5904\u7406\u8d44\u6e90\uff0c\u5e76\u5c06\u5b83\u4eec\u4ece /src \u6587\u4ef6\u5939\u79fb>\u52a8\u5230 /dist \u6216 /build \u76ee\u5f55\u4e2d,webpack \u53ef\u4ee5\u7528\u6765\u6784\u5efa web \u7ad9\u70b9\u6216 web \u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u6240\u6709\u975e JavaScript \u5185\u5bb9\u3002")),Object(b.b)("h2",{id:"3\u3001\u8d77\u6b65"},"3\u3001\u8d77\u6b65"),Object(b.b)("h3",{id:"31\u3001\u5b89\u88c5"},"3.1\u3001\u5b89\u88c5"),Object(b.b)("p",null,"\u9996\u5148\u6211\u4eec\u521b\u5efa\u9879\u76ee\u76ee\u5f55\uff0c\u521d\u59cb\u5316 npm\uff0c\u7136\u540e \u5728\u672c\u5730\u5b89\u88c5 webpack\uff0c\u63a5\u7740\u5b89\u88c5 webpack-cli\uff08\u6b64\u5de5\u5177\u7528\u4e8e\u5728\u547d\u4ee4\u884c\u4e2d\u8fd0\u884c webpack\uff09"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u672c\u5730\u5b89\u88c5")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-bash"},"# \u521d\u59cb\u5316npm\u5305\u63cf\u8ff0\u6587\u4ef6\nnpm init -y\n\n#\u5728\u672c\u5730\u5b89\u88c5 webpack \u548c webpack-cli \u5e76\u5b89\u88c5\u4e3a\u5f00\u53d1\u4f9d\u8d56\nnpm install webpack webpack-cli --save-dev \n")),Object(b.b)("blockquote",null,Object(b.b)(l,{color:"red",mdxType:"Highlight"},"\u6ce8\u610f"),"\u5982\u679c\u53ea\u5728\u672c\u5730\u5b89\u88c5\u4e86webpack webpack-cli \u90a3\u4e48\u8fd0\u884ccli\u547d\u4ee4\u65f6\u8981\u7528npx\u5373",Object(b.b)(l,{color:"#000",mdxType:"Highlight"},"npx webpack ")," \u60f3\u8981\u89e3\u51b3\u7684\u4e3b\u8981\u95ee\u9898\u5c31\u662f\u8c03\u7528\u9879\u76ee\u5185\u90e8\u5b89\u88c5\u7684\u6a21\u5757\u3002",Object(b.b)("br",null),"\u4e0d\u63a8\u8350 \u5168\u5c40\u5b89\u88c5 webpack\u3002\u8fd9\u4f1a\u5c06\u4f60\u9879\u76ee\u4e2d\u7684 webpack \u9501\u5b9a\u5230\u6307\u5b9a\u7248\u672c\uff0c\u5e76\u4e14\u5728\u4f7f\u7528\u4e0d\u540c\u7684 webpack \u7248\u672c\u7684\u9879\u76ee\u4e2d\uff0c \u53ef\u80fd\u4f1a\u5bfc\u81f4\u6784\u5efa\u5931\u8d25\u3002"),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u5168\u5c40\u5b89\u88c5")," ",Object(b.b)(l,{color:"#FFB100",mdxType:"Highlight"},"\u4e0d\u63a8\u8350")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-bash"},"#\u5168\u5c40\u5b89\u88c5 webpack \u548c webpack-cli\nnpm install webpack webpack-cli -g \n")),Object(b.b)("h3",{id:"32\u3001\u521b\u5efa\u76ee\u5f55\u7ed3\u6784"},"3.2\u3001\u521b\u5efa\u76ee\u5f55\u7ed3\u6784"),Object(b.b)("p",null,"\uff081\uff09\u3001\u521d\u59cb\u5316\u4e4b\u540e\u5728\u9879\u76ee\u6587\u4ef6\u5939\u4e0b\u521b\u5efa\u5982\u4e0b\u76ee\u5f55\u7ed3\u6784"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-diff"},"\u9879\u76ee\u6587\u4ef6\u5939\n  |- package.json\n+ |- index.html\n+ |- /dist\n+ |- /src\n+   |- index.js\n")),Object(b.b)("h3",{id:"33\u3001\u521b\u5efa\u4e00\u4e2abundle\uff08\u6253\u5305\uff09"},"3.3\u3001\u521b\u5efa\u4e00\u4e2abundle\uff08\u6253\u5305\uff09"),Object(b.b)("p",null,"(1)\u3001\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6253\u5f00\u547d\u4ee4\u884c\u5de5\u5177\u901a\u8fc7webpack\u547d\u4ee4\u6253\u5305"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"\u2460 \u9ed8\u8ba4\u6253\u5305"),"(\u4f1a\u5c06\u6211\u4eec\u7684\u811a\u672c src/index.js \u4f5c\u4e3a \u5165\u53e3\u8d77\u70b9\uff0c\u4e5f\u4f1a\u751f\u6210 dist/main.js \u4f5c\u4e3a \u8f93\u51fa)"),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",{parentName:"pre",className:"language-bash"},"#\u5168\u5c40\u5b89\u88c5\u4e86webpack webpack-cli\u76f4\u63a5\u7528\u6b64\u547d\u4ee4\nwebpack\n\n#\u672c\u5730\u5b89\u88c5webpack webpack-cli\u9700\u8981\u901a\u8fc7npx\nnpx webpack\n"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"\u2461 \u6307\u5b9a\u5165\u53e3\u8f93\u51fa\u548c\u6a21\u5f0f\u6253\u5305"),"(\u5c06\u6307\u5b9a\u6587\u4ef6\u901a\u8fc7\u6307\u5b9a\u6a21\u5f0f\u6253\u5305\u8f93\u51fa\u5230\u6307\u5b9a\u6587\u4ef6\u5939)"),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",{parentName:"pre",className:"language-bash"},"# \u6ce8\u610f\uff1a\u5982\u679c\u65f6\u662f\u672c\u5730\u5b89\u88c5webpack webpack-cli\u9700\u8981\u901a\u8fc7npx webpack\n\n# \u5f00\u53d1\u73af\u5883\nwebpack ./src/index.js -o ./dist/main.js --mode=development\n# \u751f\u4ea7\u73af\u5883\nwebpack ./src/index.js -o ./dist/main.js --mode=production\n")))),Object(b.b)("p",null,"(2)\u3001\u6700\u540e\u5728dist\u6587\u4ef6\u5939\u4e0b\u4f1a\u751f\u6210\u4e00\u4e2amain.js(\u8be5\u6587\u4ef6\u5305\u542b\u4e86index.js\u4e2d\u6240\u6709\u6a21\u5757\u4f9d\u8d56\u5173\u7cfb)"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u5728 webpack \u51fa\u73b0\u4e4b\u524d\uff0c\u524d\u7aef\u5f00\u53d1\u4eba\u5458\u4f1a\u4f7f\u7528 ",Object(b.b)("strong",{parentName:"p"},"grunt")," \u548c ",Object(b.b)("strong",{parentName:"p"},"gulp")," \u7b49\u5de5\u5177\u6765\u5904\u7406\u8d44\u6e90\uff0c\u5e76\u5c06\u5b83\u4eec\u4ece /src \u6587\u4ef6\u5939\u79fb\u52a8\u5230 /dist \u6216 /build \u76ee\u5f55\u4e2d\u3002")),Object(b.b)("p",null,"(3)\u3001\u518d\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684index.html\u6587\u4ef6\u4e2d\u5f15\u5165main.js\u7136\u540e\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u8be5html\u6587\u4ef6"),Object(b.b)("h2",{id:"4\u3001webpack\u914d\u7f6e\u6587\u4ef6"},"4\u3001webpack\u914d\u7f6e\u6587\u4ef6"),Object(b.b)("p",null,"\uff081\uff09\u3001\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u521b\u5efa webpack.config.js\u6587\u4ef6\u5373webpack\u7684\u914d\u7f6e\u6587\u4ef6\uff08\u8be5\u914d\u7f6e\u6587\u4ef6\u4f5c\u7528\uff1a\u6307\u793awebpack\u505a\u4ec0\u4e48\uff1b\u5f53\u8fd0\u884cwebpack \u7684\u6307\u4ee4\u65f6\u5c31\u4f1a\u52a0\u8f7d\u91cc\u9762\u7684\u914d\u7f6e\uff09"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-diff"},"\u9879\u76ee\u6587\u4ef6\u5939\n  |- package.json\n  |- index.html\n  |- /dist\n  |- /src\n    |- index.js\n+ |- webpack.config.js\n")),Object(b.b)("p",null,"\uff082\uff09\u3001webpack\u6784\u5efa\u5de5\u5177\u662f\u57fa\u4e8enodejs\u5e73\u53f0\u6240\u4ee5\u91c7\u7528\u7684\u662fnodejs\u7684commonJS \u6a21\u5757\u5316\u89c4\u8303\uff0cwebpack.config.js\u8981\u4f7f\u7528commonJS\u89c4\u8303"),Object(b.b)("p",null,"\uff083\uff09\u3001\u9879\u76ee\u4e2d\u6e90\u4ee3\u7801\u91c7\u7528\u7684\u662fjs\u81ea\u5df1\u7684ES6 modules\u6a21\u5757\u5316\u89c4\u8303\u6ce8\u610f\u533a\u5206"),Object(b.b)("h3",{id:"41\u3001\u914d\u7f6e\u5165\u53e3\u8f93\u51fa\u548c\u6253\u5305\u6a21\u5f0f"},"4.1\u3001\u914d\u7f6e\u5165\u53e3\u8f93\u51fa\u548c\u6253\u5305\u6a21\u5f0f"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-js"},"/******webpack.config.js\u914d\u7f6e\u6587\u4ef6*******/\nconst path = require('path');//\u5f15\u5165nodejs\u7684\u8def\u5f84\u5904\u7406\u7cfb\u7edf\u6a21\u5757\nmodule.exports={\n   //\u6253\u5305\u6a21\u5f0f\n    mode: \"production\", // \"production\" | \"development\" | \"none\"\n    //\u5165\u53e3\u8d77\u70b9\n    entry: './src/index.js',\n    //\u8f93\u51fa\u4f4d\u7f6e\u548c\u540d\u79f0\n    output: {\n        //\u8f93\u51fa\u6587\u4ef6\u540d\n        filename: 'bundle.js',\n        //\u8f93\u51fa\u4f4d\u7f6e\n        path: path.resolve(__dirname, 'dist'),\n  },\n}\n")),Object(b.b)("h3",{id:"42\u3001\u6839\u636e\u914d\u7f6e\u6587\u4ef6\u6253\u5305"},"4.2\u3001\u6839\u636e\u914d\u7f6e\u6587\u4ef6\u6253\u5305"),Object(b.b)("p",null,"\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u4e86\u5165\u53e3\u548c\u8f93\u51fa\u540e\u7684\u6253\u5305\u547d\u4ee4\u540e \u76f4\u63a5\u8f93\u5165webpack \u6216 npx webpack\u5c31\u884c\uff08\u4f1a\u81ea\u52a8\u627e\u5230\u5f53\u524d\u9879\u76ee\u4e0b\u7684webpack.config.js\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u7684\u53c2\u6570\u8fdb\u884c\u6253\u5305\uff09"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-bash"},"#\u5168\u5c40\u5b89\u88c5\u4e86webpack webpack-cli\u76f4\u63a5\u7528\u6b64\u547d\u4ee4\nwebpack\n  \n#\u672c\u5730\u5b89\u88c5webpack webpack-cli\u9700\u8981\u901a\u8fc7npx\nnpx webpack\n")),Object(b.b)("h2",{id:"5\u3001\u914d\u7f6enpm-scripts\u811a\u672c\u6253\u5305"},"5\u3001\u914d\u7f6enpm scripts\u811a\u672c\u6253\u5305"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\uff081\uff09\u3001\u914d\u7f6e\u6253\u5305\u811a\u672c"),"\n\u5728\u9879\u76eepackage.json\u6587\u4ef6\u4e2d\u914d\u7f6e\u5982\u4e0b\u811a\u672c\u6765\u6267\u884cwebpack\u7684\u6253\u5305\u547d\u4ee4"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-js"},'/*******package.json*****/\n//\u6253\u5f00package.json\u6587\u4ef6\u627e\u5230"script"\u5c5e\u6027\u5728\u8be5\u5c5e\u6027\u4e0b\u914d\u7f6e\n\n"script":{\n    "build":"webpack"\n}\n')),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\uff082\uff09\u3001\u6267\u884c\u6253\u5305\u811a\u672c"),"\nnpm run \u9879\u76ee\u6587\u4ef6\u5939\u4e0bpackage.json\u6587\u4ef6\u4e2d script\u4e0b\u914d\u7f6e\u7684\u811a\u672c\u6765\u6267\u884c\u547d\u4ee4"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),Object(b.b)("blockquote",null,Object(b.b)(l,{color:"red",mdxType:"Highlight"},"\u6ce8\u610f"),"npm run build \u547d\u4ee4\u53ef\u4ee5\u66ff\u4ee3\u6211\u4eec\u4e4b\u524d\u4f7f\u7528\u7684 npx \u547d\u4ee4\u3002\u4f7f\u7528 npm scripts\uff0c\u6211\u4eec\u53ef\u4ee5\u50cf\u4f7f\u7528 npx \u90a3\u6837\u901a\u8fc7\u6a21\u5757\u540d\u5f15\u7528\u672c\u5730\u5b89\u88c5\u7684 npm packages\u3002"))}i.isMDXComponent=!0},171:function(e,n,c){"use strict";c.d(n,"a",(function(){return s})),c.d(n,"b",(function(){return j}));var t=c(0),b=c.n(t);function a(e,n,c){return n in e?Object.defineProperty(e,n,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[n]=c,e}function p(e,n){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),c.push.apply(c,t)}return c}function r(e){for(var n=1;n<arguments.length;n++){var c=null!=arguments[n]?arguments[n]:{};n%2?p(Object(c),!0).forEach((function(n){a(e,n,c[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):p(Object(c)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(c,n))}))}return e}function l(e,n){if(null==e)return{};var c,t,b=function(e,n){if(null==e)return{};var c,t,b={},a=Object.keys(e);for(t=0;t<a.length;t++)c=a[t],n.indexOf(c)>=0||(b[c]=e[c]);return b}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)c=a[t],n.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(b[c]=e[c])}return b}var o=b.a.createContext({}),i=function(e){var n=b.a.useContext(o),c=n;return e&&(c="function"==typeof e?e(n):r(r({},n),e)),c},s=function(e){var n=i(e.components);return b.a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return b.a.createElement(b.a.Fragment,{},n)}},d=b.a.forwardRef((function(e,n){var c=e.components,t=e.mdxType,a=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),s=i(c),d=t,j=s["".concat(p,".").concat(d)]||s[d]||u[d]||a;return c?b.a.createElement(j,r(r({ref:n},o),{},{components:c})):b.a.createElement(j,r({ref:n},o))}));function j(e,n){var c=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=c.length,p=new Array(a);p[0]=d;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:t,p[1]=r;for(var o=2;o<a;o++)p[o]=c[o];return b.a.createElement.apply(null,p)}return b.a.createElement.apply(null,c)}d.displayName="MDXCreateElement"}}]);