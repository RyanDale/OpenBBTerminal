"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=l(n),u=a,h=p["".concat(c,".").concat(u)]||p[u]||m[u]||i;return n?r.createElement(h,s(s({ref:t},d),{},{components:n})):r.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(35742);function i(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},69151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),i=n(88828);const s={title:"Discovery",description:"This documentation page is an introduction to the Discovery sub-menu, within Stocks, of the OpenBB Terminal. Functions in this menu include stock lists, calendars, trending moves and an S&P 500 heatmap.",keywords:["Stocks Discovery","following trends","current events","gainers","losers","most active","calendar","dividend","earnings","Seeking Alpha news","S&P 500","heatmap","ark","penny stocks"]},o=void 0,c={unversionedId:"terminal/menus/stocks/disc",id:"terminal/menus/stocks/disc",title:"Discovery",description:"This documentation page is an introduction to the Discovery sub-menu, within Stocks, of the OpenBB Terminal. Functions in this menu include stock lists, calendars, trending moves and an S&P 500 heatmap.",source:"@site/content/terminal/menus/stocks/disc.md",sourceDirName:"terminal/menus/stocks",slug:"/terminal/menus/stocks/disc",permalink:"/terminal/menus/stocks/disc",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/menus/stocks/disc.md",tags:[],version:"current",lastUpdatedBy:"teh_coderer",lastUpdatedAt:1700872066,formattedLastUpdatedAt:"Nov 25, 2023",frontMatter:{title:"Discovery",description:"This documentation page is an introduction to the Discovery sub-menu, within Stocks, of the OpenBB Terminal. Functions in this menu include stock lists, calendars, trending moves and an S&P 500 heatmap.",keywords:["Stocks Discovery","following trends","current events","gainers","losers","most active","calendar","dividend","earnings","Seeking Alpha news","S&P 500","heatmap","ark","penny stocks"]},sidebar:"tutorialSidebar",previous:{title:"Dark Pools & Short Data",permalink:"/terminal/menus/stocks/dark-pool-shorts"},next:{title:"Fundamental Analysis",permalink:"/terminal/menus/stocks/fa"}},l={},d=[{value:"Usage",id:"usage",level:2},{value:"DIVCAL",id:"divcal",level:3},{value:"Upcoming",id:"upcoming",level:3},{value:"Filings",id:"filings",level:3}],p={toc:d},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{title:"Discovery - Stocks - Menus | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"The Discovery menu has functions for upcoming corporate calendar events and stock lists.  Commands in this menu are not ticker-specific and do not require a symbol to be loaded."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Enter the Discovery menu from the ",(0,a.kt)("inlineCode",{parentName:"p"},"/stocks")," menu by typing ",(0,a.kt)("inlineCode",{parentName:"p"},"disc")," into the Terminal, or through the absolute path:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/disc\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/94d61da1-a04e-4d03-87bc-1d95443dc851",alt:"Screenshot 2023-11-01 at 9 34 25\u202fAM"})),(0,a.kt)("h3",{id:"divcal"},"DIVCAL"),(0,a.kt)("p",null,"The dividend calendar will display single dates, and does not provide historical data.  The ",(0,a.kt)("inlineCode",{parentName:"p"},"date")," will be with respect to the ex-dividend date."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/disc/divcal\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/d99e5973-6a49-441d-bb4d-5a60139f7334",alt:"Screenshot 2023-11-01 at 9 43 46\u202fAM"})),(0,a.kt)("h3",{id:"upcoming"},"Upcoming"),(0,a.kt)("p",null,"Check the upcoming earnings schedule using, ",(0,a.kt)("inlineCode",{parentName:"p"},"upcoming"),".  The ",(0,a.kt)("inlineCode",{parentName:"p"},"limit")," parameter represents the number of days to look ahead."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/disc/upcoming --start 2023-11-02 --limit 5\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/99fc4bec-7ffe-4b98-bf98-e791c81aab3a",alt:"Screenshot 2023-11-01 at 9 47 27\u202fAM"})),(0,a.kt)("h3",{id:"filings"},"Filings"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"filings")," command is the RSS feed of latest filings to the SEC.  The results are printed directly to the screen, or they can be exported with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--export")," command.  To see all the entries from today, add ",(0,a.kt)("inlineCode",{parentName:"p"},"--today")," to the command.  By default, the five most-recent documents will be displayed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/disc/filings\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"Timestamp: 2023-11-01 12:44:49  US/Eastern\nTicker: NVO\nCIK: 353278\nForm Type: 6-K\n6-K - NOVO NORDISK A S (0000353278) (Filer)\nhttps://www.sec.gov/Archives/edgar/data/353278/000117184323006584/0001171843-23-006584-index.htm\n\nTimestamp: 2023-11-01 12:44:49  US/Eastern\nTicker: NONOF\nCIK: 353278\nForm Type: 6-K\n6-K - NOVO NORDISK A S (0000353278) (Filer)\nhttps://www.sec.gov/Archives/edgar/data/353278/000117184323006584/0001171843-23-006584-index.htm\n\nTimestamp: 2023-11-01 12:38:55  US/Eastern\nTicker: None\nCIK: 1715593\nForm Type: 13F-HR\n13F-HR - Csenge Advisory Group (0001715593) (Filer)\nhttps://www.sec.gov/Archives/edgar/data/1715593/000171559323000007/0001715593-23-000007-index.htm\n\nTimestamp: 2023-11-01 12:36:58  US/Eastern\nTicker: HMY\nCIK: 1023514\nForm Type: 6-K\n6-K - HARMONY GOLD MINING CO LTD (0001023514) (Filer)\nhttps://www.sec.gov/Archives/edgar/data/1023514/000162828023035854/0001628280-23-035854-index.htm\n\nTimestamp: 2023-11-01 12:36:58  US/Eastern\nTicker: HGMCF\nCIK: 1023514\nForm Type: 6-K\n6-K - HARMONY GOLD MINING CO LTD (0001023514) (Filer)\nhttps://www.sec.gov/Archives/edgar/data/1023514/000162828023035854/0001628280-23-035854-index.htm\n")))}u.isMDXComponent=!0}}]);