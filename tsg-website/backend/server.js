const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(bodyParser.json());

// API to save company data
app.post('/api/companies', (req, res) => {
    const { name, email, company, message } = req.body;
    const query = `
        INSERT INTO companies (name, email, company, message)
        VALUES (?, ?, ?, ?)
    `;
    db.run(query, [name, email, company, message], function (err) {
        if (err) {
            console.error('Error inserting data:', err.message);
            res.status(500).send('Failed to save data');
        } else {
            res.status(201).send({ id: this.lastID, message: 'Data saved successfully' });
        }
    });
});

// API to fetch all companies (optional)
app.get('/api/companies', (req, res) => {
    db.all('SELECT * FROM companies', [], (err, rows) => {
        if (err) {
            console.error('Error fetching data:', err.message);
            res.status(500).send('Failed to fetch data');
        } else {
            res.status(200).json(rows);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
