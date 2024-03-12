"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25082],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),c=n,g=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return r?a.createElement(g,i(i({ref:t},u),{},{components:r})):a.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(35742);function o(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},3577:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=r(87462),n=(r(67294),r(3905)),o=r(88828);const i={title:"Server",sidebar_position:3,description:"Learn about OpenBB Bot's Server plan that offers powerful features such as auto posting for Discord, custom charting, and a billboard for advertising. Perfect for optimizing your server operations.",keywords:["OpenBB Bot Server Plan","Discord Server Optimisation","Auto Posting in Discord","OpenBB Auto Posting Categories","Custom Charting","OpenBB Bot Billboard","OpenBB HUB"]},l=void 0,s={unversionedId:"bot/usage/customizing/server",id:"bot/usage/customizing/server",title:"Server",description:"Learn about OpenBB Bot's Server plan that offers powerful features such as auto posting for Discord, custom charting, and a billboard for advertising. Perfect for optimizing your server operations.",source:"@site/content/bot/usage/customizing/server.md",sourceDirName:"bot/usage/customizing",slug:"/bot/usage/customizing/server",permalink:"/bot/usage/customizing/server",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/usage/customizing/server.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710245802,formattedLastUpdatedAt:"Mar 12, 2024",sidebarPosition:3,frontMatter:{title:"Server",sidebar_position:3,description:"Learn about OpenBB Bot's Server plan that offers powerful features such as auto posting for Discord, custom charting, and a billboard for advertising. Perfect for optimizing your server operations.",keywords:["OpenBB Bot Server Plan","Discord Server Optimisation","Auto Posting in Discord","OpenBB Auto Posting Categories","Custom Charting","OpenBB Bot Billboard","OpenBB HUB"]},sidebar:"tutorialSidebar",previous:{title:"Individual",permalink:"/bot/usage/customizing/individual"},next:{title:"OpenBB Discord Reference",permalink:"/bot/reference/discord/"}},p={},u=[{value:"Auto Posting (Feeds) (Discord Only)",id:"auto-posting-feeds-discord-only",level:2},{value:"Auto Posting (Commands) (Discord Only)",id:"auto-posting-commands-discord-only",level:2},{value:"Charting",id:"charting",level:2},{value:"Billboard",id:"billboard",level:2}],d={toc:u},m="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{title:"Server - Customizing - Usage | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"The Server plan for OpenBB Bot offers three different capabilities - Charting, BillBoard, and Auto Posting. Any server that registers with us on the ",(0,n.kt)("a",{parentName:"p",href:"https://my.openbb.co"},"OpenBB HUB")," gets access to set up one Auto Posting for free. Once you have paid plan you have full access to all these features."),(0,n.kt)("h2",{id:"auto-posting-feeds-discord-only"},"Auto Posting (Feeds) (Discord Only)"),(0,n.kt)("p",null,"Auto Posting is our most powerful feature for Discord Servers - We offer the ability to push updates into the server for Flow, Darkpool, or Heatmap/Charts. Once you set up your account you will be able to query the bot directly in your server like below :"),(0,n.kt)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/bot_docs/autopost.png",alt:"autoposting openBB",width:"40%",height:"40%"}),(0,n.kt)("p",null,"Or you can manage them at the HUB :"),(0,n.kt)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/bot_docs/autoposting.png",alt:"autoposting openBB",width:"70%",height:"70%"}),(0,n.kt)("p",null,"We currently offer the following Auto Posting Categories:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Category"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Flow"),(0,n.kt)("td",{parentName:"tr",align:null},"Options Flow for all stocks"),(0,n.kt)("td",{parentName:"tr",align:null},"Opening, Golden Sweep, Large, Unusual, Weekly, Above Ask/Below Bid, Sell to Open, Buy to Open, Whale")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Darkpool"),(0,n.kt)("td",{parentName:"tr",align:null},"Darkpool Data for the market"),(0,n.kt)("td",{parentName:"tr",align:null},"Large")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Heatmap"),(0,n.kt)("td",{parentName:"tr",align:null},"Overview of the market"),(0,n.kt)("td",{parentName:"tr",align:null},"S&P 500, Dow Jones 30, NASDAQ 100, Russell 1000, Russell 2000, Crypto, Heatchart")))),(0,n.kt)("p",null,"For a further breakdown on what each Flow Auto Post entails - See below"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Opening"),(0,n.kt)("td",{parentName:"tr",align:null},'"Premium > $200,000" & "Volume > Open Interest"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Golden Sweep"),(0,n.kt)("td",{parentName:"tr",align:null},'"Premium > $1,000,000" & "Volume > Open Interest" & "Trade Type is SWEEP"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Large"),(0,n.kt)("td",{parentName:"tr",align:null},'"Premium > $500,000"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Unusual"),(0,n.kt)("td",{parentName:"tr",align:null},'"Premium > $200,000" & "Unusual" (high ratio of volume to open interest)')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Weekly"),(0,n.kt)("td",{parentName:"tr",align:null},'"Premium > $200,000" & "Days to Expiration < 7"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Above Ask/Below Bid"),(0,n.kt)("td",{parentName:"tr",align:null},'"Premium > $200,000" & "Side is Above Ask or Below Bid"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Sell to Open"),(0,n.kt)("td",{parentName:"tr",align:null},'"Premium > $1,000,000" & "Volume > Open Interest" & "Trade Type is Below Bed"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Buy to Open"),(0,n.kt)("td",{parentName:"tr",align:null},'"Premium > $1,000,000" & "Volume > Open Interest" & "Trade Type is Above Ask"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Whale"),(0,n.kt)("td",{parentName:"tr",align:null},'"Premium > $1.000,000" & "Days to Expiration < 45"')))),(0,n.kt)("h2",{id:"auto-posting-commands-discord-only"},"Auto Posting (Commands) (Discord Only)"),(0,n.kt)("p",null,"Much like Feeds we now offer Commands to be set up as autoposts as well - These behave in the same way but can be setup to autopost bot commands."),(0,n.kt)("p",null,"Once you set up your account you will be able to query the bot directly in your server like below :"),(0,n.kt)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/bot_docs/commands+add.png",alt:"commands add openBB",width:"40%",height:"40%"}),(0,n.kt)("p",null,"Commands as autoposts are a great way to get your community the info they need in a timely manner."),(0,n.kt)("p",null,"We have allowed even more autoposts to be set up in your server so you can really create a fun environment for all your needs:"),(0,n.kt)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/bot_docs/autopost+list.png",alt:"autopost list openBB",width:"40%",height:"40%"}),(0,n.kt)("p",null,"Below are a few examples of autoposts set up as commands in a server :"),(0,n.kt)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/bot_docs/earnings+example.png",alt:"earnings command autopost openBB",width:"40%",height:"40%"}),(0,n.kt)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/bot_docs/flow+example.png",alt:"earnings command autopost openBB",width:"40%",height:"40%"}),(0,n.kt)("h2",{id:"charting"},"Charting"),(0,n.kt)("p",null,'Custom charting works the same way as Individual charting but it will apply to your full server. If you want everyone in your server to use the "Classic" theme and have RSI + 50d SMA then it will display that way for all users in your server (unless they have already registered their own individual account).'),(0,n.kt)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/bot_docs/server-charting.png",alt:"server charting openBB",width:"70%",height:"70%"}),(0,n.kt)("h2",{id:"billboard"},"Billboard"),(0,n.kt)("p",null,"Billboard is a way to advertise to your users when they run a command on the bot. Within your server you can set your own text to display on applicable commands as they are run."),(0,n.kt)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/bot_docs/billboard.png",alt:"billboard openBB",width:"70%",height:"70%"}))}c.isMDXComponent=!0}}]);