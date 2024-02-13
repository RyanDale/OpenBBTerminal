"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56658],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),m=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=m(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=m(r),d=a,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||n;return r?o.createElement(f,s(s({ref:t},c),{},{components:r})):o.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var m=2;m<n;m++)s[m]=r[m];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(67294),a=r(35742);function n(e){let{title:t}=e;return o.createElement(a.Z,null,o.createElement("title",null,t))}},4462:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=r(87462),a=(r(67294),r(3905)),n=r(88828);const s={title:"commands manage",description:"Documentation on how to use the 'commands manage' command for autoposts on Discord. This includes its usage, parameters, and examples for removing or listing feeds.",keywords:["commands manage","autopost command","Discord autoposts","manage autoposts","remove autoposts","autopost parameters","autopost usage","list autoposts"]},i=void 0,l={unversionedId:"bot/reference/discord/autopost/remove",id:"bot/reference/discord/autopost/remove",title:"commands manage",description:"Documentation on how to use the 'commands manage' command for autoposts on Discord. This includes its usage, parameters, and examples for removing or listing feeds.",source:"@site/content/bot/reference/discord/autopost/remove.md",sourceDirName:"bot/reference/discord/autopost",slug:"/bot/reference/discord/autopost/remove",permalink:"/bot/reference/discord/autopost/remove",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/autopost/remove.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1707846532,formattedLastUpdatedAt:"Feb 13, 2024",frontMatter:{title:"commands manage",description:"Documentation on how to use the 'commands manage' command for autoposts on Discord. This includes its usage, parameters, and examples for removing or listing feeds.",keywords:["commands manage","autopost command","Discord autoposts","manage autoposts","remove autoposts","autopost parameters","autopost usage","list autoposts"]},sidebar:"tutorialSidebar",previous:{title:"list",permalink:"/bot/reference/discord/autopost/list"},next:{title:"charts",permalink:"/bot/reference/discord/charts/"}},m={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(n.Z,{title:"autopost: commands manage - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"This command allows the user to remove an autopost webhook feed from the channel. When executed, it will remove the feed from the channel and prevent any further autoposts from being sent."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/autopost commands manage action\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"action"),(0,a.kt)("td",{parentName:"tr",align:null},"Remove, or List your feeds for Discord autoposts"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"Remove, List")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/autopost commands manage action:List\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/autopost commands manage action:Remove\n")))}d.isMDXComponent=!0}}]);