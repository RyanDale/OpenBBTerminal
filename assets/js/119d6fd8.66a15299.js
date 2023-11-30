"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11125],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=o,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||a;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),o=r(35742);function a(e){let{title:t}=e;return n.createElement(o.Z,null,n.createElement("title",null,t))}},70886:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(87462),o=(r(67294),r(3905)),a=r(88828);const i={title:"halts",description:"Improve your trading with the '/disc halts' command, allowing you to avoid significant losses due to temporary halts. The halt code and time of any halted or pending stock at the exchange are provided at your fingertips, excluding penny stocks.",keywords:["Stock Market","Stocks","Pennystocks Exclusion","/disc halts Command","Stock Halt Code","Exchange","Stock Trading"]},s=void 0,c={unversionedId:"bot/reference/discord/discovery/halts",id:"bot/reference/discord/discovery/halts",title:"halts",description:"Improve your trading with the '/disc halts' command, allowing you to avoid significant losses due to temporary halts. The halt code and time of any halted or pending stock at the exchange are provided at your fingertips, excluding penny stocks.",source:"@site/content/bot/reference/discord/discovery/halts.md",sourceDirName:"bot/reference/discord/discovery",slug:"/bot/reference/discord/discovery/halts",permalink:"/bot/reference/discord/discovery/halts",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/discovery/halts.md",tags:[],version:"current",lastUpdatedBy:"jose-donato",lastUpdatedAt:1701348039,formattedLastUpdatedAt:"Nov 30, 2023",frontMatter:{title:"halts",description:"Improve your trading with the '/disc halts' command, allowing you to avoid significant losses due to temporary halts. The halt code and time of any halted or pending stock at the exchange are provided at your fingertips, excluding penny stocks.",keywords:["Stock Market","Stocks","Pennystocks Exclusion","/disc halts Command","Stock Halt Code","Exchange","Stock Trading"]},sidebar:"tutorialSidebar",previous:{title:"fgindex",permalink:"/bot/reference/discord/discovery/fgindex"},next:{title:"holidays",permalink:"/bot/reference/discord/discovery/holidays"}},l={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:d},u="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{title:"discovery: halts - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"This command allows the user to retrieve the time and halt code of stocks in the market, excluding penny stocks. The output of this command provides the user with the time and halt code of stock that is currently halted or in the process of being halted by the exchange."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/disc halts\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"This command has no parameters"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/disc halts\n")),(0,o.kt)("hr",null))}h.isMDXComponent=!0}}]);