"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[99651],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,g=u["".concat(i,".").concat(d)]||u[d]||f[d]||o;return t?r.createElement(g,c(c({ref:n},l),{},{components:t})):r.createElement(g,c({ref:n},l))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:a,c[1]=s;for(var p=2;p<o;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},92895:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={title:"$noEscapingMessage",description:"Special characters won't be replaced"},c=void 0,s={unversionedId:"functions/noescapingmessage",id:"version-5.5.5/functions/noescapingmessage",title:"$noEscapingMessage",description:"Special characters won't be replaced",source:"@site/versioned_docs/version-5.5.5/functions/noescapingmessage.md",sourceDirName:"functions",slug:"/functions/noescapingmessage",permalink:"/docs/5.5.5/functions/noescapingmessage",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688255791,formattedLastUpdatedAt:"Jul 1, 2023",frontMatter:{title:"$noEscapingMessage",description:"Special characters won't be replaced"},sidebar:"docs",previous:{title:"$nodeVersion",permalink:"/docs/5.5.5/functions/nodeversion"},next:{title:"$noMentionMessage",permalink:"/docs/5.5.5/functions/nomentionmessage"}},i={},p=[],l={toc:p},u="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function makes it so special characters won't be escaped"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$noEscapingMessage[arg number (optional)]\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/*\nHow to escape a character:\nby adding \\ infront\nexample:\n\\]\n*/\n\n\nbot.command({\nname: \"noescapemessage\",\ncode: `$title[Brackets[\\]]\n$noEscapingMessage`\n})\n\n/*\nSo basically $noEscapingMessage will ignore the '\\'\n*/\n")))}f.isMDXComponent=!0}}]);