// Dependencies

const express = require('express');
const path = require('path');
const db = require('./db/db.json');

// Sets up the Express App

const app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
}); 

app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});

app.get('/api/notes', (req, res) => {
    res.json(db);
});

// Start server

app.listen(PORT, () => console.log(`App listening on ${PORT}`));