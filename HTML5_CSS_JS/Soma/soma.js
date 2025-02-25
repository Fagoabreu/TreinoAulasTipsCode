function soma(parcela1, parcela2) {
    let resultado = parcela1 + parcela2;
    alert("O resultado da soma é " + resultado);
}

let form = document.getElementById('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let parcela1 = Number(form.querySelector('input[name="parcela1"]').value);
    let parcela2 = Number(form.querySelector('input[name="parcela2"]').value);
    soma(parcela1, parcela2);
})
