"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70890],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),d=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=d(e.components);return n.createElement(i.Provider,{value:r},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=d(t),f=a,u=m["".concat(i,".").concat(f)]||m[f]||p[f]||c;return t?n.createElement(u,o(o({ref:r},l),{},{components:t})):n.createElement(u,o({ref:r},l))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=f;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<c;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(39960),a=t(86010),c=t(67294),o=t(16550),s=t(48334);function i(e){let{title:r,url:t,description:i,command:d}=e;const{pathname:l}=(0,o.TH)(),m=l.replace(/\/v\d+/,""),p=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return c.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":m.startsWith("/excel"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:t},c.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),c.createElement("div",{className:"flex items-center"},c.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),p&&c.createElement(s.Z,{className:"ml-auto mr-4"})),i?c.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},i):null)}},33588:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(87462),a=(t(67294),t(3905)),c=t(26515);const o={},s="ca",i={unversionedId:"sdk/reference/stocks/ca/index",id:"sdk/reference/stocks/ca/index",title:"ca",description:"Commands",source:"@site/content/sdk/reference/stocks/ca/index.mdx",sourceDirName:"sdk/reference/stocks/ca",slug:"/sdk/reference/stocks/ca/",permalink:"/sdk/reference/stocks/ca/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/ca/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"supplier",permalink:"/sdk/reference/stocks/fa/supplier"},next:{title:"balance",permalink:"/sdk/reference/stocks/ca/balance"}},d={},l=[{value:"Commands",id:"commands",level:3}],m={toc:l},p="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ca"},"ca"),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(c.Z,{title:"Balance",description:"Get balance data. [Source: Marketwatch].",url:"/sdk/reference/stocks/ca/balance",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Cashflow",description:"Get cashflow data. [Source: Marketwatch]",url:"/sdk/reference/stocks/ca/cashflow",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Hcorr",description:"Get historical price correlation. [Source: Yahoo Finance]",url:"/sdk/reference/stocks/ca/hcorr",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Hist",description:"Get historical prices for all comparison stocks",url:"/sdk/reference/stocks/ca/hist",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Income",description:"Get income data. [Source: Marketwatch].",url:"/sdk/reference/stocks/ca/income",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Scorr",description:"Get correlation sentiments across similar companies. [Source: FinBrain].",url:"/sdk/reference/stocks/ca/scorr",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Screener",description:"Screener Overview.",url:"/sdk/reference/stocks/ca/screener",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Sentiment",description:"Gets Sentiment analysis from several symbols provided by FinBrain's API.",url:"/sdk/reference/stocks/ca/sentiment",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Similar",description:"Find similar tickers to a given symbol.",url:"/sdk/reference/stocks/ca/similar",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Volume",description:"Get stock volume. [Source: Yahoo Finance]",url:"/sdk/reference/stocks/ca/volume",command:!0,mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);