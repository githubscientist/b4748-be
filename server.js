const express = require('express');
const app = express();

// middleware
app.use(express.json());

const HOSTNAME = '127.0.0.1';
const PORT = 3001;
// make the server to listen for http requests
app.listen(PORT, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}`);
});