// models/User.js
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  streak: {
    type: Number,
    default: 0
  },
  lastChecked: {
    type: Date,
    default: Date.now
  },
  friendsList: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  friendsCount: {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    required: true
  }
});

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel