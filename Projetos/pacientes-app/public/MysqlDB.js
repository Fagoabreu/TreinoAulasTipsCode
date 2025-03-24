import mysql from 'mysql2/promise';

const mysqlConfig = {
    host: 'srv1551.hstgr.io',
    user: 'u320245513_greentale',
    database: 'u320245513_GAMEDB',
    password: 'Indies@113322'
}

let connection = mysql.createConnection(mysqlConfig);


export default connection.ref();