"use strict";(self.webpackChunkzjiaahui_github_io=self.webpackChunkzjiaahui_github_io||[]).push([[8610],{5601:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(7294),l=a(6010),n=a(6742),m="sidebar_2ahu",i="sidebarItemTitle_2hhb",c="sidebarItemList_2xAf",s="sidebarItem_2UVv",o="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",u=a(4973);function d(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(m,"thin-scrollbar"),"aria-label":(0,u.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(i,"margin-bottom--md")},t.title),r.createElement("ul",{className:c},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:s},r.createElement(n.Z,{isNavLink:!0,to:e.permalink,className:o,activeClassName:g},e.title))}))))}},5286:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(7294),l=a(6010),n=a(3905),m=a(9105),i=a(6742),c=a(6626),s=a(4996),o="blogPostTitle_nmLu",g="blogPostDate_3tMv",u=["January","February","March","April","May","June","July","August","September","October","November","December"];var d=function(e){var t,a,d,b,p,E=e.children,h=e.frontMatter,v=e.metadata,_=e.truncated,N=e.isBlogPostPage,f=void 0!==N&&N,k=v.date,Z=v.permalink,I=v.tags,w=v.readingTime,y=h.author,T=h.title,L=h.image,M=h.keywords,A=h.author_url||h.authorURL,P=h.author_title||h.authorTitle,R=h.author_image_url||h.authorImageURL,x=(0,s.Z)(L,{absolute:!0});return r.createElement(r.Fragment,null,r.createElement(m.Z,null,M&&M.length&&r.createElement("meta",{name:"keywords",content:M.join(",")}),L&&r.createElement("meta",{property:"og:image",content:x}),L&&r.createElement("meta",{name:"twitter:image",content:x}),L&&r.createElement("meta",{name:"twitter:image:alt",content:"Image for "+T})),r.createElement("article",{className:f?void 0:"margin-bottom--xl"},(t=f?"h1":"h2",a=k.substring(0,10).split("-"),d=a[0],b=u[parseInt(a[1],10)-1],p=parseInt(a[2],10),r.createElement("header",null,r.createElement(t,{className:(0,l.Z)("margin-bottom--sm",o)},f?T:r.createElement(i.Z,{to:Z},T)),r.createElement("div",{className:"margin-vert--md"},r.createElement("time",{dateTime:k,className:g},b," ",p,", ",d," ",w&&r.createElement(r.Fragment,null," \xb7 ",Math.ceil(w)," min read"))),r.createElement("div",{className:"avatar margin-vert--md"},R&&r.createElement("a",{className:"avatar__photo-link avatar__photo",href:A,target:"_blank",rel:"noreferrer noopener"},r.createElement("img",{src:R,alt:y})),r.createElement("div",{className:"avatar__intro"},y&&r.createElement(r.Fragment,null,r.createElement("h4",{className:"avatar__name"},r.createElement("a",{href:A,target:"_blank",rel:"noreferrer noopener"},y)),r.createElement("small",{className:"avatar__subtitle"},P)))))),r.createElement("section",{className:"markdown"},r.createElement(n.Zo,{components:c.Z},E)),(I.length>0||_)&&r.createElement("footer",{className:"row margin-vert--lg"},I.length>0&&r.createElement("div",{className:"col"},r.createElement("strong",null,"Tags:"),I.map((function(e){var t=e.label,a=e.permalink;return r.createElement(i.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),_&&r.createElement("div",{className:"col text--right"},r.createElement(i.Z,{to:v.permalink,"aria-label":"Read more about "+T},r.createElement("strong",null,"\u9605\u8bfb\u5168\u6587"))))))}},9551:function(e,t,a){a.r(t);var r=a(7294),l=a(261),n=a(5286),m=a(6742),i=(a(5601),a(4973));t.default=function(e){var t=e.metadata,a=e.items,c=(e.sidebar,t.allTagsPath),s=t.name,o=t.count,g=(0,i.I)({id:"blogtagpage.title",message:"\u4e0b\u7684\u535a\u5ba2",description:"blog tag page title"}),u=(0,i.I)({id:"blogtagpage.title.alt",message:"",description:"blog tag page title in alternate order"}),d=(0,i.I)({id:"blogtagpage.description",message:"\u535a\u5ba2\u6807\u7b7e",description:"blog tag page description"});return r.createElement(l.Z,{title:u+" "+s+" "+g,description:d+' - "'+s+'"',wrapperClassName:"blog-wrapper"},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row blog-tags__page"},r.createElement("main",{className:"col col--12"},r.createElement("h1",null,s,"\uff1a ",o," ",r.createElement(i.Z,{id:"blogtagpage.count.label",description:"blog page count label"},"\u7bc7")),r.createElement(m.Z,{href:c},r.createElement(i.Z,{id:"blogtagpage.seeall.label",description:"blog page see all label"},"\u67e5\u770b\u6240\u6709\u6807\u7b7e\uff08\u5206\u7c7b\uff09")),r.createElement("div",{className:"margin-vert--xl"},a.map((function(e){var t=e.content;return r.createElement(n.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))))))}}}]);