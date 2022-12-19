"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[464],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={description:"Learn how to migrate data in Booster"},o="Migrations",s={unversionedId:"features/data-migrations",id:"features/data-migrations",title:"Migrations",description:"Learn how to migrate data in Booster",source:"@site/docs/03_features/03_data-migrations.md",sourceDirName:"03_features",slug:"/features/data-migrations",permalink:"/features/data-migrations",draft:!1,editUrl:"https://github.com/boostercloud/booster/tree/main/website/docs/03_features/03_data-migrations.md",tags:[],version:"current",lastUpdatedBy:"Javier Toledo",lastUpdatedAt:1671477786,formattedLastUpdatedAt:"Dec 19, 2022",sidebarPosition:3,frontMatter:{description:"Learn how to migrate data in Booster"},sidebar:"docs",previous:{title:"Error handling",permalink:"/features/error-handling"},next:{title:"Testing",permalink:"/features/testing"}},l={},c=[{value:"Schema migrations",id:"schema-migrations",level:2},{value:"Data migrations",id:"data-migrations",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"migrations"},"Migrations"),(0,a.kt)("h2",{id:"schema-migrations"},"Schema migrations"),(0,a.kt)("p",null,"Booster handles classes annotated with ",(0,a.kt)("inlineCode",{parentName:"p"},"@Migrates")," as ",(0,a.kt)("strong",{parentName:"p"},"Schema migrations"),". The migration process will update an existing object\nfrom one version to the next one."),(0,a.kt)("p",null,"For example, to migrate a ",(0,a.kt)("inlineCode",{parentName:"p"},"Product")," entity from version 1 to version 2 we need the following migration class:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Migrates(Product)\nexport class ProductMigration {\n  @ToVersion(2, { fromSchema: ProductV1, toSchema: ProductV2 })\n  public async changeNameFieldToDisplayName(old: ProductV1): Promise<ProductV2> {\n    return new ProductV2(\n      old.id,\n      old.sku,\n      old.name,\n      old.description,\n      old.price,\n      old.pictures,\n      old.deleted\n    )\n  }\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ProductV1")," class is the old version of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Product")," object. You can keep your old clases in the same migration file, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class ProductV1 {\n  public constructor(\n    public id: UUID,\n    readonly sku: string,\n    readonly name: string,\n    readonly description: string,\n    readonly price: Money,\n    readonly pictures: Array<Picture>,\n    public deleted: boolean = false\n  ) {}\n}\n\nclass ProductV2 extends Product {}\n")),(0,a.kt)("h2",{id:"data-migrations"},"Data migrations"),(0,a.kt)("p",null,"The decorator ",(0,a.kt)("inlineCode",{parentName:"p"},"@DataMigration")," will indicate ",(0,a.kt)("strong",{parentName:"p"},"Booster")," that this class contains data migration code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@DataMigration({\n  order: 2,\n})\n")),(0,a.kt)("p",null,"When the method ",(0,a.kt)("inlineCode",{parentName:"p"},"BoosterDataMigrations.run()")," is call by the user, a new ",(0,a.kt)("inlineCode",{parentName:"p"},"BoosterDataMigrationStarted")," event is emitted and ",(0,a.kt)("strong",{parentName:"p"},"Booster"),"\nwill check if there are pending migrations and, if so, run them in the order specified by the ",(0,a.kt)("inlineCode",{parentName:"p"},"order")," value."),(0,a.kt)("p",null,"User should emit ",(0,a.kt)("inlineCode",{parentName:"p"},"BoosterDataMigrationFinished")," manually at the end of each ",(0,a.kt)("inlineCode",{parentName:"p"},"DataMigration.start")," method."),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"@DataMigration")," classes, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"Booster.migrateEntity")," method. This method will generate an internal event ",(0,a.kt)("inlineCode",{parentName:"p"},"BoosterEntityMigrated")," before migrating the entity data."),(0,a.kt)("p",null,"This method will receive the old entity name, the old entity id and the new entity that we will be persisted. This way, you can migrate an entity id or rename it."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@DataMigration({\n  order: 2,\n})\nexport class CartIdDataMigrateV2 {\n  public constructor() {}\n\n\n  public static async start(register: Register): Promise<void> {\n    const entitiesIdsResult = await Booster.entitiesIDs('Cart', 500, undefined)\n    const paginatedEntityIdResults = entitiesIdsResult.items\n\n    const carts = await Promise.all(\n      paginatedEntityIdResults.map(async (entity) => await Booster.entity(Cart, entity.entityID))\n    )\n    return await Promise.all(\n        carts.map(async (cart) => {\n          cart.cartItems[0].quantity = 100\n          const newCart = new Cart(cart.id, cart.cartItems, cart.shippingAddress, cart.checks)\n          await Booster.migrateEntity('Cart', validCart.id, newCart)\n          return validCart.id\n      })\n    )\n\n    register.events(new BoosterDataMigrationFinished('CartIdDataMigrateV2'))\n  }\n}\n")))}p.isMDXComponent=!0}}]);