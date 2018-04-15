function customResponses(req, res, next) {
  res.badRequest = function(url, errors) {
    req.flash('danger', errors);
    return res.redirect(url);
  }
  res.goodRequest = function(url, messages) {
    req.flash('safety', messages);
  }
  next();
}

module.exports = customResponses;
