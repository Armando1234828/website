"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[15038],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>h});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=o.createContext({}),u=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=u(t.components);return o.createElement(c.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(h,i(i({ref:e},l),{},{components:n})):o.createElement(h,i({ref:e},l))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[p]="string"==typeof t?t:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45495:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={title:"Author button",description:"A tutorial on how to setup author button with explanation on how it works!",authors:{name:"@dodogames",title:"Member - 632607624742961153",userid:"632607624742961153",url:"https://discord.com/users/632607624742961153",image_url:"https://cdn.discordapp.com/avatars/632607624742961153/5a4dc9bcccf66c5372f410c40d267708.png"},tags:["v6","aoi.js"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},i="Author button",s={permalink:"/wikis/posts/632607624742961153/mnfe6",source:"@site/forums/posts/632607624742961153/mnfe6.md",title:"Author button",description:"A tutorial on how to setup author button with explanation on how it works!",date:"2023-07-01T23:56:31.000Z",formattedDate:"July 1, 2023",tags:[{label:"v6",permalink:"/wikis/tags/v-6"},{label:"aoi.js",permalink:"/wikis/tags/aoi-js"}],hasTruncateMarker:!1,authors:[{name:"@dodogames",title:"Member - 632607624742961153",userid:"632607624742961153",url:"https://discord.com/users/632607624742961153",image_url:"https://cdn.discordapp.com/avatars/632607624742961153/5a4dc9bcccf66c5372f410c40d267708.png",imageURL:"https://cdn.discordapp.com/avatars/632607624742961153/5a4dc9bcccf66c5372f410c40d267708.png"}],frontMatter:{title:"Author button",description:"A tutorial on how to setup author button with explanation on how it works!",authors:{name:"@dodogames",title:"Member - 632607624742961153",userid:"632607624742961153",url:"https://discord.com/users/632607624742961153",image_url:"https://cdn.discordapp.com/avatars/632607624742961153/5a4dc9bcccf66c5372f410c40d267708.png",imageURL:"https://cdn.discordapp.com/avatars/632607624742961153/5a4dc9bcccf66c5372f410c40d267708.png"},tags:["v6","aoi.js"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Long Serverinfo command",permalink:"/wikis/posts/632607624742961153/iiwq2"},nextItem:{title:"Kick command",permalink:"/wikis/posts/689364013297041409/3rabq"}},c={authorsImageUrls:[void 0]},u=[],l={toc:u},p="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(p,(0,o.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Author button is a way to allow the person who executed the command to be the only one able to interact with buttons rather than everyone. This is useful to prevent interrupting with other people who're using your bot commands, for example such as blackjack game, help command, etc."),(0,r.kt)("h1",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Aoi.parser installed (for ephemeral messages) otherwise ephemeral won't work except for the rest of the code"),(0,r.kt)("li",{parentName:"ul"},"Must have the event ",(0,r.kt)("inlineCode",{parentName:"li"},"onInteractionCreate")," for this to work (if it wasn't obvious)")),(0,r.kt)("h1",{id:"example-author-button-code"},"Example author button code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = [{\n    name: "authorButton",\n    info: {\n        description: "Shows an example of a Author Button"\n      },\n    code: `\n    $title[Author Button]\n    $description[Press the Button!]\n    $color[Random]\n    $addButton[1;Example;primary;customID_$authorID;false]`\n    }, {\n      type: "interaction",\n      prototype: "button",\n      code:`\n    $interactionReply[;{newEmbed:{title:Author Button}{description:First Page.}{color:Random}}]\n    \n    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You\'re not the author of this command! {options:{ephemeral:true}}\n    {extraOptions:{interaction:true}}]\n    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==customID;]`\n    }]\n')),(0,r.kt)("h1",{id:"explanation"},"Explanation"),(0,r.kt)("p",null,"We start by adding the button using the function ",(0,r.kt)("inlineCode",{parentName:"p"},"$addButton"),". "),(0,r.kt)("p",null,"We then make sure that it has ",(0,r.kt)("inlineCode",{parentName:"p"},"_$authorID")," within the custom id like ",(0,r.kt)("inlineCode",{parentName:"p"},"customID_$authorID")," but then we start to create an author interaction using ",(0,r.kt)("inlineCode",{parentName:"p"},"$interactionData[customId]")," which allows us to return the custom id name of the button we have just created below."),(0,r.kt)("p",null,"As a result, we remove the property ",(0,r.kt)("inlineCode",{parentName:"p"},"name:")," from the button command and we start separating the custom id and the author id using ",(0,r.kt)("inlineCode",{parentName:"p"},"$advancedTextSplit")," as we have ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," in our custom id which makes it easy to do that!"),(0,r.kt)("p",null,"Finally, we then add our first ",(0,r.kt)("inlineCode",{parentName:"p"},"$onlyIf")," at the bottom of our interaction code to check if the button has been clicked by returning it's custom id name and second ",(0,r.kt)("inlineCode",{parentName:"p"},"$onlyif")," to check if the user is the same person who just ran the command to prevent other users from interacting with the author who ran the command."),(0,r.kt)("p",null,"Obviously, we respond to the button using ",(0,r.kt)("inlineCode",{parentName:"p"},"$interactionReply")," and we're done after that! Our author button should work now!"))}d.isMDXComponent=!0}}]);