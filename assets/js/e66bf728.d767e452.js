"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40471],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>w});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,w=p["".concat(s,".").concat(u)]||p[u]||h[u]||o;return n?r.createElement(w,i(i({ref:t},c),{},{components:n})):r.createElement(w,i({ref:t},c))}));function w(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(35742);function o(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},50991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),o=n(88828);const i={title:"aroon",description:"The page introduces the aroon indicator which signifies the emergence of new trends. It explains how the indicator works, including its Up and Down indicators, its relationship with the highest high and lowest low within a certain period, and its role in identifying strong or weak trends.",keywords:["aroon","trend indicator","aroon Up","aroon Down","upward trend","downward trend","n period range","dawn's early light","crossovers","weak trend","strong trend"]},l=void 0,s={unversionedId:"terminal/reference/crypto/ta/aroon",id:"terminal/reference/crypto/ta/aroon",title:"aroon",description:"The page introduces the aroon indicator which signifies the emergence of new trends. It explains how the indicator works, including its Up and Down indicators, its relationship with the highest high and lowest low within a certain period, and its role in identifying strong or weak trends.",source:"@site/content/terminal/reference/crypto/ta/aroon.md",sourceDirName:"terminal/reference/crypto/ta",slug:"/terminal/reference/crypto/ta/aroon",permalink:"/terminal/reference/crypto/ta/aroon",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/ta/aroon.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1704729450,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{title:"aroon",description:"The page introduces the aroon indicator which signifies the emergence of new trends. It explains how the indicator works, including its Up and Down indicators, its relationship with the highest high and lowest low within a certain period, and its role in identifying strong or weak trends.",keywords:["aroon","trend indicator","aroon Up","aroon Down","upward trend","downward trend","n period range","dawn's early light","crossovers","weak trend","strong trend"]},sidebar:"tutorialSidebar",previous:{title:"adx",permalink:"/terminal/reference/crypto/ta/adx"},next:{title:"atr",permalink:"/terminal/reference/crypto/ta/atr"}},d={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:c},h="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"crypto /ta/aroon - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,'The word aroon is Sanskrit for "dawn\'s early light." The Aroon indicator attempts to show when a new trend is dawning. The indicator consists of two lines (Up and Down) that measure how long it has been since the highest high/lowest low has occurred within an n period range. When the Aroon Up is staying between 70 and 100 then it indicates an upward trend. When the Aroon Down is staying between 70 and 100 then it indicates an downward trend. A strong upward trend is indicated when the Aroon Up is above 70 while the Aroon Down is below 30. Likewise, a strong downward trend is indicated when the Aroon Down is above 70 while the Aroon Up is below 30. Also look for crossovers. When the Aroon Down crosses above the Aroon Up, it indicates a weakening of the upward trend (and vice versa).'),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"aroon [-l N_LENGTH] [-s N_SCALAR]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"n_length"),(0,a.kt)("td",{parentName:"tr",align:null},"-l  --length"),(0,a.kt)("td",{parentName:"tr",align:null},"length"),(0,a.kt)("td",{parentName:"tr",align:null},"25"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"range(1, 100)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"n_scalar"),(0,a.kt)("td",{parentName:"tr",align:null},"-s  --scalar"),(0,a.kt)("td",{parentName:"tr",align:null},"scalar"),(0,a.kt)("td",{parentName:"tr",align:null},"100"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154309825-f8ccc98b-31ac-43fc-a251-66f6f41545a5.png",alt:"aroon"})),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);