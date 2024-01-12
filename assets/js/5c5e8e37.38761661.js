"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64474],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>p});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=s(t),f=a,p=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return t?n.createElement(p,i(i({ref:r},c),{},{components:t})):n.createElement(p,i({ref:r},c))}));function p(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var d={};for(var l in r)hasOwnProperty.call(r,l)&&(d[l]=r[l]);d.originalType=e,d[m]="string"==typeof e?e:a,i[1]=d;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(39960),a=t(86010),o=t(67294),i=t(16550),d=t(48334);function l(e){let{title:r,url:t,description:l,command:s}=e;const{pathname:c}=(0,i.TH)(),m=c.replace(/\/v\d+/,""),u=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":m.startsWith("/excel"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:t},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),u&&o.createElement(d.Z,{className:"ml-auto mr-4"})),l?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},l):null)}},36689:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>d,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(87462),a=(t(67294),t(3905)),o=t(26515);const i={},d="Mutual Funds",l={unversionedId:"terminal/reference/funds/index",id:"terminal/reference/funds/index",title:"Mutual Funds",description:"Commands",source:"@site/content/terminal/reference/funds/index.mdx",sourceDirName:"terminal/reference/funds",slug:"/terminal/reference/funds/",permalink:"/terminal/reference/funds/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/funds/index.mdx",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1705059577,formattedLastUpdatedAt:"Jan 12, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OpenBB Terminal Features",permalink:"/terminal/reference/"},next:{title:"alswe",permalink:"/terminal/reference/funds/alswe"}},s={},c=[{value:"Commands",id:"commands",level:3}],m={toc:c},u="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mutual-funds"},"Mutual Funds"),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"Alswe",description:"Show allocation of a swedish fund. To get a list of available funds, check the file `avanza_fund_ID.csv`.",url:"/terminal/reference/funds/alswe",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Carbon",description:"Show funds carbon metrcis.",url:"/terminal/reference/funds/carbon",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Country",description:"Set a country for funds.",url:"/terminal/reference/funds/country",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Exclusion",description:"Show funds exclsuion policy.",url:"/terminal/reference/funds/exclusion",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Holdings",description:"Show funds holdings.",url:"/terminal/reference/funds/holdings",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Infoswe",description:"Show fund info of a swedish fund. To get a list of available funds, check the file `avanza_fund_ID.csv`.",url:"/terminal/reference/funds/infoswe",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Load",description:"Load the fund to perform analysis on.",url:"/terminal/reference/funds/load",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Plot",description:"Plot historical data.",url:"/terminal/reference/funds/plot",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Search",description:"Search mutual funds in selected country",url:"/terminal/reference/funds/search",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Sector",description:"Show funds, index, category sector breakdown.",url:"/terminal/reference/funds/sector",command:!0,mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);