webpackJsonp([0],{NHnr:function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=l("7+uW"),n={render:function(){var e=this.$createElement,a=this._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var t=l("VU/8")({name:"App"},n,!1,function(e){l("rnLt")},null,null).exports,i=l("/ocq"),u=[{question:"Geslacht ",id:0,options:[{label:"Vrouw",value:2},{label:"Man",value:1}]},{question:"Herkomst ouders",id:1,options:[{label:"Beide ouders Nederlands",value:1},{label:"Beide ouders niet Nederlands",value:2},{label:"Een van de ouders Nederlands en de andere niet Nederlands",value:2}]},{question:"Type huishouden",id:2,options:[{label:"Gehuwd paar met kinderen",value:1},{label:"Eenouderhuishouden",value:1},{label:"Eenpersoonshuishouden",value:1},{label:"Gehuwd paar zonder kinderen",value:1},{label:"Institutioneel huishouden",value:1},{label:"Niet-gehuwd paar met kinderen",value:1},{label:"Niet-gehuwd paar zonder kinderen",value:1},{label:"Overig huishouden",value:1},{label:"Onbekend huishouden",value:1}]},{question:"Gescheiden ouders",id:3,options:[{label:"Nee",value:2},{label:"Ja",value:2}]},{question:"Voortijdig schoolverlaten",id:4,options:[{label:"Door in onderwijs",value:1},{label:"Onbekend",value:1},{label:"Niet van toepassing",value:1},{label:"Uit onderwijs met startkwalificatie",value:1},{label:"Voortijdig schoolverlaten",value:1}]},{question:"Soort onderwijs",id:5,options:[{label:"Regulier onderwijs",value:1},{label:"Onbekend",value:1},{label:"Niet-regulier onderwijs",value:1}]},{question:"Soort woning",id:6,options:[{label:"Eigen woning",value:1},{label:"Huurwoning met huurtoeslag",value:1},{label:"Huurwoning zonder huurtoeslag",value:1},{label:"Onbekend",value:1}]},{question:"Werk vader",id:7,options:[{label:"Werkend of overig actief",value:2},{label:"Geen werk en niet actief",value:2},{label:"Onbekend",value:2}]},{question:"Werk moeder",id:8,options:[{label:"Werkend of overig actief",value:1},{label:"Geen werk en niet actief",value:1},{label:"Onbekend",value:1}]},{question:"Slachtoffer",id:9,options:[{label:"Nee",value:1},{label:"Ja",value:1}]},{question:"Traject vooraf",id:10,options:[{label:"Geen jeugdhulp zonder verblijf gehad",value:1},{label:"Jeugdhulp zonder verblijf gehad",value:1}]},{question:"Leeftijd moeder bij geboorte",id:11,options:[{label:"Jonger dan 20 jaar",value:1},{label:"20 tot 25 jaar",value:1},{label:"25 tot 30 jaar",value:1},{label:"30 tot 35 jaar",value:1},{label:"35 tot 40 jaar",value:1},{label:"40 jaar en ouder",value:1}]},{question:"Leeftijd vader bij geboorte",id:12,options:[{label:"Jonger dan 25 jaar",value:2},{label:"25 tot 30 jaar",value:2},{label:"30 tot 35 jaar",value:2},{label:"35 tot 40 jaar",value:2},{label:"40 jaar en ouder",value:2}]},{question:"Vader of moeder verdacht",id:13,options:[{label:"Nee",value:2},{label:"Ja",value:2}]},{question:"Kind verdacht",id:14,options:[{label:"Nee",value:2},{label:"Ja",value:2}]},{question:"Halt delict",id:15,options:[{label:"Nee",value:2},{label:"Ja",value:2}]},{question:"Verandering onderwijs niveau",id:16,options:[{label:"Opschalen of gelijk blijvend",value:1.1},{label:"Afschalen",value:1.1},{label:"Onbekend",value:1.1}]},{question:"Leeftijdsverschil ouders",id:17,options:[{label:"Minder dan 5 jaar",value:2},{label:"Meer dan 5 jaar",value:2}]},{question:"Actueel onderwijs niveau",id:18,options:[{label:"Basisonderwijs",value:1},{label:"Onderwijs onbekend",value:1},{label:"Vmbo b/k, mbo 1 of mbo 2",value:1},{label:"Vmbo g/t, mbo 3 of mbo 4",value:1},{label:"Havo onderbouw, Havo bovenbouw of Hbo bachelor",value:1},{label:"Vwo of Wo bachelor",value:1}]},{question:"Hoogst behaalde diploma vader",id:19,options:[{label:"Onderwijs onbekend",value:1},{label:"Vmbo b/k, mbo 1 of mbo 2",value:1},{label:"Vmbo g/t, mbo 3 of mbo 4",value:1},{label:"Havo onderbouw, Havo bovenbouw, Hbo bachelor of Hbo master",value:1},{label:"Vwo, Wo bachelor of Wo master",value:1}]},{question:"Hoogst behaalde diploma moeder",id:20,options:[{label:"Onderwijs onbekend",value:1},{label:"Vmbo b/k, mbo 1 of mbo 2",value:1},{label:"Vmbo g/t, mbo 3 of mbo 4",value:1},{label:"Havo onderbouw, Havo bovenbouw, Hbo bachelor of Hbo master",value:1},{label:"Vwo, Wo bachelor of Wo master",value:1}]},{question:"Zwaar traject",id:21,options:[{label:"Nee",value:2.5},{label:"Ja",value:2.5}]}],s={name:"questions",props:u,data:function(){return console.log(u),{questionList:u}},methods:{onChange:function(){console.log(this.selected)}}},r={render:function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"questions"},[l("select",{on:{change:function(a){e.onChange()}}},[l("option",{attrs:{value:"",disabled:"",selected:"",hidden:""}},[e._v(" Maak uw keuze ")]),e._v(" "),e._l(e.questionList.options,function(a){return l("option",{key:a.id,attrs:{questions:e.questions}},[e._v(" "+e._s(a.label)+" ")])})],2)])},staticRenderFns:[]};var d=l("VU/8")(s,r,!1,function(e){l("uxqa")},null,null).exports,b={name:"questionForm",components:{questions:d},data:function(){return{questions:d,questionList:u}}},v={render:function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("ul",{staticClass:"form"},e._l(e.questionList,function(a){return l("li",{key:a.question},[e._v("\n        "+e._s(a.question)+"\n        "),l("questions",{attrs:{questionList:e.questionList}},[e._v(e._s(e.questions.options))])],1)}))},staticRenderFns:[]};var c={name:"Home",components:{questionForm:l("VU/8")(b,v,!1,function(e){l("TnOi")},null,null).exports},data:function(){return{msg:"Risico-indicator App"}},computed:{},methods:{}},p={render:function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"App"},[a("router-link",{attrs:{to:"/About"}},[this._v(" About ")]),this._v(" "),a("h1",[this._v(this._s(this.msg))]),this._v(" "),a("questionForm")],1)},staticRenderFns:[]};var h=l("VU/8")(c,p,!1,function(e){l("T9pS")},null,null).exports,m={render:function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",[l("router-link",{attrs:{to:"/"}},[e._v(" Home ")]),e._v(" "),l("h1",[e._v(" "+e._s(e.title)+" ")]),e._v(" "),l("p",[e._v(" "+e._s(e.p)+" ")])],1)},staticRenderFns:[]};var f=l("VU/8")({name:"About",data:function(){return{title:"About",p:"Dit is een test"}}},m,!1,function(e){l("Wl5Y")},null,null).exports;o.a.use(i.a);var q=new i.a({routes:[{path:"/",name:"Home",component:h},{path:"/about",name:"About",component:f}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:q,components:{App:t},template:"<App/>"})},T9pS:function(e,a){},TnOi:function(e,a){},Wl5Y:function(e,a){},rnLt:function(e,a){},uxqa:function(e,a){}},["NHnr"]);
//# sourceMappingURL=app.bcc4326656d22ce06dbd.js.map