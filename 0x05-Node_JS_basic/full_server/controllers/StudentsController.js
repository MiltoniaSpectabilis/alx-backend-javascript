#!/usr/bin/node

import { readDatabase } from '../utils';

class StudentsController {
  static getAllStudents(response) {
    readDatabase(process.argv[2])
      .then((data) => {
        let allStudents = 'This is the list of our students\n';
        const fields = Object.keys(data).sort();
        fields.forEach((field) => {
          allStudents += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
        });
        response.status(200).send(allStudents.trim());
      })
      .catch((error) => {
        response.status(500).send(error.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(process.argv[2])
      .then((data) => {
        const students = data[major] || [];
        response.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch((error) => {
        response.status(500).send(error.message);
      });
  }
}

export default StudentsController;
