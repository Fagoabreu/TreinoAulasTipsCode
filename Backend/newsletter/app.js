require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mailchimp = require('@mailchimp/mailchimp_marketing');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

mailchimp.setConfig({
    apiKey: process.env.APIKEY,
    server: process.env.SERVER,
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html')
})

app.post('/', (req, res) => {
    const user = {
        firstName: req.body.firstName,
        secondName: req.body.secondName,
        eMail: req.body.eMail
    }

    const addMember = async () => {
        try {
            const data = await mailchimp.lists.addListMember(process.env.AUDIENCE, {
                email_address: user.eMail,
                status: "subscribed",
                merge_fields: {
                    FNAME: user.firstName,
                    LNAME: user.secondName
                }
            });
            console.log(data);
            res.sendFile(__dirname + '/success.html')
        } catch (error) {
            console.log(error)
            res.sendFile(__dirname + '/failure.html')
        }
    };
    addMember();
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Aplicação rodando na porta ${process.env.PORT}`);
})

//apikey: 17a49bba56e976682ea4c61ba88e9a80-us16
//audience: 9af7ba5b32