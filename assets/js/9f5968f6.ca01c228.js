"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5885],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),c=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=c(e.components);return o.createElement(s.Provider,{value:r},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},b=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(t),b=n,f=m["".concat(s,".").concat(b)]||m[b]||p[b]||i;return t?o.createElement(f,a(a({ref:r},d),{},{components:t})):o.createElement(f,a({ref:r},d))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=b;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[m]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}b.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>s});var o=t(39960),n=t(86010),i=t(67294),a=t(16550),l=t(48334);function s(e){let{title:r,url:t,description:s,command:c}=e;const{pathname:d}=(0,a.TH)(),m=d.replace(/\/v\d+/,""),p=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return i.createElement(o.Z,{className:(0,n.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":m.startsWith("/excel"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:t},i.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),i.createElement("div",{className:"flex items-center"},i.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),p&&i.createElement(l.Z,{className:"ml-auto mr-4"})),s?i.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},s):null)}},7610:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=t(87462),n=(t(67294),t(3905)),i=t(26515);const a={},l="Robinhood",s={unversionedId:"terminal/reference/portfolio/brokers/robinhood/index",id:"terminal/reference/portfolio/brokers/robinhood/index",title:"Robinhood",description:"Commands",source:"@site/content/terminal/reference/portfolio/brokers/robinhood/index.mdx",sourceDirName:"terminal/reference/portfolio/brokers/robinhood",slug:"/terminal/reference/portfolio/brokers/robinhood/",permalink:"/terminal/reference/portfolio/brokers/robinhood/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/portfolio/brokers/robinhood/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"update",permalink:"/terminal/reference/portfolio/brokers/degiro/update"},next:{title:"history",permalink:"/terminal/reference/portfolio/brokers/robinhood/history"}},c={},d=[{value:"Commands",id:"commands",level:3}],m={toc:d},p="wrapper";function b(e){let{components:r,...t}=e;return(0,n.kt)(p,(0,o.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"robinhood"},"Robinhood"),(0,n.kt)("h3",{id:"commands"},"Commands"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(i.Z,{title:"History",description:"Historical Portfolio Info",url:"/terminal/reference/portfolio/brokers/robinhood/history",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Holdings",description:"Display info about your trading accounts on Robinhood",url:"/terminal/reference/portfolio/brokers/robinhood/holdings",command:!0,mdxType:"ReferenceCard"})))}b.isMDXComponent=!0}}]);