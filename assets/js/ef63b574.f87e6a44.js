"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46778],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,y=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(y,i(i({ref:t},l),{},{components:n})):a.createElement(y,i({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(35742);function o(e){let{title:t}=e;return a.createElement(r.Z,null,a.createElement("title",null,t))}},47542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(87462),r=(n(67294),n(3905)),o=n(88828);const i={title:"Native integrations",sidebar_position:3,description:"Get in-depth documentation on Native Integrations provided by OpenBB Terminal Pro including API key connections to data providers and database/warehouse connections for an enhanced data analysis experience.",keywords:["Native Integrations","API key","Data Providers","Data Warehouse","Database Connections","SQL queries","Data Analysis"]},s=void 0,c={unversionedId:"pro/main-menu/data-connectors/native-integrations",id:"pro/main-menu/data-connectors/native-integrations",title:"Native integrations",description:"Get in-depth documentation on Native Integrations provided by OpenBB Terminal Pro including API key connections to data providers and database/warehouse connections for an enhanced data analysis experience.",source:"@site/content/pro/main-menu/data-connectors/native-integrations.md",sourceDirName:"pro/main-menu/data-connectors",slug:"/pro/main-menu/data-connectors/native-integrations",permalink:"/pro/main-menu/data-connectors/native-integrations",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/pro/main-menu/data-connectors/native-integrations.md",tags:[],version:"current",lastUpdatedBy:"teh_coderer",lastUpdatedAt:1700872066,formattedLastUpdatedAt:"Nov 25, 2023",sidebarPosition:3,frontMatter:{title:"Native integrations",sidebar_position:3,description:"Get in-depth documentation on Native Integrations provided by OpenBB Terminal Pro including API key connections to data providers and database/warehouse connections for an enhanced data analysis experience.",keywords:["Native Integrations","API key","Data Providers","Data Warehouse","Database Connections","SQL queries","Data Analysis"]},sidebar:"tutorialSidebar",previous:{title:"Integrate your own backend",permalink:"/pro/main-menu/data-connectors/integrate-your-own-backend"},next:{title:"Widgets",permalink:"/pro/widgets/"}},d={},l=[{value:"API Key Connections",id:"api-key-connections",level:2},{value:"Data Warehouse/Database Connections",id:"data-warehousedatabase-connections",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{title:"Native Integrations | OpenBB Terminal Pro Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"OpenBB Terminal Pro allows seamless integration with two types of third-party data providers."),(0,r.kt)("h2",{id:"api-key-connections"},"API Key Connections"),(0,r.kt)("p",null,"To access certain data providers and their associated widgets, you'll need an API key obtained directly from the data provider. We provide step-by-step instructions for each use case to guide you through this process."),(0,r.kt)("h2",{id:"data-warehousedatabase-connections"},"Data Warehouse/Database Connections"),(0,r.kt)("p",null,"For a more robust integration, OpenBB Terminal Pro offers connections to your data warehouse or database. Simply use your login credentials to access your warehouse or database, and swiftly run SQL queries. The queried data can then be rendered as a table within the Terminal Pro interface, providing you with a powerful tool for data analysis."))}m.isMDXComponent=!0}}]);