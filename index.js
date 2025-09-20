const express = require('express');
const fs = require('node:fs');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home page: list files
app.get('/', (req, res) => {
    fs.readdir('./files', (err, files) => {
        if(err){
            console.log(err);
            return res.send("Error reading files");
        }
        res.render("index", { files });
    });
});

// Create a new note
app.post('/create', (req, res) => {
    const filename = req.body.title.split(' ').join('') + '.txt';
    fs.writeFile(`./files/${filename}`, req.body.details, (err) => {
        if (err) {
            console.log(err);
            return res.send("Error writing file");
        }
        res.redirect('/');
    });
});

// Edit note filename
app.post('/edit', (req, res) => {
    fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`, (err) => {
        if (err) {
            console.log("Rename error:", err);
            return res.send("Error renaming file");
        }
        res.redirect('/');
    });
});

// View a file
app.get('/file/:filename', (req, res) => {
    fs.readFile(`./files/${req.params.filename}`, 'utf-8', (err, filedata) => {
        if (err) {
            console.log(err);
            return res.send("Error reading file");
        }
        res.render('show', { filename: req.params.filename, filedata });
    });
});

// Edit page
app.get('/edit/:filename', (req, res) => {
    res.render('edit', { filename: req.params.filename });
});

// Dummy profile routes
app.get('/profile/:username', (req, res) => {
    res.send(`Welcome ${req.params.username}`);
});

app.get('/profile/:username/:age', (req, res) => {
    res.send(`Welcome name is: ${req.params.username} <br> Your age is: ${req.params.age}`);
});

app.listen(port, () => {
    console.log(`Notes app listening on port ${port}`);
});
