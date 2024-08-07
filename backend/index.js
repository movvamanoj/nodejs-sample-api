const express = require('express');
const app = express();
const port = process.env.BACKEND_PORT || 3001;

app.get('/api/name', (req, res) => {
  res.json({ name: 'Havells' });
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
