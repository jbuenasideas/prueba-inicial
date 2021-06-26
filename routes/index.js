var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'JH Express' });
  res.status(200).json({data:"Hola humano"});
});

module.exports = router;
