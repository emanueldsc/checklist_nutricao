(this.webpackJsonpchecklist_nutricao=this.webpackJsonpchecklist_nutricao||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c(3),n=c.n(a),r=c(30),i=c.n(r),o=(c(39),c(8)),l=(o.a.initializeApp({apiKey:"AIzaSyCZ1dgiBtahBdrCMoGC3TpNzr8jFMSvB9I",authDomain:"aprendendo-firebase-70197.firebaseapp.com",databaseURL:"https://aprendendo-firebase-70197.firebaseio.com",projectId:"aprendendo-firebase",storageBucket:"aprendendo-firebase.appspot.com",messagingSenderId:"267145041525",appId:"1:267145041525:web:8d96d2bda06905cbe34a3c",measurementId:"G-P39XTJFHTT"}),c(16)),j=c(6),d=c(18),u=(c(40),c(9)),b=(c(28),c(42),c.p+"static/media/apple.12679e8a.svg"),h=c.p+"static/media/broccoli.bcbbd3b4.png",m=c.p+"static/media/emptycup.c648e8b0.svg",O=c.p+"static/media/exercise.98c816e3.svg",x=c.p+"static/media/vegetables.06d892c8.svg",p=c.p+"static/media/watercup.094b55bf.svg",f=Object(a.createContext)({}),g=function(e){var t=e.children,c=Object(a.useState)(""),n=Object(u.a)(c,2),r=n[0],i=n[1];return Object(s.jsx)(f.Provider,{value:{dateNow:r,setDate:function(e){i(e)}},children:t})},v=(c(45),function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(new Array(12).fill(!1)),i=Object(u.a)(r,2),l=i[0],j=i[1],d=Object(a.useState)(!1),g=Object(u.a)(d,2),v=g[0],N=g[1],k=Object(a.useState)(!1),C=Object(u.a)(k,2),S=C[0],w=C[1],y=Object(a.useState)(!1),z=Object(u.a)(y,2),F=z[0],L=z[1],D=Object(a.useState)(!1),I=Object(u.a)(D,2),T=I[0],A=I[1],B=Object(a.useState)(0),E=Object(u.a)(B,2),V=E[0],U=E[1],P=Object(a.useContext)(f).dateNow;Object(a.useEffect)((function(){!function(){var e;n("");var t=null===(e=o.a.auth().currentUser)||void 0===e?void 0:e.uid,c=P;console.log(c,t),o.a.firestore().collection("ChekLists").where("date","==",c).where("uid","==",t).get().then((function(e){if(1===e.size){var t=e.docs[0].data(),c=e.docs[0].id;n(c),j(new Array(12).fill(!0).fill(!1,t.checklist.waterCups)),N(t.checklist.consumedFruit),w(t.checklist.consumedVegetable),L(t.checklist.consumedLegumen),t.checklist.exerciseTime?(A(!0),U(t.checklist.exerciseTime)):(A(!1),U(0))}else j(new Array(12).fill(!1)),N(!1),w(!1),L(!1),A(!1),U(0)})).catch(console.error)}()}),[P]);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"Beber 10 \xe0 12 copos de \xe1gua por dia"}),Object(s.jsx)("div",{className:"cups",children:l.map((function(e,t){return Object(s.jsx)("img",{onClick:function(){return function(e){var t=l.map((function(t,c){return e===c?!t:t}));j(t)}(t)},src:e?p:m,className:"cup",alt:"cup"},t)}))}),Object(s.jsx)("h2",{children:"Consumir Futas, verduras e legumes Todos os dias"}),Object(s.jsxs)("div",{className:"fruts",children:[Object(s.jsxs)("figure",{children:[Object(s.jsx)("img",{onClick:function(){return N(!v)},src:b,alt:"fruta",className:"fruit ".concat(!v&&"uncheck")}),Object(s.jsx)("figcaption",{children:"Fruta"})]}),Object(s.jsxs)("figure",{children:[Object(s.jsx)("img",{onClick:function(){return w(!S)},src:h,alt:"verdura",className:"fruit ".concat(!S&&"uncheck")}),Object(s.jsx)("figcaption",{children:"Verdura"})]}),Object(s.jsxs)("figure",{children:[Object(s.jsx)("img",{onClick:function(){return L(!F)},src:x,alt:"vegetal",className:"fruit ".concat(!F&&"uncheck")}),Object(s.jsx)("figcaption",{children:"Vegetal"})]})]}),Object(s.jsx)("h2",{children:"Check Aividades f\xedsicas"}),Object(s.jsxs)("div",{className:"exercises",children:[Object(s.jsx)("img",{src:O,alt:"exercicios",className:"exerciseImg",id:"exerciseImg"}),Object(s.jsxs)("label",{htmlFor:"exerciseSim",children:[Object(s.jsx)("input",{type:"radio",name:"exercise",checked:T,value:"sim",id:"exerciseSim",onChange:function(){return A(!0)}}),"Sim"]}),Object(s.jsxs)("label",{htmlFor:"exerciseNao",children:[Object(s.jsx)("input",{type:"radio",name:"exercise",checked:!T,value:"nao",id:"exerciseNao",onChange:function(){return A(!1)}}),"N\xe3o"]}),Object(s.jsxs)("div",{className:"input-group-tempo",children:[Object(s.jsx)("span",{children:"Tempo em min:"}),Object(s.jsx)("input",{type:"number",name:"tempo",id:"exerciseTempo",value:V,onChange:function(e){return U(parseInt(e.target.value))}})]})]}),Object(s.jsx)("button",{className:"btnSalvar",id:"btnSalvar",onClick:function(){var e,t=document.getElementById("btnSalvar");null===t||void 0===t||t.setAttribute("disabled","disabled");var s=l.reduce((function(e,t){return t?e+1:e}),0),a=null===(e=o.a.auth().currentUser)||void 0===e?void 0:e.uid;if(a){var r={uid:a,date:P,checklist:{waterCups:s,consumedFruit:v,consumedVegetable:S,consumedLegumen:F,exerciseTime:T?V:0}},i=o.a.firestore().collection("ChekLists");c?i.doc(c).set(r).then((function(){console.info("Altera\xe7\xe3o realizada com sucesso!")})).catch(console.error).finally((function(){return null===t||void 0===t?void 0:t.removeAttribute("disabled")})):i.add(r).then((function(e){n(e.id),console.info("Cadastro realizado com sucesso!")})).catch(console.error).finally((function(){return null===t||void 0===t?void 0:t.removeAttribute("disabled")}))}},children:"Salvar"})]})}),N=c(20),k=(c(46),function(){var e=Object(a.useState)(Date.now()),t=Object(u.a)(e,2),c=t[0],n=t[1],r=Object(j.g)(),i=Object(a.useContext)(f),d=i.dateNow,b=i.setDate;Object(a.useEffect)((function(){b(Intl.DateTimeFormat("pt-Br").format(c))}),[d,c,b]);var h=function(e){var t=new Date(c),s=t.setDate(t.getDate()+e),a=Intl.DateTimeFormat("pt-Br").format(s);b(a),n(s)};return Object(s.jsxs)("section",{className:"header",children:[Object(s.jsxs)("div",{className:"containerDay",children:[Object(s.jsx)(N.a,{size:24,color:"#fe7d1a",className:"btn",onClick:function(){return h(-1)}}),Object(s.jsx)("h1",{className:"pointer hover-orange",onClick:function(){return n(Date.now())},children:d}),Object(s.jsx)(N.b,{size:24,color:"#fe7d1a",className:"btn",onClick:function(){return h(1)}})]}),Object(s.jsx)(l.b,{to:"/historico",children:Object(s.jsx)("button",{className:"historico pointer",children:"Ver Hist\xf3rico"})}),Object(s.jsx)("button",{className:"btnSair pointer",onClick:function(e){e.preventDefault(),o.a.auth().signOut().then((function(){r.push("/login")}))},children:"Sair"})]})});var C=function(){return Object(s.jsx)(g,{children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("header",{className:"cabecalho",children:Object(s.jsx)(k,{})}),Object(s.jsx)("section",{className:"checklist",children:Object(s.jsx)(v,{})}),Object(s.jsx)("section",{className:"cardapio",style:{display:"none"},children:"cardapio"}),Object(s.jsxs)("footer",{className:"rodape",children:["emanuel douglas sousa costa ",Object(s.jsx)(d.b,{onClick:function(){return window.open("https://github.com/emanueldsc","_blank")},size:24,color:"#FFF"})]})]})})},S=c(22),w=(c(51),function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){var e,t=null===(e=o.a.auth().currentUser)||void 0===e?void 0:e.uid;t&&o.a.firestore().collection("ChekLists").where("uid","==",t).get().then((function(e){var t=e.docs.map((function(e){return e.data()}));n(t)}))}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("header",{className:"container-header-historico",children:[Object(s.jsxs)(l.b,{to:"/",className:"header-historico",children:[Object(s.jsx)(N.a,{size:24,color:"#fe7d1a",className:"btn"}),"CheckList"]}),Object(s.jsx)("h1",{className:"text-orange",children:"Hist\xf3rico"})]}),Object(s.jsxs)("table",{className:"tbl",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{className:"border-1 border-orange",children:Object(s.jsx)("span",{className:"text-orange",children:"Data"})}),Object(s.jsx)("th",{children:Object(s.jsx)("img",{src:p,className:"imgLabel",alt:"copos d'\xe1gua"})}),Object(s.jsx)("th",{children:Object(s.jsx)("img",{src:b,className:"imgLabel",alt:"Frutas Consumidas"})}),Object(s.jsx)("th",{children:Object(s.jsx)("img",{src:h,className:"imgLabel",alt:"Vegetais Consumidos"})}),Object(s.jsx)("th",{children:Object(s.jsx)("img",{src:x,className:"imgLabel",alt:"Legumes Consumidos"})}),Object(s.jsx)("th",{children:Object(s.jsx)("span",{className:"text-orange",children:Object(s.jsx)("img",{src:O,className:"imgLabel",alt:"Tempo se Exercitando"})})}),Object(s.jsx)("th",{className:"border-1 border-orange",children:Object(s.jsx)("span",{className:"text-orange",children:"Di\xe1rio Alimentar"})})]})}),c.map((function(e,t){var c=e.date,a=e.checklist,n=a.consumedFruit,r=a.consumedLegumen,i=a.consumedVegetable,o=a.exerciseTime,l=a.waterCups;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("tbody",{className:t%2===0?"bg-orange-alpha":"",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"border-1 border-orange",children:c}),Object(s.jsx)("td",{children:l}),Object(s.jsx)("td",{children:n?Object(s.jsx)(d.a,{size:20,color:"#5cb85c"}):Object(s.jsx)(S.a,{size:20,color:"#d9534f"})}),Object(s.jsx)("td",{children:r?Object(s.jsx)(d.a,{size:20,color:"#5cb85c"}):Object(s.jsx)(S.a,{size:20,color:"#d9534f"})}),Object(s.jsx)("td",{children:i?Object(s.jsx)(d.a,{size:20,color:"#5cb85c"}):Object(s.jsx)(S.a,{size:20,color:"#d9534f"})}),Object(s.jsx)("td",{children:Object(s.jsx)("h3",{className:o>0?"text-green":"text-red",children:o})}),Object(s.jsx)("td",{className:"border-1 border-orange",children:Object(s.jsx)("span",{className:"link-diario",children:"Visualizar di\xe1rio"})})]})},t)})}))]})]})}),y=c(32),z=(c(52),function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(""),i=Object(u.a)(r,2),l=i[0],d=i[1],b=Object(j.g)();return Object(s.jsxs)("div",{className:"login-container",children:[Object(s.jsx)("h1",{className:"text-orange",children:"Login / Registre-se"}),Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o.a.auth().signInWithEmailAndPassword(c,l).then((function(e){b.push("/")})).catch(console.error)},children:[Object(s.jsx)("input",{className:"field",type:"email",id:"login",placeholder:"Login",onChange:function(e){return n(e.target.value)}}),Object(s.jsx)("input",{className:"field",type:"password",id:"passwd",placeholder:"Senha",onChange:function(e){return d(e.target.value)}}),Object(s.jsxs)("div",{className:"btnBox",children:[Object(s.jsx)("button",{className:"btn-orange pointer",onClick:function(e){e.preventDefault(),o.a.auth().createUserWithEmailAndPassword(c,l).then((function(e){b.push("/")})).catch(console.error)},children:"Registrar"}),Object(s.jsx)("input",{type:"submit",className:"btn-orange pointer",value:"Login"})]})]}),Object(s.jsx)("hr",{className:"separator"}),Object(s.jsxs)("span",{className:"googlelogin",children:["login com ",Object(s.jsx)(y.a,{size:24,className:"pointer",color:"#fe7d1a"})]})]})}),F=c(27),L=c(33),D=function(e){var t=e.component,c=Object(L.a)(e,["component"]),a=o.a.auth().currentUser;return Object(s.jsx)(j.b,Object(F.a)(Object(F.a)({},c),{},{render:function(e){return a?n.a.createElement(t,e):Object(s.jsx)(j.a,{to:{pathname:"/login"}})}}))},I=function(){return Object(s.jsx)(l.a,{children:Object(s.jsxs)(j.d,{children:[Object(s.jsx)(D,{path:"/",exact:!0,component:C}),Object(s.jsx)(j.b,{path:"/login",component:z}),Object(s.jsx)(j.b,{path:"/historico",component:w})]})})};i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(I,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.c29aeb43.chunk.js.map