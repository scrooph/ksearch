var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('main/index/index', { title: 'Express' });
});
router.get('/login', function(req, res) {
  res.render('main/index/login', { title: 'Express' });
});
module.exports = router;
