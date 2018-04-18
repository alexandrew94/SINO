// This will handle all the RESTful actions that you can do to a restaurant.

const Restaurant = require('../models/restaurant');
const Comment = require('../models/comment');

function restaurantsIndex(req, res) {
  Restaurant
    .find()
    .exec()
    .then((databaseEntries) => {
      res.render('restaurants/index', {databaseEntries});
    });
};

function restaurantsNew(req, res) {
  res.render('restaurants/new')
};

function restaurantsCreate(req, res) {
  req.body.user = req.session.userId;
  Restaurant
    .create(req.body)
    .then(() => {
      req.flash('successful', 'New restaurant created!');
      return res.redirect('/restaurants')
    })
    .catch((error) => {
      res.badRequest('restaurants/new', error.toString());
    });
};

function restaurantsDelete(req, res) {
  Restaurant
    .findById(req.params.id)
    .exec()
    .then((entry) => {
      console.log(entry);
      entry.remove();
      req.flash('successful', 'Restaurant was successfully deleted.')
      return res.redirect('/restaurants')
    })
};

function restaurantsEdit(req, res) {
  Restaurant
    .findById(req.params.id)
    .exec()
    .then((entry) => res.render('restaurants/edit', {entry}))
}

function restaurantsUpdate(req, res) {
  Restaurant
    .findById(req.params.id)
    .exec()
    .then(entry => {
      entry = Object.assign(entry, req.body);
      return entry.save();
    })
    .then(entry => {
      req.flash('successful', 'Restaurant successfully edited!');
      return res.render('restaurants/show', {entry});
    })
}

function restaurantsShow(req, res) {
  Restaurant
    .findById(req.params.id)
    .populate('comments.user')
    .exec()
    .then((entry) => {
      // Comment
      //   .find()
      //   .populate('user')
      //   .exec()
      //   .then(entry => {
      //     console.log('THE CONTENT OF ENTRY.USERNAME!!', entry.username);
      //   })
      // console.log('inside the restaurants function--->', entry.comments);
      res.render('restaurants/show', {entry})
    })
}

module.exports = {
  index: restaurantsIndex,
  new: restaurantsNew,
  create: restaurantsCreate,
  delete: restaurantsDelete,
  edit: restaurantsEdit,
  update: restaurantsUpdate,
  show: restaurantsShow
}
