var notesData = require("../public/assets/js/index");
// var db = require("../db/db.json");

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        return res.json(notesData);
    });
    app.post("/api/notes", function (req, res) {
        res.json(notesData);
    });
};