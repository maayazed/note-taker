// Dependencies

const express = require('express');

// Sets up the Express App

const app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

// Export to routes
require('./db/routes.js')(app);
require('./routes/indexRoute')(app);
require('./routes/notesRoute')(app);

// Start server

app.listen(PORT, () => console.log(`App listening on ${PORT}`));