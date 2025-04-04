require("dotenv").config();
const { MongoClient } = require("mongodb")

const uri = process.env.DB_URL;
console.log(uri)

const client = new MongoClient(uri);

async function run() {
    try {
        const database = client.db('tipscode');
        const produtos = database.collection('products')

        const query = { _id: 1 };
        const produto = await produtos.findOne(query);
        console.log(produto);

    } finally {
        await client.close();
    }
}

run().catch(console.dir)