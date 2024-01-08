"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33400],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(35742);function o(e){let{title:t}=e;return a.createElement(r.Z,null,a.createElement("title",null,t))}},87365:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(88828);const i={title:"Overview",sidebar_position:1,description:"An overview for getting started with the OpenBB Platform Python client and Fast API, details on authorization, data providers, settings, responses, commands, logging, and features such as dynamic command execution.",keywords:["OpenBB Platform","Python client","Fast API","getting started","authorization","data providers","OpenBB Hub","local environment","environment variables","user settings","command execution","API response","logging","proxy networks","data cleaning","technical analysis","quantitative analysis","charting libraries"]},l=void 0,s={unversionedId:"platform/usage/index",id:"platform/usage/index",title:"Overview",description:"An overview for getting started with the OpenBB Platform Python client and Fast API, details on authorization, data providers, settings, responses, commands, logging, and features such as dynamic command execution.",source:"@site/content/platform/usage/index.md",sourceDirName:"platform/usage",slug:"/platform/usage/",permalink:"/platform/usage/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/usage/index.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1704729450,formattedLastUpdatedAt:"Jan 8, 2024",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1,description:"An overview for getting started with the OpenBB Platform Python client and Fast API, details on authorization, data providers, settings, responses, commands, logging, and features such as dynamic command execution.",keywords:["OpenBB Platform","Python client","Fast API","getting started","authorization","data providers","OpenBB Hub","local environment","environment variables","user settings","command execution","API response","logging","proxy networks","data cleaning","technical analysis","quantitative analysis","charting libraries"]},sidebar:"tutorialSidebar",previous:{title:"Toolkits",permalink:"/platform/extensions/toolkit_extensions"},next:{title:"REST API",permalink:"/platform/usage/rest_api"}},p={},d=[{value:"Authorization",id:"authorization",level:2},{value:"OpenBB Hub",id:"openbb-hub",level:3},{value:"Local Environment",id:"local-environment",level:3},{value:"Environment Variables",id:"environment-variables",level:2},{value:"Proxy Networks",id:"proxy-networks",level:3},{value:"User Settings",id:"user-settings",level:2},{value:"Basic Response",id:"basic-response",level:2},{value:"Dynamic Command Execution",id:"dynamic-command-execution",level:2},{value:"Commands and Provider Coverage",id:"commands-and-provider-coverage",level:2},{value:"Logging Out",id:"logging-out",level:2}],u={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{title:"Overview - Usage | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"At its base, the OpenBB Platform supplies core architecture and services for connecting data providers and extensions, consumable through the Python client or the Fast API. The extension framework provides interoperability between as many, or few, services required.  Optional extras are not included with the base installation, and these include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Charting libraries and views"),(0,r.kt)("li",{parentName:"ul"},"Data cleaning"),(0,r.kt)("li",{parentName:"ul"},"Technical/Quantitative Analysis"),(0,r.kt)("li",{parentName:"ul"},"Community data providers"),(0,r.kt)("li",{parentName:"ul"},"CLI Terminal")),(0,r.kt)("h2",{id:"authorization"},"Authorization"),(0,r.kt)("p",null,"By default, authorization is not required to initialize and use the core services. Most data providers, however, require an API key to access their data. The API keys can be stored locally, or securely on the OpenBB Hub for convenient remote access. Refer to our Developer Guidelines for best practices within a production environment."),(0,r.kt)("h3",{id:"openbb-hub"},"OpenBB Hub"),(0,r.kt)("p",null,"Data provider credentials and user preferences can be securely stored on the OpenBB Hub and accessed in Python using a revokable Personal Access Token (PAT). Login to the ",(0,r.kt)("a",{parentName:"p",href:"https://my.openbb.co/"},"Hub")," to manage this method of remote authorization."),(0,r.kt)("p",null,"The OpenBB Hub is a convenient solution for accessing data in temporary Python environments, like Google Colab (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/blob/develop/examples/googleColab.ipynb"},"example notebook"),"). Login with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from openbb import obb\n\n# Login with personal access token\nobb.account.login(pat="my_pat", remember_me=True)\n\n# Alternatively, login with email and password\nobb.account.login(email="my_email", password="my_password", remember_me=True)\n\n# Change a credential\nobb.user.credentials.polygon_api_key = "my_api_key"\n\n# Save account changes to the Hub\nobb.account.save()\n\n# Refresh account with latest changes\nobb.account.refresh()\n\n# Logout\nobb.account.logout()\n')),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"remember_me")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"False")," to discard all credentials at the end of the session."),(0,r.kt)("h3",{id:"local-environment"},"Local Environment"),(0,r.kt)("p",null,"Credentials and user preferences  are stored locally, ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.openbb_platform/"),", as a JSON file, ",(0,r.kt)("inlineCode",{parentName:"p"},"user_settings.json"),".  It is read upon initializing the Python client, or when the Fast API is authorized. If the file does not exist, create it with any text editor. The schema below can be copy/pasted if required, providers not listed here are added using the same format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "credentials": {\n    "fmp_api_key": "REPLACE_ME",\n    "polygon_api_key": "REPLACE_ME",\n    "benzinga_api_key": "REPLACE_ME",\n    "fred_api_key": "REPLACE_ME",\n    "nasdaq_api_key": "REPLACE_ME",\n    "intrinio_api_key": "REPLACE_ME",\n    "alpha_vantage_api_key": "REPLACE_ME",\n    }\n}\n')),(0,r.kt)("p",null,"To set keys from the Python client for the current session only, access the Credentials class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'obb.user.credentials.intrinio_api_key = "my_api_key"\n')),(0,r.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,r.kt)("p",null,"Environment variables are defined in a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file. If this file does not exist, create it inside the same folder ",(0,r.kt)("inlineCode",{parentName:"p"},"user_settings.json")," is located."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OPENBB_DEBUG_MODE"),": enables verbosity while running the program"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OPENBB_DEVELOP_MODE"),": points hub service to .co or .dev"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OPENBB_AUTO_BUILD"),": enables automatic SDK package build on import"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OPENBB_CHARTING_EXTENSION"),": specifies which charting extension to use"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OPENBB_API_AUTH_EXTENSION"),": specifies which authentication extension to use"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OPENBB_API_AUTH"),": enables API authentication for command endpoints"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OPENBB_API_USERNAME"),": sets API username"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OPENBB_API_PASSWORD"),": sets API password")),(0,r.kt)("p",null,"Variables can be defined for current session only."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import os\nos.environ["OPENBB_DEBUG_MODE"] = "True"\nfrom openbb import obb\n')),(0,r.kt)("h3",{id:"proxy-networks"},"Proxy Networks"),(0,r.kt)("p",null,"An environment variable can be set, in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file, to direct the Requests library to a specific address and port."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-env"},'HTTP_PROXY="<ADDRESS>" or HTTPS_PROXY="<ADDRESS>\u201d\n')),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-env"},'HTTP_PROXY="http://10.10.10.10:8000"\n')),(0,r.kt)("h2",{id:"user-settings"},"User Settings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Preference")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Options")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data_directory"),(0,r.kt)("td",{parentName:"tr",align:null},"/home/OpenBBUserData"),(0,r.kt)("td",{parentName:"tr",align:null},"Any path."),(0,r.kt)("td",{parentName:"tr",align:null},"When launching the application for the first time  this directory will be created. It serves as the default location where the application stores usage artifacts  such as logs and exports.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"export_directory"),(0,r.kt)("td",{parentName:"tr",align:null},"/home/OpenBBUserData/exports"),(0,r.kt)("td",{parentName:"tr",align:null},"Any path."),(0,r.kt)("td",{parentName:"tr",align:null},"The OpenBB Charting Extension provides the capability to export images in various formats. This is the directory where it attempts to save such exports.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cache_directory"),(0,r.kt)("td",{parentName:"tr",align:null},"/home/OpenBBUserData/cache"),(0,r.kt)("td",{parentName:"tr",align:null},"Any path."),(0,r.kt)("td",{parentName:"tr",align:null},"The directory where http requests and database caches are stored, for functions with caching.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user_styles_directory"),(0,r.kt)("td",{parentName:"tr",align:null},"/home/OpenBBUserData/styles/user"),(0,r.kt)("td",{parentName:"tr",align:null},"Any path."),(0,r.kt)("td",{parentName:"tr",align:null},"The OpenBB Charting Extension supports custom stylization. This directory is the location where it looks for user-defined styles. If no user styles are found in this directory  the application will proceed with the default styles.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"charting_extension"),(0,r.kt)("td",{parentName:"tr",align:null},"openbb_charting"),(0,r.kt)("td",{parentName:"tr",align:null},'["openbb_charting"]'),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the charting extension to be used with the application.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chart_style"),(0,r.kt)("td",{parentName:"tr",align:null},"dark"),(0,r.kt)("td",{parentName:"tr",align:null},'["dark", "light"]'),(0,r.kt)("td",{parentName:"tr",align:null},'The default color style to use with the OpenBB Charting Extension plots. Options include "dark" and "light".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plot_enable_pywry"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"[True, False]"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the application should enable PyWry. If PyWry is disabled  the image will open in your default browser  otherwise  it will be displayed within your editor or in a separate PyWry window.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plot_pywry_width"),(0,r.kt)("td",{parentName:"tr",align:null},"1400"),(0,r.kt)("td",{parentName:"tr",align:null},"Any positive integer."),(0,r.kt)("td",{parentName:"tr",align:null},"PyWry window width.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plot_pywry_height"),(0,r.kt)("td",{parentName:"tr",align:null},"762"),(0,r.kt)("td",{parentName:"tr",align:null},"Any positive integer."),(0,r.kt)("td",{parentName:"tr",align:null},"PyWry window height.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plot_open_export"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"[True, False]"),(0,r.kt)("td",{parentName:"tr",align:null},'Controls whether the "Save As" window should pop up as soon as the image is displayed."')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table_style"),(0,r.kt)("td",{parentName:"tr",align:null},"dark"),(0,r.kt)("td",{parentName:"tr",align:null},'["dark", "light"]'),(0,r.kt)("td",{parentName:"tr",align:null},'"The default color style to use with the OpenBB Charting Extension tables. Options are "dark" and "light""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"Any positive integer."),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the timeout duration for HTTP requests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"[True, False]"),(0,r.kt)("td",{parentName:"tr",align:null},"Enables or disables the collection of metadata  which provides information about operations  including arguments  duration  route  and timestamp. Disabling this feature may improve performance in cases where contextual information is not needed or when the additional computation time and storage space are a concern.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output_type"),(0,r.kt)("td",{parentName:"tr",align:null},"OBBject"),(0,r.kt)("td",{parentName:"tr",align:null},'["OBBject", "dataframe", "numpy", "dict", "chart", "polars"]'),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the type of data the application will output when a command or endpoint is accessed. Note that choosing data formats only available in Python  such as ",(0,r.kt)("inlineCode",{parentName:"td"},"dataframe"))))),(0,r.kt)("p",null,"User settings can be set from the Python interface directly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from openbb import obb\n\nobb.user.profile\nobb.user.credentials\nobb.user.preferences\nobb.user.defaults\n")),(0,r.kt)("p",null,"Notably, ",(0,r.kt)("inlineCode",{parentName:"p"},"obb.user.defaults"),", defines default providers for any command. They are stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"user_settings.json")," file, under ",(0,r.kt)("inlineCode",{parentName:"p"},"routes"),". Below is an example of what it might look like."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "credentials": {\n        "benzinga_api_key": null,\n        "fmp_api_key": null,\n        "polygon_api_key": null,\n        "fred_api_key": null\n    },\n    "defaults": {\n        "routes": {\n            "/equity/fundamental/balance": {\n                "provider": "polygon"\n            },\n            "/equity/price/historical": {\n                "provider": "fmp"\n            },\n            "/equity/news": {\n                "provider": "benzinga"\n            }\n        }\n    },\n    {\n        "preferences": {\n          "data_directory": "~/OpenBBUserData", // Where to store data\n          "export_directory": "~/OpenBBUserData/exports", // Where to store exports\n          "cache_directory": "~/OpenBBUserData/cache", // Where to store the cache\n          "user_styles_directory": "~/OpenBBUserData/styles/user", // Where to store user styles\n          "charting_extension": "openbb_charting", // Charting extension to use\n          "chart_style": "dark", // Chart style to use (dark or light)\n          "plot_enable_pywry": true, // Whether to enable PyWry\n          "plot_pywry_width": 1400, // PyWry width\n          "plot_pywry_height": 762, // PyWry height\n          "plot_open_export": false, // Whether to open plot image exports after they are created\n          "table_style": "dark", // Table style to use (dark or light)\n          "request_timeout": 15, // Request timeout\n          "metadata": true, // Whether to include metadata in the output\n          "output_type": "OBBject" // Our default output type (OBBject, dataframe, polars, numpy, dict, chart)\n        }\n    }\n}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("h3",{parentName:"admonition",id:"notes-on-preferences"},(0,r.kt)("strong",{parentName:"h3"},"Notes on Preferences")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"If a ",(0,r.kt)("inlineCode",{parentName:"li"},"OpenBBUserData")," folder in not in the home directory, the application will create one on first run. The user preferences with paths all default to this folder, be it exports, styles or data - this can be changed at any time to suit."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"OpenBBUserData")," will still be created even if preferences are not pointing to it, this is because the application needs a place to store logs and other artifacts."),(0,r.kt)("li",{parentName:"ul"},"One way of exporting files or images on the OpenBB Platform is to leverage that functionality from the OpenBB Charting Extension. The ",(0,r.kt)("inlineCode",{parentName:"li"},"export_directory")," preference is the location where the extension will attempt to save such exports."))),(0,r.kt)("h2",{id:"basic-response"},"Basic Response"),(0,r.kt)("p",null,"The output of every command is an object which contains the results of the request, along with additional information. It is a custom class, ",(0,r.kt)("inlineCode",{parentName:"p"},"OBBject"),", and always returns with the fields listed below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"id: ...                 # UUID Tag\nresults: ...            # Serializable results.\nprovider: ...           # Provider name.\nwarnings: ...           # List of warnings.\nchart: ...              # Chart object.\nextra: ...              # Extra info.\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from openbb import obb\n\ndata = obb.equity.price.historical("SPY", provider="polygon")\n\ndata\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"OBBject\n\nid: 06520558-d54a-7e53-8000-7aafc8a42694\nresults: [{'date': datetime.datetime(2022, 10, 5, 0, 0), 'open': 375.62, 'high': 37...\nprovider: polygon\nwarnings: None\nchart: None\nextra: {'metadata': {'arguments': {'provider_choices': {'provider': 'polygon'}, 'st...\n")),(0,r.kt)("p",null,"Additional class methods are helpers for converting the results to a variety of formats."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"to_dict()"),': converts to a dictionary, accepting all standard "orientation" parameters, i.e., "records"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"to_df()")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"to_dataframe()"),": converts to a Pandas DataFrame."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"to_numpy()"),": converts to a Numpy array."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"to_polars()"),": converts to a Polars table.")),(0,r.kt)("p",null,"The output from the Fast API is a serialized version of this object, and these methods are lost on conversion.  OBBject can be reconstructed to recover the helpers by importing the model and validating the data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import requests\nfrom openbb_core.app.model.obbject import OBBject\n\ndata = []\nsymbol="SPY"\nurl = f"http://127.0.0.1:8000/api/v1/equity/price/historical?provider=polygon&symbol={symbol}"\nheaders = {"accept": "application/json"}\n\nresponse = requests.get(url, headers=headers, timeout=3)\n\nif response.status_code == 200:\n  data = OBBject.model_validate(response.json())\n\ndata.to_df()\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The preferred output type can be set with a user preference."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'obb.user.preferences.output_type="dataframe"\n'))),(0,r.kt)("h2",{id:"dynamic-command-execution"},"Dynamic Command Execution"),(0,r.kt)("p",null,"Dynamic execution provides an alternate entry point to functions. This method requires formatting the query as demonstrated below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from openbb_core.app.command_runner import CommandRunner\nrunner = CommandRunner()\noutput = runner.run(\n    "/equity/fundamental/ratios",\n    provider_choices={\n        "provider": "fmp",\n    },\n    standard_params={\n        "symbol" : "TSLA",\n        "period" : "quarter",\n    },\n    extra_params={}\n)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},">>> output\nOBBject\n\nid: 065241b7-bd9d-7313-8000-9406d8afab75\nresults: [{'symbol': 'TSLA', 'date': '2023-06-30', 'period': 'Q2', 'current_ratio':...\nprovider: fmp\nwarnings: None\nchart: None\nextra: {'metadata': {'arguments': {'provider_choices': {'provider': 'fmp'}, 'standa...\n")),(0,r.kt)("h2",{id:"commands-and-provider-coverage"},"Commands and Provider Coverage"),(0,r.kt)("p",null,"The installed commands and data providers are found under, ",(0,r.kt)("inlineCode",{parentName:"p"},"obb.coverage"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"obb.coverage\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/coverage\n    providers\n    commands\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"obb.coverage.providers")," is a dictionary of the installed provider extensions, each with its own list of available commands."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"obb.coverage.commands")," is a dictionary of commands, each with its own list of available providers for the data."),(0,r.kt)("h2",{id:"logging-out"},"Logging Out"),(0,r.kt)("p",null,"Logging out and saving changes to preferences is done in the account module."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"obb.account.save()\nobb.account.logout()\n")),(0,r.kt)("p",null,"Any saved changes will be pulled to a new session after logging in.  Ending the Python session will be an equivalent to logging out, if ",(0,r.kt)("inlineCode",{parentName:"p"},"remember_me=False"),"."))}m.isMDXComponent=!0}}]);