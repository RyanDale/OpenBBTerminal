"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38468],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(35742);function l(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},50483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),l=n(88828);const i={title:"tsne",description:"Documentation page about TSNE method for comparing similar companies, detailing usage, parameters, and examples. It describes how to implement TSNE method using sklearn in Python.",keywords:["TSNE","sklearn","comparison","similar companies","parameters","usage"]},o=void 0,s={unversionedId:"terminal/reference/stocks/ca/tsne",id:"terminal/reference/stocks/ca/tsne",title:"tsne",description:"Documentation page about TSNE method for comparing similar companies, detailing usage, parameters, and examples. It describes how to implement TSNE method using sklearn in Python.",source:"@site/content/terminal/reference/stocks/ca/tsne.md",sourceDirName:"terminal/reference/stocks/ca",slug:"/terminal/reference/stocks/ca/tsne",permalink:"/terminal/reference/stocks/ca/tsne",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/ca/tsne.md",tags:[],version:"current",lastUpdatedBy:"Theodore Aptekarev",lastUpdatedAt:1701637004,formattedLastUpdatedAt:"Dec 3, 2023",frontMatter:{title:"tsne",description:"Documentation page about TSNE method for comparing similar companies, detailing usage, parameters, and examples. It describes how to implement TSNE method using sklearn in Python.",keywords:["TSNE","sklearn","comparison","similar companies","parameters","usage"]},sidebar:"tutorialSidebar",previous:{title:"ticker",permalink:"/terminal/reference/stocks/ca/ticker"},next:{title:"valuation",permalink:"/terminal/reference/stocks/ca/valuation"}},p={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],m={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"stocks /ca/tsne - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Get similar companies to compare with using sklearn TSNE."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"tsne [-r LR] [-l LIMIT] [-p]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"lr"),(0,a.kt)("td",{parentName:"tr",align:null},"-r  --learnrate"),(0,a.kt)("td",{parentName:"tr",align:null},"TSNE Learning rate. Typical values are between 50 and 200"),(0,a.kt)("td",{parentName:"tr",align:null},"200"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"-l  --limit"),(0,a.kt)("td",{parentName:"tr",align:null},"Limit of stocks to retrieve. The subsample will occur randomly."),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"no_plot"),(0,a.kt)("td",{parentName:"tr",align:null},"-p  --no_plot"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154074416-af8c7d2a-fa2f-461f-8522-933cf6e3543b.png",alt:"tsne"})),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);