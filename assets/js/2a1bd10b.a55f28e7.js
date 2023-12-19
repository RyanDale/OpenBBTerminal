"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12104],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),d=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,f=p["".concat(c,".").concat(m)]||p[m]||h[m]||a;return r?o.createElement(f,s(s({ref:t},l),{},{components:r})):o.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var d=2;d<a;d++)s[d]=r[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(39960),n=r(86010),a=r(67294),s=r(16550);function i(e){let{title:t,url:r,description:i,command:c}=e;const{pathname:d}=(0,s.TH)(),l=d.replace(/\/v\d+/,"");return a.createElement(o.Z,{className:(0,n.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:l.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":l.startsWith("/sdk")||l.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":l.startsWith("/bot"),header_docs:!(l.startsWith("/terminal")||l.startsWith("/sdk")||l.startsWith("/platform")||l.startsWith("/bot"))}),to:r},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),a.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),i?a.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},i):null)}},55993:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=r(87462),n=(r(67294),r(3905)),a=r(62872);const s={},i="short_data",c={unversionedId:"bot/reference/discord/short_data/index",id:"bot/reference/discord/short_data/index",title:"short_data",description:"<ReferenceCard",source:"@site/content/bot/reference/discord/short_data/index.mdx",sourceDirName:"bot/reference/discord/short_data",slug:"/bot/reference/discord/short_data/",permalink:"/bot/reference/discord/short_data/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/short_data/index.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1702897661,formattedLastUpdatedAt:"Dec 18, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"technical",permalink:"/bot/reference/discord/screeners/technical"},next:{title:"borrowed",permalink:"/bot/reference/discord/short_data/borrowed"}},d={},l=[],p={toc:l},h="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"short_data"},"short_data"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(a.Z,{title:"borrowed",description:"This command allows the user to view the history of borrowed shares available and fees associated with the stock...",url:"/bot/reference/discord/short_data/borrowed",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"hsi",description:"This command retrieves the top high short interest stocks over a 20% ratio. This information can let an investor...",url:"/bot/reference/discord/short_data/hsi",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"shortrate",description:"This command allows the user to retrieve the Display Short Shares spot borrow rate from Interactive Brokers for...",url:"/bot/reference/discord/short_data/shortrate",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"shortvol",description:"This command allows the user to retrieve a graph of the 30 day history of the short volume versus the total...",url:"/bot/reference/discord/short_data/shortvol",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"topshortvol",description:"This command allows the user to retrieve the Top 15 Short Interest Stocks per Finra. It's typically measured as a...",url:"/bot/reference/discord/short_data/topshortvol",mdxType:"ReferenceCard"})))}m.isMDXComponent=!0}}]);