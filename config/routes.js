// All of the three collections will be RESTful - restaurants, reviews and accounts. These will all be routed here.
// The registrations.js controller will handle all the RESTful actions of the user accounts (creating, editing, deleting accounts), whereas the sessions.js controller will only handle logging in (and cookies, presumably).

// Here are some ideas for routes
// '/restaurants' => GET the index of all the restaurants (INDEX)
// '/restaurants/new' => GET the page to make a new restaurant (NEW)
// '/restaurants/new' => POST creating a new restaurant (CREATE)
// '/restaurants/:id' => GET to show the current restaurant (SHOW)
// '/restaurants/:id/edit' => GET to edit an existing restaurant (EDIT)
// '/restaurants/:id/edit' => PUT to submit an edit of an existing restaurant (UPDATE)
// '/restaurants/:id/delete' => DELETE a restaurant (DELETE)

// A similar routes system will be used for reviews and users.

const router = require('express').Router();

// Home routes

const homes = require('../controllers/homes');

router.route('/')
  .get(homes.index);

// Resource restaurants

const restaurants = require('../controllers/restaurants');

router.route('/restaurants')
  .get(restaurants.index);

router.route('/restaurants/new')
  .get(restaurants.new)
  .post(restaurants.create);

router.route('/restaurants/:id')
  .delete(restaurants.delete)
  .put(restaurants.update)
  .get(restaurants.show);

router.route('/restaurants/:id/edit')
  .get(restaurants.edit);

// Resource users

const users = require('../controllers/users');

// router.route('/users/show')
  // .get(users.show);

router.route('/users/:id')
  .put(users.update)
  .delete(users.delete)
  .get(users.show);

router.route('/users/:id/edit')
  .get(users.edit);

router.route('/users/:id/editpassword')
  .get(users.passwordUpdate)
  .post(users.passwordEdit);

router.route('/signup')
  .get(users.new)
  .post(users.create);

// Sign in

const sessions = require('../controllers/sessions');

//Resource comment

const comments = require('../controllers/comments');

router.route('/restaurants/:id/comment')
  .post(comments.create);

router.route('/restaurants/:restaurantId/comment/:commentId')
  .delete(comments.delete);

router.route('/signin')
  .get(sessions.new)
  .post(sessions.create)
  .delete(sessions.delete);

// Error handling

router.route('/*').get((req, res) => {
  req.flash('danger', 'The URL requested does not exist.');
  res.redirect('/');
})

module.exports = router;
