'use strict';

const mongoose = require('mongoose');

const run = mongoose.Schema({
  userId: { type: String, required: true},
  name: { type: String, default: 'Unnamed Run', required: true },
  coordinates:  { type: Array, required: true },
});

module.exports = mongoose.model('run', run);