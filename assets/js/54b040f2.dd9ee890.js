"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22904],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),s=p(a),m=r,g=s["".concat(d,".").concat(m)]||s[m]||u[m]||l;return a?n.createElement(g,i(i({ref:e},c),{},{components:a})):n.createElement(g,i({ref:e},c))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>l});var n=a(67294),r=a(35742);function l(t){let{title:e}=t;return n.createElement(r.Z,null,n.createElement("title",null,e))}},17132:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),l=a(88828);const i={title:"candle",description:"This documentation is for the 'candle' function that shows historical data for an ETF. It explains how to use the function with key parameters to sort data, display raw information, setup moving average in days, etc.",keywords:["candle function","ETF historical data","interactive plotly chart","sort data","display raw data","moving average","market trends","high and low trends"]},o=void 0,d={unversionedId:"terminal/reference/etf/candle",id:"terminal/reference/etf/candle",title:"candle",description:"This documentation is for the 'candle' function that shows historical data for an ETF. It explains how to use the function with key parameters to sort data, display raw information, setup moving average in days, etc.",source:"@site/content/terminal/reference/etf/candle.md",sourceDirName:"terminal/reference/etf",slug:"/terminal/reference/etf/candle",permalink:"/terminal/reference/etf/candle",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/etf/candle.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1702897661,formattedLastUpdatedAt:"Dec 18, 2023",frontMatter:{title:"candle",description:"This documentation is for the 'candle' function that shows historical data for an ETF. It explains how to use the function with key parameters to sort data, display raw information, setup moving average in days, etc.",keywords:["candle function","ETF historical data","interactive plotly chart","sort data","display raw data","moving average","market trends","high and low trends"]},sidebar:"tutorialSidebar",previous:{title:"ca",permalink:"/terminal/reference/etf/ca"},next:{title:"compare",permalink:"/terminal/reference/etf/compare"}},p={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],s={toc:c},u="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{title:"etf /candle - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Shows historic data for an ETF"),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"candle [-p] [--sort {adjclose,open,close,high,low,volume,returns,logret}] [-r] [-n NUM] [-t] [--ma MOV_AVG]\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plotly"),(0,r.kt)("td",{parentName:"tr",align:null},"-p  --plotly"),(0,r.kt)("td",{parentName:"tr",align:null},"Flag to show interactive plotly chart."),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sort"),(0,r.kt)("td",{parentName:"tr",align:null},"--sort  -s"),(0,r.kt)("td",{parentName:"tr",align:null},"Choose a column to sort by"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"adjclose, open, close, high, low, volume, returns, logret")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reverse"),(0,r.kt)("td",{parentName:"tr",align:null},"-r  --reverse"),(0,r.kt)("td",{parentName:"tr",align:null},"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"num"),(0,r.kt)("td",{parentName:"tr",align:null},"-n  --num"),(0,r.kt)("td",{parentName:"tr",align:null},"Number to show if raw selected"),(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"range(1, 100)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"trendlines"),(0,r.kt)("td",{parentName:"tr",align:null},"-t  --trend"),(0,r.kt)("td",{parentName:"tr",align:null},"Flag to add high and low trends to candle."),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mov_avg"),(0,r.kt)("td",{parentName:"tr",align:null},"--ma"),(0,r.kt)("td",{parentName:"tr",align:null},"Add moving average in number of days to plot and separate by a comma. Value for ma (moving average) keyword needs to be greater than 1."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154031063-090a4419-c3b1-4707-8f8e-b41c872a783a.png",alt:"candle"})),(0,r.kt)("hr",null))}m.isMDXComponent=!0}}]);