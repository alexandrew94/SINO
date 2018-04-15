// This will handle all the RESTful actions that you can do to a restaurant.

const Restaurant = require('../models/restaurant');

function restaurantsIndex(req, res) {
  Restaurant
    .find()
    .exec()
    .then((databaseEntries) => {
      res.render('restaurants/index', {databaseEntries});
    });
};

module.exports = {
  index: restaurantsIndex
}
