const http = require('http');
const fs = require('fs');

var request;
var response;

const getFromClient = (req, res) => {
  request = req;
  response = res;
  fs.readFile('./index.html', 'UTF-8',writeToResponse);
}

const writeToResponse = (err, data) => {
  var content = data
  .replace(/dummy_title/g, 'タイトル')
  .replace(/dummy_content/g, 'コンテンツ');

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(content);
  response.end();
}

const server = http.createServer(getFromClient);

server.listen(3000);
console.log('Server start!');