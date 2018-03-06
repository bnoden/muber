const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./routes/routes');

const app = express();

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/muber');
// app.use() must be called before routes()
app.use(bodyParser.json());
routes(app);

module.exports = app;
