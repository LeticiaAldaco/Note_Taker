const router = require("express").Router();
const data = require("../db/middle");

router.get("/notes", (req, res) => {
  data.getNotes().then((notes) => res.json(notes));
});

router.post("/notes", (req, res) => {
  res.send("post request");
});

module.exports = router;
