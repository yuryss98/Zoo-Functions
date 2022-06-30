const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return {
    child: entrants.filter((element) => element.age < 18).length,
    adult: entrants.filter((element) => element.age >= 18 && element.age < 50).length,
    senior: entrants.filter((element) => element.age >= 50).length,
  };
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  if (!Object.keys(entrants).length) return 0;
  const { prices } = data;
  const quantidadeDePessoas = countEntrants(entrants);
  const child = quantidadeDePessoas.child * prices.child;
  const adult = quantidadeDePessoas.adult * prices.adult;
  const senior = quantidadeDePessoas.senior * prices.senior;
  return child + adult + senior;
}

module.exports = { calculateEntry, countEntrants };
