const express = require('express');

module.exports = (sequelize) => {
  const router = express.Router();

  // Route to execute the SQL query
  router.post('/api/move-search', async (req, res) => {
    const { sqlStatement } = req.body; // Expecting the raw SQL statement from the request body

    // Log the incoming SQL query
    console.log('SQL Statement received:', sqlStatement);

    if (!sqlStatement) {
      console.error('Error: SQL statement is missing');
      return res.status(400).json({ error: 'SQL statement is required' });
    }

    try {
      // Execute the raw SQL query
      const results = await sequelize.query(sqlStatement, { type: sequelize.QueryTypes.SELECT });

      // Log the results for debugging
      console.log('Query Results:', results);

      // Return the results as JSON
      res.status(200).json({ results });
    } catch (err) {
      // Log the error details
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'An error occurred while executing the query', details: err.message });
    }
  });

  return router;
};
