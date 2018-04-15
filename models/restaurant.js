// This model will be a template for creating a restaurant. It will have fields for name, photo, description and associated reviews.
// The associated reviews in this model will be an array under the name reviews.

const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String
})

module.exports = mongoose.model('Restaurant', restaurantSchema);
