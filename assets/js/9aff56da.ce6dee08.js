"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[3050],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return b}});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(o),b=a,f=d["".concat(l,".").concat(b)]||d[b]||u[b]||n;return o?r.createElement(f,s(s({ref:t},p),{},{components:o})):r.createElement(f,s({ref:t},p))}));function b(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,s=new Array(n);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<n;c++)s[c]=o[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},7702:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=o(7462),a=o(3366),n=(o(7294),o(3905)),s=["components"],i={},l=void 0,c={unversionedId:"flashbots-mev-boost/architecture/MEV-boost-block-proposal",id:"flashbots-mev-boost/architecture/MEV-boost-block-proposal",isDocsHomePage:!1,title:"MEV-boost-block-proposal",description:"MEV-Boost Block Proposal",source:"@site/docs/flashbots-mev-boost/architecture/MEV-boost-block-proposal.md",sourceDirName:"flashbots-mev-boost/architecture",slug:"/flashbots-mev-boost/architecture/MEV-boost-block-proposal",permalink:"/flashbots-mev-boost/architecture/MEV-boost-block-proposal",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"MEV-boost-specifications",permalink:"/flashbots-mev-boost/architecture/MEV-boost-specifications"},next:{title:"relays",permalink:"/flashbots-mev-boost/architecture/relays"}},p=[{value:"MEV-Boost Block Proposal",id:"mev-boost-block-proposal",children:[]}],u={toc:p};function d(e){var t=e.components,o=(0,a.Z)(e,s);return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"mev-boost-block-proposal"},"MEV-Boost Block Proposal"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/flashbots/mev-boost/main/docs/block-proposal.png",alt:"MEV-Boost Block Proposal"})),(0,n.kt)("p",null,"As depicted above and described in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ethereum/builder-specs/blob/main/specs/validator.md#builder----honest-validator"},"Builder \u2014 Honest Validator")," repository, the MEV-Boost block proposal process begins with a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ethereum/builder-specs/blob/main/specs/validator.md#registration-dissemination"},"registration step")," that validators must perform ahead of  proposal duties. Registration ensures builders can craft blocks for a given validator\u2019 block proposal. Once registered, validators wait until selected to propose a block. Once selected, a block proposer building a block on top of a beacon\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"state"),"\xa0in a given\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"slot"),"\xa0must take the following actions to obtain an ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ethereum/consensus-specs/blob/a45ee9bf5b1fde766d69e551a6b1a21fe2531734/specs/merge/beacon-chain.md#executionpayload"},"execution payload"),":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Users/searchers send transactions to block builders through public or private peer-to-peer transaction pools."),(0,n.kt)("li",{parentName:"ol"},"Builders construct execution payloads using received transactions, and parameters the block proposer provided during registration. To process MEV payment, builders set their own address as the payload\u2019s coinbase address and append a transaction to the ",(0,n.kt)("a",{parentName:"li",href:"https://flashbots.notion.site/WIP-Builder-Payments-to-Block-Proposers-530eb36c60ad417a8702dd26da810b72"},"block proposers\u2019 feeRecipient address "),"at the end of their proposed block. The block is then forwarded to relays."),(0,n.kt)("li",{parentName:"ol"},"Relays verify the validity of payloads (including amount of ETH paid to the block proposers\u2019\xa0feeRecipient, and send an ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ethereum/consensus-specs/blob/a45ee9bf5b1fde766d69e551a6b1a21fe2531734/specs/merge/beacon-chain.md#executionpayloadheader"},(0,n.kt)("inlineCode",{parentName:"a"},"ExecutionPayloadHeader"))," (execution payloads stripped of transaction content), to MEV-Boost. MEV-boost selects the most valuable payload and forwards it to the block proposer."),(0,n.kt)("li",{parentName:"ol"},"The block proposer signs the payload and passes it back to MEV-Boost via a ",(0,n.kt)("a",{parentName:"li",href:"https://ethereum.github.io/builder-specs/#/Builder/submitBlindedBlock"},(0,n.kt)("inlineCode",{parentName:"a"},"submitBlindedBlock"))," call, which is forwarded to the relay. Once the relay verifies the proposers\u2019 signature, it responds with the full execution payload body for the validator to use when proposing a ",(0,n.kt)("inlineCode",{parentName:"li"},"SignedBeaconBlock")," to the network.")))}d.isMDXComponent=!0}}]);