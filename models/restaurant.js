// This model will be a template for creating a restaurant. It will have fields for name, photo, description and associated reviews.
// The associated reviews in this model will be an array under the name reviews.

const mongoose = require('mongoose');

// const restaurantSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: String,
//   user: {type: mongoose.Schema.ObjectId, ref: 'User'},
//   comments: [{type: mongoose.Schema.ObjectId, ref: 'Comment'}]
// });
const commentSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.ObjectId, ref: 'User'},
  comment: String
})

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  image: String,
  postcode: String,
  user: {type: mongoose.Schema.ObjectId, ref: 'User'},
  comments: [commentSchema]
});


module.exports = mongoose.model('Restaurant', restaurantSchema);
