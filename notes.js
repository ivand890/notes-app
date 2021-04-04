import fs from "fs";

const DB = "notes.json";

const getNotes = () => "Your notes...";

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicate = notes.filter((note) => note.title === title);
  if (duplicate.length) {
    console.error("Duplicate note");
  } else {
    notes.push({ title: title, body: body });
  }
  saveNotes(notes);
};

const loadNotes = () => {
  try {
    const bufferData = fs.readFileSync(DB);
    const jsonData = JSON.parse(bufferData.toString("utf8"));
    return jsonData;
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync(DB, JSON.stringify(notes));
};

export default { getNotes, addNote };
