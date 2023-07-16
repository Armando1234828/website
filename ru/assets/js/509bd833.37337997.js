"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[84422],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,u=p["".concat(l,".").concat(f)]||p[f]||m[f]||o;return r?a.createElement(u,i(i({ref:t},d),{},{components:r})):a.createElement(u,i({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},89332:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>O,frontMatter:()=>u,metadata:()=>y,toc:()=>v});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))c.call(t,r)&&d(e,r,t[r]);return e},m=(e,t)=>o(e,i(t)),f=(e,t)=>{var r={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r};const u={title:"$addMessageReactions",description:"Adds a reaction to the given message ID.",id:"addmessagereactions"},g=void 0,y={unversionedId:"functions/addmessagereactions",id:"version-5.5.5/functions/addmessagereactions",title:"$addMessageReactions",description:"Adds a reaction to the given message ID.",source:"@site/versioned_docs/version-5.5.5/functions/addmessagereactions.md",sourceDirName:"functions",slug:"/functions/addmessagereactions",permalink:"/ru/docs/5.5.5/functions/addmessagereactions",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"16 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$addMessageReactions",description:"Adds a reaction to the given message ID.",id:"addmessagereactions"},sidebar:"docs",previous:{title:"$addFilter",permalink:"/ru/docs/5.5.5/functions/addfilter"},next:{title:"$addObjectProperty",permalink:"/ru/docs/5.5.5/functions/addobjectproperty"}},b={},v=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],h={toc:v},k="wrapper";function O(e){var t=e,{components:r}=t,n=f(t,["components"]);return(0,a.kt)(k,m(p(p({},h),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function will add a reaction to the specified message ID."),(0,a.kt)("h2",p({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$addMessageReactions[channelID;messageID;emoji;emoji?;...]\n")),(0,a.kt)("h2",p({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",p({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",p({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",p({parentName:"tr"},{align:"left"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"left"}),"channelID"),(0,a.kt)("td",p({parentName:"tr"},{align:"left"}),"The channel of which message is situated in"),(0,a.kt)("td",p({parentName:"tr"},{align:"left"}),"number"),(0,a.kt)("td",p({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"left"}),"messageID"),(0,a.kt)("td",p({parentName:"tr"},{align:"left"}),"The message of which the reaction(s) will get react"),(0,a.kt)("td",p({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",p({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"left"}),"emoji"),(0,a.kt)("td",p({parentName:"tr"},{align:"left"}),"The emojis of which will be reactee to the given messageID"),(0,a.kt)("td",p({parentName:"tr"},{align:"left"}),"emoji"),(0,a.kt)("td",p({parentName:"tr"},{align:"left"}),"yes")))),(0,a.kt)("h2",p({},{id:"example"}),"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "add-message-reactions",\n  code: `\n  $addMessageReactions[$channelID;$messageID;\ud83c\udf38]\n  \n  Here\'s a pretty flower!\n  `\n});\n')))}O.isMDXComponent=!0}}]);