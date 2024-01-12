"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12042],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,u=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(u,c(c({ref:t},m),{},{components:r})):n.createElement(u,c({ref:t},m))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(39960),o=r(86010),a=r(67294),c=r(16550);function i(e){let{title:t,url:r,description:i,command:l}=e;const{pathname:s}=(0,c.TH)(),m=s.replace(/\/v\d+/,"");return a.createElement(n.Z,{className:(0,o.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:m.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":m.startsWith("/sdk")||m.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":m.startsWith("/bot"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:r},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),a.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),i?a.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},i):null)}},47451:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var n=r(87462),o=(r(67294),r(3905)),a=r(62872);const c={},i="government",l={unversionedId:"bot/reference/telegram/government/index",id:"bot/reference/telegram/government/index",title:"government",description:"<ReferenceCard",source:"@site/content/bot/reference/telegram/government/index.mdx",sourceDirName:"bot/reference/telegram/government",slug:"/bot/reference/telegram/government/",permalink:"/bot/reference/telegram/government/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/government/index.mdx",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1705059577,formattedLastUpdatedAt:"Jan 12, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ta",permalink:"/bot/reference/telegram/general/ta"},next:{title:"contracts",permalink:"/bot/reference/telegram/government/contracts"}},s={},m=[],d={toc:m},p="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"government"},"government"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"contracts",description:"This command will allow the user to retrieve the top 15 government contracts by amount for a specific ticker.",url:"/bot/reference/telegram/government/contracts",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"house",description:"This command allows the user to retrieve recent house trades for a specific ticker.",url:"/bot/reference/telegram/government/house",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"senate",description:"This command allows a user to view the recent trades of senate members for a specific ticker.",url:"/bot/reference/telegram/government/senate",mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);