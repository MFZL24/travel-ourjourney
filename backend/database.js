const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost", // Sesuaikan dengan konfigurasi XAMPP Anda
  user: "root", // Default user XAMPP
  password: "", // Kosongkan jika tidak ada password
  database: "db_travel", // Nama database Anda
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.message);
    return;
  }
  console.log("Connected to MySQL database");
});

module.exports = connection;
