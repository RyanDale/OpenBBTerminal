"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32954],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),m=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=m(e.components);return n.createElement(d.Provider,{value:r},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=m(t),u=o,f=l["".concat(d,".").concat(u)]||l[u]||p[u]||a;return t?n.createElement(f,i(i({ref:r},s),{},{components:t})):n.createElement(f,i({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var d in r)hasOwnProperty.call(r,d)&&(c[d]=r[d]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var m=2;m<a;m++)i[m]=t[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>d});var n=t(39960),o=t(86010),a=t(67294),i=t(16550),c=t(48334);function d(e){let{title:r,url:t,description:d,command:m}=e;const{pathname:s}=(0,i.TH)(),l=s.replace(/\/v\d+/,""),p=!l.includes("/reference")&&!l.includes("/widgets-library/")&&!l.includes("/data_models");return a.createElement(n.Z,{className:(0,o.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":l.startsWith("/terminal")||l.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":l.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":l.startsWith("/sdk")||l.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":l.startsWith("/excel"),header_docs:!(l.startsWith("/terminal")||l.startsWith("/pro")||l.startsWith("/excel")||l.startsWith("/sdk")||l.startsWith("/platform")||l.startsWith("/bot"))}),to:t},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),a.createElement("div",{className:"flex items-center"},a.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),p&&a.createElement(c.Z,{className:"ml-auto mr-4"})),d?a.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},d):null)}},19466:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var n=t(87462),o=(t(67294),t(3905)),a=t(26515);const i={},c="Economy",d={unversionedId:"terminal/reference/economy/index",id:"terminal/reference/economy/index",title:"Economy",description:"Menus",source:"@site/content/terminal/reference/economy/index.mdx",sourceDirName:"terminal/reference/economy",slug:"/terminal/reference/economy/",permalink:"/terminal/reference/economy/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/economy/index.mdx",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1707846532,formattedLastUpdatedAt:"Feb 13, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"yret",permalink:"/terminal/reference/portfolio/yret"},next:{title:"Quantitative Analysis",permalink:"/terminal/reference/economy/qa/"}},m={},s=[{value:"Menus",id:"menus",level:3},{value:"Commands",id:"commands",level:3}],l={toc:s},p="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"economy"},"Economy"),(0,o.kt)("h3",{id:"menus"},"Menus"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"Qa",description:"decompose, unitroot, qqplot, bw, hist, line, spread, skew, kurtosis, normality, summary, load, cusum, rolling,...",url:"/terminal/reference/economy/qa",mdxType:"ReferenceCard"})),(0,o.kt)("h3",{id:"commands"},"Commands"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"Balance",description:"General government balance is defined as the balance of income and expenditure of government, including capital...",url:"/terminal/reference/economy/balance",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Bigmac",description:"Get historical Big Mac Index [Nasdaq Data Link]",url:"/terminal/reference/economy/bigmac",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Ccpi",description:"Inflation is measured in terms of the annual growth rate and in index, 2015 base year with a breakdown for food,...",url:"/terminal/reference/economy/ccpi",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Cpi",description:"Plot (harmonized) consumer price indices for a variety of countries and regions.",url:"/terminal/reference/economy/cpi",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Debt",description:"General government debt-to-GDP ratio measures the gross debt of the general government as a percentage of GDP. It...",url:"/terminal/reference/economy/debt",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Edebt",description:"National debt statistics for various countries. [Source: Wikipedia]",url:"/terminal/reference/economy/edebt",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Eval",description:"Create custom data column from loaded datasets. Can be mathematical expressions supported by pandas.eval()...",url:"/terminal/reference/economy/eval",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Events",description:"Economic calendar. If no start or end dates,default is the current day high importance events.",url:"/terminal/reference/economy/events",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Fgdp",description:"Forecast is based on an assessment of the economic climate in individual countries and the world economy, using a...",url:"/terminal/reference/economy/fgdp",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Fred",description:"Query the FRED database and plot data based on the Series ID. [Source: FRED]",url:"/terminal/reference/economy/fred",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Futures",description:"Futures/Commodities from Wall St. Journal and FinViz.",url:"/terminal/reference/economy/futures",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Gdp",description:"This indicator is based on nominal GDP (also called GDP at current prices or GDP in value) and is available in...",url:"/terminal/reference/economy/gdp",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Index_Cmd",description:"Obtain any set of indices and plot them together. With the -si argument the major indices are shown. By using the...",url:"/terminal/reference/economy/index_cmd",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Macro",description:"Get a broad selection of macro data from one or multiple countries. This includes Gross Domestic Product (RGDP &...",url:"/terminal/reference/economy/macro",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Map",description:"Performance index stocks map categorized by sectors and industries. Size represents market cap. Opens web-...",url:"/terminal/reference/economy/map",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Overview",description:"Provide a market overview of a variety of options. This can be a general overview, indices, bonds and currencies....",url:"/terminal/reference/economy/overview",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Performance",description:"View group (sectors, industry or country) performance data. [Source: Finviz]",url:"/terminal/reference/economy/performance",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Plot",description:"This command can plot any data on two y-axes obtained from the macro, fred, index and treasury commands. To be...",url:"/terminal/reference/economy/plot",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Revenue",description:"Governments collect revenues mainly for two purposes: to finance the goods and services they provide to citizens...",url:"/terminal/reference/economy/revenue",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Rgdp",description:"This indicator is based on real GDP (also called GDP at constant prices or GDP in volume), i.e. the developments...",url:"/terminal/reference/economy/rgdp",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Spending",description:"General government spending provides an indication of the size of government across countries. The large...",url:"/terminal/reference/economy/spending",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Treasury",description:"Obtain US treasury rates. Note: 3-month and 10-year treasury yields for other countries are available via the...",url:"/terminal/reference/economy/treasury",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Trust",description:"Trust in government refers to the share of people who report having confidence in the national government.",url:"/terminal/reference/economy/trust",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Usdli",description:"The USD Liquidity Index is defined as: [WALCL - WLRRAL - WDTGAL]. It is expressed in billions of USD.",url:"/terminal/reference/economy/usdli",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Valuation",description:"View group (sectors, industry or country) valuation data. [Source: Finviz]",url:"/terminal/reference/economy/valuation",command:!0,mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);