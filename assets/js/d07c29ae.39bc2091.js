"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[95431],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,m=u["".concat(c,".").concat(d)]||u[d]||h[d]||o;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(35742);function o(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},98490:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),o=r(88828);const i={title:"watchlist",description:"This page provides comprehensive information about the watchlist command, which allows you to retrieve an overview of your watchlist, including current price, high/low, volume, and change. It also covers how to obtain other related information such as flow, darkpool data, technical analysis, and news.",keywords:["Watchlist","Current price","High/low","Volume","Change","Flow","Darkpool data","Technical analysis","News"]},l=void 0,c={unversionedId:"bot/reference/telegram/overview/watchlist",id:"bot/reference/telegram/overview/watchlist",title:"watchlist",description:"This page provides comprehensive information about the watchlist command, which allows you to retrieve an overview of your watchlist, including current price, high/low, volume, and change. It also covers how to obtain other related information such as flow, darkpool data, technical analysis, and news.",source:"@site/content/bot/reference/telegram/overview/watchlist.md",sourceDirName:"bot/reference/telegram/overview",slug:"/bot/reference/telegram/overview/watchlist",permalink:"/bot/reference/telegram/overview/watchlist",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/overview/watchlist.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1709203525,formattedLastUpdatedAt:"Feb 29, 2024",frontMatter:{title:"watchlist",description:"This page provides comprehensive information about the watchlist command, which allows you to retrieve an overview of your watchlist, including current price, high/low, volume, and change. It also covers how to obtain other related information such as flow, darkpool data, technical analysis, and news.",keywords:["Watchlist","Current price","High/low","Volume","Change","Flow","Darkpool data","Technical analysis","News"]},sidebar:"tutorialSidebar",previous:{title:"markets",permalink:"/bot/reference/telegram/overview/markets"},next:{title:"watchlist_add",permalink:"/bot/reference/telegram/overview/watchlist_add"}},s={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],u={toc:p},h="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{title:"overview: watchlist - Telegram Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"This command allows the user to retrieve an overview of their watchlist, which includes the current price, high/low, volume, and change. You can also get other related information with a quick click like flow, darkpool data, technical analysis, and news - all from one spot."),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/watchlist\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,"This command has no parameters"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/watchlist\n")),(0,n.kt)("hr",null))}d.isMDXComponent=!0}}]);