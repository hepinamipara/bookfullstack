const mysql = require('mysql2');

const db = mysql.createConnection({
   host: 'database-1.c87asogs4kv8.us-east-1.rds.amazonaws.com',
   port: '3306',
   user: 'admin',
   password: 'Cloud1234',
   database: 'react_node_app'
});

module.exports = db;