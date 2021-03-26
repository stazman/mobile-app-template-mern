const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  title: {
    type: String,
    required: false,
    trim: true
  },
  description: {
      type: String,
      required: false,
      trim: true
  },
  url: {
    type: String,
    required: true,
    trim: true
  }
});

let Resource;

module.exports = Resource = mongoose.model('resource', ResourceSchema);