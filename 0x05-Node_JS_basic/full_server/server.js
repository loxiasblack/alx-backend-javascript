const express = require('express');
const route = require('./routes/index')


const port = 1245;
const hostname = 'localhost';

const app = express();
app.use(express.json())
app.use(route);
app.use('/', route);

app.listen(port, hostname, () => {
    `Listening on port ${port}`;
})

module.exports = app;
