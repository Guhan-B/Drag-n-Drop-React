(this["webpackJsonpdrag-n-drop"]=this["webpackJsonpdrag-n-drop"]||[]).push([[0],{17:function(t,e,a){},18:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a.n(n),c=a(9),r=a.n(c),i=a(8),o=a(7),l=a(4),u=a(11),j=a(10),d=a(20),f=a(2);var b=function(t){var e=t.index,a=t.task,n=t.onDelete,c=t.start,r=t.setStart,o=t.swap,j=s.a.useState(!1),d=Object(l.a)(j,2),b=d[0],O=d[1],g={onDragEnter:function(t){O(!0)},onDragLeave:function(t){O(!1)},onDragOver:function(t){t.preventDefault()},onDrop:function(t){O(!1),o(c,e)},onContextMenu:function(t){t.preventDefault(),n(a.id)}};return Object(f.jsxs)("li",Object(i.a)(Object(i.a)({},g),{},{className:b?"over":"",children:[Object(f.jsx)("span",{children:e+1}),Object(f.jsxs)("div",{onDragStart:function(t){r(e)},draggable:"true",children:[Object(f.jsx)("p",{children:a.title}),Object(f.jsx)(u.a,{color:"#555555"})]})]}))},O=function(){var t=s.a.useState([]),e=Object(l.a)(t,2),a=e[0],n=e[1];s.a.useEffect((function(){var t=localStorage.getItem("tasks");t&&n(JSON.parse(t))}),[]);var c=function(t,e){var s=Object(o.a)(a),c=s[t];s[t]=s[e],s[e]=c,n(s),localStorage.setItem("tasks",JSON.stringify(s))},r=s.a.useState(-1),i=Object(l.a)(r,2),u=i[0],O=i[1],g=s.a.useState(""),p=Object(l.a)(g,2),v=p[0],x=p[1],S=function(t){var e=a.filter((function(e){return e.id!==t}));n(e),localStorage.setItem("tasks",JSON.stringify(e))};return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("form",{className:"glass-effect",onSubmit:function(t){if(t.preventDefault(),v){var e=[].concat(Object(o.a)(a),[{id:Object(d.a)(),title:v}]);n(e),x(""),localStorage.setItem("tasks",JSON.stringify(e))}},children:[Object(f.jsx)("input",{type:"text",value:v,onChange:function(t){x(t.target.value)},placeholder:"Add Your Task..."}),Object(f.jsx)("span",{className:v?"visible":"hidden",children:Object(f.jsx)(j.a,{size:22,color:"#555555"})})]}),Object(f.jsx)("ul",{className:"draggable-list glass-effect",children:a.map((function(t,e){return Object(f.jsx)(b,{swap:c,index:e,task:t,onDelete:S,start:u,setStart:O},t.id)}))})]})};a(17);r.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(O,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.dc4c43de.chunk.js.map