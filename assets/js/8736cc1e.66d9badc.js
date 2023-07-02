"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[6788],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return t?n.createElement(m,l(l({ref:r},s),{},{components:t})):n.createElement(m,l({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=f;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u[p]="string"==typeof e?e:o,l[1]=u;for(var c=2;c<a;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},86927:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const a={title:"$authorBannerColor",description:"$authorBannerColor will return the profile banner color of the command author.",id:"authorBannerColor"},l=void 0,u={unversionedId:"functions/user-related/authorBannerColor",id:"version-6.3.0/functions/user-related/authorBannerColor",title:"$authorBannerColor",description:"$authorBannerColor will return the profile banner color of the command author.",source:"@site/versioned_docs/version-6.3.0/functions/user-related/authorBannerColor.md",sourceDirName:"functions/user-related",slug:"/functions/user-related/authorBannerColor",permalink:"/docs/functions/user-related/authorBannerColor",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1688308209,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{title:"$authorBannerColor",description:"$authorBannerColor will return the profile banner color of the command author.",id:"authorBannerColor"},sidebar:"docs",previous:{title:"$authorAvatar",permalink:"/docs/functions/user-related/authorAvatar"},next:{title:"$authorID",permalink:"/docs/functions/user-related/authorID"}},i={},c=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],s={toc:c},p="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$authorBannerColor")," will return the profile banner color of the command author."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$authorBannerColor\n")),(0,o.kt)("h2",{id:"examples"},"Example(s)"),(0,o.kt)("p",null,"This will return your profile banner color (if any):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'userBanner',\n    code: `\n  $authorBannerColor\n  `\n});\n")))}d.isMDXComponent=!0}}]);