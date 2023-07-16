"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[72326],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,b=d["".concat(i,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(b,c(c({ref:t},p),{},{components:r})):n.createElement(b,c({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},33390:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>O,contentTitle:()=>m,default:()=>h,frontMatter:()=>b,metadata:()=>y,toc:()=>g});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&p(e,r,t[r]);return e},u=(e,t)=>o(e,c(t)),f=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const b={title:"$createObject",description:"Creates an object that can be used in code."},m=void 0,y={unversionedId:"functions/createobject",id:"version-5.5.5/functions/createobject",title:"$createObject",description:"Creates an object that can be used in code.",source:"@site/versioned_docs/version-5.5.5/functions/createobject.md",sourceDirName:"functions",slug:"/functions/createobject",permalink:"/docs/5.5.5/functions/createobject",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"Jul 16, 2023",frontMatter:{title:"$createObject",description:"Creates an object that can be used in code."},sidebar:"docs",previous:{title:"$createFile",permalink:"/docs/5.5.5/functions/createfile"},next:{title:"$createRole",permalink:"/docs/5.5.5/functions/createrole"}},O={},g=[{value:"Usage",id:"usage",level:3},{value:"Field",id:"field",level:3},{value:"Examples",id:"examples",level:4}],j={toc:g},v="wrapper";function h(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(v,u(d(d({},j),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function creates an object. Simplified terms, its a in-code variable that is only accessible in the current code."),(0,n.kt)("h3",d({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$createObject[{json}?]\n")),(0,n.kt)("h3",d({},{id:"field"}),"Field"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"json"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"The key & property in the object"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"no")))),(0,n.kt)("h4",d({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Without Optional:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "createObject",\n  code: `\n  $getObjectProperty[message]\n  \n  $addObjectProperty[message;Hello, World!]\n  \n  $createObject[{}]\n  `\n//Returns "Hello, World!"\n\n/*For to see how does it get stored.\n{ data: { object: { message: \'Hello, World!\' } } } */\n})\n')),(0,n.kt)("p",null,"With Optional:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "createObject",\n  code: `\n  $getObjectProperty[message]\n  \n  $createObject[{"message":"Hello Word"}]\n  `\n//Returns "Hello, World!". We didn\'t use $addObjectProperty in here.\n});\n')))}h.isMDXComponent=!0}}]);