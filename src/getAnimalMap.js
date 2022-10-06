const data = require('../data/zoo_data');

const { species } = data;

const filtraAnimaisPorLocalizacao = () => {
  const obj = {};
  species.forEach((element) => {
    obj[element.location] = species.filter((animal) => animal.location === element.location).map(
      (location) => location.name,
    );
  });
  return obj;
};

const includeNamesFunc = () => {
  const retornoDaFunc = filtraAnimaisPorLocalizacao();
  const chavesDaFunc = Object.keys(retornoDaFunc);
  const obj = {};
  chavesDaFunc.forEach((element) => {
    obj[element] = species.filter((animal) => animal.location === element).map(
      (objDeCadaLocalizacao) => ({
        [objDeCadaLocalizacao.name]: objDeCadaLocalizacao.residents.map(
          (name) => name.name,
        ),
      }),
    );
  });
  return obj;
};

function sortedFunc() {
  const retornoDaFunc = filtraAnimaisPorLocalizacao();
  const chavesDaFunc = Object.keys(retornoDaFunc);
  const obj = {};
  chavesDaFunc.forEach((element) => {
    obj[element] = species.filter((animal) => animal.location === element).map(
      (objDeCadaLocalizacao) => ({
        [objDeCadaLocalizacao.name]: objDeCadaLocalizacao.residents.map(
          (name) => name.name,
        ).sort(),
      }),
    );
  });
  return obj;
}

function sexFunc(param) {
  const retornoDaFunc = filtraAnimaisPorLocalizacao();
  const chavesDaFunc = Object.keys(retornoDaFunc);
  const obj = {};
  chavesDaFunc.forEach((element) => {
    obj[element] = species.filter((animal) => animal.location === element).map(
      (objDeCadaLocalizacao) => ({
        [objDeCadaLocalizacao.name]: objDeCadaLocalizacao.residents.filter(
          (sex) => sex.sex === param,
        ).map((name) => name.name),
      }),
    );
  });
  return obj;
}

function sexSorted(param, test) {
  const retornoDaFunc = filtraAnimaisPorLocalizacao();
  const chavesDaFunc = Object.keys(retornoDaFunc);
  const obj = {};
  chavesDaFunc.forEach((element) => {
    obj[element] = species.filter((animal) => animal.location === element).map(
      (objDeCadaLocalizacao) => ({
        [objDeCadaLocalizacao.name]: objDeCadaLocalizacao.residents.filter(
          (sex) => sex.sex === param,
        ).map((name) => name.name).sort(),
      }),
    );
  });
  return obj;
}

const condicoes = (options) => {
  if (options.sex && options.sorted) return sexSorted(options.sex);
  if (options.sorted) return sortedFunc();
  if (options.sex) return sexFunc(options.sex);
  return includeNamesFunc();
};

function getAnimalMap(options) {
  if (!options || !options.includeNames) return filtraAnimaisPorLocalizacao();
  return condicoes(options);
}

module.exports = getAnimalMap;
