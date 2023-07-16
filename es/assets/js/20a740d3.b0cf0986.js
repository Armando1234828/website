"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[30530],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),p=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,b=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return r?a.createElement(b,l(l({ref:t},s),{},{components:r})):a.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},39951:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>O,frontMatter:()=>b,metadata:()=>g,toc:()=>k});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&s(e,r,t[r]);return e},u=(e,t)=>o(e,l(t)),m=(e,t)=>{var r={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r};const b={title:"$getLeaderboardInfo",description:"$getLeaderboardInfo devolver\xe1 informaci\xf3n sobre una variable determinada ordenada en una tabla de clasificaciones.",id:"getLeaderboardInfo"},f=void 0,g={unversionedId:"functions/variables-related/getLeaderboardInfo",id:"version-6.4.0/functions/variables-related/getLeaderboardInfo",title:"$getLeaderboardInfo",description:"$getLeaderboardInfo devolver\xe1 informaci\xf3n sobre una variable determinada ordenada en una tabla de clasificaciones.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/variables-related/getLeaderboardInfo.md",sourceDirName:"functions/variables-related",slug:"/functions/variables-related/getLeaderboardInfo",permalink:"/es/docs/functions/variables-related/getLeaderboardInfo",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$getLeaderboardInfo",description:"$getLeaderboardInfo devolver\xe1 informaci\xf3n sobre una variable determinada ordenada en una tabla de clasificaciones.",id:"getLeaderboardInfo"},sidebar:"docs",previous:{title:"$getGuildVar",permalink:"/es/docs/functions/variables-related/getGuildVar"},next:{title:"$getMessageVar",permalink:"/es/docs/functions/variables-related/getMessageVar"}},v={},k=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],y={toc:k},N="wrapper";function O(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.kt)(N,u(c(c({},y),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$getLeaderboardInfo")," devolver\xe1 informaci\xf3n sobre una variable determinada ordenada en una tabla de clasificaciones."),(0,a.kt)("h2",c({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$getLeaderboardInfo[variable;id;type;option]\n")),(0,a.kt)("h2",c({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"varname"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"consulta"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Nombre variable."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"id"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"entero"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Usuario/guild/canal/mensaje ID."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"type"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Tipo variable ",(0,a.kt)("br",null)," 1. ",(0,a.kt)("strong",{parentName:"td"},"globalUser")," ",(0,a.kt)("br",null)," 2. ",(0,a.kt)("strong",{parentName:"td"},"usuario")," ",(0,a.kt)("br",null)," 3. ",(0,a.kt)("strong",{parentName:"td"},"servidor")," ",(0,a.kt)("br",null)," 4. ",(0,a.kt)("strong",{parentName:"td"},"canal")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"s\xed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"opci\xf3n"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Opci\xf3n para devolver ",(0,a.kt)("br",null)," 1. ",(0,a.kt)("strong",{parentName:"td"},"top")," (por defecto) ",(0,a.kt)("br",null)," ",(0,a.kt)("strong",{parentName:"td"},"valor")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"s\xed")))),(0,a.kt)("h2",c({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("p",null,"Esto devolver\xe1 la posici\xf3n del gremio actual:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "getLeaderboardInfo",\n    code: `\n    $getLeaderboardInfo[Example;$guildID;server;top]\n    `\n});\n')))}O.isMDXComponent=!0}}]);