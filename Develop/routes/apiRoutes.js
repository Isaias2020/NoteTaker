// const fs = require("fs");
// const path = require("path");
// const filePath = path.join(__dirname, "../db/db.json");
// const db = require("../db/db.json");
// const shortid = require("shortid");

// module.exports = function (app) {

//     app.get("/api/notes", function (req, res) {
//         return res.json(db);
//     });

//     app.post("/api/notes", function (req, res) {
//         const newNote = req.body;
//         newNote.id = shortid.generate();
//         db.push(newNote);
//         fs.writeFile(filePath, JSON.stringify(db), err => {
//             if (err) throw err;
//             console.log("Note added");
//         });
//         res.send(newNote);
//         // res.json(notesData);
//     });

//     app.delete("/api/notes/:id", function (req, res) {
//         const id = req.params.id;

//         for (let note of db) {
//             if (id === note.id) {
//                 const noteIndex = db.indexOf(note);
//                 db.splice(noteIndex, 1);
//                 fs.writeFile(filePath, JSON.stringify(db), err => {
//                     if (err) throw err;
//                     console.log("Note deleted");
//                 });
//                 res.end()
//             }
//         }
//         // res.json(notesData);
//     });

//     app.get("/api/notes/:note", function (req, res) {
//         const chosen = req.params.note;
//         for (let i = 0; i < readNotes.length; i++) {
//             if (chosen === readNotes[i].noteName) {
//                 return res.json(readNotes[i]);
//             }
//         }
//         return res.json(false);
//     });
// };