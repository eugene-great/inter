"use strict";(self["webpackChunkinterviewer"]=self["webpackChunkinterviewer"]||[]).push([[516],{139:function(t,n,e){e.r(n),e.d(n,{default:function(){return p}});var i=e(3396),r=e(9242);const s={class:"question"},u=(0,i._)("h1",null,"Enter CSV",-1),o={class:"mb-3"};function a(t,n,e,a,c,l){return(0,i.wg)(),(0,i.iD)("div",s,[u,(0,i._)("div",o,[(0,i.wy)((0,i._)("textarea",{"onUpdate:modelValue":n[0]||(n[0]=t=>c.inputCSV=t),class:"form-control",rows:"10"},null,512),[[r.nr,c.inputCSV]])]),(0,i._)("button",{onClick:n[1]||(n[1]=(...n)=>t.importCSV&&t.importCSV(...n)),type:"button",class:"btn btn-primary"},"Import")])}var c=e(3517),l={name:"EditView",data(){return{inputCSV:""}},mixins:[c.Z]},d=e(89);const m=(0,d.Z)(l,[["render",a]]);var p=m},9203:function(t,n,e){e.r(n),e.d(n,{default:function(){return x}});var i=e(3396),r=e(7139);const s={class:"question"},u={class:"mb-4"};function o(t,n,e,o,a,c){const l=(0,i.up)("TextLine");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",s,[(0,i._)("h1",u,(0,r.zw)(c.question),1),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(c.answer,((t,n)=>((0,i.wg)(),(0,i.j4)(l,{text:t,key:n+t.length},null,8,["text"])))),128))]),(0,i._)("button",{onClick:n[0]||(n[0]=(...t)=>c.next&&c.next(...t)),type:"button",class:"btn btn-primary"},"Next")],64)}function a(t,n,e,s,u,o){return(0,i.wg)(),(0,i.iD)("p",{onClick:n[0]||(n[0]=t=>u.clicked=!u.clicked),class:(0,r.C_)([{"text--line-contrast":u.clicked},"text--line"])},[(0,i._)("span",null,(0,r.zw)(e.text),1)],2)}var c={name:"TextLine",data(){return{clicked:!1}},props:{text:String},methods:{}},l=e(89);const d=(0,l.Z)(c,[["render",a],["__scopeId","data-v-d41b16a4"]]);var m=d,p=e(3517),b={name:"QuestionsView",mixins:[p.Z],components:{TextLine:m},data(){return{number:0}},created(){this.next()},computed:{question(){return Object.keys(this.questions)[this.number]},answer(){return this.questions[this.question]}},methods:{next(){const t=this.randomInteger(0,this.questionsCount-1);this.number!==t?this.number=t:this.next()}}};const h=(0,l.Z)(b,[["render",o]]);var x=h}}]);
//# sourceMappingURL=question.0aa10c7b.js.map