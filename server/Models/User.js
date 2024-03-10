const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

const UserModel = mongoose.model("newUser", blogSchema);
module.exports = UserModel;
