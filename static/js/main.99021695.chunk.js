(this["webpackJsonprock-paper-scissors-react-app"]=this["webpackJsonprock-paper-scissors-react-app"]||[]).push([[0],{20:function(e,c,t){},41:function(e,c,t){"use strict";t.r(c);var a=t(1),s=t.n(a),i=t(5),r=t.n(i),n=(t(20),t.p+"static/media/logo.a4a2b39f.svg"),o=t(3),l=t(0),d=function(){var e=Object(o.b)((function(e){return e.computer.userScore}));return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"top-section-container",children:Object(l.jsxs)("div",{className:"top-section-div",children:[Object(l.jsx)("div",{className:"logo-div",children:Object(l.jsx)("img",{src:n,alt:"Logo"})}),Object(l.jsxs)("div",{className:"score-container",children:[Object(l.jsx)("div",{className:"score-name",children:"SCORE"}),Object(l.jsx)("div",{className:"score-value",children:e})]})]})})})},u=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"",children:[Object(l.jsx)("div",{className:"glow-circle-three"}),Object(l.jsx)("div",{className:"glow-circle-two"}),Object(l.jsx)("div",{className:"glow-circle-one"})]})})},j=t(9),p=t.n(j),m=t(13),b=t(4),h=t(2),O={eventElement:{playerPath:"",computerPath:""},userPlay:""},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"PAPER":return Object(h.a)(Object(h.a)({},e),{},{userPlay:"paper"});case"SCISSORS":return Object(h.a)(Object(h.a)({},e),{},{userPlay:"scissors"});case"ROCK":return Object(h.a)(Object(h.a)({},e),{},{userPlay:"rock"});case"PLAYER_PATH":return Object(h.a)(Object(h.a)({},e),{},{eventElement:Object(h.a)(Object(h.a)({},e.eventElement),{},{playerPath:c.payload})});case"COMPUTER_PATH":return Object(h.a)(Object(h.a)({},e),{},{eventElement:Object(h.a)(Object(h.a)({},e.eventElement),{},{computerPath:c.payload})});case"RESET_PLAYER":return Object(h.a)(Object(h.a)({},e),{},{eventElement:{playerPath:"",computerPath:""},userPlay:""});default:return e}},v={computerPlay:"",userScore:0,gameStatus:""},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"COMPUTER_CHOICE":return Object(h.a)(Object(h.a)({},e),{},{computerPlay:c.payload});case"RESET_COMP_PLAY":return Object(h.a)(Object(h.a)({},e),{},{computerPlay:"",gameStatus:""});case"GAME_RESULT":if("YOU WIN"===c.payload)return Object(h.a)(Object(h.a)({},e),{},{gameStatus:c.payload,userScore:e.userScore+1});if("YOU LOSE"===c.payload)return Object(h.a)(Object(h.a)({},e),{},{gameStatus:c.payload,userScore:e.userScore-1});if("A DRAW"===c.payload)return Object(h.a)(Object(h.a)({},e),{},{gameStatus:c.payload});default:return e}},x=Object(b.combineReducers)({player:y,computer:g}),f=t(14),N=t(15),S=t.n(N),E=Object(f.composeWithDevTools)(Object(b.applyMiddleware)((function(e){return function(e){return function(c){"PLAYER_CHOICE"===c.type?"player_paper"===c.payload?e({type:"PAPER"}):"player_scissors"===c.payload?e({type:"SCISSORS"}):"player_rock"===c.payload&&e({type:"ROCK"}):e(c)}}}))),P=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(c){}}(),k=Object(b.createStore)(x,P,E);k.subscribe(S()((function(){U({computer:{userScore:k.getState().computer.userScore}})})),1e3);var C=function(e){return{type:"PLAYER_CHOICE",payload:e}},_=function(e){return{type:"GAME_RESULT",payload:e}},R=function(e){return{type:"PLAYER_PATH",payload:e}},w=function(e){return{type:"COMPUTER_PATH",payload:e}},A=function(){return{type:"RESET_COMP_PLAY"}},T=function(){return{type:"RESET_PLAYER"}},U=function(e){try{var c=JSON.stringify(e);localStorage.setItem("state",c)}catch(t){}},Y=function(){document.querySelector(".rules-container").style.display="none"},q=function(){document.querySelector(".rules-container").style.display="block"},I=function(){var e=document.querySelector(".win-or-lose-mobile-container").style,c=document.querySelector(".play-choosing-computer-section-container").style,t=document.querySelector(".play-choosing-section-container").style,a=document.querySelector("#player_choice").children;document.querySelector("#comp_choice").children[0].className="",a[0].className="",e.visibility="hidden",c.display="none",t.display="block",k.dispatch(T()),k.dispatch(A())},L=function(e,c,t){var a=document.querySelector(".play-choosing-computer-section-container").style,s=document.querySelector(".play-choosing-section-container").style;k.dispatch(C(c)),k.dispatch(R(t)),s.display="none",a.display="block"},H=function(e,c){e.stopPropagation();var t=e.target.parentElement.id,a=e.target.parentElement.lastChild.firstChild.src;L(0,t,a)},M=function(){var e=["paper","scissors","rock","scissors","paper","rock"][Math.floor(6*Math.random())],c=function(e){return"paper"===e?"https://steentoons.github.io/rock-paper-scissors/static/media/icon-paper.8b57a6b1.svg":"rock"===e?"https://steentoons.github.io/rock-paper-scissors/static/media/icon-rock.476e90a9.svg":"scissors"===e?"https://steentoons.github.io/rock-paper-scissors/static/media/icon-scissors.3b1a5d7e.svg":void 0}(e);k.dispatch(w(c));var t=document.querySelector("#comp_choice").style;return document.querySelector("#before_comp_choice").style.display="none",t.display="block",e},W=function(){var e=Object(m.a)(p.a.mark((function e(c){var t,a,s,i,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=c.computer.computerPlay,a=c.player.userPlay,i=[{beats:"rock",loseTo:"scissors",itSelf:"paper"},{beats:"scissors",loseTo:"paper",itSelf:"rock"},{beats:"paper",loseTo:"rock",itSelf:"scissors"}],r=0;r<i.length;r++)a===i[r].itSelf&&(t===i[r].beats?(s="YOU WIN",k.dispatch(_(s))):t===i[r].loseTo?(s="YOU LOSE",k.dispatch(_(s))):t===i[r].itSelf&&(s="A DRAW",k.dispatch(_(s))));D();case 5:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}(),D=function(){var e=document.querySelector(".win-or-lose-mobile-container"),c=document.querySelector(".winning-message-middle-container").style;e.style.display="block",e.style.visibility="visible",c.display="block"},F=function(e){Object(o.b)((function(e){return e}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{}),Object(l.jsx)("div",{className:"choice-button-thickness"}),Object(l.jsx)("div",{className:"choice-button-bottom-thickness"}),Object(l.jsx)("div",{className:"choice-button-main-circle"}),Object(l.jsx)("div",{className:"choice-image-div",children:Object(l.jsx)("img",{onClick:function(e){return function(e,c){e.stopPropagation();var t=e.target.parentNode.offsetParent.id,a=e.target.src;L(0,t,a)}(e)},src:e.imgSrc,alt:"Rock"})})]})},K=t.p+"static/media/bg-triangle.c0c30b56.svg",J=t.p+"static/media/icon-rock.476e90a9.svg",G=t.p+"static/media/icon-paper.8b57a6b1.svg",B=t.p+"static/media/icon-scissors.3b1a5d7e.svg",z=function(){var e=Object(o.b)((function(e){return e}));return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"play-choosing-section-container",children:[Object(l.jsx)("div",{className:"play-choosing-section-floating-div",children:Object(l.jsxs)("div",{className:"play-choosing-section-div",children:[Object(l.jsxs)("div",{className:"play-choosing-top-two-container",children:[Object(l.jsx)("div",{id:"player_paper",onClick:H,className:"actual-choice-div-container player-paper",children:Object(l.jsx)(F,{imgSrc:G})}),Object(l.jsx)("div",{id:"player_scissors",onClick:function(e){return H(e)},className:"actual-choice-div-container player-scissors",children:Object(l.jsx)(F,{imgSrc:B})})]}),Object(l.jsx)("div",{className:"play-choosing-bottom-solo-container",children:Object(l.jsx)("div",{id:"player_rock",onClick:function(c){H(c),console.log(e)},className:"actual-choice-div-container player-rock",children:Object(l.jsx)(F,{imgSrc:J})})})]})}),Object(l.jsx)("div",{className:"back-triangle-container",children:Object(l.jsx)("div",{className:"back-triangle-div",children:Object(l.jsx)("img",{src:K,alt:"Play Choice Triangle"})})})]})})},Q=function(){var e=Object(o.b)((function(e){return e.computer.gameStatus}));return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"win-or-lose-container",children:Object(l.jsxs)("div",{className:"win-or-lose-div",children:[Object(l.jsx)("div",{className:"win-or-lose-text",children:e}),Object(l.jsx)("div",{className:"play-again-container",children:Object(l.jsx)("button",{onClick:I,children:"PLAY AGAIN"})})]})})})},V=function(e){return{type:"COMPUTER_CHOICE",payload:e}},X=function(){var e=Object(o.b)((function(e){return e})),c=e.player.userPlay,t=e.computer.computerPlay,s=e.computer.gameStatus;return Object(a.useEffect)((function(){if(""!==c){var e=document.querySelector("#player_choice");"rock"===c?(J,e.className="actual-choice-div-container player-rock"):"paper"===c?(G,e.className="actual-choice-div-container player-paper"):"scissors"===c&&(B,e.className="actual-choice-div-container player-scissors");var t=M();k.dispatch(V(t))}}),[c]),Object(a.useEffect)((function(){if(""!==t){var e=document.querySelector("#comp_choice");"rock"===t?(J,e.className="actual-choice-div-container player-rock"):"paper"===t?(G,e.className="actual-choice-div-container player-paper"):"scissors"===t&&(B,e.className="actual-choice-div-container player-scissors")}}),[t]),Object(a.useEffect)((function(){if(void 0!==t&&""!==t){var c=document.querySelector(".win-or-lose-mobile-container"),a=document.querySelector("#player_choice").children;setTimeout((function(){W(e),c.style.visibility="visible"}),1500),"YOU WIN"===e.computer.gameStatus&&(alert("winning"),a[0].className="glowing-winner-container"),console.log(a[0].className)}}),[t]),Object(a.useEffect)((function(){var e=document.querySelector("#player_choice").children,c=document.querySelector("#comp_choice").children;if("YOU WIN"===s&&"YOU LOSE"!==s&&"A DRAW"!==s){c[0].className="";setTimeout((function(){e[0].className="glowing-winner-container"}),100)}else if("YOU LOSE"===s&&"YOU WIN"!==s&&"A DRAW"!==s){e[0].className="";setTimeout((function(){c[0].className="glowing-winner-container"}),100)}}),[s,t]),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"play-choosing-computer-section-container",children:Object(l.jsx)("div",{className:"play-choosing-section-floating-div",children:Object(l.jsx)("div",{className:"play-choosing-section-div",children:Object(l.jsxs)("div",{className:"play-computer-choosing-top-two-container",children:[Object(l.jsxs)("div",{className:"play-choice-div",children:[Object(l.jsx)("div",{className:"play-choice-title-desktop-container",children:Object(l.jsx)("div",{className:"play-choice-title",children:"YOU PICKED"})}),Object(l.jsx)("div",{id:"player_choice",className:"actual-choice-div-container",children:Object(l.jsx)(F,{imgSrc:e.player.eventElement.playerPath})}),Object(l.jsx)("div",{className:"play-choice-title-container",children:Object(l.jsx)("div",{className:"play-choice-title",children:"YOU PICKED"})})]}),Object(l.jsx)("div",{className:"winning-message-middle-container",children:Object(l.jsx)("div",{className:"winning-message-middle-div",children:Object(l.jsx)(Q,{})})}),Object(l.jsxs)("div",{className:"play-choice-div",children:[Object(l.jsx)("div",{className:"play-choice-title-desktop-container",children:Object(l.jsx)("div",{className:"play-choice-title",children:"THE HOUSE PICKED"})}),Object(l.jsx)("div",{id:"comp_choice",className:"actual-choice-div-container",children:Object(l.jsx)(F,{imgSrc:e.player.eventElement.computerPath})}),Object(l.jsx)("div",{id:"before_comp_choice",className:"actual-choice-div-container"}),Object(l.jsx)("div",{className:"play-choice-title-container",children:Object(l.jsx)("div",{className:"play-choice-title",children:"THE HOUSE PICKED"})})]})]})})})})})},Z=t.p+"static/media/image-rules.258b753f.svg",$=t.p+"static/media/icon-close.bde602ec.svg",ee=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"rules-container",children:Object(l.jsx)("div",{onClick:Y,className:"rules-popup-div",children:Object(l.jsxs)("div",{className:"actual-rules",children:[Object(l.jsxs)("div",{className:"rules-title-div",children:[Object(l.jsx)("div",{className:"rules-title-mobile",children:"RULES"}),Object(l.jsx)("img",{onClick:Y,src:$,alt:"Cancel Rules"})]}),Object(l.jsx)("div",{className:"rules-image-div",children:Object(l.jsx)("img",{src:Z,alt:"Rock Paper Scissors Rules"})}),Object(l.jsx)("div",{className:"rules-cancel-mobile",children:Object(l.jsx)("img",{onClick:Y,src:$,alt:"Cancel Rules"})})]})})})})},ce=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(ee,{}),Object(l.jsx)(d,{}),Object(l.jsx)(z,{}),Object(l.jsx)(X,{}),Object(l.jsx)("div",{className:"win-or-lose-mobile-container",children:Object(l.jsx)(Q,{})}),Object(l.jsx)("div",{className:"rules-button-container",children:Object(l.jsx)("button",{onClick:q,children:"RULES"})})]})})};var te=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(ce,{})})};r.a.render(Object(l.jsx)(o.a,{store:k,children:Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(te,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.99021695.chunk.js.map