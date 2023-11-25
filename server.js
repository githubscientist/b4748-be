// import the library http
const http = require('http');

// create a simple web server
const app = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World!');
});


const PORT = 3001;
// make the server to listen for http requests
app.listen(PORT);
console.log(`Server running on port ${PORT}`);