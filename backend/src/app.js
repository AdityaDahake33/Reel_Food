const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.rotes');

const app = express();
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Welcome to Reel Food Backend!');
});

app.use('/api/auth', authRoutes);



module.exports = app;