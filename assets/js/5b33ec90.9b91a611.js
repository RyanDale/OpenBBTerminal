"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34394],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=n.createContext({}),c=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(d.Provider,{value:r},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),p=a,u=m["".concat(d,".").concat(p)]||m[p]||f[p]||o;return t?n.createElement(u,i(i({ref:r},s),{},{components:t})):n.createElement(u,i({ref:r},s))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>d});var n=t(39960),a=t(86010),o=t(67294),i=t(16550),l=t(48334);function d(e){let{title:r,url:t,description:d,command:c}=e;const{pathname:s}=(0,i.TH)(),m=s.replace(/\/v\d+/,""),f=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":m.startsWith("/excel"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:t},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),f&&o.createElement(l.Z,{className:"ml-auto mr-4"})),d?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},d):null)}},80562:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var n=t(87462),a=(t(67294),t(3905)),o=t(26515);const i={},l="Forex",d={unversionedId:"terminal/reference/forex/index",id:"terminal/reference/forex/index",title:"Forex",description:"Menus",source:"@site/content/terminal/reference/forex/index.mdx",sourceDirName:"terminal/reference/forex",slug:"/terminal/reference/forex/",permalink:"/terminal/reference/forex/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/forex/index.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1709203525,formattedLastUpdatedAt:"Feb 29, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"whisper",permalink:"/terminal/reference/forecast/whisper"},next:{title:"Oanda",permalink:"/terminal/reference/forex/oanda/"}},c={},s=[{value:"Menus",id:"menus",level:3},{value:"Commands",id:"commands",level:3}],m={toc:s},f="wrapper";function p(e){let{components:r,...t}=e;return(0,a.kt)(f,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"forex"},"Forex"),(0,a.kt)("h3",{id:"menus"},"Menus"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"Oanda",description:"list, to, calendar, order, summary, cancel, positionbook, positions, pending, price, orderbook, candles, from,...",url:"/terminal/reference/forex/oanda",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Qa",description:"decompose, unitroot, qqplot, bw, hist, line, spread, skew, kurtosis, normality, summary, load, cusum, rolling,...",url:"/terminal/reference/forex/qa",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Ta",description:"sma, fisher, obv, ema, aroon, load, cci, rsi, ad, zlma, bbands, cg, adx, stoch, macd, fib, donchian",url:"/terminal/reference/forex/ta",mdxType:"ReferenceCard"})),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"Candle",description:"Show candle for loaded fx data",url:"/terminal/reference/forex/candle",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Fwd",description:"Get forward rates for loaded pair.",url:"/terminal/reference/forex/fwd",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Load",description:"Load historical exchange rate data.Available data sources are Alpha Advantage and YahooFinanceBy default main...",url:"/terminal/reference/forex/load",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Quote",description:"Get current exchange rate quote",url:"/terminal/reference/forex/quote",command:!0,mdxType:"ReferenceCard"})))}p.isMDXComponent=!0}}]);