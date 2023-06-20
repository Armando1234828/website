"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[61024],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,p=d["".concat(u,".").concat(m)]||d[m]||f[m]||o;return n?r.createElement(p,a(a({ref:t},c),{},{components:n})):r.createElement(p,a({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const o={title:"$findMember",description:"Retrieve the Member ID, with their Username, in the Current Guild."},a=void 0,l={unversionedId:"functions/findmember",id:"version-5.5.5/functions/findmember",title:"$findMember",description:"Retrieve the Member ID, with their Username, in the Current Guild.",source:"@site/versioned_docs/version-5.5.5/functions/findmember.md",sourceDirName:"functions",slug:"/functions/findmember",permalink:"/docs/5.5.5/functions/findmember",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687227235,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$findMember",description:"Retrieve the Member ID, with their Username, in the Current Guild."},sidebar:"docs",previous:{title:"$findChars",permalink:"/docs/5.5.5/functions/findchars"},next:{title:"$findMembers",permalink:"/docs/5.5.5/functions/findmembers"}},u={},s=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],c={toc:s},d="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This function returns the user ID of the specified user. Yes/No will determine if function returns current author id ","(","yes",")"," or undefined ","(","no",")"," if no match was found. Default is yes"),(0,i.kt)("h4",{id:"fields"},"Fields"),(0,i.kt)("p",null,"This function has 1 required field"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Member ","(","Required",")"),(0,i.kt)("li",{parentName:"ol"},"Return Current Member ","(","Optional",")")),(0,i.kt)("p",null,"Raw Usage: ",(0,i.kt)("inlineCode",{parentName:"p"},"$findMember[member;returnCurrentMember (yes/no) (optional)]")),(0,i.kt)("h4",{id:"options"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Member - The member we're finding"),(0,i.kt)("li",{parentName:"ul"},"Return Current Member - Whether or not the author's id will be returned if member not found")),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "find", \ncode: `\n$findMember[Kubaturi]` //Returns author ID if no member found \n})\n')))}f.isMDXComponent=!0}}]);