"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[30066],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,f=c["".concat(m,".").concat(d)]||c[d]||u[d]||o;return a?n.createElement(f,i(i({ref:t},s),{},{components:a})):n.createElement(f,i({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},30936:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"$formatDate"},i=void 0,l={unversionedId:"functions/formatdate",id:"version-5.5.5/functions/formatdate",title:"$formatDate",description:"This function formats a specified time to the given format",source:"@site/versioned_docs/version-5.5.5/functions/formatdate.md",sourceDirName:"functions",slug:"/functions/formatdate",permalink:"/docs/5.5.5/functions/formatdate",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687062471,formattedLastUpdatedAt:"Jun 18, 2023",frontMatter:{title:"$formatDate"},sidebar:"docs",previous:{title:"$forEachUser",permalink:"/docs/5.5.5/functions/foreachuser"},next:{title:"$get",permalink:"/docs/5.5.5/functions/get"}},m={},p=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Time Options",id:"time-options",level:4},{value:"Format Options",id:"format-options",level:4},{value:"Usage",id:"usage",level:4}],s={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function formats a specified time to the given format"),(0,r.kt)("h4",{id:"fields"},"Fields"),(0,r.kt)("p",null,"This function has 1 required field"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Time ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Format ","(","Optional",")")),(0,r.kt)("p",null,"Raw Usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$formatDate[time;format (Optional)]")),(0,r.kt)("h4",{id:"options"},"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Time - The time to be formatted"),(0,r.kt)("li",{parentName:"ul"},"Format - The format on how you want the date to be returned")),(0,r.kt)("h4",{id:"time-options"},"Time Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"datestamp - Example: 1615571386000"),(0,r.kt)("li",{parentName:"ul"},"milliseconds - Example: 31556926000ms"),(0,r.kt)("li",{parentName:"ul"},"stringed date - Example: 1/17/2019, 9:09:19 PM"),(0,r.kt)("li",{parentName:"ul"},"ISO String - Example: 2021-3-12T14:48:00.000Z")),(0,r.kt)("h4",{id:"format-options"},"Format Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Blank ","(","No format provided",")"," - Example: Friday, 12 March 2021"),(0,r.kt)("li",{parentName:"ul"},"LT - Time - Example: 4:01 AM"),(0,r.kt)("li",{parentName:"ul"},"LTS - Time w/ seconds - Example: 3:58:5 AM"),(0,r.kt)("li",{parentName:"ul"},"L - Date - Example: 3/12/2021"),(0,r.kt)("li",{parentName:"ul"},"LLL - Specified Date - Example: March 12 2021 4:02 AM"),(0,r.kt)("li",{parentName:"ul"},"LLLL - - Specified Date w/ Day - Example: Friday, March 12 2021 4:02 AM"),(0,r.kt)("li",{parentName:"ul"},"dddd - Day - Example: Friday"),(0,r.kt)("li",{parentName:"ul"},"HH - Hour - Example: 15"),(0,r.kt)("li",{parentName:"ul"},"For more formats, check ",(0,r.kt)("a",{parentName:"li",href:"https://thecodebarbarian.com/formatting-javascript-dates-with-moment-js.html"},"here"))),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Simple Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "formatDate",\ncode: `\n$formatDate[$dateStamp]\n`\n/*\nReturns: \nFriday, 12 March 2021\n*/\n})\n')),(0,r.kt)("p",null,"Usage w/ format options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "formatDate",\ncode: `\n$formatDate[$dateStamp;LLLL]\n`\n/*\nReturns: \nFriday, March 12 2021 1:00 PM\n*/\n})\n')),(0,r.kt)("p",null,"Usage w/ format options & custom text"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "formatDate",\ncode: `\n$formatDate[$dateStamp;dddd at Hour HH]\n`\n/*\nReturns: \nFriday at Hour 13\n*/\n})\n')))}u.isMDXComponent=!0}}]);