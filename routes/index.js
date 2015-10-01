var express = require('express');
var router = express.Router();
var json_db = require('../controllers/json/DB');

/* GET home page. */
router.get('/', function(req, res, next) {
  var qry = req.query;
  res.render('presentacion', { glb:db.glb, db:json_db, qr:qry, contenido:json_db.presentacion});
});

router.get('/santafe', function(req, res, next) {
  var qry = req.query;
  res.render('internas', { glb:db.glb, db:json_db, qr:qry, contenido:json_db.santafe});
});

router.get('/biblioteca', function(req, res, next) {
  var qry = req.query;
  res.render('internas', { glb:db.glb, db:json_db, qr:qry, contenido:json_db.biblioteca});
});

router.get('/narino', function(req, res, next) {
  var qry = req.query;
  res.render('internas', { glb:db.glb, db:json_db, qr:qry, contenido:json_db.narino});
});

router.get('/santuario', function(req, res, next) {
  var qry = req.query;
  res.render('internas', { glb:db.glb, db:json_db, qr:qry, contenido:json_db.santuario});
});

router.get('/imprenta', function(req, res, next) {
  var qry = req.query;
  res.render('internas', { glb:db.glb, db:json_db, qr:qry, contenido:json_db.imprenta});
});

router.get('/derechos', function(req, res, next) {
  var qry = req.query;
  res.render('internas', { glb:db.glb, db:json_db, qr:qry, contenido:json_db.derechos});
});

router.get('/pensamiento', function(req, res, next) {
  var qry = req.query;
  res.render('internas', { glb:db.glb, db:json_db, qr:qry, contenido:json_db.pensamiento});
});

router.get('/ahora', function(req, res, next) {
  var qry = req.query;
  res.render('internas', { glb:db.glb, db:json_db, qr:qry, contenido:json_db.ahora});
});

router.get('/pruebas', function(req, res, next) {
  var qry = req.query;
  res.render('internas', { glb:db.glb, db:json_db, qr:qry, contenido:json_db.pruebas});
});

module.exports = router;
