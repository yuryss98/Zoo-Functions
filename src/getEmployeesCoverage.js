const data = require('../data/zoo_data');

const { employees, species } = data;

const infoDaPessoaEncontrada = (obj) => {
  const name = Object.values(obj);
  const pessoaEncontrada = employees.find((element) => element.id === name[0]
  || element.firstName === name[0] || element.lastName === name[0]);
  if (!pessoaEncontrada) {
    throw new Error('Informações inválidas');
  }
  const responsabilidade = pessoaEncontrada.responsibleFor;
  const arrSpecies = [];
  responsabilidade.forEach((element) => {
    const animais = species.find((animal) => animal.id === element).name;
    arrSpecies.push(animais);
  });
  return {
    pessoaEncontrada,
    responsabilidade,
    arrSpecies,
  };
};

const localizacaoAnimais = (obj) => {
  const test = infoDaPessoaEncontrada(obj);
  const arrLocation = [];
  test.arrSpecies.forEach((element) => {
    arrLocation.push(species.find((animal) => animal.name === element).location);
  });
  return arrLocation;
};

function infoDeTodasAsPessoas() {
  return employees.map((element) => {
    const test = infoDaPessoaEncontrada(element);
    const test2 = localizacaoAnimais(element);
    return {
      id: test.pessoaEncontrada.id,
      fullName: `${test.pessoaEncontrada.firstName} ${test.pessoaEncontrada.lastName}`,
      species: test.arrSpecies,
      locations: test2,
    };
  });
}

function getEmployeesCoverage(obj) {
  if (!obj) return infoDeTodasAsPessoas();
  const test = infoDaPessoaEncontrada(obj);
  const test2 = localizacaoAnimais(obj);
  return {
    id: test.pessoaEncontrada.id,
    fullName: `${test.pessoaEncontrada.firstName} ${test.pessoaEncontrada.lastName}`,
    species: test.arrSpecies,
    locations: test2,
  };
}

module.exports = getEmployeesCoverage;
