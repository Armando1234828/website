"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[45457],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(r),d=a,m=s["".concat(p,".").concat(d)]||s[d]||f[d]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},91484:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>O,frontMatter:()=>m,metadata:()=>g,toc:()=>h});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&u(e,r,t[r]);return e},f=(e,t)=>o(e,i(t)),d=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$authorBanner",description:"Show author's banner."},b=void 0,g={unversionedId:"functions/authorbanner",id:"version-5.5.5/functions/authorbanner",title:"$authorBanner",description:"Show author's banner.",source:"@site/versioned_docs/version-5.5.5/functions/authorbanner.md",sourceDirName:"functions",slug:"/functions/authorbanner",permalink:"/ru/docs/5.5.5/functions/authorbanner",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"16 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$authorBanner",description:"Show author's banner."},sidebar:"docs",previous:{title:"$authorAvatar",permalink:"/ru/docs/5.5.5/functions/authoravatar"},next:{title:"$authorID",permalink:"/ru/docs/5.5.5/functions/authorid"}},y={},h=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2}],v={toc:h},k="wrapper";function O(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(k,f(s(s({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function will show author's banner, if there's not a banner; it will return ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"null")),"."),(0,n.kt)("h3",s({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$authorBanner[size?;dynamic?;format?]\n")),(0,n.kt)("h3",s({},{id:"fields"}),"Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",s({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",s({parentName:"tr"},{align:"left"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"size"),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"Size of the banner"),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"dynamic"),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"Stopping animation (related to animated pictures)"),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"format"),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"Format of the banner (jpg, png etc.)"),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"no")))),(0,n.kt)("h2",s({},{id:"example"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "author-banner",\n  code: `\n  Here\'s your banner!\n  \n  $authorBanner\n  `\n});\n')))}O.isMDXComponent=!0}}]);