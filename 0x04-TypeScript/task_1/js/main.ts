interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [propName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
};
  
const teacher3: Teacher = {
    fullTimeEmployee: false,
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

const director: Directors = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    location: "New York",
    contract: true,
    numberOfReports: 5
};

function printTeacher(firstName: string, lastName: string): string {
    const firstInitial = firstName.charAt(0).toUpperCase();
    const fullLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    return `${firstInitial}. ${fullLastName}`;
}

console.log(teacher3);
console.log(director);
console.log(printTeacher("John", "Doe"));   


interface StudentConstructor {
    firstName: string;
    lastName: string;
}
  
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    private firstName: string;
    private lastName: string;
  
    constructor({ firstName, lastName }: StudentConstructor) {
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
  

