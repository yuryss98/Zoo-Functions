const data = require('../data/zoo_data');

function isManager(id) {
  const { employees } = data;
  return employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const { employees } = data;
  const verifyIsManager = isManager(managerId);
  if (verifyIsManager) {
    return employees.filter((element) => element.managers.includes(managerId)).map(
      (element) => `${element.firstName} ${element.lastName}`,
    );
  }
  if (!verifyIsManager) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}

module.exports = { isManager, getRelatedEmployees };
