(function(){"use strict";var t={2750:function(t,e,n){var r=n(9242),o=n(3396),i=n(7139);const u={class:"container py-4"},s={class:"nav nav-pills nav-fill"},a=(0,o.Uk)("Practice "),c={class:"badge bg-secondary"},l=(0,o.Uk)("Import CSV");function f(t,e,n,r,f,d){const p=(0,o.up)("router-link"),h=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",u,[(0,o._)("nav",s,[(0,o.Wm)(p,{class:"nav-link btn btn-primary",to:"/"},{default:(0,o.w5)((()=>[a,(0,o._)("span",c,(0,i.zw)(t.questionsCount),1)])),_:1}),(0,o.Wm)(p,{class:"nav-link",to:"/import"},{default:(0,o.w5)((()=>[l])),_:1})]),(0,o.Wm)(h)])}var d=n(3517),p=(n(8052),{mixins:[d.Z]}),h=n(89);const m=(0,h.Z)(p,[["render",f],["__scopeId","data-v-e9ad44a4"]]);var v=m,b=n(678);const g={class:"question"},y={class:"mb-4"};function k(t,e,n,r,u,s){const a=(0,o.up)("TextLine");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",g,[(0,o._)("h1",y,(0,i.zw)(s.question),1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.answer,((t,e)=>((0,o.wg)(),(0,o.j4)(a,{text:t,key:e+t.length},null,8,["text"])))),128))]),(0,o._)("button",{onClick:e[0]||(e[0]=(...t)=>s.next&&s.next(...t)),type:"button",class:"btn btn-lg btn-primary"},"Next")],64)}function w(t,e,n,r,u,s){return(0,o.wg)(),(0,o.iD)("p",{onClick:e[0]||(e[0]=t=>u.clicked=!u.clicked),class:(0,i.C_)([{"text--line-contrast":u.clicked},"text--line"])},[(0,o._)("span",null,(0,i.zw)(n.text),1)],2)}var x={name:"TextLine",data(){return{clicked:!1}},props:{text:String},methods:{}};const O=(0,h.Z)(x,[["render",w],["__scopeId","data-v-d41b16a4"]]);var C=O,_={name:"PracticeView",mixins:[d.Z],components:{TextLine:C},data(){return{number:0}},created(){this.next()},computed:{question(){return Object.keys(this.questions)[this.number]},answer(){return this.questions[this.question]}},methods:{next(){const t=this.randomInteger(0,this.questionsCount-1);this.number!==t?this.number=t:this.next()}}};const S=(0,h.Z)(_,[["render",k]]);var j=S;const q=[{path:"/",name:"practice",component:j},{path:"/import",name:"import",component:()=>n.e(6).then(n.bind(n,1394))}],T=(0,b.p7)({history:(0,b.PO)("/inter/"),routes:q});var E=T;(0,r.ri)(v).use(E).mount("#app")},3517:function(t,e){e["Z"]={data(){return{key:"INTERVIEWER_STORAGE"}},computed:{questions(){return this.getQuestions()},questionsCount(){return Object.keys(this.questions).length}},methods:{randomInteger(t,e){return Math.floor(Math.random()*(e-t+1))+t},parseCSV(t){var e=[],n=!1;let r=0,o=0;for(let s=r=o=0;o<t.length;o++){var i=t[o],u=t[o+1];e[s]=e[s]||[],e[s][r]=e[s][r]||"",'"'==i&&n&&'"'==u?(e[s][r]+=i,++o):'"'!=i?","!=i||n?"\n"!=i||n?e[s][r]+=i:(++s,r=0):++r:n=!n}return e},importCSV(t=!0){const e=this.parseCSV(this.inputCSV);let n=t?{}:this.getQuestions();for(let r=0;r<e.length;r++)for(let t=0;t<e[0].length;t++)0===r?n[e[r][t]]=[]:e[r][t]&&n[e[0][t]].push(e[r][t]);this.inputCSV="",localStorage.setItem(this.key,JSON.stringify(n)),this.$router.push("/question")},getQuestions(){return JSON.parse(localStorage.getItem(this.key))||[]}}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var u=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],i=t[l][2];for(var s=!0,a=0;a<r.length;a++)(!1&i||u>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[a])}))?r.splice(a--,1):(s=!1,i<u&&(u=i));if(s){t.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/import.a32861ea.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="interviewer:";n.l=function(r,o,i,u){if(t[r])t[r].push(o);else{var s,a;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+i){s=f;break}}s||(a=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+i),s.src=r),t[r]=[o];var d=function(e,n){s.onerror=s.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),a&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/inter/"}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(e),s=new Error,a=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+u+")",s.name="ChunkLoadError",s.type=i,s.request=u,o[1](s)}};n.l(u,a,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,u=r[0],s=r[1],a=r[2],c=0;if(u.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(a)var l=a(n)}for(e&&e(r);c<u.length;c++)i=u[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},r=self["webpackChunkinterviewer"]=self["webpackChunkinterviewer"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2750)}));r=n.O(r)})();
//# sourceMappingURL=app.52c6c61b.js.map