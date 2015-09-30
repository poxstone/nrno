var express = require('express');
var router = express.Router();
var json_db = require('../controllers/json/DB');

/* GET globals */
var glb = {
  rdir: '',
};

/* GET db items */

/* GET home page. */
router.get('/', function(req, res, next) {
  var qry = req.query;
  res.render('presentacion', { title: 'Presentación',glb:db.glb, db:json_db, qr:qry, contenido:json_db.presentacion});
});
router.get('/santafe', function(req, res, next) {
  var qry = req.query;
  res.render('santafe', { title: 'Santafe',glb:db.glb, db:json_db, qr:qry, contenido:json_db.santafe});
});
router.get('/biblioteca', function(req, res, next) {
  var qry = req.query;
  res.render('biblioteca', { title: 'Biblioteca',glb:db.glb, db:json_db, qr:qry, contenido:json_db.biblioteca});
});

module.exports = router;
