const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',  // Ganti dengan password MySQL Anda
  database: 'db_travel'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Endpoint signup
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const sql = 'INSERT INTO tb_user (name, email, password) VALUES (?, ?, ?)';
  db.query(sql, [name, email, hashedPassword], (err, result) => {
    if (err) {
      return res.status(500).send('Error registering user');
    }
    res.status(200).send('User registered successfully');
  });
});

// Endpoint signin
app.post('/signin', (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM tb_user WHERE email = ?';
  db.query(sql, [email], async (err, results) => {
    if (err) {
      return res.status(500).send('Error signing in');
    }
    if (results.length === 0) {
      return res.status(401).send('User not found');
    }

    const user = results[0];
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).send('Invalid password');
    }

    res.status(200).send('User signed in successfully');
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
