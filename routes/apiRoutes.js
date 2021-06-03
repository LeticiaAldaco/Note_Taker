const router = require("express").Router();

router.get("/notes", (req, res) => {
  res.send("notes route was hit");
});

module.exports = router;
