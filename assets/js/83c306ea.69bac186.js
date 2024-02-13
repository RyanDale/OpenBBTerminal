"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8041],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>N});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),m=p(a),k=r,N=m["".concat(o,".").concat(k)]||m[k]||s[k]||l;return a?n.createElement(N,i(i({ref:e},u),{},{components:a})):n.createElement(N,i({ref:e},u))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d[m]="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},85162:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function i(t){let{children:e,hidden:a,className:i}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},e)}},31792:(t,e,a)=>{a.d(e,{Z:()=>v});var n=a(87462),r=a(67294),l=a(86010),i=a(12466),d=a(16550),o=a(91980),p=a(67392),u=a(50012);function m(t){return function(t){return r.Children.map(t,(t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:a,attributes:n,default:r}}=t;return{value:e,label:a,attributes:n,default:r}}))}function s(t){const{values:e,children:a}=t;return(0,r.useMemo)((()=>{const t=e??m(a);return function(t){const e=(0,p.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,a])}function k(t){let{value:e,tabValues:a}=t;return a.some((t=>t.value===e))}function N(t){let{queryString:e=!1,groupId:a}=t;const n=(0,d.k6)(),l=function(t){let{queryString:e=!1,groupId:a}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,o._X)(l),(0,r.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(n.location.search);e.set(l,t),n.replace({...n.location,search:e.toString()})}),[l,n])]}function g(t){const{defaultValue:e,queryString:a=!1,groupId:n}=t,l=s(t),[i,d]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:a}=t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!k({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=a.find((t=>t.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:l}))),[o,p]=N({queryString:a,groupId:n}),[m,g]=function(t){let{groupId:e}=t;const a=function(t){return t?`docusaurus.tab.${t}`:null}(e),[n,l]=(0,u.Nk)(a);return[n,(0,r.useCallback)((t=>{a&&l.set(t)}),[a,l])]}({groupId:n}),c=(()=>{const t=o??m;return k({value:t,tabValues:l})?t:null})();(0,r.useLayoutEffect)((()=>{c&&d(c)}),[c]);return{selectedValue:i,selectValue:(0,r.useCallback)((t=>{if(!k({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);d(t),p(t),g(t)}),[p,g,l]),tabValues:l}}var c=a(72389);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function f(t){let{className:e,block:a,selectedValue:o,selectValue:p,tabValues:u}=t;const m=[],{blockElementScrollPositionUntilNextRender:s}=(0,i.o5)(),{pathname:k}=(0,d.TH)(),N=t=>{const e=t.currentTarget,a=m.indexOf(e),n=u[a].value;n!==o&&(s(e),p(n))},g=t=>{let e=null;switch(t.key){case"Enter":N(t);break;case"ArrowRight":{const a=m.indexOf(t.currentTarget)+1;e=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(t.currentTarget)-1;e=m[a]??m[m.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},u.map((t=>{let{value:e,label:a,attributes:i}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===e?0:-1,"aria-selected":o===e,key:e,ref:t=>m.push(t),onKeyDown:g,onClick:N},i,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,i?.className,{"border-b-2 pointer-events-none":o===e,"border-b-2 text-[#669dcb] border-[#669dcb]":o===e&&k.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":o===e&&k.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":o!==e&&k.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":o===e&&k.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":o!==e&&k.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":o!==e&&k.startsWith("/terminal")})}),a??e)})))}function y(t){let{lazy:e,children:a,selectedValue:n}=t;if(a=Array.isArray(a)?a:[a],e){const t=a.find((t=>t.props.value===n));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function h(t){const e=g(t);return r.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},r.createElement(f,(0,n.Z)({},t,e)),r.createElement(y,(0,n.Z)({},t,e)))}function v(t){const e=(0,c.Z)();return r.createElement(h,(0,n.Z)({key:String(e)},t))}},16579:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>N,frontMatter:()=>d,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),l=a(31792),i=a(85162);const d={title:"Insider Trading",description:"Insider Trading"},o=void 0,p={unversionedId:"platform/data_models/InsiderTrading",id:"platform/data_models/InsiderTrading",title:"Insider Trading",description:"Insider Trading",source:"@site/content/platform/data_models/InsiderTrading.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/InsiderTrading",permalink:"/platform/data_models/InsiderTrading",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/data_models/InsiderTrading.md",tags:[],version:"current",frontMatter:{title:"Insider Trading",description:"Insider Trading"},sidebar:"tutorialSidebar",previous:{title:"Index Snapshots",permalink:"/platform/data_models/IndexSnapshots"},next:{title:"Institutional Ownership",permalink:"/platform/data_models/InstitutionalOwnership"}},u={},m=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}],s={toc:m},k="wrapper";function N(t){let{components:e,...a}=t;return(0,r.kt)(k,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"implementation-details"},"Implementation details"),(0,r.kt)("h3",{id:"class-names"},"Class names"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Model name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameters class"),(0,r.kt)("th",{parentName:"tr",align:null},"Data class"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"InsiderTrading")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"InsiderTradingQueryParams")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"InsiderTradingData"))))),(0,r.kt)("h3",{id:"import-statement"},"Import Statement"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_core.provider.standard_models.insider_trading import (\nInsiderTradingData,\nInsiderTradingQueryParams,\n)\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"standard",label:"Standard",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol to get data for."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of data entries to return."),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provider"),(0,r.kt)("td",{parentName:"tr",align:null},"Literal","['fmp', 'intrinio']"),(0,r.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."),(0,r.kt)("td",{parentName:"tr",align:null},'"fmp"'),(0,r.kt)("td",{parentName:"tr",align:null},"True"))))),(0,r.kt)(i.Z,{value:"fmp",label:"fmp",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol to get data for."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of data entries to return."),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provider"),(0,r.kt)("td",{parentName:"tr",align:null},"Literal","['fmp', 'intrinio']"),(0,r.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."),(0,r.kt)("td",{parentName:"tr",align:null},'"fmp"'),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transaction_type"),(0,r.kt)("td",{parentName:"tr",align:null},"Literal","[None, 'award', 'conversion', 'return', 'expire_short', 'in_kind', 'gift', 'expire_long', 'discretionary', 'other', 'small', 'exempt', 'otm', 'purchase', 'sale', 'tender', 'will', 'itm', 'trust']"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of the transaction."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True"))))),(0,r.kt)(i.Z,{value:"intrinio",label:"intrinio",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol to get data for."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of data entries to return."),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provider"),(0,r.kt)("td",{parentName:"tr",align:null},"Literal","['fmp', 'intrinio']"),(0,r.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."),(0,r.kt)("td",{parentName:"tr",align:null},'"fmp"'),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start_date"),(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"Start date of the data, in YYYY-MM-DD format."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end_date"),(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"End date of the data, in YYYY-MM-DD format."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ownership_type"),(0,r.kt)("td",{parentName:"tr",align:null},"Literal","['D', 'I']"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of ownership."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sort_by"),(0,r.kt)("td",{parentName:"tr",align:null},"Literal","['filing_date', 'updated_on']"),(0,r.kt)("td",{parentName:"tr",align:null},"Field to sort by."),(0,r.kt)("td",{parentName:"tr",align:null},"updated_on"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))))),(0,r.kt)("h2",{id:"data"},"Data"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"standard",label:"Standard",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"company_cik"),(0,r.kt)("td",{parentName:"tr",align:null},"Union","[int, str]"),(0,r.kt)("td",{parentName:"tr",align:null},"CIK number of the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filing_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Union","[date, datetime]"),(0,r.kt)("td",{parentName:"tr",align:null},"Filing date of the trade.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transaction_date"),(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"Date of the transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"owner_cik"),(0,r.kt)("td",{parentName:"tr",align:null},"Union","[int, str]"),(0,r.kt)("td",{parentName:"tr",align:null},"Reporting individual's CIK.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"owner_name"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the reporting individual.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"owner_title"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The title held by the reporting individual.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transaction_type"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of transaction being reported.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"acquisition_or_disposition"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Acquisition or disposition of the shares.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"security_type"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of security transacted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"securities_owned"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of securities owned by the reporting individual.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"securities_transacted"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of securities transacted by the reporting individual.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transaction_price"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"The price of the transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filing_url"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Link to the filing."))))),(0,r.kt)(i.Z,{value:"fmp",label:"fmp",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"company_cik"),(0,r.kt)("td",{parentName:"tr",align:null},"Union","[int, str]"),(0,r.kt)("td",{parentName:"tr",align:null},"CIK number of the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filing_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Union","[date, datetime]"),(0,r.kt)("td",{parentName:"tr",align:null},"Filing date of the trade.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transaction_date"),(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"Date of the transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"owner_cik"),(0,r.kt)("td",{parentName:"tr",align:null},"Union","[int, str]"),(0,r.kt)("td",{parentName:"tr",align:null},"Reporting individual's CIK.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"owner_name"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the reporting individual.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"owner_title"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The title held by the reporting individual.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transaction_type"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of transaction being reported.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"acquisition_or_disposition"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Acquisition or disposition of the shares.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"security_type"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of security transacted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"securities_owned"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of securities owned by the reporting individual.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"securities_transacted"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of securities transacted by the reporting individual.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transaction_price"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"The price of the transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filing_url"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Link to the filing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"form_type"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Form type of the insider trading."))))),(0,r.kt)(i.Z,{value:"intrinio",label:"intrinio",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"company_cik"),(0,r.kt)("td",{parentName:"tr",align:null},"Union","[int, str]"),(0,r.kt)("td",{parentName:"tr",align:null},"CIK number of the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filing_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Union","[date, datetime]"),(0,r.kt)("td",{parentName:"tr",align:null},"Filing date of the trade.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transaction_date"),(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"Date of the transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"owner_cik"),(0,r.kt)("td",{parentName:"tr",align:null},"Union","[int, str]"),(0,r.kt)("td",{parentName:"tr",align:null},"Reporting individual's CIK.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"owner_name"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the reporting individual.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"owner_title"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The title held by the reporting individual.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transaction_type"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of transaction being reported.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"acquisition_or_disposition"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Acquisition or disposition of the shares.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"security_type"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of security transacted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"securities_owned"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of securities owned by the reporting individual.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"securities_transacted"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of securities transacted by the reporting individual.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transaction_price"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"The price of the transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filing_url"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Link to the filing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"company_name"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"conversion_exercise_price"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Conversion/Exercise price of the shares.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"deemed_execution_date"),(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"Deemed execution date of the trade.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exercise_date"),(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"Exercise date of the trade.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expiration_date"),(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"Expiration date of the derivative.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"underlying_security_title"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the underlying non-derivative security related to this derivative transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"underlying_shares"),(0,r.kt)("td",{parentName:"tr",align:null},"Union","[int, float]"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of underlying shares related to this derivative transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nature_of_ownership"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Nature of ownership of the insider trading.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"director"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the owner is a director.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"officer"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the owner is an officer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ten_percent_owner"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the owner is a 10% owner.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"other_relation"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the owner is having another relation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"derivative_transaction"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the owner is having a derivative transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"report_line_number"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Report line number of the insider trading.")))))))}N.isMDXComponent=!0}}]);