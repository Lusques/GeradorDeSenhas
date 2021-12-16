var quantSenhas = 1;
document.getElementById("nSenhas").innerHTML = quantSenhas;
var nChar = 1;
document.getElementById("range-value").innerHTML = nChar;
var forca = 0;
analiseIcones(nChar);
const alertInfo = document.getElementById('alert-info')
const alerta = document.querySelector('.alertCopy');

function mostra(value, range) {
  // altera a variavel do nº de caracteres
  if (range == "char") {
    nChar = value;
    document.getElementById("range-value").innerHTML = nChar;
    analiseIcones(nChar);
  }
  // altera a variavel da quantidade de senhas geradas
  else {
    quantSenhas = value;
    document.getElementById("nSenhas").innerHTML = quantSenhas;
  }
}

function opera(operador, range) {
  // altera a variavel do nº de caracteres
  if (range == "char") {
    nChar = parseInt(document.getElementById("range-bar").value);
    if (operador == "+" && nChar < 16) {
      nChar += 1;
    } else if (operador == "-" && nChar > 1) {
      nChar -= 1;
    } else {
      // METE UM ALERT
      alert("Valor no limite!");
    }
    document.getElementById("range-bar").value = nChar;
    mostra(nChar, range);
  }
  // altera a variavel da quantidade de senhas geradas
  else {
    quantSenhas = parseInt(document.getElementById("range-nSenhas").value);

    if (operador == "+" && quantSenhas < 5) {
      quantSenhas += 1;
    } else if (operador == "-" && quantSenhas > 1) {
      quantSenhas -= 1;
    } else {
      alert("valor no limite!");
    }
    document.getElementById("range-nSenhas").value = quantSenhas;
    mostra(quantSenhas);
  }
  // quantSenhas = getElementById('nSenhas');
}

function analiseIcones(entrada) {
  valor = parseInt(entrada);
  const roleta = document.querySelector("#icons--img-container");
  if (valor <= 5) {
    if (forca == 1) {
      return;
    } else {
      roleta.classList.remove("forte");
      roleta.className += " fraco";
      forca = 1;
    }
  } else if (valor > 10) {
    if (forca == 2) {
      return;
    } else {
      roleta.classList.remove("fraco");
      roleta.className += " forte";
      forca = 2;
    }
  } else {
    roleta.classList.remove("forte");
    roleta.classList.remove("fraco");
    forca = 0;
  }
}

function geraSenha() {
  let senhaGerada = "";
  let charPassword = selecaoCaracteres();
  let quantArrays = charPassword.length;
  let matrixAleatoria;
  let vetorAleatorio;
  let charAleatorio;

  if(charPassword == ''){
  mostraAlerta('Nenhum caractér selecionado')
  return
  }
  for (let x = 1; x <= quantSenhas; x++) {
    for (let i = 1; i <= nChar; i++) {
      // Seleciona um vetor aleatório dentro da matrix
      matrixAleatoria = Math.floor(Math.random() * quantArrays);
      vetorAleatorio = charPassword[matrixAleatoria];
      // Seleciona um caracter aleatório dentro do array escolhido.
      charAleatorio = Math.floor(Math.random() * vetorAleatorio.length);
      // alert()
      senhaGerada += vetorAleatorio[charAleatorio];
    }
    senhaGerada += '\n'
  }
  document.getElementById('return--password').value = senhaGerada;
}


function selecaoCaracteres() {
  checkMaiusculo = document.getElementById("choose-maiusculo");
  checkMinusculo = document.getElementById("choose-minusculo");
  checkCaracter = document.getElementById("choose-simbolos");
  checkNumeral = document.getElementById("choose-numeros");

  let maiusculo = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let minusculo = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "f",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let caracter = ["!", "@", "#", "$", "%", "&", "*", "_", "+", "-", "/"];
  let numeral = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let UserCharSelection = [];

  if (checkMaiusculo.checked) {
    UserCharSelection.push(maiusculo);
  }
  if (checkMinusculo.checked) {
    UserCharSelection.push(minusculo);
  }
  if (checkCaracter.checked) {
    UserCharSelection.push(caracter);
  }
  if (checkNumeral.checked) {
    UserCharSelection.push(numeral);
  }
  return UserCharSelection;
}

function copiar() {
  const senhaCopiada = document.querySelector('#return--password');
  
  senhaCopiada.select();
  document.execCommand('copy');
  
mostraAlerta('Copiado com sucesso!')
}


function mostraAlerta(mensagem) {
  alertInfo.innerHTML = mensagem;
  alerta.classList.add('alertCopy--true')
  setTimeout(escondeAlerta, 3000);
  
}

function escondeAlerta() {
  alerta.classList.remove('alertCopy--true');
  alertInfo.innerHTML = '';
}