"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[73593],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=s,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:s,a[1]=i;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),s=(n(67294),n(3905));const o={title:"$sendDM",description:"Sends a dm to the given user ID with the given message"},a=void 0,i={unversionedId:"functions/senddm",id:"version-5.5.5/functions/senddm",title:"$sendDM",description:"Sends a dm to the given user ID with the given message",source:"@site/versioned_docs/version-5.5.5/functions/senddm.md",sourceDirName:"functions",slug:"/functions/senddm",permalink:"/docs/5.5.5/functions/senddm",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687258922,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$sendDM",description:"Sends a dm to the given user ID with the given message"},sidebar:"docs",previous:{title:"$sendCrosspostingMessage",permalink:"/docs/5.5.5/functions/sendcrosspostingmessage"},next:{title:"$sendMessage",permalink:"/docs/5.5.5/functions/sendmessage"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Example",id:"example",level:3}],d={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This function sends a dm to the specified user with ","<","message",">"),(0,s.kt)("h3",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$sendDM[message;userID;returnID (yes or no)]\n")),(0,s.kt)("h3",{id:"example"},"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "sendDM",\ncode: `$sendDM[Hello!;$authorID;no]`\n})\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"It will not send a DM if the user has DM's disabled or blocked by the Client")))}p.isMDXComponent=!0}}]);