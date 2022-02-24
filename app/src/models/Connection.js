const mysql = require('mysql');

const mysqlConfig = {
    host: 'localhost',
    port: 33062,
    user: 'root',
    password: 'root',
    database: 'app'
};

module.exports = mysql.createConnection(mysqlConfig);