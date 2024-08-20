const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file content synchronously
    const data = fs.readFileSync(path, 'utf8');
    
    // Split the content into lines and remove any empty lines
    const lines = data.trim().split('\n').filter((line) => line);

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    // Extract header (first line) and process student records
    const header = lines.shift();
    const students = lines.map((line) => line.split(','));

    const csStudents = [];
    const sweStudents = [];

    students.forEach((student) => {
      const [firstname, , , field] = student;
      if (field === 'CS') {
        csStudents.push(firstname);
      } else if (field === 'SWE') {
        sweStudents.push(firstname);
      }
    });

    // Log the results
    console.log(`Number of students: ${students.length}`);
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);

  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
