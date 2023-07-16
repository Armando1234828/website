"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[34633],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>g});var n=t(67294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var d=n.createContext({}),u=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(d.Provider,{value:r},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,a=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),f=l,g=p["".concat(d,".").concat(f)]||p[f]||s[f]||a;return t?n.createElement(g,i(i({ref:r},c),{},{components:t})):n.createElement(g,i({ref:r},c))}));function g(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=f;var o={};for(var d in r)hasOwnProperty.call(r,d)&&(o[d]=r[d]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},39641:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>m,default:()=>k,frontMatter:()=>g,metadata:()=>y,toc:()=>v});var n=t(3905),l=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?l(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))d.call(r,t)&&c(e,t,r[t]);if(o)for(var t of o(r))u.call(r,t)&&c(e,t,r[t]);return e},s=(e,r)=>a(e,i(r)),f=(e,r)=>{var t={};for(var n in e)d.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&o)for(var n of o(e))r.indexOf(n)<0&&u.call(e,n)&&(t[n]=e[n]);return t};const g={title:"$guildPreferredLocale",description:"$guildPreferredLocale will return a guild's set locale.",id:"guildPreferredLocale"},m=void 0,y={unversionedId:"functions/guild-related/guildPreferredLocale",id:"version-6.4.0/functions/guild-related/guildPreferredLocale",title:"$guildPreferredLocale",description:"$guildPreferredLocale will return a guild's set locale.",source:"@site/versioned_docs/version-6.4.0/functions/guild-related/guildPreferredLocale.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildPreferredLocale",permalink:"/fr/docs/functions/guild-related/guildPreferredLocale",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"16 juil. 2023",frontMatter:{title:"$guildPreferredLocale",description:"$guildPreferredLocale will return a guild's set locale.",id:"guildPreferredLocale"},sidebar:"docs",previous:{title:"$guildNames",permalink:"/fr/docs/functions/guild-related/guildNames"},next:{title:"$guildRandomID",permalink:"/fr/docs/functions/guild-related/guildRandomID"}},b={},v=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],O={toc:v},P="wrapper";function k(e){var r=e,{components:t}=r,l=f(r,["components"]);return(0,n.kt)(P,s(p(p({},O),l),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$guildPreferredLocale")," will return a guild's set locale."),(0,n.kt)("h2",p({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$guildPreferredLocale[guildID?]\n")),(0,n.kt)("h2",p({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",p({parentName:"tr"},{align:"center"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"guildID?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"The ID of the guild."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"false")))),(0,n.kt)("h2",p({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,"This will return the guild's preferred locale:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'guildPreferredLocale',\n    code: `\n  $guildPreferredLocale[$guildID]\n  `\n});\n")))}k.isMDXComponent=!0}}]);