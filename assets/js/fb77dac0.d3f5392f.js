"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76882],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,i),hidden:a},t)}},88828:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(35742);function l(e){let{title:t}=e;return r.createElement(n.Z,null,r.createElement("title",null,t))}},31792:(e,t,a)=>{a.d(t,{Z:()=>q});var r=a(87462),n=a(67294),l=a(86010),i=a(12466),o=a(16550),u=a(91980),s=a(67392),c=a(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=d(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,s]=f({queryString:a,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),h=(()=>{const e=u??p;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),b(e)}),[s,b,l]),tabValues:l}}var h=a(72389);const g={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function v(e){let{className:t,block:a,selectedValue:u,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),{pathname:m}=(0,o.TH)(),f=e=>{const t=e.currentTarget,a=p.indexOf(t),r=c[a].value;r!==u&&(d(t),s(r))},b=e=>{let t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},c.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>p.push(e),onKeyDown:b,onClick:f},i,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",g.tabItem,i?.className,{"border-b-2 pointer-events-none":u===t,"border-b-2 text-[#669dcb] border-[#669dcb]":u===t&&m.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":u===t&&m.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":u!==t&&m.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":u===t&&m.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":u!==t&&m.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":u!==t&&m.startsWith("/terminal")})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=b(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function q(e){const t=(0,h.Z)();return n.createElement(k,(0,r.Z)({key:String(t)},e))}},70348:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>b,frontMatter:()=>u,metadata:()=>c,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),l=a(88828),i=a(31792),o=a(85162);const u={title:"quantile",description:"Calculate the quantile of a target column at a specified quantile percentage",keywords:["quantitative","stats","quantile"]},s=void 0,c={unversionedId:"platform/reference/quantitative/stats/quantile",id:"platform/reference/quantitative/stats/quantile",title:"quantile",description:"Calculate the quantile of a target column at a specified quantile percentage",source:"@site/content/platform/reference/quantitative/stats/quantile.md",sourceDirName:"platform/reference/quantitative/stats",slug:"/platform/reference/quantitative/stats/quantile",permalink:"/platform/reference/quantitative/stats/quantile",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/quantitative/stats/quantile.md",tags:[],version:"current",frontMatter:{title:"quantile",description:"Calculate the quantile of a target column at a specified quantile percentage",keywords:["quantitative","stats","quantile"]},sidebar:"tutorialSidebar",previous:{title:"mean",permalink:"/platform/reference/quantitative/stats/mean"},next:{title:"skew",permalink:"/platform/reference/quantitative/stats/skew"}},p={},d=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}],m={toc:d},f="wrapper";function b(e){let{components:t,...a}=e;return(0,n.kt)(f,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"quantitative/stats/quantile - Reference | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Calculate the quantile of a target column at a specified quantile percentage."),(0,n.kt)("p",null," Quantiles are points dividing the range of a probability distribution into intervals with equal probabilities,\nor dividing the sample in the same way."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from openbb import obb\n# Get Quantile.\nstock_data = obb.equity.price.historical(symbol=\"TSLA\", start_date=\"2023-01-01\", provider=\"fmp\").to_df()\nreturns = stock_data[\"close\"].pct_change().dropna()\nobb.quantitative.stats.quantile(data=returns, target=\"close\", quantile_pct=0.75)\nobb.quantitative.stats.quantile(target='close', data=[{'date': '2023-01-02', 'close': 0.05}, {'date': '2023-01-03', 'close': 0.08}, {'date': '2023-01-04', 'close': 0.07}, {'date': '2023-01-05', 'close': 0.06}, {'date': '2023-01-06', 'close': 0.06}])\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)(i.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"standard",label:"standard",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"data"),(0,n.kt)("td",{parentName:"tr",align:null},"List","[Data]"),(0,n.kt)("td",{parentName:"tr",align:null},"The time series data as a list of data points."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"target"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"The name of the column for which to calculate the quantile."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"quantile_pct"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"The quantile percentage to calculate (e.g., 0.5 for median), default is 0.5."),(0,n.kt)("td",{parentName:"tr",align:null},"0.5"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"OBBject\n    results : List[Data]\n        An object containing the rolling quantile values with the median.\n")))}b.isMDXComponent=!0}}]);