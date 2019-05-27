const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('../lib/arrays');

exports.getNthElement = (req, res) => {
  res.status(200).json({ result: getNthElement(req.params.index, req.body.array) });
};

exports.arrayToCSVString = (req, res) => {
  res.status(200).json({ result: arrayToCSVString(req.body.array) });
};

exports.addToArray = (req, res) => {
  res.status(200).json({ result: addToArray2(req.body.value, req.body.array) });
};

exports.elementsStartingWithAVowel = (req, res) => {
  res.status(200).json({ result: elementsStartingWithAVowel(req.body.array) });
};

exports.removeNthElement = (req, res) => {
  if (req.query.index && req.body.array) {
    const a = req.query.index;
    const b = req.body.array;
    res.status(200).json({ result: removeNthElement2(a, b) });
  } else {
    res.status(200).json({ result: removeNthElement2(0, req.body.array) });
  }
};
