(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b16363a0"],{"0db5":function(t,e,a){"use strict";a.d(e,"j",(function(){return i})),a.d(e,"l",(function(){return r})),a.d(e,"r",(function(){return o})),a.d(e,"s",(function(){return s})),a.d(e,"e",(function(){return c})),a.d(e,"u",(function(){return d})),a.d(e,"n",(function(){return p})),a.d(e,"m",(function(){return l})),a.d(e,"h",(function(){return u})),a.d(e,"i",(function(){return h})),a.d(e,"q",(function(){return m})),a.d(e,"o",(function(){return f})),a.d(e,"b",(function(){return v})),a.d(e,"a",(function(){return _})),a.d(e,"f",(function(){return g})),a.d(e,"k",(function(){return w})),a.d(e,"p",(function(){return b})),a.d(e,"t",(function(){return y})),a.d(e,"d",(function(){return x})),a.d(e,"c",(function(){return S})),a.d(e,"g",(function(){return I}));var n=a("8238");function i(t,e){n["a"].get("/private/project").then(t).catch(e)}function r(t,e,a){n["a"].get("/private/project/"+t).then(e).catch(a)}function o(t,e,a){n["a"].post("/private/project/",t).then(e).catch(a)}function s(t,e,a){n["a"].post("/private/project/fromJson",t).then(e).catch(a)}function c(t,e,a){n["a"].post("/private/project/copy/"+t).then(e).catch(a)}function d(t,e,a){n["a"].put("/private/project/",t).then(e).catch(a)}function p(t,e,a){n["a"].put("/private/project/moveUp/"+t).then(e).catch(a)}function l(t,e,a){n["a"].put("/private/project/moveDown/"+t).then(e).catch(a)}function u(t,e,a){n["a"].delete("/private/project/"+t).then(e).catch(a)}function h(t,e,a){n["a"].get("/private/project/apiGroup/"+t).then(e).catch(a)}function m(t,e,a){n["a"].post("/private/apiGroup",t).then(e).catch(a)}function f(t,e,a){n["a"].put("/private/apiGroup",t).then(e).catch(a)}function v(t,e,a){n["a"].put("/private/apiGroup/moveUp/"+t).then(e).catch(a)}function _(t,e,a){n["a"].put("/private/apiGroup/moveDown/"+t).then(e).catch(a)}function g(t,e,a){n["a"].delete("/private/apiGroup/"+t).then(e).catch(a)}function w(t,e,a){n["a"].get("/private/api/"+t).then(e).catch(a)}function b(t,e,a){n["a"].post("/private/api",t).then(e).catch(a)}function y(t,e,a){n["a"].put("/private/api",t).then(e).catch(a)}function x(t,e,a){n["a"].put("/private/api/moveUp/"+t).then(e).catch(a)}function S(t,e,a){n["a"].put("/private/api/moveDown/"+t).then(e).catch(a)}function I(t,e,a){n["a"].delete("/private/api/"+t).then(e).catch(a)}},"4fb8":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{width:"98%","max-width":"1240px",padding:"10px 0",margin:"auto",display:"flex","align-items":"center"}},[t._m(0),a("div",{staticStyle:{"margin-left":"auto"}},[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(e){return t.apiDeleteSubmit(t.api.apiId)}}},[t._v("删除")]),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.$router.push({path:"/index/put/project/api/"+t.projectId+"/"+t.groupId+"/"+t.apiId})}}},[t._v("修改")])],1)]),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.dataLoading,expression:"dataLoading"}],staticStyle:{width:"98%","max-width":"1240px",margin:"0 auto 50px"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.dataLoading,expression:"!dataLoading"}],class:["api",t.api.method]},[a("div",{staticStyle:{padding:"5px 5px 0"}},[1==t.api.deprecated||"true"==t.api.deprecated?a("span",[a("b",[t._v(" (已过期)")])]):t._e(),t._v(" "+t._s(t.api.title))]),a("div",{staticClass:"api-header"},[a("div",{staticClass:"api-method"},[t._v(t._s(t.api.method))]),a("div",{staticClass:"api-path-summary"},[t._v(t._s(t.api.path))])]),a("div",{staticStyle:{padding:"10px","background-color":"white"}},[t.api.description?a("div",{domProps:{innerHTML:t._s(t.api.description.replace(/\n/g,"<br>"))}}):t._e(),t._l(t.api.additional,(function(e,n){return a("div",{key:n},[a("div",[a("b",[t._v(t._s(e.title))])]),e.description?a("div",{domProps:{innerHTML:t._s(e.description.replace(/\n/g,"<br>"))}}):t._e()])})),null!=t.api.externalDocs?a("div",[null!=t.api.externalDocs.description?a("div",{domProps:{innerHTML:t._s(t.api.externalDocs.description)}}):t._e(),null!=t.api.externalDocs.url?a("a",{staticClass:"alink",staticStyle:{"margin-left":"0"},attrs:{href:t.api.externalDocs.url,target:"_blank"}},[t._v("\n\t\t\t\t\t\t"+t._s(t.api.externalDocs.url)+"\n\t\t\t\t\t")]):t._e()]):t._e()],2),a("div",{staticStyle:{padding:"10px"}},[a("div",{staticStyle:{display:"flex","align-items":"center"}},[t._m(1),null!=t.api.consumes?a("div",{staticStyle:{"margin-left":"auto"}},[t._v("Consumes: "+t._s(t.api.consumes))]):t._e()])]),a("div",{staticStyle:{padding:"5px 10px","background-color":"white"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.api.parameters,"row-key":"tableRowKeyId",border:"","default-expand-all":"","tree-props":{children:"items",hasChildren:"hasChildren"},"empty-text":"无需请求数据"}},[a("el-table-column",{attrs:{prop:"required",label:"必填",width:"100",align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.required?a("span",[t._v(t._s("true"===e.row.required?"是":"否"))]):t._e()]}}])}),a("el-table-column",{attrs:{prop:"in",label:"参数位置",width:"120"}}),a("el-table-column",{attrs:{prop:"type",label:"参数类型",width:"120"}}),a("el-table-column",{attrs:{prop:"name",label:"参数名称",width:"300"}}),a("el-table-column",{attrs:{prop:"description",label:"参数描述"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.description?a("div",{domProps:{innerHTML:t._s(e.row.description)}}):t._e(),a("div",{staticClass:"desc-constraint"},[e.row.def?a("span",[t._v("默认值: "+t._s(e.row.def))]):t._e(),e.row.minLength?a("span",[t._v("最小长度: "+t._s(e.row.minLength))]):t._e(),e.row.maxLength?a("span",[t._v("最大长度: "+t._s(e.row.maxLength))]):t._e(),e.row.minimum?a("span",[t._v("最小值: "+t._s(e.row.minimum))]):t._e(),e.row.maximum?a("span",[t._v("最大值: "+t._s(e.row.maximum))]):t._e(),e.row.enums?a("span",[t._v("枚举值: "+t._s(e.row.enums))]):t._e(),e.row.pattern?a("span",[t._v("正则: "+t._s(e.row.pattern))]):t._e()])]}}])})],1),a("div",[a("el-input",{attrs:{type:"textarea",autosize:{minRows:1,maxRows:10},placeholder:'请求的body,定义格式或占位或schema,比如请求格式要求为:{"id":{id},"name":"userName"},{id}代表变量请求时会自动填充body参数'},model:{value:t.api.body,callback:function(e){t.$set(t.api,"body",e)},expression:"api.body"}})],1)],1),a("div",{staticStyle:{padding:"10px"}},[a("div",{staticStyle:{display:"flex","align-items":"center"}},[t._m(2),null!=t.api.produces?a("div",{staticStyle:{"margin-left":"auto"}},[t._v("Produces: "+t._s(t.api.produces))]):t._e()])]),a("div",{staticStyle:{padding:"5px 10px","background-color":"white"}},t._l(t.api.responses,(function(e,n){return a("div",{key:n},[a("p",[t._v("状态码: "+t._s(e.status)+" 状态信息: "+t._s(e.msg))]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.data,"row-key":"tableRowKeyId",border:"","default-expand-all":"","tree-props":{children:"items",hasChildren:"hasChildren"}}},[a("el-table-column",{attrs:{prop:"in",label:"参数位置",width:"120",align:"right"}}),a("el-table-column",{attrs:{prop:"type",label:"参数类型",width:"100",align:"right"}}),a("el-table-column",{attrs:{prop:"name",label:"参数名称",width:"300"}}),a("el-table-column",{attrs:{prop:"description",label:"参数描述"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.description?a("div",{domProps:{innerHTML:t._s(e.row.description)}}):t._e()]}}],null,!0)})],1)],1)})),0)])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b",[t._v("API详情")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"min-width":"60px"}},[a("b",[t._v("请求参数")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"min-width":"60px"}},[a("b",[t._v("响应参数")])])}],r=a("0db5"),o={data:function(){return{projectId:"",groupId:"",apiId:"",dataLoading:!0,api:{}}},created:function(){this.projectId=this.$route.params.pid,this.groupId=this.$route.params.gid;var t=this.$route.params.aid;null!=t?(this.apiId=t,this.loadApi(t)):this.$message.warning("加载项目信息失败!API的id不能为空!")},methods:{loadApi:function(t){var e=this;null!=t&&""!=t&&Object(r["k"])(t,(function(t){var a=t.data;if(console.log("加载API..."),console.log(a),200==a.code){if(null==a.data.apiId||""==a.data.apiId)return void e.$message.error("获取API信息失败:数据不存在,请检查id是否有误!");if(null!=a.data.additional&&""!=a.data.additional&&(a.data.additional=JSON.parse(a.data.additional)),null!=a.data.externalDocs&&""!=a.data.externalDocs&&(a.data.externalDocs=JSON.parse(a.data.externalDocs)),null!=a.data.parameters&&""!=a.data.parameters){for(var n=JSON.parse(a.data.parameters),i=0;i<n.length;i++)e.recursionCreateTableRandomRowKey(n[i]);a.data.parameters=n}else a.data.parameters=[];if(null!=a.data.responses&&""!=a.data.responses){var r=JSON.parse(a.data.responses);null!=r&&r.length>0&&(void 0==r[0].status||void 0==r[0].data)?a.data.responses=[{status:200,msg:"ok",data:r}]:a.data.responses=r;for(i=0;i<a.data.responses.length;i++)for(var o=a.data.responses[i].data,s=0;s<o.length;s++)e.recursionCreateTableRandomRowKey(o[s])}else a.data.responses=[];e.api=a.data}else e.$message.error("获取API信息失败:"+a.msg);e.dataLoading=!1}),(function(t){e.$message.error("获取API信息失败,更多信息请查看浏览器控制台!"),console.log(t)}))},apiDeleteSubmit:function(t){var e=this;this.$confirm("确定删除API吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(r["g"])(t,(function(t){var a=t.data;console.log("删除API..."),console.log(a),200==a.code?(e.$message.success("删除成功!"),e.$router.push({path:"/index/get/project/"+e.projectId})):e.$message.error("删除失败:"+a.msg)}),(function(t){e.$message.error("删除失败,更多信息请查看控制台!"),console.log(t)}))})).catch((function(){}))},recursionCreateTableRandomRowKey:function(t){if(t.tableRowKeyId="rowkey-"+Math.random(),null==t.items)return t;for(var e=0;e<t.items.length;e++)this.recursionCreateTableRandomRowKey(t.items[e])}}},s=o,c=(a("7544"),a("2877")),d=Object(c["a"])(s,n,i,!1,null,"61d100ff",null);e["default"]=d.exports},"5a70":function(t,e,a){},7544:function(t,e,a){"use strict";var n=a("5a70"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-b16363a0.04a9027e.js.map