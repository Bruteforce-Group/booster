"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3146],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,y=d["".concat(l,".").concat(f)]||d[f]||c[f]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2731:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},i="Frequently Asked Questions",s={unversionedId:"frequently-asked-questions",id:"frequently-asked-questions",title:"Frequently Asked Questions",description:'1.- When deploying my application in AWS for the first time, I got an error saying _"StagingBucket your app name -toolkit-bucket already exists"_',source:"@site/docs/11_frequently-asked-questions.md",sourceDirName:".",slug:"/frequently-asked-questions",permalink:"/frequently-asked-questions",draft:!1,editUrl:"https://github.com/boostercloud/booster/tree/main/website/docs/11_frequently-asked-questions.md",tags:[],version:"current",lastUpdatedBy:"Juan Sagasti",lastUpdatedAt:1678790136,formattedLastUpdatedAt:"Mar 14, 2023",sidebarPosition:11,frontMatter:{},sidebar:"docs",previous:{title:"Framework packages",permalink:"/going-deeper/framework-packages"},next:{title:"Contributing to Booster",permalink:"/contributing"}},l={},u=[],p={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.- When deploying my application in AWS for the first time, I got an error saying ",(0,o.kt)("em",{parentName:"strong"},'"StagingBucket your app name -toolkit-bucket already exists"'))),(0,o.kt)("p",null,"When you deploy a Booster application to AWS, an S3 bucket needs to be created to upload the application code. Booster names that bucket using your application name as a prefix. In AWS, bucket names must be unique ",(0,o.kt)("em",{parentName:"p"},"globally"),", so if there is another bucket in the world with exactly the same name as the one generated for your application, you will get this error."),(0,o.kt)("p",null,"The solution is to ",(0,o.kt)("strong",{parentName:"p"},"change your application name in the configuration file so that the bucket name is unique.")),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"2.- I tried following the video guide but the function ",(0,o.kt)("inlineCode",{parentName:"strong"},"Booster.fetchEntitySnapshot")," is not found in BoostApp.")),(0,o.kt)("p",null,"  The function ",(0,o.kt)("inlineCode",{parentName:"p"},"Booster.fetchEntitySnapshot")," was renamed to ",(0,o.kt)("inlineCode",{parentName:"p"},"Booster.entity"),", so please replace it when following old tutorials."))}c.isMDXComponent=!0}}]);