"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88784],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||n;return o?r.createElement(h,i(i({ref:t},p),{},{components:o})):r.createElement(h,i({ref:t},p))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<n;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},88828:(e,t,o)=>{o.d(t,{Z:()=>n});var r=o(67294),a=o(35742);function n(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},89:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=o(87462),a=(o(67294),o(3905)),n=o(88828);const i={title:"list",description:"Learn about the 'autopost list' command which allows you to view all webhook feeds associated with a channel set up for automatic posting. Find out how and when it can be used, with examples provided.",keywords:["autopost list","webhooks","automatic posting","channel"]},s=void 0,l={unversionedId:"bot/reference/discord/autopost/list",id:"bot/reference/discord/autopost/list",title:"list",description:"Learn about the 'autopost list' command which allows you to view all webhook feeds associated with a channel set up for automatic posting. Find out how and when it can be used, with examples provided.",source:"@site/content/bot/reference/discord/autopost/list.md",sourceDirName:"bot/reference/discord/autopost",slug:"/bot/reference/discord/autopost/list",permalink:"/bot/reference/discord/autopost/list",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/autopost/list.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710245802,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{title:"list",description:"Learn about the 'autopost list' command which allows you to view all webhook feeds associated with a channel set up for automatic posting. Find out how and when it can be used, with examples provided.",keywords:["autopost list","webhooks","automatic posting","channel"]},sidebar:"tutorialSidebar",previous:{title:"commands add",permalink:"/bot/reference/discord/autopost/add"},next:{title:"commands manage",permalink:"/bot/reference/discord/autopost/remove"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(n.Z,{title:"autopost: list - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"This command allows users to view all webhook feeds associated with a particular channel that have been set up for automatic posting. It produces a list of all webhooks that have been configured to post content to the channel automatically, as well as information such as when they are scheduled."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/autopost list\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"This command has no parameters"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/autopost list\n")),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);