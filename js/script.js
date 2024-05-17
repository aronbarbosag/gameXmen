const palavras = [
  {
    palavra: 'Wolwerine',
    dica: './imgs/wolwerine.png',
  },
  {
    palavra: 'Tempestade',
    dica: './imgs/tempestade.png',
  },
  {
    palavra: 'Gambit',
    dica: './imgs/gambit.png',
  },
  {
    palavra: 'Ciclope',
    dica: './imgs/ciclope.png',
  },
  {
    palavra: 'Magneto',
    dica: './imgs/magneto.png',
  },
  {
    palavra: 'Fera',
    dica: './imgs/fera.png',
  },
  {
    palavra: 'Vampira',
    dica: './imgs/vampira.png',
  },
  {
    palavra: 'Mofo',
    dica: './imgs/mofo.png ',
  },
  {
    palavra: 'Jubileu',
    dica: './imgs/jubileu.png',
  },
  {
    palavra: 'Bishop',
    dica: './imgs/bishop.png',
  },
  {
    palavra: 'Jean Grey',
    dica: './imgs/jean.png',
  },
  {
    palavra: 'Mancha Solar',
    dica: './imgs/mancha.png',
  },
];

let pontuacao = null;
let gameOver = false;
const container = document.querySelector('.container');
const inputT = document.getElementById('inputText');
const mensagemDica = document.getElementById('dica');
const btnEnviar = document.getElementById('enviar');
const body = document.querySelector('body');
const aviso = document.getElementById('aviso');
const resposta = document.getElementById('resposta');
const pontuacaoTotal = document.getElementById('pontuacao');
let indiceGerado = Math.floor(Math.random() * palavras.length);
mensagemDica.setAttribute('src', palavras[indiceGerado].dica);

btnEnviar.addEventListener('click', conferirResposta);
function conferirResposta() {
  const respostaDigitada = inputT.value.toLowerCase();

  if (respostaDigitada === palavras[indiceGerado].palavra.toLowerCase()) {
    body.style.backgroundColor = '#95eb34';
    aviso.innerHTML = 'Parabéns você acertou';
    calcularPontos(true);
    limparCampo();
    desabilidarBtn();
    setTimeout(recomecar, 2000);
    setTimeout(habilitarBtn, 3100);
  } else {
    body.style.backgroundColor = '#eb4c34';
    aviso.innerHTML = 'Que Pena! você errou!, tente novamente';
    resposta.innerHTML = `A resposta certa era: ${palavras[indiceGerado].palavra}`;
    limparCampo();
    calcularPontos(false);
    setTimeout(recomecar, 3000);
  }
  pontuacaoTotal.innerHTML = pontuacao;
}
function limparCampo() {
  inputT.value = '';
  inputT.focus();
}

function recomecar() {
  if (!gameOver) {
    aviso.innerHTML = '';
    resposta.innerHTML = '';
    body.style.backgroundColor = '#fff';
    indiceGerado = Math.floor(Math.random() * palavras.length);
    mensagemDica.setAttribute('src', palavras[indiceGerado].dica);
    habilitarBtn();
  } else {
    body.style.backgroundColor = '#eb4c34';
  }
}

function desabilidarBtn() {
  btnEnviar.setAttribute('disabled', '');
}
function habilitarBtn() {
  btnEnviar.removeAttribute('disabled');
}

function calcularPontos(booleano) {
  if (booleano) {
    if (pontuacao >= 0) {
      pontuacao += 10;
    }
  } else {
    if (pontuacao > 0) {
      pontuacao -= 10;
    } else {
      gameOver = true;
      aviso.innerHTML = `Você zerou seus pontos, tente novamente desde o começo`;
      setTimeout(() => {}, 100);
      pontuacao = 0;
      pontuacaoTotal.innerHTML = 0;
      desabilidarBtn();
      novoJogo();
    }
  }
}

function novoJogo() {
  desabilidarBtn();
  const btnRecomecar = document.createElement('button');
  btnRecomecar.innerText = 'RECOMEÇAR';
  btnRecomecar.classList.add('btn');
  container.appendChild(btnRecomecar);
  btnRecomecar.addEventListener('click', recomecarDestruir);
  setTimeout(() => {}, 1);
}

function recomecarDestruir() {
  gameOver = false;
  recomecar();
  this.remove();
}

mensagemDica.addEventListener('mousedown', previrPadrao);

function previrPadrao(e) {
  e.preventDefault();
  console.log('prevenir');
}
