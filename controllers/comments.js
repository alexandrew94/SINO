const Comment = require('../models/comment');
const Restaurant = require('../models/restaurant');

function commentsCreate(req, res) {
  // Comment
  //   .create(req.body)
  //   .then(res.redirect(`/restaurants/${req.body.restaurant._id}`))
  Restaurant
    .findById(req.params.id)
    .exec()
    .then(entry => {
      // create comment
      req.body.user = res.locals.currentUser;
      // restaurant.comments.push(req.body);
      // return restaurant.save();

      Comment
        .create(req.body)
        .then(comment => {
          entry.comments.push(comment);
          return entry.save();
        })
        .then(entry => {
          // console.log('INSIDE OF THE ENTRY', entry)
          res.redirect(`/restaurants/${entry.id}`);
          // redirect to restaurant show page
        });
    })
    // .then( entry => res.render('restaurants/show', {entry}))
    // .catch(err => res.render('error', {err}));
};

function commentsDelete(req, res) {
  Restaurant
    .findById(req.params.restaurantId)
    .exec()
    .then(entry => {
      const comment = entry.comments.id(req.params.commentId);
      comment.remove();
      return entry.save();
    })
    .then(entry => res.redirect(`/restaurants/${entry._id}`));
  }

module.exports = {
  create: commentsCreate,
  delete: commentsDelete
}
