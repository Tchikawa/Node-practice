var express = require('express');
var ejs = require('ejs');

var app = express();
app.engine('ejs', ejs.renderFile);
app.use(express.static('public'));

var data = {
  Taro: 'taro@yamada',
  Hanako: 'hanako@flower',
  Sachiko: 'sachico@happy',
  Ichiro: 'ichiro@baseball',
};

var bodyParser = require('body-parser'); //★追加
app.use(bodyParser.urlencoded({ extended: false })); //★追加

app.get('/', (req, res) => {
  var msg = 'This is Index Page!<br>' + '※メッセージを書いて送信して下さい。';
  res.render('index_4-14.ejs', {
    title: 'Index',
    content: msg,
    data: data,
  });
});

// ※POST送信の処理
app.post('/', (req, res) => {
  var msg =
    'This is Posted Page!<br>' +
    'あなたは「<b>' +
    req.body.message +
    '</b>」と送信しました。';
  res.render('index_4-11.ejs', {
    title: 'Posted',
    content: msg,
  });
});

var server = app.listen(3000, () => {
  console.log('Server is running!');
});
