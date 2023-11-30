"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78933],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,f=m["".concat(l,".").concat(p)]||m[p]||u[p]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[m]="string"==typeof e?e:a,o[1]=d;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(35742);function i(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},26515:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(39960),a=n(86010),i=n(67294),o=n(16550),d=n(48334);function l(e){let{title:t,url:n,description:l,command:s}=e;const{pathname:c}=(0,o.TH)(),m=c.replace(/\/v\d+/,""),u=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return i.createElement(r.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:n},i.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),i.createElement("div",{className:"flex items-center"},i.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),u&&i.createElement(d.Z,{className:"ml-auto mr-4"})),l?i.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},l):null)}},3903:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>d,metadata:()=>s,toc:()=>m});var r=n(87462),a=(n(67294),n(3905)),i=n(26515),o=n(88828);const d={title:"Data Available"},l=void 0,s={unversionedId:"terminal/menus/index",id:"terminal/menus/index",title:"Data Available",description:"<NewReferenceCard",source:"@site/content/terminal/menus/index.mdx",sourceDirName:"terminal/menus",slug:"/terminal/menus/",permalink:"/terminal/menus/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/menus/index.mdx",tags:[],version:"current",lastUpdatedBy:"jose-donato",lastUpdatedAt:1701348039,formattedLastUpdatedAt:"Nov 30, 2023",frontMatter:{title:"Data Available"},sidebar:"tutorialSidebar",previous:{title:"Keyboard Hotkey Macros",permalink:"/terminal/usage/keyboard-hotkey-macros"},next:{title:"Introduction",permalink:"/terminal/menus/stocks/"}},c={},m=[],u={toc:m},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"Menus | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("ul",{className:"grid grid-cols-1 gap-4 -ml-6"},(0,a.kt)(i.Z,{title:"Stocks",description:"Understand what Stocks data you can find in the OpenBB Terminal",url:"menus/stocks",mdxType:"NewReferenceCard"}),(0,a.kt)(i.Z,{title:"Crypto",description:"Understand what Crypto data you can find in the OpenBB Terminal",url:"menus/crypto",mdxType:"NewReferenceCard"}),(0,a.kt)(i.Z,{title:"Common",description:"Understand what Common data you can find in the OpenBB Terminal",url:"menus/common",mdxType:"NewReferenceCard"}),(0,a.kt)(i.Z,{title:"Econometrics",description:"Understand what Econometrics data you can find in the OpenBB Terminal",url:"menus/econometrics",mdxType:"NewReferenceCard"}),(0,a.kt)(i.Z,{title:"Economy",description:"Understand what Economy data you can find in the OpenBB Terminal",url:"menus/economy",mdxType:"NewReferenceCard"}),(0,a.kt)(i.Z,{title:"ETF",description:"Understand what ETF data you can find in the OpenBB Terminal",url:"menus/etf",mdxType:"NewReferenceCard"}),(0,a.kt)(i.Z,{title:"Fixed Income",description:"Understand what Fixed Income data you can find in the OpenBB Terminal",url:"menus/fixedincome",mdxType:"NewReferenceCard"}),(0,a.kt)(i.Z,{title:"Forecast",description:"Understand what Forecast data you can find in the OpenBB Terminal",url:"menus/forecast",mdxType:"NewReferenceCard"}),(0,a.kt)(i.Z,{title:"Forex",description:"Understand what Forex data you can find in the OpenBB Terminal",url:"menus/forex",mdxType:"NewReferenceCard"}),(0,a.kt)(i.Z,{title:"Futures",description:"Understand what Futures data you can find in the OpenBB Terminal",url:"menus/futures",mdxType:"NewReferenceCard"}),(0,a.kt)(i.Z,{title:"Alternative",description:"Understand what Alternative data you can find in the OpenBB Terminal",url:"menus/alternative",mdxType:"NewReferenceCard"}),(0,a.kt)(i.Z,{title:"Mutual Funds",description:"Understand what Mutual Funds data you can find in the OpenBB Terminal",url:"menus/mutualfunds",mdxType:"NewReferenceCard"})))}f.isMDXComponent=!0}}]);