const express = require('express');
const app = express();
const cors = require('cors');
const notesRouter = require('./controllers/notes');
const userRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');

// middleware
app.use(cors());
app.use(express.json());

app.use('/api/notes', notesRouter);
app.use('/api/users', userRouter);
app.use('/api/login', loginRouter);

module.exports = app;