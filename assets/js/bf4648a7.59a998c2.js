"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87666],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=s(a),h=n,k=m["".concat(p,".").concat(h)]||m[h]||u[h]||i;return a?r.createElement(k,l(l({ref:e},d),{},{components:a})):r.createElement(k,l({ref:e},d))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},82721:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={title:"major_holders",description:"Get detailed information about equity ownership and stock ownership, including investment data, security data, market value data, shares data, performance data, and ownership data. Use the equity ownership API to retrieve equity ownership details, and explore various stock ownership parameters and returns. Access company ownership data, investor data, filing data, industry data, and more.",keywords:["equity ownership","company ownership","equity ownership API","equity ownership data","equity ownership parameters","equity ownership returns","equity ownership data fields","stock ownership","stock ownership data","stock ownership API","stock ownership parameters","stock ownership returns","stock ownership data fields","investment data","security data","market value data","shares data","performance data","ownership data","equity ownership details","stock ownership details","equity ownership information","stock ownership information","company ownership data","investor data","filing data","industry data"]},l=void 0,o={unversionedId:"excel/reference/library/equity/ownership/major_holders",id:"excel/reference/library/equity/ownership/major_holders",title:"major_holders",description:"Get detailed information about equity ownership and stock ownership, including investment data, security data, market value data, shares data, performance data, and ownership data. Use the equity ownership API to retrieve equity ownership details, and explore various stock ownership parameters and returns. Access company ownership data, investor data, filing data, industry data, and more.",source:"@site/content/excel/reference/library/equity/ownership/major_holders.md",sourceDirName:"excel/reference/library/equity/ownership",slug:"/excel/reference/library/equity/ownership/major_holders",permalink:"/excel/reference/library/equity/ownership/major_holders",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/library/equity/ownership/major_holders.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1702897661,formattedLastUpdatedAt:"Dec 18, 2023",frontMatter:{title:"major_holders",description:"Get detailed information about equity ownership and stock ownership, including investment data, security data, market value data, shares data, performance data, and ownership data. Use the equity ownership API to retrieve equity ownership details, and explore various stock ownership parameters and returns. Access company ownership data, investor data, filing data, industry data, and more.",keywords:["equity ownership","company ownership","equity ownership API","equity ownership data","equity ownership parameters","equity ownership returns","equity ownership data fields","stock ownership","stock ownership data","stock ownership API","stock ownership parameters","stock ownership returns","stock ownership data fields","investment data","security data","market value data","shares data","performance data","ownership data","equity ownership details","stock ownership details","equity ownership information","stock ownership information","company ownership data","investor data","filing data","industry data"]},sidebar:"tutorialSidebar",previous:{title:"institutional",permalink:"/excel/reference/library/equity/ownership/institutional"},next:{title:"share_statistics",permalink:"/excel/reference/library/equity/ownership/share_statistics"}},p={},s=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],d={toc:s},m="wrapper";function u(t){let{components:e,...a}=t;return(0,n.kt)(m,(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Equity Ownership. Information about the company ownership."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.EQUITY.OWNERSHIP.MAJOR_HOLDERS(required; [optional])\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol to get data for."),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Options: fmp"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"date"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"A specific date to get data for."),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"page"),(0,n.kt)("td",{parentName:"tr",align:null},"Number"),(0,n.kt)("td",{parentName:"tr",align:null},"Page number of the data to fetch."),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"return-data"},"Return Data"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"date"),(0,n.kt)("td",{parentName:"tr",align:null},"The date of the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cik"),(0,n.kt)("td",{parentName:"tr",align:null},"Central Index Key (CIK) for the requested entity.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"filing_date"),(0,n.kt)("td",{parentName:"tr",align:null},"Filing date of the stock ownership.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"investor_name"),(0,n.kt)("td",{parentName:"tr",align:null},"Investor name of the stock ownership.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"security_name"),(0,n.kt)("td",{parentName:"tr",align:null},"Security name of the stock ownership.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"type_of_security"),(0,n.kt)("td",{parentName:"tr",align:null},"Type of security of the stock ownership.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"security_cusip"),(0,n.kt)("td",{parentName:"tr",align:null},"Security cusip of the stock ownership.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"shares_type"),(0,n.kt)("td",{parentName:"tr",align:null},"Shares type of the stock ownership.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"put_call_share"),(0,n.kt)("td",{parentName:"tr",align:null},"Put call share of the stock ownership.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"investment_discretion"),(0,n.kt)("td",{parentName:"tr",align:null},"Investment discretion of the stock ownership.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"industry_title"),(0,n.kt)("td",{parentName:"tr",align:null},"Industry title of the stock ownership.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"weight"),(0,n.kt)("td",{parentName:"tr",align:null},"Weight of the stock ownership.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"last_weight"),(0,n.kt)("td",{parentName:"tr",align:null},"Last weight of the stock ownership.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"change_in_weight"),(0,n.kt)("td",{parentName:"tr",align:null},"Change in weight of the stock ownership.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"change_in_weight_percentage"),(0,n.kt)("td",{parentName:"tr",align:null},"Change in weight percentage of the stock ownership.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"market_value"),(0,n.kt)("td",{parentName:"tr",align:null},"Market value of the stock ownership.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"last_market_value"),(0,n.kt)("td",{parentName:"tr",align:null},"Last market value of the stock ownership.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"change_in_market_value"),(0,n.kt)("td",{parentName:"tr",align:null},"Change in market value of the stock ownership.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"change_in_market_value_percentage"),(0,n.kt)("td",{parentName:"tr",align:null},"Change in market value percentage of the stock ownership.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"shares_number"),(0,n.kt)("td",{parentName:"tr",align:null},"Shares number of the stock ownership.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"last_shares_number"),(0,n.kt)("td",{parentName:"tr",align:null},"Last shares number of the stock ownership.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"change_in_shares_number"),(0,n.kt)("td",{parentName:"tr",align:null},"Change in shares number of the stock ownership.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"change_in_shares_number_percentage"),(0,n.kt)("td",{parentName:"tr",align:null},"Change in shares number percentage of the stock ownership.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"quarter_end_price"),(0,n.kt)("td",{parentName:"tr",align:null},"Quarter end price of the stock ownership.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"avg_price_paid"),(0,n.kt)("td",{parentName:"tr",align:null},"Average price paid of the stock ownership.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"is_new"),(0,n.kt)("td",{parentName:"tr",align:null},"Is the stock ownership new.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"is_sold_out"),(0,n.kt)("td",{parentName:"tr",align:null},"Is the stock ownership sold out.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ownership"),(0,n.kt)("td",{parentName:"tr",align:null},"How much is the ownership.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"last_ownership"),(0,n.kt)("td",{parentName:"tr",align:null},"Last ownership amount.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"change_in_ownership"),(0,n.kt)("td",{parentName:"tr",align:null},"Change in ownership amount.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"change_in_ownership_percentage"),(0,n.kt)("td",{parentName:"tr",align:null},"Change in ownership percentage.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"holding_period"),(0,n.kt)("td",{parentName:"tr",align:null},"Holding period of the stock ownership.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"first_added"),(0,n.kt)("td",{parentName:"tr",align:null},"First added date of the stock ownership.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"performance"),(0,n.kt)("td",{parentName:"tr",align:null},"Performance of the stock ownership.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"performance_percentage"),(0,n.kt)("td",{parentName:"tr",align:null},"Performance percentage of the stock ownership.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"last_performance"),(0,n.kt)("td",{parentName:"tr",align:null},"Last performance of the stock ownership.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"change_in_performance"),(0,n.kt)("td",{parentName:"tr",align:null},"Change in performance of the stock ownership.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"is_counted_for_performance"),(0,n.kt)("td",{parentName:"tr",align:null},"Is the stock ownership counted for performance.")))))}u.isMDXComponent=!0}}]);