"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76352],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(35742);function r(e){let{title:t}=e;return a.createElement(o.Z,null,a.createElement("title",null,t))}},89171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(87462),o=(n(67294),n(3905)),r=n(88828);const l={title:"Installation",sidebar_position:1,description:"This page presents the general system requirements, supported environments, installation procedures, and setup for running the OpenBB Platform. It discusses the prerequisites including Python version, operating system requirements, Docker usage, and the process of building the platform from source.",keywords:["OpenBB Platform","Python","System requirements","Supported environments","Installation","Docker","Python virtual environment","Installation from source","Windows 10","Mac OS Big Sur","Linux","Package installation","VS Code","PyCharm","Jupyter","GitHub","Conda","venv","API","Repository","pip","Poetry","Toml","PyPI","Node.js","npm"]},i=void 0,s={unversionedId:"platform/installation",id:"platform/installation",title:"Installation",description:"This page presents the general system requirements, supported environments, installation procedures, and setup for running the OpenBB Platform. It discusses the prerequisites including Python version, operating system requirements, Docker usage, and the process of building the platform from source.",source:"@site/content/platform/installation.md",sourceDirName:"platform",slug:"/platform/installation",permalink:"/platform/installation",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/installation.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710245802,formattedLastUpdatedAt:"Mar 12, 2024",sidebarPosition:1,frontMatter:{title:"Installation",sidebar_position:1,description:"This page presents the general system requirements, supported environments, installation procedures, and setup for running the OpenBB Platform. It discusses the prerequisites including Python version, operating system requirements, Docker usage, and the process of building the platform from source.",keywords:["OpenBB Platform","Python","System requirements","Supported environments","Installation","Docker","Python virtual environment","Installation from source","Windows 10","Mac OS Big Sur","Linux","Package installation","VS Code","PyCharm","Jupyter","GitHub","Conda","venv","API","Repository","pip","Poetry","Toml","PyPI","Node.js","npm"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/platform/"},next:{title:"OpenBB Platform Extensions",permalink:"/platform/extensions/"}},p={},u=[{value:"General System Requirements",id:"general-system-requirements",level:2},{value:"Supported Environments",id:"supported-environments",level:2},{value:"Installation",id:"installation",level:2},{value:"PyPI",id:"pypi",level:3},{value:"Docker",id:"docker",level:3},{value:"Source",id:"source",level:3},{value:"Post-Installation",id:"post-installation",level:2},{value:"Hub Synchronization",id:"hub-synchronization",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Node.js",id:"nodejs",level:3},{value:"Install Dependencies",id:"install-dependencies",level:4},{value:"Start Development Server",id:"start-development-server",level:4},{value:"Build",id:"build",level:4}],m={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{title:"Installation | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,o.kt)("h2",{id:"general-system-requirements"},"General System Requirements"),(0,o.kt)("p",null,"Most systems capable of running Python 3.8-3.11 will be compatible with the OpenBB Platform. A modern processor (five years or less), running an up-to-date operating system, with at least 4GB of RAM, is recommended. Maintaining the system with current patches ensures maximum compatibility. At a minimum, Windows and macOS should be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows 10"),(0,o.kt)("li",{parentName:"ul"},"Mac OS Big Sur")),(0,o.kt)("p",null,"Linux users should run the command line update for the package manager, prior to installation."),(0,o.kt)("h2",{id:"supported-environments"},"Supported Environments"),(0,o.kt)("p",null,"The OpenBB Platform is installed within a Python virtual environment. It is compatible with versions of Python between 3.8 and 3.11, inclusively. The method for creating the environment will be a matter of user preference, from the command line - ",(0,o.kt)("a",{parentName:"p",href:"https://docs.conda.io/projects/miniconda/en/latest/miniconda-install.html"},"Conda"),", ",(0,o.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/venv.html"},"venv"),", etc. - or in a code editor and IDE - ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/languages/python"},"VS Code"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/pycharm/"},"PyCharm"),", ",(0,o.kt)("a",{parentName:"p",href:"https://jupyter.org/"},"Jupyter"),"."),(0,o.kt)("p",null,"If you're interested in using the ",(0,o.kt)("a",{parentName:"p",href:"/platform/installation#docker"},"Docker")," container, skip ahead to the specific section ",(0,o.kt)("a",{parentName:"p",href:"/platform/installation#docker"},"below"),"."),(0,o.kt)("p",null,"For those new to Python, ",(0,o.kt)("a",{parentName:"p",href:"https://www.infoworld.com/article/3306656/python-virtualenv-and-venv-dos-and-donts.html"},"this article")," shares some tips on getting started and why environments are important."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/python/environments"},"this guide")," for creating a Python environment in VS Code."),(0,o.kt)("p",null,"With the environment created, and activated, begin the installation process."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Before installation, update the package manager so that ",(0,o.kt)("inlineCode",{parentName:"p"},"pip")," is current, then create the environment with the desired version of Python."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Installing packages directly to the system Python or ",(0,o.kt)("inlineCode",{parentName:"p"},"base")," environment is not recommended.  Create a new environment first (can be any name, using openbb here for example)."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"conda create -n openbb python=3.11\nconda activate openbb\n"))),(0,o.kt)("h3",{id:"pypi"},"PyPI"),(0,o.kt)("p",null,"Install from PyPI with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"pip install openbb\n")),(0,o.kt)("p",null,"This will install the core OpenBB Platform, along with officially supported extensions and providers."),(0,o.kt)("p",null,"To install all extensions and providers (both officially supported and community maintained ones):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"pip install openbb[all]\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In a macOS ",(0,o.kt)("inlineCode",{parentName:"p"},"zsh")," Terminal shell, add quotation marks around the library name."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},'"openbb[all]"'))),(0,o.kt)("p",null,"To install a single extension:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"pip install openbb[charting]\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"pip install openbb[ta]\n")),(0,o.kt)("p",null,"Or install a single provider:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"pip install openbb[yfinance]\n")),(0,o.kt)("p",null,"To install the Nightly distribution (this installs all extras by default):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"pip install openbb-nightly\n")),(0,o.kt)("p",null,"From your python interpreter, import the OpenBB Platform:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"from openbb import obb\n")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This import statement is required due to the statefulness of the obb package.  There is currently no support for imports such as"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"from openbb.obb.equity import *\n"))),(0,o.kt)("p",null,"When the package is imported, any installed extensions will be discovered, imported and available for use."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Currently if you wish to have the bare-bones openbb package with no extensions or providers, you can install with:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"pip install openbb-core && pip install openbb --no-deps\n"))),(0,o.kt)("h3",{id:"docker"},"Docker"),(0,o.kt)("p",null,"OpenBB provides a ",(0,o.kt)("inlineCode",{parentName:"p"},".dockerfile")," on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal"},"GitHub"),"."),(0,o.kt)("p",null,"Run the following command from the repo root to build the image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -f build/docker/api.dockerfile -t openbb-platform:latest .\n")),(0,o.kt)("p",null,"To run it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -p 8000:8000 -v ~/.openbb_platform:/root/.openbb_platform openbb-platform:latest\n")),(0,o.kt)("p",null,"This will mount the local ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.openbb_platform")," directory into the Docker container to use with the API keys and preferences from there, and it will expose the API on port ",(0,o.kt)("inlineCode",{parentName:"p"},"8000"),"."),(0,o.kt)("h3",{id:"source"},"Source"),(0,o.kt)("p",null,"To build the OpenBB Platform from the source code, first install ",(0,o.kt)("inlineCode",{parentName:"p"},"git"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"pip install git\n")),(0,o.kt)("p",null,"Next, clone the repository from GitHub:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"git clone git@github.com:OpenBB-finance/OpenBBTerminal.git\n")),(0,o.kt)("p",null,"When it is done, checkout the branch where the code is living:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"git checkout develop\n")),(0,o.kt)("p",null,"Then, ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," into the directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"cd openbb_platform\n")),(0,o.kt)("p",null,"Install required packages"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"pip install poetry toml\n")),(0,o.kt)("p",null,"Finally, run the developer installation script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"python dev_install.py\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"To install all extensions and providers, run: ",(0,o.kt)("inlineCode",{parentName:"p"},"python dev_install.py -e"))),(0,o.kt)("h2",{id:"post-installation"},"Post-Installation"),(0,o.kt)("p",null,"With a fresh installation, and upon installing or uninstalling extensions, the Python interface needs to be built.  This is done automatically, but can be manually triggered if required. Start a Python session and then ",(0,o.kt)("inlineCode",{parentName:"p"},"import openbb"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"python\n\nfrom openbb import obb\n\nexit()\n")),(0,o.kt)("p",null,"To manually trigger the build:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import openbb\nopenbb.build()\n")),(0,o.kt)("p",null,"Restart the Python interpreter and then begin using the OpenBB Platform."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from openbb import obb\n")),(0,o.kt)("p",null,"Start the REST API with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"uvicorn openbb_core.api.rest_api:app --host 0.0.0.0 --port 8000 --reload\n")),(0,o.kt)("p",null,"See more information about using the REST API in the ",(0,o.kt)("a",{parentName:"p",href:"/platform/usage/rest_api"},"usage section")),(0,o.kt)("h2",{id:"hub-synchronization"},"Hub Synchronization"),(0,o.kt)("p",null,"Once you have installed the OpenBB Platform with the desired providers and extensions, you can synchronize with the ",(0,o.kt)("a",{parentName:"p",href:"my.openbb.co"},"OpenBB Hub"),". The main benefit of this is that you can use your single login to access your saved credentials and preferences from any instance. To login, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"login")," method, either using your email and password:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"obb.account.login(email='my_email_here', password='my_password_here')\n")),(0,o.kt)("p",null,"Or using your personal access token:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"obb.account.login(pat='my_pat_here')\n")),(0,o.kt)("h2",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"The documentation and packages are kept in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/website")," folder, at the base of the repository. Navigate there to install the dependencies and start the development server."),(0,o.kt)("h3",{id:"nodejs"},"Node.js"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js")," >= 16.13.0\nTo check if Node.js installed, run this command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node --version # should be v16.13.0 or higher\n")),(0,o.kt)("h4",{id:"install-dependencies"},"Install Dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,o.kt)("h4",{id:"start-development-server"},"Start Development Server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,o.kt)("p",null,"This starts a local development server at: ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")),(0,o.kt)("p",null,"Most changes are reflected live without having to restart the server."),(0,o.kt)("h4",{id:"build"},"Build"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,o.kt)("p",null,"This command generates static content into the ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," directory and can be served using any static contents hosting service. OpenBB uses Github Pages to host our website, it's deployed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"gh-pages")," branch."))}d.isMDXComponent=!0}}]);