(function(t){function e(e){for(var n,o,s=e[0],c=e[1],l=e[2],u=0,v=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&v.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(v.length)v.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function o(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d22d746":"1ca64928"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(t);var l=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,a[1](l)}r[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"074c":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var n={};a.r(n),a.d(n,"events",(function(){return ft}));var r={};a.r(r),a.d(r,"fetchEvents",(function(){return mt}));a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),o=(a("d3b7"),a("bc3a")),s=a.n(o),c={},l=s.a.create(c);l.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),l.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t){t.axios=l,window.axios=l,Object.defineProperties(t.prototype,{axios:{get:function(){return l}},$axios:{get:function(){return l}}})},i["a"].use(Plugin);Plugin;var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{color:"indigo darken-4",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!0}}}),n("v-spacer"),n("v-toolbar-title",[t._v("Tech-Assessment")]),n("v-spacer"),n("v-avatar",{attrs:{tile:""}},[n("img",{attrs:{src:a("f1fd"),id:"go_one_logo"}})])],1),n("v-navigation-drawer",{staticClass:"lime accent-4",attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",{attrs:{"active-class":"teal--text text--darken-4"}},[n("v-list-item",{attrs:{exact:""}},[n("v-list-item-icon",[n("v-icon",{attrs:{color:"#006064"}},[t._v("mdi-home")])],1),n("v-list-item-title",[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1)],1),n("v-list-item",{attrs:{exact:""}},[n("v-list-item-icon",[n("v-icon",{attrs:{color:"#006064"}},[t._v("mdi-account")])],1),n("v-list-item-title",[n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)],1)],1)],1)],1),n("v-main",[n("router-view")],1),n("v-footer",{attrs:{dark:"",padless:""}},[n("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[n("v-card-title",{staticClass:"blue"},[n("v-spacer"),t._l(t.icons,(function(e){return n("v-btn",{key:e,staticClass:"mx-4",attrs:{dark:"",icon:""}},[n("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e))])],1)})),n("v-spacer")],2),n("v-card-text",{staticClass:"py-2 white--text text-center"},[t._v(" ©"+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("Copyright")])])],1)],1)],1)},d=[],v=(a("c975"),{data:function(){return{drawer:!1,icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"],tile:!1}},methods:{detectBrowser:function(){this.result=navigator.userAgent,-1!=navigator.userAgent.indexOf("Firefox")&&console.log("Mozilla Firefox")}},mounted:function(){this.detectBrowser()}}),f=v,m=(a("5c0b"),a("2877")),p=a("6544"),g=a.n(p),h=a("7496"),b=a("40dc"),y=a("5bc1"),C=a("8212"),w=a("8336"),T=a("b0af"),x=a("99d9"),_=a("553a"),S=a("132d"),A=a("8860"),k=a("da13"),I=a("1baa"),V=a("34c3"),j=a("5d23"),P=a("f6c4"),O=a("f774"),L=a("2fa4"),E=a("2a7f"),B=Object(m["a"])(f,u,d,!1,null,null,null),F=B.exports;g()(B,{VApp:h["a"],VAppBar:b["a"],VAppBarNavIcon:y["a"],VAvatar:C["a"],VBtn:w["a"],VCard:T["a"],VCardText:x["c"],VCardTitle:x["d"],VFooter:_["a"],VIcon:S["a"],VList:A["a"],VListItem:k["a"],VListItemGroup:I["a"],VListItemIcon:V["a"],VListItemTitle:j["b"],VMain:P["a"],VNavigationDrawer:O["a"],VSpacer:L["a"],VToolbarTitle:E["a"]});var D=a("f309");i["a"].use(D["a"]);var Q=new D["a"]({}),Z=a("8c4f"),G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Events")],1)},W=[],M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",{attrs:{color:"#385F73",dark:"",id:"dataholder"}},[a("v-card-title",[t._v(" Events "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.eventdData,search:t.search},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-dialog",{attrs:{"max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{staticClass:"mx-auto my-12",attrs:{loading:t.loading,"max-width":"600",id:"dataholder"}},[a("v-img",{attrs:{height:"250",src:t.viewedItem.Image}}),a("v-container",[a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"12"}},[a("v-card",{attrs:{color:"#006064",dark:""}},[a("v-card-title",{staticClass:"headline"},[t._v(t._s(t.viewedItem.Title))])],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-card",{attrs:{color:"#03A9F4",dark:""}},[a("v-card-title",{staticClass:"headline"},[t._v("Time")]),a("v-card-subtitle",[t._v(t._s(t.viewedItem.Time))])],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-card",{attrs:{color:"#385F73",dark:""}},[a("v-card-title",{staticClass:"headline"},[t._v("Location")]),a("v-card-subtitle",[t._v(t._s(t.viewedItem.City)+", "+t._s(t.viewedItem.State)+", "+t._s(t.viewedItem.Country))])],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-card",{attrs:{color:"#AEEA00",dark:""}},[a("v-card-title",{staticClass:"headline"},[t._v("Available Seats")]),a("v-card-subtitle",[a("div",{staticClass:"align-center"},[a("v-chip",{attrs:{color:"#006064"}},[t._v(t._s(t.viewedItem.SeatOne))]),t._v(" "),a("v-chip",{attrs:{color:"#FFAB00"}},[t._v(t._s(t.viewedItem.SeatTwo))])],1)])],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-card",{attrs:{color:"pink",dark:""}},[a("v-card-actions",[a("v-btn",{attrs:{text:""},on:{click:t.close}},[t._v("Close")])],1)],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var n=e.item;return[a("div",{staticClass:"text-center"},[a("v-btn",{attrs:{rounded:"",color:"lime accent-4",dark:""},on:{click:function(e){return t.viewItem(n)}}},[t._v("Event Details")])],1)]}},{key:"no-results",fn:function(){return[a("v-alert",{attrs:{value:!0,color:"error",icon:"search"}},[t._v(' Your search for "'+t._s(t.search)+'" found no results. ')])]},proxy:!0}])})],1)],1)},N=[],$=(a("4160"),a("159b"),{name:"Events",data:function(){return{search:"",dialog:!1,headers:[{text:"Title",align:"center",sortable:!1,value:"Title"},{text:"Time",align:"center",value:"Time"},{text:"Actions",align:"center",value:"actions",sortable:!1}],viewedIndex:-1,viewedItem:{Title:"",Time:"",Image:"",City:"",State:"",Country:"",SeatOne:"",SeatTwo:""},defaultItem:{Title:"",Time:"",City:"",State:"",Country:"",SeatOne:"",SeatTwo:""},loading:!1}},computed:{events:function(){return this.$store.getters["datastore/events"]},eventdData:function(){var t=[],e=this.events;return e.forEach((function(e){var a=e.Title,n=e.Time,r=e.Image,i=e.Location.City,o=e.Location.State,s=e.Location.Country,c=e.AvailableSeats,l="NA",u="NA";"undefined"===typeof c||null===c?(l="NA",u="NA"):c.forEach((function(t){l=t.id,u=t.id})),t.push({Title:a,Time:n,Image:r,City:i,State:o,Country:s,SeatOne:l,SeatTwo:u})})),t}},watch:{dialog:function(t){t||this.close()}},mounted:function(){this.events},created:function(){},methods:{viewItem:function(t){this.viewedIndex=this.eventdData.indexOf(t),this.viewedItem=Object.assign({},t),this.dialog=!0},close:function(){this.dialog=!1}}}),H=$,q=(a("cfe5"),a("0798")),z=a("cc20"),J=a("62ad"),Y=a("a523"),R=a("8fea"),K=a("169a"),U=a("adda"),X=a("0fd9"),tt=a("8654"),et=Object(m["a"])(H,M,N,!1,null,null,null),at=et.exports;g()(et,{VAlert:q["a"],VBtn:w["a"],VCard:T["a"],VCardActions:x["a"],VCardSubtitle:x["b"],VCardTitle:x["d"],VChip:z["a"],VCol:J["a"],VContainer:Y["a"],VDataTable:R["a"],VDialog:K["a"],VImg:U["a"],VRow:X["a"],VSpacer:L["a"],VTextField:tt["a"]});var nt={name:"Home",components:{Events:at}},rt=nt,it=Object(m["a"])(rt,G,W,!1,null,null,null),ot=it.exports;i["a"].use(Z["a"]);var st=[{path:"/",name:"Home",component:ot},{path:"/about",name:"About",component:function(){return a.e("chunk-2d22d746").then(a.bind(null,"f820"))}}],ct=new Z["a"]({mode:"history",base:"/",routes:st}),lt=ct,ut=a("2f62"),dt=[{Title:"Place 1",Time:"2018-07-22T02:30:00.000Z",Image:"https://cdn.vuetifyjs.com/images/cards/cooking.png",Location:{City:"Brisbane",State:"Queensland",Country:"Australia"}},{Title:"Place 2",Time:"2018-07-24T02:30:00.000Z",Image:"https://cdn.vuetifyjs.com/images/cards/mountain.jpg",Location:{City:"Cairns",State:"Queensland",Country:"Australia"},AvailableSeats:[{id:"W25"},{id:"B29"}]},{Title:"Place 3",Time:"2018-07-24T02:30:00.000Z",Image:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",Location:{City:"Gold Coast",State:"Queensland",Country:"Australia"},AvailableSeats:[{id:"W25"},{id:"B29"}]},{Title:"Place 4",Time:"2018-07-24T02:30:00.000Z",Image:"https://cdn.vuetifyjs.com/images/cards/road.jpg",Location:{City:"Gold Coast",State:"Queensland",Country:"Australia"},AvailableSeats:[{id:"W25"},{id:"B29"}]},{Title:"Place 5",Time:"2018-07-24T02:30:00.000Z",Image:"https://cdn.vuetifyjs.com/images/cards/plane.jpg",Location:{City:"Gold Coast",State:"Queensland",Country:"Australia"},AvailableSeats:[{id:"W25"},{id:"B29"}]},{Title:"Place 6",Time:"2018-07-24T02:30:00.000Z",Image:"https://cdn.vuetifyjs.com/images/cards/store.jpg",Location:{City:"Gold Coast",State:"Queensland",Country:"Australia"},AvailableSeats:[{id:"W25"},{id:"B29"}]},{Title:"Place 7",Time:"2018-07-24T02:30:00.000Z",Image:"https://cdn.vuetifyjs.com/images/cards/docks.jpg",Location:{City:"Gold Coast",State:"Queensland",Country:"Australia"},AvailableSeats:[{id:"W25"},{id:"B29"}]},{Title:"Place 8",Time:"2018-07-24T02:30:00.000Z",Image:"https://cdn.vuetifyjs.com/images/cards/house.jpg",Location:{City:"Gold Coast",State:"Queensland",Country:"Australia"},AvailableSeats:[{id:"W25"},{id:"B29"}]}],vt={events:dt},ft=function(t){return t.events},mt=function(t,e){t.events=e},pt=a("9c03"),gt={namespaced:!0,state:vt,getters:n,mutations:r,actions:pt};i["a"].use(ut["a"]);var ht=new ut["a"].Store({modules:{datastore:gt,events:dt},state:{},getters:{},mutations:{},actions:{}}),bt=ht;a("d1e78");i["a"].use(ut["a"]),window.axios=s.a,i["a"].config.productionTip=!1,new i["a"]({vuetify:Q,router:lt,store:bt,render:function(t){return t(F)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),r=a.n(n);r.a},"9c03":function(t,e){},"9c0c":function(t,e,a){},cfe5:function(t,e,a){"use strict";var n=a("074c"),r=a.n(n);r.a},f1fd:function(t,e,a){t.exports=a.p+"img/go1_logo.5ffd8dbc.png"}});
//# sourceMappingURL=app.451d0579.js.map