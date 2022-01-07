let total = 0;
let wicket = 0;
let over = 0;
let ball = 0;
var o;
//team1

function myFunction0() {
  var text = document.createElement("p");
  text.innerHTML = "0+";
  text.style.lineHeight = "0.0001cm";
  document.getElementById("score1").appendChild(text);
  total += 0;
  ball += 1;
  var x = ball % 6;
  over = Math.floor(ball / 6);
  document.getElementById("team1-over").innerHTML = `${over}.${x}(${o})`;
  document.getElementById("team1-total").innerHTML = `${total}/ ${wicket}`;
}
function myFunction1() {
  var text = document.createElement("p");
  text.innerHTML = "1+";
  text.style.lineHeight = "0.0001cm";
  document.getElementById("score1").appendChild(text);
  total += 1;
  ball += 1;
  var x = ball % 6;
  over = Math.floor(ball / 6);
  document.getElementById("team1-over").innerHTML = `${over}.${x}(${o})`;
  document.getElementById("team1-total").innerHTML = `${total}/ ${wicket}`;
}
function myFunction2() {
  var text = document.createElement("p");
  text.innerHTML = "2+";
  text.style.lineHeight = "0.0001cm";
  document.getElementById("score1").appendChild(text);
  total += 2;
  ball += 1;
  var x = ball % 6;
  over = Math.floor(ball / 6);
  document.getElementById("team1-over").innerHTML = `${over}.${x}(${o})`;
  document.getElementById("team1-total").innerHTML = `${total}/ ${wicket}`;
}
function myFunction3() {
  var text = document.createElement("p");
  text.innerHTML = "3+";
  text.style.lineHeight = "0.0001cm";
  document.getElementById("score1").appendChild(text);
  total += 3;
  ball += 1;
  var x = ball % 6;
  over = Math.floor(ball / 6);
  document.getElementById("team1-over").innerHTML = `${over}.${x}(${o})`;
  document.getElementById("team1-total").innerHTML = `${total}/ ${wicket}`;
}
function myFunction4() {
  var text = document.createElement("p");
  text.innerHTML = "4+";
  text.style.lineHeight = "0.0001cm";
  document.getElementById("score1").appendChild(text);
  total += 4;
  ball += 1;
  var x = ball % 6;
  over = Math.floor(ball / 6);
  document.getElementById("team1-over").innerHTML = `${over}.${x}(${o})`;
  document.getElementById("team1-total").innerHTML = `${total}/ ${wicket}`;
}
function myFunction5() {
  var text = document.createElement("p");
  text.innerHTML = "5+";
  text.style.lineHeight = "0.0001cm";
  document.getElementById("score1").appendChild(text);
  total += 5;
  ball += 0;
  var x = ball % 6;
  document.getElementById("team1-over").innerHTML = `${over}.${x}(${o})`;
  document.getElementById("team1-total").innerHTML = `${total}/ ${wicket}`;
}
function myFunction6() {
  var text = document.createElement("p");
  text.innerHTML = "6+";
  text.style.lineHeight = "0.0001cm";
  document.getElementById("score1").appendChild(text);
  total += 6;
  ball += 1;
  var x = ball % 6;
  over = Math.floor(ball / 6);
  document.getElementById("team1-over").innerHTML = `${over}.${x}(${o})`;
  document.getElementById("team1-total").innerHTML = `${total}/ ${wicket}`;
}
function myFunctionWd() {
  var text = document.createElement("p");
  text.innerHTML = "Wd+";
  text.style.lineHeight = "0.0001cm";
  document.getElementById("score1").appendChild(text);
  total += 1;
  var x = ball % 6;
  document.getElementById("team1-over").innerHTML = `${over}.${x}(${o})`;
  document.getElementById("team1-total").innerHTML = `${total}/ ${wicket}`;
}
function myFunctionW() {
  var text = document.createElement("p");
  text.innerHTML = "W+";
  text.style.lineHeight = "0.0001cm";
  document.getElementById("score1").appendChild(text);
  total += 0;
  ball += 1;
  var x = ball % 6;
  over = Math.floor(ball / 6);
  wicket += 1;
  document.getElementById("team1-over").innerHTML = `${over}.${x}(${o})`;
  document.getElementById("team1-total").innerHTML = `${total}/ ${wicket}`;
}
function myFunctionNb() {
  var text = document.createElement("p");
  text.innerHTML = "Nb+";
  text.style.lineHeight = "0.0001cm";
  document.getElementById("score1").appendChild(text);
  total += 1;
  var x = ball % 6;
  document.getElementById("team1-over").innerHTML = `${over}.${x}(${o})`;
  document.getElementById("team1-total").innerHTML = `${total}/ ${wicket}`;
}

//team2
var total2 = 0;
var wicket2 = 0;
var over2 = 0;
var ball2 = 0;

function myFunction_0() {
  var text = document.createElement("p");
  text.innerHTML = "0+";
  text.style.lineHeight = "0.0001cm";
  document.getElementById("score2").appendChild(text);
  total2 += 0;
  ball2 += 1;
  var x = ball2 % 6;
  over2 = Math.floor(ball2 / 6);
  document.getElementById("team2-over").innerHTML = ` ${over2}.${x}(${o})`;
  document.getElementById("team2-total").innerHTML = ` ${total2}/${wicket2}`;
}

function myFunction_1() {
  var text = document.createElement("p");
  text.innerHTML = "1+";
  text.style.lineHeight = "0.0001cm";
  document.getElementById("score2").appendChild(text);
  total2 += 1;
  ball2 += 1;
  var x = ball2 % 6;
  over2 = Math.floor(ball2 / 6);
  document.getElementById("team2-over").innerHTML = ` ${over2}.${x}(${o})`;
  document.getElementById("team2-total").innerHTML = ` ${total2}/${wicket2} `;
}

function myFunction_2() {
  var text = document.createElement("p");
  text.innerHTML = "2+";
  text.style.lineHeight = "0.0001cm";
  document.getElementById("score2").appendChild(text);
  total2 += 2;
  ball2 += 1;
  var x = ball2 % 6;
  over2 = Math.floor(ball2 / 6);
  document.getElementById("team2-over").innerHTML = ` ${over2}.${x}(${o}) `;
  document.getElementById("team2-total").innerHTML = ` ${total2}/${wicket2} `;
}

function myFunction_3() {
  var text = document.createElement("p");
  text.innerHTML = "3+";
  text.style.lineHeight = "0.0001cm";
  document.getElementById("score2").appendChild(text);
  total2 += 3;
  ball2 += 1;
  var x = ball2 % 6;
  over2 = Math.floor(ball2 / 6);
  document.getElementById("team2-over").innerHTML = ` ${over2}.${x}(${o}) `;
  document.getElementById("team2-total").innerHTML = ` ${total2}/${wicket2} `;
}
function myFunction_4() {
  var text = document.createElement("p");
  text.innerHTML = "4+";
  text.style.lineHeight = "0.0001cm";
  document.getElementById("score2").appendChild(text);
  total2 += 4;
  ball2 += 1;
  var x = ball2 % 6;
  over2 = Math.floor(ball2 / 6);
  document.getElementById("team2-over").innerHTML = ` ${over2}.${x} (${o}) `;
  document.getElementById("team2-total").innerHTML = ` ${total2}/${wicket2} `;
}
function myFunction_5() {
  var text = document.createElement("p");
  text.innerHTML = "5+";
  text.style.lineHeight = "0.0001cm";
  document.getElementById("score2").appendChild(text);
  total2 += 5;
  ball2 += 0;
  var x = ball2 % 6;
  over2 = Math.floor(ball2 / 6);
  document.getElementById("team2-over").innerHTML = ` ${over2}.${x}(${o}) `;
  document.getElementById("team2-total").innerHTML = ` ${total2}/${wicket2} `;
}
function myFunction_6() {
  var text = document.createElement("p");
  text.innerHTML = "6+";
  text.style.lineHeight = "0.0001cm";
  document.getElementById("score2").appendChild(text);
  total2 += 6;
  ball2 += 1;
  var x = ball2 % 6;
  over2 = Math.floor(ball2 / 6);
  document.getElementById("team2-over").innerHTML = ` ${over2}.${x}(${o})`;
  document.getElementById("team2-total").innerHTML = ` ${total2}/${wicket2} `;
}
function myFunction_Wd() {
  var text = document.createElement("p");
  text.innerHTML = "Wd+";
  text.style.lineHeight = "0.0001cm";
  document.getElementById("score2").appendChild(text);
  total2 += 1;
  ball2 += 0;
  var x = ball2 % 6;
  over2 = Math.floor(ball2 / 6);
  document.getElementById("team2-over").innerHTML = ` ${over2}.${x}(${o}) `;
  document.getElementById("team2-total").innerHTML = ` ${total2}/${wicket2} `;
}
function myFunction_W() {
  var text = document.createElement("p");
  text.innerHTML = "W+";
  text.style.lineHeight = "0.0001cm";
  document.getElementById("score2").appendChild(text);
  total2 += 0;
  wicket2 += 1;
  ball2 += 1;
  var x = ball2 % 6;
  over2 = Math.floor(ball2 / 6);
  document.getElementById("team2-over").innerHTML = ` ${over2}.${x}(${o}) `;
  document.getElementById("team2-total").innerHTML = ` ${total2}/${wicket2} `;
}
function myFunction_Nb() {
  var text = document.createElement("p");
  text.innerHTML = "Nb+";
  text.style.lineHeight = "0.0001cm";
  document.getElementById("score2").appendChild(text);
  total2 += 1;
  ball2 += 0;
  var x = ball2 % 6;
  over2 = Math.floor(ball2 / 6);
  document.getElementById("team2-over").innerHTML = ` ${over2}.${x}(${o}) `;
  document.getElementById("team2-total").innerHTML = ` ${total2}/${wicket2} `;
}

function result() {
  if (total2 > total)
    document.getElementById("winner").innerHTML = "Team2 won the Match";
  else if (total2 < total)
    document.getElementById("winner").innerHTML = "Team1 won the Match";
  else if (total2 === total)
    document.getElementById("winner").innerHTML = "Match Drawn !!!";
}

function rename() {
  var t1 = document.getElementById("team-1-name").value;
  var t2 = document.getElementById("team-2-name").value;
  o = document.getElementById("over-limit").value;
  document.getElementById("team1-name").innerHTML = t1;
  document.getElementById("team2-name").innerHTML = t2;
}
