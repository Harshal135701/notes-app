const express = require('express');
const path = require('path');
const fs = require('fs');   
const app = express();
const port = 3000;

// Middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware for EJS
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  
  const folderPath = path.join(__dirname, "files");  

  fs.readdir(folderPath, (err, files) => {
    if (err) return res.render("index", { tasks: [] }); 

    res.render("index", { tasks: files }); 
  });

});
app.post('/createTask', (req, res) => {
  let { title, details } = req.body;

  // Remove extra spaces & convert spaces to dashes
  title = title.trim().replace(/\s+/g, '-');  

  const folderPath = path.join(__dirname, "files");
  const filePath = path.join(folderPath, `${title}.txt`);

  fs.writeFile(filePath, details, (err) => {
    if (err) {
      console.log("Error writing file:", err);
      return res.send("Something went wrong");
    }
    res.redirect("/");
  });
});

app.get('/task/:taskName', (req, res) => {
  const taskName = req.params.taskName;
  const filePath = path.join(__dirname, "files", taskName);

  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) return res.send("Task not found");
    res.render("task", { title: taskName, content });
  });
});



// Show edit page
app.get('/edit/:taskName', (req, res) => {
  const taskName = req.params.taskName;
  const filePath = path.join(__dirname, "files", taskName);

  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) return res.send("Task not found");
    res.render("edit", { title: taskName, content });
  });
});

// Handle edit submission
app.post('/edit/:taskName', (req, res) => {
  const taskName = req.params.taskName;
  const { details } = req.body;
  const filePath = path.join(__dirname, "files", taskName);

  fs.writeFile(filePath, details, (err) => {
    if (err) return res.send("Error updating task");
    res.redirect('/');
  });
});


// Start Server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
