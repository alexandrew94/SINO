const User = require('../models/user');

function usersIndex(req, res) {
  User
    .find()
    .exec()
    .then((databaseEntries) => {
      res.render('users/index', {databaseEntries});
    })
}

function usersNew(req, res) {
  res.render('signup/index');
}

function usersCreate(req, res) {
  User
    .create(req.body)
    .then((user) => {
      req.session.userId = user._id;
      return res.redirect('users');
    })
    .catch((error) => {
      res.badRequest('signup', 'Username or email already taken');
      // User
      //   .findOne({username: req.body.username})
      //   .exec()
      //   .then(() => {
      //     console.log('Username already taken');
      //     res.badRequest('signup', 'Wrong Credentials');
      //   })
      // User
      //   .findOne({email: req.body.email})
      //   .exec()
      //   .then(() => {
      //     console.log('Email already taken');
      //     res.badRequest('signup', 'Wrong Credentials');
      //   })
      // res.redirect('signup');
    })
}

function usersDelete(req, res) {
  User
    .findById(req.params.id)
    .exec()
    .then((entry) => {
      entry.remove();
      return req.session.regenerate(() => res.redirect('/'))
    })
}

function usersEdit(req, res) {
  User
    .findById(req.params.id)
    .exec()
    .then((entry) => res.render('users/edit', {entry}))
}

function usersUpdate(req, res) {
  User
    .findById(req.params.id)
    .exec()
    .then(entry => {
      entry = Object.assign(entry, req.body);
      return entry.save()
    })
    .then(entry => res.render('users/show', {entry}))
}

function usersShow(req, res) {
  User
    .findById(req.params.id)
    .exec()
    .then(entry => res.render('users/show', {entry}))
}

module.exports = {
  index: usersIndex,
  new: usersNew,
  create: usersCreate,
  delete: usersDelete,
  edit: usersEdit,
  update: usersUpdate,
  show: usersShow
}
