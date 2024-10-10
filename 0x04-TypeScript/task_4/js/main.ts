import { Cpp } from './Cpp';
import { Java } from './Java';
import { React } from './React';
import { Teacher } from './Teacher';

// Create and export constants for Cpp, Java, and React subjects
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Create and export a Teacher object with experienceTeachingC = 10
export const cTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

// C++ subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React subject
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
