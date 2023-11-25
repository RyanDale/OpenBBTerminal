"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82799],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>g});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),u=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=u(t.components);return r.createElement(d.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),p=u(a),c=n,g=p["".concat(d,".").concat(c)]||p[c]||m[c]||l;return a?r.createElement(g,i(i({ref:e},s),{},{components:a})):r.createElement(g,i({ref:e},s))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[p]="string"==typeof t?t:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(t,e,a)=>{a.d(e,{Z:()=>i});var r=a(67294),n=a(86010);const l={tabItem:"tabItem_Ymn6"};function i(t){let{children:e,hidden:a,className:i}=t;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,i),hidden:a},e)}},88828:(t,e,a)=>{a.d(e,{Z:()=>l});var r=a(67294),n=a(35742);function l(t){let{title:e}=t;return r.createElement(n.Z,null,r.createElement("title",null,e))}},31792:(t,e,a)=>{a.d(e,{Z:()=>v});var r=a(87462),n=a(67294),l=a(86010),i=a(12466),o=a(16550),d=a(91980),u=a(67392),s=a(50012);function p(t){return function(t){return n.Children.map(t,(t=>{if(!t||(0,n.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:a,attributes:r,default:n}}=t;return{value:e,label:a,attributes:r,default:n}}))}function m(t){const{values:e,children:a}=t;return(0,n.useMemo)((()=>{const t=e??p(a);return function(t){const e=(0,u.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,a])}function c(t){let{value:e,tabValues:a}=t;return a.some((t=>t.value===e))}function g(t){let{queryString:e=!1,groupId:a}=t;const r=(0,o.k6)(),l=function(t){let{queryString:e=!1,groupId:a}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,d._X)(l),(0,n.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(r.location.search);e.set(l,t),r.replace({...r.location,search:e.toString()})}),[l,r])]}function h(t){const{defaultValue:e,queryString:a=!1,groupId:r}=t,l=m(t),[i,o]=(0,n.useState)((()=>function(t){let{defaultValue:e,tabValues:a}=t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!c({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=a.find((t=>t.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:l}))),[d,u]=g({queryString:a,groupId:r}),[p,h]=function(t){let{groupId:e}=t;const a=function(t){return t?`docusaurus.tab.${t}`:null}(e),[r,l]=(0,s.Nk)(a);return[r,(0,n.useCallback)((t=>{a&&l.set(t)}),[a,l])]}({groupId:r}),f=(()=>{const t=d??p;return c({value:t,tabValues:l})?t:null})();(0,n.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,n.useCallback)((t=>{if(!c({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);o(t),u(t),h(t)}),[u,h,l]),tabValues:l}}var f=a(72389);const k={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(t){let{className:e,block:a,selectedValue:d,selectValue:u,tabValues:s}=t;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),{pathname:c}=(0,o.TH)(),g=t=>{const e=t.currentTarget,a=p.indexOf(e),r=s[a].value;r!==d&&(m(e),u(r))},h=t=>{let e=null;switch(t.key){case"Enter":g(t);break;case"ArrowRight":{const a=p.indexOf(t.currentTarget)+1;e=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(t.currentTarget)-1;e=p[a]??p[p.length-1];break}}e?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},s.map((t=>{let{value:e,label:a,attributes:i}=t;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:d===e?0:-1,"aria-selected":d===e,key:e,ref:t=>p.push(t),onKeyDown:h,onClick:g},i,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",k.tabItem,i?.className,{"border-b-2 pointer-events-none":d===e,"border-b-2 text-[#669dcb] border-[#669dcb]":d===e&&c.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":d===e&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":d!==e&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":d===e&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":d!==e&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":d!==e&&c.startsWith("/terminal")})}),a??e)})))}function N(t){let{lazy:e,children:a,selectedValue:r}=t;if(a=Array.isArray(a)?a:[a],e){const t=a.find((t=>t.props.value===r));return t?(0,n.cloneElement)(t,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==r}))))}function y(t){const e=h(t);return n.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},n.createElement(b,(0,r.Z)({},t,e)),n.createElement(N,(0,r.Z)({},t,e)))}function v(t){const e=(0,f.Z)();return n.createElement(y,(0,r.Z)({key:String(e)},t))}},68572:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),l=a(88828),i=a(31792),o=a(85162);const d={title:"holdings",description:"Learn how to get the holdings data for an individual ETF using the `obb.etf.holdings` method. Understand the parameters like symbol, provider, date, and CIK. Explore the returns, results, warnings, chart, and metadata. Dive into the data fields like symbol, name, LEI, title, CUSIP, ISIN, balance, units, currency, value, weight, payoff profile, asset category, issuer category, country, and more.",keywords:["ETF holdings","individual ETF holdings","holdings data for ETF","symbol","provider","date","CIK","returns","results","warnings","chart","metadata","data","name","LEI","title","CUSIP","ISIN","balance","units","currency","value","weight","payoff profile","asset category","issuer category","country","is restricted","fair value level","is cash collateral","is non-cash collateral","is loan by fund","acceptance datetime"]},u=void 0,s={unversionedId:"platform/reference/etf/holdings",id:"platform/reference/etf/holdings",title:"holdings",description:"Learn how to get the holdings data for an individual ETF using the `obb.etf.holdings` method. Understand the parameters like symbol, provider, date, and CIK. Explore the returns, results, warnings, chart, and metadata. Dive into the data fields like symbol, name, LEI, title, CUSIP, ISIN, balance, units, currency, value, weight, payoff profile, asset category, issuer category, country, and more.",source:"@site/content/platform/reference/etf/holdings.md",sourceDirName:"platform/reference/etf",slug:"/platform/reference/etf/holdings",permalink:"/platform/reference/etf/holdings",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/etf/holdings.md",tags:[],version:"current",lastUpdatedBy:"teh_coderer",lastUpdatedAt:1700872066,formattedLastUpdatedAt:"Nov 25, 2023",frontMatter:{title:"holdings",description:"Learn how to get the holdings data for an individual ETF using the `obb.etf.holdings` method. Understand the parameters like symbol, provider, date, and CIK. Explore the returns, results, warnings, chart, and metadata. Dive into the data fields like symbol, name, LEI, title, CUSIP, ISIN, balance, units, currency, value, weight, payoff profile, asset category, issuer category, country, and more.",keywords:["ETF holdings","individual ETF holdings","holdings data for ETF","symbol","provider","date","CIK","returns","results","warnings","chart","metadata","data","name","LEI","title","CUSIP","ISIN","balance","units","currency","value","weight","payoff profile","asset category","issuer category","country","is restricted","fair value level","is cash collateral","is non-cash collateral","is loan by fund","acceptance datetime"]},sidebar:"tutorialSidebar",previous:{title:"historical",permalink:"/platform/reference/etf/historical"},next:{title:"holdings_date",permalink:"/platform/reference/etf/holdings_date"}},p={},m=[{value:"Example",id:"example",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}],c={toc:m},g="wrapper";function h(t){let{components:e,...a}=t;return(0,n.kt)(g,(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"etf /holdings - Reference | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Get the holdings for an individual ETF."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'from openbb import obb\nobb.etf.holdings(symbol="AAPL")\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)(i.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"standard",label:"Standard",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Union[str, List","[str]","]"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol to get data for. (ETF)"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['fmp']"),(0,n.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."),(0,n.kt)("td",{parentName:"tr",align:null},'"fmp"'),(0,n.kt)("td",{parentName:"tr",align:null},"True"))))),(0,n.kt)(o.Z,{value:"fmp",label:"fmp",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Union[str, List","[str]","]"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol to get data for. (ETF)"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['fmp']"),(0,n.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."),(0,n.kt)("td",{parentName:"tr",align:null},'"fmp"'),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"date"),(0,n.kt)("td",{parentName:"tr",align:null},"Union","[str, date]"),(0,n.kt)("td",{parentName:"tr",align:null},"A specific date to get data for. This needs to be ",(0,n.kt)("em",{parentName:"td"},"exactly")," the date of the filing. Use the holdings_date command/endpoint to find available filing dates for the ETF."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cik"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"The CIK of the filing entity. Overrides symbol."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"OBBject\n    results : List[EtfHoldings]\n        Serializable results.\n\n    provider : Optional[Literal['fmp']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    metadata: Optional[Metadata]\n        Metadata info about the command execution.\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"data"},"Data"),(0,n.kt)(i.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"standard",label:"Standard",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data. (ETF)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the ETF holding."))))),(0,n.kt)(o.Z,{value:"fmp",label:"fmp",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data. (ETF)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the ETF holding.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lei"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"The LEI of the holding.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"title"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"The title of the holding.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cusip"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"The CUSIP of the holding.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"isin"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"The ISIN of the holding.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"balance"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"The balance of the holding.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"units"),(0,n.kt)("td",{parentName:"tr",align:null},"Union","[str, float]"),(0,n.kt)("td",{parentName:"tr",align:null},"The units of the holding.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"currency"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"The currency of the holding.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"value"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"The value of the holding in USD.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"weight"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"The weight of the holding in ETF in %.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"payoff_profile"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"The payoff profile of the holding.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"asset_category"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"The asset category of the holding.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"issuer_category"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"The issuer category of the holding.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"country"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"The country of the holding.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"is_restricted"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether the holding is restricted.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fair_value_level"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The fair value level of the holding.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"is_cash_collateral"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether the holding is cash collateral.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"is_non_cash_collateral"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether the holding is non-cash collateral.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"is_loan_by_fund"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether the holding is loan by fund.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cik"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"The CIK of the filing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"acceptance_datetime"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"The acceptance datetime of the filing.")))))))}h.isMDXComponent=!0}}]);