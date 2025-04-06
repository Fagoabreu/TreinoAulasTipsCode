const mysql = require("mysql2/promise");
require("dotenv").config();

const dbConfig = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
};


async function getConnection() {
    return await mysql.createConnection(dbConfig);
}

module.exports = getConnection;