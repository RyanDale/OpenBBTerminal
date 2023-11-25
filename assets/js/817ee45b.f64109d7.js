"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34635],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=i(r),d=a,f=c["".concat(u,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[c]="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(35742);function o(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},37837:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var n=r(87462),a=(r(67294),r(3905)),o=r(88828);const l={title:"quote",description:"Documentation on how to get forex quotes using the OpenBB Terminal. It covers the different parameters that can be used, return types and also gives example usage.",keywords:["OpenBB Terminal Documentation","Forex Quotes","Python SDK","OpenBB forex.quote function","Forex Quote Parameter Instructions","YahooFinance Forex API","AlphaVantage Forex API"]},p=void 0,u={unversionedId:"sdk/reference/forex/quote",id:"sdk/reference/forex/quote",title:"quote",description:"Documentation on how to get forex quotes using the OpenBB Terminal. It covers the different parameters that can be used, return types and also gives example usage.",source:"@site/content/sdk/reference/forex/quote.md",sourceDirName:"sdk/reference/forex",slug:"/sdk/reference/forex/quote",permalink:"/sdk/reference/forex/quote",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/forex/quote.md",tags:[],version:"current",lastUpdatedBy:"teh_coderer",lastUpdatedAt:1700872066,formattedLastUpdatedAt:"Nov 25, 2023",frontMatter:{title:"quote",description:"Documentation on how to get forex quotes using the OpenBB Terminal. It covers the different parameters that can be used, return types and also gives example usage.",keywords:["OpenBB Terminal Documentation","Forex Quotes","Python SDK","OpenBB forex.quote function","Forex Quote Parameter Instructions","YahooFinance Forex API","AlphaVantage Forex API"]},sidebar:"tutorialSidebar",previous:{title:"load",permalink:"/sdk/reference/forex/load"},next:{title:"funds",permalink:"/sdk/reference/funds/"}},i={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],c={toc:s},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"forex.quote - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Get forex quote."),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/sdk_helpers.py#L10"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},'openbb.forex.quote(symbol: str, source: str = "YahooFinance")\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Forex symbol to get quote for."),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"source"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},'Source to get quote from, by default "YahooFinance"'),(0,a.kt)("td",{parentName:"tr",align:null},"YahooFinance"),(0,a.kt)("td",{parentName:"tr",align:null},"True")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,a.kt)("td",{parentName:"tr",align:null},"DataFrame of quote data.")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from openbb_terminal.sdk import openbb\nEUR_USD_quote = openbb.forex.quote("EURUSD")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"This also supports AlphaVantage and will handle different conventions\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'EUR_USD= openbb.forex.quote("EUR/USD", source="AlphaVantage")\n')),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);