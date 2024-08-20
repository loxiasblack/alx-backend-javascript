const fs = require('fs');
const { parse } = require('csv-parse');

function countStudents(path) {
  const data = [];
  const csField = [];
  const sweField = [];

  // Create a read stream with proper error handling
  const stream = fs.createReadStream(path)
    .pipe(parse({ delimiter: ',', from_line: 2 }));

  stream.on('error', () => {
    throw new Error('Cannot load the database');
  });

  stream.on('data', (row) => {
    data.push(row);
  });

  stream.on('end', () => {
    data.forEach((element) => {
      if (element[3] === 'CS') {
        csField.push(` ${element[0]}`);
      } else {
        sweField.push(` ${element[0]}`);
      }
    });
    console.log(`Number of students: ${data.length}`);
    console.log(`Number of students in CS: ${csField.length}. List:${csField}`);
    console.log(`Number of students in SWE: ${sweField.length}. List:${sweField}`);
  });
}

module.exports = countStudents;
