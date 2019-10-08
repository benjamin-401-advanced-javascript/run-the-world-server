'use strict';

const express = require('express');
/// modelFinder middleware attaches proper model onto request 
const modelFinder = require('../middleware/model-finder.js');
const auth = require('../middleware/auth.js');

const router = express.Router();

// run modelFinder middleware on all routes with /model param
router.param('model', modelFinder);

// routes all models need - CRUD capable
router.get('/api/v1/:model', auth(), handleGetAll);
router.get('/api/v1/:model/:id', handleGetOne);

router.post('/api/v1/:model/', handlePost);
router.put('/api/v1/:model/:id', handlePut);
router.delete('/api/v1/:model/:id', handleDelete);

function handleGetAll(request, response, next) {
  request.model.get()
    .then(results => {
      response.json(results);
    })
    .catch(next);
}

function handleGetOne(request, response, next) {
  const id = request.params.id;
  request.model.get(id)
    .then(results => response.json(results[0]))
    .catch(next);
}

function handlePost(request, response, next) {
  console.log(request.body);
  request.body.userId = 'placeholder User _id'; //request.user._id;
  const data = request.body;
  request.model.post(data)
    .then(results => response.json(results))
    .catch(next);
}

function handlePut(request, response, next) {
  const id = request.params.id;
  const data = request.body;
  request.model.post(id, data)
    .then(results => response.json(results))
    .catch(next);
}

function handleDelete(request, response, next) {
  const id = request.params.id;
  request.model.delete(id)
    .then(() => response.sendStatus(200))
    .catch(next);
}

module.exports = router;