const loginRouter = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../utils/config');

loginRouter.post('/', async (request, response) => {
    // get the credentials from the user through the request body
    const { username, password } = request.body;

    // check if the user exists in the database
    const user = await User.findOne({ username });

    // if the user does not exist, send an error message
    if (!user) {
        return response.status(401).json({ message: 'user does not exist' });
    }

    // if the user exists, compare the password with the passwordHash stored in the database
    const isAuthenticated = await bcrypt.compare(password, user.passwordHash);

    // if the password does not match, send an error message
    if (!isAuthenticated) {
        return response.status(401).json({ message: 'invalid password' });
    }

    // if the password matches, generate a token
    const token = jwt.sign({
        username: user.username,
        id: user._id
    }, config.JWT_SECRET, { expiresIn: '1h' });
    
    // send the token back to the user
    response.status(200).json({ token, username: user.username, name: user.name });
});

module.exports = loginRouter;