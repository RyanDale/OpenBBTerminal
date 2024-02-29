"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37843],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,u=m["".concat(c,".").concat(f)]||m[f]||p[f]||s;return r?n.createElement(u,a(a({ref:t},d),{},{components:r})):n.createElement(u,a({ref:t},d))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},26515:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(39960),o=r(86010),s=r(67294),a=r(16550),i=r(48334);function c(e){let{title:t,url:r,description:c,command:l}=e;const{pathname:d}=(0,a.TH)(),m=d.replace(/\/v\d+/,""),p=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return s.createElement(n.Z,{className:(0,o.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":m.startsWith("/excel"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:r},s.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),s.createElement("div",{className:"flex items-center"},s.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),p&&s.createElement(i.Z,{className:"ml-auto mr-4"})),c?s.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},c):null)}},38758:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=r(87462),o=(r(67294),r(3905)),s=r(26515);const a={},i="Stocks",c={unversionedId:"terminal/reference/stocks/index",id:"terminal/reference/stocks/index",title:"Stocks",description:"Menus",source:"@site/content/terminal/reference/stocks/index.mdx",sourceDirName:"terminal/reference/stocks",slug:"/terminal/reference/stocks/",permalink:"/terminal/reference/stocks/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/index.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1709203525,formattedLastUpdatedAt:"Feb 29, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"hn",permalink:"/terminal/reference/alt/hn"},next:{title:"Screener",permalink:"/terminal/reference/stocks/screener/"}},l={},d=[{value:"Menus",id:"menus",level:3},{value:"Commands",id:"commands",level:3}],m={toc:d},p="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"stocks"},"Stocks"),(0,o.kt)("h3",{id:"menus"},"Menus"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(s.Z,{title:"Screener",description:"ownership, overview, set, view, technical, financial, valuation, performance",url:"/terminal/reference/stocks/screener",mdxType:"ReferenceCard"}),(0,o.kt)(s.Z,{title:"Th",description:"holidays, closed, exchange, all, open, symbol",url:"/terminal/reference/stocks/th",mdxType:"ReferenceCard"}),(0,o.kt)(s.Z,{title:"Options",description:"plot, hist, grhist, oi, vsurf, info, calc, load, chains, greeks, exp, vol, pcr, voi, unu, eodchain",url:"/terminal/reference/stocks/options",mdxType:"ReferenceCard"}),(0,o.kt)(s.Z,{title:"Disc",description:"losers, upcoming, pipo, ugs, filings, ulc, hotpenny, gainers, active, fipo, lowfloat, asc, arkord, gtech, rtat,...",url:"/terminal/reference/stocks/disc",mdxType:"ReferenceCard"}),(0,o.kt)(s.Z,{title:"Fa",description:"shrs, mktcap, dcf, overview, pt, epsfc, customer, analysis, cash, divs, dupont, splits, balance, dcfc, score,...",url:"/terminal/reference/stocks/fa",mdxType:"ReferenceCard"}),(0,o.kt)(s.Z,{title:"Ca",description:"historical, ticker, ownership, overview, volume, set, sentiment, hcorr, rmv, balance, tsne, technical, cashflow,...",url:"/terminal/reference/stocks/ca",mdxType:"ReferenceCard"}),(0,o.kt)(s.Z,{title:"Dps",description:"hsi, psi, dpotc, load, spos, prom, ftd, sidtc, pos, shorted",url:"/terminal/reference/stocks/dps",mdxType:"ReferenceCard"}),(0,o.kt)(s.Z,{title:"Qa",description:"decompose, unitroot, qqplot, bw, hist, line, spread, skew, kurtosis, normality, summary, sh, load, cusum, so,...",url:"/terminal/reference/stocks/qa",mdxType:"ReferenceCard"}),(0,o.kt)(s.Z,{title:"Ins",description:"stats, blcs, tippw, lit, set, tispm, filter, view, tist, topt, lpsb, toppm, blcp, tippm, load, lins, lis, tipt,...",url:"/terminal/reference/stocks/ins",mdxType:"ReferenceCard"}),(0,o.kt)(s.Z,{title:"Ba",description:"ns, redditsent, rise, regions, stalker, wsb, bullbear, interest, load, messages, snews, queries, headlines,...",url:"/terminal/reference/stocks/ba",mdxType:"ReferenceCard"}),(0,o.kt)(s.Z,{title:"Ta",description:"ichimoku, multi, atr, demark, cones, sma, fisher, hma, obv, adosc, ema, recom, summary, wma, aroon, vwap, clenow,...",url:"/terminal/reference/stocks/ta",mdxType:"ReferenceCard"}),(0,o.kt)(s.Z,{title:"Backtesting",description:"emacross, ema, whatif, load, rsi",url:"/terminal/reference/stocks/backtesting",mdxType:"ReferenceCard"}),(0,o.kt)(s.Z,{title:"Gov",description:"lastcontracts, qtrcontracts, contracts, lobbying, histcont, toplobbying, load, topbuys, topsells, gtrades,...",url:"/terminal/reference/stocks/gov",mdxType:"ReferenceCard"})),(0,o.kt)("h3",{id:"commands"},"Commands"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(s.Z,{title:"Candle",description:"Shows historic price and volume for the asset.",url:"/terminal/reference/stocks/candle",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(s.Z,{title:"Load",description:"Load stock ticker to perform analysis on. When the data source is yf, an Indian ticker can be loaded by using...",url:"/terminal/reference/stocks/load",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(s.Z,{title:"News",description:"latest news of the company",url:"/terminal/reference/stocks/news",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(s.Z,{title:"Quote",description:"Current quote for the loaded stock ticker.",url:"/terminal/reference/stocks/quote",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(s.Z,{title:"Search",description:"Show companies matching the search query, country, sector, industry and/or exchange. Note that by default only...",url:"/terminal/reference/stocks/search",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(s.Z,{title:"Tob",description:"Get top of book for loaded ticker from selected exchange",url:"/terminal/reference/stocks/tob",command:!0,mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);