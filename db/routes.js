const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const db = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));

module.exports = (app) => {
    // VIEW
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    //ADD
    app.get('/api/notes', (req, res) => {
        res.json(db);
    });

    app.post('/api/notes', (req, res) => {
        const note = req.body;
        console.log(req.body);
        note.id = uuidv4();
        db.push(note);
        fs.writeFileSync('./db/db.json', JSON.stringify(db));
        res.json(note);
    });

    // IF ALL IS DONE
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

};