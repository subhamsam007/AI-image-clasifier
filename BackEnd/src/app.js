const express = require('express');
const authRoutes = require('./routes/auth.routes');
const cookieParser = require('cookie-parser');
const postRoutes = require('../src/routes/post.routes');





const app = express();
app.use(express.json()); // to parse incoming JSON data from tyhe request body
app.use(cookieParser()); // parse cookies from incoming requests
app.use('/auth',authRoutes);
app.use('/posts', postRoutes);



module.exports = app;
