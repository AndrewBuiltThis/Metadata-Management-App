var express = require('express');
var router = express.Router();

/* GET Learning page. */
router.get('/', function(req, res, next) {
  res.render('site/learn', { title: 'Learning Hub' });
});

module.exports = router;
