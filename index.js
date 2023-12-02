const app = require('./server');
const config = require('./utils/config');
const { info, error } = require('./utils/logger');
const mongoose = require('mongoose');

// connect to the database
info('Connecting to DB...');
mongoose.connect(config.MONGODB_URI)
    .then(() => {
        info('Connected to MongoDB...');
        // make the server to listen for http requests
        app.listen(config.PORT, () => {
            info(`Server running at http://${config.HOSTNAME}:${config.PORT}`);
        });
    })
    .catch((err) => {
        error('Error connecting to MongoDB...', err);
    })