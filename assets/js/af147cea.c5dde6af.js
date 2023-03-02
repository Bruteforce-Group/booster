"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9996],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,u=d["".concat(c,".").concat(f)]||d[f]||m[f]||a;return t?n.createElement(u,i(i({ref:r},l),{},{components:t})):n.createElement(u,i({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5230:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const a={},i="Framework packages",p={unversionedId:"going-deeper/framework-packages",id:"going-deeper/framework-packages",title:"Framework packages",description:"The framework is already splitted into different packages:",source:"@site/docs/10_going-deeper/framework-packages.mdx",sourceDirName:"10_going-deeper",slug:"/going-deeper/framework-packages",permalink:"/going-deeper/framework-packages",draft:!1,editUrl:"https://github.com/boostercloud/booster/tree/main/website/docs/10_going-deeper/framework-packages.mdx",tags:[],version:"current",lastUpdatedBy:"Javier Toledo",lastUpdatedAt:1677791009,formattedLastUpdatedAt:"Mar 2, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Customizing CLI resource templates",permalink:"/going-deeper/custom-templates"},next:{title:"Frequently Asked Questions",permalink:"/frequently-asked-questions"}},c={},s=[{value:"Framework Core",id:"framework-core",level:2},{value:"Framework Types",id:"framework-types",level:2}],l={toc:s};function m(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"framework-packages"},"Framework packages"),(0,o.kt)("p",null,"The framework is already splitted into different packages:"),(0,o.kt)("h2",{id:"framework-core"},"Framework Core"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"framework-core")," package includes the most important components of the framework abstraction. It can be seen as skeleton or the main architecture of the framework."),(0,o.kt)("p",null,"The package defines the specification of how should a Booster application work without taking into account the specific providers that could be used. Every Booster provider package is based on the components that the framework core needs in order to work on the platform."),(0,o.kt)("h2",{id:"framework-types"},"Framework Types"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"framework-types")," packages includes the types that define the domain of the Booster framework. It defines domain concepts like an ",(0,o.kt)("inlineCode",{parentName:"p"},"Event"),", a ",(0,o.kt)("inlineCode",{parentName:"p"},"Command")," or a ",(0,o.kt)("inlineCode",{parentName:"p"},"Role"),"."))}m.isMDXComponent=!0}}]);