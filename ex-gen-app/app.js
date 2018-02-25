//必要なモジュールのロード
//express本体
var express = require('express');
//ファイルパスを扱うためのモジュール
var path = require('path');
//favicon利用のモジュール
var favicon = require('serve-favicon');
//httpリクエストのlog出力に関するモジュール
var logger = require('morgan');
//クッキーのパースに関するモジュール
var cookieParser = require('cookie-parser');
//送信データをパース処理
var bodyParser = require('body-parser');
//ルート用スクリプトのロード
var index = require('./routes/index');
var users = require('./routes/users');
var hello = require('./routes/hello');

var app = express();

// view engine setup
//views:テンプレートファイルが保管される場所
//views engine:テンプレートエンジンの種類
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//アプリケーションにアクセスした際に実行される関数を設定
//基本的な処理が行われるようになってる
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//'/'にindex、'/users'にusersを割り当て
app.use('/', index);
app.use('/users', users);
app.use('/hello', hello);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//外部からのアクセス用
module.exports = app;
