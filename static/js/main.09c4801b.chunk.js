(this["webpackJsonpart-museum"]=this["webpackJsonpart-museum"]||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),r=n(4),a=n.n(r),l=(n(9),n(3)),o=(n(10),n(0)),u=function(t){return Object(o.jsx)("div",{style:{width:"100%"},children:Object(o.jsx)("img",{style:{maxWidth:"100vw"},src:t.objectImg,alt:t.title})})},s=function(t){return Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{value:-5,onClick:t.handleIterate,children:"Way Back"}),Object(o.jsx)("button",{value:-1,onClick:t.handleIterate,children:"Back"}),Object(o.jsx)("button",{value:1,onClick:t.handleIterate,children:"Next"}),Object(o.jsx)("button",{value:5,onClick:t.handleIterate,children:"Big Next"})]})};var j=function(){var t=Object(c.useState)({}),e=Object(l.a)(t,2),n=e[0],i=e[1],r=Object(c.useState)(12770),a=Object(l.a)(r,2),j=a[0],b=a[1];return Object(c.useEffect)((function(){document.title="Welcome to ArtWorld",fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/".concat(j)).then((function(t){return t.json()})).then((function(t){return i(t)}))}),[j]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:n.title}),Object(o.jsx)("div",{style:{width:"100%"},children:n.primaryImage?Object(o.jsx)(u,{objectImg:n.primaryImage,title:n.title}):Object(o.jsx)("h2",{children:"No Image!"})}),Object(o.jsx)(s,{handleIterate:function(t){b(j+Number(t.target.value))}})]})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),c(t),i(t),r(t),a(t)}))};a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),b()},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.09c4801b.chunk.js.map