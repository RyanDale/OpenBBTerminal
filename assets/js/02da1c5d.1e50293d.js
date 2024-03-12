"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15597],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(a),p=r,g=u["".concat(o,".").concat(p)]||u[p]||d[p]||i;return a?n.createElement(g,s(s({ref:t},m),{},{components:a})):n.createElement(g,s({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(35742);function i(e){let{title:t}=e;return n.createElement(r.Z,null,n.createElement("title",null,t))}},61853:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),i=a(88828);const s={title:"search",description:"The 'search' documentation provides a detailed guide to using various search commands on our platform. This includes usage, parameters, and term definitions for finding company tickers, filtering stocks based on country, sector, industry or specific exchange country.",keywords:["Search Documentation","Company Tickers","Stock Market Search","Search By Country","Search By Sector","Search By Industry","Search By Exchange Country"]},l=void 0,o={unversionedId:"terminal/reference/stocks/search",id:"terminal/reference/stocks/search",title:"search",description:"The 'search' documentation provides a detailed guide to using various search commands on our platform. This includes usage, parameters, and term definitions for finding company tickers, filtering stocks based on country, sector, industry or specific exchange country.",source:"@site/content/terminal/reference/stocks/search.md",sourceDirName:"terminal/reference/stocks",slug:"/terminal/reference/stocks/search",permalink:"/terminal/reference/stocks/search",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/search.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710245802,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{title:"search",description:"The 'search' documentation provides a detailed guide to using various search commands on our platform. This includes usage, parameters, and term definitions for finding company tickers, filtering stocks based on country, sector, industry or specific exchange country.",keywords:["Search Documentation","Company Tickers","Stock Market Search","Search By Country","Search By Sector","Search By Industry","Search By Exchange Country"]},sidebar:"tutorialSidebar",previous:{title:"quote",permalink:"/terminal/reference/stocks/quote"},next:{title:"tob",permalink:"/terminal/reference/stocks/tob"}},c={},m=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:m},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"stocks /search - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Show companies matching the search query, country, sector, industry and/or exchange. Note that by default only the United States exchanges are searched which tend to contain the most extensive data for each company. To search all exchanges use the --all-exchanges flag."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"search [-q QUERY [QUERY ...]] [-c country] [-s sector] [--industrygroup industry_group] [-i industry] [-e exchange] [--exchangecountry exchange_country] [-a]\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"-q  --query"),(0,r.kt)("td",{parentName:"tr",align:null},"The search term used to find company tickers"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"country"),(0,r.kt)("td",{parentName:"tr",align:null},"-c  --country"),(0,r.kt)("td",{parentName:"tr",align:null},"Search by country to find stocks matching the criteria"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"afghanistan, anguilla, argentina, australia, austria, azerbaijan, bahamas, bangladesh, barbados, belgium, belize, bermuda, botswana, brazil, british_virgin_islands, cambodia, canada, cayman_islands, chile, china, colombia, costa_rica, cyprus, czech_republic, denmark, dominican_republic, egypt, estonia, falkland_islands, finland, france, french_guiana, gabon, georgia, germany, ghana, gibraltar, greece, greenland, guernsey, hong_kong, hungary, iceland, india, indonesia, ireland, isle_of_man, israel, italy, ivory_coast, japan, jersey, jordan, kazakhstan, kenya, kyrgyzstan, latvia, liechtenstein, lithuania, luxembourg, macau, macedonia, malaysia, malta, mauritius, mexico, monaco, mongolia, montenegro, morocco, mozambique, myanmar, namibia, netherlands, netherlands_antilles, new_zealand, nigeria, norway, panama, papua_new_guinea, peru, philippines, poland, portugal, qatar, reunion, romania, russia, saudi_arabia, senegal, singapore, slovakia, slovenia, south_africa, south_korea, spain, suriname, sweden, switzerland, taiwan, tanzania, thailand, turkey, ukraine, united_arab_emirates, united_kingdom, united_states, uruguay, vietnam, zambia")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sector"),(0,r.kt)("td",{parentName:"tr",align:null},"-s  --sector"),(0,r.kt)("td",{parentName:"tr",align:null},"Search by sector to find stocks matching the criteria"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"communication_services, consumer_discretionary, consumer_staples, energy, financials, health_care, industrials, information_technology, materials, real_estate, utilities")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"industry_group"),(0,r.kt)("td",{parentName:"tr",align:null},"--industrygroup"),(0,r.kt)("td",{parentName:"tr",align:null},"Search by industry group to find stocks matching the criteria"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"automobiles",(0,r.kt)("em",{parentName:"td"},"&_components, banks, capital_goods, commercial"),"&",(0,r.kt)("em",{parentName:"td"},"professional_services, consumer_durables"),"&",(0,r.kt)("em",{parentName:"td"},"apparel, consumer_services, diversified_financials, energy, food"),"&",(0,r.kt)("em",{parentName:"td"},"staples_retailing, food,_beverage"),"&",(0,r.kt)("em",{parentName:"td"},"tobacco, health_care_equipment"),"&",(0,r.kt)("em",{parentName:"td"},"services, household"),"&",(0,r.kt)("em",{parentName:"td"},"personal_products, insurance, materials, media"),"&",(0,r.kt)("em",{parentName:"td"},"entertainment, pharmaceuticals,_biotechnology"),"&",(0,r.kt)("em",{parentName:"td"},"life_sciences, real_estate, retailing, semiconductors"),"&",(0,r.kt)("em",{parentName:"td"},"semiconductor_equipment, software"),"&",(0,r.kt)("em",{parentName:"td"},"services, technology_hardware"),"&_equipment, telecommunication_services, transportation, utilities")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"industry"),(0,r.kt)("td",{parentName:"tr",align:null},"-i  --industry"),(0,r.kt)("td",{parentName:"tr",align:null},"Search by industry to find stocks matching the criteria"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"aerospace",(0,r.kt)("em",{parentName:"td"},"&_defense, air_freight"),"&",(0,r.kt)("em",{parentName:"td"},"logistics, airlines, auto_components, automobiles, banks, beverages, biotechnology, building_products, capital_markets, chemicals, commercial_services"),"&",(0,r.kt)("em",{parentName:"td"},"supplies, communications_equipment, construction"),"&",(0,r.kt)("em",{parentName:"td"},"engineering, construction_materials, consumer_finance, distributors, diversified_consumer_services, diversified_financial_services, diversified_telecommunication_services, electric_utilities, electrical_equipment, electronic_equipment,_instruments"),"&",(0,r.kt)("em",{parentName:"td"},"components, energy_equipment"),"&",(0,r.kt)("em",{parentName:"td"},"services, entertainment, equity_real_estate_investment_trusts"),"(reits), food",(0,r.kt)("em",{parentName:"td"},"&_staples_retailing, food_products, gas_utilities, health_care_equipment"),"&",(0,r.kt)("em",{parentName:"td"},"supplies, health_care_providers"),"&",(0,r.kt)("em",{parentName:"td"},"services, health_care_technology, hotels,_restaurants"),"&",(0,r.kt)("em",{parentName:"td"},"leisure, household_durables, household_products, it_services, independent_power_and_renewable_electricity_producers, industrial_conglomerates, insurance, interactive_media"),"&",(0,r.kt)("em",{parentName:"td"},"services, internet"),"&",(0,r.kt)("em",{parentName:"td"},"direct_marketing_retail, machinery, marine, media, metals"),"&",(0,r.kt)("em",{parentName:"td"},"mining, multi-utilities, oil,_gas"),"&",(0,r.kt)("em",{parentName:"td"},"consumable_fuels, paper"),"&",(0,r.kt)("em",{parentName:"td"},"forest_products, pharmaceuticals, professional_services, real_estate_management"),"&",(0,r.kt)("em",{parentName:"td"},"development, road"),"&",(0,r.kt)("em",{parentName:"td"},"rail, semiconductors"),"&",(0,r.kt)("em",{parentName:"td"},"semiconductor_equipment, software, specialty_retail, technology_hardware,_storage"),"&",(0,r.kt)("em",{parentName:"td"},"peripherals, textiles,_apparel"),"&",(0,r.kt)("em",{parentName:"td"},"luxury_goods, thrifts"),"&",(0,r.kt)("em",{parentName:"td"},"mortgage_finance, tobacco, trading_companies"),"&_distributors, transportation_infrastructure, water_utilities")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exchange"),(0,r.kt)("td",{parentName:"tr",align:null},"-e  --exchange"),(0,r.kt)("td",{parentName:"tr",align:null},"Search by a specific exchange to find stocks matching the criteria"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"ams, aqs, ase, asx, ath, ber, bru, bse, bts, bud, bue, cai, ccs, cnq, cph, cse, doh, dus, ebs, enx, fka, fra, ger, ham, han, hel, hkg, ice, iob, ise, ist, jkt, jnb, jpx, kls, koe, ksc, lis, lit, lse, mce, mcx, mex, mil, mun, nae, nas, ncm, neo, ngm, nms, nse, nsi, nyq, nys, nze, obb, osl, par, pcx, pnk, pra, ris, sao, sap, sat, sau, ses, set, sgo, shh, shz, sto, stu, tai, tal, tlo, tlv, tor, two, van, vie")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exchange_country"),(0,r.kt)("td",{parentName:"tr",align:null},"--exchangecountry"),(0,r.kt)("td",{parentName:"tr",align:null},"Search by a specific country and all its exchanges to find stocks matching the criteria"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"united_states, argentina, austria, australia, belgium, brazil, canada, chile, china, czech_republic, denmark, egypt, estonia, europe, finland, france, germany, greece, hong_kong, hungary, iceland, india, indonesia, ireland, israel, italy, japan, latvia, lithuania, malaysia, mexico, netherlands, new_zealand, norway, portugal, qatar, russia, singapore, south_africa, south_korea, spain, saudi_arabia, sweden, switzerland, taiwan, thailand, turkey, united_kingdom, venezuela")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"all_exchanges"),(0,r.kt)("td",{parentName:"tr",align:null},"-a  --all-exchanges"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to search all exchanges, without this option only the United States market is searched."),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null))}p.isMDXComponent=!0}}]);