const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Pharmacy API!');
});

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Attackontitan7', // Ensure this is correct
    database: 'krish',        // Ensure this is correct
    connectionLimit: 10,
});

// Insert route
app.post('/insert', (req, res) => {
    const { Manufacturer, Medicine_ID, Order_no, No_of_units, Order_date } = req.body;
    const query = 'INSERT INTO distributors (Manufacturer, Medicine_ID, Order_no, No_of_units, Order_date) VALUES (?, ?, ?, ?, ?)';
    pool.query(query, [Manufacturer, Medicine_ID, Order_no, No_of_units, Order_date], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Distributor added successfully' });
    });
});

// Search route
app.get('/search', (req, res) => {
    const keyword = req.query.keyword || '';
    const query = 'SELECT * FROM distributors WHERE Manufacturer LIKE ?';

    pool.query(query, [`%${keyword}%`], (err, result) => {
        if (err) {
            console.error('Error fetching data:', err); // Detailed error log
            return res.status(500).json({ error: 'Database query failed' });
        }
        res.json(result);
    });
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
