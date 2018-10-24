var express = require('express');
var router = express.Router();

/* GET the My Profile Page. */
router.get('/', function(req, res, next) {
  res.render('site/profile', { title: 'My Profile', user: req.connection.user });
});

module.exports = router;
