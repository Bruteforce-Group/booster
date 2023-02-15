"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[274],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,h=s["".concat(d,".").concat(u)]||s[u]||m[u]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5163:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7294);const r="terminalWindow_wGrl",o="terminalWindowHeader_o9Cs",l="buttons_IGLB",i="dot_fGZE",d="terminalWindowBody_tzdS";function p(e){let{children:t}=e;return a.createElement("div",{className:r},a.createElement("div",{className:o},a.createElement("div",{className:l},a.createElement("span",{className:i,style:{background:"#f25f58"}}),a.createElement("span",{className:i,style:{background:"#fbbe3c"}}),a.createElement("span",{className:i,style:{background:"#58cb42"}}))),a.createElement("div",{className:d},t))}},5024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),o=n(5163);const l={},i="Booster CLI",d={unversionedId:"booster-cli",id:"booster-cli",title:"Booster CLI",description:"Booster CLI is a command line interface that helps you to create, develop, and deploy your Booster applications. It is built with Node.js and published to NPM through the package @boostercloud/cli . You can install it using any compatible package manager. If you want to contribute to the project, you will also need to clone the GitHub repository and compile the source code.",source:"@site/docs/05_booster-cli.mdx",sourceDirName:".",slug:"/booster-cli",permalink:"/booster-cli",draft:!1,editUrl:"https://github.com/boostercloud/booster/tree/main/website/docs/05_booster-cli.mdx",tags:[],version:"current",lastUpdatedBy:"Adri\xe1n Lorenzo",lastUpdatedAt:1676454929,formattedLastUpdatedAt:"Feb 15, 2023",sidebarPosition:5,frontMatter:{},sidebar:"docs",previous:{title:"GraphQL API",permalink:"/graphql"},next:{title:"Going deeper with Booster",permalink:"/category/going-deeper-with-booster"}},p={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Command Overview",id:"command-overview",level:2}],m={toc:c};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"booster-cli"},"Booster CLI"),(0,r.kt)("p",null,"Booster CLI is a command line interface that helps you to create, develop, and deploy your Booster applications. It is built with Node.js and published to NPM through the package ",(0,r.kt)("inlineCode",{parentName:"p"},"@boostercloud/cli")," . You can install it using any compatible package manager. If you want to contribute to the project, you will also need to clone the GitHub repository and compile the source code."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"The preferred way to install the Booster CLI is through NPM. You can install it following the instructions in the ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.js website"),"."),(0,r.kt)("p",null,"Once you have NPM installed, you can install the Booster CLI by running this command:"),(0,r.kt)(o.Z,{mdxType:"TerminalWindow"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g @boostercloud/cli\n"))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Once the installation is finished, you will have the ",(0,r.kt)("inlineCode",{parentName:"p"},"boost")," command available in your terminal. You can run it to see the help message."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can also run ",(0,r.kt)("inlineCode",{parentName:"p"},"boost --help")," to get the same output.")),(0,r.kt)("h2",{id:"command-overview"},"Command Overview"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#new"},(0,r.kt)("inlineCode",{parentName:"a"},"new:project"))),(0,r.kt)("td",{parentName:"tr",align:null},"Creates a new Booster project in a new directory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/architecture/command#creating-a-command"},(0,r.kt)("inlineCode",{parentName:"a"},"new:command"))),(0,r.kt)("td",{parentName:"tr",align:null},"Creates a new command in the project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/architecture/entity#creating-an-entity"},(0,r.kt)("inlineCode",{parentName:"a"},"new:entity"))),(0,r.kt)("td",{parentName:"tr",align:null},"Creates a new entity in the project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/architecture/event#creating-an-event"},(0,r.kt)("inlineCode",{parentName:"a"},"new:event"))),(0,r.kt)("td",{parentName:"tr",align:null},"Creates a new event in the project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/architecture/event-handler#creating-an-event-handler"},(0,r.kt)("inlineCode",{parentName:"a"},"new:event-handler"))),(0,r.kt)("td",{parentName:"tr",align:null},"Creates a new event handler in the project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/architecture/read-model#creating-a-read-model"},(0,r.kt)("inlineCode",{parentName:"a"},"new:read-model"))),(0,r.kt)("td",{parentName:"tr",align:null},"Creates a new read model in the project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/features/schedule-actions#creating-a-scheduled-command"},(0,r.kt)("inlineCode",{parentName:"a"},"new:scheduled-command"))),(0,r.kt)("td",{parentName:"tr",align:null},"Creates a new scheduled command in the project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/getting-started/coding#6-deployment"},(0,r.kt)("inlineCode",{parentName:"a"},"start -e <environment>"))),(0,r.kt)("td",{parentName:"tr",align:null},"Starts the project in development mode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/getting-started/coding#6-deployment"},(0,r.kt)("inlineCode",{parentName:"a"},"build"))),(0,r.kt)("td",{parentName:"tr",align:null},"Builds the project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/getting-started/coding#6-deployment"},(0,r.kt)("inlineCode",{parentName:"a"},"deploy -e <environment>"))),(0,r.kt)("td",{parentName:"tr",align:null},"Deploys the project to the cloud")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nuke")),(0,r.kt)("td",{parentName:"tr",align:null},"Deletes all the resources created by the deploy command")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0}}]);