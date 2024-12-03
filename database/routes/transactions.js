const express = require('express');
const router = express.Router();
const db = require('../pool.js');

// Endpoint for yearly totals.
router.get('/annuelle', async (req, res) => {
    try {
        const query = `
        SELECT 
            EXTRACT(YEAR FROM date) AS year,
            type,
            SUM(sum) AS TOTAL
        FROM transactions
        GROUP BY year, type
        ORDER BY year;
        `;
        const result = await db.query(query);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching annual data:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;