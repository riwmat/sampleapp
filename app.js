const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js Express Sample App!');
});

app.get('/api/status', (req, res) => {
  res.json({ 
    status: 'running', 
    message: 'Node.js app is working!',
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`Node.js app listening at http://localhost:${port}`);
});
