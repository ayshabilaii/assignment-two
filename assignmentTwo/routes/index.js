var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
/*
MVC --> Model View Controller 
model --> to connect our logic 
view --> what we see, the pages 
controller --> logic the logic behind our routes
*/