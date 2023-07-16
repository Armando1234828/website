"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[99651],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,m=u["".concat(i,".").concat(d)]||u[d]||f[d]||o;return t?r.createElement(m,c(c({ref:n},l),{},{components:t})):r.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:a,c[1]=s;for(var p=2;p<o;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},68708:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>g,default:()=>j,frontMatter:()=>m,metadata:()=>b,toc:()=>v});var r=t(3905),a=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))i.call(n,t)&&l(e,t,n[t]);if(s)for(var t of s(n))p.call(n,t)&&l(e,t,n[t]);return e},f=(e,n)=>o(e,c(n)),d=(e,n)=>{var t={};for(var r in e)i.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&s)for(var r of s(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t};const m={title:"$noEscapingMessage",description:"Special characters won't be replaced"},g=void 0,b={unversionedId:"functions/noescapingmessage",id:"version-5.5.5/functions/noescapingmessage",title:"$noEscapingMessage",description:"Special characters won't be replaced",source:"@site/versioned_docs/version-5.5.5/functions/noescapingmessage.md",sourceDirName:"functions",slug:"/functions/noescapingmessage",permalink:"/es/docs/5.5.5/functions/noescapingmessage",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$noEscapingMessage",description:"Special characters won't be replaced"},sidebar:"docs",previous:{title:"$nodeVersion",permalink:"/es/docs/5.5.5/functions/nodeversion"},next:{title:"$noMentionMessage",permalink:"/es/docs/5.5.5/functions/nomentionmessage"}},y={},v=[],O={toc:v},w="wrapper";function j(e){var n=e,{components:t}=n,a=d(n,["components"]);return(0,r.kt)(w,f(u(u({},O),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function makes it so special characters won't be escaped"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$noEscapingMessage[arg number (optional)]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"/*\nHow to escape a character:\nby adding \\ infront\nexample:\n\\]\n*/\n\n\nbot.command({\nname: \"noescapemessage\",\ncode: `$title[Brackets[\\]]\n$noEscapingMessage`\n})\n\n/*\nSo basically $noEscapingMessage will ignore the '\\'\n*/\n")))}j.isMDXComponent=!0}}]);