const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send({ message: 'Bem vindo aula de deploy' });
});

module.exports = router;
