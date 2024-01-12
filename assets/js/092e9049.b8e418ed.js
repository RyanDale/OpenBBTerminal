"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69432],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(g,a(a({ref:t},u),{},{components:n})):o.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(67294),r=n(35742);function i(e){let{title:t}=e;return o.createElement(r.Z,null,o.createElement("title",null,t))}},29343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(87462),r=(n(67294),n(3905)),i=n(88828);const a={title:"Customization",sidebar_position:1,description:"A guide to OpenBB Bot settings customization, including chart themes, alerts, autoposting, and more. Learn how to link your account and start personalizing your experience now.",keywords:["OpenBB Bot settings","customization","chart themes","technical analysis indicators","alerts","watchlists","autoposting","billboard message","Linked Platforms"]},s=void 0,l={unversionedId:"bot/usage/customizing/index",id:"bot/usage/customizing/index",title:"Customization",description:"A guide to OpenBB Bot settings customization, including chart themes, alerts, autoposting, and more. Learn how to link your account and start personalizing your experience now.",source:"@site/content/bot/usage/customizing/index.md",sourceDirName:"bot/usage/customizing",slug:"/bot/usage/customizing/",permalink:"/bot/usage/customizing/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/usage/customizing/index.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1705059577,formattedLastUpdatedAt:"Jan 12, 2024",sidebarPosition:1,frontMatter:{title:"Customization",sidebar_position:1,description:"A guide to OpenBB Bot settings customization, including chart themes, alerts, autoposting, and more. Learn how to link your account and start personalizing your experience now.",keywords:["OpenBB Bot settings","customization","chart themes","technical analysis indicators","alerts","watchlists","autoposting","billboard message","Linked Platforms"]},sidebar:"tutorialSidebar",previous:{title:"Telegram",permalink:"/bot/usage/telegram"},next:{title:"Individual",permalink:"/bot/usage/customizing/individual"}},c={},u=[],p={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"Customizing - Usage | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"For the best user experience, you will want to customize the OpenBB Bot settings. Different types of customizations we offer are:"),(0,r.kt)("div",{className:"flex"},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("strong",null,"INDIVIDUAL"),": Allows to customize chart themes, add technical analysis indicators in the chart, create alerts and watchlists"),(0,r.kt)("li",null,(0,r.kt)("strong",null,"SERVER"),": Allows to customize chart settings, autoposting for members of your server and billboard message (for announcements)."))),(0,r.kt)("p",null,"In Order to you customize you will need to link your account. You can find this under ",(0,r.kt)("a",{parentName:"p",href:"https://my.openbb.co/app/bot/linked-platforms"},"Linked Platforms")," on the Hub Page - an explanation of how to link is provided there."),(0,r.kt)("div",{className:"flex justify-center h-full w-[800px] rounded-r-[4px]"},(0,r.kt)("img",{className:"h-full object-cover",alt:"gif describing step",src:"https://openbb-web-assets.s3.amazonaws.com/docusaurus-openbb-bot-walkthrough-gifs/page2.gif"})),(0,r.kt)("p",null,"Now that your account is linked - lets dive into what you can do on the next pages."))}m.isMDXComponent=!0}}]);