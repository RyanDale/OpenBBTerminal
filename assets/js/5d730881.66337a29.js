"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14055],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=n,u=d["".concat(l,".").concat(f)]||d[f]||m[f]||a;return r?o.createElement(u,i(i({ref:t},p),{},{components:r})):o.createElement(u,i({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>c});var o=r(39960),n=r(86010),a=r(67294),i=r(16550);function c(e){let{title:t,url:r,description:c,command:l}=e;const{pathname:s}=(0,i.TH)(),p=s.replace(/\/v\d+/,"");return a.createElement(o.Z,{className:(0,n.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:p.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":p.startsWith("/sdk")||p.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":p.startsWith("/bot"),header_docs:!(p.startsWith("/terminal")||p.startsWith("/sdk")||p.startsWith("/platform")||p.startsWith("/bot"))}),to:r},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),a.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),c?a.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},c):null)}},76579:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=r(87462),n=(r(67294),r(3905)),a=r(62872);const i={},c="crypto",l={unversionedId:"bot/reference/telegram/crypto/index",id:"bot/reference/telegram/crypto/index",title:"crypto",description:"<ReferenceCard",source:"@site/content/bot/reference/telegram/crypto/index.mdx",sourceDirName:"bot/reference/telegram/crypto",slug:"/bot/reference/telegram/crypto/",permalink:"/bot/reference/telegram/crypto/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/crypto/index.mdx",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1707846532,formattedLastUpdatedAt:"Feb 13, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cw",permalink:"/bot/reference/telegram/charts/cw"},next:{title:"bigprints",permalink:"/bot/reference/telegram/crypto/bigprints"}},s={},p=[],d={toc:p},m="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"crypto"},"crypto"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(a.Z,{title:"bigprints",description:"This command allows the user to retrieve the last 15 large prints for a given cryptocurrency pair. The command...",url:"/bot/reference/telegram/crypto/bigprints",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"bio",description:"This command allows the user to retrieve fundamental information about a crypto, such as its current price,...",url:"/bot/reference/telegram/crypto/bio",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"compfees",description:"This command allows users to retrieve the Protocol fees over time for the given project.",url:"/bot/reference/telegram/crypto/compfees",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"defi",description:"This command will retrieve a chart or table of the top DeFi protocols by market capitalization. It will provide a...",url:"/bot/reference/telegram/crypto/defi",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"fees",description:"This will provide the user with the fee rate of the top crypto protocols on a specified date, allowing the user...",url:"/bot/reference/telegram/crypto/fees",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"ir",description:"This command allows the user to retrieve the issuance rate of the top crypto protocols. The issuance rate is the...",url:"/bot/reference/telegram/crypto/ir",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"prints",description:"This command allows the user to retrieve the Last 15 Crypto Prints over the last 24 hours for the specified coin....",url:"/bot/reference/telegram/crypto/prints",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"top",description:"This command will retrieve the top cryptocurrencies, ranked by market capitalization, allowing the user to...",url:"/bot/reference/telegram/crypto/top",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"tvl",description:"This command allows users to retrieve historical TVL (Total Value Locked) data for any given protocol. It...",url:"/bot/reference/telegram/crypto/tvl",mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);