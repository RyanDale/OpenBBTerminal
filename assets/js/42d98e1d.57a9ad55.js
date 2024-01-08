"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32178],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},k="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),k=s(a),m=r,g=k["".concat(d,".").concat(m)]||k[m]||c[m]||l;return a?n.createElement(g,o(o({ref:e},p),{},{components:a})):n.createElement(g,o({ref:e},p))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[k]="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>l});var n=a(67294),r=a(35742);function l(t){let{title:e}=t;return n.createElement(r.Z,null,n.createElement("title",null,e))}},98156:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(88828);const o={title:"Trading Hours",description:"The Trading Hours sub-module provides functions for checking the status and hours of operation for markets globally. It allows users to understand which exchanges are currently open, all exchanges and their status, details for individual exchanges, and a list of closed exchanges.",keywords:["Trading Hours","Market Status","Stock Exchanges","Open Exchanges","Closed Exchanges","Individual Exchange Details","Global Markets"]},i=void 0,d={unversionedId:"sdk/data-available/stocks/trading-hours",id:"sdk/data-available/stocks/trading-hours",title:"Trading Hours",description:"The Trading Hours sub-module provides functions for checking the status and hours of operation for markets globally. It allows users to understand which exchanges are currently open, all exchanges and their status, details for individual exchanges, and a list of closed exchanges.",source:"@site/content/sdk/data-available/stocks/trading-hours.md",sourceDirName:"sdk/data-available/stocks",slug:"/sdk/data-available/stocks/trading-hours",permalink:"/sdk/data-available/stocks/trading-hours",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/data-available/stocks/trading-hours.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1704729450,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{title:"Trading Hours",description:"The Trading Hours sub-module provides functions for checking the status and hours of operation for markets globally. It allows users to understand which exchanges are currently open, all exchanges and their status, details for individual exchanges, and a list of closed exchanges.",keywords:["Trading Hours","Market Status","Stock Exchanges","Open Exchanges","Closed Exchanges","Individual Exchange Details","Global Markets"]},sidebar:"tutorialSidebar",previous:{title:"Stocks Screener",permalink:"/sdk/data-available/stocks/stocks-screener"},next:{title:"Crypto",permalink:"/sdk/data-available/crypto/"}},s={},p=[{value:"How to Use",id:"how-to-use",level:2},{value:"Examples",id:"examples",level:2},{value:"All",id:"all",level:3},{value:"Open",id:"open",level:3},{value:"Exchange",id:"exchange",level:3}],k={toc:p},c="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{title:"Trading Hours - Stocks - Intros - Usage | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"The Trading Hours sub-module is a set of functions for checking the status and hours of operation for markets globally."),(0,r.kt)("h2",{id:"how-to-use"},"How to Use"),(0,r.kt)("p",null,"There are only a handful of commands in the set, and they are listed below with a short description."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Path"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.th.open"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Which Exchanges are Currently Open")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.th.all"),(0,r.kt)("td",{parentName:"tr",align:"right"},"All Exchanges and Their Status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.th.exchange"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Details for Individual Exchanges")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.th.closed"),(0,r.kt)("td",{parentName:"tr",align:"right"},"List of Closed Exchanges")))),(0,r.kt)("p",null,"Alternatively, print the contents sub-module by entering:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"help(openbb.stocks.th)\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"all"},"All"),(0,r.kt)("p",null,"Get a list of global exchanges and their current status."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"openbb.stocks.th.all()\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"left"},"name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"short_name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"open"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SHZ"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Shenzen Stock Exchange"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SHZE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"KSC"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Korea Exchange"),(0,r.kt)("td",{parentName:"tr",align:"left"},"KRX"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"KOE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Korea Exchange"),(0,r.kt)("td",{parentName:"tr",align:"left"},"KRX"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CAI"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The Egyptian Exchange"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CA"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"PCX"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NYSE Arca"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ARCA"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SAT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nasdaq OMX Stockholm"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ST"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False")))),(0,r.kt)("h3",{id:"open"},"Open"),(0,r.kt)("p",null,"See which exchanges are open right now."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"openbb.stocks.th.open()\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"left"},"name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"short_name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CNQ"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Canadian Securities Exchange: CSE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"NZE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NZX"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NZ")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MCX"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MOEX"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ME")))),(0,r.kt)("h3",{id:"exchange"},"Exchange"),(0,r.kt)("p",null,"Get the schedule of an individual exchange."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"openbb.stocks.th.exchange('CNQ')\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"left"},"CNQ"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Canadian Securities Exchange: CSE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"short_name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"website"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.thecse.com/en/trading/trading-rules-and-links/trading-rules-and-regulations"},"https://www.thecse.com/en/trading/trading-rules-and-links/trading-rules-and-regulations"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"market_open"),(0,r.kt)("td",{parentName:"tr",align:"left"},"08:00:00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"market_close"),(0,r.kt)("td",{parentName:"tr",align:"left"},"18:00:00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"lunchbreak_start"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"lunchbreak_end"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"opening_auction_start"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"opening_auction_end"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"closing_auction_start"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"closing_auction_end"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"timezone"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Canada/Eastern")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"flag"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\ud83c\udde8\ud83c\udde6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"open"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True")))))}m.isMDXComponent=!0}}]);