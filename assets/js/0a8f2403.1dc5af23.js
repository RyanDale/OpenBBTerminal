"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78923],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(r),b=a,d=m["".concat(i,".").concat(b)]||m[b]||p[b]||s;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=b;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<s;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(35742);function s(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},1506:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905)),s=r(88828);const l={title:"bullbear",description:"This page provides information on the bullbear command, which prints the bullbear sentiment based on the last 30 Stocktwits messages, as well as the watchlist count. No parameters needed.",keywords:["bullbear","stocktwits","stock market sentiment","stock trade","stock watchlist count","bullish","bearish","no parameters command","stock messaging","stock trade analysis"]},o=void 0,i={unversionedId:"terminal/reference/stocks/ba/bullbear",id:"terminal/reference/stocks/ba/bullbear",title:"bullbear",description:"This page provides information on the bullbear command, which prints the bullbear sentiment based on the last 30 Stocktwits messages, as well as the watchlist count. No parameters needed.",source:"@site/content/terminal/reference/stocks/ba/bullbear.md",sourceDirName:"terminal/reference/stocks/ba",slug:"/terminal/reference/stocks/ba/bullbear",permalink:"/terminal/reference/stocks/ba/bullbear",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/ba/bullbear.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1705059577,formattedLastUpdatedAt:"Jan 12, 2024",frontMatter:{title:"bullbear",description:"This page provides information on the bullbear command, which prints the bullbear sentiment based on the last 30 Stocktwits messages, as well as the watchlist count. No parameters needed.",keywords:["bullbear","stocktwits","stock market sentiment","stock trade","stock watchlist count","bullish","bearish","no parameters command","stock messaging","stock trade analysis"]},sidebar:"tutorialSidebar",previous:{title:"Behavioural Analysis",permalink:"/terminal/reference/stocks/ba/"},next:{title:"getdd",permalink:"/terminal/reference/stocks/ba/getdd"}},c={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],m={toc:u},p="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(s.Z,{title:"stocks /ba/bullbear - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Print bullbear sentiment based on last 30 messages on the board. Also prints the watchlist_count. ","[Source: Stocktwits]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"bullbear\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"This command has no parameters"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"2022 Feb 16, 10:07 (\ud83e\udd8b) /stocks/ba/ $ bullbear\nWatchlist count: 381324\n\nLast 16 sentiment messages:\nBullish 87.5%\nBearish 12.5%\n")),(0,a.kt)("hr",null))}b.isMDXComponent=!0}}]);