"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[3463],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,f=h["".concat(l,".").concat(d)]||h[d]||u[d]||a;return n?o.createElement(f,s(s({ref:t},p),{},{components:n})):o.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},237:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),s=["components"],i={},l=void 0,c={unversionedId:"flashbots-mev-boost/FAQ",id:"flashbots-mev-boost/FAQ",isDocsHomePage:!1,title:"FAQ",description:"Can I connect to multiple relays with MEV-Boost?",source:"@site/docs/flashbots-mev-boost/FAQ.md",sourceDirName:"flashbots-mev-boost",slug:"/flashbots-mev-boost/FAQ",permalink:"/flashbots-mev-boost/FAQ",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Vulnerabilities",permalink:"/flashbots-mev-boost/security"},next:{title:"glossary",permalink:"/flashbots-mev-boost/glossary"}},p=[],u={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Can I connect to multiple relays with MEV-Boost?")," "),(0,a.kt)("p",null,"Yes. You can add multiple relays comma-separated to the ",(0,a.kt)("inlineCode",{parentName:"p"},"-relays")," flag,\nlike this: ",(0,a.kt)("inlineCode",{parentName:"p"},"-relays https://relay1,https://relay2")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"How should I think about running ",(0,a.kt)("inlineCode",{parentName:"strong"},"mev-boost")," vs regular block construction?")),(0,a.kt)("p",null,"The alternative to running ",(0,a.kt)("inlineCode",{parentName:"p"},"mev-boost")," would be to get blocks from your local execution client, which can only get transactions from the public mempool and is not optimized for MEV extraction, meaning your rewards are likely to be less."),(0,a.kt)("p",null,"Or to implement your own builder, which is a complicated task and still leaves you with the problem of finding transactions that extract MEV and are not going through the public mempool."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Can I check relay status when starting MEV-Boost?")),(0,a.kt)("p",null,"Yes. The ",(0,a.kt)("inlineCode",{parentName:"p"},"-relay-check")," flag can be called to check the status of relays, will return an error if none of the configured relays are responsive. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"#Example -relay-check call:\n\n./mev-boost -goerli -relays -relay-check https://0xafa4c6985aa049fb79dd37010438cfebeb0f2bd42b115b89dd678dab0670c1de38da0c4e9138c9290a398ecd9a0b3110@builder-relay-goerli.flashbots.net\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"What is the difference between a beacon node, validator, and validator client?")," "),(0,a.kt)("p",null,'A "',(0,a.kt)("strong",{parentName:"p"},"node"),'" or \u201c',(0,a.kt)("strong",{parentName:"p"},"beacon node"),"\u201d follows and reads the beacon chain. ",(0,a.kt)("strong",{parentName:"p"},"validator clients (VC)")," are specialized software that stake 32 ETH as collateral within Ethereum's\xa0",(0,a.kt)("strong",{parentName:"p"},"consensus layer")," in order to participate in consensus duties. Validator clients are responsible for executing duties, such as proposing blocks and signing of attestations within Ethereum's proof-of-stake consensus mechanism, and will fully replace proof-of-work miners after\xa0",(0,a.kt)("a",{parentName:"p",href:"https://ethereum.org/en/upgrades/merge/"},"The Merge"),". ",(0,a.kt)("strong",{parentName:"p"},"validators")," most often refers to a validator client instance, but can refer to an individual that physically manages a validator client. This is an optional role in which a user posts ETH as collateral to a validator client in order to verify and attest to blocks, and seek financial returns in exchange for building and securing the protocol. This is similar to proof-of-work networks in which miners provide collateral in the form of hardware/hash-power to seek returns in exchange for building and securing the protocol. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/validator.md"},"Read more here.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"What prevents block proposers from stealing MEV from submitted builders\u2019 blocks?")),(0,a.kt)("p",null,'Slashing penalties. A builder provides the proposer with a "blind" execution layer header to incorporate into a block, and a "value" amount which will be transferred to the proposer once they create a block using this header. Once a proposer signs a block with a header, they are bound to this choice (or risk being slashed due to equivocation). Should a validator wish to steal MEV from a builder, they would need to sign a second block including the exploited MEV, which would result in a slashing penalty. This penalty is significant enough to discourage this behavior, allowing the builder to reveal the blinded transactions without the possibility of the proposer tampering with them, or stealing MEV. ',(0,a.kt)("a",{parentName:"p",href:"https://consensys.net/blog/codefi/rewards-and-penalties-on-ethereum-20-phase-0/"},"Read more about slashing events here.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Does MEV-Boost have knowledge about the Beacon Chain?")," "),(0,a.kt)("p",null,"No. MEV-boost has no knowledge about the beacon chain, such as which slots were proposed, etc."))}h.isMDXComponent=!0}}]);