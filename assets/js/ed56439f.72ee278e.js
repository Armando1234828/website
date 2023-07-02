"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[2383],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>d});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},s=Object.keys(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),i=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l=function(t){var e=i(t.components);return r.createElement(c.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,s=t.originalType,c=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),p=i(n),f=o,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||s;return n?r.createElement(d,a(a({ref:e},l),{},{components:n})):r.createElement(d,a({ref:e},l))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var s=n.length,a=new Array(s);a[0]=f;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u[p]="string"==typeof t?t:o,a[1]=u;for(var i=2;i<s;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},77140:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const s={title:"$getCustomStatus",description:"Gets the user's custom status state. (if any)"},a=void 0,u={unversionedId:"functions/getcustomstatus",id:"version-5.5.5/functions/getcustomstatus",title:"$getCustomStatus",description:"Gets the user's custom status state. (if any)",source:"@site/versioned_docs/version-5.5.5/functions/getcustomstatus.md",sourceDirName:"functions",slug:"/functions/getcustomstatus",permalink:"/docs/5.5.5/functions/getcustomstatus",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688255791,formattedLastUpdatedAt:"Jul 1, 2023",frontMatter:{title:"$getCustomStatus",description:"Gets the user's custom status state. (if any)"},sidebar:"docs",previous:{title:"$getCooldownTime",permalink:"/docs/5.5.5/functions/getcooldowntime"},next:{title:"$getEmbed",permalink:"/docs/5.5.5/functions/getembed"}},c={},i=[],l={toc:i},p="wrapper";function m(t){let{components:e,...n}=t;return(0,o.kt)(p,(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function returns the custom status of the given user, if they have one"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$getCustomStatus[userID (optional);state/emoji]\n")),(0,o.kt)("p",null,"state - The message, emoji - the emoji"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname:"customstatus",\ncode:`$getCustomStatus[502968724207304714;state]`\n})\n')))}m.isMDXComponent=!0}}]);