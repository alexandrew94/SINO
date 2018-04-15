function homesIndex(req, res) {
  res.render('home');
}

module.exports = {
  index: homesIndex
}
