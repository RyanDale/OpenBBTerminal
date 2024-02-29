"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32042],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(35742);function o(e){let{title:t}=e;return a.createElement(r.Z,null,a.createElement("title",null,t))}},20630:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(15569);function o(e){let{youtubeLink:t,videoLegend:n="Tutorial video"}=e;const[o,i]=(0,a.useState)(!0);return a.createElement("div",{style:{textAlign:"center"}},a.createElement("div",{className:"flex flex-col sm:flex-row items-center justify-center"},a.createElement("p",null,n),a.createElement("div",{style:{transform:"scale(0.7)"}},a.createElement(r.Toggle,{isOn:o,handleChange:()=>i(!o)}))),o&&a.createElement("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"}},a.createElement("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})))}},89873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(88828),i=n(20630);const l={title:"Interactive Charts",sidebar_position:2,description:"Explore how to effectively utilize OpenBB's interactive charts backed by open source PyWry technology. Understand various capabilities including annotation, color modification, drawing tools, data export, and supplementary data overlay.",keywords:["interactive charts","PyWry technology","chart annotation","drawing tools","data export","data overlay","editing chart title","Toolbar","Text Tools","Draw Tools","Export Tools"]},s=void 0,c={unversionedId:"terminal/usage/outputs/interactive-charts",id:"terminal/usage/outputs/interactive-charts",title:"Interactive Charts",description:"Explore how to effectively utilize OpenBB's interactive charts backed by open source PyWry technology. Understand various capabilities including annotation, color modification, drawing tools, data export, and supplementary data overlay.",source:"@site/content/terminal/usage/outputs/interactive-charts.md",sourceDirName:"terminal/usage/outputs",slug:"/terminal/usage/outputs/interactive-charts",permalink:"/terminal/usage/outputs/interactive-charts",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/usage/outputs/interactive-charts.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1709203525,formattedLastUpdatedAt:"Feb 29, 2024",sidebarPosition:2,frontMatter:{title:"Interactive Charts",sidebar_position:2,description:"Explore how to effectively utilize OpenBB's interactive charts backed by open source PyWry technology. Understand various capabilities including annotation, color modification, drawing tools, data export, and supplementary data overlay.",keywords:["interactive charts","PyWry technology","chart annotation","drawing tools","data export","data overlay","editing chart title","Toolbar","Text Tools","Draw Tools","Export Tools"]},sidebar:"tutorialSidebar",previous:{title:"Interactive Tables",permalink:"/terminal/usage/outputs/interactive-tables"},next:{title:"Export data",permalink:"/terminal/usage/outputs/export-data"}},d={},p=[{value:"Toolbar",id:"toolbar",level:2},{value:"Text Tools",id:"text-tools",level:2},{value:"Change Titles",id:"change-titles",level:2},{value:"Draw Tools",id:"draw-tools",level:2},{value:"Export Tools",id:"export-tools",level:2},{value:"Overlay",id:"overlay",level:2}],u={toc:p},h="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{title:"Interactive Charts - Outputs - Usage | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)(i.Z,{youtubeLink:"https://www.youtube.com/embed/6lqyTZGJ_GU?si=vvtDuJfaf66eTlXe",videoLegend:"Short introduction on interactive charts",mdxType:"TutorialVideo"}),(0,r.kt)("p",null,"A common type of output in OpenBB are interactive charts which open in a separated window (due to our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/pywry"},"open source PyWry")," technology). The OpenBB charting library provides interactive and highly customizable charts."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Charting cheat sheet "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/234313541-3d725e1c-ce48-4413-9267-b03571e0eccd.png",alt:"Group 653"}))),(0,r.kt)("h2",{id:"toolbar"},"Toolbar"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233247997-55c03cbd-9ca9-4f5e-b3fb-3e5a9c63b6eb.png",alt:"Chart Tools"})),(0,r.kt)("p",null,"The toolbar is located at the bottom of the window, and provides methods for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Panning and zooming."),(0,r.kt)("li",{parentName:"ul"},"Modifying the title and axis labels."),(0,r.kt)("li",{parentName:"ul"},"Adjusting the hover read out."),(0,r.kt)("li",{parentName:"ul"},"Toggling light/dark mode."),(0,r.kt)("li",{parentName:"ul"},"Annotating and drawing."),(0,r.kt)("li",{parentName:"ul"},"Exporting raw data."),(0,r.kt)("li",{parentName:"ul"},"Saving the chart as an image."),(0,r.kt)("li",{parentName:"ul"},"Adding supplementary external data as an overlay.")),(0,r.kt)("p",null,"The label for each tool is displayed by holding the mouse over it."),(0,r.kt)("p",null,"The toolbar's visibility can be toggled utilizing the ",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl + h")," shortcut."),(0,r.kt)("h2",{id:"text-tools"},"Text Tools"),(0,r.kt)("p",null,"Annotate a chart by clicking on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Text")," button, or with the keyboard, ",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl + t"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233248056-d459d7a0-ba2d-4533-896a-79406ded859e.png",alt:"Annotate Charts"})),(0,r.kt)("p",null,"Enter some text, make any adjustments to the options, then ",(0,r.kt)("inlineCode",{parentName:"p"},"submit"),".  Place the crosshairs over the desired data point and click to place the text."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233728645-74734241-4da2-4cff-af17-b68a62e95113.png",alt:"Place Text"})),(0,r.kt)("p",null,"After placement, the text can be updated or deleted by clicking on it again."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233728428-55d2a8e5-a68a-4cd1-9dbf-4c1cd697187e.png",alt:"Delete Annotation"})),(0,r.kt)("h2",{id:"change-titles"},"Change Titles"),(0,r.kt)("p",null,"The title of the chart is edited by clicking the button, ",(0,r.kt)("inlineCode",{parentName:"p"},"Change Titles"),", near the middle center of the toolbar, immediately to the right of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Text")," button."),(0,r.kt)("h2",{id:"draw-tools"},"Draw Tools"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233729318-8af947fa-ce2a-43e2-85ab-657e583ac8b1.png",alt:"Edit Colors"})),(0,r.kt)("p",null,"The fourth group of icons on the toolbar are for drawing lines and shapes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Edit the colors."),(0,r.kt)("li",{parentName:"ul"},"Draw a straight line."),(0,r.kt)("li",{parentName:"ul"},"Draw a freeform line."),(0,r.kt)("li",{parentName:"ul"},"Draw a circle."),(0,r.kt)("li",{parentName:"ul"},"Draw a rectangle."),(0,r.kt)("li",{parentName:"ul"},"Erase a shape.")),(0,r.kt)("p",null,"To draw on the chart, select one of the four drawing buttons and drag the mouse over the desired area. Click on any existing shape to modify it by dragging with the mouse and editing the color, or remove it by clicking the toolbar button, ",(0,r.kt)("inlineCode",{parentName:"p"},"Erase Active Shape"),". The edit colors button will pop up as a floating icon, and clicking on that will display the color palette."),(0,r.kt)("h2",{id:"export-tools"},"Export Tools"),(0,r.kt)("p",null,"The two buttons at the far-right of the toolbar are for saving the raw data or, to save an image file of the chart at the current panned and zoomed view."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233248436-08a2a463-403b-4b1b-b7d8-80cd5af7bee3.png",alt:"Export Tools"})),(0,r.kt)("h2",{id:"overlay"},"Overlay"),(0,r.kt)("p",null,"The button, ",(0,r.kt)("inlineCode",{parentName:"p"},"Overlay chart from CSV"),", provides an easy import method for supplementing a chart with additional data.  Clicking on the button opens a pop-up dialogue to select the file, column, and whether the overlay should be a bar, candlestick, or line chart.  As a candlestick, the CSV file must contain OHLC data.  The import window can also be opened with the keyboard, ",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl-o"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233248522-16b539f4-b0ae-4c30-8c72-dfa59d0c0cfb.png",alt:"Overlay CSV"})),(0,r.kt)("p",null,"After choosing the file to overlay, select what to show and then click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Submit"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233250634-44864da0-0936-4d3c-8de2-c8374d26c1d2.png",alt:"Overlay Options"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233248639-6d12b16d-471f-4550-a8ab-8d8c18eeabb3.png",alt:"Overlay Chart"})))}m.isMDXComponent=!0},15569:(e,t,n)=>{e.exports=n(42285)},42285:(e,t,n)=>{var a,r=(a=n(67294))&&"object"==typeof a&&"default"in a?a.default:a;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return r.createElement("label",{"data-testid":"Toggle-label",className:"switch"},r.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),r.createElement("span",{className:"slider round"}))}}}]);