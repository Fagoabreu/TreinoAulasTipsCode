const express = require('express');
const bodyParser = require('body-parser')
const https = require('https');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
    const query = req.body.cityName
    const apiKey = '85362cfc9423689e92ab1a72b3272b1c'
    const units = 'metric'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${units}`;
    https.get(url, function (response) {
        console.log(response.statusCode)
        response.on('data', function (data) {
            const tempoData = JSON.parse(data);
            //console.log(tempoData);
            const temperatura = tempoData.main.temp;
            const cidade = tempoData.name
            const tempMin = tempoData.main.temp_min;
            const tempMax = tempoData.main.temp_max;
            const weatherDesc = tempoData.weather[0].description;
            const iconURL = `https://openweathermap.org/img/wn/${tempoData.weather[0].icon}@2x.png`
            res.write(`<h1>O clima em ${cidade} é ${weatherDesc}. <img src=${iconURL} /> </h1>`);
            res.write(`<p>Com temperatura de ${temperatura}ºC, minima de ${tempMin}ºC e maxima de ${tempMax}ºC </p>`)
            res.send();
        })
    });
})

app.listen(3000, () => {
    console.log("Servidor rodando porta 3000")
})