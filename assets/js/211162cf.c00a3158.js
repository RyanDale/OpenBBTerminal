"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8579],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),o=n(35742);function a(e){let{title:t}=e;return r.createElement(o.Z,null,r.createElement("title",null,t))}},10122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(87462),o=(n(67294),n(3905)),a=n(88828);const i={title:"Expectations for Developers",sidebar_position:1,description:"This guide outlines the expectations for developers contributing to the OpenBB Platform. It covers key areas such as use cases, documentation, code quality, testing, performance, and collaboration.",keywords:["OpenBB Platform","Developer guidelines","Code quality","Testing","Collaboration"]},l=void 0,p={unversionedId:"platform/development/developer-guidelines/expecations_for_developers",id:"platform/development/developer-guidelines/expecations_for_developers",title:"Expectations for Developers",description:"This guide outlines the expectations for developers contributing to the OpenBB Platform. It covers key areas such as use cases, documentation, code quality, testing, performance, and collaboration.",source:"@site/content/platform/development/developer-guidelines/expecations_for_developers.md",sourceDirName:"platform/development/developer-guidelines",slug:"/platform/development/developer-guidelines/expecations_for_developers",permalink:"/platform/development/developer-guidelines/expecations_for_developers",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/development/developer-guidelines/expecations_for_developers.md",tags:[],version:"current",lastUpdatedBy:"teh_coderer",lastUpdatedAt:1700872066,formattedLastUpdatedAt:"Nov 25, 2023",sidebarPosition:1,frontMatter:{title:"Expectations for Developers",sidebar_position:1,description:"This guide outlines the expectations for developers contributing to the OpenBB Platform. It covers key areas such as use cases, documentation, code quality, testing, performance, and collaboration.",keywords:["OpenBB Platform","Developer guidelines","Code quality","Testing","Collaboration"]},sidebar:"tutorialSidebar",previous:{title:"Dependency Management",permalink:"/platform/development/dependency_management"},next:{title:"Building Extensions for OpenBB Platform",permalink:"/platform/development/developer-guidelines/build_openbb_extensions"}},s={},c=[],d={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{title:"Expectations for Developers - Developer Guidelines - Development | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use Cases:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Ensure that your extensions or features align with the broader goals of the application."),(0,o.kt)("li",{parentName:"ul"},"Understand that the OpenBB Platform is designed to be foundational; build in a way that complements and doesn't conflict with its core functionalities."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Documentation:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Provide clear and comprehensive documentation for any new feature or extension you develop."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Code Quality:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Adhere to the coding standards and conventions of the OpenBB Platform."),(0,o.kt)("li",{parentName:"ul"},"Ensure your code is maintainable, well-organized, and commented where necessary."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Testing:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Thoroughly test any new feature or extension to ensure it works as expected."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Performance:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Ensure that your extensions or features do not adversely affect the performance of the OpenBB Platform."),(0,o.kt)("li",{parentName:"ul"},"Optimize for scalability, especially if you anticipate high demand for your feature."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Collaboration:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Engage with the OpenBB community to gather feedback on your developments.")))))}m.isMDXComponent=!0}}]);