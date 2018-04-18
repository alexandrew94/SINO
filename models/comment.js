const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.ObjectId, ref: 'User'},
  rating: Number,
  comment: String
})

module.exports = mongoose.model('Comment', commentSchema);
