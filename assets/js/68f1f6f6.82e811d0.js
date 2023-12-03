"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87453],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(b,o(o({ref:t},s),{},{components:n})):a.createElement(b,o({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(35742);function l(e){let{title:t}=e;return a.createElement(r.Z,null,a.createElement("title",null,t))}},61e3:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(87462),r=(n(67294),n(3905)),l=n(88828);const o={title:"balance",description:"Metadata for the page discussing about the 'balance' function to display information about tokens on given Ethereum blockchain balance. The page outlines how to use this function, its parameters, and their possible values.",keywords:["ethplorer","ethereum","balance","tokens","python script","blockchain balance","sortby function","ascending order","descending order"]},i=void 0,c={unversionedId:"terminal/reference/crypto/onchain/balance",id:"terminal/reference/crypto/onchain/balance",title:"balance",description:"Metadata for the page discussing about the 'balance' function to display information about tokens on given Ethereum blockchain balance. The page outlines how to use this function, its parameters, and their possible values.",source:"@site/content/terminal/reference/crypto/onchain/balance.md",sourceDirName:"terminal/reference/crypto/onchain",slug:"/terminal/reference/crypto/onchain/balance",permalink:"/terminal/reference/crypto/onchain/balance",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/onchain/balance.md",tags:[],version:"current",lastUpdatedBy:"Theodore Aptekarev",lastUpdatedAt:1701637004,formattedLastUpdatedAt:"Dec 3, 2023",frontMatter:{title:"balance",description:"Metadata for the page discussing about the 'balance' function to display information about tokens on given Ethereum blockchain balance. The page outlines how to use this function, its parameters, and their possible values.",keywords:["ethplorer","ethereum","balance","tokens","python script","blockchain balance","sortby function","ascending order","descending order"]},sidebar:"tutorialSidebar",previous:{title:"baas",permalink:"/terminal/reference/crypto/onchain/baas"},next:{title:"btcblockdata",permalink:"/terminal/reference/crypto/onchain/btcblockdata"}},p={},s=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{title:"crypto /onchain/balance - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Display info about tokens on given ethereum blockchain balance. ","[Source: Ethplorer]"),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"balance [-l LIMIT] [-s {index,balance,tokenName,tokenSymbol}] [-r]\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"-l  --limit"),(0,r.kt)("td",{parentName:"tr",align:null},"display N number records"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortby"),(0,r.kt)("td",{parentName:"tr",align:null},"-s  --sort"),(0,r.kt)("td",{parentName:"tr",align:null},"Sort by given column. Default: index"),(0,r.kt)("td",{parentName:"tr",align:null},"index"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"index, balance, tokenName, tokenSymbol")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reverse"),(0,r.kt)("td",{parentName:"tr",align:null},"-r  --reverse"),(0,r.kt)("td",{parentName:"tr",align:null},"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null))}m.isMDXComponent=!0}}]);