export default function hasValuesFromArray(set, array) {
  const newelement = array.map((element) => set.has(element));
  const checkresult = newelement.every((result) => result);
  return checkresult;
}
