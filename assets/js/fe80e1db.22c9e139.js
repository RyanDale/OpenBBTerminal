"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[23258],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,g=d["".concat(o,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(35742);function i(e){let{title:t}=e;return a.createElement(r.Z,null,a.createElement("title",null,t))}},98252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),i=n(88828);const l={title:"trending",description:"The 'Trending' page provides the latest news articles sourced from Seeking Alpha. Users can access articles by ID, limit the number of articles displayed, and filter by start date.",keywords:["Trending","News Articles","Seeking Alpha","Article ID","Article Limit","Start Date"]},s=void 0,o={unversionedId:"terminal/reference/stocks/disc/trending",id:"terminal/reference/stocks/disc/trending",title:"trending",description:"The 'Trending' page provides the latest news articles sourced from Seeking Alpha. Users can access articles by ID, limit the number of articles displayed, and filter by start date.",source:"@site/content/terminal/reference/stocks/disc/trending.md",sourceDirName:"terminal/reference/stocks/disc",slug:"/terminal/reference/stocks/disc/trending",permalink:"/terminal/reference/stocks/disc/trending",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/disc/trending.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1704729450,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{title:"trending",description:"The 'Trending' page provides the latest news articles sourced from Seeking Alpha. Users can access articles by ID, limit the number of articles displayed, and filter by start date.",keywords:["Trending","News Articles","Seeking Alpha","Article ID","Article Limit","Start Date"]},sidebar:"tutorialSidebar",previous:{title:"rtat",permalink:"/terminal/reference/stocks/disc/rtat"},next:{title:"ugs",permalink:"/terminal/reference/stocks/disc/ugs"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"stocks /disc/trending - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Trending news articles. ","[Source: Seeking Alpha]"),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"trending [-i N_ID] [-l LIMIT] [-d S_DATE]\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"n_id"),(0,r.kt)("td",{parentName:"tr",align:null},"-i  --id"),(0,r.kt)("td",{parentName:"tr",align:null},"article ID"),(0,r.kt)("td",{parentName:"tr",align:null},"-1"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"-l  --limit"),(0,r.kt)("td",{parentName:"tr",align:null},"limit of articles being printed"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"s_date"),(0,r.kt)("td",{parentName:"tr",align:null},"-d  --date"),(0,r.kt)("td",{parentName:"tr",align:null},"starting date of articles"),(0,r.kt)("td",{parentName:"tr",align:null},"2024-01-08"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"2022 Feb 16, 04:13 (\ud83e\udd8b) /stocks/disc/ $ trending -i 10\n2010-03-21 08:33:21   Deutsche Bank's Marc Greenberg can't justify the BUD deal. But he says Bud Light Lime is the...\nhttps://seekingalpha.com/news/10\n\n Deutsche Bank's Marc Greenberg can't justify the BUD deal. But he says Bud Light Lime is the beer to beat.\n2022 Feb 16, 04:13 (\ud83e\udd8b) /stocks/disc/ $ trending -l 10\n2022-02-16 02:00:18 - 3800145 - Shopify Q4 Earnings Preview: What to Expect\nhttps://seekingalpha.com/news/3800145-shopify-q4-earnings-preview-what-to-expect\n\n2022-02-15 16:20:21 - 3800395 - Upstart stock soars after Q4 earnings beat, strong guidance, stock buyback\nhttps://seekingalpha.com/news/3800395-upstart-stock-soars-after-q4-earnings-beat-strong-guidance-stock-buyback\n\n2022-02-15 11:31:14 - 3800203 - Greenview Capital takes stakes in Alibaba, Amazon\nhttps://seekingalpha.com/news/3800203-greenview-capital-takes-stakes-in-alibaba-amazon\n\n2022-02-15 16:38:11 - 3800438 - Roblox shares plunge as metaverse company misses Wall Street's expectations\nhttps://seekingalpha.com/news/3800438-roblox-shares-plunge-as-metaverse-company-misses-wall-streets-expectations\n\n2022-02-15 12:39:57 - 3800257 - Sunshine Biopharma announces pricing of $8M public offering, uplisting\nhttps://seekingalpha.com/news/3800257-sunshine-biopharma-announces-pricing-of-8m-public-offering-uplisting\n\n2022-02-15 14:06:05 - 3800296 - Cathie Wood\u2019s ARKK a bubble? Let\u2019s look at history\nhttps://seekingalpha.com/news/3800296-is-cathie-woods-arkk-a-bubble-lets-look-at-history\n\n2022-02-16 01:38:34 - 3800525 - Flex LNG Non-GAAP EPS of $1.18, revenue of $114.6M beats by $4.38M\nhttps://seekingalpha.com/news/3800525-flex-lng-non-gaap-eps-of-118-revenue-of-1146m-beats-by-438m\n\n2022-02-15 19:04:21 - 3800509 - ViacomCBS earnings call: A flood of content feeding transformation to Paramount\nhttps://seekingalpha.com/news/3800509-viacomcbs-earnings-call-a-flood-of-content-feeding-transformation-to-paramount\n\n2022-02-16 02:09:27 - 3800529 - Golden Ocean raises dividend by ~6% to $0.90/share\nhttps://seekingalpha.com/news/3800529-golden-ocean-raises-dividend-by-6-to-090share\n\n2022-02-15 17:35:20 - 3800169 - Matterport Q4 2021 Earnings Preview\nhttps://seekingalpha.com/news/3800169-matterport-q4-2021-earnings-preview\n")),(0,r.kt)("hr",null))}u.isMDXComponent=!0}}]);