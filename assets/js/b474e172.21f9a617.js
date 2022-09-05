"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[7772],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return m}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(o),m=n,b=f["".concat(l,".").concat(m)]||f[m]||p[m]||i;return o?r.createElement(b,a(a({ref:t},u),{},{components:o})):r.createElement(b,a({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},270:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var r=o(7462),n=o(3366),i=(o(7294),o(3905)),a=["components"],s={},l=void 0,c={unversionedId:"flashbots-mev-boost/architecture/MEV-boost-specifications",id:"flashbots-mev-boost/architecture/MEV-boost-specifications",isDocsHomePage:!1,title:"MEV-boost-specifications",description:"MEV-Boost Specifications",source:"@site/docs/flashbots-mev-boost/architecture/MEV-boost-specifications.md",sourceDirName:"flashbots-mev-boost/architecture",slug:"/flashbots-mev-boost/architecture/MEV-boost-specifications",permalink:"/flashbots-mev-boost/architecture/MEV-boost-specifications",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"introduction",permalink:"/flashbots-mev-boost/introduction"},next:{title:"MEV-boost-block-proposal",permalink:"/flashbots-mev-boost/architecture/MEV-boost-block-proposal"}},u=[{value:"MEV-Boost Specifications",id:"mev-boost-specifications",children:[]},{value:"Fundamental Specifications",id:"fundamental-specifications",children:[]},{value:"Tooling and Related Repositories",id:"tooling-and-related-repositories",children:[]}],p={toc:u};function f(e){var t=e.components,o=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"mev-boost-specifications"},"MEV-Boost Specifications"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"mev-boost")," implements the latest versions of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/builder-specs/blob/main/specs/builder.md"},"Ethereum Builder Specification"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Builder API is a temporary solution for ",(0,i.kt)("a",{parentName:"li",href:"https://ethresear.ch/t/proposer-block-builder-separation-friendly-fee-market-designs/9725"},"Proposer-builder separation"),"\n\xa0(PBS), and aims to separate the roles of a validator into block proposing and block building. ",(0,i.kt)("a",{parentName:"li",href:"https://ethereum.github.io/builder-specs/#/Builder/status"},"You can interact with a rendered version of the Builder API here."))),(0,i.kt)("h2",{id:"fundamental-specifications"},"Fundamental Specifications"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/beacon-APIs"},"Ethereum Beacon APIs")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Collection of RESTful APIs exposed by a beacon node aiming to facilitate ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/validator.md"},"Phase 0")," of Ethereum consensus.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/consensus-specs"},"Consensus Specs")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Current Ethereum PoS consensus specifications.")),(0,i.kt)("h2",{id:"tooling-and-related-repositories"},"Tooling and Related Repositories"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/flashbots/mev-boost"},"MEV-Boost")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/flashbots/mev-boost-relay"},"MEV-Boost Relay")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/flashbots/go-boost-utils"},"Go Boost Utils")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/flashbots/boost-geth-builder"},"MEV-Boost Builder")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://0xpanoramix.github.io/flashbots-boost-status/"},"Relay Status Page\xa0"))))}f.isMDXComponent=!0}}]);