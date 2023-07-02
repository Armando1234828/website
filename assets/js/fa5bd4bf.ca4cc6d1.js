"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[38381],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,v=p["".concat(a,".").concat(d)]||p[d]||f[d]||i;return r?n.createElement(v,s(s({ref:t},l),{},{components:r})):n.createElement(v,s({ref:t},l))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[p]="string"==typeof e?e:o,s[1]=c;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},67806:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const i={title:"$serverCount",description:"Returns the amount of servers the bot is in."},s=void 0,c={unversionedId:"functions/servercount",id:"version-5.5.5/functions/servercount",title:"$serverCount",description:"Returns the amount of servers the bot is in.",source:"@site/versioned_docs/version-5.5.5/functions/servercount.md",sourceDirName:"functions",slug:"/functions/servercount",permalink:"/docs/5.5.5/functions/servercount",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1688314716,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{title:"$serverCount",description:"Returns the amount of servers the bot is in."},sidebar:"docs",previous:{title:"$serverCooldown",permalink:"/docs/5.5.5/functions/servercooldown"},next:{title:"$serverDescription",permalink:"/docs/5.5.5/functions/serverdescription"}},a={},u=[],l={toc:u},p="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function returns how many servers the bot is in"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "count",\ncode: `I am in $serverCount servers!`\n})\n')))}f.isMDXComponent=!0}}]);