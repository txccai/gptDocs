(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{435:function(t,n,i){},477:function(t,n,i){"use strict";i(435)},523:function(t,n,i){"use strict";i.r(n);i(14);var e={data:()=>({comp:null}),computed:{page(){return this.$pagination.paginationIndex+1}},mounted(){i.e(14).then(i.t.bind(null,513,7)).then(t=>{this.comp=t.default})},methods:{clickCallback(t){const n=this.$pagination.getSpecificPageLink(t-1);this.$router.push(n)}}},a=(i(477),i(2)),c=Object(a.a)(e,(function(){var t=this._self._c;return this.comp?t(this.comp,{tag:"component",attrs:{value:this.page,"page-count":this.$pagination.length,"click-handler":this.clickCallback,"prev-text":this.$pagination.prevText,"next-text":this.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):this._e()}),[],!1,null,null,null);n.default=c.exports}}]);