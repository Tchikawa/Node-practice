var express = require('express');
var ejs = require('ejs');

var app = express();

app.engine('ejs', ejs.renderFile);

app.get('/', (req, res) => {
  //レンダリング
  res.render('index_4-4.ejs', {
    title: 'INDEX',
    content: 'This is Express-app !',
  });
});

var server = app.listen(3000, () => {
  console.log('Start server port:3000');
});
