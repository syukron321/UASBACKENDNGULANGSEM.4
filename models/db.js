const mysql = require("mysql")
const dbConfig = require("../config/db.config")

const connection = mysql.createConnection({
    host : dbConfig.host,
    user : dbConfig.user,
    password : dbConfig.password,
    database : dbConfig.database
})

connection.connect(error => {
    if(error) throw error;
    console.log("Koneksi mysql sukses")
})
module.exports = connection;