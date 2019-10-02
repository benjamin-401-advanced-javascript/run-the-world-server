
const express = require('express');
const app = express();

const morgan = require('morgan');
const cors = require('cors');

const errorHandler = require('./middleware/server-error.js');
const notFound = require('./middleware/not-found.js');

// - ROUTER
const authRouter = require('./route/auth.js');

// - MIDDLEWARE
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// - OUR MIDDLEWARE
app.use(authRouter);
app.use('*', notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};