"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[71460],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>y,default:()=>N,frontMatter:()=>m,metadata:()=>g,toc:()=>b});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&c(e,n,t[n]);return e},f=(e,t)=>l(e,o(t)),d=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$onlyIfMessageContains",description:"$onlyIfMessageContains \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u044f\u0442\u0438\u043c\u0435 \u0447\u0438 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u043c\u0456\u0441\u0442\u0438\u0442\u044c \u0434\u0430\u043d\u0438\u0439 \u0442\u0435\u043a\u0441\u0442, \u0430 \u044f\u043a\u0449\u043e \u043d\u0435 \u043f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u043f\u0440\u043e \u043f\u043e\u043c\u0438\u043b\u043a\u0443.",id:"onlyIfMessageContains"},y=void 0,g={unversionedId:"functions/util-related/onlyIfMessageContains",id:"version-6.4.0/functions/util-related/onlyIfMessageContains",title:"$onlyIfMessageContains",description:"$onlyIfMessageContains \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u044f\u0442\u0438\u043c\u0435 \u0447\u0438 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u043c\u0456\u0441\u0442\u0438\u0442\u044c \u0434\u0430\u043d\u0438\u0439 \u0442\u0435\u043a\u0441\u0442, \u0430 \u044f\u043a\u0449\u043e \u043d\u0435 \u043f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u043f\u0440\u043e \u043f\u043e\u043c\u0438\u043b\u043a\u0443.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/onlyIfMessageContains.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/onlyIfMessageContains",permalink:"/uk/docs/functions/util-related/onlyIfMessageContains",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$onlyIfMessageContains",description:"$onlyIfMessageContains \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u044f\u0442\u0438\u043c\u0435 \u0447\u0438 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u043c\u0456\u0441\u0442\u0438\u0442\u044c \u0434\u0430\u043d\u0438\u0439 \u0442\u0435\u043a\u0441\u0442, \u0430 \u044f\u043a\u0449\u043e \u043d\u0435 \u043f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u043f\u0440\u043e \u043f\u043e\u043c\u0438\u043b\u043a\u0443.",id:"onlyIfMessageContains"},sidebar:"docs",previous:{title:"$onlyIf",permalink:"/uk/docs/functions/util-related/onlyIf"},next:{title:"$onlyNSFW",permalink:"/uk/docs/functions/util-related/onlyNSFW"}},k={},b=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],v={toc:b},O="wrapper";function N(e){var t=e,{components:n}=t,a=d(t,["components"]);return(0,r.kt)(O,f(u(u({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$onlyIfMessageContains")," \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u044c \u0447\u0438 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u043c\u0456\u0441\u0442\u0438\u0442\u044c \u0446\u0435\u0439 \u0442\u0435\u043a\u0441\u0442, \u0430 \u044f\u043a\u0449\u043e \u043d\u0435 \u043f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f."),(0,r.kt)("h2",u({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$onlyIfMessageContains[content;...text;error]\n")),(0,r.kt)("h2",u({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,r.kt)("th",u({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0437\u043c\u0456\u0441\u0442"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u041f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f, \u044f\u043a\u0435 \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u0434\u0430\u043d\u0438\u0439 \u0442\u0435\u043a\u0441\u0442."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0442\u0435\u043a\u0441\u0442"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0422\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0438 \u0443 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u0456."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u043f\u043e\u043c\u0438\u043b\u043a\u0430"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u043e\u0432\u0435\u0440\u043d\u0435\u043d\u043d\u044f."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")))),(0,r.kt)("h2",u({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,r.kt)("p",null,'\u0426\u0435 \u043f\u043e\u0432\u0435\u0440\u043d\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u043f\u0440\u043e \u043f\u043e\u043c\u0438\u043b\u043a\u0443 \u044f\u043a \u043f\u0440\u043e "aoi.js" \u043d\u0435 \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0430\u0454\u0442\u044c\u0441\u044f \u0432 "\u041f\u0440\u0438\u0432\u0456\u0442!":'),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "onlyIfMessageContains",\n    \u043a\u043e\u0434: `\n    Ok.\n    $onlyIfMessageContains[Hello!;aoi.js;Couldn\'t find that word!]\n    `\n});\n')))}N.isMDXComponent=!0}}]);