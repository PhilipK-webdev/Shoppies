(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(2),a=c.n(i),s=c(16),o=c.n(s),r=(c(23),c(6)),l=c(7),j=(c(24),c(25),function(){return Object(n.jsx)("div",{className:"fixed-bottom",children:Object(n.jsx)("div",{className:"container-fluid p-0 text-center",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-3"}),Object(n.jsx)("div",{className:"col-6",children:Object(n.jsxs)("p",{children:[" \xa9 2020 FullStack Web Developer, Inc.",Object(n.jsx)("br",{}),"Made By Philip Kouchner",Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"http://philipkouchner.com/",target:"_blank",rel:"noreferrer",children:"My Website"})]})}),Object(n.jsx)("div",{className:"col-3"})]})})})}),d=(c(26),function(){return Object(n.jsx)("div",{className:"container-fluid",id:"container-header",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("h1",{children:"Welcome To Shoppies"})})})}),b=(c(27),function(e){return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"input-group mb-3",children:[Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Search Movie","aria-label":"Recipient's username",value:e.movieName,"aria-describedby":"button-addon2",onChange:e.addMovie}),Object(n.jsx)("button",{className:"btn",type:"button",id:"button-addon2",onClick:e.submit,children:"Button"})]})})}),u=c(17),h=c.n(u);var m=function(){var e=Object(i.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(i.useState)([]),o=Object(l.a)(s,2),u=(o[0],o[1]);return Object(n.jsx)("div",{className:"container-fluid",id:"container-main",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-3"}),Object(n.jsxs)("div",{className:"col-6 text-center",children:[Object(n.jsx)(d,{}),Object(n.jsx)(b,{submit:function(e){e.preventDefault();h.a.get("http://www.omdbapi.com/?s=".concat(c,"&type=movie&apikey=").concat("270a451d")).then((function(e){var t=Object(r.a)(e.data.Search);console.log(t),u(Object(r.a)(t))})).catch((function(e){return console.log(e)}))},addMovie:function(e){var t=e.target.value;a(t)},movieName:c}),Object(n.jsx)(j,{})]}),Object(n.jsx)("div",{className:"col-3"})]})})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,47)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))};o.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root")),O()}},[[46,1,2]]]);
//# sourceMappingURL=main.1e56501b.chunk.js.map