"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79134],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>p});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},f=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,p=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(p,l(l({ref:t},f),{},{components:r})):n.createElement(p,l({ref:t},f))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(39960),a=r(86010),o=r(67294),l=r(16550);function i(e){let{title:t,url:r,description:i,command:c}=e;const{pathname:s}=(0,l.TH)(),f=s.replace(/\/v\d+/,"");return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:f.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":f.startsWith("/sdk")||f.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":f.startsWith("/bot"),header_docs:!(f.startsWith("/terminal")||f.startsWith("/sdk")||f.startsWith("/platform")||f.startsWith("/bot"))}),to:r},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),o.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),i?o.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},i):null)}},57203:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>f});var n=r(87462),a=(r(67294),r(3905)),o=r(62872);const l={},i="fun",c={unversionedId:"bot/reference/telegram/fun/index",id:"bot/reference/telegram/fun/index",title:"fun",description:"<ReferenceCard",source:"@site/content/bot/reference/telegram/fun/index.mdx",sourceDirName:"bot/reference/telegram/fun",slug:"/bot/reference/telegram/fun/",permalink:"/bot/reference/telegram/fun/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/fun/index.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1702897661,formattedLastUpdatedAt:"Dec 18, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"summaryflow",permalink:"/bot/reference/telegram/flow/summaryflow"},next:{title:"8ball",permalink:"/bot/reference/telegram/fun/8ball"}},s={},f=[],u={toc:f},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fun"},"fun"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"8ball",description:"This command allows the user to ask the 8-ball a question and receive an answer. The question must end in a...",url:"/bot/reference/telegram/fun/8ball",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"flip",description:"This command allows the user to simulate a coin flip displaying either a 'Heads' or 'Tails'.",url:"/bot/reference/telegram/fun/flip",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"urban",description:"This command allows the user to search for a definition of a word on Urban Dictionary.",url:"/bot/reference/telegram/fun/urban",mdxType:"ReferenceCard"})))}m.isMDXComponent=!0}}]);