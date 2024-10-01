#!/bin/bash/node

export default function createIteratorObject(report) {
  function* iterator() {
    for (const department in report.allEmployees) {
      for (const employee of report.allEmployees[department]) {
        yield employee;
      }
    }
  }

  return iterator();
}
