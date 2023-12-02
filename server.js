const express = require('express');
const app = express();
const mongoose = require('mongoose');

// middleware
app.use(express.json());

// connect to the database
const url = `mongodb+srv://sathishdatascientist:Guvi2023@cluster0.2r9mjwk.mongodb.net/B4748DB`;

console.log('Connecting to DB...');
mongoose.connect(url)
    .then(() => {
        console.log('Connected to MongoDB...');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB...', error);
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

const HOSTNAME = '127.0.0.1';
const PORT = 3001;
// make the server to listen for http requests
app.listen(PORT, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}`);
});