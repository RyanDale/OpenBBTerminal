"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84047],{3905:(D,R,U)=>{U.d(R,{Zo:()=>a,kt:()=>E});var P=U(67294);function S(D,R,U){return R in D?Object.defineProperty(D,R,{value:U,enumerable:!0,configurable:!0,writable:!0}):D[R]=U,D}function e(D,R){var U=Object.keys(D);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(D);R&&(P=P.filter((function(R){return Object.getOwnPropertyDescriptor(D,R).enumerable}))),U.push.apply(U,P)}return U}function t(D){for(var R=1;R<arguments.length;R++){var U=null!=arguments[R]?arguments[R]:{};R%2?e(Object(U),!0).forEach((function(R){S(D,R,U[R])})):Object.getOwnPropertyDescriptors?Object.defineProperties(D,Object.getOwnPropertyDescriptors(U)):e(Object(U)).forEach((function(R){Object.defineProperty(D,R,Object.getOwnPropertyDescriptor(U,R))}))}return D}function A(D,R){if(null==D)return{};var U,P,S=function(D,R){if(null==D)return{};var U,P,S={},e=Object.keys(D);for(P=0;P<e.length;P++)U=e[P],R.indexOf(U)>=0||(S[U]=D[U]);return S}(D,R);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(D);for(P=0;P<e.length;P++)U=e[P],R.indexOf(U)>=0||Object.prototype.propertyIsEnumerable.call(D,U)&&(S[U]=D[U])}return S}var B=P.createContext({}),K=function(D){var R=P.useContext(B),U=R;return D&&(U="function"==typeof D?D(R):t(t({},R),D)),U},a=function(D){var R=K(D.components);return P.createElement(B.Provider,{value:R},D.children)},N="mdxType",G={inlineCode:"code",wrapper:function(D){var R=D.children;return P.createElement(P.Fragment,{},R)}},n=P.forwardRef((function(D,R){var U=D.components,S=D.mdxType,e=D.originalType,B=D.parentName,a=A(D,["components","mdxType","originalType","parentName"]),N=K(U),n=S,E=N["".concat(B,".").concat(n)]||N[n]||G[n]||e;return U?P.createElement(E,t(t({ref:R},a),{},{components:U})):P.createElement(E,t({ref:R},a))}));function E(D,R){var U=arguments,S=R&&R.mdxType;if("string"==typeof D||S){var e=U.length,t=new Array(e);t[0]=n;var A={};for(var B in R)hasOwnProperty.call(R,B)&&(A[B]=R[B]);A.originalType=D,A[N]="string"==typeof D?D:S,t[1]=A;for(var K=2;K<e;K++)t[K]=U[K];return P.createElement.apply(null,t)}return P.createElement.apply(null,U)}n.displayName="MDXCreateElement"},88828:(D,R,U)=>{U.d(R,{Z:()=>e});var P=U(67294),S=U(35742);function e(D){let{title:R}=D;return P.createElement(S.Z,null,P.createElement("title",null,R))}},64561:(D,R,U)=>{U.r(R),U.d(R,{assets:()=>K,contentTitle:()=>A,default:()=>n,frontMatter:()=>t,metadata:()=>B,toc:()=>a});var P=U(87462),S=(U(67294),U(3905)),e=U(88828);const t={title:"load",description:"This page documents how to load historical exchange rate data from Alpha Advantage and YahooFinance. It provides code usage standards in Python and explains the parameters for the source, the resolution, the interval, and the start date of data.",keywords:["load historical exchange rate data","Alpha Advantage","YahooFinance","resolution of data","intervals of intraday data","start date of data","currency pairs"]},A=void 0,B={unversionedId:"terminal/reference/forex/load",id:"terminal/reference/forex/load",title:"load",description:"This page documents how to load historical exchange rate data from Alpha Advantage and YahooFinance. It provides code usage standards in Python and explains the parameters for the source, the resolution, the interval, and the start date of data.",source:"@site/content/terminal/reference/forex/load.md",sourceDirName:"terminal/reference/forex",slug:"/terminal/reference/forex/load",permalink:"/terminal/reference/forex/load",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/forex/load.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1707846532,formattedLastUpdatedAt:"Feb 13, 2024",frontMatter:{title:"load",description:"This page documents how to load historical exchange rate data from Alpha Advantage and YahooFinance. It provides code usage standards in Python and explains the parameters for the source, the resolution, the interval, and the start date of data.",keywords:["load historical exchange rate data","Alpha Advantage","YahooFinance","resolution of data","intervals of intraday data","start date of data","currency pairs"]},sidebar:"tutorialSidebar",previous:{title:"fwd",permalink:"/terminal/reference/forex/fwd"},next:{title:"quote",permalink:"/terminal/reference/forex/quote"}},K={},a=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],N={toc:a},G="wrapper";function n(D){let{components:R,...U}=D;return(0,S.kt)(G,(0,P.Z)({},N,U,{components:R,mdxType:"MDXLayout"}),(0,S.kt)(e.Z,{title:"forex /load - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,S.kt)("p",null,"Load historical exchange rate data.Available data sources are Alpha Advantage and YahooFinanceBy default main source used for analysis is YahooFinance (yf). To change it use --source av"),(0,S.kt)("h3",{id:"usage"},"Usage"),(0,S.kt)("pre",null,(0,S.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"load [-t TICKER] [-r {i,d,w,m}] [-i {1min,5min,15min,30min,60min,90min,1hour,1day,5day,1week,1month,3month}] [-s START_DATE] [-e END]\n")),(0,S.kt)("hr",null),(0,S.kt)("h2",{id:"parameters"},"Parameters"),(0,S.kt)("table",null,(0,S.kt)("thead",{parentName:"table"},(0,S.kt)("tr",{parentName:"thead"},(0,S.kt)("th",{parentName:"tr",align:null},"Name"),(0,S.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,S.kt)("th",{parentName:"tr",align:null},"Description"),(0,S.kt)("th",{parentName:"tr",align:null},"Default"),(0,S.kt)("th",{parentName:"tr",align:null},"Optional"),(0,S.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,S.kt)("tbody",{parentName:"table"},(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"ticker"),(0,S.kt)("td",{parentName:"tr",align:null},"-t  --ticker"),(0,S.kt)("td",{parentName:"tr",align:null},"Currency pair to load."),(0,S.kt)("td",{parentName:"tr",align:null},"None"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"AEDINR, XPDUSD, KYDEUR, KRWMYR, JPYIDR, BSDEUR, SGDARS, PLNAUD, CNYSGD, AUDBGN, COPPEN, EURMXN, GBPBND, TRYXAG, NOKEUR, ZARHUF, NZDAUD, USDOMR, CADNZD, AWGUSD, KRWAUD, LAKUSD, NGNEUR, USDKRW, TZSEUR, XAURUB, TTDEUR, FRNCHF, PGKUSD, USDCNY, LAKGBP, CNYEUR, USDYER, RWFEUR, SGDNZD, EURUYU, BRLZAR, BIFUSD, GBPHKD, LTLAUD, ARSCHF, NBLCHF, USDDZD, KRWBRL, GBPSAR, BZDEUR, USDNIO, EURXAU, PENBRL, JMDGBP, PYGGBP, USDKWD, JPYXAG, USDCNH, LBPUSD, MYRNZD, ZARTND, INRIDR, EURMAD, KHRUSD, BRICHF, SZLUSD, XPFGBP, BDTJPY, AUDZAR, NZDINR, AUDILS, DKKMXN, GBPUSD, GBPLKR, CADHUF, USDBAM, HUFAUD, PKREGP, AUDTWD, USDBDT, XAUHKD, ZARUGX, AUDMYR, AEDSEK, TWDCAD, OMRZAR, PENGBP, USDUYU, GBPCZK, GBPBWP, ZARSGD, PLNTRY, USDNZD, CNYIDR, EUROMR, LRDGBP, YERGBP, EURTTD, TRYSGD, GBPCLP, KWDEUR, GBPCNY, EURMYR, SEKNOK, RSDBRL, KYDCAD, ZARHKD, GBPDOP, EURHTG, ZARNAD, BRIUSD, MMKUSD, EURTND, ILSJPY, MYRAUD, MYRCHF, TRYUSD, SGDMYR, PENCLP, PLNSGD, ARSZAR, OMRUSD, EURSZL, AUNUSD, HKDSGD, ILSAED, CHFTHB, CNYUSD, ARSXAU, MXNCLP, GBPUYU, MXNCOP, XAUKRW, KESZAR, HRKPLN, NZDCNY, THBCHF, DOPUSD, THBTWD, DZDEUR, HRKAUD, HKDPLN, BRLXAG, EURAFN, SEKZAR, ZARTHB, BNDEUR, ILSUSD, MYRSGD, MURUSD, GBPLRD, CHFRON, DKKJPY, USDLYD, NOKJPY, GBPSEK, NOKILS, ZARKES, CADSGD, MXNXAU, GBPALL, XCDGBP, DKKRUB, GBPHUF, EURGTQ, USDSLL, USDETB, IQDEUR, SGDAUD, CNYBGN, OSOUSD, BMDEUR, JPYZAR, AUDSGD, THBIDR, MWKZAR, DKKCNY, EURIQD, ARSEUR, BWPEUR, BGNEUR, AEDPKR, JPYSAR, MXNCZK, EURBBD, PKRJPY, JODEUR, EURAUD, EGPZAR, HKDPKR, SEKUSD, GBPDKK, QARAED, JODAED, USDALL, KRWJPY, IDRGBP, CNYDKK, ILSNOK, KESGBP, IDRCHF, GBPPGK, MXNEUR, IDRMYR, LBPEUR, HKDUSD, NOKZAR, TWDTHB, USDCZK, PENCAD, GBPNIO, KWDPKR, USDMMK, MXNCHF, MXNARS, AUDGBP, CHFGBP, CHFMAL, EURKRW, TNDUSD, USDTJS, USDUGX, DKKNZD, EURBDT, AUDMAD, THBZAR, XAUEUR, NZDPKR, SEKINR, LRDUSD, SZLCHF, KRUUSD, USDMAD, ZARTRY, CHFAUN, USDNGN, RONUSD, CADIDR, DKKAED, EURJPY, CDFGBP, HKDARS, ARSXAG, GBPPKR, BRLCHF, CLPUSD, CNHAUD, USDPKR, SEKCZK, INRAED, JPYUSD, EURQAR, ZARJPY, CADHRK, CADBRL, SEKCAD, JPYSGD, MXNJPY, USDJOD, BZDGBP, TWDMYR, EURSAR, BRLGBP, EGPEUR, EURXPT, PKRSAR, GBPNPR, EURJMD, CADHKD, IDRTHB, INREUR, MMKGBP, PABUSD, DKKNOK, EURGHS, INRHKD, EURJOD, THBDKK, GBPRWF, DJFUSD, IDRTWD, ILSSEK, RUBMXN, EURKZT, XAUTRY, AUDUSD, USDAUD, RUBDKK, CUPEUR, TZSUSD, USDLSL, PKRTHB, CLPARS, CADTHB, USDARS, USDRUB, XAGHKD, BAMGBP, EURSEK, USDBIF, NZDDKK, EURBGN, HNLUSD, MADUSD, DKKTHB, ISKEUR, BRLAUD, EURUZS, CHFDOE, NOKAED, USDPYG, USDZMW, PGKGBP, INRUSD, MXNXAG, RUBUSD, XPDEUR, ZARPKR, CHFHKD, GYDEUR, JPYCHF, AEDEUR, GBPRSD, MYRUSD, NZDCZK, ARSPEN, EURALL, MXNAUD, JPYPHP, TNDGBP, USDTND, CZKPLN, SGDPLN, IDRZAR, EURNZD, RWFZAR, SEKKRW, DKKISK, USDISK, USDOSO, GBPPLN, SCRUSD, UGXUSD, GBPUAH, BRLSGD, EURCHF, ZARQAR, BRLHKD, DKKUSD, HRKCAD, XAGBRL, MADZAR, LSLEUR, HRKUSD, BOBUSD, RUBPLN, DKKUAH, EURBOB, ILSCAD, ZARBWP, USDMWK, BGNGBP, HUFCAD, NPRGBP, ZARNOK, EURRUB, XPFUSD, GBPDJF, LSLGBP, GBPFJD, NOKSGD, EURKWD, SGDCNY, KRWUSD, XAUUSD, BWPUSD, MYREUR, USDBGN, SGDCHF, USDLBP, KWDGBP, THBPKR, ALLUSD, MYRHKD, EURHUF, GBPMUR, PLNEUR, NBLUSD, PHPGBP, XAUARS, GHSUSD, QARUSD, GBPMWK, XAGCAD, CHFARS, GBPMYR, RUBNOK, EURPLN, GBPLBP, MXNRUB, BMDKYD, THBEUR, NIOGBP, KMFUSD, UYUUSD, GBPXPD, GBPCDF, SGDJPY, AUDPGK, UZSEUR, DZDGBP, USDBZD, MDLUSD, NZDNOK, USDXAG, KRWNZD, CZKUSD, PHPJPY, GBPAED, UAHGBP, GBPBBD, USDSDG, ARSCAD, EURUGX, XAUTHB, CADKYD, MOPUSD, EURMOP, USDGBP, NZDSEK, AUDEUR, ILSZAR, CHFFRN, NZDEUR, ZARCZK, CZKSEK, GBPBDT, HKDSEK, PKRSGD, XPTEUR, ILSJOD, JPYKRW, GBPEUR, CHFDKK, RONZAR, GBPOMR, MYRTWD, GBPSOS, PLNHUF, RUBGBP, XAUGBP, CADXAG, USDUZS, JPYHUF, CHFVRL, GNFUSD, TWDCNY, UGXZAR, CHFAED, AEDAUD, SGDIDR, ZARRON, AUDTHB, MOPEUR, EURBRL, XAGARS, EURLBP, SGDTHB, KZTGBP, PLNJPY, ZARRWF, ZARILS, ZARMXN, USDXAU, AEDJPY, GBPMDL, GBPAFN, ZMWEUR, AEDNZD, CHFIDR, DKKTWD, AEDKWD, AEDZAR, USDHTG, EURPYG, BRLCLP, EURLAK, SGDDKK, USDMUR, HKDZAR, ZARZMW, NPRUSD, RSDEUR, LSLUSD, USDFJD, MYRIDR, XAUCNY, TWDNZD, MDLGBP, JPYAED, TMTUSD, AUDNZD, BGNAUD, EURVND, USDAED, USDMDL, PENMXN, GBPISK, NZDMYR, UGXEUR, CZKDKK, AFNGBP, KHRGBP, NZDGBP, GBPNOK, DKKAUD, NOKDKK, EURRWF, BBDBMD, NSOCHF, GBPKHR, SLLEUR, AUDCZK, BIFEUR, CHFRUB, AEDBHD, KYDGBP, ARSMXN, JODILS, SOSUSD, GBPMVR, DKKMYR, COPEUR, BBDEUR, IQDGBP, GBPJOD, CLPMXN, JPYSEK, KYDUSD, IDRJPY, MYRTHB, DKKPLN, USDJPY, BRLRSD, CNYZAR, THBINR, PLNNZD, HUFZAR, YEREUR, USDCVE, USDNSO, ZARCYP, MYRINR, SEKAUD, CZKEUR, MXNSGD, GBPCHF, USDJMD, INRSGD, CNYNZD, EURMDL, MVREUR, COPGBP, USDSHP, CUPUSD, USDXPT, CHFMYR, ARECHF, USDAUN, GBPXCD, GBPYER, SGDKRW, EURILS, EURDOP, AUDTRY, NZDMXN, AEDSAR, USDMYR, EURXPD, GBPKYD, GBPUGX, DKKZAR, VRLCHF, CHFBWP, PYGEUR, USDTWD, ZARXAG, USDBWP, GBPBSD, CADPEN, EURKYD, ARSCOP, MXNNZD, CDFUSD, TZSZAR, BRLJPY, DKKINR, KWDUSD, XAGJPY, GBPTHB, PHPAUD, USDRSD, USDKHR, NADEUR, QAREUR, ARSJPY, CADSEK, GBPETB, PLNCHF, ISKGBP, HKDCHF, EURZAR, NOKUSD, PGKAUD, ILSAUD, ARSHKD, SARPKR, CLPAUD, AEDCHF, CLPJPY, CHFINR, SGDZAR, EURPAB, BZDUSD, JPYTHB, ETBEUR, BNDUSD, CNHGBP, DKKPKR, CNYXAU, MWKEUR, EURTHB, AUDIDR, MWKUSD, PKRKWD, NZDCAD, USDUAH, PKRZAR, PKRQAR, PLNZAR, USDEUR, ZARMAD, USDIQD, GTQUSD, EURZMW, GBPAMD, CADMYR, EURBWP, COPDKK, SOSEUR, NADZAR, PHPEUR, GBPBMD, GBPQAR, USDCOP, SARJPY, INRMYR, TWDSGD, AUDMXN, CHFMXN, XAGTRY, XAGMXN, GBPHNL, BBDGBP, NPREUR, PABEUR, EURMVR, SEKEUR, CNYJPY, GBPHTG, CADARS, JPYMYR, ARSBRL, HKDCAD, MXNCAD, JPYHKD, TTDUSD, XAGCNY, AUDPKR, EURARS, NGNJPY, GBPBRL, KZTEUR, GBPBOB, EURDJF, AEDDKK, JODUSD, GBPJPY, ALLEUR, INRTHB, GBPILS, PKRTWD, SOSGBP, GBPPAB, DKKCAD, GBPCOP, TWDSEK, ZMWUSD, JPYCNY, TWDZAR, CNYINR, KRWEUR, USDKRU, NADUSD, KESEUR, CHFNOK, XAGEUR, AMDGBP, RSDUSD, GBPZAR, SARUSD, ISKUSD, EURHKD, QARZAR, RUBJPY, ETBUSD, HKDEUR, MALCHF, JPYBDT, RUBSEK, INRCAD, LYDGBP, HKDTHB, USDTTD, OMRAED, BSDGBP, USDEGP, BWPZAR, MYRDKK, GBPPYG, EURYER, CVEUSD, EURMGA, KRWSGD, EURNPR, USDCHF, PLNHKD, ARSUSD, SGDSEK, CADTWD, SEKILS, EURBZD, CHFSEK, UZSUSD, JPYTRY, NGNUSD, XAUCAD, USDKZT, USDDOP, CADGBP, SEKPLN, USDGTQ, BGNUSD, CHFSGD, MADAUD, EURAED, CNYKRW, ARSSGD, AUDCLP, CADILS, XPTUSD, ZARDKK, MZNEUR, SGDINR, BHDUSD, CHFNZD, SGDUSD, MDLEUR, XAUSAR, VRNCHF, MADGBP, BMDBBD, FJDGBP, DKKTRY, HKDXAG, HKDAUD, XAGZAR, ZAROMR, EURNGN, GBPMXN, AUDCAD, CADDKK, EURCOP, HKDJPY, TTDGBP, EURCLP, RONGBP, BOBGBP, AUDLTL, PLNRUB, XAUZAR, JPYPKR, KRWTHB, JPYCZK, AUDSEK, LYDUSD, USDXPD, EURBHD, EURSGD, USDHKD, ILSPLN, XAGSAR, XAUJPY, NIOUSD, CADVND, LAKEUR, CHFNSO, BRLUSD, EURDZD, CNHUSD, USDBOB, SEKBRL, USDZAR, TNDEUR, GNFGBP, BRLPEN, BNDGBP, RONCHF, NZDSGD, PABGBP, GBPKRW, KRWHKD, SGDGBP, FJDAUD, GBPMKD, ETBGBP, USDPHP, BTNGBP, JPYAUD, ZARGHS, NOKINR, GBPPEN, CZKGBP, JPYARS, BHDGBP, EURTJS, MADEUR, USDHRK, GBPRUB, USDCLP, DOPGBP, BIFGBP, USDPLN, COPMXN, NZDHKD, NZDJPY, INRCHF, USDNBL, USDDKK, KRWRUB, VNDGBP, AEDGBP, PKRAUD, GBPTWD, RONEUR, PKRGBP, GBPMAD, AUDHRK, EURTWD, CLPPEN, AUDRUB, PHPZAR, MVRUSD, EURHRK, CADEUR, SGDHKD, KRWTWD, TWDEUR, USDMXN, INRZAR, OMREUR, GBPBTN, CZKZAR, THBCNY, TRYXAU, AUDHUF, THBMYR, TWDKRW, PHPUSD, CHFARE, IDRSGD, EURPEN, USDSCR, CHFBRL, KRWINR, USDNAD, USDILS, EURPKR, EURMWK, SGDEUR, FJDUSD, CHFOSO, SVCUSD, MWKGBP, KRWCHF, IDRINR, GBPXAU, USDCUP, USDDJF, AUNCHF, AUDHKD, USDHNL, GBPHRK, TWDGBP, AUDARS, GBPBIF, MURGBP, AEDJOD, GBPNGN, CDFEUR, GBPNZD, CHFTWD, GBPKES, HKDINR, AEDSGD, MYRKRW, SGDAED, AUDCHF, SEKAED, CADAED, EURMZN, LKRGBP, USDMKD, SZLGBP, BRLEUR, NZDIDR, CHFHUF, DKKPHP, DKKSGD, MYRPKR, EURCZK, SHPUSD, GBPARS, DKKGBP, ZARSZL, ISKCHF, THBHKD, MMKEUR, SLLUSD, XAGKRW, MXNDKK, JODGBP, IDRHKD, DKKCOP, CNYTWD, GBPSLL, ZAREGP, TRYEUR, HUFJPY, BRLCOP, TRYZAR, MOPGBP, EURBSD, COPZAR, HUFGBP, CHFISK, ZARCAD, USDKMF, SEKCHF, VNDCAD, JPYNOK, INRSEK, HKDNZD, MGAGBP, GBPGHS, ZARAUD, RUBCHF, CADMXN, TWDJPY, TWDINR, TWDDKK, THBKRW, IDRUSD, GBPLAK, CHFUSD, AUDKRW, KRWCNY, ZARCNY, AEDNOK, EURRSD, BRLARS, AUDNOK, EURISK, EURGNF, XAGRUB, EURNAD, USDLRD, AUDXAU, DOPEUR, SEKRUB, ZARMYR, AEDUSD, INRGBP, THBJPY, USDQAR, GBPPHP, FJDEUR, SLLGBP, AUDCNY, EURDKK, INRNZD, PLNNOK, YERUSD, HKDMYR, ILSCHF, XAUINR, PKRBHD, THBAUD, GBPGTQ, USDBRL, DKKEUR, CADZAR, HNLEUR, PKRHKD, SCRGBP, HUFNZD, NOKNZD, MXNUSD, USDTHB, RSDGBP, INRXAU, EURXAG, XAGAUD, SARXAU, LYDEUR, CNYXAG, RUBEUR, CADUSD, USDINR, USDAWG, USDLKR, ZARNGN, GBPMOP, ZARAED, KRWGBP, VNDJPY, CHFNBL, GHSEUR, AEDCAD, NZDHUF, MALUSD, HKDKRW, ARSCLP, MGAUSD, IDRCAD, ZARGBP, EURKHR, USDGHS, XAUMXN, EURRON, JMDEUR, EURLKR, RUBAUD, HUFDKK, KHREUR, XAUAUD, MXNHKD, EURCNH, EGPPKR, VNDUSD, ZARRUB, DJFGBP, EURBMD, GBPXPT, ZAREUR, MYRCAD, SZLEUR, USDBSD, ZARTWD, PENARS, NIOEUR, MYRGBP, UYUEUR, GBPBHD, LBPGBP, ZARPHP, TRYGBP, UYUGBP, CADKRW, USDSGD, USDIDR, RUBKRW, THBCAD, INRXAG, EURLRD, AUDBRL, KMFGBP, EURCDF, ISKDKK, GBPKZT, VNDEUR, TRYDKK, USDBRI, SARAED, BHDAED, USDMOP, GBPMMK, USDKYD, DKKCHF, PKRNZD, BWPCHF, USDTRY, CZKAUD, NOKSEK, XAGINR, EURSOS, SEKSGD, NOKAUD, EURUAH, MYRJPY, QARPKR, USDPEN, UAHUSD, MUREUR, SEKHKD, THBNZD, INRAUD, JPYRUB, THBXAU, ALLGBP, PLNDKK, MXNBRL, BBDUSD, GBPCNH, SEKGBP, USDXPF, HUFPLN, SGDTRY, IDRAUD, USDNOK, USDRON, ILSGBP, PLNUSD, NZDUSD, GBPTTD, BRLXAU, JPYGBP, USDBHD, MXNPLN, IDRCNY, USDBBD, EURBTN, INRDKK, USDPGK, CHFZAR, DKKCZK, HKDGBP, ZARARS, BDTEUR, GNFEUR, GTQGBP, USDSOS, CLPBRL, HKDCNY, MVRGBP, USDNPR, HRKEUR, KRWSEK, SGDTWD, EURBIF, GBPSGD, ZARMWK, GBPLYD, CADINR, BRLMXN, EURMKD, BGNCNY, LKRUSD, AUDJPY, EURPGK, NOKGBP, UGXGBP, BGNDKK, EURLYD, SGDMXN, KRWIDR, NOKPLN, GBPTRY, SCREUR, AEDILS, EURSCR, NZDTHB, UAHEUR, MXNZAR, HTGUSD, SEKDKK, RUBXAG, USDCAD, GBPTND, CHFJPY, SZLZAR, DJFEUR, TNDZAR, PENCOP, GBPINR, INRNOK, JPYMXN, MYRCNY, XAGUSD, BDTUSD, CLPEUR, HUFCHF, USDSEK, SARKWD, USDLAK, AUDFJD, MKDGBP, INRKRW, AFNEUR, PKRAED, IDRNZD, EURMMK, EURPHP, PGKEUR, SDGUSD, GBPMGA, EURHNL, IQDUSD, NGNGBP, BAMUSD, EURCNY, INRJPY, GTQEUR, LKREUR, BSDUSD, NGNZAR, XPDGBP, ZARNZD, TWDAUD, TJSEUR, GBPAWG, INRCNY, HKDBRL, LRDEUR, BRLKRW, AWGGBP, MYRZAR, CHFILS, ZMWZAR, ZARLKR, SGDCAD, SVCGBP, TWDHKD, KRWXAG, EURSLL, GBPKMF, GBPRON, THBUSD, NOKRUB, ZARINR, EURGBP, BOBEUR, EURLSL, CHFKRW, THBSGD, PLNILS, AUDXAG, EURTRY, GHSZAR, USDTZS, IDREUR, AUDAED, BRLCAD, PLNSEK, AUDCNH, INRTWD, AUDPLN, TWDPKR, THBGBP, GBPLSL, TRYPLN, HKDIDR, ARSAUD, RWFUSD, EURNIO, SEKNZD, JPYDKK, CNYGBP, RUBXAU, USDMGA, PYGUSD, MXNGBP, ZARCOP, PENEUR, KRWCAD, BMDCAD, GBPGNF, EURMUR, CADXAU, GBPSVC, KYDBMD, NZDAED, NOKCHF, EURTZS, NZDZAR, AUDDKK, MXNPEN, TRYAUD, PLNHRK, HUFUSD, GBPIQD, GHSGBP, DKKHUF, GBPDZD, COPBRL, JPYEGP, GBPXPF, USDCDF, ILSEUR, CNYTHB, KRUCHF, NSOUSD, GBPSCR, EGPJPY, BHDEUR, EURINR, KWDSAR, MKDEUR, AEDOMR, ZARCHF, KRWXAU, MKDUSD, TRYJPY, ZARPLN, KESUSD, PLNMXN, SARGBP, CHFKRU, USDTMT, XAUBRL, USDSAR, ZARUSD, JPYCLP, HKDDKK, CUPGBP, XPTGBP, JPYEUR, PKRDKK, USDHUF, USDVND, ARSGBP, USDSVC, GBPIDR, HKDXAU, PKREUR, GBPBZD, CNYMYR, PLNGBP, SAREUR, ZARBRL, SGDBRL, JPYTWD, ZARXAU, CHFPLN, USDRWF, EURSDG, TWDIDR, COPARS, NZDTWD, CZKJPY, EURKES, GYDUSD, BDTGBP, GBPCUP, BRLSEK, TRYNZD, SDGEUR, GBPJMD, ZARTZS, TJSUSD, CADBGN, JPYBRL, USDSZL, GBPGYD, EURCUP, MGAEUR, GBPBGN, SARXAG, CHFAUD, PLNCZK, CLPGBP, NZDKRW, CNYHKD, CYPZAR, HNLGBP, HRKGBP, PKRUSD, RWFGBP, ZARIDR, GBPEGP, EURBND, COPUSD, RUBZAR, USDMVR, UAHDKK, JPYINR, EURNOK, OMRGBP, DZDUSD, JPYNZD, BTNEUR, EURETB, AEDQAR, ZARSEK, TWDCHF, TRYCHF, CHFEUR, GBPVND, XAGGBP, AUDPHP, GBPXAG, HTGGBP, PKRMYR, RSDJPY, AMDEUR, GYDGBP, BGNCAD, DOECHF, USDDOE, CHFBRI, SEKTWD, IDRKRW, KZTUSD, HKDMXN, CZKMXN, BHDPKR, SGDNOK, QARGBP, JPYRSD, EURUSD, SEKJPY, GBPBAM, KRWZAR, JPYVND, PHPDKK, NZDCHF, EURGYD, CADAUD, JPYXAU, HTGEUR, DKKSEK, SGDPKR, EURIDR, CZKNZD, NZDTRY, HKDTWD, CNYAUD, EUREGP, GBPSZL, JPYNGN, USDBND, EURCAD, EGPGBP, DOEUSD, AUDINR, CHFTRY, USDGNF, BMDGBP, USDGYD, BWPGBP, KWDAED, USDPAB, LKRZAR, EURFJD, JMDUSD, JPYCAD, CADBMD, GBPAUD, CHFVRN, CADJPY, USDMAL, CNHEUR, GBPCAD, JPYPLN, NZDPLN, CHFSZL, JPYILS, DKKBGN, DKKHKD, EGPUSD, OSOCHF, HUFEUR, USDKES, PENUSD, EURAMD, TWDUSD, ZARKRW, GBPKWD")),(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"resolution"),(0,S.kt)("td",{parentName:"tr",align:null},"-r  --resolution"),(0,S.kt)("td",{parentName:"tr",align:null},"[Alphavantage only]"," Resolution of data. Can be intraday, daily, weekly or monthly"),(0,S.kt)("td",{parentName:"tr",align:null},"d"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"i, d, w, m")),(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"interval"),(0,S.kt)("td",{parentName:"tr",align:null},"-i  --interval"),(0,S.kt)("td",{parentName:"tr",align:null},"Interval of intraday data. Options: ","[YahooFinance]"," 1min, 2min, 5min, 15min, 30min, 60min, 90min, 1hour, 1day, 5day, 1week, 1month, 3month. ","[AlphaVantage]"," 1min, 5min, 15min, 30min, 60min"),(0,S.kt)("td",{parentName:"tr",align:null},"1day"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"1min, 5min, 15min, 30min, 60min, 90min, 1hour, 1day, 5day, 1week, 1month, 3month")),(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"start_date"),(0,S.kt)("td",{parentName:"tr",align:null},"-s  --start"),(0,S.kt)("td",{parentName:"tr",align:null},"The starting date (format YYYY-MM-DD) of the forex pair"),(0,S.kt)("td",{parentName:"tr",align:null},"datetime.now() - timedelta(days=365)"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"None")),(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"end"),(0,S.kt)("td",{parentName:"tr",align:null},"-e  --end"),(0,S.kt)("td",{parentName:"tr",align:null},"The ending date (format YYYY-MM-DD) of the forex pair"),(0,S.kt)("td",{parentName:"tr",align:null},"2024-02-13"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"None")))),(0,S.kt)("hr",null))}n.isMDXComponent=!0}}]);