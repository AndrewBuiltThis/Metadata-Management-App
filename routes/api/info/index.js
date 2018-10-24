var express = require('express');
var router = express.Router();

//GET API Info Page. 
router.get('/', function(req, res, next) {
	res.render('api/info/index', { title: 'Data Hub API Info' });
  });


module.exports = router;
