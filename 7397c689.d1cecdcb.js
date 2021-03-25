(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{123:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return b})),t.d(n,"Highlight",(function(){return p})),t.d(n,"Tbc",(function(){return i})),t.d(n,"default",(function(){return s}));var c=t(3),a=t(7),r=(t(0),t(203)),o={id:"webpack-config-common",title:"\u901a\u7528\u914d\u7f6e",slug:"./webpack-config-common.html",keywords:["webpack\u901a\u7528\u914d\u7f6e"],description:"webpack-config\u901a\u7528\u73af\u5883\u914d\u7f6e"},l={unversionedId:"notes/notes_webpack/webpack-config-common",id:"notes/notes_webpack/webpack-config-common",isDocsHomePage:!1,title:"\u901a\u7528\u914d\u7f6e",description:"webpack-config\u901a\u7528\u73af\u5883\u914d\u7f6e",source:"@site/docs\\notes\\notes_webpack\\02-webpack-config-common.md",slug:"/notes/notes_webpack/webpack-config-common.html",permalink:"/docs/notes/notes_webpack/webpack-config-common.html",version:"current",sidebar:"notes",previous:{title:"\u57fa\u672c\u4f7f\u7528",permalink:"/docs/notes/notes_webpack/webpack-config-base.html"},next:{title:"\u5f00\u53d1\u73af\u5883\u914d\u7f6e",permalink:"/docs/notes/notes_webpack/webpack-config-dev.html"}},b=[{value:"1\u3001\u4e0d\u540c\u73af\u5883\u7684\u6253\u5305\u914d\u7f6e",id:"1\u3001\u4e0d\u540c\u73af\u5883\u7684\u6253\u5305\u914d\u7f6e",children:[{value:"1.1\u3001\u4e0d\u540c\u73af\u5883\u6253\u5305\u5dee\u5f02",id:"11\u3001\u4e0d\u540c\u73af\u5883\u6253\u5305\u5dee\u5f02",children:[]},{value:"1.2\u3001\u4e0d\u540c\u7684\u914d\u7f6e\u6587\u4ef6",id:"12\u3001\u4e0d\u540c\u7684\u914d\u7f6e\u6587\u4ef6",children:[]},{value:"1.3\u3001\u5408\u5e76\u914d\u7f6e\u6587\u4ef6",id:"13\u3001\u5408\u5e76\u914d\u7f6e\u6587\u4ef6",children:[]},{value:"1.4\u3001\u4fee\u6539 NPM Scripts\u811a\u672c",id:"14\u3001\u4fee\u6539-npm-scripts\u811a\u672c",children:[]}]},{value:"2\u3001\u6253\u5305html\u8d44\u6e90\u81ea\u52a8\u5f15\u5165\u5176\u4ed6\u8d44\u6e90",id:"2\u3001\u6253\u5305html\u8d44\u6e90\u81ea\u52a8\u5f15\u5165\u5176\u4ed6\u8d44\u6e90",children:[{value:"2.1\u3001\u5b89\u88c5HtmlWebpackPlugin\u63d2\u4ef6",id:"21\u3001\u5b89\u88c5htmlwebpackplugin\u63d2\u4ef6",children:[]},{value:"2.2\u3001\u914d\u7f6eHtmlWebpackPlugin\u63d2\u4ef6",id:"22\u3001\u914d\u7f6ehtmlwebpackplugin\u63d2\u4ef6",children:[]}]},{value:"3\u3001\u6253\u5305\u5b57\u4f53\u56fe\u6807",id:"3\u3001\u6253\u5305\u5b57\u4f53\u56fe\u6807",children:[{value:"3.1\u3001\u5b89\u88c5file-loader",id:"31\u3001\u5b89\u88c5file-loader",children:[]},{value:"3.2\u3001\u914d\u7f6e",id:"32\u3001\u914d\u7f6e",children:[]}]}],p=function(e){var n=e.children,t=e.color;return Object(r.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem",margin:"0.2rem"}},n)},i=function(e){var n=e.children,t=e.color;return Object(r.b)("span",{style:{color:t,fontWeight:700,borderRadius:"2px",padding:"0.2rem",margin:"0.2rem"}},n)},m={toc:b,Highlight:p,Tbc:i};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(c.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"1\u3001\u4e0d\u540c\u73af\u5883\u7684\u6253\u5305\u914d\u7f6e"},"1\u3001\u4e0d\u540c\u73af\u5883\u7684\u6253\u5305\u914d\u7f6e"),Object(r.b)("p",null,"\u5728\u4e0a\u6587\u201c\u57fa\u672c\u4f7f\u7528\u201d\u4e4b\u4e2d\u6211\u4eec\u521d\u6b65\u5b66\u4e60\u4e86WebPack\u914d\u7f6e\u6587\u4ef6",Object(r.b)(p,{color:"#39aecf",mdxType:"Highlight"},"webpack.config.js"),"\u7684\u6253\u5305\u6a21\u5f0f\u3001\u5165\u53e3\uff0c\u8f93\u51fa\u7b49\u914d\u7f6e\uff1b"),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\u901a\u5e38\u9879\u76ee\u4e2d\u662f\u8981\u533a\u5206",Object(r.b)(i,{color:"#e768ab",mdxType:"Tbc"},"development(\u5f00\u53d1\u73af\u5883) "),"\u548c",Object(r.b)(i,{color:"#e768ab",mdxType:"Tbc"}," production(\u751f\u4ea7\u73af\u5883)"),"\u7684\uff0c\u8fd9\u4e24\u4e2a\u73af\u5883\u4e0b\u7684\u6784\u5efa\u76ee\u6807\u5b58\u5728\u7740\u5de8\u5927\u5dee\u5f02\u3002\n\u7531\u4e8e\u8981\u9075\u5faa\u903b\u8f91\u5206\u79bb\uff0c\u5efa\u8bae\u4e3a\u6bcf\u4e2a\u73af\u5883\u7f16\u5199\u5f7c\u6b64\u72ec\u7acb\u7684 webpack \u914d\u7f6e\u6587\u4ef6"))),Object(r.b)("h3",{id:"11\u3001\u4e0d\u540c\u73af\u5883\u6253\u5305\u5dee\u5f02"},"1.1\u3001\u4e0d\u540c\u73af\u5883\u6253\u5305\u5dee\u5f02"),Object(r.b)("blockquote",null,Object(r.b)(p,{color:"#ff6a00",mdxType:"Highlight"},"\u5f00\u53d1\u73af\u5883"),"\u9700\u8981\uff1a\u5f3a\u5927\u7684 source map \u548c\u4e00\u4e2a\u6709\u7740 live reloading(\u5b9e\u65f6\u91cd\u65b0\u52a0\u8f7d) \u6216 hot module replacement(\u70ed\u6a21\u5757\u66ff\u6362) \u80fd\u529b\u7684 localhost server\u3002",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(p,{color:"#ff6a00",mdxType:"Highlight"},"\u751f\u4ea7\u73af\u5883"),"\u5173\u6ce8\u70b9\u5728\u4e8e\u538b\u7f29 bundle\u3001\u66f4\u8f7b\u91cf\u7684 source map\u3001\u8d44\u6e90\u4f18\u5316\u7b49\uff0c\u901a\u8fc7\u8fd9\u4e9b\u4f18\u5316\u65b9\u5f0f\u6539\u5584\u52a0\u8f7d\u65f6\u95f4\u3002"),Object(r.b)("h3",{id:"12\u3001\u4e0d\u540c\u7684\u914d\u7f6e\u6587\u4ef6"},"1.2\u3001\u4e0d\u540c\u7684\u914d\u7f6e\u6587\u4ef6"),Object(r.b)("p",null,"\u6211\u4eec\u5c06 \u751f\u4ea7\u73af\u5883 \u548c \u5f00\u53d1\u73af\u5883 \u505a\u4e86\u533a\u5206\uff0c\u4f46\u662f\u8fd8\u8981\u4fdd\u7559\u4e00\u4e2a",Object(r.b)(i,{color:"#e768ab",mdxType:"Tbc"}," common(\u901a\u7528\u914d\u7f6e)"),"\u6765\u9075\u5faa\u4e0d\u91cd\u590d\u539f\u5219\u3002\u6700\u540e\u5c06\u901a\u7528\u914d\u7f6e\u548c\u4efb\u610f\u73af\u5883\u914d\u7f6e\u5408\u5e76\u5373\u53ef\uff0c\u5373\u5c06\u5f00\u53d1\u73af\u5883\u548c\u751f\u4ea7\u73af\u5883\u4e0d\u540c\u7684\u6253\u5305\u9700\u6c42\u914d\u7f6e\u5728\u5404\u81ea\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u901a\u7528\u7684\u5c31\u914d\u7f6e\u5728common\u914d\u7f6e\u4e2d"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\uff081\uff09\u3001\u914d\u7f6e\u6587\u4ef6"),"(\u5220\u9664\u539f\u6765\u7684\uff1awebpack.config.js)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5f00\u53d1\u73af\u5883\u914d\u7f6e\u6587\u4ef6\uff1a",Object(r.b)(p,{color:"#e768ab",mdxType:"Highlight"},"webpack.dev.js"),"  "),Object(r.b)("li",{parentName:"ul"},"\u751f\u6210\u73af\u5883\u914d\u7f6e\u6587\u4ef6\uff1a",Object(r.b)(p,{color:"#e768ab",mdxType:"Highlight"},"webpack.prod.js")," "),Object(r.b)("li",{parentName:"ul"},"\u73af\u5883\u901a\u7528\u914d\u7f6e\u6587\u4ef6\uff1a",Object(r.b)(p,{color:"#e768ab",mdxType:"Highlight"},"webpack.common.js"))),Object(r.b)("h3",{id:"13\u3001\u5408\u5e76\u914d\u7f6e\u6587\u4ef6"},"1.3\u3001\u5408\u5e76\u914d\u7f6e\u6587\u4ef6"),Object(r.b)("p",null,"\u4e3a\u4e86\u5c06\u8fd9\u4e9b\u914d\u7f6e\u5408\u5e76\u5728\u4e00\u8d77\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u4e00\u4e2a\u540d\u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"webpack-merge"),' \u7684\u5de5\u5177\u3002\u6b64\u5de5\u5177\u4f1a\u5f15\u7528 "common" \u914d\u7f6e\uff0c\u56e0\u6b64\u6211\u4eec\u4e0d\u5fc5\u518d\u5728\u73af\u5883\u7279\u5b9a\u7684\u914d\u7f6e\u4e2d\u7f16\u5199\u91cd\u590d\u4ee3\u7801\u3002'),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\uff081\uff09\u3001\u5b89\u88c5webpack-merge")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev webpack-merge\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\uff082\uff09\u3001\u7f16\u5199\u4e0d\u540c\u73af\u5883\u914d\u7f6e\u6587\u4ef6")),Object(r.b)(p,{color:"#e768ab",mdxType:"Highlight"},"webpack.common.js")," \u5c06\u6253\u5305\u5165\u53e3\u548c\u8f93\u51fa\u914d\u7f6e\u5728\u901a\u7528\u914d\u7f6e\u4e2d\u518d\u901a\u8fc7merge\u5728\u5176\u4ed6\u73af\u5883\u4e2d\u5408\u5e76\u5373\u5171\u7528",Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"  const path = require('path');  \n  module.exports = {\n    entry: {\n      app: './src/index.js',\n    },\n    output: {\n      filename: '[name].bundle.js',\n      path: path.resolve(__dirname, 'dist'),\n      clean: true,\n    },\n  };\n  \n")),Object(r.b)(p,{color:"#e768ab",mdxType:"Highlight"},"webpack.dev.js"),"\u5177\u4f53\u914d\u7f6e\u5c06\u5728\u4e0b\u6587\u914d\u7f6e",Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"}," const { merge } = require('webpack-merge');\n const common = require('./webpack.common.js');\n\n module.exports = merge(common, {\n   mode: 'development',\n });\n")),Object(r.b)(p,{color:"#e768ab",mdxType:"Highlight"},"webpack.prod.js"),"\u5177\u4f53\u914d\u7f6e\u5c06\u5728\u4e0b\u4e0b\u6587\u914d\u7f6e",Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"}," const { merge } = require('webpack-merge');\n const common = require('./webpack.common.js');\n\n module.exports = merge(common, {\n   mode: 'production',\n });\n")),Object(r.b)("blockquote",null,Object(r.b)(p,{color:"red",mdxType:"Highlight"},"\u6ce8\u610f"),"\u4ee5\u4e0a\u914d\u7f6e\u5c31\u5171\u7528\u7684\u4e00\u6837\u7684\u5165\u53e3\u6587\u4ef6\u914d\u7f6e\u548c\u8f93\u51fa\u914d\u7f6e\uff0c\u5f53\u7136\u6211\u4eec\u53ef\u4ee5\u4e3a\u4e0d\u540c\u73af\u5883\u914d\u7f6e\u4e0d\u540c\u7684\u5165\u53e3\u548c\u51fa\u53e3\uff0c\u5373\u5c06common\u4e2d\u7684\u5165\u53e3\u8f93\u51fa\u79fb\u9664\u914d\u7f6e\u5230\u5404\u81ea\u7684\u73af\u5883\u914d\u7f6e\u6587\u4ef6\u4e2d\u5373\u53ef\uff0c\u5305\u62ec\u5176\u4ed6\u7684\u914d\u7f6e\u9879\u4e5f\u662f\u4e00\u6837\u7684\uff0c\u6839\u636e\u9879\u76ee\u9700\u6c42\u5b9a"),Object(r.b)("h3",{id:"14\u3001\u4fee\u6539-npm-scripts\u811a\u672c"},"1.4\u3001\u4fee\u6539 NPM Scripts\u811a\u672c"),Object(r.b)("p",null,"\uff081\uff09\u3001\u914d\u7f6e\u6253\u5305\u811a\u672c \u5728\u9879\u76eepackage.json\u6587\u4ef6\u4e2d\u914d\u7f6e\u5982\u4e0b\u811a\u672c\u6765\u6267\u884cwebpack\u7684\u6253\u5305\u547d\u4ee4"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'//\u6253\u5f00package.json\u6587\u4ef6\u627e\u5230"script"\u5c5e\u6027\u5728\u8be5\u5c5e\u6027\u4e0b\u914d\u7f6e\n\n"scripts": {\n  \n    "start": "webpack --config webpack.dev.js",\n\n    "build": "webpack --config webpack.prod.js"\n  },\n')),Object(r.b)("p",null,"\uff082\uff09\u3001\u6309\u7167\u5f00\u53d1\u73af\u5883\u6784\u5efa"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm run start\n")),Object(r.b)("p",null,"\uff083\uff09\u3001\u6309\u7167\u751f\u4ea7\u73af\u5883\u6784\u5efa"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),Object(r.b)("h2",{id:"2\u3001\u6253\u5305html\u8d44\u6e90\u81ea\u52a8\u5f15\u5165\u5176\u4ed6\u8d44\u6e90"},"2\u3001\u6253\u5305html\u8d44\u6e90\u81ea\u52a8\u5f15\u5165\u5176\u4ed6\u8d44\u6e90"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u901a\u8fc7HtmlWebpackPlugin\u63d2\u4ef6\u6253\u5305index.html\u5230dist\u76ee\u5f55")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u4e4b\u524d\u6211\u4eec\u662f\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u521b\u5efa\u7684index.html\u7684\u5f53\u901a\u8fc7webpack\u6253\u5305\u540e\u8fd8\u9700\u8981\u624b\u52a8\u5728index.html\u4e2d\u5f15\u5165dist\u6587\u4ef6\u5939\u4e0b\u7684bundle.js\u6587\u4ef6\uff0c\u800c\u4e14\u5f53\u6211\u4eec\u53d1\u5e03\u4ee3\u7801\u65f6\u6211\u4eec\u8981\u5e26\u4e0adist\u6587\u4ef6\u5939\u4e0b\u7684bundle.js\u6587\u4ef6\u5916\u8fd8\u8981\u5e26\u4e0a\u8fd9\u4e2aindex.html\u6587\u4ef6\uff0c\u975e\u5e38\u4e0d\u65b9\u4fbf")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u56e0\u6b64webpack\u63d0\u4f9b\u63d2\u4ef6\u5c06index.html\u6587\u4ef6\u6253\u5305\u5230dist\u6587\u4ef6\u5939\uff08\u5e76\u5c06\u6253\u5305\u540e\u7684bundle.js\u6587\u4ef6\u5f15\u5165\uff09")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u5373",Object(r.b)("inlineCode",{parentName:"p"},"HtmlWebpackPlugin"),"\u8be5\u63d2\u4ef6\u5c06\u4f1a\u9ed8\u8ba4\u5728dist\u6587\u4ef6\u5939\u4e0b\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684\u6ca1\u6709\u7ed3\u6784\u7684html\u6587\u4ef6\uff0c\u5f53\u7136\u6211\u4eec\u4e5f\u53ef\u4ee5\u6307\u5b9a\u6a21\u677f\u8fdb\u884c\u521b\u5efa")),Object(r.b)("h3",{id:"21\u3001\u5b89\u88c5htmlwebpackplugin\u63d2\u4ef6"},"2.1\u3001\u5b89\u88c5HtmlWebpackPlugin\u63d2\u4ef6"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"webpack\u7684loader\u4e3b\u8981\u662f\u7528\u4e8e\u8f6c\u6362\u9664js\u548cjson\u683c\u5f0f\u5916\u7684\u5176\u4ed6\u683c\u5f0f\u6587\u4ef6\u7684\u7ffb\u8bd1\u5668\nwebpack\u7684plugin\u662f\u63d2\u4ef6\u662f\u5bf9webpack\u7684\u6269\u5c55\u6bd4\u5982\u6253\u5305\u4f18\u5316\u3001\u6587\u4ef6\u538b\u7f29\u7b49\n\u63d2\u4ef6\u8981\u5148\u4e0b\u8f7d \u540e\u5f15\u7528 \u518d\u4f7f\u7528")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev html-webpack-plugin\n")),Object(r.b)("h3",{id:"22\u3001\u914d\u7f6ehtmlwebpackplugin\u63d2\u4ef6"},"2.2\u3001\u914d\u7f6eHtmlWebpackPlugin\u63d2\u4ef6"),Object(r.b)(p,{color:"#e768ab",mdxType:"Highlight"},"webpack.common.js"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const HtmlWebpackPlugin=require('html-webpack-plugin')\n\nmodule.exports={\n  plugins:[\n    //\u8be5\u63d2\u4ef6\u5728\u6253\u5305\u65f6\u9ed8\u8ba4\u521b\u5efa\u7a7a\u7684html\u6587\u4ef6\u5e76\u5f15\u5165\u6253\u5305\u8f93\u51fa\u7684\u6240\u6709\u8d44\u6e90\n    new HtmlWebpackPlugin({\n      //\u6307\u5b9a\u590d\u5236\u7684\u6a21\u677f\u521b\u5efahtml\u6587\u4ef6\u5e76\u5f15\u5165\u6253\u5305\u8f93\u51fa\u7684\u6240\u6709\u8d44\u6e90\n      template:\"./src/index.html\",\n      //\u538b\u7f29html\u53ef\u9009\n      minify:{\n        //\u79fb\u9664\u7a7a\u683c\n        collapseWhitespace:true,\n        //\u79fb\u9664\u6ce8\u91ca\n        removeComments:true\n\n      }\n    })\n  ]\n\n}\n")),Object(r.b)("h2",{id:"3\u3001\u6253\u5305\u5b57\u4f53\u56fe\u6807"},"3\u3001\u6253\u5305\u5b57\u4f53\u56fe\u6807"),Object(r.b)("h3",{id:"31\u3001\u5b89\u88c5file-loader"},"3.1\u3001\u5b89\u88c5file-loader"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev file-loader\n")),Object(r.b)("h3",{id:"32\u3001\u914d\u7f6e"},"3.2\u3001\u914d\u7f6e"),Object(r.b)(p,{color:"#e768ab",mdxType:"Highlight"},"webpack.common.js"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'module.exports={\n  module:{\n    rules:[\n      {\n        //\u6392\u9664css\u3001js\u3001html\u3001less\u6587\u4ef6\u540e\u7684\u5176\u4ed6\u6587\u4ef6\n        exclude:/\\.(css|js|html|less)$/,\n        loader:"file-loader",\n        options:{\n        //\u8d44\u6e90\u91cd\u547d\u540d\n        //[hash:10]\u53d6\u56fe\u7247\u7684hash\u7684\u524d10\u4f4d\n        //[ext]\u539f\u6587\u4ef6\u540e\u7f00\u540d\n        name:\'[hash:10].[ext]\',\n        //\u6307\u5b9a\u8f93\u51fa\u6587\u4ef6\u5939\n        outputPath:"media"\n        }\n      }\n    ]\n  }\n\n}\n')))}s.isMDXComponent=!0},203:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return d}));var c=t(0),a=t.n(c);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);n&&(c=c.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,c)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,c,a=function(e,n){if(null==e)return{};var t,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)t=r[c],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)t=r[c],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),i=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=i(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,c=e.mdxType,r=e.originalType,o=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),m=i(t),u=c,d=m["".concat(o,".").concat(u)]||m[u]||s[u]||r;return t?a.a.createElement(d,l(l({ref:n},p),{},{components:t})):a.a.createElement(d,l({ref:n},p))}));function d(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var b in n)hasOwnProperty.call(n,b)&&(l[b]=n[b]);l.originalType=e,l.mdxType="string"==typeof e?e:c,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);