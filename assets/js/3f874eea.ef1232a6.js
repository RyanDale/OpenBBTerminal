"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76091],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(35742);function o(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},54841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905)),o=n(88828);const l={title:"load",description:"This page provides documentation on how to load a file of stocks tickers with optional categories using Python. It contains information on the parameters and file options that are available.",keywords:["Load","Stocks","Tickers","File","Categories","Parameters","Allocation","OpenBB_Parameters_Template_v1.0.0.xlsx","defaults.ini","dany.ini","james.ini","example.ini","dd.ini"]},i=void 0,p={unversionedId:"terminal/reference/portfolio/po/load",id:"terminal/reference/portfolio/po/load",title:"load",description:"This page provides documentation on how to load a file of stocks tickers with optional categories using Python. It contains information on the parameters and file options that are available.",source:"@site/content/terminal/reference/portfolio/po/load.md",sourceDirName:"terminal/reference/portfolio/po",slug:"/terminal/reference/portfolio/po/load",permalink:"/terminal/reference/portfolio/po/load",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/portfolio/po/load.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1705059577,formattedLastUpdatedAt:"Jan 12, 2024",frontMatter:{title:"load",description:"This page provides documentation on how to load a file of stocks tickers with optional categories using Python. It contains information on the parameters and file options that are available.",keywords:["Load","Stocks","Tickers","File","Categories","Parameters","Allocation","OpenBB_Parameters_Template_v1.0.0.xlsx","defaults.ini","dany.ini","james.ini","example.ini","dd.ini"]},sidebar:"tutorialSidebar",previous:{title:"hrp",permalink:"/terminal/reference/portfolio/po/hrp"},next:{title:"maxdecorr",permalink:"/terminal/reference/portfolio/po/maxdecorr"}},c={},s=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],d={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"portfolio /po/load - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Load file of stocks tickers with optional categories"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"load [-f {} [{} ...]] [-e]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"file"),(0,a.kt)("td",{parentName:"tr",align:null},"-f  --file"),(0,a.kt)("td",{parentName:"tr",align:null},"Allocation file to be used"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"File in ",(0,a.kt)("inlineCode",{parentName:"td"},"EXPORTS")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"CUSTOM_IMPORTS")," directories")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"example"),(0,a.kt)("td",{parentName:"tr",align:null},"-e  --example"),(0,a.kt)("td",{parentName:"tr",align:null},"Run an example allocation file to understand how the portfolio optimization menu can be used."),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);