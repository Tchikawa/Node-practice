   var express = require('express');
   var router = express.Router();
   var http = require('https');
   var parseString = require('xml2js').parseString;
   var sqlite3 = require('sqlite3');

   //DBオブジェクトの取得
   var db = new sqlite3.Database('mydb.sqlite3');

   // DBアクセスの処理
   router.get('/', (req, res, next) => {
     // データベースのシリアライズ
     db.serialize(() => {
       // レコードを全て取り出し
       db.all('select * from mydata', (err, rows) => {
         // データベースアクセス完了時の処理
         if (!err) {
           var data = {
             title: 'Hello!',
             content: rows
           };
           res.render('hello', data);
         }
       })
     })
   });

   module.exports = router;