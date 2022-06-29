const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (!ids.length) return [];
  const { species } = data;
  return species.filter((element) => ids.includes(element.id));
}
module.exports = getSpeciesByIds;
