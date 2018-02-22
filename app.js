const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

const index_page = fs.readFileSync('./index.ejs', 'utf-8');

var server = http.createServer(getFromClient);
server.listen(3000);
console.log('server start!');

function getFromClient(req, res) {
  request = req;
  response = res;

  var content = ejs.render(index_page, {
    title : "INDEX",
    content : "これはテンプレートを使ったサンプルページです。"
  });

//  fs.readFile('./index.html', 'UTF-8', (error, data) => {
//    var content = data
//      .replace(/dummy_title/g, 'タイトル')
//      .replace(/dummy_content/g, 'コンテンツ');
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(content);
    response.end();
//  });
}
