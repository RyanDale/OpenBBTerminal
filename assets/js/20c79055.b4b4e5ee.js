"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90985],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(35742);function l(e){let{title:t}=e;return a.createElement(r.Z,null,a.createElement("title",null,t))}},54866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),l=n(88828);const o={title:"townsales",description:"Select the town and date range you want to see sold house price data for",keywords:["alt.realestate","townsales"]},i=void 0,s={unversionedId:"terminal/reference/alt/realestate/townsales",id:"terminal/reference/alt/realestate/townsales",title:"townsales",description:"Select the town and date range you want to see sold house price data for",source:"@site/content/terminal/reference/alt/realestate/townsales.md",sourceDirName:"terminal/reference/alt/realestate",slug:"/terminal/reference/alt/realestate/townsales",permalink:"/terminal/reference/alt/realestate/townsales",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/alt/realestate/townsales.md",tags:[],version:"current",frontMatter:{title:"townsales",description:"Select the town and date range you want to see sold house price data for",keywords:["alt.realestate","townsales"]},sidebar:"tutorialSidebar",previous:{title:"sales",permalink:"/terminal/reference/alt/realestate/sales"},next:{title:"hn",permalink:"/terminal/reference/alt/hn"}},p={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],d={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{title:"alt /realestate/townsales - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Select the town and date range you want to see sold house price data for. ","[Source: UK Land Registry]"),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"townsales -t town [-s startdate] [-e enddate] [-l limit]\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"town"),(0,r.kt)("td",{parentName:"tr",align:null},"-t  --town"),(0,r.kt)("td",{parentName:"tr",align:null},"Town that we want sales information for"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"startdate"),(0,r.kt)("td",{parentName:"tr",align:null},"-s  --startdate"),(0,r.kt)("td",{parentName:"tr",align:null},"Start date that we want sales information for"),(0,r.kt)("td",{parentName:"tr",align:null},"2022-11-03"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enddate"),(0,r.kt)("td",{parentName:"tr",align:null},"-e  --enddate"),(0,r.kt)("td",{parentName:"tr",align:null},"End date that we want sales information for"),(0,r.kt)("td",{parentName:"tr",align:null},"2023-11-03"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"-l  --limit"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of entries to return"),(0,r.kt)("td",{parentName:"tr",align:null},"25"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null))}m.isMDXComponent=!0}}]);