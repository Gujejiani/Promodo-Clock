(this["webpackJsonppromodo-clock"]=this["webpackJsonppromodo-clock"]||[]).push([[0],[,,,,,,,,function(e,t,s){e.exports=s(18)},,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),o=s(3),i=s.n(o),r=(s(13),s(4)),l=s(5),c=s(7),m=s(6),h=(s(14),s(1)),d=function(e){return n.a.createElement("div",{className:"arrows"},n.a.createElement("label",{id:"break-label"},"Break Length"),n.a.createElement("label",{id:"session-label"},"Session Length"),n.a.createElement(h.c,{onClick:e.click,id:"break-decrement",size:"40px",color:"green"}),n.a.createElement(h.d,{onClick:e.clickInc,id:"break-increment",size:"40px",color:"green"}),n.a.createElement(h.c,{onClick:e.sessionDecClick,id:"session-decrement",size:"40px",color:"green"}),n.a.createElement(h.d,{onClick:e.SessionIncClick,id:"session-increment",size:"40px",color:"green"}))};s(15),s(16);var u=function(e){return n.a.createElement("div",{className:"timerZone"},n.a.createElement("label",{id:"timer-label",style:e.style}," Session   "),n.a.createElement("div",{className:"breakArowAp",id:"one"},n.a.createElement("label",{id:"break-length",value:e.value},e.breakState)),n.a.createElement("div",{className:"breakArowAp",id:"sesTwo"},n.a.createElement("label",{id:"session-length"},e.sessionLength)),n.a.createElement("div",{className:"timeViewer"}),n.a.createElement("span",{className:"time",id:"time-left",value:e.timer,style:e.style}," ",e.timer," "))},k=(s(17),function(e){return n.a.createElement("div",{className:"icons"},n.a.createElement(h.a,{id:"start_stop",color:"yellow",size:"60px",onClick:e.start}),n.a.createElement(h.e,{color:"white",size:"90px",onClick:e.start}),n.a.createElement(h.b,{id:"reset",color:"yellow",size:"55px",onClick:e.reset}))}),g=function(e){Object(c.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).decrementBreakHAndler=function(){a.state.breakLength>1&&!a.state.start&&a.setState({breakLength:a.state.breakLength-1})},a.incrementBreakHAndler=function(){a.state.breakLength<60&&!a.state.start&&a.setState({breakLength:a.state.breakLength+1})},a.incrementSessionHandler=function(){a.state.time<3600&&!a.state.start&&a.setState({sessionLength:a.state.sessionLength+1,time:60*a.state.sessionLength+60}),console.log("time to timehill "+a.state.time)},a.sessionDecHandler=function(){a.state.time>0&&!a.state.start&&a.state.sessionLength>1&&a.setState({sessionLength:a.state.sessionLength-1,time:60*a.state.sessionLength-60}),console.log("heyy why I am not clicked???")},a.startedHandler=function(){var e=a.state.start;console.log("start"),a.setState({start:!e}),console.log("start "+a.state.start)},a.resetHandler=function(){console.log("am reseted"),a.setState({time:1500,breakLength:5,sessionLength:25,start:!1,timeColor:{color:"white"}}),document.getElementById("timer-label").textContent="Session"},a.state={breakLength:5,sessionLength:25,time:1500,start:!1,timeColor:{color:"white"}},a.url="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav",a.audio=new Audio(a.url),a}return Object(l.a)(s,[{key:"startTimer",value:function(){this.state.time>0&&this.state.start&&this.setState({time:this.state.time-1}),this.state.time<60&&this.state.start?(this.setState({timeColor:{color:"red"}}),this.audio.play()):(this.setState({timeColor:{color:"white"}}),this.audio.pause(),this.state.start&&this.setState({})),0===this.state.time?(console.log("noriko you are so sweet"),document.getElementById("timer-label").textContent="Break",this.setState({time:60*this.state.breakLength})):this.state.time<60?this.setState({timeColor:{color:"red"}}):1===this.state.time&&(console.log("xexe"),this.setState({start:!1}))}},{key:"componentWillUnmount",value:function(){console.log("state "+this.state.time),clearInterval(this.myInterval)}},{key:"render",value:function(){console.log(this.state.time);var e=function(e){Math.floor(e/3600);var t=Math.floor(e/60),s=e-60*t;return s=s<10?"0"+s:s,"".concat(t=t<10?"0"+t:t," : ").concat(s)}(this.state.time);return this.url="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav",n.a.createElement("div",{className:"App"},n.a.createElement("audio",{id:"beef",src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"}),n.a.createElement("h1",null,"Promodo Clock"),n.a.createElement(d,{SessionIncClick:this.incrementSessionHandler,clickInc:this.incrementBreakHAndler,click:this.decrementBreakHAndler,sessionDecClick:this.sessionDecHandler}),n.a.createElement(u,{timer:e,style:this.state.timeColor,breakState:this.state.breakLength,sessionLength:this.state.sessionLength}),n.a.createElement(k,{start:this.startedHandler,reset:this.resetHandler,value:this.state.breakLength}))}},{key:"componentDidMount",value:function(){var e=this;this.myInterval=setInterval((function(){e.state.start&&e.startTimer()}),1e3)}}]),s}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.21c14605.chunk.js.map