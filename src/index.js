require('dotenv').config();

const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express()

// Database setup

const uri = process.env.MOGODB_URL;

mongoose.connect(uri, {
    useNewUrlParser: true
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')
    ))

app.use(require('./routes'))

app.listen(3000, () => {
    console.log("server started on port 3000");
})