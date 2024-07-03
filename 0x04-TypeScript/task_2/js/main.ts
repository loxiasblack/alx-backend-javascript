interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  class Director implements DirectorInterface {
    workFromHome(): string {
      return "Working from home";
    }
  
    getCoffeeBreak(): string {
      return "Getting a coffee break";
    }
  
    workDirectorTasks(): string {
      return "Getting to director tasks";
    }
  }
  
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return "Cannot work from home";
    }
  
    getCoffeeBreak(): string {
      return "Cannot have a break";
    }
  
    workTeacherTasks(): string {
      return "Getting to work";
    }
  }

  function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  }

  
  const employee1 = createEmployee(400); 
const employee2 = createEmployee(600); 

if (employee1 instanceof Teacher) {
  console.log(employee1.workTeacherTasks()); 
} else if (employee1 instanceof Director) {
  console.log(employee1.workDirectorTasks()); 
}

if (employee2 instanceof Director) {
  console.log(employee2.workFromHome()); 
  console.log(employee2.getCoffeeBreak()); 
  console.log(employee2.workDirectorTasks()); 
}

function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}



type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  } else {
    throw new Error("Invalid class subject");
  }
}
