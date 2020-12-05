var express = require('express');
var router = express.Router();

router.use('/multer', require('./multer'));
router.use('/profile', require('./profile'));
router.use('/home', require('./home'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

