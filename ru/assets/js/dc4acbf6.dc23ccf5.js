"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[84835],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),c=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(o.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),s=c(r),f=a,m=s["".concat(o,".").concat(f)]||s[f]||d[f]||l;return r?n.createElement(m,i(i({ref:e},u),{},{components:r})):n.createElement(m,i({ref:e},u))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=f;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[s]="string"==typeof t?t:a,i[1]=p;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9707:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>v,contentTitle:()=>y,default:()=>k,frontMatter:()=>m,metadata:()=>b,toc:()=>g});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,s=(t,e)=>{for(var r in e||(e={}))o.call(e,r)&&u(t,r,e[r]);if(p)for(var r of p(e))c.call(e,r)&&u(t,r,e[r]);return t},d=(t,e)=>l(t,i(e)),f=(t,e)=>{var r={};for(var n in t)o.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&c.call(t,n)&&(r[n]=t[n]);return r};const m={title:"$textSplitMap",description:"$textSplitMap \u0441\u043e\u0437\u0434\u0430\u0441\u0442 \u0446\u0438\u043a\u043b \u043f\u043e \u0432\u0441\u0435\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0432 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 $textSplit",id:"textSplitMap"},y=void 0,b={unversionedId:"functions/util-related/textSplitMap",id:"version-6.4.0/functions/util-related/textSplitMap",title:"$textSplitMap",description:"$textSplitMap \u0441\u043e\u0437\u0434\u0430\u0441\u0442 \u0446\u0438\u043a\u043b \u043f\u043e \u0432\u0441\u0435\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0432 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 $textSplit",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/textSplitMap.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/textSplitMap",permalink:"/ru/docs/functions/util-related/textSplitMap",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"16 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$textSplitMap",description:"$textSplitMap \u0441\u043e\u0437\u0434\u0430\u0441\u0442 \u0446\u0438\u043a\u043b \u043f\u043e \u0432\u0441\u0435\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0432 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 $textSplit",id:"textSplitMap"},sidebar:"docs",previous:{title:"$textSplit",permalink:"/ru/docs/functions/util-related/textSplit"},next:{title:"$textTrim",permalink:"/ru/docs/functions/util-related/textTrim"}},v={},g=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],x={toc:g},O="wrapper";function k(t){var e=t,{components:r}=e,a=f(e,["components"]);return(0,n.kt)(O,d(s(s({},x),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$textSplitMap")," \u0441\u043e\u0437\u0434\u0430\u0441\u0442 \u0446\u0438\u043a\u043b \u043d\u0430\u0434 \u0432\u0441\u0435\u043c\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0432 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 $textSplit."),(0,n.kt)("h2",s({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$textSplit[awaited]\n")),(0,n.kt)("h2",s({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Nbg"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,n.kt)("th",s({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u043e\u0436\u0438\u0434\u0430\u043b"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u0418\u043c\u044f \u043e\u0436\u0438\u0434\u0430\u0435\u043c\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u044b."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"\u0434\u0430")))),(0,n.kt)("h2",s({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,n.kt)("p",null,"\u042d\u0442\u043e \u0432\u0435\u0440\u043d\u0435\u0442 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u0432 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 ",(0,n.kt)("inlineCode",{parentName:"p"},"$textSplit")," \u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442 \u0438\u0445 \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438:"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "textSplitMap",\n    \u043a\u043e\u0434: `\n    $textSplitMap[devs]\n    $textSplit[Ayaka,Leref,Ferel,Blurr;,]\n    `\n});\n\n\u0431\u043e\u0442. waitedCommand({\n    name: \xabdevs\xbb,\n    \u043a\u043e\u0434: `\n    $message[1]\n    `\n});\n')))}k.isMDXComponent=!0}}]);