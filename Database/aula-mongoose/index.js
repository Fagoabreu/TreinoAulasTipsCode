require("dotenv").config();
const mongoose = require("mongoose")

mongoose.connect(process.env.DB_URL + '/frutasDb');

const frutasSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Um nome é requirido para fruta"],
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
    },
    review: String
})

const Frutas = mongoose.model('frutas', frutasSchema)
const pera = new Frutas({
    name: 'Pera',
    rating: 7,
    review: 'Pera mor de Deus'
})


const banana = new Frutas({
    name: 'Banana',
    rating: 10,
    review: 'muito boa'
})

const maca = new Frutas({
    name: 'Maçã',
    rating: 10,
    review: 'muito boa'
})

const caju = new Frutas({
    name: 'Caju',
    rating: 10,
    review: 'muito boa'
})

const abacaxi = new Frutas({
    name: 'Abacaxi',
    rating: 8,
    review: 'O rei das frutas'
})

const morango = new Frutas({
    name: 'Morango',
    rating: 9,
    review: 'Não vá pensando que a vida é um moranguinho'
})
//fruta.save();
//Frutas.insertMany([banana, maca, caju]);
//pera.save();
//abacaxi.save();
//morango.save();

async function getFrutas() {
    try {
        const frutas = await Frutas.find({}, { name: 1, _id: 0 })
        console.log('Frutas carregadas:')
        frutas.forEach((fruta) => {
            console.log(fruta.name)
        })
    } catch (error) {
        console.log('Erro', error)
    } finally {
        mongoose.connection.close();
    }
}
getFrutas();

async function updateFrutaById(id, name) {
    try {
        const frutaAtualizada = await Frutas.findByIdAndUpdate({ _id: id }, { name: name })
        console.log('fruta atualizada', frutaAtualizada)
    } catch (err) {
        console.log('err', err)
    } finally {
        mongoose.connection.close();
    }
}
//updateFrutaById('67efdae4f8be2bbf2e2c4b4d', 'Uva')

async function deleteFrutaById(id) {
    try {
        const frutaApagada = await Frutas.findByIdAndDelete({ _id: id })
        console.log('fruta apagada', frutaApagada)
    } catch (err) {
        console.log('err', err)
    } finally {
        mongoose.connection.close();
    }
}

//deleteFrutaById('67efdbc2d476dc0b6313a2f8')

const pessoasSchema = new mongoose.Schema({
    name: String,
    idade: Number,
    favoriteFruit: frutasSchema
})

const Pessoas = mongoose.model('pessoas', pessoasSchema)

const Fabio = new Pessoas({
    name: 'Fabio',
    idade: 40,
})

const Allison = new Pessoas({
    name: 'Allison',
    idade: 35,
})

const Ana = new Pessoas({
    name: 'Ana Paula',
    idade: 30,
})

const Mike = new Pessoas({
    name: "Mike Filho de TY",
    idade: 20,
    favoriteFruit: abacaxi,
})
//Pessoas.insertMany([Fabio, Allison, Ana])
//Fabio.save();
//Mike.save();

async function deletePessoasByName(name) {
    try {
        const pessoasApagadas = await Pessoas.deleteMany({ name: name });
        console.log(`Pessoas deletadas:${pessoasApagadas.deletedCount}`)
    } catch (err) {
        console.log(err)
    } finally {
        mongoose.connection.close()
    }
}
//deletePessoasByName('Fabio');

async function updatePessoaByName(name, fruit) {
    try {
        const pessoaAtualizada = await Pessoas.updateOne({ name: name }, { favoriteFruit: fruit })
        console.log('Pessoa atualizada:', pessoaAtualizada)
    } catch (err) {
        console.log('err', err)
    } finally {
        mongoose.connection.close();
    }
}
//updatePessoaByName('Ana Paula', morango);

async function getPessoas() {
    try {
        const pessoas = await Pessoas.find({}, { name: 1, idade: 1, favoriteFruit: 1, _id: 0 })
        console.log('Pessoas carregadas:')
        pessoas.forEach((pessoa) => {
            const fruta = pessoa.favoriteFruit ? `Fruta Favorita: ${pessoa.favoriteFruit.name}` : ''
            console.log(`Nome:${pessoa.name}; Idade:${pessoa.idade}; ${fruta}`)
        })
    } catch (error) {
        console.log('Erro', error)
    } finally {
        mongoose.connection.close();
    }
}
getPessoas();