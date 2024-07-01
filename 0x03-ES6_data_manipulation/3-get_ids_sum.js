export default function getStudentIdsSum(array) {
  if (array instanceof Array) {
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
    return sum;
  }
  return NaN;
}
