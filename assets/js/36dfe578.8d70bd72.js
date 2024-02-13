"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75928],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(r),h=o,m=p["".concat(i,".").concat(h)]||p[h]||u[h]||a;return r?n.createElement(m,s(s({ref:t},d),{},{components:r})):n.createElement(m,s({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),o=r(35742);function a(e){let{title:t}=e;return n.createElement(o.Z,null,n.createElement("title",null,t))}},59758:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=r(87462),o=(r(67294),r(3905)),a=r(88828);const s={title:"shorted",description:"The page provides details about the 'shorted' function of OpenBBTerminal which shows the most shorted stocks according to Yahoo Finance. Details include the source code and parameters, if any.",keywords:["shorted","stock screener","Yahoo Finance","OpenBB finance","stocks","dark pool shorts","yahoofinance model"]},c=void 0,i={unversionedId:"sdk/reference/stocks/dps/shorted",id:"sdk/reference/stocks/dps/shorted",title:"shorted",description:"The page provides details about the 'shorted' function of OpenBBTerminal which shows the most shorted stocks according to Yahoo Finance. Details include the source code and parameters, if any.",source:"@site/content/sdk/reference/stocks/dps/shorted.md",sourceDirName:"sdk/reference/stocks/dps",slug:"/sdk/reference/stocks/dps/shorted",permalink:"/sdk/reference/stocks/dps/shorted",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/dps/shorted.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1707846532,formattedLastUpdatedAt:"Feb 13, 2024",frontMatter:{title:"shorted",description:"The page provides details about the 'shorted' function of OpenBBTerminal which shows the most shorted stocks according to Yahoo Finance. Details include the source code and parameters, if any.",keywords:["shorted","stock screener","Yahoo Finance","OpenBB finance","stocks","dark pool shorts","yahoofinance model"]},sidebar:"tutorialSidebar",previous:{title:"psi_sg",permalink:"/sdk/reference/stocks/dps/psi_sg"},next:{title:"sidtc",permalink:"/sdk/reference/stocks/dps/sidtc"}},l={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}],p={toc:d},u="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{title:"stocks.dps.shorted - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"Get most shorted stock screener ","[Source: Yahoo Finance]"),(0,o.kt)("p",null,"Source Code: [",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/yahoofinance_model.py#L16"},"link"),"]"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"openbb.stocks.dps.shorted()\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"This function does not take any parameters."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"returns"},"Returns"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,o.kt)("td",{parentName:"tr",align:null},"Most Shorted Stocks")))),(0,o.kt)("hr",null))}h.isMDXComponent=!0}}]);