"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62377],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||l;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(35742);function l(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},90250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),l=n(88828);const o={title:"getdd",description:"Getdd function retrieves top stocks' due diligence from Reddit with the functionality of choosing a limit on the posts, number of prior days to search, and the choice of searching through all flairs or focusing on specific flairs including DD, technical analysis, Catalyst, News, Advice, and Chart.",keywords:["stock's due diligence","Reddit","getdd","limit of posts","number of prior days","search through flairs","flairs: DD, technical analysis, Catalyst, News, Advice, Chart","ATVI free money","PTON: The safest investment","bottom on $FB","Congress Trading & Retail Traders","large market cap stocks"]},i=void 0,s={unversionedId:"terminal/reference/stocks/ba/getdd",id:"terminal/reference/stocks/ba/getdd",title:"getdd",description:"Getdd function retrieves top stocks' due diligence from Reddit with the functionality of choosing a limit on the posts, number of prior days to search, and the choice of searching through all flairs or focusing on specific flairs including DD, technical analysis, Catalyst, News, Advice, and Chart.",source:"@site/content/terminal/reference/stocks/ba/getdd.md",sourceDirName:"terminal/reference/stocks/ba",slug:"/terminal/reference/stocks/ba/getdd",permalink:"/terminal/reference/stocks/ba/getdd",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/ba/getdd.md",tags:[],version:"current",lastUpdatedBy:"teh_coderer",lastUpdatedAt:1700872066,formattedLastUpdatedAt:"Nov 25, 2023",frontMatter:{title:"getdd",description:"Getdd function retrieves top stocks' due diligence from Reddit with the functionality of choosing a limit on the posts, number of prior days to search, and the choice of searching through all flairs or focusing on specific flairs including DD, technical analysis, Catalyst, News, Advice, and Chart.",keywords:["stock's due diligence","Reddit","getdd","limit of posts","number of prior days","search through flairs","flairs: DD, technical analysis, Catalyst, News, Advice, Chart","ATVI free money","PTON: The safest investment","bottom on $FB","Congress Trading & Retail Traders","large market cap stocks"]},sidebar:"tutorialSidebar",previous:{title:"bullbear",permalink:"/terminal/reference/stocks/ba/bullbear"},next:{title:"headlines",permalink:"/terminal/reference/stocks/ba/headlines"}},c={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],m={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"stocks /ba/getdd - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Print top stock's due diligence from other users. ","[Source: Reddit]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"getdd [-l LIMIT] [-d DAYS] [-a]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"-l  --limit"),(0,a.kt)("td",{parentName:"tr",align:null},"limit of posts to retrieve."),(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"days"),(0,a.kt)("td",{parentName:"tr",align:null},"-d  --days"),(0,a.kt)("td",{parentName:"tr",align:null},"number of prior days to look for."),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"all"),(0,a.kt)("td",{parentName:"tr",align:null},"-a  --all"),(0,a.kt)("td",{parentName:"tr",align:null},"search through all flairs (apart from Yolo and Meme), otherwise we focus on specific flairs: DD, technical analysis, Catalyst, News, Advice, Chart"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"2022 Feb 16, 10:18 (\ud83e\udd8b) /stocks/ba/ $ getdd -d 50\n2022-02-15 17:51:11 - $ATVI free money even if MSFT deal falls through.\nhttps://old.reddit.com/r/wallstreetbets/comments/st8s1i/atvi_free_money_even_if_msft_deal_falls_through/\n\n2022-02-10 05:10:31 - PTON: The safest investment you can make\nhttps://old.reddit.com/r/stocks/comments/soycgc/pton_the_safest_investment_you_can_make/\n\n2022-02-09 01:47:49 - Why only retards are selling the (near) bottom on $FB and are about to get metacucked \ud83d\ude4a\nhttps://old.reddit.com/r/wallstreetbets/comments/so19al/why_only_retards_are_selling_the_near_bottom_on/)\n\n2022-02-08 02:53:43 - If You Cannot Beat Them, Join Them - Congress Trading & Retail Traders\nhttps://old.reddit.com/r/wallstreetbets/comments/sn90qs/if_you_cannot_beat_them_join_them_congress/\n\n2022-02-03 20:01:06 - Thoughts on only buying large market cap stocks (Top 100, 100 billion market cap+, and significant index weighting)?\nhttps://old.reddit.com/r/stocks/comments/sjsqhu/thoughts_on_only_buying_large_market_cap_stocks/\n")),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);