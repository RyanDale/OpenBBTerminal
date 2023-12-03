"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68071],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,b=s["".concat(l,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(35742);function i(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},61996:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),i=n(88828);const o={title:"load",description:"This page provides instructions on how to load and analyze cryptocurrency data from various sources with custom intervals using Python. Ideal for Bitcoin, Ethereum, and other cryptocurrency investors and analysts.",keywords:["cryptocurrency analysis","crypto trading","Yahoo Finance","ccxt","cg","crypto exchange","Python cryptocurrency","coin symbol","Bitcoin","Ethereum","Binance","crypto intervals","USD trading"]},c=void 0,l={unversionedId:"terminal/reference/crypto/load",id:"terminal/reference/crypto/load",title:"load",description:"This page provides instructions on how to load and analyze cryptocurrency data from various sources with custom intervals using Python. Ideal for Bitcoin, Ethereum, and other cryptocurrency investors and analysts.",source:"@site/content/terminal/reference/crypto/load.md",sourceDirName:"terminal/reference/crypto",slug:"/terminal/reference/crypto/load",permalink:"/terminal/reference/crypto/load",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/load.md",tags:[],version:"current",lastUpdatedBy:"Theodore Aptekarev",lastUpdatedAt:1701637004,formattedLastUpdatedAt:"Dec 3, 2023",frontMatter:{title:"load",description:"This page provides instructions on how to load and analyze cryptocurrency data from various sources with custom intervals using Python. Ideal for Bitcoin, Ethereum, and other cryptocurrency investors and analysts.",keywords:["cryptocurrency analysis","crypto trading","Yahoo Finance","ccxt","cg","crypto exchange","Python cryptocurrency","coin symbol","Bitcoin","Ethereum","Binance","crypto intervals","USD trading"]},sidebar:"tutorialSidebar",previous:{title:"headlines",permalink:"/terminal/reference/crypto/headlines"},next:{title:"price",permalink:"/terminal/reference/crypto/price"}},p={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],s={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{title:"crypto /load - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Load crypto currency to perform analysis on. Yahoo Finance is used as default source. Other sources can be used such as 'ccxt' or 'cg' with --source. If you select 'ccxt', you can then select any exchange with --exchange. You can also select a specific interval with --interval."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"load [-c COIN] [-s START] [--exchange {ace,alpaca,ascendex,bequant,bigone,binance,binancecoinm,binanceus,binanceusdm,bingx,bit2c,bitbank,bitbay,bitcoincom,bitfinex,bitfinex2,bitflyer,bitforex,bitget,bithumb,bitmart,bitmex,bitopro,bitpanda,bitrue,bitso,bitstamp,bitstamp1,bittrex,bitvavo,bkex,bl3p,btcalpha,btcbox,btcmarkets,btctradeua,btcturk,bybit,cex,coinbase,coinbaseprime,coinbasepro,coincheck,coinex,coinfalcon,coinmate,coinone,coinsph,coinspot,cryptocom,currencycom,delta,deribit,digifinex,exmo,fmfwio,gate,gateio,gemini,hitbtc,hitbtc3,hollaex,huobi,huobijp,huobipro,idex,independentreserve,indodax,kraken,krakenfutures,kucoin,kucoinfutures,kuna,latoken,lbank,lbank2,lykke,mercado,mexc,mexc3,ndax,novadax,oceanex,okcoin,okex,okex5,okx,paymium,phemex,poloniex,poloniexfutures,probit,tidex,timex,tokocrypto,upbit,wavesexchange,wazirx,whitebit,woo,yobit,zaif,zonda}] [-e END] [-i {1,5,15,30,60,240,1440,10080,43200}] [--vs VS]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"coin"),(0,a.kt)("td",{parentName:"tr",align:null},"-c  --coin"),(0,a.kt)("td",{parentName:"tr",align:null},"Coin to get. Must be coin symbol (e.g., btc, eth)"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"start"),(0,a.kt)("td",{parentName:"tr",align:null},"-s  --start"),(0,a.kt)("td",{parentName:"tr",align:null},"The starting date (format YYYY-MM-DD) of the crypto"),(0,a.kt)("td",{parentName:"tr",align:null},"2020-11-28"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"exchange"),(0,a.kt)("td",{parentName:"tr",align:null},"--exchange"),(0,a.kt)("td",{parentName:"tr",align:null},"Exchange to search"),(0,a.kt)("td",{parentName:"tr",align:null},"binance"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"ace, alpaca, ascendex, bequant, bigone, binance, binancecoinm, binanceus, binanceusdm, bingx, bit2c, bitbank, bitbay, bitcoincom, bitfinex, bitfinex2, bitflyer, bitforex, bitget, bithumb, bitmart, bitmex, bitopro, bitpanda, bitrue, bitso, bitstamp, bitstamp1, bittrex, bitvavo, bkex, bl3p, btcalpha, btcbox, btcmarkets, btctradeua, btcturk, bybit, cex, coinbase, coinbaseprime, coinbasepro, coincheck, coinex, coinfalcon, coinmate, coinone, coinsph, coinspot, cryptocom, currencycom, delta, deribit, digifinex, exmo, fmfwio, gate, gateio, gemini, hitbtc, hitbtc3, hollaex, huobi, huobijp, huobipro, idex, independentreserve, indodax, kraken, krakenfutures, kucoin, kucoinfutures, kuna, latoken, lbank, lbank2, lykke, mercado, mexc, mexc3, ndax, novadax, oceanex, okcoin, okex, okex5, okx, paymium, phemex, poloniex, poloniexfutures, probit, tidex, timex, tokocrypto, upbit, wavesexchange, wazirx, whitebit, woo, yobit, zaif, zonda")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"end"),(0,a.kt)("td",{parentName:"tr",align:null},"-e  --end"),(0,a.kt)("td",{parentName:"tr",align:null},"The ending date (format YYYY-MM-DD) of the crypto"),(0,a.kt)("td",{parentName:"tr",align:null},"2023-12-03"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"interval"),(0,a.kt)("td",{parentName:"tr",align:null},"-i  --interval"),(0,a.kt)("td",{parentName:"tr",align:null},"The interval of the crypto"),(0,a.kt)("td",{parentName:"tr",align:null},"1440"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"1, 5, 15, 30, 60, 240, 1440, 10080, 43200")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"vs"),(0,a.kt)("td",{parentName:"tr",align:null},"--vs"),(0,a.kt)("td",{parentName:"tr",align:null},"Quote currency (what to view coin vs). e.g., usdc, usdt, ... if source is ccxt, usd, eur, ... otherwise"),(0,a.kt)("td",{parentName:"tr",align:null},"usdt"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);