const fs = require('fs');
const path = require('path');

module.exports = app => {
    // VIEW

    app.get('', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    app.get('/notes', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
};