"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60448],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=l(t),u=a,f=m["".concat(i,".").concat(u)]||m[u]||p[u]||o;return t?n.createElement(f,s(s({ref:r},d),{},{components:t})):n.createElement(f,s({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=u;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[m]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},88828:(e,r,t)=>{t.d(r,{Z:()=>o});var n=t(67294),a=t(35742);function o(e){let{title:r}=e;return n.createElement(a.Z,null,n.createElement("title",null,r))}},43504:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=t(87462),a=(t(67294),t(3905)),o=t(88828);const s={title:"markets",description:"The page provides an overview on the /markets command which allows users to retrieve a summary of current market conditions including prices of the largest ETFs and and the amount of stocks current above and below the SMA 200/50 and Advancers / Decliners.",keywords:["Markets","ETF","SMA 200/50","Advancers / Decliners","market conditions","/markets command","stock market","stock analysis"]},c=void 0,i={unversionedId:"bot/reference/discord/general/markets",id:"bot/reference/discord/general/markets",title:"markets",description:"The page provides an overview on the /markets command which allows users to retrieve a summary of current market conditions including prices of the largest ETFs and and the amount of stocks current above and below the SMA 200/50 and Advancers / Decliners.",source:"@site/content/bot/reference/discord/general/markets.md",sourceDirName:"bot/reference/discord/general",slug:"/bot/reference/discord/general/markets",permalink:"/bot/reference/discord/general/markets",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/general/markets.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710245802,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{title:"markets",description:"The page provides an overview on the /markets command which allows users to retrieve a summary of current market conditions including prices of the largest ETFs and and the amount of stocks current above and below the SMA 200/50 and Advancers / Decliners.",keywords:["Markets","ETF","SMA 200/50","Advancers / Decliners","market conditions","/markets command","stock market","stock analysis"]},sidebar:"tutorialSidebar",previous:{title:"heatmap",permalink:"/bot/reference/discord/general/heatmap"},next:{title:"news",permalink:"/bot/reference/discord/general/news"}},l={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],m={toc:d},p="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"general: markets - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"This command allows the user to retrieve a markets overview which provides a quick summary of current market conditions. The overview includes prices of the largest ETFs, with the amount of stocks current above and below the SMA 200/50 and Advancers / Decliners."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/markets\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"This command has no parameters"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/markets\n")),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);