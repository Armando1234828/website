"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[95909],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=p(n),d=l,y=u["".concat(c,".").concat(d)]||u[d]||f[d]||i;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:l,o[1]=a;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>m,default:()=>w,frontMatter:()=>y,metadata:()=>b,toc:()=>O});var r=n(3905),l=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(a)for(var n of a(t))p.call(t,n)&&s(e,n,t[n]);return e},f=(e,t)=>i(e,o(t)),d=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&a)for(var r of a(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const y={title:"$killClient",description:"$killClient will forcefully shutdown your bot.",id:"killClient"},m=void 0,b={unversionedId:"functions/client-related/killClient",id:"version-6.4.0/functions/client-related/killClient",title:"$killClient",description:"$killClient will forcefully shutdown your bot.",source:"@site/versioned_docs/version-6.4.0/functions/client-related/killClient.md",sourceDirName:"functions/client-related",slug:"/functions/client-related/killClient",permalink:"/docs/functions/client-related/killClient",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"Jul 16, 2023",frontMatter:{title:"$killClient",description:"$killClient will forcefully shutdown your bot.",id:"killClient"},sidebar:"docs",previous:{title:"$getClientInvite",permalink:"/docs/functions/client-related/getClientInvite"},next:{title:"$onlyClientPerms",permalink:"/docs/functions/client-related/onlyClientPerms"}},v={},O=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],k={toc:O},g="wrapper";function w(e){var t=e,{components:n}=t,l=d(t,["components"]);return(0,r.kt)(g,f(u(u({},k),l),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$killClient")," will forcefully shutdown your bot."),(0,r.kt)("h2",u({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$killClient\n")),(0,r.kt)("h2",u({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will forcefully shutdown your bot:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "killClient",\n    code: `\n    $killClient\n    `\n});\n')))}w.isMDXComponent=!0}}]);