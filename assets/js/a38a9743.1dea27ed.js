"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[89830],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),g=s,f=u["".concat(c,".").concat(g)]||u[g]||m[g]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},78811:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(87462),s=(n(67294),n(3905));const a={title:"$messagePing",description:"Returns the ping of the message in ms."},o=void 0,i={unversionedId:"functions/messageping",id:"version-5.5.5/functions/messageping",title:"$messagePing",description:"Returns the ping of the message in ms.",source:"@site/versioned_docs/version-5.5.5/functions/messageping.md",sourceDirName:"functions",slug:"/functions/messageping",permalink:"/docs/5.5.5/functions/messageping",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688255791,formattedLastUpdatedAt:"Jul 1, 2023",frontMatter:{title:"$messagePing",description:"Returns the ping of the message in ms."},sidebar:"docs",previous:{title:"$messageFlags",permalink:"/docs/5.5.5/functions/messageflags"},next:{title:"$messagePublish",permalink:"/docs/5.5.5/functions/messagepublish"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Examples",id:"examples",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This function returns the message latency in Milliseconds."),(0,s.kt)("h3",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$messagePing\n")),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "messageping", \ncode: `\nMessage Latency: $messagePing ms`\n})\n')))}m.isMDXComponent=!0}}]);