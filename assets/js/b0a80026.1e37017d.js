"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[32977],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return t?r.createElement(f,l(l({ref:n},d),{},{components:t})):r.createElement(f,l({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},54410:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={title:"$djsEval",description:"Eval command using discord.js"},l=void 0,i={unversionedId:"functions/djseval",id:"version-5.5.5/functions/djseval",title:"$djsEval",description:"Eval command using discord.js",source:"@site/versioned_docs/version-5.5.5/functions/djseval.md",sourceDirName:"functions",slug:"/functions/djseval",permalink:"/docs/5.5.5/functions/djseval",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1688314716,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{title:"$djsEval",description:"Eval command using discord.js"},sidebar:"docs",previous:{title:"$divide",permalink:"/docs/5.5.5/functions/divide"},next:{title:"$dm",permalink:"/docs/5.5.5/functions/dm"}},s={},c=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],d={toc:c},u="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function evals the given discord.js code"),(0,a.kt)("p",null,"You should restrict the use of this function to yourself"),(0,a.kt)("h4",{id:"fields"},"Fields"),(0,a.kt)("p",null,"This function has 1 required field"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Code ","(","Required",")"),(0,a.kt)("li",{parentName:"ol"},"Return Code ","(","Optional",")")),(0,a.kt)("p",null,"Raw Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"$djsEval[code;return code (yes/no) (optional)]")),(0,a.kt)("h4",{id:"options"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Code - The discord.js code we're evaling"),(0,a.kt)("li",{parentName:"ul"},"Return Code - Returns the output of the code without message.channel.send","(","...",")")),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Evaling a pre-written code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\nname: \"eval\",\ncode: `\n$djsEval[\nfor(let i=0;i<10;i++) {\nmessage.channel.send('hello')\n}\n]\n`\n})\n")),(0,a.kt)("p",null,"Evaling the user's message"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "eval",\ncode: `\n$djsEval[$message]\n`\n})\n')),(0,a.kt)("p",null,"With the optional field"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\nname: \"eval\",\ncode: `\n$djsEval[let a = 'apple'\na;yes]\n`\n//Will return 'apple' without m.channel.send(...)\n})\n")))}p.isMDXComponent=!0}}]);