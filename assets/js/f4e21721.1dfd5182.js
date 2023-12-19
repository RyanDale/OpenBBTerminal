"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65693],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},26515:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(39960),a=r(86010),i=r(67294),o=r(16550),c=r(48334);function l(e){let{title:t,url:r,description:l,command:s}=e;const{pathname:d}=(0,o.TH)(),m=d.replace(/\/v\d+/,""),p=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return i.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:r},i.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),i.createElement("div",{className:"flex items-center"},i.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),p&&i.createElement(c.Z,{className:"ml-auto mr-4"})),l?i.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},l):null)}},19912:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),i=r(26515);const o={},c="Technical Analysis",l={unversionedId:"terminal/reference/crypto/ta/index",id:"terminal/reference/crypto/ta/index",title:"Technical Analysis",description:"Commands",source:"@site/content/terminal/reference/crypto/ta/index.mdx",sourceDirName:"terminal/reference/crypto/ta",slug:"/terminal/reference/crypto/ta/",permalink:"/terminal/reference/crypto/ta/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/ta/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"stats",permalink:"/terminal/reference/crypto/nft/stats"},next:{title:"ad",permalink:"/terminal/reference/crypto/ta/ad"}},s={},d=[{value:"Commands",id:"commands",level:3}],m={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"technical-analysis"},"Technical Analysis"),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(i.Z,{title:"Ad",description:"The Accumulation/Distribution Line is similar to the On Balance Volume (OBV), which sums the volume times +1/-1...",url:"/terminal/reference/crypto/ta/ad",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Adosc",description:"Accumulation/Distribution Oscillator, also known as the Chaikin Oscillator is essentially a momentum indicator,...",url:"/terminal/reference/crypto/ta/adosc",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Adx",description:"The ADX is a Welles Wilder style moving average of the Directional Movement Index (DX). The values range from 0...",url:"/terminal/reference/crypto/ta/adx",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Aroon",description:"The word aroon is Sanskrit for 'dawn's early light.' The Aroon indicator attempts to show when a new trend is...",url:"/terminal/reference/crypto/ta/aroon",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Atr",description:"Averge True Range is used to measure volatility, especially volatility caused by gaps or limit moves.",url:"/terminal/reference/crypto/ta/atr",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Bbands",description:"Bollinger Bands consist of three lines. The middle band is a simple moving average (generally 20 periods) of the...",url:"/terminal/reference/crypto/ta/bbands",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Cci",description:"The CCI is designed to detect beginning and ending market trends. The range of 100 to -100 is the normal trading...",url:"/terminal/reference/crypto/ta/cci",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Cg",description:"The Center of Gravity indicator, in short, is used to anticipate future price movements and to trade on price...",url:"/terminal/reference/crypto/ta/cg",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Cones",description:"Calculates the realized volatility quantiles over rolling windows of time. The model for calculating volatility...",url:"/terminal/reference/crypto/ta/cones",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Demark",description:"Calculates the Demark sequential indicator.",url:"/terminal/reference/crypto/ta/demark",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Donchian",description:"Donchian Channels are three lines generated by moving average calculations that comprise an indicator formed by...",url:"/terminal/reference/crypto/ta/donchian",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Ema",description:"The Exponential Moving Average is a staple of technical analysis and is used in countless technical indicators....",url:"/terminal/reference/crypto/ta/ema",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Fib",description:"Calculates the fibonacci retracement levels",url:"/terminal/reference/crypto/ta/fib",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Fisher",description:"The Fisher Transform is a technical indicator created by John F. Ehlers that converts prices into a Gaussian...",url:"/terminal/reference/crypto/ta/fisher",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Hma",description:"The Hull Moving Average solves the age old dilemma of making a moving average more responsive to current price...",url:"/terminal/reference/crypto/ta/hma",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Kc",description:"Keltner Channels are volatility-based bands that are placed on either side of an asset's price and can aid in...",url:"/terminal/reference/crypto/ta/kc",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Load",description:"Load crypto currency to perform analysis on. Yahoo Finance is used as default source. Other sources can be used...",url:"/terminal/reference/crypto/ta/load",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Macd",description:"The Moving Average Convergence Divergence (MACD) is the difference between two Exponential Moving Averages. The...",url:"/terminal/reference/crypto/ta/macd",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Obv",description:"The On Balance Volume (OBV) is a cumulative total of the up and down volume. When the close is higher than the...",url:"/terminal/reference/crypto/ta/obv",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Rsi",description:"The Relative Strength Index (RSI) calculates a ratio of the recent upward price movements to the absolute price...",url:"/terminal/reference/crypto/ta/rsi",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Sma",description:"Moving Averages are used to smooth the data in an array to help eliminate noise and identify trends. The Simple...",url:"/terminal/reference/crypto/ta/sma",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Stoch",description:"The Stochastic Oscillator measures where the close is in relation to the recent trading range. The values range...",url:"/terminal/reference/crypto/ta/stoch",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Tv",description:"View TradingView for technical analysis. [Source: TradingView]",url:"/terminal/reference/crypto/ta/tv",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Vwap",description:"The Volume Weighted Average Price that measures the average typical price by volume. It is typically used with...",url:"/terminal/reference/crypto/ta/vwap",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Wma",description:"A Weighted Moving Average puts more weight on recent data and less on past data. This is done by multiplying each...",url:"/terminal/reference/crypto/ta/wma",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Zlma",description:"The zero lag exponential moving average (ZLEMA) indicator was created by John Ehlers and Ric Way. The idea is do...",url:"/terminal/reference/crypto/ta/zlma",command:!0,mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);