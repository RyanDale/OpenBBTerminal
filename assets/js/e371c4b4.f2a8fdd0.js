"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25229],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(35742);function o(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},87685:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),o=r(88828);const s={title:"sectors",description:"This page provides guidelines for using the 'sectors' command to retrieve a summary of all flows by MarketCap percentage per sector over the specified number of past days. The command allows you to filter by selected sectors such as Basic Materials, Energy and Communication Services among others.",keywords:["sectors","flows","MarketCap","filtering","Basic Materials","Energy","Communication Services","Consumer Cyclical","Consumer Defensive","Financial","Healthcare","Industrials","Real Estate","Technology","Utilities"]},l=void 0,i={unversionedId:"bot/reference/discord/flow/sectors",id:"bot/reference/discord/flow/sectors",title:"sectors",description:"This page provides guidelines for using the 'sectors' command to retrieve a summary of all flows by MarketCap percentage per sector over the specified number of past days. The command allows you to filter by selected sectors such as Basic Materials, Energy and Communication Services among others.",source:"@site/content/bot/reference/discord/flow/sectors.md",sourceDirName:"bot/reference/discord/flow",slug:"/bot/reference/discord/flow/sectors",permalink:"/bot/reference/discord/flow/sectors",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/flow/sectors.md",tags:[],version:"current",frontMatter:{title:"sectors",description:"This page provides guidelines for using the 'sectors' command to retrieve a summary of all flows by MarketCap percentage per sector over the specified number of past days. The command allows you to filter by selected sectors such as Basic Materials, Energy and Communication Services among others.",keywords:["sectors","flows","MarketCap","filtering","Basic Materials","Energy","Communication Services","Consumer Cyclical","Consumer Defensive","Financial","Healthcare","Industrials","Real Estate","Technology","Utilities"]},sidebar:"tutorialSidebar",previous:{title:"prem",permalink:"/bot/reference/discord/flow/prem"},next:{title:"sumday",permalink:"/bot/reference/discord/flow/sumday"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],m={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"flow: sectors - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"This command retrieves a summary of all flows by MarketCap percentage per sector over the past x days."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/flow sectors days sector\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"days"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of days to look back"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sector"),(0,a.kt)("td",{parentName:"tr",align:null},"Sector to filter by"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"Basic Materials (BM), Energy (E), Communication Services (CS), Consumer Cyclical (CC), Consumer Defensive (CD), Financial (F), Healthcare (H), Industrials (I), Real Estate (RE), Technology (T), Utilities (U)")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/flow sectors days:5 sector:Energy\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/flow sectors days:2 sector:Communication Services\n")),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);