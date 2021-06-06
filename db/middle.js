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
    return writeFile("db/db.json", JSON.stringify(n));
  }

  getNotes() {
    return this.read().then((notes) => {
      let concatNotes;
      concatNotes = [].concat(JSON.parse(notes));
      return concatNotes();
    });
  }
}

module.exports = new DataFlow();
