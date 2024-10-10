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
