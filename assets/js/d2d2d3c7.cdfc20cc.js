"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13889],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>_});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,_=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(_,s(s({ref:t},c),{},{components:r})):n.createElement(_,s({ref:t},c))}));function _(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(35742);function o(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},66719:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),o=r(88828);const s={title:"performance",description:"This page outlines the parameters and usage for retrieving performance data of various stocks, using predefined filter presets. It provides different ways of sorting and limiting the data output.",keywords:["performance data","filter presets","stock analysis","top performers","overbought stocks","oversold stocks","stock sorting","stock scanning","stock volatility","stock volume"]},l=void 0,i={unversionedId:"terminal/reference/stocks/screener/performance",id:"terminal/reference/stocks/screener/performance",title:"performance",description:"This page outlines the parameters and usage for retrieving performance data of various stocks, using predefined filter presets. It provides different ways of sorting and limiting the data output.",source:"@site/content/terminal/reference/stocks/screener/performance.md",sourceDirName:"terminal/reference/stocks/screener",slug:"/terminal/reference/stocks/screener/performance",permalink:"/terminal/reference/stocks/screener/performance",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/screener/performance.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1702897661,formattedLastUpdatedAt:"Dec 18, 2023",frontMatter:{title:"performance",description:"This page outlines the parameters and usage for retrieving performance data of various stocks, using predefined filter presets. It provides different ways of sorting and limiting the data output.",keywords:["performance data","filter presets","stock analysis","top performers","overbought stocks","oversold stocks","stock sorting","stock scanning","stock volatility","stock volume"]},sidebar:"tutorialSidebar",previous:{title:"ownership",permalink:"/terminal/reference/stocks/screener/ownership"},next:{title:"set",permalink:"/terminal/reference/stocks/screener/set"}},p={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],d={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"stocks /screener/performance - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Prints performance data of the companies that meet the pre-set filtering."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"performance [-p Desired preset.] [-l LIMIT] [-r] [-s SORTBY]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"preset"),(0,a.kt)("td",{parentName:"tr",align:null},"-p  --preset"),(0,a.kt)("td",{parentName:"tr",align:null},"Filter presets"),(0,a.kt)("td",{parentName:"tr",align:null},"top_gainers"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"sp500_communication_services_sector, golden_cross, buffett_like, cheap_bottom_dividend, golden_cross_penny, potential_reversals, djia_components, under_15dol_stocks, recent_growth_and_support, sp500_basic_materials_sector, sp500_energy_sector, modified_neff, unusual_volume, sp500_technology_sector, cheap_dividend, sexy_year, rosenwald, death_cross, sp500_consumer_cyclical_sector, oversold_under_5dol, sp500_industrials_sector, sp500_real_estate_sector, weak_support_and_top_performers, growth_stocks, sdk_guide_preset, sp500_financial_sector, channel_up_and_low_debt_and_sma_50and200, continued_momentum_scan, sp500_healthcare_sector, value_stocks, oversold_under_3dol, sp500_utilities_sector, simplistic_momentum_scanner_under_7dol, 5pct_above_low, top_performers_tech, stocks_strong_support_levels, oversold, rosenwald_gtfo, break_out_stocks, analyst_strong_buy, heavy_inst_ins, top_performers_healthcare, modified_dreman, sp500_consumer_defensive_sector, top_performers_all, short_squeeze_scan, undervalue, cheap_oversold, news_scanner, bull_runs_over_10pct, high_vol_and_low_debt, top_gainers, top_losers, new_high, new_low, most_volatile, most_active, overbought, downgrades, upgrades, earnings_before, earnings_after, recent_insider_buying, recent_insider_selling, major_news, horizontal_sr, tl_resistance, tl_support, wedge_up, wedge_down, wedge, triangle_ascending, triangle_descending, channel_up, channel_down, channel, double_top, double_bottom, multiple_top, multiple_bottom, head_shoulders, head_shoulders_inverse")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"-l  --limit"),(0,a.kt)("td",{parentName:"tr",align:null},"Limit of stocks to print"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reverse"),(0,a.kt)("td",{parentName:"tr",align:null},"-r  --reverse"),(0,a.kt)("td",{parentName:"tr",align:null},"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sort"),(0,a.kt)("td",{parentName:"tr",align:null},"-s  --sort"),(0,a.kt)("td",{parentName:"tr",align:null},"Sort elements of the table."),(0,a.kt)("td",{parentName:"tr",align:null},"ytd"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"ticker, 1w, 1m, 3m, 6m, 1y, ytd, 1wvolatility, 1mvolatility, recom, avgvolume, relvolume, price, change, volume")))),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);