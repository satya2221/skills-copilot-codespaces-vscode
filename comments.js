// Create web server using express
// Express is a web application framework for Node.js
// It is used to create web applications and APIs
const express = require('express');
const router = express.Router();

// Import the database connection
const db = require('../db/connection');

// Get all comments
router.get('/', (req, res) => {
    db.query('SELECT * FROM comments', (err, rows) => {
        if (err) {
            res.status(500).json({ message: err.message });
        }
        res.status(200).json(rows);
    });
});

// Get a comment
router.get('/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM comments WHERE id = ?', id, (err, rows) => {
        if (err) {
            res.status(500).json({ message: err.message });
        }
        if (rows.length === 0) {
            res.status(404).json({ message: 'Comment not found' });
        }
        res.status(200).json(rows[0]);
    });
});

// Create a comment
router.post('/', (req, res) => {
    const comment = req.body;
    db.query('INSERT INTO comments SET ?', comment, (err, result) => {
        if (err) {
            res.status(500).json({ message: err.message });
        }
        res.status(201).json({ id: result.insertId, ...comment });
    });
});

// Update a comment
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const comment = req.body;
    db.query('UPDATE comments SET ? WHERE id = ?', [comment, id], (err, result) => {
        if (err) {
            res.status(500).json({ message: err.message });
        }
        res.status(200).json(comment);
    });
});

// Delete a comment
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM comments WHERE id = ?', id, (err, result) => {
        if (err) {
            res.status(500).json({ message: err.message });
        }
        res.status(200).json({ message: 'Comment deleted' });
    });
});

module.exports = router;