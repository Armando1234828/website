"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[97778],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),d=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(i.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),g=a,v=c["".concat(i,".").concat(g)]||c[g]||p[g]||r;return n?o.createElement(v,s(s({ref:t},u),{},{components:n})):o.createElement(v,s({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var d=2;d<r;d++)s[d]=n[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1e4:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const r={title:"Using Events",description:"Here you can learn the usage of events."},s=void 0,l={unversionedId:"advanced-guides/using-events",id:"version-5.5.5/advanced-guides/using-events",title:"Using Events",description:"Here you can learn the usage of events.",source:"@site/versioned_docs/version-5.5.5/advanced-guides/using-events.md",sourceDirName:"advanced-guides",slug:"/advanced-guides/using-events",permalink:"/docs/5.5.5/advanced-guides/using-events",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687147935,formattedLastUpdatedAt:"Jun 19, 2023",frontMatter:{title:"Using Events",description:"Here you can learn the usage of events."},sidebar:"docs",previous:{title:"Interaction Commands",permalink:"/docs/5.5.5/advanced-guides/interaction-commands"},next:{title:"$abbreviate",permalink:"/docs/5.5.5/functions/abbreviate"}},i={},d=[{value:"What are events?",id:"what-are-events",level:3},{value:"Types of events:",id:"types-of-events",level:3},{value:"Server based events:",id:"server-based-events",level:4},{value:"Bot based events:",id:"bot-based-events",level:4},{value:"Command &amp; message based events:",id:"command--message-based-events",level:4},{value:"User based events:",id:"user-based-events",level:4},{value:"How to use events?",id:"how-to-use-events",level:3}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"what-are-events"},"What are events?"),(0,a.kt)("p",null,'Aoi.JS has several event listeners, called "events" to cover most events of the Discord API.'),(0,a.kt)("p",null,"Each of them has it's own usage and own command type to run their own tasks (e.g for logging)."),(0,a.kt)("p",null,"The events are optional except the ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.5.5/events/bot.onmessage"},"bot.onMessage()")," one but if you want to use them, they need to be in you main file to let the bot listen to their events and these are needed to use their different command types."),(0,a.kt)("h3",{id:"types-of-events"},"Types of events:"),(0,a.kt)("h4",{id:"server-based-events"},"Server based events:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/events/bot.onleave"},"bot.onLeave() "),"=> for logging members they leave servers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/events/bot.onjoin"},"bot.onJoined() "),"=> for logging members they join servers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/events/bot.onbanadd"},"bot.onBanAdd() "),"=> for logging members they get banned in servers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/events/bot.onbanremove"},"bot.onBanRemove()")," => for logging members they get unbanned inservers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/events/bot.onchannelcreate"},"bot.onChannelCreate() "),"=> for logging channels they get created"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/events/bot.onchanneldelete"},"bot.onChannelDelete()")," => for logging channels they get deleted"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/events/bot.onchannelupdate"},"bot.onChannelUpdate() "),"=> for logging channels they get updated"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/events/bot.onrolecreate"},"bot.onRoleCreate() "),"=> for logging roles they get created"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/events/bot.onroledelete"},"bot.onRoleDelete() "),"=> for logging roles they get deleted"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/events/bot.onroleupdate"},"bot.onRoleUpdate() "),"=> for logging roles they get updated")),(0,a.kt)("h4",{id:"bot-based-events"},"Bot based events:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/events/bot.onratelimit"},"bot.onRateLimit()")," => for logging rate limits of the bot"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/events/bot.onguildjoin"},"bot.onGuildJoin() "),"=> for logging what servers the bot joins"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/events/bot.onguildleave"},"bot.onGuildLeave()")," => for logging what servers the bot leaves")),(0,a.kt)("h4",{id:"command--message-based-events"},"Command & message based events:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/events/bot.onmessage"},"bot.onMessage()")," => for logging & responding to messages"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/events/bot.onmessagedelete"},"bot.onMessageDelete()")," => for logging messages they get deleted"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/events/bot.onmessageupdate"},"bot.onMessageUpdate()")," => for logging messages they get updated"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/advanced-guides/interaction-commands"},"bot.onInteractionCreate()")," => for using slash commands"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/events/bot.onreactionadd"},"bot.onReactionAdd()")," => for logging reactions on messages"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/events/bot.onreactionremove"},"bot.onReactionRemove()")," => for logging removed reactions on messages")),(0,a.kt)("h4",{id:"user-based-events"},"User based events:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/events/bot.onuserupdate"},"bot.onUserUpdate() "),"=> for logging users updating their profile"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/events/bot.onmemberupdate"},"bot.onMemberUpdate()")," => for logging members updates in a server"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/events/bot.onpresenceupdate"},"bot.onPresenceUpdate() "),"=> for logging presence updates of users"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/5.5.5/events/bot.onvoicestateupdate"},"bot.onVoiceStateUpdate() "),"=> for logging voice state updates of members in a server")),(0,a.kt)("h3",{id:"how-to-use-events"},"How to use events?"),(0,a.kt)("p",null,"Easy! Just paste the callback you want to use in your main file below the bot creation like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const aoijs = require("aoi.js")\n\nconst bot = new aoijs.Bot({\n  token: "Discord_Bot_Token",\n  prefix: "Discord_Bot_Prefix",\n  intents: ["GUILDS", "GUILD_MESSAGES"]\n})\n\n//ADDING EVENTS\n \nbot.onMessage() // Allows Commands to Executed\nbot.onJoined() // Allows to log users joining servers\nbot.onLeave() // Allows to log users leaving servers\nbot.onBanAdd() // Allows to log user bans from servers\nbot.onBanRemove() // Allows to log users being unbanned from servers\n')))}p.isMDXComponent=!0}}]);