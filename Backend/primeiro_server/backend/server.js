const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Jesus é a resposta</h1>')
})

app.get('/contato', function (req, res) {
    res.send('<h2>Entre em contato</h2>')
})

app.get('/sobre', function (req, res) {
    res.send('<h2>Eu sou o programador desta pagina</h2>')
})

app.listen(3000, function () {
    console.log("Servidor rodando porta 3000")
});

