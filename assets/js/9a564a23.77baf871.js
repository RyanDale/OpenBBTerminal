"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39403],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:4},i="Integrate your own backend",p={unversionedId:"pro/main-menu/data-connectors/advanced",id:"pro/main-menu/data-connectors/advanced",title:"Integrate your own backend",description:"Using OpenBB Cookie-Cutter",source:"@site/content/pro/main-menu/data-connectors/advanced.md",sourceDirName:"pro/main-menu/data-connectors",slug:"/pro/main-menu/data-connectors/advanced",permalink:"/pro/main-menu/data-connectors/advanced",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/pro/main-menu/data-connectors/advanced.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Integrating Third-party Data Providers",permalink:"/pro/main-menu/data-connectors/third-party"},next:{title:"Introduction",permalink:"/pro/widgets/introduction"}},s={},c=[{value:"Using OpenBB Cookie-Cutter",id:"using-openbb-cookie-cutter",level:2},{value:"Using Language-Agnostic API",id:"using-language-agnostic-api",level:2},{value:"Quick Start with Python and FastAPI",id:"quick-start-with-python-and-fastapi",level:3}],l={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integrate-your-own-backend"},"Integrate your own backend"),(0,a.kt)("h2",{id:"using-openbb-cookie-cutter"},"Using OpenBB Cookie-Cutter"),(0,a.kt)("p",null,"The OpenBB cookie-cutter approach provides a standardized way to host your data and integrate it into widgets. This method is versatile and can be used whether your data is hosted internally or externally. Here's how to get started:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Prepare the ",(0,a.kt)("inlineCode",{parentName:"strong"},"widgets.json")," file"),": This file defines widget properties such as name, description, category, type, endpoint, and more. Make sure it's well-structured. See an example below.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Set up the OpenBB API"),": Follow the OpenBB API documentation to set up your API. Implement the necessary endpoints that align with the widget definitions in the ",(0,a.kt)("inlineCode",{parentName:"p"},"widgets.json")," file.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Integrate endpoints"),": Define the appropriate endpoint for each custom widget in the ",(0,a.kt)("inlineCode",{parentName:"p"},"widgets.json")," file. This endpoint connects your API to the widget.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Configure widgets"),": Users can add the custom widgets using the Terminal Pro interface by providing the relevant endpoint details."))),(0,a.kt)("h2",{id:"using-language-agnostic-api"},"Using Language-Agnostic API"),(0,a.kt)("p",null,"The language-agnostic API approach offers flexibility by allowing you to use the programming language and tools that best suit your needs. You can host this API internally or externally, making it accessible to the Terminal Pro widgets. Here's how:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Design and implement your API"),": Choose your preferred programming language and framework. Ensure that the API can return data in JSON format, which is required for widget integration.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Create widget definitions"),": As with the OpenBB API approach, create corresponding definitions for your custom widgets in the ",(0,a.kt)("inlineCode",{parentName:"p"},"widgets.json")," file. Specify the API endpoint, name, description, category, type, etc.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Connect widgets to your API"),": Once your API is up and running, users can add the custom widgets using the Terminal Pro interface. They just need to input the endpoint details, and the widget will fetch and display the data from your API."))),(0,a.kt)("h3",{id:"quick-start-with-python-and-fastapi"},"Quick Start with Python and FastAPI"),(0,a.kt)("p",null,"The example below demonstrates how you can quickly get started with Python and FastAPI."))}u.isMDXComponent=!0}}]);