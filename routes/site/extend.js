var express = require('express');
var router = express.Router();

/* GET Data Exploration Page. */
router.get('/', function(req, res, next) {
  res.render('site/extend', { title: 'Frequently Asked Questions' });
});

module.exports = router;
