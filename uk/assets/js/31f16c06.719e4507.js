"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[23221],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return n?r.createElement(m,a(a({ref:t},f),{},{components:n})):r.createElement(m,a({ref:t},f))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>k,frontMatter:()=>m,metadata:()=>y,toc:()=>g});var r=n(3905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&f(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&f(e,n,t[n]);return e},p=(e,t)=>o(e,a(t)),d=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$findChars"},v=void 0,y={unversionedId:"functions/findchars",id:"version-5.5.5/functions/findchars",title:"$findChars",description:"This function filters out characters from the given &lt;string&gt; and returns them alone",source:"@site/versioned_docs/version-5.5.5/functions/findchars.md",sourceDirName:"functions",slug:"/functions/findchars",permalink:"/uk/docs/5.5.5/functions/findchars",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$findChars"},sidebar:"docs",previous:{title:"$findChannel",permalink:"/uk/docs/5.5.5/functions/findchannel"},next:{title:"$findMember",permalink:"/uk/docs/5.5.5/functions/findmember"}},b={},g=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],h={toc:g},O="wrapper";function k(e){var t=e,{components:n}=t,i=d(t,["components"]);return(0,r.kt)(O,p(u(u({},h),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function filters out characters from the given ","<","string",">"," and returns them alone"),(0,r.kt)("h4",u({},{id:"fields"}),"Fields"),(0,r.kt)("p",null,"This function  has 1 field"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"String ","(","Required",")")),(0,r.kt)("p",null,"Raw Usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$findChars[string]")),(0,r.kt)("h4",u({},{id:"options"}),"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"String - The text we're filtering")),(0,r.kt)("h4",u({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "findChars",\ncode: `$findChars[fdef243/%kcnv]`\n})\n/*\nBot will return:\nfdefkcnv\n*/\n')))}k.isMDXComponent=!0}}]);