"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61215],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(r),u=n,y=p["".concat(s,".").concat(u)]||p[u]||m[u]||i;return r?a.createElement(y,l(l({ref:t},d),{},{components:r})):a.createElement(y,l({ref:t},d))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(67294),n=r(35742);function i(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},18301:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),i=r(88828);const l={title:"historical_5",description:"Find how to get a 5 year monthly historical performance for a given ticker with dividends filtered using OpenBB's Python library. By analyzing ticker symbols with this method, get a detailed data analysis.",keywords:["Historical performance","5 year monthly history","Dividends","Ticker symbol","Data analysis","Source code","Fundamental analysis","Pandas DataFrame"]},o=void 0,s={unversionedId:"sdk/reference/stocks/fa/historical_5",id:"sdk/reference/stocks/fa/historical_5",title:"historical_5",description:"Find how to get a 5 year monthly historical performance for a given ticker with dividends filtered using OpenBB's Python library. By analyzing ticker symbols with this method, get a detailed data analysis.",source:"@site/content/sdk/reference/stocks/fa/historical_5.md",sourceDirName:"sdk/reference/stocks/fa",slug:"/sdk/reference/stocks/fa/historical_5",permalink:"/sdk/reference/stocks/fa/historical_5",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/fa/historical_5.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1704729450,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{title:"historical_5",description:"Find how to get a 5 year monthly historical performance for a given ticker with dividends filtered using OpenBB's Python library. By analyzing ticker symbols with this method, get a detailed data analysis.",keywords:["Historical performance","5 year monthly history","Dividends","Ticker symbol","Data analysis","Source code","Fundamental analysis","Pandas DataFrame"]},sidebar:"tutorialSidebar",previous:{title:"growth",permalink:"/sdk/reference/stocks/fa/growth"},next:{title:"income",permalink:"/sdk/reference/stocks/fa/income"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}],p={toc:d},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{title:"stocks.fa.historical_5 - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Get 5 year monthly historical performance for a ticker with dividends filtered"),(0,n.kt)("p",null,"Source Code: [",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/dcf_model.py#L275"},"link"),"]"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"openbb.stocks.fa.historical_5(symbol: str)\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"The ticker symbol to be analyzed"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,n.kt)("td",{parentName:"tr",align:null},"Historical data")))),(0,n.kt)("hr",null))}u.isMDXComponent=!0}}]);