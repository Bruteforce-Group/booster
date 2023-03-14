"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2538],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6036:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},i="Create custom providers",s={unversionedId:"going-deeper/custom-providers",id:"going-deeper/custom-providers",title:"Create custom providers",description:"Booster provides an infrastructure layer out of the box with sensible defaults that you can use for rapid development, but if",source:"@site/docs/10_going-deeper/custom-providers.mdx",sourceDirName:"10_going-deeper",slug:"/going-deeper/custom-providers",permalink:"/going-deeper/custom-providers",draft:!1,editUrl:"https://github.com/boostercloud/booster/tree/main/website/docs/10_going-deeper/custom-providers.mdx",tags:[],version:"current",lastUpdatedBy:"Juan Sagasti",lastUpdatedAt:1678819351,formattedLastUpdatedAt:"Mar 14, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Configuring Infrastructure Providers",permalink:"/going-deeper/infrastructure-providers"},next:{title:"Extending Booster with Rockets!",permalink:"/going-deeper/rockets"}},l={},c=[{value:"How do Booster cloud providers work?",id:"how-do-booster-cloud-providers-work",level:2},{value:"The infrastructure interface in detail",id:"the-infrastructure-interface-in-detail",level:2},{value:"The runtime interface in detail",id:"the-runtime-interface-in-detail",level:2},{value:"Events",id:"events",level:3},{value:"Read Models",id:"read-models",level:3},{value:"GraphQL",id:"graphql",level:3},{value:"API responses",id:"api-responses",level:3},{value:"Connections",id:"connections",level:3},{value:"Scheduled",id:"scheduled",level:3},{value:"Tips for developing custom providers",id:"tips-for-developing-custom-providers",level:2}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-custom-providers"},"Create custom providers"),(0,o.kt)("p",null,"Booster provides an infrastructure layer out of the box with sensible defaults that you can use for rapid development, but if\nyou want to have control over the infrastructure deployed to your cloud provider or start from scratch with a fully customized\ninfrastructure implementation. Booster layered architecture allows you to do so by implementing a provider package. "),(0,o.kt)("h2",{id:"how-do-booster-cloud-providers-work"},"How do Booster cloud providers work?"),(0,o.kt)("p",null,"Booster providers require the implementation of two specific interfaces, often delivered as separate packages to avoid including dependencies required at\ndeployment time as part of your application package: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Infrastructure:")," This interface is used during deployment to create, destroy and configurate all the infrastructure necessary to run the application. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Runtime:")," This inteface implements all the interaction between Booster framework and the deployed infrastructure in runtime. ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"architecture",src:r(6658).Z,width:"737",height:"441"})),(0,o.kt)("h2",{id:"the-infrastructure-interface-in-detail"},"The infrastructure interface in detail"),(0,o.kt)("p",null,"The provider infrastructure interface by convention is implemented in a package ending with ",(0,o.kt)("inlineCode",{parentName:"p"},"-infrastructure")," name like the ",(0,o.kt)("inlineCode",{parentName:"p"},"framework-provider-aws-infrastructure"),".",(0,o.kt)("br",{parentName:"p"}),"\n","As it has been commented, this package includes all the necessary to deploy and configure cloud elements for running your application. For instance in the case of AWS,\nthis package is in charge of deploy the DynamoDB for your event store, create all the lambdas, and configure all the API gateway configuration for your application."),(0,o.kt)("p",null,"The infrastructure package interface is composed of four methods:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"    export interface ProviderInfrastructure {\n      deploy?: (config: BoosterConfig) => Promise<void>\n      nuke?: (config: BoosterConfig) => Promise<void>\n      start?: (config: BoosterConfig, port: number) => Promise<void>\n      synth?: (config: BoosterConfig) => Promise<void>\n    }\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"deploy"),": This method is called during the deployment by the CLI and it should be in charge to deploy all the neccesary resource for your application and rockets. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"nuke"),": This is method is charge of destroy all generated resources during the deploy and it is called during the nuke process. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"start"),": This method is used when the provider implements a server that needs to be started (i.e. the local provider)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"synth"),": This method allows you to export the infrastructure to a file (for instance, if you use the Terraform CDK, you can export the script here to run it using conventional terraform tools)")),(0,o.kt)("p",null,"The infrastructure interface just defines an adapter for Booster so the framework knows how to start any of the described processes, but you can use any Infrastructure as Code tool that has a Typescript DSL (CDK)\nor even call other CLI tools or scripts if you rather maintain it using a different technology."),(0,o.kt)("h2",{id:"the-runtime-interface-in-detail"},"The runtime interface in detail"),(0,o.kt)("p",null,"The other key aspect during the implementation of a provider is the runtime package. This package is in charge of the interaction between Booster framework and all deployed resources when the application is running.\nFor instance, this package has the responsability to store data in the event store, performs the data projections, etc..."),(0,o.kt)("p",null,"The runtime interface (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/boostercloud/booster/blob/main/packages/framework-types/src/provider.ts"},"ProviderLibrary"),") is divided in seven sections:"),(0,o.kt)("h3",{id:"events"},"Events"),(0,o.kt)("p",null,"This section is in charge of all operations related to events. the methods of this section are the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ProviderEventsLibrary {\n  rawToEnvelopes(rawEvents: unknown): Array<EventEnvelope>\n  forEntitySince(config: BoosterConfig, entityTypeName: string, entityID: UUID, since?: string): Promise<Array<EventEnvelope>>\n  latestEntitySnapshot(config: BoosterConfig, entityTypeName: string, entityID: UUID): Promise<EventEnvelope | null>\n  search(config: BoosterConfig, parameters: EventSearchParameters): Promise<Array<EventSearchResponse>>\n  store(eventEnvelopes: Array<EventEnvelope>, config: BoosterConfig): Promise<void>\n  searchEntitiesIDs(config: BoosterConfig, limit: number, afterCursor: Record<string, string> | undefined, entityTypeName: string): Promise<PaginatedEntitiesIdsResult>\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"rawToEnvelopes:")," Inside the framework all user application data is processed encapsulated in an envelope object. This particular function performs the transformation from the used database data into a Booster framework envelope object."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"forEntitySince:")," This method have to returns all the events associated with an specific entity."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"latestEntitySnapshot:")," With this method the framework should be able to obtains the latest snapshot for an specific entity."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"search:")," This method receives a query and it should perform it in the database used by the provider and return the result. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"store:")," This method is used to store new events in the database. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"searchEntitiesIDs:")," This method is used for implementing the pagination in searches. ")),(0,o.kt)("h3",{id:"read-models"},"Read Models"),(0,o.kt)("p",null,"This section of the interface provides to the framework the ability to interact with the database to manage read models thanks to the following methods:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ProviderReadModelsLibrary {\n  rawToEnvelopes(config: BoosterConfig, rawEvents: unknown): Promise<Array<ReadModelEnvelope>>\n  fetch(config: BoosterConfig, readModelName: string, readModelID: UUID, sequenceKey?: SequenceKey): Promise<ReadOnlyNonEmptyArray<ReadModelInterface>>\n  search<TReadModel extends ReadModelInterface>(config: BoosterConfig, entityTypeName: string, filters: FilterFor<unknown>, sortBy?: SortFor<unknown>, limit?: number, afterCursor?: unknown, paginatedVersion?: boolean): Promise<Array<TReadModel> | ReadModelListResult<TReadModel>>\n  store(config: BoosterConfig, readModelName: string, readModel: ReadModelInterface, expectedCurrentVersion?: number): Promise<unknown>\n  delete(config: BoosterConfig, readModelName: string, readModel: ReadModelInterface | undefined): Promise<any>\n  subscribe(config: BoosterConfig, subscriptionEnvelope: SubscriptionEnvelope): Promise<void>\n  fetchSubscriptions(config: BoosterConfig, subscriptionName: string): Promise<Array<SubscriptionEnvelope>>\n  deleteSubscription(config: BoosterConfig, connectionID: string, subscriptionID: string): Promise<void>\n  deleteAllSubscriptions(config: BoosterConfig, connectionID: string): Promise<void>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"rawToEnvelopes:")," This method is used to transform all database data into read models envelopes. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"fetch:")," Fetch a specific read model from the database. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"search:")," This method receives a search query and it should return the read model search result."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"store:")," Save a new read model projection on the database. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"delete:")," Delete a read model from the database. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"subscribe:")," This method is used to susbcribe a client to an specific read model."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"fetchSubscriptions:")," Get the list of all clients subscribed to a specific read model."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"deleteSubscription:")," Delete a specific read model subscription."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"deleteAllSubscriptions:")," Delete all subscription for a specific read model. ")),(0,o.kt)("h3",{id:"graphql"},"GraphQL"),(0,o.kt)("p",null,"This section of the API provides all necessary to receive and return GraphQL query from client side and create the return for requests:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ProviderGraphQLLibrary {\n  rawToEnvelope(config: BoosterConfig, rawGraphQLRequest: unknown): Promise<GraphQLRequestEnvelope | GraphQLRequestEnvelopeError>\n  handleResult(result?: unknown, headers?: Record<string, string>): Promise<unknown>\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"rawToEnvelope:")," This method receives the request from the client with the GraphQL query and it should return the envelope object for the GraphQL query"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"handleResult")," This method receives the GraphQL results and it should return the response object for the client.")),(0,o.kt)("h3",{id:"api-responses"},"API responses"),(0,o.kt)("p",null,"General API response management:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ProviderAPIHandling {\n  requestSucceeded(body?: unknown, headers?: Record<string, number | string | ReadonlyArray<string>>): Promise<unknown>\n  requestFailed(error: Error): Promise<unknown>\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"requestSucceeded:")," This is a general method for processing sucess responses."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"requestFailed:")," This is a general method for processing error responses.")),(0,o.kt)("h3",{id:"connections"},"Connections"),(0,o.kt)("p",null,"This section of the API is in charge of the connection management for subscription at API gateway level:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ProviderConnectionsLibrary {\n  storeData(config: BoosterConfig, connectionID: string, data: ConnectionDataEnvelope): Promise<void>\n  fetchData(config: BoosterConfig, connectionID: string): Promise<ConnectionDataEnvelope | undefined>\n  deleteData(config: BoosterConfig, connectionID: string): Promise<void>\n  sendMessage(config: BoosterConfig, connectionID: string, data: unknown): Promise<void>\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"storeData:")," This method receives all the information about the incoming connection and it should store the data on a database. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"fetchData:")," Fetch the specific client connection information from the database."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"deleteData:")," Delete all the information about a specific client connection."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"sendMessage:")," Send a message to a specific client. This method get the message and destination as parameters and it should be able to fetch the connection information from the database and send the provided data to the client. ")),(0,o.kt)("h3",{id:"scheduled"},"Scheduled"),(0,o.kt)("p",null,"Finally, this section of the API is related to scheduled commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ScheduledCommandsLibrary {\n  rawToEnvelope(config: BoosterConfig, rawMessage: unknown): Promise<ScheduledCommandEnvelope>\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"rawToEnvelope:")," as in other sections, this method is in charge to transform the scheduled command into a framework envelope.")),(0,o.kt)("h2",{id:"tips-for-developing-custom-providers"},"Tips for developing custom providers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As a starting point, check the implementation of other providers to check how evertyhing is implemented. "),(0,o.kt)("li",{parentName:"ul"},"Start the provider implementation by the infrastructure package because you will get all the infrastructure deployed and later the work with the runtime API will be easier. "),(0,o.kt)("li",{parentName:"ul"},"If you need support during the development remember that you can have access to our ",(0,o.kt)("a",{parentName:"li",href:"https://discord.gg/bDY8MKx"},"Discord")," where some community members will can help you.")))}p.isMDXComponent=!0},6658:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/interface-5bfc32ae502ad2b8b916a0b553aa32e0.jpg"}}]);