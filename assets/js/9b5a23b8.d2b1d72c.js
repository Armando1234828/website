"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[13728],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),o=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=o(t.components);return a.createElement(m.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,m=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),p=o(n),k=r,g=p["".concat(m,".").concat(k)]||p[k]||u[k]||i;return n?a.createElement(g,l(l({ref:e},d),{},{components:n})):a.createElement(g,l({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=k;var s={};for(var m in e)hasOwnProperty.call(e,m)&&(s[m]=e[m]);s.originalType=t,s[p]="string"==typeof t?t:r,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},53297:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const i={title:"$getClientInvite",description:"$getClientInvite will return your bot's invite with specified permissions.",id:"getClientInvite"},l=void 0,s={unversionedId:"functions/client-related/getClientInvite",id:"version-6.3.0/functions/client-related/getClientInvite",title:"$getClientInvite",description:"$getClientInvite will return your bot's invite with specified permissions.",source:"@site/versioned_docs/version-6.3.0/functions/client-related/getClientInvite.md",sourceDirName:"functions/client-related",slug:"/functions/client-related/getClientInvite",permalink:"/docs/functions/client-related/getClientInvite",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1688255791,formattedLastUpdatedAt:"Jul 1, 2023",frontMatter:{title:"$getClientInvite",description:"$getClientInvite will return your bot's invite with specified permissions.",id:"getClientInvite"},sidebar:"docs",previous:{title:"$fetchClientValues",permalink:"/docs/functions/client-related/fetchClientValues"},next:{title:"$killClient",permalink:"/docs/functions/client-related/killClient"}},m={},o=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],d={toc:o},p="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$getClientInvite")," will return your bot's invite with specified permissions."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$getClientInvite[...perms?]\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"perms?"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Permissions you want to be included in the invite."),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",null," Discord API Permissions ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Permission"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"createinvite"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to create guild invites")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kickmembers"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to kick guild members")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"banmembers"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to ban guild members")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"administrator"),(0,r.kt)("td",{parentName:"tr",align:null},"Administrator Permissions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"managechannel"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to manage guild channels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"manageserver"),(0,r.kt)("td",{parentName:"tr",align:null},"Permissions to modify server settings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"addreactions"),(0,r.kt)("td",{parentName:"tr",align:null},"Permissions to add reactions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"viewauditlog"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to view the guild's audit log")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"priorityspeaker"),(0,r.kt)("td",{parentName:"tr",align:null},"Priority Speaker")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stream"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to stream in voice channels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"viewchannel"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to view a certain channel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sendmessages"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to send messages in a certain channel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sendttsmessages"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to send Text-To-Speech messages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"managemessages"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to manage messages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"embedlinks"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to embed links")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"attachfiles"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to attach files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"readmessagehistory"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to read the message history within a certain channel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mentioneveryone"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to mention ",(0,r.kt)("inlineCode",{parentName:"td"},"@everyone"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"@here")," and all roles")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"externalemojis"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to use external emojis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"viewguildinsights"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to view guild insights")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connect"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to connect to voice channels and stages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mutemembers"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to mute members in voice channels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"deafenmembers"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to deafen members in voice channels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"movemembers"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to move members between voice channels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"usevad"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to use voice-activity-detection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"changenickname"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to change your own nickname")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"managenicknames"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to manage other members nicknames")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"manageroles"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to manage roles")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"managewebhooks"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to manage webhooks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"manageemojisandstickers"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to manage emojis and stickers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"useappcmds"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to use application commands")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"requesttospeak"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to use request-to-speak in stages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"manageevents"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to manage events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"managethreads"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to manage threads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"createpublicthreads"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to use public threads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"createprivatethreads"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to use private threads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"createpublicthreads"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to create public threads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"createprivatethreads"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to create private threads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"externalstickers"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to use extrernal stickers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sendmessageinthreads"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to send messages in threads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"startembeddedactivities"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to start activities within voice channels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"moderatemembers"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission to timeout and remove timeouts from guild members"))))),(0,r.kt)("h2",{id:"examples"},"Example(s)"),(0,r.kt)("p",null,"This will return your bot's invite with administrator privileges:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'getClientInvite',\n    code: `\n  Invite me here: $getClientInvite[administrator]\n  `\n});\n")))}u.isMDXComponent=!0}}]);