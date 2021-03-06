const express = require('express');
const { sayHello, uppercase } = require('./lib/strings');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

app.get('strings/upper/:string', (req, res) => {
  res.json({ result: uppercase(req.params.string) });
});


module.exports = app;
