const express = require('express');
const app = express();

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


// endpoint to get the / route
app.get('/', (request, response) => {
    response.send('<h1>Notes Application</h1>');
});

// endpoint to get all the notes
app.get('/api/notes', (request, response) => {
    response.json(notes);
});

const HOSTNAME = '127.0.0.1';
const PORT = 3001;
// make the server to listen for http requests
app.listen(PORT, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}`);
});