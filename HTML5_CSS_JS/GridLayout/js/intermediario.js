/*=========================================*/

function getRandom(maxValue) {
    let numeros = Math.random() * maxValue;
    numeros = Math.floor(numeros + 1);
    return numeros;
}

function consultaProbabilidade() {
    let valorRandom = getRandom(100);
    if (valorRandom === 100) {
        alert('Incrivel o valor máximo de :' + valorRandom + '%.');
    } else if (valorRandom > 70) {
        console.log("valor alto, chances de : " + valorRandom + "%.");
    } else if (valorRandom <= 30) {
        console.log("baixa probabilidade, chances de : " + valorRandom + "%.");
    } else {
        console.log("valor atingiu: " + valorRandom + "%.");
    }
}
/*=========================================*/

function getIMC(peso, altura) {
    return peso / (altura * altura);
}

function consultaIMC() {
    let peso = prompt("Qual o seu peso?");
    let altura = prompt("Qal a sua altura?")
    let imc = getIMC(peso, altura);
    if (imc < 18.5) {
        "Seu IMC é " + imc + ", você está fraco";
    } else if (imc <= 24.9) {
        "Seu IMC é " + imc + ", você tem o peso normal";
    } else if (imc <= 29.9) {
        "Seu IMC é " + imc + ", você está com sobrepeso";
    } else if (imc <= 34, 9) {
        "Seu IMC é " + imc + ", você está com Obesidade Grau I";
    } else if (imc <= 39, 9) {
        "Seu IMC é " + imc + ", você está com Obesidade Grau II";
    } else {
        "Seu IMC é " + imc + ", você está com Obesidade Grau III ou Morbida";
    }
}
/*=========================================*/

function checkBissexto(ano) {
    let bissexto = ano % 4 === 0
    if (ano % 100 === 0 && ano % 400 !== 0) {
        bissexto = false;
    }
    console.log("O Ano " + ano + (bissexto ? "" : " não") + " é bissexto ");
}



/*=========================================*/

function checkConvidados(nome) {
    let convidados = ['joao', 'elias'];
    let incluso = convidados.includes(nome);
    if (incluso === true) {
        alert("Bem vindo " + nome);
    } else {
        alert("O usuario " + nome + " não está na lista");
    }
}
/*=========================================*/

let output = [];
//let count=1;

function fizzbuzz() {
    //while(count<=100){
    for (let count = 1; count <= 100; count++) {
        let valor;
        if (count % 3 === 0) {
            valor = "Fizz";
        }
        if (count % 5 === 0) {
            valor = (valor ? valor + " " : "") + "Buzz";
        }
        if (!valor) {
            valor = count;
        }
        output.push(valor);
        //count++;
    }
    console.log(output);
}

/*=========================================*/

let clientes = ['Alisson', 'Paula', 'João', 'Isaías'];

function getComprador(nomes) {
    let compradorIndex = Math.floor(Math.random() * nomes.length);
    console.log(nomes[compradorIndex] + " vai compra o almoço hoje");
}

/*=========================================*/

function fibonacciGenerator(numeros) {
    let sequencia = [];
    for (let i = 0; i < numeros; i++) {
        if (i < 2) {
            sequencia.push(i);
        } else {
            sequencia.push(sequencia[i - 2] + sequencia[i - 1])
        }
    }
    console.log(sequencia);
}
/*=========================================*/