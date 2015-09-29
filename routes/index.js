var express = require('express');
var router = express.Router();
var json_db = require('../controllers/json/menu');

/* GET globals */
var glb = {
  rdir: '',
};

/* GET db items */

/* GET home page. */
router.get('/', function(req, res, next) {
  var qry = req.query;
  res.render('index', { title: 'Presentación',glb:glb, db:json_db, qr:qry, contenido:json_db.presentacion});
});
router.get('/santafe', function(req, res, next) {
  var qry = req.query;
  res.render('santafe', { title: 'Santafe',glb:glb, db:json_db, qr:qry, contenido:json_db.santafe});
});

module.exports = router;
