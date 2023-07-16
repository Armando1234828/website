"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[6758],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>h});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),f=o,h=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return t?n.createElement(h,i(i({ref:r},d),{},{components:t})):n.createElement(h,i({ref:r},d))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},14302:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>y,contentTitle:()=>g,default:()=>k,frontMatter:()=>h,metadata:()=>m,toc:()=>b});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&d(e,t,r[t]);if(s)for(var t of s(r))l.call(r,t)&&d(e,t,r[t]);return e},u=(e,r)=>a(e,i(r)),f=(e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const h={title:"Sharding"},g=void 0,m={unversionedId:"other/sharding",id:"version-5.5.5/other/sharding",title:"Sharding",description:"Sharding is only necessary for bots in 2,000+ Guilds",source:"@site/versioned_docs/version-5.5.5/other/sharding.md",sourceDirName:"other",slug:"/other/sharding",permalink:"/es/docs/5.5.5/other/sharding",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"Sharding"},sidebar:"docs",previous:{title:"Hyperlink",permalink:"/es/docs/5.5.5/other/hyperlink"},next:{title:"Character Escaping",permalink:"/es/docs/5.5.5/other/character-escaping"}},y={},b=[{value:"How to shard",id:"how-to-shard",level:4},{value:"Finding current guild&#39;s shard ID",id:"finding-current-guilds-shard-id",level:4}],O={toc:b},v="wrapper";function k(e){var r=e,{components:t}=r,o=f(r,["components"]);return(0,n.kt)(v,u(p(p({},O),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Sharding is only necessary for bots in 2,000+ Guilds")),(0,n.kt)("h4",p({},{id:"how-to-shard"}),"How to shard"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'const bot = new Aoijs.bot({\n    sharding: true,\n    shardAmount: 2,\n    oken: "DISCORD BOT TOKEN",\n    prefix: "DISCORD BOT PREFIX",\n    intents: ["GUILDS", "GUILD_MESSAGES"]\n})\n')),(0,n.kt)("h4",p({},{id:"finding-current-guilds-shard-id"}),"Finding current guild's shard ID"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "shardID",\n    code: `Guilds Shard: $shardID`\n})\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Sharding can lead to high ping/response time and depending your host, can use a lot of memory and disk space")))}k.isMDXComponent=!0}}]);