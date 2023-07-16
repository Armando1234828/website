"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[21154],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},60909:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>k,frontMatter:()=>m,metadata:()=>h,toc:()=>b});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&u(e,r,t[r]);return e},f=(e,t)=>a(e,l(t)),d=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$userRoleColor",description:"Returns the hex code of the highest role of user."},g=void 0,h={unversionedId:"functions/userrolecolor",id:"version-5.5.5/functions/userrolecolor",title:"$userRoleColor",description:"Returns the hex code of the highest role of user.",source:"@site/versioned_docs/version-5.5.5/functions/userrolecolor.md",sourceDirName:"functions",slug:"/functions/userrolecolor",permalink:"/docs/5.5.5/functions/userrolecolor",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"Jul 16, 2023",frontMatter:{title:"$userRoleColor",description:"Returns the hex code of the highest role of user."},sidebar:"docs",previous:{title:"$userReacted",permalink:"/docs/5.5.5/functions/userreacted"},next:{title:"$userRoleCount",permalink:"/docs/5.5.5/functions/userrolecount"}},y={},b=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2}],v={toc:b},O="wrapper";function k(e){var t=e,{components:r}=t,o=d(t,["components"]);return(0,n.kt)(O,f(p(p({},v),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns the hex code of the specified user's highest role."),(0,n.kt)("h3",p({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$userRoleColor[userID?;guildID?]\n")),(0,n.kt)("h3",p({},{id:"fields"}),"Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",p({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",p({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",p({parentName:"tr"},{align:"left"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:"left"}),"userID?"),(0,n.kt)("td",p({parentName:"tr"},{align:"left"}),"The ID of the user"),(0,n.kt)("td",p({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",p({parentName:"tr"},{align:"left"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:"left"}),"guildID?"),(0,n.kt)("td",p({parentName:"tr"},{align:"left"}),"The ID of the guild"),(0,n.kt)("td",p({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",p({parentName:"tr"},{align:"left"}),"no")))),(0,n.kt)("h2",p({},{id:"example"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "role-color",\n  code: `\n  $username\'s role color: $userRoleColor[$authorID;$guildID]\n  `\n});\n')))}k.isMDXComponent=!0}}]);