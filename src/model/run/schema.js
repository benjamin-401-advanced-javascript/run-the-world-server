'use strict';

const mongoose = require('mongoose');

const run = mongoose.Schema({
  timeStamp: { type: String, required: true },
  sessionData: { type: String, required: true },
});

module.exports = mongoose.model('run', run);