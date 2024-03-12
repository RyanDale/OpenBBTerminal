"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1634],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(35742);function i(e){let{title:t}=e;return a.createElement(r.Z,null,a.createElement("title",null,t))}},93938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),i=n(88828);const l={title:"financials",description:"This page provides detailed information on how to retrieve the financials of a company using a specified stock ticker. It includes insights on total assets, cash, debt, liabilities, and revenue for a comprehensive analysis of a company's financial health.",keywords:["financials command","stock ticker","company assets","company liabilities","company revenue","debt analysis","financial health"]},o=void 0,c={unversionedId:"bot/reference/telegram/duediligence/financials",id:"bot/reference/telegram/duediligence/financials",title:"financials",description:"This page provides detailed information on how to retrieve the financials of a company using a specified stock ticker. It includes insights on total assets, cash, debt, liabilities, and revenue for a comprehensive analysis of a company's financial health.",source:"@site/content/bot/reference/telegram/duediligence/financials.md",sourceDirName:"bot/reference/telegram/duediligence",slug:"/bot/reference/telegram/duediligence/financials",permalink:"/bot/reference/telegram/duediligence/financials",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/duediligence/financials.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710245802,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{title:"financials",description:"This page provides detailed information on how to retrieve the financials of a company using a specified stock ticker. It includes insights on total assets, cash, debt, liabilities, and revenue for a comprehensive analysis of a company's financial health.",keywords:["financials command","stock ticker","company assets","company liabilities","company revenue","debt analysis","financial health"]},sidebar:"tutorialSidebar",previous:{title:"ermove",permalink:"/bot/reference/telegram/duediligence/ermove"},next:{title:"insiders",permalink:"/bot/reference/telegram/duediligence/insiders"}},s={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"duediligence: financials - Telegram Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"This command will retrieve the financials of the company with the given ticker which includes total assets, cash, debt, liabilities, and revenue. This information can be used to analyze the financial health of the company."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/financials ticker\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ticker"),(0,r.kt)("td",{parentName:"tr",align:null},"Stock Ticker"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/financials AMD\n")),(0,r.kt)("hr",null))}u.isMDXComponent=!0}}]);