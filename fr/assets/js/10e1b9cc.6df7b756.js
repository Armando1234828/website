"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[97054],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>b});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(o),d=r,b=f["".concat(p,".").concat(d)]||f[d]||u[d]||i;return o?n.createElement(b,a(a({ref:t},l),{},{components:o})):n.createElement(b,a({ref:t},l))}));function b(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[f]="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},35751:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>O,frontMatter:()=>b,metadata:()=>y,toc:()=>w});var n=o(3905),r=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(e,t,o)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,f=(e,t)=>{for(var o in t||(t={}))p.call(t,o)&&l(e,o,t[o]);if(c)for(var o of c(t))s.call(t,o)&&l(e,o,t[o]);return e},u=(e,t)=>i(e,a(t)),d=(e,t)=>{var o={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&s.call(e,n)&&(o[n]=e[n]);return o};const b={title:"$modifyWebhook",description:"Modifies the specified webhooks with the given inputs"},m=void 0,y={unversionedId:"functions/modifywebhook",id:"version-5.5.5/functions/modifywebhook",title:"$modifyWebhook",description:"Modifies the specified webhooks with the given inputs",source:"@site/versioned_docs/version-5.5.5/functions/modifywebhook.md",sourceDirName:"functions",slug:"/functions/modifywebhook",permalink:"/fr/docs/5.5.5/functions/modifywebhook",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"16 juil. 2023",frontMatter:{title:"$modifyWebhook",description:"Modifies the specified webhooks with the given inputs"},sidebar:"docs",previous:{title:"$modifyRolePerms",permalink:"/fr/docs/5.5.5/functions/modifyroleperms"},next:{title:"$modulo",permalink:"/fr/docs/5.5.5/functions/modulo"}},h={},w=[],v={toc:w},k="wrapper";function O(e){var t=e,{components:o}=t,r=d(t,["components"]);return(0,n.kt)(k,u(f(f({},v),r),{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function allows the bot to modify an existing webhook"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-php"}),"$modifyWebhook[webhookID;webhookToken;name;avatar url (optional)]\n")),(0,n.kt)("p",null,"Using this function"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "modifyWebhook",\ncode: `$modifyWebhook[793312378162642975;paNWUYLC22oL-t2hbYeu3zrwWXNfVxjn4TmDDVTISNVRbytCbptYM4DETJDTPzG-1JcA;Kuba\'s awesome webhook]\n`\n})\n/*\nHow to find your webhookID/Token\nurl: https://ptb.discordapp.com/api/webhooks/793312378162642975/paNWUYLC22oL-t2hbYeu3zrwWXNfVxjn4TmDDVTISNVRbytCbptYM4DETJDTPzG-1JcA\nYour ID: 793312378162642975\nYour Token: paNWUYLC22oL-t2hbYeu3zrwWXNfVxjn4TmDDVTISNVRbytCbptYM4DETJDTPzG-1JcA\n*/\n')))}O.isMDXComponent=!0}}]);