"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33461],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>u});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),m=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=m(e.components);return o.createElement(l.Provider,{value:r},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=m(t),f=n,u=p["".concat(l,".").concat(f)]||p[f]||s[f]||a;return t?o.createElement(u,c(c({ref:r},d),{},{components:t})):o.createElement(u,c({ref:r},d))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[p]="string"==typeof e?e:n,c[1]=i;for(var m=2;m<a;m++)c[m]=t[m];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>l});var o=t(39960),n=t(86010),a=t(67294),c=t(16550),i=t(48334);function l(e){let{title:r,url:t,description:l,command:m}=e;const{pathname:d}=(0,c.TH)(),p=d.replace(/\/v\d+/,""),s=!p.includes("/reference")&&!p.includes("/widgets-library/")&&!p.includes("/data_models");return a.createElement(o.Z,{className:(0,n.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":p.startsWith("/terminal")||p.startsWith("/pro")||p.startsWith("/excel"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":p.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":p.startsWith("/sdk")||p.startsWith("/platform"),header_docs:!(p.startsWith("/terminal")||p.startsWith("/pro")||p.startsWith("/excel")||p.startsWith("/sdk")||p.startsWith("/platform")||p.startsWith("/bot"))}),to:t},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),a.createElement("div",{className:"flex items-center"},a.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),s&&a.createElement(i.Z,{className:"ml-auto mr-4"})),l?a.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},l):null)}},3582:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var o=t(87462),n=(t(67294),t(3905)),a=t(26515);const c={},i="corporate",l={unversionedId:"platform/reference/fixedincome/corporate/index",id:"platform/reference/fixedincome/corporate/index",title:"corporate",description:"Commands",source:"@site/content/platform/reference/fixedincome/corporate/index.mdx",sourceDirName:"platform/reference/fixedincome/corporate",slug:"/platform/reference/fixedincome/corporate/",permalink:"/platform/reference/fixedincome/corporate/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/fixedincome/corporate/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"sonia",permalink:"/platform/reference/fixedincome/rate/sonia"},next:{title:"commercial_paper",permalink:"/platform/reference/fixedincome/corporate/commercial_paper"}},m={},d=[{value:"Commands",id:"commands",level:3}],p={toc:d},s="wrapper";function f(e){let{components:r,...t}=e;return(0,n.kt)(s,(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"corporate"},"corporate"),(0,n.kt)("h3",{id:"commands"},"Commands"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(a.Z,{title:"Commercial Paper",description:"Commercial Paper",url:"/platform/reference/fixedincome/corporate/commercial_paper",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"Hqm",description:"High Quality Market Corporate Bond",url:"/platform/reference/fixedincome/corporate/hqm",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"Ice Bofa",description:"ICE BofA US Corporate Bond Indices",url:"/platform/reference/fixedincome/corporate/ice_bofa",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"Moody",description:"Moody Corporate Bond Index",url:"/platform/reference/fixedincome/corporate/moody",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"Spot Rates",description:"Spot Rates",url:"/platform/reference/fixedincome/corporate/spot_rates",command:!0,mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);