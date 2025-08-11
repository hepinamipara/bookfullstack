const mysql = require('mysql2');

const db = mysql.createConnection({
   host: process.env.DB_HOST,
   port: process.env.DB_PORT,
   user: process.env.DB_USERNAME,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME
});

module.exports = db;
// const mysql = require('mysql2');

// const db = mysql.createConnection({
//    host: 'rdshostname',
//    port: '3306',
//    user: 'admin',
//    password: 'Cloud1234',
//    database: 'react_node_app'
// });

// module.exports = db;