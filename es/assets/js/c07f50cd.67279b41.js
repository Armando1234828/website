"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[10099],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,b=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return r?a.createElement(b,i(i({ref:t},u),{},{components:r})):a.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},65514:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>v,default:()=>O,frontMatter:()=>b,metadata:()=>f,toc:()=>y});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(o)for(var r of o(t))d.call(t,r)&&u(e,r,t[r]);return e},c=(e,t)=>l(e,i(t)),m=(e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&d.call(e,a)&&(r[a]=e[a]);return r};const b={title:"$setGuildVar",description:"$setGuildVar cambiar\xe1 el valor de una variable de guild determinada.",id:"setGuildVar"},v=void 0,f={unversionedId:"functions/variables-related/setGuildVar",id:"version-6.4.0/functions/variables-related/setGuildVar",title:"$setGuildVar",description:"$setGuildVar cambiar\xe1 el valor de una variable de guild determinada.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/variables-related/setGuildVar.md",sourceDirName:"functions/variables-related",slug:"/functions/variables-related/setGuildVar",permalink:"/es/docs/functions/variables-related/setGuildVar",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$setGuildVar",description:"$setGuildVar cambiar\xe1 el valor de una variable de guild determinada.",id:"setGuildVar"},sidebar:"docs",previous:{title:"$setGlobalUserVar",permalink:"/es/docs/functions/variables-related/setGlobalUserVar"},next:{title:"$setMessageVar",permalink:"/es/docs/functions/variables-related/setMessageVar"}},g={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:y},N="wrapper";function O(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.kt)(N,c(p(p({},k),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$setGuildVar")," cambiar\xe1 el valor de una variable de gremio."),(0,a.kt)("h2",p({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$setGuildVar[varname;value;guildID?;table?]\n")),(0,a.kt)("h2",p({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"varname"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"consulta"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Nombre variable."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"valor"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"consulta"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Nuevo valor variable."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"servidorID?"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"entero"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"ID del gremio."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"falso")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"tabla?"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Tabla variable."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"falso")))),(0,a.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("p",null,'Esto cambiar\xe1 el valor de "Ejemplo" a "Este es un valor":'),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "setGuildVar",\n    code: `\n    $setGuildVar[Example;This is a value;$guildID;main]\n    `\n});\n')))}O.isMDXComponent=!0}}]);