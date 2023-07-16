"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[13535],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>d});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(o),f=r,d=u["".concat(s,".").concat(f)]||u[f]||p[f]||i;return o?n.createElement(d,a(a({ref:t},c),{},{components:o})):n.createElement(d,a({ref:t},c))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var m=2;m<i;m++)a[m]=o[m];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},28087:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>O,frontMatter:()=>d,metadata:()=>j,toc:()=>v});var n=o(3905),r=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(e,t,o)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,u=(e,t)=>{for(var o in t||(t={}))s.call(t,o)&&c(e,o,t[o]);if(l)for(var o of l(t))m.call(t,o)&&c(e,o,t[o]);return e},p=(e,t)=>i(e,a(t)),f=(e,t)=>{var o={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&m.call(e,n)&&(o[n]=e[n]);return o};const d={title:"$modifyEmoji",description:"Modifies a custom emoji from this guild by using its ID."},y=void 0,j={unversionedId:"functions/modifyemoji",id:"version-5.5.5/functions/modifyemoji",title:"$modifyEmoji",description:"Modifies a custom emoji from this guild by using its ID.",source:"@site/versioned_docs/version-5.5.5/functions/modifyemoji.md",sourceDirName:"functions",slug:"/functions/modifyemoji",permalink:"/uk/docs/5.5.5/functions/modifyemoji",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$modifyEmoji",description:"Modifies a custom emoji from this guild by using its ID."},sidebar:"docs",previous:{title:"$modifyChannelPerms",permalink:"/uk/docs/5.5.5/functions/modifychannelperms"},next:{title:"$modifyRole",permalink:"/uk/docs/5.5.5/functions/modifyrole"}},b={},v=[{value:"Fields",id:"fields",level:4},{value:"Optioons",id:"optioons",level:4},{value:"Usage",id:"usage",level:4}],g={toc:v},h="wrapper";function O(e){var t=e,{components:o}=t,r=f(t,["components"]);return(0,n.kt)(h,p(u(u({},g),r),{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function modifies the given emoji"),(0,n.kt)("h4",u({},{id:"fields"}),"Fields"),(0,n.kt)("p",null,"This function has 2 required fields"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Emoji ID ","(","Required",")"),(0,n.kt)("li",{parentName:"ol"},"Name ","(","Required",")"),(0,n.kt)("li",{parentName:"ol"},"Role","(","s",")"," ","(","Optional",")")),(0,n.kt)("p",null,"Raw Usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"$modifyEmoji[emojiID;name;role1 (optional);role2 (optional);etc]")),(0,n.kt)("h4",u({},{id:"optioons"}),"Optioons"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Emoji ID - The ID of the emoji we're modifying"),(0,n.kt)("li",{parentName:"ul"},"Name - The new name of the emoji"),(0,n.kt)("li",{parentName:"ul"},"Role","(","s",")"," - The roles that are allowed to use the emoji. Only users with that role can use the emoji. Leave it empty to let everyone use that emoji.")),(0,n.kt)("h4",u({},{id:"usage"}),"Usage"),(0,n.kt)("p",null,"Without optional field"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "modifyEmoji",\ncode: `$modifyEmoji[775189112474173470;bruhDog]`\n})\n')),(0,n.kt)("p",null,"With optional field"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "modifyEmoji",\ncode: `$modifyEmoji[775189112474173470;bruhDog;773353340674900029]`\n})\n')),(0,n.kt)("p",null,"Emoji must be a custom emoji of one of the bot's servers."))}O.isMDXComponent=!0}}]);