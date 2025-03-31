const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.post('/', function (req, res) {
    //res.send('Requisição enviada com sucesso')
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;
    res.send('O resultado da soma é: ' + result);
})

app.get('/calculoimc', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html')
})
app.post('/calculoimc', (req, res) => {
    let peso = parseFloat(req.body.peso);
    let altura = parseFloat(req.body.altura);
    let result = peso / (altura ** 2);
    res.send('O IMC é ' + result.toFixed(2))
})

app.listen(3000, function () {
    console.log('Servidor no ar porta 3000');
})