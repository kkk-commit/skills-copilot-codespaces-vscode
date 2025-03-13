// Create web server
// Create comments
// Read comments
// Update comments
// Delete comments
// Export comments

// Create web server
const express = require('express');
const app = express();

// Create comments
const comments = [
    { id: 1, username: 'John', comment: 'Hello, World!'},
    { id: 2, username: 'Jane', comment: 'Hi, there!'},
    { id: 3, username: 'Doe', comment: 'Good morning!'},
    { id: 4, username: 'Smith', comment: 'Good evening!'}
];

// Read comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Update comments
app.put('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newComment = req.body.comment;
    const foundComment = comments.find(c => c.id === parseInt(id));
    foundComment.comment = newComment;
    res.json('Comment has been updated!');
});

// Delete comments
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== parseInt(id));
    res.json('Comment has been deleted!');
});

// Export comments
module