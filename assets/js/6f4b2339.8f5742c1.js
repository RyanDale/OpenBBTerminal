"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38710],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,u=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(u,i(i({ref:t},l),{},{components:r})):n.createElement(u,i({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[m]="string"==typeof e?e:a,i[1]=d;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},26515:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(39960),a=r(86010),o=r(67294),i=r(16550),d=r(48334);function c(e){let{title:t,url:r,description:c,command:s}=e;const{pathname:l}=(0,i.TH)(),m=l.replace(/\/v\d+/,""),p=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:r},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),p&&o.createElement(d.Z,{className:"ml-auto mr-4"})),c?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},c):null)}},72776:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905)),o=r(26515);const i={},d="ta",c={unversionedId:"sdk/reference/ta/index",id:"sdk/reference/ta/index",title:"ta",description:"Commands",source:"@site/content/sdk/reference/ta/index.mdx",sourceDirName:"sdk/reference/ta",slug:"/sdk/reference/ta/",permalink:"/sdk/reference/ta/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/ta/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"vif",permalink:"/sdk/reference/econometrics/vif"},next:{title:"ad",permalink:"/sdk/reference/ta/ad"}},s={},l=[{value:"Commands",id:"commands",level:3}],m={toc:l},p="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ta"},"ta"),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"Ad",description:"Calculate AD technical indicator",url:"/sdk/reference/ta/ad",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Adosc",description:"Calculate AD oscillator technical indicator",url:"/sdk/reference/ta/adosc",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Adx",description:"ADX technical indicator",url:"/sdk/reference/ta/adx",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Aroon",description:"Aroon technical indicator",url:"/sdk/reference/ta/aroon",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Atr",description:"Average True Range",url:"/sdk/reference/ta/atr",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Bbands",description:"Calculate Bollinger Bands",url:"/sdk/reference/ta/bbands",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Cci",description:"Commodity channel index",url:"/sdk/reference/ta/cci",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Cg",description:"Center of gravity",url:"/sdk/reference/ta/cg",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Clenow",description:"Gets the Clenow Volatility Adjusted Momentum. this is defined as the regression coefficient on log prices",url:"/sdk/reference/ta/clenow",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Cones",description:"Returns a DataFrame of realized volatility quantiles.",url:"/sdk/reference/ta/cones",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Demark",description:"Get the integer value for demark sequential indicator",url:"/sdk/reference/ta/demark",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Donchian",description:"Calculate Donchian Channels",url:"/sdk/reference/ta/donchian",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Ema",description:"Gets exponential moving average (EMA) for stock",url:"/sdk/reference/ta/ema",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Fib",description:"Calculate Fibonacci levels",url:"/sdk/reference/ta/fib",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Fisher",description:"Fisher Transform",url:"/sdk/reference/ta/fisher",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Hma",description:"Gets hull moving average (HMA) for stock",url:"/sdk/reference/ta/hma",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Kc",description:"Keltner Channels",url:"/sdk/reference/ta/kc",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Ma",description:"Plots MA technical indicator",url:"/sdk/reference/ta/ma",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Macd",description:"Moving average convergence divergence",url:"/sdk/reference/ta/macd",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Obv",description:"On Balance Volume",url:"/sdk/reference/ta/obv",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Rsi",description:"Relative strength index",url:"/sdk/reference/ta/rsi",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Rvol Garman Klass",description:"Garman-Klass volatility extends Parkinson volatility by taking into account the opening and closing price.",url:"/sdk/reference/ta/rvol_garman_klass",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Rvol Hodges Tompkins",description:"Hodges-Tompkins volatility is a bias correction for estimation using an overlapping data sample.",url:"/sdk/reference/ta/rvol_hodges_tompkins",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Rvol Parkinson",description:"Parkinson volatility uses the high and low price of the day rather than just close to close prices.",url:"/sdk/reference/ta/rvol_parkinson",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Rvol Rogers Satchell",description:"Rogers-Satchell is an estimator for measuring the volatility with an average return not equal to zero.",url:"/sdk/reference/ta/rvol_rogers_satchell",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Rvol Std",description:"Standard deviation measures how widely returns are dispersed from the average return.",url:"/sdk/reference/ta/rvol_std",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Rvol Yang Zhang",description:"Yang-Zhang volatility is the combination of the overnight (close-to-open volatility).",url:"/sdk/reference/ta/rvol_yang_zhang",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Sma",description:"Gets simple moving average (SMA) for stock",url:"/sdk/reference/ta/sma",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Standard Deviation",description:"Standard deviation measures how widely returns are dispersed from the average return.",url:"/sdk/reference/ta/standard_deviation",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Stoch",description:"Stochastic oscillator",url:"/sdk/reference/ta/stoch",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Vwap",description:"Gets volume weighted average price (VWAP)",url:"/sdk/reference/ta/vwap",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Wma",description:"Gets weighted moving average (WMA) for stock",url:"/sdk/reference/ta/wma",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Zlma",description:"Gets zero-lagged exponential moving average (ZLEMA) for stock",url:"/sdk/reference/ta/zlma",command:!0,mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);