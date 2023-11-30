"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62273],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),f=c(n),p=r,m=f["".concat(l,".").concat(p)]||f[p]||u[p]||i;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[f]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(35742);function i(e){let{title:t}=e;return a.createElement(r.Z,null,a.createElement("title",null,t))}},57015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),i=n(88828);const s={title:"stalker",description:"Stalker: A tool for tracking and printing the last messages of a Stocktwits user. Allows specification of the username and limit of messages to be shown. Helps users quickly retrieve and review the recent activity of a specific user.",keywords:["stalker","user messages","Stocktwits","username","message limit","programming documentation","message tracking"]},o=void 0,l={unversionedId:"terminal/reference/stocks/ba/stalker",id:"terminal/reference/stocks/ba/stalker",title:"stalker",description:"Stalker: A tool for tracking and printing the last messages of a Stocktwits user. Allows specification of the username and limit of messages to be shown. Helps users quickly retrieve and review the recent activity of a specific user.",source:"@site/content/terminal/reference/stocks/ba/stalker.md",sourceDirName:"terminal/reference/stocks/ba",slug:"/terminal/reference/stocks/ba/stalker",permalink:"/terminal/reference/stocks/ba/stalker",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/ba/stalker.md",tags:[],version:"current",lastUpdatedBy:"jose-donato",lastUpdatedAt:1701348039,formattedLastUpdatedAt:"Nov 30, 2023",frontMatter:{title:"stalker",description:"Stalker: A tool for tracking and printing the last messages of a Stocktwits user. Allows specification of the username and limit of messages to be shown. Helps users quickly retrieve and review the recent activity of a specific user.",keywords:["stalker","user messages","Stocktwits","username","message limit","programming documentation","message tracking"]},sidebar:"tutorialSidebar",previous:{title:"snews",permalink:"/terminal/reference/stocks/ba/snews"},next:{title:"trending",permalink:"/terminal/reference/stocks/ba/trending"}},c={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],f={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"stocks /ba/stalker - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Print up to the last 30 messages of a user. ","[Source: Stocktwits]"),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"stalker [-u S_USER] [-l LIMIT]\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"s_user"),(0,r.kt)("td",{parentName:"tr",align:null},"-u  --user"),(0,r.kt)("td",{parentName:"tr",align:null},"username."),(0,r.kt)("td",{parentName:"tr",align:null},"Newsfilter"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"-l  --limit"),(0,r.kt)("td",{parentName:"tr",align:null},"limit messages shown."),(0,r.kt)("td",{parentName:"tr",align:null},"30"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"2022 Feb 16, 10:44 (\ud83e\udd8b) /stocks/ba/ $ stalker\n\n------------------------------------------------------------------------------\n2022-02-16 15:44:24\n$APSI Form 8-K: On February 14, 2022, Aqua Power Systems acquired a digital asset commonly referred to as \u201cland\u201d within the Sandbox metaverse. The Sandbox is a decentralized, community-driven gaming e..\n\nhttps://newsfilter.io/a/077c80e3595e23f3a9adf089f24220d1\n\n------------------------------------------------------------------------------\n2022-02-16 15:44:04\n$ACT $GNW Increase in Long-Term Care Costs in Wisconsin Mirror National Trends; Labor Market Shifts and Continued COVID-19 Pressure Affect Future Costs\n\nhttps://newsfilter.io/a/acd6951639a15b873ff29dfe333c495e\n\n------------------------------------------------------------------------------\n2022-02-16 15:43:44\n$SYBT 2,571 shares acquired by Croce Michael (Executive Vice President), reported in a new form 4 filed with the SEC\n\nhttps://newsfilter.io/a/a9b224c7a3427af2d28a7d5482c2501a\n\n------------------------------------------------------------------------------\n2022-02-16 15:43:30\nThinking about trading options or stock in Roblox, Meta, Block, Trade Desk, or Devon Energy?  $DVN $FB $RBLX $SQ $TTD\n\nhttps://newsfilter.io/a/b7000be8e8b35ededc2abe4c246cd19a\n\n------------------------------------------------------------------------------\n2022-02-16 15:43:08\n$GRRB $338,254.00 of shares acquired by Schwiers James B (President &amp; COO), reported in a new form 4 filed with the SEC\n\nhttps://newsfilter.io/a/327d924ef4c507727b08b5f4989b1bd3\n\n------------------------------------------------------------------------------\n2022-02-16 15:42:07\n$ARLP 794 shares acquired by Cantrell Brian L (Senior VP and CFO), reported in a new form 4 filed with the SEC\n\nhttps://newsfilter.io/a/0310350cc25f4d15959334893bd916dc\n\n------------------------------------------------------------------------------\n2022-02-16 15:42:01\n$ACT $GNW Increase in Long-Term Care Costs in Texas Mirror National Trends; Labor Market Shifts and Continued COVID-19 Pressure Affect Future Costs\n\nhttps://newsfilter.io/a/e86d458d9e48cacd03bb0fc4ed9031aa\n\n------------------------------------------------------------------------------\n2022-02-16 15:41:26\n$PDLB Form 3/A (initial statement of beneficial ownership of securities) filed with the SEC\n\nhttps://newsfilter.io/a/ec79f2f0558259465e6ed6be37208891\n\n------------------------------------------------------------------------------\n2022-02-16 15:40:54\n$PDLB filed 2 new form 3/A (initial statement of beneficial ownership of securities) with the SEC in the last 2 minutes.\n\n1. filing: https://newsfilter.io/a/d1c358598d5b7d9917f135004753dd3c\n2. filing: https://newsfilter.io/a/e12fd3d79f67fe97b0349ebcec497594\n\n------------------------------------------------------------------------------\n2022-02-16 15:40:42\n$ZNTE Form DEFA14A (additional definitive proxy soliciting materials and rule 14(a)(12) material) filed with the SEC\n\nhttps://newsfilter.io/a/81a6d11a7d635b22d0b63d97724877ba\n\n------------------------------------------------------------------------------\n2022-02-16 15:40:08\nThinking about buying stock in Team, ViacomCBS, Kaival Brands, Ericsson, or Barrick Gold?  $ERIC $GOLD $KAVL $TISI $VIAC\n\nhttps://newsfilter.io/a/587588716a671414014bf779eab21059\n\n------------------------------------------------------------------------------\n2022-02-16 15:40:07\nThinking about buying stock in Vinco Ventures, SoFi Technologies, Ford, Vonage, or BP?  $BBIG $BP $F $SOFI $VG\n\nhttps://newsfilter.io/a/385fbe647e5e9ef2c9328bf3a9fbc9b6\n\n------------------------------------------------------------------------------\n2022-02-16 15:40:04\n$ACT $GNW Increase in Long-Term Care Costs in Tennessee Mirror National Trends; Labor Market Shifts and Continued COVID-19 Pressure Affect Future Costs\n\nhttps://newsfilter.io/a/f0544ef5b76170ad50bc8359bac658e2\n\n------------------------------------------------------------------------------\n2022-02-16 15:39:54\n$FTRP Field Trip Health Posts 330% YoY Increase In Q3 Revenue\n\nhttps://newsfilter.io/a/e2118ae4f28181fa49047b865af0ef41\n\n------------------------------------------------------------------------------\n2022-02-16 15:39:54\n$KHC Kraft Heinz Stock Gains On Q4 Earnings Beat\n\nhttps://newsfilter.io/a/4a57861cd3455555baa7cb88705225c5\n\n------------------------------------------------------------------------------\n2022-02-16 15:39:54\n$VIAC $CMCSA ViacomCBS Rebrands As Paramount: What You Need To Know\n\nhttps://newsfilter.io/a/1dee0b7add2966c50b08a6f213e69a4d\n\n------------------------------------------------------------------------------\n2022-02-16 15:38:56\n$ABNB Truist Securities analyst Naved Khan maintains Airbnb with a Hold and raises the price target from $180 to $190.\n\n------------------------------------------------------------------------------\n2022-02-16 15:38:01\n$ACT $GNW Change in Long-Term Care Costs in South Dakota Mixed; Labor Market Shifts and Continued COVID-19 Pressure Affect Future Costs\n\nhttps://newsfilter.io/a/157e15e71e3872ce73d3401098f3f855\n\n------------------------------------------------------------------------------\n2022-02-16 15:36:04\n$ACT $GNW Increase in Long-Term Care Costs in Oklahoma Mirror National Trends; Labor Market Shifts and Continued COVID-19 Pressure Affect Future Costs\n\nhttps://newsfilter.io/a/ad6f8e78a059110c0837d6eef45c8955\n\n------------------------------------------------------------------------------\n2022-02-16 15:35:42\n$ZNTE Form 8-K: Regulation FD Disclosure. As previously announced, Zanite Acquisition Corp. entered into a Business Combination Agreement with Embraer S.A. Embraer Aircraft Holding and EVE UAM, dated ..\n\nhttps://newsfilter.io/a/915ff8502b8a5c00b4664293ab6806ab\n\n------------------------------------------------------------------------------\n2022-02-16 15:35:30\n$HON Honeywell International was awarded a new government contract &quot;Repair of NIIN 014601334&quot;, total contract value: $4,959.84\n\nhttps://newsfilter.io/a/36789929e1dafa14b062a20b211e6aca\n\n------------------------------------------------------------------------------\n2022-02-16 15:35:02\n$TCFC $V Webinar: Bringing Credit Issuing In-House in 2022\n\nhttps://newsfilter.io/a/5dd17c223e94a8dc364e899a0eb95bb2\n\n------------------------------------------------------------------------------\n2022-02-16 15:34:51\n$NRUC Form 424B3 (prospectus ) filed with the SEC\n\nhttps://newsfilter.io/a/fe2b5bf1ac582d745f6fadb886126695\n\n------------------------------------------------------------------------------\n2022-02-16 15:34:27\n$ZNTE Form DEFA14A (additional definitive proxy soliciting materials and rule 14(a)(12) material) filed with the SEC https://newsfilter.io/a/c0d62bba8d60e10984b83bd681c3a455\n\n------------------------------------------------------------------------------\n2022-02-16 15:34:06\n$NGG NIAGARA MOHAWK POWER DECLARES PREFERRED STOCK DIVIDENDS\n\nhttps://newsfilter.io/a/60b80cf78256233915c4a4ecacfb2626\n\n------------------------------------------------------------------------------\n2022-02-16 15:34:05\n$PM Philip Morris International to Publish a Video Presentation at the 2022 Consumer Analyst Group of New York Virtual Conference\n\nhttps://newsfilter.io/a/adeaf7a6816bdc25b346f15c098f90cb\n\n------------------------------------------------------------------------------\n2022-02-16 15:34:01\n$ACT $GNW Change in Long-Term Care Costs in Nebraska Mixed; Labor Market Shifts and Continued COVID-19 Pressure Affect Future Costs\n\nhttps://newsfilter.io/a/f640abccc455086ae4b43f43ad4254fb\n\n------------------------------------------------------------------------------\n2022-02-16 15:33:07\n$PDLB Form 3/A (initial statement of beneficial ownership of securities) filed with the SEC\n\nhttps://newsfilter.io/a/bea839aee3a4f30dc384c7a90e21c701\n\n------------------------------------------------------------------------------\n2022-02-16 15:33:06\n$ALKT Texans Credit Union Partners with Alkami to Amplify Its Digital Banking Experience\n\nhttps://newsfilter.io/a/198d92eb6e1c481b825b830659af8698\n")),(0,r.kt)("hr",null))}p.isMDXComponent=!0}}]);