const mongoose = require("mongoose");
const schema = mongoose.Schema;

const password = new schema({
  userId: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  site: {
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
  userName: {
    type: String,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  folder: {
    type: String,
    required: true,
    trim: true,
  },
  additionalInfo: {
    type: String,
    trim: true,
  },
});
const Password = mongoose.model("password", password);
module.exports = Password;
