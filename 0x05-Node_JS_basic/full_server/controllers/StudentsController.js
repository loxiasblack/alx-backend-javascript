const  readDatabase  = require('../utils');

class StudentsController {

    static getAllStudents(request, response) {
      readDatabase('database.csv')
        .then((data) => {
            const responseParts = ['This is the list of our students'];

            for (const [field, group] of Object.entries(data)) {
                const studentNames = group.map((student) => student.firstname).join(', ');
                responseParts.push(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);

            }
            const responseText = responseParts.join('\n');
            response.status(200).type('text/plain').send(responseText);
        })
        .catch((error) => {
            console.error(error);
            response.stats(500).type('text/plain').send('Cannot load the database');
        });
    }

    static getAllStudentsByMajor(request, response) {
        const databasePath = 'database.csv';
        const major = request.params.major;
        if (major !== 'CS' && major !== 'SWE') {
          return response.status(500).type('text/plain').send('Major parameter must be CS or SWE');
        }
    
        readDatabase(databasePath)
          .then((data) => {
            if (!data[major]) {
              return response.status(500).type('text/plain').send('Major not found');
            }
    
            const studentNames = data[major].map(student => student.firstname).join(', ');
            const responseText = `List: ${studentNames}`;
            response.status(200).type('text/plain').send(responseText);
          })
          .catch((error) => {
            console.error(error);
            response.status(500).type('text/plain').send('Cannot load the database');
          });
      }
}

module.exports = StudentsController;
