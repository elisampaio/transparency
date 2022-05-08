//Credits & info
// Elisa Sampaio -- 2021
console.log("Hello world!");

// VARIÁVEIS -------------------------------------------------------------------
let main = document.querySelector('main');
let loadDiv = document.querySelector('.onload');
let privacy = document.querySelector('.privacy');
var slider = document.querySelector('#myRange');
var slider1 = document.querySelector('#myRange1');
var slider2 = document.querySelector('#myRange2');
var slider3 = document.querySelector('#myRange3');
let intro = document.querySelector('.introText');
let introChange = document.querySelector('#deviceChange');
let number = document.querySelector('.number');
let no2 = document.querySelector(".number2");
let plus = document.querySelector(".plus");
let cred = document.querySelector(".plusCredits");
let w = window.innerWidth;
let h = window.innerHeight;
var x;
var y;

// FUNÇÕES ---------------------------------------------------------------------

// executar quando a página tiver feito o load
function setup() {

  // alterar o termo consoante o dispositivo utilizado
  if ( w < 768) {
    introChange.innerHTML = "Tap for the fun to";
    introChange.style.position = "relative";
  } else if ( w > 768) {
    introChange.innerHTML = "Click for the fun to";
    introChange.style.position = "relative";
  } else {}
}

// remover texto inicial
function transitionIntro() {
  loadDiv.style.opacity = 0;
}

function removerIntro() {
  loadDiv.remove();
  intro.remove();
}

// função para escrever o texto aleatoriamente no ecrâ
function write() {

  let newText = document.createElement('span');
  main.appendChild(newText);
  newText.innerHTML = "Transparency";
  newText.classList.add('tp');
  newText.style.left = x;
  newText.style.top = y;
  x = (Math.random() * window.innerWidth)+"px";
  y = (Math.random() * window.innerHeight)+"px";

  // adicionar com um size random
  let r = Math.floor(Math.random() * 45);
  newText.style.fontSize = r+"px";

  // adicionar com uma weight random
  let rW = Math.floor(Math.random() * 900);
  newText.style.fontWeight = rW;

  // adicionar com opacidade random
  var rO = Math.random();
  rO = rO.toFixed(1);
  newText.style.opacity = rO;

  // adicionar com Z-Index random
  var rZi = Math.floor(Math.random() * 100);
  var zValue = Math.floor(Math.random() * 5);

  if ( rZi > 58 && rZi > 60) {
    newText.style.zIndex = zValue;
  } else {}
}

function numberAdd() {
  // adicionar número na secção das infos
  var item = document.querySelectorAll('.tp');
  for (var i = 0; i < item.length; i++) {
      number.innerHTML = i;
  }
}

// SLIDERS
// Solução encontrada/inspirada em:
// https://www.w3schools.com/howto/howto_js_rangeslider.asp
// https://www.geeksforgeeks.org/allow-users-to-change-font-size-of-a-webpage-using-javascript/

// alterar o tamanho da fonte
slider.oninput = function() {
  var item = document.querySelectorAll('.tp');
  var value = slider.value;
  for (var i = 0; i < item.length; i++) {
      item[i].style.fontSize = value+"px";
  }
}

// alterar o peso da fonte
slider1.oninput = function() {
  var item = document.querySelectorAll('.tp');
  var value = slider1.value;
  for (var i = 0; i < item.length; i++) {
      item[i].style.fontWeight = value;
  }
}

// alterar opacidade da fonte
slider2.oninput = function() {
  var item = document.querySelectorAll('.tp');
  var value = slider2.value;
  for (var i = 0; i < item.length; i++) {
      item[i].style.opacity = value/100;
  }
}

// alterar entre regular e itálico
slider3.oninput = function () {
  var item = document.querySelectorAll('.tp');
  var value = slider3.value;
  for (var i = 0; i < item.length; i++) {
    if (value == 0){
      item[i].style.fontFamily = 'Bitter';
    } if (value == 1) {
      item[i].style.fontFamily = 'Bitter italic';
    } else {
    }
  }
}

// "limpar" o ecrã/ fazer reset do número de itens
function clearView() {
  var item = document.querySelectorAll('.tp');
  for (var i = 0; i < item.length; i++) {
    // item[i].style.opacity = 0;
    item[i].remove();
  }

  // reset dos valores dos sliders
  slider.value = 50;
  slider1.value = 500;
  slider2.value = 50;
  slider3.value = 0;
}

// Random walker (inspirado pelo Daniel Shiffman)
function walker() {
  var item = document.querySelectorAll('.tp');

  for (var i = 0; i < item.length; i++) {

    let offsetX = item[i].offsetLeft;
    let offsetY = item[i].offsetTop;
    var random = Math.floor(Math.random() * 4);

    if (random == 0) {
      item[i].style.left = (offsetX + 1)+"px";
      item[i].style.top = (offsetY + 1)+"px";
    } else if (random == 1) {
      item[i].style.left = (offsetX - 1)+"px";
      item[i].style.top = (offsetY - 1)+"px";
    } else if (random == 2) {
      item[i].style.left = (offsetX - 1)+"px";
      item[i].style.top = (offsetY + 1)+"px";
    } else if (random == 3) {
      item[i].style.left = (offsetX + 1)+"px";
      item[i].style.top = (offsetY - 1)+"px";
    } else {
      console.log("No number was matched");
    }
  }
}

// visualizar o hover da secção das infos, caso em mobile (.harmed)
function number2Reset() {
  no2.style.display = "none";
  number.style.opacity = "0.7";
}

function number2() {
  no2.style.display = "inline-block";
  number.style.opacity = "1";

  setTimeout(number2Reset, 2500);
}

// visualizar o hover da secção das infos, caso em mobile (.credits)
function creditsReset() {
  cred.style.display = "none";
  number.style.opacity = "0.7";
}

function credits() {
  cred.style.display = "inline-block";
  plus.style.opacity = "1";

  setTimeout(creditsReset, 2500);
}

// iniciar o programa
function run() {
  transitionIntro();
  setTimeout(removerIntro, 350);
  setInterval(write, 100);
  setInterval(numberAdd, 50);
  setInterval(walker, 50);
  setInterval(clearView, 60000);
}

// EVENTOS ---------------------------------------------------------------------

// // quando a página carregar iniciar a função setup
document.addEventListener('DOMContentLoaded', setup);

//iniciar função quando clicar no ecrâ
window.addEventListener("click", run, { once: true});

// visualizar o hover da secção das infos, caso em mobile
number.addEventListener("click", number2);
plus.addEventListener("click", credits);
