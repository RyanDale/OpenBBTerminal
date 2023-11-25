"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78135],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),g=o,h=d["".concat(l,".").concat(g)]||d[g]||u[g]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),o=r(35742);function a(e){let{title:t}=e;return n.createElement(o.Z,null,n.createElement("title",null,t))}},16982:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905)),a=r(88828);const i={title:"Grouping Mechanism",sidebar_position:1,description:"Learn about the powerful grouping mechanism in OpenBB Terminal Pro. Understand how widgets can be grouped based on equity categories and tickers, and also how the watchlist widget's unique grouping property works.",keywords:["Grouping","Widgets","Ticker","Symbol","Dashboard","Watchlist","Relationship"]},s=void 0,l={unversionedId:"pro/dashboards/grouping",id:"pro/dashboards/grouping",title:"Grouping Mechanism",description:"Learn about the powerful grouping mechanism in OpenBB Terminal Pro. Understand how widgets can be grouped based on equity categories and tickers, and also how the watchlist widget's unique grouping property works.",source:"@site/content/pro/dashboards/grouping.md",sourceDirName:"pro/dashboards",slug:"/pro/dashboards/grouping",permalink:"/pro/dashboards/grouping",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/pro/dashboards/grouping.md",tags:[],version:"current",lastUpdatedBy:"teh_coderer",lastUpdatedAt:1700872066,formattedLastUpdatedAt:"Nov 25, 2023",sidebarPosition:1,frontMatter:{title:"Grouping Mechanism",sidebar_position:1,description:"Learn about the powerful grouping mechanism in OpenBB Terminal Pro. Understand how widgets can be grouped based on equity categories and tickers, and also how the watchlist widget's unique grouping property works.",keywords:["Grouping","Widgets","Ticker","Symbol","Dashboard","Watchlist","Relationship"]},sidebar:"tutorialSidebar",previous:{title:"Dashboards",permalink:"/pro/dashboards/"},next:{title:"Templates",permalink:"/pro/dashboards/templates"}},p={},c=[{value:"Watchlist and grouping",id:"watchlist-and-grouping",level:3}],d={toc:c},u="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{title:"Grouping | OpenBB Terminal Pro Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"The grouping mechanism is extremely powerful as it allows widgets to be grouped together through one of their parameters based on the category they belong to."),(0,o.kt)("p",null,"For instance, for the equity category, widgets can be connected through their ticker / symbol. Examples are: AAPL to simbolize Apple, TSLA for Tesla and so on."),(0,o.kt)("img",{className:"pro-border-gradient",width:"800",alt:"grouping",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/f0cbeb52-c7cd-4e03-9eba-5ef35e1665b6"}),(0,o.kt)("p",null,"This is an example of 3 widgets that belong to the same group, note the dark yellow 1 on the top right."),(0,o.kt)("p",null,"In addition, when clicking on the grouping icon you can see that they are grouped around the MSFT ticker."),(0,o.kt)("p",null,"This means that if a user changes the ticker on any of these widgets, the remaining ones will get updated accordingly."),(0,o.kt)("p",null,"Also note that the grouping is visible on the sidebar, immediately under the dashboard naming."),(0,o.kt)("h3",{id:"watchlist-and-grouping"},"Watchlist and grouping"),(0,o.kt)("p",null,"The watchlist widget has a special property in relation to grouping. Since this widget doesn't have a single symbol but many, users can select the row of their ticker of interest, and widgets that are grouped with the watchlist will get updated accordingly."),(0,o.kt)("img",{className:"pro-border-gradient",width:"800",alt:"watchlist",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/d36380df-743a-4676-bec4-6bd34567e661"}),(0,o.kt)("p",null,"If a user selects a new ticker in another widget that is grouped with the watchlist, that ticker will be added to the watchlist and will become the one selected by default."))}g.isMDXComponent=!0}}]);