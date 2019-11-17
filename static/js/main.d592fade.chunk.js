(this["webpackJsonpjavascript-minimax-tic-tac-toe"]=this["webpackJsonpjavascript-minimax-tic-tac-toe"]||[]).push([[0],[,,,,,function(e,n,t){e.exports=t.p+"static/media/logo.6462638f.svg"},,function(e,n,t){e.exports=t(14)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(0),i=t.n(r),a=t(3),c=t.n(a),o=(t(12),t(1)),l=t(4),s=t(6),u=t(5),f=t.n(u);var g=function(e){return i.a.createElement("header",null,i.a.createElement("div",{className:"app-info"},i.a.createElement("img",{className:"logo",src:f.a,alt:"Minimax Tic Tac Toe logo"}),i.a.createElement("div",{className:"header-text"},i.a.createElement("p",{className:"title"},"Tic Tac Toe"),i.a.createElement("a",{target:"_blank",className:"credit",rel:"noopener noreferrer",href:"https://github.com/victoriousj"},i.a.createElement("p",null,"by victor d. johnson")))),i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){return e.resetGame()},className:"reset-button"},"reset \u21ba")))};var m=function(e){var n=0===e.value?"":2===e.value?"\u25cb":"\xd7";return i.a.createElement("div",{className:"cell ".concat(e.winningPeice?e.winningAlignment:""),onClick:function(){return e.insert(e.index,!0)}},i.a.createElement("span",{className:"".concat(2===e.value?"oh":"ex")},n))};function w(e){var n=[];return e.forEach((function(e,t){e||n.push(t)})),n}function v(e){return!function(e){return e.every((function(e){return!e}))}(e)&&(e[0]===e[1]&&e[0]===e[2]&&e[0]?{winner:e[0],direction:"H",row:1,pieces:[0,1,2]}:e[3]===e[4]&&e[3]===e[5]&&e[3]?{winner:e[3],direction:"H",row:2,pieces:[3,4,5]}:e[6]===e[7]&&e[6]===e[8]&&e[6]?{winner:e[6],direction:"H",row:3,pieces:[6,7,8]}:e[0]===e[3]&&e[0]===e[6]&&e[0]?{winner:e[0],direction:"V",row:1,pieces:[0,3,6]}:e[1]===e[4]&&e[1]===e[7]&&e[1]?{winner:e[1],direction:"V",row:2,pieces:[1,4,7]}:e[2]===e[5]&&e[2]===e[8]&&e[2]?{winner:e[2],direction:"V",row:3,pieces:[2,5,8]}:e[0]===e[4]&&e[0]===e[8]&&e[0]?{winner:e[0],direction:"DL",row:1,pieces:[0,4,8]}:e[2]===e[4]&&e[2]===e[6]&&e[2]?{winner:e[2],direction:"DR",row:2,pieces:[2,4,6]}:!!function(e){return e.every((function(e){return e}))}(e)&&{winner:"draw",pieces:[]})}var p=new Map,d=6;t(13);function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(t,!0).forEach((function(n){Object(l.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var y={winningAlignment:"",winningPeices:[],cells:[0,0,0,0,0,0,0,0,0],isPlaying:!0,winner:"",turn:0},E=function(){var e=i.a.useState(b({},y)),n=Object(s.a)(e,2),t=n[0],r=n[1];function a(e){var n=Object(o.a)(t.cells);if(0===n[e]&&t.isPlaying){n[e]=t.turn+1,r((function(e){return b({},e,{cells:n,turn:(t.turn+1)%2})}));var i=v(n);i&&r((function(e){return b({},e,{winningAlignment:i.direction,winningPeices:i.pieces,winner:i.winner,isPlaying:!1})}))}}return i.a.useEffect((function(){1===t.turn&&window.setTimeout((function(){return function(e){var n=function e(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(0===i&&p.clear(),v(n)||i===d)return 1===v(n).winner?100-i:2===v(n).winner?-100+i:0;if(t){var a=-100;if(w(n).forEach((function(t){var c=Object(o.a)(n);c[t]=1;var l=e(c,!1,r,i+1);if(a=Math.max(a,l),0===i){var s=p.has(l)?"".concat(p.get(l),",").concat(t):t;p.set(l,s)}})),0===i){if("string"===typeof p.get(a))var c=(s=p.get(a).split(","))[Math.floor(Math.random()*s.length)];else c=p.get(a);return r(c),c}return a}if(!t){var l=100;if(w(n).forEach((function(t){var a=Object(o.a)(n);a[t]=2;var c=e(a,!0,r,i+1);if(l=Math.min(l,c),0===i){var s=p.has(c)?p.get(c)+","+t:t;p.set(c,s)}})),0===i){if("string"===typeof p.get(l)){var s;c=(s=p.get(l).split(","))[Math.floor(Math.random()*s.length)]}else c=p.get(l);return r(c),c}return l}}(e,!1);if(0!==e[n]||!t.isPlaying)return;e[n]=t.turn+1,r((function(n){return b({},n,{cells:e,turn:(t.turn+1)%2})}));var i=v(e);i&&r((function(e){return b({},e,{winningAlignment:i.direction,winningPeices:i.pieces,winner:i.winner,isPlaying:!1})}))}(t.cells)}),200)})),i.a.createElement("div",null,i.a.createElement(g,{resetGame:function(){r(b({},y))}}),i.a.createElement("div",{className:"board ".concat(t.isPlaying?"active":"")},t.cells.map((function(e,n){return i.a.createElement(m,{key:n,index:n,value:e,insert:a,winningAlignment:t.winningAlignment,winningPeice:t.winningPeices.indexOf(n)>=0})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[7,1,2]]]);
//# sourceMappingURL=main.d592fade.chunk.js.map