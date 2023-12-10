const express = require('express');
const app = express();
const cors = require('cors');
const notesRouter = require('./controllers/notes');
const userRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');
const middleware = require('./utils/middeware');

// middleware
app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger); // custom middleware to log the request

app.use('/api/notes', notesRouter);
app.use('/api/users', userRouter);
app.use('/api/login', loginRouter);

// unknown endpoint middleware
app.use(middleware.unknownEndpoint);

module.exports = app;