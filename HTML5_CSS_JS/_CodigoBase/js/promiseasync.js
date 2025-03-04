const fs = require('fs');

const readFile = file => new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
        if (err) {
            reject(err);
        } else {
            resolve(contents);
        }
    })
})

const readAwaitTexts = async () => {
    try {
        const contents = await readFile('./file/msg1.txt');
        const contents2 = await readFile('./file/msg2.txt');
        console.log("Async " + String(contents))
        console.log("Async " + String(contents2))
    } catch (err) {
        console.log(err);
    }
}

readAwaitTexts().then(contents => console.log("Then finalizado \n" + contents));
console.log(1);
console.log(2);
console.log(3);
