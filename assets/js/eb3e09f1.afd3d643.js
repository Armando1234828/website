"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[22744],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=p(n),m=r,d=g["".concat(s,".").concat(m)]||g[m]||c[m]||l;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"$getMessage",description:"$getMessage will return properties about a given message.",id:"getMessage"},i=void 0,o={unversionedId:"functions/info-related/getMessage",id:"version-6.3.0/functions/info-related/getMessage",title:"$getMessage",description:"$getMessage will return properties about a given message.",source:"@site/versioned_docs/version-6.3.0/functions/info-related/getMessage.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/getMessage",permalink:"/docs/functions/info-related/getMessage",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1688622757,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{title:"$getMessage",description:"$getMessage will return properties about a given message.",id:"getMessage"},sidebar:"docs",previous:{title:"$getEmbed",permalink:"/docs/functions/info-related/getEmbed"},next:{title:"$getReactions",permalink:"/docs/functions/info-related/getReactions"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],u={toc:p},g="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$getMessage")," will return properties about a given message."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$getMessage[channelID;messageID;option?]\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"channelID"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"ID of the channel where the message is located in."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"messageID"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the message."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"option?"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Which option to fetch."),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,r.kt)("details",{open:!0},(0,r.kt)("summary",null,(0,r.kt)("h3",null," Options ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content"),(0,r.kt)("td",{parentName:"tr",align:null},"Content of the message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"userID"),(0,r.kt)("td",{parentName:"tr",align:null},"Author User ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"usertag"),(0,r.kt)("td",{parentName:"tr",align:null},"Author Discriminator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"Author Username."))))),(0,r.kt)("h2",{id:"examples"},"Example(s)"),(0,r.kt)("p",null,"This will return the content of your sent message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'getMessage',\n    code: `\n$getMessage[$channelID;$messageID;content]\n  `\n});\n")))}c.isMDXComponent=!0}}]);