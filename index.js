const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Sample App!',
    status: 'running',
    timestamp: new Date().toISOString()
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// API endpoint example
app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.json({ greeting: `Hello, ${name}!` });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
