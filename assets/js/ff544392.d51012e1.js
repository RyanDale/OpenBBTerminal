"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64657],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>p});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},m=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),l=d(t),u=i,p=l["".concat(s,".").concat(u)]||l[u]||f[u]||a;return t?n.createElement(p,o(o({ref:r},m),{},{components:t})):n.createElement(p,o({ref:r},m))}));function p(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[l]="string"==typeof e?e:i,o[1]=c;for(var d=2;d<a;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(39960),i=t(86010),a=t(67294),o=t(16550),c=t(48334);function s(e){let{title:r,url:t,description:s,command:d}=e;const{pathname:m}=(0,o.TH)(),l=m.replace(/\/v\d+/,""),f=!l.includes("/reference")&&!l.includes("/widgets-library/")&&!l.includes("/data_models");return a.createElement(n.Z,{className:(0,i.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":l.startsWith("/terminal")||l.startsWith("/pro")||l.startsWith("/excel"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":l.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":l.startsWith("/sdk")||l.startsWith("/platform"),header_docs:!(l.startsWith("/terminal")||l.startsWith("/pro")||l.startsWith("/excel")||l.startsWith("/sdk")||l.startsWith("/platform")||l.startsWith("/bot"))}),to:t},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),a.createElement("div",{className:"flex items-center"},a.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),f&&a.createElement(c.Z,{className:"ml-auto mr-4"})),s?a.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},s):null)}},11152:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=t(87462),i=(t(67294),t(3905)),a=t(26515);const o={},c="Fixedincome",s={unversionedId:"terminal/reference/fixedincome/index",id:"terminal/reference/fixedincome/index",title:"Fixedincome",description:"Commands",source:"@site/content/terminal/reference/fixedincome/index.mdx",sourceDirName:"terminal/reference/fixedincome",slug:"/terminal/reference/fixedincome/",permalink:"/terminal/reference/fixedincome/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/fixedincome/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"prt",permalink:"/terminal/reference/crypto/prt"},next:{title:"ameribor",permalink:"/terminal/reference/fixedincome/ameribor"}},d={},m=[{value:"Commands",id:"commands",level:3}],l={toc:m},f="wrapper";function u(e){let{components:r,...t}=e;return(0,i.kt)(f,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fixedincome"},"Fixedincome"),(0,i.kt)("h3",{id:"commands"},"Commands"),(0,i.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,i.kt)(a.Z,{title:"Ameribor",description:"Ameribor (short for the American interbank offered rate) is a benchmark interest rate that reflects the true cost...",url:"/terminal/reference/fixedincome/ameribor",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(a.Z,{title:"Cp",description:"Commercial paper (CP) consists of short-term, promissory notes issued primarily by corporations. Maturities range...",url:"/terminal/reference/fixedincome/cp",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(a.Z,{title:"Dwpcr",description:"Get Discount Window Primary Credit Rate data. A bank rate is the interest rate a nation's central bank charges to...",url:"/terminal/reference/fixedincome/dwpcr",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(a.Z,{title:"Ecb",description:"Plot the three interest rates the ECB sets every six weeks as part of its monetary policy, these are the interest...",url:"/terminal/reference/fixedincome/ecb",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(a.Z,{title:"Ecbycrv",description:"Generate euro area yield curve from ECB. The yield curve shows the bond ratesat different maturities. The graphic...",url:"/terminal/reference/fixedincome/ecbycrv",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(a.Z,{title:"Estr",description:"The euro short-term rate (\u20acSTR) reflects the wholesale euro unsecured overnight borrowing costs of banks located...",url:"/terminal/reference/fixedincome/estr",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(a.Z,{title:"Fed",description:"Get Effective Federal Funds Rate data. A bank rate is the interest rate a nation's central bank charges to its...",url:"/terminal/reference/fixedincome/fed",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(a.Z,{title:"Ffrmc",description:"Get Selected Treasury Constant Maturity Minus Federal Funds Rate. Constant maturity is the theoretical value of a...",url:"/terminal/reference/fixedincome/ffrmc",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(a.Z,{title:"Hqm",description:"The HQM yield curve represents the high quality corporate bond market, i.e., corporate bonds rated AAA, AA, or A....",url:"/terminal/reference/fixedincome/hqm",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(a.Z,{title:"Icebofa",description:"Plot various rates from the United States. This includes tbill (Treasury Bills), Constant Maturity treasuries...",url:"/terminal/reference/fixedincome/icebofa",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(a.Z,{title:"Icespread",description:"Plot various rates from the United States. This includes tbill (Treasury Bills), Constant Maturity treasuries...",url:"/terminal/reference/fixedincome/icespread",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(a.Z,{title:"Iorb",description:"Get Interest Rate on Reserve Balances data A bank rate is the interest rate a nation's central bank charges to...",url:"/terminal/reference/fixedincome/iorb",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(a.Z,{title:"Moody",description:"Moody's Aaa and Baa are investment bonds that acts as an index of the performance of all bonds given an Aaa or...",url:"/terminal/reference/fixedincome/moody",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(a.Z,{title:"Projection",description:"Get the Federal Reserve's projection of the federal funds rate.",url:"/terminal/reference/fixedincome/projection",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(a.Z,{title:"Sofr",description:"The Secured Overnight Financing Rate (SOFR) is a broad measure of the cost of borrowing cash overnight...",url:"/terminal/reference/fixedincome/sofr",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(a.Z,{title:"Sonia",description:"SONIA (Sterling Overnight Index Average) is an important interest rate benchmark. SONIA is based on actual...",url:"/terminal/reference/fixedincome/sonia",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(a.Z,{title:"Spot",description:"The spot rate for any maturity is the yield on a bond that provides a single payment at that maturity. This is a...",url:"/terminal/reference/fixedincome/spot",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(a.Z,{title:"Tbffr",description:"Get Selected Treasury Bill Minus Federal Funds Rate.",url:"/terminal/reference/fixedincome/tbffr",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(a.Z,{title:"Tmc",description:"Get 10-Year Treasury Constant Maturity Minus Selected Treasury Constant Maturity data. Constant maturity is the...",url:"/terminal/reference/fixedincome/tmc",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(a.Z,{title:"Treasury",description:"Plot short (3 month) and long (10 year) term interest rates from selected countries including the possibility to...",url:"/terminal/reference/fixedincome/treasury",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(a.Z,{title:"Usrates",description:"Plot various rates from the United States. This includes tbill (Treasury Bills), Constant Maturity treasuries...",url:"/terminal/reference/fixedincome/usrates",command:!0,mdxType:"ReferenceCard"}),(0,i.kt)(a.Z,{title:"Ycrv",description:"Generate US yield curve. The yield curve shows the bond ratesat different maturities. The graphic depiction of...",url:"/terminal/reference/fixedincome/ycrv",command:!0,mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);