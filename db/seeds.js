// During development, this will be used to seed test data into the database.

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI);

const Restaurant = require('../models/restaurant');
const User = require('../models/user');
const Comment = require('../models/comment');

Restaurant.collection.drop();
User.collection.drop();
Comment.collection.drop();

Restaurant.create([{
    name: 'Pizza Union',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    cuisine: 'Cantonese',
    image: ['https://fthmb.tqn.com/wpny0hfXAARYzNpvAgVuMhvITtM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/beef-and-vegetable-stir-fry-165955462-58854ce95f9b58bdb39e9209.jpg', 'https://t5dw12a2mxz42vnqk1utxqwi-wpengine.netdna-ssl.com/wp-content/uploads/sites/2/2017/12/IMG_1339.jpg', ''],
    address: 'Some Address',
    postcode: 'W1D 6PY',
    user: "5ad76a067a36b08ec0227721"
  }, {
    name: 'Blech',
    description: 'This is a second description.',
    cuisine: 'Sichuan',
    image: ['https://t5dw12a2mxz42vnqk1utxqwi-wpengine.netdna-ssl.com/wp-content/uploads/sites/2/2017/12/IMG_1339.jpg'],
    address: 'Some Address 2',
    postcode: 'NW1 2AR',
    user: "5ad76a067a36b08ec0227722"
  }, {
    name: 'Third restaurant',
    description: 'Lol whatever some description.',
    cuisine: 'Sichuan',
    image: ['https://metrouk2.files.wordpress.com/2018/01/pri_65905878.jpg?w=748&h=498&crop=1'],
    address: 'Some Address 3',
    postcode: 'E1 6EW',
    user: "5ad5af49e9a3082bf332ab20"
  }])
  .then(databaseEntry => console.log(`${databaseEntry.length} restaurants created!`))

User.create([{
    username: 'alexandrew94',
    email: 'alexandrew94@hotmail.com',
    password: 'password',
    confirm_password: 'password'
  }, {
    username: 'stuffwhatever',
    email: 'hello@hello.com',
    password: 'hello',
    confirm_password: 'hello'
  }, {
    username: 'a',
    email: 'a@a.com',
    password: 'a',
    confirm_password: 'a'
  }])
  .then(databaseEntry => console.log(`${databaseEntry.length} users created!`))

.catch(err => console.log(err))
.finally(()=> mongoose.connection.close())
