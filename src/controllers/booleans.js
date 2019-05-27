const {
  negate,
  truthiness,
  isOdd,
  startsWith,
} = require('../lib/booleans');

exports.negate = (req, res) => {
  res.status(200).json({ result: negate(req.body.value) });
};

exports.truthiness = (req, res) => {
  res.status(200).json({ result: truthiness(req.body.value) });
};

exports.isOdd = (req, res) => {
  if (isNaN(req.params.value)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  } else {
    res.status(200).json({ result: isOdd(req.params.value) });
  }
};

exports.startsWith = (req, res) => {
  if (req.params.char.length > 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  } else {
    res.status(200).json({ result: startsWith(req.params.char, req.params.string) });
  }
};
