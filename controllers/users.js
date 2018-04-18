const User = require('../models/user');
const Restaurant = require('../models/restaurant');

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
      req.flash('successful', 'Sign up successful!');
      return res.redirect('/');
    })
    .catch((error) => {
      res.badRequest('signup', error.toString());
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

// function usersUpdate(req, res) {
//   User
//     .findById(req.params.id)
//     .exec()
//     .then(entry => {
//       entry = Object.assign(entry, req.body);
//       entry.save();
//       res.render('users/show', {entry})
//     })
//     // .catch((error) => {
//     //   console.log('!!!error caught!!!', error);
//     //   return res.badRequest('users/edit', 'An error occurred. Please try again');
//     // })
// }

function usersUpdate(req, res) {
  User
    .findById(req.params.id)
    .exec()
    .then(entry => {
      entry = Object.assign(entry, req.body);
      entry
        .save()
        .then(entry => {
          return res.render('users/show', {entry})
        })
        .catch(error => {
          req.flash('danger', 'Username or email is already taken.');
          return res.redirect(`/users/${entry._id}/edit`);
        })
    });
}

function usersPasswordUpdate(req, res) {
  User
    .findById(req.params.id)
    .exec()
    .then(entry => {
      return res.render('users/editPassword', {entry});
    })
}

function usersPasswordEdit(req, res) {
  User
    .findById(req.params.id)
    .exec()
    .then(entry => {
      entry = Object.assign(entry, req.body);
      entry
        .save()
        .then(entry => {
          res.render(`users/show`, {entry});
        })
        .catch(error => {
          req.flash('danger', 'Passwords do not match.');
          return res.redirect(`/users/${entry._id}/editpassword`);
        })
    })
    // .catch((error) => {
    //   console.log('PASSWORD CONFIRMATION ERROR', error)
    //   res.badRequest('users/show', error);
    // })
}

function usersShow(req, res) {
  User
    .findById(res.locals.currentUser)
    .exec()
    .then((entry) => {
      Restaurant
        .find()
        .exec()
        .then(databaseEntries => {
          res.render('users/show', {entry, databaseEntries})
        })
    })
}

module.exports = {
  index: usersIndex,
  new: usersNew,
  create: usersCreate,
  delete: usersDelete,
  edit: usersEdit,
  update: usersUpdate,
  show: usersShow,
  passwordUpdate: usersPasswordUpdate,
  passwordEdit: usersPasswordEdit
}
