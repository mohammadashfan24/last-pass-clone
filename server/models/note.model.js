const mongoose = require("mongoose");
const schema = mongoose.Schema;
const note = new schema({
  userId: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  folder: {
    type: String,
    required: true,
    trim: true,
  },
  note: {
    type: String,
    required: true,
  },
});
const Note = mongoose.model("note", note);
module.exports = Note;
