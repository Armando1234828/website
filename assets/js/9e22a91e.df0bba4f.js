"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[19026],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,d=c["".concat(s,".").concat(m)]||c[m]||k[m]||o;return n?a.createElement(d,i(i({ref:t},f),{},{components:n})):a.createElement(d,i({ref:t},f))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"$webhookExists",description:"Checks if a webhook exists."},i=void 0,l={unversionedId:"functions/webhookexists",id:"version-5.5.5/functions/webhookexists",title:"$webhookExists",description:"Checks if a webhook exists.",source:"@site/versioned_docs/version-5.5.5/functions/webhookexists.md",sourceDirName:"functions",slug:"/functions/webhookexists",permalink:"/docs/5.5.5/functions/webhookexists",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687147935,formattedLastUpdatedAt:"Jun 19, 2023",frontMatter:{title:"$webhookExists",description:"Checks if a webhook exists."},sidebar:"docs",previous:{title:"$webhook",permalink:"/docs/5.5.5/functions/webhook"},next:{title:"$year",permalink:"/docs/5.5.5/functions/year"}},s={},p=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Examples",id:"examples",level:2}],f={toc:p},c="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function checks if the given credentials lead to an existing webhook."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"How to find webhook's id & token?"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"url",(0,r.kt)("sup",{parentName:"li",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("li",{parentName:"ul"},"id",(0,r.kt)("sup",{parentName:"li",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,r.kt)("li",{parentName:"ul"},"token",(0,r.kt)("sup",{parentName:"li",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))))),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$webhookExists[webhook id;webhook token]\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"webhook id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The webhook's id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"webhook token"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The webhook's token"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "webhook-exists",\n  code: `\n  $webhookExists[793312378162642975;paNWUYLC22oL-t2hbYeu3zrwWXNfVxjn4TmDDVTISNVRbytCbptYM4DETJDTPzG-1JcA] \n  ` \n//This returns true\n});\n\nbot.command({\n  name: "webhook-exists",\n  code: `\n  $webhookExists[7934564363642975;paNWUYLC22oL-t2hnkldrneKLNFeklnUOknefwmOI34Ahgf] \n  ` \n//This returns false\n});\n')),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},(0,r.kt)("a",{parentName:"li",href:"https://discord.com/api/webhooks/9bNapddEOy832Oba8SWAS_9k2lpf5l9mHzEhj4a6ylREvSugbgkkiEfwg91Xmi8zb"},"https://discord.com/api/webhooks/9bNapddEOy832Oba8SWAS_9k2lpf5l9mHzEhj4a6ylREvSugbgkkiEfwg91Xmi8zb"),"_",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"793312378162642975",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-3"},"9bNapddEOy832Oba8SWAS",(0,r.kt)("em",{parentName:"li"},"9k2lpf5l9mHzEhj4a6ylREvSugbgkkiEfwg91Xmi8zb"),(0,r.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}k.isMDXComponent=!0}}]);