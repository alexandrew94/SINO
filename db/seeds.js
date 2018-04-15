// During development, this will be used to seed test data into the database.

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI);

const Restaurant = require('../models/restaurant');
const User = require('../models/user');

Restaurant.collection.drop();
User.collection.drop();

Restaurant.create([{
    name: 'Pizza Union',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }, {
    name: 'Blech',
    description: 'This is a second description.'
  }, {
    name: 'Third restaurant',
    description: 'Lol whatever some description.'
  }])
  .then(databaseEntry => console.log(`${databaseEntry.length} restaurants created!`))

User.create([{
    username: 'alexandrew94',
    email: 'alexandrew94@hotmail.com',
    password: 'password'
  }, {
    username: 'stuffwhatever',
    email: 'hello@hello.com',
    password: 'hello'
  }, {
    username: 'a',
    email: 'a@a.com',
    password: 'a'
  }])
  .then(databaseEntry => console.log(`${databaseEntry.length} users created!`))

.catch(err => console.log(err))
.finally(()=> mongoose.connection.close())
