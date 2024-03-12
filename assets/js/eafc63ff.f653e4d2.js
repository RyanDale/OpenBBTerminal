"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71244],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=s(r),c=a,g=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return r?n.createElement(g,i(i({ref:e},u),{},{components:r})):n.createElement(g,i({ref:e},u))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},88828:(t,e,r)=>{r.d(e,{Z:()=>l});var n=r(67294),a=r(35742);function l(t){let{title:e}=t;return n.createElement(a.Z,null,n.createElement("title",null,e))}},85721:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=r(87462),a=(r(67294),r(3905)),l=r(88828);const i={title:"grhist",description:"The grhist page is dedicated to illustrating how to plot historical option greeks using Python. It includes various parameters like strike price, put option, greek column, OCC option symbol, raw data, among others. It also demonstrates the use of a certain data visualization for better understanding.",keywords:["grhist","historical option greeks plot","option greeks","put option","strike price","greek column","OCC option symbol","raw data","data visualization"]},o=void 0,p={unversionedId:"terminal/reference/stocks/options/grhist",id:"terminal/reference/stocks/options/grhist",title:"grhist",description:"The grhist page is dedicated to illustrating how to plot historical option greeks using Python. It includes various parameters like strike price, put option, greek column, OCC option symbol, raw data, among others. It also demonstrates the use of a certain data visualization for better understanding.",source:"@site/content/terminal/reference/stocks/options/grhist.md",sourceDirName:"terminal/reference/stocks/options",slug:"/terminal/reference/stocks/options/grhist",permalink:"/terminal/reference/stocks/options/grhist",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/options/grhist.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710245802,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{title:"grhist",description:"The grhist page is dedicated to illustrating how to plot historical option greeks using Python. It includes various parameters like strike price, put option, greek column, OCC option symbol, raw data, among others. It also demonstrates the use of a certain data visualization for better understanding.",keywords:["grhist","historical option greeks plot","option greeks","put option","strike price","greek column","OCC option symbol","raw data","data visualization"]},sidebar:"tutorialSidebar",previous:{title:"greeks",permalink:"/terminal/reference/stocks/options/greeks"},next:{title:"hist",permalink:"/terminal/reference/stocks/options/hist"}},s={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],m={toc:u},d="wrapper";function c(t){let{components:e,...r}=t;return(0,a.kt)(d,(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"stocks /options/grhist - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Plot historical option greeks."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"grhist [-s STRIKE] [-e EXPIRATION] [-p] [-g {iv,gamma,theta,vega,delta,rho,premium}] -c CHAIN_ID [-r] [-l LIMIT]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"strike"),(0,a.kt)("td",{parentName:"tr",align:null},"-s  --strike"),(0,a.kt)("td",{parentName:"tr",align:null},"Strike price to look at"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"expiration"),(0,a.kt)("td",{parentName:"tr",align:null},"-e  --expiration"),(0,a.kt)("td",{parentName:"tr",align:null},"The expiration date of the option. Format: YYYY-MM-DD"),(0,a.kt)("td",{parentName:"tr",align:null},"2024-03-15"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"put"),(0,a.kt)("td",{parentName:"tr",align:null},"-p  --put"),(0,a.kt)("td",{parentName:"tr",align:null},"Flag for showing put option"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"greek"),(0,a.kt)("td",{parentName:"tr",align:null},"-g  --greek"),(0,a.kt)("td",{parentName:"tr",align:null},"Greek column to select"),(0,a.kt)("td",{parentName:"tr",align:null},"delta"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"iv, gamma, theta, vega, delta, rho, premium")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"chain_id"),(0,a.kt)("td",{parentName:"tr",align:null},"-c  --chain"),(0,a.kt)("td",{parentName:"tr",align:null},"OCC option symbol"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"raw"),(0,a.kt)("td",{parentName:"tr",align:null},"-r  --raw"),(0,a.kt)("td",{parentName:"tr",align:null},"Display raw data"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"-l  --limit"),(0,a.kt)("td",{parentName:"tr",align:null},"Limit of raw data rows to display"),(0,a.kt)("td",{parentName:"tr",align:null},"20"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154278932-086a0005-be71-4493-843d-3f9100a60905.png",alt:"grhist"})),(0,a.kt)("hr",null))}c.isMDXComponent=!0}}]);