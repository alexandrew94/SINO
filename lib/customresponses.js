function customResponses(req, res, next) {
  res.badRequest = function(url, errors) {
    req.flash('danger', errors);
    return res.redirect(url);
  }
  // res.status(200).send = function(url, messages) {
  //   req.flash('success', messages);
  //   return res.redirect(url);
  // }
  next();
}

module.exports = customResponses;
