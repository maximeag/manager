(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{295:function(e,t,n){"use strict";n.r(t);n(141);var r,s=n(142),c=n(235),a=n.n(c),i={data:function(){return{loading:!1,success:!1,rejected:!1,content:null}},mounted:(r=Object(s.a)(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,e.prev=1,e.next=4,fetch("https://raw.githubusercontent.com/ovh/manager/master/CONTRIBUTING.md");case 4:return t=e.sent,e.next=7,t;case 7:if(200===(n=e.sent).status){e.next=11;break}return this.rejected=!0,e.abrupt("return");case 11:return e.next=13,n.text();case 13:r=e.sent,this.content=a()().render(r),this.success=!0,e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),this.rejected=!0;case 21:return e.prev=21,this.loading=!1,e.finish(21);case 24:case"end":return e.stop()}}),e,this,[[1,18,21,24]])}))),function(){return r.apply(this,arguments)})},u=n(0),o=Object(u.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.loading?n("div",[n("p",[e._v("Loading…")])]):e._e(),e._v(" "),e.rejected?n("p",[e._v("\n    Unable to get the CONTRIBUTING.md file.\n  ")]):e._e(),e._v(" "),e.success?n("div",{domProps:{innerHTML:e._s(e.content)}}):e._e()])}),[],!1,null,null,null);t.default=o.exports}}]);