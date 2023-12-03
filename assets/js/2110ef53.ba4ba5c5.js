"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6588],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||l;return r?a.createElement(h,o(o({ref:t},d),{},{components:r})):a.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(35742);function l(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},40713:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),l=r(88828);const o={title:"watchlist",description:"Learn how to use the watchlist command: add or remove stock tickers, retrieve an overview on current price, high/low, volume and change; get quick access to related data like flow, darkpool data, technical analysis and news.",keywords:["watchlist","stocks","add ticker","edit ticker","technical analysis","stock price","high/low","volume","change","darkpool data","stock news"]},i=void 0,c={unversionedId:"bot/reference/discord/general/watchlist",id:"bot/reference/discord/general/watchlist",title:"watchlist",description:"Learn how to use the watchlist command: add or remove stock tickers, retrieve an overview on current price, high/low, volume and change; get quick access to related data like flow, darkpool data, technical analysis and news.",source:"@site/content/bot/reference/discord/general/watchlist.md",sourceDirName:"bot/reference/discord/general",slug:"/bot/reference/discord/general/watchlist",permalink:"/bot/reference/discord/general/watchlist",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/general/watchlist.md",tags:[],version:"current",lastUpdatedBy:"Theodore Aptekarev",lastUpdatedAt:1701637004,formattedLastUpdatedAt:"Dec 3, 2023",frontMatter:{title:"watchlist",description:"Learn how to use the watchlist command: add or remove stock tickers, retrieve an overview on current price, high/low, volume and change; get quick access to related data like flow, darkpool data, technical analysis and news.",keywords:["watchlist","stocks","add ticker","edit ticker","technical analysis","stock price","high/low","volume","change","darkpool data","stock news"]},sidebar:"tutorialSidebar",previous:{title:"ta",permalink:"/bot/reference/discord/general/ta"},next:{title:"government",permalink:"/bot/reference/discord/government/"}},s={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"general: watchlist - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"This command allows the user to retrieve an overview of their watchlist, which includes the current price, high/low, volume, and change. You can also get other related information with a quick click like flow, darkpool data, technical analysis, and news - all from one spot."),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/watchlist [add] [edit]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"add"),(0,n.kt)("td",{parentName:"tr",align:null},"Add a ticker to your watchlist. You can add multiple tickers by separating them with a comma."),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"edit"),(0,n.kt)("td",{parentName:"tr",align:null},"Remove tickers from your watchlist. Choose Remove to bring up the interactive menu."),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"Remove")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/watchlist\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/watchlist add:AMD\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/watchlist add:AMD,GOOG,TSLA\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/watchlist edit:Remove\n")),(0,n.kt)("hr",null))}m.isMDXComponent=!0}}]);