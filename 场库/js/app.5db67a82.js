(function(e){function t(t){for(var a,r,u=t[0],c=t[1],s=t[2],l=0,d=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function u(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"786da540","chunk-32994798":"4cf28eb3"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1,"chunk-32994798":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"ff8084ad","chunk-32994798":"0e433876"}[e]+".css",o=c.p+a,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===a||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2395:function(e,t,n){},"26ef":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=(n("d3b7"),n("bc3a")),o=n.n(r),i={baseURL:"https://api.kele8.cn/agent/https://app.vmovier.com"},u=o.a.create(i);u.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),u.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,t){e.axios=u,window.axios=u,Object.defineProperties(e.prototype,{axios:{get:function(){return u}},$axios:{get:function(){return u}}})},a["default"].use(Plugin);Plugin;var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("van-nav-bar",{attrs:{border:"",fixed:"",placeholder:!0},scopedSlots:e._u([{key:"left",fn:function(){return[n("van-icon",{attrs:{name:"calender-o"}},[n("span",[e._v("09")])])]},proxy:!0},{key:"title",fn:function(){return[n("van-tabs",{on:{click:e.navClick},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("van-tab",{attrs:{title:"发现",name:"home"}}),n("van-tab",{attrs:{title:"频道",name:"channel"}}),n("van-tab",{attrs:{title:"搜索",name:"Main"}})],1)]},proxy:!0}])})],1),n("router-view")],1)},s=[],l={data:function(){return{active:"home"}},methods:{navClick:function(e,t){switch(console.log(e,t),e){case"home":this.$router.push("/");break;case"channel":this.$router.push("/channel");break;case"Main":this.$router.push("/Main");break}}}},d=l,f=(n("7c55"),n("2877")),p=Object(f["a"])(d,c,s,!1,null,null,null),m=p.exports,h=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},e._l(e.banner.list,(function(t,a){return n("van-swipe-item",{key:a,on:{click:function(n){return e.goShow(t.extra_data.app_banner_param)}}},[n("img",{attrs:{src:t.image,alt:""}})])})),1),e.today?n("HomeSection",{attrs:{items:e.today.list,special:!0}},[e._v("今日")]):e._e(),e.hot?n("HomeSection",{attrs:{items:e.hot.list}},[e._v("热门")]):e._e()],1)},b=[],g=n("5530"),_=n("2f62"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"section",class:{special:e.special}},[n("h3",[e._t("default")],2),e._l(e.items,(function(e,t){return n("HomeCard",{key:t,attrs:{item:e}})}))],2)},w=[],x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card",on:{click:function(t){return e.goShow(e.item.postid)}}},[n("img",{attrs:{src:e.item.image,alt:""}}),n("dl",[n("dt",[e._l(e.item.cates,(function(t,a){return n("span",{key:a},[e._v(e._s(t.catename))])})),e._v("/"),n("span",[e._v(e._s(e.item.duration))])],2),n("dd",[e._v(e._s(e.item.title))])])])},D=[],I={props:["item"],methods:{goShow:function(e){console.log(e),this.$router.push({name:"video",params:{videoId:e}})}}},k=I,O=(n("9173"),Object(f["a"])(k,x,D,!1,null,"035d85ba",null)),j=O.exports,S={props:["items","special"],components:{HomeCard:j}},T=S,N=(n("5ad4"),Object(f["a"])(T,y,w,!1,null,null,null)),A=N.exports,E={INIT_INDEX_DATA:"INIT_HOME_INDEX_DATA",xxx:"XXX"},P={name:"Home",components:{HomeSection:A},computed:Object(g["a"])({},Object(_["c"])({banner:function(e){return e.indexData.banner},album:function(e){return e.indexData.album},hot:function(e){return e.indexData.hot},posts:function(e){return e.indexData.posts},today:function(e){return e.indexData.today}})),methods:Object(g["a"])(Object(g["a"])({},Object(_["b"])([E.INIT_INDEX_DATA])),{},{goShow:function(e){console.log(e),this.$router.push({name:"video",params:{videoId:e}})}}),created:function(){this.$store.dispatch(E.INIT_INDEX_DATA,{n:10})}},C=P,$=(n("fa17"),Object(f["a"])(C,v,b,!1,null,"5aa3bdc1",null)),X=$.exports;a["default"].use(h["a"]);var M=[{path:"/",name:"Home",component:X},{path:"/Main",name:"Main",component:function(){return n.e("about").then(n.bind(null,"cd56"))}},{name:"refresh",path:"refresh",component:function(){return n.e("chunk-32994798").then(n.bind(null,"1d6d"))}},{path:"/video",name:"video",component:function(){return n.e("about").then(n.bind(null,"e001"))},meta:{name:"referrer",content:"no-referrer"}},{path:"/listShow",name:"listShow",component:function(){return n.e("about").then(n.bind(null,"d346"))}},{path:"/channel",name:"channel",component:function(){return n.e("about").then(n.bind(null,"0d91"))}}],H=new h["a"]({routes:M}),L=H,J=n("ade3"),q=function(){return window.axios.get("/apiv3/index/index").catch((function(e){console.log(e)}))};a["default"].use(_["a"]);var B=new _["a"].Store({state:{indexData:null},mutations:Object(J["a"])({},E.INIT_INDEX_DATA,(function(e,t){e.indexData=t.data})),actions:Object(J["a"])({},E.INIT_INDEX_DATA,(function(e){var t=JSON.parse(window.localStorage.getItem("indexData"));t&&t.expires>Date.now()?e.commit(E.INIT_INDEX_DATA,{data:t.data}):q().then((function(t){console.log(t.data.data),window.localStorage.setItem("indexData",JSON.stringify({expires:Date.now()+6e5,data:t.data.data})),e.commit(E.INIT_INDEX_DATA,{data:t.data})}))})),modules:{}}),U=n("b970"),F=(n("157a"),n("5c96")),K=n.n(F);n("0fae");a["default"].use(K.a),a["default"].use(U["a"]),a["default"].config.productionTip=!1,new a["default"]({router:L,store:B,render:function(e){return e(m)}}).$mount("#app")},"5ad4":function(e,t,n){"use strict";var a=n("7514"),r=n.n(a);r.a},7514:function(e,t,n){},"7c55":function(e,t,n){"use strict";var a=n("2395"),r=n.n(a);r.a},9173:function(e,t,n){"use strict";var a=n("26ef"),r=n.n(a);r.a},f0c0:function(e,t,n){},fa17:function(e,t,n){"use strict";var a=n("f0c0"),r=n.n(a);r.a}});
//# sourceMappingURL=app.5db67a82.js.map