"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35399],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),u=a,f=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(35742);function o(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},2658:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),o=r(88828);const s={title:"ols",description:"Perform OLS regression on timeseries data using the 'ols' function from OpenBB's econometrics module. The page includes parameters description, return type, and a practical example with code.",keywords:["ols","timeseries data","statsmodels","regression","openbb.econometrics.ols","Dependent variable series","Independent variables series","RegressionResultsWrapper","OLS Regression Results","R-squared","Least Squares","F-statistic","Prob (F-statistic)","Log-Likelihood","AIC","BIC","Df Residuals","Df Model","Covariance Type"]},l=void 0,i={unversionedId:"sdk/reference/econometrics/ols",id:"sdk/reference/econometrics/ols",title:"ols",description:"Perform OLS regression on timeseries data using the 'ols' function from OpenBB's econometrics module. The page includes parameters description, return type, and a practical example with code.",source:"@site/content/sdk/reference/econometrics/ols.md",sourceDirName:"sdk/reference/econometrics",slug:"/sdk/reference/econometrics/ols",permalink:"/sdk/reference/econometrics/ols",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/econometrics/ols.md",tags:[],version:"current",lastUpdatedBy:"jose-donato",lastUpdatedAt:1701348039,formattedLastUpdatedAt:"Nov 30, 2023",frontMatter:{title:"ols",description:"Perform OLS regression on timeseries data using the 'ols' function from OpenBB's econometrics module. The page includes parameters description, return type, and a practical example with code.",keywords:["ols","timeseries data","statsmodels","regression","openbb.econometrics.ols","Dependent variable series","Independent variables series","RegressionResultsWrapper","OLS Regression Results","R-squared","Least Squares","F-statistic","Prob (F-statistic)","Log-Likelihood","AIC","BIC","Df Residuals","Df Model","Covariance Type"]},sidebar:"tutorialSidebar",previous:{title:"norm",permalink:"/sdk/reference/econometrics/norm"},next:{title:"options",permalink:"/sdk/reference/econometrics/options"}},p={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],d={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"econometrics.ols - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Performs an OLS regression on timeseries data. ","[Source: Statsmodels]"),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_model.py#L176"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"openbb.econometrics.ols(Y: pd.DataFrame, X: pd.DataFrame)\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Y"),(0,a.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,a.kt)("td",{parentName:"tr",align:null},"Dependent variable series."),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"X"),(0,a.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,a.kt)("td",{parentName:"tr",align:null},"Dataframe of independent variables series."),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"statsmodels.regression.linear_model.RegressionResultsWrapper"),(0,a.kt)("td",{parentName:"tr",align:null},"Regression model wrapper from statsmodels.")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from openbb_terminal.sdk import openbb\ndf = openbb.econometrics.load("wage_panel")\nOLS_model = openbb.econometrics.ols(df["lwage"], df[["educ", "exper", "expersq"]])\nprint(OLS_model.summary())`\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"OLS Regression Results\n=======================================================================================\nDep. Variable:                  lwage   R-squared (uncentered):                   0.920\nModel:                            OLS   Adj. R-squared (uncentered):              0.919\nMethod:                 Least Squares   F-statistic:                          1.659e+04\nDate:                Thu, 10 Nov 2022   Prob (F-statistic):                        0.00\nTime:                        15:28:11   Log-Likelihood:                         -3091.3\nNo. Observations:                4360   AIC:                                      6189.\nDf Residuals:                    4357   BIC:                                      6208.\nDf Model:                           3\nCovariance Type:            nonrobust\n==============================================================================\n                coef    std err          t      P>|t|      [0.025      0.975]\n------------------------------------------------------------------------------\neduc           0.0986      0.002     39.879      0.000       0.094       0.103\nexper          0.1018      0.009     10.737      0.000       0.083       0.120\nexpersq       -0.0034      0.001     -4.894      0.000      -0.005      -0.002\n==============================================================================\nOmnibus:                     1249.642   Durbin-Watson:                   0.954\nProb(Omnibus):                  0.000   Jarque-Bera (JB):             9627.436\nSkew:                          -1.152   Prob(JB):                         0.00\nKurtosis:                       9.905   Cond. No.                         86.4\n==============================================================================\nNotes:\n[1] R\xb2 is computed without centering (uncentered) since the model does not contain a constant.\n[2] Standard Errors assume that the covariance matrix of the errors is correctly specified.\n")),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);