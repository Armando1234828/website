"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[33211],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,m=c["".concat(p,".").concat(u)]||c[u]||f[u]||i;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>x,frontMatter:()=>m,metadata:()=>y,toc:()=>g});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&d(e,n,t[n]);return e},f=(e,t)=>i(e,l(t)),u=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$advancedTextSplit",description:"Text split, but advanced."},v=void 0,y={unversionedId:"functions/advancedtextsplit",id:"version-5.5.5/functions/advancedtextsplit",title:"$advancedTextSplit",description:"Text split, but advanced.",source:"@site/versioned_docs/version-5.5.5/functions/advancedtextsplit.md",sourceDirName:"functions",slug:"/functions/advancedtextsplit",permalink:"/fr/docs/5.5.5/functions/advancedtextsplit",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"16 juil. 2023",frontMatter:{title:"$advancedTextSplit",description:"Text split, but advanced."},sidebar:"docs",previous:{title:"$addTimestamp",permalink:"/fr/docs/5.5.5/functions/addtimestamp"},next:{title:"$advanceCooldown",permalink:"/fr/docs/5.5.5/functions/advancecooldown"}},b={},g=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2}],k={toc:g},h="wrapper";function x(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,r.kt)(h,f(c(c({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function basically allows you to have multiple splits in 1 message"),(0,r.kt)("h3",c({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$advancedTextSplit[text;separator;index;separator2;index2;...]\n")),(0,r.kt)("h3",c({},{id:"fields"}),"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",c({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",c({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"text"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"The text will get splitted"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"string"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"seperator"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"The seperator of the text which is used for the index"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"string"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"index"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"The position of the certain text we want to pull from text depending the seperstor"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"yes")))),(0,r.kt)("h2",c({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "advanced-text-split",\n  code: `\n  $advancedTextSplit[hi/bye|ok;/;2;|;1]\n  `\n});\n\n/* Explanation\nOur first seperator is "/" as you see, and the index is "2" so we are splitting it to two and it becomes like this;\n\nhi (bye|ok) \n\nNow the second seperator is "|" and the index is "1" which will be returned.\n\n(bye) ok\n*/\n')),(0,r.kt)("p",null,"And with this function we have claimed ",(0,r.kt)("inlineCode",{parentName:"p"},"hi/bye|ok"),"'s ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"bye"))," argument :)"))}x.isMDXComponent=!0}}]);