(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"./images/beautyButterfly.jpg",clicked:!1},{id:2,image:"./images/cheerButterfly.jpg",clicked:!1},{id:3,image:"./images/flawButterfly.jpg",clicked:!1},{id:4,image:"./images/jadeButterfly.jpg",clicked:!1},{id:5,image:"./images/mysterioButterfly.jpg",clicked:!1},{id:6,image:"./images/prettyButterfly.jpg",clicked:!1},{id:7,image:"./images/sirenButterfly.jpg",clicked:!1},{id:8,image:"./images/spawnButterfly.jpg",clicked:!1},{id:9,image:"./images/speedoButterfly.jpg",clicked:!1},{id:10,image:"./images/spottyButterfly.jpg",clicked:!1}]},,,,,,,,function(e,t,n){e.exports=n(21)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(3),c=n.n(i),o=(n(15),n(4)),l=n(5),s=n(7),d=n(6),u=n(8),m=(n(16),function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{alt:e.name,src:e.image})))});n(17);var g=function(e){return r.a.createElement("h1",{className:"nav"},e.children)},h=(n(18),function(e){return r.a.createElement("div",{className:"wrapper"},e.children)});n(19);var f=function(e){return r.a.createElement("h1",{className:"title"},e.children)},p=n(1);n(20);var k=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={butterfly:p,currentScore:0,topScore:0,rightWrong:"",clicked:[]},n.handleClick=function(e){-1===n.state.clicked.indexOf(e)?(n.handleIncrement(),n.setState({clicked:n.state.clicked.concat(e)})):n.handleReset()},n.handleIncrement=function(){var e=n.state.currentScore+1;n.setState({currentScore:e,rightWrong:""}),e>=n.state.topScore?n.setState({topScore:e}):10===e&&n.setState({rightWrong:"You got this!"}),n.handleShuffle()},n.handleReset=function(){n.setState({currentScore:0,topScore:n.state.topScore,rightWrong:"Butterfilies are hard to catch. Try again!",clicked:[]}),n.handleShuffle()},n.handleShuffle=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e}(p);n.setState({friends:e})},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h,null,r.a.createElement(g,{score:this.state.currentScore,topScore:this.state.topScore,rightWrong:this.state.rightWrong}),r.a.createElement(f,null,"Butterfilies TEST"),this.state.butterfly.map(function(t){return r.a.createElement(m,{key:t.id,onClick:e.handleClick,handleIncrement:e.handleIncrement,handleReset:e.handleReset,handleShuffle:e.handleShuffle,id:t.id,image:t.image})}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.e2f39779.chunk.js.map