(this.webpackJsonpcogsci1=this.webpackJsonpcogsci1||[]).push([[0],{13:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(8),c=n.n(r),i=(n(13),n(2)),o=n(3),l=n(5),u=n(4),d=n(6),h=n(0),j=n(15),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).componentWillMount=function(){a.myInterval=setInterval((function(){a.state.seconds>0&&a.setState((function(e){return{seconds:e.seconds-1}})),0===a.state.seconds&&clearInterval(a.myInterval)}),1e3)},a.componentWillUnmount=function(){clearInterval(a.myInterval)},a.handleChange=function(e){a.setState({value:e.target.value})},a.handleSubmit=function(e){a.state.words.includes(a.state.value)&&a.setState((function(e){return{correct:e.correct+1}})),alert("A word was submitted: "+a.state.value),a.setState({value:""}),e.preventDefault()},a.seeResults=function(){var e;e=a.state.correct>=5&&a.state.correct<=9?"Your working memory span is average (5-9 items).":a.state.correct<5?"Your working memory span is below average. Grouping items into a meaningful could be a good idea.":"Your working memory span is very good!",alert("You got "+a.state.correct+" correct.\n"+e),window.location.reload()},a.state={seconds:60,words:j(30),value:"",playing:!0,correct:0},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{className:"game-background",children:0===this.state.seconds?Object(h.jsxs)("div",{children:[Object(h.jsxs)("form",{onSubmit:this.handleSubmit,id:"myform",children:[Object(h.jsx)("p",{children:"Enter in as many words as you can remember."}),Object(h.jsx)("p",{children:'Press "See Results" after you\'re done.'}),Object(h.jsx)("input",{type:"text",value:this.state.value,onChange:this.handleChange})]}),Object(h.jsxs)("div",{className:"button-wrapper",children:[Object(h.jsx)("button",{className:"game-button",onClick:function(){return e.seeResults()},children:"See Results"}),Object(h.jsx)("button",{className:"game-button",onClick:function(){return window.location.reload()},children:"Quit"})]})]}):Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Remember as many words as you can!"}),Object(h.jsxs)("h1",{children:["Time Remaining: ",this.state.seconds]}),Object(h.jsxs)("div",{className:"word-wrapper",children:[this.state.words.slice(0,10).map((function(e){return Object(h.jsx)("p",{children:e})})),this.state.words.slice(10,20).map((function(e){return Object(h.jsx)("p",{children:e})})),this.state.words.slice(20,30).map((function(e){return Object(h.jsx)("p",{children:e})}))]})]})})}}]),n}(a.Component),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={playing:!1,game:""},e}return Object(o.a)(n,[{key:"renderGame",value:function(){if("storage"===this.state.game)return Object(h.jsx)(b,{});"search"===this.state.game&&console.log("yo")}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[" ",this.state.playing?this.renderGame():Object(h.jsxs)("div",{className:"App",children:["Working Memory Test",Object(h.jsx)("div",{className:"button-wrapper",children:Object(h.jsx)("button",{className:"game-button",onClick:function(){return e.setState({playing:!0,game:"storage"})},children:"Play Storage Test"})}),Object(h.jsx)("p",{className:"author",children:"Made by Cheng Bin Chen for COGS2120 S21"})]})]})}}]),n}(a.Component),g=(n(16),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)(m,{})})}}]),n}(a.Component)),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};c.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),p()}},[[17,1,2]]]);
//# sourceMappingURL=main.5de9e678.chunk.js.map