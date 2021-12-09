(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{22:function(e,t,a){e.exports=a(36)},27:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(18),s=a.n(o),l=(a(27),a(2)),r=a(3),c=a(5),h=a(4),u=a(6),p=(a(28),a(29),a(11)),d=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleToggleCellStatus=a.handleToggleCellStatus.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleToggleCellStatus",value:function(){this.props.toggleCellStatus(this.props.row,this.props.column)}},{key:"render",value:function(){var e=this;return i.a.createElement("rect",{x:this.props.x,y:this.props.y,width:this.props.size,height:this.props.size,fill:this.props.alive?"#2bc7d4":"#CCC",onClick:function(){return e.handleToggleCellStatus()}})}}]),t}(n.Component),m=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleClickOnCell",value:function(e,t){this.props.toggleCellStatus(e,t)}},{key:"getDimension",value:function(){return{height:this.props.board.length,width:this.props.board[0].length}}},{key:"render",value:function(){for(var e=this,t=this.getDimension(),a=t.width,n=t.height,o=Math.min(Math.floor(800/a),Math.floor(1200/n)),s=[],l=0;l<n;l++)for(var r=0;r<a;r++)s.push({x:r*(o+1),y:l*(o+1),row:l,column:r,alive:this.props.board[l][r]});var c=s.map((function(t){return i.a.createElement(d,{key:"".concat(t.y,".").concat(t.x),x:t.x,y:t.y,row:t.row,column:t.column,alive:t.alive,size:o,toggleCellStatus:e.handleClickOnCell.bind(e)})}));return i.a.createElement("svg",{width:(o+1)*a,height:(o+1)*n},c)}},{key:"getCells",value:function(){for(var e=this.getDimension(),t=e.width,a=e.height,n=Math.min(Math.floor(1200/t),Math.floor(800/a)),i=[],o=0;o<t;o++)for(var s=0;s<a;s++)i.push({x:s*(n+1),y:o*(n+1),alive:this.props.board[o][s],size:n});return i}}]),t}(n.Component),f=a(8),g=(a(35),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleClickOnPlay",value:function(){this.props.play()}},{key:"handleClickOnStop",value:function(){this.props.stop()}},{key:"handleClickOnStep",value:function(){this.props.nextStep()}},{key:"handleClickOnReset",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.props.reset(e)}},{key:"render",value:function(){var e=this,t="count";return this.props.finished&&(t+=" finished"),i.a.createElement("div",{className:"menu"},i.a.createElement("div",null,i.a.createElement("blockquote",{className:"blockquote"},i.a.createElement("p",{className:"h1 mb-0"},"Game of life"),i.a.createElement("footer",{className:"blockquote-footer"},"By atchandj"))),i.a.createElement("div",{className:"generation"},i.a.createElement("span",null,"Generation:\xa0",i.a.createElement("span",{className:t},this.props.generation))),i.a.createElement("div",null,this.props.playing?this.getStopButton():this.getStartButton()),i.a.createElement("div",null,i.a.createElement("a",{title:"Next step",onClick:this.handleClickOnStep.bind(this)},i.a.createElement(f.a,{icon:"step-forward"}),"Step")),i.a.createElement("div",null,i.a.createElement("a",{title:"Random",onClick:function(){e.handleClickOnReset(!0)}},i.a.createElement(f.a,{icon:"random"}),"Random board")),i.a.createElement("div",null,i.a.createElement("a",{title:"Reset",onClick:function(){e.handleClickOnReset(!1)}},i.a.createElement(f.a,{icon:"sync"}),"Reset")))}},{key:"getStartButton",value:function(){return i.a.createElement("a",{title:"Start",onClick:this.handleClickOnPlay.bind(this)},i.a.createElement(f.a,{icon:"play"}),"Play")}},{key:"getStopButton",value:function(){return i.a.createElement("a",{title:"Stop",onClick:this.handleClickOnStop.bind(this)},i.a.createElement(f.a,{icon:"stop"}),"Stop")}}]),t}(n.Component)),v=a(19),b=a(16),y=40,k=30,S=150,C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={board:a.makeBoard(y,k),playing:!1,generation:0,speed:S,finished:!1},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e,t){!t.playing&&this.state.playing&&this.runSteps()}},{key:"makeBoard",value:function(e,t){for(var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=[],i=0;i<t;i++){n[i]=[];for(var o=0;o<e;o++)n[i][o]=!!a&&Math.random()>.7}return n}},{key:"play",value:function(){this.setState({playing:!0})}},{key:"stop",value:function(){this.setState({playing:!1})}},{key:"reset",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.setState({board:this.makeBoard(y,k,e),finished:!1,generation:0})}},{key:"runSteps",value:function(){this.state.playing&&!this.state.finished&&(this.nextStep(),setTimeout(this.runSteps.bind(this),this.state.speed))}},{key:"nextStep",value:function(){for(var e=[],t=!1,a=0;a<this.state.board.length;a++){e[a]=[];for(var n=0;n<this.state.board[0].length;n++){var i=this.getNumberOfNeighboursAlive(a,n),o=this.state.board[a][n];e[a][n]=!1,3===i?e[a][n]=!0:o&&2===i&&(e[a][n]=!0),o!==e[a][n]&&(t=!0)}}t?this.setState({board:e,generation:this.state.generation+1}):this.setState({finished:!0,playing:!1})}},{key:"getNumberOfNeighboursAlive",value:function(e,t){for(var a=this.state.board.length,n=this.state.board[0].length,i=0,o=e-1;o<=e+1;o++)for(var s=(o<0?a+o:o)%a,l=t-1;l<=t+1;l++){var r=(l<0?n+l:l)%n;r===t&&s===e||!this.state.board[s][r]||i++}return i}},{key:"toggleCellStatus",value:function(e,t){var a=JSON.parse(JSON.stringify(this.state.board));a[e][t]=!this.state.board[e][t],this.setState({board:a})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(v.a,null,i.a.createElement(b.a,{sm:3},i.a.createElement(g,{play:this.play.bind(this),stop:this.stop.bind(this),reset:this.reset.bind(this),nextStep:this.nextStep.bind(this),generation:this.state.generation,playing:this.state.playing,finished:this.state.finished})),i.a.createElement(b.a,{sm:9},i.a.createElement(m,{board:this.state.board,toggleCellStatus:this.toggleCellStatus.bind(this)}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=a(10),E=a(21),j=a(9);O.b.add(E.a,j.a,j.d,j.c,j.e,j.b),s.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.9e5cbda2.chunk.js.map