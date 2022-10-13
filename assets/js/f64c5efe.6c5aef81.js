"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[886],{3905:(e,o,r)=>{r.d(o,{Zo:()=>y,kt:()=>c});var a=r(7294);function t(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function s(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?s(Object(r),!0).forEach((function(o){t(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function n(e,o){if(null==e)return{};var r,a,t=function(e,o){if(null==e)return{};var r,a,t={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],o.indexOf(r)>=0||(t[r]=e[r]);return t}(e,o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=a.createContext({}),d=function(e){var o=a.useContext(p),r=o;return e&&(r="function"==typeof e?e(o):i(i({},o),e)),r},y=function(e){var o=d(e.components);return a.createElement(p.Provider,{value:o},e.children)},l={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},m=a.forwardRef((function(e,o){var r=e.components,t=e.mdxType,s=e.originalType,p=e.parentName,y=n(e,["components","mdxType","originalType","parentName"]),m=d(r),c=t,u=m["".concat(p,".").concat(c)]||m[c]||l[c]||s;return r?a.createElement(u,i(i({ref:o},y),{},{components:r})):a.createElement(u,i({ref:o},y))}));function c(e,o){var r=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var s=r.length,i=new Array(s);i[0]=m;var n={};for(var p in o)hasOwnProperty.call(o,p)&&(n[p]=o[p]);n.originalType=e,n.mdxType="string"==typeof e?e:t,i[1]=n;for(var d=2;d<s;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4111:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>n,toc:()=>d});var a=r(7462),t=(r(7294),r(3905));const s={sidebar_position:4},i="Typescript",n={unversionedId:"api/typescript",id:"api/typescript",title:"Typescript",description:"Even though zodios is written in typescript, you can use it with javascript. However, if you are using typescript, you can benefit from the typescript type helpers.",source:"@site/docs/api/typescript.md",sourceDirName:"api",slug:"/api/typescript",permalink:"/docs/api/typescript",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"OpenAPI",permalink:"/docs/api/openapi"},next:{title:"Examples",permalink:"/docs/api/examples"}},p={},d=[{value:"<code>ApiOf</code>",id:"apiof",level:2},{value:"<code>ZodiosBodyByPath</code>",id:"zodiosbodybypath",level:2},{value:"<code>ZodiosBodyByAlias</code>",id:"zodiosbodybyalias",level:2},{value:"<code>ZodiosHeaderParamsByPath</code>",id:"zodiosheaderparamsbypath",level:2},{value:"<code>ZodiosHeaderParamsByAlias</code>",id:"zodiosheaderparamsbyalias",level:2},{value:"<code>ZodiosPathParams</code>",id:"zodiospathparams",level:2},{value:"<code>ZodiosPathParamByAlias</code>",id:"zodiospathparambyalias",level:2},{value:"<code>ZodiosResponseByPath</code>",id:"zodiosresponsebypath",level:2},{value:"<code>ZodiosResponseByAlias</code>",id:"zodiosresponsebyalias",level:2},{value:"<code>ZodiosQueryParamsByPath</code>",id:"zodiosqueryparamsbypath",level:2},{value:"<code>ZodiosQueryParamsByAlias</code>",id:"zodiosqueryparamsbyalias",level:2},{value:"<code>ZodiosErrorByPath</code>",id:"zodioserrorbypath",level:2},{value:"<code>ZodiosErrorByAlias</code>",id:"zodioserrorbyalias",level:2},{value:"Example",id:"example",level:2}],y={toc:d};function l(e){let{components:o,...r}=e;return(0,t.kt)("wrapper",(0,a.Z)({},y,r,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"typescript"},"Typescript"),(0,t.kt)("p",null,"Even though zodios is written in typescript, you can use it with javascript. However, if you are using typescript, you can benefit from the typescript type helpers."),(0,t.kt)("h2",{id:"apiof"},(0,t.kt)("inlineCode",{parentName:"h2"},"ApiOf")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { ApiOf, Zodios } from 'zodios';\n\nconst client = new Zodios(myApiDefinition);\n\ntype MyApi = ApiOf<typeof myApiDefinition>;\n")),(0,t.kt)("h2",{id:"zodiosbodybypath"},(0,t.kt)("inlineCode",{parentName:"h2"},"ZodiosBodyByPath")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { ZodiosBodyByPath, Zodios } from 'zodios'\nimport { MyApi } from './my-api';\n\ntype User = ZodiosBodyByPath<MyApi,'post','/users'>;\n")),(0,t.kt)("h2",{id:"zodiosbodybyalias"},(0,t.kt)("inlineCode",{parentName:"h2"},"ZodiosBodyByAlias")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { ZodiosBodyByAlias, Zodios } from 'zodios'\nimport { MyApi } from './my-api';\n\ntype User = ZodiosBodyByAlias<MyApi,'createUsers'>;\n")),(0,t.kt)("h2",{id:"zodiosheaderparamsbypath"},(0,t.kt)("inlineCode",{parentName:"h2"},"ZodiosHeaderParamsByPath")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { ZodiosHeaderParamsByPath, Zodios } from 'zodios'\nimport { MyApi } from './my-api';\n\ntype CreateUsersHeaderParams = ZodiosHeaderParamsByPath<MyApi,'post','/users'>;\n")),(0,t.kt)("h2",{id:"zodiosheaderparamsbyalias"},(0,t.kt)("inlineCode",{parentName:"h2"},"ZodiosHeaderParamsByAlias")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { ZodiosHeaderParamsByAlias, Zodios } from 'zodios'\nimport { MyApi } from './my-api';\n\ntype CreateUsersHeaderParams = ZodiosHeaderParamsByAlias<MyApi,'createUsers'>;\n")),(0,t.kt)("h2",{id:"zodiospathparams"},(0,t.kt)("inlineCode",{parentName:"h2"},"ZodiosPathParams")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { ZodiosPathParams, Zodios } from 'zodios'\nimport { MyApi } from './my-api';\n\ntype GetUserPathParams = ZodiosPathParams<'/users/:id'>;\n")),(0,t.kt)("h2",{id:"zodiospathparambyalias"},(0,t.kt)("inlineCode",{parentName:"h2"},"ZodiosPathParamByAlias")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { ZodiosPathParamByAlias, Zodios } from 'zodios'\nimport { MyApi } from './my-api';\n\ntype GetUserPathParams = ZodiosPathParamByAlias<MyApi,'getUser'>;\n")),(0,t.kt)("h2",{id:"zodiosresponsebypath"},(0,t.kt)("inlineCode",{parentName:"h2"},"ZodiosResponseByPath")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { ZodiosResponseByPath, Zodios } from 'zodios'\nimport { MyApi } from './my-api';\n\ntype Users = ZodiosResponseByPath<MyApi,'get','/users'>;\n")),(0,t.kt)("h2",{id:"zodiosresponsebyalias"},(0,t.kt)("inlineCode",{parentName:"h2"},"ZodiosResponseByAlias")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { ZodiosResponseByAlias, Zodios } from 'zodios'\nimport { MyApi } from './my-api';\n\ntype Users = ZodiosResponseByAlias<MyApi,'getUsers'>;\n")),(0,t.kt)("h2",{id:"zodiosqueryparamsbypath"},(0,t.kt)("inlineCode",{parentName:"h2"},"ZodiosQueryParamsByPath")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { ZodiosQueryParamsByPath, Zodios } from 'zodios'\nimport { MyApi } from './my-api';\n\ntype GetUsersQueryParams = ZodiosQueryParamsByPath<MyApi,'get','/users'>;\n")),(0,t.kt)("h2",{id:"zodiosqueryparamsbyalias"},(0,t.kt)("inlineCode",{parentName:"h2"},"ZodiosQueryParamsByAlias")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { ZodiosQueryParamsByAlias, Zodios } from 'zodios'\nimport { MyApi } from './my-api';\n\ntype GetUsersQueryParams = ZodiosQueryParamsByAlias<MyApi,'getUsers'>;\n")),(0,t.kt)("h2",{id:"zodioserrorbypath"},(0,t.kt)("inlineCode",{parentName:"h2"},"ZodiosErrorByPath")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { ZodiosErrorByPath, Zodios } from 'zodios'\nimport { MyApi } from './my-api';\n\ntype NotFoundUsersError = ZodiosErrorByPath<MyApi,'get','/users',404>;\n")),(0,t.kt)("h2",{id:"zodioserrorbyalias"},(0,t.kt)("inlineCode",{parentName:"h2"},"ZodiosErrorByAlias")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { ZodiosErrorByAlias, Zodios } from 'zodios'\nimport { MyApi } from './my-api';\n\ntype NotFoundUsersError = ZodiosErrorByAlias<MyApi,'getUsers',404>;\n")),(0,t.kt)("h2",{id:"example"},"Example"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  makeCrudApi,\n  ZodiosBodyByPath,\n  ZodiosResponseByPath,\n  ZodiosPathParams,\n  ZodiosQueryParamsByPath,\n} from "@zodios/code";\nimport z from "zod";\n\nconst user = z.object({\n  id: z.number(),\n  name: z.string(),\n  email: z.string().email(),\n  phone: z.string(),\n});\n\nconst api = makeCrudApi("user", user);\n\ntype User = z.infer<typeof user>;\ntype Api = typeof api;\n\ntype Users = ZodiosResponseByPath<Api, "get", "/users">;\n//    ^? type Users = { id: number; name: string; email: string; phone: string; }[]\ntype UserById = ZodiosResponseByPath<Api, "get", "/users/:id">;\n//    ^? type UserById = { id: number; name: string; email: string; phone: string; }\ntype GetUserParams = ZodiosPathParams<"/users/:id">;\n//    ^? type GetUserParams = { id: string; }\ntype GetUserQueries = ZodiosQueryParamsByPath<Api, "get", "/users/:id">;\n//    ^? type GetUserQueries = never\ntype CreateUserBody = ZodiosBodyByPath<Api, "post", "/users">;\n//    ^? type CreateUserBody = { name: string; email: string; phone: string; }\ntype CreateUserResponse = ZodiosResponseByPath<Api, "post", "/users">;\n//    ^? type CreateUserResponse = { id: number; name: string; email: string; phone: string; }\ntype UpdateUserBody = ZodiosBodyByPath<Api, "put", "/users/:id">;\n//    ^? type UpdateUserBody = { name: string; email: string; phone: string; }\ntype PatchUserBody = ZodiosBodyByPath<Api, "patch", "/users/:id">;\n//    ^? type PatchUserBody = { name?: string | undefined; email?: string | undefined; phone?: string | undefined; }\n')))}l.isMDXComponent=!0}}]);