const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  bio: {
    type: String
  },
  interests: {
    type: [String]
  },
  date: {
    type: Date,
    default: Date.now
  }
})

let Profile;

module.exports = Profile = mongoose.model('profile', ProfileSchema);