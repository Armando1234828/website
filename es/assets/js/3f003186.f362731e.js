"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[66720],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},67971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>h,default:()=>N,frontMatter:()=>m,metadata:()=>g,toc:()=>y});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>i(e,l(t)),f=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$usersInChannel",description:"Returns the users that are connected to the current voice channel that the bot is in."},h=void 0,g={unversionedId:"functions/usersinchannel",id:"version-5.5.5/functions/usersinchannel",title:"$usersInChannel",description:"Returns the users that are connected to the current voice channel that the bot is in.",source:"@site/versioned_docs/version-5.5.5/functions/usersinchannel.md",sourceDirName:"functions",slug:"/functions/usersinchannel",permalink:"/es/docs/5.5.5/functions/usersinchannel",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$usersInChannel",description:"Returns the users that are connected to the current voice channel that the bot is in."},sidebar:"docs",previous:{title:"$usersBanned",permalink:"/es/docs/5.5.5/functions/usersbanned"},next:{title:"$usersTyping",permalink:"/es/docs/5.5.5/functions/userstyping"}},v={},y=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Option Types",id:"option-types",level:4},{value:"Example",id:"example",level:2}],k={toc:y},b="wrapper";function N(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(b,d(u(u({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns the users that are in the given voice channel."),(0,r.kt)("h3",u({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$usersInChannel[voiceChannelID;option?;separator?]\n")),(0,r.kt)("h3",u({},{id:"fields"}),"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",u({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",u({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"voiceChannelID"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"The ID of the voice channel"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"option?"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"The option of the returning user's"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"string"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"seperator?"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"Seperator of userIDs"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"string"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"no")))),(0,r.kt)("h4",u({},{id:"option-types"}),"Option Types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," \u2014 Returns ID of the users with the given channel"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user.username")," \u2014 Returns name of the users with the given channel"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nickname")," \u2014 Returns nickname of the users with the given channel"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mention")," \u2014 Returns the users with mentioning from given channel")),(0,r.kt)("h2",u({},{id:"example"}),"Example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using this without given parameters")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "users-in-channel",\n  code: `\n  $usersInChannel[$voiceID;nickname;, ]\n  `\n// Will return: Neo the Daddy, Kal\'tsit\n});\n')))}N.isMDXComponent=!0}}]);