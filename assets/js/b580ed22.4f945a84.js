"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76999],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=c(t),p=a,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var d={};for(var s in r)hasOwnProperty.call(r,s)&&(d[s]=r[s]);d.originalType=e,d[m]="string"==typeof e?e:a,i[1]=d;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(39960),a=t(86010),o=t(67294),i=t(16550),d=t(48334);function s(e){let{title:r,url:t,description:s,command:c}=e;const{pathname:l}=(0,i.TH)(),m=l.replace(/\/v\d+/,""),u=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":m.startsWith("/excel"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:t},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),u&&o.createElement(d.Z,{className:"ml-auto mr-4"})),s?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},s):null)}},78321:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=t(87462),a=(t(67294),t(3905)),o=t(26515);const i={},d="qa",s={unversionedId:"sdk/reference/qa/index",id:"sdk/reference/qa/index",title:"qa",description:"Commands",source:"@site/content/sdk/reference/qa/index.mdx",sourceDirName:"sdk/reference/qa",slug:"/sdk/reference/qa/",permalink:"/sdk/reference/qa/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/qa/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"valuation",permalink:"/sdk/reference/economy/valuation"},next:{title:"acf",permalink:"/sdk/reference/qa/acf"}},c={},l=[{value:"Commands",id:"commands",level:3}],m={toc:l},u="wrapper";function p(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"qa"},"qa"),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"Acf",description:"Plots Auto and Partial Auto Correlation of returns and change in returns",url:"/sdk/reference/qa/acf",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Bw",description:"Plots box and whisker plots",url:"/sdk/reference/qa/bw",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Calculate Adjusted Var",description:"Calculates VaR, which is adjusted for skew and kurtosis (Cornish-Fischer-Expansion)",url:"/sdk/reference/qa/calculate_adjusted_var",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Cdf",description:"Plots Cumulative Distribution Function",url:"/sdk/reference/qa/cdf",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Cusum",description:"Plots Cumulative sum algorithm (CUSUM) to detect abrupt changes in data",url:"/sdk/reference/qa/cusum",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Decompose",description:"Perform seasonal decomposition",url:"/sdk/reference/qa/decompose",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Es",description:"Gets Expected Shortfall for specified stock dataframe.",url:"/sdk/reference/qa/es",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Hist",description:"Plots histogram of data",url:"/sdk/reference/qa/hist",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Kurtosis",description:"Kurtosis Indicator",url:"/sdk/reference/qa/kurtosis",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Line",description:"Display line plot of data",url:"/sdk/reference/qa/line",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Normality",description:"Look at the distribution of returns and generate statistics on the relation to the normal curve.",url:"/sdk/reference/qa/normality",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Omega",description:"Get the omega series",url:"/sdk/reference/qa/omega",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Qqplot",description:"Plots QQ plot for data against normal quantiles",url:"/sdk/reference/qa/qqplot",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Quantile",description:"Overlay Median & Quantile",url:"/sdk/reference/qa/quantile",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Rolling",description:"Return rolling mean and standard deviation",url:"/sdk/reference/qa/rolling",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Sharpe",description:"Calculates the sharpe ratio",url:"/sdk/reference/qa/sharpe",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Skew",description:"Skewness Indicator",url:"/sdk/reference/qa/skew",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Sortino",description:"Calculates the sortino ratio",url:"/sdk/reference/qa/sortino",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Spread",description:"Standard Deviation and Variance",url:"/sdk/reference/qa/spread",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Summary",description:"Print summary statistics",url:"/sdk/reference/qa/summary",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Unitroot",description:"Calculate test statistics for unit roots",url:"/sdk/reference/qa/unitroot",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Var",description:"Gets value at risk for specified stock dataframe.",url:"/sdk/reference/qa/var",command:!0,mdxType:"ReferenceCard"})))}p.isMDXComponent=!0}}]);