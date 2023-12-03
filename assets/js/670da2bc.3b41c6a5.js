"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58043],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,u=d["".concat(l,".").concat(f)]||d[f]||m[f]||a;return n?r.createElement(u,i(i({ref:t},c),{},{components:n})):r.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),o=n(35742);function a(e){let{title:t}=e;return r.createElement(o.Z,null,r.createElement("title",null,t))}},40457:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905)),a=n(88828);const i={title:"OpenBB Platform Extensions",sidebar_position:1,description:"This page describes the types of extensions available for the OpenBB Platform.",keywords:["OpenBB Platform","Python client","Fast API","getting started","extensions","data providers","data extensions","function extensions","endpoints","community","technical analysis","quantitative analysis","charting libraries"]},s=void 0,l={unversionedId:"platform/extensions/index",id:"platform/extensions/index",title:"OpenBB Platform Extensions",description:"This page describes the types of extensions available for the OpenBB Platform.",source:"@site/content/platform/extensions/index.md",sourceDirName:"platform/extensions",slug:"/platform/extensions/",permalink:"/platform/extensions/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/extensions/index.md",tags:[],version:"current",lastUpdatedBy:"Theodore Aptekarev",lastUpdatedAt:1701637004,formattedLastUpdatedAt:"Dec 3, 2023",sidebarPosition:1,frontMatter:{title:"OpenBB Platform Extensions",sidebar_position:1,description:"This page describes the types of extensions available for the OpenBB Platform.",keywords:["OpenBB Platform","Python client","Fast API","getting started","extensions","data providers","data extensions","function extensions","endpoints","community","technical analysis","quantitative analysis","charting libraries"]},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/platform/installation"},next:{title:"Data Extensions",permalink:"/platform/extensions/data_extensions"}},p={},c=[],d={toc:c},m="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{title:"Overview - Extensions | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"When the core OpenBB Platform package is installed, familiar components might be missing. This is to keep the core components as light as possible. The extension framework allows individual pieces to be installed and removed seamlessly within the environment, using only the desired data and toolkit extensions."),(0,o.kt)("p",null,"There are two primary types of extensions for the OpenBB Platform:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/platform/extensions/data_extensions"},"Data")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/platform/extensions/toolkit_extensions"},"Toolkits"))),(0,o.kt)("p",null,"The OpenBB Core installation does not include any toolkit extensions. Install the OpenBB Platform with all data and toolkit extensions from PyPI with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"pip install openbb[all]\n")),(0,o.kt)("p",null,"When installing from source, navigate into the ",(0,o.kt)("inlineCode",{parentName:"p"},"openbb_platform")," folder from the root of the project and enter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"python dev_install.py -e\n")),(0,o.kt)("p",null,"This installs all extensions in editable mode, and the Python interface is compiled in, ",(0,o.kt)("inlineCode",{parentName:"p"},"/openbb_platform/openbb/package"),", instead of the environment's ",(0,o.kt)("inlineCode",{parentName:"p"},"site-packages")," folder. The tables in the next pages lists extensions as either, Core or Community. The Core extensions are installed by default."))}f.isMDXComponent=!0}}]);