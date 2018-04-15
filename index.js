// This will be fairly standard, and will have error handling.
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('express-flash');
const session = require('express-session');

const router = require('./config/routes');
const {port, dbURI} = require('./config/environment');
const customResponses = require('./lib/customresponses');

mongoose.connect(dbURI);
const Restaurant = require('./models/restaurant');
const User = require('./models/user');

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.use(express.static(`${__dirname}/static`));

app.use(morgan('dev'));
app.use(expressLayouts);

app.use(bodyParser.urlencoded({ extended: true }));
// Supporting fucking Internet Explorer
app.use(methodOverride(req => {
  if(req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}))

app.use(session({
  secret: 'hercules mulligan'
}))

app.use(flash());
app.use(customResponses);

app.use((req, res, next) => {
  if(!req.session.userId) return next();
  User
    .findById(req.session.userId)
    .then((user) => {
      res.locals.currentUser = user;
      res.locals.isLoggedIn = true;
      next();
    })
})

app.use(router);

app.listen(port, () => console.log(`Running on port${port}`));
