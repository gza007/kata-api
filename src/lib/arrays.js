const getNthElement = (index, array) => {
  const newIndex = index < array.length ? index : index - array.length;
  return array[newIndex];
};

const arrayToCSVString = (array) => {
  return array.join(',');
};

const csvStringToArray = (string) => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
  return array;
  // added return array to pass test in Kata-api project
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = (numbers) => {
  return numbers.map(String);
};

const uppercaseWordsInArray = (strings) => {
  return strings.map((x) => x.toUpperCase());
};

const reverseWordsInArray = (strings) => {
  return strings.map((x) => x.split('').reverse().join(''));
};

const onlyEven = (numbers) => {
  return numbers.filter((x) => (x % 2 === 0));
};

const removeNthElement2 = (index, array) => {
  const newArray = [...array];
  newArray.splice(index, 1);
  return newArray;
};

const elementsStartingWithAVowel = (strings) => {
  return strings.filter(string => /^[aeiou]/i.test(string));
};

const removeSpaces = (string) => {
  return string.replace(/\s+/g, '');
};

const sumNumbers = (numbers) => {
  return numbers.reduce((x, y) => x + y);
};

const sortByLastLetter = (strings) => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
