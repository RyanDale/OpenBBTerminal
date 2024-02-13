"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57250],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=o,f=m["".concat(i,".").concat(u)]||m[u]||p[u]||a;return t?n.createElement(f,c(c({ref:r},d),{},{components:t})):n.createElement(f,c({ref:r},d))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=u;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[m]="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(39960),o=t(86010),a=t(67294),c=t(16550),s=t(48334);function i(e){let{title:r,url:t,description:i,command:l}=e;const{pathname:d}=(0,c.TH)(),m=d.replace(/\/v\d+/,""),p=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return a.createElement(n.Z,{className:(0,o.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":m.startsWith("/excel"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:t},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),a.createElement("div",{className:"flex items-center"},a.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),p&&a.createElement(s.Z,{className:"ml-auto mr-4"})),i?a.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},i):null)}},90129:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var n=t(87462),o=(t(67294),t(3905)),a=t(26515);const c={},s="REGULATORS.SEC",i={unversionedId:"excel/reference/regulators/sec/index",id:"excel/reference/regulators/sec/index",title:"REGULATORS.SEC",description:"Commands",source:"@site/content/excel/reference/regulators/sec/index.mdx",sourceDirName:"excel/reference/regulators/sec",slug:"/excel/reference/regulators/sec/",permalink:"/excel/reference/regulators/sec/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/regulators/sec/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"REGULATORS",permalink:"/excel/reference/regulators/"},next:{title:"CIK_MAP",permalink:"/excel/reference/regulators/sec/cik_map"}},l={},d=[{value:"Commands",id:"commands",level:3}],m={toc:d},p="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"regulatorssec"},"REGULATORS.SEC"),(0,o.kt)("h3",{id:"commands"},"Commands"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"SIC_SEARCH",description:"Search for Industry Titles, Reporting Office, and SIC Codes.",url:"sec/sic_search",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"SYMBOL_MAP",description:"Get the ticker symbol corresponding to a company's CIK.",url:"sec/symbol_map",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"RSS_LITIGATION",description:"The RSS feed provides links to litigation releases concerning civil lawsuits brought by the...",url:"sec/rss_litigation",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"CIK_MAP",description:"Get the CIK number corresponding to a ticker symbol.",url:"sec/cik_map",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"SCHEMA_FILES",description:"Get lists of SEC XML schema files by year.",url:"sec/schema_files",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"INSTITUTIONS_SEARCH",description:"Look up institutions regulated by the SEC.",url:"sec/institutions_search",command:!0,mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);