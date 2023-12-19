"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78421],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(a),c=n,g=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return a?r.createElement(g,l(l({ref:t},s),{},{components:a})):r.createElement(g,l({ref:t},s))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8428:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const i={title:"nbbo",description:"Learn how to load the National Best Bid and Offer (NBBO) for a specific equity using the OBB.equity.price.nbbo API. Explore the parameters and data returned by the query, including ask price, bid price, ask size, bid size, exchange details, timestamps, and more.",keywords:["Equity Quote","National Best Bid and Offer","specific equity","symbol","provider","polygon","query","limit","date","timestamp","OBBject","results","EquityNBBO","warnings","Chart","Metadata","ask_exchange","ask","ask_size","bid_size","bid","bid_exchange","tape","conditions","indicators","sequence_num","participant_timestamp","sip_timestamp","trf_timestamp","data"]},l=void 0,o={unversionedId:"excel/reference/library/equity/price/nbbo",id:"excel/reference/library/equity/price/nbbo",title:"nbbo",description:"Learn how to load the National Best Bid and Offer (NBBO) for a specific equity using the OBB.equity.price.nbbo API. Explore the parameters and data returned by the query, including ask price, bid price, ask size, bid size, exchange details, timestamps, and more.",source:"@site/content/excel/reference/library/equity/price/nbbo.md",sourceDirName:"excel/reference/library/equity/price",slug:"/excel/reference/library/equity/price/nbbo",permalink:"/excel/reference/library/equity/price/nbbo",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/library/equity/price/nbbo.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1702897661,formattedLastUpdatedAt:"Dec 18, 2023",frontMatter:{title:"nbbo",description:"Learn how to load the National Best Bid and Offer (NBBO) for a specific equity using the OBB.equity.price.nbbo API. Explore the parameters and data returned by the query, including ask price, bid price, ask size, bid size, exchange details, timestamps, and more.",keywords:["Equity Quote","National Best Bid and Offer","specific equity","symbol","provider","polygon","query","limit","date","timestamp","OBBject","results","EquityNBBO","warnings","Chart","Metadata","ask_exchange","ask","ask_size","bid_size","bid","bid_exchange","tape","conditions","indicators","sequence_num","participant_timestamp","sip_timestamp","trf_timestamp","data"]},sidebar:"tutorialSidebar",previous:{title:"historical",permalink:"/excel/reference/library/equity/price/historical"},next:{title:"performance",permalink:"/excel/reference/library/equity/price/performance"}},p={},d=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],s={toc:d},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Equity NBBO. Load National Best Bid and Offer for a specific equity."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.EQUITY.PRICE.NBBO(required; [optional])\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol to get data for."),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Options: polygon"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"limit"),(0,n.kt)("td",{parentName:"tr",align:null},"Number"),(0,n.kt)("td",{parentName:"tr",align:null},"The number of data entries to return. Up to ten million records will be returned. Pagination occurs in groups of 50,000. Remaining limit values will always return 50,000 more records unless it is the last page. High volume tickers will require multiple max requests for a single day's NBBO records. Expect stocks, like SPY, to approach 1GB in size, per day, as a raw CSV. Splitting large requests into chunks is recommended for full-day requests of high-volume symbols. (provider: polygon)"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"A specific date to get data for. Use bracketed the timestamp parameters to specify exact time ranges. (provider: polygon)"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timestamp_lt"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Query by datetime, less than. Either a date with the format YYYY-MM-DD or a TZ-aware timestamp string, YYYY-MM-DDTH:M:S.000000000-04:00\". Include all nanoseconds and the 'T' between the day and hour. (provider: polygon)"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timestamp_gt"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Query by datetime, greater than. Either a date with the format YYYY-MM-DD or a TZ-aware timestamp string, YYYY-MM-DDTH:M:S.000000000-04:00\". Include all nanoseconds and the 'T' between the day and hour. (provider: polygon)"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timestamp_lte"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Query by datetime, less than or equal to. Either a date with the format YYYY-MM-DD or a TZ-aware timestamp string, YYYY-MM-DDTH:M:S.000000000-04:00\". Include all nanoseconds and the 'T' between the day and hour. (provider: polygon)"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timestamp_gte"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Query by datetime, greater than or equal to. Either a date with the format YYYY-MM-DD or a TZ-aware timestamp string, YYYY-MM-DDTH:M:S.000000000-04:00\". Include all nanoseconds and the 'T' between the day and hour. (provider: polygon)"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"return-data"},"Return Data"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ask_exchange"),(0,n.kt)("td",{parentName:"tr",align:null},"The exchange ID for the ask.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ask"),(0,n.kt)("td",{parentName:"tr",align:null},"The last ask price.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ask_size"),(0,n.kt)("td",{parentName:"tr",align:null},"The ask size. This represents the number of round lot orders at the given ask price.         The normal round lot size is 100 shares.         An ask size of 2 means there are 200 shares available to purchase at the given ask price.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"bid_size"),(0,n.kt)("td",{parentName:"tr",align:null},"The bid size in round lots.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"bid"),(0,n.kt)("td",{parentName:"tr",align:null},"The last bid price.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"bid_exchange"),(0,n.kt)("td",{parentName:"tr",align:null},"The exchange ID for the bid.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"tape"),(0,n.kt)("td",{parentName:"tr",align:null},"The exchange tape. (provider: polygon)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"conditions"),(0,n.kt)("td",{parentName:"tr",align:null},"A list of condition codes. (provider: polygon)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"indicators"),(0,n.kt)("td",{parentName:"tr",align:null},"A list of indicator codes. (provider: polygon)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sequence_num"),(0,n.kt)("td",{parentName:"tr",align:null},"The sequence number represents the sequence in which message events happened.             These are increasing and unique per ticker symbol, but will not always be sequential             (e.g., 1, 2, 6, 9, 10, 11)          (provider: polygon)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"participant_timestamp"),(0,n.kt)("td",{parentName:"tr",align:null},"The nanosecond accuracy Participant/Exchange Unix Timestamp.             This is the timestamp of when the quote was actually generated at the exchange.          (provider: polygon)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sip_timestamp"),(0,n.kt)("td",{parentName:"tr",align:null},"The nanosecond accuracy SIP Unix Timestamp.             This is the timestamp of when the SIP received this quote from the exchange which produced it.          (provider: polygon)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"trf_timestamp"),(0,n.kt)("td",{parentName:"tr",align:null},"The nanosecond accuracy TRF (Trade Reporting Facility) Unix Timestamp.             This is the timestamp of when the trade reporting facility received this quote.          (provider: polygon)")))))}u.isMDXComponent=!0}}]);