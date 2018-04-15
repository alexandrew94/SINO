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

// Resource users

const users = require('../controllers/users');

router.route('/users')
  .get(users.index);

router.route('/users/:id')
  .put(users.update)
  .delete(users.delete)
  .get(users.show);

router.route('/users/:id/edit')
  .get(users.edit);

router.route('/signup')
  .get(users.new)
  .post(users.create);

// Sign in

const sessions = require('../controllers/sessions');

router.route('/signin')
  .get(sessions.new)
  .post(sessions.create)
  .delete(sessions.delete);

module.exports = router;
