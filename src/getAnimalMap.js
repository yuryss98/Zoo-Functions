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
const condicoes3 = (options) => {
  if (options.includeNames) return includeNamesFunc();
};
const condicoes2 = (options) => {
  if (options.includeNames && options.sorted) return sortedFunc();
  if (options.includeNames && options.sex) return sexFunc(options.sex);
  return condicoes3(options);
};
const condicoes = (options) => {
  if (options.includeNames && options.sex && options.sorted) return sexSorted(options.sex);
  return condicoes2(options);
};

function getAnimalMap(options) {
  if (!options || !options.includeNames) return filtraAnimaisPorLocalizacao();
  return condicoes(options);
}

module.exports = getAnimalMap;
