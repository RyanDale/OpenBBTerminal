"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81170],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(35742);function i(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},20630:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(15569);function i(e){let{youtubeLink:t,videoLegend:n="Tutorial video"}=e;const[i,o]=(0,r.useState)(!0);return r.createElement("div",{style:{textAlign:"center"}},r.createElement("div",{className:"flex flex-col sm:flex-row items-center justify-center"},r.createElement("p",null,n),r.createElement("div",{style:{transform:"scale(0.7)"}},r.createElement(a.Toggle,{isOn:i,handleChange:()=>o(!i)}))),i&&r.createElement("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"}},r.createElement("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})))}},28393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),i=n(88828),o=n(20630);const s={title:"Advanced Search",sidebar_position:6,description:"Learn about the functionality of the advanced search in OpenBB Terminal Pro. Discover the six main categories including Securities, Templates, Widgets, Actions, News, and the All option that enhances research and productivity.",keywords:["Advanced Search","Securities","Widgets","Templates","Actions","News","Financial Data","Dashboards","Data Connectors"]},c=void 0,l={unversionedId:"pro/advanced-search",id:"pro/advanced-search",title:"Advanced Search",description:"Learn about the functionality of the advanced search in OpenBB Terminal Pro. Discover the six main categories including Securities, Templates, Widgets, Actions, News, and the All option that enhances research and productivity.",source:"@site/content/pro/advanced-search.md",sourceDirName:"pro",slug:"/pro/advanced-search",permalink:"/pro/advanced-search",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/pro/advanced-search.md",tags:[],version:"current",lastUpdatedBy:"jose-donato",lastUpdatedAt:1701348039,formattedLastUpdatedAt:"Nov 30, 2023",sidebarPosition:6,frontMatter:{title:"Advanced Search",sidebar_position:6,description:"Learn about the functionality of the advanced search in OpenBB Terminal Pro. Discover the six main categories including Securities, Templates, Widgets, Actions, News, and the All option that enhances research and productivity.",keywords:["Advanced Search","Securities","Widgets","Templates","Actions","News","Financial Data","Dashboards","Data Connectors"]},sidebar:"tutorialSidebar",previous:{title:"Folders",permalink:"/pro/dashboards/folders"},next:{title:"Copilot",permalink:"/pro/copilot"}},d={},p=[],u={toc:p},h="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{title:"Advanced Search | OpenBB Terminal Pro Docs",mdxType:"HeadTitle"}),(0,a.kt)(o.Z,{youtubeLink:"https://www.youtube.com/embed/vn9des6C1H8?si=VBLPeXKNPrVTRWKc",videoLegend:"Short introduction to advanced search",mdxType:"TutorialVideo"}),(0,a.kt)("p",null,"OpenBB Terminal Pro's advanced search is a powerful tool that enables you to perform a wide range of tasks swiftly and efficiently."),(0,a.kt)("img",{className:"pro-border-gradient",width:"800",alt:"add widgets search",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/9758ac66-1a89-4c33-b54a-bf82c64ae07e"}),(0,a.kt)("p",null,"The search is divided into the five main categories:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Securities"),": This category displays securities that match your search criteria. It's not limited to symbol matches; it also includes company names. For instance, a search for 'Sales' will return 'Salesforce', which has the ticker symbol 'CRM'.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Templates"),": These are pre-designed layouts developed by OpenBB, but you can also create your own. Templates save the location of widgets in a dashboard, allowing you to quickly set up a dashboard with your chosen ticker.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Widgets"),": These are the primary components of the dashboards. Each widget contains financial data that can enhance your research. This category is your go-to place for such data.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Actions"),": If you're unable to locate a specific action like 'settings', 'data connectors', 'change theme', etc., you can find it directly in the actions category.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"All"),": This category combines results from all of the above categories."))))}m.isMDXComponent=!0},15569:(e,t,n)=>{e.exports=n(42285)},42285:(e,t,n)=>{var r,a=(r=n(67294))&&"object"==typeof r&&"default"in r?r.default:r;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return a.createElement("label",{"data-testid":"Toggle-label",className:"switch"},a.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),a.createElement("span",{className:"slider round"}))}}}]);