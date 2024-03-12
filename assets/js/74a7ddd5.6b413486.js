"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31475],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return r?a.createElement(h,l(l({ref:t},d),{},{components:r})):a.createElement(h,l({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(67294),n=r(35742);function i(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},49322:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),i=r(88828);const l={title:"chart",description:"Learn how to retrieve a candlestick chart for specified stock tickers, intervals, and for past days. The chart provides comprehensive trading data including opening and closing prices, as well as highs and lows, and volume.",keywords:["stock ticker","candlestick chart","trading data","chart interval","data visualization","stock market","financial information"]},o=void 0,c={unversionedId:"bot/reference/discord/charts/chart",id:"bot/reference/discord/charts/chart",title:"chart",description:"Learn how to retrieve a candlestick chart for specified stock tickers, intervals, and for past days. The chart provides comprehensive trading data including opening and closing prices, as well as highs and lows, and volume.",source:"@site/content/bot/reference/discord/charts/chart.md",sourceDirName:"bot/reference/discord/charts",slug:"/bot/reference/discord/charts/chart",permalink:"/bot/reference/discord/charts/chart",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/charts/chart.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710245802,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{title:"chart",description:"Learn how to retrieve a candlestick chart for specified stock tickers, intervals, and for past days. The chart provides comprehensive trading data including opening and closing prices, as well as highs and lows, and volume.",keywords:["stock ticker","candlestick chart","trading data","chart interval","data visualization","stock market","financial information"]},sidebar:"tutorialSidebar",previous:{title:"cd",permalink:"/bot/reference/discord/charts/cd"},next:{title:"chartfib",permalink:"/bot/reference/discord/charts/chartfib"}},s={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{title:"charts: chart - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"This command will retrieve a candlestick chart for the ticker/interval provided, with data for the past number of days specified. The interval provided must be a valid time interval (e.g. 5 minute, 15 minute, etc.). The chart will be displayed to the user and will contain information such as the opening and closing prices, the high and low, the volume, and any other relevant information."),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/chart ticker interval [past_days] [extended_hours]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ticker"),(0,n.kt)("td",{parentName:"tr",align:null},"Stock Ticker"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"interval"),(0,n.kt)("td",{parentName:"tr",align:null},"Chart Interval"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"Daily (1440), Weekly (7200), Monthly (28800), 1 minute (1), 5 minute (5), 10 minute (10), 15 minute (15), 30 minute (30), 1 hour (60)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"past_days"),(0,n.kt)("td",{parentName:"tr",align:null},"Past Days to Display. Default: 0"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"extended_hours"),(0,n.kt)("td",{parentName:"tr",align:null},"Display Full 4am-8pm ET Trading Hours. Default: False"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/chart ticker:AMD interval:5 minute past_days:0\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/chart ticker:AMD interval:Daily\n")),(0,n.kt)("hr",null))}m.isMDXComponent=!0}}]);