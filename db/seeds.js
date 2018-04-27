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
    name: 'Dumpling Shack',
    description: 'Known for serving some of the best dumplings in London, Dumpling Shack attracts crowds of followers wherever they go, hungry to sample some of their signature shengjianbao, soup dumplings from Shanghai, wonton soups and noodles they have become famous for. They’ve spent 3 years perfecting their dumpling recipes, and regularly travel back to China to learn and be inspired. Spitalfields is their first permanent London residence and they cannot wait to share their latest dishes with the people of London.',
    cuisine: 'Zhejiang',
    image: ['https://oldspitalfieldsmarket.com/cms/2017/10/Dumpling-Shack.jpg', 'https://oldspitalfieldsmarket.com/cms/2017/10/Spitalfields-WEB-19.01.18-87.jpg', 'https://oldspitalfieldsmarket.com/cms/2017/10/DSC4181-2880x1920.jpg'],
    address: 'Spitalfields Market E1, Brushfield Street, Spitalfields,',
    postcode: 'E1 6AA',
    user: "5ad76a067a36b08ec0227721"
  }, {
    name: '旺记',
    description: '旺记，是英国伦敦唐人街华都街（Wardour Street）41-43号上一间著名的食肆。 旺记以价廉物美的食物和拙劣的服务而闻名，但服务人员服务态度极其恶劣，这也成为人们去旺记必经的体验之一。尽管现在服务人员的态度有所改善，但仍然不能指望在旺记可以获得优质的服务。',
    cuisine: 'Cantonese',
    image: ['http://cdn.london-insider.co.uk/wp-content/uploads/2010/01/Wong-Kei-Restaurant-outside.jpg', 'https://media-cdn.tripadvisor.com/media/photo-s/05/8e/b4/02/wong-kei.jpg'],
    address: '41-43 Wardour St',
    postcode: 'W1D 6PY',
    user: "5ad76a067a36b08ec0227722"
  }, {
    name: 'Lotus Garden',
    description: '',
    cuisine: 'Cantonese',
    image: ['http://farm6.static.flickr.com/5017/5482550943_462e5ca6b0.jpg', 'https://media-cdn.tripadvisor.com/media/photo-s/06/5b/63/72/golden-pagoda.jpg', 'https://farm9.static.flickr.com/8200/29311109020_918dcfc3ea_b.jpg'],
    address: '15A Gerrard St',
    postcode: 'W1D 6JD',
    user: "5ad5af49e9a3082bf332ab20"
  }, {
    name: 'Shu Xiangge Chinese Hot Pot',
    description: '',
    cuisine: 'Sichuan',
    image: ['https://media-cdn.tripadvisor.com/media/photo-s/0e/df/7d/d5/photo0jpg.jpg', 'https://scontent-sea1-1.cdninstagram.com/vp/0c1da79226286a285450ae4df3570be7/5AF3D297/t51.2885-15/s480x480/e35/14590997_548080402056391_2498013693011296256_n.jpg?ig_cache_key=MTM3Nzc3MTI1NDQ4MDA5ODkzNg%3D%3D.2'],
    address: '43 New Oxford Street',
    postcode: 'WC1A 1BH',
    user: "5ad5af49e9a3082bf332ab20"
  }, {
    name: 'Ma La Sichuan',
    description: 'Sichuan cuisine, is a style of Chinese cuisine originating from Sichuan province in southwestern China. It has bold flavours, particularly the pungency and spiciness resulting from liberal use of garlic and chili peppers, as well as the unique flavor of the Sichuan pepper.',
    cuisine: 'Sichuan',
    image: ['https://media-cdn.tripadvisor.com/media/photo-s/07/82/0d/16/ma-la-sichuan.jpg', 'https://media.timeout.com/images/103160937/630/472/image.jpg'],
    address: '37 Monck St, Westminster',
    postcode: 'SW1P 2BL',
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
