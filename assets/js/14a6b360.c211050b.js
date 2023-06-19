"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[35169],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=m(n),f=a,d=u["".concat(l,".").concat(f)]||u[f]||c[f]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},35557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const o={title:"$rolePerms",description:"Returns Moderation Role Permissions if the given Role ID has the permissions"},i=void 0,s={unversionedId:"functions/roleperms",id:"version-5.5.5/functions/roleperms",title:"$rolePerms",description:"Returns Moderation Role Permissions if the given Role ID has the permissions",source:"@site/versioned_docs/version-5.5.5/functions/roleperms.md",sourceDirName:"functions",slug:"/functions/roleperms",permalink:"/docs/5.5.5/functions/roleperms",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687147935,formattedLastUpdatedAt:"Jun 19, 2023",frontMatter:{title:"$rolePerms",description:"Returns Moderation Role Permissions if the given Role ID has the permissions"},sidebar:"docs",previous:{title:"$roleName",permalink:"/docs/5.5.5/functions/rolename"},next:{title:"$rolePosition",permalink:"/docs/5.5.5/functions/roleposition"}},l={},m=[{value:"List of Moderation Permissions:",id:"list-of-moderation-permissions",level:3}],p={toc:m},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function returns the permissions of the specified role"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$rolePerms[roleID;seperator (optional)] \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\nname:'rolePerms',\ncode:`$rolePerms[739933888784367637;, ]` // Manage Messages, Manage Webhook, ...\n})\n")),(0,a.kt)("p",null,"This will only return Moderation Permissions, If the role has Manage Messages, the bot will return Manage Messages, If it has Send Messages, the bot will not return Send Messages."),(0,a.kt)("h3",{id:"list-of-moderation-permissions"},"List of Moderation Permissions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"manageserver"),(0,a.kt)("li",{parentName:"ul"},"admin"),(0,a.kt)("li",{parentName:"ul"},"kick "),(0,a.kt)("li",{parentName:"ul"},"ban "),(0,a.kt)("li",{parentName:"ul"},"manageroles "),(0,a.kt)("li",{parentName:"ul"},"managechannels "),(0,a.kt)("li",{parentName:"ul"},"managewebhooks "),(0,a.kt)("li",{parentName:"ul"},"managemessages "),(0,a.kt)("li",{parentName:"ul"},"viewauditlog "),(0,a.kt)("li",{parentName:"ul"},"managenicknames "),(0,a.kt)("li",{parentName:"ul"},"sendmessages "),(0,a.kt)("li",{parentName:"ul"},"readmessages "),(0,a.kt)("li",{parentName:"ul"},"movemembers"),(0,a.kt)("li",{parentName:"ul"},"manageemojis "),(0,a.kt)("li",{parentName:"ul"},"viewguildinsights "),(0,a.kt)("li",{parentName:"ul"},"mentioneveryone "),(0,a.kt)("li",{parentName:"ul"},"embedlinks "),(0,a.kt)("li",{parentName:"ul"},"viewchannel "),(0,a.kt)("li",{parentName:"ul"},"createinvite "),(0,a.kt)("li",{parentName:"ul"},"mutemembers "),(0,a.kt)("li",{parentName:"ul"},"speak "),(0,a.kt)("li",{parentName:"ul"},"deafenmembers "),(0,a.kt)("li",{parentName:"ul"},"attachfiles "),(0,a.kt)("li",{parentName:"ul"},"connect")))}c.isMDXComponent=!0}}]);