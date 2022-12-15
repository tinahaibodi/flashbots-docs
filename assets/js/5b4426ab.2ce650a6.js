"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[5154],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,d=u["".concat(c,".").concat(m)]||u[m]||h[m]||o;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6390:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>i,toc:()=>c,default:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"Alchemy Provider"},s=void 0,i={unversionedId:"flashbots-auction/searchers/libraries/alchemyprovider",id:"flashbots-auction/searchers/libraries/alchemyprovider",isDocsHomePage:!1,title:"Alchemy Provider",description:"The Alchemy SDK makes getting started, shipping builds, and accessing support faster and more streamlined. For instance, it provides high-level access to the ethsendPrivateTransaction and ethcancelPrivateTransaction RPC endpoints.",source:"@site/docs/flashbots-auction/searchers/libraries/alchemyprovider.md",sourceDirName:"flashbots-auction/searchers/libraries",slug:"/flashbots-auction/searchers/libraries/alchemyprovider",permalink:"/flashbots-auction/searchers/libraries/alchemyprovider",tags:[],version:"current",frontMatter:{title:"Alchemy Provider"},sidebar:"docs",previous:{title:"Web3.py Provider",permalink:"/flashbots-auction/searchers/libraries/web3py-provider"},next:{title:"Other Resources",permalink:"/flashbots-auction/other-resources"}},c=[],l={toc:c};function p({components:e,...t}){return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Alchemy SDK makes getting started, shipping builds, and accessing support faster and more streamlined. For instance, it provides high-level access to the ",(0,a.kt)("inlineCode",{parentName:"p"},"eth_sendPrivateTransaction")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"eth_cancelPrivateTransaction")," RPC endpoints."),(0,a.kt)("p",null,"Benefits of the Alchemy SDK include providing:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. Automatic management of your Flashbots reputation")," - the SDK takes on the work of actively, and manually, managing your reputation. Learn more about reputation ",(0,a.kt)("a",{parentName:"p",href:"https://docs.flashbots.net/flashbots-auction/searchers/advanced/reputation#querying-reputation"},"here")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. A superset of the ethers.js Provider library plus the suite of Alchemy APIs")," - the Alchemy Provider exposes all Flashbots JSON-RPC endpoints. The Flashbots API can be used natively with the core EVM APIs as well as the suite of Alchemy APIs"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3. Webhook based notifications on ",(0,a.kt)("a",{parentName:"strong",href:"https://docs.alchemy.com/docs/alchemy-notify#features"},"included and dropped private transactions"))),(0,a.kt)("p",null,"To get started:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.alchemy.com/sdk"},"https://www.alchemy.com/sdk"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://docs.alchemy.com/reference/eth-sendprivatetransaction"},"https://docs.alchemy.com/reference/eth-sendprivatetransaction"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/alchemyplatform/alchemy-sdk-js"},"https://github.com/alchemyplatform/alchemy-sdk-js")))))}p.isMDXComponent=!0}}]);