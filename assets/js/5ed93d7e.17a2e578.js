"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17163],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(r),u=o,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||n;return r?a.createElement(m,s(s({ref:t},p),{},{components:r})):a.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<n;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(67294),o=r(35742);function n(e){let{title:t}=e;return a.createElement(o.Z,null,a.createElement("title",null,t))}},97433:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=r(87462),o=(r(67294),r(3905)),n=r(88828);const s={title:"shortrate",description:"A comprehensive guide to using the shortrate command to check Interactive Brokers' Display Short Shares spot borrow rates. Helps users make informed decisions about short selling activities.",keywords:["shortrate command","Interactive Brokers","spot borrow rates","short selling","Display Short Shares","stock ticker","shortrate usage","shortrate examples"]},i=void 0,l={unversionedId:"bot/reference/discord/short_data/shortrate",id:"bot/reference/discord/short_data/shortrate",title:"shortrate",description:"A comprehensive guide to using the shortrate command to check Interactive Brokers' Display Short Shares spot borrow rates. Helps users make informed decisions about short selling activities.",source:"@site/content/bot/reference/discord/short_data/shortrate.md",sourceDirName:"bot/reference/discord/short_data",slug:"/bot/reference/discord/short_data/shortrate",permalink:"/bot/reference/discord/short_data/shortrate",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/short_data/shortrate.md",tags:[],version:"current",frontMatter:{title:"shortrate",description:"A comprehensive guide to using the shortrate command to check Interactive Brokers' Display Short Shares spot borrow rates. Helps users make informed decisions about short selling activities.",keywords:["shortrate command","Interactive Brokers","spot borrow rates","short selling","Display Short Shares","stock ticker","shortrate usage","shortrate examples"]},sidebar:"tutorialSidebar",previous:{title:"hsi",permalink:"/bot/reference/discord/short_data/hsi"},next:{title:"shortvol",permalink:"/bot/reference/discord/short_data/shortvol"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],h={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(n.Z,{title:"short_data: shortrate - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"This command allows the user to retrieve the Display Short Shares spot borrow rate from Interactive Brokers for the given ticker. The spot borrow rate is the rate at which a user may borrow shares from the broker in order to short sell the security. This command allows the user to check the current rate and make more informed decisions about their short selling activities."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/sh shortrate ticker\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"),(0,o.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ticker"),(0,o.kt)("td",{parentName:"tr",align:null},"Stock Ticker"),(0,o.kt)("td",{parentName:"tr",align:null},"False"),(0,o.kt)("td",{parentName:"tr",align:null},"None")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/sh shortrate ticker:AMD\n")),(0,o.kt)("hr",null))}u.isMDXComponent=!0}}]);