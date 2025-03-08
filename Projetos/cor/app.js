const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.span-color');

function getRandom() {
    return Math.floor(Math.random() * colors.length);
}

btn.addEventListener('click', function () {
    console.log("clicado");
    const randomNumber = getRandom();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

})