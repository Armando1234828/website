"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[30145],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=p(n),g=r,c=u["".concat(s,".").concat(g)]||u[g]||m[g]||i;return n?a.createElement(c,l(l({ref:e},d),{},{components:n})):a.createElement(c,l({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},40438:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Client Options",description:"This page is covering all aoi.js client options and what they do.",id:"clientoptions"},l=void 0,o={unversionedId:"guides/Client/clientoptions",id:"version-6.3.0/guides/Client/clientoptions",title:"Client Options",description:"This page is covering all aoi.js client options and what they do.",source:"@site/versioned_docs/version-6.3.0/guides/Client/1clientoptions.md",sourceDirName:"guides/Client",slug:"/guides/Client/clientoptions",permalink:"/docs/guides/Client/clientoptions",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Leref",lastUpdatedAt:1688314716,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{title:"Client Options",description:"This page is covering all aoi.js client options and what they do.",id:"clientoptions"},sidebar:"docs",previous:{title:"Localization",permalink:"/docs/guides/Application Commands/interaction-localization"},next:{title:"Client Events",permalink:"/docs/guides/Client/events"}},s={},p=[],d={toc:p},u="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This page is about all aoi.js Client Options and what they do.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},'const { AoiClient } = require("aoi.js");\n\nconst bot = new AoiClient({\n    token : string,\n    prefix : string,\n    intents : ["MessageContent", "Guilds", "GuildMessages"],\n    events : ["onMessage", "onJoin", "onLeave"],\n    disableFunctions? : ["$function", "$function"],\n    plugins? : "./path/to/directory",\n    respondToBots? : boolean,\n    guildOnly? : boolean,\n    AoiAutoUpdate? : boolean,\n    cache? : {\n        users : number,\n        messages : number,\n    },\n    database? : {\n        type : "@akarui/aoi.db",\n        db : require("@akarui/aoi.db"),\n        tables : ["main"],\n        path : "./database/",\n        extraOptions : {\n            dbType: "KeyValue",\n        }\n    }, // Example refers to @akarui/aoi.db, other databases are not included in this Example.\n    suppressAllErrors? : boolean,\n    errorMessage? : string,\n    aoiWarning? : boolean,\n    aoiLogs? : boolean,\n    respondOnEdit? : {\n        commands : boolean,\n        alwaysExecute? : boolean,\n        nonPrefixed? : boolean,\n        time : number\n    },\n});\n')),(0,r.kt)("hr",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"OPTION"),(0,r.kt)("th",{parentName:"tr",align:null},"INPUT"),(0,r.kt)("th",{parentName:"tr",align:null},"EXPLANATION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"token")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Your Discord Bot Token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"prefix")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Your Discord Bot Prefix")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"intents")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required Intents")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"events")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required Events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"disableFunctions")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"aoi.js functions you want to make unuseable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"plugins")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"aoi.js plugins directory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"respondToBots")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Either give your bot the ability to respond to bots or remove it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"guildOnly")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Either give your bot the ability to respond in Direct Message or remove it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AoiAutoUpdate")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Automatically update aoi.js if a update is available.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cache")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Client Cache Options.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Client Database Options.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"suppressAllErrors")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Suppress all occuring errors.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"errorMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Send a given error message when ",(0,r.kt)("inlineCode",{parentName:"td"},"suppressAllErrors")," executes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"aoiWarning")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Disable aoiWarning logs which are sent to your console.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"aoiLogs")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Disable aoiLogs which are sent to your console.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"respondOnEdit")),(0,r.kt)("td",{parentName:"tr",align:null},"strng"),(0,r.kt)("td",{parentName:"tr",align:null},"Give your bot the ability to respond to edited messages and execute the given commands.")))))}m.isMDXComponent=!0}}]);