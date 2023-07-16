"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[17252],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(n),u=r,f=s["".concat(p,".").concat(u)]||s[u]||m[u]||o;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>O,frontMatter:()=>f,metadata:()=>b,toc:()=>v});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&d(e,n,t[n]);return e},m=(e,t)=>o(e,l(t)),u=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n};const f={title:"$loop",description:"Repeat events / commands"},y=void 0,b={unversionedId:"functions/loop",id:"version-5.5.5/functions/loop",title:"$loop",description:"Repeat events / commands",source:"@site/versioned_docs/version-5.5.5/functions/loop.md",sourceDirName:"functions",slug:"/functions/loop",permalink:"/es/docs/5.5.5/functions/loop",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$loop",description:"Repeat events / commands"},sidebar:"docs",previous:{title:"$log",permalink:"/es/docs/5.5.5/functions/log"},next:{title:"$loopMode",permalink:"/es/docs/5.5.5/functions/loopmode"}},g={},v=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2}],k={toc:v},h="wrapper";function O(e){var t=e,{components:n}=t,r=u(t,["components"]);return(0,a.kt)(h,m(s(s({},k),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function creates a loop and executes an awaited command X amount of times."),(0,a.kt)("h3",s({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$loop[time;awaitedData;awaitedCommand]\n")),(0,a.kt)("p",null,"bot.awaitedCommand is needed."),(0,a.kt)("h3",s({},{id:"fields"}),"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"time"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The number of times the awaited command will be executed"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"alphanumeric"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"awaitedData"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The data to be used in the awaited command"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"alphanumeric"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"awaitedCommand"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The name of awaited command"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"alphanumeric"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"yes")))),(0,a.kt)("h2",s({},{id:"example"}),"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n        name: "Say Hello 3 times",\n        code: `$loop[3;{};hello]`\n})\n\nbot.awaitedCommand({\n       name: "hello",\n       code: `hi user!`\n})\n//The bot would return \'hi user!\' 3 times\n')))}O.isMDXComponent=!0}}]);