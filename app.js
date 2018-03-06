const express = require('express');

const app = express();

// Watch for incoming request of GET to route localhost:3050/api
app.get('/api', (req, res) => {
  res.send({ hi: 'there' });
});

module.exports = app;
