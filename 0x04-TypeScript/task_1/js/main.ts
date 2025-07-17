interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allows extra properties
}

interface Directors extends Teacher {
  numberOfReports: number;
}




const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

const director1: Directors = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'New York',
  numberOfReports: 5,
};
console.log(director1);


// 1. Define the function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// 2. Implement the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// 3. Test the function
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// ✅ Task 4: Define interfaces and StudentClass

// Interface for the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for the class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// The class implementation
class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// ✅ Usage example
const student1 = new StudentClass('Esther', 'Ojul');
console.log(student1.displayName());     // Output: Esther
console.log(student1.workOnHomework());  // Output: Currently working




