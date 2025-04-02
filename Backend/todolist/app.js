require('dotenv').config()
const express = require('express')
const date = require(__dirname + '/date.js')

const app = express();
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

const itens = [];
const workItens = []
const listTitle = 'Lista Geral'
const workTitle = 'Lista de Trabalho'

app.get('/', (req, res) => {
    res.render('list', {
        listTitle: listTitle,
        day: date.getDate(),
        newListItem: itens
    })
})

app.get("/trabalho", (req, res) => {
    res.render('list', {
        listTitle: workTitle,
        day: date.getDate(),
        newListItem: workItens
    })
})

app.get("/sobre", (req, res) => {
    res.render('about', {})
})

app.post('/', (req, res) => {
    console.log(req.body);
    const item = req.body.newItem;
    const title = req.body.button
    if (title === listTitle) {
        itens.push(item);
        console.log(itens)
        res.redirect('/')
        return;
    } else if (title === workTitle) {
        workItens.push(item)
        console.log(workItens)
        res.redirect('/trabalho')
        return;
    }
    res.redirect('/')
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Aplicação rodando na porta ${process.env.PORT}`)
})