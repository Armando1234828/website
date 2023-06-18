"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[94303],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),p=a,f=u["".concat(s,".").concat(p)]||u[p]||m[p]||r;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},67002:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={title:"bot.onReactionAdd",description:"An event that gets executed, if the bot sees a user reacting with a reaction to a message. To let the bot listen to the event, add one bot.onReactionAdd() callback inside your mainfile."},i=void 0,c={unversionedId:"events/bot.onreactionadd",id:"version-5.5.5/events/bot.onreactionadd",title:"bot.onReactionAdd",description:"An event that gets executed, if the bot sees a user reacting with a reaction to a message. To let the bot listen to the event, add one bot.onReactionAdd() callback inside your mainfile.",source:"@site/versioned_docs/version-5.5.5/events/bot.onreactionadd.md",sourceDirName:"events",slug:"/events/bot.onreactionadd",permalink:"/docs/5.5.5/events/bot.onreactionadd",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687062471,formattedLastUpdatedAt:"Jun 18, 2023",frontMatter:{title:"bot.onReactionAdd",description:"An event that gets executed, if the bot sees a user reacting with a reaction to a message. To let the bot listen to the event, add one bot.onReactionAdd() callback inside your mainfile."},sidebar:"docs",previous:{title:"bot.onRateLimit",permalink:"/docs/5.5.5/events/bot.onratelimit"},next:{title:"bot.onReactionRemove",permalink:"/docs/5.5.5/events/bot.onreactionremove"}},s={},l=[{value:"Usage:",id:"usage",level:4},{value:"Example Command:",id:"example-command",level:4},{value:"Functions:",id:"functions",level:4}],d={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"usage"},"Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.reactionAddCommand({ //command\n        channel: "channel id", //the channel where the bot will log\n        code: `your code` //Message that will be sent to <channel>\n})\n')),(0,a.kt)("h4",{id:"example-command"},"Example Command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.reactionAddCommand({\n        channel: "772414449839636490", \n        code: `$username has reacted with $emojiToString`\n})\n')),(0,a.kt)("h4",{id:"functions"},"Functions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/usermessageid"},"$messageID")," => to get the messageID the user reacted"),(0,a.kt)("li",{parentName:"ul"},"$authorMessage => to get the authorID of the message the user reacted to"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/channelid"},"$channelID "),"=> to get the channelID of the message"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/authorid"},"$authorID")," => the ID of the user that reacted"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/username"},"$username")," => the username of the user that reacted")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can use functions like ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.5.5/functions/onlyforchannels"},"$onlyForChannels")," or the functions from above in an ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.5.5/functions/onlyif"},"$onlyIf")," limiter at the bottom of the code to limit your code to specific reactions etc.")))}m.isMDXComponent=!0}}]);