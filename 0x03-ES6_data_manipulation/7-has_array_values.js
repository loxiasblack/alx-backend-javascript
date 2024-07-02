export default function hasValuesFromArray(set, array) {
  if (set instanceof Set && array instanceof Array) {
    const newelement = array.map((element) => set.has(element));
    const checkresult = newelement.every((result) => result);
    return checkresult;
  }
  return NaN;
}
