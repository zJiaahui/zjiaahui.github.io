(window.webpackJsonp=window.webpackJsonp||[]).push([[103,77],{220:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(203),m=t(202),c=t(24),o=t(205),s=t(214),i=t(207),g=t(60),u=t.n(g);const E=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){const{children:a,frontMatter:t,metadata:r,truncated:g,isBlogPostPage:h=!1}=e,{date:d,permalink:b,tags:p,readingTime:v}=r,{author:_,title:N,image:k,keywords:w}=t,f=t.author_url||t.authorURL,y=t.author_title||t.authorTitle,J=t.author_image_url||t.authorImageURL,M=Object(i.a)(k,{absolute:!0});return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,w&&w.length&&n.a.createElement("meta",{name:"keywords",content:w.join(",")}),k&&n.a.createElement("meta",{property:"og:image",content:M}),k&&n.a.createElement("meta",{name:"twitter:image",content:M}),k&&n.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${N}`})),n.a.createElement("article",{className:h?void 0:"margin-bottom--xl"},(()=>{const e=h?"h1":"h2",a=d.substring(0,10).split("-"),t=a[0],r=E[parseInt(a[1],10)-1],m=parseInt(a[2],10);return n.a.createElement("header",null,n.a.createElement(e,{className:Object(l.a)("margin-bottom--sm",u.a.blogPostTitle)},h?N:n.a.createElement(o.a,{to:b},N)),n.a.createElement("div",{className:"margin-vert--md"},n.a.createElement("time",{dateTime:d,className:u.a.blogPostDate},r," ",m,", ",t," ",v&&n.a.createElement(n.a.Fragment,null," \xb7 ",Math.ceil(v)," min read"))),n.a.createElement("div",{className:"avatar margin-vert--md"},J&&n.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:f,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{src:J,alt:_})),n.a.createElement("div",{className:"avatar__intro"},_&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:f,target:"_blank",rel:"noreferrer noopener"},_)),n.a.createElement("small",{className:"avatar__subtitle"},y)))))})(),n.a.createElement("section",{className:"markdown"},n.a.createElement(m.a,{components:s.a},a)),(p.length>0||g)&&n.a.createElement("footer",{className:"row margin-vert--lg"},p.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),p.map((({label:e,permalink:a})=>n.a.createElement(o.a,{key:a,className:"margin-horiz--sm",to:a},e)))),g&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(o.a,{to:r.permalink,"aria-label":`Read more about ${N}`},n.a.createElement("strong",null,"Read More"))))))}}}]);