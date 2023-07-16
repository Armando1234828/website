"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[97603],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||s;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},53871:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>j,default:()=>k,frontMatter:()=>f,metadata:()=>g,toc:()=>y});var n=r(3905),o=Object.defineProperty,s=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&u(e,r,t[r]);return e},p=(e,t)=>s(e,a(t)),d=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$emojisFromMessage",description:"$emojisFromMessage recuperar\xe1 todos los emojis dados en un mensaje.",id:"emojisFromMessage"},j=void 0,g={unversionedId:"functions/util-related/emojisFromMessage",id:"version-6.4.0/functions/util-related/emojisFromMessage",title:"$emojisFromMessage",description:"$emojisFromMessage recuperar\xe1 todos los emojis dados en un mensaje.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/emojisFromMessage.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/emojisFromMessage",permalink:"/es/docs/functions/util-related/emojisFromMessage",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$emojisFromMessage",description:"$emojisFromMessage recuperar\xe1 todos los emojis dados en un mensaje.",id:"emojisFromMessage"},sidebar:"docs",previous:{title:"$emojiExists",permalink:"/es/docs/functions/util-related/emojiExists"},next:{title:"$eval",permalink:"/es/docs/functions/util-related/eval"}},v={},y=[{value:"Uso",id:"uso",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],b={toc:y},O="wrapper";function k(e){var t=e,{components:r}=t,o=d(t,["components"]);return(0,n.kt)(O,p(m(m({},b),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$emojisFromMessage")," devuelve todos los emojis en un mensaje determinado."),(0,n.kt)("h2",m({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$emojisFromMessage\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Ten en cuenta que tu bot tiene que estar presente en el gremio donde est\xe1n los emoji.")),(0,n.kt)("h2",m({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto devolver\xe1 cualquier emojis que usted d\xe9 como argumento:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'emojisFromMessage',\n    code: `\n$emojisFromMessage\n  `\n});\n")))}k.isMDXComponent=!0}}]);