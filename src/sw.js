if(!self.define){let e,s={};const r=(r,d)=>(r=new URL(r+".js",d).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(d,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const o=e=>r(e,i),n={module:{uri:i},exports:c,require:o};s[i]=Promise.all(d.map((e=>n[e]||o(e)))).then((e=>(a(...e),c)))}}define(["./workbox-f065e1a2"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"407.bundle.js",revision:"24f57b0e303abd47ae0aebc4d6025bc8"},{url:"407.bundle.js.LICENSE.txt",revision:"4543a266b94f6452b8bf095f1a1a6139"},{url:"dark_color_scheme.bundle.js",revision:"1bbb65019f33093d5d663869821933d3"},{url:"en/index.html",revision:"9227ddc264b2b66a9d340ea319316eaf"},{url:"en/manifest.json",revision:"f7d202a0b0310e3cc9c33e201d2251fb"},{url:"en/update-history/index.html",revision:"1a3f03be1defb5c426a3bb83b2b651e7"},{url:"index.html",revision:"1c9c4787f42ec1fe49f0a020a7a4444d"},{url:"is_embedded_in_other_website.bundle.js",revision:"0be7c3203dc395c4d14a1871da1c8e8b"},{url:"ko.bundle.js",revision:"db1c435bca1acd1561e8c6780f5dba0e"},{url:"ko/index.html",revision:"837d5de12e0a4a45d953c4f01113e2f1"},{url:"ko/manifest.json",revision:"2aed1a9edeec427100fa1ffafb96b7f3"},{url:"ko/update-history/index.html",revision:"e8283cc36bb93752cfc9b460432e96a3"},{url:"main.bundle.js",revision:"fac6ddbad875bcc2d1eb49706dc1378c"},{url:"resources/assets/images/IDI_PIKAICON-0.png",revision:"818a5aabfd92f99c7d1f98b8361d3c7f"},{url:"resources/assets/images/IDI_PIKAICON-1_gap_filled.png",revision:"f3f21ca643c4ff5e692b8de485ae8004"},{url:"resources/assets/images/IDI_PIKAICON-1_gap_filled_192.png",revision:"dac21c95f585cb036ad61246d3d722b2"},{url:"resources/assets/images/IDI_PIKAICON-1_gap_filled_512.png",revision:"6cbcbdfef391a347ba1643574bd7ed1b"},{url:"resources/assets/images/controls.png",revision:"5275b91d01abe46c45f43fe59c95d170"},{url:"resources/assets/images/controls_ko.png",revision:"c5c52fd2313b63d024ad06060609c84f"},{url:"resources/assets/images/screenshot.png",revision:"3867bffd4bef3786694f9ebeb77d4d1d"},{url:"resources/assets/images/sprite_sheet.json",revision:"14faea07d4dab3771ee47190de6d59d3"},{url:"resources/assets/images/sprite_sheet.png",revision:"4fc3712243966195534ee80e1ca81364"},{url:"resources/assets/sounds/WAVE140_1.wav",revision:"a31e486f9bf2dfa2548a4208d78edc1f"},{url:"resources/assets/sounds/WAVE141_1.wav",revision:"e6b661515829712630bbead41d86ee8d"},{url:"resources/assets/sounds/WAVE142_1.wav",revision:"918c03522e79304ad8bb8891c35f58a3"},{url:"resources/assets/sounds/WAVE143_1.wav",revision:"eb2ac1cb1900cd970cdd86be87ebea11"},{url:"resources/assets/sounds/WAVE144_1.wav",revision:"6b16d233bc68aea2a7d071eee85da431"},{url:"resources/assets/sounds/WAVE145_1.wav",revision:"85da47de3575fbedaef71188fe4fc05f"},{url:"resources/assets/sounds/WAVE146_1.wav",revision:"9976daa90c7fd3f7008cf30e7cda8825"},{url:"resources/assets/sounds/bgm.mp3",revision:"029ae684624b50612c09a255264b2d93"},{url:"resources/style.css",revision:"65d2a2b0c6541fef3827b80e8b40864d"},{url:"runtime.bundle.js",revision:"5515a84be76013d8df230538de8a73bc"},{url:"zh/index.html",revision:"ec77aa5c486243419f294426a8682f40"},{url:"zh/manifest.json",revision:"d0437bd3960760ca5ac192e22ccb5cc6"},{url:"zh/update-history/index.html",revision:"9b267918a81aff39af6fab7e66017fd7"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=sw.js.map