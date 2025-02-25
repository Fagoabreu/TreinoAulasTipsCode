function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function getDiceImage(number) {
    return '/img/dice' + number + ".png"
}

function setImage(order, image) {
    let image1 = document.querySelectorAll('img')[order];
    image1.setAttribute('src', image);
}

let number1 = getRandomNumber();
let number2 = getRandomNumber();
setImage(0, getDiceImage(number1));
setImage(1, getDiceImage(number2));

let resultado = "";
if (number1 === number2) {
    resultado = "😮 Empate 😮"
} else {
    resultado = '🏆Player ' + (number1 > number2 ? 1 : 2) + ' venceu🏆';
}
document.querySelector('h1').innerHTML = resultado;