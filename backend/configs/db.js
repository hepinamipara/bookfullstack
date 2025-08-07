const mysql = require('mysql2');

const db = mysql.createConnection({
   host: 'rdshostname',
   port: '3306',
   user: 'admin',
   password: 'Cloud1234',
   database: 'react_node_app'
});

module.exports = db;