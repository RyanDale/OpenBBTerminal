"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81847],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),f=n,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||l;return a?r.createElement(m,o(o({ref:t},u),{},{components:a})):r.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(35742);function l(e){let{title:t}=e;return r.createElement(n.Z,null,r.createElement("title",null,t))}},35701:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=a(87462),n=(a(67294),a(3905)),l=a(88828);const o={title:"fraud",description:"This is an informational page about Fetching fraud ratios based on fundamentals using OpenBB's stocks.fa.fraud function in Python. This function accepts a stock ticker symbol and returns fraud ratios in a pandas DataFrame format.",keywords:["fraud ratios","fundamental analysis","stock ticker symbol","pandas DataFrame","OpenBB.finance"]},i=void 0,s={unversionedId:"sdk/reference/stocks/fa/fraud",id:"sdk/reference/stocks/fa/fraud",title:"fraud",description:"This is an informational page about Fetching fraud ratios based on fundamentals using OpenBB's stocks.fa.fraud function in Python. This function accepts a stock ticker symbol and returns fraud ratios in a pandas DataFrame format.",source:"@site/content/sdk/reference/stocks/fa/fraud.md",sourceDirName:"sdk/reference/stocks/fa",slug:"/sdk/reference/stocks/fa/fraud",permalink:"/sdk/reference/stocks/fa/fraud",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/fa/fraud.md",tags:[],version:"current",lastUpdatedBy:"teh_coderer",lastUpdatedAt:1700872066,formattedLastUpdatedAt:"Nov 25, 2023",frontMatter:{title:"fraud",description:"This is an informational page about Fetching fraud ratios based on fundamentals using OpenBB's stocks.fa.fraud function in Python. This function accepts a stock ticker symbol and returns fraud ratios in a pandas DataFrame format.",keywords:["fraud ratios","fundamental analysis","stock ticker symbol","pandas DataFrame","OpenBB.finance"]},sidebar:"tutorialSidebar",previous:{title:"fama_raw",permalink:"/sdk/reference/stocks/fa/fama_raw"},next:{title:"growth",permalink:"/sdk/reference/stocks/fa/growth"}},c={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}],p={toc:u},d="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"stocks.fa.fraud - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Get fraud ratios based on fundamentals"),(0,n.kt)("p",null,"Source Code: [",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/av_model.py#L573"},"link"),"]"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"openbb.stocks.fa.fraud(symbol: str, detail: bool = False)\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Stock ticker symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"detail"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether to provide extra m-score details"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,n.kt)("td",{parentName:"tr",align:null},"The fraud ratios")))),(0,n.kt)("hr",null))}f.isMDXComponent=!0}}]);