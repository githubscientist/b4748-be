const app = require('./server');
const config = require('./utils/config');
const { info, error } = require('./utils/logger');

// make the server to listen for http requests
app.listen(config.PORT, () => {
    info(`Server running at http://${config.HOSTNAME}:${config.PORT}`);
});