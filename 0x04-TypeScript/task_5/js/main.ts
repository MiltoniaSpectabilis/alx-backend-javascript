// Define the MajorCredits interface
export interface MajorCredits {
  credits: number;
  // Adding a unique brand property to distinguish MajorCredits
  _majorBrand: 'MajorCredits';
}

// Define the MinorCredits interface
export interface MinorCredits {
  credits: number;
  // Adding a unique brand property to distinguish MinorCredits
  _minorBrand: 'MinorCredits';
}

// Function to sum MajorCredits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _majorBrand: 'MajorCredits',
  };
}

// Function to sum MinorCredits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _minorBrand: 'MinorCredits',
  };
}

// Example usage:
const majorCourse1: MajorCredits = { credits: 3, _majorBrand: 'MajorCredits' };
const majorCourse2: MajorCredits = { credits: 4, _majorBrand: 'MajorCredits' };
const minorCourse1: MinorCredits = { credits: 1, _minorBrand: 'MinorCredits' };
const minorCourse2: MinorCredits = { credits: 2, _minorBrand: 'MinorCredits' };

console.log('Sum of Major Credits:', sumMajorCredits(majorCourse1, majorCourse2)); // 7
console.log('Sum of Minor Credits:', sumMinorCredits(minorCourse1, minorCourse2)); // 3
