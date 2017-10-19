var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hey ! It\'s a GET');
});

/* GET user with ID. */
router.get('/:id(\\d+)', function(req, res, next) {
  res.send('Hey ! It\'s a GET with ID ' + req.params.id);
});

/* POST user creation. */
router.post('/', function(req, res, next) {
  res.send('Hey ! It\'s a POST');
});

/* PUT user creation. */

// Changer la RegEx pour prendre en compte les _ - et chiffres.
router.put('/:name(\[A-Z]{0,})', function(req, res, next) {
  res.send('Hey my name is ' + req.params.name);
});

/* DELETE user with ID. */
router.delete('/:id(\\d+)', function(req, res, next) {
  res.send('Hey ! It\'s a DELETE ID ' + req.params.id);
});

module.exports = router;
