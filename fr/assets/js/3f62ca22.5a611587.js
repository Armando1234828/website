"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[5256],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return a?n.createElement(f,i(i({ref:t},s),{},{components:a})):n.createElement(f,i({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[m]="string"==typeof e?e:r,i[1]=d;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},16477:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>j,default:()=>h,frontMatter:()=>f,metadata:()=>v,toc:()=>b});var n=a(3905),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&s(e,a,t[a]);if(d)for(var a of d(t))c.call(t,a)&&s(e,a,t[a]);return e},p=(e,t)=>o(e,i(t)),u=(e,t)=>{var a={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&d)for(var n of d(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a};const f={title:"$addCmdReactions",description:"$addCmdReactions allows you to add reactions to a command.",id:"addcmdreactions"},j=void 0,v={unversionedId:"functions/addcmdreactions",id:"version-5.5.5/functions/addcmdreactions",title:"$addCmdReactions",description:"$addCmdReactions allows you to add reactions to a command.",source:"@site/versioned_docs/version-5.5.5/functions/addcmdreactions.md",sourceDirName:"functions",slug:"/functions/addcmdreactions",permalink:"/fr/docs/5.5.5/functions/addcmdreactions",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"16 juil. 2023",frontMatter:{title:"$addCmdReactions",description:"$addCmdReactions allows you to add reactions to a command.",id:"addcmdreactions"},sidebar:"docs",previous:{title:"$addButton",permalink:"/fr/docs/5.5.5/functions/addbutton"},next:{title:"$addEmoji",permalink:"/fr/docs/5.5.5/functions/addemoji"}},y={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Custom Emoji Information",id:"custom-emoji-information",level:2},{value:"Animated emoji ID",id:"animated-emoji-id",level:3},{value:"Static emoji ID",id:"static-emoji-id",level:3},{value:"Examples",id:"examples",level:2},{value:"With custom emoji:",id:"with-custom-emoji",level:3},{value:"With default emoji",id:"with-default-emoji",level:3}],g={toc:b},k="wrapper";function h(e){var t=e,{components:a}=t,r=u(t,["components"]);return(0,n.kt)(k,p(m(m({},g),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$addCmdReactions")," adds single or multiple reactions to author's message."),(0,n.kt)("h2",m({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$addCmdReactions[emoji;emoji;...]\n")),(0,n.kt)("h2",m({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",m({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",m({parentName:"tr"},{align:"left"}),"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"emoji"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"A default Discord emoji or a custom emoji with ID"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"string")))),(0,n.kt)("h2",m({},{id:"custom-emoji-information"}),"Custom Emoji Information"),(0,n.kt)("h3",m({},{id:"animated-emoji-id"}),"Animated emoji ID"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"<a:emoji:1234567890>")),(0,n.kt)("h3",m({},{id:"static-emoji-id"}),"Static emoji ID"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"<:emoji:1234567890>")),(0,n.kt)("h2",m({},{id:"examples"}),"Examples"),(0,n.kt)("h3",m({},{id:"with-custom-emoji"}),"With custom emoji:"),(0,n.kt)("p",null,"This adds emojis to author's message."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "add-cmd-reactions",\n  code: `\n  $addCmdReactions[<:mns_neoXD:961249981107413022>;<:mns_lolie:966349758203559977>]\n  `\n});\n')),(0,n.kt)("h3",m({},{id:"with-default-emoji"}),"With default emoji"),(0,n.kt)("p",null,"This also adds emojis to author's message as well."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "add-cmd-reactions",\n  code: `\n  $addCmdReactions[\ud83d\ude0b;\ud83e\udd20]\n  `\n});\n')))}h.isMDXComponent=!0}}]);