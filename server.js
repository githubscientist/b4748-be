const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./utils/config');
const {info, error} = require('./utils/logger');

// middleware
app.use(express.json());

// connect to the database
info('Connecting to DB...');
mongoose.connect(config.MONGODB_URI)
    .then(() => {
        info('Connected to MongoDB...');
    })
    .catch((err) => {
        error('Error connecting to MongoDB...', err);
    })

// define a schema
const noteSchema = new mongoose.Schema({
    id: Number,
    content: String,
    important: Boolean
});

// create a model
const Note = mongoose.model('Note', noteSchema, 'notes');

// endpoint to view all the notes
app.get('/api/notes', (request, response) => {
    Note.find({}, {})
        .then(notes => {
            response.status(200).json(notes);
        })
});

// make the server to listen for http requests
app.listen(config.PORT, () => {
    info(`Server running at http://${config.HOSTNAME}:${config.PORT}`);
});