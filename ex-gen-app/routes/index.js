var express = require('express');
/* ルーティングに関する機能をまとめたもの */
var router = express.Router();

/* GET home page. */
/* app.jsにロードされている = app.js内の変数も利用できる */
router.get('/', function(req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
