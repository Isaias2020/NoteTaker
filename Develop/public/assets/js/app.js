var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
var fs = require("fs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

// const express = require("express");
// const path = require("path");
// const fs = require("fs");
// const noteTaker = require("./db/db.json")

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static(__dirname, "public"));

// // HTML Routes
// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "index.html"));
// });
// app.get("/notes", function (req, res) {
//     res.sendFile(path.join(__dirname, "notes.html"));
// });

// // API Routes
// // ===========================================================
// //GET
// app.get("/api/notes", function (req, res) {
//     res.json(noteTaker);
// });

// // POST
// app.post("/api/notes", function (req, res) {
//     noteTaker.push(req.body);
//     id();
//     fs.writeFileSync("db.json", JSON.stringify(noteTaker))
//     res.redirect("back");
// });
// // DELETE
// app.delete("/api/notes/:id", function (req, res) {
//     const deleteNote = noteTaker.findIndex((i) => i.id == req.params.id);
//     noteTaker.splice(deleted, 1);
//     deletedNote();
//     res.json(noteTaker);
// });

// //id function
// function id() {
//     noteTaker.forEach((element, i) => element.id = i + 1);
// };

// let deletedNote = () => {
//     fs.writeFile("db.json", JSON.stringify(noteTaker), (err) => {
//         if (err) {
//             throw err;
//         };
//     });
// };

// // Listener for PORT
// app.listen(PORT, function () {
//     console.log("Listening on PORT " + PORT);
// });