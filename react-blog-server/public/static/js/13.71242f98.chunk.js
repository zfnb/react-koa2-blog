(this["webpackJsonpreact-blog-ts"]=this["webpackJsonpreact-blog-ts"]||[]).push([[13],{642:function(e,t,a){},664:function(e,t,a){"use strict";a.r(t);var n=a(26),c=a(0),l=a.n(c),r=a(71),s=a(119),o=a(83),u=a(63),i=(a(642),a(7));t.default=Object(i.withRouter)(Object(u.connect)(void 0,(function(e){return{getUser:function(){return e({type:"user/asyncGetUser"})}}}))((function(e){var t=Object(c.useState)(""),a=Object(n.a)(t,2),u=a[0],i=a[1],m=Object(c.useState)(""),f=Object(n.a)(m,2),p=f[0],b=f[1];return l.a.createElement("div",{className:"login"},l.a.createElement("div",{className:"title"},"\u767b\u5f55"),l.a.createElement("div",{className:"form"},l.a.createElement("div",{className:"item"},l.a.createElement("label",null,l.a.createElement("span",null,"\u8bf7\u8f93\u5165\u7528\u6237\u540d\uff1a"),l.a.createElement("input",{placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u6635\u79f0",type:"text",value:u,onChange:function(e){i(e.target.value)}}))),l.a.createElement("div",{className:"item"},l.a.createElement("label",null,l.a.createElement("span",null,"\u8bf7\u8f93\u5165\u5bc6\u7801\uff1a"),l.a.createElement("input",{placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u5bc6\u7801",type:"password",value:p,onChange:function(e){b(e.target.value)}})))),l.a.createElement("div",{className:"btn"},l.a.createElement(r.a,{style:{backgroundColor:"#f90",color:"#fff",width:"80%"},onClick:function(){Object(o.b)(u,p).then((function(t){200===t.status&&(e.history.push("/home"),e.getUser()),s.b.success(t.message,.3)}))}},"\u767b\u5f55"),l.a.createElement(r.a,{style:{backgroundColor:"#0f0",color:"#fff",width:"80%",marginTop:"20px"},onClick:function(){e.history.push("/register")}},"\u6ce8\u518c")))})))}}]);