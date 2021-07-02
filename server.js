// Dependencies

const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', function(req, res) {
    res.json(path.join(__dirname, 'public/index.html'));
}); 

app.get('/notes', function(req, res) {
    res.json(path.join(__dirname, 'public/notes.html'));
});

// Start server

app.listen(PORT, () => console.log(`App listening on ${PORT}`));