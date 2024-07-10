const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host: "sql10.freesqldatabase.com",
//     user: "sql10715866",
//     password: "WlN4WCempT",
//     database: "sql10715866",
//     port: "3306",
// })
const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "ecommerce",
    port: "3306",
})
connection.connect((error)=>{
    if(!error) {
        console.log("conexion exitosa");
    }
    else{
        console.log("conexion fallida");
    }
})

module.exports = connection;