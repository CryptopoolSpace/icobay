webpackJsonp([0],{"+ptz":function(t,e,a){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container"},[e("home-list")],1)};i._withStripped=!0;var s={render:i,staticRenderFns:[]};e.a=s},"/TYz":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("0VYd"),s=a("+ptz"),n=!1;var r=function(t){n||a("2MlA")},o=a("VU/8")(i.a,s.a,!1,r,null,null);o.options.__file="pages/index.vue",e.default=o.exports},"0VYd":function(t,e,a){"use strict";var i=a("Dd8w"),s=a.n(i),n=a("Xxa5"),r=a.n(n),o=a("exGp"),c=a.n(o),l=a("5eFX"),d=a("NYxO"),p=a("ZJ2w");e.a={fetch:function(){var t=c()(r.a.mark(function t(e){var a=e.store;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==a.state.icos.length){t.next=4;break}return t.next=3,a.dispatch(p.GET_ALL_ICOS);case 3:t.sent;case 4:if(0!=a.state.totalMarketCapUSD){t.next=8;break}return t.next=7,a.dispatch(p.GET_TOTAL_MARKETCAP_USD);case 7:t.sent;case 8:if(0!=a.state.cryptoCurrencies.length){t.next=12;break}return t.next=11,a.dispatch(p.GET_CRYPTO_CURRENCIES);case 11:t.sent;case 12:if(0!=a.state.partners.length){t.next=16;break}return t.next=15,a.dispatch(p.GET_PARTNERS);case 15:t.sent;case 16:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),layout:"",components:{HomeList:l.a},computed:s()({},Object(d.mapState)({icos:function(t){return t.icos}})),methods:s()({},Object(d.mapMutations)([]),Object(d.mapActions)([]))}},"2MlA":function(t,e,a){var i=a("Qr4O");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("6d72fe72",i,!1,{sourceMap:!1})},"5eFX":function(t,e,a){"use strict";var i=a("FgdD"),s=a("grwj"),n=!1;var r=function(t){n||a("EMtY")},o=a("VU/8")(i.a,s.a,!1,r,"data-v-2f8583f8",null);o.options.__file="components/HomeList.vue",e.a=o.exports},EMtY:function(t,e,a){var i=a("GXMg");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("b72db0f6",i,!1,{sourceMap:!1})},FgdD:function(t,e,a){"use strict";var i=a("fZjL"),s=a.n(i),n=a("Dd8w"),r=a.n(n),o=a("nKVn"),c=a("NYxO");a("ZJ2w");e.a={components:{Partners:o.a},computed:r()({},Object(c.mapState)({icos:function(t){return t.icos}}),{filterActive:function(){return this.icos.active.sort(function(t,e){return 1*t.endDate.localeCompare(e.endDate)})},filterUpcoming:function(){return this.icos.upcoming.sort(function(t,e){return 1*t.endDate.localeCompare(e.endDate)})},filterEnded:function(){return this.icos.ended.sort(function(t,e){return-1*t.endDate.localeCompare(e.endDate)})}}),methods:r()({},Object(c.mapMutations)([]),Object(c.mapActions)([]),{total:function(t){var e=s()(t).reduce(function(e,a){return e+t[a]/4},.05).toFixed(2);return Number(e)}}),filters:{}}},GXMg:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".ico-logo[data-v-2f8583f8]{width:60px;height:60px}.trending[data-v-2f8583f8]{margin:20px 0 80px}.trending-sec[data-v-2f8583f8]{padding:20px 0}.feature-card[data-v-2f8583f8]{-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-ms-flex-direction:column!important;flex-direction:column!important}.feature-card-footer p[data-v-2f8583f8]{padding:10px 0 15px}.ico-card[data-v-2f8583f8]{margin-bottom:15px}.ico-f-card[data-v-2f8583f8]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-height:300px;max-height:300px}.logo-block[data-v-2f8583f8]{display:-webkit-box;display:-ms-flexbox;display:flex;height:190.08px;height:11.88rem}.logo-block img[data-v-2f8583f8]{max-width:140px;margin:auto}.content-block[data-v-2f8583f8]{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;padding:0 10px}.description-header[data-v-2f8583f8]{margin:5px 0;font-size:18px}.description-text[data-v-2f8583f8]{font-size:14px;font-weight:300;line-height:1.33;margin:0;max-height:60px;min-height:60px;overflow:hidden}.rate-block[data-v-2f8583f8]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:10px;color:rgba(61,55,55,.603)}.card-body[data-v-2f8583f8],.rate-block[data-v-2f8583f8]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.card-body[data-v-2f8583f8]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.ended p[data-v-2f8583f8]{color:#a9a9a9}.ico-ul[data-v-2f8583f8]{padding:5px}.ul-title[data-v-2f8583f8]{display:-webkit-box;display:-ms-flexbox;display:flex;padding:0 0 20px 5px}.fu-ul[data-v-2f8583f8]{padding:15px;width:100%}.res-card[data-v-2f8583f8]{width:100%}.subscribe[data-v-2f8583f8]{border-radius:.25rem;border:1px solid #e8e8ee;-webkit-box-shadow:0 10px 20px 0 rgba(37,59,110,.25);box-shadow:0 10px 20px 0 rgba(37,59,110,.25);background-color:#6492e9;padding:40px 10px;margin:70px 0}.subscibe-form[data-v-2f8583f8]{padding:20px 20px 30px;margin:10spx}.subscribe button[data-v-2f8583f8]{width:100%;background-color:#253b6e;-webkit-box-shadow:0 2px 10px 0 rgba(37,59,110,.2);box-shadow:0 2px 10px 0 rgba(37,59,110,.2);border:#253b6e;color:#fff;margin:0 10px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;font-size:14px;font-size:.875rem;-webkit-transition:all .2s;transition:all .2s;text-decoration:none;cursor:pointer;outline:none}.subscribe-info[data-v-2f8583f8]{color:#fafafa;font-weight:400;text-align:center;font-size:40px}.subscribe-desc[data-v-2f8583f8]{font-size:18px;color:#e6e6e6;padding:10px 30px}.subscribeBtn[data-v-2f8583f8]{-webkit-box-flex:0;-ms-flex:0;flex:0;padding:0 20px}.community-item[data-v-2f8583f8]{color:#fff}.spanning[data-v-2f8583f8]{margin:20px}.feature-icon[data-v-2f8583f8]{color:#f1c40f;font-size:18px;position:absolute;top:5px;right:5px}",""])},HEuO:function(t,e,a){var i=a("kbVH");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("af8ef722",i,!1,{sourceMap:!1})},Qr4O:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},ZtdT:function(t,e,a){"use strict";var i=a("Dd8w"),s=a.n(i),n=a("NYxO");a("ZJ2w");e.a={computed:s()({},Object(n.mapState)({partners:function(t){return t.partners}})),methods:s()({},Object(n.mapMutations)([]),Object(n.mapActions)([]))}},grwj:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"conteiner"},[a("div",{staticClass:"trending"},[a("div",{staticClass:"trending-sec flex-between flex"},[a("h2",[t._v("Featured")]),a("at-button",[a("nuxt-link",{attrs:{to:"/icos/list"}},[t._v("Show more")])],1)],1),a("ul",{staticClass:"row at-row no-gutter  flex-start spanning flex"},t._l(t.icos.active,function(e,i){return 1==e.featured&&i<8?a("li",{key:i,staticClass:"fu-ul col-md-6"},[a("nuxt-link",{attrs:{to:{path:"/icos/"+e.title,query:{is:"active"}}}},[a("at-card",{attrs:{"body-style":{padding:"12px"}}},[a("i",{staticClass:"icon icon-star-on feature-icon"}),a("div",{staticClass:"ico-f-card"},[a("div",{staticClass:"logo-block"},[a("img",{staticClass:"ico-logo-big",attrs:{src:""+e.thumbs}})]),a("div",{staticClass:"content-block"},[a("h2",{staticClass:"description-header"},[t._v(t._s(e.title))]),a("p",{staticClass:"description-text"},[t._v(t._s(e.shortDescription.substring(0,90)+"..."))])]),a("div",{staticClass:"rate-block"},[a("at-rate",{attrs:{"show-text":!0,"allow-half":!0,disabled:!0,value:t.total(e.rating)}})],1)])])],1)],1):t._e()}))]),a("div",{staticClass:"subscribe col at-col no-gutter flex-center flex-middle"},[t._m(0),a("div",{staticClass:"flex flex-center flex-middle"},[a("form",{staticClass:"subscibe-form flex flex-center  subscribe-form",attrs:{action:"https://my.sendinblue.com/users/subscribe/js_id/34ba9/id/1",method:"post",target:"_blank"}},[a("at-input",{staticClass:"mobeli-imput ",attrs:{placeholder:"Your email",type:"email",name:"EMAIL",required:"required"}}),a("input",{attrs:{type:"hidden",name:"js_id",id:"js_id",value:"34ba9"}}),a("input",{attrs:{type:"hidden",name:"listid",id:"listid",value:"4"}}),a("input",{attrs:{type:"hidden",name:"from_url",id:"from_url",value:"yes"}}),a("input",{attrs:{type:"hidden",name:"hdn_email_txt",id:"hdn_email_txt",value:""}}),a("input",{attrs:{type:"hidden",name:"sib_simple",value:"simple"}}),a("button",{staticClass:"subscribeBtn",attrs:{type:"submit"}},[t._v("Subscribe now")])],1)])]),a("div",{staticClass:"res-card row at-row no-gutter flex-between "},[a("div",{staticClass:"col-md-8 flex-center spanning"},[a("h2",{staticClass:"ul-title "},[t._v("Active")]),a("ul",{staticClass:"ico-ul "},t._l(t.filterActive,function(e,i){return i<6?a("li",{key:i,attrs:{"track-by":"id "}},[a("nuxt-link",{attrs:{to:{path:"/icos/"+e.title,query:{is:"active"}}}},[a("at-card",{staticClass:"ico-card ",attrs:{"body-style":{padding:"12px"}}},[a("div",{staticClass:"card-body "},[a("img",{staticClass:"ico-logo ",attrs:{src:""+e.thumbs}}),a("h3",[t._v(t._s(e.title))]),a("span",[1==e.featured?a("i",{staticClass:"icon icon-star-on feature-icon"}):t._e(),a("h1",[t._v(t._s(e.timerEnd.days))]),a("p",[t._v("Days left")])])])])],1)],1):t._e()})),a("at-button",[a("nuxt-link",{attrs:{to:"/icos/list"}},[t._v("See "+t._s(t.icos.active.length)+" more active ICOs")])],1)],1),a("div",{staticClass:"col-md-8 flex-center spanning"},[a("h2",{staticClass:"ul-title "},[t._v("Upcoming")]),a("ul",{staticClass:"ico-ul "},t._l(t.filterUpcoming,function(e,i){return i<6?a("li",{key:i},[a("nuxt-link",{attrs:{to:{path:"/icos/"+e.title,query:{is:"upcoming"}}}},[a("at-card",{staticClass:"ico-card ",attrs:{"body-style":{padding:"12px"}}},[a("div",{staticClass:"card-body "},[a("img",{staticClass:"ico-logo ",attrs:{src:""+e.thumbs}}),a("h3",[t._v(t._s(e.title))]),a("span",[1==e.featured?a("i",{staticClass:"icon icon-star-on feature-icon"}):t._e(),a("h1",[t._v(t._s(e.timerStart.days))]),a("p",[t._v("More days")])])])])],1)],1):t._e()})),a("at-button",[a("nuxt-link",{attrs:{to:"/icos/list"}},[t._v("Show "+t._s(t.icos.upcoming.length)+" more upcoming ICOs")])],1)],1),a("div",{staticClass:"col-md-8 flex-center spanning"},[a("h2",{staticClass:"ul-title "},[t._v("Ended")]),a("ul",{staticClass:"ico-ul "},t._l(t.filterEnded,function(e,i){return i<6?a("li",{key:i},[a("nuxt-link",{attrs:{to:{path:"/icos/"+e.title,query:{is:"ended"}}}},[a("at-card",{staticClass:"ico-card ",attrs:{"body-style":{padding:"12px"}}},[a("div",{staticClass:"card-body "},[a("img",{staticClass:"ico-logo ",attrs:{src:""+e.thumbs}}),a("h3",[t._v(t._s(e.title))]),a("span",{staticClass:"ended "},[a("p",[t._v("Ended ")]),a("p",[t._v(t._s(e.endDate))])])])])],1)],1):t._e()})),a("at-button",[a("nuxt-link",{attrs:{to:"/icos/list"}},[t._v("Show "+t._s(t.icos.ended.length)+" more ended ICOs")])],1)],1)]),a("div",{},[a("partners")],1)])};i._withStripped=!0;var s={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",{staticClass:"subscribe-info"},[this._v("Stay updated")]),e("p",{staticClass:"subscribe-desc"},[this._v("Sing up to get updates on upcoming ICO's, special offers, and crypto market news.")])])}]};e.a=s},kGiR:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"partners-wrapper"},[a("h2",[t._v("Partners")]),a("div",{staticClass:"row at-row no-gutter  flex-start"},t._l(t.partners,function(e,i){return a("div",{key:i,staticClass:"col-md-3 col-sm-3 col-lg-3 flex flex-center flex-middle ",attrs:{"track-by":"id "}},[a("div",{staticClass:"partners",domProps:{innerHTML:t._s(e.html)}})])}))])};i._withStripped=!0;var s={render:i,staticRenderFns:[]};e.a=s},kbVH:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".partners-wrapper{margin:70px 0}.partners{padding:10px;-webkit-box-flex:1;-ms-flex:1;flex:1}.partners img{width:100%;height:100%}.partners h2{padding:20px 0}",""])},nKVn:function(t,e,a){"use strict";var i=a("ZtdT"),s=a("kGiR"),n=!1;var r=function(t){n||a("HEuO")},o=a("VU/8")(i.a,s.a,!1,r,null,null);o.options.__file="components/Partners.vue",e.a=o.exports}});