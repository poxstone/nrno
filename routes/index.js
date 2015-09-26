var express = require('express');
var router = express.Router();
var json_db = require('../controllers/json/menu');

/* GET globals */
var glb = {
  rdir : ''
};

/* GET db items */

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Presentación',glb: glb, db: json_db });
});

module.exports = router;
