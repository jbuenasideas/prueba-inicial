var express = require('express');
var router = express.Router();

const Controller = require('../controllers/Controller');

const controller = new Controller();


router.get('/', function(req, res) {
  return controller.list( req, res );
});

router.post('/', function(req, res) {
  return controller.new(req, res);
});

router.put('/', function(req, res) {
  return controller.put(req, res);
});


router.patch('/', function(req, res) {
  return controller.patch(req, res);
});


router.delete('/', function(req, res) {
  return controller.delete(req, res);
});



module.exports = router;
