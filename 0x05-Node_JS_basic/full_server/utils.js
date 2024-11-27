#!/usr/bin/node

import fs from 'fs';

export const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      lines.shift(); // Remove the header

      const students = lines.map((line) => {
        const [firstname, lastname, age, field] = line.split(',');
        return {
          firstname, lastname, age, field,
        };
      });

      const fields = [...new Set(students.map((student) => student.field))];
      const result = {};

      fields.forEach((field) => {
        result[field] = students.filter((student) => student.field === field).map((student) => student.firstname);
      });

      resolve(result);
    }
  });
});
