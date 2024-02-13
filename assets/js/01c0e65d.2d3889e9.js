"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19778],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),o=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=o(t.components);return r.createElement(d.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=o(a),g=n,c=u["".concat(d,".").concat(g)]||u[g]||s[g]||l;return a?r.createElement(c,i(i({ref:e},m),{},{components:a})):r.createElement(c,i({ref:e},m))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=g;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[u]="string"==typeof t?t:n,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>l});var r=a(67294),n=a(35742);function l(t){let{title:e}=t;return r.createElement(n.Z,null,r.createElement("title",null,e))}},40650:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),l=a(88828);const i={title:"PRICE_TARGET",description:"Get price target data for an equity symbol. Retrieve information such as publication date, analyst details, price target, and more. Supports multiple symbols and customizable providers.",keywords:["price target data","equity estimates","symbol","provider","grade","published date","news URL","news title","analyst name","analyst company","price target","adjusted price target","price when posted","news publisher","news base URL"]},p=void 0,d={unversionedId:"excel/reference/equity/estimates/price_target",id:"excel/reference/equity/estimates/price_target",title:"PRICE_TARGET",description:"Get price target data for an equity symbol. Retrieve information such as publication date, analyst details, price target, and more. Supports multiple symbols and customizable providers.",source:"@site/content/excel/reference/equity/estimates/price_target.md",sourceDirName:"excel/reference/equity/estimates",slug:"/excel/reference/equity/estimates/price_target",permalink:"/excel/reference/equity/estimates/price_target",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/estimates/price_target.md",tags:[],version:"current",frontMatter:{title:"PRICE_TARGET",description:"Get price target data for an equity symbol. Retrieve information such as publication date, analyst details, price target, and more. Supports multiple symbols and customizable providers.",keywords:["price target data","equity estimates","symbol","provider","grade","published date","news URL","news title","analyst name","analyst company","price target","adjusted price target","price when posted","news publisher","news base URL"]},sidebar:"tutorialSidebar",previous:{title:"HISTORICAL",permalink:"/excel/reference/equity/estimates/historical"},next:{title:"EQUITY.PRICE",permalink:"/excel/reference/equity/price/"}},o={},m=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],u={toc:m},s="wrapper";function g(t){let{components:e,...a}=t;return(0,n.kt)(s,(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"EQUITY.ESTIMATES.PRICE_TARGET | OpenBB Add-in for Excel Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Price Target. Price target data."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.EQUITY.ESTIMATES.PRICE_TARGET(symbol,[limit],[provider],[fields],[date],[date_from],[date_to],[importance],[updated],[action],[analyst],[firm],[with_grade])\n")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},'=OBB.EQUITY.ESTIMATES.PRICE_TARGET("AAPL")\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"symbol")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Text")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Symbol to get data for.")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"True"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"limit"),(0,n.kt)("td",{parentName:"tr",align:null},"Number"),(0,n.kt)("td",{parentName:"tr",align:null},"The number of data entries to return."),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Options: benzinga, fmp, defaults to benzinga."),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fields"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Comma-separated list of fields to include in the response. See ",(0,n.kt)("a",{parentName:"td",href:"https://docs.benzinga.io/benzinga-apis/calendar/get-ratings"},"https://docs.benzinga.io/benzinga-apis/calendar/get-ratings")," to learn about the available fields. (provider: benzinga)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"date"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Date for calendar data, shorthand for date_from and date_to. (provider: benzinga)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"date_from"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Date to query from point in time. (provider: benzinga)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"date_to"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Date to query to point in time. (provider: benzinga)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"importance"),(0,n.kt)("td",{parentName:"tr",align:null},"Number"),(0,n.kt)("td",{parentName:"tr",align:null},"Importance level to filter by. (provider: benzinga)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"updated"),(0,n.kt)("td",{parentName:"tr",align:null},"Number"),(0,n.kt)("td",{parentName:"tr",align:null},"Records last updated Unix timestamp (UTC). (provider: benzinga)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"action"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Filter by a specific action_company. (provider: benzinga)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"analyst"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Comma-separated list of analyst (person) IDs. (provider: benzinga)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"firm"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Comma-separated list of analyst firm IDs. (provider: benzinga)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"with_grade"),(0,n.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"Include upgrades and downgrades in the response. (provider: fmp)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"return-data"},"Return Data"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"published_date"),(0,n.kt)("td",{parentName:"tr",align:null},"Published date of the price target.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"news_url"),(0,n.kt)("td",{parentName:"tr",align:null},"News URL of the price target.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"news_title"),(0,n.kt)("td",{parentName:"tr",align:null},"News title of the price target.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"analyst_name"),(0,n.kt)("td",{parentName:"tr",align:null},"Analyst name.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"analyst_company"),(0,n.kt)("td",{parentName:"tr",align:null},"Analyst company.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"price_target"),(0,n.kt)("td",{parentName:"tr",align:null},"Price target.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"adj_price_target"),(0,n.kt)("td",{parentName:"tr",align:null},"Adjusted price target.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"price_when_posted"),(0,n.kt)("td",{parentName:"tr",align:null},"Price when posted.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"news_publisher"),(0,n.kt)("td",{parentName:"tr",align:null},"News publisher of the price target.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"news_base_url"),(0,n.kt)("td",{parentName:"tr",align:null},"News base URL of the price target.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"action_company"),(0,n.kt)("td",{parentName:"tr",align:null},"Description of the change in rating from firm's last rating.Note that all of these terms are precisely defined. (provider: benzinga)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"action_pt"),(0,n.kt)("td",{parentName:"tr",align:null},"Description of the change in price target from firm's last price target. (provider: benzinga)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"adjusted_pt_prior"),(0,n.kt)("td",{parentName:"tr",align:null},"Analyst's prior price target, adjusted to account for stock splits and stock dividends. If none are applicable, the pt_prior value is used. (provider: benzinga)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"analyst_id"),(0,n.kt)("td",{parentName:"tr",align:null},"Id of the analyst. (provider: benzinga)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"currency"),(0,n.kt)("td",{parentName:"tr",align:null},"Currency the data is denominated in. (provider: benzinga)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exchange"),(0,n.kt)("td",{parentName:"tr",align:null},"Exchange of the price target. (provider: benzinga)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"Unique ID of this entry. (provider: benzinga)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"importance"),(0,n.kt)("td",{parentName:"tr",align:null},"Subjective Basis of How Important Event is to Market. 5 = High (provider: benzinga)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"notes"),(0,n.kt)("td",{parentName:"tr",align:null},"Notes of the price target. (provider: benzinga)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pt_prior"),(0,n.kt)("td",{parentName:"tr",align:null},"Analyst's prior price target. (provider: benzinga)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rating_current"),(0,n.kt)("td",{parentName:"tr",align:null},"The analyst's rating for the company. (provider: benzinga)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rating_prior"),(0,n.kt)("td",{parentName:"tr",align:null},"Prior analyst rating for the company. (provider: benzinga)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ratings_accuracy"),(0,n.kt)("td",{parentName:"tr",align:null},"Ratings accuracy of the price target. (provider: benzinga)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"time"),(0,n.kt)("td",{parentName:"tr",align:null},"Last updated timestamp, UTC. (provider: benzinga)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"updated"),(0,n.kt)("td",{parentName:"tr",align:null},"Last updated timestamp, UTC. (provider: benzinga)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"url"),(0,n.kt)("td",{parentName:"tr",align:null},"URL for analyst ratings page for this ticker on Benzinga.com. (provider: benzinga)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"url_calendar"),(0,n.kt)("td",{parentName:"tr",align:null},"URL for analyst ratings page for this ticker on Benzinga.com. (provider: benzinga)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of company that is subject of rating. (provider: benzinga)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"new_grade"),(0,n.kt)("td",{parentName:"tr",align:null},"New grade (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"previous_grade"),(0,n.kt)("td",{parentName:"tr",align:null},"Previous grade (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"grading_company"),(0,n.kt)("td",{parentName:"tr",align:null},"Grading company (provider: fmp)")))))}g.isMDXComponent=!0}}]);