export default function createReportObject(employeesList) {
  const allEmployees = { allEmployees: employeesList };
  allEmployees.getNumberOfDepartments = () => Object.keys(allEmployees).length;
  return allEmployees;
}
