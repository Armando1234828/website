"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[50087],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),p=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(r),u=n,f=s["".concat(d,".").concat(u)]||s[u]||c[u]||o;return r?a.createElement(f,i(i({ref:t},m),{},{components:r})):a.createElement(f,i({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},77524:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>v,frontMatter:()=>f,metadata:()=>k,toc:()=>b});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&m(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&m(e,r,t[r]);return e},c=(e,t)=>o(e,i(t)),u=(e,t)=>{var r={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r};const f={title:"$addEmoji",description:"$addEmoji allows you to add custom emoji to your server.",id:"addemoji"},g=void 0,k={unversionedId:"functions/addemoji",id:"version-5.5.5/functions/addemoji",title:"$addEmoji",description:"$addEmoji allows you to add custom emoji to your server.",source:"@site/versioned_docs/version-5.5.5/functions/addemoji.md",sourceDirName:"functions",slug:"/functions/addemoji",permalink:"/ru/docs/5.5.5/functions/addemoji",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"16 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$addEmoji",description:"$addEmoji allows you to add custom emoji to your server.",id:"addemoji"},sidebar:"docs",previous:{title:"$addCmdReactions",permalink:"/ru/docs/5.5.5/functions/addcmdreactions"},next:{title:"$addField",permalink:"/ru/docs/5.5.5/functions/addfield"}},y={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notice",id:"notice",level:2},{value:"Example",id:"example",level:2}],j={toc:b},N="wrapper";function v(e){var t=e,{components:r}=t,n=u(t,["components"]);return(0,a.kt)(N,c(s(s({},j),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$addEmoji")," adds an emoji to given guild's ID, via URL for roles or letting everyone access to added emoji."),(0,a.kt)("h2",s({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$addEmoji[guildID;URL;name;return emoji?;reason?;roleID?;roleID?;...]\n")),(0,a.kt)("h2",s({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"guildID"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The guild's ID where the emoji will be added"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"number"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"URL"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The image URL that will be added as emoji"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"name"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The emoji's name"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"return emoji"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"When added, shows emoji"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"boolean"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"reason"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The reason of adding the emoji"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"roleID","(","s",")"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The roles, that will accessible to use the emoji"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"no")))),(0,a.kt)("h2",s({},{id:"notice"}),"Notice"),(0,a.kt)("p",null,"Emoji's size ",(0,a.kt)("strong",{parentName:"p"},"should not")," be higher than 256kB."),(0,a.kt)("p",null,"URL has to end with ",(0,a.kt)("inlineCode",{parentName:"p"},".gif"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".png")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".jpg"),"."),(0,a.kt)("h2",s({},{id:"example"}),"Example"),(0,a.kt)("p",null,"Adds an emoji that named ",(0,a.kt)("inlineCode",{parentName:"p"},"partner"),". "),(0,a.kt)("p",null,"You can see details in audit logs."),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "add-emoji",\n  code: `\n  $addEmoji[$guildID;https://media.discordapp.net/attachments/861208192121569280/970996440971223090/Baslksz51_20220429193009.png;partner;yes;Because, why not?;849217373214474253]\n  `\n});\n')))}v.isMDXComponent=!0}}]);