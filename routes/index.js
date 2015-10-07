var express = require('express');
var router = express.Router();
var json_db = require('../controllers/json/DB');

/* GET home page. */
router.get('/antonio-narino-presentacion', function(req, res, next) {
  var qry = req.query;
  res.render('presentacion', { glb:db.glb, db:json_db, qr:qry, contenido:json_db.presentacion});
});

router.get('/antonio-narino-la-santafe-de-narino', function(req, res, next) {
  var qry = req.query;
  res.render('internas', { glb:db.glb, db:json_db, qr:qry, contenido:json_db.santafe});
});

router.get('/antonio-narino-la-biblioteca', function(req, res, next) {
  var qry = req.query;
  res.render('internas', { glb:db.glb, db:json_db, qr:qry, contenido:json_db.biblioteca});
});

router.get('/antonio-narino-narino-en-la-tertuluia', function(req, res, next) {
  var qry = req.query;
  res.render('internas', { glb:db.glb, db:json_db, qr:qry, contenido:json_db.narino});
});

router.get('/antonio-narino-el-santuario', function(req, res, next) {
  var qry = req.query;
  res.render('internas', { glb:db.glb, db:json_db, qr:qry, contenido:json_db.santuario});
});

router.get('/antonio-narino-la-imprenta-patriotica', function(req, res, next) {
  var qry = req.query;
  res.render('internas', { glb:db.glb, db:json_db, qr:qry, contenido:json_db.imprenta});
});

router.get('/antonio-narino-la-impresion-de-los-derechos-del-hombre', function(req, res, next) {
  var qry = req.query;
  res.render('internas', { glb:db.glb, db:json_db, qr:qry, contenido:json_db.derechos});
});

router.get('/antonio-narino-la-aventura-del-pensamiento', function(req, res, next) {
  var qry = req.query;
  res.render('internas', { glb:db.glb, db:json_db, qr:qry, contenido:json_db.pensamiento});
});

router.get('/antonio-narino-ahora-o-nunca', function(req, res, next) {
  var qry = req.query;
  res.render('internas', { glb:db.glb, db:json_db, qr:qry, contenido:json_db.ahora});
});

router.get('/pruebas', function(req, res, next) {
  var qry = req.query;
  res.render('internas', { glb:db.glb, db:json_db, qr:qry, contenido:json_db.pruebas});
});

module.exports = router;
