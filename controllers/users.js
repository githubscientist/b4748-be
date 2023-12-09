const userRouter = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

// endpoint to get all the users
userRouter.get('/', (request, response) => {
    User.find({}, {})
        .then(users => {
            response.status(200).json(users);
        })
});

// endpoint to create a new resource/user based on the request data
userRouter.post('/', async (request, response) => {
    // get the user details from the request body
    const { name, username, password } = request.body;

    // hash the password and store it in the passwordHash field
    const passwordHash = await bcrypt.hash(password, 10);

    // create a new user object
    const user = new User({
        name,
        username,
        passwordHash
    });

    // save the user object
    const savedUser = await user.save();

    // send the response back
    response.json(savedUser);
});

// endpoint to fetch a single user/resource based on id
userRouter.get('/:id', (request, response) => {
    // get the id from the params
    let id = request.params.id;

    User.findById(id)
        .then(user => {
            response.status(200).json(user);
        })
        .catch(err => {
            response.status(404).json({ message: 'id does not exist' });
        });
});

// endpoint to delete a single resource based on id
userRouter.delete('/:id', (request, response) => {
    const id = request.params.id;

    User.findByIdAndDelete(id)
        .then(deleteUser => {
            if (deleteUser) {
                response.status(204).json({ message: 'user deleted successfully' });
            }
        });
});

// endpoint to replace the entire user object identified by an id
userRouter.put('/:id', (request, response) => {
    const id = request.params.id;

    const userToUpdate = request.body;

    User.findByIdAndUpdate(id, userToUpdate)
        .then(updatedUser => {
            if(updatedUser) {
                response.status(200).json({ message: 'user updated successfully' });
            } else {
                response.status(404).json({ message: 'id does not exist' });
            }
        });
});

// endpoint to update a single user object identified by an id
userRouter.patch(':/id', (request, response) => {
    const id = request.params.id;

    const userToPatch = request.body;

    User.findByIdAndUpdate(id, userToPatch)
        .then(updatedUser => {
            if (updatedUser) {
                response.status(200).json({ message: 'user updated successfully' });
            } else {
                response.status(404).json({ message: 'id does not exist' });
            }
        });
});

module.exports = userRouter;