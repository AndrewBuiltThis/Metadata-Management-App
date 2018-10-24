var express = require('express');
var router = express.Router();

/* GET Catalog page. */
router.get('/', function(req, res, next) {
  res.render('site/catalog', { title: 'Catalog Your Data'});
  next();
});

module.exports = router;
