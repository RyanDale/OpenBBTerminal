"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83030],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),i=n(35742);function o(e){let{title:t}=e;return r.createElement(i.Z,null,r.createElement("title",null,t))}},27632:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905)),o=n(88828);const a={title:"instholdings",description:"This page provides details on the instholdings command which retrieves the top 15 institutional holdings for a given stock, as reported to the United States Securities and Exchange Commission.",keywords:["instholdings command","institutional holdings","stock","United States Securities and Exchange Commission","SEC","stock ticker"]},l=void 0,s={unversionedId:"bot/reference/discord/duedilligence/instholdings",id:"bot/reference/discord/duedilligence/instholdings",title:"instholdings",description:"This page provides details on the instholdings command which retrieves the top 15 institutional holdings for a given stock, as reported to the United States Securities and Exchange Commission.",source:"@site/content/bot/reference/discord/duedilligence/instholdings.md",sourceDirName:"bot/reference/discord/duedilligence",slug:"/bot/reference/discord/duedilligence/instholdings",permalink:"/bot/reference/discord/duedilligence/instholdings",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/duedilligence/instholdings.md",tags:[],version:"current",lastUpdatedBy:"Theodore Aptekarev",lastUpdatedAt:1701637004,formattedLastUpdatedAt:"Dec 3, 2023",frontMatter:{title:"instholdings",description:"This page provides details on the instholdings command which retrieves the top 15 institutional holdings for a given stock, as reported to the United States Securities and Exchange Commission.",keywords:["instholdings command","institutional holdings","stock","United States Securities and Exchange Commission","SEC","stock ticker"]},sidebar:"tutorialSidebar",previous:{title:"insiders",permalink:"/bot/reference/discord/duedilligence/insiders"},next:{title:"nexter",permalink:"/bot/reference/discord/duedilligence/nexter"}},d={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{title:"duedilligence: instholdings - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,i.kt)("p",null,"This command allows the user to retrieve the top 15 institutional holdings for a given stock. This list is retrieved from the most recent available institutional holdings reported to the United States Securities and Exchange Commission."),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/dd instholdings ticker\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Optional"),(0,i.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ticker"),(0,i.kt)("td",{parentName:"tr",align:null},"Stock Ticker"),(0,i.kt)("td",{parentName:"tr",align:null},"False"),(0,i.kt)("td",{parentName:"tr",align:null},"None")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/dd instholdings ticker:AMD\n")),(0,i.kt)("hr",null))}m.isMDXComponent=!0}}]);