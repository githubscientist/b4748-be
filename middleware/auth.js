const jwt = require('jsonwebtoken');
const config = require('../utils/config');

const getTokenFrom = request => {
    const authorization = request.get('authorization');
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7);
    }
    return null;
};

const verifyToken = (req, res, next) => {
    const token = getTokenFrom(req);

    // if the token is missing, return an error
    if (!token) {
        return res.status(401).json({ message: 'token missing' });
    }

    let decodedToken;
    try {
        // verify the token and get the user who created the note
        decodedToken = jwt.verify(token, config.JWT_SECRET);
    } catch (error) {
        // check if the token is expired or invalid
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'token expired' });
        } else {
            return res.status(401).json({ message: 'token invalid' });
        }
    }

    // if the token is valid, update the request object with the user id
    req.userId = decodedToken.id;
    next();
}

module.exports = {
    verifyToken
}