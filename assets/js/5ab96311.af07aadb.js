"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32152],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=p(r),u=n,k=s["".concat(c,".").concat(u)]||s[u]||d[u]||o;return r?a.createElement(k,l(l({ref:t},m),{},{components:r})):a.createElement(k,l({ref:t},m))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(35742);function o(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},45816:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var a=r(87462),n=(r(67294),r(3905)),o=r(88828);const l={title:"pm",description:"The 'pm' command is a tool that retrieves premarket data about a certain stock ticker. It gives information about the stock's latest price, the premarket change and the premarket percentage change.",keywords:["pm command","premarket data","stock ticker","stock price","premarket change","market opens"]},i=void 0,c={unversionedId:"bot/reference/telegram/duediligence/pm",id:"bot/reference/telegram/duediligence/pm",title:"pm",description:"The 'pm' command is a tool that retrieves premarket data about a certain stock ticker. It gives information about the stock's latest price, the premarket change and the premarket percentage change.",source:"@site/content/bot/reference/telegram/duediligence/pm.md",sourceDirName:"bot/reference/telegram/duediligence",slug:"/bot/reference/telegram/duediligence/pm",permalink:"/bot/reference/telegram/duediligence/pm",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/duediligence/pm.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710245802,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{title:"pm",description:"The 'pm' command is a tool that retrieves premarket data about a certain stock ticker. It gives information about the stock's latest price, the premarket change and the premarket percentage change.",keywords:["pm command","premarket data","stock ticker","stock price","premarket change","market opens"]},sidebar:"tutorialSidebar",previous:{title:"nexter",permalink:"/bot/reference/telegram/duediligence/nexter"},next:{title:"pt",permalink:"/bot/reference/telegram/duediligence/pt"}},p={},m=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],s={toc:m},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{title:"duediligence: pm - Telegram Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"This command allows the user to retrieve premarket data for a given stock ticker. It will fetch the latest price, the premarket change, and the premarket percentage change of the selected stock. This is useful for those who want to get an idea of the stock's performance before the regular market opens."),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/pm ticker\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ticker"),(0,n.kt)("td",{parentName:"tr",align:null},"Stock Ticker"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/pm AMD\n")),(0,n.kt)("hr",null))}u.isMDXComponent=!0}}]);