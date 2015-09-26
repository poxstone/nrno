var express = require('express');
var router = express.Router();

glb = {
  rdir : '',
  other : 'adios'
};
db = {};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',glb: glb,db: db });
});

module.exports = router;
