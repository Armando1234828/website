"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[49275],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[d]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},55567:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>O,default:()=>E,frontMatter:()=>m,metadata:()=>b,toc:()=>v});var r=t(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&c(e,t,n[t]);if(p)for(var t of p(n))l.call(n,t)&&c(e,t,n[t]);return e},u=(e,n)=>i(e,a(n)),f=(e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&p)for(var r of p(e))n.indexOf(r)<0&&l.call(e,r)&&(t[r]=e[r]);return t};const m={title:"RespondOnEditOptions"},O=void 0,b={unversionedId:"options/respondOnEditOptions",id:"version-5.5.5/options/respondOnEditOptions",title:"RespondOnEditOptions",description:"Available Options Are:",source:"@site/versioned_docs/version-5.5.5/options/respondOnEditOptions.md",sourceDirName:"options",slug:"/options/respondOnEditOptions",permalink:"/docs/5.5.5/options/respondOnEditOptions",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"Jul 16, 2023",frontMatter:{title:"RespondOnEditOptions"}},y={},v=[{value:"|time|number|how long can respondOnEdit works for a message|<code>time:60000</code>|",id:"timenumberhow-long-can-respondonedit-works-for-a-messagetime60000",level:2}],g={toc:v},w="wrapper";function E(e){var n=e,{components:t}=n,o=f(n,["components"]);return(0,r.kt)(w,u(d(d({},g),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Available Options Are:"),"\n|option  | type   | description | usage |\n|--------|--------|-------------|-------|\n|command | boolean|enabled commands to work with respondOnEdit| ",(0,r.kt)("inlineCode",{parentName:"p"},"command:true"),"|\n|alwaysExecute|boolean|enables alwaysExecute to work in respondOnEdit|",(0,r.kt)("inlineCode",{parentName:"p"},"alwaysExecute:false"),"|\n|nonPrefixed|boolean|enables/disables nonPrefixed Commands to Work in respondOnEdit|",(0,r.kt)("inlineCode",{parentName:"p"},"nonPrefixed:false"),"|"),(0,r.kt)("h2",d({},{id:"timenumberhow-long-can-respondonedit-works-for-a-messagetime60000"}),"|time|number|how long can respondOnEdit works for a message|",(0,r.kt)("inlineCode",{parentName:"h2"},"time:60000"),"|"))}E.isMDXComponent=!0}}]);