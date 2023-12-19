"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82046],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,k=u["".concat(s,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(k,c(c({ref:t},l),{},{components:n})):r.createElement(k,c({ref:t},l))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(35742);function o(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},66548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905)),o=n(88828);const c={title:"check_if_open",description:"SEO metadata for a Python function 'check_if_open' within OpenBB-finance's OpenBBTerminal. This function checks if a particular market (Bursa) is open for trading.",keywords:["OpenBB-finance","Stocks","Trading hours","Bursa","Check market open","Source code","pandas","Exchange"]},i=void 0,s={unversionedId:"sdk/reference/stocks/th/check_if_open",id:"sdk/reference/stocks/th/check_if_open",title:"check_if_open",description:"SEO metadata for a Python function 'check_if_open' within OpenBB-finance's OpenBBTerminal. This function checks if a particular market (Bursa) is open for trading.",source:"@site/content/sdk/reference/stocks/th/check_if_open.md",sourceDirName:"sdk/reference/stocks/th",slug:"/sdk/reference/stocks/th/check_if_open",permalink:"/sdk/reference/stocks/th/check_if_open",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/th/check_if_open.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1702897661,formattedLastUpdatedAt:"Dec 18, 2023",frontMatter:{title:"check_if_open",description:"SEO metadata for a Python function 'check_if_open' within OpenBB-finance's OpenBBTerminal. This function checks if a particular market (Bursa) is open for trading.",keywords:["OpenBB-finance","Stocks","Trading hours","Bursa","Check market open","Source code","pandas","Exchange"]},sidebar:"tutorialSidebar",previous:{title:"all",permalink:"/sdk/reference/stocks/th/all"},next:{title:"closed",permalink:"/sdk/reference/stocks/th/closed"}},p={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}],u={toc:l},f="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"stocks.th.check_if_open - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Check if market open helper function"),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/tradinghours/bursa_model.py#L153"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"openbb.stocks.th.check_if_open(bursa: pd.DataFrame, exchange: str)\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"This function does not take any parameters."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,"This function does not return anything"),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);