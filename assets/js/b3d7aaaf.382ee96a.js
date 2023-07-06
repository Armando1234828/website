"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[88346],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?o.createElement(h,r(r({ref:t},s),{},{components:n})):o.createElement(h,r({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,r[1]=p;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const i={title:"Autocomplete",description:"This page covers everything about the autocomplete property of Application Commands.",id:"interaction-autocomplete"},r=void 0,p={unversionedId:"guides/Application Commands/interaction-autocomplete",id:"version-6.3.0/guides/Application Commands/interaction-autocomplete",title:"Autocomplete",description:"This page covers everything about the autocomplete property of Application Commands.",source:"@site/versioned_docs/version-6.3.0/guides/Application Commands/4autocomplete.md",sourceDirName:"guides/Application Commands",slug:"/guides/Application Commands/interaction-autocomplete",permalink:"/docs/guides/Application Commands/interaction-autocomplete",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1688622757,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{title:"Autocomplete",description:"This page covers everything about the autocomplete property of Application Commands.",id:"interaction-autocomplete"},sidebar:"docs",previous:{title:"Subcommand Groups",permalink:"/docs/guides/Application Commands/interaction-subcommandgroups"},next:{title:"Localization",permalink:"/docs/guides/Application Commands/interaction-localization"}},l={},c=[{value:"Usage",id:"usage",level:4}],s={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are multiple ways of using ",(0,a.kt)("inlineCode",{parentName:"p"},"$autoCompleteRespond"),", you can either use JSON or the simple aoi.js way."),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$autoCompleteRespond[OptionName;OptionReply;...]\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'$autoCompleteRespond[[{ \n    "name" : "Option Name One",\n    "value" : "Option Reply 1"\n  }, {\n    "name" : "Option Name Two",\n    "value" : "Option Reply 2"\n  }]]\n')),(0,a.kt)("p",null,'Create the slash command, this will create a global application command with the name of "example" with an option which uses autoComplete:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: \'createApplicationCommand\',\n    code: `\n  $createApplicationCommand[global;example;Awesome example interaction command with auto-complete!;true;slash;[{\n    "name": "option", \n    "description": "First option!",\n    "required": false,\n    "type": 3, \n    "autocomplete": true\n}]]`\n});\n')),(0,a.kt)("p",null,"Checking if autoComplete equals ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", if so it will respond with the given respond (addition of the code above):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "example",\n    prototype: "slash",\n    $if: "old",\n    code: `\n  $if[$isAutocomplete==true]\n  $autoCompleteRespond[First option;You selected the first option, therefore I\'m responding with this!;Second option;You selected the first second, therefore I\'m responding with this!]\n  $else\n  $interactionReply[$slashOption[option]]\n  $endif\n  `\n});\n')),(0,a.kt)("p",null,'Create the slash-command, this will create a global application command with the name "example": '),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: \'createApplicationCommand\',\n    code: `\n  $createApplicationCommand[global;example;Awesome example interaction command with auto-complete!;true;slash;[{\n    "name": "option",\n    "description": "First option with autocomplete.",\n    "required": false, \n    "type": 3,\n    "autocomplete": true \n  }, {\n    "name": "anotheroption",\n    "description": "Another option.",\n    "required": false,\n    "type": 3\n}]]`\n});\n')),(0,a.kt)("p",null,"Using JSON and checking if autoComplete equals ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", if so it will respond with the given response :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "example",\n    prototype: "slash",\n    $if: "old",\n    code: `\n  $if[$isAutocomplete==true]\n  $autoCompleteRespond[[{ \n    "name" : "First Option",\n    "value" : "You selected the first option, therefore I\\\'m responding with this!"\n  }, {\n    "name" : "Second Option",\n    "value" : "You selected the second option, therefore I\\\'m responding with this!"\n  }]]\n  $else\n  $interactionReply[$slashOption[option] - autocomplete #SEMI# $slashOption[anotheroption] - false autocomplete;;;;everyone]\n  $endif\n  `\n});\n')))}u.isMDXComponent=!0}}]);