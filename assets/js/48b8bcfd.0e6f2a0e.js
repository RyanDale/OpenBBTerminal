"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36075],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=d(r),m=s,u=p["".concat(i,".").concat(m)]||p[m]||f[m]||o;return r?n.createElement(u,c(c({ref:t},l),{},{components:r})):n.createElement(u,c({ref:t},l))}));function u(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,c=new Array(o);c[0]=m;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[p]="string"==typeof e?e:s,c[1]=a;for(var d=2;d<o;d++)c[d]=r[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(39960),s=r(67294),o=r(86010),c=r(16550);function a(e){let{title:t,url:r,description:a,command:i}=e;const{pathname:d}=(0,c.TH)();return s.createElement(n.Z,{className:(0,o.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:d.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":d.startsWith("/sdk"),"bg-gradient-to-r from-grey-800 to-purple-800":d.startsWith("/bot"),header_docs:!d.startsWith("/terminal")&&!d.startsWith("/sdk")&&!d.startsWith("/bot")}),to:r},s.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),s.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),a?s.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},a):null)}},54027:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var n=r(87462),s=(r(67294),r(3905)),o=r(62872);const c={},a="stocks",i={unversionedId:"sdk/reference/stocks/index",id:"sdk/reference/stocks/index",title:"stocks",description:"<ReferenceCard",source:"@site/content/sdk/reference/stocks/index.mdx",sourceDirName:"sdk/reference/stocks",slug:"/sdk/reference/stocks/",permalink:"/sdk/reference/stocks/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"var",permalink:"/sdk/reference/qa/var"},next:{title:"ba",permalink:"/sdk/reference/stocks/ba/"}},d={},l=[],p={toc:l},f="wrapper";function m(e){let{components:t,...r}=e;return(0,s.kt)(f,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"stocks"},"stocks"),(0,s.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,s.kt)(o.Z,{title:"fa",description:"enterprise, ratios, mktcap, growth, supplier, balance, earnings, dcfc, cal, income, rating, similar_dfs,...",url:"/sdk/reference/stocks/fa",mdxType:"ReferenceCard"}),(0,s.kt)(o.Z,{title:"screener",description:"screener_data",url:"/sdk/reference/stocks/screener",mdxType:"ReferenceCard"}),(0,s.kt)(o.Z,{title:"qa",description:"fama_raw, capm, historical_5, beta",url:"/sdk/reference/stocks/qa",mdxType:"ReferenceCard"}),(0,s.kt)(o.Z,{title:"options",description:"info, grhist, generate_data, eodchain, vsurf, dte, pcr, hist, expirations, get_strategies, voi, unu, greeks,...",url:"/sdk/reference/stocks/options",mdxType:"ReferenceCard"}),(0,s.kt)(o.Z,{title:"th",description:"all, check_if_open, open, closed, exchange",url:"/sdk/reference/stocks/th",mdxType:"ReferenceCard"}),(0,s.kt)(o.Z,{title:"ca",description:"similar, balance, volume, income, hcorr, hist, scorr, cashflow, screener, sentiment",url:"/sdk/reference/stocks/ca",mdxType:"ReferenceCard"}),(0,s.kt)(o.Z,{title:"dps",description:"dpotc, ctb, hsi, pos, psi_sg, shorted, ftd, sidtc, prom, spos, psi_q",url:"/sdk/reference/stocks/dps",mdxType:"ReferenceCard"}),(0,s.kt)(o.Z,{title:"gov",description:"lobbying, government_trading, qtrcontracts, lasttrades, lastcontracts, topbuys, topsells, toplobbying, histcont,...",url:"/sdk/reference/stocks/gov",mdxType:"ReferenceCard"}),(0,s.kt)(o.Z,{title:"disc",description:"ulc, upcoming, lowfloat, filings, hotpenny, gtech, fipo, active, gainers, ipo, pipo, trending, losers, ugs,...",url:"/sdk/reference/stocks/disc",mdxType:"ReferenceCard"}),(0,s.kt)(o.Z,{title:"ta",description:"summary, recom",url:"/sdk/reference/stocks/ta",mdxType:"ReferenceCard"}),(0,s.kt)(o.Z,{title:"ins",description:"blcp, lit, print_insider_data, blcs, filter, lins, stats, blos, lpsb, lcb, lip, lis, act, blis, blip, blop",url:"/sdk/reference/stocks/ins",mdxType:"ReferenceCard"}),(0,s.kt)(o.Z,{title:"ba",description:"stalker, cnews, getdd, queries, mentions, ns, regions, wsb, bullbear, rise, text_sent, messages, snews,...",url:"/sdk/reference/stocks/ba",mdxType:"ReferenceCard"}),(0,s.kt)(o.Z,{title:"candle",description:"Show candle plot of loaded ticker.",url:"/sdk/reference/stocks/candle",command:"true",mdxType:"ReferenceCard"}),(0,s.kt)(o.Z,{title:"load",description:"Load a symbol to perform analysis using the string above as a template.",url:"/sdk/reference/stocks/load",command:"true",mdxType:"ReferenceCard"}),(0,s.kt)(o.Z,{title:"news",description:"Get news for a given term and source. [Source: Ultima Insights News Monitor]",url:"/sdk/reference/stocks/news",command:"true",mdxType:"ReferenceCard"}),(0,s.kt)(o.Z,{title:"process_candle",description:"Process DataFrame into candle style plot.",url:"/sdk/reference/stocks/process_candle",command:"true",mdxType:"ReferenceCard"}),(0,s.kt)(o.Z,{title:"quote",description:"Gets ticker quote from FMP",url:"/sdk/reference/stocks/quote",command:"true",mdxType:"ReferenceCard"}),(0,s.kt)(o.Z,{title:"search",description:"Search selected query for tickers.",url:"/sdk/reference/stocks/search",command:"true",mdxType:"ReferenceCard"}),(0,s.kt)(o.Z,{title:"tob",description:"Get top of book bid and ask for ticker on exchange [CBOE.com]",url:"/sdk/reference/stocks/tob",command:"true",mdxType:"ReferenceCard"})))}m.isMDXComponent=!0}}]);