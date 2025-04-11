const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3001;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'your-username',
  password: 'your-password',
  database: 'your-database'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

app.use(express.json());

app.get('/api/tasks', (req, res) => {
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) throw err;
    res.json({ tasks: results });
  });
});

app.post('/api/tasks/:id/complete', (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  db.query('UPDATE tasks SET completed = TRUE WHERE id = ?', [taskId], (err, results) => {
    if (err) throw err;
    db.query('SELECT * FROM tasks', (err, results) => {
      if (err) throw err;
      res.json({ tasks: results });
    });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});