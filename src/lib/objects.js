const createPerson = (name, age) => {
  return { name: name, age: age };
};

const getName = (object) => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = (person) => {
  return person.age > 65 ? true : false;
};

const getAges = (people) => {
  return people.map(x => x.age);
};

const findByName = (name, people) => {
  const result = people.find(x => x.name === name);
  return result;
};

const findHondas = (cars) => {
  return cars.filter((car) => {
    return car.manufacturer === 'Honda';
  });
};

const averageAge = (people) => {
  return people.reduce((acc, next) => {
    return acc + next.age;
  }, 0) / people.length;
};

// above is Richard's method. Below is mine before feedback.
//  let getAge = (years) => {
//    return years.age;
//  }
//  let sum = (sum, years) => {
//    return sum + years;
//  }
//  let totalAge = people.map(getAge).reduce(sum);
//    return (totalAge / (people.map(getAge).length));
// };

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce: (strangersName) => {
      return `Hi ${strangersName}, my name is ${name} and I am ${age}!`;
    },
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson,
};
