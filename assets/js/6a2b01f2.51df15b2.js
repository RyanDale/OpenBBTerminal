"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48951],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,y=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(y,l(l({ref:t},s),{},{components:r})):a.createElement(y,l({ref:t},s))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:n,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(35742);function o(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},67681:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905)),o=r(88828);const l={title:"PEERS",description:"Learn how to compare and analyze equity peers with the `obb.equity.compare.peers` function. This function allows you to retrieve a list of company peers based on symbol, sector, exchange, and market cap. Understand the parameters, returns, and data structure provided by this function.",keywords:["equity peers","company peers","compare peers","symbol","provider","parameter","returns","data","list of peers","sector","exchange","market cap","serializable results","chart object","metadata","command execution","warnings"]},p=void 0,i={unversionedId:"excel/reference/equity/compare/peers",id:"excel/reference/equity/compare/peers",title:"PEERS",description:"Learn how to compare and analyze equity peers with the `obb.equity.compare.peers` function. This function allows you to retrieve a list of company peers based on symbol, sector, exchange, and market cap. Understand the parameters, returns, and data structure provided by this function.",source:"@site/content/excel/reference/equity/compare/peers.md",sourceDirName:"excel/reference/equity/compare",slug:"/excel/reference/equity/compare/peers",permalink:"/excel/reference/equity/compare/peers",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/compare/peers.md",tags:[],version:"current",frontMatter:{title:"PEERS",description:"Learn how to compare and analyze equity peers with the `obb.equity.compare.peers` function. This function allows you to retrieve a list of company peers based on symbol, sector, exchange, and market cap. Understand the parameters, returns, and data structure provided by this function.",keywords:["equity peers","company peers","compare peers","symbol","provider","parameter","returns","data","list of peers","sector","exchange","market cap","serializable results","chart object","metadata","command execution","warnings"]},sidebar:"tutorialSidebar",previous:{title:"EQUITY.COMPARE",permalink:"/excel/reference/equity/compare/"},next:{title:"EQUITY.FUNDAMENTAL",permalink:"/excel/reference/equity/fundamental/"}},c={},s=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],u={toc:s},m="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{title:"EQUITY.COMPARE.PEERS | OpenBB Add-in for Excel Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Equity Peers. Company peers."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.EQUITY.COMPARE.PEERS(symbol,[provider])\n")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},'=OBB.EQUITY.COMPARE.PEERS("AAPL")\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"symbol")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Text")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Symbol to get data for.")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"True"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Options: fmp, defaults to fmp."),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"return-data"},"Return Data"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"peers_list"),(0,n.kt)("td",{parentName:"tr",align:null},"A list of equity peers based on sector, exchange and market cap.")))))}d.isMDXComponent=!0}}]);