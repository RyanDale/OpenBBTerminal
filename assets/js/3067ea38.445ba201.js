"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31549],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(r),f=n,u=p["".concat(c,".").concat(f)]||p[f]||m[f]||a;return r?o.createElement(u,l(l({ref:t},d),{},{components:r})):o.createElement(u,l({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},26515:(e,t,r)=>{r.d(t,{Z:()=>c});var o=r(39960),n=r(86010),a=r(67294),l=r(16550),i=r(48334);function c(e){let{title:t,url:r,description:c,command:s}=e;const{pathname:d}=(0,l.TH)(),p=d.replace(/\/v\d+/,""),m=!p.includes("/reference")&&!p.includes("/widgets-library/")&&!p.includes("/data_models");return a.createElement(o.Z,{className:(0,n.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":p.startsWith("/terminal")||p.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":p.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":p.startsWith("/sdk")||p.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":p.startsWith("/excel"),header_docs:!(p.startsWith("/terminal")||p.startsWith("/pro")||p.startsWith("/excel")||p.startsWith("/sdk")||p.startsWith("/platform")||p.startsWith("/bot"))}),to:r},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),a.createElement("div",{className:"flex items-center"},a.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),m&&a.createElement(i.Z,{className:"ml-auto mr-4"})),c?a.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},c):null)}},57953:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var o=r(87462),n=(r(67294),r(3905)),a=r(26515);const l={},i="alloc",c={unversionedId:"sdk/reference/portfolio/alloc/index",id:"sdk/reference/portfolio/alloc/index",title:"alloc",description:"Commands",source:"@site/content/sdk/reference/portfolio/alloc/index.mdx",sourceDirName:"sdk/reference/portfolio/alloc",slug:"/sdk/reference/portfolio/alloc/",permalink:"/sdk/reference/portfolio/alloc/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/alloc/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"volatility",permalink:"/sdk/reference/portfolio/metric/volatility"},next:{title:"assets",permalink:"/sdk/reference/portfolio/alloc/assets"}},s={},d=[{value:"Commands",id:"commands",level:3}],p={toc:d},m="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"alloc"},"alloc"),(0,n.kt)("h3",{id:"commands"},"Commands"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(a.Z,{title:"Assets",description:"Display portfolio asset allocation compared to the benchmark",url:"/sdk/reference/portfolio/alloc/assets",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"Countries",description:"Display portfolio country allocation compared to the benchmark",url:"/sdk/reference/portfolio/alloc/countries",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"Regions",description:"Display portfolio region allocation compared to the benchmark",url:"/sdk/reference/portfolio/alloc/regions",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"Sectors",description:"Display portfolio sector allocation compared to the benchmark",url:"/sdk/reference/portfolio/alloc/sectors",command:!0,mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);