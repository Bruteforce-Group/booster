"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7557],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(t),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6635:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const i={},a="Environments",s={unversionedId:"going-deeper/environment-configuration",id:"going-deeper/environment-configuration",title:"Environments",description:"You can create multiple environments calling the Booster.configure function several times using different environment names as the first argument. You can create one file for each environment, but it is not required. In this example we set all environments in a single file:",source:"@site/docs/10_going-deeper/environment-configuration.mdx",sourceDirName:"10_going-deeper",slug:"/going-deeper/environment-configuration",permalink:"/going-deeper/environment-configuration",draft:!1,editUrl:"https://github.com/boostercloud/booster/tree/main/website/docs/10_going-deeper/environment-configuration.mdx",tags:[],version:"current",lastUpdatedBy:"Juan Sagasti",lastUpdatedAt:1678790136,formattedLastUpdatedAt:"Mar 14, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Going deeper with Booster",permalink:"/category/going-deeper-with-booster"},next:{title:"Advanced uses of the Register object",permalink:"/going-deeper/register"}},c={},p=[],l={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"environments"},"Environments"),(0,o.kt)("p",null,"You can create multiple environments calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"Booster.configure")," function several times using different environment names as the first argument. You can create one file for each environment, but it is not required. In this example we set all environments in a single file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// Here we use a single file called src/config.ts, but you can use separate files for each environment too.\nimport { Booster } from '@boostercloud/framework-core'\nimport { BoosterConfig } from '@boostercloud/framework-types'\n// A provider that deploys your app to AWS:\n\nBooster.configure('stage', (config: BoosterConfig): void => {\n  config.appName = 'fruit-store-stage'\n  config.providerPackage = '@boostercloud/framework-provider-aws'\n})\n\nBooster.configure('prod', (config: BoosterConfig): void => {\n  config.appName = 'fruit-store-prod'\n  config.providerPackage = '@boostercloud/framework-provider-aws'\n})\n")),(0,o.kt)("p",null,'It is also possible to place an environment configuration in a separated file. Let\'s say that a developer called "John" created its own configuration file ',(0,o.kt)("inlineCode",{parentName:"p"},"src/config/john.ts"),". The content would be the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Booster } from '@boostercloud/framework-core'\nimport { BoosterConfig } from '@boostercloud/framework-types'\nimport * as AWS from\n\nBooster.configure('john', (config: BoosterConfig): void => {\n  config.appName = 'john-fruit-store'\n  config.providerPackage = '@boostercloud/framework-provider-aws'\n})\n")),(0,o.kt)("p",null,"The environment name will be required by any command from the Booster CLI that depends on the provider. For instance, when you deploy your application, you'll need to specify on which environment you want to deploy it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"boost deploy -e prod\n")),(0,o.kt)("p",null,"This way, you can have different configurations depending on your needs."),(0,o.kt)("p",null,"Booster environments are extremely flexible. As shown in the first example, your 'fruit-store' app can have three team-wide environments: 'dev', 'stage', and 'prod', each of them with different app names or providers, that are deployed by your CI/CD processes. Developers, like \"John\" in the second example, can create their own private environments in separate config files to test their changes in realistic environments before committing them. Likewise, CI/CD processes could generate separate production-like environments to test different branches to perform QA in separate environments without interferences from other features under test."),(0,o.kt)("p",null,"The only thing you need to do to deploy a whole new completely-independent copy of your application is to use a different name. Also, Booster uses the credentials available in the machine (",(0,o.kt)("inlineCode",{parentName:"p"},"~/.aws/credentials")," in AWS) that performs the deployment process, so developers can even work on separate accounts than production or staging environments."))}u.isMDXComponent=!0}}]);