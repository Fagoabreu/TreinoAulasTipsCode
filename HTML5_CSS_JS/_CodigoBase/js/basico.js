/*=========================================================*/
function getPao(dinheiro, valorPao) {
    console.log("saiDeCasa");
    console.log("moveDireita");
    console.log("moveDireita");
    console.log("moveCima");
    console.log("moveCima");
    console.log("moveCima");
    console.log("moveCima");

    let paes = calcPao(dinheiro, valorPao);
    alert("Compra " + paes + " pães");
    return calcTroco(dinheiro, valorPao);
}

function calcPao(dinheiro, custoPao) {
    let numPaes = Math.floor(dinheiro / custoPao);
    return numPaes;
}

function calcTroco(dinheiro, custoPao) {
    let troco = dinheiro % custoPao;
    return troco;
}

let troco = getPao(4, 1.5);
alert("Troco " + troco);

/*=========================================================*/

function lifeInWeeks(idade) {
    let anosRestantes = Math.max(0, 90 - idade);
    let dias = anosRestantes * 365;
    let semanas = anosRestantes * 52;
    let meses = anosRestantes * 12;
    console.log("Voce tem " + dias + " dias, " + semanas + " semanas, " + meses + " meses reatantes.")
}

let idade = prompt("Quantos anos voce tem?")
lifeInWeeks(idade);

/*========================================================*/

function calcIMC(peso, altura) {
    let imc = peso / altura ** 2;
    return Math.round(imc);
}
calcIMC(79, 1.68);

/*========================================================*/