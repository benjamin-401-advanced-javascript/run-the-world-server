'use strict';

const mongoose = require('mongoose');

const run = mongoose.Schema({
  day: { type: String, required: true },
  distance: { type: String, required: true },
});

module.exports = mongoose.model('run', run);