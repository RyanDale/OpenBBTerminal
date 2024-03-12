"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78090],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),d=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=d(r),f=n,u=m["".concat(c,".").concat(f)]||m[f]||p[f]||i;return r?o.createElement(u,s(s({ref:t},l),{},{components:r})):o.createElement(u,s({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[m]="string"==typeof e?e:n,s[1]=a;for(var d=2;d<i;d++)s[d]=r[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>a});var o=r(39960),n=r(86010),i=r(67294),s=r(16550);function a(e){let{title:t,url:r,description:a,command:c}=e;const{pathname:d}=(0,s.TH)(),l=d.replace(/\/v\d+/,"");return i.createElement(o.Z,{className:(0,n.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:l.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":l.startsWith("/sdk")||l.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":l.startsWith("/bot"),header_docs:!(l.startsWith("/terminal")||l.startsWith("/sdk")||l.startsWith("/platform")||l.startsWith("/bot"))}),to:r},i.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),i.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),a?i.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},a):null)}},32056:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=r(87462),n=(r(67294),r(3905)),i=r(62872);const s={},a="discovery",c={unversionedId:"bot/reference/discord/discovery/index",id:"bot/reference/discord/discovery/index",title:"discovery",description:"<ReferenceCard",source:"@site/content/bot/reference/discord/discovery/index.mdx",sourceDirName:"bot/reference/discord/discovery",slug:"/bot/reference/discord/discovery/",permalink:"/bot/reference/discord/discovery/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/discovery/index.mdx",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710245802,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"topsum",permalink:"/bot/reference/discord/darkpool/topsum"},next:{title:"arktrades",permalink:"/bot/reference/discord/discovery/arktrades"}},d={},l=[],m={toc:l},p="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"discovery"},"discovery"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(i.Z,{title:"arktrades",description:"This command allows the user to retrieve a list of all trades made by ARK, including the time and amount of each...",url:"/bot/reference/discord/discovery/arktrades",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"contracts",description:"This command allows the user to retrieve the Top 15 Government contracts by amount for all tickers. This is a...",url:"/bot/reference/discord/discovery/contracts",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"fgindex",description:"This command allows the user to retrieve the Fear & Greed Index, which is an investor sentiment indicator...",url:"/bot/reference/discord/discovery/fgindex",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"halts",description:"This command allows the user to retrieve the time and halt code of stocks in the market, excluding penny stocks....",url:"/bot/reference/discord/discovery/halts",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"holidays",description:"This command allows the user to retrieve a list of upcoming market holidays. The command will return a list of...",url:"/bot/reference/discord/discovery/holidays",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"house",description:"This command allows users to retrieve recent house trades for all tickers. The command will display the time of...",url:"/bot/reference/discord/discovery/house",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"ipolist",description:"This command allows the user to view 10 of the most recent and upcoming Initial Public Offerings (IPOs) including...",url:"/bot/reference/discord/discovery/ipolist",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"senate",description:"This command retrieves the most recent senate trades for all tickers including the date and time of the trade and...",url:"/bot/reference/discord/discovery/senate",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"splits",description:"This command allows users to view a list of recent stock splits for all available tickers. This list includes the...",url:"/bot/reference/discord/discovery/splits",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"trendingst",description:"This command allows the user to retrieve the top 15 trending stocks from StockTwits according to the most recent...",url:"/bot/reference/discord/discovery/trendingst",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"wsb",description:"This command allows the user to view the top 15 trending stocks on r/WallStreetBets (WSB) using the /disc wsb...",url:"/bot/reference/discord/discovery/wsb",mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);