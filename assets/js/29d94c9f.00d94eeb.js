"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[750],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(35742);function o(e){let{title:t}=e;return a.createElement(r.Z,null,a.createElement("title",null,t))}},63142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(88828);const l={title:"General Operation",sidebar_position:3,description:"A page providing comprehensive tutorial and help information on enabling developer mode and resolving system-related issues on both Windows and MacOS for OpenBB's software.",keywords:["OpenBB software","Developer mode","System-related issues","Windows","MacOS","Security policy","Software troubleshooting","Firewall & Network Protection","OpenBB's tutorials","Software installation","Coding tools","Terminal.app","Visual Studio Code","User manuals","FAQs","Instructions","How-to guide"]},i=void 0,s={unversionedId:"sdk/faqs/general_operation",id:"sdk/faqs/general_operation",title:"General Operation",description:"A page providing comprehensive tutorial and help information on enabling developer mode and resolving system-related issues on both Windows and MacOS for OpenBB's software.",source:"@site/content/sdk/faqs/general_operation.md",sourceDirName:"sdk/faqs",slug:"/sdk/faqs/general_operation",permalink:"/sdk/faqs/general_operation",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/faqs/general_operation.md",tags:[],version:"current",lastUpdatedBy:"Theodore Aptekarev",lastUpdatedAt:1701637004,formattedLastUpdatedAt:"Dec 3, 2023",sidebarPosition:3,frontMatter:{title:"General Operation",sidebar_position:3,description:"A page providing comprehensive tutorial and help information on enabling developer mode and resolving system-related issues on both Windows and MacOS for OpenBB's software.",keywords:["OpenBB software","Developer mode","System-related issues","Windows","MacOS","Security policy","Software troubleshooting","Firewall & Network Protection","OpenBB's tutorials","Software installation","Coding tools","Terminal.app","Visual Studio Code","User manuals","FAQs","Instructions","How-to guide"]},sidebar:"tutorialSidebar",previous:{title:"Import Errors",permalink:"/sdk/faqs/import_errors"},next:{title:"Data and Sources",permalink:"/sdk/faqs/data_sources"}},p={},d=[],u={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{title:"General Operation - Faqs | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,'Both Windows and MacOS provide a "developer mode", and enabling it may help to overcome system-related issues.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MacOS"),': Go to the System Settings, and under the "Privacy and Security" tab, scroll to the bottom and select the option to "Allow applications downloaded from App Store and identified developers". Then, scroll up to click on, "Developer Tools", and add ',(0,r.kt)("inlineCode",{parentName:"p"},"Terminal.app")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Visual Studio Code")," (or the preferred code editor) to the list of applications allowed to run software locally that does not meet the system's security policy."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Windows"),': Go to the Control Panel, and under the "Privacy & Security" tab, click on, "For developers". Under this menu, turn "Developer Mode" on.'),(0,r.kt)("p",null,'From the Windows Security menu, click on the Firewall & Network Protection tab, then click on "Allow an app through firewall". If the applications below are not allowed to communicate through Windows Defender Firewall, change the settings to allow.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"BranchCache"),(0,r.kt)("li",{parentName:"ul"},"Hyper-V"),(0,r.kt)("li",{parentName:"ul"},"VcXsrv"),(0,r.kt)("li",{parentName:"ul"},"Windows Terminal")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"An example code block does not work."),(0,r.kt)("p",null,"We try to keep example code up-to-date, but sometimes a specific example is left behind. Please submit a bug report and so that we are aware of the issue. Submit a bug report ",(0,r.kt)("a",{parentName:"p",href:"https://openbb.co/support"},"here"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Why does a specific menu or command not exist?"),(0,r.kt)("p",null,"It could be that you are running an outdated version in which the menu or command is not yet available. Please check the ",(0,r.kt)("a",{parentName:"p",href:"https://my.openbb.co/app/sdk/installation"},"installation guide")," to download the most recent release."),(0,r.kt)("p",null,"Do note that it is also possible that the menu or command has been deprecated. If this is oversight, please reach out to us ",(0,r.kt)("a",{parentName:"p",href:"https://openbb.co/support"},"here"),".")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"What is the correct format for entering dates to function variables?"),(0,r.kt)("p",null,"Dates should be entered as a string variable, inside of quotation marks, formatted as ",(0,r.kt)("inlineCode",{parentName:"p"},"%Y-%m-%d")," - YYYY-MM-DD.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Does the portfolio menu allow for dividends, interest, or other distributions?"),(0,r.kt)("p",null,"Currently, this is only possible by manually updating the portfolio file.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Why does my Portfolio file fail to load?"),(0,r.kt)("p",null,"This can be the result of a formatting error, check the file in a simple text editor to observe any abnormalities in the formatting; or, it could be a bug - check the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/issues"},"GitHub issues page")," for similar errors."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check that all the necessary column titles are present."),(0,r.kt)("li",{parentName:"ul"},"Inspect the file to see if cells left blank have been filled unintentionally with 0 or NaN values."),(0,r.kt)("li",{parentName:"ul"},"A particular asset may not be able to load data. Check for valid historical data from the Stocks menu."),(0,r.kt)("li",{parentName:"ul"},"Format ticker symbols according to yFinance naming convention."),(0,r.kt)("li",{parentName:"ul"},"All dates must be entered as YYYY-MM-DD."),(0,r.kt)("li",{parentName:"ul"},"Transactions dated for today will fail to load historical data."),(0,r.kt)("li",{parentName:"ul"},"MacOS users should attempt to avoid using the Numbers application as it has a habit of changing the formatting while saving.")),(0,r.kt)("p",null,"Files can be formatted as either ",(0,r.kt)("inlineCode",{parentName:"p"},".csv")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".xlsx")," files, and the required column headers are:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"[Date,Type,Ticker,Side,Price,Quantity,Fees,Investment,Currency,Sector,Industry,Country,Region]")),(0,r.kt)("p",null,"See the guide ",(0,r.kt)("a",{parentName:"p",href:"/sdk/data-available/portfolio/introduction"},"here")," for more information.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"How do I change the chart styles?"),(0,r.kt)("p",null,"Place style sheets in this folder: ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenBBUserData/styles/user")),(0,r.kt)("p",null,"To select the light themes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from openbb_terminal.sdk import TerminalStyle\ntheme = TerminalStyle("light", "light", "light")\n')),(0,r.kt)("p",null,"To select the dark themes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from openbb_terminal.sdk import TerminalStyle\ntheme = TerminalStyle("dark", "dark", "dark")\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Where are the included stock screener presets located?"),(0,r.kt)("p",null,"The files are located in the folder with the code, under:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"~/openbb_terminal/miscellaneous/stocks/screener")),(0,r.kt)("p",null,"Alternatively, the source code on GitHub is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/develop/openbb_terminal/miscellaneous/stocks/screener"},"here"))))}m.isMDXComponent=!0}}]);