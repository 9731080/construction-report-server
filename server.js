const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./database/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/reports', require('./routes/reports'));
app.use('/api/auth', require('./routes/auth'));

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
