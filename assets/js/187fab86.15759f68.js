"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92278],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),c=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=c(r),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?a.createElement(f,o(o({ref:e},u),{},{components:r})):a.createElement(f,o({ref:e},u))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[p]="string"==typeof t?t:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(t,e,r)=>{r.d(e,{Z:()=>i});var a=r(67294),n=r(35742);function i(t){let{title:e}=t;return a.createElement(n.Z,null,a.createElement("title",null,e))}},51998:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=r(87462),n=(r(67294),r(3905)),i=r(88828);const o={title:"histcont",description:"The histcont page is part of Quiver Quant's website and deals with quarterly-contracts historical data. Here you'll find information about parameters, usages, and data visualizations.",keywords:["histcont","Quiver Quant","historical contracts","raw data","data visualization"]},l=void 0,s={unversionedId:"terminal/reference/stocks/gov/histcont",id:"terminal/reference/stocks/gov/histcont",title:"histcont",description:"The histcont page is part of Quiver Quant's website and deals with quarterly-contracts historical data. Here you'll find information about parameters, usages, and data visualizations.",source:"@site/content/terminal/reference/stocks/gov/histcont.md",sourceDirName:"terminal/reference/stocks/gov",slug:"/terminal/reference/stocks/gov/histcont",permalink:"/terminal/reference/stocks/gov/histcont",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/gov/histcont.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1704729450,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{title:"histcont",description:"The histcont page is part of Quiver Quant's website and deals with quarterly-contracts historical data. Here you'll find information about parameters, usages, and data visualizations.",keywords:["histcont","Quiver Quant","historical contracts","raw data","data visualization"]},sidebar:"tutorialSidebar",previous:{title:"gtrades",permalink:"/terminal/reference/stocks/gov/gtrades"},next:{title:"lastcontracts",permalink:"/terminal/reference/stocks/gov/lastcontracts"}},c={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:u},d="wrapper";function m(t){let{components:e,...r}=t;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{title:"stocks /gov/histcont - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Quarterly-contracts historical ","[Source: www.quiverquant.com]"),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"histcont [--raw]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"raw"),(0,n.kt)("td",{parentName:"tr",align:null},"--raw"),(0,n.kt)("td",{parentName:"tr",align:null},"Print raw data."),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154263545-a210b65d-5dac-45df-b378-692563a5c950.png",alt:"histcont"})),(0,n.kt)("hr",null))}m.isMDXComponent=!0}}]);