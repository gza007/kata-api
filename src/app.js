const express = require('express');
const stringsRouter = require('./routes/strings');
const numbersRouter = require('./routes/numbers');
const arraysRouter = require('./routes/arrays');
const booleansRouter = require('./routes/booleans');

const app = express();

app.use(express.json());
app.use('/strings', stringsRouter);
app.use('/numbers', numbersRouter);
app.use('/arrays', arraysRouter);
app.use('/booleans', booleansRouter);

module.exports = app;
