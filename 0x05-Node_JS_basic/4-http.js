const http = require('http');

const port = 1245;
const host = 'localhost';

const app = http.createServer();

app.on('request', (req, res) => {
  res.end('Hello Holberton School!');
}).listen(port, host, () => {
  console.log('Serving runing ...');
});

module.exports = app;
