"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[30176],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},63638:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>w,frontMatter:()=>m,metadata:()=>y,toc:()=>O});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))s.call(t,r)&&u(e,r,t[r]);return e},f=(e,t)=>a(e,i(t)),d=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$forEachUser",description:"Loop over every cached user executing an awaited command"},v=void 0,y={unversionedId:"functions/foreachuser",id:"version-5.5.5/functions/foreachuser",title:"$forEachUser",description:"Loop over every cached user executing an awaited command",source:"@site/versioned_docs/version-5.5.5/functions/foreachuser.md",sourceDirName:"functions",slug:"/functions/foreachuser",permalink:"/uk/docs/5.5.5/functions/foreachuser",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$forEachUser",description:"Loop over every cached user executing an awaited command"},sidebar:"docs",previous:{title:"$forEachMember",permalink:"/uk/docs/5.5.5/functions/foreachmember"},next:{title:"$formatDate",permalink:"/uk/docs/5.5.5/functions/formatdate"}},b={},O=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],h={toc:O},g="wrapper";function w(e){var t=e,{components:r}=t,o=d(t,["components"]);return(0,n.kt)(g,f(p(p({},h),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function creates a loop for every user "),(0,n.kt)("h4",p({},{id:"fields"}),"Fields"),(0,n.kt)("p",null,"This function has 1 required field"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Awaited Command ","(","Required",")"),(0,n.kt)("li",{parentName:"ol"},"Awaited Command 2 ","(","Optional",")"),(0,n.kt)("li",{parentName:"ol"},"Etc")),(0,n.kt)("p",null,"Raw Usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"$forEachUser[awaitedCommand1;awaitedCommand2;...]")),(0,n.kt)("h4",p({},{id:"options"}),"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Awaited Command","(","s",")"," - The awaited command","(","s",")"," we're executing")),(0,n.kt)("h4",p({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "forEachUser",\ncode: "$forEachUser[loop5]"\n})\n\nbot.awaitedCommand({\nname: "loop5",\ncode: `$setGlobalUserVar[hello;bye]` //Every users value for \'hello\' will be \'bye\'\n\n})\n')))}w.isMDXComponent=!0}}]);