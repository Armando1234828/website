"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[26576],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(r),m=o,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||a;return r?n.createElement(f,l(l({ref:t},d),{},{components:r})):n.createElement(f,l({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93896:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>b,default:()=>N,frontMatter:()=>f,metadata:()=>y,toc:()=>g});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&d(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&d(e,r,t[r]);return e},u=(e,t)=>a(e,l(t)),m=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$color",description:"Add color, to your sidebar embed description."},b=void 0,y={unversionedId:"functions/color",id:"version-5.5.5/functions/color",title:"$color",description:"Add color, to your sidebar embed description.",source:"@site/versioned_docs/version-5.5.5/functions/color.md",sourceDirName:"functions",slug:"/functions/color",permalink:"/ru/docs/5.5.5/functions/color",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"16 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$color",description:"Add color, to your sidebar embed description."},sidebar:"docs",previous:{title:"$closeTicket",permalink:"/ru/docs/5.5.5/functions/closeticket"},next:{title:"$commandCode",permalink:"/ru/docs/5.5.5/functions/commandcode"}},k={},g=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Color Types",id:"color-types",level:4},{value:"Example",id:"example",level:2}],v={toc:g},O="wrapper";function N(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(O,u(s(s({},v),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function adds color to the embed"),(0,n.kt)("h3",s({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$color[index;color]\n")),(0,n.kt)("h3",s({},{id:"fields"}),"Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",s({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",s({parentName:"tr"},{align:"left"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"index"),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"The index of the embed"),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"color"),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"The color to be added to embed"),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"color"),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"yes")))),(0,n.kt)("h4",s({},{id:"color-types"}),"Color Types"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Hex - Use hex color codes - Example: ","#","ff00ff"),(0,n.kt)("li",{parentName:"ul"},"Names - Use the name of the color - Example: RED"),(0,n.kt)("li",{parentName:"ul"},"RANDOM - Chooses a random color")),(0,n.kt)("h2",s({},{id:"example"}),"Example"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"With Hex")),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "color", \ncode: `\n$title[1;Title]\n$description[1;Hello world!]\n$color[1;#FF00FF]\n`\n})\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"With Names")),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "color", \ncode: `\n$title[1;Title]\n$description[1;Hello world!]\n$color[1;RED]\n`\n})\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"With RANDOM")),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "color", \ncode: `\n$title[1;Title]\n$description[1;Hello world!]\n$color[1;RANDOM]\n`\n})\n')))}N.isMDXComponent=!0}}]);