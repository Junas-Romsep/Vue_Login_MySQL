// lib/db.js

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'vue_mysql',
  password: 'root'
});

connection.connect();
module.exports = connection;