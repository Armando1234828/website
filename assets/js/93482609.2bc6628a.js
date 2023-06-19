"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[20696],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={title:"$getInviteInfo",description:"Gets the info of the specified invite code"},a=void 0,s={unversionedId:"functions/getinviteinfo",id:"version-5.5.5/functions/getinviteinfo",title:"$getInviteInfo",description:"Gets the info of the specified invite code",source:"@site/versioned_docs/version-5.5.5/functions/getinviteinfo.md",sourceDirName:"functions",slug:"/functions/getinviteinfo",permalink:"/docs/5.5.5/functions/getinviteinfo",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687147935,formattedLastUpdatedAt:"Jun 19, 2023",frontMatter:{title:"$getInviteInfo",description:"Gets the info of the specified invite code"},sidebar:"docs",previous:{title:"$getGlobalUserVar",permalink:"/docs/5.5.5/functions/getglobaluservar"},next:{title:"$getLeaderboardInfo",permalink:"/docs/5.5.5/functions/getleaderboardinfo"}},l={},c=[],u={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This function allows the bot to get info from any invite code/url"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$getInviteInfo[code/url;guildID/channelID/userID/isTemporary/expiresAt/createdAt/url/code/uses/maxUses]\n")),(0,i.kt)("p",null,"Propety Explanations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"guildID - the guild where the invite is towards"),(0,i.kt)("li",{parentName:"ul"},"channelID - the channel where the invite is towards"),(0,i.kt)("li",{parentName:"ul"},"userID - the user who made the invite"),(0,i.kt)("li",{parentName:"ul"},"isTemporary - checks if invite is temporary or not"),(0,i.kt)("li",{parentName:"ul"},"expiresAt - Checks when the invite expires ","(","if it expires",")"),(0,i.kt)("li",{parentName:"ul"},"createdAt - Checks when the invite was created"),(0,i.kt)("li",{parentName:"ul"},"url - Returns the invite url"),(0,i.kt)("li",{parentName:"ul"},"code - Returns the invite code"),(0,i.kt)("li",{parentName:"ul"},"uses - Returns how many uses the invite has"),(0,i.kt)("li",{parentName:"ul"},"maxUses - Returns the max amount of  uses the invite can have ","(","If it has a max amount",")")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "inviteInfo".\ncode: `$getInviteInfo[dbdjs;uses]` //Gets how many people joined through the <invite_code>\n}) \n')))}f.isMDXComponent=!0}}]);