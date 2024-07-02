export default function cleanSet(set, startSring) {
  if (set instanceof Set && typeof startSring === 'string' && startSring !== '') {
    const newstring = Array.from(set)
      .filter((element) => element.startsWith(startSring))
      .map((element) => element.substring(startSring.length))
      .join('-');
    return newstring;
  }
  return '';
}
