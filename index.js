const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

const apiRouter = require('./routes/api');
let mongodburl = 'mongodb://127.0.0.1/notificationService';

mongoose.connect(mongodburl)
app.use(apiRouter);

app.listen(3000, () => {
    console.log('server is ruuning at 3000 port')
})