/*
    middleware: middleware is a function that has access to the request and response object.

    middleware functions can execute any code, make changes to the request and response objects, end the request-response cycle, and call the next middleware function in the stack.

    middleware functions can be used to perform the following tasks:
        - validate the requests
        - authenticate the user
        - handle errors
        - authorize the user
        - validate the response

    middleware function has arguments:
        - request object
        - response object
        - next function
*/

// create a request logger middleware
const requestLogger = (request, response, next) => {
    console.log('Method:', request.method);
    console.log('Path:', request.path);
    console.log('Body:', request.body);
    console.log('------------------------');
    next(); // call the next middleware
}

// add unknown endpoint middleware
const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' });
}

module.exports = {
    requestLogger,
    unknownEndpoint
}
