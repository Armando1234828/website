"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[76838],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,f=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return n?r.createElement(f,l(l({ref:t},m),{},{components:n})):r.createElement(f,l({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"$parseTime",description:"$parseTime will convert any human time to milliseconds.",id:"parseTime"},l=void 0,o={unversionedId:"functions/util-related/parseTime",id:"version-6.3.0/functions/util-related/parseTime",title:"$parseTime",description:"$parseTime will convert any human time to milliseconds.",source:"@site/versioned_docs/version-6.3.0/functions/util-related/parseTime.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/parseTime",permalink:"/docs/functions/util-related/parseTime",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1688622757,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{title:"$parseTime",description:"$parseTime will convert any human time to milliseconds.",id:"parseTime"},sidebar:"docs",previous:{title:"$parseDate",permalink:"/docs/functions/util-related/parseDate"},next:{title:"$partial",permalink:"/docs/functions/util-related/partial"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],m={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$parseTime")," will convert any human time to milliseconds."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$parseTime[time]\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"time"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The time that will be converted to ",(0,a.kt)("inlineCode",{parentName:"td"},"ms"),"."),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,a.kt)("h2",{id:"examples"},"Example(s)"),(0,a.kt)("p",null,"This will convert ",(0,a.kt)("inlineCode",{parentName:"p"},"69 minutes")," to milliseconds and return ",(0,a.kt)("inlineCode",{parentName:"p"},"4140000"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'parseTime',\n    code: `\n  $parseTime[69m]\n  `\n});\n")),(0,a.kt)("p",null,"This will convert ",(0,a.kt)("inlineCode",{parentName:"p"},"1w 2d 20m")," to milliseconds and return ",(0,a.kt)("inlineCode",{parentName:"p"},"778800000"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'parseTime',\n    code: `\n  $parseTime[1w 2d 20m]\n  `\n});\n")))}u.isMDXComponent=!0}}]);