const data = require('../data/zoo_data');

const { hours, species } = data;

const exibicaoDoAnimal = (animal) => {
  const animalName = species.find((element) => element.name === animal);
  return animalName.availability;
};

function todosOsDiasDaSemana(param) {
  const dias = Object.keys(hours);
  const obj = {};
  dias.forEach((element) => {
    obj[element] = {
      officeHour: `Open from ${hours[element].open}am until ${hours[element].close}pm`,
      exhibition: species.filter((dia) => dia.availability.includes(element)).map(
        (dia) => dia.name,
      ),
    };
  });
  obj.Monday = { officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!' };
  return obj;
}

const exibicaoDoDia = (dia) => {
  const dias = Object.keys(hours);
  if (dias.includes(dia)) {
    const diasRetornados = todosOsDiasDaSemana();
    return {
      [dia]: diasRetornados[dia],
    };
  }
};

function getSchedule(scheduleTarget) {
  const animal = species.some((element) => element.name.includes(scheduleTarget));
  const diasSemana = Object.keys(hours);
  if (animal) {
    return exibicaoDoAnimal(scheduleTarget);
  }
  if (diasSemana.includes(scheduleTarget)) {
    return exibicaoDoDia(scheduleTarget);
  }
  return todosOsDiasDaSemana(scheduleTarget);
}

module.exports = getSchedule;
