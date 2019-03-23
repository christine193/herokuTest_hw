var express = require('express');
var router = express.Router();

const data = require('../data');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: '505 Winery', message: 'expertly crafted' });
});
//get a dynamic user viw the route parameter
router.get('/:user', function (req, res, next) {
  console.log('user:', data[req.params.user]);
  res.render('userpage', data[req.params.user]);
});

module.exports = router;
