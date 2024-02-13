"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99902],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>y});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=d(t),u=r,y=s["".concat(p,".").concat(u)]||s[u]||c[u]||o;return t?a.createElement(y,i(i({ref:n},m),{},{components:t})):a.createElement(y,i({ref:n},m))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},88828:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(67294),r=t(35742);function o(e){let{title:n}=e;return a.createElement(r.Z,null,a.createElement("title",null,n))}},42503:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=t(87462),r=(t(67294),t(3905)),o=t(88828);const i={title:"Dependency Management",sidebar_position:3,description:"Dealing with dependencies when developing with the OpenBB Platform. Learn how to add new dependencies to the OpenBB Platform and how to add new dependencies to your custom extension.",keywords:["OpenBB Platform","Open source","Python interface","Dependency Management"]},l=void 0,p={unversionedId:"platform/development/dependency_management",id:"platform/development/dependency_management",title:"Dependency Management",description:"Dealing with dependencies when developing with the OpenBB Platform. Learn how to add new dependencies to the OpenBB Platform and how to add new dependencies to your custom extension.",source:"@site/content/platform/development/dependency_management.md",sourceDirName:"platform/development",slug:"/platform/development/dependency_management",permalink:"/platform/development/dependency_management",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/development/dependency_management.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1707846532,formattedLastUpdatedAt:"Feb 13, 2024",sidebarPosition:3,frontMatter:{title:"Dependency Management",sidebar_position:3,description:"Dealing with dependencies when developing with the OpenBB Platform. Learn how to add new dependencies to the OpenBB Platform and how to add new dependencies to your custom extension.",keywords:["OpenBB Platform","Open source","Python interface","Dependency Management"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/platform/development/"},next:{title:"DevTools",permalink:"/platform/development/developer-guidelines/devtools"}},d={},m=[{value:"High-Level Overview",id:"high-level-overview",level:2},{value:"Core Dependency Management",id:"core-dependency-management",level:2},{value:"Installation",id:"installation",level:3},{value:"Using Poetry",id:"using-poetry",level:3},{value:"Core and Extensions",id:"core-and-extensions",level:2},{value:"Dev Installation",id:"dev-installation",level:3},{value:"Dependency Management with Poetry",id:"dependency-management-with-poetry",level:3}],s={toc:m},c="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{title:"Dependency Management - Development | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,r.kt)("h2",{id:"high-level-overview"},"High-Level Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Core"),": Serves as the main infrastructural package."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Extensions"),": Utility packages that leverage Core's infrastructure. Each extension is its own package."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Providers"),": Utility packages extending functionality to different providers, where each provider is its own package.")),(0,r.kt)("h2",{id:"core-dependency-management"},"Core Dependency Management"),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"pip"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"pip install -e OpenBBTerminal/openbb_platform/platform/core")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"poetry"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"poetry install OpenBBTerminal/openbb_platform/platform/core"))),(0,r.kt)("h3",{id:"using-poetry"},"Using Poetry"),(0,r.kt)("p",null,"Ensure you're in a fresh conda environment before adjusting dependencies."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Add a Dependency"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"poetry add <my-dependency>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Update Dependencies"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"All: ",(0,r.kt)("inlineCode",{parentName:"li"},"poetry update")),(0,r.kt)("li",{parentName:"ul"},"Specific: ",(0,r.kt)("inlineCode",{parentName:"li"},"poetry update <my-dependency>")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Remove a Dependency"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"poetry remove <my-dependency>"))),(0,r.kt)("h2",{id:"core-and-extensions"},"Core and Extensions"),(0,r.kt)("h3",{id:"dev-installation"},"Dev Installation"),(0,r.kt)("p",null,"For development setup, use the provided script to install all extensions and their dependencies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"python dev_install.py [-e|--extras]"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": If developing an extension, avoid installing all extensions to prevent unnecessary overhead.")),(0,r.kt)("h3",{id:"dependency-management-with-poetry"},"Dependency Management with Poetry"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Add Platform Extension"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"poetry add openbb-extension-name [--dev]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Resolve Conflicts"),": Adjust versions in ",(0,r.kt)("inlineCode",{parentName:"li"},"pyproject.toml")," if notified by Poetry."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Lock Dependencies"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"poetry lock")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Update Platform"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"poetry update openbb-platform")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Documentation"),": Maintain ",(0,r.kt)("inlineCode",{parentName:"li"},"pyproject.toml")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"poetry.lock")," for a clear record of dependencies.")))}u.isMDXComponent=!0}}]);