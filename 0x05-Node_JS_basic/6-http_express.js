const express = require('express');

// Create a server in express and assign to app
const app = express();

const port = 1245;

// Create an endpoint '/' that display the message Hello Holberton School
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});

module.exports = app;
