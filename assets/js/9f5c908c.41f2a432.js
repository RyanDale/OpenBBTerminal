"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55369],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=c(r),p=a,f=d["".concat(s,".").concat(p)]||d[p]||u[p]||o;return r?n.createElement(f,l(l({ref:t},m),{},{components:r})):n.createElement(f,l({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(39960),a=r(86010),o=r(67294),l=r(16550);function i(e){let{title:t,url:r,description:i,command:s}=e;const{pathname:c}=(0,l.TH)(),m=c.replace(/\/v\d+/,"");return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:m.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":m.startsWith("/sdk")||m.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":m.startsWith("/bot"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:r},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),o.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),i?o.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},i):null)}},23714:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var n=r(87462),a=(r(67294),r(3905)),o=r(62872);const l={},i="general",s={unversionedId:"bot/reference/telegram/general/index",id:"bot/reference/telegram/general/index",title:"general",description:"<ReferenceCard",source:"@site/content/bot/reference/telegram/general/index.mdx",sourceDirName:"bot/reference/telegram/general",slug:"/bot/reference/telegram/general/",permalink:"/bot/reference/telegram/general/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/general/index.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1702897661,formattedLastUpdatedAt:"Dec 18, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"urban",permalink:"/bot/reference/telegram/fun/urban"},next:{title:"futures",permalink:"/bot/reference/telegram/general/futures"}},c={},m=[],d={toc:m},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"general"},"general"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"futures",description:"This command allows the user to retrieve futures prices on the stock market.",url:"/bot/reference/telegram/general/futures",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"news",description:"This command allows the user to retrieve the latest news for a given ticker.",url:"/bot/reference/telegram/general/news",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"quote",description:"This command allows the user to retrieve display quote stats for a stock - including the 52 week high/low, market...",url:"/bot/reference/telegram/general/quote",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"ta",description:"This command allows the user to retrieve a technical analysis summary for a given stock ticker. The summary...",url:"/bot/reference/telegram/general/ta",mdxType:"ReferenceCard"})))}p.isMDXComponent=!0}}]);