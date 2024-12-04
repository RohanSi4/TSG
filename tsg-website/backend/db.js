const sqlite3 = require('sqlite3').verbose();

// Connect to the database
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

// Initialize the database schema
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS companies (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            company TEXT,
            message TEXT
        )
    `);
});

module.exports = db;
