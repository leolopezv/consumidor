var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/edificios', async function(req, res, next) {
  const URL = 'http://localhost:3000/rest/edificios/findAll/json';
  const response = await axios.get(URL);
  res.render('edificios', { title: 'edificios', edificios: response.data });
});

router.get('/edificios/add', function(req, res, next) {
  res.render('edificios_adicion', { title: 'Agregar edificios' });
});

module.exports = router;
