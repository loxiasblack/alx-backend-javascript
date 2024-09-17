const http = require('http');

const port = 1245;
const host = 'localhost';

const app = http.createServer((req, res) => {
  res.end('Hello Holberton School!');
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
