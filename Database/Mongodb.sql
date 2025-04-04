db.products.insertOne({_id:1,name:"Chaves",price:"2.90",stock:"20"})
show collections
db.products.insertMany([{_id:3,name:"Notebook",price:"2890",stock:"20"},{_id:2,name:"Teclado",price:"300",stock:"78"}])
db.products.find()
db.products.find({name: "Teclado"})
db.products.find({price: {$gt:"200"}})
db.products.find({price: {$gt:"200"}},{name:1})
db.products.find({price: {$gt:"200"}},{name:1,_id:0})
db.products.updateOne({_id:2},{$set:{name:'Computador'}})
db.products.updateOne({_id:3},{$set:{stock:'25'}})
db.products.deleteOne({_id:3})
db.products.find()
db.products.insert({
    _id:3,
    name:"Caneta",
    price:1.34,
    stock:32,
    reviews:[
        {
            authorName:"Nina",
            rating:4,
            review: "produto bom!"
        },
        {
            authorName: "Ana",
            rating: 5,
            review: "produto otimo!"
        },
    ]
})
db.products.insert({
    _id:4,
    name:"Mouse pad",
    price:26.99,
    stock:200,
    reviews:[
        {
            authorName:"Fabio",
            rating:1,
            review: "produto ruin!"
        },
        {
            authorName: "Jão",
            rating: 3,
            review: "produto confiavel!"
        },
    ]
})