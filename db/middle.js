const uniqid = require("uniqid");
const fs = require("fs");
const util = require("util");

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

class DataFlow {
  //   read method to read database
  read() {
    return readFile("db/db.json", "utf8");
  }

  write(n) {
    return writeFile("db/db.json", JSON.stringify(n, null, 2));
  }

  getNotes() {
    return this.read().then((notes) => {
      let parseNotes;
      try {
        parseNotes = [].concat(JSON.parse(notes));
      } catch (error) {
        parseNotes = [];
      }
      return parseNotes;
    });
  }
  createNote(note) {
    return this.getNotes().then((notes) => {
      notes.push(note);
      this.write(notes);
    });
  }
}

module.exports = new DataFlow();
