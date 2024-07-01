export default function getStudentsByLocation(array, city) {
  const newArray = array.filter((array) => array.location === city);
  return newArray;
}
