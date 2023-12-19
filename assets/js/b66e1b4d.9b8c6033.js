"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62283],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=p(n),g=r,k=s["".concat(d,".").concat(g)]||s[g]||u[g]||l;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},93099:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"income",description:"Get income statement and financial performance data for a company. Parameters include symbol, period, limit, provider, and more. Data includes revenue, gross profit, operating expenses, net income, and more.",keywords:["income statement","financial performance","get income data","period","limit","provider","symbol","cik","filing date","period of report date","include sources","order","sort","revenue","cost of revenue","gross profit","cost and expenses","research and development expenses","general and administrative expenses","selling and marketing expenses","other expenses","operating expenses","depreciation and amortization","ebitda","operating income","interest income","interest expense","income before tax","income tax expense","net income","eps","weighted average shares outstanding","link","reported currency","filling date","accepted date","calendar year"]},i=void 0,o={unversionedId:"excel/reference/library/equity/fundamental/income",id:"excel/reference/library/equity/fundamental/income",title:"income",description:"Get income statement and financial performance data for a company. Parameters include symbol, period, limit, provider, and more. Data includes revenue, gross profit, operating expenses, net income, and more.",source:"@site/content/excel/reference/library/equity/fundamental/income.md",sourceDirName:"excel/reference/library/equity/fundamental",slug:"/excel/reference/library/equity/fundamental/income",permalink:"/excel/reference/library/equity/fundamental/income",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/library/equity/fundamental/income.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1702897661,formattedLastUpdatedAt:"Dec 18, 2023",frontMatter:{title:"income",description:"Get income statement and financial performance data for a company. Parameters include symbol, period, limit, provider, and more. Data includes revenue, gross profit, operating expenses, net income, and more.",keywords:["income statement","financial performance","get income data","period","limit","provider","symbol","cik","filing date","period of report date","include sources","order","sort","revenue","cost of revenue","gross profit","cost and expenses","research and development expenses","general and administrative expenses","selling and marketing expenses","other expenses","operating expenses","depreciation and amortization","ebitda","operating income","interest income","interest expense","income before tax","income tax expense","net income","eps","weighted average shares outstanding","link","reported currency","filling date","accepted date","calendar year"]},sidebar:"tutorialSidebar",previous:{title:"historical_splits",permalink:"/excel/reference/library/equity/fundamental/historical_splits"},next:{title:"income_growth",permalink:"/excel/reference/library/equity/fundamental/income_growth"}},d={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],m={toc:p},s="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(s,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Income Statement. Report on a company's financial performance."),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.EQUITY.FUNDAMENTAL.INCOME(required; [optional])\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol to get data for."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provider"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Options: fmp, intrinio, polygon"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Time period of the data to return."),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of data entries to return."),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cik"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"The CIK of the company if no symbol is provided. (provider: fmp)"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filing_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Filing date of the financial statement. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filing_date_lt"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Filing date less than the given date. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filing_date_lte"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Filing date less than or equal to the given date. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filing_date_gt"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Filing date greater than the given date. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filing_date_gte"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Filing date greater than or equal to the given date. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period_of_report_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Period of report date of the financial statement. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period_of_report_date_lt"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Period of report date less than the given date. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period_of_report_date_lte"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Period of report date less than or equal to the given date. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period_of_report_date_gt"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Period of report date greater than the given date. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period_of_report_date_gte"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Period of report date greater than or equal to the given date. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_sources"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to include the sources of the financial statement. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"order"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Order of the financial statement. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sort"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Sort of the financial statement. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"return-data"},"Return Data"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"The date of the data. In this case, the date of the income statement.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period"),(0,r.kt)("td",{parentName:"tr",align:null},"Period of the income statement.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cik"),(0,r.kt)("td",{parentName:"tr",align:null},"Central Index Key (CIK) for the requested entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"revenue"),(0,r.kt)("td",{parentName:"tr",align:null},"Revenue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cost_of_revenue"),(0,r.kt)("td",{parentName:"tr",align:null},"Cost of revenue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gross_profit"),(0,r.kt)("td",{parentName:"tr",align:null},"Gross profit.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cost_and_expenses"),(0,r.kt)("td",{parentName:"tr",align:null},"Cost and expenses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gross_profit_ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"Gross profit ratio.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"research_and_development_expenses"),(0,r.kt)("td",{parentName:"tr",align:null},"Research and development expenses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"general_and_administrative_expenses"),(0,r.kt)("td",{parentName:"tr",align:null},"General and administrative expenses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selling_and_marketing_expenses"),(0,r.kt)("td",{parentName:"tr",align:null},"Selling and marketing expenses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selling_general_and_administrative_expenses"),(0,r.kt)("td",{parentName:"tr",align:null},"Selling, general and administrative expenses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"other_expenses"),(0,r.kt)("td",{parentName:"tr",align:null},"Other expenses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"operating_expenses"),(0,r.kt)("td",{parentName:"tr",align:null},"Operating expenses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"depreciation_and_amortization"),(0,r.kt)("td",{parentName:"tr",align:null},"Depreciation and amortization.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ebit"),(0,r.kt)("td",{parentName:"tr",align:null},"Earnings before interest, and taxes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ebitda"),(0,r.kt)("td",{parentName:"tr",align:null},"Earnings before interest, taxes, depreciation and amortization.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ebitda_ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"Earnings before interest, taxes, depreciation and amortization ratio.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"operating_income"),(0,r.kt)("td",{parentName:"tr",align:null},"Operating income.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"operating_income_ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"Operating income ratio.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"interest_income"),(0,r.kt)("td",{parentName:"tr",align:null},"Interest income.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"interest_expense"),(0,r.kt)("td",{parentName:"tr",align:null},"Interest expense.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"total_other_income_expenses_net"),(0,r.kt)("td",{parentName:"tr",align:null},"Total other income expenses net.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"income_before_tax"),(0,r.kt)("td",{parentName:"tr",align:null},"Income before tax.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"income_before_tax_ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"Income before tax ratio.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"income_tax_expense"),(0,r.kt)("td",{parentName:"tr",align:null},"Income tax expense.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_income"),(0,r.kt)("td",{parentName:"tr",align:null},"Net income.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_income_ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"Net income ratio.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eps"),(0,r.kt)("td",{parentName:"tr",align:null},"Earnings per share.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eps_diluted"),(0,r.kt)("td",{parentName:"tr",align:null},"Earnings per share diluted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"weighted_average_shares_outstanding"),(0,r.kt)("td",{parentName:"tr",align:null},"Weighted average shares outstanding.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"weighted_average_shares_outstanding_dil"),(0,r.kt)("td",{parentName:"tr",align:null},"Weighted average shares outstanding diluted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"link"),(0,r.kt)("td",{parentName:"tr",align:null},"Link to the income statement.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"final_link"),(0,r.kt)("td",{parentName:"tr",align:null},"Final link to the income statement.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reportedCurrency"),(0,r.kt)("td",{parentName:"tr",align:null},"Reporting currency. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fillingDate"),(0,r.kt)("td",{parentName:"tr",align:null},"Filling date. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accepted_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Accepted date. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"calendar_year"),(0,r.kt)("td",{parentName:"tr",align:null},"Calendar year. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"operating_revenue"),(0,r.kt)("td",{parentName:"tr",align:null},"Operating revenue. (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"operating_cost_of_revenue"),(0,r.kt)("td",{parentName:"tr",align:null},"Operating cost of revenue. (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_income_continuing"),(0,r.kt)("td",{parentName:"tr",align:null},"Net income from continuing operations. (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_income_to_common"),(0,r.kt)("td",{parentName:"tr",align:null},"Net income to common shareholders. (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cash_dividends_per_share"),(0,r.kt)("td",{parentName:"tr",align:null},"Cash dividends per share. (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"other_income"),(0,r.kt)("td",{parentName:"tr",align:null},"Other income. (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"weighted_ave_basic_diluted_shares_os"),(0,r.kt)("td",{parentName:"tr",align:null},"Weighted average basic and diluted shares outstanding. (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"income_loss_from_continuing_operations_before_tax"),(0,r.kt)("td",{parentName:"tr",align:null},"Income/Loss From Continuing Operations After Tax (provider: polygon)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"income_loss_from_continuing_operations_after_tax"),(0,r.kt)("td",{parentName:"tr",align:null},"Income (loss) from continuing operations after tax (provider: polygon)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"benefits_costs_expenses"),(0,r.kt)("td",{parentName:"tr",align:null},"Benefits, costs and expenses (provider: polygon)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_income_loss_attributable_to_noncontrolling_interest"),(0,r.kt)("td",{parentName:"tr",align:null},"Net income (loss) attributable to noncontrolling interest (provider: polygon)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_income_loss_attributable_to_parent"),(0,r.kt)("td",{parentName:"tr",align:null},"Net income (loss) attributable to parent (provider: polygon)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_income_loss_available_to_common_stockholders_basic"),(0,r.kt)("td",{parentName:"tr",align:null},"Net Income/Loss Available To Common Stockholders Basic (provider: polygon)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"participating_securities_distributed_and_undistributed_earnings_loss_basic"),(0,r.kt)("td",{parentName:"tr",align:null},"Participating Securities Distributed And Undistributed Earnings Loss Basic (provider: polygon)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nonoperating_income_loss"),(0,r.kt)("td",{parentName:"tr",align:null},"Nonoperating Income Loss (provider: polygon)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"preferred_stock_dividends_and_other_adjustments"),(0,r.kt)("td",{parentName:"tr",align:null},"Preferred stock dividends and other adjustments (provider: polygon)")))))}u.isMDXComponent=!0}}]);