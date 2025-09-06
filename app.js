const express = require('express');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(express.json()); // to parse JSON body

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Backend is Running');
});

module.exports = app;
