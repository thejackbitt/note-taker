const express = require('express');
const fs = require('fs');
const path = require('path');

// App initialization.
const PORT = 3001;
const app = express();
const dbFilePath = path.join(__dirname, './db/db.json');

// Middleware for parsing JSON and urlencoded form data.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve up static assets from the public folder.
app.use(express.static('public'));

// Routing (GET)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Routing (POST)
app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    const notes = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));
    notes.push(newNote);

    fs.writeFileSync(dbFilePath, JSON.stringify(notes, null, 4), 'utf8');

    res.json(newNote);
});

// Starts the server.
app.listen(PORT, () =>
    console.log(`Server running.  Click here: http://localhost:${PORT}`)
);
