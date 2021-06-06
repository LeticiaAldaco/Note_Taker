const router = require("express").Router();
const data = require("../db/middle");
const path = require("path");
const { Router } = require("express");

router.get("/notes", (req, res) => {
  data
    .getNotes()
    .then((notes) => res.json(notes))
    .catch((error) => console.log(error));
});

router.post("/notes", (req, res) => {
  console.log(req);
  data
    .createNote(req.body)
    .then((notes) => res.json(notes))
    .catch((error) => console.log(error));
});

// //ADD ID TO GRAB AND DELETE
// function noteId(id, notesArray) {
//   for (let i = 0; i < notesArray.length; i++) {
//     if (notesArray[i].id === id) {
//       return i;
//     }
//   }
// }
// //DELETE A NOTE
// function deleteNote(id, notesArray) {
//   const noteIndex = noteId(id, notesArray);
//   notesArray.splice(noteIndex, 1);
//   fs.writeFileSync(
//     path.join(__dirname, "../db/db.json"),
//     JSON.stringify({ notes }, null, 2)
//   );
//   return id;
// }

module.exports = router;
