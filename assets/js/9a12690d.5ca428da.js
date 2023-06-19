"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[36801],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,y=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return r?a.createElement(y,i(i({ref:t},s),{},{components:r})):a.createElement(y,i({ref:t},s))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},94991:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const l={title:"$arrayFilter",description:"$arrayFilter will check whether a element in the array equals the query and return it.",id:"arrayFilter"},i=void 0,o={unversionedId:"functions/array-related/arrayFilter",id:"version-6.2.6/functions/array-related/arrayFilter",title:"$arrayFilter",description:"$arrayFilter will check whether a element in the array equals the query and return it.",source:"@site/versioned_docs/version-6.2.6/functions/array-related/arrayFilter.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayFilter",permalink:"/docs/functions/array-related/arrayFilter",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1687147935,formattedLastUpdatedAt:"Jun 19, 2023",frontMatter:{title:"$arrayFilter",description:"$arrayFilter will check whether a element in the array equals the query and return it.",id:"arrayFilter"},sidebar:"docs",previous:{title:"$arrayEvery",permalink:"/docs/functions/array-related/arrayEvery"},next:{title:"$arrayFind",permalink:"/docs/functions/array-related/arrayFind"}},p={},u=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Comparison Operators",id:"comparison-operators",level:2},{value:"Example(s)",id:"examples",level:2}],s={toc:u},m="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$arrayFilter")," will check whether a element in the array equals the query and return it."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"$arrayFilter[name;query;queryType?;separator?]\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Array name."),(0,n.kt)("td",{parentName:"tr",align:"center"},"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"query"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The element we will be queering for every element inside the array."),(0,n.kt)("td",{parentName:"tr",align:"center"},"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"queryType?"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The comparison operator."),(0,n.kt)("td",{parentName:"tr",align:"center"},"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"separator?"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Separator."),(0,n.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,n.kt)("h2",{id:"comparison-operators"},"Comparison Operators"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"==")," \u2014 Every item that matches the query."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"!=")," \u2014 Every item that doesn't match the query."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},">"),'  \u2014 All items on the "left" of the found item, excluding itself.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<"),'  \u2014 All items on the "right" of the found item, excluding itself.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},">="),' \u2014 All items on the "left" of the found item, including itself.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<="),' \u2014 All items on the "right" of the found item, including itself.')),(0,n.kt)("h2",{id:"examples"},"Example(s)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "array-filter",\n    code: `\n  $arrayFilter[array;akarui;==;, ]\n  $createArray[array;aoi.js;akarui;documents;bot]\n  `\n    // It will return "akarui" as it matches the query.\n});\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "array-filter",\n    code: `\n  $arrayFilter[array;akarui;<=;, ]\n  $createArray[array;aoi.js;akarui;documents;bot]\n  `\n    // It will return "documents, bot" as its on the right of the found item.\n});\n')))}c.isMDXComponent=!0}}]);