var express = require('express');
var router = express.Router();

/* GET Data Exploration Page. */
router.get('/', function(req, res, next) {
  res.render('site/explore', { title: 'Explore Our Data' });
});

module.exports = router;
