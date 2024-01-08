"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59666],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),s=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(f,o(o({ref:e},c),{},{components:r})):n.createElement(f,o({ref:e},c))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[d]="string"==typeof t?t:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(t,e,r)=>{r.d(e,{Z:()=>o});var n=r(67294),a=r(86010);const l={tabItem:"tabItem_Ymn6"};function o(t){let{children:e,hidden:r,className:o}=t;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:r},e)}},88828:(t,e,r)=>{r.d(e,{Z:()=>l});var n=r(67294),a=r(35742);function l(t){let{title:e}=t;return n.createElement(a.Z,null,n.createElement("title",null,e))}},31792:(t,e,r)=>{r.d(e,{Z:()=>w});var n=r(87462),a=r(67294),l=r(86010),o=r(12466),i=r(16550),u=r(91980),s=r(67392),c=r(50012);function d(t){return function(t){return a.Children.map(t,(t=>{if(!t||(0,a.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:r,attributes:n,default:a}}=t;return{value:e,label:r,attributes:n,default:a}}))}function p(t){const{values:e,children:r}=t;return(0,a.useMemo)((()=>{const t=e??d(r);return function(t){const e=(0,s.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,r])}function m(t){let{value:e,tabValues:r}=t;return r.some((t=>t.value===e))}function f(t){let{queryString:e=!1,groupId:r}=t;const n=(0,i.k6)(),l=function(t){let{queryString:e=!1,groupId:r}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:e,groupId:r});return[(0,u._X)(l),(0,a.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(n.location.search);e.set(l,t),n.replace({...n.location,search:e.toString()})}),[l,n])]}function b(t){const{defaultValue:e,queryString:r=!1,groupId:n}=t,l=p(t),[o,i]=(0,a.useState)((()=>function(t){let{defaultValue:e,tabValues:r}=t;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=r.find((t=>t.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:l}))),[u,s]=f({queryString:r,groupId:n}),[d,b]=function(t){let{groupId:e}=t;const r=function(t){return t?`docusaurus.tab.${t}`:null}(e),[n,l]=(0,c.Nk)(r);return[n,(0,a.useCallback)((t=>{r&&l.set(t)}),[r,l])]}({groupId:n}),h=(()=>{const t=u??d;return m({value:t,tabValues:l})?t:null})();(0,a.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,a.useCallback)((t=>{if(!m({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);i(t),s(t),b(t)}),[s,b,l]),tabValues:l}}var h=r(72389);const g={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function y(t){let{className:e,block:r,selectedValue:u,selectValue:s,tabValues:c}=t;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),{pathname:m}=(0,i.TH)(),f=t=>{const e=t.currentTarget,r=d.indexOf(e),n=c[r].value;n!==u&&(p(e),s(n))},b=t=>{let e=null;switch(t.key){case"Enter":f(t);break;case"ArrowRight":{const r=d.indexOf(t.currentTarget)+1;e=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(t.currentTarget)-1;e=d[r]??d[d.length-1];break}}e?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},c.map((t=>{let{value:e,label:r,attributes:o}=t;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===e?0:-1,"aria-selected":u===e,key:e,ref:t=>d.push(t),onKeyDown:b,onClick:f},o,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",g.tabItem,o?.className,{"border-b-2 pointer-events-none":u===e,"border-b-2 text-[#669dcb] border-[#669dcb]":u===e&&m.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":u===e&&m.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":u!==e&&m.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":u===e&&m.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":u!==e&&m.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":u!==e&&m.startsWith("/terminal")})}),r??e)})))}function k(t){let{lazy:e,children:r,selectedValue:n}=t;if(r=Array.isArray(r)?r:[r],e){const t=r.find((t=>t.props.value===n));return t?(0,a.cloneElement)(t,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((t,e)=>(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function v(t){const e=b(t);return a.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},a.createElement(y,(0,n.Z)({},t,e)),a.createElement(k,(0,n.Z)({},t,e)))}function w(t){const e=(0,h.Z)();return a.createElement(v,(0,n.Z)({key:String(e)},t))}},49848:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>b,frontMatter:()=>u,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),l=r(88828),o=r(31792),i=r(85162);const u={title:"unitroot_test",description:"Learn about the Unit Root Test function in Python, including the Augmented Dickey-Fuller test and the Kwiatkowski-Phillips-Schmidt-Shin test. Explore the parameters, such as data, target, fuller_reg, and kpss_reg, and understand how to interpret the unit root tests summary.",keywords:["Unit Root Test","Augmented Dickey-Fuller test","Kwiatkowski-Phillips-Schmidt-Shin test","data","target","fuller_reg","kpss_reg","Time series data","unit root tests","unit root tests summary"]},s=void 0,c={unversionedId:"platform/reference/quantitative/unitroot_test",id:"platform/reference/quantitative/unitroot_test",title:"unitroot_test",description:"Learn about the Unit Root Test function in Python, including the Augmented Dickey-Fuller test and the Kwiatkowski-Phillips-Schmidt-Shin test. Explore the parameters, such as data, target, fuller_reg, and kpss_reg, and understand how to interpret the unit root tests summary.",source:"@site/content/platform/reference/quantitative/unitroot_test.md",sourceDirName:"platform/reference/quantitative",slug:"/platform/reference/quantitative/unitroot_test",permalink:"/platform/reference/quantitative/unitroot_test",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/quantitative/unitroot_test.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1704729450,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{title:"unitroot_test",description:"Learn about the Unit Root Test function in Python, including the Augmented Dickey-Fuller test and the Kwiatkowski-Phillips-Schmidt-Shin test. Explore the parameters, such as data, target, fuller_reg, and kpss_reg, and understand how to interpret the unit root tests summary.",keywords:["Unit Root Test","Augmented Dickey-Fuller test","Kwiatkowski-Phillips-Schmidt-Shin test","data","target","fuller_reg","kpss_reg","Time series data","unit root tests","unit root tests summary"]},sidebar:"tutorialSidebar",previous:{title:"summary",permalink:"/platform/reference/quantitative/summary"},next:{title:"fixedincome",permalink:"/platform/reference/fixedincome/"}},d={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}],m={toc:p},f="wrapper";function b(t){let{components:e,...r}=t;return(0,a.kt)(f,(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"quantitative /unitroot_test - Reference | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Get Unit Root Test."),(0,a.kt)("p",null,"Augmented Dickey-Fuller test for unit root.\nKwiatkowski-Phillips-Schmidt-Shin test for unit root."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"obb.quantitative.unitroot_test(data: Union[list, dict, pd.DataFrame, List[pd.DataFrame], pd.Series, List[pd.Series], numpy.ndarray, Data, List[Data]], target: str, fuller_reg: Literal[str] = c, kpss_reg: Literal[str] = c)\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"standard",label:"Standard",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"data"),(0,a.kt)("td",{parentName:"tr",align:null},"List","[Data]"),(0,a.kt)("td",{parentName:"tr",align:null},"Time series data."),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"target"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Target column name."),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fuller_reg"),(0,a.kt)("td",{parentName:"tr",align:null},"Literal",'["c", "ct", "ctt", "nc", "c"]'),(0,a.kt)("td",{parentName:"tr",align:null},"Regression type for ADF test."),(0,a.kt)("td",{parentName:"tr",align:null},"c"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"kpss_reg"),(0,a.kt)("td",{parentName:"tr",align:null},"Literal",'["c", "ct"]'),(0,a.kt)("td",{parentName:"tr",align:null},"Regression type for KPSS test."),(0,a.kt)("td",{parentName:"tr",align:null},"c"),(0,a.kt)("td",{parentName:"tr",align:null},"True")))))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"Unit root tests summary.\n")),(0,a.kt)("hr",null))}b.isMDXComponent=!0}}]);