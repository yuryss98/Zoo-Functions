const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function getOldestFromFirstSpecies(id) {
  const colaboradora = employees.find((element) => element.id === id);
  const primeiraEspecie = colaboradora.responsibleFor[0];
  const infosDoAnimal = species.find((specie) => specie.id === primeiraEspecie).residents;
  const ordenadosPorIdade = infosDoAnimal.sort((a, b) => a.age - b.age);
  const maisVelho = ordenadosPorIdade[ordenadosPorIdade.length - 1];
  const { name, sex, age } = maisVelho;
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
