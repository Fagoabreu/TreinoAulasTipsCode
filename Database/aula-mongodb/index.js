require("dotenv").config();
const { MongoClient } = require("mongodb")

const uri = process.env.DB_URL;
console.log(uri)

const client = new MongoClient(uri);

async function run() {
    try {
        const database = client.db('tipscode');
        const produtos = database.collection('products')

        //insert
        const novoProduto = {
            _id: 5,
            name: 'Monitor',
            price: '800',
            stock: '30'
        }
        const insertResult = await produtos.insertOne(novoProduto)
        console.log(insertResult);
        //select
        const query = { _id: 5 };
        const produto = await produtos.findOne(query);
        console.log(produto);

        //delete
        const deleteResult = await produtos.deleteOne({ _id: 5 })
        console.log(deleteResult);
    } finally {
        await client.close();
    }
}

run().catch(console.dir)