var express = require('express');
var ejs = require('ejs');

var app = express();
app.engine('ejs', ejs.renderFile);
app.use(express.static('public'));

//TOPページ
app.get('/', (req, res) => {
  var msg = 'This is Top Page!<br>これはトップページです。';
  res.render('index_4-8.ejs', {
    title: 'Top',
    content: msg,
    link: { href: '/other?name=taro&pass=yamada', text: '別のページに移動' },
  });
});

//otherページ
app.get('/other', (req, res) => {
  var msg =
    'This is other Page!<br>これは別のページです。<br>' +
    'あなたの名前は' +
    req.query.name +
    '<br>パスワードは' +
    req.query.pass;
  res.render('index_4-8.ejs', {
    title: 'other',
    content: msg,
    link: { href: '/', text: 'トップページへ戻る' },
  });
});

var server = app.listen(3000, () => {
  console.log('Server is running!');
});
