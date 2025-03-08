const hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.span-color');

function getRandom() {
    return Math.floor(Math.random() * hexa.length);
}
function getRandomColor() {
    let cor = "#";
    for (let i = 0; i < 6; i++) {
        cor += hexa[getRandom()]
    }
    return cor;
}

btn.addEventListener('click', function () {
    console.log("clicado");
    document.body.style.backgroundColor = getRandomColor();
    color.textContent = getRandomColor();

})