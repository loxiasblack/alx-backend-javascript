const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  // readFile async
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      // reject if the path and throw err
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      // create an array of array of student
      const content = data.split('\n').slice(1, -1);
      const Studentperarray = content.map((line) => line.split(','));
      const numberOfstudent = Studentperarray.length;
      const studentOfCs = [];
      const studentOfSWE = [];

      // for each element create array of two types of students
      Studentperarray.forEach((student) => {
        if (student.includes('CS')) {
          studentOfCs.push(student[0]);
        } else {
          studentOfSWE.push(student[0]);
        }
      });
      const message = `Number of students: ${numberOfstudent}
Number of students in CS: ${studentOfCs.length}. List: ${studentOfCs.join(', ')}
Number of students in SWE: ${studentOfSWE.length}. List: ${studentOfSWE.join(', ')}`;
      resolve(console.log(message));
    }
  });
});
module.exports = countStudents;
