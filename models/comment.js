const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.ObjectId, ref: 'User'},
  comment: String
})

module.exports = mongoose.model('Comment', commentSchema);
