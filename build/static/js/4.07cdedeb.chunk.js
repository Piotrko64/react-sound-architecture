(this.webpackJsonpsa=this.webpackJsonpsa||[]).push([[4],{47:function(e,t,a){"use strict";a.r(t);var r=a(5),c=a(1),o=a(0);t.default=function(e){var t=e.value,a=Object(c.useState)(),u=Object(r.a)(a,1)[0],i=Object(c.useState)([{iframe:"https://www.youtube.com/embed/y8EvClrhZVc"},{iframe:"https://www.youtube.com/embed/E5LclqEUKO0"}]),n=Object(r.a)(i,2),s=n[0],l=n[1];return Object(c.useEffect)((function(){fetch("https://apiforsa.herokuapp.com/read/onlyAMB").then((function(e){return e.json()})).then((function(e){l(e.reverse())}))}),[u]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("iframe",{className:"iframe",loading:"lazy",src:s[t].iframe,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}}}]);
//# sourceMappingURL=4.07cdedeb.chunk.js.map