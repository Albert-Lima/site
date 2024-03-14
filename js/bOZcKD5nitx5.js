/*const arrayText = [
  "Socially",
  "Globally",
  "Locally",
];

const writeTime = 130; // tempo  escrever e apagar.
const changeTextTime = 1300; // tempo para ir para próxima frase no array

let indexSentence = 0;
let indexChar = 0;

const element = document.querySelector("#text");

function writeText() {
  if (indexChar <= arrayText[indexSentence].length) {
    element.textContent = arrayText[indexSentence].substring(0, indexChar);
    indexChar++;
    setTimeout(writeText, writeTime);
  } else {
    setTimeout(removeText, changeTextTime);
  }
}

function removeText() {
  if (indexChar >= 0) {
    element.textContent = arrayText[indexSentence].substring(0, indexChar);
    indexChar--;
    setTimeout(removeText, writeTime);
  } else {
    indexSentence++;
    if (indexSentence >= arrayText.length) {
      indexSentence = 0;
    }
    setTimeout(writeText, changeTextTime);
  }
}

writeText();*/

/*var div = document.getElementById('text');
var textos = ['Socially', 'Globally', 'Locally'];

function escrever(str, done) {
  var char = str.split('');
  var i = 0;
  var typer = setInterval(function() {
      if (i === char.length) {
          clearInterval(typer);
          return setTimeout(done, 1000); 
      }
      div.innerHTML += char[i];
      i++;
  }, 100);
}


function limpar(done) {
    var char = div.innerHTML;
    var nr = char.length;
    var typer = setInterval(function() {
        if (nr-- == 0) {
            clearInterval(typer);
            return done();
        }
        div.innerHTML = char.slice(0, nr);
    }, 100);
}

function rodape(conteudos, el) {
    var atual = -1;
	function prox(cb){
		if (atual < conteudos.length - 1) atual++;
		else atual = 0;
		var str = conteudos[atual];
		escrever(str, function(){
			limpar(prox);
		});
	}
	prox(prox);
}
rodape(textos);


const arrayText = [
  "Socially",
  "Globally",
  "Locally",
];

const writeTime = 130; // tempo  escrever e apagar.
const changeTextTime = 1300; // tempo para ir para próxima frase no array

let indexSentence = 0;
let indexChar = 0;

const element = document.querySelector("#text");

function writeText() {
  if (indexChar <= arrayText[indexSentence].length) {
    element.textContent = arrayText[indexSentence].substring(0, indexChar);
    indexChar++;
    setTimeout(writeText, writeTime);
  } else {
    setTimeout(removeText, changeTextTime);
  }
}*/

const arrayText = [
  "Socially",
  "Globally",
  "Locally",
];

const writeTime = 130; // tempo  escrever e apagar.
const changeTextTime = 1300; // tempo para ir para próxima frase no array

let indexSentence = 0;
let indexChar = 0;

const element = document.querySelector("#text");

function writeText() {
  if (indexChar <= arrayText[indexSentence].length) {
    element.textContent = arrayText[indexSentence].substring(0, indexChar);
    indexChar++;
    setTimeout(writeText, writeTime);
  } else {
    setTimeout(removeText, changeTextTime);
  }
}

function removeText() {
  if (indexChar >= 0) {
    element.textContent = arrayText[indexSentence].substring(0, indexChar);
    indexChar--;
    setTimeout(removeText, writeTime);
  } else {
    indexSentence++;
    if (indexSentence >= arrayText.length) {
      indexSentence = 0;
    }
    setTimeout(writeText, changeTextTime);
  }
}

writeText();
