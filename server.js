const express = require('express');
const app = express();

// middleware
app.use(express.json());

let notes = [
    {
        id: 1,
        content: 'backend using node.js',
        important: true
    }, 
    {
        id: 2,
        content: 'node.js is a open source',
        important: false
    },
    {
        id: 3,
        content: 'simple web server using Node.js',
        important: true
    }
];

/*
    endpoints

    URL                        Request Type               Functionality
    /api/notes                 GET                        fetch all notes
    /api/notes/:id             GET                        fetch a single note
    /api/notes                 POST                       add a new note
    /api/notes/:id             PUT                        replace a note
    /api/notes/:id             DELETE                     delete a note
    /api/notes/:id             PATCH                      update a note

*/


// endpoint to get the / route
app.get('/', (request, response) => {
    response.send('<h1>Notes App</h1>');
});

// endpoint to get all the notes
app.get('/api/notes', (request, response) => {
    response.json(notes);
});

// endpoint to fetch a single note
app.get('/api/notes/:id', (request, response) => {
    const id = request.params.id;

    // find the notes with the id
    const note = notes.find(note => note.id == id);

    if (note) {
        response.status(200).json(note);
    } else {
        response.status(404).json({ message: 'id does not exist'});
    }
});

// endpoint to create a new note
app.post('/api/notes', (request, response) => {
    notes = notes.concat(request.body);
    response.status(201).json({ message: 'note created successfully' });
});

// endpoint to delete a note identified by id
app.delete('/api/notes', (request, response) => {
    // get the id from the params
    const id = request.params.id;

    // find the note matching the id
    const note = notes.find(note => note.id == id);

    notes = notes.filter(note => note.id != id);

    if (note) {
        response.status(204).json(notes);
    } else {
        response.status(404).json({ message: 'id does not exist' });
    }
});

const HOSTNAME = '127.0.0.1';
const PORT = 3001;
// make the server to listen for http requests
app.listen(PORT, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}`);
});