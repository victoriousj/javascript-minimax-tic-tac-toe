(this["webpackJsonpjavascript-minimax-tic-tac-toe"]=this["webpackJsonpjavascript-minimax-tic-tac-toe"]||[]).push([[0],[,,,,,function(e,n,t){e.exports=t.p+"static/media/logo.dc5f7755.svg"},function(e,n,t){e.exports=t.p+"static/media/difficulty.36944054.svg"},function(e,n,t){e.exports=t.p+"static/media/oh.b3a20427.svg"},function(e,n,t){e.exports=t.p+"static/media/ex.f7d7481d.svg"},,,,function(e,n,t){e.exports=t(19)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var i=t(0),r=t.n(i),a=t(3),c=t.n(a),o=(t(17),t(1)),s=t(4),l=t(11),u=t(5),f=t.n(u),m=t(6),d=t.n(m);var g=function(e){return r.a.createElement("header",null,r.a.createElement("div",{className:"app-info"},r.a.createElement("img",{className:"logo",src:f.a,alt:"Minimax Tic Tac Toe logo"}),r.a.createElement("div",{className:"header-text"},r.a.createElement("p",{className:"title"},"Tic Tac Toe"),r.a.createElement("a",{target:"_blank",className:"credit",rel:"noopener noreferrer",href:"https://github.com/victoriousj"},r.a.createElement("p",null,"by victor d. johnson")))),r.a.createElement("div",{className:"header-buttons"},r.a.createElement("button",{onClick:function(){return e.toggleDifficulty()},className:"difficulty-button"},r.a.createElement("img",{src:d.a,style:{transform:"translateX(".concat(e.difficulty?"-":"","24px)")},alt:"difficulty"})),r.a.createElement("button",{onClick:function(){return e.resetGame()},className:"reset-button"},"reset \u21ba")))},p=t(7),v=t.n(p),h=t(8),w=t.n(h);var y=function(e){var n=0===e.value?"":2===e.value?v.a:w.a;return r.a.createElement("div",{className:"cell ".concat(e.winningPeice?e.winningAlignment:""),onClick:function(){return e.insert(e.index)}},r.a.createElement("span",{style:{backgroundImage:"url(".concat(n,")")},className:"".concat(2===e.value?"oh":"ex")}))},b=t(9),E=t(10),O=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;Object(b.a)(this,e),this.max_depth=n?2:6,this.nodes_map=new Map}return Object(E.a)(e,[{key:"isEmpty",value:function(e){return e.every((function(e){return!e}))}},{key:"isFull",value:function(e){return e.every((function(e){return e}))}},{key:"getAvailableMoves",value:function(e){var n=[];return e.forEach((function(e,t){e||n.push(t)})),n}},{key:"isTerminal",value:function(e){return!this.isEmpty(e)&&(e[0]===e[1]&&e[0]===e[2]&&e[0]?{winner:e[0],direction:"H",row:1,pieces:[0,1,2]}:e[3]===e[4]&&e[3]===e[5]&&e[3]?{winner:e[3],direction:"H",row:2,pieces:[3,4,5]}:e[6]===e[7]&&e[6]===e[8]&&e[6]?{winner:e[6],direction:"H",row:3,pieces:[6,7,8]}:e[0]===e[3]&&e[0]===e[6]&&e[0]?{winner:e[0],direction:"V",row:1,pieces:[0,3,6]}:e[1]===e[4]&&e[1]===e[7]&&e[1]?{winner:e[1],direction:"V",row:2,pieces:[1,4,7]}:e[2]===e[5]&&e[2]===e[8]&&e[2]?{winner:e[2],direction:"V",row:3,pieces:[2,5,8]}:e[0]===e[4]&&e[0]===e[8]&&e[0]?{winner:e[0],direction:"DL",row:1,pieces:[0,4,8]}:e[2]===e[4]&&e[2]===e[6]&&e[2]?{winner:e[2],direction:"DR",row:2,pieces:[2,4,6]}:!!this.isFull(e)&&{winner:"draw",pieces:[]})}},{key:"getBestMove",value:function(e){var n=this,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(0===r&&this.nodes_map.clear(),this.isTerminal(e)||r===this.max_depth)return 1===this.isTerminal(e).winner?100-r:2===this.isTerminal(e).winner?-100+r:0;if(t){var a=-100;if(this.getAvailableMoves(e).forEach((function(t){var c=Object(o.a)(e);c[t]=1;var s=n.getBestMove(c,!1,i,r+1);if(a=Math.max(a,s),0===r){var l=n.nodes_map.has(s)?"".concat(n.nodes_map.get(s),",").concat(t):t;n.nodes_map.set(s,l)}})),0===r){if("string"===typeof this.nodes_map.get(a))var c=(l=this.nodes_map.get(a).split(","))[Math.floor(Math.random()*l.length)];else c=this.nodes_map.get(a);return i(c),c}return a}if(!t){var s=100;if(this.getAvailableMoves(e).forEach((function(t){var a=Object(o.a)(e);a[t]=2;var c=n.getBestMove(a,!0,i,r+1);if(s=Math.min(s,c),0===r){var l=n.nodes_map.has(c)?n.nodes_map.get(c)+","+t:t;n.nodes_map.set(c,l)}})),0===r){if("string"===typeof this.nodes_map.get(s)){var l;c=(l=this.nodes_map.get(s).split(","))[Math.floor(Math.random()*l.length)]}else c=this.nodes_map.get(s);return i(c),c}return s}}}]),e}();t(18);function j(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function P(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?j(t,!0).forEach((function(n){Object(s.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var x={winningAlignment:"",winningPeices:[],cells:[0,0,0,0,0,0,0,0,0],isPlaying:!0,difficulty:0,winner:"",turn:0},_=function(){var e=r.a.useState(P({},x)),n=Object(l.a)(e,2),t=n[0],i=n[1],a=new O;function c(e){var n=Object(o.a)(t.cells);if(0===n[e]&&t.isPlaying){n[e]=t.turn+1,i((function(e){return P({},e,{cells:n,turn:(t.turn+1)%2})}));var r=a.isTerminal(n);r&&i((function(e){return P({},e,{winningAlignment:r.direction,winningPeices:r.pieces,winner:r.winner,isPlaying:!1})}))}}return r.a.useEffect((function(){1===t.turn&&window.setTimeout((function(){return function(e){var n=new O(t.difficulty),r=n.getBestMove(e,!1);if(0!==e[r]||!t.isPlaying)return;e[r]=t.turn+1,i((function(n){return P({},n,{cells:e,turn:(t.turn+1)%2})}));var a=n.isTerminal(e);a&&i((function(e){return P({},e,{winningAlignment:a.direction,winningPeices:a.pieces,winner:a.winner,isPlaying:!1})}))}(t.cells)}),200)})),r.a.createElement("div",null,r.a.createElement(g,{resetGame:function(){i((function(e){return P({},x,{difficulty:e.difficulty})}))},toggleDifficulty:function(){var e=(t.difficulty+1)%2;i((function(n){return P({},n,{difficulty:e})}))},difficulty:t.difficulty}),r.a.createElement("div",{className:"board ".concat(t.isPlaying?"active":"")},t.cells.map((function(e,n){return r.a.createElement(y,{key:n,index:n,value:e,insert:c,winningAlignment:t.winningAlignment,winningPeice:t.winningPeices.indexOf(n)>=0})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[12,1,2]]]);
//# sourceMappingURL=main.24fd9b34.chunk.js.map