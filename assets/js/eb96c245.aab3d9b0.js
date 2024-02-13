"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11882],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return a?n.createElement(f,s(s({ref:t},c),{},{components:a})):n.createElement(f,s({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(35742);function i(e){let{title:t}=e;return n.createElement(r.Z,null,n.createElement("title",null,t))}},75206:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),i=a(88828);const s={title:"fraud",description:"An in-depth look at various statistical models for detecting fraud in a company's reported earnings. Includes discussions on the Beneish model, Zmijewski Score, and McKee Score; and use of different indices like Days Sales in Receivables Index, Gross Margin Index, Asset Quality Index, and more.",keywords:["Beneish model","Zmijewski Score","McKee Score","Days Sales in Receivables Index","Gross Margin Index","Asset Quality Index","Sales Growth Index","Depreciation Index","Sales General and Administrative Expenses Index","Leverage Index","Total Accruals to Total Assets","Fraud detection","Earnings manipulation"]},o=void 0,l={unversionedId:"terminal/reference/stocks/fa/fraud",id:"terminal/reference/stocks/fa/fraud",title:"fraud",description:"An in-depth look at various statistical models for detecting fraud in a company's reported earnings. Includes discussions on the Beneish model, Zmijewski Score, and McKee Score; and use of different indices like Days Sales in Receivables Index, Gross Margin Index, Asset Quality Index, and more.",source:"@site/content/terminal/reference/stocks/fa/fraud.md",sourceDirName:"terminal/reference/stocks/fa",slug:"/terminal/reference/stocks/fa/fraud",permalink:"/terminal/reference/stocks/fa/fraud",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/fa/fraud.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1707846532,formattedLastUpdatedAt:"Feb 13, 2024",frontMatter:{title:"fraud",description:"An in-depth look at various statistical models for detecting fraud in a company's reported earnings. Includes discussions on the Beneish model, Zmijewski Score, and McKee Score; and use of different indices like Days Sales in Receivables Index, Gross Margin Index, Asset Quality Index, and more.",keywords:["Beneish model","Zmijewski Score","McKee Score","Days Sales in Receivables Index","Gross Margin Index","Asset Quality Index","Sales Growth Index","Depreciation Index","Sales General and Administrative Expenses Index","Leverage Index","Total Accruals to Total Assets","Fraud detection","Earnings manipulation"]},sidebar:"tutorialSidebar",previous:{title:"est",permalink:"/terminal/reference/stocks/fa/est"},next:{title:"growth",permalink:"/terminal/reference/stocks/fa/growth"}},d={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"stocks /fa/fraud - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"M-score: ------------------------------------------------ The Beneish model is a statistical model that uses financial ratios calculated with accounting data of a specific company in order to check if it is likely (high probability) that the reported earnings of the company have been manipulated. A score of -5 to -2.22 indicated a low chance of fraud, a score of -2.22 to -1.78 indicates a moderate change of fraud, and a score above -1.78 indicated a high chance of fraud.","[Source: Wikipedia]"," DSRI: Days Sales in Receivables Index gauges whether receivables and revenue are out of balance, a large number is expected to be associated with a higher likelihood that revenues and earnings are overstated. GMI: Gross Margin Index shows if gross margins are deteriorating. Research suggests that firms with worsening gross margin are more likely to engage in earnings management, therefore there should be a positive correlation between GMI and probability of earnings management. AQI: Asset Quality Index measures the proportion of assets where potential benefit is less certain. A positive relation between AQI and earnings manipulation is expected. SGI: Sales Growth Index shows the amount of growth companies are having. Higher growth companies are more likely to commit fraud so there should be a positive relation between SGI and earnings management. DEPI: Depreciation Index is the ratio for the rate of depreciation. A DEPI greater than 1 shows that the depreciation rate has slowed and is positively correlated with earnings management. SGAI: Sales General and Administrative Expenses Index measures the change in SG&A over sales. There should be a positive relationship between SGAI and earnings management. LVGI: Leverage Index represents change in leverage. A LVGI greater than one indicates a lower change of fraud. TATA: Total Accruals to Total Assets is a proxy for the extent that cash underlies earnings. A higher number is associated with a higher likelihood of manipulation. Z-score: ------------------------------------------------ The Zmijewski Score is a bankruptcy model used to predict a firm's bankruptcy in two years. The ratio uses in the Zmijewski score were determined by probit analysis (think of probit as probability unit). In this case, scores less than .5 represent a higher probability of default. One of the criticisms that Zmijewski made was that other bankruptcy scoring models oversampled distressed firms and favored situations with more complete data.","[Source: YCharts]"," McKee-score: ------------------------------------------------ The McKee Score is a bankruptcy model used to predict a firm's bankruptcy in one yearIt looks at a company's size, profitability, and liquidity to determine the probability.This model is 80% accurate in predicting bankruptcy."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"fraud [-t TICKER] [-e] [-d]\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ticker"),(0,r.kt)("td",{parentName:"tr",align:null},"-t  --ticker"),(0,r.kt)("td",{parentName:"tr",align:null},"Ticker to analyze"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exp"),(0,r.kt)("td",{parentName:"tr",align:null},"-e  --explanation"),(0,r.kt)("td",{parentName:"tr",align:null},"Shows an explanation for the metrics"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"detail"),(0,r.kt)("td",{parentName:"tr",align:null},"-d  --detail"),(0,r.kt)("td",{parentName:"tr",align:null},"Shows the details for calculating the mscore"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null))}m.isMDXComponent=!0}}]);