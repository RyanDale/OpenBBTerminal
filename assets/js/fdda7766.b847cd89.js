"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30323],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(35742);function i(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},61018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905)),i=n(88828);const l={title:"voi",description:"The voi page provides a guide on how to plot Volume + Open Interest of calls vs puts with parameters like minimum volume, minimum strike price and maximum strike price. It's an integral part of a python-based toolkit.",keywords:["voi","Volume","Open Interest","strike price","plot","minimum volume","maximum strike price"]},o=void 0,p={unversionedId:"terminal/reference/stocks/options/voi",id:"terminal/reference/stocks/options/voi",title:"voi",description:"The voi page provides a guide on how to plot Volume + Open Interest of calls vs puts with parameters like minimum volume, minimum strike price and maximum strike price. It's an integral part of a python-based toolkit.",source:"@site/content/terminal/reference/stocks/options/voi.md",sourceDirName:"terminal/reference/stocks/options",slug:"/terminal/reference/stocks/options/voi",permalink:"/terminal/reference/stocks/options/voi",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/options/voi.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1705059577,formattedLastUpdatedAt:"Jan 12, 2024",frontMatter:{title:"voi",description:"The voi page provides a guide on how to plot Volume + Open Interest of calls vs puts with parameters like minimum volume, minimum strike price and maximum strike price. It's an integral part of a python-based toolkit.",keywords:["voi","Volume","Open Interest","strike price","plot","minimum volume","maximum strike price"]},sidebar:"tutorialSidebar",previous:{title:"unu",permalink:"/terminal/reference/stocks/options/unu"},next:{title:"vol",permalink:"/terminal/reference/stocks/options/vol"}},m={},s=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{title:"stocks /options/voi - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Plots Volume + Open Interest of calls vs puts."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"voi [-v MIN_VOL] [-m MIN_SP] [-M MAX_SP] [-e {2024-01-12,2024-01-19,2024-01-26,2024-02-02,2024-02-09,2024-02-16,2024-02-23,2024-03-15,2024-04-19,2024-05-17,2024-06-21,2024-07-19,2024-08-16,2024-09-20,2024-12-20,2025-01-17,2025-06-20,2025-09-19,2025-12-19,2026-01-16,2026-06-18,}]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"min_vol"),(0,a.kt)("td",{parentName:"tr",align:null},"-v  --minv"),(0,a.kt)("td",{parentName:"tr",align:null},"minimum volume (considering open interest) threshold of the plot."),(0,a.kt)("td",{parentName:"tr",align:null},"-1"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"min_sp"),(0,a.kt)("td",{parentName:"tr",align:null},"-m  --min"),(0,a.kt)("td",{parentName:"tr",align:null},"minimum strike price to consider in the plot."),(0,a.kt)("td",{parentName:"tr",align:null},"-1"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"max_sp"),(0,a.kt)("td",{parentName:"tr",align:null},"-M  --max"),(0,a.kt)("td",{parentName:"tr",align:null},"maximum strike price to consider in the plot."),(0,a.kt)("td",{parentName:"tr",align:null},"-1"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"exp"),(0,a.kt)("td",{parentName:"tr",align:null},"-e  --expiration"),(0,a.kt)("td",{parentName:"tr",align:null},"Select expiration date (YYYY-MM-DD)"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"2024-01-12, 2024-01-19, 2024-01-26, 2024-02-02, 2024-02-09, 2024-02-16, 2024-02-23, 2024-03-15, 2024-04-19, 2024-05-17, 2024-06-21, 2024-07-19, 2024-08-16, 2024-09-20, 2024-12-20, 2025-01-17, 2025-06-20, 2025-09-19, 2025-12-19, 2026-01-16, 2026-06-18,")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154290408-ae5d50ff-74ea-4705-b8ea-e4eebc842bb6.png",alt:"voi"})),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);