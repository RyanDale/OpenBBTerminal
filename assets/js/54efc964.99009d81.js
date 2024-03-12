"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31931],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>S});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},C="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},R=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),C=p(r),R=a,S=C["".concat(c,".").concat(R)]||C[R]||u[R]||o;return r?n.createElement(S,l(l({ref:t},s),{},{components:r})):n.createElement(S,l({ref:t},s))}));function S(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=R;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[C]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}R.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(35742);function o(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},73559:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>R,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905)),o=r(88828);const l={title:"cr",description:"A content focused on the 'cr' command line tool usage and its parameters, which provides crypto interest rates from numerous platforms, for various cryptocurrencies. Core parameters include selection of interest rate type, specific cryptocurrencies, and platforms.",keywords:["cryptocurrency","crypto interest rates","cryptocurrency platforms","borrow interest rate","supply interest rate","crypto supply and borrow rates","cr command line","cryptocurrency parameters"]},i=void 0,c={unversionedId:"terminal/reference/crypto/ov/cr",id:"terminal/reference/crypto/ov/cr",title:"cr",description:"A content focused on the 'cr' command line tool usage and its parameters, which provides crypto interest rates from numerous platforms, for various cryptocurrencies. Core parameters include selection of interest rate type, specific cryptocurrencies, and platforms.",source:"@site/content/terminal/reference/crypto/ov/cr.md",sourceDirName:"terminal/reference/crypto/ov",slug:"/terminal/reference/crypto/ov/cr",permalink:"/terminal/reference/crypto/ov/cr",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/ov/cr.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710245802,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{title:"cr",description:"A content focused on the 'cr' command line tool usage and its parameters, which provides crypto interest rates from numerous platforms, for various cryptocurrencies. Core parameters include selection of interest rate type, specific cryptocurrencies, and platforms.",keywords:["cryptocurrency","crypto interest rates","cryptocurrency platforms","borrow interest rate","supply interest rate","crypto supply and borrow rates","cr command line","cryptocurrency parameters"]},sidebar:"tutorialSidebar",previous:{title:"contracts",permalink:"/terminal/reference/crypto/ov/contracts"},next:{title:"defi",permalink:"/terminal/reference/crypto/ov/defi"}},p={},s=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],C={toc:s},u="wrapper";function R(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},C,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"crypto /ov/cr - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Displays crypto {borrow,supply} interest rates for cryptocurrencies across several platforms. You can select rate type with --type {borrow,supply} You can display only N number of platforms with --limit parameter."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"cr [-t {borrow,supply}] [-c CRYPTOS] [-p PLATFORMS]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type"),(0,a.kt)("td",{parentName:"tr",align:null},"-t  --type"),(0,a.kt)("td",{parentName:"tr",align:null},"Select interest rate type"),(0,a.kt)("td",{parentName:"tr",align:null},"supply"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"borrow, supply")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cryptos"),(0,a.kt)("td",{parentName:"tr",align:null},"-c  --cryptocurrrencies"),(0,a.kt)("td",{parentName:"tr",align:null},"Cryptocurrencies to search interest rates for separated by comma. Default: BTC,ETH,USDT,USDC. Options: ZRX,BAT,REP,ETH,SAI,BTC,XRP,LTC,EOS,BCH,XMR,DOGE,USDC,USDT,BSV,NEO,ETC,OMG,ZEC,BTG,SAN,DAI,UNI,WBTC,COMP,LUNA,UST,BUSD,KNC,LEND,LINK,MANA,MKR,SNX,SUSD,TUSD,eCRV-DAO,HEGIC,YFI,1INCH,CRV-IB,CRV-HBTC,BOOST,CRV-sBTC,CRV-renBTC,CRV-sAave,CRV-oBTC,CRV-pBTC,CRV-LUSD,CRV-BBTC,CRV-tBTC,CRV-FRAX,CRV-yBUSD,CRV-COMP,CRV-GUSD,yUSD,CRV-3pool,CRV-TUSD,CRV-BUSD,CRV-DUSD,CRV-UST,CRV-mUSD,sUSD,CRV-sUSD,CRV-LINK,CRV-USDN,CRV-USDP,CRV-alUSD,CRV-Aave,CRV-HUSD,CRV-EURS,RAI,CRV-triCrypto,CRV-Pax,CRV-USDT,CRV-USDK,CRV-RSV,CRV-3Crypto,GUSD,PAX,USD,ILK,BNB,PAXG,ADA,FTT,SOL,SRM,RAY,XLM,SUSHI,CRV,BAL,AAVE,MATIC,GRT,ENJ,USDP,IOST,AMP,PERP,SHIB,ALICE,ALPHA,ANKR,ATA,AVA,AXS,BAKE,BAND,BNT,BTCST,CELR,CFX,CHR,COS,COTI,CTSI,DUSK,EGLD,ELF,FET,FLOW,FTM,INJ,IOTX,MDX,NEAR,OCEAN,ONT,POLS,REEF,WRX,XEC,XTZ,XVS,ZIL,DOT,FIL,TRX,CAKE,ADX,FIRO,SXP,ATOM,IOTA,AKRO,AUDIO,BADGER,CVC,DENT,DYDX,FORTH,GNO,HOT,LPT,LRC,NKN,NMR,NU,OGN,OXT,POLY,QNT,RLC,RSR,SAND,SKL,STMX,STORJ,TRB,UMA,DPI,VSP,CHSB,EURT,GHST,3CRV,CRVRENWBTC,MIR-UST UNI LP,ALCX,ALUSD,USDP3CRV,RENBTC,YVECRV,CVX,USDTTRC20,AUD,HKD,GBP,EUR,HUSD,HT,DASH,EURS,AVAX,BTT,GALA,ILV,APE"),(0,a.kt)("td",{parentName:"tr",align:null},"BTC,ETH,USDT,USDC"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"ZRX, BAT, REP, ETH, SAI, BTC, XRP, LTC, EOS, BCH, XMR, DOGE, USDC, USDT, BSV, NEO, ETC, OMG, ZEC, BTG, SAN, DAI, UNI, WBTC, COMP, LUNA, UST, BUSD, KNC, LEND, LINK, MANA, MKR, SNX, SUSD, TUSD, eCRV-DAO, HEGIC, YFI, 1INCH, CRV-IB, CRV-HBTC, BOOST, CRV-sBTC, CRV-renBTC, CRV-sAave, CRV-oBTC, CRV-pBTC, CRV-LUSD, CRV-BBTC, CRV-tBTC, CRV-FRAX, CRV-yBUSD, CRV-COMP, CRV-GUSD, yUSD, CRV-3pool, CRV-TUSD, CRV-BUSD, CRV-DUSD, CRV-UST, CRV-mUSD, sUSD, CRV-sUSD, CRV-LINK, CRV-USDN, CRV-USDP, CRV-alUSD, CRV-Aave, CRV-HUSD, CRV-EURS, RAI, CRV-triCrypto, CRV-Pax, CRV-USDT, CRV-USDK, CRV-RSV, CRV-3Crypto, GUSD, PAX, USD, ILK, BNB, PAXG, ADA, FTT, SOL, SRM, RAY, XLM, SUSHI, CRV, BAL, AAVE, MATIC, GRT, ENJ, USDP, IOST, AMP, PERP, SHIB, ALICE, ALPHA, ANKR, ATA, AVA, AXS, BAKE, BAND, BNT, BTCST, CELR, CFX, CHR, COS, COTI, CTSI, DUSK, EGLD, ELF, FET, FLOW, FTM, INJ, IOTX, MDX, NEAR, OCEAN, ONT, POLS, REEF, WRX, XEC, XTZ, XVS, ZIL, DOT, FIL, TRX, CAKE, ADX, FIRO, SXP, ATOM, IOTA, AKRO, AUDIO, BADGER, CVC, DENT, DYDX, FORTH, GNO, HOT, LPT, LRC, NKN, NMR, NU, OGN, OXT, POLY, QNT, RLC, RSR, SAND, SKL, STMX, STORJ, TRB, UMA, DPI, VSP, CHSB, EURT, GHST, 3CRV, CRVRENWBTC, MIR-UST UNI LP, ALCX, ALUSD, USDP3CRV, RENBTC, YVECRV, CVX, USDTTRC20, AUD, HKD, GBP, EUR, HUSD, HT, DASH, EURS, AVAX, BTT, GALA, ILV, APE")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"platforms"),(0,a.kt)("td",{parentName:"tr",align:null},"-p  --platforms"),(0,a.kt)("td",{parentName:"tr",align:null},"Platforms to search interest rates in separated by comma. Default: BlockFi,Ledn,SwissBorg,Youhodler. Options: MakerDao,Compound,Poloniex,Bitfinex,dYdX,CompoundV2,Linen,Hodlonaut,InstaDapp,Zerion,Argent,DeFiSaver,MakerDaoV2,Ddex,AaveStable,AaveVariable,YearnFinance,BlockFi,Nexo,CryptoCom,Soda,Coinbase,SaltLending,Ledn,Bincentive,Inlock,Bitwala,Zipmex,Vauld,Delio,Yield,Vesper,Reflexer,SwissBorg,MushroomsFinance,ElementFi,Maple,CoinRabbit,WirexXAccounts,Youhodler,YieldApp,NotionalFinance,IconFi"),(0,a.kt)("td",{parentName:"tr",align:null},"BlockFi,Ledn,SwissBorg,Youhodler"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"MakerDao, Compound, Poloniex, Bitfinex, dYdX, CompoundV2, Linen, Hodlonaut, InstaDapp, Zerion, Argent, DeFiSaver, MakerDaoV2, Ddex, AaveStable, AaveVariable, YearnFinance, BlockFi, Nexo, CryptoCom, Soda, Coinbase, SaltLending, Ledn, Bincentive, Inlock, Bitwala, Zipmex, Vauld, Delio, Yield, Vesper, Reflexer, SwissBorg, MushroomsFinance, ElementFi, Maple, CoinRabbit, WirexXAccounts, Youhodler, YieldApp, NotionalFinance, IconFi")))),(0,a.kt)("hr",null))}R.isMDXComponent=!0}}]);