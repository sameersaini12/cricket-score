(this["webpackJsonpcricket-score"]=this["webpackJsonpcricket-score"]||[]).push([[0],{30:function(e,t,n){e.exports=n(43)},35:function(e,t,n){},36:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),o=n.n(r),i=(n(35),n(17)),l=(n(36),n(61)),u=n(58),s=n(59),m=n(60),h=n(25),f=n.n(h);var d=function(){return c.a.createElement("div",{className:"navbar"},c.a.createElement(l.a,{position:"static"},c.a.createElement(u.a,null,c.a.createElement(s.a,{edge:"start",color:"inherit","aria-label":"menu"},c.a.createElement(f.a,null)),c.a.createElement(m.a,{color:"inherit"},"Live Score "))))},p="Zrl6b4uXTbcYTdDSBQxidPFyfHq2";var v=function(e){e.match;var t=Object(a.useState)([]),n=Object(i.a)(t,2),c=(n[0],n[1],Object(a.useState)(!1)),r=Object(i.a)(c,2);r[0],r[1]};var E=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){(function(){var e="https://cricapi.com/api/matches/?apikey=".concat(p);return fetch(e).then((function(e){return e.json()})).catch((function(e){return console.log("Error:-",e)}))})().then((function(e){r(e.matches),console.log(e)})).catch((function(e){return alert("could not load data")}))}),[]),c.a.createElement("div",{className:"app"},c.a.createElement(d,null),n.map((function(e){return c.a.createElement(c.a.Fragment,null,"Twenty20"===e.type?c.a.createElement(v,{key:e.unique_id,match:e}):"")})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.c808cf2a.chunk.js.map