const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3001;

// Konfigurasi koneksi ke database MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Koneksikan ke database MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    throw err;
  }
  console.log('Connected to database');
});

// Middleware untuk parsing body dari permintaan HTTP
app.use(bodyParser.json());

// Endpoint untuk signup
app.post('/api/signup', async (req, res) => {
  const { first_name, last_name, username, email, password } = req.body; // Sesuaikan dengan nama kolom dalam database

  try {
    // Simpan data pengguna baru ke dalam tabel 'users' di database
    const insertUser = 'INSERT INTO users (first_name, last_name, username, email, password) VALUES (?, ?, ?, ?, ?)';
    await db.query(insertUser, [first_name, last_name, username, email, password]); // Sesuaikan dengan nama variabel yang diambil dari req.body
    console.log('User signed up successfully');
    res.status(200).json({ message: 'Signup successful' });
  } catch (err) {
    console.error('Error signing up:', err.message); // Menampilkan pesan kesalahan yang lebih spesifik
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Mulai server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
