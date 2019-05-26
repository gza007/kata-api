const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('../lib/strings');


exports.hello = (req, res) => {
  res.json({ result: sayHello(req.params.string) });
};

exports.upper = (req, res) => {
  res.json({ result: uppercase(req.params.string) });
};

exports.lower = (req, res) => {
  res.json({ result: lowercase(req.params.string) });
};

exports.firstCharacters = (req, res) => {
  if (!req.query.length) {
    res.json({ result: firstCharacter(req.params.string) });
  } else {
    res.json({ result: firstCharacters(req.params.string, req.query.length) });
  }
};
