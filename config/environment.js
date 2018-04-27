// This file is pretty standard, apart from the fact that the main dbURI may be subject to change.

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/review-system';
// "If there is a MONGODB_URI running on this instance, use that. Or else, use `'mongodb://localhost/review-system'` instead."
const port = process.env.PORT || 3000;

module.exports = { dbURI, port }
