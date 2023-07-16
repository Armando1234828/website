"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[8027],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,u=d["".concat(c,".").concat(m)]||d[m]||f[m]||o;return r?a.createElement(u,l(l({ref:t},s),{},{components:r})):a.createElement(u,l({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},60714:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>k,default:()=>N,frontMatter:()=>u,metadata:()=>b,toc:()=>g});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&s(e,r,t[r]);return e},f=(e,t)=>o(e,l(t)),m=(e,t)=>{var r={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r};const u={title:"$createWebhook",description:"Creates a webhook to the given channel ID"},k=void 0,b={unversionedId:"functions/createwebhook",id:"version-5.5.5/functions/createwebhook",title:"$createWebhook",description:"Creates a webhook to the given channel ID",source:"@site/versioned_docs/version-5.5.5/functions/createwebhook.md",sourceDirName:"functions",slug:"/functions/createwebhook",permalink:"/docs/5.5.5/functions/createwebhook",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"Jul 16, 2023",frontMatter:{title:"$createWebhook",description:"Creates a webhook to the given channel ID"},sidebar:"docs",previous:{title:"$createVar",permalink:"/docs/5.5.5/functions/createvar"},next:{title:"$creationDate",permalink:"/docs/5.5.5/functions/creationdate"}},h={},g=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2}],y={toc:g},v="wrapper";function N(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.kt)(v,f(d(d({},y),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function creates a webhook that can be used later"),(0,a.kt)("h3",d({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$createWebhook[channelID;name;avatar_url;returnWebhookID/Token;separator?]\n")),(0,a.kt)("h3",d({},{id:"fields"}),"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",d({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",d({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:"left"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"channel ID"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"The id of the channel"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"number"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"name"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"The name of webhook"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"avatar_url"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"The url of the avatar of webhook"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"url"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"return ID"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"Whether the webhook is or token is to be returned"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"yes/no"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"separator"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"The separator to separate webhook id and token"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"alphanumeric"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"no")))),(0,a.kt)("h2",d({},{id:"example"}),"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "createWebhook",\ncode: `$createWebhook[$channelID;some random webhook;https://cdn.discordapp.com/avatars/535566311942651924/609c1aa27fca7f06d25c4d74df65be11.png?size=1024;yes;,]\n`\n})\n/*\nThe bot will make a webhook and will respond with\nWebhookID,WebhookToken\n*/\n')))}N.isMDXComponent=!0}}]);