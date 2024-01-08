"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1166],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(r),u=i,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||a;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),i=r(35742);function a(e){let{title:t}=e;return n.createElement(i.Z,null,n.createElement("title",null,t))}},56887:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=r(87462),i=(r(67294),r(3905)),a=r(88828);const o={title:"skew",description:"The 'skew' documentation page explains how this concept can be utilized to measure asymmetry or distortion of a symmetric distribution, also describing usage and parameters in Python. It provides insights into how skewness measures deviation from a normal distribution, depicting either a right or left shift. Comprehensive visual aids are also given for clarification of the skewness concept.",keywords:["skew","asymmetry measurement","distortion","symmetric distribution","normal distribution","skewness","random variable distribution","distribution deviation","right-skewed","left-skew"]},s=void 0,l={unversionedId:"terminal/reference/crypto/qa/skew",id:"terminal/reference/crypto/qa/skew",title:"skew",description:"The 'skew' documentation page explains how this concept can be utilized to measure asymmetry or distortion of a symmetric distribution, also describing usage and parameters in Python. It provides insights into how skewness measures deviation from a normal distribution, depicting either a right or left shift. Comprehensive visual aids are also given for clarification of the skewness concept.",source:"@site/content/terminal/reference/crypto/qa/skew.md",sourceDirName:"terminal/reference/crypto/qa",slug:"/terminal/reference/crypto/qa/skew",permalink:"/terminal/reference/crypto/qa/skew",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/qa/skew.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1704729450,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{title:"skew",description:"The 'skew' documentation page explains how this concept can be utilized to measure asymmetry or distortion of a symmetric distribution, also describing usage and parameters in Python. It provides insights into how skewness measures deviation from a normal distribution, depicting either a right or left shift. Comprehensive visual aids are also given for clarification of the skewness concept.",keywords:["skew","asymmetry measurement","distortion","symmetric distribution","normal distribution","skewness","random variable distribution","distribution deviation","right-skewed","left-skew"]},sidebar:"tutorialSidebar",previous:{title:"rolling",permalink:"/terminal/reference/crypto/qa/rolling"},next:{title:"spread",permalink:"/terminal/reference/crypto/qa/spread"}},c={},m=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:m},d="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,{title:"crypto /qa/skew - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,i.kt)("p",null,"Skewness is a measure of asymmetry or distortion of symmetric distribution. It measures the deviation of the given distribution of a random variable from a symmetric distribution, such as normal distribution. A normal distribution is without any skewness, as it is symmetrical on both sides. Hence, a curve is regarded as skewed if it is shifted towards the right or the left."),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"skew [-w N_WINDOW]\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Optional"),(0,i.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"n_window"),(0,i.kt)("td",{parentName:"tr",align:null},"-w  --window"),(0,i.kt)("td",{parentName:"tr",align:null},"window length"),(0,i.kt)("td",{parentName:"tr",align:null},"14"),(0,i.kt)("td",{parentName:"tr",align:null},"True"),(0,i.kt)("td",{parentName:"tr",align:null},"range(5, 100)")))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154308298-7528be2a-05f5-44b8-a479-d4716b2a6c6e.png",alt:"skew"})),(0,i.kt)("hr",null))}u.isMDXComponent=!0}}]);