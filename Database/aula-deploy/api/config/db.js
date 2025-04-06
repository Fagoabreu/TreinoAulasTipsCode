const mysql = require("mysql2");
const util = require('util');
require("dotenv").config();

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
});

connection.query = util.promisify(connection.query);

module.exports = connection;