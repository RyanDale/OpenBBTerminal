"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17041],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(35742);function o(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},32849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(88828);const c={title:"Data connectors",sidebar_position:4,description:"Access your data connectors from OpenBB Terminal Pro inside OpenBB Add-in for Excel.",keywords:["Microsoft Excel","Add-in","Advanced","Data connectors","BYOD","Bring your own data"]},i=void 0,l={unversionedId:"excel/data-connectors",id:"excel/data-connectors",title:"Data connectors",description:"Access your data connectors from OpenBB Terminal Pro inside OpenBB Add-in for Excel.",source:"@site/content/excel/data-connectors.md",sourceDirName:"excel",slug:"/excel/data-connectors",permalink:"/excel/data-connectors",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/data-connectors.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1707846532,formattedLastUpdatedAt:"Feb 13, 2024",sidebarPosition:4,frontMatter:{title:"Data connectors",sidebar_position:4,description:"Access your data connectors from OpenBB Terminal Pro inside OpenBB Add-in for Excel.",keywords:["Microsoft Excel","Add-in","Advanced","Data connectors","BYOD","Bring your own data"]},sidebar:"tutorialSidebar",previous:{title:"Formula Builder",permalink:"/excel/getting-started/formula_builder"},next:{title:"Templates",permalink:"/excel/templates"}},s={},p=[{value:"Additional notes",id:"additional-notes",level:4}],d={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"Data connectors | OpenBB Add-in for Excel Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"OpenBB Add-In for Excel allows you to access your ",(0,a.kt)("a",{parentName:"p",href:"https://docs.openbb.co/pro/main-menu/data-connectors"},"data connectors")," from OpenBB Terminal Pro inside Microsoft Excel. This can be done using the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.openbb.co/excel/reference/byod"},"OBB.BYOD")," function."),(0,a.kt)("p",null,"To access data from a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.openbb.co/pro/main-menu/data-connectors/single-widget"},"single widget")," use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-excel"},'=OBB.BYOD("widget_name")\n')),(0,a.kt)("p",null,"To access data from your own ",(0,a.kt)("a",{parentName:"p",href:"https://docs.openbb.co/pro/main-menu/data-connectors/integrate-your-own-backend"},"backend")," use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-excel"},'=OBB.BYOD("widget_name","backend_name")\n')),(0,a.kt)("p",null,"If your backend supports it is possible to pass a symbol, date or other optional parameters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-excel"},'=OBB.BYOD("widget_name","backend_name","my_symbol","my_date",{"param1":"value1","param2":"value2", ...})\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The easiest way to pass optional parameters is write them into cells and reference them in the function. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"=OBB.BYOD(...,A1:B2)"),' where A1 contains "param1", B1 "value1", A2 "param2", B2 "value2" and so on.')),(0,a.kt)("h4",{id:"additional-notes"},"Additional notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Make sure your backend's CORS settings allow requests coming from ",(0,a.kt)("a",{parentName:"li",href:"https://excel.openbb.co"},"https://excel.openbb.co"),"."),(0,a.kt)("li",{parentName:"ul"},"Requests via HTTP will be blocked by Excel. So if you are using the Add-in for Excel on Mac or Office on the web with Safari browser you need to run your backend via HTTPS.")))}m.isMDXComponent=!0}}]);