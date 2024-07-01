export default function getListStudentIds(array) {
  const newArray = [];
  if (array instanceof Array) {
    array.map((value) => newArray.push(value.id));
    return newArray;
  }
  return newArray;
}
