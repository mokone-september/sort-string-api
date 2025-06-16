const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// POST endpoint
app.post('/sort-string-api', (req, res) => {
  try {
    // Validate input
    if (!req.body?.data || typeof req.body.data !== 'string') {
      return res.status(400).json({ 
        error: 'Invalid request. Expected format: { "data": "your-string" }' 
      });
    }

    // Process string
    const sortedChars = req.body.data
      .split('')          // Convert to array
      .sort();            // Sort A-Z

    // Return result
    res.json({ word: sortedChars });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}/sort-string-api`);
});