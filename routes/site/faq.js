var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('site/faq', { title: 'Frequently Asked Questions' });
});

module.exports = router;
