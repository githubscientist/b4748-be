const notesRouter = require('express').Router();
const Note = require('../models/note');
const User = require('../models/user');
const { verifyToken } = require('../middleware/auth');

// endpoint to get all the notes
notesRouter.get('/', verifyToken, async (request, response) => {
    // get the user id from the request object
    const userId = request.userId;

    // if the token is valid, get the user who created the note
    const user = await User
        .findById(userId)
        .select('_id username name createdAt updatedAt notes')
        .populate('notes', {user: 0, __v: 0});

    response.json(user.notes);
});


// endpoint to create a new resource/note based on the request data
notesRouter.post('/', verifyToken, async (request, response) => {
    // get the new note from the request body
    const noteObject = request.body;

    // get the user id from the request object
    const userId = request.userId;

    // if the token is valid, get the user who created the note
    const user = await User.findById(userId);

    // create a new note object
    const note = new Note({
        content: noteObject.content,
        important: noteObject.important || false,
        user: user._id
    });

    // save the note to the database
    const savedNote = await note.save();

    // add the note id to the user's notes array property
    user.notes = user.notes.concat(savedNote._id);

    // save the updated user object to the database
    await user.save();

    // return the saved note object
    response.json({ message: 'note created successfully', note: savedNote });
});

// endpoint to fetch a single note/resource based on id
notesRouter.get('/:id', (request, response) => {
    // get the id from the params
    let id = request.params.id;

    Note.findById(id)
        .then(note => {
            response.status(200).json(note);
        })
        .catch(err => {
            response.status(404).json({ message: 'id does not exist' });
        });
});

// endpoint to delete a single resource based on id
notesRouter.delete('/:id', (request, response) => {
    const id = request.params.id;

    Note.findByIdAndDelete(id)
        .then(deleteNote => {
            if (deleteNote) {
                response.status(204).json({ message: 'note deleted successfully' });
            }
        });
});

// endpoint to replace the entire note object identified by an id
notesRouter.put('/:id', (request, response) => {
    const id = request.params.id;

    const noteToUpdate = request.body;

    Note.findByIdAndUpdate(id, noteToUpdate)
        .then(updatedNote => {
            if (updatedNote) {
                response.status(200).json({ message: 'note replaced successfully ' });
            } else {
                response.status(404).json({ message: 'id does not exist' });
            }
        });
});

// endpoint to update a single property of a note object identified by an id
notesRouter.patch('/:id', (request, response) => {
    const id = request.params.id;

    const noteToPatch = request.body;

    Note.findByIdAndUpdate(id, noteToPatch)
        .then(updatedNote => {
            if (updatedNote) {
                response.status(200).json({ message: 'note patched successfully ' });
            } else {
                response.status(404).json({ message: 'id does not exist' });
            }
        });
});


module.exports = notesRouter;