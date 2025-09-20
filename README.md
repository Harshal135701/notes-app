# My Notes App 📝

A simple and elegant Notes App built using **Node.js**, **Express.js**, and **EJS**.  
Keep your tasks organized, create, read, and edit notes easily with a clean UI powered by **Tailwind CSS**.

---

## Features

- Create notes with a title and details.
- View all your notes in a responsive grid layout.
- Read individual notes.
- Edit note filenames.
- Clean and minimalistic responsive UI.

---

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **EJS** - Template engine
- **Tailwind CSS** - Styling
- **File System (fs)** - Stores notes as `.txt` files

---

## Installation & Setup

1. **Clone the repository**:
git clone <your-repo-link>

2. **Navigate to the project folder**:
cd notepadusingejs

3.**Install dependencies**:
npm install

4.**Start the server**:
node index.js

5.**Open in browser**:
http://localhost:3000  

..............

Folder structure ->

notepadusingejs/
│
├── files/              # All note files stored here
├── views/              # EJS templates
│   ├── index.ejs       # Home page
│   ├── edit.ejs        # Edit note page
│   └── show.ejs        # Read note page
├── public/             # Static files (images, CSS, JS if needed)
├── index.js            # Main server file
├── package.json        # Dependencies & scripts
└── README.md           # Project documentation

...........




**Usage**

1.Go to the Home page.

2.Add a new note using the form.

3.Click Read to view the note content.

4.Click Edit to rename the note.

5.Notes are stored as .txt files in the files folder.

...............


**Screenshots**

[Home Page]-(screenShots/Home.png)
[Read Note]-(screenShots/Read.png)
[Edit Note]-(screenShots/Edit.png)





