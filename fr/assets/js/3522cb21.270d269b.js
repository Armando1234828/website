"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[53416],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[f]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},82455:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>O,contentTitle:()=>y,default:()=>j,frontMatter:()=>m,metadata:()=>b,toc:()=>g});var n=r(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&s(e,r,t[r]);return e},u=(e,t)=>i(e,a(t)),d=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$modifyRole",description:"Modifies a role by using their ID."},y=void 0,b={unversionedId:"functions/modifyrole",id:"version-5.5.5/functions/modifyrole",title:"$modifyRole",description:"Modifies a role by using their ID.",source:"@site/versioned_docs/version-5.5.5/functions/modifyrole.md",sourceDirName:"functions",slug:"/functions/modifyrole",permalink:"/fr/docs/5.5.5/functions/modifyrole",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"16 juil. 2023",frontMatter:{title:"$modifyRole",description:"Modifies a role by using their ID."},sidebar:"docs",previous:{title:"$modifyEmoji",permalink:"/fr/docs/5.5.5/functions/modifyemoji"},next:{title:"$modifyRolePerms",permalink:"/fr/docs/5.5.5/functions/modifyroleperms"}},O={},g=[],v={toc:g},h="wrapper";function j(e){var t=e,{components:r}=t,o=d(t,["components"]);return(0,n.kt)(h,u(f(f({},v),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"With this function you can modify an eisting role by editing it's name/color/mentionability/hoist"),(0,n.kt)("p",null,"Raw usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"$modifyRole[roleID;name (optional);color(optional);mentionable(optional);hoisted(optional)]")),(0,n.kt)("p",null,"Example Usage:"),(0,n.kt)("p",null,"This command changes the role name and it's color:"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-text"}),'bot.command({\nname: "editrole",\ncode: `\n$modifyRole[837765028031234098;Bot;700505]\n`\n})\n')),(0,n.kt)("p",null,"you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"RANDOM")," in the color field for a random role color \ud83d\ude09"))}j.isMDXComponent=!0}}]);