"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[97383],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),p=a,f=d["".concat(i,".").concat(p)]||d[p]||m[p]||o;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},17749:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>v,default:()=>k,frontMatter:()=>f,metadata:()=>b,toc:()=>y});var r=t(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))i.call(n,t)&&u(e,t,n[t]);if(s)for(var t of s(n))c.call(n,t)&&u(e,t,n[t]);return e},m=(e,n)=>o(e,l(n)),p=(e,n)=>{var t={};for(var r in e)i.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&s)for(var r of s(e))n.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t};const f={title:"bot.onBanRemove",description:"An event that gets executed, if a user was unbanned from a server. To let the bot listen to the event, add one bot.onBanRemove() callback inside your main file."},v=void 0,b={unversionedId:"events/bot.onbanremove",id:"version-5.5.5/events/bot.onbanremove",title:"bot.onBanRemove",description:"An event that gets executed, if a user was unbanned from a server. To let the bot listen to the event, add one bot.onBanRemove() callback inside your main file.",source:"@site/versioned_docs/version-5.5.5/events/bot.onbanremove.md",sourceDirName:"events",slug:"/events/bot.onbanremove",permalink:"/docs/5.5.5/events/bot.onbanremove",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"Jul 16, 2023",frontMatter:{title:"bot.onBanRemove",description:"An event that gets executed, if a user was unbanned from a server. To let the bot listen to the event, add one bot.onBanRemove() callback inside your main file."},sidebar:"docs",previous:{title:"bot.onBanAdd",permalink:"/docs/5.5.5/events/bot.onbanadd"},next:{title:"bot.onChannelCreate",permalink:"/docs/5.5.5/events/bot.onchannelcreate"}},h={},y=[{value:"Usage:",id:"usage",level:4},{value:"Example Commands:",id:"example-commands",level:4}],g={toc:y},O="wrapper";function k(e){var n=e,{components:t}=n,a=p(n,["components"]);return(0,r.kt)(O,m(d(d({},g),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This callback allows the bot to log every time a user gets unbanned form a server."),(0,r.kt)("h4",d({},{id:"usage"}),"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.banRemoveCommand({ //command\nchannel: "channel id", //channel where bot logs\ncode: `your code` //your code\n})\n')),(0,r.kt)("h4",d({},{id:"example-commands"}),"Example Commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.banRemoveCommand({ \nchannel: "772414449839636490",\ncode: `\n$username was unbanned in $serverName\n`\n})\n')),(0,r.kt)("p",null,"If you have server log variables, add this:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.banRemoveCommand({ \nchannel: "$getServerVar[variable]", //Add getServerVar to get the servers log channel (if they set it ofcourse)\ncode: `\n$username was unbanned in $serverName\n`\n})\n')),(0,r.kt)("p",null,"You can use amongst other functions these functions inside your banAddCommand to return data of the user that got banned and the server that banned the user:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/docs/5.5.5/functions/username"}),"$username")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/docs/5.5.5/functions/authorid"}),"$authorID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/docs/5.5.5/functions/usertag"}),"$userTag")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/docs/5.5.5/functions/servername"}),"$serverName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/docs/5.5.5/functions/guildid"}),"$guildID"))))}k.isMDXComponent=!0}}]);