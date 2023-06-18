"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[11272],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"bot.onTypingStart",description:"An event that gets executed, if the bot sees someone typing in a text channel. To let the bot listen to the event, add one bot.onTypingStart() callback inside your main file."},i=void 0,l={unversionedId:"events/bot.ontypingstart",id:"version-5.5.5/events/bot.ontypingstart",title:"bot.onTypingStart",description:"An event that gets executed, if the bot sees someone typing in a text channel. To let the bot listen to the event, add one bot.onTypingStart() callback inside your main file.",source:"@site/versioned_docs/version-5.5.5/events/bot.ontypingstart.md",sourceDirName:"events",slug:"/events/bot.ontypingstart",permalink:"/docs/5.5.5/events/bot.ontypingstart",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687062471,formattedLastUpdatedAt:"Jun 18, 2023",frontMatter:{title:"bot.onTypingStart",description:"An event that gets executed, if the bot sees someone typing in a text channel. To let the bot listen to the event, add one bot.onTypingStart() callback inside your main file."},sidebar:"docs",previous:{title:"bot.onRoleUpdate",permalink:"/docs/5.5.5/events/bot.onroleupdate"},next:{title:"bot.onUserUpdate",permalink:"/docs/5.5.5/events/bot.onuserupdate"}},s={},c=[{value:"Usage:",id:"usage",level:4},{value:"Example Command:",id:"example-command",level:4}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This callback will trigger when the bot sees someone typing."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("h4",{id:"usage"},"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.typingStartCommand({\nchannel: "ID", // (Optional)\ncode: `Your code`\n});\n')),(0,o.kt)("h4",{id:"example-command"},"Example Command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.typingStartCommand({\nchannel: "836582026139664414",\ncode: `Hey! I see, you\'re typing? \ud83d\udc40\n`\n});\n')))}d.isMDXComponent=!0}}]);