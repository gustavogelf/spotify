'use strict';

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/reigndesign', {useNewUrlParser: true}); 

const port = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());

app.use('/', express.static(__dirname + '/dist/spotify'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
