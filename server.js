// Inital requirements.
const express = require('express');
const fs = require('fs');
const path = require('path');

// App initialization.
const PORT = 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve up static assets from the public folder
app.use(express.static('public'));

// Routing (GET)
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
)

// Routing (POST)
app.post('/api/')

// Starts the server.
app.listen(PORT, () =>
    console.log(`Server running.  Click here: http://localhost:${PORT}`)
)