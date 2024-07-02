export default function createInt8TypedArray(lenght, position, value) {
  const arraybuf = new ArrayBuffer(lenght);
  const dataview = new DataView(arraybuf);

  if (position < 0 || position >= lenght) {
    throw new Error('Position outside range');
  }

  dataview.setInt8(position, value);

  return dataview;
}
