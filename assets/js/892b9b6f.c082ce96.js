"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1173],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,k=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(k,r(r({ref:t},c),{},{components:n})):o.createElement(k,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3462:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(7462),i=(n(7294),n(3905));const a={description:"Booster uses the OAuth 2.0 protocol to authenticate users. This section explains how to configure it."},r="Authentication",s={unversionedId:"security/authentication",id:"security/authentication",title:"Authentication",description:"Booster uses the OAuth 2.0 protocol to authenticate users. This section explains how to configure it.",source:"@site/docs/04_security/01_authentication.md",sourceDirName:"04_security",slug:"/security/authentication",permalink:"/security/authentication",draft:!1,editUrl:"https://github.com/boostercloud/booster/tree/main/website/docs/04_security/01_authentication.md",tags:[],version:"current",lastUpdatedBy:"Nick Tchayka",lastUpdatedAt:1678450340,formattedLastUpdatedAt:"Mar 10, 2023",sidebarPosition:1,frontMatter:{description:"Booster uses the OAuth 2.0 protocol to authenticate users. This section explains how to configure it."},sidebar:"docs",previous:{title:"Security",permalink:"/security/security"},next:{title:"Authorization",permalink:"/security/authorization"}},l={},u=[{value:"Configuring the authentication provider",id:"configuring-the-authentication-provider",level:2},{value:"JWKS URI glossary",id:"jwks-uri-glossary",level:3},{value:"Public key based authentication",id:"public-key-based-authentication",level:2},{value:"Custom authentication",id:"custom-authentication",level:2},{value:"Extend existing token verifiers",id:"extend-existing-token-verifiers",level:3},{value:"Advanced authentication",id:"advanced-authentication",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"Booster uses the OAuth 2.0 protocol to authenticate users. That means that it uses tokens to identify users and authorize them. These tokens are called ",(0,i.kt)("em",{parentName:"p"},"access tokens")," and are issued by an ",(0,i.kt)("em",{parentName:"p"},"authentication provider"),". The most common authentication provider is ",(0,i.kt)("a",{parentName:"p",href:"https://auth0.com/"},"Auth0"),", but you can use any other provider that supports OAuth 2.0."),(0,i.kt)("h2",{id:"configuring-the-authentication-provider"},"Configuring the authentication provider"),(0,i.kt)("p",null,"The first step to configure authentication in Booster is to configure the authentication provider. The provider must support OAuth 2.0 and must be able to issue ",(0,i.kt)("em",{parentName:"p"},"access tokens"),". In order to validate incoming tokens and make sure that user requests come from trustable origins, you need to provide one or more ",(0,i.kt)("inlineCode",{parentName:"p"},"TokenVerifier")," instances at config time for each of your environments."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"TokenVerifier")," class is a simple interface that you can implement to define your own token verifiers. Booster provides a ",(0,i.kt)("inlineCode",{parentName:"p"},"JwksUriTokenVerifier")," class that you can use to configure a JWT token verifier. The ",(0,i.kt)("inlineCode",{parentName:"p"},"JwksUriTokenVerifier")," constructor accepts the following parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"issuer"),": The issuer of the tokens. This is a mandatory parameter. This is commonly found in the token payload under the ",(0,i.kt)("inlineCode",{parentName:"li"},"iss")," key."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jwksUri"),": The URL of the JSON Web Key Set (JWKS) that contains the public keys used to verify the tokens. This is a mandatory parameter. You can find more information about JWKS ",(0,i.kt)("a",{parentName:"li",href:"https://auth0.com/docs/jwks"},"here"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rolesClaim"),": The name of the claim that contains the user roles. This is an optional parameter. If not provided, the ",(0,i.kt)("inlineCode",{parentName:"li"},"roles")," claim will be used. This is commonly found in the token payload under the ",(0,i.kt)("inlineCode",{parentName:"li"},"roles")," key.")),(0,i.kt)("p",null,"Here is an example of how to configure a ",(0,i.kt)("inlineCode",{parentName:"p"},"JwksUriTokenVerifier"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/config/config.ts"',title:'"src/config/config.ts"'},"import { Booster, JwksUriTokenVerifier } from '@boostercloud/framework-core'\nimport { BoosterConfig } from '@boostercloud/framework-types'\n\nBooster.configure('production', (config: BoosterConfig): void => {\n  config.appName = 'app-name'\n  config.providerPackage = '@boostercloud/framework-provider-x'\n  config.tokenVerifiers = [\n      new JwksUriTokenVerifier(\n        'https://my-auth0-tenant.auth0.com/', // Issuer\n        'https://my-auth0-tenant.auth0.com/.well-known/jwks.json', // JWKS URL\n        'role' // Roles claim\n      ),\n    ])\n})\n")),(0,i.kt)("admonition",{title:"JWK Verifier",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"One common way to validate JWT tokens is by using a issuer-provided well-known URI on which you can find their ",(0,i.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7517"},"JSON Web Key")," sets (JWKS). If you use this method, you only need to provide the issuer's name, the JWKS URI and, if you're using role-based authentication, an optional ",(0,i.kt)("inlineCode",{parentName:"p"},"rolesClaim")," option that sets the claim from which Booster will read the role names.")),(0,i.kt)("h3",{id:"jwks-uri-glossary"},"JWKS URI glossary"),(0,i.kt)("p",null,"Here you can find a list of the most common authentication providers and their corresponding issuer, JWKS URI and roles claim:"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The issuer and JWKS URI may change depending on the region you're using. Please check the provider's documentation to find the correct values for your use case."),(0,i.kt)("p",{parentName:"admonition"},"The following list is not exhaustive and the information may be deprecated. If you want to add a new provider, or update an existing one, please open a PR to have this content up to date.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Provider"),(0,i.kt)("th",{parentName:"tr",align:null},"Issuer"),(0,i.kt)("th",{parentName:"tr",align:null},"JWKS URI"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Auth0"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://<your-tenant>.auth0.com/")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://<your-tenant>.auth0.com/.well-known/jwks.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AWS Cognito"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://cognito-idp.<region>.amazonaws.com/<user-pool-id>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://cognito-idp.<region>.amazonaws.com/<user-pool-id>/.well-known/jwks.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Okta"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://<your-tenant>.okta.com/oauth2/default")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://<your-tenant>.okta.com/oauth2/default/v1/keys"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Google"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://accounts.google.com")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://www.googleapis.com/oauth2/v3/certs"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Firebase"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://accounts.google.com")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://www.googleapis.com/oauth2/v3/certs"))))),(0,i.kt)("h2",{id:"public-key-based-authentication"},"Public key based authentication"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"JwksUriTokenVerifier")," class uses the public key of the issuer to verify the token signature. This means that the issuer must provide a JWKS URI that can be used to verify the token signature. This is the most common way to verify tokens, but it's not the only one. If you want to use a different method, you can implement your own ",(0,i.kt)("inlineCode",{parentName:"p"},"TokenVerifier")," class."),(0,i.kt)("p",null,"This is useful when the token issuer doesn't provide a JWKS URI, when you're implementing your own authentication mechanism or you're issuing self-signed tokens."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/config/config.ts"',title:'"src/config/config.ts"'},"import { Booster, PublicKeyTokenVerifier } from '@boostercloud/framework-core'\nimport { BoosterConfig } from '@boostercloud/framework-types'\n\nfunction publicKeyResolver(): Promise<string> {\n  // Your implementation here\n}\n\nBooster.configure('production', (config: BoosterConfig): void => {\n  config.appName = 'app-name'\n  config.providerPackage = '@boostercloud/framework-provider-x'\n  config.tokenVerifiers = [\n    new PublicKeyTokenVerifier(\n      'issuer-name', // Issuer name\n      publicKeyResolver(), // Promise that resolves to the public key string\n      'custom:roles' // Name of the claim to read the roles from (if you're using role-based authorization)\n    ),\n  ]\n})\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Notice that the ",(0,i.kt)("inlineCode",{parentName:"p"},"publicKeyResolver")," is a promise that resolves to a string, so it can be used to load the public key from a remote location too (i.e. get it from your KMS).")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you need to handle private keys in production, consider using a KMS ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Key_management#Key_storage"},"(Key Management System)"),". These systems often provide API endpoints that let you encrypt/sign your JWT tokens without exposing the private keys. The public keys can be set in a ",(0,i.kt)("inlineCode",{parentName:"p"},"PublicKeyTokenVerifier")," to automate verification.")),(0,i.kt)("h2",{id:"custom-authentication"},"Custom authentication"),(0,i.kt)("p",null,"If you want to implement your own authentication mechanism, you can implement your own ",(0,i.kt)("inlineCode",{parentName:"p"},"TokenVerifier")," class. This class must implement the following interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface TokenVerifier {\n  /**\n   * Verify asd deserialize a stringified token with this token verifier.\n   * @param token The token to verify\n   */\n  verify(token: string): Promise<DecodedToken>\n\n  /**\n   * Build a valid `UserEnvelope` from a decoded token.\n   * @param decodedToken The decoded token\n   */\n  toUserEnvelope(decodedToken: DecodedToken): UserEnvelope\n}\n")),(0,i.kt)("p",null,"Here is an example of how to implement a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"TokenVerifier"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/config/config.ts"',title:'"src/config/config.ts"'},"import { Booster, TokenVerifier } from '@boostercloud/framework-core'\nimport { BoosterConfig, DecodedToken, TokenVerifier, UserEnvelope } from '@boostercloud/framework-types'\n\nclass CustomTokenVerifier implements TokenVerifier {\n  public async verify(token: string): Promise<DecodedToken> {\n    // Your custom token verification logic here\n  }\n\n  public toUserEnvelope(decodedToken: DecodedToken): UserEnvelope {\n    // Your custom logic to build a UserEnvelope from a decoded token here\n  }\n}\n\nBooster.configure('production', (config: BoosterConfig): void => {\n  config.appName = 'app-name'\n  config.providerPackage = '@boostercloud/framework-provider-x'\n  config.tokenVerifiers = [new CustomTokenVerifier()]\n})\n")),(0,i.kt)("p",null,"Some use cases for this could be to check that the token was generated specifically for your service by inspecting the ",(0,i.kt)("inlineCode",{parentName:"p"},"aud")," claim, or check that the token has not been blacklisted or invalidated by your business logic (i.e. a user logs out before the token's expiration date and is included in an invalidated tokens list to make sure that an attacker that finds the token later can't use it to impersonate the legitimate owner)."),(0,i.kt)("h3",{id:"extend-existing-token-verifiers"},"Extend existing token verifiers"),(0,i.kt)("p",null,"If you only need to perform extra validations on top of one of the existing ",(0,i.kt)("inlineCode",{parentName:"p"},"TokenVerifier"),"s, you can extend one of the default implementations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export class CustomValidator extends PrivateKeyValidator {\n  public async verify(token: string): Promise<UserEnvelope> {\n    // Call to the PrivateKeyValidator verify method to check the signature\n    const userEnvelope = await super.verify(token)\n\n    // Do my extra validations here. Throwing an error will reject the token\n    await myExtraValidations(userEnvelope.claims, token)\n\n    return userEnvelope\n  }\n}\n")),(0,i.kt)("h3",{id:"advanced-authentication"},"Advanced authentication"),(0,i.kt)("p",null,"If you need to do more advanced checks, you can implement the whole verification algorithm yourself. For example, if you're using non-standard or legacy tokens. Booster exposes for convenience many of the utility functions that it uses in the default ",(0,i.kt)("inlineCode",{parentName:"p"},"TokenVerifier")," implementations:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Function"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"getJwksClient")),(0,i.kt)("td",{parentName:"tr",align:null},"Initializes a jwksRSA client that can be used to get the public key of a JWKS URI using the ",(0,i.kt)("inlineCode",{parentName:"td"},"getKeyWithClient")," function.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"getKeyWithClient")),(0,i.kt)("td",{parentName:"tr",align:null},"Initializes a function that can be used to get the public key from a JWKS URI with the signature required by the ",(0,i.kt)("inlineCode",{parentName:"td"},"verifyJWT")," function. You can create a client using the ",(0,i.kt)("inlineCode",{parentName:"td"},"getJwksClient")," function.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"verifyJWT")),(0,i.kt)("td",{parentName:"tr",align:null},"Verifies a JWT token using a key or key resolver function and returns a Booster UserEnvelope.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * Initializes a jwksRSA client that can be used to get the public key of a JWKS URI using the\n * `getKeyWithClient` function.\n */\nexport function getJwksClient(jwksUri: string) {\n  ...\n}\n\n/**\n * Initializes a function that can be used to get the public key from a JWKS URI with the signature\n * required by the `verifyJWT` function. You can create a client using the `getJwksClient` function.\n */\nexport function getKeyWithClient(\n  client: jwksRSA.JwksClient,\n  header: jwt.JwtHeader,\n  callback: jwt.SigningKeyCallback\n): void {\n  ...\n}\n\n/**\n * Verifies a JWT token using a key or key resolver function and returns a Booster UserEnvelope.\n */\nexport async function verifyJWT(\n  token: string,\n  issuer: string,\n  key: jwt.Secret | jwt.GetPublicKeyOrSecret,\n  rolesClaim?: string\n): Promise<UserEnvelope> {\n ...\n}\n")))}p.isMDXComponent=!0}}]);