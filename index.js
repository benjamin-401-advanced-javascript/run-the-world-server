
'use strict';

require('dotenv').config();
const server = require('./src/app.js');
const mongoose = require('mongoose');

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
}

mongoose.connect(process.env.MONGODB_URI, mongooseOptions);
server.start()