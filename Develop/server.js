const express = require("express");
const fs = require("fs");
const path = require("path");
const newNotes = require("./db/db.json");
const direc = path.join(__dirname, "public");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/notes", function (req, res) {
    res.sendFile(path.join(direc, "notes.html"));
});
app.get("/", function (req, res) {
    res.sendFile(path.join(direc, "index.html"))
})



app.get("/api/notes", function (req, res) {
    res.json(newNotes);
});
app.post("/api/notes", function (req, res) {
    newNotes.push(req.body);
    newNotes.forEach(function (item, i) {
        item.id = i + 1;
    });
    fs.writeFileSync("./db/db.json", JSON.stringify(newNotes));
});
app.delete("/api/notes/:id", function (req, res) {
    newNotes.splice(newNotes.findIndex((i) => i.id == req.params.id), 1);
    fs.writeFile("./db/db.json", JSON.stringify(newNotes), function (error) {
        if (error) throw error;
    });
    res.json(newNotes);
});

// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});