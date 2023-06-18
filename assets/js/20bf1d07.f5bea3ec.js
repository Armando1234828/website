"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[70243],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=m(n),p=a,f=c["".concat(l,".").concat(p)]||c[p]||u[p]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},95242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const i={title:"Embed Errors",description:"Function internal functions aka Embed Errors are special functions that can be used inside message fields of functions to build the message as an embed message or to execute awaited commands with it."},o=void 0,s={unversionedId:"other/embed-errors",id:"version-5.5.5/other/embed-errors",title:"Embed Errors",description:"Function internal functions aka Embed Errors are special functions that can be used inside message fields of functions to build the message as an embed message or to execute awaited commands with it.",source:"@site/versioned_docs/version-5.5.5/other/embed-errors.md",sourceDirName:"other",slug:"/other/embed-errors",permalink:"/docs/5.5.5/other/embed-errors",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687062471,formattedLastUpdatedAt:"Jun 18, 2023",frontMatter:{title:"Embed Errors",description:"Function internal functions aka Embed Errors are special functions that can be used inside message fields of functions to build the message as an embed message or to execute awaited commands with it."},sidebar:"docs",previous:{title:"Character Escaping",permalink:"/docs/5.5.5/other/character-escaping"},next:{title:"Permissions",permalink:"/docs/5.5.5/other/permissions"}},l={},m=[{value:"Where to use",id:"where-to-use",level:4}],d={toc:m},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{title:text}")," => embed's"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{url:link}")," => embed's title hyperlink url"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{footer:text:url}")," => embed's footer text and optional embed's icon image url, embed needs title"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{description:text}")," => embed's description"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{color:hex}")," => embed's hex color code"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{author:text:url}")," => the embed's author and optional author image uld"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{thumbnail:url}")," => the embed's thumbail image url"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{field:name:value:inline}")," => embed field with optional inline field (yes/no)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{timestamp:ms}")," => embed timestamp with optional ms field"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{execute:awaited command name}")," => execute awaited command when the function gets executed"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{image:url}")," => the embed's image url"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{reactions:emoji,emoji2,...}")," => emojis that will be added as reaction to the bot's message"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{suppress:yes/no}")," => to suppress the error message"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{delete:time}")," => delete the message after given time"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{attachment:name.extension:url}")," => send an attachment with the message"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{edit:duration:{new message}:{new message}:{...}}")," => edit the message after given time")),(0,a.kt)("h4",{id:"where-to-use"},"Where to use"),(0,a.kt)("p",null,"You can use the embed error functions inside all functions they have message or error message field in it. Among users the following functions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/sendmessage"},"$sendMessage")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/channelsendmessage"},"$channelSendMessage")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/senddm"},"$sendDM")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/sendcrosspostingmessage"},"$sendCrosspostingMessgae")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/sendwebhook"},"$sendWebhook")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/onlyif"},"$onlyIf")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/onlyperms"},"$onlyPerms")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/onlybotperms"},"$onlyBotPerms")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/onlyifmessagecontains"},"$onlyIfMessageContains")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/suppresserrors"},"$suppressErrors")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/argscheck"},"$argsCheck")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/onlyforids"},"$onlyForIDs")," and other ID limiters"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/cooldown"},"$cooldown")," and other cooldown functions")))}u.isMDXComponent=!0}}]);