const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const url = require('url');

const index_page = fs.readFileSync('./index.ejs', 'utf-8');
const style_css = fs.readFileSync('./style.css', 'utf-8');

var server = http.createServer(getFromClient);
server.listen(3000);
console.log('server start!');

function getFromClient(req, res) {
  var url_parts = url.parse(req.url);
  switch (url_parts.pathname) {
    case '/':
      var content = ejs.render(index_page, {
        title: 'INDEX',
        content: 'これはテンプレートを使ったサンプルページです。',
      });
      //  fs.readFile('./index.html', 'UTF-8', (error, data) => {
      //    var content = data
      //      .replace(/dummy_title/g, 'タイトル')
      //      .replace(/dummy_content/g, 'コンテンツ');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(content);
      res.end();
      break;

    case '/style.css':
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.write(style_css);
      res.end();
      break;

    default:
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('no page...');
      break;
  }
}
//  });
