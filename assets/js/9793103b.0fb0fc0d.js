"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31761],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),c=n,u=m["".concat(l,".").concat(c)]||m[c]||h[c]||i;return a?r.createElement(u,o(o({ref:t},d),{},{components:a})):r.createElement(u,o({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(35742);function i(e){let{title:t}=e;return r.createElement(n.Z,null,r.createElement("title",null,t))}},38406:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),i=a(88828);const o={title:"Basic Syntax",sidebar_position:2,description:"This page provides comprehensive information about standardized command syntax for an open-source platform. Topics discussed include the structure of command syntax, use of standardized parameters, usage of provider and symbol parameters, handling of date and limit parameters, and more. Also explored, are the methods for selecting data sources, handling different list and ticker symbol formats, and dealing with command responses and warnings.",keywords:["command syntax","standardized parameters","date format","provider parameter","data source selection","symbol parameter","list formats","ticker symbols","date parameter","time series","limit parameter","keyword arguments","endpoint parameters","command response","data models"]},s=void 0,l={unversionedId:"platform/usage/basic_syntax",id:"platform/usage/basic_syntax",title:"Basic Syntax",description:"This page provides comprehensive information about standardized command syntax for an open-source platform. Topics discussed include the structure of command syntax, use of standardized parameters, usage of provider and symbol parameters, handling of date and limit parameters, and more. Also explored, are the methods for selecting data sources, handling different list and ticker symbol formats, and dealing with command responses and warnings.",source:"@site/content/platform/usage/basic_syntax.md",sourceDirName:"platform/usage",slug:"/platform/usage/basic_syntax",permalink:"/platform/usage/basic_syntax",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/usage/basic_syntax.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1707846532,formattedLastUpdatedAt:"Feb 13, 2024",sidebarPosition:2,frontMatter:{title:"Basic Syntax",sidebar_position:2,description:"This page provides comprehensive information about standardized command syntax for an open-source platform. Topics discussed include the structure of command syntax, use of standardized parameters, usage of provider and symbol parameters, handling of date and limit parameters, and more. Also explored, are the methods for selecting data sources, handling different list and ticker symbol formats, and dealing with command responses and warnings.",keywords:["command syntax","standardized parameters","date format","provider parameter","data source selection","symbol parameter","list formats","ticker symbols","date parameter","time series","limit parameter","keyword arguments","endpoint parameters","command response","data models"]},sidebar:"tutorialSidebar",previous:{title:"REST API",permalink:"/platform/usage/rest_api"},next:{title:"Finding Symbols",permalink:"/platform/usage/find_symbols"}},p={},d=[{value:"Provider",id:"provider",level:2},{value:"Symbol",id:"symbol",level:2},{value:"One Symbol",id:"one-symbol",level:3},{value:"Multiple Symbols",id:"multiple-symbols",level:3},{value:"Comma-Separated String",id:"comma-separated-string",level:4},{value:"Python List",id:"python-list",level:4},{value:"Dates",id:"dates",level:2},{value:"Limit",id:"limit",level:2},{value:"**kwargs",id:"kwargs",level:2},{value:"REST API POST Requests",id:"rest-api-post-requests",level:2},{value:"Example",id:"example",level:3},{value:"Fetch Some Data",id:"fetch-some-data",level:4},{value:"Send a POST Request",id:"send-a-post-request",level:4},{value:"References",id:"references",level:2}],m={toc:d},h="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{title:"Basic Syntax - Usage | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"The structure of command syntax is standardized across common fields. This ensures that a ",(0,n.kt)("inlineCode",{parentName:"p"},"date")," is always a ",(0,n.kt)("inlineCode",{parentName:"p"},"date")," and the format remains consistent throughout. Standardized parameters include, but are not limited to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#provider"},"provider")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#symbol"},"symbol")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#dates"},"start_date")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#dates"},"end_date")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#dates"},"date")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#limit"},"limit"))),(0,n.kt)("p",null,"When looking at a function's docstring, the standard parameters (shared across multiple providers) are positioned first.  Provider-specific parameters positionally follow the ",(0,n.kt)("inlineCode",{parentName:"p"},"provider")," argument.  The example below is from, ",(0,n.kt)("inlineCode",{parentName:"p"},"obb.equity.price.quote"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"Parameters\n----------\nsymbol : str\n    Symbol to get data for. In this case, the comma separated list of symbols.\nprovider : Optional[Literal['fmp', 'intrinio']]\n    The provider to use for the query, by default None.\n    If None, the provider specified in defaults is selected or 'fmp' if there is\n    no default.\nsource : Literal['iex', 'bats', 'bats_delayed', 'utp_delayed', 'cta_a_delayed', 'cta_b_delayed', 'intrinio_mx', 'intrinio_mx_plus', 'delayed_sip']\n    Source of the data. (provider: intrinio)\n")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Examples below assume that the Python interface has been imported in the current session, and/or the Fast API has been started."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from openbb import obb\n")),(0,n.kt)("p",{parentName:"admonition"},"or"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-python"},"uvicorn openbb_core.api.rest_api:app\n"))),(0,n.kt)("h2",{id:"provider"},"Provider"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"provider")," parameter is the way to select the specific source of the data from the endpoint. If a ",(0,n.kt)("a",{parentName:"p",href:"/platform/usage#user-settings"},"preference for the default provider")," has not been defined, the default will be the first, alphabetically, installed provider. Provider values are entered in lower-case, with an underscore for multiple words - for example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'historical_prices = obb.equity.price.historical("aapl", provider="alpha_vantage")\n')),(0,n.kt)("p",null,"Provider coverage can be ascertained with the command below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"obb.coverage.providers\n")),(0,n.kt)("p",null,"Refer to, ",(0,n.kt)("a",{parentName:"p",href:"/platform/extensions/data_extensions"},"Data Providers"),", for instructions on installing data provider extensions."),(0,n.kt)("h2",{id:"symbol"},"Symbol"),(0,n.kt)("p",null,"Symbols are not case-sensitive, and where the function allows, can be entered as a ",(0,n.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"List[str]"),", or a comma-separated ",(0,n.kt)("inlineCode",{parentName:"p"},"string"),". The exact format of the symbol may vary between providers - for example, share classes, exchange suffixes, and global composites. An example of this difference is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'obb.equity.price.historical("brk.b", provider="polygon")\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'obb.equity.price.historical("brk-b", provider="fmp")\n')),(0,n.kt)("p",null,"While some providers handle the different formats on their end, others do not. This is something to consider when no results are returned from one source."),(0,n.kt)("p",null,"With providers supporting market data from multiple jurisdictions, the most common method for requesting data outside of US-listings is to append a suffix to the ticker symbol (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"RELIANCE.NS"),"). Formats may be unique to a provider, so it is best to review the source's documentation for an overview of their specific conventions. ",(0,n.kt)("a",{parentName:"p",href:"https://help.yahoo.com/kb/SLN2310.html"},"This page")," on Yahoo describes how they format symbols, which many others follow to some degree."),(0,n.kt)("h3",{id:"one-symbol"},"One Symbol"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'quote = obb.equity.price.quote(symbol="td", provider="fmp")\n')),(0,n.kt)("h3",{id:"multiple-symbols"},"Multiple Symbols"),(0,n.kt)("p",null,"The OpenBB Provider module enforces REST-compliant lists that can be entered in either format through the Python interface."),(0,n.kt)("h4",{id:"comma-separated-string"},"Comma-Separated String"),(0,n.kt)("p",null,"This is the format required by the Fast API, when creating new data endpoints, it is important that the Python interface is able to accept both formats."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'quotes = obb.equity.price.quote("td,schw,jpm,ms", provider="fmp")\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import requests\nr = requests.get("http://127.0.0.1:8000/api/v1/equity/price/quote?provider=fmp&symbol=td,schw,ms,jpm")\nr.json()\n')),(0,n.kt)("h4",{id:"python-list"},"Python List"),(0,n.kt)("p",null,"Entering a list will provide the same outcome as above."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'quotes = obb.equity.price.quote(["td","schw","jpm","ms"], provider="fmp")\n')),(0,n.kt)("p",null,"Lists of symbols can be generated from the results of other functions, and then passed to the input."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'symbol="spgi"\nsymbols = obb.equity.compare.peers(symbol).results.peers_list+[symbol]\nquotes = obb.equity.price.quote(symbols)\n')),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"To accomplish this same task through the Fast API, convert the list to a comma-separated string.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import requests\nsymbol="spgi"\nr = requests.get(f"http://127.0.0.1:8000/api/v1/equity/compare/peers?provider=fmp&symbol={symbol}")\nsymbols_list = r.json()["results"]["peers_list"]+[symbol]\nsymbols = ",".join(symbols_list)\nresponse = requests.get(f"http://127.0.0.1:8000/api/v1/equity/price/quote?provider=fmp&symbol={symbols}")\nresponse.json()\n')),(0,n.kt)("h2",{id:"dates"},"Dates"),(0,n.kt)("p",null,'Dates are entered everywhere as a string, formatted as, "YYYY-MM-DD". If the function has only the ',(0,n.kt)("inlineCode",{parentName:"p"},"date")," parameter, the data will be a snapshot instead of a time series."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'historical_prices = obb.equity.price.historical(symbol="qqq", start_date="2023-01-10", end_date="2023-01-31", provider="fmp")\n')),(0,n.kt)("p",null,"For flexibility and programmatic purposes, a ",(0,n.kt)("inlineCode",{parentName:"p"},"datetime")," object is also accepted."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'from datetime import datetime\nsymbol="qqq"\nstart = datetime.strptime("100123", "%d%m%y")\nend = datetime.strptime("2023-01-31","%Y-%m-%d")\nhistorical_prices = obb.equity.price.historical(symbol, start_date=start, end_date=end, provider="fmp")\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import requests\nresponse = requests.get(f"http://127.0.0.1:8000/api/v1/equity/price/historical?provider=fmp&symbol={symbol}&start_date={start}&end_date={end}")\nresponse.json()\n')),(0,n.kt)("h2",{id:"limit"},"Limit"),(0,n.kt)("p",null,"Where, optional, ",(0,n.kt)("inlineCode",{parentName:"p"},"limit")," parameters are supplied, they are likely to have sensible default states that return N results starting from the most recent entry or the ",(0,n.kt)("inlineCode",{parentName:"p"},"start_date"),". Enter these values as an integer."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'income = obb.equity.fa.income("AAPL", period="quarter", provider="fmp", limit=4)\n')),(0,n.kt)("h2",{id:"kwargs"},"**kwargs"),(0,n.kt)("p",null,"All endpoints accept additional keyword arguments, but non-existent parameters will be ignored. Invalid parameters are communicated via the ",(0,n.kt)("inlineCode",{parentName:"p"},"warnings")," field in the command response. Parameters can be stored as a dictionary and fed to the command as ",(0,n.kt)("inlineCode",{parentName:"p"},"**kwargs"),". If a provider, or function, has an undocumented parameter it can still be accessed by supplying the additional kwargs."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'kwargs = {"symbol":"msft","start_date":"2023-01-01","provider":"polygon"}\nhistorical_prices = obb.equity.price.historical(**kwargs)\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'data = obb.equity.price.quote("brk-b", provider="fmp", source="bats")\ndata.warnings\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"[Warning_(category='OpenBBWarning', message=\"Parameter 'source' is not supported by fmp. Available for: intrinio.\")]\n")),(0,n.kt)("h2",{id:"rest-api-post-requests"},"REST API POST Requests"),(0,n.kt)("p",null,"Most endpoints are for data retrieval, but some ",(0,n.kt)("a",{parentName:"p",href:"/platform/extensions/toolkit_extensions"},"toolkit extensions")," require data to pass through the function.  In these instances, it must be a POST request, and JSON."),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("p",null,"This example will use a GET request to fetch daily VIX data from the Cboe data extension, and then make a POST request which passes through the data to a technical analysis function."),(0,n.kt)("p",null,"First, start a development server."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"uvicorn openbb_core.api.rest_api:app --reload\n")),(0,n.kt)("p",null,"This example will use Python and the Requests library, so the syntax will vary according to the preferred medium for interacting with the API."),(0,n.kt)("h4",{id:"fetch-some-data"},"Fetch Some Data"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import requests\n\nget_url = "http://127.0.0.1:8000/api/v1/index/market?provider=cboe&symbol=vix&interval=1d"\nget_response = requests.get(get_url)\ndata_results = get_response.json()["results"]\n\ndata_results[-1]\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},"{'date': '2023-11-17T00:00:00',\n 'open': 14.18,\n 'high': 14.19,\n 'low': 13.67,\n 'close': 13.79,\n 'volume': 0,\n 'calls_volume': None,\n 'puts_volume': None,\n 'total_options_volume': None}\n")),(0,n.kt)("h4",{id:"send-a-post-request"},"Send a POST Request"),(0,n.kt)("p",null,"Next, pass the ",(0,n.kt)("inlineCode",{parentName:"p"},"data_results")," to a function, using the ",(0,n.kt)("inlineCode",{parentName:"p"},"json")," field in the POST headers.  For this example, realized volatiliy cones, the default parameters  assume the time series data is daily and that volatility should be annualized over 252 trading days."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"index")," parameter tells the function which field in the posted data to use as the date index."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import pandas as pd\n\npost_url = "http://localhost:8000/api/v1/technical/cones"\npost_response = requests.post(post_url, json=data_results)\nta_results = post_response.json()["results"]\n\npd.DataFrame.from_records(ta_results)\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},"window"),(0,n.kt)("th",{parentName:"tr",align:"right"},"realized"),(0,n.kt)("th",{parentName:"tr",align:"right"},"min"),(0,n.kt)("th",{parentName:"tr",align:"right"},"lower_25%"),(0,n.kt)("th",{parentName:"tr",align:"right"},"median"),(0,n.kt)("th",{parentName:"tr",align:"right"},"upper_75%"),(0,n.kt)("th",{parentName:"tr",align:"right"},"max"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"3"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.396165"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.00701638"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.444709"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.72414"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.11563"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8.47636")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.623199"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.190188"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.665584"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.852915"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.15491"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4.83264")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"30"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.988435"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.332913"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.750007"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.921482"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.17072"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2.98404")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"60"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.932594"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.47639"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.792548"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.964617"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.20171"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2.35563")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"90"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.915137"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.551011"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.815229"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.965553"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.2128"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2.04104")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"120"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.858644"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.549233"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.836395"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.983437"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.21097"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.86416")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"150"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.898628"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.557274"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.842359"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.991539"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.23165"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.73182")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"180"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.902293"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.579575"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.84876"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.00421"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.23584"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.68786")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"210"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.901717"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.580214"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.854655"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.996992"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.2271"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.65739")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"240"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.884282"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.587564"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.857935"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.00491"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.22141"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.62973")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"300"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.852533"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.622105"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.862097"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.00724"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.21705"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.51887")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"360"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.847416"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.661648"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.869691"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.03923"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.20488"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.48571")))),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("p",null,"All functions, parameters, and responses are detailed under the ",(0,n.kt)("a",{parentName:"p",href:"/platform/reference"},"Reference pages"),".  The data models for each provider source are described within the ",(0,n.kt)("a",{parentName:"p",href:"/platform/data_models"},"Data Models")," pages."),(0,n.kt)("p",null,"These pages are a quick way to cross-reference differences between providers. The same information is provided in a function's signature and docstring."))}c.isMDXComponent=!0}}]);