"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[64957],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||l;return t?r.createElement(f,o(o({ref:n},d),{},{components:t})):r.createElement(f,o({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},78208:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>k,default:()=>w,frontMatter:()=>f,metadata:()=>b,toc:()=>y});var r=t(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&d(e,t,n[t]);if(i)for(var t of i(n))p.call(n,t)&&d(e,t,n[t]);return e},s=(e,n)=>l(e,o(n)),m=(e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t};const f={title:"$channelCooldown",description:"$channelCooldown \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442 \u043e\u0442\u043a\u0430\u0442 \u043f\u0440\u0438\u0432\u044f\u0437\u043a\u0438 \u043a \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u043c\u0443 \u043a\u0430\u043d\u0430\u043b\u0443 \u043f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b.",id:"channelCooldown"},k=void 0,b={unversionedId:"functions/variables-related/channelCooldown",id:"version-6.4.0/functions/variables-related/channelCooldown",title:"$channelCooldown",description:"$channelCooldown \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442 \u043e\u0442\u043a\u0430\u0442 \u043f\u0440\u0438\u0432\u044f\u0437\u043a\u0438 \u043a \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u043c\u0443 \u043a\u0430\u043d\u0430\u043b\u0443 \u043f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/variables-related/channelCooldown.md",sourceDirName:"functions/variables-related",slug:"/functions/variables-related/channelCooldown",permalink:"/ru/docs/functions/variables-related/channelCooldown",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"16 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$channelCooldown",description:"$channelCooldown \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442 \u043e\u0442\u043a\u0430\u0442 \u043f\u0440\u0438\u0432\u044f\u0437\u043a\u0438 \u043a \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u043c\u0443 \u043a\u0430\u043d\u0430\u043b\u0443 \u043f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b.",id:"channelCooldown"},sidebar:"docs",previous:{title:"$advanceCooldown",permalink:"/ru/docs/functions/variables-related/advanceCooldown"},next:{title:"$cooldown",permalink:"/ru/docs/functions/variables-related/cooldown"}},v={},y=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],g={toc:y},h="wrapper";function w(e){var n=e,{components:t}=n,a=m(n,["components"]);return(0,r.kt)(h,s(u(u({},g),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$channelCooldown")," \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442 \u043f\u0435\u0440\u0435\u0437\u0430\u0440\u044f\u0434\u043a\u0443 \u043f\u043e \u043a\u0430\u043d\u0430\u043b\u0443."),(0,r.kt)("h2",u({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$channelCooldown[time;errorMessage]\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043e\u0441\u0442\u0430\u0432\u0448\u0443\u044e\u0441\u044f \u043f\u0435\u0440\u0435\u0437\u0430\u0440\u044f\u0434\u043a\u0443 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,r.kt)("inlineCode",{parentName:"li"},"$channelCooldown")," \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"%time%"))," \u0438\u043b\u0438 \u043b\u044e\u0431\u043e\u0439 \u0438\u0437 \u043d\u0438\u0436\u0435.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%time%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%year%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%month%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%week%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%day%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%hour%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%min%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%sec%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%ms%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%fullTime%"))))),(0,r.kt)("h2",u({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Nbg"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,r.kt)("th",u({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0432\u0440\u0435\u043c\u044f"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0412\u0440\u0435\u043c\u044f \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f \u0442\u0430\u0439\u043c\u0435\u0440\u0430"),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0448\u0438\u0431\u043a\u0438"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435, \u043a\u043e\u0433\u0434\u0430 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0439 \u0442\u0430\u0439\u043c\u0435\u0440 \u043f\u0435\u0440\u0435\u0437\u0430\u0440\u044f\u0434\u043a\u0438 \u043e\u0441\u0442\u0430\u0435\u0442\u0441\u044f \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u043c."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"false")))),(0,r.kt)("h2",u({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,r.kt)("p",null,"\u042d\u0442\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442 \u043e\u0442\u043a\u0430\u0442 \u0434\u043b\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0432 \u043a\u0430\u043d\u0430\u043b\u0435, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0431\u044b\u043b\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430, \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043e\u0441\u0442\u0430\u0432\u0448\u0443\u044e\u0441\u044f \u043f\u0435\u0440\u0435\u0437\u0430\u0440\u044f\u0434\u043a\u0443 :"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    \u0438\u043c\u044f: 'channelCooldown',\n    \u043a\u043e\u0434: `\n  hello\n  $channelCooldown[2m;Please wait %time% to execute this command again.]\n  \xab\n});\n")))}w.isMDXComponent=!0}}]);