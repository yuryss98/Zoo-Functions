const data = require('../data/zoo_data');

function countAnimals(animal) {
  const { species } = data;
  if (!animal) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  if (!animal.sex) {
    return species.find((element) => element.name === animal.specie).residents.length;
  }
  return species.find((element) => element.name === animal.specie).residents.filter(
    (element) => (element.sex === animal.sex),
  ).length;
}
module.exports = countAnimals;
