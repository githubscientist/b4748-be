// import the library http
const http = require('http');

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

// create a simple web server
const app = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(notes));
});


const PORT = 3001;
// make the server to listen for http requests
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});