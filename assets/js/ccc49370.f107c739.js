"use strict";(self.webpackChunkzjiaahui_github_io_source=self.webpackChunkzjiaahui_github_io_source||[]).push([[103,207],{4147:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var n=a(7294),r=a(8388),l=a(5286),i=a(4973),o=a(6742);var s=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(o.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(o.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},c=a(3018);var m=function(e){var t=e.content,a=e.sidebar,i=t.frontMatter,o=t.metadata,m=o.title,u=o.description,d=o.nextItem,g=o.prevItem,h=i.hide_table_of_contents;return n.createElement(r.Z,{title:m,description:u,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogPostPage,sidebar:a,toc:!h&&t.toc?t.toc:void 0},n.createElement(l.Z,{frontMatter:i,metadata:o,isBlogPostPage:!0},n.createElement(t,null)),(d||g)&&n.createElement(s,{nextItem:d,prevItem:g}))}},6146:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),r=a(4973),l=a(7462),i=a(3366),o=a(6010),s="iconEdit_2_ui",c=["className"],m=function(e){var t=e.className,a=(0,i.Z)(e,c);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(s,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},8388:function(e,t,a){a.d(t,{Z:function(){return I}});var n=a(3366),r=a(7294),l=a(6010),i=a(5227),o=a(6742),s="sidebar_3-2F",c="sidebarItemTitle_10M-",m="sidebarItemList_3L1d",u="sidebarItem_3stU",d="sidebarItemLink_3hZO",g="sidebarItemLinkActive_1XEC",h=a(4973);function v(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,h.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(c,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var b=a(8013),f="sidebar_2CaX",E="sidebarItemTitle_SZjo",p="sidebarItemList_1h6m",_="sidebarItem_D2qy",N="sidebarItemLink_3gjl",Z="sidebarItemLinkActive_3jt8";function k(e){var t=e.sidebar;if(0===t.items.length)return null;var a=t.items.slice(0,5);return r.createElement("nav",{className:(0,l.Z)(f,"thin-scrollbar"),"aria-label":(0,h.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(E,"margin-bottom--md")},t.title),r.createElement("ul",{className:p},a.map((function(e){return r.createElement("li",{key:e.permalink,className:_},r.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:N,activeClassName:Z},e.title))}))))}var C=["sidebar","toc","children"];var I=function(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,n.Z)(e,C),c=t&&t.items.length>0;return r.createElement(i.Z,s,r.createElement("div",{className:"container margin-vert--lg"},!a&&r.createElement("div",{className:"row"},c&&r.createElement("aside",{className:"col col--3"},r.createElement(v,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c})},o),a&&r.createElement("div",{className:"col col--2"},r.createElement(b.ZP,{toc:a}))),a&&r.createElement("div",{className:"row"},r.createElement("main",{className:(0,l.Z)("col",{"col--8 col--offset-1":c})},o),a&&r.createElement("div",{className:(0,l.Z)("col col--3")},r.createElement(k,{sidebar:t}),r.createElement(b.ZP,{toc:a})))))}},5286:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(7294),r=a(6010),l=a(3905),i=a(4973),o=a(6742),s=a(3018),c=a(5366),m=a(1217),u=a(6146),d=a(2263),g="blogPostTitle_nmLu",h="blogPostData_3WzT",v="blogPageTopTags_New_3Y8P",b="blogPostDetailsFull_3bEF",f="hr_line_3h1R",E="blogPageTitle_New_1DzW",p="blogPageTopTagsItem_New_28jE",_="width996_New_3gIE";var N=function(e){var t,a,N,Z=(0,d.Z)().siteConfig,k=(a=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),C=e.children,I=e.frontMatter,T=e.metadata,P=e.truncated,L=e.isBlogPostPage,w=void 0!==L&&L,A=T.date,y=T.formattedDate,R=T.permalink,x=T.tags,F=T.readingTime,B=T.title,M=T.editUrl,S=I.image,O=I.keywords,U=I.author_url||I.authorURL||Z.customFields.blogAuthorInfoDefault.authorURL,z=I.author_title||I.authorTitle||Z.customFields.blogAuthorInfoDefault.authorTitle,D=I.author_image_url||I.authorImageURL||Z.customFields.blogAuthorInfoDefault.authorImageURL,j=I.author||Z.customFields.blogAuthorInfoDefault.author;return n.createElement(n.Fragment,null,n.createElement(m.Z,{keywords:O,image:S}),n.createElement("article",{className:w?void 0:"margin-bottom--xl"},(N=w?"h1":"h2",n.createElement("header",null,n.createElement(N,{className:w?E:g},w?B:n.createElement(o.Z,{to:R},B)),n.createElement("div",{className:(0,r.Z)(h,"margin-vert--md")},w&&n.createElement("time",{dateTime:A},y),w&&F&&n.createElement(n.Fragment,null," \xb7 ",k(F))),w&&n.createElement("div",{className:(0,r.Z)(v,"margin-vert--md")},x.length>0&&n.createElement("div",null,n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),x.map((function(e){var t=e.label,a=e.permalink;return n.createElement(o.Z,{key:a,className:(0,r.Z)(p,"margin-horiz--sm"),to:a},t)})))),n.createElement("div",{className:"avatar margin-vert--md"},!w&&D&&n.createElement(o.Z,{className:(0,r.Z)(_,"avatar__photo-link avatar__photo"),href:U},n.createElement("img",{src:D,alt:j})),n.createElement("div",{className:(0,r.Z)(_,"avatar__intro")},!w&&j&&n.createElement(n.Fragment,null,n.createElement("div",{className:"avatar__name"},n.createElement(o.Z,{href:U},j)),n.createElement("small",{className:"avatar__subtitle"},z))),!w&&n.createElement("div",{className:(0,r.Z)(h)},n.createElement("time",{dateTime:A},y),F&&n.createElement(n.Fragment,null," \xb7 ",k(F)))))),n.createElement("div",{className:"markdown"},n.createElement(l.Zo,{components:c.Z},C)),(x.length>0||P)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(t={},t[b]=w,t))},x.length>0&&n.createElement("div",{className:"col"},n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),x.map((function(e){var t=e.label,a=e.permalink;return n.createElement(o.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),w&&M&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:M})),!w&&P&&n.createElement("div",{className:"col text--right"},n.createElement(o.Z,{to:T.permalink,"aria-label":"Read more about "+B},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))),n.createElement("hr",{className:(0,r.Z)(f)})))}},3507:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(7462),r=a(3366),l=a(7294),i=a(3935),o=a(2263),s=a(5977),c=a(4996),m=a(6742),u=a(9105),d=a(6397),g=a(7052),h=a(6747),v=a(5613),b=a(4973),f="searchBox_1ZXk",E=["contextualSearch"],p=null;function _(e){var t=e.hit,a=e.children;return l.createElement(m.Z,{to:t.url},a)}function N(e){var t=e.state,a=e.onClose,n=(0,d.Z)().generateSearchPageLink;return l.createElement(m.Z,{to:n(t.query),onClick:a},"See all ",t.context.nbHits," results")}function Z(e){var t,m,d=e.contextualSearch,Z=(0,r.Z)(e,E),k=(0,o.Z)().siteMetadata,C=(0,v.Z)(),I=null!=(t=null==(m=Z.searchParameters)?void 0:m.facetFilters)?t:[],T=d?[].concat(C,I):I,P=Object.assign({},Z.searchParameters,{facetFilters:T}),L=(0,c.C)().withBaseUrl,w=(0,s.k6)(),A=(0,l.useRef)(null),y=(0,l.useRef)(null),R=(0,l.useState)(!1),x=R[0],F=R[1],B=(0,l.useState)(null),M=B[0],S=B[1],O=(0,l.useCallback)((function(){return p?Promise.resolve():Promise.all([a.e(300).then(a.bind(a,4300)),Promise.all([a.e(532),a.e(945)]).then(a.bind(a,6945)),Promise.all([a.e(532),a.e(846)]).then(a.bind(a,9846))]).then((function(e){var t=e[0].DocSearchModal;p=t}))}),[]),U=(0,l.useCallback)((function(){O().then((function(){A.current=document.createElement("div"),document.body.insertBefore(A.current,document.body.firstChild),F(!0)}))}),[O,F]),z=(0,l.useCallback)((function(){F(!1),A.current.remove()}),[F]),D=(0,l.useCallback)((function(e){O().then((function(){F(!0),S(e.key)}))}),[O,F,S]),j=(0,l.useRef)({navigate:function(e){var t=e.itemUrl;w.push(t)}}).current,q=(0,l.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:L(""+t.pathname+t.hash)})}))})).current,X=(0,l.useMemo)((function(){return function(e){return l.createElement(N,(0,n.Z)({},e,{onClose:z}))}}),[z]),Y=(0,l.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",k.docusaurusVersion),e}),[k.docusaurusVersion]);(0,g.D)({isOpen:x,onOpen:U,onClose:z,onInput:D,searchButtonRef:y});var H=(0,b.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return l.createElement(l.Fragment,null,l.createElement(u.Z,null,l.createElement("link",{rel:"preconnect",href:"https://"+Z.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),l.createElement("div",{className:f},l.createElement(h.a,{onTouchStart:O,onFocus:O,onMouseOver:O,onClick:U,ref:y,translations:{buttonText:H,buttonAriaLabel:H}})),x&&(0,i.createPortal)(l.createElement(p,(0,n.Z)({onClose:z,initialScrollY:window.scrollY,initialQuery:M,navigator:j,transformItems:q,hitComponent:_,resultsFooterComponent:X,transformSearchClient:Y},Z,{searchParameters:P})),A.current))}var k=function(){var e=(0,o.Z)().siteConfig;return l.createElement(Z,e.themeConfig.algolia)}},8013:function(e,t,a){a.d(t,{rA:function(){return c},ZP:function(){return u}});var n=a(7294),r=a(6010);var l=function(e,t,a){var r=(0,n.useState)(void 0),l=r[0],i=r[1];(0,n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var r=0,o=!1,s=document.getElementsByClassName(e);r<s.length&&!o;){var c=s[r],m=c.href,u=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===u&&(l&&l.classList.remove(t),c.classList.add(t),i(c),o=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i="tableOfContents_rbnR",o="tableOfContentsTitle_New_24Qr",s="table-of-contents__link";function c(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(c,{isChild:!0,toc:e.children}))}))):null}function m(e){var t=e.toc;e.isChild;return t.length?n.createElement("b",{className:(0,r.Z)(o)},"\u6587\u7ae0\u76ee\u5f55"):null}var u=function(e){var t=e.toc;return l(s,"table-of-contents__link--active",100),n.createElement(n.Fragment,null,n.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar")},n.createElement(m,{toc:t}),n.createElement(c,{toc:t})))}}}]);