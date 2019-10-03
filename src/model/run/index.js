'use strict';

const schema = require('./schema.js');
const MongooseModel = require('../mongoose-model.js');

class Runs extends MongooseModel { }

module.exports = new Runs(schema);