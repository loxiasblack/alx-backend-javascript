const fs = require('fs');

const countStudents = (path) => {
  try {
    // read file sync
    const data = fs.readFileSync(path, 'utf-8');
    if (!data) {
      // if not data found in the path throw an error
      throw new Error('Cannot load the database');
    }
    // create an array of student and pop the first and last row
    const mydata = data.split('\n').slice(1, -1);
    // each string will be an array of student
    const linesArr = mydata.map((line) => line.split(','));
    // display the number of student
    const NumberOfStudent = linesArr.length;
    console.log(`Number of students: ${NumberOfStudent}`);

    const nameOfCs = [];
    const nameOfSWE = [];
    linesArr.forEach((Student) => {
      if (Student.includes('SWE')) {
        nameOfSWE.push(Student[0]);
      } else {
        nameOfCs.push(Student[0]);
      }
      // display the stduent that have Cs field and there number
      console.log(`Number of students in CS: ${nameOfCs.length}. List: ${nameOfCs.join(', ')}`);
      // display the srudent that have swe field and there number
      console.log(`Number of students in SWE: ${nameOfSWE.length}. List: ${nameOfSWE.join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
