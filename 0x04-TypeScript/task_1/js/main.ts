// Define the Teacher interface with index signatures for additional properties
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allows for additional properties like `contract`
}

// Example usage:
const teacher3: Teacher = {
  firstName: "Joseph",
  lastName: "Jacotot",
  fullTimeEmployee: false,
  location: "France",
  contract: false,
};

console.log(teacher3);

// Define the Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage
const director1: Directors = {
  firstName: "Jacques",
  lastName: "Ranciere",
  location: "France",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Define the printTeacherFunction interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // J. Doe

// Define the interface for the constructor
interface StudentClassConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

// Define the interface for the class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the StudentClass
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass("John", "Doe");
console.log(student.displayName()); // John
console.log(student.workOnHomework()); // Currently working
