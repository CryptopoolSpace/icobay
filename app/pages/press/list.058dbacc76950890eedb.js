webpackJsonp([5],{"+HIo":function(t,a,e){var s=e("nTDi");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("7f7d1cd9",s,!1,{sourceMap:!1})},"+ygC":function(t,a,e){"use strict";var s=e("Dd8w"),n=e.n(s),i=e("Xxa5"),r=e.n(i),o=e("exGp"),c=e.n(o),l=e("NYxO"),d=e("ZJ2w");a.a={scrollToTop:!0,fetch:function(){var t=c()(r.a.mark(function t(a){var e=a.store;a.params,a.query;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==e.state.blog.length){t.next=4;break}return t.next=3,e.dispatch(d.GET_BLOG);case 3:t.sent;case 4:if(0!==e.state.banners.length){t.next=8;break}return t.next=7,e.dispatch(d.GET_BANNERS);case 7:t.sent;case 8:case"end":return t.stop()}},t,this)}));return function(a){return t.apply(this,arguments)}}(),data:function(){return{loading:!1,pageBlog:[]}},created:function(){this.sorting(0,5)},computed:n()({},Object(l.mapState)({blog:function(t){return t.blog},banners:function(t){return t.banner}})),components:{},methods:n()({},Object(l.mapActions)(["GET_BLOG"]),{pageChanged:function(t){var a=t-1;this.blog.length;this.sorting(a,5*t)},sorting:function(t,a){var e=this.blog.slice(5*t,a);this.pageBlog=e}}),head:function(){return{title:"Press Release",meta:[{hid:"Press Release",name:"Press Release",content:"Press Release"}]}}}},LkB8:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{ref:"scroll",staticClass:"row at-row no-gutter flex-between"},[e("div",{staticClass:"blog col-md-13"},[e("div",{staticClass:"press-list"},[t._l(t.pageBlog,function(a,s){return e("div",{key:s,attrs:{"track-by":"id"}},[e("nuxt-link",{attrs:{to:"/press/"+a.title}},[e("at-card",{staticClass:"press-card",attrs:{"body-style":{padding:0}}},[e("div",{attrs:{slot:"loading"},slot:"loading"},[t._v("Loading...")]),e("div",[e("img",{staticClass:"press-image",attrs:{src:""+a.image.path}}),e("div",{staticStyle:{padding:"14px"}},[e("h2",{staticClass:"description-header"},[t._v(t._s(a.title))]),e("p",{staticClass:"description-text"},[t._v(t._s(a.shortDescription))]),e("div",{staticClass:"tags row at-row no-gutter flex-center"},t._l(a.tags,function(a,s){return a.length>0?e("div",{key:s,staticClass:"tag-items"},[a.length<7?e("at-tag",{attrs:{color:""}},[t._v(" "+t._s(a))]):t._e()],1):t._e()}))])])])],1)],1)}),t.blog.length>0?e("at-pagination",{attrs:{total:t.blog.length+10,"show-quickjump":""},on:{"page-change":t.pageChanged}}):t._e()],2)]),e("div",{staticClass:"sidebar-box col-md-8  "},[e("h2",[t._v("Advertisement")]),t._l(t.banners,function(a,s){return e("div",{key:s,staticClass:"banners-box flex flex-center",attrs:{"track-by":"id"}},[e("div",{staticClass:"banners",domProps:{innerHTML:t._s(a.html)}})])})],2)])])};s._withStripped=!0;var n={render:s,staticRenderFns:[]};a.a=n},UTdh:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("+ygC"),n=e("LkB8"),i=!1;var r=function(t){i||e("+HIo")},o=e("VU/8")(s.a,n.a,!1,r,"data-v-609179ba",null);o.options.__file="pages/press/list.vue",a.default=o.exports},nTDi:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,".press-list[data-v-609179ba]{margin:40px 0 20px;width:100%}.press-image[data-v-609179ba]{max-width:100%}.press-card[data-v-609179ba]{margin-bottom:50px}.description-text[data-v-609179ba]{color:rgba(63,83,110,.7098);padding:12px 0}.tags[data-v-609179ba]{padding:10px 0}.tag-items[data-v-609179ba]{padding-right:10px}.sidebar-box h2[data-v-609179ba]{font-weight:500}.banners[data-v-609179ba]{margin:10px 0}.banners p a img[data-v-609179ba]{width:100%!important;-ms-flex-negative:0!important;flex-shrink:0!important;height:100%!important}",""])}});