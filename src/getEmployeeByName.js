const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const { employees } = data;
  return employees.find((element) => element.firstName === employeeName
   || element.lastName === employeeName);
}

module.exports = getEmployeeByName;
