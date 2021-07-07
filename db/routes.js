const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const db = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));

module.exports = (app) => {
    //ADD NOTE
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

    // DELETE NOTE
    app.delete('/api/notes/:id', (req, res) => {
        const id = req.params.id;
        const rm = db.map(obj => obj.id).indexOf(id);
        const rmNote = db.splice(rm, 1);

        fs.writeFileSync('./db/db.json', JSON.stringify(rmNote));
        res.json(rmNote);
    });

};