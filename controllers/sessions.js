const User = require('../models/user');

function sessionsNew(req, res) {
  res.render('signins/index');
}

function sessionsCreate(req, res) {
  User
    .findOne({ username: req.body.username })
    .exec()
    .then((user) => {
      if (!user.validatePassword(req.body.password)) {
        return res.badRequest('signin', 'Wrong Credentials');
      }
      req.session.userId = user._id;
      return res.redirect('/');
    })
    .catch((error) => {
      return res.badRequest('signin', 'Wrong Credentials');
    })
}

function sessionsDelete(req, res) {
  return req.session.regenerate(() => res.redirect('/'));
}

module.exports = {
  new: sessionsNew,
  create: sessionsCreate,
  delete: sessionsDelete
}
