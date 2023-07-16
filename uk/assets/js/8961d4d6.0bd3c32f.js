"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[85634],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),v=o,b=p["".concat(i,".").concat(v)]||p[v]||f[v]||s;return r?n.createElement(b,a(a({ref:t},l),{},{components:r})):n.createElement(b,a({ref:t},l))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=v;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<s;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},38564:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>d,default:()=>j,frontMatter:()=>b,metadata:()=>m,toc:()=>O});var n=r(3905),o=Object.defineProperty,s=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&l(e,r,t[r]);if(c)for(var r of c(t))u.call(t,r)&&l(e,r,t[r]);return e},f=(e,t)=>s(e,a(t)),v=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const b={title:"$serverBoostCount",description:"Returns the amount of boosts this server has"},d=void 0,m={unversionedId:"functions/serverboostcount",id:"version-5.5.5/functions/serverboostcount",title:"$serverBoostCount",description:"Returns the amount of boosts this server has",source:"@site/versioned_docs/version-5.5.5/functions/serverboostcount.md",sourceDirName:"functions",slug:"/functions/serverboostcount",permalink:"/uk/docs/5.5.5/functions/serverboostcount",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$serverBoostCount",description:"Returns the amount of boosts this server has"},sidebar:"docs",previous:{title:"$serverBanner",permalink:"/uk/docs/5.5.5/functions/serverbanner"},next:{title:"$serverBoostLevel",permalink:"/uk/docs/5.5.5/functions/serverboostlevel"}},y={},O=[],g={toc:O},h="wrapper";function j(e){var t=e,{components:r}=t,o=v(t,["components"]);return(0,n.kt)(h,f(p(p({},g),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns how many boosts the current guild has"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "boosts", \ncode: `\nThis server have $serverBoostCount boosts!` \n})\n')))}j.isMDXComponent=!0}}]);