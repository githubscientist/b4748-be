const userRouter = require('express').Router();
const User = require('../models/user');

// endpoint to get all the users
userRouter.get('/', (request, response) => {
    User.find({}, {})
        .then(users => {
            response.status(200).json(users);
        })
});

// endpoint to create a new resource/user based on the request data
userRouter.post('/', (request, response) => {
    const user = new User(request.body);

    user.save()
        .then(() => {
            response.status(201).json({ message: 'user created successfully' });
        });
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