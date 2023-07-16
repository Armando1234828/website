"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[92197],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,f=m["".concat(p,".").concat(u)]||m[u]||s[u]||l;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>O,frontMatter:()=>f,metadata:()=>y,toc:()=>k});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&d(e,n,t[n]);return e},s=(e,t)=>l(e,i(t)),u=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n};const f={title:"$deleteApplicationCommand",description:"Delete an application command."},g=void 0,y={unversionedId:"functions/deleteapplicationcommand",id:"version-5.5.5/functions/deleteapplicationcommand",title:"$deleteApplicationCommand",description:"Delete an application command.",source:"@site/versioned_docs/version-5.5.5/functions/deleteapplicationcommand.md",sourceDirName:"functions",slug:"/functions/deleteapplicationcommand",permalink:"/docs/5.5.5/functions/deleteapplicationcommand",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"Jul 16, 2023",frontMatter:{title:"$deleteApplicationCommand",description:"Delete an application command."},sidebar:"docs",previous:{title:"$defaultMessageNotifications",permalink:"/docs/5.5.5/functions/defaultmessagenotifications"},next:{title:"$deleteChannels",permalink:"/docs/5.5.5/functions/deletechannels"}},b={},k=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Examples",id:"examples",level:2}],v={toc:k},h="wrapper";function O(e){var t=e,{components:n}=t,r=u(t,["components"]);return(0,a.kt)(h,s(m(m({},v),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Delete an application command which is can be:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Slash type"),(0,a.kt)("li",{parentName:"ul"},"Message type"),(0,a.kt)("li",{parentName:"ul"},"User type")),(0,a.kt)("h3",m({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$deleteApplicationCommand[guildID/global;application id]\n")),(0,a.kt)("h3",m({},{id:"fields"}),"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",m({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",m({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:"left"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"guildID/global"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"The field, which we're going to delete on ",(0,a.kt)("inlineCode",{parentName:"td"},"guild")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"global")),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"str & num"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"application id"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"The application command that we're going to delete"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"number"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"yes")))),(0,a.kt)("h2",m({},{id:"examples"}),"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deleting on a server")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "delete-application-command",\n  code: `\n  $deleteApplicationCommand[$guildID;$getApplicationCommandID[help;$guildID]]\n  \n  Deleted help command, since it was unnecessary...\n  `\n});\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deleting global application command")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "delete-application-command",\n  code: `\n  $deleteApplicationCommand[global;$getApplicationCommandID[help;global]]\n  \n  Deleted help command, since it was unnecessary...\n  `\n});\n')))}O.isMDXComponent=!0}}]);