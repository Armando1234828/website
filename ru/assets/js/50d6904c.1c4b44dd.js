"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[47170],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=i(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14022:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>w,frontMatter:()=>f,metadata:()=>g,toc:()=>v});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))i.call(t,n)&&p(e,n,t[n]);return e},u=(e,t)=>a(e,s(t)),m=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&i.call(e,r)&&(n[r]=e[r]);return n};const f={title:"bot.onMessageDelete"},b=void 0,g={unversionedId:"events/bot.onmessagedelete",id:"version-5.5.5/events/bot.onmessagedelete",title:"bot.onMessageDelete",description:"This callback allows the bot to log any deleted message",source:"@site/versioned_docs/version-5.5.5/events/bot.onmessagedelete.md",sourceDirName:"events",slug:"/events/bot.onmessagedelete",permalink:"/ru/docs/5.5.5/events/bot.onmessagedelete",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"16 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"bot.onMessageDelete"},sidebar:"docs",previous:{title:"bot.onMessage",permalink:"/ru/docs/5.5.5/events/bot.onmessage"},next:{title:"bot.onMessageUpdate",permalink:"/ru/docs/5.5.5/events/bot.onmessageupdate"}},y={},v=[],O={toc:v},h="wrapper";function w(e){var t=e,{components:n}=t,o=m(t,["components"]);return(0,r.kt)(h,u(d(d({},O),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This callback allows the bot to log any deleted message"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.deletedCommand({ //command\n    channel: "channel id",\n    code: `your code` //Message that will be sent to the channel\n})\nbot.onMessageDelete() //callback itself\n')),(0,r.kt)("p",null,"Using the callback"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.deletedCommand({\n    channel: "782446718704812032",\n    code: `Message from $username, was deleted in <#$channelUsed>: $message`\n    /*\n        Code Breakdown\n        $username - The user who wrote the message\n        $channelUsed - The channel where the message was deleted\n        $message - The message that was deleted\n    */\n})\nbot.onMessageDelete()\n')))}w.isMDXComponent=!0}}]);