var express = require('express');
var router = express.Router();

//GET API Landing Page. 
router.get('/', function(req, res, next) {
  res.render('api/metadata/index', { title: 'Metadata API' });
});


/* 
router.get('/', (req, res, next)=> {
	res.send('You successfully hit the API page')
});
*/

module.exports = router;
