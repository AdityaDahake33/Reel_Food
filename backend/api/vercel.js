const app = require('../src/app');
const connectDB = require('../src/db/db');
require('dotenv').config();

connectDB();

module.exports = app;
