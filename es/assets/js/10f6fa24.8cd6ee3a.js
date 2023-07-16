"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[89553],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),d=o,f=c["".concat(i,".").concat(d)]||c[d]||m[d]||a;return t?n.createElement(f,l(l({ref:r},u),{},{components:t})):n.createElement(f,l({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[c]="string"==typeof e?e:o,l[1]=s;for(var p=2;p<a;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},75919:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>y,default:()=>P,frontMatter:()=>f,metadata:()=>v,toc:()=>g});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,c=(e,r)=>{for(var t in r||(r={}))i.call(r,t)&&u(e,t,r[t]);if(s)for(var t of s(r))p.call(r,t)&&u(e,t,r[t]);return e},m=(e,r)=>a(e,l(r)),d=(e,r)=>{var t={};for(var n in e)i.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))r.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t};const f={title:"$onlyPerms",description:"$onlyPerms comprobar\xe1 si el usuario tiene los permisos listados y devolver\xe1 un mensaje de error si no lo hace.",id:"onlyPerms"},y=void 0,v={unversionedId:"functions/util-related/onlyPerms",id:"version-6.4.0/functions/util-related/onlyPerms",title:"$onlyPerms",description:"$onlyPerms comprobar\xe1 si el usuario tiene los permisos listados y devolver\xe1 un mensaje de error si no lo hace.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/onlyPerms.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/onlyPerms",permalink:"/es/docs/functions/util-related/onlyPerms",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$onlyPerms",description:"$onlyPerms comprobar\xe1 si el usuario tiene los permisos listados y devolver\xe1 un mensaje de error si no lo hace.",id:"onlyPerms"},sidebar:"docs",previous:{title:"$onlyNSFW",permalink:"/es/docs/functions/util-related/onlyNSFW"},next:{title:"$parseDate",permalink:"/es/docs/functions/util-related/parseDate"}},b={},g=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:g},O="wrapper";function P(e){var r=e,{components:t}=r,o=d(r,["components"]);return(0,n.kt)(O,m(c(c({},k),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$onlyPerms")," comprobar\xe1 si el usuario tiene los permisos listados y devolver\xe1 un mensaje de error si no lo hace."),(0,n.kt)("h2",c({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$onlyPerms[...perms;error]\n")),(0,n.kt)("h2",c({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",c({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"...permisos"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"consulta"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Permiso que requiere el usuario."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"error"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"consulta"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Error a devolver cuando el usuario no tiene los permisos listados."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"verdadero")))),(0,n.kt)("p",null,"Encontrar\xe1 todos los permisos ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",c({parentName:"strong"},{href:"../../guides/Client/2permissionsintents.md"}),"aqu\xed")),"."),(0,n.kt)("h2",c({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto limitar\xe1 el comando a trabajar s\xf3lo cuando el usuario tenga permisos de administrador:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "onlyPerms",\n    code: `\n    Ok.\n    $onlyPerms[administrator;You don\'t have administrator permissions!]\n    `\n});\n')))}P.isMDXComponent=!0}}]);