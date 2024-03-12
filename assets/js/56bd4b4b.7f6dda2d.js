"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7187],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(r),h=a,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||s;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(35742);function s(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},49223:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),s=r(88828);const o={title:"hsi",description:"The hsi function returns a high short interest DataFrame. This OpenBB finance function doesn't require any parameters and provides key financial data including: Ticker, Company, Exchange, ShortInt, Float, Outstd, and Industry. Ideal for those interested in dark pool shorts and stock market data.",keywords:["hsi","high short interest DataFrame","OpenBB finance","short interest","dataframe","dark pool shorts","stock market","financial data","exchange","company","outstd","industry"]},i=void 0,c={unversionedId:"sdk/reference/stocks/dps/hsi",id:"sdk/reference/stocks/dps/hsi",title:"hsi",description:"The hsi function returns a high short interest DataFrame. This OpenBB finance function doesn't require any parameters and provides key financial data including: Ticker, Company, Exchange, ShortInt, Float, Outstd, and Industry. Ideal for those interested in dark pool shorts and stock market data.",source:"@site/content/sdk/reference/stocks/dps/hsi.md",sourceDirName:"sdk/reference/stocks/dps",slug:"/sdk/reference/stocks/dps/hsi",permalink:"/sdk/reference/stocks/dps/hsi",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/dps/hsi.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710245802,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{title:"hsi",description:"The hsi function returns a high short interest DataFrame. This OpenBB finance function doesn't require any parameters and provides key financial data including: Ticker, Company, Exchange, ShortInt, Float, Outstd, and Industry. Ideal for those interested in dark pool shorts and stock market data.",keywords:["hsi","high short interest DataFrame","OpenBB finance","short interest","dataframe","dark pool shorts","stock market","financial data","exchange","company","outstd","industry"]},sidebar:"tutorialSidebar",previous:{title:"ftd",permalink:"/sdk/reference/stocks/dps/ftd"},next:{title:"pos",permalink:"/sdk/reference/stocks/dps/pos"}},l={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}],p={toc:d},u="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(s.Z,{title:"stocks.dps.hsi - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Returns a high short interest DataFrame"),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/shortinterest_model.py#L18"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"openbb.stocks.dps.hsi()\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"This function does not take any parameters."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DataFrame"),(0,a.kt)("td",{parentName:"tr",align:null},"High short interest Dataframe with the following columns:",(0,a.kt)("br",null),"Ticker, Company, Exchange, ShortInt, Float, Outstd, Industry")))),(0,a.kt)("hr",null))}h.isMDXComponent=!0}}]);