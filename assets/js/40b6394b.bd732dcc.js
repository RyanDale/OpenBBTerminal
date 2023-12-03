"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54335],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(r),d=a,f=s["".concat(o,".").concat(d)]||s[d]||m[d]||l;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[s]="string"==typeof e?e:a,i[1]=u;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(35742);function l(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},35717:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),l=r(88828);const i={title:"curve",description:"Documentation page for the 'curve' command in Python, used to display futures curve sourced from YahooFinance. Provides usage example and a comprehensive list of financial ticker parameters.",keywords:["curve documentation","curve usage","futures curve","financial parameter","financial trading","YahooFinance"]},u=void 0,o={unversionedId:"terminal/reference/futures/curve",id:"terminal/reference/futures/curve",title:"curve",description:"Documentation page for the 'curve' command in Python, used to display futures curve sourced from YahooFinance. Provides usage example and a comprehensive list of financial ticker parameters.",source:"@site/content/terminal/reference/futures/curve.md",sourceDirName:"terminal/reference/futures",slug:"/terminal/reference/futures/curve",permalink:"/terminal/reference/futures/curve",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/futures/curve.md",tags:[],version:"current",lastUpdatedBy:"Theodore Aptekarev",lastUpdatedAt:1701637004,formattedLastUpdatedAt:"Dec 3, 2023",frontMatter:{title:"curve",description:"Documentation page for the 'curve' command in Python, used to display futures curve sourced from YahooFinance. Provides usage example and a comprehensive list of financial ticker parameters.",keywords:["curve documentation","curve usage","futures curve","financial parameter","financial trading","YahooFinance"]},sidebar:"tutorialSidebar",previous:{title:"Futures",permalink:"/terminal/reference/futures/"},next:{title:"historical",permalink:"/terminal/reference/futures/historical"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],s={toc:p},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"futures /curve - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Display futures curve. ","[Source: YahooFinance]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"curve -t TICKER [-d DATE]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ticker"),(0,a.kt)("td",{parentName:"tr",align:null},"-t  --ticker"),(0,a.kt)("td",{parentName:"tr",align:null},"Future curve to be selected"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"YI, ALI, BLK, AW, BZ, BZT, CB, CSC, GEO, ZW, ZWT, DC, GDK, HG0, HGT, ZC, ZCT, CLT, DY, QC, QM, XAE, QO, GC, SGU, QG, QH, QU, QI, GF, GFT, GCT, KE, KET, HE, HET, LE, LET, HG, MHG, MGC, SIL, MCL, YG, XK, XC, XW, GNF, ZO, PRK, RBT, ZR, GD, SIT, ZS, ZM, ZMT, ZL, ZLT, SBT, ZN, N1U, TWE, ZT, F1U, RX, GE, GLB, ZF, 10Y, 2YY, 30Y, 5YY, SR1, ZFT, ZQ, Z3N, SR3, ZB, UB, BTM, BTC, ETH, MBT, MET, 6A, 6L, 6B, PJY, PSF, 6C, E7, J7, 6E, EAD, RP, ECD, RY, ENK, ESK, RF, SIR, 6J, KRW, 6M, M6A, MCD, MSF, M6E, M6B, MIR, M6C, M6J, 6N, NKD, NIY, NOK, 6R, 6Z, SEK, 6S, SJY, TPY, YMT, NQT, EST, XAF, RS1, RSG, RSV, RTY, M2K, ESG, EMT, EMD, MNQ, MES, ES, FNG, MMW, CHH, MFS, ASN, LFM, MML, MME, MIN, USS, MWL, MWS, VLQ, SDA, SED, PL, PA, BUS, AUP, GLI, DX, FT5, MMM, MMN, MLE, YM, XAI, XAB, XAK, XAP, XAR, XAU, XAV, XAY, XAZ, BIO, NQ, NQQ, UFV, CC, KC, CT, SF, SB, OJ, NG, RB, CL, TRM")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"date"),(0,a.kt)("td",{parentName:"tr",align:null},"-d  --date"),(0,a.kt)("td",{parentName:"tr",align:null},"Include the curve as of a previous date with format YYYY-MM-DD"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/25267873/196562734-b3fe1c41-c103-4527-a081-5cf7dae62cce.png",alt:"Figure_1dd"})),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);