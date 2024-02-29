"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[95645],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(r),p=n,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||i;return r?a.createElement(f,o(o({ref:t},d),{},{components:r})):a.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},26515:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(39960),n=r(86010),i=r(67294),o=r(16550),l=r(48334);function s(e){let{title:t,url:r,description:s,command:c}=e;const{pathname:d}=(0,o.TH)(),m=d.replace(/\/v\d+/,""),u=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return i.createElement(a.Z,{className:(0,n.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":m.startsWith("/excel"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:r},i.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),i.createElement("div",{className:"flex items-center"},i.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),u&&i.createElement(l.Z,{className:"ml-auto mr-4"})),s?i.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},s):null)}},94435:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),i=r(26515);const o={},l="Quantitative",s={unversionedId:"platform/reference/quantitative/index",id:"platform/reference/quantitative/index",title:"Quantitative",description:"Menus",source:"@site/content/platform/reference/quantitative/index.mdx",sourceDirName:"platform/reference/quantitative",slug:"/platform/reference/quantitative/",permalink:"/platform/reference/quantitative/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/quantitative/index.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1709203525,formattedLastUpdatedAt:"Feb 29, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"sectors",permalink:"/platform/reference/etf/sectors"},next:{title:"Stats",permalink:"/platform/reference/quantitative/stats/"}},c={},d=[{value:"Menus",id:"menus",level:3},{value:"Commands",id:"commands",level:3}],m={toc:d},u="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"quantitative"},"Quantitative"),(0,n.kt)("h3",{id:"menus"},"Menus"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(i.Z,{title:"Stats",description:"variance, mean, stdev, skew, kurtosis, quantile",url:"/platform/reference/quantitative/stats",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Rolling",description:"variance, mean, stdev, skew, kurtosis, quantile",url:"/platform/reference/quantitative/rolling",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Performance",description:"omega_ratio, sortino_ratio, sharpe_ratio",url:"/platform/reference/quantitative/performance",mdxType:"ReferenceCard"})),(0,n.kt)("h3",{id:"commands"},"Commands"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(i.Z,{title:"normality",description:"Get Normality Statistics",url:"/platform/reference/quantitative/normality",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"summary",description:"Get Summary Statistics",url:"/platform/reference/quantitative/summary",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"capm",description:"Get Capital Asset Pricing Model (CAPM)",url:"/platform/reference/quantitative/capm",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"unitroot test",description:"Get Unit Root Test",url:"/platform/reference/quantitative/unitroot_test",mdxType:"ReferenceCard"})))}p.isMDXComponent=!0}}]);