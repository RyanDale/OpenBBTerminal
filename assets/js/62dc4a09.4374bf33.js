"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30529],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(35742);function i(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},5584:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),i=r(88828);const o={title:"chains",description:"This docusaurus page explores the `chains` command which allows users to view Options Chains by Expiry for a specific stock. It also explains several parameters such as Stock Ticker, Expiration Date, type of options Calls or Puts, and Strike Prices.",keywords:["Options Chains by Expiry","Stock Ticker","Expiration Date","Calls or Puts","Minimum Strike Price","Maximum Strike Price"]},l=void 0,s={unversionedId:"bot/reference/discord/options/chains",id:"bot/reference/discord/options/chains",title:"chains",description:"This docusaurus page explores the `chains` command which allows users to view Options Chains by Expiry for a specific stock. It also explains several parameters such as Stock Ticker, Expiration Date, type of options Calls or Puts, and Strike Prices.",source:"@site/content/bot/reference/discord/options/chains.md",sourceDirName:"bot/reference/discord/options",slug:"/bot/reference/discord/options/chains",permalink:"/bot/reference/discord/options/chains",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/options/chains.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710245802,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{title:"chains",description:"This docusaurus page explores the `chains` command which allows users to view Options Chains by Expiry for a specific stock. It also explains several parameters such as Stock Ticker, Expiration Date, type of options Calls or Puts, and Strike Prices.",keywords:["Options Chains by Expiry","Stock Ticker","Expiration Date","Calls or Puts","Minimum Strike Price","Maximum Strike Price"]},sidebar:"tutorialSidebar",previous:{title:"options",permalink:"/bot/reference/discord/options/"},next:{title:"equitypc",permalink:"/bot/reference/discord/options/equitypc"}},p={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],u={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{title:"options: chains - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"This command allows users to retrieve Options Chain by Expiry, which gives an overview of the bid, ask, and open interest of options contracts for a specific stock."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/op chains ticker expiry opt_type [min_sp] [max_sp]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ticker"),(0,a.kt)("td",{parentName:"tr",align:null},"Stock Ticker"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"expiry"),(0,a.kt)("td",{parentName:"tr",align:null},"Expiration Date"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"opt_type"),(0,a.kt)("td",{parentName:"tr",align:null},"Calls or Puts"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"Calls, Puts")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"min_sp"),(0,a.kt)("td",{parentName:"tr",align:null},"Minimum Strike Price"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"max_sp"),(0,a.kt)("td",{parentName:"tr",align:null},"Maximum Strike Price"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/op chains ticker:AMD expiry:2022-07-29 opt_type:Calls\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/op chains ticker:AMD expiry:2022-07-29 opt_type:Calls min_sp:10 max_sp:100\n")),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);