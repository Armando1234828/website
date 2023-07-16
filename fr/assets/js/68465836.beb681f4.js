"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[65991],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(f,s(s({ref:t},d),{},{components:n})):r.createElement(f,s({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>b,default:()=>w,frontMatter:()=>f,metadata:()=>g,toc:()=>h});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&d(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&d(e,n,t[n]);return e},u=(e,t)=>o(e,s(t)),m=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const f={title:"bot.onMessageUpdate",description:"An event that gets executed, if the bot sees a user editing a message. To let the bot listen to the event, add one bot.onMessageUpdate() callback inside your main file."},b=void 0,g={unversionedId:"events/bot.onmessageupdate",id:"version-5.5.5/events/bot.onmessageupdate",title:"bot.onMessageUpdate",description:"An event that gets executed, if the bot sees a user editing a message. To let the bot listen to the event, add one bot.onMessageUpdate() callback inside your main file.",source:"@site/versioned_docs/version-5.5.5/events/bot.onmessageupdate.md",sourceDirName:"events",slug:"/events/bot.onmessageupdate",permalink:"/fr/docs/5.5.5/events/bot.onmessageupdate",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"16 juil. 2023",frontMatter:{title:"bot.onMessageUpdate",description:"An event that gets executed, if the bot sees a user editing a message. To let the bot listen to the event, add one bot.onMessageUpdate() callback inside your main file."},sidebar:"docs",previous:{title:"bot.onMessageDelete",permalink:"/fr/docs/5.5.5/events/bot.onmessagedelete"},next:{title:"bot.onPresenceUpdate",permalink:"/fr/docs/5.5.5/events/bot.onpresenceupdate"}},v={},h=[{value:"Usage:",id:"usage",level:4},{value:"Example command:",id:"example-command",level:4}],y={toc:h},O="wrapper";function w(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(O,u(p(p({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This callback allows the bot to log any edited messages to the given channel"),(0,r.kt)("h4",p({},{id:"usage"}),"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.updateCommand({ //the command \n        channel: "the channel id", //the chanel where the bot will log\n        code: `Your wonderful code` //Your code that will appear in <channel>\n})\n')),(0,r.kt)("h4",p({},{id:"example-command"}),"Example command:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.updateCommand({\n        channel: "782446718704812032", \n        code: `Message edited from $username in <#$channelUsed>:\n$message\nOld message: $oldMessage`\n/*\n        Code Breakdown\n$message - The new message\n$oldMessage - The message before it was edited (This function only works in this callback)\n$username - The person who edited the message\n$channelUsed - Where the person edited the message\n*/\n})\n')))}w.isMDXComponent=!0}}]);