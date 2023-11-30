"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1402],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),u=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=u(t.components);return n.createElement(d.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=u(a),c=r,g=m["".concat(d,".").concat(c)]||m[c]||s[c]||l;return a?n.createElement(g,i(i({ref:e},p),{},{components:a})):n.createElement(g,i({ref:e},p))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function i(t){let{children:e,hidden:a,className:i}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},e)}},31792:(t,e,a)=>{a.d(e,{Z:()=>v});var n=a(87462),r=a(67294),l=a(86010),i=a(12466),o=a(16550),d=a(91980),u=a(67392),p=a(50012);function m(t){return function(t){return r.Children.map(t,(t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:a,attributes:n,default:r}}=t;return{value:e,label:a,attributes:n,default:r}}))}function s(t){const{values:e,children:a}=t;return(0,r.useMemo)((()=>{const t=e??m(a);return function(t){const e=(0,u.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,a])}function c(t){let{value:e,tabValues:a}=t;return a.some((t=>t.value===e))}function g(t){let{queryString:e=!1,groupId:a}=t;const n=(0,o.k6)(),l=function(t){let{queryString:e=!1,groupId:a}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,d._X)(l),(0,r.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(n.location.search);e.set(l,t),n.replace({...n.location,search:e.toString()})}),[l,n])]}function f(t){const{defaultValue:e,queryString:a=!1,groupId:n}=t,l=s(t),[i,o]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:a}=t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!c({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=a.find((t=>t.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:l}))),[d,u]=g({queryString:a,groupId:n}),[m,f]=function(t){let{groupId:e}=t;const a=function(t){return t?`docusaurus.tab.${t}`:null}(e),[n,l]=(0,p.Nk)(a);return[n,(0,r.useCallback)((t=>{a&&l.set(t)}),[a,l])]}({groupId:n}),k=(()=>{const t=d??m;return c({value:t,tabValues:l})?t:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((t=>{if(!c({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);o(t),u(t),f(t)}),[u,f,l]),tabValues:l}}var k=a(72389);const h={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function N(t){let{className:e,block:a,selectedValue:d,selectValue:u,tabValues:p}=t;const m=[],{blockElementScrollPositionUntilNextRender:s}=(0,i.o5)(),{pathname:c}=(0,o.TH)(),g=t=>{const e=t.currentTarget,a=m.indexOf(e),n=p[a].value;n!==d&&(s(e),u(n))},f=t=>{let e=null;switch(t.key){case"Enter":g(t);break;case"ArrowRight":{const a=m.indexOf(t.currentTarget)+1;e=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(t.currentTarget)-1;e=m[a]??m[m.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},p.map((t=>{let{value:e,label:a,attributes:i}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:d===e?0:-1,"aria-selected":d===e,key:e,ref:t=>m.push(t),onKeyDown:f,onClick:g},i,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",h.tabItem,i?.className,{"border-b-2 pointer-events-none":d===e,"border-b-2 text-[#669dcb] border-[#669dcb]":d===e&&c.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":d===e&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":d!==e&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":d===e&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":d!==e&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":d!==e&&c.startsWith("/terminal")})}),a??e)})))}function b(t){let{lazy:e,children:a,selectedValue:n}=t;if(a=Array.isArray(a)?a:[a],e){const t=a.find((t=>t.props.value===n));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function y(t){const e=f(t);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(N,(0,n.Z)({},t,e)),r.createElement(b,(0,n.Z)({},t,e)))}function v(t){const e=(0,k.Z)();return r.createElement(y,(0,n.Z)({key:String(e)},t))}},8262:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>d,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),l=a(31792),i=a(85162);const o={title:"Etf Holdings",description:"Get the holdings for an individual ETF"},d=void 0,u={unversionedId:"platform/data_models/EtfHoldings",id:"platform/data_models/EtfHoldings",title:"Etf Holdings",description:"Get the holdings for an individual ETF",source:"@site/content/platform/data_models/EtfHoldings.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/EtfHoldings",permalink:"/platform/data_models/EtfHoldings",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/data_models/EtfHoldings.md",tags:[],version:"current",lastUpdatedBy:"jose-donato",lastUpdatedAt:1701348039,formattedLastUpdatedAt:"Nov 30, 2023",frontMatter:{title:"Etf Holdings",description:"Get the holdings for an individual ETF"},sidebar:"tutorialSidebar",previous:{title:"Etf Historical",permalink:"/platform/data_models/EtfHistorical"},next:{title:"Etf Holdings Date",permalink:"/platform/data_models/EtfHoldingsDate"}},p={},m=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}],s={toc:m},c="wrapper";function g(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"implementation-details"},"Implementation details"),(0,r.kt)("h3",{id:"class-names"},"Class names"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Model name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameters class"),(0,r.kt)("th",{parentName:"tr",align:null},"Data class"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"EtfHoldings")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"EtfHoldingsQueryParams")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"EtfHoldingsData"))))),(0,r.kt)("h3",{id:"import-statement"},"Import Statement"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_core.provider.standard_models.etf_holdings import (\nEtfHoldingsData,\nEtfHoldingsQueryParams,\n)\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"standard",label:"Standard",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"Union[str, List","[str]","]"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol to get data for. (ETF)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provider"),(0,r.kt)("td",{parentName:"tr",align:null},"Literal","['fmp']"),(0,r.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."),(0,r.kt)("td",{parentName:"tr",align:null},'"fmp"'),(0,r.kt)("td",{parentName:"tr",align:null},"True"))))),(0,r.kt)(i.Z,{value:"fmp",label:"fmp",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"Union[str, List","[str]","]"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol to get data for. (ETF)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provider"),(0,r.kt)("td",{parentName:"tr",align:null},"Literal","['fmp']"),(0,r.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."),(0,r.kt)("td",{parentName:"tr",align:null},'"fmp"'),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"Union","[str, date]"),(0,r.kt)("td",{parentName:"tr",align:null},"A specific date to get data for. This needs to be ",(0,r.kt)("em",{parentName:"td"},"exactly")," the date of the filing. Use the holdings_date command/endpoint to find available filing dates for the ETF."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cik"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The CIK of the filing entity. Overrides symbol."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))))),(0,r.kt)("h2",{id:"data"},"Data"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"standard",label:"Standard",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data. (ETF)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the ETF holding."))))),(0,r.kt)(i.Z,{value:"fmp",label:"fmp",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data. (ETF)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the ETF holding.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lei"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The LEI of the holding.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The title of the holding.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cusip"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The CUSIP of the holding.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isin"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The ISIN of the holding.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"balance"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"The balance of the holding.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"units"),(0,r.kt)("td",{parentName:"tr",align:null},"Union","[str, float]"),(0,r.kt)("td",{parentName:"tr",align:null},"The units of the holding.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"currency"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The currency of the holding.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"The value of the holding in USD.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"weight"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"The weight of the holding in ETF in %.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payoff_profile"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The payoff profile of the holding.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"asset_category"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The asset category of the holding.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"issuer_category"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The issuer category of the holding.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"country"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The country of the holding.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is_restricted"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the holding is restricted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fair_value_level"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The fair value level of the holding.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is_cash_collateral"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the holding is cash collateral.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is_non_cash_collateral"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the holding is non-cash collateral.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is_loan_by_fund"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the holding is loan by fund.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cik"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The CIK of the filing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"acceptance_datetime"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The acceptance datetime of the filing.")))))))}g.isMDXComponent=!0}}]);