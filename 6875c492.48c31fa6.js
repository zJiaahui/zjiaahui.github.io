(window.webpackJsonp=window.webpackJsonp||[]).push([[43,77,103],{115:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),n=t(209),m=t(220),c=t(205),o=(t(211),t(263));a.default=function(e){const{metadata:a,items:t,sidebar:r}=e,{allTagsPath:s,name:i,count:g}=a,d=Object(o.b)({id:"blogtagpage.title",message:"\u4e0b\u7684\u535a\u5ba2",description:"blog tag page title"}),p=Object(o.b)({id:"blogtagpage.title.alt",message:"",description:"blog tag page title in alternate order"}),b=Object(o.b)({id:"blogtagpage.description",message:"\u535a\u5ba2\u6807\u7b7e",description:"blog tag page description"});return l.a.createElement(n.a,{title:`${p} ${i} ${d}`,description:`${b} - "${i}"`,wrapperClassName:"blog-wrapper"},l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row blog-tags__page"},l.a.createElement("main",{className:"col col--12"},l.a.createElement("h1",null,i,"\uff1a ",g," ",l.a.createElement(o.a,{id:"blogtagpage.count.label",description:"blog page count label"},"\u7bc7")),l.a.createElement(c.a,{href:s},l.a.createElement(o.a,{id:"blogtagpage.seeall.label",description:"blog page see all label"},"\u67e5\u770b\u6240\u6709\u6807\u7b7e\uff08\u5206\u7c7b\uff09")),l.a.createElement("div",{className:"margin-vert--xl"},t.map((({content:e})=>l.a.createElement(m.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},l.a.createElement(e,null)))))))))}},220:function(e,a,t){"use strict";var r=t(0),l=t.n(r),n=t(203),m=t(202),c=t(24),o=t(205),s=t(214),i=t(207),g=t(60),d=t.n(g);const p=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){const{children:a,frontMatter:t,metadata:r,truncated:g,isBlogPostPage:b=!1}=e,{date:u,permalink:E,tags:h,readingTime:v}=r,{author:N,title:_,image:f,keywords:w}=t,k=t.author_url||t.authorURL,y=t.author_title||t.authorTitle,M=t.author_image_url||t.authorImageURL,$=Object(i.a)(f,{absolute:!0});return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,null,w&&w.length&&l.a.createElement("meta",{name:"keywords",content:w.join(",")}),f&&l.a.createElement("meta",{property:"og:image",content:$}),f&&l.a.createElement("meta",{name:"twitter:image",content:$}),f&&l.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${_}`})),l.a.createElement("article",{className:b?void 0:"margin-bottom--xl"},(()=>{const e=b?"h1":"h2",a=u.substring(0,10).split("-"),t=a[0],r=p[parseInt(a[1],10)-1],m=parseInt(a[2],10);return l.a.createElement("header",null,l.a.createElement(e,{className:Object(n.a)("margin-bottom--sm",d.a.blogPostTitle)},b?_:l.a.createElement(o.a,{to:E},_)),l.a.createElement("div",{className:"margin-vert--md"},l.a.createElement("time",{dateTime:u,className:d.a.blogPostDate},r," ",m,", ",t," ",v&&l.a.createElement(l.a.Fragment,null," \xb7 ",Math.ceil(v)," min read"))),l.a.createElement("div",{className:"avatar margin-vert--md"},M&&l.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:k,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("img",{src:M,alt:N})),l.a.createElement("div",{className:"avatar__intro"},N&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",{className:"avatar__name"},l.a.createElement("a",{href:k,target:"_blank",rel:"noreferrer noopener"},N)),l.a.createElement("small",{className:"avatar__subtitle"},y)))))})(),l.a.createElement("section",{className:"markdown"},l.a.createElement(m.a,{components:s.a},a)),(h.length>0||g)&&l.a.createElement("footer",{className:"row margin-vert--lg"},h.length>0&&l.a.createElement("div",{className:"col"},l.a.createElement("strong",null,"Tags:"),h.map((({label:e,permalink:a})=>l.a.createElement(o.a,{key:a,className:"margin-horiz--sm",to:a},e)))),g&&l.a.createElement("div",{className:"col text--right"},l.a.createElement(o.a,{to:r.permalink,"aria-label":`Read more about ${_}`},l.a.createElement("strong",null,"Read More"))))))}}}]);