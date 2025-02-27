/*========================*/
Array.prototype.map5 = function (callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
}
Array.prototype.filter2 = function (callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }

    }
    return newArray;
}

/*========================*/
const nums = [1, 2, 3, 4, 5, 6];
function mapArray() {
    let result = nums.map(function (e) {
        return e * 2
    });
    console.log(nums, result);
}

function mapSumTripleMoney() {
    return nums.map(sum10).map(triplo).map(forMoney);
}

const sum10 = function (e) {
    return e + 10;
}

const triplo = function (e) {
    return e * 3;
}

const forMoney = function (e) {
    return `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
}
/*========================*/
const shoppingCart = [
    '{"name":"Iphone", "price": 5.894}',
    '{"name":"Caderno", "price": 13.90}',
    '{"name":"Biblia", "price": 120.00}',
    '{"name":"Caneta", "price": 7.50}'
]

const parseJson = function (json) {
    return JSON.parse(json);
}
const price = function (product) {
    return product.price;
}

function mapPrices() {
    return shoppingCart.map(parseJson).map(price);
}

function map5() {
    return shoppingCart.map5(parseJson);
}

/*========================*/
const products = [
    { name: 'Iphone 8 plus', price: 2680, fragile: true },
    { name: 'Monitor LCD', price: 1998, fragile: true },
    { name: 'Prato de Vidro', price: 5.80, fragile: true },
    { name: 'Copo Plastico', price: 1.99, fragile: false },
]

function filterProducts() {
    return products.filter(function (p) {
        return p.price > 2500;
    });
}

const highValue = function (p) {
    return p.price > 700;
}

const fragile = function (p) {
    return p.fragile;
}

function filterProducts2() {
    return products.filter(highValue).filter(fragile);
}
/*========================*/

function binding() {
    const pessoa = {
        saudacao: "Jesus te ama",
        falar() {
            console.log(this.saudacao);
        }
    }

    const falar2 = pessoa.falar.bind(pessoa);
    return falar2();
}

function binding2() {
    function Pessoa() {
        this.idade = 0;
        const self = this;
        setInterval(function () {
            self.idade++;
            console.log(self.idade);
        }/*.bind(this)*/, 1000)
    }
    new Pessoa;
}

function binding3() {
    function Pessoa() {
        this.idade = 0;
        setInterval(function () {
            this.idade++;
            console.log(this.idade);
        }.bind(this), 1000)
    }
    new Pessoa;
}

/*========================*/
function arrowFunc() {
    /*
    let double = (num)=>{
        return 2 * num;
    }*/

    const double = num => 2 * num;
    console.log(double(2));

    /*
    let hi = function(){
        return 'Jesus te ama'
    }*/
    hi = () => 'Jesus te ama';
    console.log(hi());
}

function arrowFunc2() {
    function Pessoa() {
        this.idade = 0;
        setInterval(() => {
            this.idade++;
            console.log(this.idade);
        }, 1000)
    }
    new Pessoa;
}