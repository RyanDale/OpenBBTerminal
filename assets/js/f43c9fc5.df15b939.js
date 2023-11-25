"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28682],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>h});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=o.createContext({}),p=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return o.createElement(l.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),c=p(n),d=a,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||r;return n?o.createElement(h,i(i({ref:e},u),{},{components:n})):o.createElement(h,i({ref:e},u))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[c]="string"==typeof t?t:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88828:(t,e,n)=>{n.d(e,{Z:()=>r});var o=n(67294),a=n(35742);function r(t){let{title:e}=t;return o.createElement(a.Z,null,o.createElement("title",null,e))}},47099:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(87462),a=(n(67294),n(3905)),r=n(88828);const i={title:"Quality Assurance",sidebar_position:2,description:"This section provides an in-depth look at the Quality Assurance (QA) process in the OpenBB Platform. It covers the use of QA tools for testing extensions, creation of unit and integration tests, and the importance of maintaining a short import time for the package.",keywords:["OpenBB QA process","Unit and integration tests","QA tools","Extension testing","Import time optimization"]},s=void 0,l={unversionedId:"platform/development/contributor-guidelines/quality_assurance",id:"platform/development/contributor-guidelines/quality_assurance",title:"Quality Assurance",description:"This section provides an in-depth look at the Quality Assurance (QA) process in the OpenBB Platform. It covers the use of QA tools for testing extensions, creation of unit and integration tests, and the importance of maintaining a short import time for the package.",source:"@site/content/platform/development/contributor-guidelines/quality_assurance.md",sourceDirName:"platform/development/contributor-guidelines",slug:"/platform/development/contributor-guidelines/quality_assurance",permalink:"/platform/development/contributor-guidelines/quality_assurance",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/development/contributor-guidelines/quality_assurance.md",tags:[],version:"current",lastUpdatedBy:"teh_coderer",lastUpdatedAt:1700872066,formattedLastUpdatedAt:"Nov 25, 2023",sidebarPosition:2,frontMatter:{title:"Quality Assurance",sidebar_position:2,description:"This section provides an in-depth look at the Quality Assurance (QA) process in the OpenBB Platform. It covers the use of QA tools for testing extensions, creation of unit and integration tests, and the importance of maintaining a short import time for the package.",keywords:["OpenBB QA process","Unit and integration tests","QA tools","Extension testing","Import time optimization"]},sidebar:"tutorialSidebar",previous:{title:"Expectations For Contributors",permalink:"/platform/development/contributor-guidelines/expecations_for_contributors"},next:{title:"Manage Extensions",permalink:"/platform/development/contributor-guidelines/manage_extensions"}},p={},u=[{value:"Unit tests",id:"unit-tests",level:2},{value:"Integration tests",id:"integration-tests",level:2},{value:"Import time",id:"import-time",level:2}],c={toc:u},m="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(m,(0,o.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(r.Z,{title:"Quality Assurance - Contributor Guidelines - Development | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"We are strong believers in the Quality Assurance (QA) process and we want to make sure that all the extensions that are added to the OpenBB Platform are of high quality. To ensure this, we have a set of QA tools that you can use to test your extension."),(0,a.kt)("p",null,"Primarily, we have tools that semi-automate the creation of unit and integration tests."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The QA tools are still in development and we are constantly improving them.")),(0,a.kt)("h2",{id:"unit-tests"},"Unit tests"),(0,a.kt)("p",null,"Each ",(0,a.kt)("inlineCode",{parentName:"p"},"Fetcher")," comes equipped with a ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," method that will ensure that it is implemented correctly and that it is returning the expected data. It also ensures that all types are correct and that the data is valid."),(0,a.kt)("p",null,"To create unit tests for your Fetchers, you can run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python openbb_platform/providers/tests/utils/unit_tests_generator.py\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that you should be running this file from the root of the repository.\nNote that the ",(0,a.kt)("inlineCode",{parentName:"p"},"tests")," folder must exist in order to generate the tests.")),(0,a.kt)("p",null,"The automatic unit test generation will add unit tests for all the fetchers available in a given provider."),(0,a.kt)("p",null,"To record the unit tests, you can run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pytest <path_to_the_unit_test_file> --record=all\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that sometimes manual intervention is needed. For example, adjusting out-of-top level imports or adding specific arguments for a given fetcher.")),(0,a.kt)("h2",{id:"integration-tests"},"Integration tests"),(0,a.kt)("p",null,"The integration tests are a bit more complex than the unit tests, as we want to test both the Python interface and the API interface. For this, we have two scripts that will help you generate the integration tests."),(0,a.kt)("p",null,"To generate the integration tests for the Python interface, you can run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python openbb_platform/extensions/tests/utils/integration_tests_generator.py\n")),(0,a.kt)("p",null,"To generate the integration tests for the API interface, you can run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python openbb_platform/extensions/tests/utils/integration_tests_api_generator.py\n")),(0,a.kt)("p",null,"When testing the API interface, you'll need to run the OpenBB Platform locally before running the tests. To do so, you can run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"uvicorn openbb_platform.platform.core.openbb_core.api.rest_api:app --host 0.0.0.0 --port 8000 --reload\n")),(0,a.kt)("p",null,"These automated tests are a great way to reduce the amount of code you need to write, but they are not a replacement for manual testing and might require tweaking. That's why we have unit tests that test the generated integration tests to ensure they cover all providers and parameters."),(0,a.kt)("p",null,"To run the tests we can do:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Unit tests only:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'pytest openbb_platform -m "not integration"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Integration tests only:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pytest openbb_platform -m integration\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Both integration and unit tests:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pytest openbb_platform\n")),(0,a.kt)("h2",{id:"import-time"},"Import time"),(0,a.kt)("p",null,"We aim to have a short import time for the package. To measure that we use ",(0,a.kt)("inlineCode",{parentName:"p"},"tuna"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pypi.org/project/tuna/"},"https://pypi.org/project/tuna/"))),(0,a.kt)("p",null,"To visualize the import time breakdown by module and find potential bottlenecks, run the\nfollowing commands from ",(0,a.kt)("inlineCode",{parentName:"p"},"openbb_platform")," directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install tuna\npython -X importtime openbb/__init__.py 2> import.log\ntuna import.log\n")))}d.isMDXComponent=!0}}]);